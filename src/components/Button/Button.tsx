import type { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.css';

type Usage = 'brand' | 'primary' | 'negative';
type Shape = 'sharp' | 'soft' | 'round';
type Size = 'm' | 'l';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  usage?: Usage;
  shape?: Shape;
  size?: Size;
  children: ReactNode;
}

export function Button({
  usage = 'brand',
  shape = 'sharp',
  size = 'm',
  disabled = false,
  children,
  className,
  ...props
}: ButtonProps) {
  const classes = [
    styles.button,
    styles[usage],
    styles[shape],
    shape === 'round' && size === 'l' ? styles.sizeL : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={classes} disabled={disabled} {...props}>
      {children}
    </button>
  );
}
