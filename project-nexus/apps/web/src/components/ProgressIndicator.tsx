import React from 'react';
import styles from './ProgressIndicator.module.css';

interface ProgressIndicatorProps {
  percentage?: number;
  size?: 'small' | 'medium' | 'large';
}

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({ percentage = 0, size = 'medium' }) => {
  return (
    <div className={`${styles.indicator} ${styles[size]}`}>
      <div
        className={styles.bar}
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};

export default ProgressIndicator;