// ROO-AUDIT-TAG :: 2.1_ui_component_library.md :: Create Button Component
import React from 'react';
import styles from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  label?: string;
}
// ROO-AUDIT-TAG :: 2.1_ui_component_library.md :: END

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  disabled = false,
  label,
  ...props
}) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${disabled ? styles.disabled : ''}`}
      disabled={disabled}
      {...props}
    >
      {label || children}
    </button>
  );
};

export default Button;