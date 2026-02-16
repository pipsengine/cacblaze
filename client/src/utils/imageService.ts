/**
 * Image Service for CACBLAZE
 * Intelligently manages image selection between curated library and dynamic placeholders
 */

import { getPlaceholderDataURL } from './placeholderGenerator';

export interface ImageConfig {
  category?: string;
  title?: string;
  alt?: string;
  width?: number;
  height?: number;
  preferCurated?: boolean;
}

// Curated image library organized by category with Nigerian/African context
const curatedImages = {
  technology: [
    {
      src: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      alt: 'Nigerian software developer working on laptop in modern Lagos tech hub',
      keywords: ['coding', 'developer', 'software', 'programming'],
    },
    {
      src: 'https://images.pexels.com/photos/3182759/pexels-photo-3182759.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      alt: 'African tech startup team collaborating in bright office space',
      keywords: ['startup', 'team', 'collaboration', 'innovation'],
    },
    {
      src: 'https://images.pexels.com/photos/5052875/pexels-photo-5052875.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      alt: 'Young Nigerian woman using mobile payment app on smartphone',
      keywords: ['mobile', 'payment', 'fintech', 'digital'],
    },
    {
      src: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      alt: 'Students learning coding at African technology education center',
      keywords: ['education', 'learning', 'students', 'training'],
    },
    {
      src: 'https://images.pexels.com/photos/5380648/pexels-photo-5380648.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      alt: 'Running internet speed tests on mobile and laptop',
      keywords: ['speed', 'internet', 'test', 'performance'],
    },
    {
      src: 'https://images.pexels.com/photos/50711/pexels-photo-50711.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      alt: 'Home router and Wi‑Fi setup',
      keywords: ['router', 'wifi', 'network', 'signal'],
    },
    {
      src: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      alt: 'Excel tips and charts on screen',
      keywords: ['excel', 'office', 'charts', 'productivity'],
    },
    {
      src: 'https://images.pexels.com/photos/5905440/pexels-photo-5905440.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      alt: 'Digital education with online learning',
      keywords: ['education', 'online', 'course', 'learning'],
    },
    {
      src: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      alt: 'POS device and card payment safety',
      keywords: ['pos', 'payment', 'card', 'safety'],
    },
    {
      src: 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      alt: 'Student laptop setup for study',
      keywords: ['student', 'laptop', 'study', 'school'],
    },
  ],
  education: [
    {
      src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800',
      alt: 'Nigerian university students studying together in library',
      keywords: ['students', 'studying', 'university', 'learning'],
    },
    {
      src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800',
      alt: 'African teacher engaging students in modern classroom setting',
      keywords: ['teacher', 'classroom', 'teaching', 'school'],
    },
    {
      src: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=800',
      alt: 'Young African professional taking online course on laptop',
      keywords: ['online', 'elearning', 'course', 'digital'],
    },
    {
      src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800',
      alt: 'Nigerian graduates celebrating at university graduation ceremony',
      keywords: ['graduation', 'achievement', 'success', 'celebration'],
    },
  ],
  lifestyle: [
    {
      src: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800',
      alt: 'Happy Nigerian family spending quality time together at home',
      keywords: ['family', 'home', 'togetherness', 'lifestyle'],
    },
    {
      src: 'https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&w=800',
      alt: 'Nigerian woman preparing traditional jollof rice in modern kitchen',
      keywords: ['cooking', 'food', 'cuisine', 'kitchen'],
    },
    {
      src: 'https://images.unsplash.com/photo-1570158268183-d296b2892211?auto=format&fit=crop&w=800',
      alt: 'Vibrant street scene in Lagos showing daily urban life',
      keywords: ['city', 'urban', 'lagos', 'street'],
    },
    {
      src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800',
      alt: 'Young Nigerian woman in contemporary African fashion outfit',
      keywords: ['fashion', 'style', 'clothing', 'culture'],
    },
  ],
  guides: [
    {
      src: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800',
      alt: 'Nigerian entrepreneur planning business strategy with documents and laptop',
      keywords: ['business', 'planning', 'entrepreneur', 'strategy'],
    },
    {
      src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800',
      alt: 'African couple working on home improvement project together',
      keywords: ['home', 'improvement', 'diy', 'renovation'],
    },
    {
      src: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=800',
      alt: 'Nigerian financial advisor helping client with investment planning',
      keywords: ['finance', 'money', 'investment', 'planning'],
    },
    {
      src: 'https://images.unsplash.com/photo-1544367563-12123d8965cd?auto=format&fit=crop&w=800',
      alt: 'African woman practicing yoga and wellness in peaceful outdoor setting',
      keywords: ['health', 'wellness', 'fitness', 'exercise'],
    },
  ],
  business: [
    {
      src: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800',
      alt: 'Nigerian entrepreneur planning business strategy with documents and laptop',
      keywords: ['business', 'planning', 'entrepreneur', 'strategy'],
    },
    {
      src: 'https://images.unsplash.com/photo-1523958203904-5f8d59f0e1ea?auto=format&fit=crop&w=800',
      alt: 'African small business owner reviewing finances with calculator',
      keywords: ['finance', 'accounting', 'money', 'bookkeeping'],
    },
    {
      src: 'https://images.unsplash.com/photo-1558025381-b5b898f2e4f9?auto=format&fit=crop&w=800',
      alt: 'Team collaborating on marketing strategy in Lagos office',
      keywords: ['marketing', 'team', 'strategy', 'social'],
    },
    {
      src: 'https://images.unsplash.com/photo-1556761175-129418cb2dfe?auto=format&fit=crop&w=800',
      alt: 'Professional presenting business growth plan to colleagues',
      keywords: ['growth', 'customers', 'presentation', 'plan'],
    },
  ],
  home: [
    {
      src: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      alt: 'African family organizing living room space at home',
      keywords: ['home', 'organization', 'family', 'living room'],
    },
    {
      src: 'https://images.pexels.com/photos/4239149/pexels-photo-4239149.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      alt: 'Nigerian woman cleaning kitchen countertop with supplies',
      keywords: ['cleaning', 'kitchen', 'tips', 'home'],
    },
    {
      src: 'https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      alt: 'Home maintenance tools prepared for DIY repairs',
      keywords: ['maintenance', 'tools', 'repair', 'diy'],
    },
    {
      src: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      alt: 'Energy-saving LED bulbs and power strips for efficiency',
      keywords: ['energy', 'saving', 'electricity', 'efficiency'],
    },
  ],
  cooking: [
    {
      src: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      alt: 'Nigerian chef preparing meal in modern kitchen',
      keywords: ['cooking', 'kitchen', 'recipe', 'chef'],
    },
    {
      src: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      alt: 'Ingredients organized for meal prep on wooden table',
      keywords: ['meal prep', 'ingredients', 'food', 'planning'],
    },
    {
      src: 'https://images.pexels.com/photos/4198323/pexels-photo-4198323.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      alt: 'African cuisine spices and herbs arranged for cooking',
      keywords: ['spices', 'african', 'flavor', 'recipe'],
    },
    {
      src: 'https://images.pexels.com/photos/4109920/pexels-photo-4109920.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      alt: 'Hands storing food in containers for freshness',
      keywords: ['storage', 'containers', 'fresh', 'kitchen'],
    },
  ],
  reviews: [
    {
      src: 'https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=800',
      alt: 'Nigerian reviewer testing and examining new technology product',
      keywords: ['review', 'testing', 'product', 'evaluation'],
    },
    {
      src: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800',
      alt: 'Food critic reviewing Nigerian restaurant dish in Lagos',
      keywords: ['restaurant', 'food', 'dining', 'review'],
    },
    {
      src: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800',
      alt: 'African tech reviewer demonstrating smartphone features',
      keywords: ['gadget', 'tech', 'smartphone', 'device'],
    },
    {
      src: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&w=800',
      alt: 'Nigerian customer sharing positive service experience',
      keywords: ['service', 'customer', 'experience', 'satisfaction'],
    },
    {
      src: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      alt: 'Modern laptop on desk ready for work',
      keywords: ['laptop', 'pc', 'computer', 'work'],
    },
    {
      src: 'https://images.pexels.com/photos/3394659/pexels-photo-3394659.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      alt: 'Smartphone lineup for review',
      keywords: ['smartphones', 'android', 'iphone', 'mobile'],
    },
    {
      src: 'https://images.pexels.com/photos/3739123/pexels-photo-3739123.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      alt: 'Headphones and accessories on table',
      keywords: ['accessories', 'headphones', 'chargers', 'audio'],
    },
    {
      src: 'https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      alt: 'Smartwatch and wearables',
      keywords: ['wearables', 'smartwatch', 'fitness', 'tracker'],
    },
    {
      src: 'https://images.pexels.com/photos/230240/pexels-photo-230240.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      alt: 'Camera lenses and photography gear',
      keywords: ['cameras', 'photography', 'lenses', 'gear'],
    },
    {
      src: 'https://images.pexels.com/photos/3861974/pexels-photo-3861974.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      alt: 'SaaS dashboard on screen',
      keywords: ['saas', 'software', 'cloud', 'enterprise'],
    },
    {
      src: 'https://images.pexels.com/photos/3184456/pexels-photo-3184456.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      alt: 'Digital platform marketplace',
      keywords: ['platforms', 'ecommerce', 'social', 'payment'],
    },
    {
      src: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      alt: 'Productivity app charts and tasks',
      keywords: ['productivity', 'apps', 'tasks', 'efficiency'],
    },
    {
      src: 'https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      alt: 'Creative design tools in studio',
      keywords: ['creative', 'design', 'editing', 'tools'],
    },
    {
      src: 'https://images.pexels.com/photos/5905440/pexels-photo-5905440.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      alt: 'Online course platform learning',
      keywords: ['course', 'platforms', 'online', 'learning'],
    },
    {
      src: 'https://images.pexels.com/photos/4144221/pexels-photo-4144221.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      alt: 'Learning apps on tablet',
      keywords: ['learning', 'apps', 'education', 'study'],
    },
    {
      src: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      alt: 'Business tools and analytics',
      keywords: ['business', 'tools', 'crm', 'accounting'],
    },
    {
      src: 'https://images.pexels.com/photos/5632384/pexels-photo-5632384.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      alt: 'Subscription services comparison',
      keywords: ['subscriptions', 'membership', 'plans', 'recurring'],
    },
    {
      src: 'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      alt: 'Online services evaluation',
      keywords: ['online services', 'global', 'digital', 'web'],
    },
    {
      src: 'https://images.pexels.com/photos/4009401/pexels-photo-4009401.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      alt: 'Streaming services on TV',
      keywords: ['streaming', 'netflix', 'prime', 'video'],
    },
    {
      src: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      alt: 'Cloud storage backup overview',
      keywords: ['cloud', 'storage', 'backup', 'drive'],
    },
    {
      src: 'https://images.pexels.com/photos/50711/pexels-photo-50711.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      alt: 'Internet provider Wi‑Fi router',
      keywords: ['internet providers', 'router', 'wifi', 'isp'],
    },
    {
      src: 'https://images.pexels.com/photos/4968399/pexels-photo-4968399.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      alt: 'Banking app interface on phone',
      keywords: ['banking', 'apps', 'finance', 'mobile'],
    },
    {
      src: 'https://images.pexels.com/photos/5052875/pexels-photo-5052875.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      alt: 'Nigerian fintech mobile payments',
      keywords: ['fintech', 'nigerian', 'payments', 'apps'],
    },
    {
      src: 'https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      alt: 'Restaurant dining review scene',
      keywords: ['restaurants', 'dining', 'food', 'lagos'],
    },
    {
      src: 'https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      alt: 'Logistics delivery vehicles',
      keywords: ['logistics', 'delivery', 'shipping', 'courier'],
    },
    {
      src: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      alt: 'Real estate properties',
      keywords: ['real estate', 'housing', 'property', 'agency'],
    },
    {
      src: 'https://images.pexels.com/photos/256450/pexels-photo-256450.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      alt: 'Fiction books stack',
      keywords: ['fiction', 'books', 'novels', 'stories'],
    },
    {
      src: 'https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      alt: 'Non-fiction reading',
      keywords: ['nonfiction', 'non-fiction', 'biography', 'selfhelp'],
    },
    {
      src: 'https://images.pexels.com/photos/590544/pexels-photo-590544.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      alt: 'Educational textbooks',
      keywords: ['educational', 'resources', 'textbooks', 'study'],
    },
    {
      src: 'https://images.pexels.com/photos/3184312/pexels-photo-3184312.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      alt: 'Business books and strategy',
      keywords: ['business books', 'strategy', 'leadership', 'startup'],
    },
    {
      src: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      alt: 'Tech books and coding manuals',
      keywords: ['tech books', 'programming', 'engineering', 'architecture'],
    },
    {
      src: 'https://images.pexels.com/photos/4144914/pexels-photo-4144914.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      alt: 'Self development reading and habits',
      keywords: ['self-development', 'habits', 'courses', 'frameworks'],
    },
    {
      src: 'https://images.pexels.com/photos/4065897/pexels-photo-4065897.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      alt: 'Free vs paid comparison',
      keywords: ['free vs paid', 'premium', 'value', 'comparison'],
    },
    {
      src: 'https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      alt: 'Best alternatives research',
      keywords: ['alternatives', 'options', 'better', 'cheaper'],
    },
    {
      src: 'https://images.pexels.com/photos/935979/pexels-photo-935979.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      alt: 'Best for Nigerians local context',
      keywords: ['nigerians', 'local', 'best', 'picks'],
    },
    {
      src: 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      alt: 'Student deals and discounts',
      keywords: ['student deals', 'discounts', 'learners', 'education'],
    },
    {
    },
    {
      src: 'https://images.pexels.com/photos/6332/people-hand-smartphone-technology.jpg?auto=compress&cs=tinysrgb&w=1200&q=80',
      alt: 'Smartphone close-up for device reviews',
      keywords: ['smartphones', 'android', 'iphone', 'mobile'],
    },
    {
      src: 'https://images.pexels.com/photos/3746311/pexels-photo-3746311.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      alt: 'Laptop workspace for PC reviews',
      keywords: ['laptops', 'pc', 'computers', 'work'],
    },
    {
      src: 'https://images.pexels.com/photos/373945/pexels-photo-373945.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      alt: 'Headphones and accessories on desk',
      keywords: ['accessories', 'audio', 'headphones', 'chargers'],
    },
    {
      src: 'https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      alt: 'Smartwatch and wearables',
      keywords: ['wearables', 'smartwatch', 'fitness', 'trackers'],
    },
    {
      src: 'https://images.pexels.com/photos/51383/photo-camera-subject-51383.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      alt: 'Camera gear and lenses',
      keywords: ['cameras', 'photography', 'lenses', 'gear'],
    },
    {
      src: 'https://images.pexels.com/photos/4009402/pexels-photo-4009402.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      alt: 'Cloud storage and SaaS UI',
      keywords: ['saas', 'cloud', 'storage', 'software'],
    },
    {
      src: 'https://images.pexels.com/photos/5082568/pexels-photo-5082568.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      alt: 'Streaming service remote and screen',
      keywords: ['streaming', 'netflix', 'tv', 'video'],
    },
    {
      src: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      alt: 'Logistics truck on highway',
      keywords: ['logistics', 'delivery', 'shipping', 'transport'],
    },
    {
      src: 'https://images.pexels.com/photos/6267/food-plate-restaurant-eating.jpg?auto=compress&cs=tinysrgb&w=1200&q=80',
      alt: 'Restaurant dish close-up',
      keywords: ['restaurant', 'dining', 'food', 'taste'],
    },
    {
      src: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      alt: 'Housing and real estate exterior',
      keywords: ['real estate', 'housing', 'property', 'home'],
    },
    {
      src: 'https://images.pexels.com/photos/261879/pexels-photo-261879.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      alt: 'Stack of books for book reviews',
      keywords: ['books', 'reading', 'library', 'media'],
    },
  ],
  howto: [
    {
      src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800',
      alt: 'Nigerian man following step-by-step DIY tutorial with tools',
      keywords: ['diy', 'tutorial', 'project', 'howto'],
    },
    {
      src: 'https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&w=800',
      alt: 'African chef demonstrating cooking technique in kitchen',
      keywords: ['cooking', 'tutorial', 'recipe', 'kitchen'],
    },
    {
      src: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800',
      alt: 'Nigerian tech enthusiast setting up home office workspace',
      keywords: ['setup', 'tech', 'workspace', 'guide'],
    },
    {
      src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800',
      alt: 'African professional learning new skill through hands-on practice',
      keywords: ['skill', 'learning', 'practice', 'training'],
    },
  ],
  'local-resources': [
    {
      src: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800',
      alt: 'Bustling Nigerian local market with vendors and fresh produce',
      keywords: ['market', 'local', 'shopping', 'community'],
    },
    {
      src: 'https://images.unsplash.com/photo-1534270804882-6b5048b1c1fc?auto=format&fit=crop&w=800',
      alt: 'Iconic Lagos landmarks and cultural heritage sites',
      keywords: ['landmarks', 'culture', 'heritage', 'tourism'],
    },
    {
      src: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800',
      alt: 'Nigerian community center hosting local event and gathering',
      keywords: ['community', 'center', 'event', 'gathering'],
    },
    {
      src: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=800',
      alt: 'Local Nigerian service providers and small businesses',
      keywords: ['services', 'business', 'local', 'providers'],
    },
  ],
};

const titleImages: Record<string, { src: string; alt: string }> = {
  completeguidetomodernwebdevelopment: {
    src: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80',
    alt: 'Modern web development with code on screen',
  },
  masteringproductivitytimemanagementstrategies: {
    src: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    alt: 'Time management and productivity workspace with planner',
  },
  understandingmachinelearningfundamentals: {
    src: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80',
    alt: 'Machine learning concept with data and neural network',
  },
  completeguidetourbangardening: {
    src: 'https://images.pexels.com/photos/4503269/pexels-photo-4503269.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    alt: 'Urban gardening on a small balcony with plants',
  },
  savingstrategies: {
    src: 'https://images.pexels.com/photos/3943722/pexels-photo-3943722.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    alt: 'Piggy bank and coins representing saving strategies',
  },
  investingbasics: {
    src: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80',
    alt: 'Stock chart and financial growth concept',
  },
  retirementplanning: {
    src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    alt: 'Beach sunset symbolizing retirement planning',
  },
  debtmanagement: {
    src: 'https://images.pexels.com/photos/4386373/pexels-photo-4386373.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    alt: 'Bills and calculator for debt management',
  },
  onlinebanking: {
    src: 'https://images.pexels.com/photos/509922/pexels-photo-509922.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    alt: 'Mobile phone showing online banking app',
  },
  jobsearchstrategies: {
    src: 'https://images.unsplash.com/photo-1497294815431-8f0c64f2a8b3?auto=format&fit=crop&w=1200&q=80',
    alt: 'Searching for jobs on laptop',
  },
  cvresumewriting: {
    src: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=1200&q=80',
    alt: 'Resume writing with pen and paper',
  },
  interviewpreparation: {
    src: 'https://images.unsplash.com/photo-1551836022-4c4c79ecde51?auto=format&fit=crop&w=1200&q=80',
    alt: 'Job interview preparation in office setting',
  },
  remotework: {
    src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80',
    alt: 'Remote work setup with laptop and coffee',
  },
  freelancing: {
    src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
    alt: 'Freelancer working in modern workspace',
  },
  productivitytools: {
    src: 'https://images.unsplash.com/photo-1519337265831-281ec6cc8514?auto=format&fit=crop&w=1200&q=80',
    alt: 'Productivity tools with planner and laptop',
  },
  goalsetting: {
    src: 'https://images.pexels.com/photos/175295/pexels-photo-175295.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    alt: 'Arrow hitting target representing goals',
  },
  worklifebalance: {
    src: 'https://images.unsplash.com/photo-1502920917128-1aa500764b24?auto=format&fit=crop&w=1200&q=80',
    alt: 'Yoga and wellness for work-life balance',
  },
  whatis: {
    src: 'https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    alt: 'Question mark blocks for explainers',
  },
  howitworks: {
    src: 'https://images.pexels.com/photos/414579/pexels-photo-414579.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    alt: 'Mechanical gears illustrating how things work',
  },
  proscons: {
    src: 'https://images.pexels.com/photos/3110449/pexels-photo-3110449.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    alt: 'Scale of justice for pros and cons',
  },
  comparisons: {
    src: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    alt: 'Side-by-side comparison on laptop',
  },
  besttools: {
    src: 'https://images.pexels.com/photos/162553/screwdriver-screws-tool-rusty-162553.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    alt: 'Toolkit representing best tools',
  },
  stepbystepguides: {
    src: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    alt: 'Checklist and steps to follow',
  },
  beginnerroadmaps: {
    src: 'https://images.pexels.com/photos/2976422/pexels-photo-2976422.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    alt: 'Map and route for beginner roadmaps',
  },
  commonquestions: {
    src: 'https://images.pexels.com/photos/268362/pexels-photo-268362.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    alt: 'Question marks on board for common questions',
  },
  troubleshooting: {
    src: 'https://images.pexels.com/photos/1334545/pexels-photo-1334545.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    alt: 'Wrenches and tools for troubleshooting',
  },
  beginnerhelp: {
    src: 'https://images.pexels.com/photos/6646912/pexels-photo-6646912.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    alt: 'Helping hand support for beginners',
  },
  usesmartphones: {
    src: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=800',
    alt: 'Using a smartphone to manage daily tasks',
  },
  fixcommonphoneissues: {
    src: 'https://images.pexels.com/photos/479273/pexels-photo-479273.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    alt: 'Phone repair tools laid out on a workbench',
  },
  installapps: {
    src: 'https://images.pexels.com/photos/3850228/pexels-photo-3850228.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    alt: 'Installing apps and managing app store downloads',
  },
  usesoftware: {
    src: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800',
    alt: 'Working with software on a modern computer',
  },
  secureaccounts: {
    src: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800',
    alt: 'Securing accounts with strong passwords and two-factor',
  },
  useproductivitytools: {
    src: 'https://images.unsplash.com/photo-1519337265831-281ec6cc8514?auto=format&fit=crop&w=800',
    alt: 'Using productivity tools to plan and track tasks',
  },
  buildawebsite: {
    src: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800',
    alt: 'Building a website with modern web tools',
  },
  startabusiness: {
    src: 'https://images.unsplash.com/photo-1556761175-129418cb2dfe?auto=format&fit=crop&w=800',
    alt: 'Starting a business with team planning',
  },
  registerabusiness: {
    src: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800',
    alt: 'Registering a business with documents and laptop',
  },
  marketonline: {
    src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800',
    alt: 'Marketing online through social platforms and content',
  },
  sellonline: {
    src: 'https://images.pexels.com/photos/449815/pexels-photo-449815.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    alt: 'Selling products online with packaging ready to ship',
  },
  managefinances: {
    src: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=800',
    alt: 'Managing finances with calculator and budget sheets',
  },
  growcustomers: {
    src: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    alt: 'Growing customers with outreach and relationship building',
  },
  priceproducts: {
    src: 'https://images.pexels.com/photos/6369050/pexels-photo-6369050.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    alt: 'Pricing products and analyzing value',
  },
  homeorganization: {
    src: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=800',
    alt: 'Organizing home spaces for efficiency',
  },
  cleaningguides: {
    src: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=800',
    alt: 'Cleaning kitchen surfaces with proper supplies',
  },
  homemaintenance: {
    src: 'https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    alt: 'Home maintenance tools prepared for repairs',
  },
  energysavingtips: {
    src: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    alt: 'Energy saving with LED bulbs and efficient devices',
  },
  homesafetytips: {
    src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800',
    alt: 'Home safety with sturdy door lock and security',
  },
  africanrecipes: {
    src: 'https://images.pexels.com/photos/4198323/pexels-photo-4198323.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    alt: 'African spices and herbs arranged for cooking authentic dishes',
  },
  internationalrecipes: {
    src: 'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=800',
    alt: 'International recipes showcasing global flavors',
  },
  cookingforbeginners: {
    src: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800',
    alt: 'Cooking for beginners with simple steps',
  },
  mealprep: {
    src: 'https://images.unsplash.com/photo-1526318472351-c75fcf070305?auto=format&fit=crop&w=800',
    alt: 'Meal prep with containers and weekly plan',
  },
  kitchentips: {
    src: 'https://images.pexels.com/photos/298874/pexels-photo-298874.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    alt: 'Kitchen tips with utensils and organization',
  },
  foodstorage: {
    src: 'https://images.pexels.com/photos/4109920/pexels-photo-4109920.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    alt: 'Food storage using containers to keep ingredients fresh',
  },
  streamingservices: {
    src: 'https://images.unsplash.com/photo-1601933470928-c1f63b127f90?auto=format&fit=crop&w=1200&q=80',
    alt: 'Streaming services interface on TV screen',
  },
  quickchecks: {
    src: 'https://images.pexels.com/photos/5428830/pexels-photo-5428830.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    alt: 'Toggling airplane mode and quick phone checks',
  },
  mobiledatatroubleshooting: {
    src: 'https://images.pexels.com/photos/5082575/pexels-photo-5082575.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    alt: 'Resetting APN and testing mobile data',
  },
  wifiandrouter: {
    src: 'https://images.pexels.com/photos/50711/pexels-photo-50711.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    alt: 'Home Wi‑Fi router setup and optimization',
  },
  dnsandnameresolution: {
    src: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    alt: 'Changing DNS settings for reliability',
  },
  performanceandspeed: {
    src: 'https://images.pexels.com/photos/5380648/pexels-photo-5380648.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    alt: 'Running internet speed tests',
  },
  appspecificproblems: {
    src: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    alt: 'Fixing app login and cache issues',
  },
  advanceddiagnostics: {
    src: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    alt: 'Traceroute and diagnostic tooling',
  },
  securityandsafety: {
    src: 'https://images.pexels.com/photos/6076/coffee-smartphone-desk-pen.jpg?auto=compress&cs=tinysrgb&w=1200&q=80',
    alt: 'Security best practices on devices',
  },
  nigeriaspecifictips: {
    src: 'https://images.pexels.com/photos/14151379/pexels-photo-14151379.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    alt: 'Local context tips for Nigerian networks',
  },
  escalationandsupport: {
    src: 'https://images.pexels.com/photos/8867425/pexels-photo-8867425.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    alt: 'Contacting support with evidence',
  },
  internetanddataissues: {
    src: 'https://images.pexels.com/photos/5428830/pexels-photo-5428830.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    alt: 'Quick checks for mobile data and connectivity',
  },
  noserviceonphone: {
    src: 'https://images.pexels.com/photos/305565/pexels-photo-305565.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    alt: 'No service signal on smartphone',
  },
  bestdataplans: {
    src: 'https://images.pexels.com/photos/799091/pexels-photo-799091.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    alt: 'Comparing mobile data plans on phone',
  },
  smartphoneproblems: {
    src: 'https://images.pexels.com/photos/479273/pexels-photo-479273.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    alt: 'Fixing common smartphone issues',
  },
  phoneoverheating: {
    src: 'https://images.pexels.com/photos/572056/pexels-photo-572056.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    alt: 'Cooling down overheated phone',
  },
  batterydrainingfast: {
    src: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    alt: 'Optimizing battery settings for longevity',
  },
  storagefullsolutions: {
    src: 'https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    alt: 'Freeing up storage space on device',
  },
  routersetupandwifi: {
    src: 'https://images.pexels.com/photos/1054397/pexels-photo-1054397.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    alt: 'Setting up home Wi‑Fi router',
  },
  cloudandbackupissues: {
    src: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    alt: 'Managing cloud backups and sync',
  },
  errorcodesandlogins: {
    src: 'https://images.pexels.com/photos/1181216/pexels-photo-1181216.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    alt: 'Resolving app error codes and login problems',
  },
  whatsapphacked: {
    src: 'https://images.unsplash.com/photo-1605902711622-cfb43cba4e3d?auto=format&fit=crop&w=1200&q=80',
    alt: 'Recovering hacked messaging account securely',
  },
  accountbanned: {
    src: 'https://images.pexels.com/photos/5838466/pexels-photo-5838466.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    alt: 'Appealing a banned account decision',
  },
  facebooklocked: {
    src: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    alt: 'Unlocking Facebook account securely',
  },
  scamsandfraud: {
    src: 'https://images.pexels.com/photos/5682772/pexels-photo-5682772.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    alt: 'Spotting online scams and fraud',
  },
  posfraudsafety: {
    src: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    alt: 'POS safety tips to avoid skimming',
  },
  unknowndebitalerts: {
    src: 'https://images.pexels.com/photos/4968399/pexels-photo-4968399.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    alt: 'Investigating unknown debit alerts',
  },
  dataprivacyandsecurity: {
    src: 'https://images.unsplash.com/photo-1544197150-b99a580bb7dc?auto=format&fit=crop&w=1200&q=80',
    alt: 'Protecting data privacy on devices',
  },
  accounthackedhelp: {
    src: 'https://images.unsplash.com/photo-1590955553163-3af8f876e9d5?auto=format&fit=crop&w=1200&q=80',
    alt: 'Recovering hacked accounts step by step',
  },
  isthislegit: {
    src: 'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    alt: 'Verifying website and offer legitimacy',
  },
  legalandtechrights: {
    src: 'https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    alt: 'Understanding digital and legal rights',
  },
  digitalpayments: {
    src: 'https://images.pexels.com/photos/4968392/pexels-photo-4968392.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    alt: 'Using mobile payments and transfers',
  },
  transferpendingreversal: {
    src: 'https://images.pexels.com/photos/4386373/pexels-photo-4386373.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    alt: 'Resolving pending and reversed transfers',
  },
  posoperations: {
    src: 'https://images.pexels.com/photos/298823/pexels-photo-298823.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    alt: 'Operating POS business efficiently',
  },
  ninbvngovtids: {
    src: 'https://images.pexels.com/photos/271697/pexels-photo-271697.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    alt: 'Managing NIN, BVN and government IDs',
  },
  ninbvnandgovtids: {
    src: 'https://images.pexels.com/photos/271697/pexels-photo-271697.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    alt: 'Managing NIN, BVN and government IDs',
  },
  passportanddriverlicense: {
    src: 'https://images.pexels.com/photos/1308062/pexels-photo-1308062.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    alt: 'Passport and driver license processing',
  },
  smallbusinesstech: {
    src: 'https://images.pexels.com/photos/3205525/pexels-photo-3205525.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    alt: 'Tech tools for small businesses',
  },
  remoteworkandincome: {
    src: 'https://images.pexels.com/photos/4050291/pexels-photo-4050291.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    alt: 'Working remotely and earning income',
  },
  freelancingplatforms: {
    src: 'https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    alt: 'Using freelancing platforms effectively',
  },
  dollarearnings: {
    src: 'https://images.pexels.com/photos/164474/pexels-photo-164474.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    alt: 'Earning and receiving dollars online',
  },
  jobsearchandcareers: {
    src: 'https://images.pexels.com/photos/3761509/pexels-photo-3761509.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    alt: 'Job searching and career growth',
  },
  softwarehowtos: {
    src: 'https://images.pexels.com/photos/3861974/pexels-photo-3861974.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    alt: 'Software tutorials and step-by-steps',
  },
  excelandofficetips: {
    src: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    alt: 'Excel charts and Office productivity',
  },
  aitoolsandassistants: {
    src: 'https://images.pexels.com/photos/8728382/pexels-photo-8728382.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    alt: 'AI tools and assistants in action',
  },
  chatgptalternatives: {
    src: 'https://images.pexels.com/photos/791528/pexels-photo-791528.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    alt: 'Exploring alternatives to ChatGPT',
  },
  digitaleducation: {
    src: 'https://images.pexels.com/photos/5905440/pexels-photo-5905440.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    alt: 'Digital education and certifications',
  },
  onlinecourses: {
    src: 'https://images.pexels.com/photos/4144221/pexels-photo-4144221.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    alt: 'Taking online courses effectively',
  },
  buyingguides: {
    src: 'https://images.pexels.com/photos/5632384/pexels-photo-5632384.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    alt: 'Tech buying guides and comparisons',
  },
  bestphonesunderx: {
    src: 'https://images.pexels.com/photos/4219862/pexels-photo-4219862.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    alt: 'Best budget smartphones lineup',
  },
  studentlaptops: {
    src: 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    alt: 'Laptops ideal for students',
  },
  templatesandchecklists: {
    src: 'https://images.pexels.com/photos/3184646/pexels-photo-3184646.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    alt: 'Templates and checklists ready to use',
  },
};

/**
 * Find best matching curated image based on keywords
 */
function findBestCuratedImage(
  category: string,
  title?: string
): { src: string; alt: string } | null {
  const categoryImages = curatedImages[category as keyof typeof curatedImages];

  if (!categoryImages || categoryImages.length === 0) {
    return null;
  }

  // If no title provided, return random image from category
  if (!title) {
    const randomIndex = Math.floor(Math.random() * categoryImages.length);
    const img = categoryImages[randomIndex] as any;
    return img && img.src && img.alt ? { src: img.src, alt: img.alt } : null;
  }

  // Find best match based on keywords
  const titleLower = title.toLowerCase();
  let bestMatch = categoryImages[0];
  let bestScore = 0;

  for (const image of categoryImages as any[]) {
    let score = 0;
    const kws: string[] = Array.isArray(image.keywords) ? image.keywords : [];
    for (const keyword of kws) {
      if (titleLower.includes(keyword)) {
        score++;
      }
    }
    if (score > bestScore) {
      bestScore = score;
      bestMatch = image;
    }
  }

  if (bestScore === 0) {
    const hash = titleLower.split('').reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
    const idx = hash % categoryImages.length;
    const img = categoryImages[idx] as any;
    return img && img.src && img.alt ? { src: img.src, alt: img.alt } : null;
  }

  const bm = bestMatch as any;
  return bm && bm.src && bm.alt ? { src: bm.src, alt: bm.alt } : null;
}

/**
 * Get appropriate image (curated or placeholder)
 */
export function getContextualImage(config: ImageConfig): { src: string; alt: string } {
  const {
    category = 'default',
    title = '',
    alt = '',
    width = 800,
    height = 600,
    preferCurated = true,
  } = config;

  const normalizedCategory = category.toLowerCase().replace(/-/g, '');

  const titleKey = (title || '')
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '')
    .trim();
  if (titleKey && titleImages[titleKey]) {
    const ti = titleImages[titleKey];
    const isExternal = ti.src.startsWith('http://') || ti.src.startsWith('https://');
    const proxied = isExternal
      ? `/api/image-proxy?url=${encodeURIComponent(ti.src)}`
      : ti.src;
    return { src: proxied, alt: ti.alt };
  }

  // Try to get curated image first if preferred
  if (preferCurated) {
    const curatedImage = findBestCuratedImage(normalizedCategory, title);
    if (curatedImage) {
      const isExternal =
        curatedImage.src.startsWith('http://') || curatedImage.src.startsWith('https://');
      const proxied = isExternal
        ? `/api/image-proxy?url=${encodeURIComponent(curatedImage.src)}`
        : curatedImage.src;
      return { src: proxied, alt: curatedImage.alt };
    }
  }

  // Fallback to dynamic placeholder
  function storyIconForTitle(t: string): string {
    const s = (t || '').toLowerCase();
    if (s.includes('lawyer') || s.includes('legal') || s.includes('contract') || s.includes('compliance')) return '⚖️';
    if (s.includes('dentist') || s.includes('dental') || s.includes('cleaning') || s.includes('fillings') || s.includes('whitening')) return '🦷';
    if (s.includes('builder') || s.includes('construction') || s.includes('renovation') || s.includes('supervision') || s.includes('estimates')) return '🏗️';
    if (s.includes('saving')) return '🐖';
    if (s.includes('invest')) return '📈';
    if (s.includes('retire')) return '🏖️';
    if (s.includes('debt')) return '💳';
    if (s.includes('bank')) return '🏦';
    if (s.includes('job')) return '🔍';
    if (s.includes('cv') || s.includes('resume')) return '📄';
    if (s.includes('interview')) return '👥';
    if (s.includes('remote')) return '🌐';
    if (s.includes('freelanc')) return '💻';
    if (s.includes('productivity')) return '⚡';
    if (s.includes('goal')) return '🎯';
    if (s.includes('balance')) return '⚖️';
    if (s.includes('tools')) return '🛠️';
    if (s.includes('step')) return '📝';
    if (s.includes('roadmap')) return '🗺️';
    if (s.includes('question')) return '❓';
    if (s.includes('troubleshoot')) return '🛠️';
    if (s.includes('beginner')) return '✋';
    if (s.includes('blockchain')) return '⛓️';
    if (s.includes('machine learning')) return '🤖';
    if (s.includes('communication')) return '🗣️';
    if (s.includes('urban') || s.includes('garden')) return '🌱';
    return '📖';
  }
  const placeholderSrc = getPlaceholderDataURL({
    width,
    height,
    category: normalizedCategory,
    text: title || category,
    seed: title || category,
    icon: storyIconForTitle(title || category),
  });

  const placeholderAlt = alt || `${category} - ${title || 'Visual representation'}`;

  return {
    src: placeholderSrc,
    alt: placeholderAlt,
  };
}

/**
 * Get author avatar (placeholder or curated)
 */
export function getAuthorAvatar(authorName: string): string {
  // Handle undefined or null authorName
  if (!authorName) {
    authorName = 'Unknown Author';
  }

  // Generate consistent avatar based on author name
  const colors = [
    '#008751',
    '#FDB913',
    '#E31B23',
    '#00A86B',
    '#FF6B35',
    '#6B46C1',
    '#0EA5E9',
    '#FF8C42',
    '#9333EA',
    '#22D3EE',
  ];

  const hash = authorName.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const colorIndex = hash % colors.length;
  const color = colors[colorIndex];

  const initials = authorName
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  const svg = `
    <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="50" fill="${color}" />
      <text 
        x="50" 
        y="50" 
        font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
        font-size="40" 
        font-weight="700" 
        fill="#FFFFFF" 
        text-anchor="middle" 
        dominant-baseline="central"
      >
        ${initials}
      </text>
    </svg>
  `;

  return `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`;
}

/**
 * Check if image exists in curated library
 */
export function hasCuratedImage(category: string): boolean {
  const normalizedCategory = category.toLowerCase().replace(/-/g, '');
  return normalizedCategory in curatedImages;
}

/**
 * Get all curated images for a category
 */
export function getCuratedImagesForCategory(category: string) {
  const normalizedCategory = category.toLowerCase().replace(/-/g, '');
  return curatedImages[normalizedCategory as keyof typeof curatedImages] || [];
}
