import type { HTMLAttributes, ReactNode } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  interactive?: boolean;
}

/**
 * 1px border (Soft Grey default), 4-8px radius, 32px+ padding per Design System
 * Section 7. Hover: subtle lift + border shift to Accent-300 — never a shadow
 * that "pops off the page". Motion timing wired for Pass 3, inert here in Pass 1.
 */
export function Card({ children, interactive = true, className = '', ...props }: CardProps) {
  const base = 'rounded-lg border border-soft-grey bg-white p-8';
  const hover = interactive
    ? 'transition-all duration-[175ms] ease-in-out hover:border-accent-300 hover:-translate-y-0.5'
    : '';

  return (
    <div className={`${base} ${hover} ${className}`} {...props}>
      {children}
    </div>
  );
}
