const fs = require('fs');
const stocksDataFile = 'data/stocksData.json';

exports.getStockPrices = (req, res) => {
    try {
        const stocksData = JSON.parse(fs.readFileSync(stocksDataFile, 'utf-8'));
        const n = parseInt(req.query.n, 10);
        if (isNaN(n) || n <= 0) {
            return res.status(400).json({ error: 'Invalid value for number of stocks (n)' });
        }
        const selectedStocks = stocksData.slice(0, n);
        res.json(selectedStocks);
    } catch (error) {
        console.error('Error fetching stock prices:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
