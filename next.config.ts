import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    return [
      { source: '/contact-us', destination: '/contact', permanent: true },
      { source: '/contact-us/', destination: '/contact', permanent: true },
      { source: '/privacy-policy-2', destination: '/privacy-policy', permanent: true },
      { source: '/privacy-policy-2/', destination: '/privacy-policy', permanent: true },
      { source: '/customized-software-development', destination: '/solutions/customized-software', permanent: true },
      { source: '/customized-web-applications', destination: '/solutions/customized-web-applications', permanent: true },
      { source: '/dynamic-websites-with-integrated-cms', destination: '/solutions/website-design', permanent: true },
      { source: '/e-commerce', destination: '/solutions/e-commerce', permanent: true },
      { source: '/mobile-apps', destination: '/solutions/mobile-apps', permanent: true },
      { source: '/it-consulting', destination: '/services/it-consulting', permanent: true },
      { source: '/cloud-hosting-and-support', destination: '/services/cloud-hosting-and-support', permanent: true },
      { source: '/digital-marketing', destination: '/services/digital-marketing', permanent: true },
      { source: '/remote-and-offshore-team-building', destination: '/services/remote-and-offshore-team-building', permanent: true },
      { source: '/it-staffing', destination: '/services/it-staffing', permanent: true },
      { source: '/other-it-services', destination: '/services/other-it-services', permanent: true },
      { source: '/project-outsourcing', destination: '/services/project-outsourcing', permanent: true },
      { source: '/affordable-erp-for-midsize-companies', destination: '/accounting-system', permanent: true },
      { source: '/importance-of-website-health-check', destination: '/blog/importance-of-website-health-check', permanent: true },
    ];
  },
};

export default nextConfig;
