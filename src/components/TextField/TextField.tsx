import type { InputHTMLAttributes } from 'react';
import styles from './TextField.module.css';

type Shape = 'sharp' | 'soft';

interface TextFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  shape?: Shape;
  label?: string;
  type?: 'text' | 'email' | 'password' | 'search' | 'tel' | 'url' | 'number';
}

export function TextField({
  shape = 'sharp',
  label,
  id,
  disabled = false,
  className,
  ...props
}: TextFieldProps) {
  return (
    <div className={[styles.wrapper, className].filter(Boolean).join(' ')}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}
      <input
        id={id}
        className={[styles.input, styles[shape]].join(' ')}
        disabled={disabled}
        {...props}
      />
    </div>
  );
}
