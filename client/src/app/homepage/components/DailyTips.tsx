'use client';

import { useState, useEffect } from 'react';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

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
        const response = await fetch(`${API_URL}/ai-publishing/tips/published?limit=7`);
        
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
        <p className="text-red-500">Unable to load daily tips. Please try again later.</p>
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
    <section className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        💡 Daily Tips & Insights
      </h2>
      
      {/* Today's Featured Tip */}
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded-r">
        <div className="flex items-start mb-3">
          <span className="bg-blue-500 text-white px-2 py-1 rounded text-sm font-medium mr-3">
            TODAY'S TIP
          </span>
          <span className="text-sm text-gray-500">
            {new Date(todaysTip.published_at).toLocaleDateString()}
          </span>
        </div>
        
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          {todaysTip.title}
        </h3>
        
        <p className="text-gray-700 leading-relaxed">
          {todaysTip.content}
        </p>
        
        {todaysTip.featured_image && (
          <div className="mt-3">
            <img 
              src={todaysTip.featured_image} 
              alt={todaysTip.image_alt || todaysTip.title}
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>
        )}
        
        <div className="mt-3">
          <span className="inline-block bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-medium">
            {todaysTip.category}
          </span>
        </div>
      </div>

      {/* Previous Tips */}
      {previousTips.length > 0 && (
        <div>
          <h4 className="font-semibold text-gray-700 mb-3">Recent Tips</h4>
          <div className="space-y-3">
            {previousTips.map((tip) => (
              <div key={tip.id} className="border-b border-gray-100 pb-3 last:border-b-0">
                <div className="flex justify-between items-start mb-1">
                  <h5 className="font-medium text-gray-800 text-sm">
                    {tip.title}
                  </h5>
                  <span className="text-xs text-gray-400">
                    {new Date(tip.published_at).toLocaleDateString()}
                  </span>
                </div>
                <p className="text-gray-600 text-sm line-clamp-2">
                  {tip.content}
                </p>
                <span className="inline-block bg-gray-100 text-gray-500 px-2 py-1 rounded text-xs font-medium mt-1">
                  {tip.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}