'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import Icon from '@/components/ui/AppIcon';

interface ReadingProgressTrackerProps {
  articleId: string;
  category: string;
}

const ReadingProgressTracker = ({ articleId, category }: ReadingProgressTrackerProps) => {
  const { user } = useAuth();
  const [progress, setProgress] = useState(0);
  const [lastSaved, setLastSaved] = useState(0);

  useEffect(() => {
    if (!user) return;

    // Fetch existing progress
    fetchProgress();

    // Track scroll progress
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const scrollPercentage = Math.round((scrollTop / (documentHeight - windowHeight)) * 100);

      setProgress(Math.min(100, Math.max(0, scrollPercentage)));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [user, articleId]);

  useEffect(() => {
    if (!user || progress === lastSaved) return;

    // Debounce save - only save every 5% change
    if (Math.abs(progress - lastSaved) >= 5) {
      saveProgress();
    }
  }, [progress, user]);

  const fetchProgress = async () => {
    try {
      const response = await fetch(`/api/reading-progress?article_id=${articleId}`);
      if (!response.ok) return;

      const data = await response.json();
      if (data.progress) {
        setProgress(data.progress.progress_percentage);
        setLastSaved(data.progress.progress_percentage);

        // Scroll to last position if not completed
        if (!data.progress.completed && data.progress.last_position > 0) {
          setTimeout(() => {
            window.scrollTo({ top: data.progress.last_position, behavior: 'smooth' });
          }, 500);
        }
      }
    } catch (error) {
      console.error('Error fetching progress:', error);
    }
  };

  const saveProgress = async () => {
    try {
      await fetch('/api/reading-progress', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          article_id: articleId,
          progress_percentage: progress,
          last_position: window.scrollY,
          completed: progress >= 95,
        }),
      });

      setLastSaved(progress);

      // Update reading history
      if (progress >= 95) {
        await fetch('/api/preferences', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            article_id: articleId,
            category,
          }),
        });
      }
    } catch (error) {
      console.error('Error saving progress:', error);
    }
  };

  if (!user) return null;

  return (
    <>
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-gray-200">
        <div
          className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Progress Badge */}
      {progress > 0 && progress < 100 && (
        <div className="fixed bottom-8 right-8 z-40 bg-white rounded-full shadow-lg border border-gray-200 px-4 py-2 flex items-center gap-2">
          <Icon name="BookOpenIcon" size={16} className="text-primary" />
          <span className="text-sm font-semibold text-foreground">{progress}%</span>
        </div>
      )}

      {/* Completion Badge */}
      {progress >= 100 && (
        <div className="fixed bottom-8 right-8 z-40 bg-success text-white rounded-full shadow-lg px-4 py-2 flex items-center gap-2 animate-bounce">
          <Icon name="CheckCircleIcon" size={20} />
          <span className="text-sm font-semibold">Completed!</span>
        </div>
      )}
    </>
  );
};

export default ReadingProgressTracker;
