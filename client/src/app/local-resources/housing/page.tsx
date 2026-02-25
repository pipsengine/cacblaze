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
  title: 'Housing Tips in Nigeria - CACBLAZE',
  description:
    'Practical housing tips across Nigerian states: renting, neighborhoods, agents, payments, and safety.',
  keywords: 'Nigeria housing, renting Nigeria, neighborhoods Nigeria, agents Nigeria, housing tips',
};

type HousingItem = {
  id: string;
  state: string;
  city: string;
  title: string;
  image: string;
  category: string;
  summary: string;
  points: string[];
};

const H1 =
  'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80';
const H2 =
  'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80';
const H3 =
  'https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80';
const H4 =
  'https://images.pexels.com/photos/271742/pexels-photo-271742.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80';
const H5 =
  'https://images.pexels.com/photos/259957/pexels-photo-259957.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80';

const ITEMS: HousingItem[] = [
  {
    id: 'lagos_renting',
    state: 'Lagos',
    city: 'Lagos',
    title: 'Renting in Lagos',
    image: H1,
    category: 'Renting',
    summary: 'Choose areas by commute, price, and safety.',
    points: [
      'Ask for total cost incl. agency/agreements',
      'Inspect at different times of day',
      'Check power and water schedule',
    ],
  },
  {
    id: 'abuja_renting',
    state: 'FCT Abuja',
    city: 'Abuja',
    title: 'Renting in Abuja',
    image: H2,
    category: 'Renting',
    summary: 'Wuse, Gwarinpa, Lugbe vary by budget.',
    points: [
      'Verify service charge details',
      'Confirm parking and security',
      'Ask neighbors for noise levels',
    ],
  },
  {
    id: 'ph_neighborhoods',
    state: 'Rivers',
    city: 'Port Harcourt',
    title: 'Neighborhoods in PH',
    image: H3,
    category: 'Neighborhoods',
    summary: 'GRA vs Ada George vs Choba.',
    points: ['Check flood history', 'Confirm road condition', 'Transit time to work'],
  },
  {
    id: 'ibadan_renting',
    state: 'Oyo',
    city: 'Ibadan',
    title: 'Renting in Ibadan',
    image: H4,
    category: 'Renting',
    summary: 'Bodija, Akobo, Ring Road options.',
    points: [
      'Water source and treatment',
      'Security and fencing',
      'Access to markets and hospitals',
    ],
  },
  {
    id: 'kano_renting',
    state: 'Kano',
    city: 'Kano',
    title: 'Renting in Kano',
    image: H5,
    category: 'Renting',
    summary: 'Nassarawa and Farm Centre.',
    points: ['Ventilation and heat', 'Check borehole quality', 'Proximity to work routes'],
  },
  {
    id: 'kaduna_neighborhoods',
    state: 'Kaduna',
    city: 'Kaduna',
    title: 'Neighborhoods in Kaduna',
    image: H1,
    category: 'Neighborhoods',
    summary: 'Barnawa, Ungwan Rimi, Kakuri.',
    points: ['Traffic at peak hours', 'Security presence', 'Market distance'],
  },
  {
    id: 'enugu_renting',
    state: 'Enugu',
    city: 'Enugu',
    title: 'Renting in Enugu',
    image: H2,
    category: 'Renting',
    summary: 'Independence Layout, New Haven.',
    points: ['Road lighting', 'Noise from nightlife', 'Water pressure checks'],
  },
  {
    id: 'edo_neighborhoods',
    state: 'Edo',
    city: 'Benin City',
    title: 'Neighborhoods in Benin',
    image: H3,
    category: 'Neighborhoods',
    summary: 'GRA, Sapele Road, Ugbowo.',
    points: ['Flood zones and drainage', 'Waste disposal', 'POS and cash availability'],
  },
  {
    id: 'plateau_renting',
    state: 'Plateau',
    city: 'Jos',
    title: 'Renting in Jos',
    image: H4,
    category: 'Renting',
    summary: 'Rayfield, Bukuru, Terminus.',
    points: ['Cold‑weather insulation', 'Window sealing', 'Transport availability'],
  },
  {
    id: 'kwara_neighborhoods',
    state: 'Kwara',
    city: 'Ilorin',
    title: 'Neighborhoods in Ilorin',
    image: H5,
    category: 'Neighborhoods',
    summary: 'Tanke, GRA, Pipeline.',
    points: ['Student crowd and term times', 'Power supply variation', 'Distance to shops'],
  },
  {
    id: 'crossriver_renting',
    state: 'Cross River',
    city: 'Calabar',
    title: 'Renting in Calabar',
    image: H1,
    category: 'Renting',
    summary: 'Marina, State Housing, Parliamentary.',
    points: ['Mosquito control strategies', 'Water treatment filters', 'Proximity to workplaces'],
  },
  {
    id: 'akwaibom_neighborhoods',
    state: 'Akwa Ibom',
    city: 'Uyo',
    title: 'Neighborhoods in Uyo',
    image: H2,
    category: 'Neighborhoods',
    summary: 'Ewet Housing, Shelter Afrique.',
    points: ['Security checks and guards', 'Street lighting', 'Road access quality'],
  },
  {
    id: 'imo_renting',
    state: 'Imo',
    city: 'Owerri',
    title: 'Renting in Owerri',
    image: H3,
    category: 'Renting',
    summary: 'New Owerri, Ikenegbu, World Bank.',
    points: ['Service charges and levies', 'Road condition in rainy season', 'Noise and nightlife'],
  },
  {
    id: 'ogun_neighborhoods',
    state: 'Ogun',
    city: 'Abeokuta',
    title: 'Neighborhoods in Abeokuta',
    image: H4,
    category: 'Neighborhoods',
    summary: 'GRA, Oke‑Ilewo, Lafenwa.',
    points: ['Market and schools proximity', 'Borehole vs water board', 'Security at night'],
  },
  {
    id: 'anambra_renting',
    state: 'Anambra',
    city: 'Awka',
    title: 'Renting in Awka',
    image: H5,
    category: 'Renting',
    summary: 'Ifite, Aroma, Udoka.',
    points: ['Student demand impact on prices', 'Landlord policies', 'Parking space availability'],
  },
];

const buildStateCards = (state: string) => {
  const imgs = [H1, H2, H3, H4];
  const titles = [
    `Renting basics in ${state}`,
    `Neighborhood picks in ${state}`,
    `Agent and fees in ${state}`,
    `Safety and utilities in ${state}`,
  ];
  return titles.map((t, i) => ({
    id: `state_${state}_${i}`,
    title: t,
    image: imgs[i % imgs.length],
    points: ['Inspect at peak times', 'Confirm service charges', 'Check water/power cycle'],
  }));
};

const HousingPage = ({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  const raw = searchParams?.state;
  const selectedState = typeof raw === 'string' ? raw : Array.isArray(raw) ? raw[0] || '' : '';

  const breadcrumbItems = [
    { name: 'Home', href: '/homepage' },
    { name: 'Local Resources', href: '/local-resources' },
    { name: 'Housing', href: '/local-resources/housing' },
  ];

  const filtered =
    selectedState && selectedState.length > 0
      ? ITEMS.filter((e) => e.state === selectedState)
      : ITEMS;

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
                {selectedState ? `Housing Tips in ${selectedState}` : 'Housing Tips in Nigeria'}
              </h1>
              <p className="text-xl text-secondary mb-8 leading-relaxed">
                Practical guidance for renting, choosing neighborhoods, and managing costs. Compare
                areas by commute, utilities, and safety across Nigerian cities.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href={`/search?type=housing${selectedState ? `&state=${encodeURIComponent(selectedState)}` : ''}`}
                  className="inline-flex items-center gap-2 px-5 py-3 bg-primary text-white rounded-2xl font-semibold hover:bg-primary/90 transition-all hover-lift"
                >
                  Explore Housing Nearby
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
            <h2 className="text-3xl font-bold text-foreground mb-8">City & Neighborhood Tips</h2>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-3">
                <StateFilterSidebar
                  basePath="/local-resources/housing"
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

        <section className="py-16 bg-gradient-to-br from-muted/30 to-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="rounded-3xl border border-gray-200 bg-white p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon name="ClipboardDocumentCheckIcon" size={20} className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Agent & Payment Tips</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-secondary">
                    <Icon name="WalletIcon" size={18} className="text-primary mt-0.5" />
                    Confirm agency and agreement fees in writing before payment.
                  </li>
                  <li className="flex items-start gap-3 text-secondary">
                    <Icon name="DocumentCheckIcon" size={18} className="text-primary mt-0.5" />
                    Verify landlord details; request receipts and tenancy documents.
                  </li>
                  <li className="flex items-start gap-3 text-secondary">
                    <Icon name="CreditCardIcon" size={18} className="text-primary mt-0.5" />
                    Use traceable transfers; avoid cash for large amounts where possible.
                  </li>
                  <li className="flex items-start gap-3 text-secondary">
                    <Icon name="InformationCircleIcon" size={18} className="text-primary mt-0.5" />
                    Ask about service charges, waste disposal, and security levies.
                  </li>
                </ul>
              </div>

              <div className="rounded-3xl border border-gray-200 bg-white p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
                    <Icon name="ShieldCheckIcon" size={20} className="text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Utilities & Safety</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-secondary">
                    <Icon name="BoltIcon" size={18} className="text-emerald-600 mt-0.5" />
                    Check power schedule and alternative supply (generator or inverter).
                  </li>
                  <li className="flex items-start gap-3 text-secondary">
                    <Icon name="BeakerIcon" size={18} className="text-emerald-600 mt-0.5" />
                    Test water pressure and quality; consider filtration if needed.
                  </li>
                  <li className="flex items-start gap-3 text-secondary">
                    <Icon name="MapPinIcon" size={18} className="text-emerald-600 mt-0.5" />
                    Inspect flood risk and drainage; avoid low‑lying areas when possible.
                  </li>
                  <li className="flex items-start gap-3 text-secondary">
                    <Icon name="BellAlertIcon" size={18} className="text-emerald-600 mt-0.5" />
                    Confirm security presence and lighting; check neighborhood alerts.
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

export default HousingPage;
