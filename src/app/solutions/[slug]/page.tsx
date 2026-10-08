import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { PageHero } from '@/components/shared/PageHero';
import { Container } from '@/components/shared/Container';
import { CTASection } from '@/components/shared/CTASection';
import { SOLUTIONS } from '@/data/solutions';
import { Button } from '@/components/ui/Button';
import {
  ShoppingCart,
  Cpu,
  Smartphone,
  Layout,
  Globe,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  Sparkles
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  ShoppingCart,
  Cpu,
  Smartphone,
  Layout,
  Globe,
  BarChart3
};

import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { ImageReveal } from '@/components/animations/ImageReveal';
import { StaggerReveal } from '@/components/animations/StaggerReveal';

export async function generateStaticParams() {
  return SOLUTIONS.map((sol) => ({
    slug: sol.slug
  }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const solution = SOLUTIONS.find((s) => s.slug === slug);

  if (!solution) {
    return {
      title: 'Solution Not Found'
    };
  }

  return {
    title: `${solution.title} | Neparica Solutions`,
    description: solution.shortDescription
  };
}

export default async function SolutionDetailPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const solution = SOLUTIONS.find((s) => s.slug === slug);

  if (!solution) {
    notFound();
  }

  const Icon = iconMap[solution.iconName] || Globe;
  const relatedSolutions = SOLUTIONS.filter((s) => s.slug !== solution.slug).slice(0, 3);

  return (
    <main>
      <PageHero
        eyebrow="Software & Engineering"
        title={solution.title}
        description={solution.shortDescription}
        breadcrumbs={[
          { label: 'Solutions', href: '/solutions' },
          { label: solution.title }
        ]}
      />

      <section className="py-16 md:py-24 bg-white border-b border-[#E5E9EF]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Main Content Area */}
            <div className="lg:col-span-8 space-y-12">
              {/* Image banner if present */}
              {solution.image && (
                <ImageReveal className="rounded-2xl border border-[#E5E9EF] shadow-md bg-slate-100">
                  <div className="relative h-64 sm:h-80 w-full">
                    <Image
                      src={solution.image}
                      alt={solution.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 800px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#101827]/70 via-transparent to-transparent" />
                  </div>
                </ImageReveal>
              )}

              {/* Solution Overview */}
              <ScrollReveal yOffset={20}>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-[#0F3A5F] text-white flex items-center justify-center">
                      <Icon className="w-6 h-6 text-[#27DDE8]" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#141820]">
                      Solution Overview
                    </h2>
                  </div>
                  <p className="text-base sm:text-lg text-[#647080] leading-relaxed">
                    {solution.fullDescription}
                  </p>
                </div>
              </ScrollReveal>

              {/* Core Features */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#141820] mb-6">
                  Core Solution Features
                </h3>
                <StaggerReveal selector=".feature-card" stagger={0.06}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {solution.features.map((feat, idx) => (
                      <div
                        key={idx}
                        className="feature-card p-5 rounded-lg border border-[#E5E9EF] bg-[#F6F7F9] flex items-start gap-3 hover:border-[#0F3A5F]/40 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200"
                      >
                        <CheckCircle2 className="w-5 h-5 text-[#0F3A5F] shrink-0 mt-0.5" />
                        <span className="text-sm font-medium text-[#141820]">{feat}</span>
                      </div>
                    ))}
                  </div>
                </StaggerReveal>
              </div>

              {/* Key Business Benefits */}
              <div className="bg-[#0F3A5F]/5 rounded-xl border border-[#0F3A5F]/15 p-8">
                <h3 className="text-xl font-bold text-[#0F3A5F] mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#A31718]" />
                  <span>Key Business Benefits</span>
                </h3>
                <div className="space-y-3">
                  {solution.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm text-[#141820]">
                      <span className="w-2 h-2 rounded-full bg-[#0F3A5F] mt-2 shrink-0" />
                      <span className="font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Suitable For */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#141820] mb-4">
                  Who This Solution is Best For
                </h3>
                <div className="space-y-3">
                  {solution.suitableFor.map((item, idx) => (
                    <div key={idx} className="p-4 rounded-lg border border-[#E5E9EF] bg-white text-sm text-[#647080]">
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              {solution.techStack && (
                <div>
                  <h4 className="text-base font-bold text-[#141820] mb-3">
                    Supported Technologies & Frameworks
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {solution.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3.5 py-1.5 rounded-md text-xs font-semibold bg-[#F6F7F9] text-[#0F3A5F] border border-[#E5E9EF]"
                      >
                        {tech}
                      </span>
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
                  Custom Architecture
                </div>
                <h3 className="text-xl font-bold text-white">
                  Build Your {solution.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#9BAAAA] leading-relaxed">
                  Discuss your functional specifications and receive a customized technology proposal and timeline.
                </p>
                <Button
                  href="/contact"
                  variant="primary"
                  size="md"
                  withArrow
                  className="w-full bg-[#0F3A5F] hover:bg-[#164a78] border border-[#24527d] text-white"
                >
                  Request Architecture Call
                </Button>
              </div>

              {/* Related Solutions */}
              <div className="p-7 rounded-xl border border-[#E5E9EF] bg-[#F6F7F9]">
                <h4 className="text-base font-bold text-[#141820] mb-4">
                  Other Solutions
                </h4>
                <div className="space-y-3">
                  {relatedSolutions.map((rel) => {
                    const linkHref = rel.slug === 'accounting-system' ? '/accounting-system' : `/solutions/${rel.slug}`;
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
