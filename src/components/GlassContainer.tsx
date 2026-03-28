import React from 'react';
import './GlassContainer.css';

const GlassContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="glass-container">
            {children}
        </div>
    );
};

export default GlassContainer;