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

interface EmailTemplateProps {
    fullName: string;
    message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    fullName='John Doe', message='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ornare risus vel mollis pharetra. Aliquam feugiat mattis neque et efficitur.'
}) => (
    <Tailwind>
        <Html>
            <Head />
            <Body className="bg-[#02658f]">
                <Container className="my-4 max-w-2xl mx-auto p-8 bg-white rounded-lg">
                    <Heading className="text-2xl font-bold text-[#04A9EF] inline">
                        General Enquiry | 
                    </Heading>
                    <Heading className="text-2xl font-bold text-[#D4AA04] inline">
                        Website Contact Form
                    </Heading>
                    <Text className="text-slate-600 text-lg">
                        Hello Sir/Madam,
                    </Text>
                    <Text className="text-slate-800 text-lg">{message}</Text>
                    <Text className="text-slate-600 text-lg">
                        Best Regards,
                    </Text>
                    <Text className="text-slate-600 text-lg">{fullName}</Text>
                </Container>
            </Body>
        </Html>
    </Tailwind>
);