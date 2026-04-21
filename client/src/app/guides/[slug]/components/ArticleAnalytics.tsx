'use client';

import { useEffect, useRef } from 'react';
import { trackArticleView, trackEngagement, trackEvent, trackScrollDepth } from '@/lib/analytics';
import { saveRecentArticleView } from '@/utils/personalizationStorage';

interface ArticleAnalyticsProps {
  article: {
    id: string;
    title: string;
    category: string;
    heroImage?: string;
    heroImageAlt?: string;
    featured_image_url?: string;
    image_alt?: string;
    author: {
      name: string;
    };
    readTime: string;
    slug?: string;
  };
}

export default function ArticleAnalytics({ article }: ArticleAnalyticsProps) {
  const startTimeRef = useRef<number>(Date.now());
  const scrollMilestonesRef = useRef<Set<number>>(new Set());

  useEffect(() => {
    // Track article view on mount
    trackArticleView({
      articleId: article.id,
      title: article.title,
      category: article.category,
      author: article.author.name,
      readTime: article.readTime,
      slug: article.slug,
    });

    trackEvent('return_reader_content_exploration', {
      page_type: 'article',
      article_slug: article.slug || article.id,
      article_title: article.title,
      category_name: article.category,
      user_status: 'anonymous',
    });

    saveRecentArticleView({
      slug: article.slug || article.id,
      title: article.title,
      category: article.category,
      readTime: article.readTime,
      imageSrc: article.heroImage || article.featured_image_url,
      imageAlt: article.heroImageAlt || article.image_alt,
    });

    // Track scroll depth
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const scrollPercentage = Math.round((scrolled / documentHeight) * 100);

      // Track milestones: 25%, 50%, 75%, 90%, 100%
      const milestones = [25, 50, 75, 90, 100];
      milestones.forEach((milestone) => {
        if (scrollPercentage >= milestone && !scrollMilestonesRef.current.has(milestone)) {
          scrollMilestonesRef.current.add(milestone);
          trackScrollDepth(article.id, milestone, {
            article_slug: article.slug,
            article_title: article.title,
            category_name: article.category,
          });

          if (milestone === 100) {
            trackEvent('content_completion', {
              page_type: 'article',
              article_slug: article.slug,
              article_title: article.title,
              category_name: article.category,
              percent_scrolled: milestone,
            });
          }
        }
      });
    };

    // Track engagement time on unmount
    const trackEngagementTime = () => {
      const timeSpent = Math.round((Date.now() - startTimeRef.current) / 1000);
      if (timeSpent > 5) {
        // Only track if spent more than 5 seconds
        trackEngagement(article.id, timeSpent, {
          article_slug: article.slug,
          article_title: article.title,
          category_name: article.category,
        });
      }
    };

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Track engagement on page visibility change
    const handleVisibilityChange = () => {
      if (document.hidden) {
        trackEngagementTime();
      } else {
        startTimeRef.current = Date.now(); // Reset timer when page becomes visible
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Track engagement on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      trackEngagementTime();
    };
  }, [
    article.id,
    article.title,
    article.category,
    article.author.name,
    article.readTime,
    article.slug,
    article.heroImage,
    article.heroImageAlt,
    article.featured_image_url,
    article.image_alt,
  ]);

  return null; // This component doesn't render anything
}
