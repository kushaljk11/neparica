import { SolutionItem } from '@/types';

export const SOLUTIONS: SolutionItem[] = [
  {
    slug: 'e-commerce',
    title: 'E-commerce Solutions',
    shortDescription: 'Flexible and modular online store platforms engineered for seamless purchasing, security, and scalable revenue growth.',
    iconName: 'ShoppingCart',
    image: '/images/cost-saving.jpg',
    fullDescription: 'Neparica has been delivering proven eCommerce solutions for over 13 years. We help you choose the right platform and build your online store using a flexible, modular architecture designed for high conversion and sustained growth. We take the technology hassle away so you can focus entirely on customer acquisition and business expansion.',
    features: [
      'Custom Storefront Design optimized for mobile and desktop conversions',
      'Secure Multi-Gateway Payment Processing (Stripe, PayPal, Authorize.Net)',
      'Automated Inventory Management, SKU Tracking, and Low-Stock Alerts',
      'Omnichannel Integration with marketplaces (Amazon, eBay, Google Shopping)',
      'Product Catalog Management with faceted search and rich filtering',
      'Order Fulfillment, Shipping Automation, and Tax Calculation Integration'
    ],
    benefits: [
      'Increased checkout conversion rates through streamlined guest checkout',
      'PCI-compliant security safeguarding customer financial data',
      'Scalable cloud infrastructure that effortlessly handles holiday traffic spikes',
      'Comprehensive sales and marketing analytics dashboards'
    ],
    suitableFor: [
      'Retailers expanding from physical storefronts to online commerce',
      'B2B distributors requiring wholesale pricing tiers and purchase order terms',
      'Direct-to-Consumer (D2C) brands looking for custom branded shopping experiences'
    ],
    techStack: ['WooCommerce', 'Shopify Plus', 'Magento/Adobe Commerce', 'Next.js Commerce', 'Stripe']
  },
  {
    slug: 'customized-software',
    title: 'Customized Software',
    shortDescription: 'Bespoke desktop, cloud, and enterprise software designed around your exact business operational logic and workflows.',
    iconName: 'Cpu',
    image: '/images/faster-delivery.jpg',
    fullDescription: 'Whether you need specialized desktop software or a sophisticated cloud-based enterprise application, Neparica helps you realize your vision. Off-the-shelf software often forces companies into awkward workarounds and expensive per-seat licenses. We engineer tailored software designed around your specific business logic, delivering a competitive edge that off-the-shelf tools cannot replicate.',
    features: [
      'Custom Database Architecture and High-Volume Data Processing',
      'Legacy Software Modernization, Code Refactoring, and Cloud Migration',
      'Enterprise API Integration connecting third-party systems and ERPs',
      'Role-Based Access Control (RBAC) and Audit Logging for compliance',
      'Intuitive Dashboard Interfaces tailored to unique executive and staff workflows',
      'Cross-Platform Desktop & Cloud Deployments (Windows, macOS, Web)'
    ],
    benefits: [
      'Eliminate recurring per-user licensing fees of generic commercial tools',
      'Streamline proprietary workflows with software that mirrors your business rules',
      'Total ownership of intellectual property and source code',
      'Seamless scalability as your transaction volume and operations grow'
    ],
    suitableFor: [
      'Mid-market enterprises outgrowing standard commercial software',
      'Companies with unique proprietary calculations, workflows, or reporting needs',
      'Organizations requiring strict regulatory data governance and on-premise/private cloud hosting'
    ],
    techStack: ['.NET Core', 'Node.js', 'Python', 'React', 'SQL Server', 'PostgreSQL', 'Docker']
  },
  {
    slug: 'mobile-apps',
    title: 'Mobile Applications',
    shortDescription: 'High-performance native and cross-platform mobile apps for iOS and Android that engage customers and streamline operations.',
    iconName: 'Smartphone',
    image: '/images/convenience.png',
    fullDescription: 'Mobile app technology is rapidly evolving—is your business keeping pace? Neparica designs and develops native and cross-platform mobile applications that meet your business goals, user expectations, and budget using the right technology. From consumer-facing mobile portals to internal field operations tools, we deliver mobile experiences that delight users.',
    features: [
      'Native iOS (Swift) and Android (Kotlin) App Development',
      'High-Performance Cross-Platform Engineering (React Native & Flutter)',
      'Offline-First Functionality with background cloud synchronization',
      'Push Notifications, In-App Messaging, and User Engagement Analytics',
      'GPS Location Tracking, Geofencing, and Camera/Hardware Integration',
      'End-to-End App Store & Google Play Submission and Compliance Management'
    ],
    benefits: [
      'Engage customers directly on their primary everyday devices',
      'Accelerate field operations and mobile data capture for workforce productivity',
      'Fast, fluid 60fps performance across smartphones and tablets',
      'Streamlined single-codebase maintenance across both iOS and Android'
    ],
    suitableFor: [
      'Service companies needing field technician or dispatch mobile tools',
      'B2C brands seeking dedicated loyalty and ordering apps',
      'Enterprises mobilizing internal approvals, CRM access, and operational reporting'
    ],
    techStack: ['React Native', 'Flutter', 'iOS Swift', 'Android Kotlin', 'Firebase', 'REST APIs']
  },
  {
    slug: 'website-design',
    title: 'Dynamic Websites with Integrated CMS',
    shortDescription: 'High-impact, mobile-responsive dynamic websites equipped with intuitive content management to outperform competitors.',
    iconName: 'Layout',
    image: '/images/quality.jpg',
    fullDescription: 'A powerful, responsive, and dynamic website with cutting-edge design does not have to be prohibitively expensive. Neparica helps you outperform your strongest competitors with custom websites built on integrated content management systems. We combine visual polish with conversion-focused information hierarchy, allowing your team to update content effortlessly without touching code.',
    features: [
      'Custom Responsive UI/UX Design tailored to your brand personality',
      'Intuitive Integrated CMS (WordPress, Headless CMS, or Custom Admin)',
      'Search Engine Optimization (SEO) Built In from Ground Zero',
      'Ultra-Fast Page Load Times and Mobile-First Architecture',
      'Lead Generation Forms, Live Chat, and CRM Integrations',
      'Multi-Language and Multi-Regional Content Support'
    ],
    benefits: [
      'Project a credible, enterprise-level digital first impression',
      'Empower non-technical marketing staff to publish pages and blogs easily',
      'Rank higher in Google search results with semantic markup and schema data',
      'Achieve high conversion rates through strategic call-to-action placement'
    ],
    suitableFor: [
      'Corporate firms refreshing outdated, non-responsive legacy sites',
      'Professional services companies (legal, financial, consulting, healthcare)',
      'High-growth SMBs needing a marketing hub that scales with company milestones'
    ],
    techStack: ['Next.js', 'Tailwind CSS', 'WordPress Headless', 'Strapi', 'HTML5/TypeScript']
  },
  {
    slug: 'customized-web-applications',
    title: 'Customized Web Applications',
    shortDescription: 'Modern, multi-tiered cloud web applications engineered for complex data management, client portals, and SaaS platforms.',
    iconName: 'Globe',
    image: '/images/discover.jpg',
    fullDescription: 'Our team of experts designs and develops fully customized web applications with the latest technologies to fuel your business growth. Whether you require an internal operational dashboard, a customer self-service portal, or a software-as-a-service (SaaS) product, Neparica delivers secure, scalable web systems that streamline complex tasks into effortless browser-based workflows.',
    features: [
      'Modern Single-Page (SPA) and Server-Rendered (SSR) Architectures',
      'Interactive Client & Vendor Portals with Secure Role-Based Dashboards',
      'Complex Data Visualizations, Interactive Reporting, and Export Capabilities',
      'Secure RESTful and GraphQL API Backends with Microservices Support',
      'Real-Time Notifications, WebSockets, and Collaborative Features',
      'Automated CI/CD Pipelines and Automated Unit/Integration Testing'
    ],
    benefits: [
      'Accessible anywhere from any browser with zero local software installation',
      'Automate repetitive operational data entry and manual administrative tasks',
      'Continuous feature deployments without requiring user updates or downtime',
      'Robust enterprise data security with encrypted communications and storage'
    ],
    suitableFor: [
      'Companies replacing fragmented spreadsheets with unified cloud databases',
      'Businesses wanting to provide clients with real-time status and billing portals',
      'Entrepreneurs and SMBs building proprietary SaaS software products'
    ],
    techStack: ['Next.js', 'React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Redis', 'AWS']
  },
  {
    slug: 'accounting-system',
    title: 'Affordable ERP & Accounting Systems',
    shortDescription: 'Integrated accounting and enterprise resource management software tailored specifically to mid-size companies.',
    iconName: 'BarChart3',
    image: '/images/partnership.jpg',
    fullDescription: 'Neparica ERP and Accounting System is a single, integrated software platform that serves the operational and financial needs of mid-size companies across manufacturing, healthcare, retail, and hospitality. It bridges departments into a unified cloud database, allowing teams to collaborate seamlessly while giving executives real-time clarity over cash flow, inventory, and ledger accounts.',
    features: [
      'General Ledger, Accounts Payable (AP), and Accounts Receivable (AR)',
      'Automated Invoicing, Payment Tracking, and Multi-Currency Billing',
      'Inventory Tracking across Multiple Warehouses with Reorder Triggers',
      'Procurement, Purchase Orders, and Vendor Performance Management',
      'Manufacturing Bill of Materials (BOM) and Production Scheduling',
      'Executive P&L Statements, Balance Sheets, and Real-Time Financial Reports'
    ],
    benefits: [
      'A fraction of the licensing and deployment cost of legacy corporate ERP giants',
      'Customizable to your specific industry requirements within short timelines',
      'Eliminate duplicate data entry across isolated departmental spreadsheets',
      'Real-time financial visibility empowering faster, data-driven management decisions'
    ],
    suitableFor: [
      'Mid-sized manufacturing and distribution companies',
      'Wholesale, retail, and healthcare businesses outgrowing QuickBooks',
      'Organizations seeking affordable ERP customization without multi-million dollar overhead'
    ],
    techStack: ['Cloud Database', 'SQL Server / PostgreSQL', 'Web Interface', 'Role Security', 'Export Engine']
  }
];
