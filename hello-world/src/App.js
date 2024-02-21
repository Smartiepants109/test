import React, { useState } from 'react';
import Tabs from './Tabs';
import CardList from './CardList';
import quotesData from './quotesData';
import './styles.css'

const App = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(-1);

  const handleTabChange = (index) => {
    setSelectedTab(index);
    setSelectedCategoryIndex(-1); 
  };

  const handleCategoryChange = (index) => {
    setSelectedCategoryIndex(index);
  };

  return (
    <div className="app">
      <Tabs
        selectedTab={selectedTab}
        onTabChange={handleTabChange}
      />
      <CardList
        quotes={quotesData[selectedTab]}
        selectedCategoryIndex={selectedCategoryIndex}
        onCategoryChange={handleCategoryChange}
      />
    </div>
  );
};

export default App;
