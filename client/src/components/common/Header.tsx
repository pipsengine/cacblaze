'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Icon from '@/components/ui/AppIcon';
import MegaMenu from '@/components/common/MegaMenu';
import { menuData } from '@/data/menuData';
import { useAuth } from '@/contexts/AuthContext';
import NotificationCenter from '@/components/common/NotificationCenter';
import UserAccountMenu from '@/components/common/UserAccountMenu';
import { CACBLAZE_EVENT_EXAMPLES, trackEvent } from '@/lib/analytics';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { user, userRole } = useAuth();
  const navItems = menuData?.mainMenu ?? [];

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
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 xl:px-8 2xl:px-10">
        <div className="flex h-20 items-center gap-4 xl:gap-6 2xl:gap-8">
          {/* Logo */}
          <Link
            href="/"
            onClick={() =>
              trackEvent('homepage_cta_click', {
                page_type: 'home',
                cta_location: 'header_logo',
                link_text: 'CACBLAZE',
                destination_url: '/',
              })
            }
            className="group flex shrink-0 items-center gap-2"
          >
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <Icon name="BookOpenIcon" size={24} className="text-white" />
            </div>
            <span className="text-2xl font-bold text-foreground tracking-tight">CACBLAZE</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden min-w-0 flex-1 xl:flex xl:justify-center">
            <nav className="flex h-full min-w-0 items-stretch justify-center gap-1 2xl:gap-3">
              {navItems.map((item) => (
                <MegaMenu key={item?.id} item={item} isActive={pathname === item?.href} />
              ))}
            </nav>
          </div>

          {/* CTA Buttons */}
          <div className="hidden shrink-0 items-center gap-2 xl:flex 2xl:gap-3">
            {!user ? (
              <>
                <div className="flex items-center gap-2 2xl:gap-3">
                  <Link
                    href="/login"
                    className="inline-flex whitespace-nowrap px-3 py-2 text-sm font-semibold text-secondary transition-colors hover:text-foreground"
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/register"
                    className="inline-flex whitespace-nowrap rounded-full border border-gray-200 px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:border-gray-300 hover:bg-white 2xl:px-5"
                  >
                    Create Account
                  </Link>
                </div>
                <Link
                  href="/search"
                  onClick={() =>
                    trackEvent('search_content_click', {
                      page_type: 'home',
                      section_name: 'header',
                      link_text: 'Search',
                      destination_url: '/search',
                    })
                  }
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-transparent text-secondary transition-colors hover:border-gray-200 hover:bg-white hover:text-foreground 2xl:w-auto 2xl:gap-2 2xl:px-4"
                  aria-label="Search"
                >
                  <Icon name="MagnifyingGlassIcon" size={20} />
                  <span className="hidden text-sm font-medium 2xl:inline">Search</span>
                </Link>
                <Link
                  href="/guides"
                  onClick={() =>
                    CACBLAZE_EVENT_EXAMPLES.exploreGuidesClick({
                      cta_location: 'header',
                      section_name: 'header',
                      link_text: 'Start Exploring',
                      destination_url: '/guides',
                    })
                  }
                  className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary/90 2xl:px-5"
                >
                  <span className="2xl:hidden">Explore</span>
                  <span className="hidden 2xl:inline">Start Exploring</span>
                  <Icon name="ArrowRightIcon" size={16} className="text-white" />
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/search"
                  onClick={() =>
                    trackEvent('search_content_click', {
                      page_type: 'home',
                      section_name: 'header',
                      link_text: 'Search',
                      destination_url: '/search',
                    })
                  }
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-transparent text-secondary transition-colors hover:border-gray-200 hover:bg-white hover:text-foreground 2xl:w-auto 2xl:gap-2 2xl:px-4"
                  aria-label="Search"
                >
                  <Icon name="MagnifyingGlassIcon" size={20} />
                  <span className="hidden text-sm font-medium 2xl:inline">Search</span>
                </Link>
                <NotificationCenter />
                <Link
                  href="/guides"
                  onClick={() =>
                    CACBLAZE_EVENT_EXAMPLES.exploreGuidesClick({
                      cta_location: 'header',
                      section_name: 'header',
                      link_text: 'Start Exploring',
                      destination_url: '/guides',
                    })
                  }
                  className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary/90 2xl:px-5"
                >
                  <span className="2xl:hidden">Explore</span>
                  <span className="hidden 2xl:inline">Start Exploring</span>
                  <Icon name="ArrowRightIcon" size={16} className="text-white" />
                </Link>
                <UserAccountMenu />
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-foreground"
            aria-label="Toggle mobile menu"
          >
            <Icon name={mobileMenuOpen ? 'XMarkIcon' : 'Bars3Icon'} size={24} />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="max-h-[80vh] overflow-y-auto border-t border-gray-200 bg-white py-6 xl:hidden">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
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
                onClick={() => {
                  setMobileMenuOpen(false);
                  trackEvent('search_content_click', {
                    page_type: 'home',
                    section_name: 'mobile_header',
                    link_text: 'Search',
                    destination_url: '/search',
                  });
                }}
                className="px-4 py-2 text-sm font-medium text-secondary hover:text-foreground flex items-center gap-2"
              >
                <Icon name="MagnifyingGlassIcon" size={20} />
                Search
              </Link>
              <Link
                href="/guides"
                onClick={() => {
                  setMobileMenuOpen(false);
                  CACBLAZE_EVENT_EXAMPLES.exploreGuidesClick({
                    cta_location: 'mobile_header',
                    section_name: 'mobile_header',
                    link_text: 'Start Exploring',
                    destination_url: '/guides',
                  });
                }}
                className="mx-4 px-6 py-2.5 bg-primary text-white rounded-full text-sm font-semibold text-center"
              >
                Start Exploring
              </Link>
              {user ? (
                <div className="mx-4 rounded-3xl border border-gray-200 bg-gray-50 p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
                      {(user.full_name || user.username || user.email).slice(0, 1).toUpperCase()}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">
                        {user.full_name || user.username}
                      </p>
                      <p className="text-xs uppercase tracking-[0.18em] text-secondary">
                        {userRole}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 space-y-2">
                    <Link
                      href="/account/profile"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-medium text-foreground"
                    >
                      <Icon name="UserCircleIcon" size={18} />
                      Profile
                    </Link>
                    <Link
                      href="/account/security"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-medium text-foreground"
                    >
                      <Icon name="KeyIcon" size={18} />
                      Change Password
                    </Link>
                    <Link
                      href="/bookmarks"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-medium text-foreground"
                    >
                      <Icon name="BookmarkIcon" size={18} />
                      Library
                    </Link>
                    {userRole === 'admin' && (
                      <Link
                        href="/admin"
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-medium text-foreground"
                      >
                        <Icon name="ShieldCheckIcon" size={18} />
                        Admin Workspace
                      </Link>
                    )}
                  </div>
                </div>
              ) : (
                <div className="mx-4 grid grid-cols-2 gap-3">
                  <Link
                    href="/login"
                    onClick={() => setMobileMenuOpen(false)}
                    className="rounded-full border border-gray-300 px-5 py-2.5 text-center text-sm font-semibold text-foreground"
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/register"
                    onClick={() => setMobileMenuOpen(false)}
                    className="rounded-full bg-slate-900 px-5 py-2.5 text-center text-sm font-semibold text-white"
                  >
                    Create Account
                  </Link>
                </div>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
