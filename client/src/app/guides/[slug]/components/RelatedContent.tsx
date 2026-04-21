'use client';

import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import { getContextualImage } from '@/utils/imageService';
import { getRelatedArticles } from '@/utils/relatedContentEngine';
import { useEffect, useState } from 'react';

interface RelatedArticle {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  href: string;
  tags?: string[];
  image?: string;
  imageAlt?: string;
  publishedAt?: string;
}

interface ApiArticle {
  id: string;
  title: string;
  content?: string;
  meta_description?: string;
  category: string;
  slug: string;
  tags?: string[];
  word_count?: number;
  featured_image_url?: string;
  image_alt?: string;
  published_at?: string;
}

interface RelatedContentProps {
  currentArticleId: string;
  category: string;
  title?: string;
  tags?: string[];
}

const EMPTY_TAGS: string[] = [];

const fallbackArticles = [
  {
    id: 'fallback_finance_1',
    title: 'Practical Budgeting Habits for Small and Medium Businesses',
    excerpt: 'Learn the habits that help readers stay in control of money, plans, and priorities.',
    category: 'Finance',
    readTime: '12 min',
    slug: 'practical-budgeting-habits-for-small-and-medium-businesses',
    publishDate: '2026-01-01',
    tags: ['finance', 'budgeting', 'planning'],
  },
  {
    id: 'fallback_tech_1',
    title: 'Understanding Cybersecurity Basics for Everyday Internet Users',
    excerpt:
      'A practical guide to digital safety, better browsing habits, and stronger decisions online.',
    category: 'Technology',
    readTime: '10 min',
    slug: 'understanding-cybersecurity-basics-for-everyday-internet-users',
    publishDate: '2026-01-02',
    tags: ['technology', 'security', 'digital habits'],
  },
  {
    id: 'fallback_life_1',
    title: 'Stress Reduction Strategies That Fit into Real Life',
    excerpt: 'Discover manageable routines that improve focus, calm, and consistency over time.',
    category: 'Lifestyle',
    readTime: '9 min',
    slug: 'stress-reduction-strategies-that-fit-into-real-life',
    publishDate: '2026-01-03',
    tags: ['lifestyle', 'wellness', 'daily living'],
  },
  {
    id: 'fallback_edu_1',
    title: 'Study Techniques That Improve Focus and Memory Retention',
    excerpt: 'A clearer way to build learning momentum and get more from study time.',
    category: 'Education',
    readTime: '11 min',
    slug: 'study-techniques-that-improve-focus-and-memory-retention',
    publishDate: '2026-01-04',
    tags: ['education', 'learning', 'study skills'],
  },
];

const RelatedContent = ({
  currentArticleId,
  category,
  title = '',
  tags = EMPTY_TAGS,
}: RelatedContentProps) => {
  const [relatedArticles, setRelatedArticles] = useState<RelatedArticle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    const loadRelatedArticles = async () => {
      try {
        setLoading(true);
        const params = new URLSearchParams({
          limit: '12',
          featured: 'true',
          sort: 'trending',
        });

        if (category) {
          params.set('category', category);
        }

        const response = await fetch(`/api/ai-publishing/articles/published?${params.toString()}`, {
          cache: 'no-store',
          headers: {
            'Cache-Control': 'no-cache',
            Pragma: 'no-cache',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to load related articles');
        }

        const data = await response.json();
        const pool = ((data.articles || []) as ApiArticle[])
          .filter((article) => article.id !== currentArticleId)
          .map((article) => ({
            id: article.id,
            title: article.title,
            excerpt: article.meta_description || article.content?.slice(0, 140) || '',
            category: article.category || category || 'Guides',
            readTime: `${Math.max(4, Math.round((article.word_count || 1200) / 180))} min`,
            slug: article.slug,
            publishDate: article.published_at || new Date().toISOString(),
            tags: article.tags || [],
            image: article.featured_image_url || '',
            imageAlt: article.image_alt || article.title,
          }));

        const fallbackPool = fallbackArticles.filter((article) => article.id !== currentArticleId);
        const selectionPool = pool.length > 0 ? pool : fallbackPool;
        const recommended = getRelatedArticles(
          currentArticleId,
          category,
          title,
          selectionPool,
          tags,
          3
        );

        const transformed: RelatedArticle[] = recommended.map((article) => ({
          id: article.id,
          title: article.title,
          excerpt: article.excerpt,
          category: article.category,
          readTime: article.readTime,
          href: `/guides/${article.slug}`,
          tags: article.tags,
          image: typeof article.image === 'string' ? article.image : '',
          imageAlt: typeof article.imageAlt === 'string' ? article.imageAlt : article.title,
          publishedAt: article.publishDate,
        }));

        if (!cancelled) {
          setRelatedArticles(transformed);
        }
      } catch {
        const recommended = getRelatedArticles(
          currentArticleId,
          category,
          title,
          fallbackArticles,
          tags,
          3
        );

        if (!cancelled) {
          setRelatedArticles(
            recommended.map((article) => ({
              id: article.id,
              title: article.title,
              excerpt: article.excerpt,
              category: article.category,
              readTime: article.readTime,
              href: `/guides/${article.slug}`,
              tags: article.tags,
              image: '',
              imageAlt: article.title,
              publishedAt: article.publishDate,
            }))
          );
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    loadRelatedArticles();

    return () => {
      cancelled = true;
    };
  }, [currentArticleId, category, title, tags]);

  if (!loading && relatedArticles.length === 0) {
    return null;
  }

  return (
    <section className="mt-16 border-t border-gray-200 pt-12 sm:pt-16">
      <div className="mb-8">
        <h2 className="mb-2 text-3xl font-bold text-foreground">Related Articles</h2>
        <p className="max-w-2xl text-secondary">
          Continue your learning journey with these related guides.
        </p>
      </div>

      {loading ? (
        <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-6">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={`related-skeleton-${index}`}
              className="h-[360px] animate-pulse rounded-2xl border border-gray-200 bg-white"
            />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-6">
          {relatedArticles.map((article) => {
            const contextualImage = getContextualImage({
              category: article.category,
              title: article.title,
              alt: article.imageAlt || article.title,
              width: 640,
              height: 400,
              preferCurated: true,
            });

            const fallbackImage = getContextualImage({
              category: article.category,
              title: article.title,
              alt: article.imageAlt || article.title,
              width: 640,
              height: 400,
              preferCurated: false,
            });

            return (
              <Link
                key={article.id}
                href={article.href}
                rel="related"
                className="group flex h-full min-h-[360px] flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-lg"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <AppImage
                    src={article.image || contextualImage.src}
                    alt={article.imageAlt || contextualImage.alt}
                    fill
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    fallbackSrc={fallbackImage.src}
                    secondaryFallbackSrc={fallbackImage.src}
                  />
                  <div className="absolute left-4 top-4">
                    <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-foreground shadow-sm backdrop-blur-sm">
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="mb-3 min-h-[3.5rem] text-lg font-bold leading-snug text-foreground transition-colors group-hover:text-primary line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="mb-4 min-h-[4rem] text-sm leading-6 text-secondary line-clamp-3">
                    {article.excerpt}
                  </p>

                  <div className="mt-auto flex items-center gap-2 border-t border-gray-100 pt-4 text-muted-foreground">
                    <Icon name="ClockIcon" size={16} />
                    <span className="text-xs font-medium">{article.readTime}</span>
                    <Icon
                      name="ArrowRightIcon"
                      size={16}
                      className="ml-auto transition-all group-hover:translate-x-1 group-hover:text-primary"
                    />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}

      <div className="mt-8 text-center sm:mt-10">
        <Link
          href={`/guides?category=${encodeURIComponent(category)}`}
          className="inline-flex items-center gap-2 font-semibold text-primary transition-colors hover:text-primary/80"
        >
          Explore more {category} guides
          <Icon name="ArrowRightIcon" size={16} className="text-primary" />
        </Link>
      </div>
    </section>
  );
};

export default RelatedContent;
