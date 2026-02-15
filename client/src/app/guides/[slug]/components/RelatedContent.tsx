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
}

interface RelatedContentProps {
  currentArticleId: string;
  category: string;
  title?: string;
  tags?: string[];
}

const EMPTY_TAGS: string[] = [];

const RelatedContent = ({
  currentArticleId,
  category,
  title = '',
  tags = EMPTY_TAGS,
}: RelatedContentProps) => {
  const [relatedArticles, setRelatedArticles] = useState<RelatedArticle[]>([]);

  useEffect(() => {
    const allArticles = [
      {
        id: 'guide_budgeting',
        title: 'Master Your Money: The Ultimate Guide to Budgeting',
        excerpt:
          'Take control of your finances with our comprehensive guide to budgeting strategies.',
        category: 'Personal Finance',
        readTime: '15 min',
        slug: 'budgeting',
        publishDate: '2025-01-01',
        tags: ['budgeting', 'finance', 'money management'],
      },
      {
        id: 'guide_saving',
        title: 'The Art of Saving: Strategies to Build Wealth',
        excerpt:
          'Discover actionable strategies to cut costs and build a robust financial safety net.',
        category: 'Personal Finance',
        readTime: '12 min',
        slug: 'saving',
        publishDate: '2025-01-01',
        tags: ['saving', 'wealth', 'emergency fund'],
      },
      {
        id: 'guide_investing',
        title: 'Smart Investing: Growing Wealth in Nigeria & Beyond',
        excerpt: 'Learn how to invest in stocks, real estate, and bonds to build lasting wealth.',
        category: 'Personal Finance',
        readTime: '18 min',
        slug: 'investing',
        publishDate: '2025-01-01',
        tags: ['investing', 'stocks', 'real estate', 'crypto'],
      },
      {
        id: 'guide_debt',
        title: 'Crushing Debt: A Step-by-Step Plan',
        excerpt:
          'Strategies to pay off loans and credit card debt faster than you thought possible.',
        category: 'Personal Finance',
        readTime: '10 min',
        slug: 'debt-management',
        publishDate: '2025-01-01',
        tags: ['debt', 'loans', 'freedom'],
      },
      {
        id: 'guide_hustle',
        title: 'Side Hustles: Earning Extra Income in Nigeria',
        excerpt: 'Legitimate ways to make money online and offline alongside your 9-5.',
        category: 'Entrepreneurship',
        readTime: '14 min',
        slug: 'side-hustles',
        publishDate: '2025-01-01',
        tags: ['business', 'income', 'freelancing'],
      },
      {
        id: 'guide_retirement',
        title: 'Retirement Planning 101',
        excerpt: 'How to ensure you can retire comfortably and maintain your lifestyle.',
        category: 'Personal Finance',
        readTime: '11 min',
        slug: 'retirement-planning',
        publishDate: '2025-01-01',
        tags: ['retirement', 'pension', 'future'],
      },
    ];

    const recommended = getRelatedArticles(currentArticleId, category, title, allArticles as any, tags, 3);
    const transformed = recommended.map((a: any) => ({
      id: a.id,
      title: a.title,
      excerpt: a.excerpt,
      category: a.category,
      readTime: a.readTime,
      href: `/guides/${a.slug}`,
      tags: a.tags,
    }));
    setRelatedArticles(transformed);
  }, [currentArticleId, category, title, tags]);

  if (relatedArticles.length === 0) {
    return null;
  }

  return (
    <section className="mt-16 pt-16 border-t border-gray-200">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-2">Related Articles</h2>
        <p className="text-secondary">Continue your learning journey with these related guides</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {relatedArticles.map((article) => {
          const contextualImage = getContextualImage({
            category: article.category,
            title: article.title,
            width: 600,
            height: 400,
            preferCurated: true,
          });

          return (
            <Link
              key={article.id}
              href={article.href}
              className="group block rounded-2xl border border-gray-200 bg-white hover:border-primary transition-all overflow-hidden hover-lift"
              rel="related"
            >
              <div className="relative h-48 overflow-hidden">
                <AppImage
                  src={contextualImage.src}
                  alt={contextualImage.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-semibold text-foreground">
                    {article.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-secondary text-sm mb-4 line-clamp-2">{article.excerpt}</p>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Icon name="ClockIcon" size={16} />
                  <span className="text-xs">{article.readTime}</span>
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

      {/* Internal Linking Optimization Note */}
      <div className="mt-6 text-center">
        <Link
          href={`/guides?category=${category}`}
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
        >
          Explore more {category} guides
          <Icon name="ArrowRightIcon" size={16} className="text-primary" />
        </Link>
      </div>
    </section>
  );
};

export default RelatedContent;
