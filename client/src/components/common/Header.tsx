'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Icon from '@/components/ui/AppIcon';
import MegaMenu from '@/components/common/MegaMenu';
import { menuData } from '@/data/menuData';
import { useAuth } from '@/contexts/AuthContext';
import NotificationCenter from '@/components/common/NotificationCenter';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { user, userRole } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-200'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          {/* Logo */}
          <Link href="/homepage" className="flex items-center gap-2 group shrink-0">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <Icon name="BookOpenIcon" size={24} className="text-white" />
            </div>
            <span className="text-2xl font-bold text-foreground tracking-tight">CACBLAZE</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex h-full gap-5">
            {menuData?.mainMenu?.map((item) => (
              <MegaMenu key={item?.id} item={item} isActive={pathname === item?.href} />
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            {user && <NotificationCenter />}
            {user && (
              <Link
                href="/bookmarks"
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-secondary hover:text-foreground transition-colors"
              >
                <Icon name="BookmarkIcon" size={20} />
                Library
              </Link>
            )}
            {user && userRole === 'admin' && (
              <Link
                href="/admin"
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-secondary hover:text-foreground transition-colors"
              >
                <Icon name="ShieldCheckIcon" size={20} />
                Admin
              </Link>
            )}
            <Link
              href="/search"
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-secondary hover:text-foreground transition-colors"
            >
              <Icon name="MagnifyingGlassIcon" size={20} />
              Search
            </Link>
            <Link
              href="/guides"
              className="px-5 py-2 bg-primary text-white rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors flex items-center gap-2 whitespace-nowrap"
            >
              Start Exploring
              <Icon name="ArrowRightIcon" size={16} className="text-white" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle mobile menu"
          >
            <Icon name={mobileMenuOpen ? 'XMarkIcon' : 'Bars3Icon'} size={24} />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-6 border-t border-gray-200 bg-white max-h-[80vh] overflow-y-auto">
            <nav className="flex flex-col gap-4">
              {menuData?.mainMenu?.map((item) => (
                <div key={item?.id} className="space-y-2">
                  <Link
                    href={item?.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-2 text-sm font-semibold transition-colors block ${
                      pathname === item?.href
                        ? 'text-primary bg-muted'
                        : 'text-secondary hover:text-foreground'
                    }`}
                  >
                    {item?.label}
                  </Link>
                  {item?.hasDropdown && item?.categories && (
                    <div className="pl-4 space-y-2">
                      {item?.categories?.map((category) => (
                        <div key={category?.id} className="space-y-1">
                          <p className="px-4 py-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                            {category?.label}
                          </p>
                          {category?.items?.map((subItem) => (
                            <Link
                              key={subItem?.id}
                              href={subItem?.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block px-4 py-1.5 text-xs text-secondary hover:text-primary transition-colors"
                            >
                              {subItem?.label}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                href="/search"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 text-sm font-medium text-secondary hover:text-foreground flex items-center gap-2"
              >
                <Icon name="MagnifyingGlassIcon" size={20} />
                Search
              </Link>
              <Link
                href="/guides"
                onClick={() => setMobileMenuOpen(false)}
                className="mx-4 px-6 py-2.5 bg-primary text-white rounded-full text-sm font-semibold text-center"
              >
                Start Exploring
              </Link>
              {user && userRole === 'admin' && (
                <Link
                  href="/admin"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mx-4 px-6 py-2.5 border border-primary text-primary rounded-full text-sm font-semibold text-center flex items-center justify-center gap-2"
                >
                  <Icon name="ShieldCheckIcon" size={20} />
                  Admin Dashboard
                </Link>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
