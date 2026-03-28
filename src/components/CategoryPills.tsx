import React, { useState } from 'react';

const categories = ['Category 1', 'Category 2', 'Category 3', 'Category 4']; // Add your categories here

const CategoryPills: React.FC = () => {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

    const toggleCategory = (category: string) => {
        setSelectedCategories(prevSelected => 
            prevSelected.includes(category) ?
                prevSelected.filter(c => c !== category) :
                [...prevSelected, category]
        );
    };

    return (
        <div>
            {categories.map(category => (
                <span key={category} 
                      onClick={() => toggleCategory(category)} 
                      style={{
                          cursor: 'pointer',
                          padding: '10px',
                          margin: '5px',
                          borderRadius: '5px',
                          backgroundColor: selectedCategories.includes(category) ? '#007bff' : '#e9ecef',
                          color: selectedCategories.includes(category) ? 'white' : 'black',
                      }}>
                    {category}
                </span>
            ))}
        </div>
    );
};

export default CategoryPills;
