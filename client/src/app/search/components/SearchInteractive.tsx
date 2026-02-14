'use client';

import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { NIGERIA_STATES } from '@/data/nigeria-states';
import SearchBar from './SearchBar';
import FilterSidebar from './FilterSidebar';
import SearchResults from './SearchResults';
import SuggestedTopics from './SuggestedTopics';
import EmptyState from './EmptyState';

const SearchInteractive = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({});
  const [hasSearched, setHasSearched] = useState(false);
  const params = useSearchParams();
  const type = params?.get('type') || '';
  const state = params?.get('state') || '';
  const formattedType =
    type === 'food-delivery'
      ? 'Food Delivery'
      : type === 'restaurants'
      ? 'Restaurants'
    : type === 'cost-of-living'
      ? 'Cost of Living'
      : type === 'lounges'
      ? 'Lounges'
      : type === 'street-food'
      ? 'Street Food'
      : type === 'places-to-visit'
      ? 'Places to Visit'
      : type === 'attractions'
      ? 'Attractions'
      : type === 'itineraries'
      ? 'Itineraries'
      : type === 'local-culture'
      ? 'Local Culture'
      : type === 'events-calendar'
      ? 'Events Calendar'
      : type === 'concerts'
      ? 'Concerts'
      : type === 'festivals'
      ? 'Festivals'
      : type === 'nightlife'
      ? 'Nightlife'
      : type === 'family-events'
      ? 'Family Events'
      : type === 'home-services'
      ? 'Home Services'
      : type === 'freelancers'
      ? 'Freelancers'
      : type === 'professionals'
      ? 'Professionals'
      : type === 'business-services'
      ? 'Business Services'
      : type === 'tech-services'
      ? 'Tech Services'
      : type
      ? type
      : '';

  useEffect(() => {
    if (type || state) {
      const formattedType =
        type === 'food-delivery'
          ? 'Food Delivery'
          : type === 'restaurants'
          ? 'Restaurants'
          : type === 'lounges'
          ? 'Lounges'
          : type === 'street-food'
          ? 'Street Food'
          : type
          ? type
          : '';
      const queryParts = [];
      if (formattedType) queryParts.push(formattedType);
      if (state) queryParts.push(state);
      const q = queryParts.length > 0 ? queryParts.join(' in ') : '';
      if (q) {
        setSearchQuery(q);
        setHasSearched(true);
        setFilters({ categories: ['local'], state });
      }
    }
  }, [type, state]);

  const topicImages = [
    'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    'https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    'https://images.pexels.com/photos/4109135/pexels-photo-4109135.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    'https://images.pexels.com/photos/616401/pexels-photo-616401.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    'https://images.pexels.com/photos/2232/vegetables-italian-pizza-restaurant.jpg?auto=compress&cs=tinysrgb&w=1200&q=80',
    'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    'https://images.pexels.com/photos/1435895/pexels-photo-1435895.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
  ];

  const buildTopicResults = (t: string, s: string) => {
    const label = t === 'food-delivery' ? 'Food Delivery' : formattedType || 'Local Resources';
    const baseHref =
      t === 'food-delivery'
        ? '/local-resources/food-delivery'
        : t === 'restaurants'
        ? '/local-resources/restaurants'
      : t === 'cost-of-living'
        ? '/local-resources/cost-of-living'
        : t === 'lounges'
        ? '/local-resources/lounges'
        : t === 'street-food'
        ? '/local-resources/street-food'
        : '/local-resources';
    const topics = [
      `Best ${label} in ${s || 'your area'}`,
      `Affordable ${label} options in ${s || 'your area'}`,
      `Top-rated ${label} vendors in ${s || 'your area'}`,
      `Fast ${label} services in ${s || 'your area'}`,
      `Late-night ${label} available in ${s || 'your area'}`,
      `Healthy ${label} choices in ${s || 'your area'}`,
      `Local favorites for ${label} in ${s || 'your area'}`,
      `Weekend promos for ${label} in ${s || 'your area'}`,
    ];
    return topics.map((title, idx) => ({
      id: `topic_${t || 'general'}_${s || 'global'}_${idx}`,
      title,
      excerpt:
        s && t
          ? `${label} highlights in ${s}: verified vendors, reliable delivery windows, budget combos, and seasonal promos.`
          : `Discover verified options, delivery windows, and budget-friendly picks.`,
      category: label,
      readTime: `${8 + (idx % 5)} min`,
      author: 'Editorial',
      date: 'Feb 2026',
      matchScore: 0.8 + (idx % 3) * 0.06,
      image: topicImages[idx % topicImages.length],
      imageAlt: `${label} illustration`,
      href: baseHref + (s ? `?state=${encodeURIComponent(s)}` : ''),
    }));
  };

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

          {formattedType && (
            <div className="mt-6 flex items-center gap-2">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                <Icon name="TagIcon" size={14} className="text-primary" />
                {formattedType}
              </span>
              {state && (
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted text-foreground text-xs font-semibold">
                  <Icon name="MapPinIcon" size={14} className="text-muted-foreground" />
                  {state}
                </span>
              )}
            </div>
          )}

          {/* Recent Searches (only show if no search performed) */}
          {!hasSearched && (
            <div className="mt-8">
              <p className="text-sm text-muted-foreground mb-3">Recent Searches:</p>
              <div className="flex flex-wrap gap-2">
                {['blockchain technology', 'time management', 'python programming'].map(
                  (search, index) => (
                    <button
                      key={`recent_${index}`}
                      onClick={() => handleSearch(search)}
                      className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white text-sm text-foreground hover:border-primary transition-all"
                    >
                      <Icon name="ClockIcon" size={14} className="text-muted-foreground" />
                      {search}
                    </button>
                  )
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      {formattedType && (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Explore {formattedType} by State
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {NIGERIA_STATES.map((s) => {
                const basePath =
                  type === 'food-delivery'
                    ? '/local-resources/food-delivery'
                    : type === 'restaurants'
                    ? '/local-resources/restaurants'
                    : type === 'lounges'
                    ? '/local-resources/lounges'
                    : type === 'street-food'
                    ? '/local-resources/street-food'
                    : type === 'places-to-visit'
                    ? '/local-resources/places-to-visit'
                    : type === 'attractions'
                    ? '/local-resources/attractions'
                    : type === 'itineraries'
                    ? '/local-resources/itineraries'
                    : type === 'local-culture'
                    ? '/local-resources/local-culture'
                    : type === 'events-calendar'
                    ? '/local-resources/events-calendar'
                    : type === 'concerts'
                    ? '/local-resources/concerts'
                    : type === 'festivals'
                    ? '/local-resources/festivals'
                    : type === 'nightlife'
                    ? '/local-resources/nightlife'
                    : type === 'family-events'
                    ? '/local-resources/family-events'
                    : type === 'home-services'
                    ? '/local-resources/home-services'
                  : type === 'freelancers'
                    ? '/local-resources/freelancers'
                  : type === 'professionals'
                    ? '/local-resources/professionals'
                  : type === 'business-services'
                    ? '/local-resources/business-services'
                    : type === 'tech-services'
                    ? '/local-resources/tech-services'
                    : `/search?type=${encodeURIComponent(type)}`;
                const href =
                  basePath.startsWith('/local-resources')
                    ? `${basePath}?state=${encodeURIComponent(s)}`
                    : `${basePath}&state=${encodeURIComponent(s)}`;
                return (
                <Link
                  key={s}
                  href={href}
                  className={`flex items-center justify-between gap-3 rounded-2xl border ${
                    s === state ? 'border-primary' : 'border-gray-200'
                  } bg-white px-4 py-3 hover:border-primary hover:bg-primary/5 transition-colors`}
                >
                  <div className="flex items-center gap-2">
                    <Icon name="MapPinIcon" size={16} className="text-primary" />
                    <span className="text-sm font-semibold text-foreground">{s}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">{formattedType}</span>
                </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Sidebar */}
            <div className="lg:col-span-3">
              <FilterSidebar
                onFilterChange={handleFilterChange}
                initialCategories={useMemo(() => (type ? ['local'] : []), [type])}
              />
            </div>

            {/* Results */}
            <div className="lg:col-span-9">
              {hasSearched ? (
                searchQuery ? (
                  <SearchResults
                    query={searchQuery}
                    results={
                      formattedType
                        ? buildTopicResults(type, state)
                        : buildTopicResults('', '')
                    }
                  />
                ) : (
                  <EmptyState query={searchQuery} />
                )
              ) : (
                <div>
                  <SuggestedTopics onTopicClick={handleTopicClick} />
                  <div className="text-center py-16">
                    <div className="w-24 h-24 rounded-3xl bg-muted flex items-center justify-center mx-auto mb-8">
                      <Icon
                        name="MagnifyingGlassIcon"
                        size={48}
                        className="text-muted-foreground"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">Start Your Search</h3>
                    <p className="text-lg text-secondary max-w-md mx-auto">
                      Search through 10,000+ verified articles to find exactly what you need
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// Import Icon at top of file
import Icon from '@/components/ui/AppIcon';

export default SearchInteractive;
