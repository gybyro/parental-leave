import React from 'react';
import { cn } from '@/lib/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    required?: boolean;
    error?: string;
    background?: 'white' | 'blue' | 'disabled';
    sizes?: 'md' | 'sm' | 'xs';
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, label, required, error, background = 'white', sizes = 'md', ...props }, ref) => {

    const backgrounds = {
        white: 'bg-[var(--primary)]',
        blue: 'bg-[var(--blue200)]',
        disabled: 'bg-transparent text-[var(--dark300)]',
    };

    const sizess = {
        md: 'text-[24px] leading-[1.3] pt-2 pr-6 pb-[14px] pl-2',
        sm: 'text-[18px] leading-[1.3] pr-4 pl-2 py-2',
        xs: 'text-[18px] leading-[1.3] pr-4 py-2',
    }; 

    const labelClasses = cn(
      'text-sm font-bold',
      background === 'disabled' ? 'text-[var(--blue300)]' : 'text-gray-700'
    );


    return (
      <div className="flex flex-col gap-2 w-full">
        <label className={labelClasses}>{label}{required && <span className="text-red-500 ml-1">*</span>}</label>
        <input
          ref={ref}
          
          className={cn(
            'border-2 rounded-[8px] outline-none transition-[box-shadow] duration-200 cursor-text',
            'shadow-[inset_0_0_0_1px_var(--blue200)] focus:shadow-[inset_0_0_0_1px_var(--blue200)]',
            error ? 'border-red-500' : 'border-gray-200',
            backgrounds[background],
            sizess[sizes],
            className
          )}
          {...props}
        />
        {error && <span className="text-red-500 text-xs font-medium">{error}</span>}
      </div>
    );
  }
);
Input.displayName = 'Input';