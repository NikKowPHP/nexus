// ROO-AUDIT-TAG :: 2.1_ui_component_library.md :: Create Badge Component
import React from 'react';
import styles from './Badge.module.css';

type BadgeVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger';

interface BadgeProps {
  text?: string;
  icon?: string;
  variant?: BadgeVariant;
}

const Badge: React.FC<BadgeProps> = ({ text = '', icon, variant = 'primary' }) => {
  return (
    <span className={`${styles.badge} ${styles[variant]}`}>
      {icon && <span className={styles.icon}>{icon}</span>}
      {text && <span className={styles.text}>{text}</span>}
    </span>
  );
};
// ROO-AUDIT-TAG :: 2.1_ui_component_library.md :: END

export default Badge;