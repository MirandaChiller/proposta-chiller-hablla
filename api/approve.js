// Vercel Serverless Function - Proxy para aprovação de propostas
// Este backend proxy resolve o problema de CORS

export default async function handler(req, res) {
    // Permitir CORS do próprio domínio
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    // Handle preflight
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    // Apenas POST permitido
    if (req.method !== 'POST') {
        return res.status(405).json({ 
            success: false, 
            error: 'Method not allowed. Use POST.' 
        });
    }

    try {
        // Extrair dados do body
        const { workspaceId, quotationId, token } = req.body;

        // Validar dados
        if (!workspaceId || !quotationId || !token) {
            return res.status(400).json({
                success: false,
                error: 'Missing required fields: workspaceId, quotationId, token'
            });
        }

        console.log('Aprovando proposta via backend proxy:', {
            workspaceId,
            quotationId
        });

        // Tentar múltiplos endpoints possíveis até encontrar o correto
        const endpoints = [
            `https://api.hablla.com/v1/quotation/${quotationId}`,
            `https://api.hablla.com/v1/workspaces/${workspaceId}/quotations/${quotationId}`,
            `https://api.hablla.com/v1/workspaces/${workspaceId}/quotation/${quotationId}`,
        ];

        let habllaResponse = null;
        let successEndpoint = null;

        for (const endpoint of endpoints) {
            console.log(`Tentando endpoint: ${endpoint}`);
            
            const testResponse = await fetch(endpoint, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ status: 'approved' })
            });

            console.log(`Resultado: ${testResponse.status}`);

            // Se não for 404, achamos o endpoint correto
            if (testResponse.status !== 404) {
                habllaResponse = testResponse;
                successEndpoint = endpoint;
                console.log(`✓ Endpoint correto: ${endpoint}`);
                break;
            }
        }

        // Se todos deram 404
        if (!habllaResponse || habllaResponse.status === 404) {
            return res.status(404).json({
                success: false,
                error: 'Nenhum endpoint válido encontrado. Verifique a documentação da API Hablla.',
                testedEndpoints: endpoints
            });
        }

        console.log('Hablla API response status:', habllaResponse.status);

        // Processar resposta
        if (habllaResponse.ok) {
            const data = await habllaResponse.json();
            return res.status(200).json({
                success: true,
                data: data
            });
        } else {
            // Erro da API Hablla
            let errorData;
            try {
                errorData = await habllaResponse.json();
            } catch (e) {
                errorData = { message: habllaResponse.statusText };
            }

            console.error('Hablla API error:', {
                status: habllaResponse.status,
                errorData
            });

            return res.status(habllaResponse.status).json({
                success: false,
                error: errorData.message || `API Error: ${habllaResponse.status}`,
                details: errorData
            });
        }

    } catch (error) {
        console.error('Erro no proxy de aprovação:', error);
        
        return res.status(500).json({
            success: false,
            error: 'Internal server error',
            message: error.message
        });
    }
}
