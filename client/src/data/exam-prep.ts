export interface ExamPrepResource {
  id: string;
  slug: string;
  name: string;
  category: 'National' | 'International' | 'Professional' | 'Postgraduate';
  difficulty: 'Standard' | 'Challenging' | 'Competitive';
  rating: number;
  description: string;
  heroImage: string;
  keyInformation: string[];
  tips: {
    title: string;
    content: string;
  }[];
  author: {
    name: string;
    role: string;
    image: string;
  };
  publishDate: string;
}

export const examPrepResources: Record<string, ExamPrepResource> = {
  'jamb-utme-guide': {
    id: 'ep_1',
    slug: 'jamb-utme-guide',
    name: 'JAMB UTME Guide',
    category: 'National',
    difficulty: 'Competitive',
    rating: 4.9,
    description: 'The Unified Tertiary Matriculation Examination (UTME) is a computer-based standardized examination for prospective undergraduates in Nigeria.',
    heroImage: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    keyInformation: [
      'CBT (Computer Based Test) format',
      '4 subjects including English Language',
      'Valid for one academic year',
      'Minimum score requirements vary by institution'
    ],
    tips: [
      { title: 'Master the Syllabus', content: 'JAMB provides a specific syllabus for each subject. Stick to it strictly.' },
      { title: 'Practice Past Questions', content: 'Use the official JAMB CBT software to familiarize yourself with the interface.' },
      { title: 'Time Management', content: 'Practice answering 180 questions in 120 minutes.' },
      { title: 'Novel Study', content: 'Don\'t forget to read the mandatory English novel recommended for the year.' }
    ],
    author: {
      name: 'Adewale Johnson',
      role: 'Education Consultant',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'February 10, 2026'
  },
  'waec-ssce-prep': {
    id: 'ep_2',
    slug: 'waec-ssce-prep',
    name: 'WAEC SSCE Preparation',
    category: 'National',
    difficulty: 'Standard',
    rating: 4.7,
    description: 'The West African Senior School Certificate Examination (WASSCE) is a type of standardized test in West Africa, taken by students who have completed secondary education.',
    heroImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    keyInformation: [
      'Includes both Theory and Objective questions',
      'Practical examinations for science subjects',
      'Recognized internationally for university admission',
      'Requires a minimum of 8 or 9 subjects'
    ],
    tips: [
      { title: 'Focus on Fundamentals', content: 'WAEC tests your understanding of core concepts from SS1 to SS3.' },
      { title: 'Handwriting & Presentation', content: 'For theory papers, clear handwriting and structured answers earn more marks.' },
      { title: 'Practical Sessions', content: 'Ensure you participate fully in school lab sessions for sciences.' },
      { title: 'Chief Examiner Reports', content: 'Read previous reports to understand common mistakes made by students.' }
    ],
    author: {
      name: 'Mrs. Florence Okon',
      role: 'Senior Examiner',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'February 08, 2026'
  },
  'ielts-academic-mastery': {
    id: 'ep_3',
    slug: 'ielts-academic-mastery',
    name: 'IELTS Academic Mastery',
    category: 'International',
    difficulty: 'Challenging',
    rating: 4.8,
    description: 'The International English Language Testing System (IELTS) is designed to help you work, study or migrate to a country where English is the native language.',
    heroImage: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    keyInformation: [
      'Four sections: Listening, Reading, Writing, Speaking',
      'Band score scale from 0 to 9',
      'Valid for two years',
      'Accepted by over 11,000 organizations globally'
    ],
    tips: [
      { title: 'Understand the Format', content: 'Each section has specific question types. Learn the strategies for each.' },
      { title: 'Vocabulary Building', content: 'Focus on academic collocations and synonyms to improve your writing and speaking.' },
      { title: 'Mock Tests', content: 'Take timed mock tests to build stamina for the 2 hour 45 minute exam.' },
      { title: 'Speaking Practice', content: 'Record yourself speaking and listen for fluency, pronunciation, and grammar.' }
    ],
    author: {
      name: 'Sarah Thompson',
      role: 'IELTS Instructor',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'February 05, 2026'
  },
  'gre-comprehensive-guide': {
    id: 'ep_4',
    slug: 'gre-comprehensive-guide',
    name: 'GRE Comprehensive Guide',
    category: 'Postgraduate',
    difficulty: 'Competitive',
    rating: 4.6,
    description: 'The Graduate Record Examinations (GRE) is a standardized test that is an admission requirement for many graduate schools in the United States and Canada.',
    heroImage: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    keyInformation: [
      'Sections: Analytical Writing, Verbal Reasoning, Quantitative Reasoning',
      'Computer-adaptive format',
      'Valid for five years',
      'Used for Master\'s, MBA, and PhD admissions'
    ],
    tips: [
      { title: 'Quantitative Review', content: 'Brush up on high school math concepts like algebra, geometry, and data analysis.' },
      { title: 'Reading Comprehension', content: 'Read high-level publications like The Economist or Scientific American.' },
      { title: 'Essay Templates', content: 'Develop a structure for both the "Analyze an Issue" and "Analyze an Argument" tasks.' },
      { title: 'Error Log', content: 'Keep track of questions you get wrong and why you missed them.' }
    ],
    author: {
      name: 'Dr. Michael Chen',
      role: 'Admissions Consultant',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'February 01, 2026'
  },
  'neco-senior-school-prep': {
    id: 'ep_5',
    slug: 'neco-senior-school-prep',
    name: 'NECO Senior School Prep',
    category: 'National',
    difficulty: 'Standard',
    rating: 4.5,
    description: 'The National Examinations Council (NECO) is an examination body in Nigeria that conducts the Senior Secondary Certificate Examination (SSCE) in June/July.',
    heroImage: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    keyInformation: [
      'Indigenous Nigerian alternative to WAEC',
      'Widely accepted for local university admission',
      'Practical-oriented assessments',
      'Conducted annually'
    ],
    tips: [
      { title: 'Syllabus Alignment', content: 'Ensure you are using the latest NECO syllabus for your subject areas.' },
      { title: 'Practical Readiness', content: 'NECO practicals can be quite detailed; ensure you know your apparatus and procedures.' },
      { title: 'Time Allocation', content: 'Balance your time between objective and theory questions effectively.' },
      { title: 'Clear Expression', content: 'Focus on clear, concise definitions and explanations in theory papers.' }
    ],
    author: {
      name: 'Babatunde Alabi',
      role: 'Education Officer',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'January 28, 2026'
  }
};
