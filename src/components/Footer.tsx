import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer>
            <p>© {new Date().getFullYear()} FyorXin. All rights reserved.</p>
            <p>Current Date and Time (UTC): 2026-03-28 06:46:08</p>
        </footer>
    );
};

export default Footer;