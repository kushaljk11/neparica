import React from 'react';
import type { Metadata } from 'next';
import { PageHero } from '@/components/shared/PageHero';
import { Container } from '@/components/shared/Container';
import { COMPANY_INFO } from '@/data/company';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Neparica Inc Privacy Policy and data protection standards.'
};

export default function PrivacyPolicyPage() {
  return (
    <main>
      <PageHero
        eyebrow="Legal & Governance"
        title="Privacy Policy"
        description="Our commitment to safeguarding your business information and personal data."
        breadcrumbs={[{ label: 'Privacy Policy' }]}
      />

      <section className="py-16 md:py-24 bg-white border-b border-[#E5E9EF]">
        <Container size="narrow">
          <div className="prose prose-slate max-w-none space-y-6 text-base text-[#647080] leading-relaxed">
            <h2 className="text-2xl font-bold text-[#141820]">1. Introduction</h2>
            <p>
              Neparica Inc (&quot;Neparica,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects the privacy of our website visitors, clients, and partners. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website at <a href="https://neparica.com" className="text-[#0F3A5F] underline">https://neparica.com</a> or engage our IT services.
            </p>

            <h2 className="text-2xl font-bold text-[#141820] pt-4">2. Information We Collect</h2>
            <p>
              We collect information that you voluntarily provide to us when expressing interest in obtaining information about our IT services, solutions, or products. This includes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Full name, corporate entity, job title, and professional contact information</li>
              <li>Electronic mail addresses, telephone numbers, and business mailing addresses</li>
              <li>Technical project requirements, RFP specifications, and inquiries submitted through our contact forms</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#141820] pt-4">3. Use of Your Information</h2>
            <p>
              Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Respond to inquiries, schedule consultations, and deliver technical proposals</li>
              <li>Deliver agreed-upon software engineering, consulting, and cloud hosting services</li>
              <li>Administer accounts, process invoice billing, and protect against fraudulent transactions</li>
              <li>Comply with applicable legal obligations and enterprise regulatory requirements</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#141820] pt-4">4. Security of Your Information</h2>
            <p>
              We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable.
            </p>

            <h2 className="text-2xl font-bold text-[#141820] pt-4">5. Contact Information</h2>
            <p>
              If you have questions or comments about this Privacy Policy, please contact us at:
            </p>
            <div className="p-5 rounded-lg bg-[#F6F7F9] border border-[#E5E9EF] text-sm text-[#141820]">
              <div className="font-bold">{COMPANY_INFO.name}</div>
              <div>{COMPANY_INFO.contact.building}</div>
              <div>{COMPANY_INFO.contact.address}</div>
              <div>{COMPANY_INFO.contact.cityStateZip}</div>
              <div>Email: {COMPANY_INFO.contact.email}</div>
              <div>Phone: {COMPANY_INFO.contact.phone}</div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
