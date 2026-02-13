'use client';

import { useState } from 'react';
import FilterBar from './FilterBar';
import GuideCard from './GuideCard';

interface FilterState {
  category: string;
  sortBy: string;
  difficulty: string;
}

const GuidesInteractive = () => {
  const [filters, setFilters] = useState<FilterState>({
    category: 'all',
    sortBy: 'popular',
    difficulty: 'all',
  });

  const guides = [
    {
      id: 'guide_1',
      title: 'Complete Guide to Modern Web Development',
      excerpt:
        'Learn the fundamentals and advanced techniques of building modern web applications with React, Next.js, and TypeScript.',
      category: 'Technology',
      readTime: '12 min',
      author: 'Sarah Chen',
      authorImage: '',
      authorImageAlt: 'Professional headshot of Sarah Chen smiling in business attire',
      rating: 4.9,
      image: '',
      imageAlt: 'Person coding on laptop with multiple screens showing web development code',
      date: 'Feb 3, 2026',
      href: '/guides/web-development',
      isNew: true,
    },
    {
      id: 'guide_2',
      title: 'Mastering Productivity: Time Management Strategies',
      excerpt:
        'Proven techniques to boost your productivity and achieve your goals faster with practical time management systems.',
      category: 'Lifestyle',
      readTime: '8 min',
      author: 'Michael Roberts',
      authorImage: '',
      authorImageAlt: 'Professional headshot of Michael Roberts in casual shirt',
      rating: 4.8,
      image: '',
      imageAlt: 'Organized workspace with planner, laptop, and coffee cup on white desk',
      date: 'Feb 2, 2026',
      href: '/guides/productivity',
      isNew: false,
    },
    {
      id: 'guide_3',
      title: 'Understanding Machine Learning Fundamentals',
      excerpt:
        'A beginner-friendly introduction to machine learning concepts and applications with hands-on examples.',
      category: 'Education',
      readTime: '15 min',
      author: 'Dr. Emily Watson',
      authorImage: '',
      authorImageAlt: 'Professional headshot of Dr. Emily Watson in academic setting',
      rating: 5.0,
      image: '',
      imageAlt: 'Digital visualization of neural network with glowing blue connections',
      date: 'Feb 1, 2026',
      href: '/guides/machine-learning',
      isNew: false,
    },
    {
      id: 'guide_4',
      title: 'Complete Guide to Urban Gardening',
      excerpt:
        'Transform your small space into a thriving garden with these expert tips for urban and apartment gardening.',
      category: 'Lifestyle',
      readTime: '10 min',
      author: 'James Park',
      authorImage: '',
      authorImageAlt: 'Professional headshot of James Park outdoors with plants',
      rating: 4.7,
      image: '',
      imageAlt: 'Small urban garden with various plants on apartment balcony',
      date: 'Jan 31, 2026',
      href: '/guides/urban-gardening',
      isNew: false,
    },
    {
      id: 'guide_5',
      title: 'Introduction to Blockchain Technology',
      excerpt:
        'Understand the fundamentals of blockchain, cryptocurrencies, and decentralized applications.',
      category: 'Technology',
      readTime: '14 min',
      author: 'Alex Kim',
      authorImage: '',
      authorImageAlt: 'Professional headshot of Alex Kim in modern office',
      rating: 4.9,
      image: '',
      imageAlt: 'Digital blockchain network visualization with connected nodes',
      date: 'Jan 30, 2026',
      href: '/guides/blockchain',
      isNew: false,
    },
    {
      id: 'guide_6',
      title: 'Effective Communication Skills for Leaders',
      excerpt:
        'Develop essential communication skills to lead teams effectively and inspire action.',
      category: 'Education',
      readTime: '11 min',
      author: 'Linda Martinez',
      authorImage: '',
      authorImageAlt: 'Professional headshot of Linda Martinez in business suit',
      rating: 4.8,
      image: '',
      imageAlt: 'Business team meeting with leader presenting to engaged group',
      date: 'Jan 29, 2026',
      href: '/guides/communication',
      isNew: false,
    },
  ];

  const handleFilterChange = (newFilters: FilterState) => {
    setFilters(newFilters);
  };

  return (
    <>
      <FilterBar onFilterChange={handleFilterChange} />

      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-secondary">
              Showing <span className="font-semibold text-foreground">{guides.length}</span> guides
              {filters.category !== 'all' && (
                <span>
                  {' '}
                  in{' '}
                  <span className="font-semibold text-foreground capitalize">
                    {filters.category}
                  </span>
                </span>
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guides.map((guide) => (
              <GuideCard key={guide.id} {...guide} />
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="px-8 py-4 border-2 border-gray-200 text-foreground rounded-2xl font-semibold hover:border-primary transition-all hover-lift">
              Load More Guides
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default GuidesInteractive;
