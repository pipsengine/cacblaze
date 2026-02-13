import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Breadcrumb from '@/components/common/Breadcrumb';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';
import { studyGuides } from '@/data/study-guides';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = studyGuides[slug];

  if (!guide) return { title: 'Guide Not Found' };

  return {
    title: `${guide.name} | Study Guides - CACBLAZE`,
    description: guide.description,
  };
}

export default async function StudyGuideDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const guide = studyGuides[slug];

  if (!guide) notFound();

  const breadcrumbItems = [
    { name: 'Home', href: '/homepage' },
    { name: 'Education', href: '/education' },
    { name: 'Study Guides', href: '/education/study-guides' },
    { name: guide.name, href: `/education/study-guides/${slug}` },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20 bg-slate-50">
        {/* Hero Section */}
        <div className="bg-blue-950 py-24 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:40px_40px]" />
          </div>
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <Breadcrumb items={breadcrumbItems} className="mb-8 text-blue-400" />

            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <span className="bg-blue-500 text-white text-xs font-bold px-4 py-2 rounded-xl uppercase tracking-widest border border-blue-400/30 shadow-lg">
                    {guide.subject}
                  </span>
                  <div className="flex items-center text-yellow-400 font-bold">
                    <Icon name="StarIcon" size={20} className="fill-current" />
                    <span className="ml-2 text-lg">{guide.rating} / 5.0</span>
                  </div>
                </div>
                <h1 className="text-6xl lg:text-8xl font-black mb-8 tracking-tighter leading-[1.1]">
                  {guide.name}
                </h1>
                <p className="text-2xl text-blue-100/80 leading-relaxed mb-12 italic border-l-8 border-blue-500 pl-10">
                  "{guide.description}"
                </p>

                <div className="flex items-center gap-6 p-8 bg-white/5 backdrop-blur-xl rounded-[2.5rem] border border-white/10 shadow-2xl">
                  <div className="relative w-16 h-16 rounded-2xl overflow-hidden ring-4 ring-blue-500/50 shadow-inner">
                    <AppImage
                      src={guide.author.image}
                      alt={guide.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-black text-white text-xl">{guide.author.name}</p>
                    <p className="text-blue-400 text-sm font-bold uppercase tracking-widest">
                      {guide.author.role}
                    </p>
                  </div>
                  <div className="ml-auto text-[10px] text-blue-500/60 font-black uppercase tracking-[0.2em] vertical-rl">
                    Updated {guide.publishDate}
                  </div>
                </div>
              </div>

              <div className="relative aspect-square lg:aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl ring-2 ring-white/10 group">
                <AppImage
                  src={guide.heroImage}
                  alt={guide.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-transparent to-transparent opacity-60" />
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-16">
              <section>
                <h2 className="text-4xl font-black text-gray-900 mb-10 flex items-center gap-4">
                  <span className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-200">
                    <Icon name="BookOpenIcon" size={24} />
                  </span>
                  Key Topics Covered
                </h2>
                <div className="grid gap-8">
                  {guide.topics.map((topic, index) => (
                    <div
                      key={index}
                      className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-blue-50 hover:shadow-xl transition-shadow duration-500"
                    >
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                        <span className="text-blue-600 font-black">0{index + 1}.</span>
                        {topic.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-lg italic">
                        {topic.summary}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <aside className="space-y-10">
              <div className="bg-white p-10 rounded-[3rem] shadow-xl shadow-blue-100/50 border border-blue-50">
                <h3 className="text-xl font-black text-gray-900 mb-8 uppercase tracking-widest flex items-center gap-3">
                  <Icon name="InformationCircleIcon" size={20} className="text-blue-600" />
                  Guide Info
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-blue-50 rounded-2xl">
                    <span className="text-sm font-bold text-blue-900/60 uppercase tracking-wider">
                      Level
                    </span>
                    <span className="font-black text-blue-900">{guide.level}</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-amber-50 rounded-2xl">
                    <span className="text-sm font-bold text-amber-900/60 uppercase tracking-wider">
                      Rating
                    </span>
                    <div className="flex items-center text-amber-600 font-black">
                      <Icon name="StarIcon" size={16} className="fill-current mr-1" />
                      {guide.rating}
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-emerald-50 rounded-2xl">
                    <span className="text-sm font-bold text-emerald-900/60 uppercase tracking-wider">
                      Subject
                    </span>
                    <span className="font-black text-emerald-900">{guide.subject}</span>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
