import React from 'react';
import styles from './TabBar.module.css';

interface Tab {
  label: string;
  icon?: string;
}

interface TabBarProps {
  tabs?: Tab[];
  activeTab?: string;
  onTabChange?: (tab: string) => void;
}

const TabBar: React.FC<TabBarProps> = ({ tabs = [], activeTab, onTabChange }) => {
  return (
    <div className={styles.tabBar}>
      {tabs.map((tab, index) => (
        <div
          key={index}
          className={`${styles.tab} ${activeTab === tab.label ? styles.active : ''}`}
          onClick={() => onTabChange?.(tab.label)}
        >
          {tab.icon && <span className={styles.icon}>{tab.icon}</span>}
          <span className={styles.label}>{tab.label}</span>
        </div>
      ))}
    </div>
  );
};

export default TabBar;