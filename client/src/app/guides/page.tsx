import { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';
import Breadcrumb from '@/components/common/Breadcrumb';
import GuidesInteractive from './components/GuidesInteractive';
import FeaturedCategory from './components/FeaturedCategory';
import RecentUpdates from './components/RecentUpdates';
import AppImage from '@/components/ui/AppImage';
import { getContextualImage, getCuratedImagesForCategory } from '@/utils/imageService';

export const metadata: Metadata = {
  title: 'Guides - CACBLAZE',
  description:
    'Browse 2,400+ comprehensive guides across finance, career, and life. Expert-verified content updated daily.',
  keywords: 'guides, tutorials, career advice, personal finance, self development',
};

const guidesCategories = [
  {
    id: 'guides_finance',
    title: 'Personal Finance & Money',
    items: [
      {
        id: 'guides_budgeting',
        label: 'Budgeting & Expense Tracking',
        href: '/guides/budgeting',
        icon: 'BanknotesIcon',
        description: 'Stop living paycheck to paycheck.',
      },
      {
        id: 'guides_saving',
        label: 'Saving Strategies',
        href: '/guides/saving',
        icon: 'CircleStackIcon',
        description: 'Build your emergency fund fast.',
      },
      {
        id: 'guides_investing',
        label: 'Investing Basics',
        href: '/guides/investing',
        icon: 'ChartBarIcon',
        description: 'Grow your wealth with smart moves.',
      },
      {
        id: 'guides_retirement',
        label: 'Retirement Planning',
        href: '/guides/retirement',
        icon: 'ClockIcon',
        description: 'Secure your future today.',
      },
      {
        id: 'guides_debt',
        label: 'Debt Management',
        href: '/guides/debt-management',
        icon: 'CreditCardIcon',
        description: 'Escape the debt trap permanently.',
      },
      {
        id: 'guides_banking',
        label: 'Online Banking',
        href: '/guides/online-banking',
        icon: 'BuildingLibraryIcon',
        description: 'Navigate digital banking safely.',
      },
      {
        id: 'guides_fintech',
        label: 'Mobile Money & Fintech',
        href: '/guides/fintech',
        icon: 'DevicePhoneMobileIcon',
        description: 'Master apps like OPay and PalmPay.',
      },
      {
        id: 'guides_crypto',
        label: 'Crypto Education',
        href: '/guides/crypto',
        icon: 'CurrencyDollarIcon',
        description: 'Understand Bitcoin and blockchain.',
      },
      {
        id: 'guides_side_hustle',
        label: 'Side Hustles',
        href: '/guides/side-hustles',
        icon: 'BriefcaseIcon',
        description: 'Make extra money on weekends.',
      },
    ],
  },
  {
    id: 'guides_career',
    title: 'Career, Work & Productivity',
    items: [
      {
        id: 'guides_job_search',
        label: 'Job Search Strategies',
        href: '/guides/job-search',
        icon: 'MagnifyingGlassIcon',
        description: 'Find hidden job opportunities.',
      },
      {
        id: 'guides_cv',
        label: 'CV / Resume Writing',
        href: '/guides/cv-writing',
        icon: 'DocumentTextIcon',
        description: 'Write a CV that gets interviews.',
      },
      {
        id: 'guides_interview',
        label: 'Interview Preparation',
        href: '/guides/interview-prep',
        icon: 'UserGroupIcon',
        description: 'Answer tough questions with confidence.',
      },
      {
        id: 'guides_remote',
        label: 'Remote Work',
        href: '/guides/remote-work',
        icon: 'GlobeAmericasIcon',
        description: 'Land a high-paying remote job.',
      },
      {
        id: 'guides_freelancing',
        label: 'Freelancing',
        href: '/guides/freelancing',
        icon: 'ComputerDesktopIcon',
        description: 'Start your freelance career today.',
      },
      {
        id: 'guides_productivity',
        label: 'Productivity Tools',
        href: '/guides/productivity-tools',
        icon: 'BoltIcon',
        description: 'Get more done in less time.',
      },
      {
        id: 'guides_goals',
        label: 'Goal Setting',
        href: '/guides/goal-setting',
        icon: 'FlagIcon',
        description: 'Achieve your big dreams this year.',
      },
      {
        id: 'guides_work_life',
        label: 'Work-Life Balance',
        href: '/guides/work-life-balance',
        icon: 'ScaleIcon',
        description: 'Avoid burnout and stay healthy.',
      },
    ],
  },
  {
    id: 'guides_explainers',
    title: 'Explainers & Quick Lists',
    items: [
      {
        id: 'guides_what_is',
        label: 'What is...',
        href: '/guides/what-is',
        icon: 'QuestionMarkCircleIcon',
        description: 'Complex terms explained simply.',
      },
      {
        id: 'guides_how_works',
        label: 'How it Works',
        href: '/guides/how-it-works',
        icon: 'CogIcon',
        description: 'The mechanics behind the tech.',
      },
      {
        id: 'guides_pros_cons',
        label: 'Pros & Cons',
        href: '/guides/pros-cons',
        icon: 'ArrowsRightLeftIcon',
        description: 'Make informed decisions.',
      },
      {
        id: 'guides_comparisons',
        label: 'Comparisons',
        href: '/guides/comparisons',
        icon: 'ScaleIcon',
        description: 'Side-by-side product battles.',
      },
      {
        id: 'guides_best_tools',
        label: 'Best Tools',
        href: '/guides/best-tools',
        icon: 'StarIcon',
        description: 'Top-rated tools for every task.',
      },
      {
        id: 'guides_step_by_step',
        label: 'Step-by-Step Guides',
        href: '/guides/step-by-step',
        icon: 'ListBulletIcon',
        description: 'Follow easy instructions.',
      },
      {
        id: 'guides_beginner',
        label: 'Beginner Roadmaps',
        href: '/guides/beginner-roadmaps',
        icon: 'MapIcon',
        description: 'Start from zero to hero.',
      },
    ],
  },
  {
    id: 'guides_faqs',
    title: 'FAQs & Troubleshooting',
    items: [
      {
        id: 'guides_common_q',
        label: 'Common Questions',
        href: '/guides/common-questions',
        icon: 'ChatBubbleLeftRightIcon',
        description: 'Answers to frequent queries.',
      },
      {
        id: 'guides_troubleshoot',
        label: 'Troubleshooting',
        href: '/guides/troubleshooting',
        icon: 'WrenchScrewdriverIcon',
        description: 'Fix common problems yourself.',
      },
      {
        id: 'guides_beginner_help',
        label: 'Beginner Help',
        href: '/guides/beginner-help',
        icon: 'HandRaisedIcon',
        description: 'Newbie-friendly support.',
      },
    ],
  },
];

export default function GuidesPage() {
  const breadcrumbItems = [
    { name: 'Home', href: '/homepage' },
    { name: 'Guides', href: '/guides' },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        {/* Page Header */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <Breadcrumb items={breadcrumbItems} className="mb-6" />
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold uppercase tracking-wide mb-4">
                Knowledge Library
              </span>
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Explore Guides
              </h1>
              <p className="text-xl text-secondary mb-8 leading-relaxed">
                2,400+ comprehensive guides across every domain. Expert-verified, regularly updated,
                and optimized for learning.
              </p>
            </div>
          </div>
        </section>

        {/* Categories Hub */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid gap-16">
              {guidesCategories.map((category) => (
                <div key={category.id}>
                  <h2 className="text-3xl font-bold text-gray-900 mb-8 pb-4 border-b border-gray-100">
                    {category.title}
                  </h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {category.items.map((item) => (
                      <Link
                        key={item.id}
                        href={item.href}
                        className="group block bg-gray-50 rounded-2xl overflow-hidden hover:bg-blue-50 transition-colors border border-gray-100 hover:border-blue-100"
                      >
                        {(() => {
                          const primary = getContextualImage({
                            category: 'guides',
                            title: item.label,
                            alt: item.label,
                            width: 800,
                            height: 500,
                            preferCurated: true,
                          });
                          const curatedList = getCuratedImagesForCategory('guides') || [];
                          const fallback = curatedList[0]?.src || '/assets/images/no_image.png';
                          const secondaryFallback = curatedList[1]?.src || '/assets/images/no_image.png';
                          return (
                            <div className="relative aspect-[16/10] bg-white">
                              <AppImage
                                src={primary.src}
                                alt={primary.alt}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                fallbackSrc={fallback}
                                secondaryFallbackSrc={secondaryFallback}
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                            </div>
                          );
                        })()}
                        <div className="w-12 h-12 rounded-xl bg-white shadow-sm text-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                          <Icon name={item.icon as any} size={24} />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
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

        {/* Interactive Filters & Grid */}
        <GuidesInteractive />

        {/* Featured Category */}
        <FeaturedCategory />

        {/* Recent Updates */}
        <RecentUpdates />
      </main>
      <Footer />
    </>
  );
}
