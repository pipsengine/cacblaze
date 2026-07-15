import { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Breadcrumb from '@/components/common/Breadcrumb';

export const metadata: Metadata = {
  title: 'Press & Media - CACBLAZE',
  description: 'News, media assets, and press contact information for CACBLAZE.',
  alternates: { canonical: '/press' },
};

export default function PressPage() {
  const breadcrumbItems = [
    { name: 'Home', href: '/homepage' },
    { name: 'Press', href: '/press' },
  ];

  const pressReleases = [
    {
      date: '2026',
      title: 'CACBLAZE Expands Its Practical Knowledge Library',
      source: 'CACBLAZE Newsroom',
      summary:
        'The platform continues to add Nigeria-focused guides across technology, education, careers, finance, lifestyle, and local resources.',
    },
  ];

  const spokespeople = [
    {
      name: 'CACBLAZE Communications',
      role: 'Media contact',
      bio: 'Available for verified information about CACBLAZE, its publishing approach, and its public resources.',
    },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        <section className="py-20 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <Breadcrumb items={breadcrumbItems} className="mb-6 text-white/80" />
              <h1 className="text-5xl font-bold mb-6">Newsroom</h1>
              <p className="text-xl text-gray-300">
                Latest updates, press releases, and brand resources from CACBLAZE.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-16">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-16">
                {/* Press Releases */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-4 border-b border-gray-100">
                    Latest News
                  </h2>
                  <div className="space-y-10">
                    {pressReleases.map((item, idx) => (
                      <div key={idx} className="group cursor-pointer">
                        <div className="text-sm text-gray-500 mb-2 font-medium uppercase tracking-wider">
                          {item.date} • {item.source}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors mb-3">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 mb-4 leading-relaxed">{item.summary}</p>
                        <div className="text-indigo-600 font-medium text-sm">Platform update</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Company Boilerplate */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-100">
                    About CACBLAZE
                  </h2>
                  <div className="prose prose-lg text-gray-600">
                    <p>
                      CACBLAZE is a digital knowledge platform publishing accessible guides,
                      explainers, reviews, and practical resources, with a primary focus on the
                      needs and context of readers in Nigeria.
                    </p>
                    <p className="mt-4">
                      Our mission is to make useful knowledge easier to understand and act on. We
                      use publishing automation alongside quality checks, sourcing requirements,
                      and reader feedback to improve the library over time.
                    </p>
                  </div>
                </div>

                {/* Spokespeople */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-4 border-b border-gray-100">
                    Spokespeople
                  </h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    {spokespeople.map((person, idx) => (
                      <div key={idx} className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                        <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold text-xl mb-4">
                          {person.name.charAt(0)}
                        </div>
                        <h3 className="text-lg font-bold text-gray-900">{person.name}</h3>
                        <p className="text-indigo-600 text-sm font-medium mb-3">{person.role}</p>
                        <p className="text-gray-600 text-sm">{person.bio}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Media Contact</h3>
                  <p className="text-gray-600 mb-6 text-sm">
                    For press inquiries, interviews, or speaking requests, please contact our
                    communications team.
                  </p>
                  <a
                    href="mailto:press@cacblaze.com"
                    className="block w-full py-3 bg-white border border-gray-200 text-gray-900 font-semibold rounded-lg text-center hover:border-indigo-600 hover:text-indigo-600 transition-colors mb-8"
                  >
                    press@cacblaze.com
                  </a>

                  <h3 className="text-xl font-bold text-gray-900 mb-4">Brand Assets</h3>
                  <p className="text-sm text-gray-600">
                    Request current logos and approved brand information from the media contact.
                  </p>
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
