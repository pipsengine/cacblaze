import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Breadcrumb from '@/components/common/Breadcrumb';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';
import { studyTechniques } from '@/data/study-techniques';

export const metadata: Metadata = {
  title: 'Study Techniques & Learning Methods - CACBLAZE',
  description:
    'Master the art of learning with proven study techniques like Pomodoro, Feynman, and Spaced Repetition.',
};

export default function StudyTechniquesListingPage() {
  const techniques = Object.values(studyTechniques);
  const breadcrumbItems = [
    { name: 'Home', href: '/homepage' },
    { name: 'Education', href: '/education' },
    { name: 'Study Techniques', href: '/education/study-techniques' },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20 bg-emerald-50/30">
        {/* Hero Header */}
        <section className="bg-emerald-900 py-24 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:30px_30px]" />
          </div>
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <Breadcrumb items={breadcrumbItems} className="mb-8 text-emerald-300" />
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6 border border-emerald-500/30">
                Cognitive Science
              </span>
              <h1 className="text-5xl lg:text-7xl font-extrabold mb-8 tracking-tight">
                Study <span className="text-emerald-400">Smarter</span>, Not Harder
              </h1>
              <p className="text-xl text-emerald-100/80 leading-relaxed mb-10">
                Unlock your brain's potential with science-backed learning methods. From memory
                optimization to focus management, discover the tools for academic excellence.
              </p>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <Icon name="AcademicCapIcon" size={20} />
                  </div>
                  <span className="text-sm font-semibold">Evidence Based</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <Icon name="BoltIcon" size={20} />
                  </div>
                  <span className="text-sm font-semibold">Fast Implementation</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <Icon name="CheckCircleIcon" size={20} />
                  </div>
                  <span className="text-sm font-semibold">Verified Results</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Techniques Grid */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {techniques.map((tech) => (
              <Link
                key={tech.id}
                href={`/education/study-techniques/${tech.slug}`}
                className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-emerald-100 flex flex-col h-full"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <AppImage
                    src={tech.heroImage}
                    alt={tech.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-emerald-950/20 to-transparent" />
                  <div className="absolute top-6 left-6">
                    <span className="bg-emerald-500 text-white text-[10px] font-bold px-4 py-2 rounded-full uppercase tracking-widest shadow-lg">
                      {tech.category}
                    </span>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-white font-bold">
                        <Icon name="StarIcon" size={16} className="text-yellow-400 fill-current" />
                        <span className="ml-1.5">{tech.rating}</span>
                      </div>
                      <span
                        className={`text-[10px] font-bold px-3 py-1 rounded-md uppercase tracking-wider ${
                          tech.difficulty === 'Beginner'
                            ? 'bg-emerald-400/20 text-emerald-200'
                            : tech.difficulty === 'Intermediate'
                              ? 'bg-amber-400/20 text-amber-200'
                              : 'bg-rose-400/20 text-rose-200'
                        }`}
                      >
                        {tech.difficulty}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-10 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-emerald-600 transition-colors">
                    {tech.name}
                  </h3>
                  <p className="text-slate-600 line-clamp-3 mb-8 flex-grow leading-relaxed italic">
                    "{tech.description}"
                  </p>

                  <div className="flex items-center justify-between pt-8 border-t border-emerald-50">
                    <div className="flex items-center gap-3">
                      <div className="relative w-10 h-10 rounded-xl overflow-hidden ring-2 ring-emerald-50">
                        <AppImage
                          src={tech.author.image}
                          alt={tech.author.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-slate-900">{tech.author.name}</span>
                        <span className="text-[10px] text-emerald-600 font-medium uppercase tracking-tight">
                          {tech.author.role}
                        </span>
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                      <Icon name="ArrowRightIcon" size={18} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Motivation Section */}
        <section className="bg-white py-24 border-t border-emerald-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative rounded-[3rem] overflow-hidden aspect-video shadow-2xl">
                <AppImage
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Students studying together"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-slate-900 mb-6">
                  Join the Community of High Achievers
                </h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  Learning is a lifelong journey. We provide the latest research-based strategies to
                  help you navigate through complex subjects and competitive exams with confidence.
                </p>
                <div className="space-y-4">
                  {[
                    'Weekly study marathons',
                    'Expert-led masterclasses',
                    'Resource sharing network',
                    'Progress tracking tools',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <Icon name="CheckIcon" size={20} className="text-emerald-500" />
                      <span className="font-semibold text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
                <button className="mt-10 bg-emerald-600 text-white font-bold px-8 py-4 rounded-2xl hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-100">
                  Access Free Resources
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
