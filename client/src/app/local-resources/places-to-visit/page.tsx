import { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';
import Breadcrumb from '@/components/common/Breadcrumb';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { NIGERIA_STATES } from '@/data/nigeria-states';

export const metadata: Metadata = {
  title: 'Places to Visit in Nigeria - CACBLAZE',
  description:
    'Discover top attractions, parks, museums, beaches, and historic sites across Nigerian states. Plan visits and explore highlights.',
  keywords:
    'Nigeria attractions, Lagos beaches, Abuja parks, Kano dye pits, Cross River Obudu, places to visit Nigeria',
};

type Attraction = {
  id: string;
  state: string;
  city: string;
  name: string;
  image: string;
  highlights: string[];
};

const ATTRACTIONS: Attraction[] = [
  {
    id: 'lagos_tarkwa_bay',
    state: 'Lagos',
    city: 'Lagos',
    name: 'Tarkwa Bay Beach',
    image:
      'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    highlights: ['Boat-access beach', 'Family-friendly', 'Surf spots'],
  },
  {
    id: 'lagos_lekki_conservation',
    state: 'Lagos',
    city: 'Lekki',
    name: 'Lekki Conservation Centre',
    image:
      'https://images.pexels.com/photos/245240/pexels-photo-245240.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    highlights: ['Canopy walkway', 'Wildlife', 'Guided tours'],
  },
  {
    id: 'abuja_millennium_park',
    state: 'FCT Abuja',
    city: 'Abuja',
    name: 'Millennium Park',
    image:
      'https://images.pexels.com/photos/296282/pexels-photo-296282.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    highlights: ['Picnic lawns', 'Fountain paths', 'City views'],
  },
  {
    id: 'abuja_aso_rock',
    state: 'FCT Abuja',
    city: 'Abuja',
    name: 'Aso Rock Views',
    image:
      'https://images.pexels.com/photos/35600/road-sun-rays-path.jpg?auto=compress&cs=tinysrgb&w=1200&q=80',
    highlights: ['Rock formations', 'Sunset vistas', 'Photo spots'],
  },
  {
    id: 'rivers_ph_pleasure_park',
    state: 'Rivers',
    city: 'Port Harcourt',
    name: 'Pleasure Park',
    image:
      'https://images.pexels.com/photos/602024/pexels-photo-602024.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    highlights: ['Jogging trails', 'Boating', 'Kids zone'],
  },
  {
    id: 'rivers_bonny_island',
    state: 'Rivers',
    city: 'Bonny',
    name: 'Bonny Island Beaches',
    image:
      'https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    highlights: ['Pristine beaches', 'Quiet escapes', 'Local seafood'],
  },
  {
    id: 'cross_river_obudu',
    state: 'Cross River',
    city: 'Obudu',
    name: 'Obudu Mountain Resort',
    image:
      'https://images.pexels.com/photos/1083896/pexels-photo-1083896.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    highlights: ['Cable cars', 'Cool climate', 'Mountain trails'],
  },
  {
    id: 'kano_dye_pits',
    state: 'Kano',
    city: 'Kano',
    name: 'Kofar Mata Dye Pits',
    image:
      'https://images.pexels.com/photos/3645970/pexels-photo-3645970.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    highlights: ['Historic craft', 'Indigo dyeing', 'Cultural heritage'],
  },
  {
    id: 'enugu_ngwo_cave',
    state: 'Enugu',
    city: 'Ngwo',
    name: 'Ngwo Pine Forest & Cave',
    image:
      'https://images.pexels.com/photos/247478/pexels-photo-247478.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    highlights: ['Pine forest', 'Cave stream', 'Hiking'],
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
    `Top attractions in ${state}`,
    `Outdoor parks and nature in ${state}`,
    `Museums and heritage in ${state}`,
    `Weekend getaways in ${state}`,
  ];
  return titles.map((t, i) => ({
    id: `state_${state}_${i}`,
    title: t,
    image: imgs[i % imgs.length],
    points: ['Verified highlights', 'Family-friendly options', 'Photo spots'],
  }));
};

const PlacesToVisitPage = ({
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
    { name: 'Places to Visit', href: '/local-resources/places-to-visit' },
  ];

  const filtered =
    selectedState && selectedState.length > 0
      ? ATTRACTIONS.filter((a) => a.state === selectedState)
      : ATTRACTIONS;

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
                Local Resources
              </span>
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
                {selectedState ? `Places to Visit in ${selectedState}` : 'Places to Visit'}
              </h1>
              <p className="text-xl text-secondary mb-8 leading-relaxed">
                Explore parks, museums, beaches, and historic sites across Nigerian states. Plan
                visits and discover highlights for great experiences.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href={`/search?type=places-to-visit${selectedState ? `&state=${encodeURIComponent(selectedState)}` : ''}`}
                  className="inline-flex items-center gap-2 px-5 py-3 bg-primary text-white rounded-2xl font-semibold hover:bg-primary/90 transition-all hover-lift"
                >
                  Find Places Near Me
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
            <h2 className="text-3xl font-bold text-foreground mb-8">Highlights</h2>
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
                  <form action="/local-resources/places-to-visit" method="GET" className="space-y-3">
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
                        href="/local-resources/places-to-visit"
                        className="block text-center px-4 py-2.5 border border-gray-200 rounded-xl text-foreground hover:border-primary transition-all"
                      >
                        Clear Selection
                      </Link>
                    )}
                  </form>
                </div>
              </aside>
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
                          {a.city}, {a.state}
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

        {/* Explore by State grid removed in favor of sidebar search */}
      </main>
      <Footer />
    </>
  );
};

export default PlacesToVisitPage;
