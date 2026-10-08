import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { PageHero } from '@/components/shared/PageHero';
import { Container } from '@/components/shared/Container';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { CTASection } from '@/components/shared/CTASection';
import { BLOG_POSTS } from '@/data/blog';
import { Calendar, User, ArrowRight, Sparkles, BookOpen } from 'lucide-react';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { StaggerReveal } from '@/components/animations/StaggerReveal';
import { ImageReveal } from '@/components/animations/ImageReveal';

export const metadata: Metadata = {
  title: 'Insights & Technology Resources',
  description: 'Practical technology advice, software development insights, and IT strategies for growing small and mid-sized businesses.'
};

export default function BlogListingPage() {
  const featuredPost = BLOG_POSTS[0];
  const morePosts = BLOG_POSTS.slice(1);

  return (
    <main>
      {/* 1. Hero Section */}
      <PageHero
        eyebrow="INSIGHTS & RESOURCES"
        title="Insights for Smarter Business Decisions"
        description="Practical technology advice, software development insights, and IT strategies for growing businesses."
        breadcrumbs={[{ label: 'Blog' }]}
      />

      <section className="py-16 md:py-24 bg-[#F8FAFC] border-b border-[#E5E9EF]">
        <Container>
          {/* 2. Featured Article */}
          <div className="mb-16 md:mb-20">
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#0F3A5F] bg-[#0F3A5F]/10 px-3 py-1 rounded-full border border-[#0F3A5F]/15">
                Featured Publication
              </span>
              <span className="text-xs text-[#647080] hidden sm:inline">
                Verified Neparica Article
              </span>
            </div>

            <ScrollReveal yOffset={24}>
              <div className="group bg-white rounded-2xl border border-[#E5E9EF] p-6 sm:p-8 lg:p-10 shadow-sm transition-all duration-300 hover:border-[#0F3A5F]/30 hover:shadow-md">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* Left: Large Featured Image */}
                  <div className="lg:col-span-7">
                    <div className="aspect-video relative rounded-xl overflow-hidden border border-[#E5E9EF] bg-slate-100">
                      <Image
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        fill
                        priority
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        sizes="(max-width: 1024px) 100vw, 700px"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-md text-xs font-semibold bg-[#0F3A5F] text-white shadow-sm">
                          {featuredPost.category}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right: Meta, Title, Description, Link */}
                  <div className="lg:col-span-5 space-y-4">
                    <div className="flex items-center gap-4 text-xs text-[#647080]">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#0F3A5F]" />
                        <span>{featuredPost.date}</span>
                      </div>
                      <span className="text-[#cbd5e1]">•</span>
                      <div className="flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-[#0F3A5F]" />
                        <span>{featuredPost.author}</span>
                      </div>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-bold text-[#141820] leading-snug group-hover:text-[#0F3A5F] transition-colors">
                      <Link href={`/blog/${featuredPost.slug}`}>
                        {featuredPost.title}
                      </Link>
                    </h2>

                    <p className="text-sm sm:text-base text-[#647080] leading-relaxed">
                      {featuredPost.excerpt}
                    </p>

                    <div className="pt-2">
                      <Link
                        href={`/blog/${featuredPost.slug}`}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#0F3A5F] group-hover:text-[#0a2740] transition-colors"
                      >
                        <span>Read Full Article</span>
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* 3. More Insights Header */}
          <div className="mb-10">
            <SectionHeading
              eyebrow="Explore Topics"
              title="More Insights"
              description="Technology guidelines, engineering practices, and IT management strategy for modern businesses."
            />
          </div>

          {/* 4. Three-Column Grid */}
          <StaggerReveal selector=".blog-card" stagger={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {morePosts.map((post) => (
                <article
                  key={post.slug}
                  className="blog-card group bg-white rounded-xl border border-[#E5E9EF] overflow-hidden flex flex-col justify-between shadow-sm transition-all duration-300 hover:border-[#0F3A5F]/40 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div>
                    {/* 16:9 Featured Image */}
                    <div className="aspect-video relative w-full overflow-hidden bg-slate-100">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                      />
                      <div className="absolute top-3 left-3 flex items-center gap-2">
                        <span className="px-2.5 py-1 rounded text-xs font-semibold bg-white/95 text-[#0F3A5F] backdrop-blur shadow-sm">
                          {post.category}
                        </span>
                        {post.isSample && (
                          <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-[#0F3A5F]/85 text-white shadow-sm">
                            Sample
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-[#141820] leading-snug mb-3 group-hover:text-[#0F3A5F] transition-colors line-clamp-2">
                        <Link href={`/blog/${post.slug}`}>
                          {post.title}
                        </Link>
                      </h3>

                      <p className="text-xs sm:text-sm text-[#647080] leading-relaxed line-clamp-3 mb-4">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  {/* Read Article Link */}
                  <div className="p-6 pt-0">
                    <div className="pt-4 border-t border-[#F1F5F9]">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#0F3A5F] group-hover:text-[#0a2740] transition-colors"
                      >
                        <span>Read Article</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </StaggerReveal>
        </Container>
      </section>

      {/* Global CTA */}
      <CTASection
        title="Need Technical Guidance on Your Web or Software Strategy?"
        description="Our Chicago technology leadership and global engineering specialists are available to review your IT requirements and architecture."
      />
    </main>
  );
}
