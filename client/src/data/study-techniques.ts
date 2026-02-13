export interface StudyTechnique {
  id: string;
  slug: string;
  name: string;
  category: 'Focus' | 'Memory' | 'Planning' | 'Review' | 'Reading';
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  rating: number;
  description: string;
  heroImage: string;
  benefits: string[];
  steps: {
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

export const studyTechniques: Record<string, StudyTechnique> = {
  'pomodoro-technique': {
    id: 'st_1',
    slug: 'pomodoro-technique',
    name: 'Pomodoro Technique',
    category: 'Focus',
    difficulty: 'Beginner',
    rating: 4.8,
    description: 'A time management method that uses a timer to break work into intervals, traditionally 25 minutes in length, separated by short breaks.',
    heroImage: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    benefits: [
      'Eliminates burnout',
      'Manages distractions',
      'Creates a sense of urgency',
      'Improves focus and concentration'
    ],
    steps: [
      { title: 'Choose a Task', content: 'Select a single task you want to focus on.' },
      { title: 'Set a Timer', content: 'Set your timer for 25 minutes.' },
      { title: 'Work Until It Rings', content: 'Focus solely on the task until the timer goes off.' },
      { title: 'Take a Short Break', content: 'Take a 5-minute break to stretch or grab water.' },
      { title: 'Repeat & Long Break', content: 'After 4 Pomodoros, take a longer 15-30 minute break.' }
    ],
    author: {
      name: 'Dr. Emily Carter',
      role: 'Educational Psychologist',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'February 12, 2026'
  },
  'active-recall': {
    id: 'st_4',
    slug: 'active-recall',
    name: 'Active Recall',
    category: 'Memory',
    difficulty: 'Intermediate',
    rating: 4.9,
    description: 'The practice of actively stimulating memory during the learning process by testing yourself.',
    heroImage: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    benefits: [
      'Stronger neural connections',
      'Immediate feedback on knowledge',
      'Long-term retention improvement',
      'Better exam performance'
    ],
    steps: [
      { title: 'Read Once', content: 'Read the material once to understand the main concepts.' },
      { title: 'Close the Book', content: 'Close your book or notes completely.' },
      { title: 'Retrieve', content: 'Write down or say out loud everything you can remember.' },
      { title: 'Check & Repeat', content: 'Open the book to see what you missed and repeat the process.' }
    ],
    author: {
      name: 'Dr. Mark Sloan',
      role: 'Cognitive Scientist',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'February 11, 2026'
  },
  'blurting-method': {
    id: 'st_5',
    slug: 'blurting-method',
    name: 'Blurting Method',
    category: 'Review',
    difficulty: 'Beginner',
    rating: 4.6,
    description: 'A popular revision technique that involves "blurting" out everything you know about a topic on paper.',
    heroImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    benefits: [
      'Quick knowledge audit',
      'Reduces exam anxiety',
      'Highly effective for heavy content',
      'Low preparation required'
    ],
    steps: [
      { title: 'Topic Selection', content: 'Choose a specific topic or chapter to revise.' },
      { title: 'The Blurt', content: 'Set a timer and write everything you remember without looking at notes.' },
      { title: 'Gap Analysis', content: 'Use a different color pen to add missing information from your textbook.' },
      { title: 'Targeted Review', content: 'Study only the parts you missed or got wrong.' }
    ],
    author: {
      name: 'Sarah Jenkins',
      role: 'Learning Coach',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'February 10, 2026'
  },
  'sq3r-method': {
    id: 'st_6',
    slug: 'sq3r-method',
    name: 'SQ3R Method',
    category: 'Reading',
    difficulty: 'Intermediate',
    rating: 4.5,
    description: 'A reading comprehension method named for its five steps: Survey, Question, Read, Recite, and Review.',
    heroImage: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    benefits: [
      'Deep reading comprehension',
      'Information organization',
      'Better critical thinking',
      'Efficient study sessions'
    ],
    steps: [
      { title: 'Survey', content: 'Scan the headings, subheadings, and images in the chapter.' },
      { title: 'Question', content: 'Turn headings into questions you want to answer.' },
      { title: 'Read', content: 'Read the section actively looking for answers to your questions.' },
      { title: 'Recite', content: 'Summarize what you read in your own words.' },
      { title: 'Review', content: 'Go back over the material to solidify understanding.' }
    ],
    author: {
      name: 'Prof. Alice Green',
      role: 'Literacy Specialist',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'February 09, 2026'
  },
  'leitner-system': {
    id: 'st_7',
    slug: 'leitner-system',
    name: 'Leitner System',
    category: 'Memory',
    difficulty: 'Advanced',
    rating: 4.8,
    description: 'An efficient way of using flashcards with spaced repetition using multiple boxes.',
    heroImage: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    benefits: [
      'Focuses on difficult material',
      'Systematic review process',
      'Proven memory retention',
      'Highly organized study'
    ],
    steps: [
      { title: 'Box Setup', content: 'Create 3-5 boxes for your flashcards.' },
      { title: 'Daily Review', content: 'All new cards start in Box 1 and are reviewed daily.' },
      { title: 'Promotion', content: 'Correctly answered cards move to Box 2 (reviewed every 2 days).' },
      { title: 'Demotion', content: 'Any card you get wrong goes back to Box 1 immediately.' }
    ],
    author: {
      name: 'James Leitner',
      role: 'Memory Researcher',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'February 08, 2026'
  },
  'mind-mapping': {
    id: 'st_8',
    slug: 'mind-mapping',
    name: 'Mind Mapping',
    category: 'Planning',
    difficulty: 'Beginner',
    rating: 4.7,
    description: 'A visual way to organize information into a hierarchy, showing relationships among pieces of the whole.',
    heroImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    benefits: [
      'Visual organization',
      'Creative brainstorming',
      'Memory association',
      'Big picture understanding'
    ],
    steps: [
      { title: 'Central Idea', content: 'Start in the center of a blank page with the main topic.' },
      { title: 'Main Branches', content: 'Add branches for each main sub-topic.' },
      { title: 'Sub-branches', content: 'Add smaller branches for supporting details.' },
      { title: 'Color & Images', content: 'Use colors and simple drawings to make it more memorable.' }
    ],
    author: {
      name: 'Tony Buzan',
      role: 'Learning Expert',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'February 07, 2026'
  },
  'cornell-note-taking': {
    id: 'st_9',
    slug: 'cornell-note-taking',
    name: 'Cornell Note-Taking',
    category: 'Reading',
    difficulty: 'Intermediate',
    rating: 4.6,
    description: 'A systematic format for condensing and organizing notes without laborious recopying.',
    heroImage: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    benefits: [
      'Organized lecture notes',
      'Built-in review system',
      'Quick summarization',
      'Active listening aid'
    ],
    steps: [
      { title: 'Page Setup', content: 'Divide your page into three sections: Cue, Note, and Summary.' },
      { title: 'Record', content: 'Take notes in the large Note section during class.' },
      { title: 'Question', content: 'Write cues or questions in the Cue column after class.' },
      { title: 'Summarize', content: 'Write a brief summary at the bottom of the page.' }
    ],
    author: {
      name: 'Dr. Walter Pauk',
      role: 'Education Professor',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'February 06, 2026'
  },
  'eat-the-frog': {
    id: 'st_10',
    slug: 'eat-the-frog',
    name: 'Eat the Frog',
    category: 'Planning',
    difficulty: 'Beginner',
    rating: 4.4,
    description: 'A productivity method that encourages you to tackle your hardest task first thing in the morning.',
    heroImage: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    benefits: [
      'Eliminates procrastination',
      'Increases morning focus',
      'Creates momentum',
      'Reduces end-of-day stress'
    ],
    steps: [
      { title: 'Identify the Frog', content: 'Choose the one task you are most likely to procrastinate on.' },
      { title: 'Do it First', content: 'Start this task before anything else in your study session.' },
      { title: 'No Distractions', content: 'Do not check emails or phones until the frog is eaten.' },
      { title: 'Reward Yourself', content: 'Move on to easier tasks with a sense of accomplishment.' }
    ],
    author: {
      name: 'Brian Tracy',
      role: 'Productivity Guru',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'February 05, 2026'
  }
};  'feynman-technique': {
    id: 'st_2',
    slug: 'feynman-technique',
    name: 'Feynman Technique',
    category: 'Review',
    difficulty: 'Intermediate',
    rating: 4.9,
    description: 'A mental model named after physicist Richard Feynman, designed to help you learn a concept deeply by explaining it in simple terms.',
    heroImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    benefits: [
      'Identifies gaps in knowledge',
      'Simplifies complex ideas',
      'Ensures long-term retention',
      'Develops communication skills'
    ],
    steps: [
      { title: 'Identify the Concept', content: 'Write the name of the concept at the top of a blank sheet of paper.' },
      { title: 'Teach it to a Child', content: 'Explain the concept as if you were teaching it to someone with no background in the subject.' },
      { title: 'Review & Refine', content: 'Go back to your source material when you get stuck or find gaps in your explanation.' },
      { title: 'Simplify Further', content: 'Use analogies and clear language to further simplify your explanation.' }
    ],
    author: {
      name: 'Prof. David Miller',
      role: 'Learning Scientist',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'February 10, 2026'
  },
  'spaced-repetition': {
    id: 'st_3',
    slug: 'spaced-repetition',
    name: 'Spaced Repetition',
    category: 'Memory',
    difficulty: 'Advanced',
    rating: 4.7,
    description: 'A learning technique that involves reviewing information at increasing intervals to leverage the psychological spacing effect.',
    heroImage: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    benefits: [
      'Combats the forgetting curve',
      'Optimizes study time',
      'Creates durable memories',
      'Ideal for vocabulary and facts'
    ],
    steps: [
      { title: 'Create Flashcards', content: 'Break information into small, testable chunks on flashcards.' },
      { title: 'Initial Review', content: 'Review your new cards for the first time.' },
      { title: 'Graduated Intervals', content: 'Review successful cards after 1 day, then 3 days, 1 week, etc.' },
      { title: 'Reset on Failure', content: 'If you forget a card, move it back to the daily review pile.' }
    ],
    author: {
      name: 'Dr. Emily Carter',
      role: 'Educational Psychologist',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'February 08, 2026'
  },
  'active-recall': {
    id: 'st_4',
    slug: 'active-recall',
    name: 'Active Recall',
    category: 'Review',
    difficulty: 'Intermediate',
    rating: 4.9,
    description: 'The process of actively stimulating memory during the learning process by testing yourself rather than passively reviewing notes.',
    heroImage: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    benefits: [
      'Stronger neural connections',
      'Realistic self-assessment',
      'Saves time by focusing on weaknesses',
      'Highly effective for exams'
    ],
    steps: [
      { title: 'Close the Book', content: 'After reading a section, close the book or cover your notes.' },
      { title: 'Retrieve Information', content: 'Write down or say out loud everything you remember.' },
      { title: 'Check Accuracy', content: 'Open the book to see what you missed or got wrong.' },
      { title: 'Repeat', content: 'Focus on the missed parts until you can recall them perfectly.' }
    ],
    author: {
      name: 'Prof. David Miller',
      role: 'Learning Scientist',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'February 05, 2026'
  },
  'sq3r-method': {
    id: 'st_5',
    slug: 'sq3r-method',
    name: 'SQ3R Method',
    category: 'Reading',
    difficulty: 'Intermediate',
    rating: 4.6,
    description: 'A reading comprehension method named for its five steps: Survey, Question, Read, Recite, and Review.',
    heroImage: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    benefits: [
      'Active reading engagement',
      'Better comprehension',
      'Structured approach to textbooks',
      'Effective note-taking'
    ],
    steps: [
      { title: 'Survey', content: 'Skim the headings, charts, and summaries of the chapter.' },
      { title: 'Question', content: 'Turn headings into questions you expect to be answered.' },
      { title: 'Read', content: 'Read actively to find the answers to your questions.' },
      { title: 'Recite', content: 'Summarize the main points in your own words after each section.' },
      { title: 'Review', content: 'Review the entire chapter once finished to reinforce learning.' }
    ],
    author: {
      name: 'Sarah "Scholar" Adebayo',
      role: 'Academic Coach',
      image: 'https://images.unsplash.com/photo-1531123897727-8f129e16fd3c?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'February 01, 2026'
  }
};
