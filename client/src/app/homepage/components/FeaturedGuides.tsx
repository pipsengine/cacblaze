'use client';

import { useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';
import { getContextualImage } from '@/utils/imageService';

interface Guide {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  author: string;
  rating: number;
  image: string;
  alt: string;
  href: string;
}

const FeaturedGuides = () => {
  const [activeTab, setActiveTab] = useState<'recent' | 'popular' | 'trending'>('popular');

  const guides: Guide[] = [
    {
      id: 'guide_1',
      title: 'Complete Guide to Modern Web Development',
      excerpt:
        'Learn the fundamentals and advanced techniques of building modern web applications.',
      category: 'Technology',
      readTime: '12 min',
      author: 'Sarah Chen',
      rating: 4.9,
      image: '',
      alt: 'Person coding on laptop with multiple screens showing web development code',
      href: '/guides/web-development',
    },
    {
      id: 'guide_2',
      title: 'Mastering Productivity: Time Management Strategies',
      excerpt: 'Proven techniques to boost your productivity and achieve your goals faster.',
      category: 'Lifestyle',
      readTime: '8 min',
      author: 'Michael Roberts',
      rating: 4.8,
      image: '',
      alt: 'Organized workspace with planner, laptop, and coffee cup on white desk',
      href: '/guides/productivity',
    },
    {
      id: 'guide_3',
      title: 'Understanding Machine Learning Fundamentals',
      excerpt: 'A beginner-friendly introduction to machine learning concepts and applications.',
      category: 'Education',
      readTime: '15 min',
      author: 'Dr. Emily Watson',
      rating: 5.0,
      image: '',
      alt: 'Digital visualization of neural network with glowing blue connections',
      href: '/guides/machine-learning',
    },
    {
      id: 'guide_4',
      title: 'Complete Guide to Urban Gardening',
      excerpt: 'Transform your small space into a thriving garden with these expert tips.',
      category: 'Lifestyle',
      readTime: '10 min',
      author: 'James Park',
      rating: 4.7,
      image: '',
      alt: 'Small urban garden with various plants on apartment balcony',
      href: '/guides/urban-gardening',
    },
  ];

  const tabs = [
    { id: 'tab_popular', value: 'popular' as const, label: 'Popular' },
    { id: 'tab_recent', value: 'recent' as const, label: 'Recent' },
    { id: 'tab_trending', value: 'trending' as const, label: 'Trending' },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-success/10 text-success text-sm font-semibold uppercase tracking-wide mb-4">
              Featured Content
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">Top Guides This Week</h2>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 p-1 rounded-xl bg-muted">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.value)}
                className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeTab === tab.value
                    ? 'bg-white text-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Guides Horizontal Scroll */}
        <div className="overflow-x-auto pb-6 -mx-6 px-6">
          <div className="flex gap-6" style={{ width: 'max-content' }}>
            {guides.map((guide) => {
              // Get contextual image for each guide
              const contextualImage = getContextualImage({
                category: guide.category,
                title: guide.title,
                alt: guide.alt,
                width: 800,
                height: 600,
                preferCurated: true,
              });

              return (
                <Link
                  key={guide.id}
                  href={guide.href}
                  className="group flex-shrink-0 w-80 rounded-3xl border border-gray-200 bg-white hover:border-primary transition-all overflow-hidden hover-lift"
                >
                  <div className="relative h-48 overflow-hidden">
                    <AppImage
                      src={contextualImage.src}
                      alt={contextualImage.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-semibold text-foreground">
                        {guide.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {guide.title}
                    </h3>
                    <p className="text-secondary text-sm mb-4 line-clamp-2">{guide.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent" />
                        <span className="text-sm font-medium text-foreground">{guide.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Icon name="StarIcon" size={16} className="text-warning fill-current" />
                        <span className="text-sm font-semibold text-foreground">
                          {guide.rating}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 mt-4 pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Icon name="ClockIcon" size={16} />
                        <span className="text-xs">{guide.readTime}</span>
                      </div>
                      <Icon
                        name="ArrowRightIcon"
                        size={16}
                        className="ml-auto text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all"
                      />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* View All Link */}
        <div className="text-center mt-8">
          <Link
            href="/guides"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            View All Guides
            <Icon name="ArrowRightIcon" size={20} className="text-primary" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedGuides;
