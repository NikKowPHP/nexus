import React, { ReactNode } from 'react';
import styles from './Card.module.css';

// ROO-AUDIT-TAG :: 2.1_ui_component_library.md :: Create Card Component
interface CardProps {
  header?: ReactNode;
  body?: ReactNode;
  footer?: ReactNode;
  className?: string;
}
// ROO-AUDIT-TAG :: 2.1_ui_component_library.md :: END

const Card: React.FC<CardProps> = ({ header, body, footer, className }) => {
  return (
    <div className={`${styles.card} ${className || ''}`} data-testid="card">
      {header && <div className={styles.header}>{header}</div>}
      {body && <div className={styles.body}>{body}</div>}
      {footer && <div className={styles.footer}>{footer}</div>}
    </div>
  );
};

export default Card;