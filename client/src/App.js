import React, { useState } from 'react';
import StockList from './components/StockList';

const App = () => {
  const [numberOfStocks, setNumberOfStocks] = useState("");

  return (
    <div className="App flex flex-col items-center pt-5 pb-8">
      <h1 className="text-4xl font-bold my-8 text-gray-800">Stock Price Tracker</h1>
      <label className="block mb-2 text-lg text-gray-700" htmlFor="numberOfStocks">
        Number of Stocks:
      </label>
      <input
        id="numberOfStocks"
        placeholder='Between 1 and 20'
        className="border p-2 mb-2 w-64 md:w-48 shadow-sm outline-gray-300"
        value={numberOfStocks}
        onChange={(e) => setNumberOfStocks(e.target.value)}
      />
      <StockList numberOfStocks={numberOfStocks} />
    </div>
  );
};

export default App;
