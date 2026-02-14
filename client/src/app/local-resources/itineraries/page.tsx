import { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';
import Breadcrumb from '@/components/common/Breadcrumb';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import StateFilterSidebar from '@/components/common/StateFilterSidebar';

export const metadata: Metadata = {
  title: 'Travel Itineraries in Nigeria - CACBLAZE',
  description:
    'Plan trips with curated day-by-day itineraries across Nigerian states: city highlights, food, and experiences.',
  keywords:
    'Nigeria itineraries, Lagos weekend plan, Abuja city break, travel routes, day-by-day plans',
};

type Itinerary = {
  id: string;
  state: string;
  city: string;
  name: string;
  image: string;
  days: number;
  highlights: string[];
};

const ITINERARIES: Itinerary[] = [
  {
    id: 'lagos_weekend',
    state: 'Lagos',
    city: 'Lagos',
    name: 'Lagos Weekend Itinerary',
    image:
      'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    days: 2,
    highlights: ['Lekki Conservation', 'Beach day at Tarkwa Bay', 'Victoria Island dining'],
  },
  {
    id: 'abuja_3_day',
    state: 'FCT Abuja',
    city: 'Abuja',
    name: 'Abuja 3-Day Itinerary',
    image:
      'https://images.pexels.com/photos/296282/pexels-photo-296282.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    days: 3,
    highlights: ['Millennium Park', 'City viewpoints', 'Cultural sights'],
  },
  {
    id: 'ph_city_break',
    state: 'Rivers',
    city: 'Port Harcourt',
    name: 'Port Harcourt City Break',
    image:
      'https://images.pexels.com/photos/602024/pexels-photo-602024.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    days: 2,
    highlights: ['Pleasure Park', 'Bonny Island day trip', 'Local seafood'],
  },
  {
    id: 'obudu_escape',
    state: 'Cross River',
    city: 'Obudu',
    name: 'Obudu Mountain Escape',
    image:
      'https://images.pexels.com/photos/1083896/pexels-photo-1083896.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    days: 3,
    highlights: ['Cable car ride', 'Mountain trails', 'Cool climate retreat'],
  },
  {
    id: 'kano_heritage',
    state: 'Kano',
    city: 'Kano',
    name: 'Kano Heritage Route',
    image:
      'https://images.pexels.com/photos/3645970/pexels-photo-3645970.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    days: 2,
    highlights: ['Kofar Mata dye pits', 'Old city markets', 'Local crafts'],
  },
  {
    id: 'ibadan_oyo_weekender',
    state: 'Oyo',
    city: 'Ibadan',
    name: 'Ibadan Weekender',
    image:
      'https://images.pexels.com/photos/247478/pexels-photo-247478.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    days: 2,
    highlights: ['Agodi Gardens', 'Bodija food tour', 'City viewpoints'],
  },
  {
    id: 'kaduna_city_plan',
    state: 'Kaduna',
    city: 'Kaduna',
    name: 'Kaduna City Plan',
    image:
      'https://images.pexels.com/photos/296282/pexels-photo-296282.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    days: 3,
    highlights: ['Gamji Gate Park', 'Craft markets', 'Local grills'],
  },
  {
    id: 'enugu_hills_route',
    state: 'Enugu',
    city: 'Enugu',
    name: 'Enugu Hills Route',
    image:
      'https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    days: 2,
    highlights: ['Awhum Waterfall', 'Ngwo pine walk', 'City dining'],
  },
  {
    id: 'awka_heritage_days',
    state: 'Anambra',
    city: 'Awka',
    name: 'Awka Heritage Days',
    image:
      'https://images.pexels.com/photos/245240/pexels-photo-245240.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    days: 2,
    highlights: ['Ogbunike Caves', 'Local crafts', 'Street food'],
  },
  {
    id: 'warri_delta_mix',
    state: 'Delta',
    city: 'Warri',
    name: 'Warri Nature & Food Mix',
    image:
      'https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    days: 2,
    highlights: ['Waterfront strolls', 'Seafood lunch', 'Evening lounges'],
  },
  {
    id: 'benin_edo_classics',
    state: 'Edo',
    city: 'Benin City',
    name: 'Benin Classics',
    image:
      'https://images.pexels.com/photos/302902/pexels-photo-302902.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    days: 3,
    highlights: ['Bronze street tour', 'City museums', 'Local cuisine'],
  },
  {
    id: 'abeokuta_ogun_escape',
    state: 'Ogun',
    city: 'Abeokuta',
    name: 'Abeokuta Rock Escape',
    image:
      'https://images.pexels.com/photos/247478/pexels-photo-247478.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    days: 2,
    highlights: ['Olumo Rock climb', 'Adire market walk', 'Traditional meals'],
  },
  {
    id: 'osogbo_osun_route',
    state: 'Osun',
    city: 'Osogbo',
    name: 'Osogbo Grove Route',
    image:
      'https://images.pexels.com/photos/1083896/pexels-photo-1083896.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    days: 2,
    highlights: ['Sacred Grove tour', 'Art village visit', 'Local soups'],
  },
  {
    id: 'ilorin_kwara_days',
    state: 'Kwara',
    city: 'Ilorin',
    name: 'Ilorin Chill Days',
    image:
      'https://images.pexels.com/photos/296282/pexels-photo-296282.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    days: 2,
    highlights: ['Asa Dam park', 'City cafes', 'Evening strolls'],
  },
  {
    id: 'jos_plateau_scapes',
    state: 'Plateau',
    city: 'Jos',
    name: 'Jos Cool Scapes',
    image:
      'https://images.pexels.com/photos/1083896/pexels-photo-1083896.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    days: 3,
    highlights: ['Wildlife park', 'City viewpoints', 'Local grills'],
  },
];

const buildStateCards = (state: string) => {
  const imgs = [
    'https://images.pexels.com/photos/1083896/pexels-photo-1083896.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    'https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    'https://images.pexels.com/photos/296282/pexels-photo-296282.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    'https://images.pexels.com/photos/245240/pexels-photo-245240.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
  ];
  const titles = [
    `Weekend plan for ${state}`,
    `3-day route around ${state}`,
    `Food and culture in ${state}`,
    `Nature and city mix in ${state}`,
  ];
  return titles.map((t, i) => ({
    id: `state_${state}_${i}`,
    title: t,
    image: imgs[i % imgs.length],
    points: ['Balanced schedule', 'Local flavors', 'Easy logistics'],
  }));
};

const ItinerariesPage = ({
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
    { name: 'Itineraries', href: '/local-resources/itineraries' },
  ];

  const filtered =
    selectedState && selectedState.length > 0
      ? ITINERARIES.filter((a) => a.state === selectedState)
      : ITINERARIES;

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
                {selectedState ? `Itineraries in ${selectedState}` : 'Travel Itineraries'}
              </h1>
              <p className="text-xl text-secondary mb-8 leading-relaxed">
                Curated day-by-day plans for seamless trips across Nigeria — highlights, food, and experiences.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href={`/search?type=itineraries${selectedState ? `&state=${encodeURIComponent(selectedState)}` : ''}`}
                  className="inline-flex items-center gap-2 px-5 py-3 bg-primary text-white rounded-2xl font-semibold hover:bg-primary/90 transition-all hover-lift"
                >
                  Find Itineraries Near Me
                  <Icon name="ArrowRightIcon" size={18} className="text-white" />
                </Link>
                <Link
                  href="/local-resources/attractions"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-white text-primary rounded-2xl font-semibold border border-primary/20 hover:bg-primary/5 transition-all"
                >
                  See Attractions
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8">Recommended Plans</h2>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-3">
                <StateFilterSidebar
                  basePath="/local-resources/itineraries"
                  selectedState={selectedState}
                  header="Explore by State"
                />
              </div>
              <div className="lg:col-span-9 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filtered.map((a) => (
                  <div
                    key={a.id}
                    className="group rounded-3xl border border-gray-200 bg-white overflow-hidden hover:border-primary transition-all hover-lift"
                  >
                    <div className="relative h-56">
                      <AppImage
                        src={a.image}
                        alt={a.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        priority
                        fallbackSrc="/assets/images/no_image.png"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                      <div className="absolute bottom-5 left-5 right-5">
                        <div className="text-white text-xs">
                          {a.city}, {a.state} · {a.days} days
                        </div>
                        <h3 className="text-2xl font-bold text-white">{a.name}</h3>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="space-y-2">
                        {a.highlights.map((h, idx) => (
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

export default ItinerariesPage;
