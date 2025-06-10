import React from 'react';
import styles from './Badge.module.css';

interface BadgeProps {
  text: string;
  size?: 'small' | 'medium' | 'large';
}

const Badge: React.FC<BadgeProps> = ({ text, size = 'medium' }) => {
  return (
    <div className={`${styles.badge} ${styles[size]}`}>
      {text}
    </div>
  );
};

export default Badge;