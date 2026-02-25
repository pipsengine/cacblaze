import { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';
import Breadcrumb from '@/components/common/Breadcrumb';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import StateFilterSidebar from '@/components/common/StateFilterSidebar';

export const metadata: Metadata = {
  title: 'Business Services in Nigeria - CACBLAZE',
  description:
    'Find accounting, legal, printing, courier, consulting, marketing, and office services across Nigerian states.',
  keywords:
    'Nigeria business services, accounting, legal, printing, courier, consulting, marketing, office supplies, states',
};

type BusinessService = {
  id: string;
  state: string;
  city: string;
  name: string;
  image: string;
  serviceType: string;
  availability: string;
  highlights: string[];
};

const BUSINESS_SERVICES: BusinessService[] = [
  {
    id: 'lagos_vi_accounting',
    state: 'Lagos',
    city: 'Lagos',
    name: 'VI Accounting Hub',
    image:
      'https://images.pexels.com/photos/669493/pexels-photo-669493.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    serviceType: 'Accounting & Bookkeeping',
    availability: 'Weekdays · 9:00 AM – 6:00 PM',
    highlights: ['Financial statements', 'Tax filing', 'Payroll'],
  },
  {
    id: 'abuja_wuse_legal',
    state: 'FCT Abuja',
    city: 'Abuja',
    name: 'Wuse Legal Partners',
    image:
      'https://images.pexels.com/photos/442781/pexels-photo-442781.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    serviceType: 'Legal Services',
    availability: 'By appointment',
    highlights: ['Business registration', 'Contracts', 'Compliance'],
  },
  {
    id: 'rivers_ph_print_center',
    state: 'Rivers',
    city: 'Port Harcourt',
    name: 'PH Print Center',
    image:
      'https://images.pexels.com/photos/4792491/pexels-photo-4792491.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    serviceType: 'Printing & Design',
    availability: 'Daily · 8:00 AM – 7:00 PM',
    highlights: ['Business cards', 'Posters', 'Brand kits'],
  },
  {
    id: 'oyo_ibadan_courier',
    state: 'Oyo',
    city: 'Ibadan',
    name: 'Ibadan Courier & Logistics',
    image:
      'https://images.pexels.com/photos/4246117/pexels-photo-4246117.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    serviceType: 'Courier & Logistics',
    availability: 'Same-day · 9:00 AM – 6:00 PM',
    highlights: ['City-wide delivery', 'Packaging', 'Tracking'],
  },
  {
    id: 'kano_business_consult',
    state: 'Kano',
    city: 'Kano',
    name: 'Kano Business Consult',
    image:
      'https://images.pexels.com/photos/3183165/pexels-photo-3183165.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    serviceType: 'Consulting',
    availability: 'Weekdays · 10:00 AM – 4:00 PM',
    highlights: ['Strategy', 'Operations', 'Process improvement'],
  },
  {
    id: 'kaduna_brand_marketing',
    state: 'Kaduna',
    city: 'Kaduna',
    name: 'Kaduna Brand & Marketing',
    image:
      'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    serviceType: 'Marketing',
    availability: 'Weekdays · 9:00 AM – 5:00 PM',
    highlights: ['Social media', 'Campaigns', 'Content'],
  },
  {
    id: 'enugu_hr_services',
    state: 'Enugu',
    city: 'Enugu',
    name: 'Enugu HR Services',
    image:
      'https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    serviceType: 'HR & Staffing',
    availability: 'By appointment',
    highlights: ['Recruitment', 'Policies', 'Payroll support'],
  },
  {
    id: 'anambra_awka_office_supplies',
    state: 'Anambra',
    city: 'Awka',
    name: 'Awka Office Supplies',
    image:
      'https://images.pexels.com/photos/461077/pexels-photo-461077.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    serviceType: 'Office Supplies',
    availability: 'Daily · 8:00 AM – 8:00 PM',
    highlights: ['Stationery', 'Printers', 'Accessories'],
  },
  {
    id: 'delta_tax_advisors',
    state: 'Delta',
    city: 'Asaba',
    name: 'Asaba Tax Advisors',
    image:
      'https://images.pexels.com/photos/669493/pexels-photo-669493.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    serviceType: 'Tax Advisory',
    availability: 'Weekdays · 9:00 AM – 5:00 PM',
    highlights: ['Tax planning', 'Year-end filing', 'Compliance'],
  },
  {
    id: 'edo_benin_corporate_law',
    state: 'Edo',
    city: 'Benin City',
    name: 'Benin Corporate Law',
    image:
      'https://images.pexels.com/photos/442781/pexels-photo-442781.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    serviceType: 'Corporate Legal',
    availability: 'By appointment',
    highlights: ['Company formation', 'Contracts', 'IP basics'],
  },
  {
    id: 'ogun_abeokuta_print_shop',
    state: 'Ogun',
    city: 'Abeokuta',
    name: 'Abeokuta Print Shop',
    image:
      'https://images.pexels.com/photos/4792491/pexels-photo-4792491.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    serviceType: 'Printing',
    availability: 'Daily · 9:00 AM – 7:00 PM',
    highlights: ['Flyers', 'Banners', 'Branding'],
  },
  {
    id: 'osun_osogbo_courier',
    state: 'Osun',
    city: 'Osogbo',
    name: 'Osogbo City Courier',
    image:
      'https://images.pexels.com/photos/4246117/pexels-photo-4246117.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    serviceType: 'Courier',
    availability: 'Same-day · 9:00 AM – 6:00 PM',
    highlights: ['City delivery', 'Packaging', 'Tracking'],
  },
  {
    id: 'kwara_ilorin_business_center',
    state: 'Kwara',
    city: 'Ilorin',
    name: 'Ilorin Business Center',
    image:
      'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    serviceType: 'Consulting & Training',
    availability: 'Weekdays · 10:00 AM – 4:00 PM',
    highlights: ['Workshops', 'Mentorship', 'Strategy'],
  },
  {
    id: 'plateau_jos_brand_house',
    state: 'Plateau',
    city: 'Jos',
    name: 'Jos Brand House',
    image:
      'https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    serviceType: 'Brand & Design',
    availability: 'Weekdays · 9:00 AM – 5:00 PM',
    highlights: ['Logos', 'Guidelines', 'Packaging'],
  },
  {
    id: 'imo_owerri_business_support',
    state: 'Imo',
    city: 'Owerri',
    name: 'Owerri Business Support',
    image:
      'https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    serviceType: 'Admin & Support',
    availability: 'By appointment',
    highlights: ['Documentation', 'Scheduling', 'Virtual assistance'],
  },
];

const buildStateCards = (state: string) => {
  const imgs = [
    'https://images.pexels.com/photos/669493/pexels-photo-669493.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    'https://images.pexels.com/photos/3183165/pexels-photo-3183165.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    'https://images.pexels.com/photos/4792491/pexels-photo-4792491.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    'https://images.pexels.com/photos/4246117/pexels-photo-4246117.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
  ];
  const titles = [
    `Accounting & tax in ${state}`,
    `Legal & compliance in ${state}`,
    `Printing & branding in ${state}`,
    `Courier & logistics in ${state}`,
  ];
  return titles.map((t, i) => ({
    id: `state_${state}_${i}`,
    title: t,
    image: imgs[i % imgs.length],
    points: ['Availability', 'Service types', 'Rates info'],
  }));
};

const BusinessServicesPage = ({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  const raw = searchParams?.state;
  const selectedState = typeof raw === 'string' ? raw : Array.isArray(raw) ? raw[0] || '' : '';

  const breadcrumbItems = [
    { name: 'Home', href: '/homepage' },
    { name: 'Local Resources', href: '/local-resources' },
    { name: 'Business Services', href: '/local-resources/business-services' },
  ];

  const filtered =
    selectedState && selectedState.length > 0
      ? BUSINESS_SERVICES.filter((e) => e.state === selectedState)
      : BUSINESS_SERVICES;

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
                {selectedState ? `Business Services in ${selectedState}` : 'Business Services'}
              </h1>
              <p className="text-xl text-secondary mb-8 leading-relaxed">
                Find trusted local providers for accounting, legal, printing, courier, consulting,
                and office needs.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href={`/search?type=business-services${selectedState ? `&state=${encodeURIComponent(selectedState)}` : ''}`}
                  className="inline-flex items-center gap-2 px-5 py-3 bg-primary text-white rounded-2xl font-semibold hover:bg-primary/90 transition-all hover-lift"
                >
                  Find Business Services Near Me
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
            <h2 className="text-3xl font-bold text-foreground mb-8">Featured Business Services</h2>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-3">
                <StateFilterSidebar
                  basePath="/local-resources/business-services"
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

export default BusinessServicesPage;
