import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const Footer = () => {
  const currentYear = 2026;

  const footerLinks = {
    company: [
      { id: 'footer_about', label: 'About', href: '/about' },
      { id: 'footer_careers', label: 'Careers', href: '/careers' },
      { id: 'footer_press', label: 'Press', href: '/press' },
      { id: 'footer_partners', label: 'Partners', href: '/partners' },
      { id: 'footer_contact', label: 'Contact', href: '/contact' },
    ],
    resources: [
      { id: 'footer_guides', label: 'Guides', href: '/guides' },
      { id: 'footer_howto', label: 'How-To', href: '/howto' },
      { id: 'footer_reviews', label: 'Reviews', href: '/reviews' },
      { id: 'footer_education', label: 'Education', href: '/education' },
    ],
    legal: [
      { id: 'footer_privacy', label: 'Privacy', href: '/privacy' },
      { id: 'footer_terms', label: 'Terms', href: '/terms' },
      { id: 'footer_cookies', label: 'Cookie Policy', href: '/cookies' },
    ],
  };

  const socialLinks = [
    { id: 'social_twitter', icon: 'XMarkIcon' as const, href: 'https://twitter.com', label: 'Twitter' },
    { id: 'social_linkedin', icon: 'LinkIcon' as const, href: 'https://linkedin.com', label: 'LinkedIn' },
    { id: 'social_github', icon: 'CodeBracketIcon' as const, href: 'https://github.com', label: 'GitHub' },
  ];

  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4">
            <Link href="/homepage" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <Icon name="BookOpenIcon" size={24} className="text-white" />
              </div>
              <span className="text-2xl font-bold text-foreground">CACBLAZE</span>
            </Link>
            <p className="text-sm text-secondary leading-relaxed max-w-xs mb-6">
              Human-centered knowledge for the AI era. Empowering learners with authoritative, verified content across every domain.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-secondary hover:text-primary hover:border-primary transition-colors"
                  aria-label={social.label}
                >
                  <Icon name={social.icon} size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div className="col-span-1 md:col-span-2 md:col-start-7">
            <h4 className="text-sm font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.href}
                    className="text-sm text-secondary hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-sm font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.href}
                    className="text-sm text-secondary hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="col-span-2 md:col-span-2">
            <h4 className="text-sm font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.href}
                    className="text-sm text-secondary hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {currentYear} CACBLAZE Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-muted-foreground">
            <Link href="/privacy" className="hover:text-primary transition-colors">
              Privacy
            </Link>
            <span>·</span>
            <Link href="/terms" className="hover:text-primary transition-colors">
              Terms
            </Link>
            <span>·</span>
            <Link href="/cookies" className="hover:text-primary transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;