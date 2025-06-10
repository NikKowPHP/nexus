import React from 'react';
import styles from './Card.module.css';

interface CardProps {
  header?: React.ReactNode;
  body: React.ReactNode;
  footer?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ header, body, footer }) => {
  return (
    <div className={styles.card}>
      {header && <div className={styles.header}>{header}</div>}
      <div className={styles.body}>{body}</div>
      {footer && <div className={styles.footer}>{footer}</div>}
    </div>
  );
};

export default Card;