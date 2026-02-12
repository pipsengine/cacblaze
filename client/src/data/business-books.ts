export interface BusinessBookReview {
  id: string;
  slug: string;
  name: string;
  author_book: string;
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
  keyTakeaways: string[];
  bestFor: string;
  pages: number;
  pros: string[];
  cons: string[];
  verdict: string;
}

export const businessBookReviews: Record<string, BusinessBookReview> = {
  'zero-to-one': {
    id: 'bb_1',
    slug: 'zero-to-one',
    name: 'Zero to One',
    author_book: 'Peter Thiel',
    category: 'Startups & Strategy',
    rating: 4.9,
    description: 'A contrarian look at how to build companies that create new things, rather than just copying what already exists.',
    author: {
      name: 'Tunde "Gadget" Bakare',
      role: 'Fintech Analyst',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'February 12, 2026',
    heroImage: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    keyTakeaways: [
      'Monopolies are good for innovation',
      'The "Seven Questions" every startup must answer',
      'Why "Zero to One" is harder but more valuable than "One to N"',
      'The importance of proprietary technology'
    ],
    bestFor: 'Aspiring entrepreneurs and tech visionaries.',
    pages: 210,
    pros: ['Deeply thought-provoking', 'Concise and punchy', 'Unique perspective'],
    cons: ['Some examples are dated', 'Thiel\'s style can be polarizing'],
    verdict: 'The ultimate manifesto for anyone looking to build the future.'
  },
  'the-lean-startup': {
    id: 'bb_2',
    slug: 'the-lean-startup',
    name: 'The Lean Startup',
    author_book: 'Eric Ries',
    category: 'Management',
    rating: 4.8,
    description: 'The definitive guide to the "Build-Measure-Learn" feedback loop that has revolutionized how startups are built.',
    author: {
      name: 'Tunde "Gadget" Bakare',
      role: 'Fintech Analyst',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'February 10, 2026',
    heroImage: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    keyTakeaways: [
      'Minimum Viable Product (MVP) concept',
      'The Build-Measure-Learn feedback loop',
      'Validated learning over intuition',
      'Pivoting vs. Persevering'
    ],
    bestFor: 'Founders and product managers in uncertain environments.',
    pages: 336,
    pros: ['Highly practical framework', 'Data-driven approach', 'Universally applicable'],
    cons: ['Can feel repetitive', 'Assumes high-tech environment'],
    verdict: 'A must-read for anyone building a product in the 21st century.'
  },
  'shoe-dog': {
    id: 'bb_3',
    slug: 'shoe-dog',
    name: 'Shoe Dog',
    author_book: 'Phil Knight',
    category: 'Biography',
    rating: 4.9,
    description: 'The gripping memoir by the creator of Nike, detailing the chaotic early days of the world\'s most famous shoe brand.',
    author: {
      name: 'Tunde "Gadget" Bakare',
      role: 'Fintech Analyst',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'February 8, 2026',
    heroImage: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    keyTakeaways: [
      'The power of "The Crazy Idea"',
      'Surviving constant near-bankruptcy',
      'Building a culture of "Buttheads"',
      'The importance of grit and mission'
    ],
    bestFor: 'Anyone needing inspiration during the "messy middle" of a journey.',
    pages: 400,
    pros: ['Incredible storytelling', 'Raw and honest', 'Deeply inspiring'],
    cons: ['More narrative than tactical', 'Long read'],
    verdict: 'One of the best business biographies ever written.'
  },
  'good-to-great': {
    id: 'bb_4',
    slug: 'good-to-great',
    name: 'Good to Great',
    author_book: 'Jim Collins',
    category: 'Leadership',
    rating: 4.7,
    description: 'A data-backed study of why some companies make the leap to greatness while others remain mediocre.',
    author: {
      name: 'Tunde "Gadget" Bakare',
      role: 'Fintech Analyst',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'February 6, 2026',
    heroImage: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    keyTakeaways: [
      'Level 5 Leadership',
      'The Hedgehog Concept',
      'First Who, Then What (Right people on the bus)',
      'The Flywheel Effect'
    ],
    bestFor: 'Executives and team leaders aiming for long-term excellence.',
    pages: 320,
    pros: ['Research-based insights', 'Memorable frameworks', 'Timeless principles'],
    cons: ['Some "great" companies later failed', 'Academic tone'],
    verdict: 'A foundational text for corporate leadership and strategy.'
  },
  'the-hard-thing-about-hard-things': {
    id: 'bb_5',
    slug: 'the-hard-thing-about-hard-things',
    name: 'The Hard Thing About Hard Things',
    author_book: 'Ben Horowitz',
    category: 'Entrepreneurship',
    rating: 4.9,
    description: 'Brutal honesty about what it\'s really like to lead a company through its darkest hours.',
    author: {
      name: 'Tunde "Gadget" Bakare',
      role: 'Fintech Analyst',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'February 4, 2026',
    heroImage: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    keyTakeaways: [
      'Managing through the "struggle"',
      'Peacetime vs. Wartime CEO',
      'The importance of training and culture',
      'Hiring for strength vs. lack of weakness'
    ],
    bestFor: 'CEOs and founders facing real crisis or scale.',
    pages: 304,
    pros: ['No-BS advice', 'Highly relatable for founders', 'Great hip-hop quotes'],
    cons: ['Very specific to Silicon Valley tech', 'Intense reading'],
    verdict: 'The most honest book about the difficulties of leadership.'
  },
  'atomic-habits': {
    id: 'bb_6',
    slug: 'atomic-habits',
    name: 'Atomic Habits',
    author_book: 'James Clear',
    category: 'Productivity',
    rating: 5.0,
    description: 'An easy and proven way to build good habits and break bad ones, essential for professional success.',
    author: {
      name: 'Tunde "Gadget" Bakare',
      role: 'Fintech Analyst',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'February 2, 2026',
    heroImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    keyTakeaways: [
      '1% improvement every day',
      'Identity-based habits',
      'The Four Laws of Behavior Change',
      'The Goldilocks Rule'
    ],
    bestFor: 'Anyone looking to optimize their personal and professional life.',
    pages: 320,
    pros: ['Extremely actionable', 'Clear writing', 'Scientifically backed'],
    cons: ['Can feel like common sense at times'],
    verdict: 'The definitive guide to habit formation in the modern era.'
  },
  'principles': {
    id: 'bb_7',
    slug: 'principles',
    name: 'Principles',
    author_book: 'Ray Dalio',
    category: 'Management & Life',
    rating: 4.6,
    description: 'The unconventional principles for life and work from the founder of Bridgewater Associates.',
    author: {
      name: 'Tunde "Gadget" Bakare',
      role: 'Fintech Analyst',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'January 31, 2026',
    heroImage: 'https://images.unsplash.com/photo-1454165833767-027ffea9e77b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    keyTakeaways: [
      'Radical Truth and Radical Transparency',
      'Idea Meritocracy',
      'The 5-Step Process to get what you want',
      'Pain + Reflection = Progress'
    ],
    bestFor: 'Systematic thinkers and corporate builders.',
    pages: 592,
    pros: ['Deeply analytical', 'Comprehensive systems', 'Unique worldview'],
    cons: ['Very long and dense', 'Radical transparency isn\'t for everyone'],
    verdict: 'A masterclass in systematic decision-making.'
  },
  'deep-work': {
    id: 'bb_8',
    slug: 'deep-work',
    name: 'Deep Work',
    author_book: 'Cal Newport',
    category: 'Productivity',
    rating: 4.8,
    description: 'Rules for focused success in a distracted world, arguing that the ability to focus is the new "superpower".',
    author: {
      name: 'Tunde "Gadget" Bakare',
      role: 'Fintech Analyst',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'January 29, 2026',
    heroImage: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    keyTakeaways: [
      'Deep work vs. Shallow work',
      'The 4 Disciplines of Deep Work',
      'Quitting social media as a business tool',
      'Draining the shallows'
    ],
    bestFor: 'Knowledge workers struggling with digital distraction.',
    pages: 304,
    pros: ['Counter-cultural and necessary', 'Highly practical', 'Strong evidence'],
    cons: ['Difficult to implement in some jobs'],
    verdict: 'The most important productivity book for the digital age.'
  },
  'never-split-the-difference': {
    id: 'bb_9',
    slug: 'never-split-the-difference',
    name: 'Never Split the Difference',
    author_book: 'Chris Voss',
    category: 'Negotiation',
    rating: 4.9,
    description: 'Negotiating as if your life depended on it, from a former lead FBI hostage negotiator.',
    author: {
      name: 'Tunde "Gadget" Bakare',
      role: 'Fintech Analyst',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'January 27, 2026',
    heroImage: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    keyTakeaways: [
      'Tactical Empathy',
      'Mirroring and Labeling',
      'The power of "No"',
      'Calibrated Questions'
    ],
    bestFor: 'Salespeople, managers, and anyone who talks to humans.',
    pages: 288,
    pros: ['Incredible stories', 'Instantly applicable', 'Psychology-based'],
    cons: ['Can feel a bit "manipulative" if misused'],
    verdict: 'The best book on negotiation ever written.'
  },
  'start-with-why': {
    id: 'bb_10',
    slug: 'start-with-why',
    name: 'Start with Why',
    author_book: 'Simon Sinek',
    category: 'Leadership & Marketing',
    rating: 4.7,
    description: 'How great leaders inspire everyone to take action by focusing on the "Why" before the "How" or "What".',
    author: {
      name: 'Tunde "Gadget" Bakare',
      role: 'Fintech Analyst',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'January 25, 2026',
    heroImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    keyTakeaways: [
      'The Golden Circle',
      'Why, How, What framework',
      'Leading vs. Being a Leader',
      'The Law of Diffusion of Innovation'
    ],
    bestFor: 'Marketers and leaders looking to build loyalty.',
    pages: 256,
    pros: ['Simple yet profound', 'Great case studies (Apple, Wright Bros)', 'Inspirational'],
    cons: ['Can be repetitive', 'Simplistic biology'],
    verdict: 'A classic for building brands and movements that last.'
  }
};
