export interface OnlineServiceReview {
  id: string;
  slug: string;
  name: string;
  category: 'Cloud Storage' | 'Streaming' | 'VPN' | 'SaaS' | 'Productivity' | 'Hosting';
  rating: number;
  description: string;
  author: {
    name: string;
    role: string;
    image: string;
  };
  publishDate: string;
  heroImage: string;
  pricing: string;
  features: string[];
  bestFor: string;
  pros: string[];
  cons: string[];
  verdict: string;
}

export const onlineServiceReviews: Record<string, OnlineServiceReview> = {
  'netflix': {
    id: 'os_1',
    slug: 'netflix',
    name: 'Netflix',
    category: 'Streaming',
    rating: 4.8,
    description: 'The world\'s leading streaming entertainment service with millions of paid memberships in over 190 countries.',
    author: {
      name: 'Chidi "Cloud" Okoro',
      role: 'Digital Media Analyst',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'February 12, 2026',
    heroImage: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    pricing: 'Starts at $6.99/month',
    features: ['Original Content', '4K Ultra HD', 'Multiple Profiles', 'Offline Viewing'],
    bestFor: 'Movie buffs and binge-watchers looking for original content.',
    pros: ['Massive library', 'Excellent original programming', 'Great user interface'],
    cons: ['Frequent price hikes', 'Ending password sharing', 'Removing popular licensed content'],
    verdict: 'Still the king of streaming, though competition is catching up.'
  },
  'spotify': {
    id: 'os_2',
    slug: 'spotify',
    name: 'Spotify',
    category: 'Streaming',
    rating: 4.9,
    description: 'A digital music, podcast, and video service that gives you access to millions of songs and other content from creators all over the world.',
    author: {
      name: 'Chidi "Cloud" Okoro',
      role: 'Digital Media Analyst',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'February 11, 2026',
    heroImage: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    pricing: 'Free or $10.99/month for Premium',
    features: ['Personalized Playlists', 'Podcasts', 'Social Sharing', 'Connect to Devices'],
    bestFor: 'Music lovers who value discovery and social features.',
    pros: ['Best discovery algorithms', 'Huge podcast library', 'Seamless cross-device playback'],
    cons: ['Free tier is restrictive', 'No Hi-Fi audio yet', 'Artist payout controversies'],
    verdict: 'The best music streaming experience for most people.'
  },
  'aws': {
    id: 'os_3',
    slug: 'aws',
    name: 'Amazon Web Services',
    category: 'Hosting',
    rating: 4.7,
    description: 'A comprehensive, evolving cloud computing platform provided by Amazon that includes a mixture of infrastructure as a service (IaaS), platform as a service (PaaS) and packaged software as a service (SaaS) offerings.',
    author: {
      name: 'Chidi "Cloud" Okoro',
      role: 'Digital Media Analyst',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'February 10, 2026',
    heroImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    pricing: 'Pay-as-you-go',
    features: ['EC2 Instances', 'S3 Storage', 'Lambda Functions', 'Global Infrastructure'],
    bestFor: 'Enterprises and developers needing scalable cloud infrastructure.',
    pros: ['Unmatched feature set', 'Global reach', 'Industry-standard'],
    cons: ['Complex pricing', 'Steep learning curve', 'Console can be overwhelming'],
    verdict: 'The undisputed leader in cloud computing for a reason.'
  },
  'google-drive': {
    id: 'os_4',
    slug: 'google-drive',
    name: 'Google Drive',
    category: 'Cloud Storage',
    rating: 4.6,
    description: 'A file storage and synchronization service developed by Google which allows users to store files in the cloud, synchronize files across devices, and share files.',
    author: {
      name: 'Chidi "Cloud" Okoro',
      role: 'Digital Media Analyst',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'February 9, 2026',
    heroImage: 'https://images.unsplash.com/photo-1544396821-4dd40b938ad3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    pricing: '15GB Free, Paid starts at $1.99/month',
    features: ['Docs Integration', 'Mobile App', 'Offline Access', 'Smart Search'],
    bestFor: 'Individuals and teams already using Google Workspace.',
    pros: ['Excellent collaboration', 'Generous free tier', 'Fast search'],
    cons: ['Privacy concerns', 'Desktop sync can be finicky', 'Mobile app lacks some features'],
    verdict: 'The most convenient cloud storage for collaboration.'
  },
  'nordvpn': {
    id: 'os_5',
    slug: 'nordvpn',
    name: 'NordVPN',
    category: 'VPN',
    rating: 4.8,
    description: 'A personal virtual private network (VPN) service provider that has desktop applications for Windows, macOS, and Linux, mobile apps for Android and iOS, as well as an application for Android TV.',
    author: {
      name: 'Chidi "Cloud" Okoro',
      role: 'Digital Media Analyst',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'February 8, 2026',
    heroImage: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    pricing: 'Starts at $3.79/month',
    features: ['Double VPN', 'No-logs Policy', '6000+ Servers', 'Threat Protection'],
    bestFor: 'Privacy-conscious users and streamers needing to bypass geo-blocks.',
    pros: ['Fast speeds', 'Strong security', 'Large server network'],
    cons: ['Renewals are expensive', 'Map interface can be cluttered', 'Some servers can be slow'],
    verdict: 'A top-tier VPN that balances speed and security perfectly.'
  },
  'slack': {
    id: 'os_6',
    slug: 'slack',
    name: 'Slack',
    category: 'Productivity',
    rating: 4.7,
    description: 'A cloud-based proprietary instant messaging platform that provides many IRC-style features, including persistent chat rooms organized by topic, private groups, and direct messaging.',
    author: {
      name: 'Chidi "Cloud" Okoro',
      role: 'Digital Media Analyst',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'February 7, 2026',
    heroImage: 'https://images.unsplash.com/photo-1563986768494-0bc2551022f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    pricing: 'Free or $7.25/user/month',
    features: ['Channels', 'Integrations', 'Huddles', 'Workflow Builder'],
    bestFor: 'Modern teams needing centralized communication.',
    pros: ['Excellent integrations', 'Fun user experience', 'Powerful search'],
    cons: ['Can be distracting', 'Expensive for large teams', 'Free tier message limits'],
    verdict: 'The gold standard for team communication.'
  },
  'canva': {
    id: 'os_7',
    slug: 'canva',
    name: 'Canva',
    category: 'SaaS',
    rating: 4.9,
    description: 'An online graphic design platform, used to create social media graphics, presentations, posters, documents and other visual content.',
    author: {
      name: 'Chidi "Cloud" Okoro',
      role: 'Digital Media Analyst',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'February 6, 2026',
    heroImage: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    pricing: 'Free or $119.99/year for Pro',
    features: ['Templates', 'Stock Images', 'Drag-and-Drop', 'Brand Kits'],
    bestFor: 'Non-designers needing professional-looking graphics.',
    pros: ['Incredibly easy to use', 'Huge template library', 'Collaborative features'],
    cons: ['Pro assets cost extra', 'Mobile app is limited', 'Not for professional illustrators'],
    verdict: 'Democratizing design for everyone.'
  },
  'dropbox': {
    id: 'os_8',
    slug: 'dropbox',
    name: 'Dropbox',
    category: 'Cloud Storage',
    rating: 4.5,
    description: 'A file hosting service that offers cloud storage, file synchronization, personal cloud, and client software.',
    author: {
      name: 'Chidi "Cloud" Okoro',
      role: 'Digital Media Analyst',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'February 5, 2026',
    heroImage: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    pricing: '2GB Free, Paid starts at $9.99/month',
    features: ['Smart Sync', 'Paper Integration', 'File Recovery', 'Transfer'],
    bestFor: 'Professionals needing reliable file syncing and sharing.',
    pros: ['Best-in-class sync', 'Clean interface', 'Great third-party support'],
    cons: ['Very limited free tier', 'Can be expensive', 'Feature creep'],
    verdict: 'The original cloud sync is still one of the best.'
  },
  'zoom': {
    id: 'os_9',
    slug: 'zoom',
    name: 'Zoom',
    category: 'SaaS',
    rating: 4.6,
    description: 'A communications technology company that provides videotelephony and online chat services through a cloud-based peer-to-peer software platform.',
    author: {
      name: 'Chidi "Cloud" Okoro',
      role: 'Digital Media Analyst',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'February 4, 2026',
    heroImage: 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    pricing: 'Free or $149.90/year',
    features: ['HD Video', 'Breakout Rooms', 'Recordings', 'Whiteboard'],
    bestFor: 'Virtual meetings, webinars, and remote education.',
    pros: ['Reliable connections', 'Easy for participants', 'Rich feature set'],
    cons: ['Security history', '40-minute limit on free tier', 'Interface can be busy'],
    verdict: 'The household name for video conferencing.'
  },
  'digitalocean': {
    id: 'os_10',
    slug: 'digitalocean',
    name: 'DigitalOcean',
    category: 'Hosting',
    rating: 4.8,
    description: 'An American cloud infrastructure provider headquartered in New York City with data centers worldwide.',
    author: {
      name: 'Chidi "Cloud" Okoro',
      role: 'Digital Media Analyst',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'February 3, 2026',
    heroImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    pricing: 'Starts at $4/month',
    features: ['Droplets', 'App Platform', 'Managed Databases', 'Kubernetes'],
    bestFor: 'Developers and small businesses needing simple cloud hosting.',
    pros: ['Excellent documentation', 'Simple UI', 'Transparent pricing'],
    cons: ['Limited enterprise features', 'Customer support can be slow', 'Fewer data centers than AWS'],
    verdict: 'The best cloud platform for developers who value simplicity.'
  }
};
