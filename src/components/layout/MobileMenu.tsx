'use client';

import React, { useState, useEffect, useId, useCallback } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { MAIN_NAVIGATION } from '@/data/navigation';
import { COMPANY_INFO } from '@/data/company';
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react';

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  const pathname = usePathname();
  const menuId = useId();

  useEffect(() => {
    setMounted(true);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
    setExpandedSection(null);
  }, []);

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const toggleSection = (title: string) => {
    setExpandedSection((prev) => (prev === title ? null : title));
  };

  // Close the drawer when the route changes.
  useEffect(() => {
    closeMenu();
  }, [pathname, closeMenu]);

  // Lock body scrolling while the drawer is open.
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  // Close the drawer using Escape.
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeMenu();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, closeMenu]);

  return (
    <div className="lg:hidden">
      {/* Menu trigger */}
      <button
        type="button"
        onClick={toggleOpen}
        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isOpen}
        aria-controls={menuId}
        className="flex min-h-11 min-w-11 items-center justify-center rounded-md p-2.5 text-text-main transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        {isOpen ? (
          <X className="size-6" aria-hidden="true" />
        ) : (
          <Menu className="size-6" aria-hidden="true" />
        )}
      </button>

      {/* Full-screen navigation drawer */}
      {mounted &&
        createPortal(
          <AnimatePresence>
            {isOpen && (
              <motion.div
                key="mobile-menu-drawer"
                id={menuId}
                role="dialog"
                aria-modal="true"
                aria-label="Mobile navigation"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="fixed inset-0 z-100 flex h-dvh w-full flex-col overflow-hidden bg-white"
              >
                {/* Drawer header */}
                <header className="flex h-16 shrink-0 items-center justify-between border-b border-border-light bg-white px-4 sm:h-20 sm:px-6">
                  <Link
                    href="/"
                    onClick={closeMenu}
                    aria-label="Neparica home"
                    className="flex items-center gap-3"
                  >
                    <div className="relative h-10 w-44 sm:h-12 sm:w-52">
                      <Image
                        src="/images/logo.png"
                        alt="Neparica - Your ONE Stop IT Partner"
                        fill
                        priority
                        sizes="(max-width: 640px) 180px, 220px"
                        className="object-contain object-left"
                      />
                    </div>
                  </Link>

                  <button
                    type="button"
                    onClick={closeMenu}
                    aria-label="Close navigation menu"
                    className="flex min-h-11 min-w-11 items-center justify-center rounded-md p-2.5 text-text-main transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    <X className="size-6" aria-hidden="true" />
                  </button>
                </header>

                {/* Scrollable navigation */}
                <div className="flex-1 divide-y divide-border-light overflow-y-auto overscroll-contain px-5 py-5">
                  <nav aria-label="Main navigation" className="space-y-1 pb-6">
                    {MAIN_NAVIGATION.map((item) => {
                      const isExactMatch = pathname === item.href;

                      const isChildMatch = Boolean(
                        item.children?.some((child) => pathname === child.href)
                      );

                      const isActive = isExactMatch || isChildMatch;
                      const hasChildren = Boolean(item.children?.length);
                      const isExpanded = expandedSection === item.title;

                      return (
                        <div key={item.title} className="py-1">
                          {hasChildren ? (
                            <div>
                              <button
                                type="button"
                                onClick={() => toggleSection(item.title)}
                                aria-expanded={isExpanded}
                                className={`flex min-h-11 w-full items-center justify-between rounded-md px-3 py-2.5 text-left text-base font-medium transition-colors ${isActive
                                  ? 'bg-primary/5 font-semibold text-primary'
                                  : 'text-text-main hover:bg-subtle'
                                  }`}
                              >
                                <span>{item.title}</span>

                                <ChevronDown
                                  aria-hidden="true"
                                  className={`size-4 text-text-muted transition-transform duration-200 ${isExpanded
                                    ? 'rotate-180 text-primary'
                                    : ''
                                    }`}
                                />
                              </button>

                              <AnimatePresence initial={false}>
                                {isExpanded && (
                                  <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{
                                      duration: 0.2,
                                      ease: 'easeInOut',
                                    }}
                                    className="my-1 ml-3 space-y-1 overflow-hidden border-l-2 border-primary/20 pl-3"
                                  >
                                    {item.children?.map((child) => {
                                      const isChildActive =
                                        pathname === child.href;

                                      return (
                                        <Link
                                          key={child.title}
                                          href={child.href}
                                          onClick={closeMenu}
                                          aria-current={
                                            isChildActive ? 'page' : undefined
                                          }
                                          className={`flex min-h-11 items-center rounded-md px-2.5 py-2.5 text-base transition-colors ${isChildActive
                                            ? 'bg-primary/5 font-semibold text-primary'
                                            : 'text-text-muted hover:text-text-main'
                                            }`}
                                        >
                                          {child.title}
                                        </Link>
                                      );
                                    })}
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          ) : (
                            <Link
                              href={item.href}
                              onClick={closeMenu}
                              aria-current={
                                isExactMatch ? 'page' : undefined
                              }
                              className={`flex min-h-11 items-center rounded-md px-3 py-2.5 text-base font-medium transition-colors ${isExactMatch
                                ? 'bg-primary/5 font-semibold text-primary'
                                : 'text-text-main hover:bg-subtle'
                                }`}
                            >
                              {item.title}
                            </Link>
                          )}
                        </div>
                      );
                    })}
                  </nav>

                  {/* Contact section */}
                  <section
                    aria-label="Contact information"
                    className="space-y-4 pt-6"
                  >
                    <Link
                      href="/contact"
                      onClick={closeMenu}
                      className="flex min-h-12 w-full items-center justify-center rounded-md bg-accent-red px-5 py-3 text-center text-base font-semibold text-white shadow-md shadow-accent-red/25 transition-colors hover:bg-[#851213] active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-red"
                    >
                      Let&apos;s Start the Conversation
                    </Link>

                    <div className="space-y-2 pt-2 text-base text-text-muted">
                      <a
                        href={`tel:${COMPANY_INFO.contact.phone}`}
                        className="flex min-h-11 items-center gap-2.5 transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                      >
                        <Phone
                          className="size-4 shrink-0 text-primary"
                          aria-hidden="true"
                        />
                        <span>{COMPANY_INFO.contact.phoneDisplay}</span>
                      </a>

                      <a
                        href={`mailto:${COMPANY_INFO.contact.email}`}
                        className="flex min-h-11 items-center gap-2.5 transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                      >
                        <Mail
                          className="size-4 shrink-0 text-primary"
                          aria-hidden="true"
                        />
                        <span className="break-all">
                          {COMPANY_INFO.contact.email}
                        </span>
                      </a>
                    </div>
                  </section>
                </div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </div>
  );
}