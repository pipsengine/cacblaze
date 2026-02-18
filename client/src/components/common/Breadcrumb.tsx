'use client';

import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

const Breadcrumb = ({ items, className = '' }: BreadcrumbProps) => {
  const normalizedItems = items.map((item) => {
    if (item.name === 'Home') {
      return { ...item, href: '/' };
    }
    if (item.href === '/homepage') {
      return { ...item, href: '/' };
    }
    return item;
  });
  return (
    <nav
      className={`flex items-center gap-2 text-sm text-secondary ${className}`}
      aria-label="Breadcrumb"
      itemScope
      itemType="https://schema.org/BreadcrumbList"
    >
      {normalizedItems.map((item, index) => {
        const isLast = index === normalizedItems.length - 1;

        return (
          <div
            key={item.href}
            className="flex items-center gap-2"
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            {isLast ? (
              <>
                <span className="text-foreground font-medium" itemProp="name" aria-current="page">
                  {item.name}
                </span>
                <meta itemProp="position" content={String(index + 1)} />
              </>
            ) : (
              <>
                <Link
                  href={item.href}
                  className="hover:text-primary transition-colors"
                  itemProp="item"
                >
                  <span itemProp="name">{item.name}</span>
                </Link>
                <meta itemProp="position" content={String(index + 1)} />
                <Icon name="ChevronRightIcon" size={16} className="text-muted-foreground" />
              </>
            )}
          </div>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;
