'use client'

import { useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { useForm, FormProvider } from 'react-hook-form'
import { mainFormSchema, FormData, STEPS } from "@/lib/schema"
import { zodResolver } from '@hookform/resolvers/zod'
import { StepIndicator } from '@/app/components/ui/StepIndicator'


export default function ApplicationLayout({ children }: { children: React.ReactNode }) {
  const methods = useForm<FormData>({
    resolver: zodResolver(mainFormSchema),
    mode: 'onBlur',
    defaultValues: {
      applicant: { fullName: '', kennitala: '', address: '', email: '', phoneNumber: '' },
      employment: { type: 'Employed', employerName: '', employmentRatio: 100 },
      partner: { hasPartner: false },
      leave: { startDate: undefined, endDate: undefined, leaveRatio: '100%' },
      payment: { bankNumber: '', ledger: '', accountNumber: '' },
    }
  });

  const router = useRouter();
  const pathname = usePathname();
  const applicantName = methods.watch('applicant.fullName');
  const currentStepIndex = STEPS.findIndex(s => s.path === pathname);

  useEffect(() => {
    const isFirstStep = pathname === STEPS[0].path;
    if (!isFirstStep && !applicantName) {
      router.replace(STEPS[0].path);
    }
  }, [applicantName, pathname, router]);

  return (
    <FormProvider {...methods}>
      <div className="flex-1 flex flex-col items-center justify-start p-4 md:p-12">
        <StepIndicator steps={STEPS} currentStepIndex={currentStepIndex} />
        <div className="w-full max-w-4xl bg-[var(--primary)] rounded-xl shadow-lg p-8 md:p-16">
          {children}
        </div>
      </div>
    </FormProvider>
  );
}