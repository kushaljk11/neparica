'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { MAIN_NAVIGATION } from '@/data/navigation';
import { COMPANY_INFO } from '@/data/company';
import { MobileMenu } from './MobileMenu';
import { Phone, Mail, ChevronDown, Sparkles } from 'lucide-react';
import { Container } from '@/components/shared/Container';
import { Button } from '@/components/ui/Button';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (title: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(title);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  // Close dropdown on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveDropdown(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Utility Bar */}
      <div className="bg-[#F6F7F9] border-b border-[#E5E9EF] text-xs text-[#647080] py-1.5 hidden md:block">
        <Container>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <span className="font-semibold text-[#0F3A5F]">
                1 Stop SMB IT Partner
              </span>
              <span className="text-[#cbd5e1]">•</span>
              <a
                href={`tel:${COMPANY_INFO.contact.phone}`}
                className="inline-flex items-center gap-1.5 hover:text-[#0F3A5F] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#0F3A5F]" />
                <span>{COMPANY_INFO.contact.phoneDisplay}</span>
              </a>
              <span className="text-[#cbd5e1]">•</span>
              <a
                href={`mailto:${COMPANY_INFO.contact.email}`}
                className="inline-flex items-center gap-1.5 hover:text-[#0F3A5F] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#0F3A5F]" />
                <span>{COMPANY_INFO.contact.email}</span>
              </a>
            </div>

            <div className="flex items-center gap-4">
              <Link
                href="/growth-strategy"
                className="inline-flex items-center gap-1 text-[#0F3A5F] hover:text-[#0a2740] font-medium"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#A31718]" />
                <span>Free Operational Assessment</span>
              </Link>
              <span className="text-[#cbd5e1]">•</span>
              <span className="text-[#647080]">Chicago, USA • Global Delivery</span>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Navigation Bar */}
      <div
        className={`bg-white/95 backdrop-blur-md transition-all duration-300 border-b ${isScrolled
          ? 'shadow-sm border-[#D5DCE5] py-0'
          : 'border-[#E5E9EF]'
          }`}
      >
        <Container>
          <div className="flex items-center justify-between h-16 sm:h-20 transition-all duration-300">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 shrink-0 group">
              <div className="relative w-44 sm:w-52 h-10 sm:h-12 transition-transform duration-200 group-hover:scale-[1.01]">
                <Image
                  src="/images/logo.png"
                  alt="Neparica - 1 Stop SMB IT Partner"
                  fill
                  priority
                  className="object-contain object-left"
                  sizes="(max-width: 640px) 180px, 220px"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-1.5 relative">
              {MAIN_NAVIGATION.map((item) => {
                const isExactMatch = pathname === item.href;
                const isChildMatch =
                  !MAIN_NAVIGATION.some((topItem) => topItem !== item && topItem.href === pathname) &&
                  Boolean(item.children && item.children.some((c) => pathname === c.href));
                const isActive = isExactMatch || isChildMatch;
                const hasChildren = Boolean(item.children && item.children.length > 0);
                const isDropdownOpen = activeDropdown === item.title;

                return (
                  <div
                    key={item.title}
                    className="relative"
                    onMouseEnter={() => hasChildren && handleMouseEnter(item.title)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {hasChildren ? (
                      <button
                        onClick={() =>
                          setActiveDropdown(
                            isDropdownOpen ? null : item.title
                          )
                        }
                        aria-expanded={isDropdownOpen}
                        className={`relative inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-md transition-colors ${isActive
                          ? 'text-[#0F3A5F] font-semibold'
                          : 'text-[#141820] hover:text-[#0F3A5F]'
                          }`}
                      >
                        <span>{item.title}</span>
                        <ChevronDown
                          className={`w-3.5 h-3.5 text-[#647080] transition-transform duration-200 ${isDropdownOpen ? 'rotate-180 text-[#0F3A5F]' : ''
                            }`}
                        />
                        {isActive && (
                          <motion.span
                            layoutId="activeNavIndicator"
                            className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#0F3A5F] rounded-full"
                            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                          />
                        )}
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        className={`relative inline-flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${isActive
                          ? 'text-[#0F3A5F] font-semibold'
                          : 'text-[#141820] hover:text-[#0F3A5F]'
                          }`}
                      >
                        {item.title}
                        {isActive && (
                          <motion.span
                            layoutId="activeNavIndicator"
                            className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#0F3A5F] rounded-full"
                            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                          />
                        )}
                      </Link>
                    )}

                    {/* Dropdown Menu with Motion */}
                    <AnimatePresence>
                      {hasChildren && isDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 4, scale: 0.98 }}
                          transition={{ duration: 0.18, ease: 'easeOut' }}
                          className="absolute top-full left-0 w-72 xl:w-80 bg-white rounded-lg shadow-xl border border-[#E5E9EF] p-2 py-3 z-50 origin-top-left"
                        >
                          <div className="space-y-1">
                            {item.children?.map((child) => (
                              <Link
                                key={child.title}
                                href={child.href}
                                onClick={() => setActiveDropdown(null)}
                                className={`block px-3 py-2 rounded-md transition-colors ${pathname === child.href
                                  ? 'bg-[#0F3A5F]/5 text-[#0F3A5F] font-semibold'
                                  : 'hover:bg-[#F6F7F9] text-[#141820]'
                                  }`}
                              >
                                <div className="text-sm font-medium">{child.title}</div>
                                {child.description && (
                                  <div className="text-xs text-[#647080] line-clamp-1 mt-0.5">
                                    {child.description}
                                  </div>
                                )}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </nav>

            {/* Right Desktop CTA Button */}
            <div className="hidden lg:flex items-center gap-3">
              <Button href="/contact" variant="primary" size="sm" withArrow>
                Let&apos;s Talk
              </Button>
            </div>

            {/* Mobile Navigation Trigger */}
            <MobileMenu />
          </div>
        </Container>
      </div>
    </header>
  );
}
