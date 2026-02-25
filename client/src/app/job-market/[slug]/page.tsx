import { notFound } from 'next/navigation';
import { industriesData } from '@/data/jobMarket';
import Icon from '@/components/ui/AppIcon';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Link from 'next/link';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = industriesData[slug];
  if (!industry) {
    return {
      title: 'Page Not Found - CACBLAZE',
    };
  }
  return {
    title: `${industry.name} Job Market Guide Nigeria - CACBLAZE`,
    description: industry.description,
  };
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = industriesData[slug];

  if (!industry) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20 bg-gray-50">
        {/* Hero */}
        <div className="bg-primary/5 py-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Link
              href="/job-market"
              className="text-sm text-secondary hover:text-primary mb-4 inline-block"
            >
              ← Back to Job Market
            </Link>
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-white rounded-xl shadow-sm">
                <Icon name={industry.icon} size={32} className="text-primary" />
              </div>
              <h1 className="text-4xl font-bold text-foreground">{industry.name}</h1>
            </div>
            <p className="text-xl text-secondary max-w-2xl">{industry.description}</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Salary Range */}
              <section className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Icon name="BanknotesIcon" className="text-green-600" />
                  Salary Expectations
                </h2>
                <div className="grid gap-4">
                  <div className="p-4 bg-gray-50 rounded-xl">
                    <div className="text-sm text-secondary mb-1">Entry Level (0-2 years)</div>
                    <div className="text-xl font-bold text-foreground">
                      {industry.salaryRange.entry}
                    </div>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
                    <div className="text-sm text-blue-600 mb-1">Mid Level (3-5 years)</div>
                    <div className="text-xl font-bold text-blue-900">
                      {industry.salaryRange.mid}
                    </div>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-xl border border-purple-100">
                    <div className="text-sm text-purple-600 mb-1">Senior Level (5+ years)</div>
                    <div className="text-xl font-bold text-purple-900">
                      {industry.salaryRange.senior}
                    </div>
                  </div>
                </div>
              </section>

              {/* Top Roles & Skills */}
              <div className="grid md:grid-cols-2 gap-8">
                <section className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold mb-4">In-Demand Roles</h3>
                  <ul className="space-y-3">
                    {industry.topRoles.map((role) => (
                      <li key={role} className="flex items-center gap-2 text-secondary">
                        <Icon name="CheckCircleIcon" size={16} className="text-green-500" />
                        {role}
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold mb-4">Must-Have Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {industry.topSkills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-gray-100 rounded-full text-sm text-secondary font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </section>
              </div>

              {/* Employers */}
              <section className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold mb-4">Top Employers in Nigeria</h3>
                <div className="flex flex-wrap gap-3">
                  {industry.topEmployers.map((employer) => (
                    <div
                      key={employer}
                      className="px-4 py-2 border border-gray-200 rounded-lg text-secondary font-medium"
                    >
                      {employer}
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold mb-4 text-foreground">Industry Outlook</h3>
                <div className="mb-6">
                  <div className="text-3xl font-bold text-green-600 mb-1">{industry.growth}</div>
                  <div className="text-sm text-secondary">Projected growth in 2026</div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm text-foreground mb-2">
                      Key Opportunities
                    </h4>
                    <ul className="space-y-2">
                      {industry.opportunities.map((opp) => (
                        <li key={opp} className="text-sm text-secondary flex items-start gap-2">
                          <span className="text-green-500 mt-1">↑</span>
                          {opp}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm text-foreground mb-2">Challenges</h4>
                    <ul className="space-y-2">
                      {industry.challenges.map((chal) => (
                        <li key={chal} className="text-sm text-secondary flex items-start gap-2">
                          <span className="text-red-500 mt-1">!</span>
                          {chal}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
                <h3 className="text-lg font-bold mb-2 text-primary">Need Career Advice?</h3>
                <p className="text-sm text-secondary mb-4">
                  Check out our guide on how to negotiate your salary in the {industry.name} sector.
                </p>
                <Link
                  href="/guides/negotiation"
                  className="block w-full py-2 bg-primary text-white text-center rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Read Negotiation Guide
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
