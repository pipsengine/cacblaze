export interface ProductivityAppReview {
  id: string;
  slug: string;
  name: string;
  category: string;
  platform: string;
  specialty: string;
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
    cloudSync: boolean;
    collaboration: boolean;
    features: string[];
  };
  pros: string[];
  cons: string[];
  verdict: string;
}

export const productivityAppReviews: Record<string, ProductivityAppReview> = {
  'notion-review': {
    id: 'app_notion',
    slug: 'notion-review',
    name: 'Notion',
    category: 'All-in-one Workspace',
    platform: 'Web, iOS, Android, Windows, Mac',
    specialty: 'Knowledge Management & Databases',
    rating: 4.8,
    description: 'The definitive all-in-one workspace for notes, docs, wikis, and project management. Highly popular among Nigerian startups.',
    author: {
      name: 'Chidi "Tech" Nwosu',
      role: 'Hardware Analyst',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'Feb 12, 2026',
    heroImage: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    specs: {
      pricingModel: 'Freemium (Paid from $10/mo)',
      offlineMode: false,
      cloudSync: true,
      collaboration: true,
      features: ['Kanban Boards', 'Custom Databases', 'Markdown Support', 'AI Integration']
    },
    pros: ['Infinite flexibility', 'Clean aesthetic', 'Excellent free tier for students'],
    cons: ['Steep learning curve', 'Poor offline support', 'Can be slow on mobile'],
    verdict: 'The best tool for organized teams and individuals who love customization.'
  },
  'trello-review': {
    id: 'app_trello',
    slug: 'trello-review',
    name: 'Trello',
    category: 'Project Management',
    platform: 'Web, Mobile, Desktop',
    specialty: 'Visual Task Tracking',
    rating: 4.5,
    description: 'A visual way for teams to manage any project using boards, lists, and cards. Extremely intuitive for beginners.',
    author: {
      name: 'Chidi "Tech" Nwosu',
      role: 'Hardware Analyst',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'Feb 11, 2026',
    heroImage: 'https://images.unsplash.com/photo-1522071823991-b5ae72647a4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    specs: {
      pricingModel: 'Freemium',
      offlineMode: true,
      cloudSync: true,
      collaboration: true,
      features: ['Butler Automation', 'Power-Ups', 'Checklists', 'Labeling System']
    },
    pros: ['Very easy to use', 'Great visual overview', 'Solid mobile app'],
    cons: ['Too simple for complex projects', 'Limited power-ups on free tier'],
    verdict: 'Ideal for simple project tracking and personal task lists.'
  },
  'evernote-review': {
    id: 'app_evernote',
    slug: 'evernote-review',
    name: 'Evernote',
    category: 'Note-Taking',
    platform: 'Web, Mobile, Desktop',
    specialty: 'Digital Archive & Web Clipping',
    rating: 4.0,
    description: 'The veteran of note-taking apps. Excellent for capturing web snippets and organizing large archives of documents.',
    author: {
      name: 'Chidi "Tech" Nwosu',
      role: 'Hardware Analyst',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'Feb 10, 2026',
    heroImage: 'https://images.unsplash.com/photo-1517842645767-c639042777db?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    specs: {
      pricingModel: 'Freemium (Paid is expensive)',
      offlineMode: true,
      cloudSync: true,
      collaboration: true,
      features: ['Web Clipper', 'Document Scanning', 'Audio Notes', 'Handwriting Search']
    },
    pros: ['Best-in-class web clipper', 'Powerful search (even OCR)', 'Reliable sync'],
    cons: ['Increasingly expensive', 'Free tier is very restrictive', 'UI feels cluttered'],
    verdict: 'Still the best for researchers and document hoarders.'
  },
  'slack-review': {
    id: 'app_slack',
    slug: 'slack-review',
    name: 'Slack',
    category: 'Communication',
    platform: 'Web, Mobile, Desktop',
    specialty: 'Team Chat & Integration',
    rating: 4.7,
    description: 'The hub of remote work communication. Replaces internal emails with organized channels and instant messaging.',
    author: {
      name: 'Chidi "Tech" Nwosu',
      role: 'Hardware Analyst',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'Feb 09, 2026',
    heroImage: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    specs: {
      pricingModel: 'Freemium',
      offlineMode: false,
      cloudSync: true,
      collaboration: true,
      features: ['Channel Organization', 'Huddles', 'App Integrations', 'Workflow Builder']
    },
    pros: ['Excellent integrations', 'Fun UI/UX', 'Powerful search of history'],
    cons: ['Can be distracting', 'Memory hungry desktop app', 'Message limits on free tier'],
    verdict: 'Essential for any remote or hybrid team.'
  },
  'forest-review': {
    id: 'app_forest',
    slug: 'forest-review',
    name: 'Forest',
    category: 'Focus & Timer',
    platform: 'iOS, Android, Chrome',
    specialty: 'Gamified Pomodoro',
    rating: 4.9,
    description: 'Stay focused by planting a virtual tree. If you leave the app to check social media, your tree withers. A great focus tool for students.',
    author: {
      name: 'Chidi "Tech" Nwosu',
      role: 'Hardware Analyst',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'Feb 08, 2026',
    heroImage: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    specs: {
      pricingModel: 'Paid ($1.99 one-time)',
      offlineMode: true,
      cloudSync: true,
      collaboration: true,
      features: ['Gamification', 'Real Tree Planting', 'Focus Stats', 'Whitelist Apps']
    },
    pros: ['Extremely effective motivation', 'Real-world impact', 'Beautiful design'],
    cons: ['One-time cost (not free)', 'Simple functionality'],
    verdict: 'The best app to cure phone addiction while working.'
  },
  'todoist-review': {
    id: 'app_todoist',
    slug: 'todoist-review',
    name: 'Todoist',
    category: 'Task Manager',
    platform: 'Everywhere',
    specialty: 'Simple & Powerful Lists',
    rating: 4.6,
    description: 'A clean, distraction-free task manager that uses natural language processing to make adding tasks easy.',
    author: {
      name: 'Chidi "Tech" Nwosu',
      role: 'Hardware Analyst',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'Feb 07, 2026',
    heroImage: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    specs: {
      pricingModel: 'Freemium',
      offlineMode: true,
      cloudSync: true,
      collaboration: true,
      features: ['Natural Language Input', 'Karma Points', 'Project Folders', 'Email to Task']
    },
    pros: ['Blazing fast entry', 'Available on every platform', 'Productivity tracking'],
    cons: ['Reminders are a paid feature', 'Basic free tier'],
    verdict: 'The best task manager for people who want to get things done quickly.'
  },
  'calendly-review': {
    id: 'app_calendly',
    slug: 'calendly-review',
    name: 'Calendly',
    category: 'Scheduling',
    platform: 'Web, Mobile, Chrome',
    specialty: 'Automated Meeting Booking',
    rating: 4.4,
    description: 'Eliminates the "when are you free?" email dance. Perfect for Nigerian entrepreneurs and freelancers.',
    author: {
      name: 'Chidi "Tech" Nwosu',
      role: 'Hardware Analyst',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'Feb 06, 2026',
    heroImage: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    specs: {
      pricingModel: 'Freemium',
      offlineMode: false,
      cloudSync: true,
      collaboration: true,
      features: ['Calendar Sync', 'Timezone Detection', 'Meeting Buffers', 'Payment Integration']
    },
    pros: ['Massive time saver', 'Polished professional UI', 'Excellent timezone handling'],
    cons: ['Free tier limited to 1 event type', 'Can feel impersonal to some'],
    verdict: 'A must-have for anyone who takes more than 3 meetings a week.'
  },
  'obsidian-review': {
    id: 'app_obsidian',
    slug: 'obsidian-review',
    name: 'Obsidian',
    category: 'Note-Taking',
    platform: 'Desktop, Mobile',
    specialty: 'Personal Knowledge Base',
    rating: 4.8,
    description: 'A powerful knowledge base that works on top of a local folder of plain text Markdown files. The choice for power users.',
    author: {
      name: 'Chidi "Tech" Nwosu',
      role: 'Hardware Analyst',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'Feb 05, 2026',
    heroImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    specs: {
      pricingModel: 'Free (Sync is paid)',
      offlineMode: true,
      cloudSync: false,
      collaboration: false,
      features: ['Graph View', 'Bi-directional Linking', 'Community Plugins', 'Markdown Based']
    },
    pros: ['Complete data ownership', 'Extremely fast', 'Limitless plugin ecosystem'],
    cons: ['Requires tech-savviness', 'Syncing requires extra work/payment', 'Mobile app setup can be tricky'],
    verdict: 'The best tool for building a "Second Brain".'
  },
  'canva-review': {
    id: 'app_canva',
    slug: 'canva-review',
    name: 'Canva',
    category: 'Design',
    platform: 'Web, Mobile',
    specialty: 'Visual Productivity',
    rating: 4.9,
    description: 'Not just for designers. Canva is a productivity beast for creating presentations, social posts, and documents in minutes.',
    author: {
      name: 'Chidi "Tech" Nwosu',
      role: 'Hardware Analyst',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'Feb 04, 2026',
    heroImage: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    specs: {
      pricingModel: 'Freemium',
      offlineMode: false,
      cloudSync: true,
      collaboration: true,
      features: ['Template Library', 'Drag & Drop Editor', 'Brand Kits', 'Stock Media']
    },
    pros: ['Zero design skills needed', 'Huge template library', 'Excellent collaboration'],
    cons: ['Limited advanced features', 'Requires stable internet'],
    verdict: 'Essential for small businesses and content creators.'
  },
  'pocket-review': {
    id: 'app_pocket',
    slug: 'pocket-review',
    name: 'Pocket',
    category: 'Reading',
    platform: 'Everywhere',
    specialty: 'Read-it-Later',
    rating: 4.3,
    description: 'Save articles, videos, and stories from any publication or page. Perfect for commuting or reading during NEPA blackouts.',
    author: {
      name: 'Chidi "Tech" Nwosu',
      role: 'Hardware Analyst',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'Feb 03, 2026',
    heroImage: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    specs: {
      pricingModel: 'Freemium',
      offlineMode: true,
      cloudSync: true,
      collaboration: false,
      features: ['Offline Reading', 'Listen (Text-to-Speech)', 'Clean View', 'Tagging']
    },
    pros: ['Excellent offline mode', 'Distraction-free reading', 'Great browser extension'],
    cons: ['Free version has ads', 'Discovery features are hit-or-miss'],
    verdict: 'The best way to manage your reading list without cluttering browser tabs.'
  }
};
