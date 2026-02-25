import { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import Breadcrumb from '@/components/common/Breadcrumb';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

export const metadata: Metadata = {
  title: 'Education & Learning Hub - CACBLAZE',
  description:
    'Resources for students, professionals, and lifelong learners. Study guides, career advice, and skill development.',
  keywords: 'education, learning, study tips, career advice, online courses, skill building',
};

const educationCategories = [
  {
    id: 'edu_academic',
    title: 'Academic Resources',
    items: [
      {
        id: 'edu_study_techniques',
        label: 'Study Techniques',
        href: '/study-techniques',
        icon: 'SparklesIcon',
        description: 'Science-backed learning methods.',
      },
      {
        id: 'edu_exam_prep',
        label: 'Exam Preparation',
        href: '/exam-prep',
        icon: 'PencilSquareIcon',
        description: 'Ace your JAMB, WAEC, and more.',
      },
      {
        id: 'edu_study_guides',
        label: 'Study Guides',
        href: '/study-guides',
        icon: 'BookOpenIcon',
        description: 'Comprehensive notes for subjects.',
      },
      {
        id: 'edu_admissions',
        label: 'University Admissions',
        href: '/admissions',
        icon: 'BuildingLibraryIcon',
        description: 'Get into your dream school.',
      },
      {
        id: 'edu_scholarships',
        label: 'Scholarships',
        href: '/scholarships',
        icon: 'AcademicCapIcon',
        description: 'Find funding for your studies.',
      },
      {
        id: 'edu_online_courses',
        label: 'Online Courses',
        href: '/online-courses',
        icon: 'ComputerDesktopIcon',
        description: 'Learn from the best online.',
      },
    ],
  },
  {
    id: 'edu_professional',
    title: 'Professional Development',
    items: [
      {
        id: 'edu_certifications',
        label: 'Certifications',
        href: '/certifications',
        icon: 'CertificateIcon',
        description: 'Boost your resume with certs.',
      },
      {
        id: 'edu_career_advice',
        label: 'Career Advice',
        href: '/career-advice',
        icon: 'BriefcaseIcon',
        description: 'Navigate your career path.',
      },
      {
        id: 'edu_resume',
        label: 'Resume Building',
        href: '/resume-building',
        icon: 'DocumentTextIcon',
        description: 'Craft the perfect CV.',
      },
      {
        id: 'edu_interview',
        label: 'Interview Tips',
        href: '/interview-tips',
        icon: 'UserGroupIcon',
        description: 'Impress your future employer.',
      },
    ],
  },
  {
    id: 'edu_language',
    title: 'Language Learning',
    items: [
      {
        id: 'edu_english',
        label: 'Learn English',
        href: '/learn-english',
        icon: 'LanguageIcon',
        description: 'Improve your grammar and speaking.',
      },
      {
        id: 'edu_french',
        label: 'Learn French',
        href: '/learn-french',
        icon: 'ChatBubbleLeftRightIcon',
        description: 'Parlez-vous français?',
      },
      {
        id: 'edu_local_lang',
        label: 'Local Languages',
        href: '/local-languages',
        icon: 'MapIcon',
        description: 'Learn Hausa, Igbo, Yoruba.',
      },
    ],
  },
  {
    id: 'edu_skills',
    title: 'Skill Building',
    items: [
      {
        id: 'edu_coding',
        label: 'Learn Coding',
        href: '/learn-coding',
        icon: 'CodeBracketIcon',
        description: 'Software development basics.',
      },
      {
        id: 'edu_design',
        label: 'Graphic Design',
        href: '/graphic-design',
        icon: 'PaintBrushIcon',
        description: 'Master visual communication.',
      },
      {
        id: 'edu_marketing',
        label: 'Digital Marketing',
        href: '/digital-marketing',
        icon: 'MegaphoneIcon',
        description: 'Sell anything online.',
      },
      {
        id: 'edu_finance',
        label: 'Financial Literacy',
        href: '/financial-literacy',
        icon: 'BanknotesIcon',
        description: 'Manage your money wisely.',
      },
    ],
  },
  {
    id: 'edu_student_life',
    title: 'Student Life',
    items: [
      {
        id: 'edu_productivity',
        label: 'Student Productivity',
        href: '/student-productivity',
        icon: 'ClockIcon',
        description: 'Balance study and life.',
      },
      {
        id: 'edu_mental_health',
        label: 'Mental Health',
        href: '/mental-health',
        icon: 'HeartIcon',
        description: 'Stay healthy while studying.',
      },
      {
        id: 'edu_budgeting',
        label: 'Student Budgeting',
        href: '/student-budgeting',
        icon: 'CalculatorIcon',
        description: 'Save money on campus.',
      },
    ],
  },
];

export default function TopicsEducationPage() {
  const breadcrumbItems = [
    { name: 'Home', href: '/homepage' },
    { name: 'Education', href: '/topics/education' },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        <section className="py-16 bg-gradient-to-br from-sky-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <Breadcrumb items={breadcrumbItems} className="mb-6" />
              <span className="inline-block px-4 py-2 rounded-full bg-sky-100 text-sky-700 text-sm font-semibold uppercase tracking-wide mb-4">
                Knowledge Hub
              </span>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">Learn & Grow</h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Empowering you with the best educational resources, career advice, and
                skill-building guides for a brighter future.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid gap-16">
              {educationCategories.map((category) => (
                <div key={category.id}>
                  <h2 className="text-3xl font-bold text-gray-900 mb-8 pb-4 border-b border-gray-100">
                    {category.title}
                  </h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {category.items.map((item) => (
                      <Link
                        key={item.id}
                        href={item.href}
                        className="group block bg-gray-50 rounded-2xl p-6 hover:bg-sky-50 transition-colors border border-gray-100 hover:border-sky-100"
                      >
                        <div className="w-12 h-12 rounded-xl bg-white shadow-sm text-sky-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                          <Icon name={item.icon as any} size={24} />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-sky-700 transition-colors">
                          {item.label}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
