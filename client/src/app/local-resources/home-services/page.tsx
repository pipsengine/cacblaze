import { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';
import Breadcrumb from '@/components/common/Breadcrumb';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import StateFilterSidebar from '@/components/common/StateFilterSidebar';
import { getContextualImage } from '@/utils/imageService';

export const metadata: Metadata = {
  title: 'Home Services in Nigeria - CACBLAZE',
  description: 'Find plumbers, electricians, cleaning, and repair services across Nigerian states.',
  keywords: 'Nigeria home services, plumbers, electricians, cleaning, repair, states',
};

type HomeService = {
  id: string;
  state: string;
  city: string;
  name: string;
  image: string;
  serviceType: string;
  availability: string;
  highlights: string[];
};

const HOME_SERVICES: HomeService[] = [
  {
    id: 'lagos_vi_plumber',
    state: 'Lagos',
    city: 'Lagos',
    name: 'VI Plumbing Pros',
    image:
      'https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    serviceType: 'Plumbing',
    availability: 'Same-day · 8:00 AM – 6:00 PM',
    highlights: ['Leak repair', 'Pipe installs', 'Emergency callouts'],
  },
  {
    id: 'abuja_wuse_electric',
    state: 'FCT Abuja',
    city: 'Abuja',
    name: 'Wuse Electric Care',
    image:
      'https://images.pexels.com/photos/10593880/pexels-photo-10593880.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    serviceType: 'Electrical',
    availability: 'Next-day · 9:00 AM – 5:00 PM',
    highlights: ['Wiring', 'Appliance install', 'Safety checks'],
  },
  {
    id: 'rivers_ph_gra_cleaners',
    state: 'Rivers',
    city: 'Port Harcourt',
    name: 'GRA Prime Cleaners',
    image:
      'https://images.pexels.com/photos/6195097/pexels-photo-6195097.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    serviceType: 'Cleaning',
    availability: 'Daily · 7:00 AM – 7:00 PM',
    highlights: ['Home deep clean', 'Move-in/out', 'Eco supplies'],
  },
  {
    id: 'oyo_ibadan_handyman',
    state: 'Oyo',
    city: 'Ibadan',
    name: 'Ibadan HandyFix',
    image:
      'https://images.pexels.com/photos/1028935/pexels-photo-1028935.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    serviceType: 'Repairs',
    availability: 'Weekends · 10:00 AM – 4:00 PM',
    highlights: ['Furniture repair', 'Mounting', 'Minor carpentry'],
  },
  {
    id: 'kano_pipe_masters',
    state: 'Kano',
    city: 'Kano',
    name: 'Kano Pipe Masters',
    image:
      'https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    serviceType: 'Plumbing',
    availability: 'Same-day · 9:00 AM – 5:00 PM',
    highlights: ['Leak fix', 'Bathroom installs', 'Emergency'],
  },
  {
    id: 'kaduna_wire_pros',
    state: 'Kaduna',
    city: 'Kaduna',
    name: 'Kaduna Wire Pros',
    image:
      'https://images.pexels.com/photos/10593880/pexels-photo-10593880.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    serviceType: 'Electrical',
    availability: 'Next-day · 9:00 AM – 4:00 PM',
    highlights: ['Wiring', 'Safety checks', 'Appliance install'],
  },
  {
    id: 'enugu_clean_team',
    state: 'Enugu',
    city: 'Enugu',
    name: 'Enugu Clean Team',
    image:
      'https://images.pexels.com/photos/6195097/pexels-photo-6195097.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    serviceType: 'Cleaning',
    availability: 'Daily · 8:00 AM – 6:00 PM',
    highlights: ['Deep clean', 'Eco supplies', 'Move-in/out'],
  },
  {
    id: 'anambra_awka_fixers',
    state: 'Anambra',
    city: 'Awka',
    name: 'Awka Fixers',
    image:
      'https://images.pexels.com/photos/1028935/pexels-photo-1028935.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    serviceType: 'Repairs',
    availability: 'Weekends · 11:00 AM – 4:00 PM',
    highlights: ['Mounting', 'Carpentry', 'Furniture repair'],
  },
  {
    id: 'delta_asaba_plumb_care',
    state: 'Delta',
    city: 'Asaba',
    name: 'Asaba Plumb Care',
    image:
      'https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    serviceType: 'Plumbing',
    availability: 'Same-day · 8:00 AM – 6:00 PM',
    highlights: ['Leaks', 'Installations', 'Emergencies'],
  },
  {
    id: 'edo_benin_electric',
    state: 'Edo',
    city: 'Benin City',
    name: 'Benin Electric',
    image:
      'https://images.pexels.com/photos/10593880/pexels-photo-10593880.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    serviceType: 'Electrical',
    availability: 'Weekdays · 9:00 AM – 5:00 PM',
    highlights: ['Wiring', 'Installations', 'Safety checks'],
  },
  {
    id: 'ogun_abeokuta_cleaners',
    state: 'Ogun',
    city: 'Abeokuta',
    name: 'Abeokuta Cleaners',
    image:
      'https://images.pexels.com/photos/6195097/pexels-photo-6195097.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    serviceType: 'Cleaning',
    availability: 'Daily · 7:00 AM – 7:00 PM',
    highlights: ['Deep clean', 'Move-in/out', 'Eco supplies'],
  },
  {
    id: 'osun_osogbo_handyman',
    state: 'Osun',
    city: 'Osogbo',
    name: 'Osogbo Handyman',
    image:
      'https://images.pexels.com/photos/1028935/pexels-photo-1028935.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    serviceType: 'Repairs',
    availability: 'Weekends · 10:00 AM – 3:00 PM',
    highlights: ['Mounting', 'Furniture', 'Minor carpentry'],
  },
  {
    id: 'kwara_ilorin_plumbers',
    state: 'Kwara',
    city: 'Ilorin',
    name: 'Ilorin Plumbers',
    image:
      'https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    serviceType: 'Plumbing',
    availability: 'Same-day · 9:00 AM – 5:00 PM',
    highlights: ['Leaks', 'Installs', 'Emergency'],
  },
  {
    id: 'plateau_jos_electricals',
    state: 'Plateau',
    city: 'Jos',
    name: 'Jos Electricals',
    image:
      'https://images.pexels.com/photos/10593880/pexels-photo-10593880.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    serviceType: 'Electrical',
    availability: 'Weekdays · 9:00 AM – 4:00 PM',
    highlights: ['Wiring', 'Installations', 'Checks'],
  },
  {
    id: 'imo_owerri_clean_care',
    state: 'Imo',
    city: 'Owerri',
    name: 'Owerri Clean Care',
    image:
      'https://images.pexels.com/photos/6195097/pexels-photo-6195097.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    serviceType: 'Cleaning',
    availability: 'Daily · 8:00 AM – 6:00 PM',
    highlights: ['Deep clean', 'Move-in/out', 'Eco supplies'],
  },
];

const buildStateCards = (state: string) => {
  const imgs = [
    'https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    'https://images.pexels.com/photos/10593880/pexels-photo-10593880.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    'https://images.pexels.com/photos/6195097/pexels-photo-6195097.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    'https://images.pexels.com/photos/1028935/pexels-photo-1028935.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
  ];
  const titles = [
    `Plumbers in ${state}`,
    `Electricians in ${state}`,
    `Home cleaning in ${state}`,
    `Repairs and handyman in ${state}`,
  ];
  return titles.map((t, i) => ({
    id: `state_${state}_${i}`,
    title: t,
    image: imgs[i % imgs.length],
    points: ['Availability', 'Service types', 'Rates info'],
  }));
};

const HomeServicesPage = ({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  const raw = searchParams?.state;
  const selectedState = typeof raw === 'string' ? raw : Array.isArray(raw) ? raw[0] || '' : '';

  const breadcrumbItems = [
    { name: 'Home', href: '/homepage' },
    { name: 'Local Resources', href: '/local-resources' },
    { name: 'Home Services', href: '/local-resources/home-services' },
  ];

  const filtered =
    selectedState && selectedState.length > 0
      ? HOME_SERVICES.filter((e) => e.state === selectedState)
      : HOME_SERVICES;

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
                {selectedState ? `Home Services in ${selectedState}` : 'Home Services'}
              </h1>
              <p className="text-xl text-secondary mb-8 leading-relaxed">
                Find trusted local pros for plumbing, electrical, cleaning, and repairs.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href={`/search?type=home-services${selectedState ? `&state=${encodeURIComponent(selectedState)}` : ''}`}
                  className="inline-flex items-center gap-2 px-5 py-3 bg-primary text-white rounded-2xl font-semibold hover:bg-primary/90 transition-all hover-lift"
                >
                  Find Home Services Near Me
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
            <h2 className="text-3xl font-bold text-foreground mb-8">Featured Home Services</h2>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-3">
                <StateFilterSidebar
                  basePath="/local-resources/home-services"
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
                      {(() => {
                        if (e.id === 'enugu_clean_team') {
                          const contextual = getContextualImage({
                            category: 'home',
                            title: `${e.name} ${e.highlights.join(' ')}`,
                            alt: 'Deep clean, eco supplies, move-in/out',
                            preferCurated: true,
                          });
                          const pexelsFallback = `/api/image-proxy?url=${encodeURIComponent('https://images.pexels.com/photos/6195097/pexels-photo-6195097.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80')}`;
                          const unsplashFallback = `/api/image-proxy?url=${encodeURIComponent('https://images.unsplash.com/photo-1581579188871-45ea61f2a0c8?auto=format&fit=crop&w=1200&q=80')}`;
                          return (
                            <AppImage
                              src={contextual.src}
                              alt={contextual.alt}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-500"
                              priority
                              fallbackSrc={unsplashFallback}
                              secondaryFallbackSrc={pexelsFallback}
                            />
                          );
                        }
                        if (e.id === 'rivers_ph_gra_cleaners') {
                          const svg = encodeURIComponent(
                            `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 630'>
                              <defs>
                                <linearGradient id='g' x1='0' x2='0' y1='0' y2='1'>
                                  <stop offset='0%' stop-color='#e6f3ff'/>
                                  <stop offset='100%' stop-color='#cde9ff'/>
                                </linearGradient>
                              </defs>
                              <rect width='1200' height='630' fill='url(#g)'/>
                              <g fill='none' stroke='#2a6fde' stroke-width='20'>
                                <rect x='180' y='180' rx='40' width='360' height='270' fill='#ffffff' stroke='#2a6fde'/>
                                <path d='M540 270 L640 200 L720 260 L640 320 Z' fill='#2a6fde' stroke='#2a6fde'/>
                                <path d='M720 260 L860 240 L880 360 L740 380 Z' fill='#6bb8ff' stroke='#2a6fde'/>
                                <circle cx='420' cy='260' r='30' fill='#6bb8ff' stroke='#2a6fde'/>
                                <circle cx='460' cy='220' r='18' fill='#6bb8ff' stroke='#2a6fde'/>
                                <circle cx='380' cy='220' r='22' fill='#6bb8ff' stroke='#2a6fde'/>
                              </g>
                              <text x='60' y='580' fill='#1b3f8b' font-size='42' font-family='Inter, Arial, sans-serif'>
                                Home deep clean · Move-in/out · Eco supplies
                              </text>
                            </svg>`
                          );
                          const override = `data:image/svg+xml;utf8,${svg}`;
                          return (
                            <AppImage
                              src={override}
                              alt={e.name}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-500"
                              priority
                              fallbackSrc={`/api/image-proxy?url=${encodeURIComponent('https://images.pexels.com/photos/6195097/pexels-photo-6195097.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80')}`}
                              secondaryFallbackSrc="/assets/images/no_image.png"
                            />
                          );
                        }
                        if (e.id === 'ogun_abeokuta_cleaners') {
                          const contextual = getContextualImage({
                            category: 'home',
                            title: `${e.name} ${e.highlights.join(' ')}`,
                            alt: 'Home cleaning, move-in/out, eco supplies',
                            preferCurated: true,
                          });
                          return (
                            <AppImage
                              src={contextual.src}
                              alt={contextual.alt}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-500"
                              priority
                              fallbackSrc={`/api/image-proxy?url=${encodeURIComponent(e.image)}`}
                              secondaryFallbackSrc="/assets/images/no_image.png"
                            />
                          );
                        }
                        if (e.id === 'imo_owerri_clean_care') {
                          const contextual = getContextualImage({
                            category: 'home',
                            title: `${e.name} ${e.highlights.join(' ')}`,
                            alt: 'Home deep clean, move-in/out, eco supplies',
                            preferCurated: true,
                          });
                          return (
                            <AppImage
                              src={contextual.src}
                              alt={contextual.alt}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-500"
                              priority
                              fallbackSrc={`/api/image-proxy?url=${encodeURIComponent(e.image)}`}
                              secondaryFallbackSrc="/assets/images/no_image.png"
                            />
                          );
                        }
                        return (
                          <AppImage
                            src={e.image}
                            alt={e.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            priority
                            fallbackSrc="/assets/images/no_image.png"
                          />
                        );
                      })()}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                      <div className="absolute bottom-5 left-5 right-5">
                        <div className="text-white text-xs">
                          {e.city}, {e.state} · {e.availability}
                        </div>
                        <h3 className="text-2xl font-bold text-white">{e.name}</h3>
                        <div className="text-white text-xs mt-1">{e.serviceType}</div>
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

export default HomeServicesPage;
