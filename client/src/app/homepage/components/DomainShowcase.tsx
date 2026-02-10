import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface Domain {
  id: string;
  title: string;
  description: string;
  count: string;
  icon: 'BookOpenIcon' | 'WrenchScrewdriverIcon' | 'StarIcon' | 'AcademicCapIcon' | 'CodeBracketIcon' | 'HeartIcon' | 'MapPinIcon';
  color: string;
  href: string;
}

const DomainShowcase = () => {
  const domains: Domain[] = [
    {
      id: 'domain_guides',
      title: 'Guides',
      description: 'Comprehensive guides on every topic',
      count: '2,400+',
      icon: 'BookOpenIcon',
      color: 'bg-blue-50 text-blue-600 border-blue-200',
      href: '/guides',
    },
    {
      id: 'domain_howto',
      title: 'How-To',
      description: 'Step-by-step tutorials and walkthroughs',
      count: '850+',
      icon: 'WrenchScrewdriverIcon',
      color: 'bg-green-50 text-green-600 border-green-200',
      href: '/howto',
    },
    {
      id: 'domain_reviews',
      title: 'Reviews',
      description: 'In-depth product and service reviews',
      count: '320+',
      icon: 'StarIcon',
      color: 'bg-amber-50 text-amber-600 border-amber-200',
      href: '/reviews',
    },
    {
      id: 'domain_education',
      title: 'Education',
      description: 'Learning paths and educational resources',
      count: '1,100+',
      icon: 'AcademicCapIcon',
      color: 'bg-purple-50 text-purple-600 border-purple-200',
      href: '/education',
    },
    {
      id: 'domain_technology',
      title: 'Technology',
      description: 'Tech insights and troubleshooting',
      count: '940+',
      icon: 'CodeBracketIcon',
      color: 'bg-indigo-50 text-indigo-600 border-indigo-200',
      href: '/technology',
    },
    {
      id: 'domain_lifestyle',
      title: 'Lifestyle',
      description: 'Wellness, productivity, and life tips',
      count: '680+',
      icon: 'HeartIcon',
      color: 'bg-pink-50 text-pink-600 border-pink-200',
      href: '/lifestyle',
    },
    {
      id: 'domain_local',
      title: 'Local Resources',
      description: 'City guides and local directories',
      count: '420+',
      icon: 'MapPinIcon',
      color: 'bg-teal-50 text-teal-600 border-teal-200',
      href: '/local-resources',
    },
  ];

  return (
    <section className="py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold uppercase tracking-wide mb-4">
            Explore Domains
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Knowledge Across Every Domain
          </h2>
          <p className="text-xl text-secondary max-w-2xl mx-auto">
            From technology to lifestyle, find authoritative content on the topics that matter to you.
          </p>
        </div>

        {/* Domain Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {domains.map((domain) => (
            <Link
              key={domain.id}
              href={domain.href}
              className="group relative p-8 rounded-3xl border-2 bg-white hover:border-primary transition-all hover-lift"
            >
              <div className={`w-16 h-16 rounded-2xl ${domain.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <Icon name={domain.icon} size={32} />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {domain.title}
              </h3>
              <p className="text-secondary mb-4 leading-relaxed">
                {domain.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-muted-foreground">
                  {domain.count} Articles
                </span>
                <Icon
                  name="ArrowRightIcon"
                  size={20}
                  className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all"
                />
              </div>
            </Link>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Link
            href="/guides"
            className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-white rounded-2xl font-semibold hover:bg-foreground/90 transition-all hover-lift"
          >
            Browse All Content
            <Icon name="ArrowRightIcon" size={20} className="text-white" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DomainShowcase;