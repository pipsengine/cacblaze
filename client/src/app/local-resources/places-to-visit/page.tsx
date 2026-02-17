import { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';
import Breadcrumb from '@/components/common/Breadcrumb';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { NIGERIA_STATES } from '@/data/nigeria-states';
import StateFilterSidebar from '@/components/common/StateFilterSidebar';
import { getContextualImage } from '@/utils/imageService';

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
    id: 'ogun_olumo_rock',
    state: 'Ogun',
    city: 'Abeokuta',
    name: 'Olumo Rock',
    image:
      'https://images.pexels.com/photos/247478/pexels-photo-247478.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    highlights: ['Rock climb', 'City panoramas', 'Historic tunnels'],
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
    id: 'osun_osogbo_grove',
    state: 'Osun',
    city: 'Osogbo',
    name: 'Osun-Osogbo Sacred Grove',
    image:
      'https://images.pexels.com/photos/1083896/pexels-photo-1083896.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    highlights: ['UNESCO site', 'Forest shrine', 'Sculpture trails'],
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
    id: 'plateau_jos_park',
    state: 'Plateau',
    city: 'Jos',
    name: 'Jos Wildlife Park',
    image:
      'https://images.pexels.com/photos/1083896/pexels-photo-1083896.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    highlights: ['Wildlife enclosures', 'Nature trails', 'Picnic areas'],
  },
  {
    id: 'imo_oguta_lake',
    state: 'Imo',
    city: 'Oguta',
    name: 'Oguta Lake Resort',
    image:
      'https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    highlights: ['Lakeside views', 'Boat rides', 'Relax zones'],
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
    id: 'kwara_asa_dam',
    state: 'Kwara',
    city: 'Ilorin',
    name: 'Asa Dam Park',
    image:
      'https://images.pexels.com/photos/296282/pexels-photo-296282.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    highlights: ['Lake views', 'Jogging paths', 'Family spots'],
  },
  {
    id: 'oyo_agodi_gardens',
    state: 'Oyo',
    city: 'Ibadan',
    name: 'Agodi Gardens',
    image:
      'https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    highlights: ['Lush park', 'Picnic zones', 'Lake views'],
  },
  {
    id: 'kaduna_gamji_gate',
    state: 'Kaduna',
    city: 'Kaduna',
    name: 'Gamji Gate Park',
    image:
      'https://images.pexels.com/photos/296282/pexels-photo-296282.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    highlights: ['Green lawns', 'Walking paths', 'City outlook'],
  },
  {
    id: 'anambra_ogbunike_caves',
    state: 'Anambra',
    city: 'Ogbunike',
    name: 'Ogbunike Caves',
    image:
      'https://images.pexels.com/photos/245240/pexels-photo-245240.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    highlights: ['Cave network', 'Nature trail', 'Heritage site'],
  },
  {
    id: 'delta_osa_beach',
    state: 'Delta',
    city: 'Warri',
    name: 'Warri Waterfront',
    image:
      'https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    highlights: ['Riverside strolls', 'Sunset views', 'Quiet spots'],
  },
  {
    id: 'edo_igun_street',
    state: 'Edo',
    city: 'Benin City',
    name: 'Igun Street Bronze Works',
    image:
      'https://images.pexels.com/photos/302902/pexels-photo-302902.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    highlights: ['Bronze craft', 'Artisan shops', 'Cultural heritage'],
  },
  {
    id: 'enugu_ngwo_cave_return',
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
              <div className="lg:col-span-3">
                <StateFilterSidebar
                  basePath="/local-resources/places-to-visit"
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
                      {(() => {
                        const needsFix =
                          a.id === 'osun_osogbo_grove' ||
                          a.id === 'kano_dye_pits' ||
                          a.id === 'plateau_jos_park' ||
                          a.id === 'rivers_ph_pleasure_park';
                        if (needsFix) {
                          const override =
                            a.name === 'Osun-Osogbo Sacred Grove'
                              ? `/api/image-proxy?url=${encodeURIComponent('https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?auto=format&fit=crop&w=1200&q=80')}`
                              : a.name === 'Kofar Mata Dye Pits'
                              ? `/api/image-proxy?url=${encodeURIComponent('https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80')}`
                              : a.name === 'Jos Wildlife Park'
                              ? `/api/image-proxy?url=${encodeURIComponent('https://images.pexels.com/photos/602024/pexels-photo-602024.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80')}`
                              : a.name === 'Pleasure Park'
                              ? `/api/image-proxy?url=${encodeURIComponent('https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80')}`
                              : a.image;
                          return (
                            <AppImage
                              src={override}
                              alt={a.name}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-500"
                              priority
                              fallbackSrc={
                                a.name === 'Osun-Osogbo Sacred Grove'
                                  ? `/api/image-proxy?url=${encodeURIComponent('https://images.pexels.com/photos/1083896/pexels-photo-1083896.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80')}`
                                  : a.name === 'Jos Wildlife Park'
                                  ? `/api/image-proxy?url=${encodeURIComponent('https://images.pexels.com/photos/296282/pexels-photo-296282.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80')}`
                                  : a.name === 'Pleasure Park'
                                  ? `/api/image-proxy?url=${encodeURIComponent('https://images.pexels.com/photos/296282/pexels-photo-296282.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80')}`
                                  : a.name === 'Kofar Mata Dye Pits'
                                  ? `/api/image-proxy?url=${encodeURIComponent('https://images.pexels.com/photos/3645970/pexels-photo-3645970.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80')}`
                                  : a.image
                              }
                              secondaryFallbackSrc="/assets/images/no_image.png"
                            />
                          );
                        }
                        return (
                          <AppImage
                            src={a.image}
                            alt={a.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            priority
                            fallbackSrc="/assets/images/no_image.png"
                          />
                        );
                      })()}
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
