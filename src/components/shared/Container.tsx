import React from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  size?: 'default' | 'narrow' | 'wide';
}

export function Container({ children, className, size = 'default', ...props }: ContainerProps) {
  const sizeClasses = {
    narrow: 'max-w-4xl',
    default: 'max-w-[1240px]',
    wide: 'max-w-[1440px]'
  };

  return (
    <div
      className={cn('mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-12', sizeClasses[size], className)}
      {...props}
    >
      {children}
    </div>
  );
}
