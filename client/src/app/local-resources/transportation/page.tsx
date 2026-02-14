import { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';
import Breadcrumb from '@/components/common/Breadcrumb';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import StateFilterSidebar from '@/components/common/StateFilterSidebar';
import { NIGERIA_STATES } from '@/data/nigeria-states';

export const metadata: Metadata = {
  title: 'Transportation Guides in Nigeria - CACBLAZE',
  description: 'City transport tips across Nigerian states: buses, taxis, rideshare, intercity, payments, and safety.',
  keywords: 'transport Nigeria, buses Nigeria, taxis Nigeria, rideshare Nigeria, intercity transport Nigeria',
};

type TransportItem = {
  id: string;
  state: string;
  city: string;
  title: string;
  image: string;
  category: string;
  summary: string;
  points: string[];
};

const T1 = 'https://images.pexels.com/photos/3671142/pexels-photo-3671142.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80';
const T2 = 'https://images.pexels.com/photos/3860258/pexels-photo-3860258.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80';
const T3 = 'https://images.pexels.com/photos/21014/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1200&q=80';
const T4 = 'https://images.pexels.com/photos/144429/pexels-photo-144429.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80';
const T5 = 'https://images.pexels.com/photos/949193/pexels-photo-949193.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80';

const ITEMS: TransportItem[] = [
  { id: 'lagos_commute', state: 'Lagos', city: 'Lagos', title: 'Commuting in Lagos', image: T1, category: 'City Transport', summary: 'BRT, danfo, taxis and rideshare.', points: ['Peak hours 6:30–9:30, 4:30–8:30', 'Use BRT for island–mainland', 'Confirm surge pricing in apps'] },
  { id: 'abuja_commute', state: 'FCT Abuja', city: 'Abuja', title: 'Commuting in Abuja', image: T2, category: 'City Transport', summary: 'Taxis, shuttle buses, rideshare.', points: ['Plan around ministries closing time', 'Check Wuse/Area 1 routes', 'Ride‑hail for late evenings'] },
  { id: 'ph_commute', state: 'Rivers', city: 'Port Harcourt', title: 'PH Transport', image: T3, category: 'City Transport', summary: 'Shuttles, keke, taxis.', points: ['Cash ready for short trips', 'Night routes limited', 'Confirm fares before boarding'] },
  { id: 'ibadan_commute', state: 'Oyo', city: 'Ibadan', title: 'Ibadan Transport', image: T4, category: 'City Transport', summary: 'Taxis, buses, keke.', points: ['Bodija–UI shuttles common', 'Avoid peak Ring Road traffic', 'Use rideshare during rain'] },
  { id: 'kano_commute', state: 'Kano', city: 'Kano', title: 'Kano Transport', image: T5, category: 'City Transport', summary: 'Keke, taxis, buses.', points: ['Confirm routes in Hausa/English', 'Carry small change', 'Check heat times for comfort'] },
  { id: 'kaduna_commute', state: 'Kaduna', city: 'Kaduna', title: 'Kaduna Transport', image: T1, category: 'City Transport', summary: 'Buses, taxis.', points: ['Barnawa shuttles frequent', 'Verify POS availability', 'Plan for evening safety'] },
  { id: 'enugu_commute', state: 'Enugu', city: 'Enugu', title: 'Enugu Transport', image: T2, category: 'City Transport', summary: 'Keke, taxis.', points: ['Independence Layout routes', 'Night transport limited', 'Carry cash or transfers'] },
  { id: 'edo_commute', state: 'Edo', city: 'Benin City', title: 'Benin Transport', image: T3, category: 'City Transport', summary: 'Buses, taxis.', points: ['GRA and Ugbowo shuttles', 'Agree price beforehand', 'Avoid flood‑prone routes'] },
  { id: 'plateau_commute', state: 'Plateau', city: 'Jos', title: 'Jos Transport', image: T4, category: 'City Transport', summary: 'Buses, taxis.', points: ['Cold weather prep', 'Early closures in some areas', 'Use rideshare where available'] },
  { id: 'kwara_commute', state: 'Kwara', city: 'Ilorin', title: 'Ilorin Transport', image: T5, category: 'City Transport', summary: 'Taxis, keke.', points: ['Tanke student routes busy', 'Transfers accepted widely', 'Confirm destination landmarks'] },
  { id: 'crossriver_intercity', state: 'Cross River', city: 'Calabar', title: 'Intercity from Calabar', image: T1, category: 'Intercity', summary: 'Coach to Uyo/PH.', points: ['Book earlier on weekends', 'Check luggage policies', 'Arrive 30–45 min early'] },
  { id: 'akwaibom_intercity', state: 'Akwa Ibom', city: 'Uyo', title: 'Intercity from Uyo', image: T2, category: 'Intercity', summary: 'Coach to Calabar/PH.', points: ['Confirm seat type', 'Bring snacks/water', 'Use verified terminals'] },
  { id: 'imo_commute', state: 'Imo', city: 'Owerri', title: 'Owerri Transport', image: T3, category: 'City Transport', summary: 'Taxis, keke.', points: ['New Owerri routes', 'Agree pricing in advance', 'Prefer transfers over cash at night'] },
  { id: 'ogun_commute', state: 'Ogun', city: 'Abeokuta', title: 'Abeokuta Transport', image: T4, category: 'City Transport', summary: 'Taxis, buses.', points: ['GRA and Oke‑Ilewo routes', 'Check evening schedules', 'Carry small change'] },
  { id: 'anambra_commute', state: 'Anambra', city: 'Awka', title: 'Awka Transport', image: T5, category: 'City Transport', summary: 'Shuttles, keke.', points: ['Student term crowds', 'Use landmarks when directing', 'Confirm fares'] },
];

const buildStateCards = (state: string) => {
  const imgs = [T1, T2, T3, T4];
  const titles = [
    `City routes in ${state}`,
    `Taxi and rideshare in ${state}`,
    `Intercity options in ${state}`,
    `Payments and safety in ${state}`,
  ];
  return titles.map((t, i) => ({
    id: `state_${state}_${i}`,
    title: t,
    image: imgs[i % imgs.length],
    points: ['Agree fares before boarding', 'Use traceable payments', 'Avoid late travel alone'],
  }));
};

const TransportationPage = ({ searchParams }: { searchParams?: { [key: string]: string | string[] | undefined } }) => {
  const raw = searchParams?.state;
  const selectedState = typeof raw === 'string' ? raw : Array.isArray(raw) ? raw[0] || '' : '';

  const breadcrumbItems = [
    { name: 'Home', href: '/homepage' },
    { name: 'Local Resources', href: '/local-resources' },
    { name: 'Transportation', href: '/local-resources/transportation' },
  ];

  const filtered = selectedState && selectedState.length > 0 ? ITEMS.filter((e) => e.state === selectedState) : ITEMS;
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
                Living & Transport
              </span>
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
                {selectedState ? `Transportation in ${selectedState}` : 'Transportation Guides in Nigeria'}
              </h1>
              <p className="text-xl text-secondary mb-8 leading-relaxed">
                Understand city routes, taxis and rideshare, and intercity travel across Nigerian states. Learn fares,
                payments, and safety practices.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href={`/search?type=transportation${selectedState ? `&state=${encodeURIComponent(selectedState)}` : ''}`}
                  className="inline-flex items-center gap-2 px-5 py-3 bg-primary text-white rounded-2xl font-semibold hover:bg-primary/90 transition-all hover-lift"
                >
                  Explore Transport Nearby
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
            <h2 className="text-3xl font-bold text-foreground mb-8">City & Intercity Tips</h2>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-3">
                <StateFilterSidebar
                  basePath="/local-resources/transportation"
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
                        alt={e.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        priority
                        fallbackSrc="/assets/images/no_image.png"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                      <div className="absolute bottom-5 left-5 right-5">
                        <div className="text-white text-xs">
                          {e.city}, {e.state} · {e.category}
                        </div>
                        <h3 className="text-2xl font-bold text-white">{e.title}</h3>
                        <div className="text-white text-xs mt-1">{e.summary}</div>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="space-y-2">
                        {e.points.map((h, idx) => (
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

        <section className="py-16 bg-gradient-to-br from-muted/30 to-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="rounded-3xl border border-gray-200 bg-white p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon name="ClipboardDocumentCheckIcon" size={20} className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Fares & Payments</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-secondary">
                    <Icon name="CurrencyNairaIcon" size={18} className="text-primary mt-0.5" />
                    Agree fares before boarding; confirm if surge applies in ride‑hail apps.
                  </li>
                  <li className="flex items-start gap-3 text-secondary">
                    <Icon name="CreditCardIcon" size={18} className="text-primary mt-0.5" />
                    Prefer transfers or POS over cash at night; keep small change for short trips.
                  </li>
                  <li className="flex items-start gap-3 text-secondary">
                    <Icon name="QueueListIcon" size={18} className="text-primary mt-0.5" />
                    Request receipts for intercity travel; check luggage fees and policies.
                  </li>
                </ul>
              </div>

              <div className="rounded-3xl border border-gray-200 bg-white p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
                    <Icon name="ShieldCheckIcon" size={20} className="text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Safety & Timing</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-secondary">
                    <Icon name="ClockIcon" size={18} className="text-emerald-600 mt-0.5" />
                    Plan around peak hours; allow extra time in rain or during events.
                  </li>
                  <li className="flex items-start gap-3 text-secondary">
                    <Icon name="MapPinIcon" size={18} className="text-emerald-600 mt-0.5" />
                    Share trip details with trusted contacts; avoid isolated drop‑off spots late at night.
                  </li>
                  <li className="flex items-start gap-3 text-secondary">
                    <Icon name="InformationCircleIcon" size={18} className="text-emerald-600 mt-0.5" />
                    For intercity travel, use verified terminals and arrive early to avoid last‑minute changes.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default TransportationPage;
