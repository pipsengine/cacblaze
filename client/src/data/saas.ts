export interface SaaSReview {
  id: string;
  slug: string;
  name: string;
  category: 'CRM' | 'Project Management' | 'Communication' | 'Marketing' | 'DevOps' | 'Security' | 'Finance';
  rating: number;
  description: string;
  author: {
    name: string;
    role: string;
    image: string;
  };
  publishDate: string;
  heroImage: string;
  pricingModel: 'Freemium' | 'Subscription' | 'Usage-based';
  priceRange: string;
  freePlan: boolean;
  deployment: 'Cloud' | 'Hybrid' | 'On-premise';
  pros: string[];
  cons: string[];
  verdict: string;
  bestFor: string;
  keyFeatures: string[];
}

export const saasReviews: Record<string, SaaSReview> = {
  'slack': {
    id: 'saas_1',
    slug: 'slack',
    name: 'Slack',
    category: 'Communication',
    rating: 4.8,
    description: 'The ultimate channel-based messaging platform that connects people, tools, and data in one place.',
    author: {
      name: 'Alex "Tech" Chen',
      role: 'Collaboration Expert',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'February 12, 2026',
    heroImage: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    pricingModel: 'Freemium',
    priceRange: '$0 - $15/user/mo',
    freePlan: true,
    deployment: 'Cloud',
    pros: ['Excellent integrations', 'Powerful search', 'Highly customizable notifications'],
    cons: ['Can be distracting', 'Expensive for large teams', 'Message history limit on free plan'],
    verdict: 'Still the gold standard for team communication and workflow automation.',
    bestFor: 'Modern teams looking to streamline internal communication.',
    keyFeatures: ['Channels', 'Huddles', 'App Directory', 'Workflow Builder']
  },
  'hubspot': {
    id: 'saas_2',
    slug: 'hubspot',
    name: 'HubSpot',
    category: 'CRM',
    rating: 4.7,
    description: 'A comprehensive CRM platform that provides all the tools you need for marketing, sales, content management, and customer service.',
    author: {
      name: 'Elena "Growth" Rodriguez',
      role: 'SaaS Strategist',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'February 11, 2026',
    heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    pricingModel: 'Freemium',
    priceRange: '$0 - $1,200+/mo',
    freePlan: true,
    deployment: 'Cloud',
    pros: ['User-friendly interface', 'Robust free tools', 'Seamless data flow across hubs'],
    cons: ['Pricing scales quickly', 'Reporting can be complex', 'Some advanced features require high tiers'],
    verdict: 'The most intuitive and powerful all-in-one platform for growing businesses.',
    bestFor: 'SMBs and scaling enterprises wanting a unified customer platform.',
    keyFeatures: ['CRM', 'Marketing Hub', 'Sales Hub', 'Service Hub']
  },
  'zoom': {
    id: 'saas_3',
    slug: 'zoom',
    name: 'Zoom',
    category: 'Communication',
    rating: 4.6,
    description: 'The reliable leader in video conferencing, offering seamless meetings, webinars, and chat solutions.',
    author: {
      name: 'Alex "Tech" Chen',
      role: 'Collaboration Expert',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'February 10, 2026',
    heroImage: 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    pricingModel: 'Freemium',
    priceRange: '$0 - $25/user/mo',
    freePlan: true,
    deployment: 'Cloud',
    pros: ['High reliability', 'Easy to use for guests', 'Excellent recording features'],
    cons: ['Security concerns in past', '40-minute limit on free plan', 'Can be resource-heavy'],
    verdict: 'The essential tool for remote work and global collaboration.',
    bestFor: 'Anyone needing high-quality video conferencing.',
    keyFeatures: ['HD Meetings', 'Breakout Rooms', 'Webinars', 'Virtual Backgrounds']
  },
  'asana': {
    id: 'saas_4',
    slug: 'asana',
    name: 'Asana',
    category: 'Project Management',
    rating: 4.5,
    description: 'A flexible work management platform that helps teams stay focused on their goals, projects, and daily tasks.',
    author: {
      name: 'James "Process" Wilson',
      role: 'Operations Consultant',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'February 09, 2026',
    heroImage: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    pricingModel: 'Freemium',
    priceRange: '$0 - $24.99/user/mo',
    freePlan: true,
    deployment: 'Cloud',
    pros: ['Beautiful UI', 'Versatile project views', 'Great automation features'],
    cons: ['Steep learning curve for advanced features', 'Can feel overwhelming', 'Limited free tier functionality'],
    verdict: 'Powerful for complex project tracking and team accountability.',
    bestFor: 'Teams with multiple ongoing projects and dependencies.',
    keyFeatures: ['Timeline View', 'Workload Tracking', 'Automation', 'Forms']
  },
  'monday-com': {
    id: 'saas_5',
    slug: 'monday-com',
    name: 'monday.com',
    category: 'Project Management',
    rating: 4.7,
    description: 'A highly visual Work OS that allows teams to build custom workflows and manage everything from projects to sales.',
    author: {
      name: 'James "Process" Wilson',
      role: 'Operations Consultant',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'February 08, 2026',
    heroImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    pricingModel: 'Freemium',
    priceRange: '$0 - $16/user/mo',
    freePlan: true,
    deployment: 'Cloud',
    pros: ['Extremely customizable', 'Excellent visual tracking', 'Fast setup'],
    cons: ['Pricing per seat groups', 'Mobile app lacks some features', 'Complex automations can be tricky'],
    verdict: 'The most flexible platform for building custom operational workflows.',
    bestFor: 'Creative agencies and ops-heavy teams.',
    keyFeatures: ['Dashboards', 'Custom Columns', 'Automations', 'Integrations']
  },
  'shopify': {
    id: 'saas_6',
    slug: 'shopify',
    name: 'Shopify',
    category: 'Marketing',
    rating: 4.9,
    description: 'The leading e-commerce platform that allows anyone to set up an online store and sell their products.',
    author: {
      name: 'Elena "Growth" Rodriguez',
      role: 'SaaS Strategist',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'February 07, 2026',
    heroImage: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    pricingModel: 'Subscription',
    priceRange: '$39 - $2,000+/mo',
    freePlan: false,
    deployment: 'Cloud',
    pros: ['Huge app ecosystem', 'Reliable hosting', 'Great payment integration'],
    cons: ['Transaction fees if not using Shopify Payments', 'Customization requires Liquid knowledge', 'App costs can add up'],
    verdict: 'The unrivaled choice for serious e-commerce entrepreneurs.',
    bestFor: 'Retailers and online brands of all sizes.',
    keyFeatures: ['Online Store Builder', 'Point of Sale', 'Shopify Markets', 'Analytics']
  },
  'datadog': {
    id: 'saas_7',
    slug: 'datadog',
    name: 'Datadog',
    category: 'DevOps',
    rating: 4.6,
    description: 'A monitoring and analytics platform for developers, IT operations teams, and business users in the cloud age.',
    author: {
      name: 'Mike "Dev" Miller',
      role: 'Systems Architect',
      image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'February 06, 2026',
    heroImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    pricingModel: 'Usage-based',
    priceRange: 'Variable by host/metric',
    freePlan: true,
    deployment: 'Cloud',
    pros: ['Unified observability', 'Massive integration library', 'Excellent alerting'],
    cons: ['Expensive for high-scale', 'Complex configuration', 'Pricing can be unpredictable'],
    verdict: 'The gold standard for cloud-native monitoring and observability.',
    bestFor: 'SREs and DevOps teams managing complex cloud infrastructure.',
    keyFeatures: ['Infrastructure Monitoring', 'APM', 'Log Management', 'Synthetics']
  },
  'okta': {
    id: 'saas_8',
    slug: 'okta',
    name: 'Okta',
    category: 'Security',
    rating: 4.8,
    description: 'An independent provider of identity for the enterprise, offering secure identity management and single sign-on.',
    author: {
      name: 'Mike "Dev" Miller',
      role: 'Systems Architect',
      image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'February 05, 2026',
    heroImage: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    pricingModel: 'Subscription',
    priceRange: '$2 - $15/user/mo',
    freePlan: true,
    deployment: 'Cloud',
    pros: ['Industry-leading security', 'Seamless SSO experience', 'Extensive app integration'],
    cons: ['Admin interface can be complex', 'Premium features are expensive', 'Setup requires expertise'],
    verdict: 'Essential for securing the modern workforce.',
    bestFor: 'Enterprises needing robust identity and access management.',
    keyFeatures: ['Single Sign-On', 'Multi-Factor Authentication', 'Universal Directory', 'Lifecycle Management']
  },
  'quickbooks-online': {
    id: 'saas_9',
    slug: 'quickbooks-online',
    name: 'QuickBooks Online',
    category: 'Finance',
    rating: 4.4,
    description: 'The standard cloud-based accounting software for small businesses and freelancers.',
    author: {
      name: 'Elena "Growth" Rodriguez',
      role: 'SaaS Strategist',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'February 04, 2026',
    heroImage: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    pricingModel: 'Subscription',
    priceRange: '$30 - $200/mo',
    freePlan: false,
    deployment: 'Cloud',
    pros: ['Accountant-friendly', 'Comprehensive reporting', 'Automated bank feeds'],
    cons: ['Frequent price increases', 'Support can be slow', 'Learning curve for non-accountants'],
    verdict: 'The most feature-rich accounting software for small businesses.',
    bestFor: 'Small businesses and accountants.',
    keyFeatures: ['Invoicing', 'Expense Tracking', 'Inventory Management', 'Payroll']
  },
  'trello': {
    id: 'saas_10',
    slug: 'trello',
    name: 'Trello',
    category: 'Project Management',
    rating: 4.3,
    description: 'A visual tool that empowers teams to manage any type of project, workflow, or task tracking.',
    author: {
      name: 'James "Process" Wilson',
      role: 'Operations Consultant',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'February 03, 2026',
    heroImage: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    pricingModel: 'Freemium',
    priceRange: '$0 - $17.50/user/mo',
    freePlan: true,
    deployment: 'Cloud',
    pros: ['Very easy to start', 'Excellent visual board layout', 'Good free tier'],
    cons: ['Lacks depth for complex projects', 'Limited reporting', 'Butler automation limits on lower tiers'],
    verdict: 'The best choice for simple, visual task management.',
    bestFor: 'Small teams and individual projects.',
    keyFeatures: ['Kanban Boards', 'Power-Ups', 'Butler Automation', 'Templates']
  }
};
