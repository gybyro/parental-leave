'use client'
import { useRouter } from 'next/navigation'
import { useFormContext, FieldPath } from 'react-hook-form'
import { Button } from './ui/Button'
import { STEPS, FormData } from '@/lib/schema'


interface StepNavigationProps {
    currentStepId: string;
    schemaKey: FieldPath<FormData>;
}

export function StepNavigation({ currentStepId, schemaKey }: StepNavigationProps) {
    const router = useRouter();
    const { trigger } = useFormContext<FormData>();
    
    const currentIndex = STEPS.findIndex(s => s.id === currentStepId);
    const isFirst = currentIndex === 0;
    const isLast = currentIndex === STEPS.length - 1;

    const handleNext = async () => {
        const isValid = await trigger(schemaKey);
        if (isValid) {
        router.push(STEPS[currentIndex + 1].path);
        }
    };

    const handleBack = () => {
        if (!isFirst) {
        router.push(STEPS[currentIndex - 1].path);
        }
    };

    if (currentStepId === 'review') return null;

    return (
        <div className="flex justify-between items-center mt-12 pt-8 border-t border-[var(--dark200)]">
        {!isFirst ? (
            <Button variant="negative" onClick={handleBack} type="button">Back</Button>
        ) : <div />}
        <Button variant="primary" onClick={handleNext} type="button">Next</Button>
        </div>
    );
}