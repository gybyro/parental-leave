import { z } from "zod"


// Step 1 — Applicant Information (e.g. /application/applicant)
export const applicantSchema = z.object({
    fullName: z.string().min(1, 'Full name is required'),
    kennitala: z.string().regex(/^\d{10}$/, 'Kennitala must be exactly 10 digits'),
    address: z.string().min(1, 'Address is required'),
    email: z.email('Invalid email format'),
    phoneNumber: z.string().regex(/^\d{7}$/, 'Phone number must be exactly 7 digits'),
});

// Step 2 — Employment Information (e.g. /application/employment)
export const employmentSchema = z.discriminatedUnion('type', [
    z.object({
        type: z.literal('Employed'),
        employerName: z.string().min(1, 'Employer name is required'),
        employmentRatio: z.coerce.number().min(1).max(100),
    }),
    z.object({
        type: z.literal('Self-employed'),
        companyName: z.string().min(1, 'Company name is required'),
    }),
    z.object({
        type: z.literal('Unemployed'),
    }),
]);

// Step 3 — Partner Information (e.g. /application/partner)
export const partnerSchema = z.discriminatedUnion('hasPartner', [
    z.object({
        hasPartner: z.literal(true),
        partnerName: z.string().min(1, 'Partner name is required'),
        partnerKennitala: z.string().regex(/^\d{10}$/, 'Kennitala must be exactly 10 digits'),
        partnerEmploymentStatus: z.enum(['Employed', 'Self-employed', 'Unemployed']),
    }),
    z.object({
        hasPartner: z.literal(false),
    }),
]);

// Step 4 — Leave Period (e.g. /application/leave)
export const leaveSchema = z.object({
        start: z.date(),
        end: z.date(),
        leaveRatio: z.enum(['25%', '50%', '75%', '100%']),

    }).refine(data => data.end > data.start, {
        message: "End date must be after start date",
        path: ["endDate"], 

    }).refine((data) => {
        const diffTime = Math.abs(data.end.getTime() - data.start.getTime());
        const diffMonths = diffTime / (1000 * 60 * 60 * 24 * 30.44);
        return diffMonths <= 12;

    }, {
        message: "Total leave duration cannot exceed 12 months",
        path: ["endDate"],
});

// Step 5 — Payment Details (e.g. /application/payment)
export const paymentSchema = z.object({
    bankNumber: z.string().length(4, 'Bank (4 digits)'),
    ledger: z.string().length(2, 'Ledger (2 digits)'),
    accountNumber: z.string().length(6, 'Account (6 digits)'),
});


// Step 6 — Documents (e.g. /application/documents)
const MAX_FILE_SIZE = 25 * 1024 * 1024; // 25MB
const ACCEPTED_FILE_TYPES = ["image/jpeg", "image/png", "application/pdf"];

export const fileSchema = z
  .instanceof(File)
  .refine((file) => file.size <= MAX_FILE_SIZE, `Max file size is 5MB.`)
  .refine(
    (file) => ACCEPTED_FILE_TYPES.includes(file.type),
    ".jpg, .png, and .pdf files are accepted."
  );

export const documentsSchema = z.object({
    files: z.array(fileSchema).min(1, 'At least one document is required'),
});






// Step 7 — Review & Submit   or just   EVERYTHING
export const mainFormSchema = z.object({
    applicant: applicantSchema,
    employment: employmentSchema,
    partner: partnerSchema,
    leave: leaveSchema,
    payment: paymentSchema,
    documents: documentsSchema,
});

export type FormData = z.infer<typeof mainFormSchema>;

export const STEPS = [
    { id: 'applicant', title: 'Applicant', path: '/application/applicant' },
    { id: 'employment', title: 'Employment', path: '/application/employment' },
    { id: 'partner', title: 'Partner', path: '/application/partner' },
    { id: 'leave', title: 'Leave Period', path: '/application/leave' },
    { id: 'payment', title: 'Payment', path: '/application/payment' },
    { id: 'documents', title: 'Documents', path: '/application/documents' },
    { id: 'review', title: 'Review', path: '/application/review' },
];