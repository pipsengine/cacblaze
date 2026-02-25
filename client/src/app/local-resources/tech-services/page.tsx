import { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';
import Breadcrumb from '@/components/common/Breadcrumb';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import StateFilterSidebar from '@/components/common/StateFilterSidebar';

export const metadata: Metadata = {
  title: 'Tech Services in Nigeria - CACBLAZE',
  description: 'Find device repair, IT support, networking, and training across Nigerian states.',
  keywords: 'Nigeria tech services, computer repair, phone repair, IT support, states',
};

type TechService = {
  id: string;
  state: string;
  city: string;
  name: string;
  image: string;
  serviceType: string;
  availability: string;
  highlights: string[];
};

const TECH_SERVICES: TechService[] = [
  {
    id: 'lagos_ikeja_repair',
    state: 'Lagos',
    city: 'Lagos',
    name: 'Ikeja Device Repairs',
    image:
      'https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    serviceType: 'Computer & Phone Repair',
    availability: 'Same-day · 9:00 AM – 6:00 PM',
    highlights: ['Screen swaps', 'Battery replace', 'Diagnostics'],
  },
  {
    id: 'abuja_wuse_it_support',
    state: 'FCT Abuja',
    city: 'Abuja',
    name: 'Wuse IT Support',
    image:
      'https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    serviceType: 'IT Support',
    availability: 'Next-day · 9:00 AM – 5:00 PM',
    highlights: ['PC setup', 'OS installs', 'Troubleshooting'],
  },
  {
    id: 'rivers_ph_device_clinic',
    state: 'Rivers',
    city: 'Port Harcourt',
    name: 'PH Device Clinic',
    image:
      'https://images.pexels.com/photos/479273/pexels-photo-479273.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    serviceType: 'Phone Repair',
    availability: 'Daily · 8:00 AM – 7:00 PM',
    highlights: ['Water damage', 'Board repair', 'Unlocks'],
  },
  {
    id: 'oyo_ibadan_network_pros',
    state: 'Oyo',
    city: 'Ibadan',
    name: 'Ibadan Network Pros',
    image:
      'https://images.pexels.com/photos/712786/pexels-photo-712786.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    serviceType: 'Networking',
    availability: 'Weekdays · 10:00 AM – 4:00 PM',
    highlights: ['Wi‑Fi setup', 'LAN cabling', 'Router tuning'],
  },
  {
    id: 'kano_phone_fix',
    state: 'Kano',
    city: 'Kano',
    name: 'Kano Phone Fix',
    image:
      'https://images.pexels.com/photos/479275/pexels-photo-479275.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    serviceType: 'Phone Repair',
    availability: 'Same-day · 9:00 AM – 6:00 PM',
    highlights: ['Screens', 'Charge ports', 'Cameras'],
  },
  {
    id: 'kaduna_pc_care',
    state: 'Kaduna',
    city: 'Kaduna',
    name: 'Barnawa PC Care',
    image:
      'https://images.pexels.com/photos/1181355/pexels-photo-1181355.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    serviceType: 'PC Repair',
    availability: 'Weekends · 11:00 AM – 4:00 PM',
    highlights: ['SSD upgrades', 'Thermal service', 'OS recovery'],
  },
  {
    id: 'enugu_web_studio',
    state: 'Enugu',
    city: 'Enugu',
    name: 'Enugu Web Studio',
    image:
      'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    serviceType: 'Web Design',
    availability: 'By appointment',
    highlights: ['Business sites', 'SEO basics', 'Maintenance'],
  },
  {
    id: 'anambra_awka_tech_hub',
    state: 'Anambra',
    city: 'Awka',
    name: 'Awka Tech Hub',
    image:
      'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    serviceType: 'Training & Co‑working',
    availability: 'Daily · 8:00 AM – 8:00 PM',
    highlights: ['Coding classes', 'Meetups', 'Mentorship'],
  },
  {
    id: 'delta_data_recovery',
    state: 'Delta',
    city: 'Asaba',
    name: 'Asaba Data Recovery',
    image:
      'https://images.pexels.com/photos/479272/pexels-photo-479272.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    serviceType: 'Data Recovery',
    availability: 'By appointment',
    highlights: ['HDD/SSD', 'Phones', 'Backup plans'],
  },
  {
    id: 'edo_printer_service',
    state: 'Edo',
    city: 'Benin City',
    name: 'Benin Printer Service',
    image:
      'https://images.pexels.com/photos/4792491/pexels-photo-4792491.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    serviceType: 'Printer & Office',
    availability: 'Weekdays · 9:00 AM – 5:00 PM',
    highlights: ['Printer repair', 'Scanner setup', 'Supplies'],
  },
  {
    id: 'ogun_cctv_installers',
    state: 'Ogun',
    city: 'Abeokuta',
    name: 'Abeokuta CCTV Installers',
    image:
      'https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    serviceType: 'Security & CCTV',
    availability: 'Next-day · 10:00 AM – 6:00 PM',
    highlights: ['CCTV', 'Door access', 'Smart alarms'],
  },
  {
    id: 'osun_software_training',
    state: 'Osun',
    city: 'Osogbo',
    name: 'Osogbo Software Training',
    image:
      'https://images.pexels.com/photos/3862372/pexels-photo-3862372.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    serviceType: 'Training',
    availability: 'Weekends · 10:00 AM – 3:00 PM',
    highlights: ['Office apps', 'Basics to advanced', 'Certificates'],
  },
  {
    id: 'kwara_cyber_cafe',
    state: 'Kwara',
    city: 'Ilorin',
    name: 'Ilorin Cyber Café',
    image:
      'https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    serviceType: 'Internet & Print',
    availability: 'Daily · 8:00 AM – 9:00 PM',
    highlights: ['High-speed', 'Printing', 'Scanning'],
  },
  {
    id: 'plateau_electronics_service',
    state: 'Plateau',
    city: 'Jos',
    name: 'Jos Electronics Service',
    image:
      'https://images.pexels.com/photos/442152/pexels-photo-442152.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    serviceType: 'Electronics',
    availability: 'Weekdays · 9:00 AM – 5:00 PM',
    highlights: ['TV repair', 'Audio systems', 'Parts sourcing'],
  },
  {
    id: 'imo_fiber_installers',
    state: 'Imo',
    city: 'Owerri',
    name: 'Owerri Fiber Internet',
    image:
      'https://images.pexels.com/photos/171198/pexels-photo-171198.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    serviceType: 'Fiber & ISP',
    availability: 'By appointment',
    highlights: ['Fiber runs', 'ONT setup', 'Router config'],
  },
];

const buildStateCards = (state: string) => {
  const imgs = [
    'https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    'https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    'https://images.pexels.com/photos/712786/pexels-photo-712786.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    'https://images.pexels.com/photos/1181355/pexels-photo-1181355.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
  ];
  const titles = [
    `Device repairs in ${state}`,
    `IT support in ${state}`,
    `Networking and Wi‑Fi in ${state}`,
    `Training and tech hubs in ${state}`,
  ];
  return titles.map((t, i) => ({
    id: `state_${state}_${i}`,
    title: t,
    image: imgs[i % imgs.length],
    points: ['Availability', 'Service types', 'Rates info'],
  }));
};

const TechServicesPage = ({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  const raw = searchParams?.state;
  const selectedState = typeof raw === 'string' ? raw : Array.isArray(raw) ? raw[0] || '' : '';

  const breadcrumbItems = [
    { name: 'Home', href: '/homepage' },
    { name: 'Local Resources', href: '/local-resources' },
    { name: 'Tech Services', href: '/local-resources/tech-services' },
  ];

  const filtered =
    selectedState && selectedState.length > 0
      ? TECH_SERVICES.filter((e) => e.state === selectedState)
      : TECH_SERVICES;

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
                {selectedState ? `Tech Services in ${selectedState}` : 'Tech Services'}
              </h1>
              <p className="text-xl text-secondary mb-8 leading-relaxed">
                Find trusted local tech pros for device repair, networking, IT support, and
                training.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href={`/search?type=tech-services${selectedState ? `&state=${encodeURIComponent(selectedState)}` : ''}`}
                  className="inline-flex items-center gap-2 px-5 py-3 bg-primary text-white rounded-2xl font-semibold hover:bg-primary/90 transition-all hover-lift"
                >
                  Find Tech Services Near Me
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
            <h2 className="text-3xl font-bold text-foreground mb-8">Featured Tech Services</h2>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-3">
                <StateFilterSidebar
                  basePath="/local-resources/tech-services"
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

export default TechServicesPage;
