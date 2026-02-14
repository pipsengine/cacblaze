'use client';

import { useState, useEffect, useRef } from 'react';

interface FilterSidebarProps {
  onFilterChange: (filters: any) => void;
  initialCategories?: string[];
}

const FilterSidebar = ({ onFilterChange, initialCategories = [] }: FilterSidebarProps) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>(initialCategories);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [readTimeRange, setReadTimeRange] = useState<string>('all');
  const initialized = useRef(false);

  const categories = [
    { id: 'cat_tech', value: 'technology', label: 'Technology', count: 2400 },
    { id: 'cat_edu', value: 'education', label: 'Education', count: 1800 },
    { id: 'cat_life', value: 'lifestyle', label: 'Lifestyle', count: 1500 },
    { id: 'cat_local', value: 'local', label: 'Local Resources', count: 800 },
    { id: 'cat_reviews', value: 'reviews', label: 'Reviews', count: 650 },
  ];

  const difficulties = [
    { id: 'diff_all', value: 'all', label: 'All Levels' },
    { id: 'diff_beginner', value: 'beginner', label: 'Beginner' },
    { id: 'diff_intermediate', value: 'intermediate', label: 'Intermediate' },
    { id: 'diff_advanced', value: 'advanced', label: 'Advanced' },
  ];

  const readTimes = [
    { id: 'time_all', value: 'all', label: 'Any Length' },
    { id: 'time_short', value: 'short', label: 'Quick Read (< 5 min)' },
    { id: 'time_medium', value: 'medium', label: 'Medium (5-15 min)' },
    { id: 'time_long', value: 'long', label: 'In-Depth (15+ min)' },
  ];

  useEffect(() => {
    if (!initialized.current && initialCategories.length > 0) {
      initialized.current = true;
      onFilterChange({
        categories: initialCategories,
        difficulty: selectedDifficulty,
        readTime: readTimeRange,
      });
    }
  }, [initialCategories, selectedDifficulty, readTimeRange, onFilterChange]);

  const handleCategoryToggle = (category: string) => {
    const newCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((c) => c !== category)
      : [...selectedCategories, category];
    setSelectedCategories(newCategories);
    onFilterChange({
      categories: newCategories,
      difficulty: selectedDifficulty,
      readTime: readTimeRange,
    });
  };

  const handleClearFilters = () => {
    setSelectedCategories([]);
    setSelectedDifficulty('all');
    setReadTimeRange('all');
    onFilterChange({ categories: [], difficulty: 'all', readTime: 'all' });
  };

  return (
    <div className="sticky top-24 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-foreground">Filters</h3>
        {(selectedCategories.length > 0 ||
          selectedDifficulty !== 'all' ||
          readTimeRange !== 'all') && (
          <button
            onClick={handleClearFilters}
            className="text-sm text-primary hover:text-primary/80 transition-colors font-medium"
          >
            Clear All
          </button>
        )}
      </div>

      {/* Categories */}
      <div>
        <h4 className="text-sm font-semibold text-foreground mb-4">Categories</h4>
        <div className="space-y-3">
          {categories.map((category) => (
            <label key={category.id} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={selectedCategories.includes(category.value)}
                onChange={() => handleCategoryToggle(category.value)}
                className="w-5 h-5 rounded border-2 border-gray-300 text-primary focus:ring-primary focus:ring-offset-0"
              />
              <span className="flex-1 text-sm text-foreground group-hover:text-primary transition-colors">
                {category.label}
              </span>
              <span className="text-xs text-muted-foreground">{category.count}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Difficulty */}
      <div>
        <h4 className="text-sm font-semibold text-foreground mb-4">Difficulty Level</h4>
        <div className="space-y-3">
          {difficulties.map((difficulty) => (
            <label key={difficulty.id} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="radio"
                name="difficulty"
                value={difficulty.value}
                checked={selectedDifficulty === difficulty.value}
                onChange={(e) => {
                  setSelectedDifficulty(e.target.value);
                  onFilterChange({
                    categories: selectedCategories,
                    difficulty: e.target.value,
                    readTime: readTimeRange,
                  });
                }}
                className="w-5 h-5 border-2 border-gray-300 text-primary focus:ring-primary focus:ring-offset-0"
              />
              <span className="text-sm text-foreground group-hover:text-primary transition-colors">
                {difficulty.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Read Time */}
      <div>
        <h4 className="text-sm font-semibold text-foreground mb-4">Read Time</h4>
        <div className="space-y-3">
          {readTimes.map((time) => (
            <label key={time.id} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="radio"
                name="readTime"
                value={time.value}
                checked={readTimeRange === time.value}
                onChange={(e) => {
                  setReadTimeRange(e.target.value);
                  onFilterChange({
                    categories: selectedCategories,
                    difficulty: selectedDifficulty,
                    readTime: e.target.value,
                  });
                }}
                className="w-5 h-5 border-2 border-gray-300 text-primary focus:ring-primary focus:ring-offset-0"
              />
              <span className="text-sm text-foreground group-hover:text-primary transition-colors">
                {time.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Date Range */}
      <div>
        <h4 className="text-sm font-semibold text-foreground mb-4">Published Date</h4>
        <select className="w-full px-4 py-2 rounded-xl border border-gray-200 bg-white text-sm text-foreground focus:outline-none focus:border-primary">
          <option value="all">All Time</option>
          <option value="week">Past Week</option>
          <option value="month">Past Month</option>
          <option value="year">Past Year</option>
        </select>
      </div>
    </div>
  );
};

export default FilterSidebar;
