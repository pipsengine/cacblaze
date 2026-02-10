import Icon from '@/components/ui/AppIcon';

const TrustAuthority = () => {
  const stats = [
    {
      id: 'stat_1',
      value: '10,000+',
      label: 'Verified Articles',
      icon: 'DocumentCheckIcon' as const,
      color: 'bg-blue-50 text-blue-600',
    },
    {
      id: 'stat_2',
      value: '200+',
      label: 'Expert Contributors',
      icon: 'UserGroupIcon' as const,
      color: 'bg-green-50 text-green-600',
    },
    {
      id: 'stat_3',
      value: '50ms',
      label: 'Average Search Time',
      icon: 'BoltIcon' as const,
      color: 'bg-amber-50 text-amber-600',
    },
    {
      id: 'stat_4',
      value: '4.9/5',
      label: 'User Rating',
      icon: 'StarIcon' as const,
      color: 'bg-purple-50 text-purple-600',
    },
  ];

  const trustBadges = [
    {
      id: 'badge_1',
      title: 'Expert Verified',
      description: 'All content reviewed by domain experts',
      icon: 'CheckBadgeIcon' as const,
    },
    {
      id: 'badge_2',
      title: 'Updated Daily',
      description: 'Fresh content added every day',
      icon: 'ArrowPathIcon' as const,
    },
    {
      id: 'badge_3',
      title: 'AI-Optimized',
      description: 'Structured for AI-era search',
      icon: 'CpuChipIcon' as const,
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-success/10 text-success text-sm font-semibold uppercase tracking-wide mb-4">
            Trusted Authority
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Built on Trust & Expertise
          </h2>
          <p className="text-xl text-secondary max-w-2xl mx-auto">
            Every piece of content is verified, structured, and optimized for accuracy and discoverability.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="p-8 rounded-3xl border border-gray-200 bg-white text-center hover-lift"
            >
              <div className={`w-16 h-16 rounded-2xl ${stat.color} flex items-center justify-center mx-auto mb-4`}>
                <Icon name={stat.icon} size={32} />
              </div>
              <div className="text-4xl font-bold text-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-secondary font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {trustBadges.map((badge) => (
            <div
              key={badge.id}
              className="p-6 rounded-3xl border-2 border-primary/20 bg-primary/5 text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center mx-auto mb-4">
                <Icon name={badge.icon} size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {badge.title}
              </h3>
              <p className="text-sm text-secondary">
                {badge.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-secondary mb-6">
            Join 200+ domain experts contributing to CACBLAZE
          </p>
          <button className="px-8 py-4 bg-foreground text-white rounded-2xl font-semibold hover:bg-foreground/90 transition-all hover-lift">
            Become a Contributor
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrustAuthority;