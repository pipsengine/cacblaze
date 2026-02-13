export interface SubscriptionReview {
  id: string;
  slug: string;
  name: string;
  category: 'Entertainment' | 'Productivity' | 'Lifestyle' | 'News' | 'Gaming' | 'Fitness';
  rating: number;
  description: string;
  author: {
    name: string;
    role: string;
    image: string;
  };
  publishDate: string;
  heroImage: string;
  billingCycle: 'Monthly' | 'Annual' | 'Flexible';
  price: string;
  freeTrial: string;
  cancelationEase: 'Very Easy' | 'Moderate' | 'Difficult';
  pros: string[];
  cons: string[];
  verdict: string;
  bestFor: string;
}

export const subscriptionReviews: Record<string, SubscriptionReview> = {
  'netflix': {
    id: 'sub_1',
    slug: 'netflix',
    name: 'Netflix',
    category: 'Entertainment',
    rating: 4.7,
    description: 'The global leader in streaming entertainment, offering an vast library of original content and licensed favorites.',
    author: {
      name: 'Sarah "Stream" Johnson',
      role: 'Content Critic',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'February 12, 2026',
    heroImage: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    billingCycle: 'Monthly',
    price: '$6.99 - $22.99/mo',
    freeTrial: 'None',
    cancelationEase: 'Very Easy',
    pros: ['Top-tier original content', 'Excellent mobile app', 'User-friendly interface'],
    cons: ['Frequent price hikes', 'Cracking down on password sharing', 'Removing licensed favorites'],
    verdict: 'Still the benchmark for streaming, though costs are rising.',
    bestFor: 'Binge-watchers and families looking for diverse content.'
  },
  'spotify-premium': {
    id: 'sub_2',
    slug: 'spotify-premium',
    name: 'Spotify Premium',
    category: 'Entertainment',
    rating: 4.9,
    description: 'The definitive music streaming service with industry-leading discovery algorithms and social features.',
    author: {
      name: 'Marcus "Vinyl" Thorne',
      role: 'Audio Analyst',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'February 11, 2026',
    heroImage: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    billingCycle: 'Monthly',
    price: '$10.99/mo',
    freeTrial: '1-3 Months',
    cancelationEase: 'Very Easy',
    pros: ['Best-in-class discovery', 'Huge podcast library', 'Seamless multi-device sync'],
    cons: ['No Hi-Fi audio tier yet', 'Artists payouts controversies', 'App can feel cluttered'],
    verdict: 'The essential subscription for music lovers.',
    bestFor: 'Music enthusiasts and podcast listeners.'
  },
  'youtube-premium': {
    id: 'sub_3',
    slug: 'youtube-premium',
    name: 'YouTube Premium',
    category: 'Entertainment',
    rating: 4.8,
    description: 'An all-in-one package for ad-free video, background play, and YouTube Music access.',
    author: {
      name: 'Sarah "Stream" Johnson',
      role: 'Content Critic',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'February 10, 2026',
    heroImage: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    billingCycle: 'Monthly',
    price: '$13.99/mo',
    freeTrial: '1 Month',
    cancelationEase: 'Very Easy',
    pros: ['Ad-free experience', 'YouTube Music included', 'Background playback'],
    cons: ['Price increases', 'Limited original content compared to others', 'Family plan is pricey'],
    verdict: 'Indispensable if you spend more than an hour a day on YouTube.',
    bestFor: 'Power users of the YouTube platform.'
  },
  'adobe-creative-cloud': {
    id: 'sub_4',
    slug: 'adobe-creative-cloud',
    name: 'Adobe Creative Cloud',
    category: 'Productivity',
    rating: 4.5,
    description: 'The industry standard suite for design, photography, video, and web development.',
    author: {
      name: 'Elena "Pixel" Rossi',
      role: 'Creative Director',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'February 9, 2026',
    heroImage: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    billingCycle: 'Annual',
    price: '$59.99/mo (All Apps)',
    freeTrial: '7 Days',
    cancelationEase: 'Moderate',
    pros: ['Professional grade tools', 'Seamless cloud sync', 'Regular AI feature updates'],
    cons: ['Expensive long-term', 'Steep learning curve', 'Cancelation fees can apply'],
    verdict: 'Necessary for professionals, but overkill for hobbyists.',
    bestFor: 'Graphic designers, photographers, and video editors.'
  },
  'microsoft-365': {
    id: 'sub_5',
    slug: 'microsoft-365',
    name: 'Microsoft 365',
    category: 'Productivity',
    rating: 4.6,
    description: 'The essential office suite integrated with cloud storage and advanced security features.',
    author: {
      name: 'Elena "Pixel" Rossi',
      role: 'Creative Director',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'February 8, 2026',
    heroImage: 'https://images.unsplash.com/photo-1633419461186-7d40a38105ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    billingCycle: 'Annual',
    price: '$69.99/yr (Personal)',
    freeTrial: '1 Month',
    cancelationEase: 'Moderate',
    pros: ['Industry standard apps', '1TB OneDrive storage', 'Excellent collaboration tools'],
    cons: ['Subscription fatigue', 'Mobile apps limited', 'Desktop versions can be heavy'],
    verdict: 'The best value for productivity and cloud storage combined.',
    bestFor: 'Students, professionals, and home offices.'
  },
  'masterclass': {
    id: 'sub_6',
    slug: 'masterclass',
    name: 'MasterClass',
    category: 'Lifestyle',
    rating: 4.4,
    description: 'Learn from the worlds best in various fields, from cooking to filmmaking and leadership.',
    author: {
      name: 'Elena "Pixel" Rossi',
      role: 'Creative Director',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'February 7, 2026',
    heroImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    billingCycle: 'Annual',
    price: '$120/yr (Starting)',
    freeTrial: 'None (30-day guarantee)',
    cancelationEase: 'Very Easy',
    pros: ['High production value', 'A-list celebrity instructors', 'Inspirational content'],
    cons: ['Annual-only billing', 'Not for technical skill building', 'Content can be repetitive'],
    verdict: 'Great for inspiration and high-level concepts.',
    bestFor: 'Lifelong learners and fans of world-class experts.'
  },
  'new-york-times': {
    id: 'sub_7',
    slug: 'new-york-times',
    name: 'The New York Times',
    category: 'News',
    rating: 4.5,
    description: 'Quality journalism, investigations, and analysis from one of the worlds most respected news organizations.',
    author: {
      name: 'Marcus "Vinyl" Thorne',
      role: 'Audio Analyst',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'February 6, 2026',
    heroImage: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    billingCycle: 'Flexible',
    price: '$4/mo (Introductory)',
    freeTrial: 'None',
    cancelationEase: 'Moderate',
    pros: ['Excellent deep-dive reporting', 'Great app experience', 'Includes Games/Cooking bundles'],
    cons: ['Regular price jumps after intro', 'Paywall can be aggressive', 'Political bias concerns for some'],
    verdict: 'The gold standard for digital news subscriptions.',
    bestFor: 'News junkies and those valuing high-quality reporting.'
  },
  'xbox-game-pass': {
    id: 'sub_8',
    slug: 'xbox-game-pass',
    name: 'Xbox Game Pass Ultimate',
    category: 'Gaming',
    rating: 4.9,
    description: 'The "Netflix for Gaming," offering hundreds of high-quality games on console and PC.',
    author: {
      name: 'Marcus "Vinyl" Thorne',
      role: 'Audio Analyst',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'February 5, 2026',
    heroImage: 'https://images.unsplash.com/photo-1605901309584-818e25960a8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    billingCycle: 'Monthly',
    price: '$16.99/mo',
    freeTrial: 'None ($1 deals common)',
    cancelationEase: 'Very Easy',
    pros: ['Incredible value', 'Day-one first-party releases', 'Cloud gaming included'],
    cons: ['Price is increasing', 'Library changes monthly', 'Requires fast internet for cloud'],
    verdict: 'The best deal in gaming, hands down.',
    bestFor: 'Gamers who want to explore a wide variety of titles.'
  },
  'peloton-app': {
    id: 'sub_9',
    slug: 'peloton-app',
    name: 'Peloton App One',
    category: 'Fitness',
    rating: 4.3,
    description: 'World-class fitness classes you can take anywhere, with or without Peloton equipment.',
    author: {
      name: 'Sarah "Stream" Johnson',
      role: 'Content Critic',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'February 4, 2026',
    heroImage: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    billingCycle: 'Monthly',
    price: '$12.99/mo',
    freeTrial: '30 Days',
    cancelationEase: 'Very Easy',
    pros: ['Motivating instructors', 'Diverse workout types', 'Great music integration'],
    cons: ['Equipment sync is limited for non-Peloton', 'App-only version lacks some metrics', 'Can be repetitive'],
    verdict: 'Excellent for those who need high-energy guidance.',
    bestFor: 'Home workout enthusiasts and runners.'
  },
  'duolingo-super': {
    id: 'sub_10',
    slug: 'duolingo-super',
    name: 'Super Duolingo',
    category: 'Productivity',
    rating: 4.2,
    description: 'The ad-free, premium version of the worlds most popular language-learning app.',
    author: {
      name: 'Elena "Pixel" Rossi',
      role: 'Creative Director',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'February 3, 2026',
    heroImage: 'https://images.unsplash.com/photo-1543269664-56d93c1b41a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    billingCycle: 'Annual',
    price: '$83.99/yr',
    freeTrial: '14 Days',
    cancelationEase: 'Very Easy',
    pros: ['Ad-free experience', 'Unlimited hearts', 'Personalized practice'],
    cons: ['Annual billing is steep', 'Gamification can be stressful', 'Doesnt replace immersive learning'],
    verdict: 'A nice upgrade if you use the app daily.',
    bestFor: 'Serious language learners who want to remove friction.'
  }
};
