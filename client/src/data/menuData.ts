import { MenuData } from '@/types/menu';

export const menuData: MenuData = {
  mainMenu: [
    {
      id: 'guides',
      label: 'Guides',
      href: '/guides',
      hasDropdown: true,
      categories: [
        {
          id: 'guides_howto',
          label: 'How-To',
          items: [
            { id: 'guides_howto_browse', label: 'Browse How-To', href: '/guides/howto' },
          ],
        },
        {
          id: 'guides_finance',
          label: 'Personal Finance & Money',
          items: [
            {
              id: 'guides_budgeting',
              label: 'Budgeting & Expense Tracking',
              href: '/guides/budgeting',
            },
            { id: 'guides_saving', label: 'Saving Strategies', href: '/guides/saving' },
            { id: 'guides_investing', label: 'Investing Basics', href: '/guides/investing' },
            { id: 'guides_retirement', label: 'Retirement Planning', href: '/guides/retirement' },
            { id: 'guides_emergency', label: 'Emergency Funds', href: '/guides/emergency-funds' },
            { id: 'guides_credit', label: 'Credit & Loans', href: '/guides/credit-loans' },
            { id: 'guides_debt', label: 'Debt Management', href: '/guides/debt-management' },
            { id: 'guides_banking', label: 'Online Banking', href: '/guides/online-banking' },
            { id: 'guides_fintech', label: 'Mobile Money & Fintech', href: '/guides/fintech' },
            { id: 'guides_crypto', label: 'Crypto Education', href: '/guides/crypto' },
            { id: 'guides_insurance', label: 'Insurance Guides', href: '/guides/insurance' },
            { id: 'guides_tax', label: 'Tax Education', href: '/guides/tax' },
          ],
        },
        {
          id: 'guides_career',
          label: 'Career, Work & Productivity',
          items: [
            {
              id: 'guides_career_planning',
              label: 'Career Planning',
              href: '/guides/career-planning',
            },
            { id: 'guides_job_market', label: 'Job Market', href: '/guides/job-market' },
            { id: 'guides_job_search', label: 'Job Search Strategies', href: '/guides/job-search' },
            {
              id: 'guides_cv',
              label: 'CV / Resume Writing',
              href: '/guides/job-search#cv-optimization',
            },
            {
              id: 'guides_interview',
              label: 'Interview Preparation',
              href: '/guides/job-search#interview-prep',
            },
            { id: 'guides_workplace', label: 'Workplace Skills', href: '/guides/workplace-skills' },
            { id: 'guides_remote', label: 'Remote Work', href: '/guides/remote-work' },
            { id: 'guides_freelancing', label: 'Freelancing', href: '/guides/freelancing' },
            { id: 'guides_side_hustle', label: 'Side Hustles', href: '/guides/side-hustles' },
            { id: 'guides_time_mgmt', label: 'Time Management', href: '/guides/time-management' },
            { id: 'guides_goals', label: 'Goal Setting', href: '/guides/goal-setting' },
            {
              id: 'guides_productivity',
              label: 'Productivity Tools',
              href: '/guides/productivity-tools',
            },
            {
              id: 'guides_work_life',
              label: 'Work-Life Balance',
              href: '/guides/work-life-balance',
            },
          ],
        },
        {
          id: 'guides_explainers',
          label: 'Explainers & Lists',
          items: [
            { id: 'guides_what_is', label: 'What is...', href: '/guides/what-is' },
            { id: 'guides_how_works', label: 'How it Works', href: '/guides/how-it-works' },
            { id: 'guides_pros_cons', label: 'Pros & Cons', href: '/guides/pros-cons' },
            { id: 'guides_comparisons', label: 'Comparisons', href: '/guides/comparisons' },
            { id: 'guides_best_tools', label: 'Best Tools', href: '/guides/best-tools' },
            { id: 'guides_top_resources', label: 'Top Resources', href: '/guides/top-resources' },
            {
              id: 'guides_step_by_step',
              label: 'Step-by-Step Guides',
              href: '/guides/step-by-step',
            },
            {
              id: 'guides_beginner',
              label: 'Beginner Roadmaps',
              href: '/guides/beginner-roadmaps',
            },
          ],
        },
        {
          id: 'guides_faqs',
          label: 'FAQs & Help',
          items: [
            { id: 'guides_common_q', label: 'Common Questions', href: '/guides/common-questions' },
            {
              id: 'guides_troubleshoot',
              label: 'Troubleshooting',
              href: '/guides/troubleshooting',
            },
            { id: 'guides_beginner_help', label: 'Beginner Help', href: '/guides/beginner-help' },
          ],
        },
      ],
    },
    {
      id: 'topics',
      label: 'Topics',
      href: '/topics',
      hasDropdown: true,
      categories: [
        // ALL EDUCATION CATEGORIES GROUPED TOGETHER
        {
          id: 'topics_education_academic',
          label: 'Education — Academic Resources',
          items: [
            { id: 'education_study', label: 'Study Techniques', href: '/study-techniques' },
            { id: 'education_exam', label: 'Exam Preparation', href: '/exam-prep' },
            { id: 'education_guides', label: 'Study Guides', href: '/study-guides' },
            { id: 'education_admissions', label: 'University Admissions', href: '/admissions' },
            { id: 'education_scholarships', label: 'Scholarships', href: '/scholarships' },
          ],
          group: 'Education',
        },
        {
          id: 'topics_education_language',
          label: 'Education — Language Learning',
          items: [
            { id: 'education_english', label: 'Learn English', href: '/learn-english' },
            { id: 'education_french', label: 'Learn French', href: '/learn-french' },
            { id: 'education_local_lang', label: 'Local Languages', href: '/local-languages' },
          ],
          group: 'Education',
        },
        {
          id: 'topics_education_professional',
          label: 'Education — Professional & Skills',
          items: [
            { id: 'education_coding', label: 'Learn Coding', href: '/learn-coding' },
            { id: 'education_design', label: 'Graphic Design', href: '/graphic-design' },
            { id: 'education_marketing', label: 'Digital Marketing', href: '/digital-marketing' },
            { id: 'education_certifications', label: 'Certifications', href: '/certifications' },
            { id: 'education_career', label: 'Career Advice', href: '/career-advice' },
            { id: 'education_digital_education', label: 'Digital Education', href: '/digital-education' },
            { id: 'education_online_courses', label: 'Online Courses', href: '/online-courses' },
          ],
          group: 'Education',
        },
        {
          id: 'topics_education_student_life',
          label: 'Education — Student Life',
          items: [
            { id: 'education_productivity', label: 'Productivity', href: '/student-productivity' },
            { id: 'education_mental_health', label: 'Mental Health', href: '/mental-health' },
            { id: 'education_budgeting', label: 'Student Budgeting', href: '/student-budgeting' },
          ],
          group: 'Education',
        },
        
        // ALL TECHNOLOGY CATEGORIES GROUPED TOGETHER
        {
          id: 'topics_tech_connectivity',
          label: 'Technology — Connectivity & Devices',
          items: [
            { id: 'tech_internet_issues', label: 'Internet & Data Issues', href: '/internet-issues' },
            { id: 'tech_no_service', label: 'No Service on Phone', href: '/no-service' },
            { id: 'tech_data_plan', label: 'Best Data Plans', href: '/data-plans' },
            { id: 'tech_smartphones', label: 'Smartphone Problems', href: '/smartphone-problems' },
            { id: 'tech_overheating', label: 'Phone Overheating', href: '/phone-overheating' },
            { id: 'tech_battery', label: 'Battery Draining Fast', href: '/battery-draining' },
            { id: 'tech_storage', label: 'Storage Full Solutions', href: '/storage-full' },
            { id: 'tech_router', label: 'Router Setup & Wi-Fi', href: '/router-setup' },
            { id: 'tech_cloud', label: 'Cloud & Backup Issues', href: '/cloud-storage' },
            { id: 'tech_troubleshoot', label: 'Error Codes & Logins', href: '/error-codes' },
          ],
          group: 'Technology',
        },
        {
          id: 'topics_tech_safety',
          label: 'Technology — Social, Safety & Trust',
          items: [
            { id: 'tech_whatsapp_hacked', label: 'WhatsApp Hacked', href: '/whatsapp-hacked' },
            { id: 'tech_account_banned', label: 'Account Banned', href: '/account-banned' },
            { id: 'tech_fb_locked', label: 'Facebook Locked', href: '/facebook-locked' },
            { id: 'tech_scams', label: 'Scams & Fraud', href: '/scams-fraud' },
            { id: 'tech_pos_fraud', label: 'POS Fraud Safety', href: '/pos-fraud' },
            { id: 'tech_debit_alert', label: 'Unknown Debit Alerts', href: '/unknown-debit' },
            { id: 'tech_privacy', label: 'Data Privacy & Security', href: '/data-privacy' },
            { id: 'tech_hacked', label: 'Account Hacked Help', href: '/account-hacked' },
            { id: 'tech_verification', label: 'Is This Legit?', href: '/verification' },
            { id: 'tech_legal', label: 'Legal & Tech Rights', href: '/tech-rights' },
          ],
          group: 'Technology',
        },
        {
          id: 'topics_tech_finance',
          label: 'Technology — Finance, Govt & Business',
          items: [
            { id: 'tech_payments', label: 'Digital Payments', href: '/digital-payments' },
            { id: 'tech_transfer_issues', label: 'Transfer Pending/Reversal', href: '/transfer-issues' },
            { id: 'tech_pos_ops', label: 'POS Operations', href: '/pos-operations' },
            { id: 'tech_govt', label: 'NIN, BVN & Govt IDs', href: '/govt-ids' },
            { id: 'tech_passport', label: 'Passport & Driver License', href: '/passport-license' },
            { id: 'tech_small_biz', label: 'Small Business Tech', href: '/small-business' },
            { id: 'tech_remote_work', label: 'Remote Work & Income', href: '/remote-work' },
            { id: 'tech_freelancing', label: 'Freelancing Platforms', href: '/freelancing' },
            { id: 'tech_dollar_pay', label: 'Dollar Earnings', href: '/dollar-earnings' },
            { id: 'tech_jobs', label: 'Job Search & Careers', href: '/careers' },
          ],
          group: 'Technology',
        },
        {
          id: 'topics_tech_tools',
          label: 'Technology — Tools, Learning & Buying',
          items: [
            { id: 'tech_software', label: 'Software How-Tos', href: '/software-howto' },
            { id: 'tech_excel', label: 'Excel & Office Tips', href: '/excel-tips' },
            { id: 'tech_ai', label: 'AI Tools & Assistants', href: '/ai-tools' },
            { id: 'tech_chatgpt', label: 'ChatGPT Alternatives', href: '/chatgpt-alternatives' },
            { id: 'tech_education', label: 'Digital Education', href: '/digital-education' },
            { id: 'tech_courses', label: 'Online Courses', href: '/online-courses' },
            { id: 'tech_buying', label: 'Buying Guides', href: '/buying-guides' },
            { id: 'tech_best_phones', label: 'Best Phones Under ₦X', href: '/best-phones' },
            { id: 'tech_laptops', label: 'Student Laptops', href: '/student-laptops' },
            { id: 'tech_templates', label: 'Templates & Checklists', href: '/templates' },
          ],
          group: 'Technology',
        },
        
        // ALL LIFESTYLE CATEGORIES GROUPED TOGETHER
        {
          id: 'topics_lifestyle_health',
          label: 'Lifestyle — Health & Wellness',
          items: [
            { id: 'lifestyle_healthy_living', label: 'Healthy Living Tips', href: '/healthy-living' },
            { id: 'lifestyle_nutrition', label: 'Nutrition Education', href: '/nutrition' },
            { id: 'lifestyle_fitness', label: 'Fitness Guides', href: '/fitness' },
            { id: 'lifestyle_mental', label: 'Mental Wellness', href: '/mental-wellness' },
            { id: 'lifestyle_stress', label: 'Stress Management', href: '/stress-management' },
            { id: 'lifestyle_sleep', label: 'Sleep Improvement', href: '/sleep' },
            { id: 'lifestyle_hygiene', label: 'Personal Hygiene', href: '/hygiene' },
            { id: 'lifestyle_habits', label: 'Lifestyle Habits', href: '/habits' },
            { id: 'lifestyle_home_wellness', label: 'Home Wellness Routines', href: '/home-wellness' },
          ],
          group: 'Lifestyle',
        },
        {
          id: 'topics_lifestyle_parenting',
          label: 'Lifestyle — Parenting & Family',
          items: [
            { id: 'lifestyle_pregnancy', label: 'Pregnancy Education', href: '/pregnancy' },
            { id: 'lifestyle_newborn', label: 'Newborn Care', href: '/newborn-care' },
            { id: 'lifestyle_child_dev', label: 'Child Development', href: '/child-development' },
            { id: 'lifestyle_parenting_tips', label: 'Parenting Tips', href: '/parenting-tips' },
            { id: 'lifestyle_education_support', label: 'Education Support', href: '/education-support' },
            { id: 'lifestyle_family_budget', label: 'Family Budgeting', href: '/family-budgeting' },
            { id: 'lifestyle_home_routines', label: 'Home Routines', href: '/home-routines' },
            { id: 'lifestyle_parenting_resources', label: 'Parenting Resources', href: '/parenting-resources' },
          ],
          group: 'Lifestyle',
        },
        {
          id: 'topics_lifestyle_travel',
          label: 'Lifestyle — Travel & Living',
          items: [
            { id: 'lifestyle_travel_planning', label: 'Travel Planning', href: '/travel-planning' },
            { id: 'lifestyle_budget_travel', label: 'Budget Travel', href: '/budget-travel' },
            { id: 'lifestyle_travel_safety', label: 'Travel Safety', href: '/travel-safety' },
            { id: 'lifestyle_accommodation', label: 'Accommodation Guides', href: '/accommodation' },
            { id: 'lifestyle_transportation', label: 'Transportation Tips', href: '/transportation' },
            { id: 'lifestyle_living_abroad', label: 'Living Abroad Guides', href: '/living-abroad' },
            { id: 'lifestyle_cultural', label: 'Cultural Tips', href: '/cultural-tips' },
            { id: 'lifestyle_culture_main', label: 'Nigerian Culture', href: '/nigerian-culture' },
            { id: 'lifestyle_local_tourism', label: 'Local Tourism', href: '/local-tourism' },
          ],
          group: 'Lifestyle',
        },
      ],
    },
    {
      id: 'howto',
      label: 'How-To',
      href: '/howto',
      hasDropdown: true,
      categories: [
        {
          id: 'howto_technology',
          label: 'Technology',
          items: [
            { id: 'howto_smartphones', label: 'Use Smartphones', href: '/howto/smartphones' },
            { id: 'howto_fix_phone', label: 'Fix Common Phone Issues', href: '/howto/fix-phone' },
            { id: 'howto_install_apps', label: 'Install Apps', href: '/howto/install-apps' },
            { id: 'howto_software', label: 'Use Software', href: '/howto/software' },
            { id: 'howto_website', label: 'Build a Website', href: '/howto/build-website' },
            { id: 'howto_secure', label: 'Secure Accounts', href: '/howto/secure-accounts' },
            { id: 'howto_productivity_tools', label: 'Use Productivity Tools', href: '/howto/productivity-tools' },
          ],
        },
        {
          id: 'howto_business',
          label: 'Business & Entrepreneurship',
          items: [
            { id: 'howto_start_business', label: 'Start a Business', href: '/howto/start-business' },
            { id: 'howto_register', label: 'Register a Business', href: '/howto/register-business' },
            { id: 'howto_market', label: 'Market Online', href: '/howto/market-online' },
            { id: 'howto_sell', label: 'Sell Online', href: '/howto/sell-online' },
            { id: 'howto_manage_finances', label: 'Manage Finances', href: '/howto/manage-finances' },
            { id: 'howto_grow_customers', label: 'Grow Customers', href: '/howto/grow-customers' },
            { id: 'howto_pricing', label: 'Price Products', href: '/howto/pricing' },
          ],
        },
        {
          id: 'howto_home',
          label: 'Home & Daily Life',
          items: [
            { id: 'howto_organize', label: 'Home Organization', href: '/howto/home-organization' },
            { id: 'howto_cleaning', label: 'Cleaning Guides', href: '/howto/cleaning' },
            { id: 'howto_maintenance', label: 'Home Maintenance Basics', href: '/howto/home-maintenance' },
            { id: 'howto_energy', label: 'Energy Saving Tips', href: '/howto/energy-saving' },
            { id: 'howto_safety', label: 'Home Safety Tips', href: '/howto/home-safety' },
          ],
        },
        {
          id: 'howto_food',
          label: 'Food & Cooking',
          items: [
            { id: 'howto_african_recipes', label: 'African Recipes', href: '/howto/african-recipes' },
            { id: 'howto_international', label: 'International Recipes', href: '/howto/international-recipes' },
            { id: 'howto_cooking_beginners', label: 'Cooking for Beginners', href: '/howto/cooking-beginners' },
            { id: 'howto_meal_prep', label: 'Meal Prep', href: '/howto/meal-prep' },
            { id: 'howto_kitchen_tips', label: 'Kitchen Tips', href: '/howto/kitchen-tips' },
            { id: 'howto_food_storage', label: 'Food Storage', href: '/howto/food-storage' },
          ],
        },
        {
          id: 'howto_digital',
          label: 'Digital Skills',
          items: [
            { id: 'howto_coding', label: 'Learn Coding', href: '/howto/learn-coding' },
            { id: 'howto_design_tools', label: 'Use Design Tools', href: '/howto/design-tools' },
            { id: 'howto_office_tools', label: 'Use Office Tools', href: '/howto/office-tools' },
            { id: 'howto_digital_content', label: 'Create Digital Content', href: '/howto/digital-content' },
            { id: 'howto_learn_online', label: 'Learn Online', href: '/howto/learn-online' },
          ],
        },
      ],
    },
    {
      id: 'reviews',
      label: 'Reviews',
      href: '/reviews',
      hasDropdown: true,
      categories: [
        {
          id: 'reviews_technology',
          label: 'Technology Reviews',
          items: [
            {
              id: 'reviews_smartphones',
              label: 'Smartphone Reviews',
              href: '/reviews/smartphones',
            },
            { id: 'reviews_laptops', label: 'Laptop Reviews', href: '/reviews/laptops' },
            { id: 'reviews_tablets', label: 'Tablet Reviews', href: '/reviews/tablets' },
            {
              id: 'reviews_accessories',
              label: 'Accessories Reviews',
              href: '/reviews/accessories',
            },
            { id: 'reviews_gadgets', label: 'Gadget Comparisons', href: '/reviews/gadgets' },
            { id: 'reviews_buying', label: 'Buying Guides', href: '/reviews/buying-guides' },
          ],
        },
        {
          id: 'reviews_software',
          label: 'Software & App Reviews',
          items: [
            {
              id: 'reviews_productivity_apps',
              label: 'Productivity Apps',
              href: '/reviews/productivity-apps',
            },
            { id: 'reviews_finance_apps', label: 'Finance Apps', href: '/reviews/finance-apps' },
            { id: 'reviews_fintech', label: 'Fintech Reviews', href: '/reviews/nigerian-fintech' },
            { id: 'reviews_learning_apps', label: 'Learning Apps', href: '/reviews/learning-apps' },
            {
              id: 'reviews_business_tools',
              label: 'Business Tools',
              href: '/reviews/business-tools',
            },
            { id: 'reviews_free_paid', label: 'Free vs Paid Tools', href: '/reviews/free-vs-paid' },
            {
              id: 'reviews_alternatives',
              label: 'Alternatives Comparisons',
              href: '/reviews/alternatives',
            },
          ],
        },
        {
          id: 'reviews_books',
          label: 'Book & Learning Reviews',
          items: [
            {
              id: 'reviews_educational_books',
              label: 'Educational Books',
              href: '/reviews/educational-books',
            },
            {
              id: 'reviews_self_dev',
              label: 'Self-Development Books',
              href: '/reviews/self-development',
            },
            {
              id: 'reviews_business_books',
              label: 'Business Books',
              href: '/reviews/business-books',
            },
            { id: 'reviews_tech_books', label: 'Tech Books', href: '/reviews/tech-books' },
            { id: 'reviews_courses', label: 'Course Platforms', href: '/reviews/course-platforms' },
          ],
        },
        {
          id: 'reviews_services',
          label: 'Service Reviews',
          items: [
            {
              id: 'reviews_online_services',
              label: 'Online Services',
              href: '/reviews/online-services',
            },
            {
              id: 'reviews_digital_platforms',
              label: 'Digital Platforms',
              href: '/reviews/digital-platforms',
            },
            {
              id: 'reviews_subscriptions',
              label: 'Subscription Services',
              href: '/reviews/subscriptions',
            },
            { id: 'reviews_saas', label: 'SaaS Products', href: '/reviews/saas' },
          ],
        },
        {
          id: 'reviews_local',
          label: 'Local Reviews',
          items: [
            { id: 'reviews_restaurants', label: 'Restaurants', href: '/reviews/restaurants' },
            { id: 'reviews_hotels', label: 'Hotels', href: '/reviews/hotels' },
            { id: 'reviews_cafes', label: 'Cafes', href: '/reviews/cafes' },
            { id: 'reviews_vendors', label: 'Local Vendors', href: '/reviews/local-vendors' },
            {
              id: 'reviews_service_providers',
              label: 'Service Providers',
              href: '/reviews/service-providers',
            },
          ],
        },
      ],
    },
    {
      id: 'local',
      label: 'Local Resources',
      href: '/local-resources',
      hasDropdown: true,
      categories: [
        {
          id: 'local_food',
          label: 'Food & Hospitality',
          items: [
            { id: 'local_restaurants', label: 'Restaurants', href: '/local-resources/restaurants' },
            { id: 'local_cafes', label: 'Cafes', href: '/local-resources/cafes' },
            { id: 'local_street_food', label: 'Street Food', href: '/local-resources/street-food' },
            { id: 'local_lounges', label: 'Lounges', href: '/local-resources/lounges' },
            {
              id: 'local_food_delivery',
              label: 'Food Delivery',
              href: '/local-resources/food-delivery',
            },
          ],
        },
        {
          id: 'local_events',
          label: 'Events & Entertainment',
          items: [
            {
              id: 'local_events_calendar',
              label: 'Events Calendar',
              href: '/local-resources/events-calendar',
            },
            { id: 'local_concerts', label: 'Concerts', href: '/local-resources/concerts' },
            { id: 'local_festivals', label: 'Festivals', href: '/local-resources/festivals' },
            { id: 'local_nightlife', label: 'Nightlife', href: '/local-resources/nightlife' },
            {
              id: 'local_family_events',
              label: 'Family Events',
              href: '/local-resources/family-events',
            },
          ],
        },
        {
          id: 'local_services',
          label: 'Local Services Directory',
          items: [
            {
              id: 'local_home_services',
              label: 'Home Services',
              href: '/local-resources/home-services',
            },
            {
              id: 'local_tech_services',
              label: 'Tech Services',
              href: '/local-resources/tech-services',
            },
            {
              id: 'local_business_services',
              label: 'Business Services',
              href: '/local-resources/business-services',
            },
            { id: 'local_freelancers', label: 'Freelancers', href: '/local-resources/freelancers' },
            {
              id: 'local_professionals',
              label: 'Professionals',
              href: '/local-resources/professionals',
            },
          ],
        },
        {
          id: 'local_living',
          label: 'Living & Transport',
          items: [
            {
              id: 'local_cost_of_living',
              label: 'Cost of Living',
              href: '/local-resources/cost-of-living',
            },
            { id: 'local_city_guides', label: 'City Guides', href: '/local-resources/nigerian-cities' },
            { id: 'local_housing', label: 'Housing Tips', href: '/local-resources/housing' },
            {
              id: 'local_transportation',
              label: 'Transportation Guides',
              href: '/local-resources/transportation',
            },
            {
              id: 'local_neighborhoods',
              label: 'Neighborhood Guides',
              href: '/local-resources/neighborhoods',
            },
          ],
        },
        {
          id: 'local_tourism',
          label: 'Tourism & Travel',
          items: [
            {
              id: 'local_places_to_visit',
              label: 'Places to Visit',
              href: '/local-resources/places-to-visit',
            },
            {
              id: 'local_attractions',
              label: 'Tourist Attractions',
              href: '/local-resources/attractions',
            },
            {
              id: 'local_itineraries',
              label: 'Travel Itineraries',
              href: '/local-resources/itineraries',
            },
            { id: 'local_culture', label: 'Local Culture', href: '/local-resources/local-culture' },
          ],
        },
      ],
    },
    {
      id: 'community',
      label: 'Community',
      href: '/community',
      hasDropdown: true,
      categories: [
        {
          id: 'community_interact',
          label: 'Interact',
          items: [
            { id: 'community_qa', label: 'Q&A Forum', href: '/community/qa' },
            { id: 'community_ama', label: 'AMA Sessions', href: '/community/ama' },
          ],
        },
      ],
    },
  ],
};
