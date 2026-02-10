'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import Icon from '@/components/ui/AppIcon';
import NewsletterForm from '@/components/common/NewsletterForm';

const AVAILABLE_CATEGORIES = [
  { id: 'Technology', label: 'Technology', icon: 'ComputerDesktopIcon' },
  { id: 'Education', label: 'Education', icon: 'AcademicCapIcon' },
  { id: 'Lifestyle', label: 'Lifestyle', icon: 'SparklesIcon' },
  { id: 'Guides', label: 'Guides', icon: 'BookOpenIcon' },
  { id: 'How-To', label: 'How-To', icon: 'WrenchScrewdriverIcon' },
  { id: 'Reviews', label: 'Reviews', icon: 'StarIcon' },
  { id: 'Local Resources', label: 'Local Resources', icon: 'MapPinIcon' },
];

const AVAILABLE_TOPICS = [
  'web-development',
  'programming',
  'tutorials',
  'productivity',
  'finance',
  'career',
  'health',
  'cooking',
  'business',
  'education',
];

const PreferencesManager = () => {
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [favoriteCategories, setFavoriteCategories] = useState<string[]>([]);
  const [favoriteTopics, setFavoriteTopics] = useState<string[]>([]);
  const [notificationEnabled, setNotificationEnabled] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [showNewsletter, setShowNewsletter] = useState(false);

  useEffect(() => {
    if (!authLoading && !user) {
      router.push('/login');
    } else if (!authLoading && user) {
      fetchPreferences();
    }
  }, [user, authLoading, router]);

  const fetchPreferences = async () => {
    try {
      const response = await fetch('/api/preferences');
      if (!response.ok) throw new Error('Failed to fetch preferences');

      const data = await response.json();
      const prefs = data.preferences;

      setFavoriteCategories(prefs.favorite_categories || []);
      setFavoriteTopics(prefs.favorite_topics || []);
      setNotificationEnabled(prefs.notification_enabled ?? true);
      setEmailNotifications(prefs.email_notifications ?? true);
    } catch (error) {
      console.error('Error fetching preferences:', error);
    } finally {
      setLoading(false);
    }
  };

  const savePreferences = async () => {
    setSaving(true);
    try {
      const response = await fetch('/api/preferences', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          favorite_categories: favoriteCategories,
          favorite_topics: favoriteTopics,
          notification_enabled: notificationEnabled,
          email_notifications: emailNotifications,
        }),
      });

      if (!response.ok) throw new Error('Failed to save preferences');

      // Show success message
      alert('Preferences saved successfully!');
    } catch (error) {
      console.error('Error saving preferences:', error);
      alert('Failed to save preferences. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  const toggleCategory = (category: string) => {
    setFavoriteCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const toggleTopic = (topic: string) => {
    setFavoriteTopics((prev) =>
      prev.includes(topic) ? prev.filter((t) => t !== topic) : [...prev, topic]
    );
  };

  if (authLoading || loading) {
    return (
      <div className="max-w-4xl mx-auto px-6">
        <div className="animate-pulse space-y-6">
          <div className="h-12 bg-gray-200 rounded w-1/3"></div>
          <div className="h-64 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-foreground mb-2">Preferences</h1>
        <p className="text-secondary">
          Customize your experience and manage your content preferences
        </p>
      </div>

      {/* Favorite Categories */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-6">
        <div className="flex items-center gap-2 mb-4">
          <Icon name="HeartIcon" size={24} className="text-primary" />
          <h2 className="text-xl font-bold text-foreground">Favorite Categories</h2>
        </div>
        <p className="text-sm text-secondary mb-4">
          Select categories you're interested in to get personalized recommendations
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {AVAILABLE_CATEGORIES.map((category) => (
            <button
              key={category.id}
              onClick={() => toggleCategory(category.id)}
              className={`flex items-center gap-2 px-4 py-3 rounded-xl border-2 transition-all ${
                favoriteCategories.includes(category.id)
                  ? 'border-primary bg-primary/5 text-primary' :'border-gray-200 text-secondary hover:border-gray-300'
              }`}
            >
              <Icon name={category.icon as any} size={20} />
              <span className="text-sm font-medium">{category.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Favorite Topics */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-6">
        <div className="flex items-center gap-2 mb-4">
          <Icon name="TagIcon" size={24} className="text-primary" />
          <h2 className="text-xl font-bold text-foreground">Favorite Topics</h2>
        </div>
        <p className="text-sm text-secondary mb-4">
          Choose specific topics you want to follow
        </p>
        <div className="flex flex-wrap gap-2">
          {AVAILABLE_TOPICS.map((topic) => (
            <button
              key={topic}
              onClick={() => toggleTopic(topic)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                favoriteTopics.includes(topic)
                  ? 'bg-primary text-white' :'bg-gray-100 text-secondary hover:bg-gray-200'
              }`}
            >
              {topic.replace('-', ' ')}
            </button>
          ))}
        </div>
      </div>

      {/* Notification Settings */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-6">
        <div className="flex items-center gap-2 mb-4">
          <Icon name="BellIcon" size={24} className="text-primary" />
          <h2 className="text-xl font-bold text-foreground">Notification Settings</h2>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-semibold text-foreground">In-App Notifications</h3>
              <p className="text-xs text-secondary">
                Get notified about new content in your interests
              </p>
            </div>
            <button
              onClick={() => setNotificationEnabled(!notificationEnabled)}
              className={`relative w-12 h-6 rounded-full transition-colors ${
                notificationEnabled ? 'bg-primary' : 'bg-gray-300'
              }`}
            >
              <span
                className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                  notificationEnabled ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-semibold text-foreground">Email Notifications</h3>
              <p className="text-xs text-secondary">
                Receive email updates about new content
              </p>
            </div>
            <button
              onClick={() => setEmailNotifications(!emailNotifications)}
              className={`relative w-12 h-6 rounded-full transition-colors ${
                emailNotifications ? 'bg-primary' : 'bg-gray-300'
              }`}
            >
              <span
                className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                  emailNotifications ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Newsletter Subscription */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Icon name="EnvelopeIcon" size={24} className="text-primary" />
            <h2 className="text-xl font-bold text-foreground">Newsletter</h2>
          </div>
          <button
            onClick={() => setShowNewsletter(!showNewsletter)}
            className="text-sm text-primary font-semibold hover:underline"
          >
            {showNewsletter ? 'Hide' : 'Manage Subscription'}
          </button>
        </div>
        {showNewsletter && <NewsletterForm variant="inline" />}
      </div>

      {/* Save Button */}
      <div className="flex justify-end gap-4">
        <button
          onClick={() => router.back()}
          className="px-6 py-3 rounded-xl border border-gray-200 text-foreground font-semibold hover:bg-gray-50 transition-colors"
        >
          Cancel
        </button>
        <button
          onClick={savePreferences}
          disabled={saving}
          className="px-6 py-3 rounded-xl bg-primary text-white font-semibold hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
        >
          {saving ? (
            <>
              <Icon name="ArrowPathIcon" size={20} className="animate-spin" />
              Saving...
            </>
          ) : (
            <>
              <Icon name="CheckIcon" size={20} />
              Save Preferences
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default PreferencesManager;