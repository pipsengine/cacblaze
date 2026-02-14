import { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';
import Breadcrumb from '@/components/common/Breadcrumb';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { NIGERIA_STATES } from '@/data/nigeria-states';

export const metadata: Metadata = {
  title: 'Local Restaurants in Nigeria - CACBLAZE',
  description:
    'Discover local restaurants across Lagos, Abuja, Port Harcourt and more. Price guides, cuisine highlights, popular areas, safety, and how to choose the right spot.',
  keywords:
    'Nigeria restaurants, Lagos restaurants, Abuja restaurants, Port Harcourt restaurants, dining Nigeria, local food, suya, jollof',
};

const LocalRestaurantsPage = () => {
  const breadcrumbItems = [
    { name: 'Home', href: '/homepage' },
    { name: 'Local Resources', href: '/local-resources' },
    { name: 'Restaurants', href: '/local-resources/restaurants' },
  ];

  const featuredAreas = [
    {
      id: 'lagos_vi',
      city: 'Lagos',
      area: 'Victoria Island',
      image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      highlights: ['Seafood & grills', 'Upscale lounges', 'Date-night spots'],
    },
    {
      id: 'lagos_ikoyi',
      city: 'Lagos',
      area: 'Ikoyi',
      image: 'https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg?auto=compress&cs=tinysrgb&w=1200&q=80',
      highlights: ['Fine dining', 'Quiet ambience', 'Business lunches'],
    },
    {
      id: 'lagos_lekki',
      city: 'Lagos',
      area: 'Lekki Phase 1',
      image: 'https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg?auto=compress&cs=tinysrgb&w=1200&q=80',
      highlights: ['Trendy cafes', 'Brunch culture', 'Rooftop views'],
    },
    {
      id: 'abuja_wuse',
      city: 'FCT Abuja',
      area: 'Wuse 2',
      image: 'https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg?auto=compress&cs=tinysrgb&w=1200&q=80',
      highlights: ['International cuisine', 'Family-friendly', 'Dessert bars'],
    },
    {
      id: 'abuja_maitama',
      city: 'FCT Abuja',
      area: 'Maitama',
      image: 'https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      highlights: ['Fine dining', 'Quiet settings', 'Corporate dinners'],
    },
    {
      id: 'ph_gra',
      city: 'Rivers',
      area: 'Port Harcourt GRA',
      image: 'https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg?auto=compress&cs=tinysrgb&w=1200&q=80',
      highlights: ['Grills & chops', 'Live music', 'Outdoor seating'],
    },
    {
      id: 'kano_nassarawa',
      city: 'Kano',
      area: 'Nassarawa',
      image: 'https://images.pexels.com/photos/6210766/pexels-photo-6210766.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      highlights: ['Local grills', 'Family eateries', 'Evening spots'],
    },
    {
      id: 'ibadan_bodija',
      city: 'Oyo',
      area: 'Bodija',
      image: 'https://images.pexels.com/photos/414645/pexels-photo-414645.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      highlights: ['Bukkataria', 'Rice & stew', 'Affordable meals'],
    },
    {
      id: 'enugu_independence',
      city: 'Enugu',
      area: 'Independence Layout',
      image: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      highlights: ['Local soups', 'Family restaurants', 'Night grills'],
    },
    {
      id: 'benin_gra',
      city: 'Edo',
      area: 'Benin GRA',
      image: 'https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      highlights: ['Seafood', 'Outdoor seating', 'Live bands'],
    },
    {
      id: 'jos_rayfield',
      city: 'Plateau',
      area: 'Rayfield',
      image: 'https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      highlights: ['Cold weather menus', 'Stews & teas', 'Scenic views'],
    },
    {
      id: 'ilorin_tanke',
      city: 'Kwara',
      area: 'Tanke',
      image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      highlights: ['Student-friendly', 'Casual bites', 'Affordable combos'],
    },
    {
      id: 'calabar_marina',
      city: 'Cross River',
      area: 'Marina',
      image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      highlights: ['Sea views', 'Seafood platters', 'Tourist-friendly'],
    },
    {
      id: 'uyo_ewet',
      city: 'Akwa Ibom',
      area: 'Ewet Housing',
      image: 'https://images.pexels.com/photos/949193/pexels-photo-949193.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      highlights: ['Eateries & lounges', 'Family spots', 'Local grills'],
    },
    {
      id: 'kaduna_barnawa',
      city: 'Kaduna',
      area: 'Barnawa',
      image: 'https://images.pexels.com/photos/6210967/pexels-photo-6210967.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      highlights: ['Grills & suya', 'Casual dining', 'Group seating'],
    },
  ];

  const cuisineHighlights = [
    {
      id: 'jollof',
      title: 'Jollof & Fried Rice',
      image:
        'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      points: ['Party-style servings', 'Smoky flavor trend', 'Chicken or fish sides'],
    },
    {
      id: 'suya',
      title: 'Suya & Grills',
      image:
        'https://images.unsplash.com/photo-1551183053-bf91a1d81141?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      points: ['Beef, chicken, ram', 'Yaji spice blends', 'Night-time street spots'],
    },
    {
      id: 'soups',
      title: 'Local Soups',
      image:
        'https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      points: ['Afang & Edikaikong', 'Egusi & Ogbono', 'Ofada with sauce'],
    },
    {
      id: 'seafood',
      title: 'Seafood',
      image:
        'https://images.pexels.com/photos/1095550/pexels-photo-1095550.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      points: ['Grilled fish', 'Seafood platters', 'Coastal specials'],
    },
  ];

  const priceGuide = [
    {
      tier: 'Budget',
      range: '₦2,500 – ₦7,000 per person',
      examples: ['Quick rice & protein', 'Shawarma & burgers', 'Casual bukka plates'],
    },
    {
      tier: 'Mid‑Range',
      range: '₦8,000 – ₦18,000 per person',
      examples: ['Full mains + drink', 'Seafood & grills', 'Sit‑down restaurants'],
    },
    {
      tier: 'Premium',
      range: '₦20,000 – ₦45,000+ per person',
      examples: ['Fine dining courses', 'Steak & wine', 'Celebration dinners'],
    },
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
                Local Restaurants in Nigeria
              </h1>
              <p className="text-xl text-secondary mb-8 leading-relaxed">
                Explore where to eat across Lagos, Abuja and Port Harcourt. Find the right spot by
                price, cuisine, ambience and location. Learn practical tips for reservations,
                payments and safety.
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

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8">Explore by State</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {nigeriaStates.map((state) => (
                <Link
                  key={state}
                  href={`/search?type=restaurants&state=${encodeURIComponent(state)}`}
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
            <h2 className="text-3xl font-bold text-foreground mb-8">Cuisine Highlights</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {cuisineHighlights.map((c) => (
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

        <section className="py-16 bg-gradient-to-br from-muted/30 to-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="rounded-3xl border border-gray-200 bg-white p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon name="ClipboardDocumentCheckIcon" size={20} className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">How to Choose</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-secondary">
                    <Icon name="MagnifyingGlassIcon" size={18} className="text-primary mt-0.5" />
                    Check location traffic times and parking availability.
                  </li>
                  <li className="flex items-start gap-3 text-secondary">
                    <Icon name="UserGroupIcon" size={18} className="text-primary mt-0.5" />
                    Match ambience to occasion: casual, business, date‑night, family.
                  </li>
                  <li className="flex items-start gap-3 text-secondary">
                    <Icon name="CurrencyNairaIcon" size={18} className="text-primary mt-0.5" />
                    Confirm price range and service fees before ordering.
                  </li>
                  <li className="flex items-start gap-3 text-secondary">
                    <Icon name="PhoneArrowUpRightIcon" size={18} className="text-primary mt-0.5" />
                    Call or message to confirm reservations, private rooms, or large groups.
                  </li>
                </ul>
              </div>

              <div className="rounded-3xl border border-gray-200 bg-white p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
                    <Icon name="ShieldCheckIcon" size={20} className="text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Payments & Safety</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-secondary">
                    <Icon name="CreditCardIcon" size={18} className="text-emerald-600 mt-0.5" />
                    Cards and transfers are common; keep cash for small vendors or outages.
                  </li>
                  <li className="flex items-start gap-3 text-secondary">
                    <Icon name="QueueListIcon" size={18} className="text-emerald-600 mt-0.5" />
                    Request itemized bills and check POS amounts before authorizing.
                  </li>
                  <li className="flex items-start gap-3 text-secondary">
                    <Icon name="LockClosedIcon" size={18} className="text-emerald-600 mt-0.5" />
                    Watch bags and phones; use secure parking and avoid late cash withdrawals.
                  </li>
                  <li className="flex items-start gap-3 text-secondary">
                    <Icon name="InformationCircleIcon" size={18} className="text-emerald-600 mt-0.5" />
                    Allergies or dietary needs? Ask for substitutions; many places can adapt.
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
                  <h2 className="text-3xl font-bold text-foreground mb-4">Find & Book</h2>
                  <p className="text-secondary mb-6">
                    Discover restaurants, check menus, and contact for reservations. Many places
                    post updates on Instagram; phone or WhatsApp is common for bookings.
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
                      href="/search?type=restaurants"
                      className="inline-flex items-center gap-2 px-5 py-3 bg-white text-primary rounded-2xl font-semibold border border-primary/20 hover:bg-primary/5 transition-all"
                    >
                      Search Nearby
                    </Link>
                  </div>
                </div>
                <div className="relative h-64 rounded-2xl overflow-hidden border border-gray-200">
                  <AppImage
                    src="https://images.unsplash.com/photo-1525755662778-989d0524087e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                    alt="Dining table with Nigerian dishes and drinks"
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

export default LocalRestaurantsPage;
