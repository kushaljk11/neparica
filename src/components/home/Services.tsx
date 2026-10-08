'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { Container } from '@/components/shared/Container';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { SERVICES } from '@/data/services';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  TrendingUp,
  Cloud,
  Target,
  Globe,
  Users,
  Layers,
  Lightbulb,
  Briefcase,
  ArrowRight
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  TrendingUp,
  Cloud,
  Target,
  Globe,
  Users,
  Layers,
  Lightbulb,
  Briefcase
};

export function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const cards = grid.querySelectorAll('.service-card');

      gsap.fromTo(
        cards,
        {
          opacity: 0,
          y: 35
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: grid,
            start: 'top 85%',
            once: true
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#F6F7F9] py-16 sm:py-20 md:py-24 border-b border-[#E5E9EF]">
      <Container>
        <SectionHeading
          eyebrow="What We Do"
          title="Practical IT Services for Every Stage of Growth"
          description="Neparica delivers end-to-end technology services tailored to small and mid-sized enterprises. We combine local strategic advisory with global delivery power."
          align="center"
        />

        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.iconName] || Lightbulb;
            const linkHref = service.slug === 'growth-strategy' ? '/growth-strategy' : `/services/${service.slug}`;

            return (
              <div
                key={service.slug}
                className="service-card group relative bg-white rounded-lg border border-[#E5E9EF] p-6 flex flex-col justify-between transition-all duration-300 hover:border-[#0F3A5F] hover:shadow-lg hover:-translate-y-1.5 cursor-pointer"
              >
                <div>
                  <div className="w-11 h-11 rounded-md bg-[#0F3A5F]/10 text-[#0F3A5F] flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-[#0F3A5F] group-hover:text-white group-hover:scale-105">
                    <Icon className="w-5 h-5 transition-transform duration-300" />
                  </div>

                  <h3 className="text-base sm:text-lg font-semibold text-[#141820] mb-2.5 leading-snug group-hover:text-[#0F3A5F] transition-colors duration-200">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#647080] leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#F6F7F9]">
                  <Link
                    href={linkHref}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#0F3A5F] group-hover:text-[#0a2740] transition-colors"
                  >
                    <span>Explore Service</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
