'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';
import { getContextualImage } from '@/utils/imageService';
import { getRecentArticleViews, type RecentArticleView } from '@/utils/personalizationStorage';
import { articles as localArticles } from '@/data/articles';

interface ReadingProgressItem {
  id: string;
  article_id: string;
  progress_percentage: number;
  completed: boolean;
  updated_at: string;
}

interface DisplayItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  progressPercentage: number;
  helperText: string;
  imageSrc?: string;
  imageAlt?: string;
}

function getDisplayImage(item: DisplayItem) {
  const localArticle = localArticles[item.slug];
  const primarySrc = item.imageSrc || localArticle?.heroImage;
  const primaryAlt = item.imageAlt || localArticle?.heroImageAlt || item.title;

  if (primarySrc) {
    return {
      primary: { src: primarySrc, alt: primaryAlt },
      fallback: getContextualImage({
        category: item.category,
        title: item.title,
        alt: primaryAlt,
        width: 400,
        height: 250,
        preferCurated: false,
      }),
    };
  }

  return {
    primary: getContextualImage({
      category: item.category,
      title: item.title,
      alt: 'Article thumbnail',
      width: 400,
      height: 250,
      preferCurated: true,
    }),
    fallback: getContextualImage({
      category: item.category,
      title: item.title,
      alt: 'Article thumbnail',
      width: 400,
      height: 250,
      preferCurated: false,
    }),
  };
}

const ContinueReading = () => {
  const { user, loading: authLoading, isDevAuthSession } = useAuth();
  const [progressItems, setProgressItems] = useState<ReadingProgressItem[]>([]);
  const [guestRecent, setGuestRecent] = useState<RecentArticleView[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!authLoading && user && !isDevAuthSession) {
      void fetchProgress();
    } else if (!authLoading) {
      setGuestRecent(getRecentArticleViews());
      setLoading(false);
    }
  }, [user, authLoading, isDevAuthSession]);

  const fetchProgress = async () => {
    try {
      const response = await fetch('/api/reading-progress/list', { cache: 'no-store' });
      if (!response.ok) {
        setProgressItems([]);
        return;
      }

      const data = await response.json();
      setProgressItems(data.progress || []);
      setGuestRecent(getRecentArticleViews());
    } catch {
      setProgressItems([]);
      setGuestRecent(getRecentArticleViews());
    } finally {
      setLoading(false);
    }
  };

  const incompleteArticles = progressItems.filter(
    (item) => !item.completed && item.progress_percentage > 0
  );

  const signedInItems: DisplayItem[] = incompleteArticles.slice(0, 4).map((item) => ({
    id: item.id,
    slug: item.article_id,
    title: (item.article_id || '')
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' '),
    category: 'Guides',
    progressPercentage: item.progress_percentage,
    helperText: `${item.progress_percentage}% complete`,
  }));

  const guestItems: DisplayItem[] = guestRecent.slice(0, 4).map((item) => ({
    id: item.slug,
    slug: item.slug,
    title: item.title,
    category: item.category,
    progressPercentage: 100,
    helperText: 'Viewed recently',
    imageSrc: item.imageSrc,
    imageAlt: item.imageAlt,
  }));

  const displayItems = user && !isDevAuthSession ? signedInItems : guestItems;

  if (authLoading || loading || displayItems.length === 0) {
    return null;
  }

  return (
    <section className="border-b border-gray-100 bg-white py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-6 flex items-center gap-2">
          <Icon name="BookmarkIcon" size={24} className="text-primary" />
          <h2 className="text-2xl font-bold text-foreground">
            {user && !isDevAuthSession ? 'Continue Reading' : 'Recently Viewed'}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {displayItems.map((item) => {
            const { primary, fallback } = getDisplayImage(item);

            return (
              <Link
                key={item.id}
                href={`/guides/${item.slug}`}
                className="group overflow-hidden rounded-xl border border-gray-200 bg-white transition-all hover:border-primary hover:shadow-md"
              >
                <div className="relative h-32 overflow-hidden">
                  <AppImage
                    src={primary.src}
                    alt={primary.alt}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    fallbackSrc={fallback.src}
                    secondaryFallbackSrc="/assets/images/no_image.png"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-2 left-2 right-2">
                    <div className="h-2 overflow-hidden rounded-full bg-white/90 backdrop-blur-sm">
                      <div
                        className="h-full bg-primary transition-all"
                        style={{ width: `${item.progressPercentage}%` }}
                      />
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="mb-2 line-clamp-2 text-sm font-bold text-foreground transition-colors group-hover:text-primary">
                    {item.title}
                  </h3>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{item.helperText}</span>
                    <Icon
                      name="ArrowRightIcon"
                      size={14}
                      className="transition-transform group-hover:translate-x-1"
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
