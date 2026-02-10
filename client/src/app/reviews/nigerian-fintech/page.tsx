import { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';
import Breadcrumb from '@/components/common/Breadcrumb';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

export const metadata: Metadata = {
  title: 'Nigerian Fintech Reviews - CACBLAZE',
  description: 'Comprehensive reviews and comparisons of Nigerian fintech apps including OPay, Kuda, PalmPay, and more. Find the best digital banking solution.',
  keywords: 'OPay review, Kuda bank, PalmPay, Nigerian fintech, digital banking Nigeria, mobile money'
};

const NigerianFintechPage = () => {
  const breadcrumbItems = [
  { name: 'Home', href: '/homepage' },
  { name: 'Nigerian Fintech', href: '/nigerian-fintech' }];


  const fintechApps = [
  {
    id: 'opay',
    name: 'OPay',
    tagline: 'All-in-One Super App',
    description: 'Mobile payments, transfers, bills, savings, and loans all in one platform.',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1b007caec-1767651176494.png",
    logoAlt: 'OPay mobile app interface showing payment options',
    rating: 4.5,
    users: '10M+',
    features: ['Zero Transfer Fees', 'Cashback Rewards', 'Bill Payments', 'POS Services'],
    pros: ['Fast transactions', 'Wide acceptance', 'Multiple services'],
    cons: ['Customer service delays', 'App crashes occasionally'],
    href: '/nigerian-fintech/opay-review'
  },
  {
    id: 'kuda',
    name: 'Kuda Bank',
    tagline: 'The Bank of the Free',
    description: 'Digital-only bank with no hidden fees, free transfers, and smart budgeting tools.',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1061739f6-1766820951750.png",
    logoAlt: 'Kuda Bank app showing account dashboard',
    rating: 4.7,
    users: '5M+',
    features: ['25 Free Transfers/Day', 'Spend+Save', 'Overdrafts', 'Virtual Cards'],
    pros: ['No maintenance fees', 'Great UI/UX', 'Instant account opening'],
    cons: ['Limited physical presence', 'Withdrawal limits'],
    href: '/nigerian-fintech/kuda-review'
  },
  {
    id: 'palmpay',
    name: 'PalmPay',
    tagline: 'Smart Mobile Money',
    description: 'Fast payments, transfers, and financial services with generous cashback offers.',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1d30bb1ae-1770546206782.png",
    logoAlt: 'PalmPay app interface with transaction features',
    rating: 4.4,
    users: '8M+',
    features: ['Cashback on Transfers', 'Airtime & Data', 'Betting Wallet', 'Agent Network'],
    pros: ['High cashback rates', 'Easy to use', 'Quick setup'],
    cons: ['Limited banking features', 'Transaction limits'],
    href: '/nigerian-fintech/palmpay-review'
  },
  {
    id: 'moniepoint',
    name: 'Moniepoint',
    tagline: 'Business Banking Simplified',
    description: 'Designed for businesses with POS, payments, and business management tools.',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_13cca1d09-1767896867128.png",
    logoAlt: 'Moniepoint business dashboard',
    rating: 4.6,
    users: '3M+',
    features: ['Business Accounts', 'POS Terminals', 'Bulk Transfers', 'Payment Links'],
    pros: ['Business-focused', 'Reliable POS', 'Good support'],
    cons: ['Less consumer features', 'Higher fees for some services'],
    href: '/nigerian-fintech/moniepoint-review'
  },
  {
    id: 'carbon',
    name: 'Carbon',
    tagline: 'Digital Banking & Loans',
    description: 'Quick loans, investments, and digital banking for individuals and businesses.',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_11daa7d8d-1770546207949.png",
    logoAlt: 'Carbon app showing loan and investment options',
    rating: 4.3,
    users: '2M+',
    features: ['Instant Loans', 'Investments', 'Bill Payments', 'Virtual Cards'],
    pros: ['Fast loan approval', 'Investment options', 'Good interest rates'],
    cons: ['Loan eligibility strict', 'Limited free transfers'],
    href: '/nigerian-fintech/carbon-review'
  },
  {
    id: 'vbank',
    name: 'VBank',
    tagline: 'Digital Banking Redefined',
    description: 'Modern digital bank with savings, investments, and lifestyle benefits.',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1eff135a3-1766601351747.png",
    logoAlt: 'VBank mobile banking interface',
    rating: 4.5,
    users: '1M+',
    features: ['High-Yield Savings', 'Dollar Cards', 'Lifestyle Perks', 'Goal Savings'],
    pros: ['Premium features', 'Great savings rates', 'Excellent app'],
    cons: ['Newer platform', 'Smaller user base'],
    href: '/nigerian-fintech/vbank-review'
  }];


  const comparisonCategories = [
  {
    id: 'transfers',
    title: 'Transfer Fees Comparison',
    description: 'Compare transfer limits and fees across platforms',
    icon: 'ArrowsRightLeftIcon',
    href: '/nigerian-fintech/transfer-comparison'
  },
  {
    id: 'savings',
    title: 'Savings Interest Rates',
    description: 'Which app offers the best returns on savings?',
    icon: 'BanknotesIcon',
    href: '/nigerian-fintech/savings-comparison'
  },
  {
    id: 'loans',
    title: 'Loan Options & Rates',
    description: 'Compare loan amounts, interest rates, and terms',
    icon: 'CreditCardIcon',
    href: '/nigerian-fintech/loans-comparison'
  },
  {
    id: 'features',
    title: 'Features Comparison',
    description: 'Side-by-side feature comparison of all apps',
    icon: 'ListBulletIcon',
    href: '/nigerian-fintech/features-comparison'
  }];


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
                Fintech Reviews
              </span>
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Nigerian Fintech Guide
              </h1>
              <p className="text-xl text-secondary mb-8 leading-relaxed">
                Honest reviews and detailed comparisons of Nigeria's top fintech apps. Find the perfect digital banking solution for your needs.
              </p>
            </div>
          </div>
        </section>

        {/* Fintech Apps Grid */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8">Top Fintech Apps</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {fintechApps.map((app) =>
              <Link
                key={app.id}
                href={app.href}
                className="group block rounded-3xl border border-gray-200 bg-white hover:border-primary transition-all overflow-hidden hover-lift">
                
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
                    <AppImage
                    src={app.logo}
                    alt={app.logoAlt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-1">{app.name}</h3>
                        <p className="text-sm text-primary font-medium">{app.tagline}</p>
                      </div>
                      <div className="flex items-center gap-1 bg-warning/10 px-2 py-1 rounded-lg">
                        <Icon name="StarIcon" size={16} className="text-warning fill-current" />
                        <span className="text-sm font-bold text-foreground">{app.rating}</span>
                      </div>
                    </div>

                    <p className="text-secondary text-sm mb-4 leading-relaxed">
                      {app.description}
                    </p>

                    <div className="mb-4 pb-4 border-b border-gray-100">
                      <div className="text-xs text-muted-foreground mb-1">Active Users</div>
                      <div className="text-lg font-bold text-foreground">{app.users}</div>
                    </div>

                    {/* Key Features */}
                    <div className="space-y-2 mb-4">
                      {app.features.slice(0, 3).map((feature, idx) =>
                    <div key={idx} className="flex items-center gap-2 text-sm text-secondary">
                          <Icon name="CheckCircleIcon" size={16} className="text-primary" />
                          {feature}
                        </div>
                    )}
                    </div>

                    <div className="flex items-center gap-2 text-primary font-medium">
                      Read Full Review
                      <Icon name="ArrowRightIcon" size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              )}
            </div>
          </div>
        </section>

        {/* Comparison Tools */}
        <section className="py-16 bg-gradient-to-br from-muted/30 to-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8">Comparison Tools</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {comparisonCategories.map((category) =>
              <Link
                key={category.id}
                href={category.href}
                className="group block p-6 rounded-2xl border border-gray-200 bg-white hover:border-primary transition-all hover-lift">
                
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all">
                    <Icon name={category.icon as any} size={24} className="text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-sm text-secondary">
                    {category.description}
                  </p>
                </Link>
              )}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="rounded-3xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 p-12 text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary text-white flex items-center justify-center mx-auto mb-6">
                <Icon name="BanknotesIcon" size={32} className="text-white" />
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Can't Decide Which App to Use?
              </h2>
              <p className="text-xl text-secondary mb-8 max-w-2xl mx-auto">
                Take our quick quiz to find the perfect fintech app based on your needs and usage patterns.
              </p>
              <Link
                href="/nigerian-fintech/quiz"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-2xl font-semibold hover:bg-primary/90 transition-all hover-lift">
                
                Take the Quiz
                <Icon name="ArrowRightIcon" size={20} className="text-white" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>);

};

export default NigerianFintechPage;