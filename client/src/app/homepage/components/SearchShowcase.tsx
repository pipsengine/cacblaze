'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const SearchShowcase = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSearch, setActiveSearch] = useState('Web Development');
  const router = useRouter();

  const popularSearches = [
    { id: 'search_1', text: 'Web Development', icon: 'CodeBracketIcon' as const },
    { id: 'search_2', text: 'Productivity Tips', icon: 'LightBulbIcon' as const },
    { id: 'search_3', text: 'Machine Learning', icon: 'CpuChipIcon' as const },
    { id: 'search_4', text: 'Urban Gardening', icon: 'HomeIcon' as const },
  ];

  const quickResults = [
    {
      id: 'result_1',
      title: 'Getting Started with React',
      category: 'Technology',
      readTime: '8 min',
    },
    {
      id: 'result_2',
      title: 'Time Management Strategies',
      category: 'Lifestyle',
      readTime: '6 min',
    },
    {
      id: 'result_3',
      title: 'Introduction to Python',
      category: 'Education',
      readTime: '12 min',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-accent/5 to-success/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Search Demo */}
          <div className="lg:col-span-7">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold uppercase tracking-wide mb-6">
              Powerful Search
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Find What You Need in <span className="gradient-text">Milliseconds</span>
            </h2>
            <p className="text-xl text-secondary mb-8 leading-relaxed">
              Our AI-powered search engine understands context and delivers precise results from
              10,000+ articles instantly.
            </p>

            {/* Search Bar Demo */}
            <div className="relative mb-8">
              <div className="relative">
                <Icon
                  name="MagnifyingGlassIcon"
                  size={24}
                  className="absolute left-6 top-1/2 -translate-y-1/2 text-muted-foreground"
                />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search guides, tutorials, reviews..."
                  className="w-full pl-16 pr-6 py-5 rounded-2xl border-2 border-gray-200 bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-all text-lg"
                />
              </div>
              {searchQuery && (
                <div className="absolute top-full left-0 right-0 mt-2 p-4 rounded-2xl border border-gray-200 bg-white shadow-lg animate-fade-in">
                  <p className="text-sm text-muted-foreground mb-3">Quick Results:</p>
                  <div className="space-y-2">
                    {quickResults.map((result) => (
                      <Link
                        key={result.id}
                        href="/search"
                        className="flex items-center justify-between p-3 rounded-xl hover:bg-muted transition-colors"
                      >
                        <div>
                          <p className="font-medium text-foreground">{result.title}</p>
                          <p className="text-xs text-muted-foreground">{result.category}</p>
                        </div>
                        <span className="text-xs text-muted-foreground">{result.readTime}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Popular Searches */}
            <div>
              <p className="text-sm text-muted-foreground mb-3">Popular Searches:</p>
              <div className="flex flex-wrap gap-3">
                {popularSearches.map((search) => (
                  <button
                    key={search.id}
                    onClick={() => {
                      setActiveSearch(search.text);
                      router.push(`/search?q=${encodeURIComponent(search.text)}`);
                    }}
                    className={`flex items-center gap-2 px-5 py-3 rounded-full transition-all whitespace-nowrap
                      ${activeSearch === search.text
                        ? 'border-2 border-black bg-white text-foreground shadow-sm'
                        : 'border border-gray-200 bg-white text-foreground hover:border-primary'}`}
                  >
                    <Icon name={search.icon} size={16} className="text-primary" />
                    <span className="text-sm font-medium">{search.text}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8">
              <Link
                href="/search"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-2xl font-semibold hover:bg-primary/90 transition-all hover-lift"
              >
                Try Advanced Search
                <Icon name="ArrowRightIcon" size={20} className="text-white" />
              </Link>
            </div>
          </div>

          {/* Right Column: Features */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-3xl border border-gray-200 bg-white">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                <Icon name="BoltIcon" size={24} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Lightning Fast</h3>
              <p className="text-secondary">
                Search 10,000+ articles in under 50ms with our optimized search engine.
              </p>
            </div>

            <div className="p-6 rounded-3xl border border-gray-200 bg-white">
              <div className="w-12 h-12 rounded-xl bg-success/10 text-success flex items-center justify-center mb-4">
                <Icon name="CheckBadgeIcon" size={24} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Verified Results</h3>
              <p className="text-secondary">
                Every result is verified by domain experts for accuracy and relevance.
              </p>
            </div>

            <div className="p-6 rounded-3xl border border-gray-200 bg-white">
              <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-4">
                <Icon name="AdjustmentsHorizontalIcon" size={24} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Smart Filters</h3>
              <p className="text-secondary">
                Refine results by category, date, read time, and difficulty level.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchShowcase;
