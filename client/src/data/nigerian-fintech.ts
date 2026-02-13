export interface FintechCompany {
  id: string;
  slug: string;
  name: string;
  category: string;
  rating: number;
  description: string;
  author: {
    name: string;
    role: string;
    image: string;
  };
  publishDate: string;
  heroImage: string;
  founded: string;
  headquarters: string;
  specs: {
    valuation: string;
    reach: string;
    license: string;
    apiAvailable: boolean;
    businessFocus: boolean;
    keyProducts: string[];
  };
  pros: string[];
  cons: string[];
  verdict: string;
}

export const nigerianFintechData: Record<string, FintechCompany> = {
  'flutterwave-review': {
    id: 'nf1',
    slug: 'flutterwave-review',
    name: 'Flutterwave',
    category: 'Payment Gateway',
    rating: 4.8,
    description:
      "Flutterwave is Africa's leading payment technology company that helps businesses build customizable payment applications through its APIs. It enables businesses to accept payments globally via credit cards, bank transfers, and mobile money.",
    author: {
      name: 'Tunde "Gadget" Bakare',
      role: 'Fintech Analyst',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    publishDate: 'February 11, 2026',
    heroImage:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    founded: '2016',
    headquarters: 'Lagos, Nigeria & San Francisco, USA',
    specs: {
      valuation: '$3B+',
      reach: 'Global (30+ African countries)',
      license: 'CBN PSSP & IMTO Licenses',
      apiAvailable: true,
      businessFocus: true,
      keyProducts: ['Flutterwave for Business', 'Send by Flutterwave', 'Store', 'Barter'],
    },
    pros: [
      'Extensive payment method support',
      'Seamless cross-border transactions',
      'Robust API documentation',
      'Excellent business dashboard',
    ],
    cons: ['Occasional regulatory challenges', 'Transaction fees can be high for small volumes'],
    verdict:
      'Flutterwave is the powerhouse of African fintech, essential for any business looking to scale across the continent.',
  },
  'paystack-review': {
    id: 'nf2',
    slug: 'paystack-review',
    name: 'Paystack',
    category: 'Payment Processor',
    rating: 4.9,
    description:
      'Acquired by Stripe in 2020, Paystack is known for its incredible developer experience and clean API. It allows businesses in Africa to accept payments via various channels with minimal setup time.',
    author: {
      name: 'Tunde "Gadget" Bakare',
      role: 'Fintech Analyst',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    publishDate: 'February 9, 2026',
    heroImage:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    founded: '2015',
    headquarters: 'Lagos, Nigeria',
    specs: {
      valuation: '$200M+ (Acquisition price)',
      reach: 'Nigeria, Ghana, South Africa, Kenya',
      license: 'CBN PSSP License',
      apiAvailable: true,
      businessFocus: true,
      keyProducts: ['Payment Links', 'Invoices', 'Subscriptions', 'Commerce'],
    },
    pros: [
      'Industry-leading UI/UX',
      'Easiest integration process',
      'Stable and reliable checkout',
      'Transparent pricing',
    ],
    cons: ['Limited to fewer countries than Flutterwave', 'Focus is primarily on digital payments'],
    verdict:
      "Paystack remains the developer's favorite, offering the most polished payment experience in the Nigerian market.",
  },
  'interswitch-review': {
    id: 'nf3',
    slug: 'interswitch-review',
    name: 'Interswitch',
    category: 'Payments Infrastructure',
    rating: 4.6,
    description:
      'Interswitch is one of the oldest and largest fintech companies in Africa. It provides the infrastructure that powers much of the Nigerian banking system, including the Verve card scheme and Quickteller.',
    author: {
      name: 'Tunde "Gadget" Bakare',
      role: 'Fintech Analyst',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    publishDate: 'February 7, 2026',
    heroImage:
      'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    founded: '2002',
    headquarters: 'Lagos, Nigeria',
    specs: {
      valuation: '$1B+',
      reach: 'Africa-wide infrastructure',
      license: 'CBN Switching & Processing License',
      apiAvailable: true,
      businessFocus: true,
      keyProducts: ['Quickteller', 'Verve Card', 'Retailpay', 'Smartgov'],
    },
    pros: [
      'Unmatched infrastructure stability',
      'Deep integration with traditional banks',
      'Pioneer of electronic payments in Nigeria',
      'Diverse product ecosystem',
    ],
    cons: [
      'Legacy systems can feel slow to innovate',
      'Consumer apps are less polished than newer fintechs',
    ],
    verdict:
      'Interswitch is the bedrock of Nigerian fintech; while not as flashy as startups, its reliability is indispensable.',
  },
  'paga-review': {
    id: 'nf4',
    slug: 'paga-review',
    name: 'Paga',
    category: 'Mobile Money',
    rating: 4.5,
    description:
      'Paga is a mobile payment company that allows users to send and receive money, pay bills, and buy airtime even without a smartphone, thanks to its massive agent network.',
    author: {
      name: 'Tunde "Gadget" Bakare',
      role: 'Fintech Analyst',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    publishDate: 'February 4, 2026',
    heroImage:
      'https://images.unsplash.com/photo-1556745753-b2904692b3cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    founded: '2009',
    headquarters: 'Lagos, Nigeria',
    specs: {
      valuation: 'Private',
      reach: 'Nigeria, Ethiopia, Mexico',
      license: 'CBN Mobile Money Operator (MMO)',
      apiAvailable: true,
      businessFocus: false,
      keyProducts: ['Paga App', 'Agent Banking', 'Paga Collect', 'Checkout'],
    },
    pros: [
      'Largest agent network for cash-in/cash-out',
      'Works without internet (USSD focus)',
      'Trusted for over a decade',
      'Great for financial inclusion',
    ],
    cons: ['App interface is functional but basic', 'Facing stiff competition from OPay/PalmPay'],
    verdict:
      'Paga remains the king of the "last mile," bringing financial services to the unbanked across Nigeria.',
  },
  'bamboo-review': {
    id: 'nf5',
    slug: 'bamboo-review',
    name: 'Bamboo',
    category: 'Investment (Wealthtech)',
    rating: 4.7,
    description:
      'Bamboo gives Nigerians real-time access to invest in over 3,000 stocks listed on the U.S. stock exchange directly from their mobile phones or computers.',
    author: {
      name: 'Tunde "Gadget" Bakare',
      role: 'Fintech Analyst',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    publishDate: 'February 1, 2026',
    heroImage:
      'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    founded: '2019',
    headquarters: 'Lagos, Nigeria',
    specs: {
      valuation: 'Private',
      reach: 'Nigeria, Ghana',
      license: 'SEC Digital Sub-Broker License',
      apiAvailable: false,
      businessFocus: false,
      keyProducts: ['U.S. Stocks', 'Bamboo Fixed Returns', 'Learning Center'],
    },
    pros: [
      'Easy access to global markets',
      'Dollar-denominated investments',
      'Educational resources for beginners',
      'Secure and regulated',
    ],
    cons: ['Deposit/Withdrawal fees depend on FX rates', 'Market volatility can be high'],
    verdict:
      'Bamboo is the best way for Nigerians to hedge against local currency devaluation by investing in global giants.',
  },
  'chipper-cash-review': {
    id: 'nf6',
    slug: 'chipper-cash-review',
    name: 'Chipper Cash',
    category: 'Cross-border Payments',
    rating: 4.4,
    description:
      'Chipper Cash offers free and instant cross-border mobile money transfers in Africa and beyond. It also provides virtual cards and stock/crypto investment options.',
    author: {
      name: 'Tunde "Gadget" Bakare',
      role: 'Fintech Analyst',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    publishDate: 'January 30, 2026',
    heroImage:
      'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    founded: '2018',
    headquarters: 'San Francisco, USA (Africa-focused)',
    specs: {
      valuation: '$2B+',
      reach: 'Nigeria, Ghana, Uganda, UK, USA',
      license: 'Various regional licenses',
      apiAvailable: true,
      businessFocus: false,
      keyProducts: ['Chipper Wallet', 'Virtual Dollar Card', 'Chipper Stocks'],
    },
    pros: [
      'Fastest cross-border transfers',
      'Excellent virtual dollar cards',
      'Multi-currency support',
      'Modern, clean app',
    ],
    cons: ['Service availability varies by region', 'Crypto features limited in some areas'],
    verdict:
      'Chipper Cash is the ultimate tool for the modern African who needs to move money across borders effortlessly.',
  },
  'remita-review': {
    id: 'nf7',
    slug: 'remita-review',
    name: 'Remita',
    category: 'Payments & Payroll',
    rating: 4.3,
    description:
      'Remita is a multi-channel funds collection and payment platform used by the Federal Government of Nigeria for the Treasury Single Account (TSA) and by many private businesses.',
    author: {
      name: 'Tunde "Gadget" Bakare',
      role: 'Fintech Analyst',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    publishDate: 'January 25, 2026',
    heroImage:
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    founded: '2005',
    headquarters: 'Lagos, Nigeria',
    specs: {
      valuation: 'Private (SystemSpecs)',
      reach: 'Nigeria focus',
      license: 'CBN PSSP License',
      apiAvailable: true,
      businessFocus: true,
      keyProducts: ['Remita App', 'Payroll Management', 'Collections', 'E-Invoicing'],
    },
    pros: [
      'Deeply integrated with government services',
      'Comprehensive payroll solution',
      'Versatile payment channels',
      'High security standards',
    ],
    cons: ['User interface feels a bit dated', 'Can be complex for small users'],
    verdict:
      'Remita is the workhorse of institutional payments in Nigeria, unmatched in scale and government integration.',
  },
  'risevest-review': {
    id: 'nf8',
    slug: 'risevest-review',
    name: 'Risevest',
    category: 'Wealth Management',
    rating: 4.6,
    description:
      'Risevest allows Nigerians to invest in dollar-denominated assets like U.S. Real Estate, Stocks, and Fixed Income, providing automated wealth management services.',
    author: {
      name: 'Tunde "Gadget" Bakare',
      role: 'Fintech Analyst',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    publishDate: 'January 20, 2026',
    heroImage:
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    founded: '2019',
    headquarters: 'Lagos, Nigeria',
    specs: {
      valuation: 'Private',
      reach: 'Nigeria focus',
      license: 'SEC Investment Adviser License',
      apiAvailable: false,
      businessFocus: false,
      keyProducts: ['U.S. Real Estate', 'Fixed Income', 'Stocks', 'Goal-based Savings'],
    },
    pros: [
      'Automated dollar investments',
      'Access to U.S. real estate for small amounts',
      'Great goal-tracking features',
      'Solid historical returns',
    ],
    cons: ['Long-term focus means less liquidity', 'Minimum investment periods apply'],
    verdict:
      'Risevest is perfect for passive investors looking to build long-term dollar wealth without picking individual stocks.',
  },
  'etranzact-review': {
    id: 'nf9',
    slug: 'etranzact-review',
    name: 'eTranzact',
    category: 'Payments Switch',
    rating: 4.2,
    description:
      'eTranzact is a multi-application and multi-channel electronic transaction switching and payment processing platform, one of the first fintechs to list on the Nigerian Stock Exchange.',
    author: {
      name: 'Tunde "Gadget" Bakare',
      role: 'Fintech Analyst',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    publishDate: 'January 15, 2026',
    heroImage:
      'https://images.unsplash.com/photo-1556742111-a301076d9d18?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    founded: '2003',
    headquarters: 'Lagos, Nigeria',
    specs: {
      valuation: 'Publicly Traded (NGX)',
      reach: 'Nigeria, Ghana, UK',
      license: 'CBN Switching & Processing License',
      apiAvailable: true,
      businessFocus: true,
      keyProducts: ['PocketMoni', 'CorporatePay', 'BankIT', 'Payoutlet'],
    },
    pros: [
      'Strong institutional partnerships',
      'Wide variety of payment solutions',
      'Listed on the stock exchange',
      'Robust security infrastructure',
    ],
    cons: ['Consumer brand awareness is lower', 'Innovation pace is moderate'],
    verdict:
      'eTranzact is a stable, legacy player that continues to power large-scale enterprise payment solutions.',
  },
  'vfd-bank-review': {
    id: 'nf10',
    slug: 'vfd-bank-review',
    name: 'VFD Bank (VBank)',
    category: 'Digital Banking',
    rating: 4.5,
    description:
      'VBank is a digital bank powered by VFD Microfinance Bank. It offers high-interest savings, instant transfers, and a streamlined banking experience for the digital-savvy Nigerian.',
    author: {
      name: 'Tunde "Gadget" Bakare',
      role: 'Fintech Analyst',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    publishDate: 'January 10, 2026',
    heroImage:
      'https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    founded: '2020 (App launch)',
    headquarters: 'Lagos, Nigeria',
    specs: {
      valuation: 'Private',
      reach: 'Nigeria focus',
      license: 'CBN Microfinance Bank License',
      apiAvailable: false,
      businessFocus: false,
      keyProducts: ['VBank App', 'Target Savings', 'Fixed Deposits', 'Veelage'],
    },
    pros: [
      'One of the best interest rates on savings',
      'Very clean and modern app',
      'Great referral rewards',
      'No hidden charges',
    ],
    cons: ['Customer support response times vary', 'Fewer ecosystem features than OPay'],
    verdict:
      'VBank is a top-tier digital bank that combines professional banking services with a great user experience.',
  },
};
