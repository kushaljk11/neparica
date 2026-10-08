import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/shared/Container';
import { COMPANY_INFO } from '@/data/company';
import { FOOTER_SERVICES, FOOTER_SOLUTIONS, FOOTER_RESOURCES } from '@/data/navigation';
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#101827] text-white border-t border-[#1e293b] pt-16 pb-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          {/* Column 1: Brand & Office Details */}
          <div className="lg:col-span-2 space-y-5">
            <div className="relative w-48 h-12 bg-white/95 p-1.5 rounded">
              <Image
                src="/images/logo-footer.png"
                alt="Neparica Inc."
                fill
                className="object-contain p-1"
                sizes="200px"
              />
            </div>
            
            <p className="text-sm text-[#9BAAAA] leading-relaxed max-w-sm">
              Neparica is a global IT services and consulting firm based in Chicago, USA. Since 2004, we have provided comprehensive IT solutions, custom software, and 24/7 technical support to growing SMBs worldwide.
            </p>

            <div className="space-y-2.5 pt-2 text-xs sm:text-sm text-[#cbd5e1]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#27DDE8] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">{COMPANY_INFO.contact.building}</div>
                  <div>{COMPANY_INFO.contact.address}</div>
                  <div>{COMPANY_INFO.contact.cityStateZip}</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 pt-1">
                <Phone className="w-4 h-4 text-[#27DDE8] shrink-0" />
                <a
                  href={`tel:${COMPANY_INFO.contact.phone}`}
                  className="hover:text-white transition-colors"
                >
                  {COMPANY_INFO.contact.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#27DDE8] shrink-0" />
                <a
                  href={`mailto:${COMPANY_INFO.contact.email}`}
                  className="hover:text-white transition-colors"
                >
                  {COMPANY_INFO.contact.email}
                </a>
              </div>

              <div className="flex items-start gap-2.5 pt-1 text-xs text-[#9BAAAA]">
                <Clock className="w-4 h-4 text-[#27DDE8] shrink-0 mt-0.5" />
                <div>
                  <div>{COMPANY_INFO.contact.businessHours.weekdays}</div>
                  <div className="text-[#27DDE8] mt-0.5 font-medium">24/7 Global IT Support Available</div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: IT Services */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-white uppercase mb-4 pb-1 border-b border-white/10">
              Services
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {FOOTER_SERVICES.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="text-[#9BAAAA] hover:text-white transition-colors inline-block"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Solutions */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-white uppercase mb-4 pb-1 border-b border-white/10">
              Solutions
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {FOOTER_SOLUTIONS.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="text-[#9BAAAA] hover:text-white transition-colors inline-block"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Resources & Map */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-white uppercase mb-4 pb-1 border-b border-white/10">
              Company & Legal
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm mb-6">
              {FOOTER_RESOURCES.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="text-[#9BAAAA] hover:text-white transition-colors inline-block"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Office map preview button */}
            <div className="pt-2">
              <a
                href={COMPANY_INFO.contact.googleMapsEmbedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-accent-cyan hover:underline"
              >
                <span>View Chicago Office on Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Socials */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9BAAAA]">
          <div>
            © 2004–{currentYear} Neparica Inc. All Rights Reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-use" className="hover:text-white transition-colors">
              Terms of Use
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
