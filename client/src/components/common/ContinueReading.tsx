'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';
import { getContextualImage } from '@/utils/imageService';

interface ReadingProgressItem {
  id: string;
  article_id: string;
  progress_percentage: number;
  completed: boolean;
  updated_at: string;
}

const ContinueReading = () => {
  const { user, loading: authLoading } = useAuth();
  const [progressItems, setProgressItems] = useState<ReadingProgressItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!authLoading && user) {
      fetchProgress();
    } else if (!authLoading && !user) {
      setLoading(false);
    }
  }, [user, authLoading]);

  const fetchProgress = async () => {
    try {
      const response = await fetch('/api/reading-progress/list');
      if (!response.ok) throw new Error('Failed to fetch progress');

      const data = await response.json();
      setProgressItems(data.progress || []);
    } catch (error) {
      console.error('Error fetching progress:', error);
    } finally {
      setLoading(false);
    }
  };

  if (authLoading || loading || !user || progressItems.length === 0) {
    return null;
  }

  // Filter incomplete articles
  const incompleteArticles = progressItems.filter(
    (item) => !item.completed && item.progress_percentage > 0
  );

  if (incompleteArticles.length === 0) return null;

  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-2 mb-6">
          <Icon name="BookmarkIcon" size={24} className="text-primary" />
          <h2 className="text-2xl font-bold text-foreground">Continue Reading</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {incompleteArticles.slice(0, 4).map((item) => {
            const contextualImage = getContextualImage({
              category: 'Guides',
              title: item.article_id,
              alt: 'Article thumbnail',
              width: 400,
              height: 250,
              preferCurated: true,
            });

            return (
              <Link
                key={item.id}
                href={`/guides/${item.article_id}`}
                className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-primary hover:shadow-md transition-all"
              >
                <div className="relative h-32 overflow-hidden">
                  <AppImage
                    src={contextualImage.src}
                    alt={contextualImage.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-2 left-2 right-2">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full h-2 overflow-hidden">
                      <div
                        className="h-full bg-primary transition-all"
                        style={{ width: `${item.progress_percentage}%` }}
                      />
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-bold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {item.article_id
                      .split('-')
                      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                      .join(' ')}
                  </h3>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{item.progress_percentage}% complete</span>
                    <Icon
                      name="ArrowRightIcon"
                      size={14}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContinueReading;
