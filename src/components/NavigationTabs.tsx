import React from 'react';
import { Tabs, Tab } from '@mui/material';

const NavigationTabs: React.FC = () => {
    return (
        <Tabs>
            <Tab label="IPO" />
            <Tab label="Loan" />
            <Tab label="News" />
            <Tab label="More" />
        </Tabs>
    );
};

export default NavigationTabs;
