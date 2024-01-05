import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StockList = ({ numberOfStocks }) => {
    const [stocks, setStocks] = useState([]);

    useEffect(() => {
        const fetchStocks = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/api/stocks?n=${numberOfStocks}`);
                setStocks(response.data);
            } catch (error) {
                console.error('Error fetching stock data:', error.message);
            }
        };

        fetchStocks();

        const intervalId = setInterval(fetchStocks, 1000);

        return () => clearInterval(intervalId);
    }, [numberOfStocks]);

    return (
        <div className="container mx-auto mt-8">
            <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">Stock List</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center justify-center">
                {stocks.map((stock) => (
                    <div key={stock.id} className="border p-4 shadow-lg mb-6 md:mb-0 md:hover:shadow-xl transition duration-300 mx-5 md:mx-0 md:w-auto bg-white rounded-md">
                        <h2 className="text-xl font-bold mb-2 text-indigo-600">{stock.symbol}</h2>
                        <p className="text-gray-700">Price: ${stock.price.toFixed(2)}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StockList;
