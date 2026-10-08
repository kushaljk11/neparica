import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { PageHero } from '@/components/shared/PageHero';
import { Container } from '@/components/shared/Container';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { CTASection } from '@/components/shared/CTASection';
import { SOLUTIONS } from '@/data/solutions';
import { ShoppingCart, Cpu, Smartphone, Layout, Globe, BarChart3, ArrowRight, Check } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Solutions & Software Platforms',
  description: 'Enterprise-grade software solutions: E-commerce, Custom Software, Mobile Apps, Dynamic CMS Websites, Custom Web Applications, and Accounting/ERP Systems.'
};

const iconMap: Record<string, React.ElementType> = {
  ShoppingCart,
  Cpu,
  Smartphone,
  Layout,
  Globe,
  BarChart3
};

import { StaggerReveal } from '@/components/animations/StaggerReveal';

export default function SolutionsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Software Products & Engineering"
        title="Right Solutions. Right Technology."
        description="We engineer bespoke software and turnkey platforms tailored to the operational workflows of small and mid-sized enterprises."
        breadcrumbs={[{ label: 'Solutions' }]}
      />

      <section className="py-16 md:py-24 bg-white border-b border-[#E5E9EF]">
        <Container>
          <StaggerReveal selector=".solution-card" stagger={0.08}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {SOLUTIONS.map((solution) => {
                const Icon = iconMap[solution.iconName] || Globe;
                const linkHref = solution.slug === 'accounting-system' ? '/accounting-system' : `/solutions/${solution.slug}`;

                return (
                  <div
                    key={solution.slug}
                    className="solution-card group bg-[#F6F7F9] rounded-xl border border-[#E5E9EF] overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-[#0F3A5F]/40 hover:-translate-y-1 hover:shadow-xl hover:bg-white"
                  >
                    <div>
                      {solution.image && (
                        <div className="relative h-48 w-full bg-slate-200 overflow-hidden">
                          <Image
                            src={solution.image}
                            alt={solution.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, 400px"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#101827]/80 via-transparent to-transparent" />
                          <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                            <span className="text-xs font-semibold uppercase tracking-wider bg-[#0F3A5F]/90 backdrop-blur px-2.5 py-1 rounded">
                              {solution.title}
                            </span>
                          </div>
                        </div>
                      )}

                      <div className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-9 h-9 rounded-md bg-[#0F3A5F]/10 text-[#0F3A5F] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
                            <Icon className="w-4 h-4 text-[#0F3A5F]" />
                          </div>
                          <h2 className="text-lg font-bold text-[#141820] group-hover:text-[#0F3A5F] transition-colors">
                            {solution.title}
                          </h2>
                        </div>

                        <p className="text-xs sm:text-sm text-[#647080] leading-relaxed mb-5">
                          {solution.shortDescription}
                        </p>

                        <div className="space-y-1.5 mb-5">
                          {solution.features.slice(0, 3).map((feat, fIdx) => (
                            <div key={fIdx} className="flex items-start gap-2 text-xs text-[#647080]">
                              <Check className="w-3.5 h-3.5 text-[#0F3A5F] shrink-0 mt-0.5" />
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="p-6 pt-0">
                      <div className="pt-4 border-t border-[#E5E9EF]">
                        <Link
                          href={linkHref}
                          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#0F3A5F] group-hover:text-[#0a2740] transition-colors"
                        >
                          <span>Explore Solution</span>
                          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </StaggerReveal>
        </Container>
      </section>

      <CTASection
        title="Looking for a Custom Software Solution?"
        description="Share your requirements with our system architects to get an accurate, fixed-scope or agile proposal."
      />
    </main>
  );
}
