import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { PageHero } from '@/components/shared/PageHero';
import { Container } from '@/components/shared/Container';
import { CTASection } from '@/components/shared/CTASection';
import { COMPANY_INFO } from '@/data/company';
import { Check, Building, Globe, Shield } from 'lucide-react';

import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { ImageReveal } from '@/components/animations/ImageReveal';

export const metadata: Metadata = {
  title: 'Company Overview',
  description: 'Learn about Neparica Inc: Founded in 2004 in Chicago, providing comprehensive IT services and 24/7 technical support.'
};

export default function CompanyOverviewPage() {
  return (
    <main>
      <PageHero
        eyebrow="About Neparica"
        title="Company Overview"
        description="Providing end-to-end IT services, custom software development, and technical consulting to small and mid-sized enterprises since 2004."
        breadcrumbs={[
          { label: 'About Us', href: '/about-us' },
          { label: 'Company Overview' }
        ]}
      />

      <section className="py-16 md:py-24 bg-white border-b border-[#E5E9EF]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 space-y-6">
              <ScrollReveal yOffset={24}>
                <div className="space-y-6">
                  <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#141820]">
                    Neparica Inc IT Services, Chicago IL
                  </h2>

                  <div className="space-y-4 text-base text-[#647080] leading-relaxed">
                    <p>
                      Neparica, a global IT Company based in Chicago, USA has been providing a full range of IT-related services and solutions to governments and small to mid-size businesses around the globe since 2004. With its proven 4D delivery approach, Neparica Discovers, Designs, Develops and Delivers IT products and solutions which empower businesses to compete in today’s challenging environment.
                    </p>
                    <p>
                      Neparica helps its clients to grow their businesses by delivering them &apos;on-time&apos; quality projects by utilizing our pool of Global Resources. We are capable of providing IT services and solutions in all major areas by leveraging our technical expertise, domain knowledge, and by leveraging the strategic alliances with leading technology companies such as Microsoft, Amazon, Oracle, and many more.
                    </p>
                    <p>
                      Furthermore, we truly understand the IT challenges faced by small &amp; medium-size businesses in today’s challenging environment. On one hand, the companies may not have a budget for large and designated IT teams. On the other hand, they can&apos;t count on big IT companies to understand their operational model and prescribe the &quot;Right People &amp; Right Technology&quot;. That’s where Neparica can be your trusted and affordable IT partner for sustainable business growth.
                    </p>
                    <p>
                      Neparica provides high-quality end-to-end IT solutions across the globe through unique models and methodologies to deliver on-time, cost-effective and efficient solutions. Our software professionals have multiple platform skills in Web Applications, Mobile Apps, and various business domains.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 text-sm font-medium text-[#141820]">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-[#0F3A5F]/10 text-[#0F3A5F] flex items-center justify-center">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>Chicago Engagement Hub</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-[#0F3A5F]/10 text-[#0F3A5F] flex items-center justify-center">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>150+ Clients Served Globally</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-[#0F3A5F]/10 text-[#0F3A5F] flex items-center justify-center">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>16+ Years Operating Longevity</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-[#0F3A5F]/10 text-[#0F3A5F] flex items-center justify-center">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>24/7 Global Resource Capability</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <ImageReveal className="rounded-2xl border border-[#E5E9EF] shadow-lg bg-[#F6F7F9]">
                <div className="relative h-72 sm:h-80 w-full">
                  <Image
                    src="/images/office.jpg"
                    alt="Continental Office Plaza"
                    fill
                    className="object-cover"
                    sizes="450px"
                  />
                </div>
                <div className="p-5 bg-white border-t border-[#E5E9EF]">
                  <div className="text-xs font-semibold text-[#0F3A5F] uppercase tracking-wider mb-1">
                    Continental Office Plaza
                  </div>
                  <div className="text-xs text-[#647080]">
                    129 Fairfield Way, Suite 306D, Bloomingdale, IL 60108, USA
                  </div>
                </div>
              </ImageReveal>
            </div>
          </div>
        </Container>
      </section>

      <CTASection />
    </main>
  );
}
