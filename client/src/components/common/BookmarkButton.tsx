'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import Icon from '@/components/ui/AppIcon';

interface BookmarkButtonProps {
  articleId: string;
  articleTitle: string;
  articleCategory: string;
}

export default function BookmarkButton({
  articleId,
  articleTitle,
  articleCategory,
}: BookmarkButtonProps) {
  const { user } = useAuth();
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [loading, setLoading] = useState(false);
  const supabase = useMemo(() => createClient(), []);

  const checkBookmarkStatus = useCallback(async () => {
    if (!user) return;

    try {
      const { data } = await supabase
        .from('bookmarks')
        .select('id')
        .eq('user_id', user.id)
        .eq('article_id', articleId)
        .single();

      setIsBookmarked(Boolean(data));
    } catch {
      setIsBookmarked(false);
    }
  }, [articleId, supabase, user]);

  useEffect(() => {
    if (user) {
      void checkBookmarkStatus();
    } else {
      setIsBookmarked(false);
    }
  }, [checkBookmarkStatus, user]);

  const toggleBookmark = async () => {
    if (!user) {
      alert('Please sign in to bookmark articles');
      return;
    }

    setLoading(true);
    try {
      if (isBookmarked) {
        const { data: bookmark } = await supabase
          .from('bookmarks')
          .select('id')
          .eq('user_id', user.id)
          .eq('article_id', articleId)
          .single();

        if (bookmark) {
          await fetch(`/api/bookmarks?bookmark_id=${bookmark.id}`, {
            method: 'DELETE',
          });
          setIsBookmarked(false);
        }
      } else {
        await fetch('/api/bookmarks', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            article_id: articleId,
            article_title: articleTitle,
            article_category: articleCategory,
          }),
        });
        setIsBookmarked(true);
      }
    } catch (error) {
      console.error('Bookmark toggle error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={toggleBookmark}
      disabled={loading}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
        isBookmarked ? 'bg-primary text-white' : 'bg-gray-100 text-foreground hover:bg-gray-200'
      } disabled:opacity-50`}
    >
      <Icon
        name={isBookmarked ? 'BookmarkIcon' : 'BookmarkIcon'}
        size={20}
        className={isBookmarked ? 'fill-current' : ''}
      />
      <span className="text-sm font-medium">{isBookmarked ? 'Bookmarked' : 'Bookmark'}</span>
    </button>
  );
}
