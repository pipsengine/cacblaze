'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { MenuItem } from '@/types/menu';

interface MegaMenuProps {
  item: MenuItem;
  isActive: boolean;
}

const MegaMenu = ({ item, isActive }: MegaMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Detect screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle hover with delay buffer for desktop
  const handleMouseEnter = () => {
    if (isMobile || !item?.hasDropdown) return;
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    if (isMobile || !item?.hasDropdown) return;
    // Add 200ms buffer to prevent accidental close
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };

  // Handle mobile click/tap only
  const handleClick = (e: React.MouseEvent) => {
    if (!isMobile) {
      // On desktop, prevent click and rely on hover
      e.preventDefault();
      return;
    }
    // Mobile: toggle accordion
    setIsOpen(!isOpen);
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setIsOpen(!isOpen);
    } else if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  if (!item?.hasDropdown || !item?.categories) {
    return (
      <Link
        href={item?.href}
        className={`text-sm font-medium transition-colors whitespace-nowrap ${
          isActive ? 'text-primary' : 'text-secondary hover:text-foreground'
        }`}
      >
        {item?.label}
      </Link>
    );
  }

  return (
    <div
      ref={menuRef}
      className="h-full flex items-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        className={`flex items-center gap-1 text-sm font-medium transition-colors whitespace-nowrap ${
          isActive || isOpen ? 'text-primary' : 'text-secondary hover:text-foreground'
        }`}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {item?.label}
        <ChevronDownIcon
          className={`w-4 h-4 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          } ${!isMobile ? 'pointer-events-none' : ''}`}
          aria-hidden="true"
        />
      </button>

      {/* Dropdown Menu */}
      <div
        className={`absolute left-0 top-full w-full bg-white border-t border-gray-200 shadow-lg z-50 transition-all duration-150 ease-out ${
          isOpen
            ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        role="menu"
        aria-label={`${item?.label} submenu`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
          <div
            className={`grid gap-x-8 gap-y-6 ${
              item?.categories?.length <= 2
                ? 'grid-cols-2'
                : item?.categories?.length === 3
                ? 'grid-cols-3' : 'grid-cols-4'
            }`}
          >
            {item?.categories?.map((category) => (
              <div key={category?.id} className="space-y-4">
                <h3 className="text-xs font-bold text-foreground uppercase tracking-wider border-b border-gray-100 pb-2">
                  {category?.label}
                </h3>
                <ul className="space-y-2.5">
                  {category?.items?.map((subItem) => (
                    <li key={subItem?.id}>
                      <Link
                        href={subItem?.href}
                        className="block text-sm text-secondary hover:text-primary transition-colors hover:translate-x-1 duration-200"
                        role="menuitem"
                        onClick={() => setIsOpen(false)}
                      >
                        {subItem?.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;