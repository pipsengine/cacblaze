import { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';
import Breadcrumb from '@/components/common/Breadcrumb';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { NIGERIA_STATES } from '@/data/nigeria-states';

export const metadata: Metadata = {
  title: 'Lounges in Nigeria - CACBLAZE',
  description:
    'Discover lounges across Lagos, Abuja and Port Harcourt. Cocktails, live music, rooftop bars, VIP booths, price ranges, and practical tips.',
  keywords:
    'Nigeria lounges, Lagos lounges, Abuja lounges, Port Harcourt lounges, cocktails, rooftop bars, live music',
};

const LoungesPage = () => {
  const breadcrumbItems = [
    { name: 'Home', href: '/homepage' },
    { name: 'Local Resources', href: '/local-resources' },
    { name: 'Lounges', href: '/local-resources/lounges' },
  ];

  const featuredAreas = [
    {
      id: 'vi',
      city: 'Lagos',
      area: 'Victoria Island',
      image:
        'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      highlights: ['Cocktail bars', 'DJ nights', 'Rooftop views'],
    },
    {
      id: 'ikoyi',
      city: 'Lagos',
      area: 'Ikoyi',
      image:
        'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      highlights: ['Premium ambience', 'Quiet booths', 'Business socials'],
    },
    {
      id: 'wuse',
      city: 'Abuja',
      area: 'Wuse 2',
      image:
        'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      highlights: ['Mixology bars', 'Live music', 'Late closings'],
    },
    {
      id: 'maitama',
      city: 'Abuja',
      area: 'Maitama',
      image:
        'https://images.pexels.com/photos/374885/pexels-photo-374885.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      highlights: ['VIP sections', 'Shisha corners', 'Corporate vibes'],
    },
    {
      id: 'ph_gra',
      city: 'Port Harcourt',
      area: 'GRA Phase 2/3',
      image:
        'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      highlights: ['Outdoor lounges', 'Live bands', 'Weekend energy'],
    },
  ];

  const experiences = [
    {
      id: 'cocktails',
      title: 'Signature Cocktails',
      image:
        'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      points: ['Classic & craft mixes', 'Fresh garnish', 'Non‑alcohol options'],
    },
    {
      id: 'live_music',
      title: 'Live Music & DJs',
      image:
        'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      points: ['Afrobeats & highlife', 'Weekend shows', 'Dance floors'],
    },
    {
      id: 'rooftop',
      title: 'Rooftop Bars',
      image:
        'https://images.unsplash.com/photo-1464349153735-7db50ed83c84?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      points: ['City views', 'Sunset sessions', 'Outdoor seating'],
    },
    {
      id: 'shisha',
      title: 'Shisha & Outdoor',
      image:
        'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      points: ['Open‑air corners', 'Group seating', 'Late nights'],
    },
    {
      id: 'vip',
      title: 'VIP Booths',
      image:
        'https://images.unsplash.com/photo-1525755662778-989d0524087e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      points: ['Private seating', 'Bottle service', 'Reservations recommended'],
    },
  ];

  const priceGuide = [
    {
      tier: 'Budget',
      range: '₦3,000 – ₦8,000 per person',
      examples: ['Mocktails & beer', 'Snacks & small plates'],
    },
    {
      tier: 'Mid‑Range',
      range: '₦10,000 – ₦25,000 per person',
      examples: ['Cocktails & mains', 'Table service'],
    },
    {
      tier: 'Premium',
      range: '₦30,000 – ₦80,000+ per person',
      examples: ['Bottle service', 'VIP booths', 'Celebration nights'],
    },
  ];

  const etiquetteTips = [
    'Dress codes apply in some venues; check ahead',
    'Reservations recommended for weekends and VIP',
    'Keep receipts and verify POS amounts',
    'Respect noise policies and closing times',
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
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">Lounges</h1>
              <p className="text-xl text-secondary mb-8 leading-relaxed">
                Find lounges across Lagos, Abuja and Port Harcourt. Compare ambience, music,
                cocktails, seating, and price ranges.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/search?type=lounges"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-primary text-white rounded-2xl font-semibold hover:bg-primary/90 transition-all hover-lift"
                >
                  Search Nearby
                  <Icon name="ArrowRightIcon" size={18} className="text-white" />
                </Link>
                <Link
                  href="/local-resources/restaurants"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-white text-primary rounded-2xl font-semibold border border-primary/20 hover:bg-primary/5 transition-all"
                >
                  See Restaurants
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

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8">Explore by State</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {nigeriaStates.map((state) => (
                <Link
                  key={state}
                  href={`/search?type=lounges&state=${encodeURIComponent(state)}`}
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
            <h2 className="text-3xl font-bold text-foreground mb-8">Experiences</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
              {experiences.map((c) => (
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

        <section className="py-16 bg-gradient-to-br from-muted/30 to-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="rounded-3xl border border-gray-200 bg-white p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon name="ClipboardDocumentCheckIcon" size={20} className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Etiquette & Tips</h3>
                </div>
                <ul className="space-y-3">
                  {etiquetteTips.map((tip, idx) => (
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
                    <Icon name="ShieldCheckIcon" size={20} className="text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Safety</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-secondary">
                    <Icon name="LockClosedIcon" size={18} className="text-emerald-600 mt-0.5" />
                    Watch bags & phones; choose seating with line‑of‑sight.
                  </li>
                  <li className="flex items-start gap-3 text-secondary">
                    <Icon name="QueueListIcon" size={18} className="text-emerald-600 mt-0.5" />
                    Verify POS amounts; keep receipts for expense tracking.
                  </li>
                  <li className="flex items-start gap-3 text-secondary">
                    <Icon name="InformationCircleIcon" size={18} className="text-emerald-600 mt-0.5" />
                    Plan transport after closing; avoid late cash withdrawals.
                  </li>
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
                  <h2 className="text-3xl font-bold text-foreground mb-4">Find & Visit</h2>
                  <p className="text-secondary mb-6">
                    Explore lounges, check music schedules and seating. Many venues reply fast on
                    Instagram or WhatsApp.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href="/search?type=lounges"
                      className="inline-flex items-center gap-2 px-5 py-3 bg-primary text-white rounded-2xl font-semibold hover:bg-primary/90 transition-all"
                    >
                      Search Nearby
                      <Icon name="ArrowRightIcon" size={18} className="text-white" />
                    </Link>
                    <Link
                      href="/local-resources/restaurants"
                      className="inline-flex items-center gap-2 px-5 py-3 bg-white text-primary rounded-2xl font-semibold border border-primary/20 hover:bg-primary/5 transition-all"
                    >
                      See Restaurants
                    </Link>
                  </div>
                </div>
                <div className="relative h-64 rounded-2xl overflow-hidden border border-gray-200">
                  <AppImage
                    src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                    alt="Cocktails served at a lounge bar"
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

export default LoungesPage;
