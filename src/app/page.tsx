import React from 'react';
import type { Metadata } from 'next';
import { Hero } from '@/components/home/Hero';
import { Competency } from '@/components/home/Competency';
import { Services } from '@/components/home/Services';
import { AboutPreview } from '@/components/home/AboutPreview';
import { ValueProposition } from '@/components/home/ValueProposition';
import { FourDApproach } from '@/components/home/FourDApproach';
import { Solutions } from '@/components/home/Solutions';
import { PartnershipStrength } from '@/components/home/PartnershipStrength';
import { CTASection } from '@/components/shared/CTASection';

export const metadata: Metadata = {
  title: 'Neparica – 1 Stop SMB IT Partner | IT Consulting & Software Solutions',
  description: 'Neparica is a premier global IT services partner based in Chicago, providing IT consulting, custom web & mobile software, cloud hosting, and 24/7 technical support for growing SMBs.',
  openGraph: {
    title: 'Neparica – 1 Stop SMB IT Partner',
    description: 'Providing comprehensive IT consulting, custom software, and cloud solutions to SMBs since 2004.',
    url: 'https://www.neparica.com',
    siteName: 'Neparica Inc',
    locale: 'en_US',
    type: 'website'
  }
};

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Competency />
      <Services />
      <AboutPreview />
      <ValueProposition />
      <FourDApproach />
      <Solutions />
      <PartnershipStrength />
      <CTASection />
    </main>
  );
}
