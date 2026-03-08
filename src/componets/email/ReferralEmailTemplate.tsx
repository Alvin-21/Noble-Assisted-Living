import * as React from 'react';
import {
    Html,
    Head,
    Body,
    Container,
    Heading,
    Text,
} from "@react-email/components";

import { Tailwind } from "@react-email/tailwind";

interface ReferralEmailTemplateProps {
    fullName: string;
    phoneNumber: string;
    birthDate: string;
    insuranceProvider: string;
    primaryDiagnosis: string;
    caseManager: string;
    caseManagerCompany: string;
    CMphoneNumber: string;
    aald: string;
    caseManagerFax: string;
}

export const ReferralEmailTemplate: React.FC<Readonly<ReferralEmailTemplateProps>> = ({
    fullName='John Doe', phoneNumber='0712345678', birthDate='01/01/1900', insuranceProvider='insure', primaryDiagnosis='diagnosis', caseManager='manager', caseManagerCompany='cmcompany', CMphoneNumber='0712345678', aald='aald', caseManagerFax='fax'
}) => (
    <Tailwind>
        <Html>
            <Head />
            <Body className="bg-[#02658f]">
                <Container className="my-4 max-w-2xl mx-auto p-8 bg-white rounded-lg">
                    <Heading className="text-2xl font-bold text-[#04A9EF] inline">
                        Referral Details | 
                    </Heading>
                    <Heading className="text-2xl font-bold text-[#D4AA04] inline">
                        Website Referral Form
                    </Heading>
                    <Text className="text-slate-600 text-lg">
                        Hello Sir/Madam,
                    </Text>
                    <Text className="text-slate-800 text-lg"><span className='font-bold'>Full Name:</span> {fullName}</Text>
                    <Text className="text-slate-800 text-lg"><span className='font-bold'>Phone Number:</span> {phoneNumber}</Text>
                    <Text className="text-slate-800 text-lg"><span className='font-bold'>Date of Birth:</span> {birthDate}</Text>
                    <Text className="text-slate-800 text-lg"><span className='font-bold'>Insurance Provider:</span> {insuranceProvider}</Text>
                    <Text className="text-slate-800 text-lg"><span className='font-bold'>Primary Diagnosis:</span> {primaryDiagnosis}</Text>
                    <Text className="text-slate-800 text-lg"><span className='font-bold'>Case Manager:</span> {caseManager}</Text>
                    <Text className="text-slate-800 text-lg"><span className='font-bold'>Case Manager Company:</span> {caseManagerCompany}</Text>
                    <Text className="text-slate-800 text-lg"><span className='font-bold'>Case Manager Phone Number:</span> {CMphoneNumber}</Text>
                    <Text className="text-slate-800 text-lg"><span className='font-bold'>Anticipated Assisted Living Needs:</span> {aald}</Text>
                    <Text className="text-slate-800 text-lg"><span className='font-bold'>Case Manager Fax Number:</span> {caseManagerFax}</Text>
                    <Text className="text-slate-600 text-lg">
                        Best Regards,
                    </Text>
                    <Text className="text-slate-600 text-lg">{fullName}</Text>
                </Container>
            </Body>
        </Html>
    </Tailwind>
);