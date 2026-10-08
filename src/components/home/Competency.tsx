'use client';

import React, { useEffect, useRef } from 'react';
import { Container } from '@/components/shared/Container';
import { COMPANY_INFO } from '@/data/company';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function Competency() {
  const compRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = compRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const items = el.querySelectorAll('.competency-item');

      gsap.fromTo(
        items,
        {
          opacity: 0,
          y: 25
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            once: true
          }
        }
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={compRef} className="bg-white py-12 sm:py-16 border-b border-[#E5E9EF]">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#E5E9EF]">
          {COMPANY_INFO.competency.map((item, idx) => (
            <div
              key={item.label}
              className={`competency-item py-6 md:py-0 transition-transform duration-300 hover:scale-[1.01] ${
                idx === 0
                  ? 'md:pr-8 lg:pr-12'
                  : idx === 1
                  ? 'md:px-8 lg:px-12'
                  : 'md:pl-8 lg:pl-12'
              }`}
            >
              <div className="text-xs font-semibold uppercase tracking-wider text-[#0F3A5F] mb-1">
                {item.label}
              </div>
              <div className="text-3xl sm:text-4xl font-bold tracking-tight text-[#141820] mb-2">
                {item.value}
              </div>
              <p className="text-sm text-[#647080] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
