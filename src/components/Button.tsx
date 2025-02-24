import { cn } from '../lib/utils';
import { ButtonHTMLAttributes, forwardRef } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-lg px-6 py-3 font-medium transition-colors',
          'focus:outline-none focus:ring-2 focus:ring-offset-2',
          variant === 'primary'
            ? 'bg-primary text-white hover:bg-primary/90 focus:ring-primary/50'
            : 'bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-500/50',
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';