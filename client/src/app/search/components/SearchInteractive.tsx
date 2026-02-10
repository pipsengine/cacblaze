"use client";

import { useState } from 'react';
import SearchBar from './SearchBar';
import FilterSidebar from './FilterSidebar';
import SearchResults from './SearchResults';
import SuggestedTopics from './SuggestedTopics';
import EmptyState from './EmptyState';

const SearchInteractive = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({});
  const [hasSearched, setHasSearched] = useState(false);

  const mockResults = [
  {
    id: 'result_1',
    title: 'Complete Guide to Modern Web Development with React and Next.js',
    excerpt: 'Learn the fundamentals and advanced techniques of building modern web applications using React, Next.js, TypeScript, and cutting-edge tools.',
    category: 'Technology',
    readTime: '12 min',
    author: 'Sarah Chen',
    date: 'Feb 3, 2026',
    matchScore: 0.95,
    image: "https://images.unsplash.com/photo-1635181951411-882166210167",
    imageAlt: 'Person coding on laptop with multiple screens showing web development code',
    href: '/guides/web-development'
  },
  {
    id: 'result_2',
    title: 'Understanding Machine Learning Fundamentals for Beginners',
    excerpt: 'A comprehensive introduction to machine learning concepts, algorithms, and applications with hands-on examples and real-world use cases.',
    category: 'Education',
    readTime: '15 min',
    author: 'Dr. Emily Watson',
    date: 'Feb 1, 2026',
    matchScore: 0.88,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_15b9cfc75-1764651774193.png",
    imageAlt: 'Digital visualization of neural network with glowing blue connections',
    href: '/guides/machine-learning'
  },
  {
    id: 'result_3',
    title: 'Mastering Productivity: Proven Time Management Strategies',
    excerpt: 'Boost your productivity with evidence-based time management techniques and systems used by top performers worldwide.',
    category: 'Lifestyle',
    readTime: '8 min',
    author: 'Michael Roberts',
    date: 'Feb 2, 2026',
    matchScore: 0.82,
    image: "https://images.unsplash.com/photo-1679602643581-ee1024aa1b18",
    imageAlt: 'Organized workspace with planner, laptop, and coffee cup on white desk',
    href: '/guides/productivity'
  }];


  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setHasSearched(true);
  };

  const handleFilterChange = (newFilters: any) => {
    setFilters(newFilters);
  };

  const handleTopicClick = (topic: string) => {
    setSearchQuery(topic);
    setHasSearched(true);
  };

  return (
    <>
      {/* Search Header */}
      <section className="py-12 bg-gradient-to-br from-primary/5 to-accent/5 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SearchBar onSearch={handleSearch} />
          
          {/* Recent Searches (only show if no search performed) */}
          {!hasSearched &&
          <div className="mt-8">
              <p className="text-sm text-muted-foreground mb-3">Recent Searches:</p>
              <div className="flex flex-wrap gap-2">
                {['blockchain technology', 'time management', 'python programming'].map((search, index) =>
              <button
                key={`recent_${index}`}
                onClick={() => handleSearch(search)}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white text-sm text-foreground hover:border-primary transition-all">
                
                    <Icon name="ClockIcon" size={14} className="text-muted-foreground" />
                    {search}
                  </button>
              )}
              </div>
            </div>
          }
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Sidebar */}
            <div className="lg:col-span-3">
              <FilterSidebar onFilterChange={handleFilterChange} />
            </div>

            {/* Results */}
            <div className="lg:col-span-9">
              {hasSearched ?
              searchQuery && mockResults.length > 0 ?
              <SearchResults query={searchQuery} results={mockResults} /> :

              <EmptyState query={searchQuery} /> :


              <div>
                  <SuggestedTopics onTopicClick={handleTopicClick} />
                  <div className="text-center py-16">
                    <div className="w-24 h-24 rounded-3xl bg-muted flex items-center justify-center mx-auto mb-8">
                      <Icon name="MagnifyingGlassIcon" size={48} className="text-muted-foreground" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      Start Your Search
                    </h3>
                    <p className="text-lg text-secondary max-w-md mx-auto">
                      Search through 10,000+ verified articles to find exactly what you need
                    </p>
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
      </section>
    </>);

};

// Import Icon at top of file
import Icon from '@/components/ui/AppIcon';

export default SearchInteractive;