import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { PageHero } from '@/components/shared/PageHero';
import { Container } from '@/components/shared/Container';
import { CTASection } from '@/components/shared/CTASection';
import { SERVICES } from '@/data/services';
import { Button } from '@/components/ui/Button';
import {
  TrendingUp,
  Cloud,
  Target,
  Globe,
  Users,
  Layers,
  Lightbulb,
  Briefcase,
  CheckCircle2,
  AlertCircle,
  ArrowRight
} from 'lucide-react';

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

import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { StaggerReveal } from '@/components/animations/StaggerReveal';

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug
  }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: 'Service Not Found'
    };
  }

  return {
    title: `${service.title} | Neparica Services`,
    description: service.shortDescription
  };
}

export default async function ServiceDetailPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const Icon = iconMap[service.iconName] || Lightbulb;
  const relatedServices = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <main>
      <PageHero
        eyebrow="Neparica IT Services"
        title={service.title}
        description={service.shortDescription}
        breadcrumbs={[
          { label: 'Services', href: '/services' },
          { label: service.title }
        ]}
      />

      {/* Main Content & Sidebar */}
      <section className="py-16 md:py-24 bg-white border-b border-[#E5E9EF]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Main Content Area */}
            <div className="lg:col-span-8 space-y-12">
              {/* Overview */}
              <ScrollReveal yOffset={20}>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-[#0F3A5F] text-white flex items-center justify-center">
                      <Icon className="w-6 h-6 text-[#27DDE8]" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#141820]">
                      Service Overview
                    </h2>
                  </div>
                  <p className="text-base sm:text-lg text-[#647080] leading-relaxed">
                    {service.fullDescription}
                  </p>
                </div>
              </ScrollReveal>

              {/* Challenges Addressed */}
              {service.businessChallenges && service.businessChallenges.length > 0 && (
                <ScrollReveal yOffset={20}>
                  <div className="bg-[#F6F7F9] rounded-xl border border-[#E5E9EF] p-8">
                    <h3 className="text-xl font-bold text-[#141820] mb-4 flex items-center gap-2">
                      <AlertCircle className="w-5 h-5 text-[#A31718]" />
                      <span>Business Challenges Addressed</span>
                    </h3>
                    <div className="space-y-3">
                      {service.businessChallenges.map((challenge, idx) => (
                        <div key={idx} className="flex items-start gap-3 text-sm text-[#647080]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#A31718] mt-2 shrink-0" />
                          <span>{challenge}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              )}

              {/* Capabilities */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#141820] mb-6">
                  Key Service Capabilities
                </h3>
                <StaggerReveal selector=".cap-card" stagger={0.06}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.capabilities.map((cap, idx) => (
                      <div
                        key={idx}
                        className="cap-card p-5 rounded-lg border border-[#E5E9EF] bg-white shadow-sm flex items-start gap-3 hover:border-[#0F3A5F]/40 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200"
                      >
                        <CheckCircle2 className="w-5 h-5 text-[#0F3A5F] shrink-0 mt-0.5" />
                        <span className="text-sm font-medium text-[#141820]">{cap}</span>
                      </div>
                    ))}
                  </div>
                </StaggerReveal>
              </div>

              {/* Process & Delivery Method */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#141820] mb-6">
                  Our Execution Process
                </h3>
                <div className="space-y-4">
                  {service.process.map((step, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-lg border border-[#E5E9EF] bg-[#F6F7F9] flex items-start gap-4"
                    >
                      <div className="w-7 h-7 rounded-full bg-[#0F3A5F] text-white flex items-center justify-center text-xs font-bold shrink-0">
                        {idx + 1}
                      </div>
                      <p className="text-sm text-[#647080] leading-relaxed pt-0.5">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deliverables if any */}
              {service.deliverables && (
                <div className="p-8 rounded-xl bg-[#0F3A5F]/5 border border-[#0F3A5F]/20">
                  <h4 className="text-lg font-bold text-[#0F3A5F] mb-4">
                    What We Deliver
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-[#141820] font-medium">
                        <CheckCircle2 className="w-4 h-4 text-[#0F3A5F]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-8">
              {/* Consultation Card */}
              <div className="p-7 rounded-xl bg-[#101827] text-white border border-[#1e293b] shadow-lg space-y-5">
                <div className="text-xs font-semibold text-[#27DDE8] uppercase tracking-wider">
                  Request Consultation
                </div>
                <h3 className="text-xl font-bold text-white">
                  Need {service.title}?
                </h3>
                <p className="text-xs sm:text-sm text-[#9BAAAA] leading-relaxed">
                  Schedule a complimentary discovery consultation with our senior Chicago technology leads.
                </p>
                <Button
                  href="/contact"
                  variant="primary"
                  size="md"
                  withArrow
                  className="w-full bg-[#0F3A5F] hover:bg-[#164a78] border border-[#24527d] text-white"
                >
                  Request Consultation
                </Button>
              </div>

              {/* Related Services */}
              <div className="p-7 rounded-xl border border-[#E5E9EF] bg-[#F6F7F9]">
                <h4 className="text-base font-bold text-[#141820] mb-4">
                  Related Services
                </h4>
                <div className="space-y-3">
                  {relatedServices.map((rel) => {
                    const linkHref = rel.slug === 'growth-strategy' ? '/growth-strategy' : `/services/${rel.slug}`;
                    return (
                      <Link
                        key={rel.slug}
                        href={linkHref}
                        className="block p-3 rounded-md bg-white border border-[#E5E9EF] hover:border-[#cbd5e1] hover:shadow-sm transition-all"
                      >
                        <div className="text-sm font-semibold text-[#141820] hover:text-[#0F3A5F]">
                          {rel.title}
                        </div>
                        <div className="text-xs text-[#647080] line-clamp-1 mt-0.5">
                          {rel.shortDescription}
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CTASection />
    </main>
  );
}
