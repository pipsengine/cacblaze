'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [query, setQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const suggestions = [
    { id: 'sugg_1', text: 'machine learning fundamentals' },
    { id: 'sugg_2', text: 'web development best practices' },
    { id: 'sugg_3', text: 'productivity tips for remote work' },
    { id: 'sugg_4', text: 'urban gardening guide' },
  ];

  const recentSearches = [
    { id: 'recent_1', text: 'blockchain technology', icon: 'ClockIcon' as const },
    { id: 'recent_2', text: 'time management', icon: 'ClockIcon' as const },
    { id: 'recent_3', text: 'python programming', icon: 'ClockIcon' as const },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
      setShowSuggestions(false);
    }
  };

  return (
    <div className="relative">
      <form onSubmit={handleSubmit} className="relative">
        <Icon
          name="MagnifyingGlassIcon"
          size={28}
          className="absolute left-6 top-1/2 -translate-y-1/2 text-muted-foreground"
        />
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setShowSuggestions(true);
          }}
          onFocus={() => setShowSuggestions(true)}
          placeholder="Search 10,000+ articles across all domains..."
          className="w-full pl-20 pr-32 py-6 rounded-3xl border-2 border-gray-200 bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-all text-xl"
        />
        <button
          type="submit"
          className="absolute right-3 top-1/2 -translate-y-1/2 px-6 py-3 bg-primary text-white rounded-2xl font-semibold hover:bg-primary/90 transition-all flex items-center gap-2"
        >
          Search
          <Icon name="ArrowRightIcon" size={18} className="text-white" />
        </button>
      </form>

      {/* Suggestions Dropdown */}
      {showSuggestions && query && (
        <div className="absolute top-full left-0 right-0 mt-4 p-6 rounded-3xl border border-gray-200 bg-white shadow-2xl z-50 animate-fade-in">
          <div className="mb-6">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">
              Suggestions
            </p>
            <div className="space-y-2">
              {suggestions.map((suggestion) => (
                <button
                  key={suggestion.id}
                  onClick={() => {
                    setQuery(suggestion.text);
                    onSearch(suggestion.text);
                    setShowSuggestions(false);
                  }}
                  className="w-full text-left px-4 py-3 rounded-xl hover:bg-muted transition-colors flex items-center gap-3"
                >
                  <Icon name="MagnifyingGlassIcon" size={16} className="text-muted-foreground" />
                  <span className="text-foreground">{suggestion.text}</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">
              Recent Searches
            </p>
            <div className="space-y-2">
              {recentSearches.map((search) => (
                <button
                  key={search.id}
                  onClick={() => {
                    setQuery(search.text);
                    onSearch(search.text);
                    setShowSuggestions(false);
                  }}
                  className="w-full text-left px-4 py-3 rounded-xl hover:bg-muted transition-colors flex items-center gap-3"
                >
                  <Icon name={search.icon} size={16} className="text-muted-foreground" />
                  <span className="text-foreground">{search.text}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Backdrop */}
      {showSuggestions && query && (
        <div className="fixed inset-0 bg-black/20 z-40" onClick={() => setShowSuggestions(false)} />
      )}
    </div>
  );
};

export default SearchBar;
