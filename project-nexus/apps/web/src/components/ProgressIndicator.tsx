import React from 'react';
import styles from './ProgressIndicator.module.css';

interface ProgressIndicatorProps {
  percentage: number;
}

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({ percentage }) => {
  return (
    <div className={styles.container}>
      <div
        className={styles.bar}
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};

export default ProgressIndicator;