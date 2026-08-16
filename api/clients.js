const GAS_URL = 'https://script.google.com/macros/s/AKfycbw_zkZdPZyvsze4Yp_mXzaVPJtTc3b6dcLVT8HT64cbdFzA79hZIq2xOo9u6eehl2fwtg/exec';

export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    try {
        const url = `${GAS_URL}?action=getClients`;
        const response = await fetch(url, { redirect: 'follow' });
        const data = await response.json();
        return res.json(data);
    } catch (error) {
        return res.status(500).json({ success: false, error: error.message });
    }
}
