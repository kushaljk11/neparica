'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface ImageRevealProps {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  threshold?: string;
}

export function ImageReveal({
  children,
  className = '',
  duration = 1.0,
  threshold = 'top 85%'
}: ImageRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      return;
    }

    const img = el.querySelector('img') || el;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        img,
        {
          scale: 1.04,
          opacity: 0.8
        },
        {
          scale: 1,
          opacity: 1,
          duration,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: threshold,
            once: true
          }
        }
      );
    }, el);

    return () => ctx.revert();
  }, [duration, threshold]);

  return (
    <div ref={containerRef} className={`overflow-hidden ${className}`}>
      {children}
    </div>
  );
}
