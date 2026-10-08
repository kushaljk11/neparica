import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export function Card({ children, className, hoverEffect = true, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'bg-white rounded-lg border border-border-light p-6 sm:p-7 md:p-8 transition-all duration-200',
        hoverEffect && 'hover:border-[#cbd5e1] hover:shadow-md hover:-translate-y-0.5',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
