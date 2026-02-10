"use client";

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FilterBarProps {
  onFilterChange: (filters: FilterState) => void;
}

interface FilterState {
  category: string;
  sortBy: string;
  difficulty: string;
}

const FilterBar = ({ onFilterChange }: FilterBarProps) => {
  const [filters, setFilters] = useState<FilterState>({
    category: 'all',
    sortBy: 'popular',
    difficulty: 'all',
  });

  const categories = [
    { id: 'cat_all', value: 'all', label: 'All Categories' },
    { id: 'cat_tech', value: 'technology', label: 'Technology' },
    { id: 'cat_edu', value: 'education', label: 'Education' },
    { id: 'cat_life', value: 'lifestyle', label: 'Lifestyle' },
    { id: 'cat_local', value: 'local', label: 'Local Resources' },
  ];

  const sortOptions = [
    { id: 'sort_popular', value: 'popular', label: 'Most Popular' },
    { id: 'sort_recent', value: 'recent', label: 'Most Recent' },
    { id: 'sort_trending', value: 'trending', label: 'Trending' },
    { id: 'sort_rating', value: 'rating', label: 'Highest Rated' },
  ];

  const difficulties = [
    { id: 'diff_all', value: 'all', label: 'All Levels' },
    { id: 'diff_beginner', value: 'beginner', label: 'Beginner' },
    { id: 'diff_intermediate', value: 'intermediate', label: 'Intermediate' },
    { id: 'diff_advanced', value: 'advanced', label: 'Advanced' },
  ];

  const handleFilterChange = (key: keyof FilterState, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div className="sticky top-20 z-40 bg-white border-b border-gray-200 py-6">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
          {/* Category Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleFilterChange('category', category.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filters.category === category.value
                    ? 'bg-primary text-white' :'bg-muted text-foreground hover:bg-primary/10'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Sort & Difficulty Dropdowns */}
          <div className="flex gap-3">
            {/* Sort Dropdown */}
            <div className="relative">
              <select
                value={filters.sortBy}
                onChange={(e) => handleFilterChange('sortBy', e.target.value)}
                className="appearance-none px-4 py-2 pr-10 rounded-xl border border-gray-200 bg-white text-sm font-medium text-foreground focus:outline-none focus:border-primary cursor-pointer"
              >
                {sortOptions.map((option) => (
                  <option key={option.id} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <Icon
                name="ChevronDownIcon"
                size={16}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
              />
            </div>

            {/* Difficulty Dropdown */}
            <div className="relative">
              <select
                value={filters.difficulty}
                onChange={(e) => handleFilterChange('difficulty', e.target.value)}
                className="appearance-none px-4 py-2 pr-10 rounded-xl border border-gray-200 bg-white text-sm font-medium text-foreground focus:outline-none focus:border-primary cursor-pointer"
              >
                {difficulties.map((option) => (
                  <option key={option.id} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <Icon
                name="ChevronDownIcon"
                size={16}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;