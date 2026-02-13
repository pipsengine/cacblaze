export interface FreeVsPaidComparison {
  id: string;
  slug: string;
  name: string;
  category: string;
  rating: number;
  description: string;
  author: {
    name: string;
    role: string;
    image: string;
  };
  publishDate: string;
  heroImage: string;
  freeTier: {
    features: string[];
    limitations: string[];
  };
  paidTier: {
    price: string;
    features: string[];
    benefits: string[];
  };
  verdict: string;
  whoShouldUpgrade: string;
}

export const freeVsPaidComparisons: Record<string, FreeVsPaidComparison> = {
  'notion-free-vs-paid': {
    id: 'comp_1',
    slug: 'notion-free-vs-paid',
    name: 'Notion',
    category: 'Productivity',
    rating: 4.8,
    description:
      'Notion offers one of the most generous free tiers in the productivity space, but for power users and teams, the Plus and Business plans offer critical features.',
    author: {
      name: 'Tunde "Gadget" Bakare',
      role: 'Fintech Analyst',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    publishDate: 'February 12, 2026',
    heroImage:
      'https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    freeTier: {
      features: [
        'Unlimited pages & blocks',
        'Share with 5 guests',
        'Sync across devices',
        'Basic analytics',
      ],
      limitations: ['5MB file upload limit', '7-day page history', 'No private teamspaces'],
    },
    paidTier: {
      price: '$10/user/month',
      features: [
        'Unlimited file uploads',
        '30-day page history',
        'Unlimited guests (up to 100)',
        'Notion AI (Add-on)',
      ],
      benefits: ['Team collaboration tools', 'Advanced permissions', 'Priority support'],
    },
    verdict:
      'The free version is perfect for personal use, but teams and power users will quickly hit the file upload and history limits.',
    whoShouldUpgrade:
      'Teams and individuals who handle large files or need long-term version history.',
  },
  'canva-free-vs-pro': {
    id: 'comp_2',
    slug: 'canva-free-vs-pro',
    name: 'Canva',
    category: 'Design',
    rating: 4.9,
    description:
      'Canva Pro unlocks a massive library of assets and time-saving AI tools that make it a no-brainer for small business owners and content creators.',
    author: {
      name: 'Tunde "Gadget" Bakare',
      role: 'Fintech Analyst',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    publishDate: 'February 11, 2026',
    heroImage:
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    freeTier: {
      features: [
        '250,000+ free templates',
        '100+ design types',
        'Thousands of free photos',
        '5GB cloud storage',
      ],
      limitations: ['Watermarked premium assets', 'No background remover', 'No Magic Resize'],
    },
    paidTier: {
      price: '$12.99/month',
      features: [
        '100+ million premium assets',
        'Brand Kit (Logos, Fonts)',
        'Magic Resize',
        'Background Remover',
      ],
      benefits: ['Content Planner', '1TB cloud storage', 'SVG exports'],
    },
    verdict:
      'If you create content more than once a week, Canva Pro pays for itself in time saved alone.',
    whoShouldUpgrade:
      'Social media managers, small business owners, and anyone needing professional assets.',
  },
  'slack-free-vs-pro': {
    id: 'comp_3',
    slug: 'slack-free-vs-pro',
    name: 'Slack',
    category: 'Communication',
    rating: 4.5,
    description:
      'Slack\'s free version is famous for its "90-day message limit," which is often the primary driver for teams to upgrade to a paid plan.',
    author: {
      name: 'Tunde "Gadget" Bakare',
      role: 'Fintech Analyst',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    publishDate: 'February 10, 2026',
    heroImage:
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    freeTier: {
      features: [
        '10 integrations',
        '1:1 Huddles',
        'Standard security',
        '90 days of message history',
      ],
      limitations: ['Messages disappear after 90 days', 'No group huddles', 'Limited file storage'],
    },
    paidTier: {
      price: '$7.25/user/month',
      features: [
        'Unlimited message history',
        'Unlimited integrations',
        'Group Huddles with screen sharing',
        'Slack Connect',
      ],
      benefits: ['Workflow Builder', 'Guest access', 'OAuth & SAML support'],
    },
    verdict:
      'The 90-day history limit is a dealbreaker for established businesses that need a searchable knowledge base.',
    whoShouldUpgrade:
      'Growing teams that need to keep track of decisions and share channels with clients.',
  },
  'zoom-free-vs-pro': {
    id: 'comp_4',
    slug: 'zoom-free-vs-pro',
    name: 'Zoom',
    category: 'Video Calls',
    rating: 4.6,
    description:
      "Zoom's 40-minute limit on free group meetings is the most well-known restriction in the software world.",
    author: {
      name: 'Tunde "Gadget" Bakare',
      role: 'Fintech Analyst',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    publishDate: 'February 9, 2026',
    heroImage:
      'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    freeTier: {
      features: [
        'Up to 100 participants',
        'Breakout rooms',
        'Screen sharing',
        'Virtual backgrounds',
      ],
      limitations: ['40-minute limit on group calls', 'No cloud recording', 'No polls'],
    },
    paidTier: {
      price: '$14.99/month/license',
      features: [
        '30-hour meeting duration',
        'Cloud recording (5GB)',
        'Polls & Quizzes',
        'Streaming to social media',
      ],
      benefits: ['Co-host permissions', 'User management', 'Reporting'],
    },
    verdict:
      'For professional meetings, the 40-minute interruption is simply too risky for your brand reputation.',
    whoShouldUpgrade: 'Freelancers and businesses that host client meetings or workshops.',
  },
  'spotify-free-vs-premium': {
    id: 'comp_5',
    slug: 'spotify-free-vs-premium',
    name: 'Spotify',
    category: 'Entertainment',
    rating: 4.7,
    description:
      'Spotify Premium is almost universally considered the best value subscription for anyone who listens to music daily.',
    author: {
      name: 'Tunde "Gadget" Bakare',
      role: 'Fintech Analyst',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    publishDate: 'February 8, 2026',
    heroImage:
      'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    freeTier: {
      features: [
        'Access to 80M+ songs',
        'Podcasts',
        'Shuffle-only mode (Mobile)',
        'Standard audio quality',
      ],
      limitations: ['Ad interruptions', 'No offline listening', 'Limited skips'],
    },
    paidTier: {
      price: '₦900/month (Nigeria)',
      features: [
        'Ad-free music',
        'Offline downloads',
        'Unlimited skips',
        'Very High audio quality',
      ],
      benefits: ['Spotify Connect', 'On-demand playback', 'Family/Student plans'],
    },
    verdict:
      'In Nigeria, the localized pricing makes Premium an absolute steal compared to the ad-heavy free version.',
    whoShouldUpgrade:
      'Daily commuters and music lovers who hate ads and want to save data with offline mode.',
  },
  'chatgpt-free-vs-plus': {
    id: 'comp_6',
    slug: 'chatgpt-free-vs-plus',
    name: 'ChatGPT',
    category: 'AI Tools',
    rating: 4.8,
    description:
      "ChatGPT Plus gives you access to the most advanced models and features that aren't always available to free users during peak times.",
    author: {
      name: 'Tunde "Gadget" Bakare',
      role: 'Fintech Analyst',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    publishDate: 'February 7, 2026',
    heroImage:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    freeTier: {
      features: [
        'Access to GPT-4o mini',
        'Web, iOS, Android access',
        'Custom instructions',
        'DALL-E 3 (Limited)',
      ],
      limitations: [
        'Limited GPT-4o access',
        'Standard response speed',
        'No early access to new features',
      ],
    },
    paidTier: {
      price: '$20/month',
      features: [
        'Unlimited GPT-4o access',
        'DALL-E 3 Image Generation',
        'Custom GPTs',
        'Data Analysis',
      ],
      benefits: [
        'Faster response times',
        'Early access to features (e.g. Sora)',
        'Voice Mode (Advanced)',
      ],
    },
    verdict:
      'Plus is a productivity multiplier for developers and writers, while the free version is plenty for casual queries.',
    whoShouldUpgrade:
      'Professionals who use AI for coding, data analysis, or high-volume content creation.',
  },
  'youtube-free-vs-premium': {
    id: 'comp_7',
    slug: 'youtube-free-vs-premium',
    name: 'YouTube',
    category: 'Entertainment',
    rating: 4.4,
    description:
      'YouTube Premium is the only way to officially remove ads and enable background play on mobile devices.',
    author: {
      name: 'Tunde "Gadget" Bakare',
      role: 'Fintech Analyst',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    publishDate: 'February 6, 2026',
    heroImage:
      'https://images.unsplash.com/photo-1543269664-76bc3997d9ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    freeTier: {
      features: ['Millions of videos', 'YouTube Kids', 'Standard quality', 'Comments & community'],
      limitations: ['Pre-roll and mid-roll ads', 'No background play', 'No downloads'],
    },
    paidTier: {
      price: '₦1,100/month (Nigeria)',
      features: [
        'Ad-free videos',
        'Background play',
        'Offline downloads',
        'YouTube Music Premium included',
      ],
      benefits: ['YouTube Originals', 'Support creators directly', 'Picture-in-Picture'],
    },
    verdict:
      'If you watch more than an hour of YouTube a day, the time saved from skipping ads is worth every kobo.',
    whoShouldUpgrade:
      'Heavy video consumers and people who use YouTube for music or educational background listening.',
  },
  'dropbox-free-vs-plus': {
    id: 'comp_8',
    slug: 'dropbox-free-vs-plus',
    name: 'Dropbox',
    category: 'Cloud Storage',
    rating: 4.2,
    description:
      "Dropbox's free tier is notoriously small, making it more of a trial than a long-term storage solution.",
    author: {
      name: 'Tunde "Gadget" Bakare',
      role: 'Fintech Analyst',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    publishDate: 'February 5, 2026',
    heroImage:
      'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    freeTier: {
      features: [
        '2GB of storage',
        '3 device sync limit',
        'Standard file sharing',
        'Basic security',
      ],
      limitations: ['Extremely low storage', 'Sync limit on devices', 'No remote wipe'],
    },
    paidTier: {
      price: '$9.99/month',
      features: [
        '2TB (2,000GB) storage',
        'Unlimited device sync',
        'Dropbox Rewind (30 days)',
        'Large file transfers (2GB)',
      ],
      benefits: ['Smart Sync', 'Mobile offline folders', 'Priority email support'],
    },
    verdict:
      'Dropbox Plus is great, but many users might find Google Drive or iCloud better value if they are already in those ecosystems.',
    whoShouldUpgrade:
      'People who need reliable, cross-platform file syncing for large project folders.',
  },
  'grammarly-free-vs-premium': {
    id: 'comp_9',
    slug: 'grammarly-free-vs-premium',
    name: 'Grammarly',
    category: 'Writing Tools',
    rating: 4.6,
    description:
      'Grammarly Premium goes beyond basic spelling to help with tone, clarity, and plagiarism detection.',
    author: {
      name: 'Tunde "Gadget" Bakare',
      role: 'Fintech Analyst',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    publishDate: 'February 4, 2026',
    heroImage:
      'https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    freeTier: {
      features: [
        'Spelling & Grammar checks',
        'Punctuation alerts',
        'Conciseness (Basic)',
        'Tone detection',
      ],
      limitations: [
        'No plagiarism checker',
        'No vocabulary suggestions',
        'Limited clarity rewrites',
      ],
    },
    paidTier: {
      price: '$12/month',
      features: [
        'Full sentence rewrites',
        'Plagiarism detection',
        'Word choice suggestions',
        'Tone adjustments',
      ],
      benefits: ['Style guide', 'English fluency checks', 'Google Docs integration'],
    },
    verdict:
      'The free version is enough for emails, but Premium is essential for students, researchers, and professional writers.',
    whoShouldUpgrade:
      'Content writers, corporate professionals, and students submitting academic papers.',
  },
  'duolingo-free-vs-super': {
    id: 'comp_10',
    slug: 'duolingo-free-vs-super',
    name: 'Duolingo',
    category: 'Learning',
    rating: 4.7,
    description:
      'Super Duolingo removes the "Hearts" system, which is the biggest hurdle for learners who want to study for long periods.',
    author: {
      name: 'Tunde "Gadget" Bakare',
      role: 'Fintech Analyst',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    publishDate: 'February 3, 2026',
    heroImage:
      'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    freeTier: {
      features: ['Access to all languages', 'Gamified lessons', 'Leaderboards', 'Daily quests'],
      limitations: ['Limited "Hearts" (lives)', 'Ad interruptions', 'No personalized practice'],
    },
    paidTier: {
      price: '$6.99/month',
      features: ['Unlimited Hearts', 'No ads', 'Personalized Practice', 'Mistakes Review'],
      benefits: ['Monthly Streak Repair', 'Progress Tracking', 'Family Plan available'],
    },
    verdict:
      'If the "Hearts" system frustrates you and slows down your learning, Super Duolingo is worth it for the peace of mind.',
    whoShouldUpgrade:
      'Serious language learners who want to spend more than 15 minutes a day practicing.',
  },
};
