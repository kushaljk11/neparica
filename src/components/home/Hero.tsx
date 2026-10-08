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
    <section ref={heroRef} className="relative bg-white pt-12 pb-16 md:pt-20 md:pb-28 overflow-hidden border-b border-[#E5E9EF]">
      {/* Background subtle gradient elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0F3A5F]/5 rounded-full blur-3xl pointer-events-none -mr-32 -mt-32" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#27DDE8]/5 rounded-full blur-2xl pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 space-y-6">
            <div
              ref={eyebrowRef}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0F3A5F]/10 border border-[#0F3A5F]/15 text-[#0F3A5F] text-xs sm:text-sm font-semibold"
            >
              <span className="w-2 h-2 rounded-full bg-[#0F3A5F] animate-pulse" />
              <span>1 Stop SMB IT Partner Since 2004</span>
            </div>

            <h1
              ref={headingRef}
              className="text-3xl sm:text-5xl xl:text-6xl font-semibold tracking-tight text-[#141820] leading-[1.12]"
            >
              Your IT Partner for <span className="text-[#0F3A5F]">Smarter Business Growth</span>.
            </h1>

            <p
              ref={descRef}
              className="text-base sm:text-lg text-[#647080] leading-relaxed max-w-xl"
            >
              From IT consulting to custom software and cloud solutions, Neparica helps small and mid-sized businesses scale with practical technology, transparent costs, and reliable 24/7 global support.
            </p>

            <div
              ref={ctaRef}
              className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5"
            >
              <Button href="/services" variant="primary" size="lg" withArrow>
                Explore Services
              </Button>
              <Button href="/contact" variant="secondary" size="lg">
                Get in Touch
              </Button>
            </div>

            {/* Credibility highlights */}
            <div
              ref={credibilityRef}
              className="pt-6 border-t border-[#E5E9EF] grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-[#647080]"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0F3A5F] shrink-0" />
                <span>Chicago Engagement</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#0F3A5F] shrink-0" />
                <span>30–50% Cost Savings</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#0F3A5F] shrink-0" />
                <span>24/7 Delivery Cycles</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Composition */}
          <div ref={visualRef} className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Card */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#E5E9EF] bg-[#F6F7F9]">
                <div className="relative h-72 sm:h-96 w-full">
                  <Image
                    src="/images/it-banner.jpg"
                    alt="Neparica IT Consulting and Software Engineering"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 500px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101827]/90 via-[#101827]/30 to-transparent" />
                  
                  {/* Floating Metric Card inside */}
                  <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-white/95 backdrop-blur border border-white/40 shadow-lg text-[#141820]">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs uppercase font-semibold text-[#0F3A5F]">Proven 4D Delivery</div>
                        <div className="text-sm font-medium text-[#141820]">Discover • Design • Develop • Deliver</div>
                      </div>
                      <span className="text-xs font-bold text-[#A31718] bg-[#A31718]/10 px-2.5 py-1 rounded">
                        16+ Yrs
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="hidden sm:flex absolute -top-4 -left-4 items-center gap-3 bg-white p-3.5 rounded-xl shadow-lg border border-[#E5E9EF] transition-transform duration-300 hover:scale-105">
                <div className="w-10 h-10 rounded-lg bg-[#0F3A5F]/10 flex items-center justify-center text-[#0F3A5F]">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#647080]">Clients Served</div>
                  <div className="text-sm font-bold text-[#141820]">150+ SMB Companies</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
