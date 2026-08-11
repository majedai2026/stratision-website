import type { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: ReactNode;
}

/**
 * Primary: Accent-500 bg, white text. Hover: Accent-600. No gradients, no glow.
 * Secondary: transparent bg, Near Black border/text. Per Design System Section 6.
 * Focus ring is non-negotiable — Accent-300, 2px offset (Section 11).
 */
export function Button({ variant = 'primary', className = '', children, ...props }: ButtonProps) {
  const base =
    'inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-medium ' +
    'transition-colors duration-[120ms] ease-in-out ' +
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-300 ' +
    'disabled:cursor-not-allowed disabled:bg-soft-grey disabled:text-accent-300';

  const variants: Record<ButtonVariant, string> = {
    primary: 'bg-accent-500 text-white hover:bg-accent-600',
    secondary: 'bg-transparent text-near-black border border-near-black hover:bg-soft-grey',
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
