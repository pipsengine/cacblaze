import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface Domain {
  id: string;
  title: string;
  description: string;
  count: string;
  highlights: [string, string];
  icon:
    | 'BookOpenIcon'
    | 'WrenchScrewdriverIcon'
    | 'StarIcon'
    | 'AcademicCapIcon'
    | 'CodeBracketIcon'
    | 'HeartIcon'
    | 'MapPinIcon';
  color: string;
  href: string;
}

const DomainShowcase = () => {
  const domains: Domain[] = [
    {
      id: 'domain_guides',
      title: 'Guides',
      description:
        'Deep, practical explainers for money, work, business, and everyday decisions, written to help readers understand the why, the how, and the next best step.',
      count: '2,400+',
      highlights: ['Money and work', 'Actionable explainers'],
      icon: 'BookOpenIcon',
      color: 'bg-blue-50 text-blue-600 border-blue-200',
      href: '/guides',
    },
    {
      id: 'domain_howto',
      title: 'How-To',
      description:
        'Clear step-by-step tutorials, walkthroughs, and practical fixes for real tasks, from getting started quickly to solving common problems with confidence.',
      count: '850+',
      highlights: ['Beginner-friendly steps', 'Practical solutions'],
      icon: 'WrenchScrewdriverIcon',
      color: 'bg-green-50 text-green-600 border-green-200',
      href: '/howto',
    },
    {
      id: 'domain_reviews',
      title: 'Reviews',
      description:
        'Balanced reviews of products, tools, apps, and services that show real strengths, trade-offs, value for money, and who each option is best for.',
      count: '320+',
      highlights: ['Honest pros and cons', 'Smarter buying'],
      icon: 'StarIcon',
      color: 'bg-amber-50 text-amber-600 border-amber-200',
      href: '/reviews',
    },
    {
      id: 'domain_education',
      title: 'Education',
      description:
        'Study resources, exam preparation help, digital learning strategies, and skill-building content for students, professionals, and lifelong learners.',
      count: '1,100+',
      highlights: ['Study success', 'Learning roadmaps'],
      icon: 'AcademicCapIcon',
      color: 'bg-purple-50 text-purple-600 border-purple-200',
      href: '/education',
    },
    {
      id: 'domain_technology',
      title: 'Technology',
      description:
        'Useful tech guidance covering devices, apps, digital safety, troubleshooting, connectivity, and online tools that make modern life easier to manage.',
      count: '940+',
      highlights: ['Digital safety', 'Device help'],
      icon: 'CodeBracketIcon',
      color: 'bg-indigo-50 text-indigo-600 border-indigo-200',
      href: '/technology',
    },
    {
      id: 'domain_lifestyle',
      title: 'Lifestyle',
      description:
        'Trusted advice for wellness, routines, productivity, self-development, and better daily living, with grounded tips people can realistically apply.',
      count: '680+',
      highlights: ['Wellness habits', 'Better routines'],
      icon: 'HeartIcon',
      color: 'bg-pink-50 text-pink-600 border-pink-200',
      href: '/lifestyle',
    },
    {
      id: 'domain_local',
      title: 'Local Resources',
      description:
        'City guides, local directories, and location-aware recommendations to help readers discover useful services, opportunities, and trusted places nearby.',
      count: '420+',
      highlights: ['City guidance', 'Local discoveries'],
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
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            Explore robust content hubs built around real needs, from learning and career growth to
            technology, reviews, wellness, and trusted local discovery.
          </p>
        </div>

        {/* Domain Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {domains.map((domain) => (
            <Link
              key={domain.id}
              href={domain.href}
              className="group relative flex h-full min-h-[290px] flex-col p-8 rounded-3xl border-2 bg-white hover:border-primary transition-all hover-lift"
            >
              <div
                className={`w-16 h-16 rounded-2xl ${domain.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
              >
                <Icon name={domain.icon} size={32} />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {domain.title}
              </h3>
              <p className="text-secondary mb-5 leading-relaxed">{domain.description}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {domain.highlights.map((item) => (
                  <span
                    key={`${domain.id}-${item}`}
                    className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-xs font-medium text-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-auto flex items-center justify-between">
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
