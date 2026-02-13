export interface StudyGuide {
  id: string;
  slug: string;
  name: string;
  subject: string;
  level: 'High School' | 'Undergraduate' | 'Postgraduate' | 'Professional';
  rating: number;
  description: string;
  heroImage: string;
  topics: {
    title: string;
    summary: string;
  }[];
  author: {
    name: string;
    role: string;
    image: string;
  };
  publishDate: string;
}

export const studyGuides: Record<string, StudyGuide> = {
  'mathematics-fundamentals': {
    id: 'sg_1',
    slug: 'mathematics-fundamentals',
    name: 'Mathematics Fundamentals',
    subject: 'Mathematics',
    level: 'High School',
    rating: 4.8,
    description: 'A comprehensive guide covering core mathematical concepts required for high school and university entrance exams.',
    heroImage: 'https://images.unsplash.com/photo-1509228468518-180dd48a542f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    topics: [
      { title: 'Algebra & Equations', summary: 'Mastering linear, quadratic, and simultaneous equations.' },
      { title: 'Calculus Basics', summary: 'Introduction to differentiation and integration for real-world applications.' },
      { title: 'Geometry & Trigonometry', summary: 'Understanding shapes, angles, and trigonometric identities.' }
    ],
    author: {
      name: 'Dr. Sarah Okafor',
      role: 'Mathematics Professor',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'February 10, 2026'
  },
  'physics-concepts-simplified': {
    id: 'sg_2',
    slug: 'physics-concepts-simplified',
    name: 'Physics Concepts Simplified',
    subject: 'Physics',
    level: 'High School',
    rating: 4.7,
    description: 'Breaking down complex physics laws into easy-to-understand modules with practical examples.',
    heroImage: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    topics: [
      { title: 'Mechanics', summary: 'Force, motion, and energy principles.' },
      { title: 'Electromagnetism', summary: 'How electricity and magnetism interact in our modern world.' },
      { title: 'Modern Physics', summary: 'Introduction to quantum mechanics and relativity.' }
    ],
    author: {
      name: 'Engr. David Balogun',
      role: 'Physics Educator',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'February 08, 2026'
  }
};
