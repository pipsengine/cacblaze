import { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';
import Breadcrumb from '@/components/common/Breadcrumb';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import StateFilterSidebar from '@/components/common/StateFilterSidebar';

export const metadata: Metadata = {
  title: 'Concerts in Nigeria - CACBLAZE',
  description: 'Discover live music concerts across Nigerian states with dates and venues.',
  keywords: 'Nigeria concerts, live music, shows, events, states',
};

type ConcertItem = {
  id: string;
  state: string;
  city: string;
  name: string;
  image: string;
  date: string;
  venue: string;
  highlights: string[];
};

const CONCERTS: ConcertItem[] = [
  {
    id: 'lagos_victoria_island_show',
    state: 'Lagos',
    city: 'Lagos',
    name: 'Victoria Island Live',
    image:
      'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    date: '2026-03-28',
    venue: 'VI Arena',
    highlights: ['Afrobeats headliners', 'DJ sets', 'Late-night vibes'],
  },
  {
    id: 'abuja_city_concert',
    state: 'FCT Abuja',
    city: 'Abuja',
    name: 'Abuja City Sounds',
    image:
      'https://images.pexels.com/photos/11963165/pexels-photo-11963165.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    date: '2026-04-12',
    venue: 'Eagle Square',
    highlights: ['Live bands', 'Open-air stage', 'Food courts'],
  },
  {
    id: 'ph_rivers_night',
    state: 'Rivers',
    city: 'Port Harcourt',
    name: 'Rivers Night Live',
    image:
      'https://images.pexels.com/photos/964016/pexels-photo-964016.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    date: '2026-03-16',
    venue: 'GRA Concert Hall',
    highlights: ['Local artists', 'Dance segments', 'Community stage'],
  },
  {
    id: 'ibadan_oyo_music_fest',
    state: 'Oyo',
    city: 'Ibadan',
    name: 'Ibadan Music Fest',
    image:
      'https://images.pexels.com/photos/154147/pexels-photo-154147.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    date: '2026-05-03',
    venue: 'Mapo Hall Grounds',
    highlights: ['Cultural acts', 'Afro-fusion', 'Family-friendly'],
  },
  {
    id: 'kano_city_stage',
    state: 'Kano',
    city: 'Kano',
    name: 'Kano City Stage',
    image:
      'https://images.pexels.com/photos/964016/pexels-photo-964016.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    date: '2026-06-10',
    venue: 'Sani Abacha Indoor Arena',
    highlights: ['Highlife bands', 'Dance troupes', 'Local DJs'],
  },
  {
    id: 'kaduna_lights_show',
    state: 'Kaduna',
    city: 'Kaduna',
    name: 'Kaduna Lights Show',
    image:
      'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    date: '2026-06-24',
    venue: 'Murtala Square',
    highlights: ['Live sets', 'Open-air', 'Evening performances'],
  },
  {
    id: 'enugu_hills_live',
    state: 'Enugu',
    city: 'Enugu',
    name: 'Enugu Hills Live',
    image:
      'https://images.pexels.com/photos/11963165/pexels-photo-11963165.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    date: '2026-07-05',
    venue: 'Michael Okpara Square',
    highlights: ['Afro-soul', 'Community stage', 'Food vendors'],
  },
  {
    id: 'awka_anambra_vibes',
    state: 'Anambra',
    city: 'Awka',
    name: 'Awka Vibes',
    image:
      'https://images.pexels.com/photos/154147/pexels-photo-154147.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    date: '2026-07-19',
    venue: 'Awka City Arena',
    highlights: ['Local talents', 'Hip-hop acts', 'Night shows'],
  },
  {
    id: 'warri_delta_sound',
    state: 'Delta',
    city: 'Warri',
    name: 'Warri Soundscape',
    image:
      'https://images.pexels.com/photos/964016/pexels-photo-964016.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    date: '2026-08-02',
    venue: 'Warri Township Stadium',
    highlights: ['Afrobeats', 'Highlife', 'Community performances'],
  },
  {
    id: 'benin_edo_live',
    state: 'Edo',
    city: 'Benin City',
    name: 'Benin Live Sessions',
    image:
      'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    date: '2026-08-16',
    venue: 'Samuel Ogbemudia Stadium',
    highlights: ['Live bands', 'Open-air stage', 'Cultural displays'],
  },
  {
    id: 'abeokuta_ogun_groove',
    state: 'Ogun',
    city: 'Abeokuta',
    name: 'Abeokuta Groove',
    image:
      'https://images.pexels.com/photos/154147/pexels-photo-154147.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    date: '2026-08-30',
    venue: 'MKO Abiola Stadium',
    highlights: ['Afro-fusion', 'Street performances', 'Family-friendly'],
  },
  {
    id: 'osogbo_osun_tune',
    state: 'Osun',
    city: 'Osogbo',
    name: 'Osogbo Tune Fest',
    image:
      'https://images.pexels.com/photos/964016/pexels-photo-964016.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    date: '2026-09-13',
    venue: 'Freedom Park',
    highlights: ['Local choirs', 'Live bands', 'Evening chill'],
  },
  {
    id: 'ilorin_kwara_beats',
    state: 'Kwara',
    city: 'Ilorin',
    name: 'Ilorin City Beats',
    image:
      'https://images.pexels.com/photos/11963165/pexels-photo-11963165.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    date: '2026-09-27',
    venue: 'Stadium Grounds',
    highlights: ['Hip-hop sets', 'DJ nights', 'Open grounds'],
  },
  {
    id: 'jos_plateau_sound',
    state: 'Plateau',
    city: 'Jos',
    name: 'Jos Plateau Sound',
    image:
      'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    date: '2026-10-11',
    venue: 'City Park Arena',
    highlights: ['Cool evening shows', 'Local artists', 'Acoustic sessions'],
  },
  {
    id: 'owerri_imo_rhythm',
    state: 'Imo',
    city: 'Owerri',
    name: 'Owerri Rhythm Night',
    image:
      'https://images.pexels.com/photos/154147/pexels-photo-154147.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    date: '2026-10-25',
    venue: 'Hero Square',
    highlights: ['Afro-pop', 'Dance troupes', 'Food courts'],
  },
];

const buildStateCards = (state: string) => {
  const imgs = [
    'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    'https://images.pexels.com/photos/964016/pexels-photo-964016.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    'https://images.pexels.com/photos/11963165/pexels-photo-11963165.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    'https://images.pexels.com/photos/154147/pexels-photo-154147.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
  ];
  const titles = [
    `Upcoming concerts in ${state}`,
    `Live bands and shows in ${state}`,
    `City night events in ${state}`,
    `Open-air music in ${state}`,
  ];
  return titles.map((t, i) => ({
    id: `state_${state}_${i}`,
    title: t,
    image: imgs[i % imgs.length],
    points: ['Dates and venues', 'Tickets info', 'Artist lineups'],
  }));
};

const ConcertsPage = ({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  const raw = searchParams?.state;
  const selectedState = typeof raw === 'string' ? raw : Array.isArray(raw) ? raw[0] || '' : '';

  const breadcrumbItems = [
    { name: 'Home', href: '/homepage' },
    { name: 'Local Resources', href: '/local-resources' },
    { name: 'Concerts', href: '/local-resources/concerts' },
  ];

  const filtered =
    selectedState && selectedState.length > 0
      ? CONCERTS.filter((e) => e.state === selectedState)
      : CONCERTS;

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
                {selectedState ? `Concerts in ${selectedState}` : 'Concerts'}
              </h1>
              <p className="text-xl text-secondary mb-8 leading-relaxed">
                See live shows across Nigerian states with dates, venues, and highlights.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href={`/search?type=concerts${selectedState ? `&state=${encodeURIComponent(selectedState)}` : ''}`}
                  className="inline-flex items-center gap-2 px-5 py-3 bg-primary text-white rounded-2xl font-semibold hover:bg-primary/90 transition-all hover-lift"
                >
                  Find Concerts Near Me
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
            <h2 className="text-3xl font-bold text-foreground mb-8">Upcoming Concerts</h2>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-3">
                <StateFilterSidebar
                  basePath="/local-resources/concerts"
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
      </main>
      <Footer />
    </>
  );
};

export default ConcertsPage;
