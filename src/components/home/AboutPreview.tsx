'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Container } from '@/components/shared/Container';
import { Button } from '@/components/ui/Button';
import { Check } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function AboutPreview() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageCardRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Image reveal with subtle scale
      if (imageCardRef.current) {
        gsap.fromTo(
          imageCardRef.current,
          { opacity: 0, scale: 0.97, y: 30 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: imageCardRef.current,
              start: 'top 85%',
              once: true
            }
          }
        );
      }

      // Content reveal
      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: contentRef.current,
              start: 'top 85%',
              once: true
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-16 sm:py-20 md:py-24 border-b border-[#E5E9EF]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image Composition */}
          <div ref={imageCardRef} className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-[#E5E9EF] shadow-lg bg-[#F6F7F9] group">
              <div className="relative h-72 sm:h-96 w-full overflow-hidden">
                <Image
                  src="/images/office.jpg"
                  alt="Neparica Continental Office Plaza, Bloomingdale IL"
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 450px"
                />
              </div>
              <div className="p-5 bg-white border-t border-[#E5E9EF]">
                <div className="text-xs font-semibold text-[#0F3A5F] uppercase tracking-wider mb-1">
                  Local Engagement • Global Delivery
                </div>
                <div className="text-sm text-[#141820] font-medium">
                  Continental Office Plaza, 129 Fairfield Way, Bloomingdale, IL
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Copy */}
          <div ref={contentRef} className="lg:col-span-7 space-y-6">
            <div>
              <span className="inline-block text-xs font-semibold tracking-wider uppercase text-[#0F3A5F] bg-[#0F3A5F]/10 border border-[#0F3A5F]/15 px-3 py-1 rounded-full mb-3">
                Who We Are
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-[#141820] leading-tight">
                A Trusted One-Stop IT Partner for Small and Mid-Sized Businesses
              </h2>
            </div>

            <p className="text-base text-[#647080] leading-relaxed">
              Neparica, a global IT company based in Chicago, USA, has been providing a full range of IT-related services and solutions to businesses around the globe since 2004. With our proven 4D delivery approach—Discover, Design, Develop, and Deliver—we empower companies to compete and thrive in today’s demanding digital environment.
            </p>

            <p className="text-base text-[#647080] leading-relaxed">
              We truly understand the real-world dilemmas of growing enterprises: on one hand, companies cannot afford huge internal IT overhead; on the other hand, corporate IT giants fail to understand SMB operational realities. Neparica bridges that gap by offering dedicated US-based project management backed by a high-caliber global engineering center.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-[#141820] font-medium">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-[#0F3A5F]/10 text-[#0F3A5F] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Strategic Alliances: AWS, Microsoft, Oracle</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-[#0F3A5F]/10 text-[#0F3A5F] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Over 16 Years in Business (Since 2004)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-[#0F3A5F]/10 text-[#0F3A5F] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>150+ Successful SMB Deployments</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-[#0F3A5F]/10 text-[#0F3A5F] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>24/7 Global Delivery Pipeline</span>
              </div>
            </div>

            <div className="pt-2">
              <Button href="/about-us" variant="primary" size="md" withArrow>
                Learn More About Neparica
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
