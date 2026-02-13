export interface DigitalPlatformReview {
  id: string;
  slug: string;
  name: string;
  category: 'Social Media' | 'E-commerce' | 'Payments' | 'Gig Economy' | 'Search' | 'Advertising';
  rating: number;
  description: string;
  author: {
    name: string;
    role: string;
    image: string;
  };
  publishDate: string;
  heroImage: string;
  revenueModel: string;
  userBase: string;
  marketShare: string;
  pros: string[];
  cons: string[];
  verdict: string;
  bestFor: string;
}

export const digitalPlatformReviews: Record<string, DigitalPlatformReview> = {
  amazon: {
    id: 'dp_1',
    slug: 'amazon',
    name: 'Amazon',
    category: 'E-commerce',
    rating: 4.9,
    description:
      "The world's largest online retailer and a prominent cloud services provider, redefining global logistics and consumer expectations.",
    author: {
      name: 'Bisi "Scale" Adeyemi',
      role: 'Platform Strategist',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    publishDate: 'February 12, 2026',
    heroImage:
      'https://images.unsplash.com/photo-1523474253046-2cd2c78a9db1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    revenueModel: 'Retail, Subscriptions (Prime), AWS, Advertising',
    userBase: '310+ Million active users',
    marketShare: '38% of US E-commerce',
    pros: ['Unrivaled selection', 'Fastest delivery network', 'Seamless ecosystem integration'],
    cons: ['Counterfeit product issues', 'High seller fees', 'Dominance concerns'],
    verdict: 'The undisputed leader in global commerce with an unstoppable logistics engine.',
    bestFor: 'Shoppers looking for convenience and businesses needing massive reach.',
  },
  stripe: {
    id: 'dp_2',
    slug: 'stripe',
    name: 'Stripe',
    category: 'Payments',
    rating: 4.9,
    description:
      'A developer-first payment processor that has become the financial infrastructure for the internet economy.',
    author: {
      name: 'Bisi "Scale" Adeyemi',
      role: 'Platform Strategist',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    publishDate: 'February 11, 2026',
    heroImage:
      'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    revenueModel: 'Transaction-based fees (2.9% + 30c)',
    userBase: 'Millions of companies (from startups to Fortune 500s)',
    marketShare: 'Top-tier online payment processor',
    pros: ['Best-in-class API documentation', 'Beautiful dashboard', 'Global support'],
    cons: [
      'Technical knowledge required',
      'Can be expensive for high volume',
      'Strict fraud prevention can block legit sales',
    ],
    verdict: 'The gold standard for online payment integration.',
    bestFor: 'SaaS companies and developers building modern web applications.',
  },
  shopify: {
    id: 'dp_3',
    slug: 'shopify',
    name: 'Shopify',
    category: 'E-commerce',
    rating: 4.8,
    description:
      'The platform that empowers millions of entrepreneurs to start, grow, and manage their own businesses across all sales channels.',
    author: {
      name: 'Bisi "Scale" Adeyemi',
      role: 'Platform Strategist',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    publishDate: 'February 10, 2026',
    heroImage:
      'https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    revenueModel: 'Subscription-based tiers and app store commissions',
    userBase: '2+ Million merchants globally',
    marketShare: '10% of total US E-commerce',
    pros: ['Easy to set up', 'Extensive app ecosystem', 'Excellent mobile app'],
    cons: [
      'Monthly costs add up',
      'Limited design flexibility on basic themes',
      'Transaction fees if not using Shopify Payments',
    ],
    verdict: 'The best all-in-one platform for serious e-commerce brands.',
    bestFor: 'Small to medium businesses wanting to sell online professionally.',
  },
  uber: {
    id: 'dp_4',
    slug: 'uber',
    name: 'Uber',
    category: 'Gig Economy',
    rating: 4.6,
    description:
      'The pioneer of the gig economy that transformed how the world moves and eats through its ride-sharing and delivery network.',
    author: {
      name: 'Bisi "Scale" Adeyemi',
      role: 'Platform Strategist',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    publishDate: 'February 9, 2026',
    heroImage:
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    revenueModel: 'Service fees per ride/delivery',
    userBase: '130+ Million monthly active platform consumers',
    marketShare: '70% of US ride-share market',
    pros: ['Incredible convenience', 'Global availability', 'Safety features'],
    cons: ['Surge pricing', 'Worker classification controversies', 'Inconsistent driver quality'],
    verdict: 'An essential utility for urban living, despite its social complexities.',
    bestFor: 'Urban dwellers and travelers needing reliable on-demand transport.',
  },
  'google-search': {
    id: 'dp_5',
    slug: 'google-search',
    name: 'Google Search',
    category: 'Search',
    rating: 4.8,
    description:
      "The world's primary gateway to information, powered by sophisticated AI and indexing billions of web pages.",
    author: {
      name: 'Bisi "Scale" Adeyemi',
      role: 'Platform Strategist',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    publishDate: 'February 8, 2026',
    heroImage:
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    revenueModel: 'Advertising (Google Ads)',
    userBase: '4+ Billion users globally',
    marketShare: '91% of global search market',
    pros: [
      'Unmatched speed and relevance',
      'Rich snippet features',
      'Deep integration with Google ecosystem',
    ],
    cons: ['Ad-heavy results', 'Privacy concerns', 'SEO manipulation issues'],
    verdict: "The internet's front door, still better than any competitor.",
    bestFor: 'Anyone looking for any information on the web.',
  },
  instagram: {
    id: 'dp_6',
    slug: 'instagram',
    name: 'Instagram',
    category: 'Social Media',
    rating: 4.5,
    description:
      'The visual core of social media that evolved from a photo-sharing app into a cultural and e-commerce powerhouse.',
    author: {
      name: 'Bisi "Scale" Adeyemi',
      role: 'Platform Strategist',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    publishDate: 'February 7, 2026',
    heroImage:
      'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    revenueModel: 'Advertising, Sponsored Content',
    userBase: '2+ Billion monthly active users',
    marketShare: 'Leading visual social platform',
    pros: [
      'Excellent creative tools',
      'Powerful influencer marketing',
      'Seamless shopping features',
    ],
    cons: ['Algorithm frustration', 'Mental health concerns', 'Ad saturation'],
    verdict: 'The essential platform for visual branding and social connection.',
    bestFor: 'Creators, brands, and visual-first storytellers.',
  },
  paypal: {
    id: 'dp_7',
    slug: 'paypal',
    name: 'PayPal',
    category: 'Payments',
    rating: 4.4,
    description:
      'One of the oldest and most trusted names in online payments, offering consumer protection and merchant services globally.',
    author: {
      name: 'Bisi "Scale" Adeyemi',
      role: 'Platform Strategist',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    publishDate: 'February 6, 2026',
    heroImage:
      'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    revenueModel: 'Transaction fees, Currency conversion',
    userBase: '430+ Million active accounts',
    marketShare: 'Leading digital wallet',
    pros: ['High trust factor', 'Strong buyer protection', 'One-touch checkout'],
    cons: [
      'High fees for sellers',
      'Funds can be frozen without warning',
      'Legacy interface in some areas',
    ],
    verdict: 'The safest bet for global peer-to-peer and retail transactions.',
    bestFor: 'Online shoppers and international freelancers.',
  },
  airbnb: {
    id: 'dp_8',
    slug: 'airbnb',
    name: 'Airbnb',
    category: 'Gig Economy',
    rating: 4.7,
    description:
      'The platform that democratized travel and hosting, allowing anyone to rent out their space to travelers around the world.',
    author: {
      name: 'Bisi "Scale" Adeyemi',
      role: 'Platform Strategist',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    publishDate: 'February 5, 2026',
    heroImage:
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    revenueModel: 'Booking fees (Guests and Hosts)',
    userBase: '150+ Million users',
    marketShare: 'Dominant player in alternative lodging',
    pros: ['Unique stays', 'Community-driven reviews', 'Flexible earnings for hosts'],
    cons: [
      'Hidden fees (cleaning, service)',
      'Impact on local housing markets',
      'Inconsistent quality control',
    ],
    verdict: 'The best way to experience a city like a local, despite rising costs.',
    bestFor: 'Travelers seeking unique experiences and homeowners looking for extra income.',
  },
  facebook: {
    id: 'dp_9',
    slug: 'facebook',
    name: 'Facebook',
    category: 'Social Media',
    rating: 4.2,
    description:
      'The social networking giant that defined the modern social era, now part of the broader Meta ecosystem.',
    author: {
      name: 'Bisi "Scale" Adeyemi',
      role: 'Platform Strategist',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    publishDate: 'February 4, 2026',
    heroImage:
      'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    revenueModel: 'Targeted Advertising',
    userBase: '3+ Billion monthly active users',
    marketShare: 'Largest social network in the world',
    pros: ['Unrivaled scale', 'Powerful community groups', 'Robust marketplace'],
    cons: ['Privacy scandals', 'Ageing user demographic', 'Complex privacy settings'],
    verdict: "Still the world's town square, even if the youth have moved elsewhere.",
    bestFor: 'Community building, local marketplace, and broad-reach advertising.',
  },
  'meta-ads': {
    id: 'dp_10',
    slug: 'meta-ads',
    name: 'Meta Ads',
    category: 'Advertising',
    rating: 4.8,
    description:
      'The most sophisticated targeted advertising platform, allowing businesses to reach users across Facebook, Instagram, and Messenger.',
    author: {
      name: 'Bisi "Scale" Adeyemi',
      role: 'Platform Strategist',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    publishDate: 'February 3, 2026',
    heroImage:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    revenueModel: 'Bidding-based advertising',
    userBase: '10+ Million active advertisers',
    marketShare: 'Second largest digital ad platform globally',
    pros: ['Granular targeting', 'Excellent ROI tracking', 'Diverse ad formats'],
    cons: ['Steep learning curve', 'Rising costs (CPM)', 'Impact of privacy changes (iOS 14+)'],
    verdict: 'The essential tool for performance marketing in the 21st century.',
    bestFor: 'E-commerce brands and local businesses needing targeted leads.',
  },
};
