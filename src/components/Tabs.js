import React, { useState } from 'react';

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div>
      <div className="tab-list">
        {tabs.map((tab, index) => (
          <ul>

            <li key={index === activeTab ? 'active' : ''} 
            onClick={() => handleTabClick(index)}>
                {tab.title}
            </li>
            
          </ul>
        ))}
      </div>
      <div className="tab-content">
        {tabs[activeTab].content}
      </div>
    </div>
  );
};

export default Tabs;