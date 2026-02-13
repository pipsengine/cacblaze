export interface LearningAppReview {
  id: string;
  slug: string;
  name: string;
  category: string;
  platform: string;
  subjects: string[];
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
    offlineMode: boolean;
    certificateAvailable: boolean;
    interactiveLessons: boolean;
    features: string[];
  };
  pros: string[];
  cons: string[];
  verdict: string;
}

export const learningAppReviews: Record<string, LearningAppReview> = {
  'duolingo-review': {
    id: 'learn_1',
    slug: 'duolingo-review',
    name: 'Duolingo',
    category: 'Language Learning',
    platform: 'iOS, Android, Web',
    subjects: ['Spanish', 'French', 'German', 'Japanese', 'Yoruba'],
    rating: 4.7,
    description:
      "The world's most popular language learning platform. Gamified lessons make it addictive and fun to learn a new language daily.",
    author: {
      name: 'Tunde "Gadget" Bakare',
      role: 'Fintech Analyst',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    publishDate: 'February 12, 2026',
    heroImage:
      'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    specs: {
      pricingModel: 'Freemium (Super Duolingo available)',
      offlineMode: true,
      certificateAvailable: false,
      interactiveLessons: true,
      features: ['Daily Streaks', 'Leagues', 'Podcasts', 'Personalized Practice'],
    },
    pros: ['Highly engaging gamification', 'Completely free to use', 'Bite-sized lessons'],
    cons: ['Not sufficient for fluency alone', 'Hearts system can be frustrating'],
    verdict: 'Best for beginners and casual learners looking to build a consistent habit.',
  },
  'coursera-review': {
    id: 'learn_2',
    slug: 'coursera-review',
    name: 'Coursera',
    category: 'Higher Education',
    platform: 'Web, iOS, Android',
    subjects: ['Data Science', 'Business', 'Computer Science', 'Personal Development'],
    rating: 4.8,
    description:
      'Learn from top universities like Stanford and Yale. Coursera offers professional certificates and even full degrees online.',
    author: {
      name: 'Tunde "Gadget" Bakare',
      role: 'Fintech Analyst',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    publishDate: 'February 11, 2026',
    heroImage:
      'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    specs: {
      pricingModel: 'Paid (Audit options available)',
      offlineMode: true,
      certificateAvailable: true,
      interactiveLessons: false,
      features: [
        'University Accreditation',
        'Guided Projects',
        'Specializations',
        'Professional Certificates',
      ],
    },
    pros: ['World-class instructors', 'Recognized certifications', 'Structured learning paths'],
    cons: ['Certificates can be expensive', 'Peer-graded assignments vary in quality'],
    verdict: 'The gold standard for career-advancing online education.',
  },
  'khan-academy-review': {
    id: 'learn_3',
    slug: 'khan-academy-review',
    name: 'Khan Academy',
    category: 'K-12 & Test Prep',
    platform: 'Web, iOS, Android',
    subjects: ['Math', 'Science', 'Economics', 'SAT Prep'],
    rating: 4.9,
    description:
      'A non-profit with a mission to provide a free, world-class education for anyone, anywhere. Exceptional for K-12 students.',
    author: {
      name: 'Tunde "Gadget" Bakare',
      role: 'Fintech Analyst',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    publishDate: 'February 10, 2026',
    heroImage:
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    specs: {
      pricingModel: 'Free (Non-profit)',
      offlineMode: true,
      certificateAvailable: false,
      interactiveLessons: true,
      features: [
        'Personalized Dashboard',
        'Practice Exercises',
        'Instructional Videos',
        'Teacher Tools',
      ],
    },
    pros: ['100% free forever', 'Mastery-based learning', 'High-quality explanations'],
    cons: ['Limited humanities content', 'No formal certification'],
    verdict: 'Indispensable resource for students and teachers alike.',
  },
  'udemy-review': {
    id: 'learn_4',
    slug: 'udemy-review',
    name: 'Udemy',
    category: 'Skill-Based Learning',
    platform: 'Web, iOS, Android',
    subjects: ['Web Development', 'Photography', 'Marketing', 'Cooking'],
    rating: 4.5,
    description:
      'The largest marketplace for online courses. With over 200,000 courses, you can find a tutorial for almost any skill imaginable.',
    author: {
      name: 'Tunde "Gadget" Bakare',
      role: 'Fintech Analyst',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    publishDate: 'February 9, 2026',
    heroImage:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    specs: {
      pricingModel: 'Per-course purchase (Frequent sales)',
      offlineMode: true,
      certificateAvailable: true,
      interactiveLessons: false,
      features: ['Lifetime Access', 'Direct Instructor Q&A', 'Course Previews', 'Student Reviews'],
    },
    pros: [
      'Incredible variety of topics',
      'Very affordable during sales',
      'Practical, hands-on skills',
    ],
    cons: ['Quality varies significantly', 'Certificates are not accredited'],
    verdict: 'Perfect for learning practical skills at your own pace without breaking the bank.',
  },
  'linkedin-learning-review': {
    id: 'learn_5',
    slug: 'linkedin-learning-review',
    name: 'LinkedIn Learning',
    category: 'Professional Development',
    platform: 'Web, iOS, Android',
    subjects: ['Leadership', 'Software Skills', 'Creative Skills', 'Business'],
    rating: 4.4,
    description:
      "Combines Lynda.com's library with LinkedIn's professional network. Certificates are automatically added to your profile.",
    author: {
      name: 'Tunde "Gadget" Bakare',
      role: 'Fintech Analyst',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    publishDate: 'February 8, 2026',
    heroImage:
      'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    specs: {
      pricingModel: 'Subscription (Monthly/Annual)',
      offlineMode: true,
      certificateAvailable: true,
      interactiveLessons: false,
      features: ['LinkedIn Profile Integration', 'Exercise Files', 'Q&A', 'Learning Paths'],
    },
    pros: [
      'Seamless career integration',
      'High production quality',
      'Unlimited access to all courses',
    ],
    cons: ['Requires monthly subscription', 'Less academic than Coursera'],
    verdict: 'Best for professionals looking to stay relevant in their industry.',
  },
  'edx-review': {
    id: 'learn_6',
    slug: 'edx-review',
    name: 'edX',
    category: 'University Courses',
    platform: 'Web, iOS, Android',
    subjects: ['Engineering', 'History', 'Biology', 'Data Analysis'],
    rating: 4.6,
    description:
      "Founded by Harvard and MIT, edX hosts high-level courses from the world's best universities. Strong focus on academic rigor.",
    author: {
      name: 'Tunde "Gadget" Bakare',
      role: 'Fintech Analyst',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    publishDate: 'February 7, 2026',
    heroImage:
      'https://images.unsplash.com/photo-1513258496099-48168024aec0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    specs: {
      pricingModel: 'Paid (Audit options available)',
      offlineMode: false,
      certificateAvailable: true,
      interactiveLessons: false,
      features: [
        'MicroMasters Programs',
        'Executive Education',
        'University Credit',
        'Open Source Platform',
      ],
    },
    pros: ['Prestigious partner institutions', 'Challenging coursework', 'Open to audit for free'],
    cons: ['Certificates are pricey', 'Mobile app experience is basic'],
    verdict: 'Excellent for serious students who want a university-level challenge.',
  },
  'brilliant-review': {
    id: 'learn_7',
    slug: 'brilliant-review',
    name: 'Brilliant',
    category: 'STEM Learning',
    platform: 'Web, iOS, Android',
    subjects: ['Mathematics', 'Physics', 'Computer Science', 'Logic'],
    rating: 4.8,
    description:
      'Learn through problem-solving. Brilliant focuses on building intuition through interactive, visual lessons in math and science.',
    author: {
      name: 'Tunde "Gadget" Bakare',
      role: 'Fintech Analyst',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    publishDate: 'February 6, 2026',
    heroImage:
      'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    specs: {
      pricingModel: 'Subscription',
      offlineMode: true,
      certificateAvailable: false,
      interactiveLessons: true,
      features: [
        'Interactive Problems',
        'Daily Challenges',
        'Visual Explanations',
        'Community Discussion',
      ],
    },
    pros: [
      'Beautifully designed interactive content',
      'Focuses on "why" not just "how"',
      'Great for critical thinking',
    ],
    cons: ['Expensive subscription', 'No video lectures (intentional)'],
    verdict: 'The best way to master STEM subjects through active learning.',
  },
  'masterclass-review': {
    id: 'learn_8',
    slug: 'masterclass-review',
    name: 'MasterClass',
    category: 'Creative Arts & Lifestyle',
    platform: 'Web, Apple TV, iOS, Android',
    subjects: ['Writing', 'Cooking', 'Filmmaking', 'Acting'],
    rating: 4.3,
    description:
      'Learn from the best in the world. Classes taught by celebrities like Gordon Ramsay, Natalie Portman, and Neil Gaiman.',
    author: {
      name: 'Tunde "Gadget" Bakare',
      role: 'Fintech Analyst',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    publishDate: 'February 5, 2026',
    heroImage:
      'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    specs: {
      pricingModel: 'Annual Subscription',
      offlineMode: true,
      certificateAvailable: false,
      interactiveLessons: false,
      features: [
        'Cinematic Production',
        'Downloadable Workbooks',
        'Audio Mode',
        'Community Access',
      ],
    },
    pros: [
      'Unparalleled celebrity instructors',
      'Incredible production value',
      'Inspiring storytelling',
    ],
    cons: ['More entertainment than deep learning', 'Expensive annual-only pricing'],
    verdict: 'A premium, inspiring look into the minds of masters, best for creative inspiration.',
  },
  'sololearn-review': {
    id: 'learn_9',
    slug: 'sololearn-review',
    name: 'Sololearn',
    category: 'Coding',
    platform: 'iOS, Android, Web',
    subjects: ['Python', 'JavaScript', 'HTML/CSS', 'SQL'],
    rating: 4.5,
    description:
      'A social platform for learning to code. It breaks down complex programming concepts into bite-sized lessons and quizzes.',
    author: {
      name: 'Tunde "Gadget" Bakare',
      role: 'Fintech Analyst',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    publishDate: 'February 4, 2026',
    heroImage:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    specs: {
      pricingModel: 'Freemium',
      offlineMode: true,
      certificateAvailable: true,
      interactiveLessons: true,
      features: ['Code Playground', 'Peer Challenges', 'Discussion Forum', 'Mobile Code Editor'],
    },
    pros: ['Excellent mobile coding experience', 'Supportive community', 'Free certificates'],
    cons: ['Limited advanced content', 'Frequent ads on free version'],
    verdict: 'The best mobile app for beginning your coding journey.',
  },
  'ulesson-review': {
    id: 'learn_10',
    slug: 'ulesson-review',
    name: 'uLesson',
    category: 'African K-12',
    platform: 'Android, iOS, Web',
    subjects: ['Mathematics', 'Physics', 'Biology', 'JAMB/WAEC Prep'],
    rating: 4.7,
    description:
      "Nigeria's leading edtech app, tailored for the African curriculum. Provides video lessons and practice tests for primary and secondary school students.",
    author: {
      name: 'Tunde "Gadget" Bakare',
      role: 'Fintech Analyst',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    publishDate: 'February 3, 2026',
    heroImage:
      'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    specs: {
      pricingModel: 'Subscription',
      offlineMode: true,
      certificateAvailable: false,
      interactiveLessons: true,
      features: ['Localized Content', 'Live Classes', 'Mock Exams', 'Performance Tracking'],
    },
    pros: [
      'Curriculum-aligned (WAEC/JAMB)',
      'High-quality localized animations',
      'Offline video downloads',
    ],
    cons: ['Requires subscription for full access', 'Mostly focused on West African exams'],
    verdict: 'The essential companion for any Nigerian student preparing for national exams.',
  },
};
