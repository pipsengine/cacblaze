'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface NewsletterFormProps {
  variant?: 'inline' | 'modal';
  onSuccess?: () => void;
}

const AVAILABLE_TOPICS = [
  { id: 'Technology', label: 'Technology', icon: 'ComputerDesktopIcon' },
  { id: 'Education', label: 'Education', icon: 'AcademicCapIcon' },
  { id: 'Lifestyle', label: 'Lifestyle', icon: 'SparklesIcon' },
  { id: 'Guides', label: 'Guides', icon: 'BookOpenIcon' },
  { id: 'How-To', label: 'How-To', icon: 'WrenchScrewdriverIcon' },
  { id: 'Reviews', label: 'Reviews', icon: 'StarIcon' },
  { id: 'Local Resources', label: 'Local Resources', icon: 'MapPinIcon' },
];

const NewsletterForm = ({ variant = 'inline', onSuccess }: NewsletterFormProps) => {
  const [email, setEmail] = useState('');
  const [selectedTopics, setSelectedTopics] = useState<string[]>(['Technology']);
  const [frequency, setFrequency] = useState<'daily' | 'weekly' | 'monthly'>('weekly');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const toggleTopic = (topic: string) => {
    setSelectedTopics((prev) =>
      prev.includes(topic)
        ? prev.filter((t) => t !== topic)
        : [...prev, topic]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          topics: selectedTopics,
          frequency,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to subscribe');
      }

      setSuccess(true);
      setEmail('');
      onSuccess?.();

      setTimeout(() => setSuccess(false), 5000);
    } catch (err: any) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="bg-success/10 border border-success rounded-2xl p-6 text-center">
        <Icon name="CheckCircleIcon" size={48} className="text-success mx-auto mb-3" />
        <h3 className="text-xl font-bold text-foreground mb-2">
          Successfully Subscribed!
        </h3>
        <p className="text-secondary">
          Check your email to confirm your subscription.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Email Input */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
        />
      </div>

      {/* Topic Selection */}
      <div>
        <label className="block text-sm font-semibold text-foreground mb-3">
          Select Topics (Choose at least one)
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {AVAILABLE_TOPICS.map((topic) => (
            <button
              key={topic.id}
              type="button"
              onClick={() => toggleTopic(topic.id)}
              className={`flex items-center gap-2 px-4 py-3 rounded-xl border-2 transition-all ${
                selectedTopics.includes(topic.id)
                  ? 'border-primary bg-primary/5 text-primary' :'border-gray-200 text-secondary hover:border-gray-300'
              }`}
            >
              <Icon name={topic.icon as any} size={20} />
              <span className="text-sm font-medium">{topic.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Frequency Selection */}
      <div>
        <label className="block text-sm font-semibold text-foreground mb-3">
          Email Frequency
        </label>
        <div className="flex gap-3">
          {(['daily', 'weekly', 'monthly'] as const).map((freq) => (
            <button
              key={freq}
              type="button"
              onClick={() => setFrequency(freq)}
              className={`flex-1 px-4 py-3 rounded-xl border-2 transition-all capitalize ${
                frequency === freq
                  ? 'border-primary bg-primary/5 text-primary font-semibold' :'border-gray-200 text-secondary hover:border-gray-300'
              }`}
            >
              {freq}
            </button>
          ))}
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="bg-warning/10 border border-warning rounded-xl p-4 flex items-start gap-3">
          <Icon name="ExclamationTriangleIcon" size={20} className="text-warning flex-shrink-0 mt-0.5" />
          <p className="text-sm text-warning">{error}</p>
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading || selectedTopics.length === 0}
        className="w-full bg-primary text-white font-semibold py-4 rounded-xl hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
      >
        {loading ? (
          <>
            <Icon name="ArrowPathIcon" size={20} className="animate-spin" />
            Subscribing...
          </>
        ) : (
          <>
            <Icon name="EnvelopeIcon" size={20} />
            Subscribe to Newsletter
          </>
        )}
      </button>

      <p className="text-xs text-muted-foreground text-center">
        We respect your privacy. Unsubscribe anytime.
      </p>
    </form>
  );
};

export default NewsletterForm;