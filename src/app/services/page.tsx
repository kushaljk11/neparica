import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/shared/PageHero';
import { Container } from '@/components/shared/Container';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { CTASection } from '@/components/shared/CTASection';
import { SERVICES } from '@/data/services';
import { StaggerReveal } from '@/components/animations/StaggerReveal';
import {
  TrendingUp,
  Cloud,
  Target,
  Globe,
  Users,
  Layers,
  Lightbulb,
  Briefcase,
  ArrowRight,
  Check
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Explore Neparica’s full suite of IT services: Growth Strategy, Cloud Hosting, Digital Marketing, Remote Teams, IT Staffing, IT Consulting, and Project Outsourcing.'
};

const iconMap: Record<string, React.ElementType> = {
  TrendingUp,
  Cloud,
  Target,
  Globe,
  Users,
  Layers,
  Lightbulb,
  Briefcase
};

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="What We Do"
        title="Comprehensive IT Services for SMBs"
        description="From operational growth strategy to full-cycle software development and 24/7 cloud support, Neparica delivers the right people and the right technology for your business."
        breadcrumbs={[{ label: 'Services' }]}
      />

      <section className="py-16 md:py-24 bg-white border-b border-[#E5E9EF]">
        <Container>
          <StaggerReveal selector=".service-card" stagger={0.08}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {SERVICES.map((service) => {
                const Icon = iconMap[service.iconName] || Lightbulb;
                const linkHref = service.slug === 'growth-strategy' ? '/growth-strategy' : `/services/${service.slug}`;

                return (
                  <div
                    key={service.slug}
                    className="service-card group bg-[#F6F7F9] rounded-xl border border-[#E5E9EF] p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-[#0F3A5F]/40 hover:-translate-y-1 hover:shadow-xl hover:bg-white"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-5">
                        <div className="w-12 h-12 rounded-lg bg-[#0F3A5F] text-white flex items-center justify-center transition-transform duration-300 group-hover:scale-105 group-hover:bg-[#0a2740]">
                          <Icon className="w-6 h-6 text-[#27DDE8] transition-transform duration-300 group-hover:scale-110" />
                        </div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-[#0F3A5F] bg-[#0F3A5F]/10 px-2.5 py-1 rounded">
                          Full Service
                        </span>
                      </div>

                      <h2 className="text-xl sm:text-2xl font-bold text-[#141820] mb-3 group-hover:text-[#0F3A5F] transition-colors">
                        {service.title}
                      </h2>

                      <p className="text-sm text-[#647080] leading-relaxed mb-6">
                        {service.fullDescription.slice(0, 190)}...
                      </p>

                      <div className="space-y-2 mb-6">
                        <div className="text-xs font-semibold text-[#141820] uppercase tracking-wider">
                          Core Capabilities:
                        </div>
                        {service.capabilities.slice(0, 3).map((cap, cIdx) => (
                          <div key={cIdx} className="flex items-start gap-2 text-xs sm:text-sm text-[#647080]">
                            <Check className="w-4 h-4 text-[#0F3A5F] shrink-0 mt-0.5" />
                            <span>{cap}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-[#E5E9EF]">
                      <Link
                        href={linkHref}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0F3A5F] group-hover:text-[#0a2740] transition-colors"
                      >
                        <span>Explore Service Details</span>
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 text-[#0F3A5F]" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </StaggerReveal>
        </Container>
      </section>

      <CTASection
        title="Ready to Elevate Your Technology Infrastructure?"
        description="Speak directly with our Chicago-based IT consulting directors to discuss your specific challenges and goals."
      />
    </main>
  );
}
