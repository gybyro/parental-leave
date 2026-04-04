'use client'
import "./style.css"
import { useFormContext } from "react-hook-form"
import { FormData } from '@/lib/schema'
import { Input } from '@/app/components/ui/Input'
import { StepNavigation } from '@/app/components/StepNavigation'

const ApplicantStep = () => {
    const { register, formState: { errors } } = useFormContext<FormData>();

    return (
        <div className="space-y-6">
            <header>
                <h1 className="text-2xl font-bold text-[var(--blue400)]">Applicant Information</h1>
                <p className="text-gray-600">Please provide your personal details.</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input label="Full Name" {...register('applicant.fullName')} error={errors.applicant?.fullName?.message as string} />
                <Input label="Kennitala" {...register('applicant.kennitala')} error={errors.applicant?.kennitala?.message as string} />
                <div className="md:col-span-2">
                    <Input label="Address" {...register('applicant.address')} error={errors.applicant?.address?.message as string} />
                </div>
                <Input label="Email" type="email" {...register('applicant.email')} error={errors.applicant?.email?.message as string} />
                <Input label="Phone Number" {...register('applicant.phoneNumber')} error={errors.applicant?.phoneNumber?.message as string} />
            </div>

            <StepNavigation currentStepId="applicant" schemaKey="applicant" />
        </div>
    );
}
export default ApplicantStep;