import { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import Breadcrumb from '@/components/common/Breadcrumb';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

export const metadata: Metadata = {
  title: 'Reviews & Recommendations - CACBLAZE',
  description: 'Unbiased reviews of the latest technology, software, local businesses, books, and services.',
  keywords: 'reviews, tech reviews, software reviews, business reviews, book reviews, product comparisons',
};

const reviewsCategories = [
  {
    id: 'reviews_tech',
    title: 'Tech & Gadgets',
    items: [
      { id: 'rev_smartphones', label: 'Smartphones', href: '/reviews/smartphones', icon: 'DevicePhoneMobileIcon', description: 'Latest iPhone & Android reviews.' },
      { id: 'rev_laptops', label: 'Laptops & PC', href: '/reviews/laptops', icon: 'ComputerDesktopIcon', description: 'Best computers for work & play.' },
      { id: 'rev_accessories', label: 'Accessories', href: '/reviews/accessories', icon: 'CpuChipIcon', description: 'Headphones, chargers, and more.' },
      { id: 'rev_wearables', label: 'Wearables', href: '/reviews/wearables', icon: 'ClockIcon', description: 'Smartwatches and fitness trackers.' },
      { id: 'rev_cameras', label: 'Cameras', href: '/reviews/cameras', icon: 'CameraIcon', description: 'Photography gear reviews.' },
    ],
  },
  {
    id: 'reviews_software',
    title: 'Software & Apps',
    items: [
      { id: 'rev_productivity', label: 'Productivity Apps', href: '/reviews/productivity-apps', icon: 'BoltIcon', description: 'Tools to boost efficiency.' },
      { id: 'rev_creative', label: 'Creative Tools', href: '/reviews/creative-tools', icon: 'PaintBrushIcon', description: 'Design and editing software.' },
      { id: 'rev_security', label: 'Security Software', href: '/reviews/security-software', icon: 'ShieldCheckIcon', description: 'Antivirus and VPNs.' },
      { id: 'rev_learning', label: 'Learning Apps', href: '/reviews/learning-apps', icon: 'BookOpenIcon', description: 'Best education platforms and courses.' },
      { id: 'rev_business', label: 'Business Tools', href: '/reviews/business-tools', icon: 'BriefcaseIcon', description: 'CRM, Accounting, and HR tools.' },
    ],
  },
  {
    id: 'reviews_services',
    title: 'Services & Subscriptions',
    items: [
      { id: 'rev_streaming', label: 'Streaming Services', href: '/reviews/streaming', icon: 'PlayCircleIcon', description: 'Netflix, Prime, and others.' },
      { id: 'rev_cloud', label: 'Cloud Storage', href: '/reviews/cloud-storage', icon: 'CloudIcon', description: 'Best places to store data.' },
      { id: 'rev_internet', label: 'Internet Providers', href: '/reviews/internet-providers', icon: 'WifiIcon', description: 'ISP speed and reliability.' },
      { id: 'rev_banking', label: 'Banking Apps', href: '/reviews/banking-apps', icon: 'BanknotesIcon', description: 'Mobile banking experiences.' },
    ],
  },
  {
    id: 'reviews_local',
    title: 'Local Business (Nigeria)',
    items: [
      { id: 'rev_fintech', label: 'Nigerian Fintech', href: '/reviews/nigerian-fintech', icon: 'CurrencyDollarIcon', description: 'Apps like OPay, PalmPay, Moniepoint.' },
      { id: 'rev_restaurants', label: 'Restaurants', href: '/reviews/restaurants', icon: 'CakeIcon', description: 'Dining spots in Lagos & Abuja.' },
      { id: 'rev_logistics', label: 'Logistics Companies', href: '/reviews/logistics', icon: 'TruckIcon', description: 'Delivery and shipping services.' },
      { id: 'rev_realestate', label: 'Real Estate', href: '/reviews/real-estate', icon: 'HomeModernIcon', description: 'Housing and property agencies.' },
    ],
  },
  {
    id: 'reviews_books',
    title: 'Books & Media',
    items: [
      { id: 'rev_fiction', label: 'Fiction Books', href: '/reviews/fiction', icon: 'BookOpenIcon', description: 'Top novels and stories.' },
      { id: 'rev_nonfiction', label: 'Non-Fiction', href: '/reviews/non-fiction', icon: 'NewspaperIcon', description: 'Biographies and self-help.' },
      { id: 'rev_educational', label: 'Educational Resources', href: '/reviews/educational-books', icon: 'AcademicCapIcon', description: 'Textbooks and study guides.' },
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
                Unbiased, in-depth reviews of technology, software, local businesses, and services to help you make informed decisions.
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
                        className="group block bg-gray-50 rounded-2xl p-6 hover:bg-indigo-50 transition-colors border border-gray-100 hover:border-indigo-100"
                      >
                        <div className="w-12 h-12 rounded-xl bg-white shadow-sm text-indigo-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                          <Icon name={item.icon as any} size={24} />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-indigo-700 transition-colors">
                          {item.label}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {item.description}
                        </p>
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