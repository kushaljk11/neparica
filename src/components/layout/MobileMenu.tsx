'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { MAIN_NAVIGATION } from '@/data/navigation';
import { COMPANY_INFO } from '@/data/company';
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react';

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const pathname = usePathname();

  const toggleOpen = () => setIsOpen(!isOpen);
  const closeMenu = () => {
    setIsOpen(false);
    setExpandedSection(null);
  };

  const toggleSection = (title: string) => {
    setExpandedSection(expandedSection === title ? null : title);
  };

  return (
    <div className="lg:hidden">
      <button
        onClick={toggleOpen}
        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isOpen}
        className="p-2.5 min-h-[44px] min-w-[44px] flex items-center justify-center text-[#141820] hover:text-[#0F3A5F] focus:outline-none focus:ring-2 focus:ring-[#0F3A5F]/20 rounded-md transition-colors"
      >
        <AnimatePresence mode="wait" initial={false}>
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <Menu className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="fixed inset-0 top-[65px] z-50 bg-white flex flex-col overflow-y-auto border-t border-[#E5E9EF] shadow-2xl"
          >
            <div className="p-5 flex-1 divide-y divide-[#E5E9EF]">
              <nav className="pb-6 space-y-1">
                {MAIN_NAVIGATION.map((item) => {
                  const isExactMatch = pathname === item.href;
                  const isChildMatch =
                    !MAIN_NAVIGATION.some((topItem) => topItem !== item && topItem.href === pathname) &&
                    Boolean(item.children && item.children.some((c) => pathname === c.href));
                  const isActive = isExactMatch || isChildMatch;
                  const hasChildren = Boolean(item.children && item.children.length > 0);
                  const isExpanded = expandedSection === item.title;

                  return (
                    <div key={item.title} className="py-1">
                      {hasChildren ? (
                        <div>
                          <button
                            onClick={() => toggleSection(item.title)}
                            className={`w-full flex items-center justify-between py-2.5 px-3 min-h-[44px] text-left text-base font-medium rounded-md transition-colors ${
                              isActive
                                ? 'text-[#0F3A5F] bg-[#0F3A5F]/5 font-semibold'
                                : 'text-[#141820] hover:bg-[#F6F7F9]'
                            }`}
                          >
                            <span>{item.title}</span>
                            <ChevronDown
                              className={`w-4 h-4 text-[#647080] transition-transform duration-200 ${
                                isExpanded ? 'rotate-180 text-[#0F3A5F]' : ''
                              }`}
                            />
                          </button>
                          <AnimatePresence>
                            {isExpanded && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2, ease: 'easeInOut' }}
                                className="overflow-hidden ml-3 pl-3 border-l-2 border-[#0F3A5F]/20 my-1 space-y-1"
                              >
                                {item.children?.map((child) => (
                                  <Link
                                    key={child.title}
                                    href={child.href}
                                    onClick={closeMenu}
                                    className={`block py-2 px-2.5 min-h-[44px] flex items-center text-sm rounded-md transition-colors ${
                                      pathname === child.href
                                        ? 'text-[#0F3A5F] font-semibold bg-[#0F3A5F]/5'
                                        : 'text-[#647080] hover:text-[#141820]'
                                    }`}
                                  >
                                    {child.title}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          onClick={closeMenu}
                          className={`block py-2.5 px-3 min-h-[44px] flex items-center text-base font-medium rounded-md transition-colors ${
                            pathname === item.href
                              ? 'text-[#0F3A5F] bg-[#0F3A5F]/5 font-semibold'
                              : 'text-[#141820] hover:bg-[#F6F7F9]'
                          }`}
                        >
                          {item.title}
                        </Link>
                      )}
                    </div>
                  );
                })}
              </nav>

              <div className="pt-6 space-y-4">
                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="w-full min-h-[44px] flex items-center justify-center bg-[#0F3A5F] hover:bg-[#0a2740] text-white text-base font-medium px-5 py-3 rounded-md shadow-sm transition-colors active:scale-[0.99]"
                >
                  Let&apos;s Start the Conversation
                </Link>

                <div className="space-y-2 pt-2 text-sm text-[#647080]">
                  <a
                    href={`tel:${COMPANY_INFO.contact.phone}`}
                    className="flex items-center gap-2.5 min-h-[44px] hover:text-[#0F3A5F] transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#0F3A5F]" />
                    <span>{COMPANY_INFO.contact.phoneDisplay}</span>
                  </a>
                  <a
                    href={`mailto:${COMPANY_INFO.contact.email}`}
                    className="flex items-center gap-2.5 min-h-[44px] hover:text-[#0F3A5F] transition-colors"
                  >
                    <Mail className="w-4 h-4 text-[#0F3A5F]" />
                    <span>{COMPANY_INFO.contact.email}</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
