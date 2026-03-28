import React from 'react';

interface StockCardProps {
    stockPrice: number;
    percentageChange: number;
}

const StockCard: React.FC<StockCardProps> = ({ stockPrice, percentageChange }) => {
    const isPositive = percentageChange >= 0;
    const percentageChangeClass = isPositive ? 'positive' : 'negative';

    return (
        <div className="stock-card">
            <h2>Stock Price</h2>
            <p>{stockPrice.toFixed(2)} USD</p>
            <p className={percentageChangeClass}>
                {isPositive ? '+' : ''}{percentageChange.toFixed(2)}%
            </p>
        </div>
    );
};

export default StockCard;
