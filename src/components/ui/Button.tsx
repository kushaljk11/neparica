import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'tertiary';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  withArrow?: boolean;
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  withArrow = false,
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-[7px] cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#0F3A5F]/30 disabled:opacity-50 disabled:pointer-events-none text-center';

  const variants = {
    primary: 'bg-[#0F3A5F] text-white hover:bg-[#0a2740] shadow-sm hover:shadow active:scale-[0.99]',
    secondary: 'bg-[#F6F7F9] text-[#141820] hover:bg-[#EEF1F4] border border-[#E5E9EF] active:scale-[0.99]',
    outline: 'border border-[#0F3A5F] text-[#0F3A5F] hover:bg-[#0F3A5F] hover:text-white active:scale-[0.99]',
    ghost: 'text-[#141820] hover:bg-[#F6F7F9]',
    tertiary: 'text-[#0F3A5F] hover:text-[#0a2740] p-0 font-semibold inline-flex items-center gap-1.5 hover:underline'
  };

  const sizes = {
    sm: 'text-xs px-3.5 py-1.5 h-8',
    md: 'text-sm px-5 py-2.5 h-10',
    lg: 'text-base px-6 py-3 h-12'
  };

  const content = (
    <>
      <span>{children}</span>
      {withArrow && (
        <ArrowRight className={cn('transition-transform duration-200 group-hover:translate-x-0.5', size === 'sm' ? 'w-3.5 h-3.5 ml-1' : 'w-4 h-4 ml-1.5')} />
      )}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={cn(baseStyles, variants[variant], variant !== 'tertiary' && sizes[size], 'group', className)}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      className={cn(baseStyles, variants[variant], variant !== 'tertiary' && sizes[size], 'group', className)}
      {...props}
    >
      {content}
    </button>
  );
}
