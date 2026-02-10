"use client";

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface TOCItem {
  id: string;
  title: string;
  level: number;
}

interface TableOfContentsProps {
  items: TOCItem[];
}

const TableOfContents = ({ items }: TableOfContentsProps) => {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0px -80% 0px' }
    );

    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [items]);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="sticky top-28">
      <div className="rounded-2xl border border-gray-200 bg-white p-6">
        <div className="flex items-center gap-2 mb-4">
          <Icon name="ListBulletIcon" size={20} className="text-primary" />
          <h3 className="text-sm font-bold text-foreground uppercase tracking-wide">
            Table of Contents
          </h3>
        </div>
        <nav className="space-y-2">
          {items.map((item) => {
            const isActive = activeId === item.id;
            const paddingLeft = (item.level - 2) * 12;
            
            return (
              <button
                key={item.id}
                onClick={() => handleClick(item.id)}
                className={`w-full text-left text-sm py-2 px-3 rounded-lg transition-all ${
                  isActive
                    ? 'bg-primary/10 text-primary font-semibold' :'text-secondary hover:text-foreground hover:bg-muted'
                }`}
                style={{ paddingLeft: `${paddingLeft + 12}px` }}
              >
                {item.title}
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default TableOfContents;