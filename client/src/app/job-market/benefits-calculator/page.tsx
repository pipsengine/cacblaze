
'use client';

import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

export default function BenefitsCalculatorPage() {
  const benefits = [
    {
      name: 'HMO (Health Insurance)',
      avgValue: '₦150,000 - ₦500,000 / year',
      description: 'Covers medical expenses, surgeries, and gym memberships.',
      icon: 'HeartIcon',
    },
    {
      name: '13th Month Salary',
      avgValue: '1 Month Basic Salary',
      description: 'A bonus paid at the end of the year (December).',
      icon: 'BanknotesIcon',
    },
    {
      name: 'Pension Contribution',
      avgValue: '10% of Monthly Emoluments',
      description: 'Employer contributes 10% (minimum) to your RSA.',
      icon: 'BriefcaseIcon',
    },
    {
      name: 'Leave Allowance',
      avgValue: '10% of Annual Basic Salary',
      description: 'Paid when you go on annual leave.',
      icon: 'SunIcon',
    },
    {
      name: 'Remote Work Setup',
      avgValue: '₦200,000 - ₦500,000 (One-off)',
      description: 'MacBook, Monitor, Chair, and Internet stipend.',
      icon: 'ComputerDesktopIcon',
    },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20 bg-gray-50">
        <div className="bg-primary/5 py-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Link href="/job-market" className="text-sm text-secondary hover:text-primary mb-4 inline-block">
              ← Back to Job Market
            </Link>
            <h1 className="text-4xl font-bold text-foreground mb-4">Employee Benefits Valuation</h1>
            <p className="text-xl text-secondary max-w-2xl">
              Understanding the true value of your compensation package beyond the base salary.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.name} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon name={benefit.icon} className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{benefit.name}</h3>
                <div className="text-green-600 font-bold mb-2">{benefit.avgValue}</div>
                <p className="text-sm text-secondary">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-blue-50 rounded-2xl border border-blue-100 text-center">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Interactive Calculator Coming Soon!</h3>
            <p className="text-blue-700 max-w-2xl mx-auto">
              We are building a tool to help you input your specific offer details and get a total compensation value. Stay tuned!
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
