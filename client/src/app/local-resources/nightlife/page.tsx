import { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';
import Breadcrumb from '@/components/common/Breadcrumb';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import StateFilterSidebar from '@/components/common/StateFilterSidebar';

export const metadata: Metadata = {
  title: 'Nightlife in Nigeria - CACBLAZE',
  description: 'Discover lounges, clubs, and live music spots across Nigerian states.',
  keywords: 'Nigeria nightlife, clubs, lounges, bars, live music, states',
};

type NightlifeItem = {
  id: string;
  state: string;
  city: string;
  name: string;
  image: string;
  hours: string;
  venue: string;
  highlights: string[];
};

const NIGHTLIFE: NightlifeItem[] = [
  {
    id: 'lagos_vi_club',
    state: 'Lagos',
    city: 'Lagos',
    name: 'VI Night Club',
    image:
      'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    hours: '9:00 PM – 3:00 AM',
    venue: 'Victoria Island',
    highlights: ['Afrobeats DJs', 'Bottle service', 'Dance floor'],
  },
  {
    id: 'abuja_wuse_lounge',
    state: 'FCT Abuja',
    city: 'Abuja',
    name: 'Wuse Lounge',
    image:
      'https://images.pexels.com/photos/11963165/pexels-photo-11963165.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    hours: '7:00 PM – 1:00 AM',
    venue: 'Wuse 2',
    highlights: ['Cocktail bar', 'Live sets', 'Outdoor terrace'],
  },
  {
    id: 'rivers_ph_gra_night',
    state: 'Rivers',
    city: 'Port Harcourt',
    name: 'GRA Night Spot',
    image:
      'https://images.pexels.com/photos/964016/pexels-photo-964016.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    hours: '8:00 PM – 2:00 AM',
    venue: 'GRA Phase 2',
    highlights: ['Dance floor', 'Guest DJs', 'Late kitchen'],
  },
  {
    id: 'oyo_ibadan_city_lounge',
    state: 'Oyo',
    city: 'Ibadan',
    name: 'Ibadan City Lounge',
    image:
      'https://images.pexels.com/photos/154147/pexels-photo-154147.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    hours: '6:00 PM – 12:00 AM',
    venue: 'Ring Road',
    highlights: ['Live band', 'Signature cocktails', 'Cozy booths'],
  },
  {
    id: 'kano_industrial_club',
    state: 'Kano',
    city: 'Kano',
    name: 'Industrial Night Club',
    image:
      'https://images.pexels.com/photos/1763076/pexels-photo-1763076.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    hours: '8:00 PM – 1:00 AM',
    venue: 'Sabon Gari',
    highlights: ['Guest DJs', 'Dance floor', 'Mocktails'],
  },
  {
    id: 'kaduna_barnawa_lounge',
    state: 'Kaduna',
    city: 'Kaduna',
    name: 'Barnawa Lounge',
    image:
      'https://images.pexels.com/photos/301929/pexels-photo-301929.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    hours: '7:00 PM – 12:00 AM',
    venue: 'Barnawa',
    highlights: ['Live sets', 'Outdoor seating', 'Snacks'],
  },
  {
    id: 'enugu_newlayout_bar',
    state: 'Enugu',
    city: 'Enugu',
    name: 'New Layout Bar',
    image:
      'https://images.pexels.com/photos/290316/pexels-photo-290316.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    hours: '6:00 PM – 11:00 PM',
    venue: 'New Layout',
    highlights: ['Acoustic nights', 'Cocktails', 'Small plates'],
  },
  {
    id: 'anambra_awka_vibes',
    state: 'Anambra',
    city: 'Awka',
    name: 'Awka Vibes',
    image:
      'https://images.pexels.com/photos/1850595/pexels-photo-1850595.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    hours: '8:00 PM – 1:00 AM',
    venue: 'Ziks Avenue',
    highlights: ['Afrobeats', 'Dance floor', 'Light bites'],
  },
  {
    id: 'delta_asaba_lounge',
    state: 'Delta',
    city: 'Asaba',
    name: 'Asaba City Lounge',
    image:
      'https://images.pexels.com/photos/290316/pexels-photo-290316.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    hours: '7:00 PM – 12:00 AM',
    venue: 'Okpanam Road',
    highlights: ['Cocktails', 'DJ nights', 'Outdoor terrace'],
  },
  {
    id: 'edo_benin_music_bar',
    state: 'Edo',
    city: 'Benin City',
    name: 'Benin Music Bar',
    image:
      'https://images.pexels.com/photos/637514/pexels-photo-637514.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    hours: '7:00 PM – 12:00 AM',
    venue: 'Sapele Road',
    highlights: ['Live band', 'Grill', 'Cocktail mixes'],
  },
  {
    id: 'ogun_abeokuta_brew',
    state: 'Ogun',
    city: 'Abeokuta',
    name: 'Abeokuta Brew & Beats',
    image:
      'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    hours: '6:00 PM – 11:00 PM',
    venue: 'Ibara',
    highlights: ['Craft drinks', 'DJ sets', 'Patio'],
  },
  {
    id: 'osun_osogbo_garden_bar',
    state: 'Osun',
    city: 'Osogbo',
    name: 'Garden Bar',
    image:
      'https://images.pexels.com/photos/1304471/pexels-photo-1304471.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    hours: '6:00 PM – 10:00 PM',
    venue: 'Oke-Fia',
    highlights: ['Calm ambiance', 'Mocktails', 'Snacks'],
  },
  {
    id: 'kwara_ilorin_rooftop',
    state: 'Kwara',
    city: 'Ilorin',
    name: 'Ilorin Rooftop',
    image:
      'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    hours: '7:00 PM – 11:00 PM',
    venue: 'Tanke',
    highlights: ['City views', 'Cocktails', 'DJ sets'],
  },
  {
    id: 'plateau_jos_lounge',
    state: 'Plateau',
    city: 'Jos',
    name: 'Jos Chill Lounge',
    image:
      'https://images.pexels.com/photos/3184192/pexels-photo-3184192.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    hours: '6:00 PM – 10:00 PM',
    venue: 'Rayfield',
    highlights: ['Live music', 'Warm lighting', 'Comfort food'],
  },
  {
    id: 'imo_owerri_night_spot',
    state: 'Imo',
    city: 'Owerri',
    name: 'Owerri Night Spot',
    image:
      'https://images.pexels.com/photos/637514/pexels-photo-637514.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    hours: '8:00 PM – 1:00 AM',
    venue: 'Ikenegbu',
    highlights: ['Dance floor', 'Cocktails', 'Live DJ'],
  },
];

const buildStateCards = (state: string) => {
  const imgs = [
    'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    'https://images.pexels.com/photos/11963165/pexels-photo-11963165.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    'https://images.pexels.com/photos/964016/pexels-photo-964016.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    'https://images.pexels.com/photos/154147/pexels-photo-154147.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
  ];
  const titles = [
    `Lounges and bars in ${state}`,
    `Clubs and live music in ${state}`,
    `Late-night dining in ${state}`,
    `Outdoor terraces in ${state}`,
  ];
  return titles.map((t, i) => ({
    id: `state_${state}_${i}`,
    title: t,
    image: imgs[i % imgs.length],
    points: ['Open hours', 'Dress code', 'Music genres'],
  }));
};

const NightlifePage = ({
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
    { name: 'Nightlife', href: '/local-resources/nightlife' },
  ];

  const filtered =
    selectedState && selectedState.length > 0
      ? NIGHTLIFE.filter((e) => e.state === selectedState)
      : NIGHTLIFE;

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Breadcrumb items={breadcrumbItems} className="mb-6" />
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold uppercase tracking-wide mb-4">
                Local Resources
              </span>
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
                {selectedState ? `Nightlife in ${selectedState}` : 'Nightlife'}
              </h1>
              <p className="text-xl text-secondary mb-8 leading-relaxed">
                Explore lounges, clubs, and live music spots with open hours, venues, and highlights.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href={`/search?type=nightlife${selectedState ? `&state=${encodeURIComponent(selectedState)}` : ''}`}
                  className="inline-flex items-center gap-2 px-5 py-3 bg-primary text-white rounded-2xl font-semibold hover:bg-primary/90 transition-all hover-lift"
                >
                  Find Nightlife Near Me
                  <Icon name="ArrowRightIcon" size={18} className="text-white" />
                </Link>
                <Link
                  href="/local-resources/lounges"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-white text-primary rounded-2xl font-semibold border border-primary/20 hover:bg-primary/5 transition-all"
                >
                  See Lounges
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8">Featured Nightlife</h2>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-3">
                <StateFilterSidebar
                  basePath="/local-resources/nightlife"
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
                        alt={e.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        priority
                        fallbackSrc="/assets/images/no_image.png"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                      <div className="absolute bottom-5 left-5 right-5">
                        <div className="text-white text-xs">
                          {e.city}, {e.state} · {e.hours}
                        </div>
                        <h3 className="text-2xl font-bold text-white">{e.name}</h3>
                        <div className="text-white text-xs mt-1">{e.venue}</div>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="space-y-2">
                        {e.highlights.map((h, idx) => (
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
      </main>
      <Footer />
    </>
  );
};

export default NightlifePage;
