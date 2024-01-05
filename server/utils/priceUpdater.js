const fs = require('fs');
const stocksDataFile = 'data/stocksData.json';

function updateStockPrices() {
    setInterval(() => {
        const stocksData = JSON.parse(fs.readFileSync(stocksDataFile, 'utf-8'));
        stocksData.forEach(stock => {
            stock.price = Math.random() * 1000;
        });
        fs.writeFileSync(stocksDataFile, JSON.stringify(stocksData, null, 2));
    }, 1000);
}

updateStockPrices();
