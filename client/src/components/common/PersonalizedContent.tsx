'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';
import { getContextualImage } from '@/utils/imageService';

interface RecommendedArticle {
  article_id: string;
  title: string;
  category: string;
  relevance_score: number;
}

const PersonalizedContent = () => {
  const { user, loading: authLoading } = useAuth();
  const [recommendations, setRecommendations] = useState<RecommendedArticle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!authLoading && user) {
      fetchRecommendations();
    } else if (!authLoading && !user) {
      setLoading(false);
    }
  }, [user, authLoading]);

  const fetchRecommendations = async () => {
    try {
      const response = await fetch('/api/recommendations');
      if (!response.ok) throw new Error('Failed to fetch recommendations');
      
      const data = await response.json();
      setRecommendations(data.recommendations || []);
    } catch (error) {
      console.error('Error fetching recommendations:', error);
    } finally {
      setLoading(false);
    }
  };

  if (authLoading || loading) {
    return (
      <section className="py-12 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-gray-200 rounded w-1/3"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-64 bg-gray-200 rounded-2xl"></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (!user || recommendations.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Icon name="SparklesIcon" size={24} className="text-primary" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                Personalized for You
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Recommended Content
            </h2>
          </div>
          <Link
            href="/preferences"
            className="text-sm text-primary font-semibold hover:underline flex items-center gap-1"
          >
            Manage Preferences
            <Icon name="Cog6ToothIcon" size={16} />
          </Link>
        </div>

        {/* Recommendations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recommendations.slice(0, 6).map((article) => {
            const contextualImage = getContextualImage({
              category: article.category,
              title: article.title,
              alt: `${article.title} article cover`,
              width: 600,
              height: 400,
              preferCurated: true,
            });

            return (
              <Link
                key={article.article_id}
                href={`/guides/${article.article_id}`}
                className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-primary hover:shadow-lg transition-all"
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
                  {article.relevance_score >= 70 && (
                    <div className="absolute top-4 right-4">
                      <div className="bg-success/90 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                        <Icon name="SparklesIcon" size={12} />
                        Top Match
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-xs text-muted-foreground">
                      {article.relevance_score}% match
                    </span>
                    <Icon
                      name="ArrowRightIcon"
                      size={16}
                      className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all"
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