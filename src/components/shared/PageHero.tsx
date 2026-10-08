'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { Container } from './Container';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import gsap from 'gsap';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumbs?: BreadcrumbItem[];
  className?: string;
}

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
  className
}: PageHeroProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const breadcrumbRef = useRef<HTMLElement>(null);
  const eyebrowRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      if (breadcrumbRef.current) {
        tl.fromTo(
          breadcrumbRef.current,
          { opacity: 0, y: -6 },
          { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }
        );
      }

      if (eyebrowRef.current) {
        tl.fromTo(
          eyebrowRef.current,
          { opacity: 0, scale: 0.96 },
          { opacity: 1, scale: 1, duration: 0.45, ease: 'power2.out' },
          '-=0.2'
        );
      }

      if (titleRef.current) {
        tl.fromTo(
          titleRef.current,
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.65, ease: 'power3.out' },
          '-=0.3'
        );
      }

      if (descRef.current) {
        tl.fromTo(
          descRef.current,
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.55, ease: 'power3.out' },
          '-=0.4'
        );
      }
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={heroRef}
      className={cn('relative bg-subtle border-b border-border-light pt-12 pb-14 md:pt-16 md:pb-20 overflow-hidden', className)}
    >
      {/* Subtle background geometric accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-accent-cyan/5 rounded-full blur-2xl pointer-events-none" />

      <Container className="relative z-10">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav
            ref={breadcrumbRef}
            aria-label="Breadcrumb"
            className="mb-4 flex items-center gap-1.5 text-xs text-text-muted"
          >
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            {breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={idx}>
                <ChevronRight className="w-3 h-3 text-[#9BAAAA]" />
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-primary transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-text-main font-medium">{crumb.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}

        <div className="max-w-3xl">
          {eyebrow && (
            <span
              ref={eyebrowRef}
              className="inline-block text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full mb-3 border border-primary/15"
            >
              {eyebrow}
            </span>
          )}
          <h1
            ref={titleRef}
            className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-text-main leading-[1.15]"
          >
            {title}
          </h1>
          {description && (
            <p
              ref={descRef}
              className="mt-4 text-base sm:text-lg text-text-muted leading-relaxed"
            >
              {description}
            </p>
          )}
        </div>
      </Container>
    </div>
  );
}
