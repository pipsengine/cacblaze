'use client';

import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';
import { CACBLAZE_EVENT_EXAMPLES } from '@/lib/analytics';

const TrustAuthority = () => {
  const stats = [
    {
      id: 'stat_1',
      value: '10,000+',
      label: 'Verified Articles',
      description:
        'In-depth guides, reviews, and explainers built to answer practical questions with clarity.',
      icon: 'DocumentCheckIcon' as const,
      color: 'bg-blue-50 text-blue-600',
    },
    {
      id: 'stat_2',
      value: '200+',
      label: 'Expert Contributors',
      description:
        'Writers, researchers, and specialists helping shape content readers can rely on.',
      icon: 'UserGroupIcon' as const,
      color: 'bg-green-50 text-green-600',
    },
    {
      id: 'stat_3',
      value: 'Fast',
      label: 'Search Experience',
      description:
        'Quick discovery tools designed to help readers find useful answers without friction.',
      icon: 'BoltIcon' as const,
      color: 'bg-amber-50 text-amber-600',
    },
    {
      id: 'stat_4',
      value: 'Trusted',
      label: 'Reader Confidence',
      description:
        'Content is organized to support confident decisions, better comparisons, and clear next steps.',
      icon: 'StarIcon' as const,
      color: 'bg-purple-50 text-purple-600',
    },
  ];

  const trustBadges = [
    {
      id: 'badge_1',
      title: 'Expert Reviewed',
      description:
        'Important content is checked for usefulness, accuracy, and real-world relevance before it reaches readers.',
      icon: 'CheckBadgeIcon' as const,
    },
    {
      id: 'badge_2',
      title: 'Continuously Updated',
      description:
        'Pages are refreshed to reflect changing tools, trends, opportunities, and everyday user needs.',
      icon: 'ArrowPathIcon' as const,
    },
    {
      id: 'badge_3',
      title: 'Structured for Discovery',
      description:
        'Our publishing approach makes content easier to scan, search, understand, and act on.',
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
          <p className="text-xl text-secondary max-w-3xl mx-auto leading-8">
            CACBLAZE is designed to give readers dependable information they can actually use — from
            step-by-step guidance and honest reviews to education, technology, lifestyle, and local
            resources that support better decisions.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="p-8 rounded-3xl border border-gray-200 bg-white text-center hover-lift min-h-[240px]"
            >
              <div
                className={`w-16 h-16 rounded-2xl ${stat.color} flex items-center justify-center mx-auto mb-4`}
              >
                <Icon name={stat.icon} size={32} />
              </div>
              <div className="text-4xl font-bold text-foreground mb-2">{stat.value}</div>
              <div className="text-sm text-secondary font-semibold mb-3">{stat.label}</div>
              <p className="text-sm text-secondary leading-6">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {trustBadges.map((badge) => (
            <div
              key={badge.id}
              className="p-6 rounded-3xl border-2 border-primary/20 bg-primary/5 text-center min-h-[190px]"
            >
              <div className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center mx-auto mb-4">
                <Icon name={badge.icon} size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{badge.title}</h3>
              <p className="text-sm text-secondary">{badge.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <p className="text-lg text-secondary mb-3">
            We welcome subject-matter experts, experienced writers, and thoughtful reviewers who
            want to help build a more useful knowledge platform.
          </p>
          <p className="text-base text-secondary mb-6">
            If you have practical insight to share, CACBLAZE offers a place to contribute content
            that is clear, responsible, and genuinely valuable to readers.
          </p>
          <Link
            href="/contact?reason=contribute"
            onClick={() =>
              CACBLAZE_EVENT_EXAMPLES.contributorCtaClick({
                cta_location: 'homepage_trust_authority',
                section_name: 'trust_authority',
                destination_url: '/contact?reason=contribute',
                link_text: 'Become a Contributor',
              })
            }
            className="px-8 py-4 bg-foreground text-white rounded-2xl font-semibold hover:bg-foreground/90 transition-all hover-lift inline-block"
          >
            Become a Contributor
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TrustAuthority;
