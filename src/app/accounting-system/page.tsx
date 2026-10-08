import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { PageHero } from '@/components/shared/PageHero';
import { Container } from '@/components/shared/Container';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { CTASection } from '@/components/shared/CTASection';
import { Button } from '@/components/ui/Button';
import {
  BarChart3,
  Receipt,
  Boxes,
  Truck,
  Building,
  CheckCircle2,
  FileSpreadsheet,
  ShieldCheck
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Affordable ERP & Accounting System',
  description: 'Simple and affordable ERP and accounting software for small and mid-sized businesses. Cloud-integrated ledger, inventory, invoicing, and reporting.'
};

import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { ImageReveal } from '@/components/animations/ImageReveal';
import { StaggerReveal } from '@/components/animations/StaggerReveal';

export default function AccountingSystemPage() {
  const modules = [
    {
      title: 'General Ledger & Financial Accounting',
      description: 'Double-entry bookkeeping, automated chart of accounts, multi-currency support, and journal entries with strict audit logs.',
      icon: Receipt
    },
    {
      title: 'Accounts Receivable & Invoicing',
      description: 'Custom professional invoices, automated recurring billing, customer credit limits, and online payment integration.',
      icon: FileSpreadsheet
    },
    {
      title: 'Multi-Warehouse Inventory Control',
      description: 'Real-time stock valuation (FIFO/LIFO/Average), automated reorder thresholds, batch/lot tracking, and transfer logging.',
      icon: Boxes
    },
    {
      title: 'Procurement & Vendor Management',
      description: 'Purchase orders, vendor approvals, goods receipt verification, and three-way matching to prevent billing errors.',
      icon: Truck
    },
    {
      title: 'Industry-Specific Customization',
      description: 'Easily customizable for Manufacturing (BOM), Healthcare clinics, Retail chains, Wholesale distribution, and Hospitality.',
      icon: Building
    },
    {
      title: 'Executive Financial Reporting',
      description: 'Real-time Balance Sheets, P&L statements, cash flow forecasts, and KPI dashboards for confident management decisions.',
      icon: BarChart3
    }
  ];

  return (
    <main>
      <PageHero
        eyebrow="Business Software Product"
        title="Affordable ERP & Accounting System"
        description="A simple, powerful, and affordable accounting and ERP system engineered specifically for small and mid-sized enterprises. Fully customizable to your operational needs on a rapid timeline."
        breadcrumbs={[
          { label: 'Solutions', href: '/solutions' },
          { label: 'Accounting System' }
        ]}
      />

      {/* Overview Section */}
      <section className="py-16 md:py-24 bg-white border-b border-[#E5E9EF]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 space-y-6">
              <ScrollReveal yOffset={24}>
                <div className="space-y-6">
                  <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#0F3A5F] bg-[#0F3A5F]/10 px-3 py-1 rounded-full border border-[#0F3A5F]/15">
                    Tailored for Growing SMBs
                  </span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#141820]">
                    Enterprise Financial Control Without Enterprise Overhead
                  </h2>

                  <p className="text-base text-[#647080] leading-relaxed">
                    Neparica’s Accounting System is suitable for small to mid-size businesses that require a simple, reliable, and affordable financial and operational management system. If standard off-the-shelf software does not fit your unique business workflows, we can customize our system at an accessible price within a short timeline.
                  </p>

                  <p className="text-base text-[#647080] leading-relaxed">
                    We truly understand the dilemma faced by small and medium-sized businesses: on one hand, growing companies cannot justify the astronomical multi-million-dollar deployment costs and complex licensing of corporate ERP giants. On the other hand, they cannot rely on generic small-business bookkeeping apps that fail to integrate cross-departmental operations. That is where Neparica serves as your trusted software partner.
                  </p>

                  <div className="pt-2">
                    <Button href="/contact" variant="primary" size="lg" withArrow>
                      Schedule an Accounting System Demo
                    </Button>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-5">
              <ImageReveal className="rounded-2xl border border-[#E5E9EF] shadow-lg bg-[#F6F7F9]">
                <div className="relative h-80 sm:h-96 w-full">
                  <Image
                    src="/images/partnership.jpg"
                    alt="Neparica ERP and Accounting System"
                    fill
                    className="object-cover"
                    sizes="450px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101827]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/95 backdrop-blur shadow-md">
                    <div className="text-xs font-bold text-[#0F3A5F] uppercase">Single Integrated Cloud Database</div>
                    <div className="text-sm font-semibold text-[#141820] mt-0.5">Collaborative Workflows Across Departments</div>
                  </div>
                </div>
              </ImageReveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Modules Grid */}
      <section className="py-16 md:py-24 bg-[#F6F7F9] border-b border-[#E5E9EF]">
        <Container>
          <ScrollReveal yOffset={20}>
            <SectionHeading
              eyebrow="System Modules"
              title="Core Functional Components"
              description="All essential business management capabilities unified in an intuitive, browser-based cloud environment."
              align="center"
            />
          </ScrollReveal>

          <StaggerReveal selector=".module-card" stagger={0.08} className="mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {modules.map((mod) => {
                const Icon = mod.icon;
                return (
                  <div
                    key={mod.title}
                    className="module-card group bg-white p-7 rounded-xl border border-[#E5E9EF] shadow-sm hover:border-[#0F3A5F]/40 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="w-11 h-11 rounded-lg bg-[#0F3A5F]/10 text-[#0F3A5F] flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#0F3A5F] group-hover:text-white">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-[#141820] mb-2 leading-snug group-hover:text-[#0F3A5F] transition-colors">
                      {mod.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#647080] leading-relaxed">
                      {mod.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </StaggerReveal>
        </Container>
      </section>

      <CTASection
        title="Ready to Upgrade Your Accounting & ERP System?"
        description="Contact our enterprise software team to review your chart of accounts and operational workflows."
      />
    </main>
  );
}
