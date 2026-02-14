import { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';
import Breadcrumb from '@/components/common/Breadcrumb';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import StateFilterSidebar from '@/components/common/StateFilterSidebar';

export const metadata: Metadata = {
  title: 'Family Events in Nigeria - CACBLAZE',
  description: 'Discover family-friendly events, parks, and workshops across Nigerian states.',
  keywords: 'Nigeria family events, kids activities, parks, workshops, states',
};

type FamilyEvent = {
  id: string;
  state: string;
  city: string;
  name: string;
  image: string;
  date: string;
  venue: string;
  highlights: string[];
};

const FAMILY_EVENTS: FamilyEvent[] = [
  {
    id: 'lagos_family_park_day',
    state: 'Lagos',
    city: 'Lagos',
    name: 'Family Park Day',
    image:
      'https://images.pexels.com/photos/154147/pexels-photo-154147.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    date: '2026-03-21',
    venue: 'Lekki Park',
    highlights: ['Play zones', 'Picnic areas', 'Face painting'],
  },
  {
    id: 'abuja_kids_workshop',
    state: 'FCT Abuja',
    city: 'Abuja',
    name: 'Kids Science Workshop',
    image:
      'https://images.pexels.com/photos/11963165/pexels-photo-11963165.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    date: '2026-04-02',
    venue: 'Central Learning Hub',
    highlights: ['Hands-on experiments', 'STEM demos', 'Family seating'],
  },
  {
    id: 'rivers_ph_family_funfair',
    state: 'Rivers',
    city: 'Port Harcourt',
    name: 'Family Funfair',
    image:
      'https://images.pexels.com/photos/374885/pexels-photo-374885.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    date: '2026-03-29',
    venue: 'GRA Recreation Grounds',
    highlights: ['Games', 'Food stalls', 'Live kids shows'],
  },
  {
    id: 'oyo_ibadan_zoo_day',
    state: 'Oyo',
    city: 'Ibadan',
    name: 'Zoo Discovery Day',
    image:
      'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    date: '2026-04-12',
    venue: 'Agodi Gardens',
    highlights: ['Animal talks', 'Photo spots', 'Guided tours'],
  },
  {
    id: 'kano_family_play',
    state: 'Kano',
    city: 'Kano',
    name: 'Family Play Day',
    image:
      'https://images.pexels.com/photos/302902/pexels-photo-302902.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    date: '2026-03-30',
    venue: 'Kofar Nassarawa Park',
    highlights: ['Games', 'Snacks', 'Kids races'],
  },
  {
    id: 'kaduna_art_kids',
    state: 'Kaduna',
    city: 'Kaduna',
    name: 'Kids Art Workshop',
    image:
      'https://images.pexels.com/photos/1722183/pexels-photo-1722183.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    date: '2026-04-05',
    venue: 'Barnawa Community Hall',
    highlights: ['Painting', 'Crafts', 'Showcase'],
  },
  {
    id: 'enugu_family_picnic',
    state: 'Enugu',
    city: 'Enugu',
    name: 'Family Picnic',
    image:
      'https://images.pexels.com/photos/1111317/pexels-photo-1111317.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    date: '2026-03-27',
    venue: 'New Layout Gardens',
    highlights: ['Picnic mats', 'Playground', 'Music'],
  },
  {
    id: 'anambra_awka_science_day',
    state: 'Anambra',
    city: 'Awka',
    name: 'Kids Science Day',
    image:
      'https://images.pexels.com/photos/590561/pexels-photo-590561.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    date: '2026-04-10',
    venue: 'Awka Learning Center',
    highlights: ['STEM demos', 'Robotics', 'Certificates'],
  },
  {
    id: 'delta_asaba_family_fair',
    state: 'Delta',
    city: 'Asaba',
    name: 'Family Fair',
    image:
      'https://images.pexels.com/photos/1838920/pexels-photo-1838920.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    date: '2026-04-03',
    venue: 'Okpanam Event Grounds',
    highlights: ['Food stalls', 'Games', 'Bouncy castle'],
  },
  {
    id: 'edo_benin_kids_music',
    state: 'Edo',
    city: 'Benin City',
    name: 'Kids Music Day',
    image:
      'https://images.pexels.com/photos/164745/pexels-photo-164745.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    date: '2026-04-08',
    venue: 'Sapele Road Arena',
    highlights: ['Singing', 'Instruments', 'Family seating'],
  },
  {
    id: 'ogun_abeokuta_family_walk',
    state: 'Ogun',
    city: 'Abeokuta',
    name: 'Family Nature Walk',
    image:
      'https://images.pexels.com/photos/1304471/pexels-photo-1304471.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    date: '2026-04-06',
    venue: 'Olumo Trails',
    highlights: ['Guided walk', 'Photo spots', 'Snacks'],
  },
  {
    id: 'osun_osogbo_craft_day',
    state: 'Osun',
    city: 'Osogbo',
    name: 'Kids Craft Day',
    image:
      'https://images.pexels.com/photos/1722183/pexels-photo-1722183.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    date: '2026-04-09',
    venue: 'Oke-Fia Center',
    highlights: ['Crafts', 'Painting', 'Show-and-tell'],
  },
  {
    id: 'kwara_ilorin_fun_run',
    state: 'Kwara',
    city: 'Ilorin',
    name: 'Family Fun Run',
    image:
      'https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    date: '2026-04-07',
    venue: 'Tanke Route',
    highlights: ['Run/walk', 'Medals', 'Music'],
  },
  {
    id: 'plateau_jos_park_games',
    state: 'Plateau',
    city: 'Jos',
    name: 'Park Games Day',
    image:
      'https://images.pexels.com/photos/1111317/pexels-photo-1111317.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    date: '2026-04-04',
    venue: 'Rayfield Park',
    highlights: ['Games', 'Picnic', 'Kite flying'],
  },
  {
    id: 'imo_owerri_storytime',
    state: 'Imo',
    city: 'Owerri',
    name: 'Kids Storytime',
    image:
      'https://images.pexels.com/photos/590561/pexels-photo-590561.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    date: '2026-04-11',
    venue: 'Ikenegbu Library',
    highlights: ['Reading circle', 'Craft corner', 'Snacks'],
  },
];

const buildStateCards = (state: string) => {
  const imgs = [
    'https://images.pexels.com/photos/154147/pexels-photo-154147.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    'https://images.pexels.com/photos/11963165/pexels-photo-11963165.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    'https://images.pexels.com/photos/374885/pexels-photo-374885.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
  ];
  const titles = [
    `Parks and picnics in ${state}`,
    `Kids workshops in ${state}`,
    `Family fairs in ${state}`,
    `Animal and nature days in ${state}`,
  ];
  return titles.map((t, i) => ({
    id: `state_${state}_${i}`,
    title: t,
    image: imgs[i % imgs.length],
    points: ['Age-friendly', 'Facilities info', 'Tickets and timing'],
  }));
};

const FamilyEventsPage = ({
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
    { name: 'Family Events', href: '/local-resources/family-events' },
  ];

  const filtered =
    selectedState && selectedState.length > 0
      ? FAMILY_EVENTS.filter((e) => e.state === selectedState)
      : FAMILY_EVENTS;

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
                {selectedState ? `Family Events in ${selectedState}` : 'Family Events'}
              </h1>
              <p className="text-xl text-secondary mb-8 leading-relaxed">
                Find kid-friendly events and outdoor activities with dates, venues, and highlights.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href={`/search?type=family-events${selectedState ? `&state=${encodeURIComponent(selectedState)}` : ''}`}
                  className="inline-flex items-center gap-2 px-5 py-3 bg-primary text-white rounded-2xl font-semibold hover:bg-primary/90 transition-all hover-lift"
                >
                  Find Family Events Near Me
                  <Icon name="ArrowRightIcon" size={18} className="text-white" />
                </Link>
                <Link
                  href="/local-resources/events-calendar"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-white text-primary rounded-2xl font-semibold border border-primary/20 hover:bg-primary/5 transition-all"
                >
                  See Events Calendar
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8">Upcoming Family Events</h2>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-3">
                <StateFilterSidebar
                  basePath="/local-resources/family-events"
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
                          {e.city}, {e.state} · {new Date(e.date).toLocaleDateString()}
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

export default FamilyEventsPage;
