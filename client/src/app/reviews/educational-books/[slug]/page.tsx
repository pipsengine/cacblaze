import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Breadcrumb from '@/components/common/Breadcrumb';
import Icon from '@/components/ui/AppIcon';
import { educationalBooks } from '@/data/educational-books';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const book = educationalBooks[slug];
  
  if (!book) {
    return {
      title: 'Book Not Found - CACBLAZE',
    };
  }

  return {
    title: `${book.title} by ${book.author}: Review & Key Takeaways - CACBLAZE`,
    description: `Is ${book.title} worth reading? Read our detailed review of ${book.author}'s book on ${book.category}, including key takeaways and verdict.`,
  };
}

export default async function EducationalBookDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const book = educationalBooks[slug];

  if (!book) {
    notFound();
  }

  const breadcrumbItems = [
    { name: 'Home', href: '/homepage' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'Educational Books', href: '/reviews/educational-books' },
    { name: book.title, href: `/reviews/educational-books/${slug}` },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[500px] w-full">
          <Image
            src={book.heroImage}
            alt={book.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-16 w-full">
              <Breadcrumb items={breadcrumbItems} className="mb-6 text-white/80" />
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {book.category}
                </span>
                <div className="flex items-center gap-1 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-white">
                  <Icon name="StarIcon" size={14} className="text-yellow-400 fill-current" />
                  <span className="font-bold text-sm">{book.rating}</span>
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl">
                {book.title}
              </h1>
              <p className="text-xl text-white/90 mb-8 max-w-2xl">
                By {book.author}
              </p>
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-emerald-500">
                  <Image
                    src={book.reviewer.image}
                    alt={book.reviewer.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-white">
                  <p className="font-bold">{book.reviewer.name}</p>
                  <p className="text-sm text-white/70">{book.reviewer.role} • {book.publishDate}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-12">
                {/* Introduction */}
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview</h2>
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    {book.description}
                  </p>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Takeaways</h3>
                  <div className="space-y-4">
                    {book.keyTakeaways.map((takeaway, index) => (
                      <div key={index} className="flex gap-4 p-4 rounded-2xl bg-emerald-50 border border-emerald-100">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-sm">
                          {index + 1}
                        </div>
                        <p className="text-gray-700 leading-relaxed">{takeaway}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pros & Cons */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                      <Icon name="CheckCircleIcon" className="text-emerald-500" />
                      What We Loved
                    </h3>
                    <ul className="space-y-4">
                      {book.pros.map((pro, index) => (
                        <li key={index} className="flex items-start gap-3 text-gray-600">
                          <Icon name="CheckIcon" size={18} className="text-emerald-500 mt-1 flex-shrink-0" />
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                      <Icon name="XCircleIcon" className="text-red-500" />
                      What Could Be Better
                    </h3>
                    <ul className="space-y-4">
                      {book.cons.map((con, index) => (
                        <li key={index} className="flex items-start gap-3 text-gray-600">
                          <Icon name="XMarkIcon" size={18} className="text-red-500 mt-1 flex-shrink-0" />
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Verdict */}
                <div className="bg-emerald-900 rounded-3xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-10">
                    <Icon name="ChatBubbleBottomCenterTextIcon" size={120} />
                  </div>
                  <h3 className="text-3xl font-bold mb-6">Final Verdict</h3>
                  <p className="text-xl text-emerald-100 leading-relaxed mb-8 italic">
                    "{book.verdict}"
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="StarIcon" size={20} className={i < Math.floor(book.rating) ? 'fill-current' : 'opacity-30'} />
                      ))}
                    </div>
                    <span className="font-bold text-lg">{book.rating} / 5</span>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Book Info Card */}
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 sticky top-28">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Reading Guide</h3>
                  <div className="space-y-6">
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Best For</p>
                      <p className="text-gray-700 leading-relaxed">
                        {book.whoShouldRead}
                      </p>
                    </div>
                    <div className="pt-6 border-t border-gray-100">
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Author</p>
                      <p className="text-gray-900 font-bold">{book.author}</p>
                    </div>
                    <div className="pt-6 border-t border-gray-100">
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Category</p>
                      <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold uppercase">
                        {book.category}
                      </span>
                    </div>
                    <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-2xl transition-all shadow-lg shadow-emerald-200 flex items-center justify-center gap-2 mt-4">
                      Get This Book
                      <Icon name="ArrowTopRightOnSquareIcon" size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
