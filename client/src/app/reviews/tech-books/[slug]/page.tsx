import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { headers } from 'next/headers';
import { generateReviewSchema } from '@/utils/schemaMarkup';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Breadcrumb from '@/components/common/Breadcrumb';
import Icon from '@/components/ui/AppIcon';
import { techBookReviews } from '@/data/tech-books';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const review = techBookReviews[slug];

  if (!review) return { title: 'Review Not Found' };

  return {
    title: `${review.name} Review | Tech Books - CACBLAZE`,
    description: review.description,
    alternates: { canonical: `/reviews/tech-books/${review.slug}` },
  };
}

export default async function TechBookDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const review = techBookReviews[slug];

  if (!review) notFound();

  const h = await headers();
  const proto = h.get('x-forwarded-proto') ?? 'https';
  const host = h.get('x-forwarded-host') ?? h.get('host') ?? 'cacblaze.com';
  const origin = `${proto}://${host}`;
  const reviewLd = generateReviewSchema({
    itemName: review.name,
    rating: review.rating,
    reviewBody: review.verdict,
    author: review.author.name,
    datePublished: review.publishDate,
  });
  const jsonLd = [{ ...reviewLd, url: `${origin}/reviews/tech-books/${slug}` }];

  const breadcrumbItems = [
    { name: 'Home', href: '/homepage' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'Tech Books', href: '/reviews/tech-books' },
    { name: review.name, href: `/reviews/tech-books/${slug}` },
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner':
        return 'text-emerald-500';
      case 'Intermediate':
        return 'text-amber-500';
      case 'Advanced':
        return 'text-rose-500';
      default:
        return 'text-slate-500';
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="min-h-screen pt-20 bg-slate-50">
        {/* Hero Section */}
        <div className="bg-slate-900 py-16 text-white overflow-hidden relative">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:30px_30px]" />
          </div>
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <Breadcrumb items={breadcrumbItems} className="mb-8 text-slate-400" />

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="bg-indigo-500 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
                    {review.category}
                  </span>
                  <div className="flex items-center text-yellow-400">
                    <Icon name="StarIcon" size={18} className="fill-current" />
                    <span className="ml-1.5 font-bold">{review.rating} / 5.0</span>
                  </div>
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">{review.name}</h1>
                <p className="text-xl text-slate-300 leading-relaxed italic mb-8 border-l-4 border-indigo-500 pl-6">
                  {review.description}
                </p>

                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-slate-700">
                    <Image
                      src={review.author.image}
                      alt={review.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-white">{review.author.name}</p>
                    <p className="text-sm text-slate-400">{review.author.role}</p>
                  </div>
                  <div className="ml-auto text-sm text-slate-500 font-medium">
                    Reviewed on {review.publishDate}
                  </div>
                </div>
              </div>

              <div className="relative aspect-video lg:aspect-square rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
                <Image
                  src={review.heroImage}
                  alt={review.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Column */}
            <div className="lg:col-span-2 space-y-12">
              {/* Key Concepts */}
              <section className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                  <Icon name="CommandLineIcon" size={28} className="text-indigo-600" />
                  Core Engineering Concepts
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {review.keyConcepts.map((concept, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-indigo-100 hover:bg-indigo-50/30 transition-colors"
                    >
                      <div className="mt-1 flex-shrink-0 w-5 h-5 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-[10px] font-bold">
                        {index + 1}
                      </div>
                      <span className="text-slate-700 font-medium">{concept}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Pros & Cons */}
              <div className="grid md:grid-cols-2 gap-8">
                <section className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm border-t-4 border-t-emerald-500">
                  <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <Icon name="CheckCircleIcon" size={24} className="text-emerald-500" />
                    Technical Merits
                  </h3>
                  <ul className="space-y-4">
                    {review.pros.map((pro, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-600">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                        {pro}
                      </li>
                    ))}
                  </ul>
                </section>
                <section className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm border-t-4 border-t-rose-500">
                  <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <Icon name="XCircleIcon" size={24} className="text-rose-500" />
                    Limitations
                  </h3>
                  <ul className="space-y-4">
                    {review.cons.map((con, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-600">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-rose-500 flex-shrink-0" />
                        {con}
                      </li>
                    ))}
                  </ul>
                </section>
              </div>

              {/* Verdict */}
              <section className="bg-indigo-600 rounded-2xl p-10 text-white shadow-xl relative overflow-hidden">
                <div className="absolute -right-8 -bottom-8 opacity-10 rotate-12">
                  <Icon name="AcademicCapIcon" size={200} />
                </div>
                <div className="relative z-10">
                  <h2 className="text-3xl font-bold mb-6">The Verdict</h2>
                  <p className="text-xl leading-relaxed text-indigo-50 opacity-90 italic">
                    "{review.verdict}"
                  </p>
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm sticky top-28">
                <h3 className="text-lg font-bold text-slate-900 mb-6 border-b border-slate-100 pb-4 uppercase tracking-wider text-sm">
                  Technical Specifications
                </h3>
                <div className="space-y-6">
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1.5">
                      Primary Author
                    </p>
                    <p className="text-slate-900 font-semibold">{review.author_book}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1.5">
                      Target Difficulty
                    </p>
                    <div
                      className={`flex items-center gap-2 font-bold ${getDifficultyColor(review.difficulty)}`}
                    >
                      <Icon name="SignalIcon" size={18} />
                      {review.difficulty}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1.5">
                      Best Suited For
                    </p>
                    <p className="text-slate-700 text-sm leading-relaxed">{review.bestFor}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1.5">
                      Technical Breadth
                    </p>
                    <p className="text-slate-900 font-semibold">{review.pages} Pages</p>
                  </div>
                  <button className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-slate-800 transition-colors flex items-center justify-center gap-2 group shadow-lg shadow-slate-200">
                    Get the Book
                    <Icon
                      name="ArrowTopRightOnSquareIcon"
                      size={18}
                      className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
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
