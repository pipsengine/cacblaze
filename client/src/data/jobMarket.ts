export interface SalaryRange {
  entry: string;
  mid: string;
  senior: string;
}

export interface IndustryData {
  id: string;
  slug: string;
  name: string;
  icon: string;
  description: string;
  salaryRange: SalaryRange;
  growth: string;
  topRoles: string[];
  topSkills: string[];
  topEmployers: string[];
  challenges: string[];
  opportunities: string[];
}

export const industriesData: Record<string, IndustryData> = {
  technology: {
    id: 'tech',
    slug: 'technology',
    name: 'Technology',
    icon: 'ComputerDesktopIcon',
    description:
      'The fastest growing sector in Nigeria, driven by Fintech, Edtech, and remote work opportunities.',
    salaryRange: {
      entry: '₦150,000 - ₦300,000 / month',
      mid: '₦400,000 - ₦900,000 / month',
      senior: '₦1,200,000 - ₦3,500,000+ / month',
    },
    growth: '+25% Annual Growth',
    topRoles: [
      'Software Engineer',
      'Product Manager',
      'Data Analyst',
      'UI/UX Designer',
      'DevOps Engineer',
    ],
    topSkills: [
      'JavaScript/TypeScript',
      'Python',
      'React/Next.js',
      'Data Analysis (SQL)',
      'Cloud (AWS/Azure)',
    ],
    topEmployers: ['Paystack', 'Flutterwave', 'Interswitch', 'Andela', 'Moniepoint'],
    challenges: ['Unstable Power Supply', 'High Cost of Internet', 'Brain Drain (Japa)'],
    opportunities: ['Remote work for foreign companies (USD earnings)', 'Rising startup ecosystem'],
  },
  finance: {
    id: 'finance',
    slug: 'finance',
    name: 'Finance & Banking',
    icon: 'BanknotesIcon',
    description:
      'A stable and prestigious sector, with traditional banks competing heavily with new-age Fintechs.',
    salaryRange: {
      entry: '₦120,000 - ₦250,000 / month',
      mid: '₦350,000 - ₦700,000 / month',
      senior: '₦1,000,000 - ₦2,500,000 / month',
    },
    growth: '+12% Annual Growth',
    topRoles: [
      'Investment Banker',
      'Chartered Accountant',
      'Risk Manager',
      'Financial Analyst',
      'Compliance Officer',
    ],
    topSkills: [
      'Financial Modeling',
      'Risk Assessment',
      'Regulatory Compliance',
      'Accounting (ICAN/ACCA)',
      'Excel',
    ],
    topEmployers: ['GTCO', 'Zenith Bank', 'UBA', 'Access Bank', 'Stanbic IBTC'],
    challenges: ['Regulatory changes (CBN policies)', 'High pressure environment'],
    opportunities: ['Fintech integration', 'Wealth Management for HNIs'],
  },
  'oil-gas': {
    id: 'oil-gas',
    slug: 'oil-gas',
    name: 'Oil & Gas',
    icon: 'FireIcon',
    description:
      'Historically the highest paying sector in Nigeria, though opportunities are more competitive.',
    salaryRange: {
      entry: '₦300,000 - ₦600,000 / month',
      mid: '₦800,000 - ₦1,500,000 / month',
      senior: '₦2,500,000 - ₦5,000,000+ / month',
    },
    growth: '+8% Annual Growth',
    topRoles: ['Petroleum Engineer', 'Geologist', 'HSE Officer', 'Project Engineer'],
    topSkills: [
      'Project Management',
      'Safety Regulations (HSE)',
      'Engineering Design',
      'Data Interpretation',
    ],
    topEmployers: ['Shell (SPDC)', 'Chevron', 'ExxonMobil', 'NLNG', 'Seplat'],
    challenges: ['Location (Remote/Offshore)', 'Industry volatility', 'Environmental concerns'],
    opportunities: ['Gas expansion projects', 'Renewable energy transitions'],
  },
  healthcare: {
    id: 'healthcare',
    slug: 'healthcare',
    name: 'Healthcare',
    icon: 'HeartIcon',
    description:
      'A critical sector facing severe brain drain, leading to high demand for remaining professionals.',
    salaryRange: {
      entry: '₦150,000 - ₦250,000 / month',
      mid: '₦300,000 - ₦600,000 / month',
      senior: '₦800,000 - ₦1,500,000 / month',
    },
    growth: '+15% Demand',
    topRoles: ['Medical Doctor', 'Nurse', 'Pharmacist', 'Medical Lab Scientist'],
    topSkills: ['Patient Care', 'Diagnosis', 'Surgical Skills', 'Pharmacy Management'],
    topEmployers: ['Lagoon Hospitals', 'Reddingtton', 'Federal Medical Centres', 'Private Clinics'],
    challenges: ['Brain Drain (Japa)', 'Inadequate infrastructure', 'Burnout'],
    opportunities: ['Telemedicine', 'Private practice', 'Public health consulting'],
  },
  education: {
    id: 'education',
    slug: 'education',
    name: 'Education',
    icon: 'AcademicCapIcon',
    description:
      'A sector with wide variance. Private international schools pay well, while public sector lags.',
    salaryRange: {
      entry: '₦50,000 - ₦150,000 / month',
      mid: '₦150,000 - ₦400,000 / month',
      senior: '₦500,000 - ₦1,200,000 / month',
    },
    growth: '+10% Annual Growth',
    topRoles: ['Lecturer', 'Secondary School Teacher', 'Education Administrator', 'Tutor'],
    topSkills: [
      'Curriculum Development',
      'Classroom Management',
      'EdTech Tools',
      'Public Speaking',
    ],
    topEmployers: [
      'British International School',
      'Greensprings',
      'Covenant University',
      'Lagos Business School',
    ],
    challenges: ['Low pay in public sector', 'Delayed salaries', 'Infrastructure gaps'],
    opportunities: ['Online Tutoring', 'EdTech content creation', 'Corporate Training'],
  },
  marketing: {
    id: 'marketing',
    slug: 'marketing',
    name: 'Marketing & Sales',
    icon: 'MegaphoneIcon',
    description: 'Dynamic field where pay is often tied to performance and commission.',
    salaryRange: {
      entry: '₦100,000 - ₦200,000 / month',
      mid: '₦300,000 - ₦600,000 / month',
      senior: '₦800,000 - ₦2,000,000 / month',
    },
    growth: '+18% Annual Growth',
    topRoles: ['Digital Marketer', 'Brand Manager', 'Sales Manager', 'Content Strategist'],
    topSkills: ['SEO/SEM', 'Social Media Management', 'Copywriting', 'Data Analytics'],
    topEmployers: ['FMCG Companies (Nestle, Unilever)', 'Advertising Agencies', 'Tech Startups'],
    challenges: ['High targets', 'Fast-paced changes in algorithms'],
    opportunities: ['Influencer Marketing', 'Global remote roles'],
  },
};
