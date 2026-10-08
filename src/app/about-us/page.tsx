import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { PageHero } from '@/components/shared/PageHero';
import { Container } from '@/components/shared/Container';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { CTASection } from '@/components/shared/CTASection';
import { COMPANY_INFO } from '@/data/company';
import { Check, ShieldCheck, MapPin, Globe2, Award, Zap } from 'lucide-react';

import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { ImageReveal } from '@/components/animations/ImageReveal';
import { StaggerReveal } from '@/components/animations/StaggerReveal';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Neparica Inc: Founded in 2004 in Chicago, providing end-to-end IT services, custom software, and 24/7 global delivery for small and mid-sized businesses.'
};

export default function AboutUsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Company Profile"
        title="About Neparica"
        description="Established in 2004 in Chicago, USA, Neparica has served as a dedicated IT partner for governments and small to mid-sized businesses worldwide."
        breadcrumbs={[{ label: 'About Us' }]}
      />

      {/* Section 1: Who We Are & Detailed Background */}
      <section className="py-16 md:py-24 bg-white border-b border-[#E5E9EF]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 space-y-6">
              <ScrollReveal yOffset={24}>
                <div className="space-y-6">
                  <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#0F3A5F] bg-[#0F3A5F]/10 px-3 py-1 rounded-full border border-[#0F3A5F]/15">
                    Who We Are
                  </span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-[#141820]">
                    Over 16 Years of Dependable IT Leadership
                  </h2>

                  <div className="space-y-4 text-base text-[#647080] leading-relaxed">
                    <p>
                      Neparica, a global IT company based in Chicago, USA, has been providing a full range of IT-related services and solutions to governments and small to mid-size businesses around the globe since 2004. With our proven 4D delivery approach—Discover, Design, Develop, and Deliver—Neparica creates IT products and solutions that empower businesses to compete effectively in today’s demanding commercial environment.
                    </p>
                    <p>
                      Neparica helps clients grow their businesses by delivering on-time, high-quality projects utilizing our dedicated pool of Global Resources. We are capable of providing IT services and solutions in all major technology disciplines by leveraging our technical expertise, deep domain knowledge, and strategic alliances with leading technology companies such as Microsoft, Amazon AWS, and Oracle.
                    </p>
                    <p>
                      Furthermore, we truly understand the IT challenges faced by small and medium-sized businesses. On one hand, companies may not have the budget for large, designated in-house IT teams. On the other hand, they cannot count on massive IT conglomerates to understand their operational models and prescribe the &quot;Right People &amp; Right Technology.&quot; That is where Neparica serves as your trusted and affordable IT partner for sustainable business growth.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-5">
              <ImageReveal className="rounded-2xl border border-[#E5E9EF] shadow-xl bg-[#F6F7F9]">
                <div className="relative h-80 sm:h-96 w-full">
                  <Image
                    src="/images/office.jpg"
                    alt="Neparica Chicago Headquarters"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 450px"
                  />
                </div>
                <div className="p-6 bg-white border-t border-[#E5E9EF] space-y-2">
                  <div className="text-xs font-semibold text-[#0F3A5F] uppercase tracking-wider">
                    United States Headquarters
                  </div>
                  <div className="text-sm font-bold text-[#141820]">
                    Continental Office Plaza
                  </div>
                  <div className="text-xs text-[#647080]">
                    129 Fairfield Way, Suite 306D, Bloomingdale, IL 60108, USA
                  </div>
                </div>
              </ImageReveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Section 2: Vision and Mission */}
      <section className="py-16 md:py-24 bg-[#F6F7F9] border-b border-[#E5E9EF]">
        <Container>
          <ScrollReveal yOffset={20}>
            <SectionHeading
              eyebrow="Our Purpose"
              title="Vision & Mission"
              description="Our customer-centric focus guides every technical recommendation and architectural decision we make."
              align="center"
            />
          </ScrollReveal>

          <StaggerReveal selector=".vision-card" stagger={0.12} className="max-w-5xl mx-auto mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Vision */}
              <div className="vision-card bg-white rounded-xl border border-[#E5E9EF] p-8 shadow-sm flex flex-col justify-between hover:border-[#0F3A5F]/40 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                <div>
                  <div className="w-12 h-12 rounded-lg bg-[#0F3A5F]/10 text-[#0F3A5F] flex items-center justify-center font-bold mb-6">
                    <Award className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#141820] mb-3">Our Vision</h3>
                  <p className="text-sm text-[#647080] leading-relaxed">
                    Neparica strives to become a leading &quot;1 Stop SMB IT Partner&quot; in helping Small &amp; Mid-size Businesses (SMBs) through innovative technologies to reach and maximize client business goals by providing reliable and scalable IT services and solutions.
                  </p>
                  <p className="text-sm text-[#647080] leading-relaxed mt-3">
                    Neparica, with utmost customer-centricity, consistently endeavors to be technologically innovative in order to enable enterprises to leverage technology for significant business advantages. Ultimately, our vision is to enrich and delight small and mid-sized businesses through dependable technologies that matter most.
                  </p>
                </div>
              </div>

              {/* Mission */}
              <div className="vision-card bg-white rounded-xl border border-[#E5E9EF] p-8 shadow-sm flex flex-col justify-between hover:border-[#0F3A5F]/40 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                <div>
                  <div className="w-12 h-12 rounded-lg bg-[#0F3A5F]/10 text-[#0F3A5F] flex items-center justify-center font-bold mb-6">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#141820] mb-3">Our Mission</h3>
                  <p className="text-sm text-[#647080] leading-relaxed">
                    Our mission is to utilize cutting-edge technologies to offer &quot;Right &amp; Affordable Solutions&quot; to our invaluable clients, by truly analyzing their business and operational processes while gathering requirements.
                  </p>
                  <p className="text-sm text-[#647080] leading-relaxed mt-3">
                    Neparica holds the mission to deliver on-time, reliable IT-enabled services and solutions to meet our clients’ needs with top-notch quality, providing a delightful experience in advancing their business interests. Our practice focuses on creating state-of-the-art products by excelling in the dominant technologies of each sector.
                  </p>
                </div>
              </div>
            </div>
          </StaggerReveal>
        </Container>
      </section>

      {/* Section 3: Global Delivery Model */}
      <section className="py-16 md:py-24 bg-white border-b border-[#E5E9EF]">
        <Container>
          <ScrollReveal yOffset={20}>
            <SectionHeading
              eyebrow="Delivery Model"
              title="How Our Global Team Delivers For You"
              description="A seamless synthesis of onshore leadership and offshore development efficiency."
              align="center"
            />
          </ScrollReveal>

          <StaggerReveal selector=".delivery-card" stagger={0.08} className="mt-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="delivery-card group p-6 rounded-xl border border-[#E5E9EF] bg-[#F6F7F9] hover:border-[#0F3A5F]/40 hover:-translate-y-1 hover:shadow-xl hover:bg-white transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-[#0F3A5F] text-white flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                  <MapPin className="w-5 h-5 text-[#27DDE8]" />
                </div>
                <h4 className="text-lg font-semibold text-[#141820] mb-2 group-hover:text-[#0F3A5F] transition-colors">US Project Governance</h4>
                <p className="text-xs sm:text-sm text-[#647080] leading-relaxed">
                  Direct oversight from our Chicago management team ensures transparent communication, alignment with US commercial standards, and rigorous contract adherence.
                </p>
              </div>

              <div className="delivery-card group p-6 rounded-xl border border-[#E5E9EF] bg-[#F6F7F9] hover:border-[#0F3A5F]/40 hover:-translate-y-1 hover:shadow-xl hover:bg-white transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-[#0F3A5F] text-white flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                  <Globe2 className="w-5 h-5 text-[#27DDE8]" />
                </div>
                <h4 className="text-lg font-semibold text-[#141820] mb-2 group-hover:text-[#0F3A5F] transition-colors">24/7 Development Pipeline</h4>
                <p className="text-xs sm:text-sm text-[#647080] leading-relaxed">
                  Our Kathmandu development facilities allow continuous iteration. Features scoped during the US business day are built overnight and prepared for morning review.
                </p>
              </div>

              <div className="delivery-card group p-6 rounded-xl border border-[#E5E9EF] bg-[#F6F7F9] hover:border-[#0F3A5F]/40 hover:-translate-y-1 hover:shadow-xl hover:bg-white transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-[#0F3A5F] text-white flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                  <ShieldCheck className="w-5 h-5 text-[#27DDE8]" />
                </div>
                <h4 className="text-lg font-semibold text-[#141820] mb-2 group-hover:text-[#0F3A5F] transition-colors">Certified Quality Assurance</h4>
                <p className="text-xs sm:text-sm text-[#647080] leading-relaxed">
                  Every release undergoes multi-phase functional, security, and performance testing before deployment to ensure complete operational readiness.
                </p>
              </div>
            </div>
          </StaggerReveal>
        </Container>
      </section>

      <CTASection />
    </main>
  );
}
