'use client';

import React, { useEffect, useRef } from 'react';
import { Container } from '@/components/shared/Container';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { MapPin, Globe2, Sparkles, Building2 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function PartnershipStrength() {
  const containerRef = useRef<HTMLDivElement>(null);
  const allianceRef = useRef<HTMLDivElement>(null);

  const strengths = [
    {
      title: 'US-Based Client Engagement',
      description: 'Headquartered in Bloomingdale, IL (Chicago area), our client engagement directors and technical project managers interface directly with your executive team.',
      icon: MapPin
    },
    {
      title: 'Global Delivery Excellence',
      description: 'Our world-class development centers provide deep technical capacity, enabling continuous 24/7 sprint execution and overnight progress.',
      icon: Globe2
    },
    {
      title: 'Real 30–50% Cost Savings',
      description: 'Benefit from transparent offshore development economics without sacrificing code quality, project governance, or security protocols.',
      icon: Sparkles
    },
    {
      title: 'Long-Term Strategic Alliances',
      description: 'Certified implementation alliances with Amazon AWS, Microsoft, and Oracle ensure your software is built on enterprise-grade infrastructure.',
      icon: Building2
    }
  ];

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const cards = containerRef.current?.querySelectorAll('.strength-card');
      if (cards && cards.length > 0) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 85%',
              once: true
            }
          }
        );
      }

      if (allianceRef.current) {
        gsap.fromTo(
          allianceRef.current,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: allianceRef.current,
              start: 'top 88%',
              once: true
            }
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-white py-16 sm:py-20 md:py-24 border-b border-[#E5E9EF]">
      <Container>
        <SectionHeading
          eyebrow="The Neparica Advantage"
          title="Local Engagement. Global Delivery."
          description="Combining high-touch Chicago client management with deep offshore engineering power to deliver true value to SMB enterprises."
          align="center"
        />

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {strengths.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="strength-card p-6 rounded-xl border border-[#E5E9EF] bg-[#F6F7F9] hover:bg-white transition-all duration-300 hover:border-[#0F3A5F] hover:shadow-md hover:-translate-y-1"
              >
                <div className="w-10 h-10 rounded-lg bg-[#0F3A5F]/10 text-[#0F3A5F] flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-105">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-[#141820] mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#647080] leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Strategic Technology Alliances Banner */}
        <div
          ref={allianceRef}
          className="mt-12 p-6 sm:p-8 rounded-xl bg-white border border-[#E5E9EF] shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 transition-all duration-300 hover:border-[#cbd5e1]"
        >
          <div className="text-center md:text-left">
            <div className="text-xs font-semibold text-[#0F3A5F] uppercase tracking-wider mb-1">
              Technology Ecosystem
            </div>
            <div className="text-base sm:text-lg font-semibold text-[#141820]">
              Strategic Alliances & Cloud Partners
            </div>
            <div className="text-xs sm:text-sm text-[#647080] mt-0.5">
              Certified architectures and reliable deployment pipelines.
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-sm font-semibold text-[#141820]">
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#F6F7F9] border border-[#E5E9EF] transition-transform duration-200 hover:scale-105">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF9900]" />
              <span>Amazon AWS Partner</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#F6F7F9] border border-[#E5E9EF] transition-transform duration-200 hover:scale-105">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0089D6]" />
              <span>Microsoft Azure</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#F6F7F9] border border-[#E5E9EF] transition-transform duration-200 hover:scale-105">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F80000]" />
              <span>Oracle Systems</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
