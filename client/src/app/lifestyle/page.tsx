import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import Breadcrumb from '@/components/common/Breadcrumb';
import { menuData } from '@/data/menuData';

const LifestylePage = () => {
  const lifestyleMenu = menuData?.mainMenu?.find((item) => item?.id === 'lifestyle');

  const breadcrumbItems = [
    { name: 'Home', href: '/homepage' },
    { name: 'Lifestyle', href: '/lifestyle' },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-muted/30 to-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <Breadcrumb items={breadcrumbItems} className="mb-8" />

        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
            <Icon name="SparklesIcon" size={32} className="text-primary" />
          </div>
          <h1 className="text-5xl font-bold text-foreground mb-4">
            Lifestyle Guides
          </h1>
          <p className="text-xl text-secondary max-w-2xl mx-auto">
            Health, wellness, relationships, personal development, and everyday living tips.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {lifestyleMenu?.categories?.map((category) => (
            <div
              key={category?.id}
              className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow"
            >
              <h2 className="text-xl font-semibold text-foreground mb-4">
                {category?.label}
              </h2>
              <ul className="space-y-3">
                {category?.items?.map((item) => (
                  <li key={item?.id}>
                    <Link
                      href={item?.href}
                      className="flex items-center gap-2 text-sm text-secondary hover:text-primary transition-colors group"
                    >
                      <Icon
                        name="ArrowRightIcon"
                        size={16}
                        className="text-muted-foreground group-hover:text-primary transition-colors"
                      />
                      {item?.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default LifestylePage;