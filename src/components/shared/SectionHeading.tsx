import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  theme?: 'light' | 'dark';
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  theme = 'light',
  className
}: SectionHeadingProps) {
  const isDark = theme === 'dark';

  return (
    <div
      className={cn(
        'max-w-3xl mb-10 md:mb-14',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        className
      )}
    >
      {eyebrow && (
        <div
          className={cn(
            'inline-block text-xs md:text-sm font-semibold tracking-wider uppercase mb-2.5 px-3 py-1 rounded-full',
            isDark
              ? 'bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20'
              : 'bg-primary/10 text-primary border border-primary/15'
          )}
        >
          {eyebrow}
        </div>
      )}
      <h2
        className={cn(
          'text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight leading-tight',
          isDark ? 'text-white' : 'text-text-main'
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-3.5 text-base sm:text-lg leading-relaxed',
            isDark ? 'text-[#9BAAAA]' : 'text-text-muted'
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
