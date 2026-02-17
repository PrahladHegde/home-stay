import type { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
}

export function Button({
  children,
  variant = 'primary',
  className = '',
  type,
  ...props
}: ButtonProps) {
  const baseStyle =
    'cursor-pointer px-8 py-3 uppercase tracking-wider text-sm font-semibold transition-all duration-300';
  const styles = {
    primary: 'bg-brand-beige text-white hover:bg-brand-dark',
    outline: 'border-2 border-white text-white hover:bg-white hover:text-brand-dark',
  };

  return (
    <button type={type ?? 'button'} className={`${baseStyle} ${styles[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
