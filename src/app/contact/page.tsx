import React from 'react';
import type { Metadata } from 'next';
import { PageHero } from '@/components/shared/PageHero';
import { Container } from '@/components/shared/Container';
import { ContactForm } from '@/components/contact/ContactForm';
import { COMPANY_INFO } from '@/data/company';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Globe2 } from 'lucide-react';

import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { StaggerReveal } from '@/components/animations/StaggerReveal';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Connect with Neparica Inc: Headquartered in Bloomingdale, IL (Chicago area). Call 630-339-4152 or email support@neparica.com for IT consulting and software inquiries.'
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Let’s Connect"
        title="Contact Neparica"
        description="Whether you have an inquiry about custom software, cloud hosting, IT staffing, or growth strategy consulting, our team is ready to assist you."
        breadcrumbs={[{ label: 'Contact' }]}
      />

      <section className="py-16 md:py-24 bg-white border-b border-[#E5E9EF]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Direct Office & Hours Details */}
            <div className="lg:col-span-5 space-y-8">
              <ScrollReveal yOffset={20}>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#0F3A5F] bg-[#0F3A5F]/10 px-3 py-1 rounded-full border border-[#0F3A5F]/15">
                    Corporate Headquarters
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#141820] mt-3">
                    Continental Office Plaza
                  </h2>
                  <p className="text-sm text-[#647080] mt-2 leading-relaxed">
                    Our executive engagement and technical leadership team is based in the greater Chicago metropolitan area.
                  </p>
                </div>
              </ScrollReveal>

              {/* Contact Cards */}
              <StaggerReveal selector=".contact-card" stagger={0.08} className="space-y-4">
                <div className="contact-card p-5 rounded-xl border border-[#E5E9EF] bg-[#F6F7F9] flex items-start gap-4 hover:border-[#0F3A5F]/40 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200">
                  <div className="w-10 h-10 rounded-lg bg-[#0F3A5F] text-white flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#27DDE8]" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[#647080] uppercase">Mailing Address</div>
                    <div className="text-sm font-semibold text-[#141820] mt-0.5">{COMPANY_INFO.contact.building}</div>
                    <div className="text-sm text-[#647080]">{COMPANY_INFO.contact.address}</div>
                    <div className="text-sm text-[#647080]">{COMPANY_INFO.contact.cityStateZip}</div>
                  </div>
                </div>

                <div className="contact-card p-5 rounded-xl border border-[#E5E9EF] bg-[#F6F7F9] flex items-start gap-4 hover:border-[#0F3A5F]/40 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200">
                  <div className="w-10 h-10 rounded-lg bg-[#0F3A5F] text-white flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#27DDE8]" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[#647080] uppercase">Telephone</div>
                    <a
                      href={`tel:${COMPANY_INFO.contact.phone}`}
                      className="text-base font-bold text-[#0F3A5F] hover:underline mt-0.5 block"
                    >
                      {COMPANY_INFO.contact.phoneDisplay}
                    </a>
                    <div className="text-xs text-[#647080] mt-0.5">Mon–Fri: 8:00 AM – 6:00 PM (Chicago Time)</div>
                  </div>
                </div>

                <div className="contact-card p-5 rounded-xl border border-[#E5E9EF] bg-[#F6F7F9] flex items-start gap-4 hover:border-[#0F3A5F]/40 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200">
                  <div className="w-10 h-10 rounded-lg bg-[#0F3A5F] text-white flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#27DDE8]" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[#647080] uppercase">Electronic Mail</div>
                    <a
                      href={`mailto:${COMPANY_INFO.contact.email}`}
                      className="text-sm font-bold text-[#0F3A5F] hover:underline mt-0.5 block"
                    >
                      {COMPANY_INFO.contact.email}
                    </a>
                    <div className="text-xs text-[#647080] mt-0.5">Direct client &amp; technical inquiries</div>
                  </div>
                </div>

                <div className="contact-card p-5 rounded-xl border border-[#E5E9EF] bg-[#F6F7F9] flex items-start gap-4 hover:border-[#0F3A5F]/40 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200">
                  <div className="w-10 h-10 rounded-lg bg-[#0F3A5F] text-white flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-[#27DDE8]" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[#647080] uppercase">Operating Hours</div>
                    <div className="text-sm text-[#141820] font-medium mt-0.5">
                      {COMPANY_INFO.contact.businessHours.weekdays}
                    </div>
                    <div className="text-xs text-[#647080]">{COMPANY_INFO.contact.businessHours.weekends}</div>
                    <div className="text-xs font-semibold text-[#0F3A5F] mt-1.5 flex items-center gap-1.5">
                      <Globe2 className="w-3.5 h-3.5" />
                      <span>Email &amp; Emergency Support: 24/7/365</span>
                    </div>
                  </div>
                </div>
              </StaggerReveal>
            </div>

            {/* Right Column: Working Contact Form */}
            <div className="lg:col-span-7">
              <ScrollReveal yOffset={24}>
                <ContactForm />
              </ScrollReveal>
            </div>
          </div>

          {/* Google Maps Embed Section */}
          <ScrollReveal yOffset={30}>
            <div className="mt-16 pt-12 border-t border-[#E5E9EF]">
              <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="text-xl font-bold text-[#141820]">
                    Our Office Location
                  </h3>
                  <p className="text-xs sm:text-sm text-[#647080]">
                    Conveniently situated in Bloomingdale, Illinois, serving the Chicagoland business corridor and clients worldwide.
                  </p>
                </div>
                <span className="text-xs font-semibold text-[#0F3A5F] bg-[#0F3A5F]/10 px-3 py-1 rounded-full self-start sm:self-auto">
                  Chicago Metro Area
                </span>
              </div>

              <div className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-[#E5E9EF] shadow-sm">
                <iframe
                  title="Neparica Inc Office Location"
                  src={COMPANY_INFO.contact.googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </main>
  );
}
