export interface TechBookReview {
  id: string;
  slug: string;
  name: string;
  author_book: string;
  category: 'Software Engineering' | 'Architecture' | 'Data Science' | 'Cybersecurity' | 'Cloud' | 'DevOps';
  rating: number;
  description: string;
  author: {
    name: string;
    role: string;
    image: string;
  };
  publishDate: string;
  heroImage: string;
  keyConcepts: string[];
  bestFor: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  pages: number;
  pros: string[];
  cons: string[];
  verdict: string;
}

export const techBookReviews: Record<string, TechBookReview> = {
  'clean-code': {
    id: 'tb_1',
    slug: 'clean-code',
    name: 'Clean Code',
    author_book: 'Robert C. Martin',
    category: 'Software Engineering',
    rating: 4.8,
    description: 'A handbook of agile software craftsmanship that teaches you how to write code that is easy to read, maintain, and extend.',
    author: {
      name: 'Tunde "Gadget" Bakare',
      role: 'Fintech Analyst',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'February 12, 2026',
    heroImage: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    keyConcepts: [
      'Meaningful Names',
      'Small Functions',
      'Comments as Failures',
      'The Boy Scout Rule'
    ],
    bestFor: 'Developers looking to professionalize their coding style.',
    difficulty: 'Intermediate',
    pages: 464,
    pros: ['Timeless principles', 'Extremely practical', 'Great examples'],
    cons: ['Java-centric examples', 'Some rules are dogmatic'],
    verdict: 'Essential reading for every serious programmer.'
  },
  'pragmatic-programmer': {
    id: 'tb_2',
    slug: 'pragmatic-programmer',
    name: 'The Pragmatic Programmer',
    author_book: 'Andrew Hunt & David Thomas',
    category: 'Software Engineering',
    rating: 4.9,
    description: 'One of the most significant books in software development, providing a journey from journeyman to master.',
    author: {
      name: 'Tunde "Gadget" Bakare',
      role: 'Fintech Analyst',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'February 10, 2026',
    heroImage: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    keyConcepts: [
      'DRY (Don\'t Repeat Yourself)',
      'Orthogonality',
      'Tracer Bullets',
      'Design by Contract'
    ],
    bestFor: 'Developers at any stage who want to think more effectively about code.',
    difficulty: 'All Levels',
    pages: 352,
    pros: ['Broad mindset shift', 'Highly readable', 'Practical tips'],
    cons: ['Broad scope might miss specific tech details'],
    verdict: 'The book that changes how you think about your career.'
  },
  'design-patterns': {
    id: 'tb_3',
    slug: 'design-patterns',
    name: 'Design Patterns (GoF)',
    author_book: 'Erich Gamma et al.',
    category: 'Architecture',
    rating: 4.7,
    description: 'The foundational book that introduced design patterns into the software engineering lexicon.',
    author: {
      name: 'Tunde "Gadget" Bakare',
      role: 'Fintech Analyst',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'February 8, 2026',
    heroImage: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    keyConcepts: [
      'Creational Patterns',
      'Structural Patterns',
      'Behavioral Patterns',
      'Object-Oriented Design'
    ],
    bestFor: 'Architects and senior developers.',
    difficulty: 'Advanced',
    pages: 395,
    pros: ['Industry standard', 'Rigorous definitions', 'Solved many common problems'],
    cons: ['Very academic and dense', 'C++ and Smalltalk examples'],
    verdict: 'A tough read but a necessary reference for serious architecture.'
  },
  'refactoring': {
    id: 'tb_4',
    slug: 'refactoring',
    name: 'Refactoring',
    author_book: 'Martin Fowler',
    category: 'Software Engineering',
    rating: 4.9,
    description: 'The definitive guide to improving the design of existing code without changing its external behavior.',
    author: {
      name: 'Tunde "Gadget" Bakare',
      role: 'Fintech Analyst',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'February 6, 2026',
    heroImage: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    keyConcepts: [
      'Code Smells',
      'Composing Methods',
      'Moving Features Between Objects',
      'Simplifying Conditional Expressions'
    ],
    bestFor: 'Developers working on legacy codebases.',
    difficulty: 'Intermediate',
    pages: 448,
    pros: ['Step-by-step instructions', 'JavaScript examples (2nd ed)', 'Immediate ROI'],
    cons: ['Catalog format can be dry'],
    verdict: 'The secret weapon for maintaining long-term project health.'
  },
  'ddi': {
    id: 'tb_5',
    slug: 'designing-data-intensive-applications',
    name: 'Designing Data-Intensive Applications',
    author_book: 'Martin Kleppmann',
    category: 'Architecture',
    rating: 5.0,
    description: 'The "missing link" between database theory and building scalable, reliable distributed systems.',
    author: {
      name: 'Tunde "Gadget" Bakare',
      role: 'Fintech Analyst',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'February 4, 2026',
    heroImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    keyConcepts: [
      'Reliability, Scalability, Maintainability',
      'Storage and Retrieval',
      'Distributed Data',
      'Derived Data'
    ],
    bestFor: 'Backend and data engineers building at scale.',
    difficulty: 'Advanced',
    pages: 611,
    pros: ['Incredibly thorough', 'Clear explanations of complex topics', 'Beautiful diagrams'],
    cons: ['Very long', 'Requires significant time investment'],
    verdict: 'The modern bible of backend engineering.'
  },
  'phoenix-project': {
    id: 'tb_6',
    slug: 'phoenix-project',
    name: 'The Phoenix Project',
    author_book: 'Gene Kim et al.',
    category: 'DevOps',
    rating: 4.8,
    description: 'A novel about IT, DevOps, and helping your business win. A story-driven look at the Three Ways.',
    author: {
      name: 'Tunde "Gadget" Bakare',
      role: 'Fintech Analyst',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'February 2, 2026',
    heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    keyConcepts: [
      'The Three Ways',
      'The Four Types of Work',
      'Theory of Constraints',
      'Continuous Delivery'
    ],
    bestFor: 'IT managers and developers moving to DevOps.',
    difficulty: 'Beginner',
    pages: 384,
    pros: ['Entertaining narrative', 'Relatable characters', 'Low barrier to entry'],
    cons: ['Fictionalized (not a technical manual)', 'Oversimplifies some fixes'],
    verdict: 'The best way to understand the "Why" behind DevOps.'
  },
  'site-reliability-engineering': {
    id: 'tb_7',
    slug: 'site-reliability-engineering',
    name: 'Site Reliability Engineering',
    author_book: 'Betsy Beyer et al. (Google)',
    category: 'Cloud',
    rating: 4.7,
    description: 'How Google runs production systems. The book that defined the SRE role.',
    author: {
      name: 'Tunde "Gadget" Bakare',
      role: 'Fintech Analyst',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'January 31, 2026',
    heroImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    keyConcepts: [
      'Service Level Objectives (SLOs)',
      'Error Budgets',
      'Eliminating Toil',
      'Automation'
    ],
    bestFor: 'Operations engineers and developers interested in reliability.',
    difficulty: 'Intermediate',
    pages: 552,
    pros: ['Real-world battle stories', 'Proven methodology', 'Available free online'],
    cons: ['Some tools are Google-internal only', 'Scale might be overkill for small teams'],
    verdict: 'The blueprint for modern operational excellence.'
  },
  'cracking-the-coding-interview': {
    id: 'tb_8',
    slug: 'cracking-the-coding-interview',
    name: 'Cracking the Coding Interview',
    author_book: 'Gayle Laakmann McDowell',
    category: 'Software Engineering',
    rating: 4.6,
    description: '189 programming questions and solutions to help you prepare for technical interviews at top companies.',
    author: {
      name: 'Tunde "Gadget" Bakare',
      role: 'Fintech Analyst',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'January 29, 2026',
    heroImage: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    keyConcepts: [
      'Big O Notation',
      'Data Structures',
      'Algorithms',
      'System Design'
    ],
    bestFor: 'Job seekers and students.',
    difficulty: 'Intermediate',
    pages: 708,
    pros: ['Comprehensive prep', 'Clear solutions', 'Insight into hiring processes'],
    cons: ['Focuses on interview logic, not daily coding', 'Very heavy book'],
    verdict: 'The mandatory companion for technical interview prep.'
  },
  'mythical-man-month': {
    id: 'tb_9',
    slug: 'mythical-man-month',
    name: 'The Mythical Man-Month',
    author_book: 'Frederick P. Brooks Jr.',
    category: 'Software Engineering',
    rating: 4.5,
    description: 'Essays on software engineering and project management, famous for "Brooks\' Law".',
    author: {
      name: 'Tunde "Gadget" Bakare',
      role: 'Fintech Analyst',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'January 27, 2026',
    heroImage: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    keyConcepts: [
      'Brooks\' Law',
      'No Silver Bullet',
      'The Second-System Effect',
      'Conceptual Integrity'
    ],
    bestFor: 'Project managers and lead developers.',
    difficulty: 'Beginner',
    pages: 336,
    pros: ['Fundamental truths', 'Easy to read', 'Historical perspective'],
    cons: ['Extremely dated tech examples', 'Some concepts feel obvious now (because of this book)'],
    verdict: 'A reminder that software is a human endeavor, not just a technical one.'
  },
  'hands-on-ml': {
    id: 'tb_10',
    slug: 'hands-on-ml-with-scikit-learn',
    name: 'Hands-On Machine Learning',
    author_book: 'Aurélien Géron',
    category: 'Data Science',
    rating: 4.9,
    description: 'A comprehensive guide to building intelligent systems with Scikit-Learn, Keras, and TensorFlow.',
    author: {
      name: 'Tunde "Gadget" Bakare',
      role: 'Fintech Analyst',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'January 25, 2026',
    heroImage: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    keyConcepts: [
      'Supervised vs Unsupervised Learning',
      'Neural Networks',
      'Model Training and Tuning',
      'Computer Vision and NLP'
    ],
    bestFor: 'Aspiring data scientists and ML engineers.',
    difficulty: 'Intermediate',
    pages: 856,
    pros: ['Very practical', 'Up-to-date libraries', 'Covers theory and practice'],
    cons: ['Very math-heavy in parts', 'Huge time commitment required'],
    verdict: 'The best "Zero to Hero" book for modern Machine Learning.'
  }
};
