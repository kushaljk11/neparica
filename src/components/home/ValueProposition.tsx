'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Container } from '@/components/shared/Container';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { Button } from '@/components/ui/Button';
import {
  DollarSign,
  Clock,
  ShieldCheck,
  Layers,
  HeartHandshake,
  ChevronDown,
  ArrowRight
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const PROPOSITIONS = [
  {
    id: 1,
    number: '01',
    title: 'Big Cost Saving',
    tagline: 'Nepal is 30–50% cheaper than other offshore locations.',
    description:
      'By leveraging our high-caliber development centers in Nepal alongside Chicago management, Neparica delivers world-class software engineering at 30% to 50% lower cost than domestic or secondary offshore alternatives without sacrificing talent or standards.',
    icon: DollarSign
  },
  {
    id: 2,
    number: '02',
    title: 'Faster Delivery Time',
    tagline: 'Capability to run 24/7 development cycles because of global presence.',
    description:
      'With dual operational hubs spanning the United States and South Asia, Neparica creates a round-the-clock development pipeline. Work assigned during US hours is built overnight and ready for morning review, cutting project cycles in half.',
    icon: Clock
  },
  {
    id: 3,
    number: '03',
    title: 'Quality You Deserve',
    tagline: 'You don’t have to compromise quality over cost. Dedicated USA-based project oversight team.',
    description:
      'Every project is governed by our dedicated US-based project management team. We enforce strict architectural standards, peer code reviews, and multi-tier QA testing across security, functionality, and performance before delivery.',
    icon: ShieldCheck
  },
  {
    id: 4,
    number: '04',
    title: 'Convenience',
    tagline: 'One-stop shop for all your IT needs; USA-based client engagement team.',
    description:
      'No more juggling five different agencies. Neparica acts as your comprehensive single-source IT department with a responsive US point of contact coordinating custom software, cloud infrastructure, and operational growth.',
    icon: Layers
  },
  {
    id: 5,
    number: '05',
    title: 'Partnership',
    tagline: 'We want to grow with you; long-term partnership based on clients’ objectives is our core value.',
    description:
      'We do not view projects as transactional one-off jobs. Neparica measures success by your multi-year business growth, acting as a trusted technology advisor that scales alongside your enterprise over the long haul.',
    icon: HeartHandshake
  }
];

export function ValueProposition() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mobileExpandedIndex, setMobileExpandedIndex] = useState<number | null>(0);
  const leftContentRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Desktop ScrollTrigger registration
  useEffect(() => {
    // Only configure ScrollTrigger for desktop screens (>= 1024px)
    if (typeof window === 'undefined' || window.innerWidth < 1024) return;

    const rows = document.querySelectorAll('.vp-desktop-row');
    if (!rows.length) return;

    const triggers: ScrollTrigger[] = [];

    rows.forEach((row, idx) => {
      const st = ScrollTrigger.create({
        trigger: row,
        start: 'top 55%',
        end: 'bottom 55%',
        onEnter: () => setActiveIndex(idx),
        onEnterBack: () => setActiveIndex(idx)
      });
      triggers.push(st);
    });

    return () => {
      triggers.forEach((t) => t.kill());
    };
  }, []);

  // Subtle fade & upward animation when active index changes on desktop
  useEffect(() => {
    const el = leftContentRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    gsap.fromTo(
      el,
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.38, ease: 'power2.out' }
    );
  }, [activeIndex]);

  const activeProp = PROPOSITIONS[activeIndex];
  const ActiveIcon = activeProp.icon;

  const scrollToRow = (index: number) => {
    setActiveIndex(index);
    const row = document.getElementById(`vp-row-${index}`);
    if (row) {
      row.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const toggleMobileAccordion = (index: number) => {
    setMobileExpandedIndex(mobileExpandedIndex === index ? null : index);
  };

  return (
    <section className="bg-[#F8FAFC] py-16 sm:py-20 md:py-24 border-b border-[#E5E9EF] relative">
      <Container>
        <SectionHeading
          eyebrow="Our Value Proposition"
          title="Why Businesses Choose Neparica"
          description="Five straightforward pillars designed to maximize ROI, accelerate delivery cycles, and guarantee dependable long-term IT stability."
          align="center"
        />

        {/* ============================================================== */}
        {/* DESKTOP LAYOUT (>= 1024px): Two-Column Interactive Sticky Scroll */}
        {/* ============================================================== */}
        <div ref={containerRef} className="hidden lg:grid lg:grid-cols-12 gap-12 xl:gap-16 mt-12 items-start">
          {/* Left Column (Approx 45%): Sticky Details Panel */}
          <div className="lg:col-span-5 sticky top-28 self-start">
            <div className="bg-white rounded-xl border border-[#E2E8F0] p-8 shadow-sm">
              {/* Animated Inner Content */}
              <div ref={leftContentRef} className="space-y-6">
                {/* Header: Number & Minimal Icon */}
                <div className="flex items-center justify-between pb-4 border-b border-[#F1F5F9]">
                  <div className="flex items-center gap-2 font-mono text-sm font-bold text-[#0F3A5F]">
                    <span className="text-xl text-[#0F3A5F]">{activeProp.number}</span>
                    <span className="text-[#94A3B8]">/</span>
                    <span className="text-[#94A3B8]">05</span>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-[#0F3A5F]/10 text-[#0F3A5F] flex items-center justify-center">
                    <ActiveIcon className="w-5 h-5 text-[#0F3A5F]" />
                  </div>
                </div>

                {/* Proposition Heading */}
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#141820]">
                    {activeProp.title}
                  </h3>
                  <p className="text-sm font-semibold text-[#0F3A5F] mt-1.5 leading-snug">
                    {activeProp.tagline}
                  </p>
                </div>

                {/* Explanation */}
                <p className="text-sm text-[#647080] leading-relaxed">
                  {activeProp.description}
                </p>

                {/* Progress Indicator (5 Segments) */}
                <div className="pt-2">
                  <div className="flex items-center justify-between text-xs font-medium text-[#94A3B8] mb-2">
                    <span>Proposition Progress</span>
                    <span>{activeIndex + 1} of 5</span>
                  </div>
                  <div className="flex items-center gap-1.5 w-full">
                    {PROPOSITIONS.map((_, idx) => (
                      <div
                        key={idx}
                        className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                          idx === activeIndex
                            ? 'bg-[#0F3A5F]'
                            : idx < activeIndex
                            ? 'bg-[#0F3A5F]/40'
                            : 'bg-[#E2E8F0]'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Link to Dedicated Page */}
                <div className="pt-2">
                  <Link
                    href="/value-proposition"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0F3A5F] hover:text-[#0a2740] transition-colors"
                  >
                    <span>Read full details on Value Proposition page</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (Approx 55%): Vertically Arranged Compact Rows */}
          <div className="lg:col-span-7 space-y-6 pb-12">
            {PROPOSITIONS.map((prop, idx) => {
              const isActive = activeIndex === idx;
              const Icon = prop.icon;

              return (
                <div
                  key={prop.id}
                  id={`vp-row-${idx}`}
                  onClick={() => scrollToRow(idx)}
                  className={`vp-desktop-row cursor-pointer rounded-xl p-6 sm:p-7 transition-all duration-300 ${
                    isActive
                      ? 'bg-white border-l-4 border-l-[#0F3A5F] border-t-[#E2E8F0] border-r-[#E2E8F0] border-b-[#E2E8F0] border shadow-md opacity-100'
                      : 'bg-white/70 border border-[#E2E8F0] opacity-60 hover:opacity-100 hover:border-[#CBD5E1] shadow-none'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <span
                        className={`font-mono text-base font-bold shrink-0 mt-0.5 ${
                          isActive ? 'text-[#0F3A5F]' : 'text-[#94A3B8]'
                        }`}
                      >
                        {prop.number}
                      </span>
                      <div>
                        <h4
                          className={`text-lg sm:text-xl font-bold transition-colors ${
                            isActive ? 'text-[#0F3A5F]' : 'text-[#141820]'
                          }`}
                        >
                          {prop.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-[#647080] mt-1 line-clamp-2 leading-relaxed">
                          {prop.tagline}
                        </p>
                      </div>
                    </div>

                    <div
                      className={`w-8 h-8 rounded-md flex items-center justify-center shrink-0 transition-colors ${
                        isActive
                          ? 'bg-[#0F3A5F] text-white'
                          : 'bg-[#F1F5F9] text-[#94A3B8]'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ============================================================== */}
        {/* MOBILE / TABLET LAYOUT (< 1024px): Compact Expandable Accordions */}
        {/* ============================================================== */}
        <div className="block lg:hidden mt-8 space-y-3.5">
          {PROPOSITIONS.map((prop, idx) => {
            const isExpanded = mobileExpandedIndex === idx;
            const Icon = prop.icon;

            return (
              <div
                key={prop.id}
                className="bg-white rounded-xl border border-[#E2E8F0] overflow-hidden shadow-sm transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleMobileAccordion(idx)}
                  aria-expanded={isExpanded}
                  className="w-full text-left p-5 flex items-start justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-[#0F3A5F]/20"
                >
                  <div className="flex items-start gap-3.5">
                    <span className="font-mono text-xs font-bold text-[#0F3A5F] mt-0.5">
                      {prop.number}
                    </span>
                    <div>
                      <h4 className="text-base font-bold text-[#141820]">
                        {prop.title}
                      </h4>
                      <p className="text-xs text-[#647080] mt-0.5 line-clamp-1">
                        {prop.tagline}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <div className="w-7 h-7 rounded bg-[#0F3A5F]/10 text-[#0F3A5F] flex items-center justify-center">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 text-[#647080] transition-transform duration-200 ${
                        isExpanded ? 'rotate-180 text-[#0F3A5F]' : ''
                      }`}
                    />
                  </div>
                </button>

                {isExpanded && (
                  <div className="px-5 pb-5 pt-1 border-t border-[#F1F5F9] space-y-3">
                    <p className="text-xs sm:text-sm font-semibold text-[#0F3A5F]">
                      {prop.tagline}
                    </p>
                    <p className="text-xs sm:text-sm text-[#647080] leading-relaxed">
                      {prop.description}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Call to Action Button */}
        <div className="mt-12 text-center">
          <Button href="/value-proposition" variant="outline" size="md" withArrow>
            Explore Our Complete Approach
          </Button>
        </div>
      </Container>
    </section>
  );
}
