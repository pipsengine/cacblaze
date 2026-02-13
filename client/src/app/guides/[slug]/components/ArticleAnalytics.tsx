'use client';
import { useEffect, useRef, useState } from 'react';
import { trackArticleView, trackEngagement, trackScrollDepth } from '@/lib/analytics';

interface ArticleAnalyticsProps {
  article: {
    id: string;
    title: string;
    category: string;
    author: {
      name: string;
    };
    readTime: string;
  };
}

export default function ArticleAnalytics({ article }: ArticleAnalyticsProps) {
  const startTimeRef = useRef<number>(Date.now());
  const [scrollMilestones, setScrollMilestones] = useState<Set<number>>(new Set());

  useEffect(() => {
    // Track article view on mount
    trackArticleView({
      articleId: article.id,
      title: article.title,
      category: article.category,
      author: article.author.name,
      readTime: article.readTime,
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
        if (scrollPercentage >= milestone && !scrollMilestones.has(milestone)) {
          setScrollMilestones((prev) => new Set(prev).add(milestone));
          trackScrollDepth(article.id, milestone);
        }
      });
    };

    // Track engagement time on unmount
    const trackEngagementTime = () => {
      const timeSpent = Math.round((Date.now() - startTimeRef.current) / 1000);
      if (timeSpent > 5) {
        // Only track if spent more than 5 seconds
        trackEngagement(article.id, timeSpent);
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
    scrollMilestones,
  ]);

  return null; // This component doesn't render anything
}
