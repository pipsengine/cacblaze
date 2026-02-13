import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Breadcrumb from '@/components/common/Breadcrumb';
import Icon from '@/components/ui/AppIcon';
import { coursePlatformReviews } from '@/data/course-platforms';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const review = coursePlatformReviews[slug];

  if (!review) return { title: 'Review Not Found' };

  return {
    title: `${review.name} Review | Course Platforms - CACBLAZE`,
    description: review.description,
  };
}

export default async function CoursePlatformDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const review = coursePlatformReviews[slug];

  if (!review) notFound();

  const breadcrumbItems = [
    { name: 'Home', href: '/homepage' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'Course Platforms', href: '/reviews/course-platforms' },
    { name: review.name, href: `/reviews/course-platforms/${slug}` },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20 bg-slate-50">
        {/* Hero Section */}
        <div className="bg-emerald-950 py-20 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:30px_30px]" />
          </div>
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <Breadcrumb items={breadcrumbItems} className="mb-8 text-emerald-300" />

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <span className="bg-emerald-500 text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest">
                    {review.category}
                  </span>
                  <div className="flex items-center text-yellow-400 font-bold">
                    <Icon name="StarIcon" size={20} className="fill-current" />
                    <span className="ml-2 text-lg">{review.rating} / 5.0</span>
                  </div>
                </div>
                <h1 className="text-5xl lg:text-7xl font-bold mb-8 tracking-tight leading-tight">
                  {review.name}
                </h1>
                <p className="text-xl text-emerald-100/80 leading-relaxed mb-10 border-l-4 border-emerald-500 pl-8 italic">
                  "{review.description}"
                </p>

                <div className="flex items-center gap-6 p-6 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10">
                  <div className="relative w-14 h-14 rounded-2xl overflow-hidden ring-2 ring-emerald-500/50">
                    <Image
                      src={review.author.image}
                      alt={review.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-white text-lg">{review.author.name}</p>
                    <p className="text-emerald-400 text-sm font-medium">{review.author.role}</p>
                  </div>
                  <div className="ml-auto text-xs text-emerald-500/60 font-bold uppercase tracking-widest">
                    Published {review.publishDate}
                  </div>
                </div>
              </div>

              <div className="relative aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl ring-1 ring-white/20">
                <Image
                  src={review.heroImage}
                  alt={review.name}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/60 to-transparent" />
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-16">
              {/* Top Subjects */}
              <section className="bg-white rounded-[2.5rem] p-10 border border-slate-200 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-[5rem] -mr-8 -mt-8 flex items-center justify-center">
                  <Icon name="AcademicCapIcon" size={32} className="text-emerald-300 ml-4 mt-4" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-10 flex items-center gap-4">
                  <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center">
                    <Icon name="BookOpenIcon" size={24} />
                  </div>
                  Leading Subject Areas
                </h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  {review.topSubjects.map((subject, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100 hover:border-emerald-200 hover:bg-emerald-50/50 transition-all group"
                    >
                      <span className="text-2xl group-hover:scale-110 transition-transform">
                        🎓
                      </span>
                      <span className="text-slate-700 font-bold">{subject}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Analysis Grid */}
              <div className="grid md:grid-cols-2 gap-10">
                <section className="bg-white rounded-[2.5rem] p-10 border border-slate-200 shadow-sm border-t-8 border-t-emerald-500">
                  <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                    <Icon name="CheckCircleIcon" size={28} className="text-emerald-500" />
                    What We Liked
                  </h3>
                  <ul className="space-y-5">
                    {review.pros.map((pro, i) => (
                      <li key={i} className="flex items-start gap-4 text-slate-600 leading-relaxed">
                        <div className="mt-1.5 w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                        {pro}
                      </li>
                    ))}
                  </ul>
                </section>
                <section className="bg-white rounded-[2.5rem] p-10 border border-slate-200 shadow-sm border-t-8 border-t-rose-500">
                  <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                    <Icon name="XCircleIcon" size={28} className="text-rose-500" />
                    Areas for Growth
                  </h3>
                  <ul className="space-y-5">
                    {review.cons.map((con, i) => (
                      <li key={i} className="flex items-start gap-4 text-slate-600 leading-relaxed">
                        <div className="mt-1.5 w-2 h-2 rounded-full bg-rose-500 flex-shrink-0 shadow-[0_0_10px_rgba(244,63,94,0.5)]" />
                        {con}
                      </li>
                    ))}
                  </ul>
                </section>
              </div>

              {/* Verdict Card */}
              <section className="bg-emerald-600 rounded-[3rem] p-12 text-white shadow-2xl relative overflow-hidden group">
                <div className="absolute -right-20 -bottom-20 opacity-10 group-hover:rotate-12 transition-transform duration-1000">
                  <Icon name="AcademicCapIcon" size={300} />
                </div>
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-8 border border-white/30">
                    Final Assessment
                  </div>
                  <h2 className="text-4xl font-bold mb-8">The CACBLAZE Verdict</h2>
                  <p className="text-2xl leading-relaxed text-emerald-50 font-medium italic">
                    "{review.verdict}"
                  </p>
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-10">
              <div className="bg-white rounded-[2.5rem] p-10 border border-slate-200 shadow-xl sticky top-28">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-10 border-b border-slate-100 pb-6">
                  Platform Blueprint
                </h3>
                <div className="space-y-10">
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center">
                      <Icon name="CurrencyDollarIcon" size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                        Pricing Model
                      </p>
                      <p className="text-slate-900 font-bold">{review.pricing}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center">
                      <Icon name="Square3Stack3DIcon" size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                        Content Volume
                      </p>
                      <p className="text-slate-900 font-bold">{review.courseCount}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center">
                      <Icon name="IdentificationIcon" size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                        Certificates
                      </p>
                      <div className="flex items-center gap-2">
                        <span
                          className={`w-2.5 h-2.5 rounded-full ${review.certificates ? 'bg-emerald-500' : 'bg-rose-500'}`}
                        />
                        <p className="text-slate-900 font-bold">
                          {review.certificates ? 'Accredited' : 'No Official Certs'}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">
                      Ideal Learner
                    </p>
                    <p className="text-slate-700 font-medium leading-relaxed italic">
                      "{review.bestFor}"
                    </p>
                  </div>

                  <button className="w-full bg-emerald-600 text-white font-bold py-5 rounded-[1.5rem] hover:bg-emerald-700 transition-all flex items-center justify-center gap-3 group shadow-lg shadow-emerald-100 hover:-translate-y-1">
                    Visit Platform
                    <Icon
                      name="ArrowTopRightOnSquareIcon"
                      size={20}
                      className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
