'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface StaggerRevealProps {
  children: React.ReactNode;
  selector?: string;
  className?: string;
  stagger?: number;
  duration?: number;
  yOffset?: number;
  threshold?: string;
}

export function StaggerReveal({
  children,
  selector = '.stagger-item',
  className,
  stagger = 0.12,
  duration = 0.7,
  yOffset = 30,
  threshold = 'top 85%'
}: StaggerRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const items = container.querySelectorAll(selector);

    if (prefersReducedMotion) {
      gsap.set(items, { opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        items,
        {
          opacity: 0,
          y: yOffset
        },
        {
          opacity: 1,
          y: 0,
          duration,
          stagger,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: container,
            start: threshold,
            once: true
          }
        }
      );
    }, container);

    return () => ctx.revert();
  }, [selector, stagger, duration, yOffset, threshold]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
