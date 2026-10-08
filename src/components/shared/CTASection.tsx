'use client';

import React, { useEffect, useRef } from 'react';
import { Container } from './Container';
import { Button } from '@/components/ui/Button';
import { Mail, PhoneCall } from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
}

export function CTASection({
  title = "Have an Idea? Let's Build the Right Solution.",
  description = "Connect with our Chicago leadership and global engineering specialists to analyze your operations and build the right technology within your budget.",
  primaryButtonText = "Let's Start the Conversation",
  primaryButtonHref = "/contact",
  secondaryButtonText = "Explore Our Services",
  secondaryButtonHref = "/services"
}: CTASectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: 'top 82%',
          once: true
        }
      });

      if (badgeRef.current) {
        tl.fromTo(
          badgeRef.current,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }
        );
      }

      if (headingRef.current) {
        tl.fromTo(
          headingRef.current,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' },
          '-=0.4'
        );
      }

      if (descRef.current) {
        tl.fromTo(
          descRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
          '-=0.45'
        );
      }

      if (buttonsRef.current) {
        tl.fromTo(
          buttonsRef.current.children,
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.55, stagger: 0.1, ease: 'power3.out' },
          '-=0.35'
        );
      }

      if (footerRef.current) {
        tl.fromTo(
          footerRef.current,
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
          '-=0.2'
        );
      }
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#101827] text-white py-16 sm:py-20 md:py-24 overflow-hidden border-t border-[#1e293b]"
    >
      {/* Subtle background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#0F3A5F]/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#27DDE8]/10 rounded-full blur-2xl pointer-events-none" />

      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div
            ref={badgeRef}
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#27DDE8] bg-[#27DDE8]/10 border border-[#27DDE8]/20 px-3.5 py-1.5 rounded-full mb-5"
          >
            1 Stop SMB IT Partner
          </div>
          <h2
            ref={headingRef}
            className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white leading-tight"
          >
            {title}
          </h2>
          <p
            ref={descRef}
            className="mt-4 text-base sm:text-lg text-[#9BAAAA] leading-relaxed max-w-2xl mx-auto"
          >
            {description}
          </p>

          <div
            ref={buttonsRef}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5"
          >
            <Button
              href={primaryButtonHref}
              variant="primary"
              size="lg"
              withArrow
              className="w-full sm:w-auto bg-[#0F3A5F] hover:bg-[#164a78] border border-[#24527d] text-white shadow-md transition-all duration-200"
            >
              {primaryButtonText}
            </Button>
            <Button
              href={secondaryButtonHref}
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto bg-white/10 hover:bg-white/15 text-white border-white/20 transition-all duration-200"
            >
              {secondaryButtonText}
            </Button>
          </div>

          <div
            ref={footerRef}
            className="mt-10 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-[#9BAAAA]"
          >
            <a
              href={`tel:${COMPANY_INFO.contact.phone}`}
              className="inline-flex items-center gap-2 hover:text-white transition-colors"
            >
              <PhoneCall className="w-4 h-4 text-[#27DDE8]" />
              <span>{COMPANY_INFO.contact.phoneDisplay}</span>
            </a>
            <span className="hidden sm:inline text-white/20">•</span>
            <a
              href={`mailto:${COMPANY_INFO.contact.email}`}
              className="inline-flex items-center gap-2 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4 text-[#27DDE8]" />
              <span>{COMPANY_INFO.contact.email}</span>
            </a>
            <span className="hidden sm:inline text-white/20">•</span>
            <span className="text-[#9BAAAA]">Global Resources • 24/7 Support</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
