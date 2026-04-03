import React from 'react';
import { cn } from '@/lib/utils';

interface Step {
  title: string;
  id: string;
}

interface StepIndicatorProps {
  steps: Step[];
  currentStepIndex: number;
}

export const StepIndicator: React.FC<StepIndicatorProps> = ({ steps, currentStepIndex }) => {
  return (
    <nav className="flex items-center justify-between w-full mb-12">
      {steps.map((step, index) => {
        const isCompleted = index < currentStepIndex;
        const isActive = index === currentStepIndex;

        return (
          <div key={step.id} className="flex flex-col items-center flex-1 relative">
            <div
              className={cn(
                'w-10 h-10 rounded-full flex items-center justify-center border-2 z-10 bg-white transition-all',
                isCompleted && 'bg-[#00458E] border-[#00458E] text-white',
                isActive && 'border-[#00458E] text-[#00458E] ring-4 ring-[#E6EEF8]',
                !isCompleted && !isActive && 'border-gray-300 text-gray-400'
              )}
            >
              {isCompleted ? '✓' : index + 1}
            </div>
            <span className={cn('mt-2 text-xs font-bold uppercase', isActive ? 'text-[#00458E]' : 'text-gray-400')}>
              {step.title}
            </span>
            {index !== steps.length - 1 && (
              <div className={cn('absolute top-5 left-1/2 w-full h-[2px]', isCompleted ? 'bg-[#00458E]' : 'bg-gray-200')} />
            )}
          </div>
        );
      })}
    </nav>
  );
};