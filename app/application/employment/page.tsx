'use client'
import "./style.css"
import { useFormContext } from "react-hook-form"
import { FormData } from '@/lib/schema'
import { Input } from '@/app/components/ui/Input'
import { RadioButton } from "@/app/components/ui/RadioButton"
import { StepNavigation } from '@/app/components/StepNavigation'

const EmploymentStep = () => {
    const { register, control, watch, formState: { errors } } = useFormContext<FormData>();
    const employmentType = watch('employment.type');

    return (
        <div className="space-y-8">
            <header>
                <h1 className="text-2xl font-bold text-[var(--blue400)]">Employment Details</h1>
            </header>

            <Controller
                name="employment.type"
                control={control}
                render={({ field }) => (
                    <RadioButton 
                        label="Employment Type"
                        options={[
                            { label: 'Employed', value: 'Employed' },
                            { label: 'Self-employed', value: 'Self-employed' },
                            { label: 'Unemployed', value: 'Unemployed' },
                        ]}
                        {...field}
                        error={errors.employment?.type?.message as string}
                    />
                )}
            />

            {employmentType === 'Employed' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 bg-gray-50 rounded-lg">
                    <Input label="Employer Name" {...register('employment.employerName')} error={errors.employment?.employerName?.message as string} />
                    <Input label="Employment Ratio (%)" type="number" {...register('employment.employmentRatio')} error={errors.employment?.employmentRatio?.message as string} />
                </div>
            )}

            {employmentType === 'Self-employed' && (
                <div className="p-6 bg-gray-50 rounded-lg">
                    <Input label="Company Name" {...register('employment.companyName')} error={errors.employment?.companyName?.message as string} />
                </div>
            )}

            <StepNavigation currentStepId="employment" schemaKey="employment" />
        </div>
    );
}
export default EmploymentStep;