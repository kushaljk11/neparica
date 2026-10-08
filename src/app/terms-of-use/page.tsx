import React from 'react';
import type { Metadata } from 'next';
import { PageHero } from '@/components/shared/PageHero';
import { Container } from '@/components/shared/Container';
import { COMPANY_INFO } from '@/data/company';

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'Terms of Use and client agreement guidelines for Neparica Inc services and website.'
};

export default function TermsOfUsePage() {
  return (
    <main>
      <PageHero
        eyebrow="Legal & Governance"
        title="Terms of Use"
        description="Terms and conditions governing the use of Neparica Inc website and services."
        breadcrumbs={[{ label: 'Terms of Use' }]}
      />

      <section className="py-16 md:py-24 bg-white border-b border-[#E5E9EF]">
        <Container size="narrow">
          <div className="prose prose-slate max-w-none space-y-6 text-base text-[#647080] leading-relaxed">
            <h2 className="text-2xl font-bold text-[#141820]">1. Agreement to Terms</h2>
            <p>
              These Terms of Use constitute a legally binding agreement made between you, whether personally or on behalf of an entity (&quot;you&quot;) and Neparica Inc (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), concerning your access to and use of the website as well as any related media form, media channel, or mobile website.
            </p>

            <h2 className="text-2xl font-bold text-[#141820] pt-4">2. Intellectual Property Rights</h2>
            <p>
              Unless otherwise indicated, the Site and its original content, features, source code, databases, software, and design tokens are our proprietary property. All custom deliverables produced under client Master Services Agreements (MSAs) are assigned to the respective clients in accordance with executed contract terms.
            </p>

            <h2 className="text-2xl font-bold text-[#141820] pt-4">3. IT Consulting &amp; Engineering Services</h2>
            <p>
              All professional services, project outsourcing, software engineering, and cloud hosting provided by Neparica Inc are governed by explicit Statements of Work (SOWs) and Service Level Agreements (SLAs).
            </p>

            <h2 className="text-2xl font-bold text-[#141820] pt-4">4. Governing Law</h2>
            <p>
              These Terms of Use and your use of the Site are governed by and construed in accordance with the laws of the State of Illinois, United States, without regard to its conflict of law principles.
            </p>

            <h2 className="text-2xl font-bold text-[#141820] pt-4">5. Contact Us</h2>
            <p>
              In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:
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
