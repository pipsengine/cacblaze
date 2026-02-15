import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Breadcrumb from '@/components/common/Breadcrumb';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';
import { getContextualImage, getCuratedImagesForCategory } from '@/utils/imageService';

export const metadata: Metadata = {
  title: 'How-To Guides Hub - CACBLAZE',
  description:
    'Step-by-step guides for technology, business, home, and cooking. Clear instructions you can execute today.',
  keywords:
    'how to, tutorials, diy, instructions, step-by-step, technology, business, cooking, home',
};

const howtoCategories = [
  {
    id: 'guides_howto_tech',
    categoryKey: 'technology',
    title: 'Technology & Digital Life',
    items: [
      { id: 'howto_smartphones', label: 'Use Smartphones', href: '/howto/smartphones', icon: 'DevicePhoneMobileIcon', description: 'Master your iPhone or Android.' },
      { id: 'howto_fix_phone', label: 'Fix Common Phone Issues', href: '/howto/fix-phone', icon: 'WrenchScrewdriverIcon', description: 'Save money on repairs.' },
      { id: 'howto_install_apps', label: 'Install Apps', href: '/howto/install-apps', icon: 'ArrowDownTrayIcon', description: 'Get the best apps safely.' },
      { id: 'howto_secure_accounts', label: 'Secure Accounts', href: '/howto/secure-accounts', icon: 'LockClosedIcon', description: 'Protect yourself from hackers.' },
      { id: 'howto_productivity_tools', label: 'Use Productivity Tools', href: '/howto/productivity-tools', icon: 'BoltIcon', description: 'Work smarter, not harder.' },
      { id: 'howto_website', label: 'Build a Website', href: '/howto/build-website', icon: 'GlobeAltIcon', description: 'Launch your site in minutes.' },
      { id: 'howto_software', label: 'Use Software', href: '/howto/software', icon: 'CommandLineIcon', description: 'Guides for Windows & Mac tools.' },
    ],
  },
  {
    id: 'guides_howto_business',
    categoryKey: 'business',
    title: 'Business & Entrepreneurship',
    items: [
      { id: 'howto_start_business', label: 'Start a Business', href: '/howto/start-business', icon: 'RocketLaunchIcon', description: 'From idea to launch.' },
      { id: 'howto_register_business', label: 'Register a Business', href: '/howto/register-business', icon: 'DocumentCheckIcon', description: 'CAC registration explained.' },
      { id: 'howto_market_online', label: 'Market Online', href: '/howto/market-online', icon: 'MegaphoneIcon', description: 'Get customers on social media.' },
      { id: 'howto_sell_online', label: 'Sell Online', href: '/howto/sell-online', icon: 'ShoppingCartIcon', description: 'E-commerce setup guide.' },
      { id: 'howto_manage_finances', label: 'Manage Finances', href: '/howto/manage-finances', icon: 'BanknotesIcon', description: 'Keep your books balanced.' },
      { id: 'howto_grow_customers', label: 'Grow Customers', href: '/howto/grow-customers', icon: 'UserGroupIcon', description: 'Increase your customer base.' },
      { id: 'howto_pricing', label: 'Price Products', href: '/howto/pricing', icon: 'TagIcon', description: 'Maximize your profits.' },
    ],
  },
  {
    id: 'guides_howto_home',
    categoryKey: 'home',
    title: 'Home & Daily Life',
    items: [
      { id: 'howto_home_organization', label: 'Home Organization', href: '/howto/home-organization', icon: 'HomeIcon', description: 'Declutter your space.' },
      { id: 'howto_cleaning', label: 'Cleaning Guides', href: '/howto/cleaning', icon: 'SparklesIcon', description: 'Tips for a sparkling home.' },
      { id: 'howto_home_maintenance', label: 'Home Maintenance', href: '/howto/home-maintenance', icon: 'WrenchIcon', description: 'Fix leaks and squeaks.' },
      { id: 'howto_energy_saving', label: 'Energy Saving Tips', href: '/howto/energy-saving', icon: 'LightBulbIcon', description: 'Lower your electricity bills.' },
      { id: 'howto_home_safety', label: 'Home Safety Tips', href: '/howto/home-safety', icon: 'ShieldCheckIcon', description: 'Keep your family safe.' },
    ],
  },
  {
    id: 'guides_howto_cooking',
    categoryKey: 'cooking',
    title: 'Food & Cooking',
    items: [
      { id: 'howto_african_recipes', label: 'African Recipes', href: '/howto/african-recipes', icon: 'FireIcon', description: 'Cook authentic local dishes.' },
      { id: 'howto_international_recipes', label: 'International Recipes', href: '/howto/international-recipes', icon: 'GlobeAmericasIcon', description: 'Try flavors from abroad.' },
      { id: 'howto_cooking_beginners', label: 'Cooking for Beginners', href: '/howto/cooking-beginners', icon: 'AcademicCapIcon', description: 'Learn the basics of cooking.' },
      { id: 'howto_meal_prep', label: 'Meal Prep', href: '/howto/meal-prep', icon: 'ClockIcon', description: 'Save time on weeknights.' },
      { id: 'howto_kitchen_tips', label: 'Kitchen Tips', href: '/howto/kitchen-tips', icon: 'LightBulbIcon', description: 'Hacks for better cooking.' },
      { id: 'howto_food_storage', label: 'Food Storage', href: '/howto/food-storage', icon: 'ArchiveBoxIcon', description: 'Keep ingredients fresh.' },
    ],
  },
];

export default function GuidesHowToPage() {
  const breadcrumbItems = [
    { name: 'Home', href: '/homepage' },
    { name: 'Guides', href: '/guides' },
    { name: 'How-To', href: '/guides/howto' },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <Breadcrumb items={breadcrumbItems} className="mb-6" />
              <span className="inline-block px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-semibold uppercase tracking-wide mb-4">
                Step-by-Step Hub
              </span>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                How-To Guides
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Practical, easy-to-follow instructions across technology, business, cooking, and home.
              </p>
              <div className="flex items-center gap-3">
                <Link
                  href="/howto"
                  className="inline-flex items-center gap-2 bg-green-600 text-white font-bold px-8 py-4 rounded-2xl hover:bg-green-700 transition-all shadow-xl shadow-green-200 hover:-translate-y-1"
                >
                  Explore All How-To
                  <Icon name="ListBulletIcon" size={20} />
                </Link>
                <Link
                  href="/guides"
                  className="inline-flex items-center gap-2 text-green-700 font-semibold hover:text-green-800"
                >
                  Back to Guides
                  <Icon name="ArrowRightIcon" size={18} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid gap-16">
              {howtoCategories.map((category) => (
                <div key={category.id}>
                  <h2 className="text-3xl font-bold text-gray-900 mb-8 pb-4 border-b border-gray-100">
                    {category.title}
                  </h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {category.items.map((item) => (
                      <Link
                        key={item.id}
                        href={item.href}
                        className="group block bg-gray-50 rounded-2xl hover:bg-green-50 transition-colors border border-gray-100 hover:border-green-100 overflow-hidden"
                      >
                        {(() => {
                          const primary = getContextualImage({
                            category: category.categoryKey,
                            title: item.label,
                            alt: item.label,
                            width: 800,
                            height: 500,
                            preferCurated: true,
                          });
                          const curatedList = getCuratedImagesForCategory(category.categoryKey) || [];
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
                        <div className="p-6">
                          <div className="w-12 h-12 rounded-xl bg-white shadow-sm text-green-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                          <Icon name={item.icon as any} size={24} />
                          </div>
                          <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors">
                            {item.label}
                          </h3>
                          <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                        </div>
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
