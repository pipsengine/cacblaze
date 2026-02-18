import { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';
import Breadcrumb from '@/components/common/Breadcrumb';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import StateFilterSidebar from '@/components/common/StateFilterSidebar';
import { getContextualImage } from '@/utils/imageService';

export const dynamic = 'force-dynamic';
export const revalidate = 0;
export const fetchCache = 'force-no-store';
export const runtime = 'nodejs';

export const metadata: Metadata = {
  title: 'Professionals in Nigeria - CACBLAZE',
  description:
    'Find doctors, lawyers, accountants, architects, engineers, and other licensed professionals across Nigerian states.',
  keywords:
    'Nigeria professionals, doctors, lawyers, accountants, architects, engineers, states',
};

type Professional = {
  id: string;
  state: string;
  city: string;
  name: string;
  image: string;
  profession: string;
  availability: string;
  highlights: string[];
};

const P1 = 'https://images.pexels.com/photos/8460977/pexels-photo-8460977.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80';
const P2 = 'https://images.pexels.com/photos/3853202/pexels-photo-3853202.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80';
const P3 = 'https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80';
const P4 = 'https://images.pexels.com/photos/8376235/pexels-photo-8376235.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80';
const P5 = 'https://images.pexels.com/photos/3779712/pexels-photo-3779712.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80';
const IMG_LAWYER = 'https://images.pexels.com/photos/5668773/pexels-photo-5668773.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80';
const IMG_DENTIST = 'https://images.pexels.com/photos/3845720/pexels-photo-3845720.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80';
const IMG_BUILDER = 'https://images.pexels.com/photos/3862138/pexels-photo-3862138.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80';

const PROFESSIONALS: Professional[] = [
  { id: 'lagos_doctor', state: 'Lagos', city: 'Lagos', name: 'Lagos Family Doctor', image: P1, profession: 'Doctor', availability: 'Weekdays · 9:00 AM – 5:00 PM', highlights: ['General practice', 'Checkups', 'Referrals'] },
  { id: 'abuja_lawyer', state: 'FCT Abuja', city: 'Abuja', name: 'Abuja Corporate Lawyer', image: IMG_LAWYER, profession: 'Lawyer', availability: 'By appointment', highlights: ['Contracts', 'Company law', 'Compliance'] },
  { id: 'rivers_accountant', state: 'Rivers', city: 'Port Harcourt', name: 'PH Chartered Accountant', image: P3, profession: 'Accountant', availability: 'Weekdays · 9:00 AM – 5:00 PM', highlights: ['Tax', 'Books', 'Payroll'] },
  { id: 'oyo_architect', state: 'Oyo', city: 'Ibadan', name: 'Ibadan Architect Studio', image: P4, profession: 'Architect', availability: 'Weekdays · 10:00 AM – 4:00 PM', highlights: ['Plans', 'Permits', 'Supervision'] },
  { id: 'kano_engineer', state: 'Kano', city: 'Kano', name: 'Kano Civil Engineer', image: P5, profession: 'Engineer', availability: 'Weekdays · 9:00 AM – 5:00 PM', highlights: ['Structural', 'Site', 'Reports'] },
  { id: 'kaduna_pharmacist', state: 'Kaduna', city: 'Kaduna', name: 'Kaduna Pharmacist', image: P1, profession: 'Pharmacist', availability: 'Daily · 8:00 AM – 8:00 PM', highlights: ['Dispensing', 'Counsel', 'OTC'] },
  { id: 'enugu_dentist', state: 'Enugu', city: 'Enugu', name: 'Enugu Dental Care', image: IMG_DENTIST, profession: 'Dentist', availability: 'Weekdays · 9:00 AM – 4:00 PM', highlights: ['Cleaning', 'Fillings', 'Whitening'] },
  { id: 'anambra_surveyor', state: 'Anambra', city: 'Awka', name: 'Awka Surveyor', image: P3, profession: 'Surveyor', availability: 'By appointment', highlights: ['Land surveys', 'Layouts', 'Beaconing'] },
  { id: 'delta_physio', state: 'Delta', city: 'Asaba', name: 'Asaba Physiotherapist', image: P4, profession: 'Physiotherapist', availability: 'Weekdays · 10:00 AM – 4:00 PM', highlights: ['Rehab', 'Mobility', 'Sports'] },
  { id: 'edo_consultant', state: 'Edo', city: 'Benin City', name: 'Benin Business Consultant', image: P5, profession: 'Consultant', availability: 'By appointment', highlights: ['Strategy', 'Ops', 'Growth'] },
  { id: 'ogun_notary', state: 'Ogun', city: 'Abeokuta', name: 'Abeokuta Notary Public', image: P1, profession: 'Notary', availability: 'Weekdays · 9:00 AM – 3:00 PM', highlights: ['Notarization', 'Affidavits', 'Docs'] },
  { id: 'osun_builder', state: 'Osun', city: 'Osogbo', name: 'Osogbo Builder', image: IMG_BUILDER, profession: 'Builder', availability: 'Weekdays · 9:00 AM – 5:00 PM', highlights: ['Supervision', 'Renovations', 'Estimates'] },
  { id: 'kwara_optometrist', state: 'Kwara', city: 'Ilorin', name: 'Ilorin Optometrist', image: P3, profession: 'Optometrist', availability: 'Weekdays · 9:00 AM – 4:00 PM', highlights: ['Eye tests', 'Lenses', 'Checks'] },
  { id: 'plateau_nurse', state: 'Plateau', city: 'Jos', name: 'Jos Registered Nurse', image: P4, profession: 'Nurse', availability: 'Daily · 8:00 AM – 8:00 PM', highlights: ['Care', 'Vitals', 'Home visits'] },
  { id: 'imo_psychologist', state: 'Imo', city: 'Owerri', name: 'Owerri Psychologist', image: P5, profession: 'Psychologist', availability: 'By appointment', highlights: ['Counseling', 'Assessments', 'Plans'] },
];

const buildStateCards = (state: string) => {
  const imgs = [P1, P2, P3, P4];
  const titles = [
    `Licensed professionals in ${state}`,
    `Medical & health in ${state}`,
    `Law & finance in ${state}`,
    `Engineering & design in ${state}`,
  ];
  return titles.map((t, i) => ({
    id: `state_${state}_${i}`,
    title: t,
    image: imgs[i % imgs.length],
    points: ['Availability', 'Licensing', 'Service scope'],
  }));
};

const ProfessionalsPage = ({
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
    { name: 'Professionals', href: '/local-resources/professionals' },
  ];

  const filtered =
    selectedState && selectedState.length > 0
      ? PROFESSIONALS.filter((e) => e.state === selectedState)
      : PROFESSIONALS;

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
                {selectedState ? `Professionals in ${selectedState}` : 'Professionals'}
              </h1>
              <p className="text-xl text-secondary mb-8 leading-relaxed">
                Discover verified, licensed professionals across medical, legal, finance, and technical fields.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href={`/search?type=professionals${selectedState ? `&state=${encodeURIComponent(selectedState)}` : ''}`}
                  className="inline-flex items-center gap-2 px-5 py-3 bg-primary text-white rounded-2xl font-semibold hover:bg-primary/90 transition-all hover-lift"
                >
                  Find Professionals Near Me
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
            <h2 className="text-3xl font-bold text-foreground mb-8">Featured Professionals</h2>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-3">
                <StateFilterSidebar
                  basePath="/local-resources/professionals"
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
                        const needsGenerated =
                          e.id === 'abuja_lawyer' || e.id === 'enugu_dentist' || e.id === 'osun_builder';
                        if (needsGenerated) {
                          const contextual = getContextualImage({
                            category: 'local-resources',
                            title: e.name,
                            alt: e.profession,
                            preferCurated: true,
                          });
                          return (
                            <AppImage
                              src={contextual.src}
                              alt={contextual.alt}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-500"
                              priority
                              fallbackSrc={e.image}
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
                        <div className="text-white text-xs mt-1">{e.profession}</div>
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

export default ProfessionalsPage;
