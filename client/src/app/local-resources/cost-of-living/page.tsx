import { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';
import Breadcrumb from '@/components/common/Breadcrumb';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import StateFilterSidebar from '@/components/common/StateFilterSidebar';

export const metadata: Metadata = {
  title: 'Cost of Living in Nigeria - CACBLAZE',
  description:
    'Compare cost of living across Nigerian states: housing, food, transport, utilities.',
  keywords:
    'cost of living Nigeria, housing prices, food costs, transport costs, utilities, states',
};

type CostItem = {
  id: string;
  state: string;
  city: string;
  title: string;
  image: string;
  category: string;
  summary: string;
  points: string[];
};

const C1 = 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80';
const C2 = 'https://images.pexels.com/photos/4397899/pexels-photo-4397899.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80';
const C3 = 'https://images.pexels.com/photos/3740791/pexels-photo-3740791.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80';
const C4 = 'https://images.pexels.com/photos/3184192/pexels-photo-3184192.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80';
const C5 = 'https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80';

const ITEMS: CostItem[] = [
  { id: 'lagos_housing', state: 'Lagos', city: 'Lagos', title: 'Lagos Housing Snapshot', image: C1, category: 'Housing', summary: 'Apartment rents and starter home ranges.', points: ['1-bed: ₦900k–₦1.6m', '2-bed: ₦1.4m–₦2.5m', 'Starter home: ₦45m+'] },
  { id: 'abuja_housing', state: 'FCT Abuja', city: 'Abuja', title: 'Abuja Housing Snapshot', image: C1, category: 'Housing', summary: 'Wuse, Gwarinpa, Lugbe averages.', points: ['1-bed: ₦800k–₦1.4m', '2-bed: ₦1.3m–₦2.2m', 'Starter home: ₦40m+'] },
  { id: 'rivers_food', state: 'Rivers', city: 'Port Harcourt', title: 'PH Food Basket', image: C2, category: 'Food', summary: 'Monthly groceries for a small family.', points: ['Rice 50kg: ₦58k–₦70k', 'Protein: ₦60k–₦90k', 'Produce: ₦35k–₦60k'] },
  { id: 'oyo_transport', state: 'Oyo', city: 'Ibadan', title: 'Ibadan Transport', image: C3, category: 'Transport', summary: 'Commute via taxis and buses.', points: ['Daily: ₦700–₦1,800', 'Monthly: ₦20k–₦45k', 'Fuel litre: ₦720–₦820'] },
  { id: 'kano_utilities', state: 'Kano', city: 'Kano', title: 'Kano Utilities', image: C4, category: 'Utilities', summary: 'Power, water, internet estimates.', points: ['Power: ₦15k–₦35k', 'Water: ₦4k–₦8k', 'Internet: ₦15k–₦25k'] },
  { id: 'kaduna_food', state: 'Kaduna', city: 'Kaduna', title: 'Kaduna Food Basket', image: C2, category: 'Food', summary: 'Groceries baseline.', points: ['Staples: ₦40k–₦55k', 'Protein: ₦40k–₦70k', 'Produce: ₦25k–₦45k'] },
  { id: 'enugu_transport', state: 'Enugu', city: 'Enugu', title: 'Enugu Transport', image: C3, category: 'Transport', summary: 'Daily commute averages.', points: ['Daily: ₦600–₦1,600', 'Monthly: ₦18k–₦42k', 'Fuel litre: ₦710–₦820'] },
  { id: 'anambra_housing', state: 'Anambra', city: 'Awka', title: 'Awka Housing', image: C1, category: 'Housing', summary: 'Rents and starter homes.', points: ['1-bed: ₦300k–₦600k', '2-bed: ₦450k–₦900k', 'Starter home: ₦20m+'] },
  { id: 'delta_utilities', state: 'Delta', city: 'Asaba', title: 'Asaba Utilities', image: C4, category: 'Utilities', summary: 'Power, water, internet.', points: ['Power: ₦12k–₦30k', 'Water: ₦4k–₦9k', 'Internet: ₦14k–₦24k'] },
  { id: 'edo_food', state: 'Edo', city: 'Benin City', title: 'Benin Food Basket', image: C2, category: 'Food', summary: 'Monthly groceries guide.', points: ['Staples: ₦38k–₦52k', 'Protein: ₦38k–₦65k', 'Produce: ₦24k–₦44k'] },
  { id: 'ogun_transport', state: 'Ogun', city: 'Abeokuta', title: 'Abeokuta Transport', image: C3, category: 'Transport', summary: 'Commute estimate.', points: ['Daily: ₦550–₦1,400', 'Monthly: ₦16k–₦38k', 'Fuel litre: ₦700–₦810'] },
  { id: 'osun_housing', state: 'Osun', city: 'Osogbo', title: 'Osogbo Housing', image: C1, category: 'Housing', summary: 'Rents overview.', points: ['1-bed: ₦200k–₦400k', '2-bed: ₦350k–₦700k', 'Starter home: ₦15m+'] },
  { id: 'kwara_utilities', state: 'Kwara', city: 'Ilorin', title: 'Ilorin Utilities', image: C4, category: 'Utilities', summary: 'Power, water, internet.', points: ['Power: ₦10k–₦28k', 'Water: ₦3k–₦7k', 'Internet: ₦12k–₦22k'] },
  { id: 'plateau_food', state: 'Plateau', city: 'Jos', title: 'Jos Food Basket', image: C2, category: 'Food', summary: 'Monthly groceries.', points: ['Staples: ₦36k–₦50k', 'Protein: ₦35k–₦60k', 'Produce: ₦22k–₦40k'] },
  { id: 'imo_transport', state: 'Imo', city: 'Owerri', title: 'Owerri Transport', image: C3, category: 'Transport', summary: 'Daily commute.', points: ['Daily: ₦600–₦1,500', 'Monthly: ₦18k–₦40k', 'Fuel litre: ₦710–₦820'] },
];

const buildStateCards = (state: string) => {
  const imgs = [C1, C2, C3, C4];
  const titles = [
    `Housing & rent in ${state}`,
    `Food basket in ${state}`,
    `Transport costs in ${state}`,
    `Utilities in ${state}`,
  ];
  return titles.map((t, i) => ({
    id: `state_${state}_${i}`,
    title: t,
    image: imgs[i % imgs.length],
    points: ['Monthly ranges', 'City variance', 'Recent averages'],
  }));
};

const CostOfLivingPage = ({
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
    { name: 'Cost of Living', href: '/local-resources/cost-of-living' },
  ];

  const filtered =
    selectedState && selectedState.length > 0
      ? ITEMS.filter((e) => e.state === selectedState)
      : ITEMS;

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
                {selectedState ? `Cost of Living in ${selectedState}` : 'Cost of Living'}
              </h1>
              <p className="text-xl text-secondary mb-8 leading-relaxed">
                Compare rent, groceries, transport, and utilities costs across cities and states.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href={`/search?type=cost-of-living${selectedState ? `&state=${encodeURIComponent(selectedState)}` : ''}`}
                  className="inline-flex items-center gap-2 px-5 py-3 bg-primary text-white rounded-2xl font-semibold hover:bg-primary/90 transition-all hover-lift"
                >
                  Explore Nearby Costs
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
            <h2 className="text-3xl font-bold text-foreground mb-8">City Snapshots</h2>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-3">
                <StateFilterSidebar
                  basePath="/local-resources/cost-of-living"
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
      </main>
      <Footer />
    </>
  );
};

export default CostOfLivingPage;
