import { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';
import Breadcrumb from '@/components/common/Breadcrumb';

export const metadata: Metadata = {
  title: 'Technology - CACBLAZE',
  description: 'Explore our comprehensive technology guides, troubleshooting tips, and reviews.',
  keywords: 'technology, smartphones, internet, social media, online safety, ai tools',
};

const technologyCategories = [
  {
    id: 'tech_col1',
    title: 'Connectivity & Devices',
    items: [
      {
        id: 'tech_internet_issues',
        label: 'Internet & Data Issues',
        href: '/technology/internet-issues',
        icon: 'SignalIcon',
        description: 'Solve connectivity problems and optimize your data usage.',
      },
      {
        id: 'tech_no_service',
        label: 'No Service on Phone',
        href: '/technology/no-service',
        icon: 'SignalSlashIcon',
        description: 'Troubleshoot network signal issues.',
      },
      {
        id: 'tech_data_plan',
        label: 'Best Data Plans',
        href: '/technology/data-plans',
        icon: 'WifiIcon',
        description: 'Find the best value data plans.',
      },
      {
        id: 'tech_smartphones',
        label: 'Smartphone Problems',
        href: '/technology/smartphone-problems',
        icon: 'DevicePhoneMobileIcon',
        description: 'Fix common phone issues.',
      },
      {
        id: 'tech_overheating',
        label: 'Phone Overheating',
        href: '/technology/phone-overheating',
        icon: 'FireIcon',
        description: 'Stop your phone from overheating.',
      },
      {
        id: 'tech_battery',
        label: 'Battery Draining Fast',
        href: '/technology/battery-draining',
        icon: 'Battery0Icon',
        description: 'Optimize your battery life.',
      },
      {
        id: 'tech_storage',
        label: 'Storage Full Solutions',
        href: '/technology/storage-full',
        icon: 'CircleStackIcon',
        description: 'Free up space on your device.',
      },
      {
        id: 'tech_router',
        label: 'Router Setup & Wi-Fi',
        href: '/technology/router-setup',
        icon: 'WifiIcon',
        description: 'Configure your home network.',
      },
      {
        id: 'tech_cloud',
        label: 'Cloud & Backup Issues',
        href: '/technology/cloud-storage',
        icon: 'CloudIcon',
        description: 'Manage Google Drive and iCloud.',
      },
      {
        id: 'tech_troubleshoot',
        label: 'Error Codes & Logins',
        href: '/technology/error-codes',
        icon: 'WrenchScrewdriverIcon',
        description: 'Fix app errors and login issues.',
      },
    ],
  },
  {
    id: 'tech_col2',
    title: 'Social, Safety & Trust',
    items: [
      {
        id: 'tech_whatsapp_hacked',
        label: 'WhatsApp Hacked',
        href: '/technology/whatsapp-hacked',
        icon: 'ExclamationTriangleIcon',
        description: 'Recover hacked accounts immediately.',
      },
      {
        id: 'tech_account_banned',
        label: 'Account Banned',
        href: '/technology/account-banned',
        icon: 'NoSymbolIcon',
        description: 'Restore banned social media accounts.',
      },
      {
        id: 'tech_fb_locked',
        label: 'Facebook Locked',
        href: '/technology/facebook-locked',
        icon: 'LockClosedIcon',
        description: 'Unlock your Facebook account.',
      },
      {
        id: 'tech_scams',
        label: 'Scams & Fraud',
        href: '/technology/scams-fraud',
        icon: 'ShieldExclamationIcon',
        description: 'Identify and report online scams.',
      },
      {
        id: 'tech_pos_fraud',
        label: 'POS Fraud Safety',
        href: '/technology/pos-fraud',
        icon: 'CreditCardIcon',
        description: 'Avoid POS fraud and skimming.',
      },
      {
        id: 'tech_debit_alert',
        label: 'Unknown Debit Alerts',
        href: '/technology/unknown-debit',
        icon: 'BanknotesIcon',
        description: 'What to do about unauthorized charges.',
      },
      {
        id: 'tech_privacy',
        label: 'Data Privacy & Security',
        href: '/technology/data-privacy',
        icon: 'FingerPrintIcon',
        description: 'Secure your personal data.',
      },
      {
        id: 'tech_hacked',
        label: 'Account Hacked Help',
        href: '/technology/account-hacked',
        icon: 'UserMinusIcon',
        description: 'Steps to take if you are hacked.',
      },
      {
        id: 'tech_verification',
        label: 'Is This Legit?',
        href: '/technology/verification',
        icon: 'CheckBadgeIcon',
        description: 'Verify websites and offers.',
      },
      {
        id: 'tech_legal',
        label: 'Legal & Tech Rights',
        href: '/technology/tech-rights',
        icon: 'ScaleIcon',
        description: 'Understand your digital rights.',
      },
    ],
  },
  {
    id: 'tech_col3',
    title: 'Finance, Govt & Business',
    items: [
      {
        id: 'tech_payments',
        label: 'Digital Payments',
        href: '/technology/digital-payments',
        icon: 'CreditCardIcon',
        description: 'Troubleshoot transfers and payments.',
      },
      {
        id: 'tech_transfer_issues',
        label: 'Transfer Pending/Reversal',
        href: '/technology/transfer-issues',
        icon: 'ArrowPathIcon',
        description: 'Resolve failed transactions.',
      },
      {
        id: 'tech_pos_ops',
        label: 'POS Operations',
        href: '/technology/pos-operations',
        icon: 'CalculatorIcon',
        description: 'Manage your POS business.',
      },
      {
        id: 'tech_govt',
        label: 'NIN, BVN & Govt IDs',
        href: '/technology/govt-ids',
        icon: 'IdentificationIcon',
        description: 'Navigate official registration processes.',
      },
      {
        id: 'tech_passport',
        label: 'Passport & Driver License',
        href: '/technology/passport-license',
        icon: 'DocumentTextIcon',
        description: 'Get your official documents sorted.',
      },
      {
        id: 'tech_small_biz',
        label: 'Small Business Tech',
        href: '/technology/small-business',
        icon: 'BuildingStorefrontIcon',
        description: 'Tech tools for your business.',
      },
      {
        id: 'tech_remote_work',
        label: 'Remote Work & Income',
        href: '/technology/remote-work',
        icon: 'BriefcaseIcon',
        description: 'Find and succeed in remote jobs.',
      },
      {
        id: 'tech_freelancing',
        label: 'Freelancing Platforms',
        href: '/technology/freelancing',
        icon: 'GlobeAltIcon',
        description: 'Best platforms for freelancers.',
      },
      {
        id: 'tech_dollar_pay',
        label: 'Dollar Earnings',
        href: '/technology/dollar-earnings',
        icon: 'CurrencyDollarIcon',
        description: 'Receive foreign currency payments.',
      },
      {
        id: 'tech_jobs',
        label: 'Job Search & Careers',
        href: '/technology/careers',
        icon: 'MagnifyingGlassIcon',
        description: 'Land your dream job.',
      },
    ],
  },
  {
    id: 'tech_col4',
    title: 'Tools, Learning & Buying',
    items: [
      {
        id: 'tech_software',
        label: 'Software How-Tos',
        href: '/technology/software-howto',
        icon: 'CommandLineIcon',
        description: 'Master essential software.',
      },
      {
        id: 'tech_excel',
        label: 'Excel & Office Tips',
        href: '/technology/excel-tips',
        icon: 'TableCellsIcon',
        description: 'Boost your productivity with Office.',
      },
      {
        id: 'tech_ai',
        label: 'AI Tools & Assistants',
        href: '/technology/ai-tools',
        icon: 'CpuChipIcon',
        description: 'Leverage AI for work and study.',
      },
      {
        id: 'tech_chatgpt',
        label: 'ChatGPT Alternatives',
        href: '/technology/chatgpt-alternatives',
        icon: 'ChatBubbleBottomCenterTextIcon',
        description: 'Explore other AI options.',
      },
      {
        id: 'tech_education',
        label: 'Digital Education',
        href: '/technology/digital-education',
        icon: 'AcademicCapIcon',
        description: 'Online learning and certifications.',
      },
      {
        id: 'tech_courses',
        label: 'Online Courses',
        href: '/technology/online-courses',
        icon: 'PlayCircleIcon',
        description: 'Find the best courses for you.',
      },
      {
        id: 'tech_buying',
        label: 'Buying Guides',
        href: '/technology/buying-guides',
        icon: 'ShoppingBagIcon',
        description: 'Smart buying advice for tech.',
      },
      {
        id: 'tech_best_phones',
        label: 'Best Phones Under ₦X',
        href: '/technology/best-phones',
        icon: 'DevicePhoneMobileIcon',
        description: 'Budget-friendly phone recommendations.',
      },
      {
        id: 'tech_laptops',
        label: 'Student Laptops',
        href: '/technology/student-laptops',
        icon: 'ComputerDesktopIcon',
        description: 'Best laptops for students.',
      },
      {
        id: 'tech_templates',
        label: 'Templates & Checklists',
        href: '/technology/templates',
        icon: 'ClipboardDocumentCheckIcon',
        description: 'Download ready-to-use templates.',
      },
    ],
  },
];

export default function TechnologyPage() {
  const breadcrumbItems = [
    { name: 'Home', href: '/homepage' },
    { name: 'Technology', href: '/technology' },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        {/* Page Header */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <Breadcrumb items={breadcrumbItems} className="mb-6" />
              <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold uppercase tracking-wide mb-4">
                Technology Hub
              </span>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Technology Simplified
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Expert guides, troubleshooting tips, and reviews to help you master your digital
                life.
              </p>
            </div>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid gap-16">
              {technologyCategories.map((category) => (
                <div key={category.id}>
                  <h2 className="text-3xl font-bold text-gray-900 mb-8 pb-4 border-b border-gray-100">
                    {category.title}
                  </h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {category.items.map((item) => (
                      <Link
                        key={item.id}
                        href={item.href}
                        className="group block bg-gray-50 rounded-2xl p-6 hover:bg-blue-50 transition-colors border border-gray-100 hover:border-blue-100"
                      >
                        <div className="w-12 h-12 rounded-xl bg-white shadow-sm text-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                          <Icon name={item.icon as any} size={24} />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                          {item.label}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
