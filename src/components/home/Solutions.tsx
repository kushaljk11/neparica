'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/shared/Container';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { SOLUTIONS } from '@/data/solutions';
import { ArrowRight, ShoppingCart, Cpu, Smartphone, Layout, Globe, BarChart3 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const iconMap: Record<string, React.ElementType> = {
  ShoppingCart,
  Cpu,
  Smartphone,
  Layout,
  Globe,
  BarChart3
};

export function Solutions() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const cards = grid.querySelectorAll('.solution-card');

      gsap.fromTo(
        cards,
        {
          opacity: 0,
          y: 40
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
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
    <section ref={sectionRef} className="bg-white py-16 sm:py-20 md:py-24 border-b border-[#E5E9EF]">
      <Container>
        <SectionHeading
          eyebrow="Software & Platforms"
          title="Right Solutions. Right Technology."
          description="Solutions with cutting-edge technology engineered specifically to address your operational challenges and fuel business growth."
          align="center"
        />

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SOLUTIONS.map((solution) => {
            const Icon = iconMap[solution.iconName] || Globe;
            const targetHref = solution.slug === 'accounting-system' ? '/accounting-system' : `/solutions/${solution.slug}`;

            return (
              <div
                key={solution.slug}
                className="solution-card group relative bg-[#F6F7F9] rounded-xl border border-[#E5E9EF] overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-[#0F3A5F] hover:shadow-xl hover:-translate-y-1.5"
              >
                <div>
                  {/* Image header with smooth scale transition */}
                  {solution.image && (
                    <div className="relative h-48 w-full overflow-hidden bg-slate-200">
                      <Image
                        src={solution.image}
                        alt={solution.title}
                        fill
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 400px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#141820]/80 via-transparent to-transparent" />
                      
                      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                        <span className="text-xs font-semibold uppercase tracking-wider bg-[#0F3A5F]/90 backdrop-blur px-2.5 py-1 rounded">
                          {solution.title}
                        </span>
                      </div>
                    </div>
                  )}

                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 rounded-md bg-[#0F3A5F]/10 text-[#0F3A5F] flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-[#0F3A5F] group-hover:text-white">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="text-lg font-semibold text-[#141820] leading-snug group-hover:text-[#0F3A5F] transition-colors">
                        {solution.title}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-[#647080] leading-relaxed mb-4">
                      {solution.shortDescription}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {solution.techStack?.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] font-medium bg-white px-2 py-0.5 rounded text-[#647080] border border-[#E5E9EF]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="pt-4 border-t border-[#E5E9EF]">
                    <Link
                      href={targetHref}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#0F3A5F] group-hover:text-[#0a2740] transition-colors"
                    >
                      <span>Explore Solution</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
