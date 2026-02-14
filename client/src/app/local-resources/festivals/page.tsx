import { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';
import Breadcrumb from '@/components/common/Breadcrumb';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import StateFilterSidebar from '@/components/common/StateFilterSidebar';

export const metadata: Metadata = {
  title: 'Festivals in Nigeria - CACBLAZE',
  description: 'Explore festivals across Nigerian states with dates, venues, and highlights.',
  keywords: 'Nigeria festivals, carnival, cultural events, parades, states',
};

type FestivalItem = {
  id: string;
  state: string;
  city: string;
  name: string;
  image: string;
  date: string;
  venue: string;
  highlights: string[];
};

const FESTIVALS: FestivalItem[] = [
  {
    id: 'crossriver_calabar_carnival',
    state: 'Cross River',
    city: 'Calabar',
    name: 'Calabar Carnival',
    image:
      'https://images.pexels.com/photos/1838920/pexels-photo-1838920.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    date: '2026-12-20',
    venue: 'City Center',
    highlights: ['Parades', 'Costumes', 'Street performances'],
  },
  {
    id: 'lagos_street_fest',
    state: 'Lagos',
    city: 'Lagos',
    name: 'Lagos Street Festival',
    image:
      'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    date: '2026-03-30',
    venue: 'Victoria Island',
    highlights: ['Music stages', 'Food courts', 'Night shows'],
  },
  {
    id: 'abuja_cultural_week',
    state: 'FCT Abuja',
    city: 'Abuja',
    name: 'Abuja Cultural Week',
    image:
      'https://images.pexels.com/photos/374885/pexels-photo-374885.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    date: '2026-04-18',
    venue: 'Central Park',
    highlights: ['Cuisine stalls', 'Dance troupes', 'Crafts'],
  },
  {
    id: 'kano_heritage_parade',
    state: 'Kano',
    city: 'Kano',
    name: 'Kano Heritage Parade',
    image:
      'https://images.pexels.com/photos/302902/pexels-photo-302902.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    date: '2026-05-10',
    venue: 'Old City Grounds',
    highlights: ['Traditional attire', 'Drums', 'Cultural displays'],
  },
  {
    id: 'kaduna_arts_fair',
    state: 'Kaduna',
    city: 'Kaduna',
    name: 'Kaduna Arts Fair',
    image:
      'https://images.pexels.com/photos/1838920/pexels-photo-1838920.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    date: '2026-06-12',
    venue: 'Barnawa Grounds',
    highlights: ['Crafts', 'Dance', 'Food stalls'],
  },
  {
    id: 'enugu_culture_day',
    state: 'Enugu',
    city: 'Enugu',
    name: 'Enugu Culture Day',
    image:
      'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    date: '2026-07-08',
    venue: 'New Layout Arena',
    highlights: ['Dance troupes', 'Drums', 'Costumes'],
  },
  {
    id: 'anambra_awka_parade',
    state: 'Anambra',
    city: 'Awka',
    name: 'Awka City Parade',
    image:
      'https://images.pexels.com/photos/1838920/pexels-photo-1838920.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    date: '2026-08-20',
    venue: 'City Center',
    highlights: ['Costume walk', 'Street shows', 'Live music'],
  },
  {
    id: 'delta_asaba_fest',
    state: 'Delta',
    city: 'Asaba',
    name: 'Asaba Summer Fest',
    image:
      'https://images.pexels.com/photos/374885/pexels-photo-374885.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    date: '2026-09-15',
    venue: 'Okpanam Grounds',
    highlights: ['Food courts', 'Parade', 'Concert'],
  },
  {
    id: 'edo_benin_carnival',
    state: 'Edo',
    city: 'Benin City',
    name: 'Benin Carnival',
    image:
      'https://images.pexels.com/photos/302902/pexels-photo-302902.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    date: '2026-10-01',
    venue: 'Ring Road',
    highlights: ['Cultural displays', 'Drums', 'Parades'],
  },
  {
    id: 'ogun_abeokuta_fair',
    state: 'Ogun',
    city: 'Abeokuta',
    name: 'Abeokuta Culture Fair',
    image:
      'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    date: '2026-06-18',
    venue: 'Ibara Arena',
    highlights: ['Dance', 'Crafts', 'Live shows'],
  },
  {
    id: 'osun_osogbo_parade',
    state: 'Osun',
    city: 'Osogbo',
    name: 'Osogbo Parade',
    image:
      'https://images.pexels.com/photos/374885/pexels-photo-374885.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    date: '2026-07-22',
    venue: 'Oke-Fia Grounds',
    highlights: ['Procession', 'Music', 'Food'],
  },
  {
    id: 'kwara_ilorin_culture',
    state: 'Kwara',
    city: 'Ilorin',
    name: 'Ilorin Culture Fest',
    image:
      'https://images.pexels.com/photos/302902/pexels-photo-302902.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    date: '2026-08-05',
    venue: 'Tanke Grounds',
    highlights: ['Parade', 'Crafts', 'Concert'],
  },
  {
    id: 'plateau_jos_carnival',
    state: 'Plateau',
    city: 'Jos',
    name: 'Jos Carnival',
    image:
      'https://images.pexels.com/photos/1838920/pexels-photo-1838920.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    date: '2026-09-09',
    venue: 'Rayfield Arena',
    highlights: ['Dance', 'Parade', 'Street shows'],
  },
  {
    id: 'imo_owerri_festival',
    state: 'Imo',
    city: 'Owerri',
    name: 'Owerri Festival',
    image:
      'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    date: '2026-10-12',
    venue: 'Ikenegbu Grounds',
    highlights: ['Costumes', 'Dance', 'Concert'],
  },
];

const buildStateCards = (state: string) => {
  const imgs = [
    'https://images.pexels.com/photos/1838920/pexels-photo-1838920.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    'https://images.pexels.com/photos/374885/pexels-photo-374885.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    'https://images.pexels.com/photos/302902/pexels-photo-302902.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
  ];
  const titles = [
    `Major festivals in ${state}`,
    `City parades in ${state}`,
    `Food and crafts fairs in ${state}`,
    `Cultural showcases in ${state}`,
  ];
  return titles.map((t, i) => ({
    id: `state_${state}_${i}`,
    title: t,
    image: imgs[i % imgs.length],
    points: ['Dates and venues', 'Tickets info', 'Family-friendly'],
  }));
};

const FestivalsPage = ({
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
    { name: 'Festivals', href: '/local-resources/festivals' },
  ];

  const filtered =
    selectedState && selectedState.length > 0
      ? FESTIVALS.filter((e) => e.state === selectedState)
      : FESTIVALS;

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
                {selectedState ? `Festivals in ${selectedState}` : 'Festivals'}
              </h1>
              <p className="text-xl text-secondary mb-8 leading-relaxed">
                Explore carnivals and cultural events with parade routes, food courts, and live shows.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href={`/search?type=festivals${selectedState ? `&state=${encodeURIComponent(selectedState)}` : ''}`}
                  className="inline-flex items-center gap-2 px-5 py-3 bg-primary text-white rounded-2xl font-semibold hover:bg-primary/90 transition-all hover-lift"
                >
                  Find Festivals Near Me
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
            <h2 className="text-3xl font-bold text-foreground mb-8">Featured Festivals</h2>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-3">
                <StateFilterSidebar
                  basePath="/local-resources/festivals"
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

export default FestivalsPage;
