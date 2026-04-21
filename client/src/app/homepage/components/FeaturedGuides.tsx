'use client';

import { useEffect, useMemo, useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';
import { getContextualImage } from '@/utils/imageService';
import { CACBLAZE_EVENT_EXAMPLES, trackEvent } from '@/lib/analytics';

interface Guide {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  author: string;
  rating: number;
  image: string;
  alt: string;
  href: string;
  publishedAt: string;
}

const rotateForWeek = <T,>(items: T[], offset = 0) => {
  if (items.length === 0) {
    return items;
  }

  const weekSeed = Math.floor(Date.now() / (1000 * 60 * 60 * 24 * 7));
  const start = (weekSeed + offset) % items.length;
  return items.slice(start).concat(items.slice(0, start));
};

interface ApiArticle {
  id: string;
  title: string;
  meta_description?: string;
  content: string;
  category: string;
  slug: string;
  featured_image_url?: string;
  image_alt?: string;
  word_count?: number;
  readability_score?: number;
  published_at?: string;
  author?: { name?: string };
}

interface FeedMeta {
  weekLabel: string;
  sort: 'recent' | 'popular' | 'trending';
}

const FeaturedGuides = () => {
  const [activeTab, setActiveTab] = useState<'recent' | 'popular' | 'trending'>('popular');
  const [guides, setGuides] = useState<Guide[]>([]);
  const [loading, setLoading] = useState(true);
  const [feedMeta, setFeedMeta] = useState<FeedMeta>({
    weekLabel: 'This week',
    sort: 'popular',
  });

  useEffect(() => {
    let cancelled = false;

    const fetchGuides = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `/api/ai-publishing/articles/published?limit=18&featured=true&sort=recent&scope=homepage`,
          {
            cache: 'no-store',
            headers: {
              'Cache-Control': 'no-cache',
              Pragma: 'no-cache',
            },
          }
        );

        if (!response.ok) {
          throw new Error('Failed to load featured guides');
        }

        const data = await response.json();
        if (cancelled) {
          return;
        }

        const items: Guide[] = (data.articles || []).map((article: ApiArticle) => ({
          id: article.id,
          title: article.title,
          excerpt: article.meta_description || article.content?.slice(0, 140) || '',
          category: article.category,
          readTime: `${Math.max(4, Math.round((article.word_count || 900) / 180))} min`,
          author: article.author?.name || 'CACBLAZE Editorial Desk',
          rating: Number(
            Math.min(5, Math.max(4.6, (article.readability_score || 8.5) / 2)).toFixed(1)
          ),
          image: article.featured_image_url || '',
          alt: article.image_alt || article.title,
          href: `/guides/${article.slug}`,
          publishedAt: article.published_at || new Date().toISOString(),
        }));

        const weekStart = data?.selected_for?.week_start
          ? new Date(data.selected_for.week_start).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
            })
          : 'This week';

        setGuides(items);
        setFeedMeta({
          weekLabel: typeof weekStart === 'string' ? `Week of ${weekStart}` : 'This week',
          sort: 'popular',
        });
      } catch {
        if (!cancelled) {
          setGuides([]);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    fetchGuides();
    const refreshTimer = window.setInterval(fetchGuides, 15 * 60 * 1000);

    return () => {
      cancelled = true;
      window.clearInterval(refreshTimer);
    };
  }, []);

  useEffect(() => {
    setFeedMeta((current) => ({
      ...current,
      sort: activeTab,
    }));
  }, [activeTab]);

  const displayedGuides = useMemo(() => {
    const items = [...guides];

    if (activeTab === 'recent') {
      return items
        .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
        .slice(0, 8);
    }

    if (activeTab === 'trending') {
      const ranked = items.sort((a, b) => {
        const scoreA = a.rating * 100 + new Date(a.publishedAt).getTime() / 100000000;
        const scoreB = b.rating * 100 + new Date(b.publishedAt).getTime() / 100000000;
        return scoreB - scoreA;
      });

      return rotateForWeek(ranked, 2).slice(0, 8);
    }

    const ranked = items.sort((a, b) => {
      const scoreA = a.rating * 100 + Number.parseInt(a.readTime, 10);
      const scoreB = b.rating * 100 + Number.parseInt(b.readTime, 10);
      return scoreB - scoreA;
    });

    return rotateForWeek(ranked, 0).slice(0, 8);
  }, [activeTab, guides]);

  const tabs = [
    { id: 'tab_popular', value: 'popular' as const, label: 'Popular' },
    { id: 'tab_recent', value: 'recent' as const, label: 'Recent' },
    { id: 'tab_trending', value: 'trending' as const, label: 'Trending' },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-success/10 text-success text-sm font-semibold uppercase tracking-wide mb-4">
              Featured Content
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">Top Guides This Week</h2>
            <p className="text-sm text-secondary mt-3">
              Auto-refreshed from the live publishing engine · {feedMeta.weekLabel} · Showing{' '}
              {feedMeta.sort} picks
            </p>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 p-1 rounded-xl bg-muted">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.value);
                  trackEvent('featured_guides_tab_click', {
                    page_type: 'home',
                    section_name: 'featured_guides',
                    content_type: tab.value,
                    link_text: tab.label,
                  });
                }}
                className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeTab === tab.value
                    ? 'bg-white text-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Guides Horizontal Scroll */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={`guide-skeleton-${index}`}
                className="rounded-3xl border border-gray-200 bg-white p-4 animate-pulse h-[420px]"
              />
            ))}
          </div>
        ) : (
          <div className="overflow-x-auto pb-6 -mx-6 px-6">
            <div className="flex gap-6" style={{ width: 'max-content' }}>
              {displayedGuides.map((guide) => {
                const contextualImage = getContextualImage({
                  category: guide.category,
                  title: guide.title,
                  alt: guide.alt,
                  width: 800,
                  height: 600,
                  preferCurated: true,
                });
                const placeholderSrc = getContextualImage({
                  category: guide.category,
                  title: guide.title,
                  alt: guide.alt,
                  width: 800,
                  height: 600,
                  preferCurated: false,
                }).src;

                return (
                  <Link
                    key={guide.id}
                    href={guide.href}
                    onClick={() =>
                      CACBLAZE_EVENT_EXAMPLES.topGuideClick({
                        page_type: 'home',
                        section_name: 'featured_guides',
                        content_type: activeTab,
                        category_name: guide.category,
                        article_title: guide.title,
                        destination_url: guide.href,
                      })
                    }
                    className="group flex-shrink-0 w-80 rounded-3xl border border-gray-200 bg-white hover:border-primary transition-all overflow-hidden hover-lift"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <AppImage
                        src={guide.image || contextualImage.src}
                        alt={guide.alt || contextualImage.alt}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        fill
                        fallbackSrc={placeholderSrc}
                        secondaryFallbackSrc={placeholderSrc}
                      />

                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-semibold text-foreground">
                          {guide.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {guide.title}
                      </h3>
                      <p className="text-secondary text-sm mb-4 line-clamp-2">{guide.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent" />
                          <span className="text-sm font-medium text-foreground">
                            {guide.author}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Icon name="StarIcon" size={16} className="text-warning fill-current" />
                          <span className="text-sm font-semibold text-foreground">
                            {guide.rating}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 mt-4 pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Icon name="ClockIcon" size={16} />
                          <span className="text-xs">{guide.readTime}</span>
                        </div>
                        <Icon
                          name="ArrowRightIcon"
                          size={16}
                          className="ml-auto text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all"
                        />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        {/* View All Link */}
        <div className="text-center mt-8">
          <Link
            href="/guides"
            onClick={() =>
              CACBLAZE_EVENT_EXAMPLES.exploreGuidesClick({
                cta_location: 'featured_guides_footer',
                section_name: 'featured_guides',
                link_text: 'Explore More Generated Guides',
                destination_url: '/guides',
              })
            }
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            Explore More Generated Guides
            <Icon name="ArrowRightIcon" size={20} className="text-primary" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedGuides;
