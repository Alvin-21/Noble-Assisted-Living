import {
  Html,
  Head,
  Body,
  Container,
  Heading,
  Text,
  Preview,
} from "@react-email/components";
import * as React from "react";
import { Tailwind } from "@react-email/tailwind";

export default function EmailTemplate() {
  return (
    <Tailwind>
      <Html>
        <Head />
        {/* <Preview>Email preview text</Preview> */}
        <Body className="bg-[#02658f]">
          <Container className="max-w-2xl mx-auto p-8 bg-white rounded-lg">
            <Heading className="text-2xl font-bold text-[#04A9EF] inline">
              General Enquiry |
            </Heading>
            <Heading className="text-2xl font-bold text-[#D4AA04] inline">
              Website Contact Form
            </Heading>
            <Text className="text-slate-600 text-lg">
              Hello Sir/Madam,
            </Text>
            <Text className="text-slate-800 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ornare risus vel mollis pharetra. Aliquam feugiat mattis neque et efficitur.</Text>
            <Text className="text-slate-600 text-lg">
              Best Regards,
            </Text>
            <Text className="text-slate-600 text-lg">John Doe</Text>
          </Container>
        </Body>
      </Html>
    </Tailwind>
  );
}