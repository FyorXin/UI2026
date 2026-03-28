import React from 'react';
const StockList = () => {
    const stocks = [
        { id: 1, symbol: 'AAPL', name: 'Apple', price: 150.25, change: 2.5 },
        { id: 2, symbol: 'GOOGL', name: 'Google', price: 140.50, change: -1.2 }
    ];
    return (
        <div className="stock-list">
            <h2>Stock List</h2>
            <ul>{stocks.map(stock => (
                <li key={stock.id}>{stock.symbol} - {stock.name}: ${stock.price} ({stock.change}%)</li>
            ))}</ul>
        </div>
    );
};
export default StockList;