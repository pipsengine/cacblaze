import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import { getContextualImage } from '@/utils/imageService';

interface GuideCardProps {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  href: string;
  isNew: boolean;
}

const RecentUpdates = () => {
  const updates: GuideCardProps[] = [
    {
      id: 'update_1',
      title: 'Getting Started with Next.js 15',
      category: 'Technology',
      date: 'Updated 2 days ago',
      readTime: '8 min',
      href: '/guides/nextjs-15',
      isNew: true
    },
    {
      id: 'update_2',
      title: 'Healthy Eating on a Budget',
      category: 'Lifestyle',
      date: 'Updated 5 days ago',
      readTime: '6 min',
      href: '/guides/healthy-eating',
      isNew: false
    },
    {
      id: 'update_3',
      title: 'Understanding Cryptocurrency Basics',
      category: 'Education',
      date: 'Updated 1 week ago',
      readTime: '12 min',
      href: '/guides/cryptocurrency',
      isNew: false
    }
  ];

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-foreground">Recent Updates</h3>
        <Icon name="ClockIcon" size={20} className="text-muted-foreground" />
      </div>

      <div className="space-y-4">
        {updates.map((update) => {
          const contextualImage = getContextualImage({
            category: update.category,
            title: update.title,
            width: 400,
            height: 300,
            preferCurated: true
          });

          return (
            <Link
              key={update.id}
              href={update.href}
              className="group flex gap-4 p-4 rounded-xl hover:bg-muted transition-colors"
            >
              <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                <AppImage
                  src={contextualImage.src}
                  alt={contextualImage.alt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 text-sm">
                    {update.title}
                  </h4>
                  {update.isNew && (
                    <span className="flex-shrink-0 px-2 py-0.5 rounded-full bg-success text-white text-xs font-semibold">
                      New
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span>{update.category}</span>
                  <span>•</span>
                  <span>{update.readTime}</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">{update.date}</p>
              </div>
            </Link>
          );
        })}
      </div>

      <Link
        href="/guides"
        className="block text-center mt-6 pt-6 border-t border-gray-100 text-primary font-semibold text-sm hover:text-primary/80 transition-colors"
      >
        View All Updates
      </Link>
    </div>
  );
};

export default RecentUpdates;