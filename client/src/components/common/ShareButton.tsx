'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface ShareButtonProps {
  articleId: string;
  articleTitle: string;
  articleUrl: string;
}

const sharePlatforms = [
  {
    name: 'Twitter',
    icon: 'ShareIcon',
    color: 'bg-blue-400',
    action: (url: string, title: string) =>
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
  },
  {
    name: 'Facebook',
    icon: 'ShareIcon',
    color: 'bg-blue-600',
    action: (url: string) => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
  },
  {
    name: 'LinkedIn',
    icon: 'ShareIcon',
    color: 'bg-blue-700',
    action: (url: string, title: string) =>
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
  },
  {
    name: 'WhatsApp',
    icon: 'ChatBubbleLeftIcon',
    color: 'bg-green-500',
    action: (url: string, title: string) =>
      `https://wa.me/?text=${encodeURIComponent(title + ' ' + url)}`,
  },
];

export default function ShareButton({ articleId, articleTitle, articleUrl }: ShareButtonProps) {
  const [showMenu, setShowMenu] = useState(false);
  const [copied, setCopied] = useState(false);

  const trackShare = async (platform: string) => {
    try {
      await fetch('/api/social-shares', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          article_id: articleId,
          platform: platform.toLowerCase(),
        }),
      });
    } catch (error) {
      console.error('Share tracking error:', error);
    }
  };

  const handleShare = (platform: any) => {
    const shareUrl = platform.action(articleUrl, articleTitle);
    window.open(shareUrl, '_blank', 'width=600,height=400');
    trackShare(platform.name);
    setShowMenu(false);
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(articleUrl);
      setCopied(true);
      trackShare('copy_link');
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Copy error:', error);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-foreground rounded-lg hover:bg-gray-200 transition-colors"
      >
        <Icon name="ShareIcon" size={20} />
        <span className="text-sm font-medium">Share</span>
      </button>

      {showMenu && (
        <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 p-4 z-50 min-w-[250px]">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold text-foreground">Share this article</h3>
            <button onClick={() => setShowMenu(false)} className="text-secondary hover:text-foreground">
              <Icon name="XMarkIcon" size={20} />
            </button>
          </div>

          <div className="space-y-2">
            {sharePlatforms.map((platform) => (
              <button
                key={platform.name}
                onClick={() => handleShare(platform)}
                className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className={`${platform.color} p-2 rounded-lg text-white`}>
                  <Icon name={platform.icon} size={16} />
                </div>
                <span className="text-sm font-medium text-foreground">{platform.name}</span>
              </button>
            ))}

            <button
              onClick={copyLink}
              className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors border-t border-gray-100 mt-2 pt-3"
            >
              <div className="bg-gray-600 p-2 rounded-lg text-white">
                <Icon name={copied ? 'CheckIcon' : 'LinkIcon'} size={16} />
              </div>
              <span className="text-sm font-medium text-foreground">
                {copied ? 'Link copied!' : 'Copy link'}
              </span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}