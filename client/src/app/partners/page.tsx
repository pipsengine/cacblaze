import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Breadcrumb from '@/components/common/Breadcrumb';
import Icon from '@/components/ui/AppIcon';

export const metadata: Metadata = {
  title: 'Partners - CACBLAZE',
  description:
    'Explore responsible content, resource, and advertising partnerships with CACBLAZE.',
  alternates: { canonical: '/partners' },
};

export default function PartnersPage() {
  const breadcrumbItems = [
    { name: 'Home', href: '/homepage' },
    { name: 'Partners', href: '/partners' },
  ];

  const stats = [
    { label: 'Primary Audience', value: 'Nigeria' },
    { label: 'Content Access', value: 'Free' },
    { label: 'Topics', value: 'Broad' },
    { label: 'Inquiries', value: 'Open' },
  ];

  const programs = [
    {
      title: 'Content Syndication',
      description:
        'Propose useful, original resources that fit our editorial standards and clearly disclose any commercial relationship.',
      icon: 'DocumentDuplicateIcon',
      benefits: ['Global Reach', 'Brand Authority', 'Traffic Backlinks'],
    },
    {
      title: 'Resource Partnerships',
      description:
        'Work with us on public-interest guides, educational resources, or tools that provide clear value to readers.',
      icon: 'CurrencyDollarIcon',
      benefits: ['Useful Resources', 'Clear Attribution', 'Reader Value'],
    },
    {
      title: 'Advertising',
      description:
        'Reach our high-intent audience of professionals and students with native advertising solutions. Place your brand in a context where users are actively seeking knowledge.',
      icon: 'MegaphoneIcon',
      benefits: ['Targeted Reach', 'Native Formats', 'Performance Analytics'],
    },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        <section className="py-20 bg-teal-900 text-white relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-teal-800 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-teal-500 rounded-full blur-3xl opacity-30"></div>

          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
            <Breadcrumb items={breadcrumbItems} className="mb-8 justify-center text-white/80" />
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Grow with Us</h1>
            <p className="text-xl text-teal-100 max-w-2xl mx-auto mb-12">
              Work with us on useful, transparent projects that create value for readers.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto border-t border-teal-800 pt-12">
              {stats.map((stat, idx) => (
                <div key={idx}>
                  <div className="text-4xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-teal-200 text-sm font-medium uppercase tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Partnership Programs</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Choose the partnership model that fits your business goals. We provide the tools and
                support you need to succeed.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-24">
              {programs.map((program) => (
                <div
                  key={program.title}
                  className="p-8 rounded-2xl bg-white border border-gray-200 hover:border-teal-500 hover:shadow-xl transition-all group flex flex-col h-full"
                >
                  <div className="w-16 h-16 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon name={program.icon} size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{program.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                    {program.description}
                  </p>

                  <ul className="space-y-2 mb-8">
                    {program.benefits?.map((benefit, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-500">
                        <Icon name="CheckCircleIcon" size={16} className="text-teal-500 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  <Link href="/contact?reason=partnership" className="w-full py-3 rounded-lg border border-teal-600 text-teal-600 font-bold hover:bg-teal-50 transition-colors text-center">
                    Learn More
                  </Link>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="bg-gray-50 rounded-3xl p-12 text-center border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to get started?</h2>
              <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
                Fill out our partnership inquiry form and a member of our business development team
                will respond as soon as possible.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-teal-600 text-white font-bold rounded-full hover:bg-teal-700 transition-colors"
              >
                Contact Partnerships
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
