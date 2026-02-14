import { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';
import Breadcrumb from '@/components/common/Breadcrumb';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import StateFilterSidebar from '@/components/common/StateFilterSidebar';

export const metadata: Metadata = {
  title: 'Freelancers in Nigeria - CACBLAZE',
  description:
    'Find freelance designers, developers, writers, marketers, and more across Nigerian states.',
  keywords:
    'Nigeria freelancers, freelance developer, designer, writer, marketer, states',
};

type Freelancer = {
  id: string;
  state: string;
  city: string;
  name: string;
  image: string;
  specialty: string;
  availability: string;
  highlights: string[];
};

const IMG1 = 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80';
const IMG2 = 'https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80';
const IMG3 = 'https://images.pexels.com/photos/3862372/pexels-photo-3862372.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80';
const IMG4 = 'https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80';
const IMG5 = 'https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80';

const FREELANCERS: Freelancer[] = [
  { id: 'lagos_dev', state: 'Lagos', city: 'Lagos', name: 'Lagos Web Dev', image: IMG5, specialty: 'Frontend Dev', availability: 'Weekdays · 9:00 AM – 5:00 PM', highlights: ['React', 'TypeScript', 'UI'] },
  { id: 'abuja_writer', state: 'FCT Abuja', city: 'Abuja', name: 'Abuja Content Writer', image: IMG2, specialty: 'Content', availability: 'Flexible · Remote', highlights: ['Articles', 'SEO', 'Copy'] },
  { id: 'rivers_designer', state: 'Rivers', city: 'Port Harcourt', name: 'PH Brand Designer', image: IMG3, specialty: 'Design', availability: 'Weekdays · 10:00 AM – 4:00 PM', highlights: ['Logos', 'Guidelines', 'Packaging'] },
  { id: 'oyo_marketer', state: 'Oyo', city: 'Ibadan', name: 'Ibadan Digital Marketer', image: IMG4, specialty: 'Marketing', availability: 'Flexible · Remote', highlights: ['Social', 'Ads', 'Content'] },
  { id: 'kano_mobile', state: 'Kano', city: 'Kano', name: 'Kano Mobile Dev', image: IMG1, specialty: 'Mobile', availability: 'Weekdays · 9:00 AM – 5:00 PM', highlights: ['Flutter', 'Firebase', 'UI'] },
  { id: 'kaduna_pm', state: 'Kaduna', city: 'Kaduna', name: 'Kaduna Project Manager', image: IMG5, specialty: 'PM', availability: 'Weekdays · 9:00 AM – 5:00 PM', highlights: ['Scrum', 'Roadmaps', 'Delivery'] },
  { id: 'enugu_seo', state: 'Enugu', city: 'Enugu', name: 'Enugu SEO Specialist', image: IMG2, specialty: 'SEO', availability: 'Flexible · Remote', highlights: ['On-page', 'Technical', 'Content'] },
  { id: 'anambra_analyst', state: 'Anambra', city: 'Awka', name: 'Awka Data Analyst', image: IMG1, specialty: 'Data', availability: 'Weekdays · 10:00 AM – 4:00 PM', highlights: ['Dashboards', 'SQL', 'Excel'] },
  { id: 'delta_smm', state: 'Delta', city: 'Asaba', name: 'Asaba Social Manager', image: IMG4, specialty: 'Social', availability: 'Flexible · Remote', highlights: ['Calendars', 'Assets', 'Engagement'] },
  { id: 'edo_copywriter', state: 'Edo', city: 'Benin City', name: 'Benin Copywriter', image: IMG2, specialty: 'Copy', availability: 'Weekdays · 9:00 AM – 4:00 PM', highlights: ['Web copy', 'Ads', 'Email'] },
  { id: 'ogun_graphics', state: 'Ogun', city: 'Abeokuta', name: 'Abeokuta Graphics', image: IMG3, specialty: 'Graphics', availability: 'Weekdays · 9:00 AM – 5:00 PM', highlights: ['Posters', 'Social', 'Brand'] },
  { id: 'osun_backend', state: 'Osun', city: 'Osogbo', name: 'Osogbo Backend Dev', image: IMG5, specialty: 'Backend', availability: 'Weekdays · 9:00 AM – 5:00 PM', highlights: ['Node', 'APIs', 'SQL'] },
  { id: 'kwara_uiux', state: 'Kwara', city: 'Ilorin', name: 'Ilorin UI/UX', image: IMG2, specialty: 'UI/UX', availability: 'Flexible · Remote', highlights: ['Wireframes', 'Prototypes', 'Testing'] },
  { id: 'plateau_editor', state: 'Plateau', city: 'Jos', name: 'Jos Video Editor', image: IMG1, specialty: 'Video', availability: 'Weekdays · 10:00 AM – 4:00 PM', highlights: ['Cuts', 'Effects', 'Sound'] },
  { id: 'imo_va', state: 'Imo', city: 'Owerri', name: 'Owerri Virtual Assistant', image: IMG4, specialty: 'Admin', availability: 'Flexible · Remote', highlights: ['Scheduling', 'Docs', 'Support'] },
];

const buildStateCards = (state: string) => {
  const imgs = [IMG1, IMG2, IMG3, IMG4];
  const titles = [
    `Top freelancers in ${state}`,
    `Design & branding in ${state}`,
    `Development & tech in ${state}`,
    `Writing & marketing in ${state}`,
  ];
  return titles.map((t, i) => ({
    id: `state_${state}_${i}`,
    title: t,
    image: imgs[i % imgs.length],
    points: ['Availability', 'Specialties', 'Rates info'],
  }));
};

const FreelancersPage = ({
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
    { name: 'Freelancers', href: '/local-resources/freelancers' },
  ];

  const filtered =
    selectedState && selectedState.length > 0
      ? FREELANCERS.filter((e) => e.state === selectedState)
      : FREELANCERS;

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
                {selectedState ? `Freelancers in ${selectedState}` : 'Freelancers'}
              </h1>
              <p className="text-xl text-secondary mb-8 leading-relaxed">
                Discover verified freelancers across design, development, writing, and marketing.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href={`/search?type=freelancers${selectedState ? `&state=${encodeURIComponent(selectedState)}` : ''}`}
                  className="inline-flex items-center gap-2 px-5 py-3 bg-primary text-white rounded-2xl font-semibold hover:bg-primary/90 transition-all hover-lift"
                >
                  Find Freelancers Near Me
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
            <h2 className="text-3xl font-bold text-foreground mb-8">Featured Freelancers</h2>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-3">
                <StateFilterSidebar
                  basePath="/local-resources/freelancers"
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
                        <div className="text-white text-xs mt-1">{e.specialty}</div>
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

export default FreelancersPage;
