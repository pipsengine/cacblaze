import { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import Breadcrumb from '@/components/common/Breadcrumb';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

export const metadata: Metadata = {
  title: 'Nigerian Job Market & Salary Guide - CACBLAZE',
  description: 'Comprehensive salary benchmarks, career guides, and Naira-focused financial planning for Nigerian professionals.',
  keywords: 'Nigeria salary guide, job market Nigeria, salary benchmarks, career planning Nigeria, financial planning Naira',
};

const JobMarketPage = () => {
  const breadcrumbItems = [
    { name: 'Home', href: '/homepage' },
    { name: 'Job Market', href: '/job-market' },
  ];

  const industries = [
    {
      id: 'tech',
      name: 'Technology',
      icon: 'ComputerDesktopIcon',
      avgSalary: '₦350k - ₦2.5M',
      growth: '+25%',
      roles: ['Software Engineer', 'Product Manager', 'Data Analyst', 'UI/UX Designer'],
      href: '/job-market/technology'
    },
    {
      id: 'finance',
      name: 'Finance & Banking',
      icon: 'BanknotesIcon',
      avgSalary: '₦250k - ₦1.8M',
      growth: '+12%',
      roles: ['Financial Analyst', 'Accountant', 'Investment Banker', 'Risk Manager'],
      href: '/job-market/finance'
    },
    {
      id: 'oil-gas',
      name: 'Oil & Gas',
      icon: 'FireIcon',
      avgSalary: '₦400k - ₦3M',
      growth: '+8%',
      roles: ['Petroleum Engineer', 'Geologist', 'HSE Officer', 'Operations Manager'],
      href: '/job-market/oil-gas'
    },
    {
      id: 'healthcare',
      name: 'Healthcare',
      icon: 'HeartIcon',
      avgSalary: '₦200k - ₦1.5M',
      growth: '+15%',
      roles: ['Doctor', 'Nurse', 'Pharmacist', 'Medical Lab Scientist'],
      href: '/job-market/healthcare'
    },
    {
      id: 'education',
      name: 'Education',
      icon: 'AcademicCapIcon',
      avgSalary: '₦120k - ₦800k',
      growth: '+10%',
      roles: ['Teacher', 'Lecturer', 'Education Consultant', 'School Administrator'],
      href: '/job-market/education'
    },
    {
      id: 'marketing',
      name: 'Marketing & Sales',
      icon: 'MegaphoneIcon',
      avgSalary: '₦180k - ₦1.2M',
      growth: '+18%',
      roles: ['Digital Marketer', 'Sales Manager', 'Brand Manager', 'Content Strategist'],
      href: '/job-market/marketing'
    }
  ];

  const salaryTools = [
    {
      id: 'calculator',
      title: 'Salary Calculator',
      description: 'Calculate your take-home pay after taxes and deductions',
      icon: 'CalculatorIcon',
      href: '/job-market/salary-calculator'
    },
    {
      id: 'comparison',
      title: 'City Comparison',
      description: 'Compare salaries and cost of living across Nigerian cities',
      icon: 'MapPinIcon',
      href: '/job-market/city-comparison'
    },
    {
      id: 'negotiation',
      title: 'Negotiation Guide',
      description: 'Learn how to negotiate better salary packages',
      icon: 'ChatBubbleLeftRightIcon',
      href: '/job-market/negotiation-guide'
    },
    {
      id: 'benefits',
      title: 'Benefits Calculator',
      description: 'Understand the value of your total compensation package',
      icon: 'GiftIcon',
      href: '/job-market/benefits-calculator'
    }
  ];

  const financialGuides = [
    {
      id: 'budgeting',
      title: 'Budgeting with Your Naira Salary',
      excerpt: 'Practical budgeting strategies for Nigerian salaries with inflation considerations.',
      category: 'Financial Planning',
      readTime: '10 min',
      href: '/job-market/budgeting-guide'
    },
    {
      id: 'savings',
      title: 'Building Emergency Fund in Nigeria',
      excerpt: 'How to save 6 months of expenses despite economic challenges.',
      category: 'Savings',
      readTime: '8 min',
      href: '/job-market/emergency-fund'
    },
    {
      id: 'investment',
      title: 'Investment Options for Naira Earners',
      excerpt: 'Smart investment strategies to grow your wealth in Nigeria.',
      category: 'Investment',
      readTime: '12 min',
      href: '/job-market/investment-guide'
    },
    {
      id: 'side-income',
      title: 'Side Hustles to Supplement Your Income',
      excerpt: 'Proven side hustles that work for Nigerian professionals.',
      category: 'Income',
      readTime: '15 min',
      href: '/job-market/side-hustles'
    }
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Breadcrumb items={breadcrumbItems} className="mb-6" />
            
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold uppercase tracking-wide mb-4">
                Career Intelligence
              </span>
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Nigerian Job Market Guide
              </h1>
              <p className="text-xl text-secondary mb-8 leading-relaxed">
                Real salary data, career insights, and financial planning strategies for Nigerian professionals.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid md:grid-cols-4 gap-6 mt-12">
              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <div className="text-3xl font-bold text-primary mb-2">₦450k</div>
                <div className="text-sm text-secondary">Average Monthly Salary</div>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <div className="text-3xl font-bold text-primary mb-2">15%</div>
                <div className="text-sm text-secondary">Average Annual Growth</div>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-secondary">Industries Covered</div>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <div className="text-3xl font-bold text-primary mb-2">10k+</div>
                <div className="text-sm text-secondary">Salary Data Points</div>
              </div>
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8">Salary by Industry</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((industry) => (
                <Link
                  key={industry.id}
                  href={industry.href}
                  className="group block p-6 rounded-2xl border border-gray-200 bg-white hover:border-primary transition-all hover-lift"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all">
                      <Icon name={industry.icon as any} size={24} className="text-primary group-hover:text-white transition-colors" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-success/10 text-success text-xs font-semibold">
                      {industry.growth} YoY
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {industry.name}
                  </h3>
                  <div className="text-2xl font-bold text-primary mb-4">{industry.avgSalary}</div>

                  <div className="space-y-2">
                    <div className="text-xs text-muted-foreground mb-2">Popular Roles:</div>
                    {industry.roles.slice(0, 3).map((role, idx) => (
                      <div key={idx} className="text-sm text-secondary">
                        • {role}
                      </div>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Salary Tools */}
        <section className="py-16 bg-gradient-to-br from-muted/30 to-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8">Salary Tools & Calculators</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {salaryTools.map((tool) => (
                <Link
                  key={tool.id}
                  href={tool.href}
                  className="group block p-6 rounded-2xl border border-gray-200 bg-white hover:border-primary transition-all hover-lift"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all">
                    <Icon name={tool.icon as any} size={24} className="text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {tool.title}
                  </h3>
                  <p className="text-sm text-secondary">
                    {tool.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Financial Planning Guides */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8">Naira-Focused Financial Planning</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {financialGuides.map((guide) => (
                <Link
                  key={guide.id}
                  href={guide.href}
                  className="group block p-6 rounded-2xl border border-gray-200 bg-white hover:border-primary transition-all hover-lift"
                >
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3">
                    {guide.category}
                  </span>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-secondary text-sm mb-4 leading-relaxed">
                    {guide.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Icon name="ClockIcon" size={14} />
                    <span className="text-xs">{guide.readTime}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="rounded-3xl border-2 border-primary/20 bg-white p-12 text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary text-white flex items-center justify-center mx-auto mb-6">
                <Icon name="BriefcaseIcon" size={32} className="text-white" />
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Know Your Worth
              </h2>
              <p className="text-xl text-secondary mb-8 max-w-2xl mx-auto">
                Get personalized salary insights based on your role, experience, and location.
              </p>
              <Link
                href="/job-market/salary-report"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-2xl font-semibold hover:bg-primary/90 transition-all hover-lift"
              >
                Get Your Salary Report
                <Icon name="ArrowRightIcon" size={20} className="text-white" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default JobMarketPage;