import React from 'react';
import { cn } from '@/lib/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-2 w-full">
        <label className="text-sm font-bold text-gray-700">{label}</label>
        <input
          ref={ref}
          className={cn(
            'px-4 py-3 border-2 rounded-md outline-none focus:border-[#00458E] transition-all',
            error ? 'border-red-500' : 'border-gray-200',
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