import React, { useState } from 'react';
import styles from './TabBar.module.css';

interface Tab {
  label: string;
  content: React.ReactNode;
}

interface TabBarProps {
  tabs: Tab[];
}

const TabBar: React.FC<TabBarProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div className={styles.tabHeader}>
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`${styles.tab} ${activeTab === index ? styles.active : ''}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </div>
        ))}
        <div className={styles.indicator} style={{ left: `${activeTab * 100}%` }} />
      </div>
      <div className={styles.tabContent}>{tabs[activeTab].content}</div>
    </div>
  );
};

export default TabBar;