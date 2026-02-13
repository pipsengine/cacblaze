import { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Breadcrumb from '@/components/common/Breadcrumb';
import Icon from '@/components/ui/AppIcon';

export const metadata: Metadata = {
  title: 'About Us - CACBLAZE',
  description:
    'Learn about CACBLAZE, our mission to provide human-centered knowledge for the AI era, and the team behind the platform.',
};

export default function AboutPage() {
  const breadcrumbItems = [
    { name: 'Home', href: '/homepage' },
    { name: 'About', href: '/about' },
  ];

  const stats = [
    { label: 'Monthly Readers', value: '2M+' },
    { label: 'Expert Guides', value: '2,400+' },
    { label: 'Countries Served', value: '150+' },
    { label: 'Team Members', value: '45' },
  ];

  const values = [
    {
      title: 'Human-Centered',
      description:
        'We believe technology should serve people, not the other way around. Our content is written for humans, by humans, prioritizing clarity and empathy over algorithms.',
      icon: 'UserGroupIcon',
    },
    {
      title: 'Verified Accuracy',
      description:
        'In an era of misinformation, we stand for truth. Every guide is vetted by industry experts before publication, ensuring you get advice you can trust.',
      icon: 'CheckBadgeIcon',
    },
    {
      title: 'Accessible to All',
      description:
        'Knowledge is a right, not a privilege. We are committed to keeping our core educational resources free and accessible to learners everywhere.',
      icon: 'GlobeAmericasIcon',
    },
    {
      title: 'Continuous Innovation',
      description:
        'We constantly evolve our platform to provide better learning experiences, from interactive tools to personalized recommendations.',
      icon: 'SparklesIcon',
    },
  ];

  const leadership = [
    {
      name: 'Dr. Adewale Okafor',
      role: 'Chief Executive Officer',
      bio: 'Former EdTech executive with 15 years of experience scaling digital learning platforms.',
    },
    {
      name: 'Sarah Jenkins',
      role: 'Chief Content Officer',
      bio: 'Award-winning journalist and editor who previously led editorial teams at major tech publications.',
    },
    {
      name: 'Michael Chen',
      role: 'Chief Technology Officer',
      bio: 'Expert in AI and machine learning, focused on building human-centric recommendation engines.',
    },
    {
      name: 'Amara Nwachukwu',
      role: 'Head of Community',
      bio: 'Passionate community builder dedicated to connecting learners and experts across the globe.',
    },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-indigo-900 to-purple-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-10"></div>
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <Breadcrumb items={breadcrumbItems} className="mb-8 text-white/80" />
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                We organize the world's practical knowledge.
              </h1>
              <p className="text-xl text-indigo-100 leading-relaxed">
                CACBLAZE is building the definitive library of "how-to" information for the AI era.
                We combine expert human insight with cutting-edge technology to help you solve
                problems faster, learn new skills, and make better decisions.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-4xl font-bold text-indigo-600 mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-500 font-medium uppercase tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Mission & Story */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <div className="prose prose-lg text-gray-600">
                  <p className="mb-4">
                    Founded in 2024, CACBLAZE started with a simple, frustration-born question: "Why
                    is it still so hard to find reliable, step-by-step instructions online?"
                  </p>
                  <p className="mb-4">
                    The internet is flooded with SEO spam, AI-generated fluff, and outdated
                    information. Finding a simple answer often feels like searching for a needle in
                    a haystack. We knew there had to be a better way.
                  </p>
                  <p className="mb-4">
                    We set out to build a sanctuary of trust—a platform where clarity, accuracy, and
                    user experience come first. Whether you're starting a business, fixing a leaky
                    faucet, or learning to code, CACBLAZE provides the exact steps you need to
                    succeed.
                  </p>
                  <p>
                    Today, we're not just a content site; we're a community of experts, makers, and
                    lifelong learners dedicated to empowering you. We believe that when knowledge is
                    accessible and actionable, human potential is limitless.
                  </p>
                </div>
              </div>
              <div className="grid gap-6">
                {values.map((value) => (
                  <div
                    key={value.title}
                    className="bg-white p-6 rounded-2xl shadow-sm flex items-start gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                      <Icon name={value.icon as any} size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Leadership</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Guided by a team of industry veterans passionate about education and technology.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {leadership.map((leader) => (
                <div key={leader.name} className="group">
                  <div className="aspect-square rounded-2xl bg-gray-100 mb-4 overflow-hidden relative">
                    {/* Placeholder for real images */}
                    <div className="absolute inset-0 flex items-center justify-center text-gray-300">
                      <Icon name="UserIcon" size={64} />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                    {leader.name}
                  </h3>
                  <p className="text-indigo-600 font-medium text-sm mb-2">{leader.role}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{leader.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Us CTA */}
        <section className="py-24 bg-indigo-900 text-white text-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-6">Built by Experts, For Everyone</h2>
            <p className="text-xl text-indigo-100 max-w-2xl mx-auto mb-12">
              Our team comes from top tech companies, publishing houses, and universities. We are
              united by a passion for clarity and quality.
            </p>
            <a
              href="/careers"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-900 font-bold rounded-full hover:bg-indigo-50 transition-colors"
            >
              Join Our Mission
              <Icon name="ArrowRightIcon" size={20} />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
