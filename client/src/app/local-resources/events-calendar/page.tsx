import { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';
import Breadcrumb from '@/components/common/Breadcrumb';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import StateFilterSidebar from '@/components/common/StateFilterSidebar';

export const metadata: Metadata = {
  title: 'Events Calendar in Nigeria - CACBLAZE',
  description:
    'Discover upcoming events, festivals, meetups, and exhibitions across Nigerian states.',
  keywords:
    'Nigeria events, festivals, meetups, exhibitions, local calendar, states',
};

type EventItem = {
  id: string;
  state: string;
  city: string;
  name: string;
  image: string;
  date: string;
  venue: string;
  highlights: string[];
};

const EVENTS: EventItem[] = [
  {
    id: 'lagos_art_fair',
    state: 'Lagos',
    city: 'Lagos',
    name: 'Lagos Art Fair',
    image:
      'https://images.pexels.com/photos/2235130/pexels-photo-2235130.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    date: '2026-03-12',
    venue: 'Victoria Island',
    highlights: ['Contemporary galleries', 'Live demos', 'Workshops'],
  },
  {
    id: 'abuja_food_fest',
    state: 'FCT Abuja',
    city: 'Abuja',
    name: 'Abuja Food Festival',
    image:
      'https://images.pexels.com/photos/374885/pexels-photo-374885.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    date: '2026-04-05',
    venue: 'Central Park',
    highlights: ['Local dishes', 'Cooking shows', 'Vendors'],
  },
  {
    id: 'ph_tech_meetup',
    state: 'Rivers',
    city: 'Port Harcourt',
    name: 'Port Harcourt Tech Meetup',
    image:
      'https://images.pexels.com/photos/3184636/pexels-photo-3184636.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    date: '2026-03-22',
    venue: 'GRA Conference Hub',
    highlights: ['Talks', 'Networking', 'Startups'],
  },
  {
    id: 'calabar_carnival',
    state: 'Cross River',
    city: 'Calabar',
    name: 'Calabar Carnival',
    image:
      'https://images.pexels.com/photos/1838920/pexels-photo-1838920.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    date: '2026-12-20',
    venue: 'City Center',
    highlights: ['Parades', 'Costumes', 'Street performances'],
  },
];

const buildStateCards = (state: string) => {
  const imgs = [
    'https://images.pexels.com/photos/1838920/pexels-photo-1838920.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    'https://images.pexels.com/photos/3184636/pexels-photo-3184636.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    'https://images.pexels.com/photos/2235130/pexels-photo-2235130.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    'https://images.pexels.com/photos/2232/vegetables-meal-food-kitchen.jpg?auto=compress&cs=tinysrgb&w=1200&q=80',
  ];
  const titles = [
    `Upcoming festivals in ${state}`,
    `Community meetups in ${state}`,
    `Exhibitions and fairs in ${state}`,
    `City events and shows in ${state}`,
  ];
  return titles.map((t, i) => ({
    id: `state_${state}_${i}`,
    title: t,
    image: imgs[i % imgs.length],
    points: ['Dates and venues', 'Tickets info', 'Family-friendly options'],
  }));
};

const EventsCalendarPage = ({
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
    { name: 'Events Calendar', href: '/local-resources/events-calendar' },
  ];

  const filtered =
    selectedState && selectedState.length > 0
      ? EVENTS.filter((e) => e.state === selectedState)
      : EVENTS;

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
                {selectedState ? `Events in ${selectedState}` : 'Events Calendar'}
              </h1>
              <p className="text-xl text-secondary mb-8 leading-relaxed">
                See upcoming festivals, meetups, and exhibitions across Nigerian states.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href={`/search?type=events-calendar${selectedState ? `&state=${encodeURIComponent(selectedState)}` : ''}`}
                  className="inline-flex items-center gap-2 px-5 py-3 bg-primary text-white rounded-2xl font-semibold hover:bg-primary/90 transition-all hover-lift"
                >
                  Find Events Near Me
                  <Icon name="ArrowRightIcon" size={18} className="text-white" />
                </Link>
                <Link
                  href="/local-resources/local-culture"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-white text-primary rounded-2xl font-semibold border border-primary/20 hover:bg-primary/5 transition-all"
                >
                  See Local Culture
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8">Upcoming Events</h2>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-3">
                <StateFilterSidebar
                  basePath="/local-resources/events-calendar"
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

export default EventsCalendarPage;
