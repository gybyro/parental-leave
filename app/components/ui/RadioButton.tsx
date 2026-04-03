import React from 'react';
import { cn } from '@/lib/utils';

interface Option {
  label: string;
  value: string;
}

interface RadioButtonProps {
  label: string;
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

export const RadioButton: React.FC<RadioButtonProps> = ({ label, options, value, onChange, error }) => {
  return (
    <div className="flex flex-col gap-3">
      <label className="text-sm font-bold text-gray-700">{label}</label>
      <div className="flex flex-col gap-2">
        {options.map((option) => (
          <label
            key={option.value}
            className={cn(
              'flex items-center gap-3 p-4 border-2 rounded-md cursor-pointer transition-all hover:bg-gray-50',
              value === option.value ? 'border-[#00458E] bg-[#F5F8FE]' : 'border-gray-200'
            )}
          >
            <input
              type="radio"
              className="w-4 h-4 text-[#00458E]"
              checked={value === option.value}
              onChange={() => onChange(option.value)}
            />
            <span className="text-gray-800">{option.label}</span>
          </label>
        ))}
      </div>
      {error && <span className="text-red-500 text-xs font-medium">{error}</span>}
    </div>
  );
};