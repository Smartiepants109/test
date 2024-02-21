import React from 'react';

const Tabs = ({ selectedTab, onTabChange }) => {
  return (
    <div className="tabs">
      <button
        className={selectedTab === 0 ? 'active' : ''}
        onClick={() => onTabChange(0)}
      >
        Star Wars
      </button>
      <button
        className={selectedTab === 1 ? 'active' : ''}
        onClick={() => onTabChange(1)}
      >
        Pirates (of the Caribbean)
      </button>
      <button
        className={selectedTab === 2 ? 'active' : ''}
        onClick={() => onTabChange(2)}
      >
        Avatar
      </button>
    </div>
  );
};

export default Tabs;
