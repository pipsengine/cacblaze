'use client';

import { useState, useEffect } from 'react';
import { createClient } from '@/lib/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';

interface Bookmark {
  id: string;
  articleId: string;
  articleTitle: string;
  articleCategory: string;
  notes: string | null;
  createdAt: string;
}

export default function BookmarksManager() {
  const { user } = useAuth();
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    if (user) {
      fetchBookmarks();
    }
  }, [user]);

  const fetchBookmarks = async () => {
    try {
      const response = await fetch('/api/bookmarks');
      const data = await response.json();

      if (data.success) {
        const formatted = data.bookmarks.map((b: any) => ({
          id: b.id,
          articleId: b.article_id,
          articleTitle: b.article_title,
          articleCategory: b.article_category,
          notes: b.notes,
          createdAt: b.created_at,
        }));
        setBookmarks(formatted);
      }
    } catch (error) {
      console.error('Fetch bookmarks error:', error);
    } finally {
      setLoading(false);
    }
  };

  const removeBookmark = async (bookmarkId: string) => {
    try {
      await fetch(`/api/bookmarks?bookmark_id=${bookmarkId}`, {
        method: 'DELETE',
      });
      setBookmarks(bookmarks.filter((b) => b.id !== bookmarkId));
    } catch (error) {
      console.error('Remove bookmark error:', error);
    }
  };

  if (!user) {
    return (
      <div className="bg-white rounded-lg shadow-sm p-8 text-center">
        <Icon name="BookmarkIcon" size={48} className="mx-auto text-secondary mb-4" />
        <h3 className="text-xl font-semibold text-foreground mb-2">Sign in to view bookmarks</h3>
        <p className="text-secondary mb-4">Save articles to read later</p>
        <Link
          href="/login"
          className="inline-block px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
        >
          Sign In
        </Link>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow-sm p-8">
        <div className="animate-pulse space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-20 bg-gray-200 rounded"></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-foreground">Bookmarks</h2>
          <span className="text-sm text-secondary">{bookmarks.length} articles</span>
        </div>
      </div>

      <div className="p-6">
        {bookmarks.length === 0 ? (
          <div className="text-center py-12">
            <Icon name="BookmarkIcon" size={48} className="mx-auto text-secondary mb-4" />
            <p className="text-secondary">No bookmarks yet</p>
            <p className="text-sm text-secondary mt-2">
              Start bookmarking articles to build your library
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {bookmarks.map((bookmark) => (
              <div
                key={bookmark.id}
                className="flex items-start justify-between p-4 border border-gray-200 rounded-lg hover:border-primary transition-colors"
              >
                <div className="flex-1">
                  <Link
                    href={`/guides/${bookmark.articleId}`}
                    className="text-lg font-semibold text-foreground hover:text-primary transition-colors"
                  >
                    {bookmark.articleTitle}
                  </Link>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-xs px-2 py-1 bg-gray-100 text-secondary rounded">
                      {bookmark.articleCategory}
                    </span>
                    <span className="text-xs text-secondary">
                      {new Date(bookmark.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => removeBookmark(bookmark.id)}
                  className="ml-4 p-2 text-secondary hover:text-destructive transition-colors"
                >
                  <Icon name="TrashIcon" size={20} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
