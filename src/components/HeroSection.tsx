import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="market-signal">
        <h2>Market Signal</h2>
        <p>Latest market updates and signals will be displayed here.</p>
      </div>
      <div className="stock-card">
        <h3>Stock Card</h3>
        <p>Stock information will be displayed here.</p>
      </div>
    </div>
  );
};

export default HeroSection;