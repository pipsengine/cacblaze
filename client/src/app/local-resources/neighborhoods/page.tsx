import { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';
import Breadcrumb from '@/components/common/Breadcrumb';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import StateFilterSidebar from '@/components/common/StateFilterSidebar';
import { NIGERIA_STATES } from '@/data/nigeria-states';

export const metadata: Metadata = {
  title: 'Neighborhood Guides in Nigeria - CACBLAZE',
  description:
    'Explore neighborhoods across Nigerian states: lifestyle, commute, safety, utilities, and nearby amenities.',
  keywords:
    'Nigeria neighborhoods, Lagos areas, Abuja areas, PH neighborhoods, commute safety utilities',
};

type NeighborhoodItem = {
  id: string;
  state: string;
  city: string;
  title: string;
  image: string;
  category: string;
  summary: string;
  points: string[];
};

const N1 =
  'https://images.pexels.com/photos/373904/pexels-photo-373904.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80';
const N2 =
  'https://images.pexels.com/photos/21014/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1200&q=80';
const N3 =
  'https://images.pexels.com/photos/261169/pexels-photo-261169.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80';
const N4 =
  'https://images.pexels.com/photos/271742/pexels-photo-271742.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80';
const N5 =
  'https://images.pexels.com/photos/949193/pexels-photo-949193.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80';

const ITEMS: NeighborhoodItem[] = [
  {
    id: 'lagos_vi',
    state: 'Lagos',
    city: 'Lagos',
    title: 'Victoria Island',
    image: N1,
    category: 'Neighborhoods',
    summary: 'Upscale, business district, nightlife.',
    points: ['High rent; plan budgets', 'Traffic at peak hours', 'Near beaches and malls'],
  },
  {
    id: 'lagos_ikoyi',
    state: 'Lagos',
    city: 'Lagos',
    title: 'Ikoyi',
    image: N2,
    category: 'Neighborhoods',
    summary: 'Quiet, premium estates, embassies.',
    points: ['Reliable security', 'Power often better', 'Proximity to VI'],
  },
  {
    id: 'lagos_yaba',
    state: 'Lagos',
    city: 'Lagos',
    title: 'Yaba',
    image: N3,
    category: 'Neighborhoods',
    summary: 'Tech hubs, student crowd, affordable.',
    points: ['Hostels around UNILAG', 'Evening busier near markets', 'Workspaces available'],
  },
  {
    id: 'abuja_wuse',
    state: 'FCT Abuja',
    city: 'Abuja',
    title: 'Wuse 2',
    image: N4,
    category: 'Neighborhoods',
    summary: 'Restaurants, lounges, central routes.',
    points: ['Plan around ministries hours', 'Good for business meetups', 'Premium pricing'],
  },
  {
    id: 'abuja_maitama',
    state: 'FCT Abuja',
    city: 'Abuja',
    title: 'Maitama',
    image: N5,
    category: 'Neighborhoods',
    summary: 'Premium, embassies, serene.',
    points: ['Quiet streets', 'Reliable utilities', 'Higher service charges'],
  },
  {
    id: 'ph_gra',
    state: 'Rivers',
    city: 'Port Harcourt',
    title: 'GRA',
    image: N1,
    category: 'Neighborhoods',
    summary: 'Grills, nightlife, lounges.',
    points: ['Flood awareness in rains', 'Cashless payments common', 'Traffic near clubs'],
  },
  {
    id: 'kano_nassarawa',
    state: 'Kano',
    city: 'Kano',
    title: 'Nassarawa',
    image: N2,
    category: 'Neighborhoods',
    summary: 'Family areas, eateries, parks.',
    points: ['Heat prep mid‑day', 'Carry small change', 'Confirm school options'],
  },
  {
    id: 'ibadan_bodija',
    state: 'Oyo',
    city: 'Ibadan',
    title: 'Bodija',
    image: N3,
    category: 'Neighborhoods',
    summary: 'Markets, local food, study corners.',
    points: ['Busy on market days', 'Water source checks', 'Affordable rentals'],
  },
  {
    id: 'enugu_independence',
    state: 'Enugu',
    city: 'Enugu',
    title: 'Independence Layout',
    image: N4,
    category: 'Neighborhoods',
    summary: 'Tea houses, lounges, estates.',
    points: ['Quiet ambience', 'Night transport limited', 'Cash/transfers accepted'],
  },
  {
    id: 'benin_gra',
    state: 'Edo',
    city: 'Benin City',
    title: 'Benin GRA',
    image: N5,
    category: 'Neighborhoods',
    summary: 'Seafood spots, outdoor seating.',
    points: ['Flood‑prone routes caution', 'Agree fares before trips', 'POS widely available'],
  },
  {
    id: 'jos_rayfield',
    state: 'Plateau',
    city: 'Jos',
    title: 'Rayfield',
    image: N1,
    category: 'Neighborhoods',
    summary: 'Scenic, cooler weather, cafes.',
    points: ['Cold‑weather prep', 'Early closures in some areas', 'Great weekend views'],
  },
  {
    id: 'ilorin_tanke',
    state: 'Kwara',
    city: 'Ilorin',
    title: 'Tanke',
    image: N2,
    category: 'Neighborhoods',
    summary: 'Student‑friendly, casual bites.',
    points: ['Busy during terms', 'Affordable eateries', 'Transfers accepted widely'],
  },
  {
    id: 'calabar_marina',
    state: 'Cross River',
    city: 'Calabar',
    title: 'Marina',
    image: N3,
    category: 'Neighborhoods',
    summary: 'Sea views, tourist friendly.',
    points: ['Plan for weekend crowds', 'Verify boat schedules', 'Check parking'],
  },
  {
    id: 'uyo_ewet',
    state: 'Akwa Ibom',
    city: 'Uyo',
    title: 'Ewet Housing',
    image: N4,
    category: 'Neighborhoods',
    summary: 'Family spots, local grills.',
    points: ['Security checks', 'Street lighting', 'Road access quality'],
  },
  {
    id: 'kaduna_barnawa',
    state: 'Kaduna',
    city: 'Kaduna',
    title: 'Barnawa',
    image: N5,
    category: 'Neighborhoods',
    summary: 'Casual cafes, group seating.',
    points: ['Agree pricing upfront', 'Use transfers at night', 'Plan safe drop‑offs'],
  },
];

const buildStateCards = (state: string) => {
  const imgs = [N1, N2, N3, N4];
  const titles = [
    `Lifestyle in ${state}`,
    `Commute & routes in ${state}`,
    `Utilities & safety in ${state}`,
    `Nearby amenities in ${state}`,
  ];
  return titles.map((t, i) => ({
    id: `state_${state}_${i}`,
    title: t,
    image: imgs[i % imgs.length],
    points: ['Check flood history', 'Confirm service charges', 'Assess commute times'],
  }));
};

const NeighborhoodsPage = ({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  const raw = searchParams?.state;
  const selectedState = typeof raw === 'string' ? raw : Array.isArray(raw) ? raw[0] || '' : '';

  const breadcrumbItems = [
    { name: 'Home', href: '/homepage' },
    { name: 'Local Resources', href: '/local-resources' },
    { name: 'Neighborhoods', href: '/local-resources/neighborhoods' },
  ];

  const filtered =
    selectedState && selectedState.length > 0
      ? ITEMS.filter((e) => e.state === selectedState)
      : ITEMS;
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
                Lifestyle & Areas
              </span>
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
                {selectedState
                  ? `Neighborhoods in ${selectedState}`
                  : 'Neighborhood Guides in Nigeria'}
              </h1>
              <p className="text-xl text-secondary mb-8 leading-relaxed">
                Compare neighborhoods by lifestyle, commute, utilities, safety, and nearby amenities
                across Nigerian cities.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href={`/search?type=neighborhoods${selectedState ? `&state=${encodeURIComponent(selectedState)}` : ''}`}
                  className="inline-flex items-center gap-2 px-5 py-3 bg-primary text-white rounded-2xl font-semibold hover:bg-primary/90 transition-all hover-lift"
                >
                  Explore Areas Nearby
                  <Icon name="ArrowRightIcon" size={18} className="text-white" />
                </Link>
                <Link
                  href="/local-resources"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-white text-primary rounded-2xl font-semibold border border-primary/20 hover:bg-primary/5 transition-all"
                >
                  Browse Local Resources
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8">Explore Neighborhoods</h2>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-3">
                <StateFilterSidebar
                  basePath="/local-resources/neighborhoods"
                  selectedState={selectedState}
                  header="Explore by State"
                />
              </div>
              <div className="lg:col-span-9 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filtered.map((e) => (
                  <div
                    key={e.id}
                    className="group rounded-3xl border border-gray-200 bg-white overflow-hidden hover:border-primary transition-all hover-lift"
                  >
                    <div className="relative h-56">
                      <AppImage
                        src={e.image}
                        alt={e.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        priority
                        fallbackSrc="/assets/images/no_image.png"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                      <div className="absolute bottom-5 left-5 right-5">
                        <div className="text-white text-xs">
                          {e.city}, {e.state} · {e.category}
                        </div>
                        <h3 className="text-2xl font-bold text-white">{e.title}</h3>
                        <div className="text-white text-xs mt-1">{e.summary}</div>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="space-y-2">
                        {e.points.map((h, idx) => (
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

            {selectedState && filtered.length === 0 && (
              <div className="mt-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {buildStateCards(selectedState).map((c) => (
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
                            <li
                              key={idx}
                              className="flex items-center gap-2 text-sm text-secondary"
                            >
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
            <div className="grid md:grid-cols-2 gap-12">
              <div className="rounded-3xl border border-gray-200 bg-white p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon name="HomeModernIcon" size={20} className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Lifestyle & Utilities</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-secondary">
                    <Icon name="BoltIcon" size={18} className="text-primary mt-0.5" />
                    Check power schedules and water sources before committing to rent.
                  </li>
                  <li className="flex items-start gap-3 text-secondary">
                    <Icon name="CurrencyNairaIcon" size={18} className="text-primary mt-0.5" />
                    Confirm all service charges and agency fees upfront to avoid surprises.
                  </li>
                  <li className="flex items-start gap-3 text-secondary">
                    <Icon name="QueueListIcon" size={18} className="text-primary mt-0.5" />
                    Inspect at different times of day to assess noise and traffic patterns.
                  </li>
                </ul>
              </div>

              <div className="rounded-3xl border border-gray-200 bg-white p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
                    <Icon name="ShieldCheckIcon" size={20} className="text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Safety & Commute</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-secondary">
                    <Icon name="ClockIcon" size={18} className="text-emerald-600 mt-0.5" />
                    Plan commute routes; allow extra time during rain or events.
                  </li>
                  <li className="flex items-start gap-3 text-secondary">
                    <Icon name="MapPinIcon" size={18} className="text-emerald-600 mt-0.5" />
                    Prefer well‑lit streets and avoid isolated drop‑offs late at night.
                  </li>
                  <li className="flex items-start gap-3 text-secondary">
                    <Icon
                      name="InformationCircleIcon"
                      size={18}
                      className="text-emerald-600 mt-0.5"
                    />
                    Ask neighbors for area‑specific tips and recent changes in traffic patterns.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default NeighborhoodsPage;
