// API Route: /api/get-proposal
// Função serverless que busca dados do Hablla sem CORS

export default async function handler(req, res) {
  // Habilitar CORS para nosso domínio
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  try {
    // Pegar token da query string
    const { token } = req.query;

    if (!token) {
      return res.status(400).json({ error: 'Token não fornecido' });
    }

    // Decodificar token para pegar o ID
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      Buffer.from(base64, 'base64')
        .toString('utf-8')
        .split('')
        .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    );
    const tokenData = JSON.parse(jsonPayload);

    if (!tokenData.id) {
      return res.status(400).json({ error: 'Token inválido - ID não encontrado' });
    }

    // Fazer requisição para API do Hablla
    const habllaUrl = `https://api.hablla.com/quotation/${tokenData.id}?token=${token}`;
    
    console.log('Fetching from Hablla:', habllaUrl);

    const response = await fetch(habllaUrl, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      console.error('Hablla API error:', response.status, response.statusText);
      return res.status(response.status).json({ 
        error: 'Erro ao buscar dados do Hablla',
        status: response.status,
        statusText: response.statusText
      });
    }

    const data = await response.json();
    
    console.log('Data received from Hablla');

    // Retornar dados
    return res.status(200).json(data);

  } catch (error) {
    console.error('Server error:', error);
    return res.status(500).json({ 
      error: 'Erro interno do servidor',
      message: error.message 
    });
  }
}
