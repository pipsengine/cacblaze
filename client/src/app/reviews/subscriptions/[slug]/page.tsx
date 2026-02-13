import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Breadcrumb from '@/components/common/Breadcrumb';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';
import { subscriptionReviews } from '@/data/subscriptions';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const review = subscriptionReviews[slug];
  
  if (!review) return { title: 'Review Not Found' };

  return {
    title: `${review.name} Review | Subscriptions - CACBLAZE`,
    description: review.description,
  };
}

export default async function SubscriptionDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const review = subscriptionReviews[slug];

  if (!review) notFound();

  const breadcrumbItems = [
    { name: 'Home', href: '/homepage' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'Subscriptions', href: '/reviews/subscriptions' },
    { name: review.name, href: `/reviews/subscriptions/${slug}` },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20 bg-slate-50">
        {/* Hero Section */}
        <div className="bg-indigo-950 py-20 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:30px_30px]" />
          </div>
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <Breadcrumb items={breadcrumbItems} className="mb-8 text-indigo-300" />
            
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <span className="bg-indigo-500 text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest">
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
                <p className="text-xl text-indigo-100/80 leading-relaxed mb-10 border-l-4 border-indigo-500 pl-8 italic">
                  "{review.description}"
                </p>
                
                <div className="flex items-center gap-6 p-6 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10">
                  <div className="relative w-14 h-14 rounded-2xl overflow-hidden ring-2 ring-indigo-500/50">
                    <AppImage
                      src={review.author.image}
                      alt={review.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-white text-lg">{review.author.name}</p>
                    <p className="text-indigo-400 text-sm font-medium">{review.author.role}</p>
                  </div>
                  <div className="ml-auto text-xs text-indigo-500/60 font-bold uppercase tracking-widest">
                    Published {review.publishDate}
                  </div>
                </div>
              </div>

              <div className="relative aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl ring-1 ring-white/20">
                <AppImage
                  src={review.heroImage}
                  alt={review.name}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/60 to-transparent" />
              </div>
            </div>
          </div>
        </div>

        {/* Specs & Features */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 -mt-16 relative z-20 pb-20">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* Verdict Card */}
              <div className="bg-white rounded-[2.5rem] p-10 shadow-xl border border-slate-100">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600">
                    <Icon name="CheckCircleIcon" size={24} />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900">The Verdict</h2>
                </div>
                <p className="text-xl text-slate-600 leading-relaxed italic mb-8">
                  {review.verdict}
                </p>
                <div className="bg-indigo-50 rounded-2xl p-6 border border-indigo-100">
                  <p className="font-bold text-indigo-900 mb-2 uppercase tracking-widest text-xs">Best For</p>
                  <p className="text-indigo-800 text-lg">{review.bestFor}</p>
                </div>
              </div>

              {/* Pros & Cons */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-emerald-50 rounded-[2.5rem] p-10 border border-emerald-100">
                  <h3 className="text-xl font-bold text-emerald-900 mb-6 flex items-center gap-3">
                    <Icon name="PlusIcon" className="text-emerald-500" />
                    Strengths
                  </h3>
                  <ul className="space-y-4">
                    {review.pros.map((pro, i) => (
                      <li key={i} className="flex gap-3 text-emerald-800 leading-snug">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-rose-50 rounded-[2.5rem] p-10 border border-rose-100">
                  <h3 className="text-xl font-bold text-rose-900 mb-6 flex items-center gap-3">
                    <Icon name="MinusIcon" className="text-rose-500" />
                    Limitations
                  </h3>
                  <ul className="space-y-4">
                    {review.cons.map((con, i) => (
                      <li key={i} className="flex gap-3 text-rose-800 leading-snug">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-2 shrink-0" />
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Quick Specs Sidebar */}
            <div className="space-y-8">
              <div className="bg-white rounded-[2.5rem] p-8 shadow-xl border border-slate-100 sticky top-28">
                <h3 className="text-xl font-bold text-slate-900 mb-8 border-b border-slate-100 pb-4">Membership Specs</h3>
                <div className="space-y-8">
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Price Range</p>
                    <p className="text-lg font-bold text-slate-900 flex items-center gap-2">
                      <Icon name="CurrencyDollarIcon" size={18} className="text-indigo-500" />
                      {review.price}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Billing Cycle</p>
                    <p className="text-lg font-bold text-slate-900 flex items-center gap-2">
                      <Icon name="CalendarIcon" size={18} className="text-indigo-500" />
                      {review.billingCycle}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Free Trial</p>
                    <p className="text-lg font-bold text-slate-900 flex items-center gap-2">
                      <Icon name="GiftIcon" size={18} className="text-indigo-500" />
                      {review.freeTrial}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Cancelation Ease</p>
                    <div className="flex items-center gap-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        review.cancelationEase === 'Very Easy' ? 'bg-emerald-100 text-emerald-700' :
                        review.cancelationEase === 'Moderate' ? 'bg-amber-100 text-amber-700' :
                        'bg-rose-100 text-rose-700'
                      }`}>
                        {review.cancelationEase}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-10">
                  <button className="w-full bg-indigo-600 text-white font-bold py-4 rounded-2xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 flex items-center justify-center gap-2">
                    Check Best Deal
                    <Icon name="ArrowTopRightOnSquareIcon" size={18} />
                  </button>
                  <p className="text-[10px] text-center text-slate-400 mt-4">
                    Affiliate disclosure: We may earn a commission if you sign up through our link.
                  </p>
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
