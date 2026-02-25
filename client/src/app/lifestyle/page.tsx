import { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';
import Link from 'next/link';
import Breadcrumb from '@/components/common/Breadcrumb';
import { menuData } from '@/data/menuData';

export const metadata: Metadata = {
  title: 'Lifestyle - CACBLAZE',
  description:
    'Health, wellness, parenting, and travel guides to help you live better every day.',
  keywords: 'health, wellness, lifestyle, parenting, travel, habits',
};

function getLifestyleCategories() {
  const lifestyleMenu = menuData.mainMenu.find((m) => m.id === 'lifestyle');
  const categories = lifestyleMenu?.categories || [];
  const iconByHref: Record<string, string> = {
    '/lifestyle/healthy-living': 'BoltIcon',
    '/lifestyle/nutrition': 'AcademicCapIcon',
    '/lifestyle/fitness': 'PlayCircleIcon',
    '/lifestyle/mental-wellness': 'ScaleIcon',
    '/lifestyle/stress-management': 'ShieldExclamationIcon',
    '/lifestyle/sleep': 'CloudIcon',
    '/lifestyle/hygiene': 'IdentificationIcon',
    '/lifestyle/habits': 'FlagIcon',
    '/lifestyle/home-wellness': 'BuildingStorefrontIcon',
    '/lifestyle/pregnancy': 'AcademicCapIcon',
    '/lifestyle/newborn-care': 'ClipboardDocumentCheckIcon',
    '/lifestyle/child-development': 'AcademicCapIcon',
    '/lifestyle/parenting-tips': 'ClipboardDocumentCheckIcon',
    '/lifestyle/education-support': 'AcademicCapIcon',
    '/lifestyle/family-budgeting': 'CreditCardIcon',
    '/lifestyle/home-routines': 'ClipboardDocumentCheckIcon',
    '/lifestyle/parenting-resources': 'AcademicCapIcon',
    '/lifestyle/travel-planning': 'MapIcon',
    '/lifestyle/budget-travel': 'CurrencyDollarIcon',
    '/lifestyle/travel-safety': 'ShieldExclamationIcon',
    '/lifestyle/accommodation': 'BuildingStorefrontIcon',
    '/lifestyle/transportation': 'GlobeAltIcon',
    '/lifestyle/living-abroad': 'GlobeAltIcon',
    '/lifestyle/cultural-tips': 'CheckBadgeIcon',
    '/lifestyle/nigerian-culture': 'ScaleIcon',
    '/lifestyle/local-tourism': 'MapIcon',
  };
  const descriptionByHref: Record<string, string> = {
    '/lifestyle/healthy-living': 'Practical routines for daily health.',
    '/lifestyle/nutrition': 'Eat smarter with simple nutrition rules.',
    '/lifestyle/fitness': 'Train safely and build consistency.',
    '/lifestyle/mental-wellness': 'Protect your mind and mood.',
    '/lifestyle/stress-management': 'Reduce stress with proven methods.',
    '/lifestyle/sleep': 'Sleep deeper and wake refreshed.',
    '/lifestyle/hygiene': 'Personal cleanliness and prevention.',
    '/lifestyle/habits': 'Build habits that actually stick.',
    '/lifestyle/home-wellness': 'Make your home support health.',
    '/lifestyle/pregnancy': 'Understand stages and care.',
    '/lifestyle/newborn-care': 'Care routines for newborns.',
    '/lifestyle/child-development': 'Support growth milestones.',
    '/lifestyle/parenting-tips': 'Actionable parenting advice.',
    '/lifestyle/education-support': 'Help kids learn effectively.',
    '/lifestyle/family-budgeting': 'Plan and track family expenses.',
    '/lifestyle/home-routines': 'Daily schedules that work.',
    '/lifestyle/parenting-resources': 'Trusted materials and tools.',
    '/lifestyle/travel-planning': 'Plan smooth trips.',
    '/lifestyle/budget-travel': 'Travel well on a budget.',
    '/lifestyle/travel-safety': 'Stay safe wherever you go.',
    '/lifestyle/accommodation': 'Find and evaluate stays.',
    '/lifestyle/transportation': 'Move efficiently and safely.',
    '/lifestyle/living-abroad': 'Adapt and thrive overseas.',
    '/lifestyle/cultural-tips': 'Navigate local norms respectfully.',
    '/lifestyle/nigerian-culture': 'Understand Nigerian culture.',
    '/lifestyle/local-tourism': 'Explore nearby attractions.',
  };

  return categories.map((cat) => ({
    id: cat.id,
    title: cat.label,
    items:
      cat.items?.map((item) => {
        const safeHref =
          item && typeof item.href === 'string' && item.href.trim().length > 0
            ? item.href
            : '/lifestyle';
        return {
          id: item.id,
          label: item.label,
          href: safeHref,
          icon: iconByHref[safeHref] || 'ClipboardDocumentCheckIcon',
          description: descriptionByHref[safeHref] || 'Open detailed lifestyle guides.',
        };
      }) || [],
  }));
}

export default function LifestylePage() {
  const breadcrumbItems = [
    { name: 'Home', href: '/homepage' },
    { name: 'Lifestyle', href: '/lifestyle' },
  ];

  const lifestyleCategories = getLifestyleCategories();

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        <section className="py-16 bg-gradient-to-br from-rose-50 to-pink-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <Breadcrumb items={breadcrumbItems} className="mb-6" />
              <span className="inline-block px-4 py-2 rounded-full bg-rose-100 text-rose-700 text-sm font-semibold uppercase tracking-wide mb-4">
                Lifestyle Hub
              </span>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Health, Wellness & Lifestyle
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Practical guides for healthy living, mental wellness, family life, and travel.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid gap-16">
              {lifestyleCategories.map((category) => (
                <div key={category.id}>
                  <h2 className="text-3xl font-bold text-gray-900 mb-8 pb-4 border-b border-gray-100">
                    {category.title}
                  </h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {category.items.map((item) => (
                      <Link
                        key={item.id}
                        href={item.href}
                        className="group block bg-gray-50 rounded-2xl p-6 hover:bg-rose-50 transition-colors border border-gray-100 hover:border-rose-100"
                      >
                        <div className="mb-4">
                          <AppImage
                            src={`/assets/images/lifestyle/${(typeof item.href === 'string' ? item.href : '')
                              .split('/')
                              .filter(Boolean)
                              .pop() || 'lifestyle'}.jpg`}
                            alt={item.label}
                            width={800}
                            height={160}
                            className="w-full h-28 object-cover rounded-xl border border-rose-100"
                          />
                        </div>
                        <div className="w-12 h-12 rounded-xl bg-white shadow-sm text-rose-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                          <Icon name={item.icon as any} size={24} />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-rose-700 transition-colors">
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
