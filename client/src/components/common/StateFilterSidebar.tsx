'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import Icon from '@/components/ui/AppIcon';
import { NIGERIA_STATES } from '@/data/nigeria-states';

interface StateFilterSidebarProps {
  basePath: string;
  selectedState?: string;
  header?: string;
  className?: string;
}

const StateFilterSidebar = ({
  basePath,
  selectedState = '',
  header = 'Explore by State',
  className = '',
}: StateFilterSidebarProps) => {
  const router = useRouter();
  const [query, setQuery] = useState<string>(selectedState);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const states = NIGERIA_STATES;

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return states;
    return states.filter((s) => s.toLowerCase().includes(q));
  }, [query, states]);

  useEffect(() => {
    setQuery(selectedState);
    setActiveIndex(0);
  }, [selectedState]);

  const navigateTo = (state?: string) => {
    let url = basePath;
    if (state && state.length > 0) {
      url = `${basePath}?state=${encodeURIComponent(state)}`;
    }
    router.push(url);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex((prev) => Math.min(prev + 1, filtered.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex((prev) => Math.max(prev - 1, 0));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const choice = filtered[activeIndex] || filtered[0];
      if (choice) navigateTo(choice);
    } else if (e.key === 'Escape') {
      e.preventDefault();
      setQuery('');
      setActiveIndex(0);
    }
  };

  return (
    <aside className={`sticky top-24 ${className}`}>
      <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
            <Icon name="MapPinIcon" size={20} className="text-primary" />
          </div>
          <div>
            <div className="text-sm text-muted-foreground">{header}</div>
            <div className="text-lg font-semibold text-foreground">
              {selectedState || 'Select a State'}
            </div>
          </div>
        </div>

        <div className="relative mb-3">
          <div className="flex items-center gap-2 px-3 py-2.5 rounded-xl border border-gray-200 bg-white focus-within:border-primary">
            <Icon name="MagnifyingGlassIcon" size={18} className="text-muted-foreground" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Search states..."
              aria-label="Search states"
              className="flex-1 bg-transparent outline-none text-foreground placeholder:text-muted-foreground"
            />
            {query && (
              <button
                type="button"
                onClick={() => {
                  setQuery('');
                  setActiveIndex(0);
                  inputRef.current?.focus();
                }}
                aria-label="Clear search"
                className="p-1 rounded-md hover:bg-gray-100"
              >
                <Icon name="XMarkIcon" size={16} className="text-muted-foreground" />
              </button>
            )}
          </div>
        </div>

        <div
          role="listbox"
          aria-label="States"
          className="max-h-80 overflow-auto rounded-xl border border-gray-100"
        >
          {filtered.map((s, idx) => {
            const isActive = idx === activeIndex;
            const isSelected = s === selectedState;
            return (
              <button
                key={s}
                role="option"
                aria-selected={isSelected}
                onMouseEnter={() => setActiveIndex(idx)}
                onClick={() => navigateTo(s)}
                className={`w-full flex items-center justify-between gap-3 px-4 py-2.5 text-left transition-colors ${
                  isActive ? 'bg-primary/5' : 'bg-white'
                } ${isSelected ? 'border-l-4 border-primary' : ''}`}
              >
                <div className="flex items-center gap-2">
                  <Icon name="MapPinIcon" size={16} className="text-primary" />
                  <span className="text-sm font-medium text-foreground">{s}</span>
                </div>
                {isSelected && <Icon name="CheckCircleIcon" size={16} className="text-primary" />}
              </button>
            );
          })}
          {filtered.length === 0 && (
            <div className="px-4 py-3 text-sm text-muted-foreground">No matches</div>
          )}
        </div>

        <div className="mt-3 flex gap-2">
          <button
            type="button"
            onClick={() => navigateTo(query || selectedState)}
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-all"
          >
            <Icon name="ArrowRightIcon" size={18} className="text-white" />
            Go
          </button>
          {selectedState && (
            <button
              type="button"
              onClick={() => navigateTo(undefined)}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-200 rounded-xl text-foreground hover:border-primary transition-all"
            >
              <Icon name="BackspaceIcon" size={18} className="text-muted-foreground" />
              Clear
            </button>
          )}
        </div>
      </div>
    </aside>
  );
};

export default StateFilterSidebar;
