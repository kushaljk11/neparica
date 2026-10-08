import React from 'react';
import type { Metadata } from 'next';
import { PageHero } from '@/components/shared/PageHero';
import { Container } from '@/components/shared/Container';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { CTASection } from '@/components/shared/CTASection';
import { Button } from '@/components/ui/Button';
import {
  TrendingUp,
  Workflow,
  GitBranch,
  Target,
  BarChart3,
  Layers,
  CheckCircle2,
  Sparkles,
  ArrowRight
} from 'lucide-react';

import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { StaggerReveal } from '@/components/animations/StaggerReveal';

export const metadata: Metadata = {
  title: 'Growth Strategy Consulting',
  description: 'Operations analysis, process mapping, and strategic digitization consulting for small and mid-sized businesses. Connect business processes with the right IT solutions.'
};

export default function GrowthStrategyPage() {
  const steps = [
    {
      num: '01',
      title: 'Operational Model & Process Mapping',
      tagline: 'FREE Initial Assessment',
      description: 'First, we capture operations activities in a comprehensive visual process flow. We evaluate current workflows to discover bottlenecks and redundancies before prescribing any technical remedy.',
      bullets: [
        'End-to-end activity mapping from client inquiry to delivery',
        'Identification of manual bottlenecks and repetitive handoffs',
        'Analysis of existing software tools and data silos'
      ]
    },
    {
      num: '02',
      title: 'Unified Process Assessment via Little’s Law',
      tagline: 'Scientific operational modeling',
      description: 'Second, we carefully assess the organization in the context of its unified processes rather than isolated, siloed functions using Little’s Law (Work-in-Process = Throughput × Lead Time).',
      bullets: [
        'Eliminating cross-departmental queues and administrative lags',
        'Optimizing lead times and inventory/work-in-progress cycles',
        'Discovering whether operational buffers are set in an optimal configuration'
      ]
    },
    {
      num: '03',
      title: 'Strategic Alignment of IT, Operations & Strategy',
      tagline: 'Harmonizing digital systems with business goals',
      description: 'Third, we ensure the organization’s Digital (IT), Operational, and Strategic frameworks are completely aligned so technical spend generates direct enterprise value.',
      bullets: [
        'Bridging the divide between operational reality and software capabilities',
        'Prioritizing high-impact automation initiatives over superficial features',
        'Establishing clean data governance for reliable decision-making'
      ]
    },
    {
      num: '04',
      title: 'Digitization Roadmap & Quantifiable ROI',
      tagline: 'Demonstrating before-and-after metrics',
      description: 'Finally, we produce actionable digitization recommendations with measurable benchmarks, proving quantifiable time and capital savings before software engineering begins.',
      bullets: [
        'Demonstrated quantifiable metrics: Before and After Digitization',
        'Transparent cost-benefit and capital payback timeline projections',
        'Resource diversification plan: Onshore, Remote, and Offshore balance'
      ]
    }
  ];

  return (
    <main>
      <PageHero
        eyebrow="Consulting Methodology"
        title="Growth Strategy Consulting"
        description="We are not only IT experts—we understand your operational aspects and challenges. We connect the dots among your business processes to optimize them before prescribing the right IT solutions."
        breadcrumbs={[{ label: 'Services', href: '/services' }, { label: 'Growth Strategy' }]}
      />

      {/* Strategic Foundation Section */}
      <section className="py-16 md:py-24 bg-white border-b border-[#E5E9EF]">
        <Container>
          <ScrollReveal yOffset={24}>
            <div className="max-w-4xl mx-auto space-y-6 text-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#0F3A5F] bg-[#0F3A5F]/10 px-3 py-1 rounded-full border border-[#0F3A5F]/15">
                The Consulting Difference
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#141820]">
                Operational Analysis Before Software Development
              </h2>
              <p className="text-base sm:text-lg text-[#647080] leading-relaxed text-left sm:text-center">
                Too many technology providers jump immediately into selling software licenses or writing code without understanding the underlying business operational model. At Neparica, we recognize that digitizing a broken process only automates inefficiency. We specialize in helping small and mid-sized companies by creating genuine value for their business and their customers through rigorous, proven operational steps.
              </p>
            </div>
          </ScrollReveal>

          {/* 4 Step Process Cards */}
          <StaggerReveal selector=".step-card" stagger={0.1} className="mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {steps.map((step) => (
                <div
                  key={step.num}
                  className="step-card group bg-[#F6F7F9] rounded-xl border border-[#E5E9EF] p-8 flex flex-col justify-between transition-all duration-300 hover:border-[#0F3A5F]/40 hover:-translate-y-1 hover:shadow-xl hover:bg-white"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-3xl font-bold font-mono text-[#0F3A5F] transition-transform duration-300 group-hover:scale-105">
                        {step.num}
                      </span>
                      <span className="text-xs font-semibold text-[#A31718] bg-[#A31718]/10 px-3 py-1 rounded-full">
                        {step.tagline}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-[#141820] mb-3 group-hover:text-[#0F3A5F] transition-colors">
                      {step.title}
                    </h3>

                    <p className="text-sm text-[#647080] leading-relaxed mb-6">
                      {step.description}
                    </p>

                    <div className="space-y-2.5 pt-4 border-t border-[#E5E9EF]">
                      {step.bullets.map((b, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#141820]">
                          <CheckCircle2 className="w-4 h-4 text-[#0F3A5F] shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </StaggerReveal>
        </Container>
      </section>

      {/* Resource Diversification Section */}
      <section className="py-16 md:py-24 bg-[#F6F7F9] border-b border-[#E5E9EF]">
        <Container>
          <ScrollReveal yOffset={30}>
            <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-[#E5E9EF] p-8 sm:p-12 shadow-sm space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase text-[#0F3A5F]">
                <Sparkles className="w-4 h-4 text-[#A31718]" />
                <span>Operational Resilience Strategy</span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-bold text-[#141820]">
                Resource Diversification: Onshore, Remote &amp; Offshore Balance
              </h3>

              <p className="text-base text-[#647080] leading-relaxed">
                In an unpredictable macroeconomic environment, it is more important than ever before to diversify human capital. Relying solely on local hiring exposes companies to extreme salary overhead and recruitment bottlenecks. Relying blindly on unmanaged freelancers leads to quality erosion.
              </p>

              <p className="text-base text-[#647080] leading-relaxed">
                Neparica establishes an optimal resource balance: local Chicago project governance paired with high-skilled dedicated offshore squads. This structure protects your operating budget with 30–50% savings while hardening business continuity with 24/7 technical execution.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                <Button href="/contact" variant="primary" size="lg" withArrow>
                  Schedule Free Operational Assessment
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      <CTASection />
    </main>
  );
}
