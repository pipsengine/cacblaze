export interface SelfDevelopmentReview {
  id: string;
  slug: string;
  name: string;
  type: 'Course' | 'App' | 'Framework' | 'Practice';
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
  keyFeatures: string[];
  bestFor: string;
  pricing?: string;
  pros: string[];
  cons: string[];
  verdict: string;
}

export const selfDevelopmentReviews: Record<string, SelfDevelopmentReview> = {
  'masterclass-productivity': {
    id: 'sd_1',
    slug: 'masterclass-productivity',
    name: 'MasterClass: Productivity with James Clear',
    type: 'Course',
    category: 'Productivity',
    rating: 4.8,
    description:
      'A comprehensive deep dive into habit formation and productivity systems by the author of Atomic Habits.',
    author: {
      name: 'Tunde "Gadget" Bakare',
      role: 'Fintech Analyst',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    publishDate: 'February 12, 2026',
    heroImage:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    keyFeatures: [
      'Interactive habit tracking templates',
      'Video lessons on identity-based habits',
      'Community discussion forums',
      'Exclusive worksheets and downloadable guides',
    ],
    bestFor: 'Individuals looking to build sustainable long-term habits.',
    pricing: '$15/month (Annual membership)',
    pros: ['High production value', 'Actionable advice', 'Excellent storytelling'],
    cons: ['Requires MasterClass subscription', 'Some overlap with the book'],
    verdict: 'The best visual companion to Atomic Habits available today.',
  },
  'headspace-meditation': {
    id: 'sd_2',
    slug: 'headspace-meditation',
    name: 'Headspace',
    type: 'App',
    category: 'Mental Health',
    rating: 4.7,
    description:
      "The world's most popular meditation app designed to make mindfulness accessible to everyone.",
    author: {
      name: 'Tunde "Gadget" Bakare',
      role: 'Fintech Analyst',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    publishDate: 'February 10, 2026',
    heroImage:
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    keyFeatures: [
      'Guided meditations for all levels',
      'Sleepcasts for better rest',
      'Mindful movement exercises',
      'Focus music and soundscapes',
    ],
    bestFor: 'Beginners and intermediate practitioners of mindfulness.',
    pricing: '$12.99/month or $69.99/year',
    pros: ['Friendly interface', 'Great for sleep', 'Diverse content library'],
    cons: ['Subscription can be expensive', 'Animations might be too simple for some'],
    verdict: 'Still the gold standard for guided meditation apps.',
  },
  'getting-things-done': {
    id: 'sd_3',
    slug: 'getting-things-done',
    name: 'Getting Things Done (GTD)',
    type: 'Framework',
    category: 'Organization',
    rating: 4.9,
    description:
      "David Allen's legendary time management method that promises stress-free productivity.",
    author: {
      name: 'Tunde "Gadget" Bakare',
      role: 'Fintech Analyst',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    publishDate: 'February 8, 2026',
    heroImage:
      'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    keyFeatures: [
      'Five-step workflow: Capture, Clarify, Organize, Reflect, Engage',
      'Emphasis on "Next Action" thinking',
      'Weekly review process',
      'Project-based organization',
    ],
    bestFor: 'Busy professionals managing multiple complex projects.',
    pricing: 'Free (Cost of the book)',
    pros: ['Complete system', 'Reduces mental load', 'Highly scalable'],
    cons: ['Steep learning curve', 'Requires strict discipline', 'Can be over-engineered'],
    verdict: 'Life-changing if you can stick to the initial setup phase.',
  },
  'duolingo-language': {
    id: 'sd_4',
    slug: 'duolingo-language',
    name: 'Duolingo',
    type: 'App',
    category: 'Education',
    rating: 4.5,
    description: 'The gamified way to learn new languages through bite-sized lessons.',
    author: {
      name: 'Tunde "Gadget" Bakare',
      role: 'Fintech Analyst',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    publishDate: 'February 5, 2026',
    heroImage:
      'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    keyFeatures: [
      'Streak-based motivation system',
      'Leaderboards and social competition',
      'Personalized review sessions',
      'Speaking and listening exercises',
    ],
    bestFor: 'Casual learners looking to build a consistent language habit.',
    pricing: 'Free (with ads) or $6.99/month for Super',
    pros: ['Extremely addictive', 'Huge variety of languages', 'Low barrier to entry'],
    cons: ['Not enough for fluency alone', 'Hearts system can be frustrating', 'Repetitive'],
    verdict: "The best way to start a new language, but you'll need more for mastery.",
  },
  'the-morning-miracle': {
    id: 'sd_5',
    slug: 'the-morning-miracle',
    name: 'The Miracle Morning',
    type: 'Practice',
    category: 'Daily Routine',
    rating: 4.4,
    description: "Hal Elrod's S.A.V.E.R.S routine designed to transform your life before 8 AM.",
    author: {
      name: 'Tunde "Gadget" Bakare',
      role: 'Fintech Analyst',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    publishDate: 'February 1, 2026',
    heroImage:
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    keyFeatures: [
      'Silence (Meditation)',
      'Affirmations',
      'Visualization',
      'Exercise',
      'Reading',
      'Scribing (Journaling)',
    ],
    bestFor: 'Early birds wanting to maximize their morning potential.',
    pricing: 'Free',
    pros: ['Structured start to the day', 'Holistic approach', 'High energy'],
    cons: ['Hard for night owls', 'Can feel rushed', 'Requires early wake-up'],
    verdict: 'A powerful framework for anyone looking to reclaim their mornings.',
  },
  'coursera-specialization': {
    id: 'sd_6',
    slug: 'coursera-specialization',
    name: 'Coursera: Learning How to Learn',
    type: 'Course',
    category: 'Cognitive Science',
    rating: 4.9,
    description:
      "The world's most popular MOOC that teaches you the neuroscience of effective learning.",
    author: {
      name: 'Tunde "Gadget" Bakare',
      role: 'Fintech Analyst',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    publishDate: 'January 28, 2026',
    heroImage:
      'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    keyFeatures: [
      'Focused vs Diffuse thinking modes',
      'Techniques for overcoming procrastination',
      'Memory palace and chunking methods',
      'Peer-graded assignments',
    ],
    bestFor: 'Students and lifelong learners looking to study smarter.',
    pricing: 'Free (to audit) or $49 for certificate',
    pros: ['Evidence-based', 'Practical techniques', 'Excellent instructors'],
    cons: ['Production quality is dated', 'Some technical jargon'],
    verdict: 'A fundamental course that everyone should take at least once.',
  },
  'notion-second-brain': {
    id: 'sd_7',
    slug: 'notion-second-brain',
    name: 'Building a Second Brain (Tiago Forte)',
    type: 'Framework',
    category: 'Knowledge Management',
    rating: 4.8,
    description:
      'A methodology for capturing and organizing ideas using digital tools like Notion.',
    author: {
      name: 'Tunde "Gadget" Bakare',
      role: 'Fintech Analyst',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    publishDate: 'January 25, 2026',
    heroImage:
      'https://images.unsplash.com/photo-1517842645767-c639042777db?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    keyFeatures: [
      'CODE Method: Capture, Organize, Distill, Express',
      'PARA System for file organization',
      'Progressive Summarization',
      'Digital garden concepts',
    ],
    bestFor: 'Content creators and knowledge workers.',
    pricing: '$10/month (Notion) + Course fee',
    pros: ['Solves information overload', 'Future-proof system', 'Increases creative output'],
    cons: ['Complex to set up', 'Tool-dependent', 'Can lead to over-collecting'],
    verdict: 'The definitive system for the digital age.',
  },
  'stoicism-practice': {
    id: 'sd_8',
    slug: 'stoicism-practice',
    name: 'Daily Stoic Practice',
    type: 'Practice',
    category: 'Philosophy',
    rating: 4.6,
    description: 'Applying ancient Stoic wisdom to modern life challenges.',
    author: {
      name: 'Tunde "Gadget" Bakare',
      role: 'Fintech Analyst',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    publishDate: 'January 20, 2026',
    heroImage:
      'https://images.unsplash.com/photo-1507413245164-6160d8298b31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    keyFeatures: [
      'Negative visualization (Premeditatio Malorum)',
      'Dichotomy of Control',
      'Journaling (The View from Above)',
      'Voluntary discomfort',
    ],
    bestFor: 'Anyone looking for mental resilience and emotional stability.',
    pricing: 'Free',
    pros: ['Timeless wisdom', 'Zero cost', 'Highly practical'],
    cons: ['Can be misinterpreted as emotionless', 'Requires daily commitment'],
    verdict: 'An essential toolkit for navigating the ups and downs of life.',
  },
  'skillshare-creative': {
    id: 'sd_9',
    slug: 'skillshare-creative',
    name: 'Skillshare: Creative Self-Development',
    type: 'Course',
    category: 'Creativity',
    rating: 4.5,
    description: 'A platform focused on learning creative skills from industry professionals.',
    author: {
      name: 'Tunde "Gadget" Bakare',
      role: 'Fintech Analyst',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    publishDate: 'January 15, 2026',
    heroImage:
      'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    keyFeatures: [
      'Project-based learning',
      'Feedback from instructors and peers',
      'Short, digestible video lessons',
      'Offline viewing options',
    ],
    bestFor: 'Aspiring designers, illustrators, and writers.',
    pricing: '$13.99/month (Annual)',
    pros: ['Very practical', 'Low commitment per course', 'Huge variety'],
    cons: ['Quality varies between instructors', 'Subscription model only'],
    verdict: 'The best place to explore and develop your creative side.',
  },
  'habitica-gamification': {
    id: 'sd_10',
    slug: 'habitica-gamification',
    name: 'Habitica',
    type: 'App',
    category: 'Productivity',
    rating: 4.3,
    description: 'An RPG-style habit tracker that turns your life into a game.',
    author: {
      name: 'Tunde "Gadget" Bakare',
      role: 'Fintech Analyst',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    publishDate: 'January 10, 2026',
    heroImage:
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    keyFeatures: [
      'Character leveling and gear',
      'Quests and boss battles with friends',
      'Rewards for completing real-life tasks',
      'Pets and mounts collection',
    ],
    bestFor: 'Gamers and those who struggle with traditional productivity apps.',
    pricing: 'Free (with optional subscriptions)',
    pros: ['Very fun', 'Strong community', 'Highly customizable'],
    cons: ['Graphics are retro/pixelated', 'Can be complex for non-gamers'],
    verdict: 'A unique and effective way to gamify your personal growth.',
  },
};
