import { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Breadcrumb from '@/components/common/Breadcrumb';
import Icon from '@/components/ui/AppIcon';

export const metadata: Metadata = {
  title: 'Press & Media - CACBLAZE',
  description: 'News, media assets, and press contact information for CACBLAZE.',
};

export default function PressPage() {
  const breadcrumbItems = [
    { name: 'Home', href: '/homepage' },
    { name: 'Press', href: '/press' },
  ];

  const pressReleases = [
    {
      date: 'Oct 15, 2025',
      title: 'CACBLAZE Reaches 2 Million Monthly Active Users',
      source: 'Business Wire',
      summary:
        'Milestone achievement highlights rapid growth in the digital education sector, driven by new personalized learning features and global expansion.',
    },
    {
      date: 'Aug 02, 2025',
      title: 'Launching the New Education Hub: A New Era for Online Learning',
      source: 'CACBLAZE Blog',
      summary:
        'Introducing a comprehensive suite of tools designed to empower self-directed learners and educators with AI-driven recommendations.',
    },
    {
      date: 'May 10, 2025',
      title: 'CACBLAZE Raises Series A to Expand Global Content Operations',
      source: 'TechCrunch',
      summary:
        'Investment led by Future Ventures will fuel content acquisition and platform development to serve emerging markets.',
    },
  ];

  const spokespeople = [
    {
      name: 'Dr. Adewale Okafor',
      role: 'Chief Executive Officer',
      bio: 'Expert in EdTech scaling, digital literacy, and the future of work. Available for commentary on global education trends.',
    },
    {
      name: 'Sarah Jenkins',
      role: 'Chief Content Officer',
      bio: 'Veteran journalist available to discuss content strategy, media integrity, and the evolving landscape of digital publishing.',
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
                        <div className="text-indigo-600 font-medium flex items-center gap-1 text-sm group-hover:translate-x-1 transition-transform">
                          Read Full Story <Icon name="ArrowRightIcon" size={16} />
                        </div>
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
                      CACBLAZE is a leading global digital knowledge platform dedicated to
                      empowering individuals through accessible, high-quality education and
                      information. Founded in 2023, the company has rapidly grown to serve over 2
                      million monthly active users across 150 countries.
                    </p>
                    <p className="mt-4">
                      Our mission is to democratize access to expert knowledge, bridging the gap
                      between traditional education and the needs of the modern workforce. Through
                      our proprietary AI-driven recommendation engine, we connect learners with the
                      resources they need to succeed in their careers and personal lives.
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
                  <div className="space-y-3">
                    <button className="flex items-center justify-between w-full p-3 bg-white rounded-lg border border-gray-200 hover:border-indigo-300 transition-colors">
                      <span className="text-sm font-medium text-gray-700">
                        Logo Pack (SVG, PNG)
                      </span>
                      <Icon name="ArrowDownTrayIcon" size={16} className="text-gray-400" />
                    </button>
                    <button className="flex items-center justify-between w-full p-3 bg-white rounded-lg border border-gray-200 hover:border-indigo-300 transition-colors">
                      <span className="text-sm font-medium text-gray-700">Brand Guidelines</span>
                      <Icon name="ArrowDownTrayIcon" size={16} className="text-gray-400" />
                    </button>
                    <button className="flex items-center justify-between w-full p-3 bg-white rounded-lg border border-gray-200 hover:border-indigo-300 transition-colors">
                      <span className="text-sm font-medium text-gray-700">Executive Headshots</span>
                      <Icon name="ArrowDownTrayIcon" size={16} className="text-gray-400" />
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
