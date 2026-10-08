'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/shared/Container';
import { Button } from '@/components/ui/Button';
import {
  DollarSign,
  Clock,
  ShieldCheck,
  Layers,
  HeartHandshake,
  Check,
  ChevronDown,
  ArrowRight,
  PhoneCall,
  Mail
} from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';
import { VALUE_PROPOSITIONS } from '@/data/valuePropositions';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const PILLAR_ICONS = [
  DollarSign,
  Clock,
  ShieldCheck,
  Layers,
  HeartHandshake
];

const OVERVIEW_ITEMS = [
  {
    id: 1,
    number: '01',
    title: 'Big Cost Saving',
    subtitle: '30–50% cost advantage',
    icon: DollarSign,
    anchor: 'pillar-1'
  },
  {
    id: 2,
    number: '02',
    title: 'Faster Delivery Time',
    subtitle: '24/7 global pipeline',
    icon: Clock,
    anchor: 'pillar-2'
  },
  {
    id: 3,
    number: '03',
    title: 'Quality You Deserve',
    subtitle: 'USA project oversight',
    icon: ShieldCheck,
    anchor: 'pillar-3'
  },
  {
    id: 4,
    number: '04',
    title: 'Convenience',
    subtitle: '1-stop technology partner',
    icon: Layers,
    anchor: 'pillar-4'
  },
  {
    id: 5,
    number: '05',
    title: 'Partnership',
    subtitle: 'Long-term business alignment',
    icon: HeartHandshake,
    anchor: 'pillar-5'
  }
];

interface PillarSectionProps {
  prop: (typeof VALUE_PROPOSITIONS)[0];
  index: number;
  isEven: boolean;
  Icon: React.ElementType;
}

function PillarSection({ prop, index, isEven, Icon }: PillarSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textColRef = useRef<HTMLDivElement>(null);
  const imageColRef = useRef<HTMLDivElement>(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const textCol = textColRef.current;
      const imgCol = imageColRef.current;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: 'top 75%',
          once: true
        }
      });

      if (textCol) {
        const eyebrow = textCol.querySelector('.pillar-eyebrow');
        const title = textCol.querySelector('.pillar-title');
        const tagline = textCol.querySelector('.pillar-tagline');
        const desc = textCol.querySelector('.pillar-desc');
        const benefits = textCol.querySelectorAll('.pillar-benefit-item');

        if (eyebrow) {
          tl.fromTo(eyebrow, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' });
        }
        if (title) {
          tl.fromTo(title, { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.35');
        }
        if (tagline) {
          tl.fromTo(tagline, { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, '-=0.4');
        }
        if (desc) {
          tl.fromTo(desc, { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.55, ease: 'power2.out' }, '-=0.35');
        }
        if (benefits.length > 0) {
          tl.fromTo(
            benefits,
            { opacity: 0, y: 14 },
            { opacity: 1, y: 0, duration: 0.5, stagger: 0.09, ease: 'power2.out' },
            '-=0.3'
          );
        }
      }

      if (imgCol) {
        const imageWrapper = imgCol.querySelector('.pillar-image-wrapper');
        if (imageWrapper) {
          // Subtle fade and horizontal translation of approximately 20px without dimension/scale changes
          const xOffset = isEven ? 20 : -20;
          tl.fromTo(
            imageWrapper,
            { opacity: 0, x: xOffset },
            { opacity: 1, x: 0, duration: 0.7, ease: 'power2.out' },
            '-=0.5'
          );
        }
      }
    }, el);

    return () => ctx.revert();
  }, [isEven]);

  // Top 3 concise benefits derived from verified content
  const primaryBenefits = prop.detailedPoints.slice(0, 3);
  const additionalBenefits = prop.detailedPoints.slice(3);

  return (
    <section
      id={`pillar-${prop.id}`}
      ref={sectionRef}
      className={`py-16 md:py-20 lg:py-24 border-b border-[#E5E9EF] ${
        isEven ? 'bg-[#F8FAFC]' : 'bg-white'
      }`}
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 xl:gap-20 items-start">
          {/* Content Column (Approx 55% on desktop, order-2 on mobile so image is above) */}
          <div
            ref={textColRef}
            className={`order-2 lg:col-span-7 space-y-5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
          >
            {/* 1. Small Numbered Eyebrow */}
            <div className="pillar-eyebrow flex items-center gap-2.5">
              <span className="font-mono text-xs font-bold text-[#0F3A5F] bg-[#0F3A5F]/10 px-2.5 py-1 rounded">
                0{prop.id} / 05
              </span>
              <span className="text-xs font-semibold text-[#647080] uppercase tracking-wider">
                Value Pillar
              </span>
            </div>

            {/* 2. Proposition Title */}
            <h2 className="pillar-title text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#141820] leading-tight">
              {prop.title}
            </h2>

            {/* 3. Short Supporting Statement */}
            <div className="pillar-tagline text-sm sm:text-base font-semibold text-[#0F3A5F] bg-[#0F3A5F]/5 p-3.5 rounded-lg border-l-4 border-[#0F3A5F]">
              {prop.tagline}
            </div>

            {/* 4. One Concise Explanatory Paragraph */}
            <p className="pillar-desc text-sm sm:text-base text-[#647080] leading-relaxed">
              {prop.description}
            </p>

            {/* 5. Key Benefits Derived from Verified Content */}
            <div className="space-y-2.5 pt-2">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#141820]">
                Key Advantages:
              </div>
              {primaryBenefits.map((point, pIdx) => (
                <div
                  key={pIdx}
                  className="pillar-benefit-item flex items-start gap-2.5 text-xs sm:text-sm text-[#141820]"
                >
                  <div className="w-5 h-5 rounded-full bg-[#0F3A5F]/10 text-[#0F3A5F] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-medium">{point}</span>
                </div>
              ))}
            </div>

            {/* Expandable Source Material (if additional points exist) */}
            {additionalBenefits.length > 0 && (
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setIsDetailsOpen(!isDetailsOpen)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0F3A5F] hover:text-[#0a2740] transition-colors focus:outline-none"
                >
                  <span>{isDetailsOpen ? 'Hide operational details' : 'View full operational details'}</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      isDetailsOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isDetailsOpen && (
                  <div className="mt-3 pl-4 border-l-2 border-[#0F3A5F]/20 space-y-2 animate-in fade-in duration-200">
                    {additionalBenefits.map((point, aIdx) => (
                      <div key={aIdx} className="flex items-start gap-2 text-xs text-[#647080]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0F3A5F] mt-1.5 shrink-0" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Imagery Column (Approx 45% on desktop, max 520px, order-1 on mobile so image is above) */}
          <div
            ref={imageColRef}
            className={`order-1 lg:col-span-5 w-full flex ${
              isEven ? 'lg:order-2 lg:justify-end' : 'lg:order-1 lg:justify-start'
            } items-start lg:pt-1`}
          >
            <div className="pillar-image-wrapper relative w-full aspect-[16/10] md:aspect-[4/3] max-w-[520px] mx-auto lg:mx-0 overflow-hidden rounded-xl border border-[#E5E9EF] bg-slate-100 shadow-sm">
              <Image
                src={prop.image}
                alt={`${prop.title} - Neparica Value Proposition`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 45vw, 520px"
                className="object-cover"
                priority={index === 0}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default function ValuePropositionPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const overviewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      if (heroRef.current) {
        gsap.fromTo(
          heroRef.current.children,
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.65, stagger: 0.1, ease: 'power3.out' }
        );
      }

      if (overviewRef.current) {
        const cards = overviewRef.current.querySelectorAll('.overview-block');
        gsap.fromTo(
          cards,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.08,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: overviewRef.current,
              start: 'top 85%',
              once: true
            }
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <main>
      {/* ============================================================== */}
      {/* SECTION 1 — Compact Hero (88–112px desktop vertical padding) */}
      {/* ============================================================== */}
      <section className="bg-white border-b border-[#E5E9EF] py-20 md:py-24">
        <Container className="max-w-5xl">
          <div ref={heroRef} className="space-y-4">
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#0F3A5F] bg-[#0F3A5F]/10 px-3 py-1 rounded-full border border-[#0F3A5F]/15">
              WHY NEPARICA
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#141820] leading-[1.15]">
              Technology Partnerships Built Around Your Business.
            </h1>

            <p className="text-base sm:text-lg text-[#647080] max-w-3xl leading-relaxed">
              Five practical advantages that shape how we work, deliver, and support your growth.
            </p>
          </div>
        </Container>
      </section>

      {/* ============================================================== */}
      {/* SECTION 2 — Five Value Pillars Overview (72–88px padding)       */}
      {/* ============================================================== */}
      <section className="bg-[#F8FAFC] py-16 md:py-20 border-b border-[#E5E9EF]">
        <Container>
          <div className="mb-8 flex items-center justify-between">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#0F3A5F]">
                Strategic Pillars
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#141820] mt-1">
                Five Straightforward Commitments
              </h2>
            </div>
            <span className="text-xs text-[#647080] hidden sm:inline">
              Click any pillar to view detailed analysis
            </span>
          </div>

          <div
            ref={overviewRef}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4"
          >
            {OVERVIEW_ITEMS.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.id}
                  href={`#${item.anchor}`}
                  className="overview-block group bg-white rounded-lg border border-[#E5E9EF] p-4 sm:p-5 flex flex-col justify-between transition-all duration-200 hover:border-[#0F3A5F] hover:shadow-sm hover:-translate-y-0.5"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono text-xs font-bold text-[#0F3A5F]">
                        {item.number}
                      </span>
                      <div className="w-7 h-7 rounded bg-[#0F3A5F]/10 text-[#0F3A5F] flex items-center justify-center transition-colors group-hover:bg-[#0F3A5F] group-hover:text-white">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    <h3 className="text-sm font-bold text-[#141820] group-hover:text-[#0F3A5F] transition-colors leading-snug">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-[11px] text-[#647080] mt-2 leading-relaxed line-clamp-2">
                    {item.subtitle}
                  </p>
                </a>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ============================================================== */}
      {/* SECTION 3 — Detailed Value Proposition Sections (Alternating) */}
      {/* ============================================================== */}
      {VALUE_PROPOSITIONS.map((prop, idx) => {
        const isEven = idx % 2 === 1;
        const Icon = PILLAR_ICONS[idx] || ShieldCheck;

        return (
          <PillarSection
            key={prop.id}
            prop={prop}
            index={idx}
            isEven={isEven}
            Icon={Icon}
          />
        );
      })}

      {/* ============================================================== */}
      {/* SECTION 4 — Closing CTA (Dark Navy CTA)                         */}
      {/* ============================================================== */}
      <section className="bg-[#101827] text-white py-16 sm:py-20 border-t border-[#1e293b] relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#0F3A5F]/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#27DDE8]/10 rounded-full blur-2xl pointer-events-none" />

        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#27DDE8] bg-[#27DDE8]/10 border border-[#27DDE8]/20 px-3 py-1 rounded-full">
              Partner With Neparica
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
              Let&apos;s Build a Smarter Way Forward.
            </h2>

            <p className="text-sm sm:text-base text-[#9BAAAA] leading-relaxed max-w-2xl mx-auto">
              Connect with Neparica to discuss technology solutions that support your business goals.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                withArrow
                className="w-full sm:w-auto bg-[#0F3A5F] hover:bg-[#164a78] border border-[#24527d] text-white shadow-md"
              >
                Let&apos;s Talk
              </Button>
            </div>

            <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-[#9BAAAA]">
              <a
                href={`tel:${COMPANY_INFO.contact.phone}`}
                className="inline-flex items-center gap-2 hover:text-white transition-colors"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#27DDE8]" />
                <span>{COMPANY_INFO.contact.phoneDisplay}</span>
              </a>
              <span className="hidden sm:inline text-white/20">•</span>
              <a
                href={`mailto:${COMPANY_INFO.contact.email}`}
                className="inline-flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#27DDE8]" />
                <span>{COMPANY_INFO.contact.email}</span>
              </a>
              <span className="hidden sm:inline text-white/20">•</span>
              <span>Chicago Management • Global Delivery</span>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
