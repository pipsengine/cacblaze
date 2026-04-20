import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import { trackEvent } from '@/lib/analytics';

const hubs = [
  {
    title: 'Technology Guides',
    href: '/technology',
    description: 'Practical help for apps, devices, security, and digital tools.',
    icon: 'ComputerDesktopIcon',
  },
  {
    title: 'Education Hub',
    href: '/education',
    description: 'Learning resources, exam support, scholarships, and study strategies.',
    icon: 'AcademicCapIcon',
  },
  {
    title: 'How-To Library',
    href: '/howto',
    description: 'Step-by-step solutions designed for everyday real-life tasks.',
    icon: 'WrenchScrewdriverIcon',
  },
  {
    title: 'Reviews and Buying Help',
    href: '/reviews',
    description: 'Trusted comparisons and decision support before you spend.',
    icon: 'StarIcon',
  },
  {
    title: 'Local Resources',
    href: '/local-resources',
    description: 'Useful city, service, and location-based guides for Nigeria.',
    icon: 'MapPinIcon',
  },
  {
    title: 'Career and Job Growth',
    href: '/job-market',
    description: 'Career planning, job search help, and upskilling advice.',
    icon: 'BriefcaseIcon',
  },
];

export default function TopicHubSection() {
  return (
    <section className="bg-white px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 max-w-3xl">
          <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
            Explore topic hubs
          </span>
          <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">
            Search-friendly content clusters readers can trust
          </h2>
          <p className="mt-3 text-secondary">
            Browse our strongest knowledge areas for deeper guides, faster discovery, and better
            return visits.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {hubs.map((hub) => (
            <Link
              key={hub.href}
              href={hub.href}
              onClick={() =>
                trackEvent('topic_hub_click', {
                  page_type: 'home',
                  section_name: 'topic_hub_section',
                  topic_name: hub.title,
                  content_group: hub.title,
                  link_text: hub.title,
                  destination_url: hub.href,
                })
              }
              className="group rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-slate-50 p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-primary hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon name={hub.icon as never} size={24} />
              </div>
              <h3 className="text-xl font-bold text-foreground group-hover:text-primary">
                {hub.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-secondary">{hub.description}</p>
              <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                Explore now
                <Icon name="ArrowRightIcon" size={16} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
