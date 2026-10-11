'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Container } from '@/components/shared/Container';
import { Button } from '@/components/ui/Button';
import { CheckCircle2, ShieldCheck, Clock, Users } from 'lucide-react';
import gsap from 'gsap';

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const credibilityRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // 1. Eyebrow badge
      if (eyebrowRef.current) {
        tl.fromTo(
          eyebrowRef.current,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.6 }
        );
      }

      // 2. Headline
      if (headingRef.current) {
        tl.fromTo(
          headingRef.current,
          { opacity: 0, y: 32 },
          { opacity: 1, y: 0, duration: 0.9 },
          '-=0.3'
        );
      }

      // 3. Description
      if (descRef.current) {
        tl.fromTo(
          descRef.current,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.75 },
          '-=0.45'
        );
      }

      // 4. CTA buttons
      if (ctaRef.current) {
        tl.fromTo(
          ctaRef.current.children,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 },
          '-=0.4'
        );
      }

      // 5. Credibility items
      if (credibilityRef.current) {
        tl.fromTo(
          credibilityRef.current.children,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.08 },
          '-=0.3'
        );
      }

      // 6. Hero image composition subtle entrance
      if (visualRef.current) {
        tl.fromTo(
          visualRef.current,
          { opacity: 0, scale: 0.98, y: 30 },
          { opacity: 1, scale: 1, y: 0, duration: 1.1 },
          '-=1.0'
        );
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative bg-white pt-12 pb-16 md:pt-20 md:pb-28 overflow-hidden border-b border-border-light">
      {/* Background subtle gradient elements */}
      <div className="absolute top-0 right-0 w-125 h-125 bg-primary/5 rounded-full blur-3xl pointer-events-none -mr-32 -mt-32" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-accent-cyan/5 rounded-full blur-2xl pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 xl:gap-12 items-center">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-6">
            <div
              ref={eyebrowRef}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/15 text-primary text-xs sm:text-sm font-semibold"
            >
              <span className="w-2 h-2 rounded-full bg-accent-red animate-pulse" />
              <span>1 Stop IT Partner Since 2004</span>
            </div>

            <div className="space-y-3">
              <h1
                ref={headingRef}
                className="text-3xl sm:text-5xl xl:text-5xl font-extrabold tracking-tight text-primary leading-[1.12]"
              >
                AI TRANSFORMATION <span className="text-accent-red">&amp;</span>{' '}
                <span className="block text-primary">DIGITAL SOLUTIONS</span>
              </h1>

              <p className="text-lg sm:text-xl font-bold text-text-main tracking-tight">
                Your Business. Smarter. Stronger. Ready to Grow.
              </p>
            </div>

            <p
              ref={descRef}
              className="text-base sm:text-lg text-text-muted leading-relaxed max-w-xl"
            >
              Simplify operations, empower your team, and scale with confidence through IT, AI, and software solutions.
            </p>

            {/* Red accent bar + Tagline */}
            <div className="flex items-center gap-3 pt-1">
              <span className="text-base sm:text-lg font-bold italic text-primary">
                Local Touch + Global Talent = Your Growth.
              </span>
            </div>

            <div
              ref={ctaRef}
              className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5"
            >
              <Button href="/contact" variant="accent" size="lg" withArrow>
                Let&apos;s Talk About Your Business
              </Button>
              <Button href="/services" variant="secondary" size="lg">
                Explore Services
              </Button>
            </div>

            {/* Credibility highlights */}
            <div
              ref={credibilityRef}
              className="pt-6 border-t border-border-light grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs sm:text-sm text-text-muted"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent-red shrink-0" />
                <span className="font-medium text-text-main">260+ Clients Served</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
                <span className="font-medium text-text-main">Evolving Daily for 22+ Years</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary shrink-0" />
                <span className="font-medium text-text-main">24/7 Delivery Cycles</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Composition */}
          <div ref={visualRef} className="lg:col-span-6 xl:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none w-full">
              {/* Main Card */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border-light bg-[#0c1427]">
                <div className="relative h-80 sm:h-105 lg:h-120 xl:h-130 w-full">
                  <Image
                    src="/images/ai-transformation-hero.jpg"
                    alt="AI Transformation & Right Digital Solutions - Neparica"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 500px"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#0c1427]/80 via-transparent to-transparent pointer-events-none" />

                  {/* Floating Metric Card inside */}
                  <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-white/95 backdrop-blur border border-white/40 shadow-lg text-text-main">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs uppercase font-semibold text-primary">Proven 4D Delivery Method</div>
                        <div className="text-sm font-medium text-text-main">Discover • Design • Develop • Deliver</div>
                      </div>
                      <span className="text-xs font-bold text-accent-red bg-accent-red/10 px-2.5 py-1 rounded">
                        22+ Yrs
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="hidden sm:flex absolute -top-4 -left-4 items-center gap-3 bg-white p-3.5 rounded-xl shadow-lg border border-border-light transition-transform duration-300 hover:scale-105">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-text-muted">Clients Served</div>
                  <div className="text-sm font-bold text-text-main">260+ Businesses</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
