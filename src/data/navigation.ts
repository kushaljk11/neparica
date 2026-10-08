export interface NavItem {
  title: string;
  href: string;
  children?: {
    title: string;
    href: string;
    description?: string;
  }[];
}

export const MAIN_NAVIGATION: NavItem[] = [
  {
    title: 'Home',
    href: '/'
  },
  {
    title: 'About Us',
    href: '/about-us',
    children: [
      {
        title: 'About Neparica',
        href: '/about-us',
        description: 'Our history, Chicago roots, and 1-stop SMB partner positioning.'
      },
      {
        title: 'Company Overview',
        href: '/company-overview',
        description: 'Comprehensive operational background and global team structure.'
      },
      {
        title: 'Vision and Mission',
        href: '/vision-and-mission',
        description: 'Our customer-centric values and commitment to SMB empowerment.'
      }
    ]
  },
  {
    title: 'Services',
    href: '/services',
    children: [
      {
        title: 'Growth Strategy',
        href: '/growth-strategy',
        description: 'Operational analysis, process mapping, and strategic digitization.'
      },
      {
        title: 'Cloud Hosting and Support',
        href: '/services/cloud-hosting-and-support',
        description: 'Enterprise AWS and Azure infrastructure management and monitoring.'
      },
      {
        title: 'Digital Marketing',
        href: '/services/digital-marketing',
        description: 'Targeted eMarketing packages that drive qualified leads and sales.'
      },
      {
        title: 'Remote & Offshore Teams',
        href: '/services/remote-and-offshore-team-building',
        description: 'Build dedicated remote engineering teams on your terms.'
      },
      {
        title: 'IT Staffing',
        href: '/services/it-staffing',
        description: 'Permanent, contract, and fractional vetted technical talent.'
      },
      {
        title: 'Other IT Services',
        href: '/services/other-it-services',
        description: 'Brand identity, UI/UX graphic design, and custom technical support.'
      },
      {
        title: 'IT Consulting',
        href: '/services/it-consulting',
        description: 'Strategic IT advisory services tailored to SMB budgets.'
      },
      {
        title: 'Project Outsourcing',
        href: '/services/project-outsourcing',
        description: 'Full-cycle turnkey project execution with guaranteed delivery.'
      }
    ]
  },
  {
    title: 'Solutions',
    href: '/solutions',
    children: [
      {
        title: 'E-commerce Solutions',
        href: '/solutions/e-commerce',
        description: 'Flexible, scalable online stores built on proven platforms.'
      },
      {
        title: 'Customized Software',
        href: '/solutions/customized-software',
        description: 'Bespoke desktop and cloud systems built for unique operational workflows.'
      },
      {
        title: 'Mobile Applications',
        href: '/solutions/mobile-apps',
        description: 'Modern iOS and Android applications built for user retention.'
      },
      {
        title: 'Dynamic Websites & CMS',
        href: '/solutions/website-design',
        description: 'High-performance responsive websites with intuitive CMS control.'
      },
      {
        title: 'Custom Web Applications',
        href: '/solutions/customized-web-applications',
        description: 'Multi-tiered, cloud-ready web applications with modern architectures.'
      },
      {
        title: 'Accounting & ERP Systems',
        href: '/accounting-system',
        description: 'Affordable, integrated accounting and ERP suites for mid-sized firms.'
      }
    ]
  },
  {
    title: 'Value Proposition',
    href: '/value-proposition'
  },
  {
    title: 'Blog',
    href: '/blog'
  },
  {
    title: 'Contact',
    href: '/contact'
  }
];

export const FOOTER_SERVICES = [
  { title: 'Growth Strategy', href: '/growth-strategy' },
  { title: 'Cloud Hosting & Support', href: '/services/cloud-hosting-and-support' },
  { title: 'Digital Marketing', href: '/services/digital-marketing' },
  { title: 'Remote & Offshore Teams', href: '/services/remote-and-offshore-team-building' },
  { title: 'IT Staffing', href: '/services/it-staffing' },
  { title: 'Other IT Services', href: '/services/other-it-services' },
  { title: 'IT Consulting', href: '/services/it-consulting' },
  { title: 'Project Outsourcing', href: '/services/project-outsourcing' }
];

export const FOOTER_SOLUTIONS = [
  { title: 'E-commerce Platforms', href: '/solutions/e-commerce' },
  { title: 'Customized Software', href: '/solutions/customized-software' },
  { title: 'Mobile Apps', href: '/solutions/mobile-apps' },
  { title: 'Dynamic Websites', href: '/solutions/website-design' },
  { title: 'Custom Web Applications', href: '/solutions/customized-web-applications' },
  { title: 'Accounting System & ERP', href: '/accounting-system' }
];

export const FOOTER_RESOURCES = [
  { title: 'Company Overview', href: '/company-overview' },
  { title: 'Vision & Mission', href: '/vision-and-mission' },
  { title: 'Value Proposition', href: '/value-proposition' },
  { title: 'Articles & Insights', href: '/blog' },
  { title: 'Privacy Policy', href: '/privacy-policy' },
  { title: 'Terms of Use', href: '/terms-of-use' }
];
