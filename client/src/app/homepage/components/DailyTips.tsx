'use client';

import { useState, useEffect } from 'react';

const API_BASE = (() => {
  if (process.env.NEXT_PUBLIC_API_URL) return process.env.NEXT_PUBLIC_API_URL;
  if (typeof window !== 'undefined') {
    const { protocol, hostname } = window.location;
    const port = 3001;
    return `${protocol}//${hostname}:${port}/api`;
  }
  return '';
})();

interface Tip {
  id: string;
  title: string;
  content: string;
  category: string;
  published_at: string;
  featured_image?: string;
  image_alt?: string;
}

interface TipsResponse {
  tips: Tip[];
  count: number;
}

export default function DailyTips() {
  const [tips, setTips] = useState<Tip[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDailyTips = async () => {
      try {
        setLoading(true);
        if (!API_BASE) {
          throw new Error(
            'API base URL is not configured. Set NEXT_PUBLIC_API_URL in environment variables.'
          );
        }
        const response = await fetch(`${API_BASE}/ai-publishing/tips/published?limit=7`, {
          cache: 'no-store',
        });
        
        if (!response.ok) {
          throw new Error('Failed to fetch daily tips');
        }
        
        const data: TipsResponse = await response.json();
        setTips(data.tips);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        console.error('Error fetching daily tips:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchDailyTips();
  }, []);

  if (loading) {
    return (
      <section className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Daily Tips</h2>
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded mb-3"></div>
          <div className="h-4 bg-gray-200 rounded mb-3"></div>
          <div className="h-4 bg-gray-200 rounded"></div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Daily Tips</h2>
        <p className="text-red-500">
          Unable to load daily tips. {process.env.NODE_ENV !== 'development' && !API_BASE ? (
            <>Set NEXT_PUBLIC_API_URL in your deployment to the server API base URL.</>
          ) : (
            <>Please try again later.</>
          )}
        </p>
      </section>
    );
  }

  if (tips.length === 0) {
    return (
      <section className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Daily Tips</h2>
        <p className="text-gray-500">No tips available yet. Check back later for daily insights!</p>
      </section>
    );
  }

  // Get today's tip (most recent)
  const todaysTip = tips[0];
  const previousTips = tips.slice(1);

  return (
    <section className="bg-gradient-to-r from-green-50 to-emerald-50 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          💡 Daily Tips & Insights
        </h2>
      
      {/* Today's Featured Tip Card */}
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 mb-6">
        <div className="flex items-center justify-between mb-4">
          <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            TODAY'S TIP
          </span>
          <span className="text-sm text-gray-500">
            {new Date(todaysTip.published_at).toLocaleDateString()}
          </span>
        </div>
        
        <h3 className="text-xl font-bold text-gray-800 mb-3">
          {todaysTip.title}
        </h3>
        
        <p className="text-gray-700 leading-relaxed mb-4">
          {todaysTip.content}
        </p>
        
        {todaysTip.featured_image && (
          <div className="mb-4">
            <img 
              src={todaysTip.featured_image} 
              alt={todaysTip.image_alt || todaysTip.title}
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>
        )}
        
        <div className="flex items-center justify-between">
          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
            {todaysTip.category}
          </span>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-sm text-gray-500">Live</span>
          </div>
        </div>
      </div>

      {/* Previous Tips Grid */}
      {previousTips.length > 0 && (
        <div>
          <h4 className="font-semibold text-gray-700 mb-4 text-lg">Recent Tips</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {previousTips.map((tip) => (
              <div key={tip.id} className="bg-white rounded-lg shadow-sm p-4 border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-2">
                  <h5 className="font-semibold text-gray-800 text-sm line-clamp-2">
                    {tip.title}
                  </h5>
                  <span className="text-xs text-gray-400 whitespace-nowrap">
                    {new Date(tip.published_at).toLocaleDateString()}
                  </span>
                </div>
                
                <p className="text-gray-600 text-sm line-clamp-3 mb-3 leading-relaxed">
                  {tip.content}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs font-medium">
                    {tip.category}
                  </span>
                  <span className="text-xs text-gray-400">
                    {tip.content.split(' ').length} words
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      </div>
    </section>
  );
}
