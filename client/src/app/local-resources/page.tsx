import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import Breadcrumb from '@/components/common/Breadcrumb';
import { menuData } from '@/data/menuData';

const LocalResourcesPage = () => {
  const localResourcesMenu = menuData?.mainMenu?.find((item) => item?.id === 'local-resources');

  const breadcrumbItems = [
    { name: 'Home', href: '/homepage' },
    { name: 'Local Resources', href: '/local-resources' },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-muted/30 to-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <Breadcrumb items={breadcrumbItems} className="mb-8" />

        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
            <Icon name="MapPinIcon" size={32} className="text-primary" />
          </div>
          <h1 className="text-5xl font-bold text-foreground mb-4">Local Resources</h1>
          <p className="text-xl text-secondary max-w-2xl mx-auto">
            Nigerian-specific guides for government services, local businesses, and community
            resources.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {localResourcesMenu?.categories?.map((category) => (
            <div
              key={category?.id}
              className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow"
            >
              <h2 className="text-xl font-semibold text-foreground mb-4">{category?.label}</h2>
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

export default LocalResourcesPage;
