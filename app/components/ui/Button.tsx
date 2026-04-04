import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'negative' | 'destructive';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-[8px] transition-all outline-none text-center font-["IBM_Plex_Sans",_sans-serif] font-semibold text-[18px] leading-[28px] px-[24px] py-[18px] border-[3px] border-transparent';

    // why do you hate me... just let me use my css files in piece T_T
    const variants = {
      primary: `
        bg-[var(--blue400)] text-[var(--primary)] 
        hover:bg-[var(--blueberry400)] 
        focus:bg-[var(--mint400)] focus:text-[var(--dark400)] 
        active:bg-[var(--blueberry400)] active:border-[var(--mint400)] 
        disabled:bg-[var(--blue300)] disabled:cursor-not-allowed
      `,
      negative: `
        bg-[var(--primary)] text-[var(--blue400)] 
        hover:text-[var(--blueberry400)] 
        focus:bg-[var(--mint400)] focus:text-[var(--dark400)] 
        active:text-[var(--blueberry400)] active:border-[var(--mint400)] 
        disabled:text-[var(--blue300)] disabled:cursor-not-allowed
      `,
      destructive: `
        bg-[var(--red600)] text-[var(--primary)] 
        hover:bg-[var(--rose400)] 
        focus:bg-[var(--mint400)] focus:text-[var(--dark400)] 
        active:bg-[var(--rose400)] active:border-[var(--mint400)] 
        disabled:bg-[var(--red300)] disabled:cursor-not-allowed
      `,
    };

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';