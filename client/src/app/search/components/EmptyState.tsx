import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface EmptyStateProps {
  query: string;
}

const EmptyState = ({ query }: EmptyStateProps) => {
  const popularGuides = [
    {
      id: 'pop_1',
      title: 'Getting Started with React',
      category: 'Technology',
      href: '/guides/react',
    },
    {
      id: 'pop_2',
      title: 'Time Management Strategies',
      category: 'Lifestyle',
      href: '/guides/time-management',
    },
    { id: 'pop_3', title: 'Introduction to Python', category: 'Education', href: '/guides/python' },
  ];

  return (
    <div className="text-center py-16">
      <div className="w-24 h-24 rounded-3xl bg-muted flex items-center justify-center mx-auto mb-8">
        <Icon name="MagnifyingGlassIcon" size={48} className="text-muted-foreground" />
      </div>
      <h3 className="text-3xl font-bold text-foreground mb-4">No results found for "{query}"</h3>
      <p className="text-xl text-secondary mb-12 max-w-2xl mx-auto">
        Try adjusting your search terms or explore our popular guides below.
      </p>

      {/* Search Tips */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
        <div className="p-6 rounded-2xl border border-gray-200 bg-white">
          <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
            <Icon name="LightBulbIcon" size={24} />
          </div>
          <h4 className="font-bold text-foreground mb-2">Try Different Keywords</h4>
          <p className="text-sm text-secondary">Use synonyms or related terms</p>
        </div>
        <div className="p-6 rounded-2xl border border-gray-200 bg-white">
          <div className="w-12 h-12 rounded-xl bg-success/10 text-success flex items-center justify-center mx-auto mb-4">
            <Icon name="AdjustmentsHorizontalIcon" size={24} />
          </div>
          <h4 className="font-bold text-foreground mb-2">Adjust Filters</h4>
          <p className="text-sm text-secondary">Broaden your search criteria</p>
        </div>
        <div className="p-6 rounded-2xl border border-gray-200 bg-white">
          <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mx-auto mb-4">
            <Icon name="ChatBubbleLeftRightIcon" size={24} />
          </div>
          <h4 className="font-bold text-foreground mb-2">Request a Guide</h4>
          <p className="text-sm text-secondary">We'll create content for you</p>
        </div>
      </div>

      {/* Popular Guides */}
      <div className="max-w-2xl mx-auto">
        <h4 className="text-lg font-bold text-foreground mb-6">Popular Guides</h4>
        <div className="space-y-3">
          {popularGuides.map((guide) => (
            <Link
              key={guide.id}
              href={guide.href}
              className="flex items-center justify-between p-4 rounded-2xl border border-gray-200 bg-white hover:border-primary transition-all hover-lift"
            >
              <div className="flex items-center gap-3">
                <span className="px-2 py-1 rounded-md bg-primary/10 text-primary text-xs font-semibold">
                  {guide.category}
                </span>
                <span className="font-medium text-foreground">{guide.title}</span>
              </div>
              <Icon name="ArrowRightIcon" size={20} className="text-muted-foreground" />
            </Link>
          ))}
        </div>
      </div>

      {/* Request Guide CTA */}
      <div className="mt-12">
        <Link
          href="/request-guide"
          className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-2xl font-semibold hover:bg-primary/90 transition-all hover-lift"
        >
          Request a Guide on This Topic
          <Icon name="ArrowRightIcon" size={20} className="text-white" />
        </Link>
      </div>
    </div>
  );
};

export default EmptyState;
