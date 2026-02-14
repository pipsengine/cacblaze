import { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';
import Breadcrumb from '@/components/common/Breadcrumb';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

export const metadata: Metadata = {
  title: 'Nigerian City Guides - CACBLAZE',
  description:
    'Comprehensive guides for Lagos, Abuja, and Port Harcourt covering traffic hacks, housing, business opportunities, and local insights.',
  keywords:
    'Lagos guide, Abuja guide, Port Harcourt, Nigerian cities, traffic hacks, housing Nigeria, business Nigeria',
};

const NigerianCitiesPage = () => {
  const breadcrumbItems = [
    { name: 'Home', href: '/homepage' },
    { name: 'Nigerian Cities', href: '/nigerian-cities' },
  ];

  const cities = [
    {
      id: 'lagos',
      name: 'Lagos',
      tagline: "Nigeria's Economic Powerhouse",
      description:
        "Navigate Lagos like a pro with traffic hacks, housing guides, and business opportunities in Africa's largest city.",
      image:
        'https://images.unsplash.com/photo-1654854836161-d7ff36a5130a?auto=format&fit=crop&w=1200&q=80',
      imageAlt: 'Lagos skyline with modern buildings and busy streets',
      href: '/nigerian-cities/lagos',
      stats: { population: '15M+', traffic: 'Heavy', business: 'High' },
      highlights: [
        'Traffic Survival Guide',
        'Housing Hotspots',
        'Business Hubs',
        'Best Neighborhoods',
      ],
    },
    {
      id: 'abuja',
      name: 'Abuja',
      tagline: 'The Federal Capital Territory',
      description:
        "Discover Abuja's organized layout, government opportunities, real estate market, and quality of life advantages.",
      image:
        'https://source.unsplash.com/1200x800/?abuja,city',
      imageAlt: 'Abuja city center with Aso Rock in background',
      href: '/nigerian-cities/abuja',
      stats: { population: '3M+', traffic: 'Moderate', business: 'Growing' },
      highlights: ['Housing Market Guide', 'Government Jobs', 'Best Districts', 'Cost of Living'],
    },
    {
      id: 'port-harcourt',
      name: 'Port Harcourt',
      tagline: 'The Garden City',
      description:
        "Explore Port Harcourt's oil & gas opportunities, business landscape, and emerging tech scene in the Niger Delta.",
      image:
        'https://source.unsplash.com/1200x800/?port-harcourt,city',
      imageAlt: 'Port Harcourt waterfront with industrial and commercial areas',
      href: '/nigerian-cities/port-harcourt',
      stats: { population: '2M+', traffic: 'Light', business: 'Oil & Gas' },
      highlights: ['Oil & Gas Careers', 'Business Setup', 'Housing Options', 'Tech Opportunities'],
    },
  ];

  const popularGuides = [
    {
      id: 'traffic_1',
      title: 'Lagos Traffic Survival Guide: Best Routes & Times',
      category: 'Lagos',
      readTime: '8 min',
      href: '/nigerian-cities/lagos/traffic-guide',
    },
    {
      id: 'housing_1',
      title: 'Abuja Housing: Complete Neighborhood Comparison',
      category: 'Abuja',
      readTime: '12 min',
      href: '/nigerian-cities/abuja/housing-guide',
    },
    {
      id: 'business_1',
      title: 'Starting a Business in Port Harcourt: Complete Guide',
      category: 'Port Harcourt',
      readTime: '15 min',
      href: '/nigerian-cities/port-harcourt/business-guide',
    },
    {
      id: 'cost_1',
      title: 'Cost of Living Comparison: Lagos vs Abuja vs PH',
      category: 'Comparison',
      readTime: '10 min',
      href: '/nigerian-cities/cost-comparison',
    },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Breadcrumb items={breadcrumbItems} className="mb-6" />

            <div className="max-w-3xl">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold uppercase tracking-wide mb-4">
                Hyperlocal Guides
              </span>
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Nigerian City Guides
              </h1>
              <p className="text-xl text-secondary mb-8 leading-relaxed">
                Master life in Nigeria's major cities with insider tips on traffic, housing,
                business, and everything in between.
              </p>
            </div>
          </div>
        </section>

        {/* City Cards */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              {cities.map((city) => (
                <Link
                  key={city.id}
                  href={city.href}
                  className="group block rounded-3xl border border-gray-200 bg-white hover:border-primary transition-all overflow-hidden hover-lift"
                >
                  <div className="relative h-64 overflow-hidden">
                    <AppImage
                      src={city.image}
                      alt={city.imageAlt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <h2 className="text-3xl font-bold text-white mb-2">{city.name}</h2>
                      <p className="text-white/90 text-sm">{city.tagline}</p>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-secondary text-sm mb-4 leading-relaxed">
                      {city.description}
                    </p>

                    {/* Stats */}
                    <div className="flex items-center gap-4 mb-4 pb-4 border-b border-gray-100">
                      <div className="text-center">
                        <div className="text-xs text-muted-foreground mb-1">Population</div>
                        <div className="text-sm font-semibold text-foreground">
                          {city.stats.population}
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-muted-foreground mb-1">Traffic</div>
                        <div className="text-sm font-semibold text-foreground">
                          {city.stats.traffic}
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-muted-foreground mb-1">Business</div>
                        <div className="text-sm font-semibold text-foreground">
                          {city.stats.business}
                        </div>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="space-y-2">
                      {city.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-secondary">
                          <Icon name="CheckCircleIcon" size={16} className="text-primary" />
                          {highlight}
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 flex items-center gap-2 text-primary font-medium">
                      Explore {city.name}
                      <Icon
                        name="ArrowRightIcon"
                        size={16}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Guides */}
        <section className="py-16 bg-gradient-to-br from-muted/30 to-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8">Popular City Guides</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {popularGuides.map((guide) => (
                <Link
                  key={guide.id}
                  href={guide.href}
                  className="group block p-6 rounded-2xl border border-gray-200 bg-white hover:border-primary transition-all hover-lift"
                >
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3">
                    {guide.category}
                  </span>
                  <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {guide.title}
                  </h3>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Icon name="ClockIcon" size={14} />
                    <span className="text-xs">{guide.readTime}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="rounded-3xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 p-12 text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary text-white flex items-center justify-center mx-auto mb-6">
                <Icon name="MapPinIcon" size={32} className="text-white" />
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Moving to a New City?</h2>
              <p className="text-xl text-secondary mb-8 max-w-2xl mx-auto">
                Get personalized relocation advice and connect with locals who can help you settle
                in.
              </p>
              <Link
                href="/nigerian-cities/relocation-guide"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-2xl font-semibold hover:bg-primary/90 transition-all hover-lift"
              >
                Get Relocation Guide
                <Icon name="ArrowRightIcon" size={20} className="text-white" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default NigerianCitiesPage;
