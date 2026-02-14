import { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';
import Breadcrumb from '@/components/common/Breadcrumb';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { NIGERIA_STATES } from '@/data/nigeria-states';

export const metadata: Metadata = {
  title: 'Food Delivery in Nigeria - CACBLAZE',
  description:
    'Explore food delivery across Nigerian states. Service areas, delivery options, fees, hygiene, payments, and tips for ordering.',
  keywords:
    'Nigeria food delivery, Lagos delivery, Abuja delivery, Port Harcourt delivery, order food online, delivery fees',
};

const FoodDeliveryPage = ({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  const raw = searchParams?.state;
  const selectedState =
    typeof raw === 'string' ? raw : Array.isArray(raw) ? raw[0] || '' : '';
  const breadcrumbItems = [
    { name: 'Home', href: '/homepage' },
    { name: 'Local Resources', href: '/local-resources' },
    { name: 'Food Delivery', href: '/local-resources/food-delivery' },
  ];

  const serviceAreas = [
    {
      id: 'lagos_island',
      city: 'Lagos',
      area: 'Lagos Island & VI',
      image:
        'https://images.unsplash.com/photo-1464349153735-7db50ed83c84?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      highlights: ['High coverage', 'Peak hours 11am–10pm', 'Varied cuisines'],
    },
    {
      id: 'abuja_city',
      city: 'Abuja',
      area: 'Central & Wuse 2',
      image:
        'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      highlights: ['Reliable riders', 'Lunch & dinner rush', 'Local & continental'],
    },
    {
      id: 'ph_gra',
      city: 'Port Harcourt',
      area: 'GRA Phase 2/3',
      image:
        'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      highlights: ['Seafood options', 'Evening deliveries', 'Pick‑up friendly'],
    },
    {
      id: 'ibadan',
      city: 'Ibadan',
      area: 'Ring Road & Bodija',
      image:
        'https://images.pexels.com/photos/461296/pexels-photo-461296.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      highlights: ['Local kitchens', 'Budget combos', 'Weekend promos'],
    },
    {
      id: 'kano',
      city: 'Kano',
      area: 'Nassarawa & Sabon Gari',
      image:
        'https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      highlights: ['Grills & rice bowls', 'Afternoon peak', 'Cash & POS'],
    },
  ];

  const cityToState: Record<string, string> = {
    Lagos: 'Lagos',
    Abuja: 'FCT Abuja',
    'Port Harcourt': 'Rivers',
    Ibadan: 'Oyo',
    Kano: 'Kano',
  };

  const filteredAreas =
    selectedState && selectedState.length > 0
      ? serviceAreas.filter((a) => cityToState[a.city] === selectedState)
      : serviceAreas;

  const buildStateTopics = (state: string) => {
    const label = 'Food Delivery';
    const topics = [
      `Best ${label} in ${state}`,
      `Affordable ${label} options in ${state}`,
      `Top-rated ${label} vendors in ${state}`,
      `Fast ${label} services in ${state}`,
    ];
    const imgs = [
      'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      'https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      'https://images.pexels.com/photos/317115/pexels-photo-317115.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    ];
    return topics.map((t, i) => ({
      id: `state_topic_${i}`,
      title: t,
      image: imgs[i % imgs.length],
      points: [
        'Verified vendors',
        'Reliable delivery windows',
        'Budget combos and promos',
      ],
    }));
  };

  const deliveryOptions = [
    {
      id: 'fast',
      title: 'Fast Delivery',
      image:
        'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      points: ['ETA 25–60 mins', 'Live rider updates', 'Hot meals focus'],
    },
    {
      id: 'scheduled',
      title: 'Scheduled Orders',
      image:
        'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      points: ['Set time windows', 'Party trays & family packs', 'Office lunch plans'],
    },
    {
      id: 'pickup',
      title: 'Pick‑Up',
      image:
        'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      points: ['Skip delivery fee', 'Curbside options', 'Short wait times'],
    },
    {
      id: 'group',
      title: 'Group Orders',
      image:
        'https://images.pexels.com/photos/317115/pexels-photo-317115.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      points: ['Shared basket', 'Split items by person', 'Team events'],
    },
    {
      id: 'diet',
      title: 'Diet Preferences',
      image:
        'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      points: ['Keto & protein bowls', 'Vegetarian options', 'Allergen notes'],
    },
  ];

  const priceGuide = [
    {
      tier: 'Budget',
      range: '₦1,500 – ₦4,000 per meal',
      fees: 'Delivery ₦500–₦1,500; promos available',
    },
    {
      tier: 'Mid‑Range',
      range: '₦5,000 – ₦10,000 per meal',
      fees: 'Delivery ₦1,000–₦2,500; surge at peak',
    },
    {
      tier: 'Premium',
      range: '₦12,000 – ₦25,000+ per meal',
      fees: 'Delivery ₦2,000–₦4,000; packaging add‑ons',
    },
  ];

  const hygienePayments = [
    'Prefer sealed/tamper‑evident packaging',
    'Verify POS amount; keep receipts',
    'Use in‑app tipping where available',
    'Confirm address & drop‑off notes',
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
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
                {selectedState ? `Food Delivery in ${selectedState}` : 'Food Delivery'}
              </h1>
              <p className="text-xl text-secondary mb-8 leading-relaxed">
                Order from local kitchens and restaurants across Nigerian states. Compare service
                areas, delivery options, fees, hygiene and payment tips.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href={`/search?type=food-delivery${selectedState ? `&state=${encodeURIComponent(selectedState)}` : ''}`}
                  className="inline-flex items-center gap-2 px-5 py-3 bg-primary text-white rounded-2xl font-semibold hover:bg-primary/90 transition-all hover-lift"
                >
                  Find Delivery Near Me
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
            <h2 className="text-3xl font-bold text-foreground mb-8">Service Areas</h2>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <aside className="lg:col-span-3">
                <div className="rounded-3xl border border-gray-200 bg-white p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon name="MapPinIcon" size={20} className="text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Explore by State</div>
                      <div className="text-lg font-semibold text-foreground">
                        {selectedState || 'Select a State'}
                      </div>
                    </div>
                  </div>
                  <form action="/local-resources/food-delivery" method="GET" className="space-y-3">
                    <input
                      type="text"
                      name="state"
                      defaultValue={selectedState}
                      list="states-list"
                      placeholder="Type a state..."
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-foreground focus:outline-none focus:border-primary"
                    />
                    <datalist id="states-list">
                      {nigeriaStates.map((s) => (
                        <option key={s} value={s} />
                      ))}
                    </datalist>
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-all"
                    >
                      <Icon name="MagnifyingGlassIcon" size={18} className="text-white" />
                      Search by State
                    </button>
                    {selectedState && (
                      <Link
                        href="/local-resources/food-delivery"
                        className="block text-center px-4 py-2.5 border border-gray-200 rounded-xl text-foreground hover:border-primary transition-all"
                      >
                        Clear Selection
                      </Link>
                    )}
                  </form>
                </div>
              </aside>
              <div className="lg:col-span-9 grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                {filteredAreas.map((area) => (
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
            {selectedState && filteredAreas.length === 0 && (
              <div className="mt-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {buildStateTopics(selectedState).map((c) => (
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
            )}
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-muted/30 to-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8">Delivery Options</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
              {deliveryOptions.map((c) => (
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

        {/* Explore by State grid removed in favor of sidebar search */}

        <section className="py-16 bg-gradient-to-br from-muted/30 to-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="rounded-3xl border border-gray-200 bg-white p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon name="BanknotesIcon" size={20} className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Price & Fees</h3>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  {priceGuide.map((tier) => (
                    <div key={tier.tier} className="rounded-2xl border border-gray-200 p-6">
                      <div className="text-sm text-muted-foreground mb-1">{tier.tier}</div>
                      <div className="text-lg font-semibold text-foreground mb-1">{tier.range}</div>
                      <div className="text-sm text-secondary">{tier.fees}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-gray-200 bg-white p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
                    <Icon name="ShieldCheckIcon" size={20} className="text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Hygiene & Payments</h3>
                </div>
                <ul className="space-y-3">
                  {hygienePayments.map((tip, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-secondary">
                      <Icon name="CheckCircleIcon" size={18} className="text-primary mt-0.5" />
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
                  <h2 className="text-3xl font-bold text-foreground mb-4">Find & Order</h2>
                  <p className="text-secondary mb-6">
                    Browse menus, check delivery windows and fees. Many kitchens reply fast on
                    Instagram or WhatsApp for large orders.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href="/search?type=food-delivery"
                      className="inline-flex items-center gap-2 px-5 py-3 bg-primary text-white rounded-2xl font-semibold hover:bg-primary/90 transition-all"
                    >
                      Find Delivery Near Me
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
                    src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                    alt="Packed meals ready for delivery"
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

export default FoodDeliveryPage;
