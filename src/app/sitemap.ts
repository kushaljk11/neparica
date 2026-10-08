import { MetadataRoute } from 'next';
import { SERVICES } from '@/data/services';
import { SOLUTIONS } from '@/data/solutions';
import { BLOG_POSTS } from '@/data/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.neparica.com';

  const staticRoutes = [
    '',
    '/about-us',
    '/company-overview',
    '/vision-and-mission',
    '/services',
    '/solutions',
    '/value-proposition',
    '/growth-strategy',
    '/accounting-system',
    '/blog',
    '/contact',
    '/privacy-policy',
    '/terms-of-use'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1.0 : 0.8
  }));

  const serviceRoutes = SERVICES.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8
  }));

  const solutionRoutes = SOLUTIONS.map((solution) => ({
    url: `${baseUrl}/solutions/${solution.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8
  }));

  const blogRoutes = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: 'yearly' as const,
    priority: 0.6
  }));

  return [...staticRoutes, ...serviceRoutes, ...solutionRoutes, ...blogRoutes];
}
