import React from 'react';
import styles from './ContentModeration.module.css';

const AnalyticsDashboard: React.FC = () => {
  return (
    <div className={styles.dashboardContainer}>
      <h2>Analytics Dashboard</h2>
      
      <div className={styles.metricsGrid}>
        <div className={styles.metricCard}>
          <h3>Total Users</h3>
          <div className={styles.metricValue}>--</div>
        </div>
        
        <div className={styles.metricCard}>
          <h3>Active Subscriptions</h3>
          <div className={styles.metricValue}>--</div>
        </div>
      </div>

      <div className={styles.chartPlaceholder}>
        <h3>User Growth</h3>
        <div className={styles.chartContainer}>
          [Bar chart placeholder]
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;