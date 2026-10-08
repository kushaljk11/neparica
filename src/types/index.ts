export interface ServiceItem {
  slug: string;
  title: string;
  shortDescription: string;
  iconName: string;
  fullDescription: string;
  capabilities: string[];
  businessChallenges: string[];
  process: string[];
  deliverables?: string[];
}

export interface SolutionItem {
  slug: string;
  title: string;
  shortDescription: string;
  iconName: string;
  image?: string;
  fullDescription: string;
  features: string[];
  benefits: string[];
  suitableFor: string[];
  techStack?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  date?: string;
  author?: string;
  category: string;
  excerpt: string;
  image: string;
  isSample?: boolean;
  content: string[];
  keyQuestions?: { question: string; answer: string }[];
  takeaways?: string[];
}

export interface ValuePropositionItem {
  id: number;
  title: string;
  tagline: string;
  description: string;
  detailedPoints: string[];
  image: string;
}

export interface ProcessStepItem {
  number: string;
  name: string;
  tagline: string;
  description: string;
  keyPoints: string[];
  image?: string;
}
