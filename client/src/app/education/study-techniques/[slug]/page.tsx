import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Breadcrumb from '@/components/common/Breadcrumb';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';
import { studyTechniques } from '@/data/study-techniques';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const tech = studyTechniques[slug];

  if (!tech) return { title: 'Technique Not Found' };

  return {
    title: `${tech.name} | Study Techniques - CACBLAZE`,
    description: tech.description,
  };
}

export default async function StudyTechniqueDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const tech = studyTechniques[slug];

  if (!tech) notFound();

  const breadcrumbItems = [
    { name: 'Home', href: '/homepage' },
    { name: 'Education', href: '/education' },
    { name: 'Study Techniques', href: '/education/study-techniques' },
    { name: tech.name, href: `/education/study-techniques/${slug}` },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20 bg-slate-50">
        {/* Hero Section */}
        <div className="bg-emerald-950 py-24 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:40px_40px]" />
          </div>
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <Breadcrumb items={breadcrumbItems} className="mb-8 text-emerald-400" />

            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <span className="bg-emerald-500 text-white text-xs font-bold px-4 py-2 rounded-xl uppercase tracking-widest border border-emerald-400/30 shadow-lg">
                    {tech.category}
                  </span>
                  <div className="flex items-center text-yellow-400 font-bold">
                    <Icon name="StarIcon" size={20} className="fill-current" />
                    <span className="ml-2 text-lg">{tech.rating} / 5.0</span>
                  </div>
                </div>
                <h1 className="text-6xl lg:text-8xl font-black mb-8 tracking-tighter leading-[1.1]">
                  {tech.name}
                </h1>
                <p className="text-2xl text-emerald-100/80 leading-relaxed mb-12 italic border-l-8 border-emerald-500 pl-10">
                  "{tech.description}"
                </p>

                <div className="flex items-center gap-6 p-8 bg-white/5 backdrop-blur-xl rounded-[2.5rem] border border-white/10 shadow-2xl">
                  <div className="relative w-16 h-16 rounded-2xl overflow-hidden ring-4 ring-emerald-500/50 shadow-inner">
                    <AppImage
                      src={tech.author.image}
                      alt={tech.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-black text-white text-xl">{tech.author.name}</p>
                    <p className="text-emerald-400 text-sm font-bold uppercase tracking-widest">
                      {tech.author.role}
                    </p>
                  </div>
                  <div className="ml-auto text-[10px] text-emerald-500/60 font-black uppercase tracking-[0.2em] vertical-rl">
                    Updated {tech.publishDate}
                  </div>
                </div>
              </div>

              <div className="relative aspect-square lg:aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl ring-2 ring-white/10 group">
                <AppImage
                  src={tech.heroImage}
                  alt={tech.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-transparent to-transparent opacity-60" />
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 -mt-24 relative z-20 pb-32">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-8 space-y-12">
              {/* Steps Card */}
              <div className="bg-white rounded-[3.5rem] p-12 lg:p-16 shadow-2xl shadow-emerald-900/5 border border-emerald-50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50 rounded-full -mr-32 -mt-32 blur-3xl opacity-50" />
                <div className="relative z-10">
                  <div className="flex items-center gap-6 mb-12">
                    <div className="w-16 h-16 bg-emerald-600 rounded-[1.5rem] flex items-center justify-center text-white shadow-xl shadow-emerald-200">
                      <Icon name="ListBulletIcon" size={32} />
                    </div>
                    <h2 className="text-4xl font-black text-slate-900 tracking-tight">
                      Step-by-Step Execution
                    </h2>
                  </div>

                  <div className="space-y-10">
                    {tech.steps.map((step, i) => (
                      <div key={i} className="group flex gap-8">
                        <div className="flex flex-col items-center">
                          <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 font-black text-xl border-2 border-emerald-100 group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600 transition-all duration-300">
                            {i + 1}
                          </div>
                          {i !== tech.steps.length - 1 && (
                            <div className="w-0.5 h-full bg-emerald-100 my-2" />
                          )}
                        </div>
                        <div className="pt-2 pb-8">
                          <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">
                            {step.title}
                          </h3>
                          <p className="text-lg text-slate-600 leading-relaxed">{step.content}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Benefits Section */}
              <div className="bg-emerald-900 rounded-[3.5rem] p-12 lg:p-16 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-emerald-800 to-transparent" />
                <div className="relative z-10">
                  <h3 className="text-3xl font-black mb-12 flex items-center gap-4">
                    <Icon name="SparklesIcon" className="text-emerald-400" size={32} />
                    Core Benefits
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-8">
                    {tech.benefits.map((benefit, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-4 p-6 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors"
                      >
                        <Icon
                          name="CheckCircleIcon"
                          size={24}
                          className="text-emerald-400 shrink-0 mt-0.5"
                        />
                        <span className="text-lg font-bold text-emerald-50 leading-tight">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-8">
              <div className="bg-white rounded-[3rem] p-10 shadow-xl border border-emerald-50 sticky top-28">
                <h3 className="text-xl font-black text-slate-900 mb-10 border-b border-emerald-50 pb-6 uppercase tracking-widest">
                  Quick Stats
                </h3>

                <div className="space-y-10">
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                      <Icon name="ChartBarIcon" size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">
                        Difficulty
                      </p>
                      <p
                        className={`text-lg font-black ${
                          tech.difficulty === 'Beginner'
                            ? 'text-emerald-600'
                            : tech.difficulty === 'Intermediate'
                              ? 'text-amber-600'
                              : 'text-rose-600'
                        }`}
                      >
                        {tech.difficulty}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                      <Icon name="ClockIcon" size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">
                        Implementation
                      </p>
                      <p className="text-lg font-black text-slate-900">Instant Access</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                      <Icon name="GlobeAltIcon" size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">
                        Success Rate
                      </p>
                      <p className="text-lg font-black text-slate-900">92% High Retention</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 space-y-4">
                  <button className="w-full bg-emerald-600 text-white font-black py-5 rounded-[1.5rem] hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-100 flex items-center justify-center gap-3">
                    Download PDF Guide
                    <Icon name="ArrowDownTrayIcon" size={20} />
                  </button>
                  <button className="w-full bg-slate-900 text-white font-black py-5 rounded-[1.5rem] hover:bg-slate-800 transition-all shadow-xl shadow-slate-100 flex items-center justify-center gap-3">
                    Save to Library
                    <Icon name="BookmarkIcon" size={20} />
                  </button>
                </div>
              </div>

              {/* Related Section */}
              <div className="bg-emerald-50 rounded-[3rem] p-10 border border-emerald-100">
                <h4 className="text-lg font-black text-emerald-900 mb-6 uppercase tracking-widest">
                  Scientific Fact
                </h4>
                <p className="text-emerald-800/80 leading-relaxed font-medium italic">
                  "Research shows that testing yourself (active recall) is up to 50% more effective
                  than re-reading notes or highlighting text."
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
