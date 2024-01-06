const fs = require('fs');
const axios = require('axios');
require('dotenv').config();

const stocksDataFile = 'data/stocksData.json';

async function fetchStockData() {
    try {
        const response = await axios.get(`https://api.polygon.io/v3/reference/tickers?limit=20&apiKey=${process.env.POLYGON_API_KEY}`);

        if (!response.data || !response.data.results || !Array.isArray(response.data.results)) {
            throw new Error('Invalid response from Polygon API');
        }

        return response.data.results;
    } catch (error) {
        console.error('Error fetching stock data:', error.message);
        throw error;
    }
}

async function initializeData() {
    try {
        const stocks = await fetchStockData();
        const stocksWithRefreshInterval = stocks.map((stock, index) => ({
            symbol: stock.ticker,
            refreshInterval: Math.floor(Math.random() * (5 - 1 + 1)) + 1,
            price: Math.random() * 1000,
            id: index + 1,
        }));
        fs.writeFileSync(stocksDataFile, JSON.stringify(stocksWithRefreshInterval, null, 2));
    } catch (error) {
        console.error('Error initializing data:', error.message);
    }
}
initializeData();
