import React from 'react';
import styles from './TextInput.module.css';

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  errorMessage?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  error = false,
  errorMessage,
  ...props
}) => {
  return (
    <div className={styles.container}>
      <input className={`${styles.input} ${error ? styles.error : ''}`} {...props} />
      {error && errorMessage && <span className={styles.errorMessage}>{errorMessage}</span>}
    </div>
  );
};

export default TextInput;