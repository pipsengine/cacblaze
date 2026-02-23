'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  (process.env.NODE_ENV === 'development' ? 'http://localhost:3001/api' : '');

interface Author {
  id: string;
  name: string;
  avatar_url?: string;
}

interface Article {
  id: string;
  title: string;
  content: string;
  category: string;
  published_at: string;
  featured_image_url?: string;
  image_alt?: string;
  author?: Author;
  slug: string;
  meta_description: string;
  type: string;
  geo_focus: string;
}

interface ArticlesResponse {
  articles: Article[];
  total_count: number;
  has_more: boolean;
}

export default function FeaturedArticle() {
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFeaturedArticle = async () => {
      try {
        setLoading(true);
        if (!API_URL) {
          throw new Error(
            'API base URL is not configured. Set NEXT_PUBLIC_API_URL in environment variables.'
          );
        }
        const response = await fetch(`${API_URL}/ai-publishing/articles/published?limit=1`, {
          cache: 'no-store',
        });
        
        if (!response.ok) {
          throw new Error('Failed to fetch featured article');
        }
        
        const data: ArticlesResponse = await response.json();
        
        if (data.articles && data.articles.length > 0) {
          setArticle(data.articles[0]);
        } else {
          setError('No featured articles available');
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        console.error('Error fetching featured article:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedArticle();
  }, []);

  if (loading) {
    return (
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">📖 Today's Featured Article</h2>
          <div className="animate-pulse">
            <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
            <div className="h-6 bg-gray-200 rounded mb-3"></div>
            <div className="h-4 bg-gray-200 rounded mb-3"></div>
            <div className="h-4 bg-gray-200 rounded w-2/3"></div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">📖 Today's Featured Article</h2>
          <p className="text-red-500">Unable to load featured article. Please try again later.</p>
        </div>
      </section>
    );
  }

  if (!article) {
    return (
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">📖 Today's Featured Article</h2>
          <p className="text-gray-500">No featured articles available yet. Check back later for new content!</p>
        </div>
      </section>
    );
  }

  const truncateContent = (text: string, maxLength: number = 150) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  return (
    <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          📖 Today's Featured Article
        </h2>
      
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
        <div className="flex flex-col md:flex-row gap-6">
          {article.featured_image_url && (
            <div className="md:w-1/3">
              <img 
                src={article.featured_image_url} 
                alt={article.image_alt || article.title}
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
          )}
          
          <div className={article.featured_image_url ? "md:w-2/3" : "w-full"}>
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                {article.type}
              </span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                {article.geo_focus}
              </span>
              <span className="text-sm text-gray-500">
                {new Date(article.published_at).toLocaleDateString()}
              </span>
            </div>
            
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              {article.title}
            </h3>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              {truncateContent(article.meta_description || article.content)}
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {article.author?.avatar_url && (
                  <img 
                    src={article.author.avatar_url} 
                    alt={article.author.name}
                    className="w-8 h-8 rounded-full"
                  />
                )}
                <span className="text-sm text-gray-600">
                  By {article.author?.name || 'AI Assistant'}
                </span>
              </div>
              
              <Link 
                href={`/guides/${article.slug}`}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Read Full Article
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-100">
          <span className="inline-block bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium">
            {article.category}
          </span>
        </div>
      </div>
      </div>
    </section>
  );
}
