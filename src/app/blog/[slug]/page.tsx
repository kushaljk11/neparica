import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { PageHero } from '@/components/shared/PageHero';
import { Container } from '@/components/shared/Container';
import { CTASection } from '@/components/shared/CTASection';
import { BLOG_POSTS } from '@/data/blog';
import { Calendar, User, ArrowLeft, CheckCircle2, HelpCircle, Info, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug
  }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: 'Article Not Found'
    };
  }

  return {
    title: `${post.title} | Neparica Blog`,
    description: post.excerpt
  };
}

export default async function BlogPostDetailPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main>
      <PageHero
        eyebrow={post.category}
        title={post.title}
        description={post.excerpt}
        breadcrumbs={[
          { label: 'Blog', href: '/blog' },
          { label: post.title }
        ]}
      />

      <article className="py-16 md:py-24 bg-white border-b border-[#E5E9EF]">
        <Container size="narrow">
          {/* Back Link */}
          <div className="mb-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#0F3A5F] hover:text-[#0a2740] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Articles</span>
            </Link>
          </div>

          {/* Sample Article Disclaimer Badge (if demo content) */}
          {post.isSample && (
            <div className="mb-8 p-4 rounded-xl bg-[#F6F7F9] border border-[#E5E9EF] flex items-start gap-3 text-xs sm:text-sm text-[#647080]">
              <Info className="w-4 h-4 text-[#0F3A5F] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#141820] font-semibold">Sample Educational Entry:</strong>{' '}
                This sample article illustrates Neparica’s advisory coverage and engineering perspectives. It is provided for evaluation and content demonstration purposes.
              </div>
            </div>
          )}

          {/* Article Header Meta */}
          <div className="flex flex-wrap items-center gap-4 text-xs text-[#647080] pb-6 mb-8 border-b border-[#E5E9EF]">
            {post.date ? (
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#0F3A5F]" />
                <span>{post.date}</span>
              </div>
            ) : (
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#0F3A5F]" />
                <span>Sample Insight</span>
              </div>
            )}

            {post.author && (
              <>
                <span className="text-[#cbd5e1]">•</span>
                <div className="flex items-center gap-1.5">
                  <User className="w-4 h-4 text-[#0F3A5F]" />
                  <span>{post.author}</span>
                </div>
              </>
            )}

            <span className="text-[#cbd5e1]">•</span>
            <span className="px-2.5 py-0.5 rounded-full bg-[#0F3A5F]/10 text-[#0F3A5F] font-semibold">
              {post.category}
            </span>
          </div>

          {/* Featured Image */}
          <div className="aspect-video relative rounded-2xl overflow-hidden border border-[#E5E9EF] mb-10 shadow-sm bg-slate-100">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 850px"
            />
          </div>

          {/* Content Paragraphs */}
          <div className="space-y-6 text-base sm:text-lg text-[#141820] leading-relaxed">
            {post.content.map((p, idx) => (
              <p key={idx} className="text-[#647080] leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          {/* Key Takeaways (for sample articles) */}
          {post.takeaways && post.takeaways.length > 0 && (
            <div className="mt-12 p-8 rounded-xl bg-[#F6F7F9] border border-[#E5E9EF] space-y-4">
              <h3 className="text-xl font-bold text-[#141820] flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#0F3A5F]" />
                <span>Key Operational Takeaways</span>
              </h3>
              <ul className="space-y-2.5">
                {post.takeaways.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm sm:text-base text-[#647080]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0F3A5F] mt-2.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Key Questions Addressed Section (for Website Health Check) */}
          {post.keyQuestions && post.keyQuestions.length > 0 && (
            <div className="mt-12 pt-10 border-t border-[#E5E9EF] space-y-6">
              <h3 className="text-2xl font-bold text-[#141820] flex items-center gap-2.5">
                <HelpCircle className="w-6 h-6 text-[#0F3A5F]" />
                <span>Key Questions Addressed During a Website Health Check</span>
              </h3>

              <div className="space-y-6">
                {post.keyQuestions.map((q, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-xl bg-[#F6F7F9] border border-[#E5E9EF] space-y-2"
                  >
                    <h4 className="text-base sm:text-lg font-bold text-[#141820] flex items-start gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-[#0F3A5F] shrink-0 mt-0.5" />
                      <span>{q.question}</span>
                    </h4>
                    <p className="text-sm text-[#647080] leading-relaxed pl-7">
                      {q.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Consultation Callout */}
          <div className="mt-14 p-8 rounded-2xl bg-[#0F3A5F]/5 border border-[#0F3A5F]/20 text-center space-y-4">
            <h4 className="text-xl font-bold text-[#0F3A5F]">
              Have Questions About Your Business Technology?
            </h4>
            <p className="text-sm text-[#647080] max-w-xl mx-auto">
              Our Chicago-based IT consulting directors and global software engineering leads are available for free initial consultations.
            </p>
            <div className="pt-2">
              <Button href="/contact" variant="primary" size="md">
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </Container>
      </article>

      <CTASection />
    </main>
  );
}
