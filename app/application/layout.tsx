'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useForm, FormProvider } from 'react-hook-form';

interface ParentalLeaveForm {
  applicant: {
    fullName: string;
    email: string;
  };
  period: {
    startDate: Date | null;
    endDate: Date | null;
  };
  // Add other steps here...
}

export default function ApplicationLayout({ children }: { children: React.ReactNode }) {
  const methods = useForm<ParentalLeaveForm>({
    mode: 'onBlur',
    defaultValues: {
      applicant: { fullName: '', email: '' },
      period: { startDate: null, endDate: null },
    },
  });

  const { watch } = methods;
  const router = useRouter();
  const pathname = usePathname();

  // Watch a core field to detect if state was lost
  const fullName = watch('applicant.fullName');

  useEffect(() => {
    const isFirstStep = pathname === '/application/applicant';
    // If we aren't on the first step and the data is empty, redirect back
    if (!isFirstStep && !fullName) {
      router.replace('/application/applicant');
    }
  }, [fullName, pathname, router]);

  
  return (
    <FormProvider {...methods}>
      <div className="min-h-screen bg-gray-50 flex justify-center py-12 px-4">
        <main className="w-full max-w-3xl bg-white shadow-sm border border-gray-100 p-8 md:p-12 rounded-lg">
          {children}
        </main>
      </div>
    </FormProvider>
  );
}