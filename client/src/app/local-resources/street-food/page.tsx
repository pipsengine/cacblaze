import { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';
import Breadcrumb from '@/components/common/Breadcrumb';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { NIGERIA_STATES } from '@/data/nigeria-states';

export const metadata: Metadata = {
  title: 'Street Food in Nigeria - CACBLAZE',
  description:
    'Explore Nigerian street food across Lagos, Abuja, Port Harcourt, Kano, and Ibadan. See popular areas, signature snacks, price guide, and hygiene & payment tips.',
  keywords:
    'Nigeria street food, suya, shawarma, bole fish, puff-puff, akara, kilishi, Lagos street food, Abuja street food',
};

const StreetFoodPage = () => {
  const breadcrumbItems = [
    { name: 'Home', href: '/homepage' },
    { name: 'Local Resources', href: '/local-resources' },
    { name: 'Street Food', href: '/local-resources/street-food' },
  ];

  const featuredAreas = [
    {
      id: 'lagos_island',
      city: 'Lagos',
      area: 'Lagos Island',
      image:
        'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      highlights: ['Suya at night', 'Roadside grills', 'Busy food corridors'],
    },
    {
      id: 'wuse',
      city: 'Abuja',
      area: 'Wuse',
      image:
        'https://images.pexels.com/photos/5589052/pexels-photo-5589052.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      highlights: ['Shawarma stands', 'Fresh juices', 'Evening crowd'],
    },
    {
      id: 'ph_gra',
      city: 'Port Harcourt',
      area: 'GRA',
      image:
        'https://images.pexels.com/photos/1095550/pexels-photo-1095550.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      highlights: ['Bole & fish', 'Outdoor seating', 'Weekend spots'],
    },
    {
      id: 'kano_sabon_gari',
      city: 'Kano',
      area: 'Sabon Gari',
      image:
        'https://images.pexels.com/photos/277394/pexels-photo-277394.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      highlights: ['Kilishi & dried meats', 'Local drinks', 'Market energy'],
    },
    {
      id: 'ibadan_bodija',
      city: 'Ibadan',
      area: 'Bodija',
      image:
        'https://images.pexels.com/photos/461296/pexels-photo-461296.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      highlights: ['Akara & pap', 'Fruit stalls', 'Morning rush'],
    },
  ];

  const snacks = [
    {
      id: 'suya',
      title: 'Suya & Kilishi',
      image:
        'https://images.unsplash.com/photo-1551183053-bf91a1d81141?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      points: ['Beef/chicken/ram', 'Yaji spice heat', 'Evening grills'],
    },
    {
      id: 'shawarma',
      title: 'Shawarma & Wraps',
      image:
        'https://images.pexels.com/photos/461090/pexels-photo-461090.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      points: ['Chicken/beef', 'Garlic sauce', 'Quick bites'],
    },
    {
      id: 'bole',
      title: 'Bole & Fish',
      image:
        'https://images.pexels.com/photos/1095550/pexels-photo-1095550.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      points: ['Roasted plantain', 'Pepper sauce', 'Port Harcourt style'],
    },
    {
      id: 'puffpuff',
      title: 'Puff‑Puff',
      image:
        'https://images.pexels.com/photos/704171/pexels-photo-704171.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      points: ['Sweet dough balls', 'Golden fried', 'Budget friendly'],
    },
    {
      id: 'akara',
      title: 'Akara',
      image:
        'https://images.pexels.com/photos/661282/pexels-photo-661282.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      points: ['Bean fritters', 'With bread or pap', 'Breakfast staple'],
    },
  ];

  const priceGuide = [
    {
      tier: 'Budget',
      range: '₦500 – ₦1,500 per person',
      examples: ['Puff‑puff', 'Akara & bread', 'Small suya portion'],
    },
    {
      tier: 'Mid‑Range',
      range: '₦2,000 – ₦5,000 per person',
      examples: ['Shawarma combo', 'Bole & fish plate', 'Kilishi packs'],
    },
    {
      tier: 'Premium',
      range: '₦6,000 – ₦12,000+ per person',
      examples: ['Large suya platters', 'Multiple sides', 'Group portions'],
    },
  ];

  const hygieneTips = [
    'Choose stalls with clean prep tables and covered ingredients',
    'Prefer freshly cooked items; avoid food sitting out too long',
    'Confirm oil freshness; dark or smoky oil indicates reuse',
    'Carry wipes/sanitizer; wash hands before eating',
    'If sensitive, avoid raw toppings and request well‑done',
  ];

  const paymentTips = [
    'Carry small cash for quick purchases',
    'Many vendors accept transfers; confirm account name before sending',
    'Check POS amount on screen before authorizing',
    'Keep receipts for expense tracking when available',
  ];

  const nigeriaStates = NIGERIA_STATES;

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Breadcrumb items={breadcrumbItems} className="mb-6" />
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold uppercase tracking-wide mb-4">
                Food & Hospitality
              </span>
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">Street Food</h1>
              <p className="text-xl text-secondary mb-8 leading-relaxed">
                Find Nigerian street food across major cities. Compare popular areas, signature
                snacks, price ranges, and practical tips for hygiene and payments.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/reviews/restaurants"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-primary text-white rounded-2xl font-semibold hover:bg-primary/90 transition-all hover-lift"
                >
                  Browse Restaurant Reviews
                  <Icon name="ArrowRightIcon" size={18} className="text-white" />
                </Link>
                <Link
                  href="/local-resources/cafes"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-white text-primary rounded-2xl font-semibold border border-primary/20 hover:bg-primary/5 transition-all"
                >
                  See Cafes
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8">Popular Areas</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {featuredAreas.map((area) => (
                <div
                  key={area.id}
                  className="group rounded-3xl border border-gray-200 bg-white overflow-hidden hover:border-primary transition-all hover-lift"
                >
                  <div className="relative h-56">
                    <AppImage
                      src={area.image}
                      alt={`${area.area}, ${area.city}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      priority
                      fallbackSrc="/assets/images/no_image.png"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                    <div className="absolute bottom-5 left-5 right-5">
                      <div className="text-white text-xs">{area.city}</div>
                      <h3 className="text-2xl font-bold text-white">{area.area}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="space-y-2">
                      {area.highlights.map((h, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-secondary">
                          <Icon name="CheckCircleIcon" size={16} className="text-primary" />
                          {h}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-muted/30 to-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8">Signature Snacks</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
              {snacks.map((c) => (
                <div
                  key={c.id}
                  className="group rounded-2xl border border-gray-200 bg-white overflow-hidden hover:border-primary transition-all"
                >
                  <div className="relative h-44">
                    <AppImage
                      src={c.image}
                      alt={c.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      priority
                      fallbackSrc="/assets/images/no_image.png"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-lg font-bold text-white">{c.title}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-2">
                      {c.points.map((p, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-secondary">
                          <Icon name="SparklesIcon" size={16} className="text-primary" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8">Price Guide</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {priceGuide.map((tier) => (
                <div
                  key={tier.tier}
                  className="rounded-2xl border border-gray-200 bg-white p-6 hover:border-primary transition-colors"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon name="BanknotesIcon" size={18} className="text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{tier.tier}</h3>
                  </div>
                  <div className="text-sm text-muted-foreground mb-4">{tier.range}</div>
                  <ul className="space-y-2">
                    {tier.examples.map((ex, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-secondary">
                        <Icon name="ChevronRightIcon" size={14} className="text-muted-foreground" />
                        {ex}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8">Explore by State</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {nigeriaStates.map((state) => (
                <Link
                  key={state}
                  href={`/search?type=street-food&state=${encodeURIComponent(state)}`}
                  className="flex items-center justify-between gap-3 rounded-2xl border border-gray-200 bg-white px-4 py-3 hover:border-primary hover:bg-primary/5 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <Icon name="MapPinIcon" size={16} className="text-primary" />
                    <span className="text-sm font-semibold text-foreground">{state}</span>
                  </div>
                  <Icon name="ArrowRightIcon" size={16} className="text-muted-foreground" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-muted/30 to-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="rounded-3xl border border-gray-200 bg-white p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon name="ShieldCheckIcon" size={20} className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Hygiene & Safety</h3>
                </div>
                <ul className="space-y-3">
                  {hygieneTips.map((tip, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-secondary">
                      <Icon name="CheckCircleIcon" size={18} className="text-primary mt-0.5" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl border border-gray-200 bg-white p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
                    <Icon name="CreditCardIcon" size={20} className="text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Payments</h3>
                </div>
                <ul className="space-y-3">
                  {paymentTips.map((tip, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-secondary">
                      <Icon name="ChevronRightIcon" size={18} className="text-emerald-600 mt-0.5" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="rounded-3xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 p-10">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-4">Find & Try</h2>
                  <p className="text-secondary mb-6">
                    Explore street food across city hubs. For popular spots, check social pages for
                    opening times and locations.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href="/reviews/restaurants"
                      className="inline-flex items-center gap-2 px-5 py-3 bg-primary text-white rounded-2xl font-semibold hover:bg-primary/90 transition-all"
                    >
                      Read Our Reviews
                      <Icon name="ArrowRightIcon" size={18} className="text-white" />
                    </Link>
                    <Link
                      href="/search?type=street-food"
                      className="inline-flex items-center gap-2 px-5 py-3 bg-white text-primary rounded-2xl font-semibold border border-primary/20 hover:bg-primary/5 transition-all"
                    >
                      Search Nearby
                    </Link>
                  </div>
                </div>
                <div className="relative h-64 rounded-2xl overflow-hidden border border-gray-200">
                  <AppImage
                    src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80"
                    alt="Street food stall with grilled items"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default StreetFoodPage;
