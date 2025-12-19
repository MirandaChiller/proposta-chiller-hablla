// api/approve.js - Vercel Serverless Function

export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      error: 'Method not allowed. Use POST.'
    });
  }

  try {
    const { workspaceId, quotationId, token } = req.body;

    // Validate
    if (!workspaceId || !quotationId || !token) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields: workspaceId, quotationId, token'
      });
    }

    console.log('Recebido:', { workspaceId, quotationId });

    // Testar múltiplos endpoints
    const endpoints = [
      `https://api.hablla.com/v1/quotation/${quotationId}`,
      `https://api.hablla.com/v1/workspaces/${workspaceId}/quotations/${quotationId}`,
      `https://api.hablla.com/v1/workspaces/${workspaceId}/quotation/${quotationId}`
    ];

    let habllaResponse;
    let successEndpoint;

    for (const endpoint of endpoints) {
      console.log(`Tentando endpoint: ${endpoint}`);
      
      const testResponse = await fetch(endpoint, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          status: 'approved'
        })
      });

      console.log(`Resultado: ${testResponse.status}`);

      if (testResponse.status !== 404) {
        habllaResponse = testResponse;
        successEndpoint = endpoint;
        console.log(`✓ Endpoint correto: ${endpoint}`);
        break;
      }
    }

    if (!habllaResponse) {
      return res.status(404).json({
        success: false,
        error: 'Nenhum endpoint válido encontrado',
        testedEndpoints: endpoints
      });
    }

    const responseData = await habllaResponse.json();

    console.log('Resposta da API:', responseData);

    return res.status(habllaResponse.status).json({
      success: habllaResponse.ok,
      data: responseData,
      endpoint: successEndpoint
    });

  } catch (error) {
    console.error('Erro no proxy:', error);
    return res.status(500).json({
      success: false,
      error: error.message
    });
  }
}
