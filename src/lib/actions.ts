'use server';

import { Resend } from "resend";
import { z } from "zod";
import { EmailTemplate } from "@/componets/email/EmailTemplate";
import { ReferralEmailTemplate } from "@/componets/email/ReferralEmailTemplate";

const FormSchema = z.object({
    fullName: z.string().min(1, "Please enter your name"),
    email: z.string().email('Invalid email address'),
    message: z.string().min(1, "Please enter your message"),
});

export type State = {
    errors?: {
        fullName?: string[];
        email?: string[];
        message?: string[];
    };
    message?: string | null;
};

const FormSchema2 = z.object({
    fullName: z.string().min(1, "Please enter your name"),
    phoneNumber: z.string().min(1, "Please enter your phone number"),
    birthDate: z.string().min(1, "Please enter your date of birth"),
    insuranceProvider: z.string().min(1, "Please enter the insurance provider"),
    primaryDiagnosis: z.string().min(1, "Please enter the primary diagnosis"),
    caseManager: z.string().min(1, "Please enter the case manager's name"),
    caseManagerCompany: z.string().min(1, "Please enter the case manager's company"),
    CMphoneNumber: z.string().min(1, "Please enter the case manager's phone number"),
    aald: z.string().min(1, "Please enter the anticipated assisted living needs"),
    caseManagerFax: z.string().min(1, "Please enter the case manager's fax number"),
    caseManagerEmail: z.string().email('Invalid email address'),
});

export type State2 = {
    errors?: {
        fullName?: string[];
        phoneNumber?: string[];
        birthDate?: string[];
        insuranceProvider?: string[];
        primaryDiagnosis?: string[];
        caseManager?: string[];
        caseManagerCompany?: string[];
        CMphoneNumber?: string[];
        aald?: string[];
        caseManagerFax?: string[];
        caseManagerEmail?: string[];
    };
    message?: string | null;
};

export async function sendEmail(prevState: State | undefined, formData: FormData) {
    
    const validatedFields = FormSchema.safeParse({
        fullName: formData.get('fullName'),
        email: formData.get('email'),
        message: formData.get('message'),
    });

    // If form validation fails, return errors early. Otherwise, continue.
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Send Message.',
        };
    }

    const { fullName, email } = validatedFields.data;

    
    try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        const { data } = await resend.emails.send({
            from: 'Contact <contact@nobleassistedliving.org>',
            to: process.env.MY_EMAIL as string,
            subject: `General Enquiry from ${fullName}`,
            react: await EmailTemplate(validatedFields.data),
            replyTo: email,
            text: `General Enquiry from ${fullName}. Please view this email in an HTML-compatible email client.`,
        });
        console.log(data);
        return {
            message: 'success',
            errors: {},
        };
    } catch (error) {
        console.error(error);
    }
}

export async function sendReferralEmail(prevState: State2 | undefined, formData: FormData) {
    
    const validatedFields = FormSchema2.safeParse({
        fullName: formData.get('fullName'),
        phoneNumber: formData.get('phoneNumber'),
        birthDate: formData.get('birthDate'),
        insuranceProvider: formData.get('insuranceProvider'),
        primaryDiagnosis: formData.get('primaryDiagnosis'),
        caseManager: formData.get('caseManager'),
        aald: formData.get('aald'),
        caseManagerCompany: formData.get('caseManagerCompany'),
        CMphoneNumber: formData.get('CMphoneNumber'),
        caseManagerFax: formData.get('caseManagerFax'),
        caseManagerEmail: formData.get('caseManagerEmail'),
    });

    // If form validation fails, return errors early. Otherwise, continue.
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Send Message.',
        };
    }

    const { fullName, caseManagerEmail } = validatedFields.data;

    
    try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        const { data } = await resend.emails.send({
            from: 'Contact <contact@nobleassistedliving.org>',
            to: process.env.MY_EMAIL as string,
            subject: `Referral Details from ${fullName}`,
            react: await ReferralEmailTemplate(validatedFields.data),
            replyTo: caseManagerEmail,
            text: `Referral Details from ${fullName}. Please view this email in an HTML-compatible email client.`,
        });
        console.log(data);
        return {
            message: 'success',
            errors: {},
        };
    } catch (error) {
        console.error(error);
    }
}