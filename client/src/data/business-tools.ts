export interface BusinessToolReview {
  id: string;
  slug: string;
  name: string;
  category: string;
  platform: string;
  targetBusinessSize: string;
  rating: number;
  description: string;
  author: {
    name: string;
    role: string;
    image: string;
  };
  publishDate: string;
  heroImage: string;
  specs: {
    pricingModel: string;
    freeTrial: boolean;
    customerSupport: string;
    integrations: boolean;
    features: string[];
  };
  pros: string[];
  cons: string[];
  verdict: string;
}

export const businessToolReviews: Record<string, BusinessToolReview> = {
  'slack-review': {
    id: 'biz_1',
    slug: 'slack-review',
    name: 'Slack',
    category: 'Team Communication',
    platform: 'Web, iOS, Android, Windows, Mac',
    targetBusinessSize: 'All sizes',
    rating: 4.8,
    description: 'The industry standard for team communication. Slack replaces internal email with channels, making collaboration faster and more organized.',
    author: {
      name: 'Chidi "Tech" Nwosu',
      role: 'Hardware Analyst',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'February 12, 2026',
    heroImage: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    specs: {
      pricingModel: 'Freemium (Paid from $6.67/user)',
      freeTrial: true,
      customerSupport: '24/7 Priority Support',
      integrations: true,
      features: ['Channel-based messaging', 'Huddles', 'Slack Connect', 'Workflow Builder']
    },
    pros: ['Infinite integrations', 'Powerful search', 'Excellent mobile app'],
    cons: ['Can be distracting', 'Expensive for large teams', 'Free version limits history'],
    verdict: 'Essential for any team that values real-time communication and transparency.'
  },
  'zoom-review': {
    id: 'biz_2',
    slug: 'zoom-review',
    name: 'Zoom',
    category: 'Video Conferencing',
    platform: 'Web, iOS, Android, Desktop',
    targetBusinessSize: 'All sizes',
    rating: 4.7,
    description: 'Reliable video conferencing that works even on low-bandwidth connections, making it a favorite for remote teams in Nigeria.',
    author: {
      name: 'Chidi "Tech" Nwosu',
      role: 'Hardware Analyst',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'February 11, 2026',
    heroImage: 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    specs: {
      pricingModel: 'Freemium (40-min limit on free)',
      freeTrial: true,
      customerSupport: 'Ticket & Chat',
      integrations: true,
      features: ['Breakout Rooms', 'Cloud Recording', 'Webinars', 'Virtual Backgrounds']
    },
    pros: ['Very stable connection', 'Easy to join for guests', 'Great screen sharing'],
    cons: ['Security concerns in the past', '40-minute limit on free tier', 'Desktop app is heavy'],
    verdict: 'The most reliable choice for virtual meetings and webinars.'
  },
  'salesforce-review': {
    id: 'biz_3',
    slug: 'salesforce-review',
    name: 'Salesforce',
    category: 'CRM',
    platform: 'Web, iOS, Android',
    targetBusinessSize: 'Medium to Enterprise',
    rating: 4.6,
    description: 'The world\'s #1 CRM platform. Salesforce provides a comprehensive suite of tools for sales, service, marketing, and more.',
    author: {
      name: 'Chidi "Tech" Nwosu',
      role: 'Hardware Analyst',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'February 10, 2026',
    heroImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    specs: {
      pricingModel: 'Paid (Subscription-based)',
      freeTrial: true,
      customerSupport: '24/7 Premium Support',
      integrations: true,
      features: ['Lead Management', 'Sales Forecasting', 'AppExchange', 'Einstein AI']
    },
    pros: ['Extremely customizable', 'Massive ecosystem', 'Powerful analytics'],
    cons: ['Steep learning curve', 'High cost of ownership', 'Requires dedicated admin'],
    verdict: 'The best choice for large organizations that need a powerful, scalable CRM.'
  },
  'quickbooks-review': {
    id: 'biz_4',
    slug: 'quickbooks-review',
    name: 'QuickBooks Online',
    category: 'Accounting',
    platform: 'Web, iOS, Android',
    targetBusinessSize: 'SMEs',
    rating: 4.5,
    description: 'Comprehensive accounting software for small businesses. It handles invoicing, expenses, and tax preparation with ease.',
    author: {
      name: 'Chidi "Tech" Nwosu',
      role: 'Hardware Analyst',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'February 9, 2026',
    heroImage: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    specs: {
      pricingModel: 'Paid (Monthly subscription)',
      freeTrial: true,
      customerSupport: 'Chat & Phone',
      integrations: true,
      features: ['Invoicing', 'Expense Tracking', 'Inventory Management', 'Payroll']
    },
    pros: ['Automated bank feeds', 'Professional reports', 'Widely used by accountants'],
    cons: ['Monthly cost adds up', 'Advanced features are pricey', 'Learning curve for non-accountants'],
    verdict: 'The top choice for small businesses that want to stay on top of their finances.'
  },
  'canva-pro-review': {
    id: 'biz_5',
    slug: 'canva-pro-review',
    name: 'Canva Pro',
    category: 'Design & Marketing',
    platform: 'Web, iOS, Android, Desktop',
    targetBusinessSize: 'Individual to Medium',
    rating: 4.9,
    description: 'Empowers non-designers to create professional-quality graphics, presentations, and social media content.',
    author: {
      name: 'Chidi "Tech" Nwosu',
      role: 'Hardware Analyst',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'February 8, 2026',
    heroImage: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    specs: {
      pricingModel: 'Freemium (Pro from $12.99/mo)',
      freeTrial: true,
      customerSupport: 'Ticket-based',
      integrations: true,
      features: ['Brand Kit', 'Magic Resize', 'Stock Library', 'Content Planner']
    },
    pros: ['Incredibly easy to use', 'Massive template library', 'Great collaboration tools'],
    cons: ['Limited advanced design tools', 'Can feel restrictive for pros', 'Offline editing is limited'],
    verdict: 'The best tool for businesses that need high-quality design without a professional designer.'
  },
  'google-workspace-review': {
    id: 'biz_6',
    slug: 'google-workspace-review',
    name: 'Google Workspace',
    category: 'Collaboration',
    platform: 'Web, iOS, Android',
    targetBusinessSize: 'All sizes',
    rating: 4.8,
    description: 'The definitive suite of cloud-based productivity tools, including Gmail, Drive, Docs, Sheets, and Slides.',
    author: {
      name: 'Chidi "Tech" Nwosu',
      role: 'Hardware Analyst',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'February 7, 2026',
    heroImage: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    specs: {
      pricingModel: 'Paid (per user/month)',
      freeTrial: true,
      customerSupport: '24/7 Support',
      integrations: true,
      features: ['Custom Business Email', 'Shared Drives', 'Meet Video Calls', 'Security Admin']
    },
    pros: ['Industry-leading collaboration', 'Reliable cloud storage', 'Familiar interface'],
    cons: ['Offline mode can be finicky', 'Sheets is less powerful than Excel', 'Privacy concerns for some'],
    verdict: 'The default choice for modern, cloud-first businesses.'
  },
  'mailchimp-review': {
    id: 'biz_7',
    slug: 'mailchimp-review',
    name: 'Mailchimp',
    category: 'Email Marketing',
    platform: 'Web, iOS, Android',
    targetBusinessSize: 'SMEs',
    rating: 4.4,
    description: 'The leading email marketing platform that helps businesses reach their audience through automated campaigns and newsletters.',
    author: {
      name: 'Chidi "Tech" Nwosu',
      role: 'Hardware Analyst',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'February 6, 2026',
    heroImage: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    specs: {
      pricingModel: 'Freemium (Paid based on contacts)',
      freeTrial: false,
      customerSupport: 'Email & Chat',
      integrations: true,
      features: ['A/B Testing', 'Landing Pages', 'Customer Journeys', 'Detailed Analytics']
    },
    pros: ['Excellent automation tools', 'User-friendly editor', 'Great analytics'],
    cons: ['Can get very expensive', 'Free plan has been reduced', 'Compliance can be strict'],
    verdict: 'Best for businesses that want to grow through professional email marketing.'
  },
  'asana-review': {
    id: 'biz_8',
    slug: 'asana-review',
    name: 'Asana',
    category: 'Project Management',
    platform: 'Web, iOS, Android, Desktop',
    targetBusinessSize: 'Medium to Large',
    rating: 4.6,
    description: 'A powerful project management tool that helps teams track work, from daily tasks to strategic initiatives.',
    author: {
      name: 'Chidi "Tech" Nwosu',
      role: 'Hardware Analyst',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'February 5, 2026',
    heroImage: 'https://images.unsplash.com/photo-1454165833767-027ff1e7c082?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    specs: {
      pricingModel: 'Freemium (Paid from $10.99/user)',
      freeTrial: true,
      customerSupport: 'Support Portal',
      integrations: true,
      features: ['Timeline View', 'Workload Tracking', 'Custom Fields', 'Portfolio Management']
    },
    pros: ['Very flexible views', 'Beautiful UI', 'Great for complex projects'],
    cons: ['Can be overwhelming', 'Steep price for premium features', 'Mobile app lacks some features'],
    verdict: 'Excellent for teams that need to manage complex, multi-step projects.'
  },
  'shopify-review': {
    id: 'biz_9',
    slug: 'shopify-review',
    name: 'Shopify',
    category: 'E-commerce',
    platform: 'Web, iOS, Android',
    targetBusinessSize: 'Individual to Enterprise',
    rating: 4.7,
    description: 'The all-in-one commerce platform that lets anyone start, grow, and manage a business online and in-person.',
    author: {
      name: 'Chidi "Tech" Nwosu',
      role: 'Hardware Analyst',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'February 4, 2026',
    heroImage: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    specs: {
      pricingModel: 'Paid (Monthly subscription + fees)',
      freeTrial: true,
      customerSupport: '24/7 Support',
      integrations: true,
      features: ['Online Store', 'POS System', 'Payment Gateway', 'Inventory Sync']
    },
    pros: ['Very easy to set up', 'Robust app store', 'Excellent for scaling'],
    cons: ['Transaction fees if not using Shopify Payments', 'Monthly costs add up', 'Liquid templating can be complex'],
    verdict: 'The best platform for building a professional, scalable online store.'
  },
  'linkedin-sales-navigator-review': {
    id: 'biz_10',
    slug: 'linkedin-sales-navigator-review',
    name: 'LinkedIn Sales Navigator',
    category: 'Sales & Lead Generation',
    platform: 'Web, iOS, Android',
    targetBusinessSize: 'B2B Sales Teams',
    rating: 4.3,
    description: 'Advanced search and filtering for sales professionals looking to find and connect with leads on the world\'s largest professional network.',
    author: {
      name: 'Chidi "Tech" Nwosu',
      role: 'Hardware Analyst',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'February 3, 2026',
    heroImage: 'https://images.unsplash.com/photo-1521791136064-7986c2923216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    specs: {
      pricingModel: 'Paid (Subscription-based)',
      freeTrial: true,
      customerSupport: 'Standard LinkedIn Support',
      integrations: true,
      features: ['Advanced Search', 'InMail Messages', 'Lead Recommendations', 'CRM Integration']
    },
    pros: ['Unparalleled database of professionals', 'Direct access to decision-makers', 'Great lead tracking'],
    cons: ['Very expensive', 'InMails can be seen as spam', 'Data export is limited'],
    verdict: 'Essential for B2B sales teams that rely on LinkedIn for lead generation.'
  }
};
