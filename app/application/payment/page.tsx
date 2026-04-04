'use client'
import "./style.css"
import { useFormContext } from "react-hook-form"
import { FormData } from '@/lib/schema'
import { Input } from '@/app/components/ui/Input'
import { StepNavigation } from '@/app/components/StepNavigation'

const PaymentStep = () => {
    const { register, formState: { errors } } = useFormContext<FormData>();

    return (
        <div className="space-y-8">
            <header>
                <h1 className="text-2xl font-bold text-[var(--blue400)]">Payment Details</h1>
                <p className="text-gray-600">Enter the bank account where you would like to receive payments.</p>
            </header>

            <div className="flex items-end gap-2">
                <div className="w-24">
                    <Input label="Bank" maxLength={4} {...register('payment.bankNumber')} error={errors.payment?.bankNumber?.message as string} />
                    <Input label="Bank" maxLength={4} {...register('payment.bankNumber')} error={errors.payment?.bankNumber?.message} />
                </div>
                <span className="mb-4 text-xl font-bold">-</span>
                <div className="w-16">
                    <Input label="Ledger" maxLength={2} {...register('payment.ledger')} error={errors.payment?.ledger?.message as string} />
                    <Input label="Ledger" maxLength={2} {...register('payment.ledger')} error={errors.payment?.ledger?.message} />
                </div>
                <span className="mb-4 text-xl font-bold">-</span>
                <div className="flex-1">
                    <Input label="Account Number" maxLength={6} {...register('payment.accountNumber')} error={errors.payment?.accountNumber?.message as string} />
                    <Input label="Account Number" maxLength={6} {...register('payment.accountNumber')} error={errors.payment?.accountNumber?.message} />
                </div>
            </div>

            <StepNavigation currentStepId="payment" schemaKey="payment" />
        </div>
    );
}
export default PaymentStep;