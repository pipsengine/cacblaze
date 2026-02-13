export interface EducationalBook {
  id: string;
  slug: string;
  title: string;
  author: string;
  category: string;
  rating: number;
  description: string;
  reviewer: {
    name: string;
    role: string;
    image: string;
  };
  publishDate: string;
  heroImage: string;
  keyTakeaways: string[];
  whoShouldRead: string;
  pros: string[];
  cons: string[];
  verdict: string;
}

export const educationalBooks: Record<string, EducationalBook> = {
  'deep-work': {
    id: 'book_1',
    slug: 'deep-work',
    title: 'Deep Work',
    author: 'Cal Newport',
    category: 'Productivity',
    rating: 4.9,
    description:
      'Rules for focused success in a distracted world. This book argues that the ability to focus without distraction is becoming increasingly rare and valuable.',
    reviewer: {
      name: 'Tunde "Gadget" Bakare',
      role: 'Fintech Analyst',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    publishDate: 'February 12, 2026',
    heroImage:
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    keyTakeaways: [
      'Deep work is the ability to focus without distraction on a cognitively demanding task.',
      'Shallow work is non-cognitively demanding, logistical-style work, often performed while distracted.',
      'To produce at your peak level you need to work for extended periods with full concentration.',
      'The ability to perform deep work is becoming increasingly rare exactly at the same time it is becoming increasingly valuable.',
    ],
    whoShouldRead:
      'Knowledge workers, students, and anyone looking to improve their focus and productivity in a digital age.',
    pros: ['Actionable strategies', 'Research-backed arguments', 'Timely and relevant'],
    cons: [
      'Can feel a bit repetitive',
      'Some suggestions are hard to implement in traditional offices',
    ],
    verdict: 'A must-read for anyone serious about high-level output and professional mastery.',
  },
  'atomic-habits': {
    id: 'book_2',
    slug: 'atomic-habits',
    title: 'Atomic Habits',
    author: 'James Clear',
    category: 'Self-Improvement',
    rating: 4.8,
    description:
      'An easy and proven way to build good habits and break bad ones. The book focuses on the small changes that lead to remarkable results.',
    reviewer: {
      name: 'Tunde "Gadget" Bakare',
      role: 'Fintech Analyst',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    publishDate: 'February 10, 2026',
    heroImage:
      'https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    keyTakeaways: [
      'Habits are the compound interest of self-improvement.',
      'Focus on systems instead of goals.',
      'The Four Laws of Behavior Change: Make it obvious, attractive, easy, and satisfying.',
      'Identity-based habits are more effective than outcome-based habits.',
    ],
    whoShouldRead:
      'Anyone looking to change their behavior, improve their daily routines, or understand the science of habits.',
    pros: ['Extremely practical', 'Easy to read and apply', 'Great storytelling'],
    cons: [
      'Some concepts are simplified',
      'Heavy focus on individual behavior over systemic issues',
    ],
    verdict: 'The definitive guide to habit formation and personal change.',
  },
  'the-lean-startup': {
    id: 'book_3',
    slug: 'the-lean-startup',
    title: 'The Lean Startup',
    author: 'Eric Ries',
    category: 'Business',
    rating: 4.7,
    description:
      "How today's entrepreneurs use continuous innovation to create radically successful businesses.",
    reviewer: {
      name: 'Tunde "Gadget" Bakare',
      role: 'Fintech Analyst',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    publishDate: 'February 8, 2026',
    heroImage:
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    keyTakeaways: [
      'Build-Measure-Learn feedback loop is the core of the lean startup.',
      'Minimum Viable Product (MVP) helps in learning as quickly as possible.',
      'Pivot or Persevere: Deciding when to change direction based on data.',
      'Validated learning is the key to startup success.',
    ],
    whoShouldRead: 'Entrepreneurs, product managers, and business leaders.',
    pros: ['Revolutionary framework', 'Data-driven approach', 'Real-world examples'],
    cons: ['Can be overly focused on software startups', 'Methodology can be misapplied'],
    verdict:
      'Essential reading for anyone looking to build a sustainable business in an uncertain environment.',
  },
  'clean-code': {
    id: 'book_4',
    slug: 'clean-code',
    title: 'Clean Code',
    author: 'Robert C. Martin',
    category: 'Software Engineering',
    rating: 4.8,
    description:
      'A handbook of agile software craftsmanship. This book is a guide to writing better code.',
    reviewer: {
      name: 'Tunde "Gadget" Bakare',
      role: 'Fintech Analyst',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    publishDate: 'February 5, 2026',
    heroImage:
      'https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    keyTakeaways: [
      'Code is clean if it can be read, and enhanced by a developer other than its original author.',
      'Functions should do one thing and do it well.',
      'Meaningful names are crucial for readability.',
      'Comments should be used sparingly; code should be self-explanatory.',
    ],
    whoShouldRead:
      'Software developers of all levels who want to improve the quality of their code.',
    pros: ['Timeless principles', 'Practical code examples', 'Strong emphasis on professionalism'],
    cons: ['Examples are primarily in Java', 'Some rules are controversial'],
    verdict: 'A foundational text for any serious software engineer.',
  },
  'thinking-fast-and-slow': {
    id: 'book_5',
    slug: 'thinking-fast-and-slow',
    title: 'Thinking, Fast and Slow',
    author: 'Daniel Kahneman',
    category: 'Psychology',
    rating: 4.6,
    description:
      'A deep dive into the two systems that drive the way we think: System 1 (fast, intuitive) and System 2 (slow, logical).',
    reviewer: {
      name: 'Tunde "Gadget" Bakare',
      role: 'Fintech Analyst',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    publishDate: 'February 1, 2026',
    heroImage:
      'https://images.unsplash.com/photo-1507413245164-6160d8298b31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    keyTakeaways: [
      'System 1 is fast, instinctive and emotional; System 2 is slower, more deliberative, and logical.',
      'Cognitive biases often lead to irrational decision making.',
      'Loss aversion: The pain of losing is twice as powerful as the joy of gaining.',
      'The importance of understanding how our brains trick us.',
    ],
    whoShouldRead: 'Anyone interested in decision making, psychology, or behavioral economics.',
    pros: ['Nobel Prize-winning research', 'Mind-expanding insights', 'Comprehensive'],
    cons: ['Very dense and long', 'Can be a difficult read for some'],
    verdict: 'One of the most important books on human behavior ever written.',
  },
  'zero-to-one': {
    id: 'book_6',
    slug: 'zero-to-one',
    title: 'Zero to One',
    author: 'Peter Thiel',
    category: 'Entrepreneurship',
    rating: 4.5,
    description:
      'Notes on startups, or how to build the future. Thiel argues that the best businesses create something entirely new.',
    reviewer: {
      name: 'Tunde "Gadget" Bakare',
      role: 'Fintech Analyst',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    publishDate: 'January 28, 2026',
    heroImage:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    keyTakeaways: [
      'Vertical progress (zero to one) is harder but more rewarding than horizontal progress (one to n).',
      'Monopoly is the condition of every successful business.',
      'The importance of starting small and dominating a niche.',
      'Proprietary technology, network effects, economies of scale, and branding are the four elements of a monopoly.',
    ],
    whoShouldRead: 'Aspiring founders and tech enthusiasts.',
    pros: ['Unique and provocative ideas', 'Concise', 'Very influential'],
    cons: ['Can be elitist', 'Some advice is controversial'],
    verdict: 'A thought-provoking look at what it takes to build a truly innovative company.',
  },
  'the-psychology-of-money': {
    id: 'book_7',
    slug: 'the-psychology-of-money',
    title: 'The Psychology of Money',
    author: 'Morgan Housel',
    category: 'Finance',
    rating: 4.9,
    description:
      'Timeless lessons on wealth, greed, and happiness. Housel explores how our emotions and biases affect our financial decisions.',
    reviewer: {
      name: 'Tunde "Gadget" Bakare',
      role: 'Fintech Analyst',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    publishDate: 'January 25, 2026',
    heroImage:
      'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    keyTakeaways: [
      'Doing well with money has little to do with how smart you are and a lot to do with how you behave.',
      'The importance of compounding and time.',
      "Wealth is what you don't see.",
      'Getting money is one thing; keeping it is another.',
    ],
    whoShouldRead:
      'Anyone who wants to improve their relationship with money and build long-term wealth.',
    pros: ['Relatable stories', 'Simple yet profound advice', 'Quick read'],
    cons: ['Not a technical guide on investing', 'Focuses more on mindset than mechanics'],
    verdict: 'Probably the best book on personal finance ever written.',
  },
  'show-your-work': {
    id: 'book_8',
    slug: 'show-your-work',
    title: 'Show Your Work!',
    author: 'Austin Kleon',
    category: 'Creativity',
    rating: 4.7,
    description:
      '10 ways to share your creativity and get discovered. Kleon argues that being "findable" is as important as being creative.',
    reviewer: {
      name: 'Tunde "Gadget" Bakare',
      role: 'Fintech Analyst',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    publishDate: 'January 20, 2026',
    heroImage:
      'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    keyTakeaways: [
      "You don't have to be a genius; you just have to be yourself.",
      'Document your process, not just the finished product.',
      'Share something small every day.',
      'Build a community, not just a following.',
    ],
    whoShouldRead: 'Artists, writers, designers, and anyone looking to build an online presence.',
    pros: ['Very inspiring', 'Highly visual', 'Practical advice for the internet age'],
    cons: ['Short and simple', 'Can feel like a series of blog posts'],
    verdict: 'A great guide for anyone afraid to put their work out into the world.',
  },
  sapiens: {
    id: 'book_9',
    slug: 'sapiens',
    title: 'Sapiens',
    author: 'Yuval Noah Harari',
    category: 'History',
    rating: 4.8,
    description:
      'A brief history of humankind. Harari explores how biology and history have defined us and enhanced our understanding of what it means to be "human."',
    reviewer: {
      name: 'Tunde "Gadget" Bakare',
      role: 'Fintech Analyst',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    publishDate: 'January 15, 2026',
    heroImage:
      'https://images.unsplash.com/photo-1447069387593-a5de0862481e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    keyTakeaways: [
      'Humans are unique because of our ability to believe in shared myths (money, nations, human rights).',
      'The Agricultural Revolution was "history\'s biggest fraud."',
      'The unification of humankind through money, empires, and religions.',
      'The Scientific Revolution and the future of our species.',
    ],
    whoShouldRead: 'Anyone interested in history, anthropology, and the big questions of life.',
    pros: ['Grand scope', 'Engaging writing', 'Challenging perspectives'],
    cons: ['Some historical generalizations', 'Can be pessimistic about the future'],
    verdict: 'A mind-bending journey through human history.',
  },
  essentialism: {
    id: 'book_10',
    slug: 'essentialism',
    title: 'Essentialism',
    author: 'Greg McKeown',
    category: 'Productivity',
    rating: 4.7,
    description:
      'The disciplined pursuit of less. Essentialism is about doing only the things that are truly important.',
    reviewer: {
      name: 'Tunde "Gadget" Bakare',
      role: 'Fintech Analyst',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    publishDate: 'January 10, 2026',
    heroImage:
      'https://images.unsplash.com/photo-1517842645767-c639042777db?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    keyTakeaways: [
      "If you don't prioritize your life, someone else will.",
      "Essentialism is not about how to get more things done; it's about how to get the right things done.",
      'The power of saying "no."',
      'Creating a system for making the choice of what is essential.',
    ],
    whoShouldRead: 'Overwhelmed professionals, leaders, and anyone looking to simplify their life.',
    pros: ['Very practical', 'Clear and concise', 'High impact'],
    cons: ['Can be hard to implement in a busy world', 'Some overlap with Deep Work'],
    verdict: 'An essential guide for living a more focused and meaningful life.',
  },
};
