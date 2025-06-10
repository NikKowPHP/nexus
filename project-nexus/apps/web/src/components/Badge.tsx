import React from 'react';
import styles from './Badge.module.css';

interface BadgeProps {
  text?: string;
  icon?: string;
  color?: string;
}

const Badge: React.FC<BadgeProps> = ({ text = '', icon, color }) => {
  return (
    <span
      className={styles.badge}
      style={{ backgroundColor: color || '#ccc', color: '#fff' }}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      {text && <span className={styles.text}>{text}</span>}
    </span>
  );
};

export default Badge;