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
  title: 'Local Culture in Nigeria - CACBLAZE',
  description:
    'Discover local crafts, festivals, cuisine hubs, and cultural centers across Nigerian states.',
  keywords: 'Nigeria culture, festivals, crafts, cuisine, heritage, local culture, states',
};

type CultureItem = {
  id: string;
  state: string;
  city: string;
  name: string;
  image: string;
  highlights: string[];
};

const CULTURE_ITEMS: CultureItem[] = [
  {
    id: 'lagos_art_market',
    state: 'Lagos',
    city: 'Lagos',
    name: 'Lekki Arts & Crafts Market',
    image:
      'https://images.pexels.com/photos/10593880/pexels-photo-10593880.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    highlights: ['Handmade crafts', 'Local artists', 'Souvenirs'],
  },
  {
    id: 'lagos_nike_art_gallery',
    state: 'Lagos',
    city: 'Lekki',
    name: 'Nike Art Gallery',
    image:
      'https://images.pexels.com/photos/2235130/pexels-photo-2235130.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    highlights: ['Contemporary art', 'Textiles', 'Cultural exhibits'],
  },
  {
    id: 'abuja_cultural_center',
    state: 'FCT Abuja',
    city: 'Abuja',
    name: 'Cultural Center & Museum',
    image:
      'https://images.pexels.com/photos/204154/pexels-photo-204154.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    highlights: ['Traditional artifacts', 'Guided tours', 'Workshops'],
  },
  {
    id: 'rivers_food_hub',
    state: 'Rivers',
    city: 'Port Harcourt',
    name: 'Local Cuisine Hub',
    image:
      'https://images.pexels.com/photos/374885/pexels-photo-374885.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    highlights: ['Native dishes', 'Food markets', 'Cooking demos'],
  },
  {
    id: 'kano_dye_traditions',
    state: 'Kano',
    city: 'Kano',
    name: 'Indigo Dye Traditions',
    image:
      'https://images.pexels.com/photos/302902/pexels-photo-302902.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    highlights: ['Historic techniques', 'Local artisans', 'Textile heritage'],
  },
  {
    id: 'cross_river_festival',
    state: 'Cross River',
    city: 'Calabar',
    name: 'Calabar Festival Highlights',
    image:
      'https://images.pexels.com/photos/1838920/pexels-photo-1838920.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    highlights: ['Parades', 'Costumes', 'Street performances'],
  },
  {
    id: 'oyo_crafts_market',
    state: 'Oyo',
    city: 'Ibadan',
    name: 'Mokola Crafts Market',
    image:
      'https://images.pexels.com/photos/374885/pexels-photo-374885.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    highlights: ['Local textiles', 'Handmade goods', 'Community shops'],
  },
  {
    id: 'kaduna_kulture_square',
    state: 'Kaduna',
    city: 'Kaduna',
    name: 'Kulture Square',
    image:
      'https://images.pexels.com/photos/204154/pexels-photo-204154.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    highlights: ['Craft workshops', 'Music nights', 'Art fairs'],
  },
  {
    id: 'enugu_ngwo_art',
    state: 'Enugu',
    city: 'Enugu',
    name: 'Ngwo Art & Heritage',
    image:
      'https://images.pexels.com/photos/2235130/pexels-photo-2235130.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    highlights: ['Forest crafts', 'Community exhibits', 'Photo-friendly'],
  },
  {
    id: 'anambra_ogbunike_culture',
    state: 'Anambra',
    city: 'Ogbunike',
    name: 'Ogbunike Cultural Center',
    image:
      'https://images.pexels.com/photos/10593880/pexels-photo-10593880.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    highlights: ['Folklore shows', 'Craft markets', 'Guided tours'],
  },
  {
    id: 'delta_warri_cuisine',
    state: 'Delta',
    city: 'Warri',
    name: 'Warri Cuisine & Crafts',
    image:
      'https://images.pexels.com/photos/317115/pexels-photo-317115.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    highlights: ['Seafood culture', 'Local artisans', 'Evening fairs'],
  },
  {
    id: 'edo_benin_bronze',
    state: 'Edo',
    city: 'Benin City',
    name: 'Benin Bronze Street',
    image:
      'https://images.pexels.com/photos/302902/pexels-photo-302902.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    highlights: ['Bronze casting', 'Artisan lineage', 'Heritage tours'],
  },
  {
    id: 'ogun_abeokuta_textiles',
    state: 'Ogun',
    city: 'Abeokuta',
    name: 'Abeokuta Adire Center',
    image:
      'https://images.pexels.com/photos/2235130/pexels-photo-2235130.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    highlights: ['Adire fabrics', 'Dye workshops', 'Local designers'],
  },
  {
    id: 'osun_osogbo_arts',
    state: 'Osun',
    city: 'Osogbo',
    name: 'Osogbo Art Village',
    image:
      'https://images.pexels.com/photos/10593880/pexels-photo-10593880.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    highlights: ['Traditional arts', 'Festival crafts', 'Community studio'],
  },
  {
    id: 'imo_owerri_culture',
    state: 'Imo',
    city: 'Owerri',
    name: 'Owerri Culture Hub',
    image:
      'https://images.pexels.com/photos/374885/pexels-photo-374885.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    highlights: ['Dance and music', 'Handmade goods', 'Local food'],
  },
];

const buildStateCards = (state: string) => {
  const imgs = [
    'https://images.pexels.com/photos/2235130/pexels-photo-2235130.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    'https://images.pexels.com/photos/374885/pexels-photo-374885.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    'https://images.pexels.com/photos/10593880/pexels-photo-10593880.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    'https://images.pexels.com/photos/1838920/pexels-photo-1838920.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
  ];
  const titles = [
    `Festivals and events in ${state}`,
    `Local crafts and markets in ${state}`,
    `Cuisine and food culture in ${state}`,
    `Cultural centers and museums in ${state}`,
  ];
  return titles.map((t, i) => ({
    id: `state_${state}_${i}`,
    title: t,
    image: imgs[i % imgs.length],
    points: ['Authentic experiences', 'Community-driven', 'Photo-friendly'],
  }));
};

const LocalCulturePage = ({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  const raw = searchParams?.state;
  const selectedState = typeof raw === 'string' ? raw : Array.isArray(raw) ? raw[0] || '' : '';

  const breadcrumbItems = [
    { name: 'Home', href: '/homepage' },
    { name: 'Local Resources', href: '/local-resources' },
    { name: 'Local Culture', href: '/local-resources/local-culture' },
  ];

  const filtered =
    selectedState && selectedState.length > 0
      ? CULTURE_ITEMS.filter((a) => a.state === selectedState)
      : CULTURE_ITEMS;

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
                {selectedState ? `Local Culture in ${selectedState}` : 'Local Culture'}
              </h1>
              <p className="text-xl text-secondary mb-8 leading-relaxed">
                Explore festivals, crafts, cuisine hubs, and cultural centers across Nigerian
                states.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href={`/search?type=local-culture${selectedState ? `&state=${encodeURIComponent(selectedState)}` : ''}`}
                  className="inline-flex items-center gap-2 px-5 py-3 bg-primary text-white rounded-2xl font-semibold hover:bg-primary/90 transition-all hover-lift"
                >
                  Find Local Culture Near Me
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
            <h2 className="text-3xl font-bold text-foreground mb-8">Highlights</h2>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-3">
                <StateFilterSidebar
                  basePath="/local-resources/local-culture"
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
                        if (a.id === 'abuja_cultural_center') {
                          const override = `/api/image-proxy?url=${encodeURIComponent('https://images.unsplash.com/photo-1519677100393-aa6b074ad2ae?auto=format&fit=crop&w=1200&q=80')}`;
                          return (
                            <AppImage
                              src={override}
                              alt={a.name}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-500"
                              priority
                              fallbackSrc={`/api/image-proxy?url=${encodeURIComponent('https://images.pexels.com/photos/302902/pexels-photo-302902.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80')}`}
                              secondaryFallbackSrc="/assets/images/no_image.png"
                            />
                          );
                        }
                        if (a.id === 'lagos_nike_art_gallery') {
                          const override = `/api/image-proxy?url=${encodeURIComponent('https://images.unsplash.com/photo-1549880338-65ddcdfd017b?auto=format&fit=crop&w=1200&q=80')}`;
                          return (
                            <AppImage
                              src={override}
                              alt={a.name}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-500"
                              priority
                              fallbackSrc={`/api/image-proxy?url=${encodeURIComponent('https://images.pexels.com/photos/2235130/pexels-photo-2235130.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80')}`}
                              secondaryFallbackSrc="/assets/images/no_image.png"
                            />
                          );
                        }
                        if (a.id === 'enugu_ngwo_art') {
                          const override = `/api/image-proxy?url=${encodeURIComponent('https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?auto=format&fit=crop&w=1200&q=80')}`;
                          return (
                            <AppImage
                              src={override}
                              alt={a.name}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-500"
                              priority
                              fallbackSrc={`/api/image-proxy?url=${encodeURIComponent('https://images.pexels.com/photos/10593880/pexels-photo-10593880.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80')}`}
                              secondaryFallbackSrc="/assets/images/no_image.png"
                            />
                          );
                        }
                        if (a.id === 'delta_warri_cuisine') {
                          const override = `/api/image-proxy?url=${encodeURIComponent('https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1200&q=80')}`;
                          return (
                            <AppImage
                              src={override}
                              alt={a.name}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-500"
                              priority
                              fallbackSrc={`/api/image-proxy?url=${encodeURIComponent('https://images.pexels.com/photos/317115/pexels-photo-317115.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80')}`}
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

export default LocalCulturePage;
