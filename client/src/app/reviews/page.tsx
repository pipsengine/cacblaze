import { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import Breadcrumb from '@/components/common/Breadcrumb';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import AppImage from '@/components/ui/AppImage';
import { getContextualImage, getCuratedImagesForCategory } from '@/utils/imageService';

export const metadata: Metadata = {
  title: 'Reviews & Recommendations - CACBLAZE',
  description:
    'Unbiased reviews of the latest technology, software, local businesses, books, and services.',
  keywords:
    'reviews, tech reviews, software reviews, business reviews, book reviews, product comparisons',
  alternates: { canonical: '/reviews' },
};

const reviewsCategories = [
  {
    id: 'reviews_tech',
    title: 'Tech & Gadgets',
    items: [
      {
        id: 'rev_smartphones',
        label: 'Smartphones',
        href: '/reviews/smartphones',
        icon: 'DevicePhoneMobileIcon',
        description: 'Latest iPhone & Android reviews.',
      },
      {
        id: 'rev_laptops',
        label: 'Laptops & PC',
        href: '/reviews/laptops',
        icon: 'ComputerDesktopIcon',
        description: 'Best computers for work & play.',
      },
      {
        id: 'rev_accessories',
        label: 'Accessories',
        href: '/reviews/accessories',
        icon: 'CpuChipIcon',
        description: 'Headphones, chargers, and more.',
      },
      {
        id: 'rev_wearables',
        label: 'Wearables',
        href: '/reviews/wearables',
        icon: 'ClockIcon',
        description: 'Smartwatches and fitness trackers.',
      },
      {
        id: 'rev_cameras',
        label: 'Cameras',
        href: '/reviews/cameras',
        icon: 'CameraIcon',
        description: 'Photography gear reviews.',
      },
    ],
  },
  {
    id: 'reviews_software',
    title: 'Software & Apps',
    items: [
      {
        id: 'rev_saas',
        label: 'SaaS',
        href: '/reviews/saas',
        icon: 'CloudIcon',
        description: 'Enterprise software and cloud-based solutions.',
      },
      {
        id: 'rev_digital_platforms',
        label: 'Digital Platforms',
        href: '/reviews/digital-platforms',
        icon: 'GlobeAltIcon',
        description: 'E-commerce, social media, and payment giants.',
      },
      {
        id: 'rev_productivity',
        label: 'Productivity Apps',
        href: '/reviews/productivity-apps',
        icon: 'BoltIcon',
        description: 'Tools to boost efficiency.',
      },
      {
        id: 'rev_creative',
        label: 'Creative Tools',
        href: '/reviews/creative-tools',
        icon: 'PaintBrushIcon',
        description: 'Design and editing software.',
      },
      {
        id: 'rev_course_platforms',
        label: 'Course Platforms',
        href: '/reviews/course-platforms',
        icon: 'AcademicCapIcon',
        description: 'Best online education and skill platforms.',
      },
      {
        id: 'rev_learning',
        label: 'Learning Apps',
        href: '/reviews/learning-apps',
        icon: 'BookOpenIcon',
        description: 'Best education platforms and courses.',
      },
      {
        id: 'rev_business',
        label: 'Business Tools',
        href: '/reviews/business-tools',
        icon: 'BriefcaseIcon',
        description: 'CRM, Accounting, and HR tools.',
      },
    ],
  },
  {
    id: 'reviews_services',
    title: 'Services & Subscriptions',
    items: [
      {
        id: 'rev_subscriptions',
        label: 'Subscriptions',
        href: '/reviews/subscriptions',
        icon: 'CreditCardIcon',
        description: 'Analysis of digital memberships and recurring services.',
      },
      {
        id: 'rev_online_services',
        label: 'Online Services',
        href: '/reviews/online-services',
        icon: 'GlobeAltIcon',
        description: 'Comprehensive reviews of global digital services.',
      },
      {
        id: 'rev_streaming',
        label: 'Streaming Services',
        href: '/reviews/streaming',
        icon: 'PlayCircleIcon',
        description: 'Netflix, Prime, and others.',
      },
      {
        id: 'rev_cloud',
        label: 'Cloud Storage',
        href: '/reviews/cloud-storage',
        icon: 'CloudIcon',
        description: 'Best places to store data.',
      },
      {
        id: 'rev_internet',
        label: 'Internet Providers',
        href: '/reviews/internet-providers',
        icon: 'WifiIcon',
        description: 'ISP speed and reliability.',
      },
      {
        id: 'rev_banking',
        label: 'Banking Apps',
        href: '/reviews/banking-apps',
        icon: 'BanknotesIcon',
        description: 'Mobile banking experiences.',
      },
    ],
  },
  {
    id: 'reviews_local',
    title: 'Local Business (Nigeria)',
    items: [
      {
        id: 'rev_fintech',
        label: 'Nigerian Fintech',
        href: '/nigerian-fintech',
        icon: 'CurrencyDollarIcon',
        description: 'Apps like OPay, PalmPay, Moniepoint.',
      },
      {
        id: 'rev_restaurants',
        label: 'Restaurants',
        href: '/reviews/restaurants',
        icon: 'CakeIcon',
        description: 'Dining spots in Lagos & Abuja.',
      },
      {
        id: 'rev_logistics',
        label: 'Logistics Companies',
        href: '/reviews/logistics',
        icon: 'TruckIcon',
        description: 'Delivery and shipping services.',
      },
      {
        id: 'rev_realestate',
        label: 'Real Estate',
        href: '/reviews/real-estate',
        icon: 'HomeModernIcon',
        description: 'Housing and property agencies.',
      },
    ],
  },
  {
    id: 'reviews_books',
    title: 'Books & Media',
    items: [
      {
        id: 'rev_fiction',
        label: 'Fiction Books',
        href: '/reviews/fiction',
        icon: 'BookOpenIcon',
        description: 'Top novels and stories.',
      },
      {
        id: 'rev_nonfiction',
        label: 'Non-Fiction',
        href: '/reviews/non-fiction',
        icon: 'NewspaperIcon',
        description: 'Biographies and self-help.',
      },
      {
        id: 'rev_educational',
        label: 'Educational Resources',
        href: '/reviews/educational-books',
        icon: 'AcademicCapIcon',
        description: 'Textbooks and study guides.',
      },
      {
        id: 'rev_business_books',
        label: 'Business Books',
        href: '/reviews/business-books',
        icon: 'BriefcaseIcon',
        description: 'Strategy, leadership, and startup guides.',
      },
      {
        id: 'rev_tech_books',
        label: 'Tech Books',
        href: '/reviews/tech-books',
        icon: 'CommandLineIcon',
        description: 'Programming, architecture, and engineering manuals.',
      },
      {
        id: 'rev_self_dev',
        label: 'Self-Development',
        href: '/reviews/self-development',
        icon: 'SparklesIcon',
        description: 'Courses, habits, and frameworks.',
      },
    ],
  },
  {
    id: 'reviews_comparisons',
    title: 'Value & Comparisons',
    items: [
      {
        id: 'rev_free_vs_paid',
        label: 'Free vs Paid',
        href: '/reviews/free-vs-paid',
        icon: 'ScaleIcon',
        description: 'Is the premium upgrade worth it?',
      },
      {
        id: 'rev_alternatives',
        label: 'Best Alternatives',
        href: '/reviews/alternatives',
        icon: 'ArrowsRightLeftIcon',
        description: 'Better, cheaper, or faster options.',
      },
      {
        id: 'rev_best_for_nigerians',
        label: 'Best for Nigerians',
        href: '/reviews/best-for-nigerians',
        icon: 'GlobeAltIcon',
        description: 'Top picks for the local market.',
      },
      {
        id: 'rev_student_deals',
        label: 'Student Deals',
        href: '/reviews/student-deals',
        icon: 'AcademicCapIcon',
        description: 'Best discounts for learners.',
      },
    ],
  },
];

export default function ReviewsPage() {
  const breadcrumbItems = [
    { name: 'Home', href: '/homepage' },
    { name: 'Reviews', href: '/reviews' },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        {/* Page Header */}
        <section className="py-16 bg-gradient-to-br from-indigo-50 to-purple-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <Breadcrumb items={breadcrumbItems} className="mb-6" />
              <span className="inline-block px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm font-semibold uppercase tracking-wide mb-4">
                Honest Opinions
              </span>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Reviews You Can Trust
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Unbiased, in-depth reviews of technology, software, local businesses, and services
                to help you make informed decisions.
              </p>
            </div>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid gap-16">
              {reviewsCategories.map((category) => (
                <div key={category.id}>
                  <h2 className="text-3xl font-bold text-gray-900 mb-8 pb-4 border-b border-gray-100">
                    {category.title}
                  </h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {category.items.map((item) => (
                      <Link
                        key={item.id}
                        href={item.href}
                        className="group block bg-gray-50 rounded-2xl overflow-hidden hover:bg-indigo-50 transition-colors border border-gray-100 hover:border-indigo-100"
                      >
                        {(() => {
                          const primary = getContextualImage({
                            category: 'reviews',
                            title: item.label,
                            alt: item.label,
                            width: 800,
                            height: 500,
                            preferCurated: true,
                          });
                          const curatedList = getCuratedImagesForCategory('reviews') || [];
                          const hash =
                            item.label.split('').reduce((acc, ch) => acc + ch.charCodeAt(0), 0) +
                            item.id.split('').reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
                          const idx = curatedList.length ? hash % curatedList.length : 0;
                          const fallback = curatedList[idx]?.src || '/assets/images/no_image.png';
                          const secondaryFallback =
                            curatedList[(idx + 1) % Math.max(curatedList.length, 1)]?.src ||
                            '/assets/images/no_image.png';
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
                        <div className="w-12 h-12 rounded-xl bg-white shadow-sm text-indigo-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                          <Icon name={item.icon as any} size={24} />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-indigo-700 transition-colors">
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
