'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/shared/Container';
import { ChevronRight, Users, Cpu, ShieldCheck } from 'lucide-react';
import { CTASection } from '@/components/shared/CTASection';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const PRINCIPLES = [
  {
    id: 1,
    icon: Users,
    title: 'Customer-Centric Thinking',
    summary: 'We seek to understand business needs before recommending technology.',
    detail: 'Deep operational and process analysis ensures we architect software that solves actual enterprise challenges and supports sustainable business goals.'
  },
  {
    id: 2,
    icon: Cpu,
    title: 'Practical Innovation',
    summary: 'We apply useful technologies to real operational challenges.',
    detail: 'We focus on dominant, reliable frameworks and modern software practices that provide tangible competitive edges without unnecessary complexity.'
  },
  {
    id: 3,
    icon: ShieldCheck,
    title: 'Dependable Delivery',
    summary: 'We focus on reliable solutions and long-term business value.',
    detail: 'On-time milestone delivery governed by dedicated USA project oversight, rigorous quality standards, and continuous technical dependability.'
  }
];

export function VisionAndMissionView() {
  const heroRef = useRef<HTMLDivElement>(null);
  const visionRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);
  const principlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // 1. Hero Animation
      if (heroRef.current) {
        const eyebrow = heroRef.current.querySelector('.hero-eyebrow');
        const heading = heroRef.current.querySelector('.hero-heading');
        const desc = heroRef.current.querySelector('.hero-desc');
        const breadcrumb = heroRef.current.querySelector('.hero-breadcrumb');

        const tl = gsap.timeline();
        if (breadcrumb) {
          tl.fromTo(breadcrumb, { opacity: 0, y: -6 }, { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' });
        }
        if (eyebrow) {
          tl.fromTo(eyebrow, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, '-=0.2');
        }
        if (heading) {
          tl.fromTo(heading, { opacity: 0, y: 22 }, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, '-=0.35');
        }
        if (desc) {
          tl.fromTo(desc, { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.4');
        }
      }

      // 2. Vision Section Animation
      if (visionRef.current) {
        const textWrapper = visionRef.current.querySelector('.vision-text');
        const imgWrapper = visionRef.current.querySelector('.vision-img');

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: visionRef.current,
            start: 'top 75%',
            once: true
          }
        });

        if (imgWrapper) {
          tl.fromTo(
            imgWrapper,
            { opacity: 0, x: -24 },
            { opacity: 1, x: 0, duration: 0.75, ease: 'power2.out' }
          );
        }

        if (textWrapper) {
          const items = textWrapper.querySelectorAll('.vision-item');
          tl.fromTo(
            items,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out' },
            '-=0.55'
          );
        }
      }

      // 3. Mission Section Animation
      if (missionRef.current) {
        const textWrapper = missionRef.current.querySelector('.mission-text');
        const imgWrapper = missionRef.current.querySelector('.mission-img');

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: missionRef.current,
            start: 'top 75%',
            once: true
          }
        });

        if (imgWrapper) {
          tl.fromTo(
            imgWrapper,
            { opacity: 0, x: 24 },
            { opacity: 1, x: 0, duration: 0.75, ease: 'power2.out' }
          );
        }

        if (textWrapper) {
          const items = textWrapper.querySelectorAll('.mission-item');
          tl.fromTo(
            items,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out' },
            '-=0.55'
          );
        }
      }

      // 4. Principles Section Animation
      if (principlesRef.current) {
        const header = principlesRef.current.querySelector('.principles-header');
        const cards = principlesRef.current.querySelectorAll('.principle-card');

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: principlesRef.current,
            start: 'top 80%',
            once: true
          }
        });

        if (header) {
          tl.fromTo(
            header,
            { opacity: 0, y: 18 },
            { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
          );
        }

        if (cards.length > 0) {
          tl.fromTo(
            cards,
            { opacity: 0, y: 24 },
            { opacity: 1, y: 0, duration: 0.65, stagger: 0.12, ease: 'power2.out' },
            '-=0.3'
          );
        }
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="bg-white">
      {/* SECTION 1 — Compact Hero */}
      <section
        ref={heroRef}
        className="bg-[#F8FAFC] border-b border-[#E5E9EF] py-16 md:py-24"
      >
        <Container>
          {/* Breadcrumbs */}
          <nav
            aria-label="Breadcrumb"
            className="hero-breadcrumb mb-6 flex items-center gap-1.5 text-xs text-[#647080]"
          >
            <Link href="/" className="hover:text-[#0F3A5F] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3 h-3 text-[#9BAAAA]" />
            <Link href="/about-us" className="hover:text-[#0F3A5F] transition-colors">
              About Us
            </Link>
            <ChevronRight className="w-3 h-3 text-[#9BAAAA]" />
            <span className="text-[#141820] font-medium">Vision and Mission</span>
          </nav>

          <div className="max-w-3xl">
            <div className="hero-eyebrow mb-3.5 inline-block">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0F3A5F] bg-[#0F3A5F]/10 px-3 py-1 rounded-full border border-[#0F3A5F]/15">
                OUR PURPOSE
              </span>
            </div>

            <h1 className="hero-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#141820] leading-[1.15]">
              Driven by Purpose. Focused on Progress.
            </h1>

            <p className="hero-desc mt-4 text-base sm:text-lg text-[#647080] leading-relaxed max-w-2xl">
              Discover the vision and mission guiding Neparica&apos;s approach to technology, innovation, and business growth.
            </p>
          </div>
        </Container>
      </section>

      {/* SECTION 2 — Our Vision (Editorial Two-Column: Image Left, Content Right on Desktop) */}
      <section
        ref={visionRef}
        id="vision"
        className="py-16 md:py-20 lg:py-24 bg-white border-b border-[#E5E9EF]"
      >
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 xl:gap-20 items-start">
            {/* Left Column: Professional Image (Order-1 on Mobile & Desktop) */}
            <div className="vision-img order-1 lg:col-span-5 w-full flex justify-center lg:justify-start items-start lg:pt-1">
              <div className="relative w-full aspect-[16/10] md:aspect-[4/3] max-w-[520px] mx-auto lg:mx-0 overflow-hidden rounded-xl border border-[#E5E9EF] bg-slate-100 shadow-sm">
                <Image
                  src="/images/vision-mission/vision.jpg"
                  alt="Neparica Vision - Modern software development and technology consulting team"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 45vw, 520px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Right Column: Vision Content (Order-2 on Mobile & Desktop) */}
            <div className="vision-text order-2 lg:col-span-7 space-y-6">
              <div className="vision-item flex items-center gap-2.5">
                <span className="font-mono text-xs font-bold text-[#0F3A5F] bg-[#0F3A5F]/10 px-2.5 py-1 rounded">
                  01 / OUR ASPIRATION
                </span>
                <span className="text-xs font-semibold text-[#647080] uppercase tracking-wider">
                  Future Vision
                </span>
              </div>

              <h2 className="vision-item text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#141820] leading-tight">
                Our Vision
              </h2>

              <div className="vision-item text-sm sm:text-base font-semibold text-[#0F3A5F] bg-[#0F3A5F]/5 p-4 rounded-lg border-l-4 border-[#0F3A5F]">
                Helping Small &amp; Mid-size Businesses reach and maximize client business goals through reliable and scalable IT solutions.
              </div>

              <div className="vision-item space-y-4 text-sm sm:text-base text-[#647080] leading-relaxed">
                <p>
                  Neparica strives to become a leading <strong className="text-[#141820]">&quot;1 Stop SMB IT Partner&quot;</strong> in helping Small &amp; Mid-size Businesses (SMBs) through innovative technologies to reach and maximize client business goals by providing reliable, and scalable IT services and solutions.
                </p>
                <p>
                  Our primary goal is to provide your company with the software tools needed to address real-world business issues and growth opportunities.
                </p>
                <p>
                  Neparica, with utmost customer-centricity, consistently endeavors to be technologically innovative in order to enable enterprises to leverage technology for significant business advantages in hard-to-win situations. Ultimately, our vision is to enrich and delight small and mid-sized businesses through reliable and innovative technologies that matter most.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 3 — Our Mission (Reverse Editorial: Content Left, Image Right on Desktop; Image First on Mobile) */}
      <section
        ref={missionRef}
        id="mission"
        className="py-16 md:py-20 lg:py-24 bg-[#F8FAFC] border-b border-[#E5E9EF]"
      >
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 xl:gap-20 items-start">
            {/* Left Column on Desktop / Bottom on Mobile: Mission Content */}
            <div className="mission-text order-2 lg:order-1 lg:col-span-7 space-y-6">
              <div className="mission-item flex items-center gap-2.5">
                <span className="font-mono text-xs font-bold text-[#0F3A5F] bg-[#0F3A5F]/10 px-2.5 py-1 rounded">
                  02 / OUR COMMITMENT
                </span>
                <span className="text-xs font-semibold text-[#647080] uppercase tracking-wider">
                  Core Mission
                </span>
              </div>

              <h2 className="mission-item text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#141820] leading-tight">
                Our Mission
              </h2>

              <div className="mission-item text-sm sm:text-base font-semibold text-[#0F3A5F] bg-[#0F3A5F]/5 p-4 rounded-lg border-l-4 border-[#0F3A5F]">
                Delivering &quot;Right &amp; Affordable Solutions&quot; by truly analyzing business operations and gathering precise requirements.
              </div>

              <div className="mission-item space-y-4 text-sm sm:text-base text-[#647080] leading-relaxed">
                <p>
                  Our mission is to utilize cutting-edge technologies to offer <strong className="text-[#141820]">&quot;Right &amp; Affordable Solutions&quot;</strong> to our invaluable clients, by truly analyzing their business and operational processes while gathering requirements.
                </p>
                <p>
                  This focus has allowed us to become a trusted 1 Stop SMB IT Partner, letting your business stride towards the summit of success in this cut-throat competitive world.
                </p>
                <p>
                  Neparica holds the mission to deliver on-time, reliable IT-enabled services and solutions to meet our clients’ needs with top-notch quality, eventually providing a delightful experience in advancing their business interests. Our practice focuses on creating state-of-the-art products by excelling in the technologies that are dominant in each sector.
                </p>
              </div>
            </div>

            {/* Right Column on Desktop / Top on Mobile: Technology Collaboration Image */}
            <div className="mission-img order-1 lg:order-2 lg:col-span-5 w-full flex justify-center lg:justify-end items-start lg:pt-1">
              <div className="relative w-full aspect-[16/10] md:aspect-[4/3] max-w-[520px] mx-auto lg:mx-0 overflow-hidden rounded-xl border border-[#E5E9EF] bg-slate-100 shadow-sm">
                <Image
                  src="/images/vision-mission/mission.jpg"
                  alt="Neparica Mission - Technology consultants and business executives analyzing software solutions"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 45vw, 520px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 4 — What Guides Us (Compact Three-Column Supporting Section) */}
      <section
        ref={principlesRef}
        className="py-16 md:py-20 lg:py-24 bg-white border-b border-[#E5E9EF]"
      >
        <Container>
          {/* Section Header */}
          <div className="principles-header max-w-2xl mb-12 sm:mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0F3A5F] bg-[#0F3A5F]/10 px-3 py-1 rounded-full border border-[#0F3A5F]/15 inline-block mb-3">
              WHAT GUIDES US
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#141820]">
              The Principles Behind Our Work.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#647080] leading-relaxed">
              Three core operational tenets derived from our verified vision and mission, shaping how we analyze problems and deliver technology.
            </p>
          </div>

          {/* Three Principle Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {PRINCIPLES.map((principle) => {
              const IconComponent = principle.icon;
              return (
                <div
                  key={principle.id}
                  className="principle-card group bg-white rounded-xl border border-[#E5E9EF] p-7 sm:p-8 flex flex-col justify-between hover:border-[#0F3A5F]/40 hover:shadow-md transition-all duration-300"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#0F3A5F]/10 text-[#0F3A5F] flex items-center justify-center mb-6 group-hover:bg-[#0F3A5F] group-hover:text-white transition-colors duration-300">
                      <IconComponent className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-[#141820] mb-2 group-hover:text-[#0F3A5F] transition-colors">
                      {principle.title}
                    </h3>

                    <p className="text-sm font-medium text-[#141820] mb-3 leading-snug">
                      {principle.summary}
                    </p>

                    <p className="text-xs sm:text-sm text-[#647080] leading-relaxed">
                      {principle.detail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* SECTION 5 — Standard Enterprise CTA */}
      <CTASection />
    </main>
  );
}
