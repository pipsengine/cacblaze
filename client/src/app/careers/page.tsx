import { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Breadcrumb from '@/components/common/Breadcrumb';
import Icon from '@/components/ui/AppIcon';

export const metadata: Metadata = {
  title: 'Careers - CACBLAZE',
  description: 'Join the team building the future of knowledge. View our open positions and learn about our culture.',
};

export default function CareersPage() {
  const breadcrumbItems = [
    { name: 'Home', href: '/homepage' },
    { name: 'Careers', href: '/careers' },
  ];

  const benefits = [
    { title: 'Remote-First Culture', description: 'Work from anywhere in the world. We believe in output, not hours in a chair. We provide a $1,000 home office stipend to get you set up.', icon: 'GlobeAmericasIcon' },
    { title: 'Top-Tier Compensation', description: 'We pay in the top 10% of the market. Our compensation includes competitive salary, significant equity packages, and annual performance bonuses.', icon: 'CurrencyDollarIcon' },
    { title: 'Comprehensive Wellness', description: 'Full health, dental, and vision insurance for you and your family. Plus, a monthly wellness stipend for gym memberships or mental health apps.', icon: 'HeartIcon' },
    { title: 'Continuous Learning', description: '$2,000 annual stipend for courses, books, and conferences. We also host weekly internal tech talks and "Learn Anything" days.', icon: 'AcademicCapIcon' },
    { title: 'Generous Time Off', description: 'Unlimited PTO with a mandatory minimum of 3 weeks per year. We also close the office for two weeks in December to recharge.', icon: 'SunIcon' },
    { title: 'Parental Support', description: '16 weeks of fully paid parental leave for all new parents, plus a gradual return-to-work program.', icon: 'UserGroupIcon' },
  ];

  const culture = [
    { title: 'Ownership', description: 'We don’t micromanage. You own your projects from conception to launch.' },
    { title: 'Transparency', description: 'We share everything—financials, board decks, and strategy—so you can make informed decisions.' },
    { title: 'Customer Obsession', description: 'We prioritize our users above everything else. If it doesn’t help the user, we don’t do it.' },
    { title: 'Bias for Action', description: 'We value speed and iteration. Perfect is the enemy of good. Ship, learn, and improve.' },
  ];

  const openRoles = [
    { title: 'Senior Full Stack Engineer', department: 'Engineering', location: 'Remote (Global)', type: 'Full-time' },
    { title: 'Content Strategy Lead', department: 'Editorial', location: 'London / Remote', type: 'Full-time' },
    { title: 'Product Designer', department: 'Design', location: 'New York / Remote', type: 'Full-time' },
    { title: 'SEO Specialist', department: 'Marketing', location: 'Lagos / Remote', type: 'Contract' },
    { title: 'Community Manager', department: 'Community', location: 'Remote (EMEA)', type: 'Full-time' },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-indigo-900 text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <Breadcrumb items={breadcrumbItems} className="mb-8 justify-center text-white/80" />
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Do the best work of your life.
            </h1>
            <p className="text-xl text-indigo-100 max-w-2xl mx-auto mb-10">
              We're looking for ambitious people who want to build the future of human knowledge. Join us in our mission to make the world smarter.
            </p>
            <a href="#open-roles" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-900 font-bold rounded-full hover:bg-indigo-50 transition-colors">
              View Open Positions
            </a>
          </div>
        </section>

        {/* Culture Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
             <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
               <div>
                 <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Culture</h2>
                 <p className="text-lg text-gray-600 mb-6">
                   At CACBLAZE, we're building more than just a product; we're building a company where people can thrive. We are a diverse team of dreamers, doers, and thinkers.
                 </p>
                 <p className="text-lg text-gray-600">
                   We believe in small, autonomous teams that move fast. We foster an environment of psychological safety where it's okay to fail, as long as we learn from it.
                 </p>
               </div>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                 {culture.map((item) => (
                   <div key={item.title} className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                     <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                     <p className="text-sm text-gray-600">{item.description}</p>
                   </div>
                 ))}
               </div>
             </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Perks & Benefits</h2>
              <p className="text-lg text-gray-600">We take care of our people so they can take care of our users.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-6">
                    <Icon name={benefit.icon as any} size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Hiring Process */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Our Hiring Process</h2>
            <div className="grid md:grid-cols-4 gap-8 relative">
               <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -z-10 hidden md:block"></div>
               {[
                 { step: '1', title: 'Application', desc: 'Submit your resume and portfolio.' },
                 { step: '2', title: 'Screening', desc: '30-min chat with a recruiter.' },
                 { step: '3', title: 'Skills Interview', desc: 'Technical or practical assessment.' },
                 { step: '4', title: 'Culture Fit', desc: 'Meet the team and leadership.' },
               ].map((item) => (
                 <div key={item.step} className="bg-white p-6">
                    <div className="w-10 h-10 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center mx-auto mb-4 relative z-10">
                      {item.step}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                 </div>
               ))}
            </div>
          </div>
        </section>

        {/* Open Roles */}
        <section id="open-roles" className="py-24 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Open Positions</h2>
            <div className="space-y-4">
              {openRoles.map((role) => (
                <div key={role.title} className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all flex items-center justify-between cursor-pointer border border-gray-100 hover:border-indigo-100">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">{role.title}</h3>
                    <div className="flex gap-4 mt-2 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Icon name="BriefcaseIcon" size={16} />
                        {role.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <Icon name="MapPinIcon" size={16} />
                        {role.location}
                      </span>
                    </div>
                  </div>
                  <div className="hidden sm:block">
                    <span className="px-4 py-2 rounded-full bg-indigo-50 text-indigo-700 text-sm font-semibold">
                      {role.type}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <p className="text-gray-600">
                Don't see your role? <a href="mailto:careers@cacblaze.com" className="text-indigo-600 font-semibold hover:underline">Email us</a> your resume.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
