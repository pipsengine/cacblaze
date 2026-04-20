'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';
import { getContextualImage } from '@/utils/imageService';
import { getPreferredCategories, getRecentArticleViews } from '@/utils/personalizationStorage';

interface RecommendedArticle {
  article_id: string;
  title: string;
  category: string;
  relevance_score: number;
  reason?: string;
}

interface PublishedArticle {
  id?: string;
  slug?: string;
  title: string;
  category?: string;
}

const PersonalizedContent = () => {
  const { user, loading: authLoading } = useAuth();
  const [recommendations, setRecommendations] = useState<RecommendedArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [eyebrow, setEyebrow] = useState('Personalized for You');
  const [heading, setHeading] = useState('Recommended Content');
  const [description, setDescription] = useState(
    'Fresh recommendations tuned to the topics you care about most.'
  );

  useEffect(() => {
    if (!authLoading) {
      void fetchRecommendations();
    }
  }, [user, authLoading]);

  const fetchFallbackRecommendations = async () => {
    const preferredCategories = getPreferredCategories();
    const recentViews = getRecentArticleViews();
    const primaryCategory = preferredCategories[0] || 'Technology';

    setEyebrow(recentViews.length > 0 ? 'Based on your recent reading' : 'Popular right now');
    setHeading(recentViews.length > 0 ? `${primaryCategory} picks for you` : 'Fresh guides to explore');
    setDescription(
      recentViews.length > 0
        ? 'We used your recent activity to surface more of what you already find useful.'
        : 'Trending guides across the platform to help new and returning readers discover value faster.'
    );

    try {
      const params = new URLSearchParams({
        limit: '6',
        sort: 'trending',
      });
      params.set('category', primaryCategory);

      const response = await fetch(`/api/ai-publishing/articles/published?${params.toString()}`, {
        cache: 'no-store',
      });

      if (!response.ok) {
        setRecommendations([]);
        return;
      }

      const data = await response.json();
      const articles = ((data.articles || []) as PublishedArticle[]).slice(0, 6).map((article) => ({
        article_id: article.slug || article.id || '',
        title: article.title,
        category: article.category || primaryCategory,
        relevance_score: recentViews.length > 0 ? 82 : 74,
        reason: recentViews.length > 0
          ? `Because you explored ${primaryCategory}`
          : 'Trending with readers this week',
      }));

      setRecommendations(articles.filter((article) => Boolean(article.article_id)));
    } catch {
      setRecommendations([]);
    }
  };

  const fetchRecommendations = async () => {
    try {
      setLoading(true);

      if (!user) {
        await fetchFallbackRecommendations();
        return;
      }

      const response = await fetch('/api/recommendations', { cache: 'no-store' });
      if (!response.ok) {
        await fetchFallbackRecommendations();
        return;
      }

      const data = await response.json();
      const items = Array.isArray(data.recommendations) ? data.recommendations : [];

      if (items.length === 0) {
        await fetchFallbackRecommendations();
        return;
      }

      setEyebrow('Personalized for You');
      setHeading('Recommended Content');
      setDescription('Fresh recommendations tuned to your interests, reading habits, and activity.');
      setRecommendations(items);
    } catch {
      await fetchFallbackRecommendations();
    } finally {
      setLoading(false);
    }
  };

  if (authLoading || loading) {
    return (
      <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-4 animate-pulse">
            <div className="h-8 w-1/3 rounded bg-gray-200" />
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-64 rounded-2xl bg-gray-200" />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (recommendations.length === 0) {
    return null;
  }

  return (
    <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between gap-4">
          <div>
            <div className="mb-2 flex items-center gap-2">
              <Icon name="SparklesIcon" size={24} className="text-primary" />
              <span className="text-sm font-semibold uppercase tracking-wide text-primary">
                {eyebrow}
              </span>
            </div>
            <h2 className="text-3xl font-bold text-foreground lg:text-4xl">{heading}</h2>
            <p className="mt-2 max-w-2xl text-secondary">{description}</p>
          </div>
          <Link
            href={user ? '/preferences' : '/guides'}
            className="flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
          >
            {user ? 'Manage Preferences' : 'Browse all guides'}
            <Icon name={user ? 'Cog6ToothIcon' : 'ArrowRightIcon'} size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {recommendations.slice(0, 6).map((article) => {
            const contextualImage = getContextualImage({
              category: article.category,
              title: article.title,
              alt: `${article.title} article cover`,
              width: 600,
              height: 400,
              preferCurated: true,
            });
            const contextualFallbackImage = getContextualImage({
              category: article.category,
              title: article.title,
              alt: `${article.title} article cover`,
              width: 600,
              height: 400,
              preferCurated: false,
            });

            return (
              <Link
                key={article.article_id}
                href={`/guides/${article.article_id}`}
                className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all hover:border-primary hover:shadow-lg"
              >
                <div className="relative h-48 overflow-hidden">
                  <AppImage
                    src={contextualImage.src}
                    alt={contextualImage.alt}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    fallbackSrc={contextualFallbackImage.src}
                    secondaryFallbackSrc="/assets/images/no_image.png"
                  />
                  <div className="absolute left-4 top-4">
                    <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-foreground backdrop-blur-sm">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="mb-2 line-clamp-2 text-lg font-bold text-foreground transition-colors group-hover:text-primary">
                    {article.title}
                  </h3>
                  <p className="text-sm text-secondary">
                    {article.reason || `${article.relevance_score}% match for your interests`}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      {article.relevance_score}% relevance
                    </span>
                    <Icon
                      name="ArrowRightIcon"
                      size={16}
                      className="text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-primary"
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

export default PersonalizedContent;
