'use client';

import React, { useEffect, useRef } from 'react';
import { Container } from '@/components/shared/Container';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { Search, PenTool, Code2, Rocket } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const FOUR_D_STEPS = [
  {
    number: '01',
    title: 'Discover',
    description: 'Understand your business goals, challenges, and technical requirements.',
    icon: Search
  },
  {
    number: '02',
    title: 'Design',
    description: 'Create practical, client-approved solutions tailored to your needs.',
    icon: PenTool
  },
  {
    number: '03',
    title: 'Develop',
    description: 'Build reliable solutions using appropriate technologies and coding standards.',
    icon: Code2
  },
  {
    number: '04',
    title: 'Deliver',
    description: 'Test, refine, and deliver solutions with quality and confidence.',
    icon: Rocket
  }
];

export function FourDApproach() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const cards = cardsContainerRef.current?.querySelectorAll('.four-d-card');
      const line = lineRef.current;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: 'top 78%',
          once: true
        }
      });

      // 1. Heading subtle fade-up
      if (headingRef.current) {
        tl.fromTo(
          headingRef.current,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.65, ease: 'power3.out' }
        );
      }

      // 2. Reveal all four cards with a stagger of 0.12s
      if (cards && cards.length > 0) {
        tl.fromTo(
          cards,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.12,
            ease: 'power3.out'
          },
          '-=0.3'
        );
      }

      // 3. Animate connector from left to right once cards start appearing
      if (line) {
        tl.fromTo(
          line,
          { scaleX: 0, transformOrigin: 'left center' },
          { scaleX: 1, duration: 0.7, ease: 'power2.inOut' },
          '-=0.45'
        );
      }
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#101827] text-white py-16 sm:py-20 md:py-24 border-b border-[#1e293b] relative overflow-hidden"
    >
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#0F3A5F]/20 rounded-full blur-[100px] pointer-events-none" />

      <Container className="relative z-10">
        {/* Centered Section Heading */}
        <div ref={headingRef} className="mb-10 sm:mb-12">
          <SectionHeading
            eyebrow="Proven Methodology"
            title="The 4D Approach"
            description="A structured delivery framework that aligns operational strategy with technical execution."
            align="center"
            theme="dark"
          />
        </div>

        {/* Thin, subtle process connector on desktop */}
        <div className="hidden lg:block relative mb-6 px-4">
          <div className="h-[1px] w-full bg-white/10 relative overflow-hidden">
            <div
              ref={lineRef}
              className="absolute inset-0 bg-gradient-to-r from-[#27DDE8]/80 via-[#27DDE8] to-[#27DDE8]/80 origin-left"
            />
          </div>
        </div>

        {/* 4D Cards: 4 equal-width on desktop, 2x2 on tablet, 1-col on mobile */}
        <div
          ref={cardsContainerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5"
        >
          {FOUR_D_STEPS.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="four-d-card group relative bg-[#152033] rounded-lg border border-white/10 p-5 sm:p-6 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:border-[#27DDE8]/60 hover:shadow-lg hover:shadow-[#27DDE8]/5"
              >
                <div>
                  {/* Top: Step number and small icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-semibold text-[#27DDE8] tracking-wider uppercase">
                      {step.number}
                    </span>
                    <div className="w-7 h-7 rounded bg-white/5 border border-white/10 flex items-center justify-center text-[#27DDE8] transition-colors duration-200 group-hover:bg-[#27DDE8]/10 group-hover:border-[#27DDE8]/30">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Heading */}
                  <h3 className="text-lg font-bold text-white tracking-tight mb-2 group-hover:text-[#27DDE8] transition-colors duration-200">
                    {step.title}
                  </h3>

                  {/* Short 8-12 word description */}
                  <p className="text-xs sm:text-sm text-[#9BAAAA] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
