export interface CoursePlatformReview {
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
  pricing: string;
  courseCount: string;
  certificates: boolean;
  topSubjects: string[];
  pros: string[];
  cons: string[];
  verdict: string;
  bestFor: string;
}

export const coursePlatformReviews: Record<string, CoursePlatformReview> = {
  coursera: {
    id: '1',
    slug: 'coursera',
    name: 'Coursera',
    category: 'University Learning',
    rating: 4.8,
    description:
      'The gold standard for university-backed online education and professional certifications.',
    author: {
      name: 'Sarah Johnson',
      role: 'Education Tech Analyst',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    publishDate: 'Feb 10, 2026',
    heroImage:
      'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    pricing: 'Free to audit, $49+/mo for Plus',
    courseCount: '7,000+',
    certificates: true,
    topSubjects: ['Data Science', 'Business', 'Computer Science', 'Health'],
    pros: [
      'Courses from top-tier universities (Stanford, Yale)',
      'Industry-recognized professional certificates',
      'High-quality video production and assessments',
      'Financial aid available for most courses',
    ],
    cons: [
      'Individual course certificates can be expensive',
      'Peer-graded assignments can be hit or miss',
      'Platform interface can feel overwhelming',
    ],
    verdict:
      'Coursera remains the best choice for learners seeking academic rigor and credentials that hold weight in the job market.',
    bestFor: 'Professional career pivoters and academic learners.',
  },
  udemy: {
    id: '2',
    slug: 'udemy',
    name: 'Udemy',
    category: 'Skill-Based Learning',
    rating: 4.5,
    description:
      'A massive marketplace for practical skills, from coding to bread baking, at affordable prices.',
    author: {
      name: 'Michael Chen',
      role: 'Skill Development Specialist',
      image:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    publishDate: 'Feb 05, 2026',
    heroImage:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    pricing: 'Pay-per-course ($10 - $200)',
    courseCount: '210,000+',
    certificates: true,
    topSubjects: ['Web Development', 'Photography', 'Marketing', 'Personal Development'],
    pros: [
      'Incredible variety of niche topics',
      'Frequent sales making courses very affordable',
      'Lifetime access to purchased content',
      'Practical, project-based learning approach',
    ],
    cons: [
      'Variable quality due to open marketplace',
      'Certificates are not accredited',
      'No subscription option for individuals',
    ],
    verdict:
      'The ultimate destination for learning specific, practical skills quickly without breaking the bank.',
    bestFor: 'Self-taught developers and hobbyists.',
  },
  pluralsight: {
    id: '3',
    slug: 'pluralsight',
    name: 'Pluralsight',
    category: 'Enterprise Tech',
    rating: 4.7,
    description:
      'A deep-dive technical platform focused on IT, software development, and cybersecurity.',
    author: {
      name: 'David Okafor',
      role: 'Senior Software Engineer',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    publishDate: 'Jan 28, 2026',
    heroImage:
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    pricing: '$29/mo or $299/year',
    courseCount: '7,000+',
    certificates: true,
    topSubjects: ['Cloud Computing', 'Cybersecurity', 'Software Dev', 'IT Ops'],
    pros: [
      'Industry-leading technical content',
      'Skill assessments (Skill IQ) to track progress',
      'Curated learning paths for specific roles',
      'Excellent enterprise features for teams',
    ],
    cons: [
      'Content can become outdated quickly in tech',
      'Limited non-technical subjects',
      'Mobile app experience is basic',
    ],
    verdict:
      'If you are a serious technologist or an IT team, Pluralsight is the most comprehensive tool for staying current.',
    bestFor: 'IT professionals and engineering teams.',
  },
  'linkedin-learning': {
    id: '4',
    slug: 'linkedin-learning',
    name: 'LinkedIn Learning',
    category: 'Professional Development',
    rating: 4.3,
    description:
      'Integrated professional learning platform with a focus on business and soft skills.',
    author: {
      name: 'Grace Adewale',
      role: 'HR Consultant',
      image:
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    publishDate: 'Feb 11, 2026',
    heroImage:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    pricing: '$39/mo (Included with Premium)',
    courseCount: '20,000+',
    certificates: true,
    topSubjects: ['Leadership', 'Management', 'Soft Skills', 'Microsoft Office'],
    pros: [
      'Seamless integration with LinkedIn profile',
      'High production quality across all courses',
      'Personalized recommendations based on job title',
      'Offline viewing on mobile app',
    ],
    cons: [
      'Lacks deep technical complexity',
      'Subscription-only model (no single course buy)',
      'Certificates are common and lack exclusivity',
    ],
    verdict:
      'The best platform for corporate professionals looking to enhance their management and soft skills.',
    bestFor: 'Corporate employees and job seekers.',
  },
  edx: {
    id: '5',
    slug: 'edx',
    name: 'edX',
    category: 'Academic Learning',
    rating: 4.6,
    description:
      'Non-profit platform founded by Harvard and MIT, offering rigorous academic courses.',
    author: {
      name: 'Sarah Johnson',
      role: 'Education Tech Analyst',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    publishDate: 'Feb 01, 2026',
    heroImage:
      'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    pricing: 'Free to audit, $50-$300 for certificates',
    courseCount: '4,000+',
    certificates: true,
    topSubjects: ['Humanities', 'Natural Sciences', 'Engineering', 'Law'],
    pros: [
      'Prestigious institutional partners (Harvard, MIT, Oxford)',
      'MicroMasters programs for university credit',
      'Open-source platform philosophy',
      'Focus on research-based learning',
    ],
    cons: [
      'Interface can be less intuitive than Coursera',
      'Courses are often very difficult and time-consuming',
      'Fewer "fun" or hobbyist courses',
    ],
    verdict:
      'The premier choice for serious academic study and those looking for legitimate university credits.',
    bestFor: 'Graduate students and academic researchers.',
  },
  skillshare: {
    id: '6',
    slug: 'skillshare',
    name: 'Skillshare',
    category: 'Creative Arts',
    rating: 4.4,
    description:
      'A community-based learning platform focused on creativity, design, and entrepreneurship.',
    author: {
      name: 'Michael Chen',
      role: 'Skill Development Specialist',
      image:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    publishDate: 'Jan 20, 2026',
    heroImage:
      'https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    pricing: '$168/year subscription',
    courseCount: '35,000+',
    certificates: false,
    topSubjects: ['Graphic Design', 'Illustration', 'Photography', 'Video Editing'],
    pros: [
      'Excellent for visual and creative learners',
      'Short, digestible project-based classes',
      'Active community and teacher feedback',
      'Low annual cost for unlimited access',
    ],
    cons: [
      'No formal certificates of completion',
      'Quality varies significantly between teachers',
      'Not suitable for deep technical or academic learning',
    ],
    verdict:
      'The best value for money for creatives looking to expand their toolkit and join a community.',
    bestFor: 'Designers, artists, and creative entrepreneurs.',
  },
  masterclass: {
    id: '7',
    slug: 'masterclass',
    name: 'MasterClass',
    category: 'Inspirational Learning',
    rating: 4.2,
    description: 'Learn from the worlds best in highly produced, cinematic video lessons.',
    author: {
      name: 'Grace Adewale',
      role: 'HR Consultant',
      image:
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    publishDate: 'Feb 08, 2026',
    heroImage:
      'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    pricing: '$180/year (billed annually)',
    courseCount: '180+',
    certificates: false,
    topSubjects: ['Cooking', 'Writing', 'Acting', 'Leadership'],
    pros: [
      'A-list celebrity instructors (Gordon Ramsay, Neil Gaiman)',
      'Stunning, Netflix-quality cinematography',
      'Highly inspiring and motivating content',
      'Includes detailed downloadable workbooks',
    ],
    cons: [
      'Lacks practical, step-by-step instruction',
      'No interaction with instructors',
      'Limited library compared to other platforms',
    ],
    verdict:
      'More entertainment than education, but unparalleled for inspiration from the worlds top 1%.',
    bestFor: 'Aspirational learners and fans of specific icons.',
  },
  udacity: {
    id: '8',
    slug: 'udacity',
    name: 'Udacity',
    category: 'Tech Bootcamps',
    rating: 4.5,
    description: 'Home of the "Nanodegree," focused on job-ready skills in emerging technology.',
    author: {
      name: 'David Okafor',
      role: 'Senior Software Engineer',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    publishDate: 'Jan 15, 2026',
    heroImage:
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    pricing: '$399/mo per Nanodegree',
    courseCount: '200+',
    certificates: true,
    topSubjects: ['AI', 'Self-Driving Cars', 'Data Engineering', 'Blockchain'],
    pros: [
      'Intensive, project-based curriculum',
      'Real-world project reviews by experts',
      'Strong career services and job placement help',
      'Partnerships with Google, AWS, and Meta',
    ],
    cons: [
      'Extremely expensive compared to Coursera',
      'High time commitment required',
      'Limited course variety outside of high-tech',
    ],
    verdict:
      'The best platform for those who want a bootcamp-style experience with personal feedback in tech.',
    bestFor: 'Career switchers looking for high-paying tech roles.',
  },
  codecademy: {
    id: '9',
    slug: 'codecademy',
    name: 'Codecademy',
    category: 'Interactive Coding',
    rating: 4.6,
    description:
      'Interactive, browser-based coding platform that makes learning to program accessible.',
    author: {
      name: 'David Okafor',
      role: 'Senior Software Engineer',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    publishDate: 'Feb 03, 2026',
    heroImage:
      'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    pricing: 'Free basic, $19.99/mo for Pro',
    courseCount: '1,000+',
    certificates: true,
    topSubjects: ['Python', 'JavaScript', 'SQL', 'Web Development'],
    pros: [
      'Learn by doing with in-browser code editor',
      'Structured "Career Paths" take you from zero to hero',
      'Immediate feedback on code exercises',
      'Gamified experience keeps you motivated',
    ],
    cons: [
      'Can feel "hand-holdy" for some learners',
      "Doesn't teach local environment setup well",
      'Projects can be simplistic',
    ],
    verdict:
      'The absolute best starting point for anyone who wants to write their first line of code.',
    bestFor: 'Absolute beginners in programming.',
  },
  datacamp: {
    id: '10',
    slug: 'datacamp',
    name: 'DataCamp',
    category: 'Data Science',
    rating: 4.7,
    description: 'Specialized interactive learning platform for data science, AI, and analytics.',
    author: {
      name: 'Sarah Johnson',
      role: 'Education Tech Analyst',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    publishDate: 'Jan 10, 2026',
    heroImage:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    pricing: '$25/mo (billed annually)',
    courseCount: '400+',
    certificates: true,
    topSubjects: ['R', 'Python', 'Power BI', 'Tableau'],
    pros: [
      'Highly focused on data science and analytics',
      'Interactive coding in the browser (no setup needed)',
      'Excellent skill and career tracks',
      'Real-world data projects',
    ],
    cons: [
      'Very narrow focus (only data)',
      'Videos are very short (sometimes too short)',
      'Subscription can be pricey if not used daily',
    ],
    verdict:
      'The definitive platform for anyone looking to master the tools of modern data analysis.',
    bestFor: 'Aspiring data scientists and analysts.',
  },
};
