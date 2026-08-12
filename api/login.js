const GAS_URL = 'https://script.google.com/macros/s/AKfycbwk55NLa7X08I8G4HHY0w2Jo_HdHA0dRtzIk7p1E3mZmmJPwfWAo5Wd_LIjsr2X8tsccQ/exec';

export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    const { u, p } = req.query;

    if (!u || !p) {
        return res.status(400).json({ success: false, error: 'Faltan credenciales' });
    }

    try {
        const url = `${GAS_URL}?action=validateLogin&u=${encodeURIComponent(u)}&p=${encodeURIComponent(p)}`;
        const response = await fetch(url, { redirect: 'follow' });
        const data = await response.json();
        return res.json(data);
    } catch (error) {
        return res.status(500).json({ success: false, error: error.message });
    }
}
