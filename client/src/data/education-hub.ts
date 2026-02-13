export interface EducationResource {
  id: string;
  slug: string;
  name: string;
  category: string;
  description: string;
  heroImage: string;
  content: string[];
  tips?: { title: string; content: string }[];
  author: {
    name: string;
    role: string;
    image: string;
  };
  publishDate: string;
}

export interface EducationCategory {
  id: string;
  title: string;
  slug: string;
  description: string;
  resources: EducationResource[];
}

export const educationHubData: Record<string, EducationCategory> = {
  'admissions': {
    id: 'cat_admissions',
    title: 'University Admissions',
    slug: 'admissions',
    description: 'Expert guidance on navigating university applications, requirements, and placement.',
    resources: [
      {
        id: 'adm_1',
        slug: 'nigerian-university-admission-guide',
        name: 'Nigerian University Admission Guide',
        category: 'Admissions',
        description: 'A step-by-step guide on how to secure admission into top Nigerian universities.',
        heroImage: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: ['Understanding JAMB CAPS', 'Post-UTME strategies', 'Course selection', 'Clearance procedures'],
        author: { name: 'Dr. Samuel Ade', role: 'Admissions Expert', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
        publishDate: 'Feb 12, 2026'
      },
      {
        id: 'adm_2',
        slug: 'ivy-league-application-strategy',
        name: 'Ivy League Application Strategy',
        category: 'Admissions',
        description: 'How to stand out in the highly competitive Ivy League admissions process.',
        heroImage: 'https://images.unsplash.com/photo-1541339907198-e087563f3f4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: ['Holistic review process', 'Essays that work', 'Extracurricular profiling', 'Interview prep'],
        author: { name: 'Sarah Harvard', role: 'Former Admissions Officer', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
        publishDate: 'Feb 11, 2026'
      },
      {
        id: 'adm_3',
        slug: 'uk-university-admissions-ucas',
        name: 'UK University Admissions: UCAS Guide',
        category: 'Admissions',
        description: 'Navigating the UCAS system for undergraduate studies in the United Kingdom.',
        heroImage: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: ['UCAS application timeline', 'Writing a personal statement', 'Choosing your 5 universities', 'Visa requirements'],
        author: { name: 'James London', role: 'UK Education Consultant', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
        publishDate: 'Feb 10, 2026'
      },
      {
        id: 'adm_4',
        slug: 'canadian-study-permit-guide',
        name: 'Canadian Study Permit Guide',
        category: 'Admissions',
        description: 'Complete guide to obtaining a study permit and admission to Canadian colleges.',
        heroImage: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: ['Designated Learning Institutions (DLIs)', 'Proof of funds requirements', 'Biometrics process', 'Post-graduation work permit'],
        author: { name: 'Emily Toronto', role: 'Immigration Consultant', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
        publishDate: 'Feb 09, 2026'
      },
      {
        id: 'adm_5',
        slug: 'australian-university-admissions',
        name: 'Australian University Admissions',
        category: 'Admissions',
        description: 'Explore the benefits and process of studying in Australia.',
        heroImage: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: ['GTE requirements', 'English proficiency tests', 'OSHC insurance', 'Semester intake dates'],
        author: { name: 'Mark Sydney', role: 'International Student Advisor', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
        publishDate: 'Feb 08, 2026'
      },
      {
        id: 'adm_6',
        slug: 'masters-degree-application-tips',
        name: 'Master\'s Degree Application Tips',
        category: 'Admissions',
        description: 'How to prepare a winning application for graduate school.',
        heroImage: 'https://images.unsplash.com/photo-1523240715639-99a8086f73e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: ['GRE/GMAT importance', 'Letters of recommendation', 'Statement of purpose', 'Research proposal'],
        author: { name: 'Dr. Anna Reed', role: 'Graduate Dean', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
        publishDate: 'Feb 07, 2026'
      },
      {
        id: 'adm_7',
        slug: 'medical-school-admissions-guide',
        name: 'Medical School Admissions Guide',
        category: 'Admissions',
        description: 'Navigating the path to becoming a doctor: from MCAT to clinicals.',
        heroImage: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: ['MCAT preparation', 'Shadowing experience', 'AMCAS application', 'Multiple Mini Interviews (MMI)'],
        author: { name: 'Dr. Chris White', role: 'Medical Director', image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
        publishDate: 'Feb 06, 2026'
      },
      {
        id: 'adm_8',
        slug: 'law-school-admissions-lsat',
        name: 'Law School Admissions & LSAT',
        category: 'Admissions',
        description: 'Everything you need to know about LSAT scores and law school applications.',
        heroImage: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: ['LSAT logical reasoning', 'CAS report services', 'Character and fitness', 'Choosing a law specialty'],
        author: { name: 'Jane Justice', role: 'Legal Educator', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
        publishDate: 'Feb 05, 2026'
      },
      {
        id: 'adm_9',
        slug: 'community-college-to-university-transfer',
        name: 'Community College Transfer Guide',
        category: 'Admissions',
        description: 'Save money by starting at a community college and transferring to a university.',
        heroImage: 'https://images.unsplash.com/photo-1525921429624-479b6a26d84d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: ['Articulation agreements', 'Credit transfer process', 'GPA requirements', 'Transfer scholarships'],
        author: { name: 'Bob Miller', role: 'Transfer Counselor', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
        publishDate: 'Feb 04, 2026'
      },
      {
        id: 'adm_10',
        slug: 'distance-learning-admission-guide',
        name: 'Distance Learning Admission Guide',
        category: 'Admissions',
        description: 'How to apply for online degrees and distance learning programs.',
        heroImage: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: ['Accreditation checks', 'Technical requirements', 'Online proctoring', 'Self-paced vs Cohort'],
        author: { name: 'Dr. Ellen Sky', role: 'Distance Learning Coordinator', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
        publishDate: 'Feb 03, 2026'
      }
    ]
  },
  'scholarships': {
    id: 'cat_scholarships',
    title: 'Scholarships',
    slug: 'scholarships',
    description: 'Find the latest local and international scholarship opportunities.',
    resources: [
      {
        id: 'sch_1',
        slug: 'undergraduate-scholarships-2026',
        name: 'Top Undergraduate Scholarships for 2026',
        category: 'Scholarships',
        description: 'A curated list of fully-funded scholarships for Nigerian undergraduates.',
        heroImage: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: ['Federal Govt BEA', 'Shell Nigeria Scholarship', 'MTN Foundation', 'Essay tips'],
        author: { name: 'Linda Chidimma', role: 'Scholarship Consultant', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
        publishDate: 'Feb 11, 2026'
      },
      {
        id: 'sch_2',
        slug: 'chevening-scholarships-uk',
        name: 'Chevening Scholarships (UK)',
        category: 'Scholarships',
        description: 'Everything you need to know about the UK government\'s global scholarship program.',
        heroImage: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: ['Eligibility criteria', 'Leadership qualities', 'Networking essay', 'Interview process'],
        author: { name: 'Mark Evans', role: 'Chevening Alumnus', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
        publishDate: 'Feb 10, 2026'
      },
      {
        id: 'sch_3',
        slug: 'fulbright-scholarship-usa',
        name: 'Fulbright Scholarship (USA)',
        category: 'Scholarships',
        description: 'Study, research, or teach in the United States with the Fulbright Program.',
        heroImage: 'https://images.unsplash.com/photo-1550721884-9340682839cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: ['Grant categories', 'Personal statement', 'Study objective', 'Affiliation letter'],
        author: { name: 'Dr. Jane Fulbright', role: 'Educational Advisor', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
        publishDate: 'Feb 09, 2026'
      },
      {
        id: 'sch_4',
        slug: 'commonwealth-scholarships-guide',
        name: 'Commonwealth Scholarships Guide',
        category: 'Scholarships',
        description: 'For students from developing Commonwealth countries to study in the UK.',
        heroImage: 'https://images.unsplash.com/photo-1454165833767-027ffea9e778?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: ['Shared vs Master\'s vs PhD', 'Development impact essay', 'University placement', 'Selection process'],
        author: { name: 'Alice Green', role: 'CSC Advisor', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
        publishDate: 'Feb 08, 2026'
      },
      {
        id: 'sch_5',
        slug: 'daad-scholarships-germany',
        name: 'DAAD Scholarships (Germany)',
        category: 'Scholarships',
        description: 'Fully-funded opportunities for postgraduate studies in Germany.',
        heroImage: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: ['EPOS program', 'Language requirements', 'Motivation letter', 'Application portal'],
        author: { name: 'Hans Mueller', role: 'DAAD Representative', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
        publishDate: 'Feb 07, 2026'
      },
      {
        id: 'sch_6',
        slug: 'erasmus-mundus-joint-masters',
        name: 'Erasmus Mundus Joint Masters',
        category: 'Scholarships',
        description: 'Study in at least two different European countries with this prestigious scholarship.',
        heroImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: ['Consortium catalogs', 'Mobility rules', 'Scholarship benefits', 'How to apply'],
        author: { name: 'Elena Rossi', role: 'Erasmus Coordinator', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
        publishDate: 'Feb 06, 2026'
      },
      {
        id: 'sch_7',
        slug: 'turkiye-burslari-scholarship',
        name: 'Turkiye Burslari Scholarship',
        category: 'Scholarships',
        description: 'Study in Turkey with a full scholarship covering tuition, health, and housing.',
        heroImage: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: ['Application criteria', 'Turkish language year', 'Placement process', 'Interview tips'],
        author: { name: 'Ahmet Yilmaz', role: 'Scholarship Admin', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
        publishDate: 'Feb 05, 2026'
      },
      {
        id: 'sch_8',
        slug: 'mastercard-foundation-scholarships',
        name: 'Mastercard Foundation Scholarships',
        category: 'Scholarships',
        description: 'Empowering young people in Africa to lead change in their communities.',
        heroImage: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: ['Partner universities', 'Leadership and service', 'Financial need assessment', 'Application cycle'],
        author: { name: 'Kofi Annan', role: 'Program Manager', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
        publishDate: 'Feb 04, 2026'
      },
      {
        id: 'sch_9',
        slug: 'gates-cambridge-scholarship',
        name: 'Gates Cambridge Scholarship',
        category: 'Scholarships',
        description: 'One of the most prestigious international scholarships in the world for study at Cambridge.',
        heroImage: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: ['Intellectual ability', 'Leadership potential', 'Fit with Cambridge', 'Application deadline'],
        author: { name: 'Dr. Bill Gates', role: 'Scholarship Trust', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
        publishDate: 'Feb 03, 2026'
      },
      {
        id: 'sch_10',
        slug: 'japanese-mext-scholarship',
        name: 'Japanese MEXT Scholarship',
        category: 'Scholarships',
        description: 'Study in Japan with the Ministry of Education, Culture, Sports, Science and Technology scholarship.',
        heroImage: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: ['Embassy vs University recommendation', 'Language proficiency', 'Exam subjects', 'Research plan'],
        author: { name: 'Yuki Tanaka', role: 'MEXT Advisor', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
        publishDate: 'Feb 02, 2026'
      }
    ]
  },
  'online-courses': {
    id: 'cat_courses',
    title: 'Online Courses',
    slug: 'online-courses',
    description: 'The best platforms and courses to learn any skill from anywhere.',
    resources: [
      {
        id: 'oc_1',
        slug: 'best-free-online-courses-2026',
        name: 'Best Free Online Courses for 2026',
        category: 'Online Courses',
        description: 'Boost your career with these top-rated free certifications.',
        heroImage: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: ['Coursera specs', 'EdX certs', 'Google Career Certs', 'LinkedIn Learning'],
        author: { name: 'Kevin Hart', role: 'EdTech Specialist', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
        publishDate: 'Feb 10, 2026'
      },
      {
        id: 'oc_2',
        slug: 'data-science-bootcamp-online',
        name: 'Data Science Bootcamp Online',
        category: 'Online Courses',
        description: 'Become a data scientist in 6 months with this comprehensive online bootcamp.',
        heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: ['Python for Data Science', 'Machine Learning models', 'Data visualization', 'Capstone project'],
        author: { name: 'Dr. Data', role: 'Senior Data Scientist', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
        publishDate: 'Feb 09, 2026'
      },
      {
        id: 'oc_3',
        slug: 'digital-marketing-masterclass',
        name: 'Digital Marketing Masterclass',
        category: 'Online Courses',
        description: 'Master SEO, SEM, social media, and email marketing.',
        heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: ['Content strategy', 'Google Ads', 'Facebook Blueprint', 'Analytics tracking'],
        author: { name: 'Marketing Guru', role: 'Digital Strategist', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
        publishDate: 'Feb 08, 2026'
      },
      {
        id: 'oc_4',
        slug: 'ux-ui-design-fundamentals',
        name: 'UX/UI Design Fundamentals',
        category: 'Online Courses',
        description: 'Learn the principles of user-centric design and prototyping.',
        heroImage: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: ['User research', 'Wireframing', 'Visual design', 'Figma mastery'],
        author: { name: 'Design Pro', role: 'Lead UI Designer', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
        publishDate: 'Feb 07, 2026'
      },
      {
        id: 'oc_5',
        slug: 'full-stack-web-development',
        name: 'Full-Stack Web Development',
        category: 'Online Courses',
        description: 'Learn to build modern web applications from scratch.',
        heroImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: ['HTML/CSS/JS', 'React/Next.js', 'Node.js/Express', 'Databases (SQL/NoSQL)'],
        author: { name: 'Code Master', role: 'Full Stack Developer', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
        publishDate: 'Feb 06, 2026'
      },
      {
        id: 'oc_6',
        slug: 'project-management-pmp-prep',
        name: 'Project Management: PMP Prep',
        category: 'Online Courses',
        description: 'Comprehensive course to pass the PMP exam on your first try.',
        heroImage: 'https://images.unsplash.com/photo-1454165833767-027ffea9e778?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: ['Project lifecycle', 'Risk management', 'Stakeholder communication', 'Agile methodologies'],
        author: { name: 'PM Expert', role: 'Certified PMP', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
        publishDate: 'Feb 05, 2026'
      },
      {
        id: 'oc_7',
        slug: 'business-analytics-for-managers',
        name: 'Business Analytics for Managers',
        category: 'Online Courses',
        description: 'Make data-driven decisions for your business or organization.',
        heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: ['Statistical modeling', 'Predictive analytics', 'Dashboarding with Tableau', 'Decision trees'],
        author: { name: 'Biz Analyst', role: 'Business Strategist', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
        publishDate: 'Feb 04, 2026'
      },
      {
        id: 'oc_8',
        slug: 'cybersecurity-essentials',
        name: 'Cybersecurity Essentials',
        category: 'Online Courses',
        description: 'Protect yourself and your organization from cyber threats.',
        heroImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: ['Network security', 'Ethical hacking', 'Incident response', 'Security protocols'],
        author: { name: 'Security Pro', role: 'Cybersecurity Analyst', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
        publishDate: 'Feb 03, 2026'
      },
      {
        id: 'oc_9',
        slug: 'ai-and-machine-learning-intro',
        name: 'AI and Machine Learning Intro',
        category: 'Online Courses',
        description: 'A beginner-friendly introduction to artificial intelligence.',
        heroImage: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: ['Neural networks', 'Deep learning basics', 'Natural language processing', 'AI ethics'],
        author: { name: 'AI Researcher', role: 'Machine Learning Engineer', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
        publishDate: 'Feb 02, 2026'
      },
      {
        id: 'oc_10',
        slug: 'creative-writing-workshop',
        name: 'Creative Writing Workshop',
        category: 'Online Courses',
        description: 'Unlock your creativity and write compelling stories.',
        heroImage: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: ['Plot development', 'Character building', 'Dialogue techniques', 'Publishing advice'],
        author: { name: 'Author X', role: 'Bestselling Novelist', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
        publishDate: 'Feb 01, 2026'
      }
    ]
  },
  'certifications': {
    id: 'cat_certs',
    title: 'Professional Certifications',
    slug: 'certifications',
    description: 'Advance your career with globally recognized certifications.',
    resources: [
      {
        id: 'cert_1',
        slug: 'it-certifications-high-demand',
        name: 'High-Demand IT Certifications',
        category: 'Certifications',
        description: 'The most valuable IT certifications to have in 2026.',
        heroImage: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: ['AWS Architect', 'CompTIA Security+', 'PMP', 'CCNA'],
        author: { name: 'Michael Chen', role: 'Tech Recruiter', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
        publishDate: 'Feb 09, 2026'
      },
      {
        id: 'cert_2',
        slug: 'cloud-computing-aws-azure-gcp',
        name: 'Cloud Computing: AWS, Azure, GCP',
        category: 'Certifications',
        description: 'Which cloud certification is right for your career path?',
        heroImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: ['AWS Practitioner', 'Azure Fundamentals', 'Google Cloud Associate', 'Cloud security'],
        author: { name: 'Cloud Expert', role: 'Solutions Architect', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
        publishDate: 'Feb 08, 2026'
      },
      {
        id: 'cert_3',
        slug: 'project-management-certifications',
        name: 'Project Management Certifications',
        category: 'Certifications',
        description: 'From CAPM to PMP: Choosing the best PM certification.',
        heroImage: 'https://images.unsplash.com/photo-1454165833767-027ffea9e778?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: ['PMP vs PRINCE2', 'Agile/Scrum Master', 'Six Sigma belts', 'PMI requirements'],
        author: { name: 'Sarah PM', role: 'Project Director', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
        publishDate: 'Feb 07, 2026'
      },
      {
        id: 'cert_4',
        slug: 'hr-certifications-phr-sphr',
        name: 'HR Certifications: PHR & SPHR',
        category: 'Certifications',
        description: 'Boost your HR career with professional certifications.',
        heroImage: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: ['SHRM vs HRCI', 'PHR eligibility', 'Exam preparation', 'Recertification credits'],
        author: { name: 'HR Pro', role: 'HR Director', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
        publishDate: 'Feb 06, 2026'
      },
      {
        id: 'cert_5',
        slug: 'finance-certifications-cfa-acca',
        name: 'Finance Certifications: CFA, ACCA',
        category: 'Certifications',
        description: 'The ultimate guide to accounting and finance certifications.',
        heroImage: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: ['CFA levels', 'ACCA modules', 'CPA exam structure', 'Career impact'],
        author: { name: 'Finance Expert', role: 'Chartered Accountant', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
        publishDate: 'Feb 05, 2026'
      },
      {
        id: 'cert_6',
        slug: 'marketing-certifications-google-hubspot',
        name: 'Marketing Certifications: Google, HubSpot',
        category: 'Certifications',
        description: 'Free and paid marketing certifications to validate your skills.',
        heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: ['Google Ads certs', 'HubSpot Inbound', 'Facebook Blueprint', 'Hootsuite Social'],
        author: { name: 'Marketer', role: 'Digital Strategist', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
        publishDate: 'Feb 04, 2026'
      },
      {
        id: 'cert_7',
        slug: 'cybersecurity-certifications-cissp-ceh',
        name: 'Cybersecurity Certs: CISSP, CEH',
        category: 'Certifications',
        description: 'Advanced certifications for cybersecurity professionals.',
        heroImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: ['CISSP domains', 'Ethical Hacker (CEH)', 'CISM vs CISA', 'Security+ as entry'],
        author: { name: 'Security Expert', role: 'CISO', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
        publishDate: 'Feb 03, 2026'
      },
      {
        id: 'cert_8',
        slug: 'data-analytics-certifications-tableau-powerbi',
        name: 'Data Analytics Certs: Tableau, PowerBI',
        category: 'Certifications',
        description: 'Visualize your skills with data analytics certifications.',
        heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: ['Tableau Desktop Specialist', 'Microsoft PL-300', 'Google Data Analytics', 'IBM Data Science'],
        author: { name: 'Analyst', role: 'Senior Data Analyst', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
        publishDate: 'Feb 02, 2026'
      },
      {
        id: 'cert_9',
        slug: 'agile-and-scrum-certifications',
        name: 'Agile and Scrum Certifications',
        category: 'Certifications',
        description: 'Become an expert in Agile methodologies and Scrum frameworks.',
        heroImage: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: ['PSM vs CSM', 'Safe Agile', 'Product Owner (PSPO)', 'Agile Coaching'],
        author: { name: 'Scrum Master', role: 'Agile Coach', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
        publishDate: 'Feb 01, 2026'
      },
      {
        id: 'cert_10',
        slug: 'legal-certifications-paralegal',
        name: 'Legal Certifications: Paralegal',
        category: 'Certifications',
        description: 'Enhance your legal career with recognized paralegal certifications.',
        heroImage: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: ['NALA CP', 'NFPA RP', 'Legal research', 'Case management'],
        author: { name: 'Legal Pro', role: 'Senior Paralegal', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
        publishDate: 'Jan 31, 2026'
      }
    ]
  },
  'career-advice': {
    id: 'cat_career',
    title: 'Career Advice',
    slug: 'career-advice',
    description: 'Expert tips on navigating your professional journey.',
    resources: [
      {
        id: 'car_1',
        slug: 'career-path-planning-guide',
        name: 'Career Path Planning Guide',
        category: 'Career Advice',
        description: 'How to choose and grow in the right career for you.',
        heroImage: 'https://images.unsplash.com/photo-1454165833767-027ffea9e778?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: ['Self-assessment', 'Industry research', 'Networking', 'Goal setting'],
        author: { name: 'Sarah Jenkins', role: 'Career Coach', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
        publishDate: 'Feb 08, 2026'
      },
      {
        id: 'car_2',
        slug: 'effective-networking-strategies',
        name: 'Effective Networking Strategies',
        category: 'Career Advice',
        description: 'Build a powerful professional network that opens doors.',
        heroImage: 'https://images.unsplash.com/photo-1515162305285-0293e4767cc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: ['LinkedIn optimization', 'Informational interviews', 'Elevator pitch', 'Follow-up etiquette'],
        author: { name: 'John Connect', role: 'Networking Expert', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
        publishDate: 'Feb 07, 2026'
      },
      {
        id: 'car_3',
        slug: 'navigating-career-changes',
        name: 'Navigating Career Changes',
        category: 'Career Advice',
        description: 'How to successfully pivot to a new industry or role.',
        heroImage: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: ['Transferable skills', 'Gap analysis', 'Retraining options', 'Personal branding'],
        author: { name: 'Pivot Pro', role: 'Career Transitionist', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' },
        publishDate: 'Feb 06, 2026'
      },
      {
        id: 'car_4',
        slug: 'work-life-balance-tips',
        name: 'Work-Life Balance Tips',
        category: 'Career Advice',
        description: 'Maintain your well-being while excelling in your career.',
        heroImage: 'https://images.unsplash.com/photo-1499209974431-9dac3adaf471?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: ['Setting boundaries', 'Time blocking', 'Remote work hacks', 'Burnout prevention'],
        author: { name: 'Balance Guru', role: 'Wellness Coach', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
        publishDate: 'Feb 05, 2026'
      },
      {
        id: 'car_5',
        slug: 'salary-negotiation-strategies',
        name: 'Salary Negotiation Strategies',
        category: 'Career Advice',
        description: 'Get paid what you are worth with these negotiation tactics.',
        heroImage: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: ['Market research', 'Timing your request', 'Total compensation', 'Counter-offers'],
        author: { name: 'Negotiator', role: 'Compensation Analyst', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
        publishDate: 'Feb 04, 2026'
      },
      {
        id: 'car_6',
        slug: 'leadership-development-guide',
        name: 'Leadership Development Guide',
        category: 'Career Advice',
        description: 'How to transition from a contributor to a leader.',
        heroImage: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: ['Emotional intelligence', 'Delegation skills', 'Conflict resolution', 'Strategic thinking'],
        author: { name: 'Leader Coach', role: 'Executive Trainer', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
        publishDate: 'Feb 03, 2026'
      },
      {
        id: 'car_7',
        slug: 'building-a-personal-brand',
        name: 'Building a Personal Brand',
        category: 'Career Advice',
        description: 'Establish yourself as an authority in your field.',
        heroImage: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: ['Content creation', 'Public speaking', 'Thought leadership', 'Online presence'],
        author: { name: 'Brand Master', role: 'PR Consultant', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
        publishDate: 'Feb 02, 2026'
      },
      {
        id: 'car_8',
        slug: 'freelancing-career-success',
        name: 'Freelancing Career Success',
        category: 'Career Advice',
        description: 'How to build a sustainable and profitable freelance business.',
        heroImage: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: ['Finding clients', 'Pricing your services', 'Managing finances', 'Portfolio building'],
        author: { name: 'Freelance Pro', role: 'Solopreneur', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
        publishDate: 'Feb 01, 2026'
      },
      {
        id: 'car_9',
        slug: 'managing-up-effectively',
        name: 'Managing Up Effectively',
        category: 'Career Advice',
        description: 'How to build a productive relationship with your manager.',
        heroImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: ['Communication styles', 'Managing expectations', 'Providing feedback', 'Alignment with goals'],
        author: { name: 'Manager X', role: 'HR Consultant', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
        publishDate: 'Jan 31, 2026'
      },
      {
        id: 'car_10',
        slug: 'navigating-toxic-workplaces',
        name: 'Navigating Toxic Workplaces',
        category: 'Career Advice',
        description: 'Strategies for surviving and exiting a negative work environment.',
        heroImage: 'https://images.unsplash.com/photo-1521791136064-7986c2923216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: ['Identifying toxicity', 'Coping mechanisms', 'Documentation', 'Exit planning'],
        author: { name: 'HR Ally', role: 'Employee Advocate', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
        publishDate: 'Jan 30, 2026'
      }
    ]
  },
  'resume-building': {
    id: 'cat_resume',
    title: 'Resume Building',
    slug: 'resume-building',
    description: 'Craft a resume that gets you hired.',
    resources: [
      {
        id: 'res_1',
        slug: 'ats-friendly-resume-tips',
        name: 'ATS-Friendly Resume Tips',
        category: 'Resume Building',
        description: 'How to beat the Applicant Tracking Systems and land interviews.',
        heroImage: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: ['Keywords', 'Clean formatting', 'Quantifying results', 'Common mistakes'],
        author: { name: 'John Doe', role: 'HR Manager', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
        publishDate: 'Feb 07, 2026'
      },
      {
        id: 'res_2',
        slug: 'chronological-vs-functional-resume',
        name: 'Chronological vs Functional Resume',
        category: 'Resume Building',
        description: 'Choosing the right format for your experience level.',
        heroImage: 'https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: ['Format pros and cons', 'Hybrid options', 'Experience mapping', 'Targeted resumes'],
        author: { name: 'Resume Pro', role: 'Career Consultant', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
        publishDate: 'Feb 06, 2026'
      },
      {
        id: 'res_3',
        slug: 'writing-a-killer-cover-letter',
        name: 'Writing a Killer Cover Letter',
        category: 'Resume Building',
        description: 'Complement your resume with a compelling cover letter.',
        heroImage: 'https://images.unsplash.com/photo-1523480717984-24cba35ae1ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: ['Hooking the reader', 'Value proposition', 'Closing strong', 'Customization'],
        author: { name: 'Writer X', role: 'Copywriter', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
        publishDate: 'Feb 05, 2026'
      },
      {
        id: 'res_4',
        slug: 'showcasing-skills-on-resume',
        name: 'Showcasing Skills on Resume',
        category: 'Resume Building',
        description: 'How to list hard and soft skills effectively.',
        heroImage: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: ['Skill categorization', 'Action verbs', 'Proof of skills', 'Tailoring to JD'],
        author: { name: 'Skill Analyst', role: 'Talent Acquisition', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
        publishDate: 'Feb 04, 2026'
      },
      {
        id: 'res_5',
        slug: 'resume-tips-for-fresh-graduates',
        name: 'Resume Tips for Fresh Graduates',
        category: 'Resume Building',
        description: 'How to build a resume with little to no work experience.',
        heroImage: 'https://images.unsplash.com/photo-1523240715639-99a8086f73e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: ['Education first', 'Projects & internships', 'Extracurriculars', 'Volunteer work'],
        author: { name: 'Career Coach', role: 'Graduate Advisor', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
        publishDate: 'Feb 03, 2026'
      },
      {
        id: 'res_6',
        slug: 'executive-resume-writing',
        name: 'Executive Resume Writing',
        category: 'Resume Building',
        description: 'High-level resumes for senior leadership roles.',
        heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: ['Executive summaries', 'Strategic leadership', 'Board experience', 'P&L responsibility'],
        author: { name: 'Exec Writer', role: 'Executive Coach', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
        publishDate: 'Feb 02, 2026'
      },
      {
        id: 'res_7',
        slug: 'creative-resume-designs',
        name: 'Creative Resume Designs',
        category: 'Resume Building',
        description: 'When and how to use a creative or non-traditional resume.',
        heroImage: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: ['Portfolio resumes', 'Visual hierarchies', 'Canva vs Word', 'Industry appropriateness'],
        author: { name: 'Designer Pro', role: 'Creative Director', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
        publishDate: 'Feb 01, 2026'
      },
      {
        id: 'res_8',
        slug: 'linkedin-profile-vs-resume',
        name: 'LinkedIn Profile vs Resume',
        category: 'Resume Building',
        description: 'Optimizing both for maximum job search impact.',
        heroImage: 'https://images.unsplash.com/photo-1616469829581-73993eb86b02?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: ['Differences in tone', 'The "About" section', 'Recommendations', 'Endorsements'],
        author: { name: 'LI Expert', role: 'Digital Brander', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
        publishDate: 'Jan 31, 2026'
      },
      {
        id: 'res_9',
        slug: 'explaining-employment-gaps',
        name: 'Explaining Employment Gaps',
        category: 'Resume Building',
        description: 'How to handle resume gaps due to travel, family, or health.',
        heroImage: 'https://images.unsplash.com/photo-1521791136064-7986c2923216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: ['Honesty vs Detail', 'Upskilling during gaps', 'Functional elements', 'Cover letter context'],
        author: { name: 'HR Ally', role: 'Talent Lead', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
        publishDate: 'Jan 30, 2026'
      },
      {
        id: 'res_10',
        slug: 'global-resume-standards-cv',
        name: 'Global Resume Standards',
        category: 'Resume Building',
        description: 'Understanding the difference between a Resume and a CV globally.',
        heroImage: 'https://images.unsplash.com/photo-1523480717984-24cba35ae1ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: ['US vs UK vs EU', 'Photo requirements', 'Personal details', 'Length and format'],
        author: { name: 'Global Coach', role: 'Career Strategist', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
        publishDate: 'Jan 29, 2026'
      }
    ]
  },
  'interview-tips': {
    id: 'cat_interview',
    title: 'Interview Tips',
    slug: 'interview-tips',
    description: 'Master the art of the job interview.',
    resources: [
      {
        id: 'int_1',
        slug: 'cracking-behavioral-interviews',
        name: 'Cracking Behavioral Interviews',
        category: 'Interview Tips',
        description: 'How to use the STAR method to ace your interview.',
        heroImage: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: ['STAR method', 'Common questions', 'Body language', 'Follow-up'],
        author: { name: 'Emma Watson', role: 'Interview Coach', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
        publishDate: 'Feb 06, 2026'
      },
      {
        id: 'int_2',
        slug: 'mastering-virtual-interviews',
        name: 'Mastering Virtual Interviews',
        category: 'Interview Tips',
        description: 'Tips for excelling in video calls and remote interviews.',
        heroImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: ['Tech setup', 'Lighting and background', 'Eye contact', 'Digital rapport'],
        author: { name: 'Remote Pro', role: 'Remote Work Expert', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
        publishDate: 'Feb 05, 2026'
      },
      {
        id: 'int_3',
        slug: 'answering-tell-me-about-yourself',
        name: 'Answering "Tell Me About Yourself"',
        category: 'Interview Tips',
        description: 'How to craft the perfect response to this common opener.',
        heroImage: 'https://images.unsplash.com/photo-1521791136064-7986c2923216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: ['Past, Present, Future', 'Relevance to role', 'Keeping it concise', 'Personal branding'],
        author: { name: 'Interview Guru', role: 'Career Coach', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
        publishDate: 'Feb 04, 2026'
      },
      {
        id: 'int_4',
        slug: 'handling-difficult-interview-questions',
        name: 'Handling Difficult Questions',
        category: 'Interview Tips',
        description: 'Strategies for answering tricky or unexpected questions.',
        heroImage: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: ['Salary expectations', 'Why you left', 'Weaknesses', 'Conflict stories'],
        author: { name: 'HR Insider', role: 'Talent Lead', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
        publishDate: 'Feb 03, 2026'
      },
      {
        id: 'int_5',
        slug: 'questions-to-ask-the-interviewer',
        name: 'Questions to Ask the Interviewer',
        category: 'Interview Tips',
        description: 'Show your engagement and interest with these thoughtful questions.',
        heroImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: ['Company culture', 'Success metrics', 'Team dynamics', 'Next steps'],
        author: { name: 'Pro Interviewer', role: 'Hiring Manager', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
        publishDate: 'Feb 02, 2026'
      },
      {
        id: 'int_6',
        slug: 'dressing-for-interview-success',
        name: 'Dressing for Success',
        category: 'Interview Tips',
        description: 'What to wear for different types of job interviews.',
        heroImage: 'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: ['Business formal', 'Business casual', 'Startup casual', 'Grooming tips'],
        author: { name: 'Style Guide', role: 'Professional Brander', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
        publishDate: 'Feb 01, 2026'
      },
      {
        id: 'int_7',
        slug: 'body-language-in-interviews',
        name: 'Body Language in Interviews',
        category: 'Interview Tips',
        description: 'Non-verbal cues that can make or break your interview.',
        heroImage: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: ['Posture', 'Hand gestures', 'Smiling', 'Active listening'],
        author: { name: 'Body Logic', role: 'Communication Coach', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
        publishDate: 'Jan 31, 2026'
      },
      {
        id: 'int_8',
        slug: 'post-interview-thank-you-notes',
        name: 'Post-Interview Thank You Notes',
        category: 'Interview Tips',
        description: 'How to write a follow-up email that keeps you top of mind.',
        heroImage: 'https://images.unsplash.com/photo-1523480717984-24cba35ae1ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: ['Timing', 'Personalization', 'Reiterating value', 'Next steps'],
        author: { name: 'Writer Pro', role: 'Career Expert', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
        publishDate: 'Jan 30, 2026'
      },
      {
        id: 'int_9',
        slug: 'group-and-panel-interviews',
        name: 'Group and Panel Interviews',
        category: 'Interview Tips',
        description: 'How to stand out when being interviewed by multiple people.',
        heroImage: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: ['Engaging everyone', 'Note-taking', 'Consistency', 'Handling group tasks'],
        author: { name: 'Panel Pro', role: 'Hiring Consultant', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
        publishDate: 'Jan 29, 2026'
      },
      {
        id: 'int_10',
        slug: 'negotiating-the-job-offer',
        name: 'Negotiating the Job Offer',
        category: 'Interview Tips',
        description: 'You got the offer! Now learn how to negotiate the best terms.',
        heroImage: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: ['Market value', 'Total package', 'Asking for time', 'Finalizing the deal'],
        author: { name: 'Negotiator', role: 'HR Expert', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
        publishDate: 'Jan 28, 2026'
      }
    ]
  },
  'learn-english': {
    id: 'cat_english',
    title: 'Learn English',
    slug: 'learn-english',
    description: 'Master the global language of business and education.',
    resources: [
      {
        id: 'eng_1',
        slug: 'english-grammar-essentials',
        name: 'English Grammar Essentials',
        category: 'Learn English',
        description: 'Master the core rules of English grammar for clear communication.',
        heroImage: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: ['Parts of speech', 'Tense mastery', 'Sentence structure', 'Punctuation'],
        author: { name: 'Prof. Jane Smith', role: 'Linguistics Expert', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
        publishDate: 'Feb 12, 2026'
      },
      {
        id: 'eng_2',
        slug: 'business-english-communication',
        name: 'Business English Communication',
        category: 'Learn English',
        description: 'Professional English for meetings, emails, and presentations.',
        heroImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: ['Email etiquette', 'Negotiation phrases', 'Formal presentations', 'Corporate jargon'],
        author: { name: 'Robert Brown', role: 'Business Coach', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
        publishDate: 'Feb 11, 2026'
      }
    ]
  },
  'learn-french': {
    id: 'cat_french',
    title: 'Learn French',
    slug: 'learn-french',
    description: 'Unlock opportunities in the Francophone world.',
    resources: [
      {
        id: 'fr_1',
        slug: 'french-for-beginners',
        name: 'French for Beginners',
        category: 'Learn French',
        description: 'Start your journey with the basics of the French language.',
        heroImage: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: ['Greetings and introductions', 'Basic vocabulary', 'Pronunciation tips', 'Common phrases'],
        author: { name: 'Marie Dubois', role: 'French Instructor', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
        publishDate: 'Feb 10, 2026'
      }
    ]
  },
  'local-languages': {
    id: 'cat_local_lang',
    title: 'Local Languages',
    slug: 'local-languages',
    description: 'Connect with your roots by learning Nigerian languages.',
    resources: [
      {
        id: 'loc_1',
        slug: 'yoruba-language-basics',
        name: 'Yoruba Language Basics',
        category: 'Local Languages',
        description: 'Learn the fundamentals of Yoruba language and culture.',
        heroImage: 'https://images.unsplash.com/photo-1523821741446-edb2b68bb7a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: ['Alphabet and tones', 'Common greetings', 'Family terms', 'Cultural etiquette'],
        author: { name: 'Olawale Adeyemi', role: 'Yoruba Scholar', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
        publishDate: 'Feb 09, 2026'
      }
    ]
  },
  'learn-coding': {
    id: 'cat_coding',
    title: 'Learn Coding',
    slug: 'learn-coding',
    description: 'Master the language of the future.',
    resources: [
      {
        id: 'cod_1',
        slug: 'intro-to-web-development',
        name: 'Introduction to Web Development',
        category: 'Learn Coding',
        description: 'Learn HTML, CSS, and JavaScript from scratch.',
        heroImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: ['HTML5 structure', 'Modern CSS layouts', 'JavaScript basics', 'Building your first site'],
        author: { name: 'Alex Tech', role: 'Full Stack Developer', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
        publishDate: 'Feb 12, 2026'
      }
    ]
  },
  'graphic-design': {
    id: 'cat_design',
    title: 'Graphic Design',
    slug: 'graphic-design',
    description: 'Create stunning visuals and master design principles.',
    resources: [
      {
        id: 'des_1',
        slug: 'design-principles-for-beginners',
        name: 'Design Principles for Beginners',
        category: 'Graphic Design',
        description: 'Learn color theory, typography, and layout design.',
        heroImage: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: ['Color psychology', 'Typography basics', 'Grid systems', 'Composition rules'],
        author: { name: 'Elena Visual', role: 'Senior Designer', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
        publishDate: 'Feb 11, 2026'
      }
    ]
  },
  'digital-marketing': {
    id: 'cat_marketing',
    title: 'Digital Marketing',
    slug: 'digital-marketing',
    description: 'Grow your business or career with digital marketing.',
    resources: [
      {
        id: 'mark_1',
        slug: 'social-media-strategy-2026',
        name: 'Social Media Strategy 2026',
        category: 'Digital Marketing',
        description: 'How to build an audience and convert followers.',
        heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: ['Platform selection', 'Content planning', 'Engagement tactics', 'Paid ads intro'],
        author: { name: 'Mark Digital', role: 'Marketing Consultant', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
        publishDate: 'Feb 10, 2026'
      }
    ]
  },
  'financial-literacy': {
    id: 'cat_finance',
    title: 'Financial Literacy',
    slug: 'financial-literacy',
    description: 'Take control of your money and build wealth.',
    resources: [
      {
        id: 'fin_1',
        slug: 'personal-finance-101',
        name: 'Personal Finance 101',
        category: 'Financial Literacy',
        description: 'Budgeting, saving, and investing for beginners.',
        heroImage: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: ['Budgeting basics', 'Emergency funds', 'Debt management', 'Investment vehicles'],
        author: { name: 'Finance Fred', role: 'Financial Advisor', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
        publishDate: 'Feb 09, 2026'
      }
    ]
  },
  'student-productivity': {
    id: 'cat_productivity',
    title: 'Student Productivity',
    slug: 'student-productivity',
    description: 'Master your time and focus for academic success.',
    resources: [
      {
        id: 'prod_1',
        slug: 'time-management-for-students',
        name: 'Time Management for Students',
        category: 'Student Productivity',
        description: 'How to balance study, work, and life.',
        heroImage: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: ['Priority setting', 'Eliminating distractions', 'Effective scheduling', 'Overcoming procrastination'],
        author: { name: 'Dr. Time', role: 'Efficiency Expert', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
        publishDate: 'Feb 12, 2026'
      }
    ]
  },
  'mental-health': {
    id: 'cat_mental_health',
    title: 'Mental Health',
    slug: 'mental-health',
    description: 'Resources for student well-being and stress management.',
    resources: [
      {
        id: 'mh_1',
        slug: 'managing-exam-stress',
        name: 'Managing Exam Stress',
        category: 'Mental Health',
        description: 'Stay calm and focused during high-pressure periods.',
        heroImage: 'https://images.unsplash.com/photo-1521791136064-7986c2923216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: ['Breathing techniques', 'Mindfulness exercises', 'Physical activity benefits', 'Seeking support'],
        author: { name: 'Wellness Wendy', role: 'Psychologist', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
        publishDate: 'Feb 11, 2026'
      }
    ]
  },
  'student-budgeting': {
    id: 'cat_budgeting',
    title: 'Student Budgeting',
    slug: 'student-budgeting',
    description: 'Stretch your student budget and manage your finances.',
    resources: [
      {
        id: 'bud_1',
        slug: 'budget-friendly-student-living',
        name: 'Budget-Friendly Student Living',
        category: 'Student Budgeting',
        description: 'How to live well on a limited student income.',
        heroImage: 'https://images.unsplash.com/photo-1525921429624-479b6a26d84d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: ['Meal prepping', 'Student discounts', 'Second-hand shopping', 'Tracking expenses'],
        author: { name: 'Saver Sam', role: 'Financial Coach', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
        publishDate: 'Feb 10, 2026'
      }
    ]
  }
};
