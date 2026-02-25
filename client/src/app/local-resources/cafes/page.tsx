import { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';
import Breadcrumb from '@/components/common/Breadcrumb';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { NIGERIA_STATES } from '@/data/nigeria-states';

export const metadata: Metadata = {
  title: 'Local Cafes in Nigeria - CACBLAZE',
  description:
    'Discover cafes across Lagos and Abuja. Signature drinks, pastries, workspace vibes, pricing, and practical tips for payments and productivity.',
  keywords:
    'Nigeria cafes, Lagos cafes, Abuja cafes, coffee Nigeria, pastries Nigeria, work-friendly cafes',
};

const LocalCafesPage = () => {
  const breadcrumbItems = [
    { name: 'Home', href: '/homepage' },
    { name: 'Local Resources', href: '/local-resources' },
    { name: 'Cafes', href: '/local-resources/cafes' },
  ];

  const featuredAreas = [
    {
      id: 'lagos_lekki',
      city: 'Lagos',
      area: 'Lekki Phase 1',
      image:
        'https://images.pexels.com/photos/374885/pexels-photo-374885.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      highlights: ['Brunch culture', 'Rooftop views', 'Social vibe'],
    },
    {
      id: 'lagos_ikoyi',
      city: 'Lagos',
      area: 'Ikoyi',
      image:
        'https://images.pexels.com/photos/302090/pexels-photo-302090.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      highlights: ['Quiet ambience', 'Premium pastries', 'Business meetups'],
    },
    {
      id: 'lagos_yaba',
      city: 'Lagos',
      area: 'Yaba',
      image:
        'https://images.pexels.com/photos/374885/pexels-photo-374885.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      highlights: ['Tech crowd', 'Affordable menu', 'Student-friendly'],
    },
    {
      id: 'abuja_wuse',
      city: 'FCT Abuja',
      area: 'Wuse 2',
      image:
        'https://images.pexels.com/photos/261996/pexels-photo-261996.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      highlights: ['International drinks', 'Dessert bars', 'Family-friendly'],
    },
    {
      id: 'abuja_maitama',
      city: 'FCT Abuja',
      area: 'Maitama',
      image:
        'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      highlights: ['Premium coffee', 'Plush seating', 'Corporate vibe'],
    },
    {
      id: 'ph_gra',
      city: 'Rivers',
      area: 'Port Harcourt GRA',
      image:
        'https://images.pexels.com/photos/374885/pexels-photo-374885.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      highlights: ['Dessert bars', 'Cafe lounges', 'Outdoor seating'],
    },
    {
      id: 'kano_nassarawa',
      city: 'Kano',
      area: 'Nassarawa',
      image:
        'https://images.pexels.com/photos/103566/pexels-photo-103566.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      highlights: ['Smoothies & tea', 'Student hangouts', 'Affordable bites'],
    },
    {
      id: 'ibadan_bodija',
      city: 'Oyo',
      area: 'Bodija',
      image:
        'https://images.pexels.com/photos/103566/pexels-photo-103566.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      highlights: ['Coffee & pastries', 'Study corners', 'Casual seating'],
    },
    {
      id: 'enugu_independence',
      city: 'Enugu',
      area: 'Independence Layout',
      image:
        'https://images.pexels.com/photos/302090/pexels-photo-302090.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      highlights: ['Tea houses', 'Local desserts', 'Evening lounges'],
    },
    {
      id: 'benin_gra',
      city: 'Edo',
      area: 'Benin GRA',
      image:
        'https://images.pexels.com/photos/261996/pexels-photo-261996.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      highlights: ['Coffee bars', 'Light meals', 'Weekend brunch'],
    },
    {
      id: 'jos_rayfield',
      city: 'Plateau',
      area: 'Rayfield',
      image:
        'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      highlights: ['Warm drinks', 'Cozy seating', 'Scenic cafes'],
    },
    {
      id: 'ilorin_tanke',
      city: 'Kwara',
      area: 'Tanke',
      image:
        'https://images.pexels.com/photos/374885/pexels-photo-374885.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      highlights: ['Student-friendly', 'Affordable combos', 'Quick bites'],
    },
    {
      id: 'calabar_marina',
      city: 'Cross River',
      area: 'Marina',
      image:
        'https://images.pexels.com/photos/302090/pexels-photo-302090.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      highlights: ['Sea views', 'Dessert cafes', 'Tourist-friendly'],
    },
    {
      id: 'uyo_ewet',
      city: 'Akwa Ibom',
      area: 'Ewet Housing',
      image:
        'https://images.pexels.com/photos/103566/pexels-photo-103566.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      highlights: ['Cafe lounges', 'Smoothie bars', 'Family seating'],
    },
    {
      id: 'kaduna_barnawa',
      city: 'Kaduna',
      area: 'Barnawa',
      image:
        'https://images.pexels.com/photos/261996/pexels-photo-261996.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      highlights: ['Tea & snacks', 'Casual cafes', 'Group seating'],
    },
  ];

  const drinkHighlights = [
    {
      id: 'espresso',
      title: 'Espresso & Cappuccino',
      image:
        'https://images.pexels.com/photos/261996/pexels-photo-261996.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      points: ['Double shots common', 'Milk options: whole/almond/oat', 'Latte art trend'],
    },
    {
      id: 'iced',
      title: 'Iced & Blended',
      image:
        'https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      points: ['Cold brew & frappes', 'Caramel/vanilla syrups', 'Heat-friendly choices'],
    },
    {
      id: 'tea',
      title: 'Tea & Infusions',
      image:
        'https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      points: ['Green & black teas', 'Herbal blends', 'Honey or lemon add-ons'],
    },
    {
      id: 'pastries',
      title: 'Pastries & Bites',
      image:
        'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      points: ['Croissants & muffins', 'Sandwiches & wraps', 'Local twists'],
    },
  ];

  const priceGuide = [
    {
      tier: 'Budget',
      range: '₦1,500 – ₦4,000 per person',
      examples: ['Americano or tea', 'Single pastry', 'Student-friendly combos'],
    },
    {
      tier: 'Mid‑Range',
      range: '₦5,000 – ₦10,000 per person',
      examples: ['Latte + pastry', 'Iced drinks', 'Light meals'],
    },
    {
      tier: 'Premium',
      range: '₦12,000 – ₦25,000+ per person',
      examples: ['Specialty brews', 'Full brunch plates', 'Dessert + drink'],
    },
  ];

  const workChecklist = [
    'Good seating and table height',
    'Reliable Wi‑Fi with backup',
    'Power outlets nearby',
    'Quiet zones or outdoor option',
    'No loud music during work hours',
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
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">Local Cafes</h1>
              <p className="text-xl text-secondary mb-8 leading-relaxed">
                Find cafes across Lagos and Abuja for coffee, pastries, and work‑friendly spaces.
                Compare ambience, pricing, Wi‑Fi, and power availability.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/reviews/cafes"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-primary text-white rounded-2xl font-semibold hover:bg-primary/90 transition-all hover-lift"
                >
                  Browse Cafe Reviews
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
                  href={`/search?type=cafes&state=${encodeURIComponent(state)}`}
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
            <h2 className="text-3xl font-bold text-foreground mb-8">Signature & Workspace</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {drinkHighlights.map((c) => (
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

            <div className="mt-12 rounded-3xl border border-gray-200 bg-white p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Icon name="DevicePhoneMobileIcon" size={20} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Work‑Friendly Checklist</h3>
              </div>
              <ul className="grid md:grid-cols-2 gap-3">
                {workChecklist.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-secondary">
                    <Icon name="CheckCircleIcon" size={16} className="text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
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
                  <h3 className="text-2xl font-bold text-foreground">Choosing a Cafe</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-secondary">
                    <Icon name="WifiIcon" size={18} className="text-primary mt-0.5" />
                    Verify Wi‑Fi speed and backup (ask staff or check sign‑in details).
                  </li>
                  <li className="flex items-start gap-3 text-secondary">
                    <Icon name="ComputerDesktopIcon" size={18} className="text-primary mt-0.5" />
                    Seating: choose ergonomic tables and avoid low lounge seats for laptop work.
                  </li>
                  <li className="flex items-start gap-3 text-secondary">
                    <Icon name="BoltIcon" size={18} className="text-primary mt-0.5" />
                    Check for power outlets; bring an extension for group work.
                  </li>
                  <li className="flex items-start gap-3 text-secondary">
                    <Icon name="SpeakerWaveIcon" size={18} className="text-primary mt-0.5" />
                    Noise: pick indoor quiet zones or outdoor seating during peak times.
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
                    Cards and transfers work widely; hold some cash for small vendors.
                  </li>
                  <li className="flex items-start gap-3 text-secondary">
                    <Icon name="QueueListIcon" size={18} className="text-emerald-600 mt-0.5" />
                    Check POS amounts and request itemized receipts for expense tracking.
                  </li>
                  <li className="flex items-start gap-3 text-secondary">
                    <Icon name="LockClosedIcon" size={18} className="text-emerald-600 mt-0.5" />
                    Keep devices safe; choose seating with line‑of‑sight and use bag hooks.
                  </li>
                  <li className="flex items-start gap-3 text-secondary">
                    <Icon
                      name="InformationCircleIcon"
                      size={18}
                      className="text-emerald-600 mt-0.5"
                    />
                    Dietary needs? Ask about non‑dairy milks and gluten‑free pastry options.
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
                    Explore cafe menus, signature drinks, and seating. Many cafes accept messages on
                    Instagram or WhatsApp for quick questions.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href="/reviews/cafes"
                      className="inline-flex items-center gap-2 px-5 py-3 bg-primary text-white rounded-2xl font-semibold hover:bg-primary/90 transition-all"
                    >
                      Read Our Reviews
                      <Icon name="ArrowRightIcon" size={18} className="text-white" />
                    </Link>
                    <Link
                      href="/search?type=cafes"
                      className="inline-flex items-center gap-2 px-5 py-3 bg-white text-primary rounded-2xl font-semibold border border-primary/20 hover:bg-primary/5 transition-all"
                    >
                      Search Nearby
                    </Link>
                  </div>
                </div>
                <div className="relative h-64 rounded-2xl overflow-hidden border border-gray-200">
                  <AppImage
                    src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                    alt="Cafe counter with barista and coffee setup"
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

export default LocalCafesPage;
