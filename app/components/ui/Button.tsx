import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'ghost' | 'utility' | 'destructive';
    size?: 'default' | 'small';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'default', ...props }, ref) => {
        const baseStyles = 'text-[18px] flex inline-flex items-center justify-center text-center rounded-[8px] transition-[box-shadow,color,background-color] duration-250 outline-none font-medium cursor-pointer';
    // why do you hate me... just let me use my css files in piece T_T
    const variants = {
      primary: `
        bg-[var(--blue400)] text-[var(--primary)] 
        hover:bg-[var(--blueberry400)] hover:text-[var(--primary)]
        active:bg-[var(--blueberry400)] active:text-[var(--primary)] active:shadow-[inset_0_0_0_3px_var(--mint400)]
        focus:bg-[var(--mint400)] focus:text-[var(--dark400)]
        disabled:bg-[var(--blue300)] disabled:cursor-not-allowed
      `,
      ghost: `
        bg-transparent text-[var(--blue400)] shadow-[inset_0_0_0_1px_var(--blue400)]
        hover:bg-transparent hover:text-[var(--blueberry400)] hover:shadow-[inset_0_0_0_2px_var(--blueberry400)]
        active:bg-transparent active:shadow-[inset_0_0_0_3px_var(--mint400)]
        focus:bg-[var(--mint400)] focus:text-[var(--dark400)] focus:shadow-[inset_0_0_0_3px_var(--mint400)]
        disabled:text-[var(--blue300)] focus:shadow-[inset_0_0_0_1px_var(--blue300)] disabled:cursor-not-allowed
      `,
      utility: `
        bg-[var(--primary)] text-[var(--dark400)] shadow-[inset_0_0_0_1px_var(--blue200)]
        hover:bg-[var(--primary)] hover:shadow-[inset_0_0_0_1px_var(--blue400)]
        active:bg-[var(--primary)] active:shadow-[inset_0_0_0_3px_var(--mint400)]
        focus:bg-[var(--mint400)] focus:shadow-[inset_0_0_0_3px_var(--mint400)]
        disabled:text-[var(--dark200)] focus:shadow-[inset_0_0_0_1px_var(--dark100)] disabled:cursor-not-allowed
      `,
      destructive: `
        bg-[var(--red600)] text-[var(--primary)] 
        hover:bg-[var(--red400)] hover:text-[var(--primary)] 
        active:bg-[var(--red400)] active:text-[var(--primary)] active:shadow-[inset_0_0_0_3px_var(--mint400)]
        focus:bg-[var(--mint400)] focus:text-[var(--dark400)]
        disabled:bg-[var(--red200)] disabled:cursor-not-allowed
      `,
    };

    const sizes = {
        default: 'px-6 py-[18]',
        small: 'px-4 py-[10px]',
    };

    return (
        <button
            ref={ref}
            className={cn(
            baseStyles,
            variants[variant],
            sizes[size],
            className
            )}
            {...props}
        />
        );
    }
);

Button.displayName = 'Button';