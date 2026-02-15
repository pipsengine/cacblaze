export interface ContentSection {
  title: string;
  body: string;
}

export interface EducationResource {
  id: string;
  slug: string;
  name: string;
  category: string;
  description: string;
  heroImage: string;
  content: (string | ContentSection)[];
  tips?: { title: string; content: string }[];
  author: {
    name: string;
    role: string;
    image: string;
  };
  publishDate: string;
}

export interface EducationCategory {
  id: string;
  title: string;
  slug: string;
  description: string;
  resources: EducationResource[];
}

export const educationHubData: Record<string, EducationCategory> = {
  admissions: {
    id: 'cat_admissions',
    title: 'University Admissions',
    slug: 'admissions',
    description:
      'Expert guidance on navigating university applications, requirements, and placement.',
    resources: [
      {
        id: 'adm_1',
        slug: 'nigerian-university-admission-guide',
        name: 'Nigerian University Admission Guide',
        category: 'Admissions',
        description:
          'A step-by-step guide on how to secure admission into top Nigerian universities.',
        heroImage:
          'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'JAMB UTME Registration and Preparation',
            body: 'The journey begins with the Joint Admissions and Matriculation Board (JAMB) Unified Tertiary Matriculation Examination (UTME). Success requires early registration, choosing the right subject combinations for your intended course, and intensive study using the official JAMB syllabus and past questions. It is crucial to ensure that your profile code and NIN are correctly linked to avoid registration hiccups.',
          },
          {
            title: 'Understanding the JAMB Central Admissions Processing System (CAPS)',
            body: "CAPS is the automated platform where all admission processes are managed. Candidates must regularly monitor their CAPS portal to check for admission offers, verify their O'Level upload status, and either accept or reject admission offers. Failure to accept an offer within the stipulated timeframe can lead to forfeiture of the admission.",
          },
          {
            title: 'Choosing the Right Institution and Course Combination',
            body: 'Many candidates lose admission due to wrong subject combinations or choosing institutions whose cut-off marks they cannot meet. Researching the specific requirements of your chosen university and ensuring your UTME subjects align with the faculty requirements is a critical step in the admission process.',
          },
          {
            title: 'Post-UTME Screening - Preparation and Excellence',
            body: 'Most Nigerian universities conduct a second-level screening called Post-UTME. This could be a computer-based test (CBT), an oral interview, or a screening of results. High performance in Post-UTME is often the deciding factor for competitive courses like Medicine, Law, or Engineering, as it is weighted alongside your JAMB score.',
          },
          {
            title: "The Role of O'Level Results (WAEC/NECO/NABTEB) in Admission",
            body: 'Your Senior Secondary School Certificate Examination (SSCE) results are fundamental. Most universities require at least five credits in relevant subjects, including English Language and Mathematics, obtained in not more than two sittings. Ensuring these results are correctly uploaded to the JAMB portal is mandatory for CAPS consideration.',
          },
          {
            title: 'Direct Entry Admissions - Requirements and Procedures',
            body: "For candidates with Diplomas, NCE, or IJMB/JUPEB qualifications, the Direct Entry (DE) route allows for admission into the 200 level of a degree program. DE applicants must meet the specific CGPA requirements of their target institution and ensure their transcripts are forwarded to the university's admissions office on time.",
          },
          {
            title: 'Admission Quotas - Catchment Areas and ELDS',
            body: 'Understanding the Nigerian admission quota system can give you a strategic advantage. Admissions are often categorized into Merit (45%), Catchment Area (35%), and Educationally Less Developed States (20%). Knowing which category you fall under helps in setting realistic expectations for competitive courses.',
          },
          {
            title: 'Managing Admission Status - Acceptance and Rejection on CAPS',
            body: 'Once an institution proposes admission, it appears on your CAPS. You have the option to "Accept" or "Reject". If you are offered a different course than what you applied for (Change of Program), you must first accept the change before the admission can be finalized. Always print your JAMB Admission Letter immediately after acceptance.',
          },
          {
            title: 'University Clearance and Registration Process',
            body: "Securing admission on JAMB CAPS is not the final step. You must undergo the university's internal clearance, which involves verifying your original documents (birth certificate, state of origin, O'Level results). Only after successful clearance can you pay tuition fees and receive a matriculation number.",
          },
          {
            title: 'Securing Accommodation and Settling into Campus Life',
            body: 'Early preparation for accommodation is vital, as on-campus hostels often fill up quickly. Understanding the pros and cons of staying on-campus versus off-campus, and connecting with student unions or departmental associations, can significantly ease your transition into university life.',
          },
          {
            title: 'Financial Planning - Tuition, Levies, and Living Expenses',
            body: 'University education involves various costs beyond tuition, including departmental dues, library fees, and general living expenses. Creating a budget and exploring scholarship opportunities or student work-study programs can help manage the financial burden of a four or five-year degree program.',
          },
        ],
        author: {
          name: 'Dr. Samuel Ade',
          role: 'Admissions Expert',
          image:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 12, 2026',
      },
      {
        id: 'adm_2',
        slug: 'ivy-league-application-strategy',
        name: 'Ivy League Application Strategy',
        category: 'Admissions',
        description: 'How to stand out in the highly competitive Ivy League admissions process.',
        heroImage:
          'https://images.unsplash.com/photo-1541339907198-e087563f3f4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'Understanding the Holistic Review',
            body: "Ivy League schools don't just look at grades. They evaluate your personality, background, and potential impact on the world through a comprehensive review of your entire application.",
          },
          {
            title: 'Academic Excellence and Rigor',
            body: 'While not the only factor, a near-perfect GPA in the most challenging courses available at your school is generally expected for serious consideration.',
          },
          {
            title: 'Standardized Testing Strategy',
            body: 'Navigating SAT/ACT requirements, including when to submit scores in a test-optional environment and the role of AP or IB exams in demonstrating subject mastery.',
          },
          {
            title: 'Crafting a Compelling Personal Statement',
            body: 'Your main essay is your chance to show who you are beyond the numbers. Learn how to tell a unique story that resonates with admissions officers.',
          },
          {
            title: 'Supplemental Essays and School Fit',
            body: 'Each Ivy has its own culture. Tailor your supplemental essays to show why you specifically belong at Harvard, Yale, Princeton, or other member institutions.',
          },
          {
            title: 'Building a Unique Extracurricular Profile',
            body: 'Quality over quantity. Focus on "spiking" in one or two areas where you have achieved national or international recognition rather than being a well-rounded applicant.',
          },
          {
            title: 'Letters of Recommendation that Shine',
            body: 'How to choose the right teachers and provide them with the information they need to write detailed, enthusiastic, and personal endorsements.',
          },
          {
            title: 'The Ivy League Interview Process',
            body: 'Tips for handling alumni interviews, from researching your interviewer to preparing thoughtful questions that show your deep interest in the school.',
          },
          {
            title: 'Early Decision vs. Regular Decision',
            body: 'Understand the strategic advantages and commitment requirements of applying early, and how it affects your chances of admission.',
          },
          {
            title: 'Financial Aid and the CSS Profile',
            body: 'Navigating the need-blind admission policies and understanding how the Ivy League calculates generous, need-based financial aid packages.',
          },
        ],
        author: {
          name: 'Sarah Harvard',
          role: 'Former Admissions Officer',
          image:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 11, 2026',
      },
      {
        id: 'adm_3',
        slug: 'uk-university-admissions-ucas',
        name: 'UK University Admissions: UCAS Guide',
        category: 'Admissions',
        description: 'Navigating the UCAS system for undergraduate studies in the United Kingdom.',
        heroImage:
          'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'Introduction to the UCAS System',
            body: 'The Universities and Colleges Admissions Service (UCAS) is the centralized platform for all UK undergraduate applications. Learn how the system works and what you need to start.',
          },
          {
            title: 'The UCAS Application Timeline',
            body: 'Critical deadlines for Oxbridge, Medicine, Dentistry, and Veterinary Science (Oct 15th) versus the standard January deadline for other courses.',
          },
          {
            title: 'Writing your Personal Statement',
            body: 'Unlike US essays, the UK personal statement should be 80% academic, focusing on your passion for the subject and your relevant skills.',
          },
          {
            title: 'Choosing your Five Universities',
            body: 'Strategies for selecting your five choices, including balancing "reach" and "safety" schools based on their published entry requirements.',
          },
          {
            title: 'Understanding Predicted Grades',
            body: "The role of your teachers' predictions in the UK system and how they influence conditional offers from universities.",
          },
          {
            title: 'The UK University Interview',
            body: 'What to expect from academic interviews, particularly for competitive courses at Russell Group universities like Oxford, Cambridge, and Imperial.',
          },
          {
            title: 'Admissions Tests (BMAT, UCAT, LNAT)',
            body: 'Guidance on the additional standardized tests required for specialized subjects like Medicine or Law in the UK.',
          },
          {
            title: 'Receiving and Responding to Offers',
            body: 'Understanding Conditional, Unconditional, and "Firm" vs. "Insurance" choices once you receive your decisions.',
          },
          {
            title: 'Student Visa Requirements (Tier 4)',
            body: 'A guide to the CAS (Confirmation of Acceptance for Studies) and the financial and English language requirements for international students.',
          },
          {
            title: 'Clearing and Adjustment Processes',
            body: "How to navigate the UCAS Clearing system if you don't meet your offer conditions or if you exceed them and want to apply to a different school.",
          },
        ],
        author: {
          name: 'James London',
          role: 'UK Education Consultant',
          image:
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 10, 2026',
      },
      {
        id: 'adm_4',
        slug: 'canadian-study-permit-guide',
        name: 'Canadian Study Permit Guide',
        category: 'Admissions',
        description:
          'Complete guide to obtaining a study permit and admission to Canadian colleges.',
        heroImage:
          'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'Designated Learning Institutions (DLIs)',
            body: "You must have an acceptance letter from a DLI to apply for a study permit. Learn how to verify your chosen school's status.",
          },
          {
            title: 'The Study Permit Application Process',
            body: 'Step-by-step instructions for applying online or at a visa application center, including the required documentation and fees.',
          },
          {
            title: 'Proof of Funds and GIC',
            body: 'Detailed requirements for showing you have enough money to pay for tuition and living expenses, including the Guaranteed Investment Certificate (GIC).',
          },
          {
            title: 'Writing a Strong Study Plan',
            body: 'The Statement of Purpose is critical for Canadian visas. Learn how to explain why you chose Canada and your intent to return home.',
          },
          {
            title: 'Medical Exams and Police Certificates',
            body: 'Information on the mandatory health and security checks required for most international students entering Canada.',
          },
          {
            title: 'The Biometrics Collection Process',
            body: 'What to expect when you go to have your fingerprints and photo taken as part of your application.',
          },
          {
            title: 'Working While Studying in Canada',
            body: 'Rules for on-campus and off-campus work, including the number of hours allowed during the semester and on breaks.',
          },
          {
            title: 'Post-Graduation Work Permit (PGWP)',
            body: 'How to ensure your program of study makes you eligible for a work permit that allows you to gain Canadian work experience after graduation.',
          },
          {
            title: 'The SDS (Student Direct Stream) Program',
            body: 'Faster processing for residents of specific countries. Learn if you qualify and what the additional requirements are.',
          },
          {
            title: 'Arrival in Canada and the Study Permit',
            body: 'What happens at the Port of Entry and the documents you must present to the Border Services Officer to receive your actual permit.',
          },
        ],
        author: {
          name: 'Emily Toronto',
          role: 'Immigration Consultant',
          image:
            'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 09, 2026',
      },
      {
        id: 'adm_5',
        slug: 'australian-university-admissions',
        name: 'Australian University Admissions',
        category: 'Admissions',
        description: 'Explore the benefits and process of studying in Australia.',
        heroImage:
          'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'The Australian Higher Education System',
            body: 'Understanding the difference between universities, TAFE institutes, and private colleges in the Australian system.',
          },
          {
            title: 'The GTE (Genuine Temporary Entrant) Requirement',
            body: 'A key part of the Australian student visa. Learn how to prove that your primary intention is to study and then return home.',
          },
          {
            title: 'English Language Proficiency Tests',
            body: 'Accepted scores for IELTS, TOEFL, and PTE Academic for both university admission and visa purposes.',
          },
          {
            title: 'Overseas Student Health Cover (OSHC)',
            body: 'Mandatory health insurance for all international students. Learn how to purchase and use your cover.',
          },
          {
            title: 'Semester Intake Dates and Deadlines',
            body: 'Most Australian universities have intakes in February and July. Plan your application timeline accordingly.',
          },
          {
            title: 'The Simplified Student Visa Framework (SSVF)',
            body: 'How the Australian visa system categorizes risk and what it means for your application processing time.',
          },
          {
            title: 'Cost of Living and Tuition in Australia',
            body: 'A realistic breakdown of expenses in major cities like Sydney, Melbourne, and Brisbane versus regional areas.',
          },
          {
            title: 'Scholarships for International Students',
            body: 'Overview of the Australia Awards and university-specific scholarships available to high-achieving applicants.',
          },
          {
            title: 'Working Rights for Student Visa Holders',
            body: 'Understand the "48 hours per fortnight" work limit and how it applies to your situation.',
          },
          {
            title: 'Pathway Programs and Foundation Studies',
            body: "Options for students who don't meet the direct entry requirements for their chosen degree program.",
          },
        ],
        author: {
          name: 'Mark Sydney',
          role: 'International Student Advisor',
          image:
            'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 08, 2026',
      },
      {
        id: 'adm_6',
        slug: 'german-public-university-guide',
        name: 'German Public University Guide',
        category: 'Admissions',
        description: 'How to access tuition-free education at world-class German universities.',
        heroImage:
          'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'The Tuition-Free Model in Germany',
            body: 'Understand how public universities in Germany offer free education and the small "semester contribution" fees involved.',
          },
          {
            title: 'German vs. English-Taught Programs',
            body: 'Navigating the growing number of International Programs taught entirely in English versus the requirements for German-taught degrees.',
          },
          {
            title: 'The Uni-Assist Application Portal',
            body: 'Most international students apply through Uni-Assist. Learn how to upload documents and pay the processing fees.',
          },
          {
            title: 'The Blocked Account (Sperrkonto)',
            body: 'A mandatory financial requirement for the German student visa. Learn how to set up your account and deposit the required funds.',
          },
          {
            title: 'Recognition of Foreign Qualifications',
            body: 'Understanding the "Anabin" database and whether your high school diploma is equivalent to the German Abitur.',
          },
          {
            title: 'The Studienkolleg (Preparatory Course)',
            body: 'What to do if your qualifications aren\'t recognized for direct entry, including the "Feststellungsprüfung" exam.',
          },
          {
            title: 'German Student Visa Requirements',
            body: 'A checklist of documents needed for your appointment at the German embassy or consulate.',
          },
          {
            title: 'Finding Student Accommodation',
            body: 'Tips for securing a spot in a "Studentenwerk" dormitory or finding a room in a shared apartment (WG).',
          },
          {
            title: 'Health Insurance in Germany',
            body: 'The difference between public and private health insurance and which one you need for your enrollment.',
          },
          {
            title: 'Part-Time Work and Post-Study Visas',
            body: 'Rules for working 120 full days per year and the 18-month job-seeker visa available after graduation.',
          },
        ],
        author: {
          name: 'Klaus Berlin',
          role: 'DAAD Advisor',
          image:
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 07, 2026',
      },
      {
        id: 'adm_7',
        slug: 'european-masters-degree-guide',
        name: 'European Masters Degree Guide',
        category: 'Admissions',
        description:
          'Explore postgraduate opportunities across the European Higher Education Area.',
        heroImage:
          'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'The Bologna Process and ECTS',
            body: 'How European degrees are standardized through the European Credit Transfer and Accumulation System.',
          },
          {
            title: 'Erasmus Mundus Joint Masters',
            body: 'Learn about prestigious, fully-funded programs that allow you to study in at least two different European countries.',
          },
          {
            title: 'Admission Requirements for Masters',
            body: "Common expectations including a relevant Bachelor's degree, minimum CGPA, and language proficiency.",
          },
          {
            title: 'Writing a Research Proposal',
            body: 'Essential tips for students applying to research-based Masters programs in Europe.',
          },
          {
            title: 'Scholarships and Funding in Europe',
            body: 'Overview of national scholarships like Eiffel (France), Holland Scholarship, and Swedish Institute grants.',
          },
          {
            title: "The Master's Thesis and Defense",
            body: 'What to expect from the final research project that concludes most European postgraduate degrees.',
          },
          {
            title: 'Student Life and Culture in Europe',
            body: 'Navigating life as an international student, including resident permits and the Schengen area travel benefits.',
          },
          {
            title: 'Internship Opportunities during Masters',
            body: "How to find professional placements that are often integrated into European Master's curricula.",
          },
          {
            title: 'Transitioning to a PhD in Europe',
            body: "The pathway from a Master's degree to doctoral research and how to find funded PhD positions.",
          },
          {
            title: 'Employability after a European Masters',
            body: 'How European degrees are viewed by global employers and the stay-back options in various countries.',
          },
        ],
        author: {
          name: 'Dr. Elena Rome',
          role: 'European Education Expert',
          image:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 06, 2026',
      },
      {
        id: 'adm_8',
        slug: 'medical-school-admission-prep',
        name: 'Medical School Admission Prep',
        category: 'Admissions',
        description:
          'The ultimate guide to navigating the rigorous medical school application process.',
        heroImage:
          'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'Pre-Med Course Requirements',
            body: 'A checklist of the essential science and math courses you must complete before applying to med school.',
          },
          {
            title: 'Mastering the MCAT Exam',
            body: 'Strategies for preparing for the Medical College Admission Test, including study schedules and practice resources.',
          },
          {
            title: 'Clinical Experience and Shadowing',
            body: 'Why hands-on experience in a healthcare setting is mandatory and how to find shadowing opportunities with doctors.',
          },
          {
            title: 'The AMCAS/AACOMAS Application',
            body: 'Navigating the centralized application services for MD and DO schools in the United States.',
          },
          {
            title: 'Writing the Medical Personal Statement',
            body: 'How to articulate your "Why Medicine" story with sincerity and impact.',
          },
          {
            title: 'The MMI (Multiple Mini Interview)',
            body: 'What to expect from the increasingly popular situational judgment interview format used by med schools.',
          },
          {
            title: 'Volunteering and Community Service',
            body: 'The importance of showing a commitment to helping others through non-medical volunteer work.',
          },
          {
            title: 'Letters of Evaluation',
            body: 'How to secure strong letters from science professors and clinical supervisors.',
          },
          {
            title: 'Secondary Applications Strategy',
            body: 'How to manage the influx of school-specific essays that follow the primary application.',
          },
          {
            title: 'Financing Medical Education',
            body: 'Understanding the costs of med school and the options for loans, scholarships, and service-based grants.',
          },
        ],
        author: {
          name: 'Dr. James Medic',
          role: 'MD Admissions Consultant',
          image:
            'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 05, 2026',
      },
      {
        id: 'adm_9',
        slug: 'law-school-admission-council-guide',
        name: 'Law School Admission Guide',
        category: 'Admissions',
        description: 'Navigate the LSAT and the application process for top-tier law schools.',
        heroImage:
          'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'Introduction to the JD Degree',
            body: 'Understanding the Juris Doctor program and the career paths it opens in the legal profession.',
          },
          {
            title: 'Conquering the LSAT Exam',
            body: 'Breakdown of Logical Reasoning, Reading Comprehension, and Logic Games (if applicable) sections.',
          },
          {
            title: 'The CAS (Credential Assembly Service)',
            body: 'How the LSAC simplifies the application process by centralizing your transcripts and letters.',
          },
          {
            title: 'Crafting your Law School Resume',
            body: 'How to highlight your professional and academic achievements for a legal audience.',
          },
          {
            title: 'The Diversity Statement in Law Apps',
            body: 'When and how to write an optional statement about your unique background and perspective.',
          },
          {
            title: 'Law School Personal Statement',
            body: 'Focusing on your writing ability, maturity, and reasons for pursuing a career in law.',
          },
          {
            title: 'Addendums for GPA or LSAT Issues',
            body: 'How to explain academic inconsistencies or testing challenges without making excuses.',
          },
          {
            title: 'Choosing the Right Law School',
            body: 'Evaluating rankings, location, specialty programs, and employment outcomes (ABA disclosures).',
          },
          {
            title: 'The Role of the Undergraduate GPA',
            body: 'Why your GPA is so critical in law school admissions and how schools view different majors.',
          },
          {
            title: 'Law School Interviews and Networking',
            body: 'How to handle optional interviews and the importance of connecting with current students and alumni.',
          },
        ],
        author: {
          name: 'Atty. Susan Brief',
          role: 'Legal Careers Advisor',
          image:
            'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 04, 2026',
      },
      {
        id: 'adm_10',
        slug: 'community-college-transfer-guide',
        name: 'Community College Transfer Guide',
        category: 'Admissions',
        description: 'The strategic pathway from a two-year college to a top four-year university.',
        heroImage:
          'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'Benefits of the Transfer Pathway',
            body: 'Learn how starting at a community college can save you thousands in tuition and provide a "second chance" at top universities.',
          },
          {
            title: 'Understanding Articulation Agreements',
            body: 'How to ensure every credit you take at your 2-year college will transfer to your target 4-year university.',
          },
          {
            title: 'The TAG (Transfer Admission Guarantee)',
            body: 'Learn about programs that guarantee you admission to major state universities if you meet specific requirements.',
          },
          {
            title: 'Maintaining a Competitive Transfer GPA',
            body: 'Why your community college performance is often more important than your high school record for transfer apps.',
          },
          {
            title: 'Extracurriculars for Transfer Students',
            body: 'How to show leadership and involvement during your two years at a community college.',
          },
          {
            title: 'The Transfer Application Timeline',
            body: 'When to start researching, meeting with advisors, and submitting your final applications.',
          },
          {
            title: 'Writing the Transfer Essay',
            body: 'How to explain your educational journey and why you are ready for the challenge of a 4-year institution.',
          },
          {
            title: 'Financial Aid for Transfer Students',
            body: 'Navigating FAFSA, transfer-specific scholarships, and the cost of the final two years of your degree.',
          },
          {
            title: 'Transitioning to University Life',
            body: 'Tips for adjusting to the academic and social environment of a large university as a junior transfer.',
          },
          {
            title: 'Success Stories and Case Studies',
            body: 'Examples of students who transferred from local colleges to Ivy League and top public universities.',
          },
        ],
        author: {
          name: 'Prof. John Bridge',
          role: 'Transfer Coordinator',
          image:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 03, 2026',
      },
      {
        id: 'adm_6',
        slug: 'masters-degree-application-tips',
        name: "Master's Degree Application Tips",
        category: 'Admissions',
        description: 'How to prepare a winning application for graduate school.',
        heroImage:
          'https://images.unsplash.com/photo-1523240715639-99a8086f73e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          'GRE/GMAT importance',
          'Letters of recommendation',
          'Statement of purpose',
          'Research proposal',
        ],
        author: {
          name: 'Dr. Anna Reed',
          role: 'Graduate Dean',
          image:
            'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 07, 2026',
      },
      {
        id: 'adm_7',
        slug: 'medical-school-admissions-guide',
        name: 'Medical School Admissions Guide',
        category: 'Admissions',
        description: 'Navigating the path to becoming a doctor: from MCAT to clinicals.',
        heroImage:
          'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          'MCAT preparation',
          'Shadowing experience',
          'AMCAS application',
          'Multiple Mini Interviews (MMI)',
        ],
        author: {
          name: 'Dr. Chris White',
          role: 'Medical Director',
          image:
            'https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 06, 2026',
      },
      {
        id: 'adm_8',
        slug: 'law-school-admissions-lsat',
        name: 'Law School Admissions & LSAT',
        category: 'Admissions',
        description: 'Everything you need to know about LSAT scores and law school applications.',
        heroImage:
          'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          'LSAT logical reasoning',
          'CAS report services',
          'Character and fitness',
          'Choosing a law specialty',
        ],
        author: {
          name: 'Jane Justice',
          role: 'Legal Educator',
          image:
            'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 05, 2026',
      },
      {
        id: 'adm_9',
        slug: 'community-college-to-university-transfer',
        name: 'Community College Transfer Guide',
        category: 'Admissions',
        description:
          'Save money by starting at a community college and transferring to a university.',
        heroImage:
          'https://images.unsplash.com/photo-1525921429624-479b6a26d84d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          'Articulation agreements',
          'Credit transfer process',
          'GPA requirements',
          'Transfer scholarships',
        ],
        author: {
          name: 'Bob Miller',
          role: 'Transfer Counselor',
          image:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 04, 2026',
      },
      {
        id: 'adm_10',
        slug: 'distance-learning-admission-guide',
        name: 'Distance Learning Admission Guide',
        category: 'Admissions',
        description: 'How to apply for online degrees and distance learning programs.',
        heroImage:
          'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          'Accreditation checks',
          'Technical requirements',
          'Online proctoring',
          'Self-paced vs Cohort',
        ],
        author: {
          name: 'Dr. Ellen Sky',
          role: 'Distance Learning Coordinator',
          image:
            'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 03, 2026',
      },
    ],
  },
  scholarships: {
    id: 'cat_scholarships',
    title: 'Scholarships',
    slug: 'scholarships',
    description: 'Find the latest local and international scholarship opportunities.',
    resources: [
      {
        id: 'sch_1',
        slug: 'undergraduate-scholarships-2026',
        name: 'Top Undergraduate Scholarships for 2026',
        category: 'Scholarships',
        description: 'A curated list of fully-funded scholarships for Nigerian undergraduates.',
        heroImage:
          'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'The Bilateral Education Agreement (BEA)',
            body: 'The Federal Government of Nigeria, through the Ministry of Education, offers fully-funded undergraduate and postgraduate scholarships to several countries like Russia, Morocco, and Hungary.',
          },
          {
            title: 'Shell Nigeria University Scholarship',
            body: 'One of the most prestigious corporate scholarships for Nigerian undergraduates. It covers tuition and provides a significant annual stipend for the duration of the course.',
          },
          {
            title: 'MTN Foundation Scholarship Scheme',
            body: 'A merit-based scholarship for high-performing students in Science and Technology courses across Nigerian public tertiary institutions.',
          },
          {
            title: 'Jim Ovia Foundation Leaders Scholarship',
            body: 'Supporting young Africans who have shown potential for leadership and academic excellence to study in any Nigerian university.',
          },
          {
            title: 'NLNG Undergraduate Scholarship',
            body: 'Provided by Nigeria LNG Limited, this scholarship aims to support high-achieving students from host communities and across Nigeria.',
          },
          {
            title: 'SEPLAT JV Scholarship Scheme',
            body: 'A partnership between SEPLAT and NNPC to support students in their second year of study in Federal and State Universities in Nigeria.',
          },
          {
            title: 'Agbami Medical and Engineering Scholarship',
            body: 'Targeted at students in Medicine and Engineering, this scholarship is a major initiative by Chevron and its partners.',
          },
          {
            title: 'TotalEnergies National Merit Scholarship',
            body: 'Every year, TotalEnergies awards scholarships to students in Nigerian universities through a competitive national selection test.',
          },
          {
            title: 'Guinness Nigeria Scholarship Scheme',
            body: 'A scholarship that supports students from host communities and across the country who are studying STEM-related courses.',
          },
          {
            title: 'Preparation and Documentation Tips',
            body: "To win these scholarships, ensure your CGPA is above 3.5, have your O'Level and birth certificates ready, and practice for aptitude tests early.",
          },
        ],
        author: {
          name: 'Linda Chidimma',
          role: 'Scholarship Consultant',
          image:
            'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 11, 2026',
      },
      {
        id: 'sch_2',
        slug: 'chevening-scholarships-uk',
        name: 'Chevening Scholarships (UK)',
        category: 'Scholarships',
        description:
          "Everything you need to know about the UK government's global scholarship program.",
        heroImage:
          'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'Overview of Chevening Awards',
            body: "Chevening is the UK government's international awards program aimed at developing global leaders. It covers full tuition, a monthly stipend, and travel costs.",
          },
          {
            title: 'Eligibility and Work Experience',
            body: 'Applicants must have at least two years of work experience (2,800 hours), an undergraduate degree, and a strong desire to return home and lead change.',
          },
          {
            title: 'The Four Essential Essays',
            body: 'The core of the application consists of four 500-word essays: Leadership and Influence, Networking, Studying in the UK, and Career Plan.',
          },
          {
            title: 'Choosing the Right UK Universities',
            body: "You must select three different master's courses at UK universities. Strategic selection based on your career goals and university reputation is key.",
          },
          {
            title: 'The Reference Letter Requirement',
            body: 'Chevening requires two professional or academic references. Choose individuals who can speak specifically to your leadership potential.',
          },
          {
            title: 'English Language Requirements',
            body: 'While Chevening removed its own English language requirement, you must still meet the requirements of your chosen UK universities (e.g., IELTS or TOEFL).',
          },
          {
            title: 'The Interview Selection Process',
            body: 'If shortlisted, you will be invited to an interview at the British Embassy or High Commission in your country. Preparation for behavioral questions is vital.',
          },
          {
            title: 'Networking and the Chevening Alumni',
            body: 'Being a Chevening Scholar means joining a global network of over 50,000 alumni. Highlighting how you will contribute to this network is a major plus.',
          },
          {
            title: 'Financial Benefits and Stipends',
            body: 'The scholarship covers tuition fees, a set living allowance (stipend), return economy flights, and an arrival allowance.',
          },
          {
            title: 'Timeline and Application Cycle',
            body: 'Applications typically open in August and close in November. Interviews take place from February to April, with final results in June.',
          },
        ],
        author: {
          name: 'Mark Evans',
          role: 'Chevening Alumnus',
          image:
            'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 10, 2026',
      },
      {
        id: 'sch_3',
        slug: 'fulbright-scholarship-usa',
        name: 'Fulbright Scholarship (USA)',
        category: 'Scholarships',
        description: 'Study, research, or teach in the United States with the Fulbright Program.',
        heroImage:
          'https://images.unsplash.com/photo-1550721884-9340682839cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'The Fulbright Foreign Student Program',
            body: 'This program enables graduate students, young professionals, and artists from abroad to study and conduct research in the United States.',
          },
          {
            title: 'Academic and Professional Eligibility',
            body: "Applicants usually need a strong academic record, a Bachelor's degree, and professional experience related to their field of study.",
          },
          {
            title: 'The Personal Statement Essay',
            body: 'A narrative essay describing your personal history, influences, and why you are a good fit for the Fulbright cultural exchange mission.',
          },
          {
            title: 'The Study/Research Objective',
            body: 'A detailed proposal of what you intend to study or the research you want to conduct in the US, and why it must be done in an American institution.',
          },
          {
            title: 'Letters of Recommendation',
            body: 'Three letters of recommendation are required from individuals who can attest to your academic and professional qualifications and character.',
          },
          {
            title: 'The GRE and TOEFL Requirements',
            body: 'Most US graduate programs require the GRE, and international students must prove English proficiency through the TOEFL exam.',
          },
          {
            title: 'The Fulbright Interview',
            body: 'Shortlisted candidates are interviewed by a binational committee. They look for cultural ambassadors, not just academic high-achievers.',
          },
          {
            title: 'University Placement and Affiliation',
            body: 'The Institute of International Education (IIE) handles university placements for Fulbright scholars, aiming to find the best fit for their research.',
          },
          {
            title: 'Health Benefits and Travel Support',
            body: 'The scholarship provides a sickness and accident insurance plan, travel to and from the US, and a settling-in allowance.',
          },
          {
            title: 'Post-Program Return Requirement',
            body: 'A core part of the Fulbright program is the J-1 visa requirement to return to your home country for at least two years after the program.',
          },
        ],
        author: {
          name: 'Dr. Jane Fulbright',
          role: 'Educational Advisor',
          image:
            'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 09, 2026',
      },
      {
        id: 'sch_4',
        slug: 'commonwealth-scholarships-guide',
        name: 'Commonwealth Scholarships Guide',
        category: 'Scholarships',
        description: 'For students from developing Commonwealth countries to study in the UK.',
        heroImage:
          'https://images.unsplash.com/photo-1454165833767-027ffea9e778?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'The CSC Scholarship Categories',
            body: "The Commonwealth Scholarship Commission (CSC) offers Master's, PhD, and Shared Scholarships (partnered with specific UK universities).",
          },
          {
            title: 'Development Impact Essay',
            body: 'The most critical part of the application. You must explain how your study will contribute to the development of your home country.',
          },
          {
            title: 'The Six Development Themes',
            body: 'Applications must align with one of the six themes, such as "Science and technology for development" or "Strengthening health systems."',
          },
          {
            title: 'The Nominating Agency Route',
            body: 'Many Commonwealth scholarships require nomination by a national agency in your home country (e.g., the Federal Ministry of Education in Nigeria).',
          },
          {
            title: 'Academic Excellence and Transcripts',
            body: 'A minimum of a second-class upper (2:1) degree is usually required, with full transcripts for all previous higher education.',
          },
          {
            title: 'Shared Scholarships Program',
            body: "These are for candidates from least developed and lower-middle-income Commonwealth countries, for full-time Master's study on selected courses.",
          },
          {
            title: 'Financial Coverage and Allowances',
            body: 'Includes approved airfare, tuition fees, a monthly stipend, a thesis grant, and a study travel grant.',
          },
          {
            title: 'Applying to UK Universities',
            body: 'You must apply for admission to your chosen UK universities separately and often hold an offer before the scholarship deadline.',
          },
          {
            title: 'The Selection Criteria',
            body: 'The CSC evaluates candidates based on academic merit, the quality of the study plan, and the potential impact on their home country.',
          },
          {
            title: 'Reporting and Alumni Commitment',
            body: 'Scholars are expected to maintain contact with the CSC and provide regular progress reports during and after their studies.',
          },
        ],
        author: {
          name: 'Alice Green',
          role: 'CSC Advisor',
          image:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 08, 2026',
      },
      {
        id: 'sch_5',
        slug: 'daad-scholarships-germany',
        name: 'DAAD Scholarships (Germany)',
        category: 'Scholarships',
        description: 'Fully-funded opportunities for postgraduate studies in Germany.',
        heroImage:
          'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'The DAAD EPOS Program',
            body: 'Development-Related Postgraduate Courses (EPOS) are specifically designed for professionals from developing countries to study in Germany.',
          },
          {
            title: 'Professional Experience Requirements',
            body: 'EPOS applicants usually need at least two years of relevant professional experience after their first degree.',
          },
          {
            title: 'The Motivation Letter',
            body: 'A compelling letter explaining why you chose the course, how it fits your career, and your plans to contribute to development.',
          },
          {
            title: 'Language Proficiency (German/English)',
            body: 'Depending on the course, you may need to provide a TOEFL/IELTS score or a DSH/TestDaF certificate for German-taught programs.',
          },
          {
            title: 'The Europass CV Format',
            body: 'DAAD applications often require a CV in the standard European "Europass" format, highlighting academic and professional milestones.',
          },
          {
            title: 'Application via the DAAD Portal',
            body: 'Most applications are submitted through the "My Guide" or DAAD portal. Ensure all documents are translated into German or English.',
          },
          {
            title: 'Health and Accident Insurance',
            body: 'DAAD scholars are provided with comprehensive health, accident, and personal liability insurance during their stay in Germany.',
          },
          {
            title: 'Monthly Stipends and Travel Grants',
            body: "Includes a monthly allowance (currently around €934 for Master's and €1,200 for PhD), travel subsidies, and a study research grant.",
          },
          {
            title: 'The German Language Course',
            body: 'Many DAAD scholarships include a mandatory 2-6 month intensive German language course in Germany before the degree begins.',
          },
          {
            title: 'Research Grants for Doctoral Candidates',
            body: 'DAAD also offers extensive funding for international students to pursue a PhD or conduct research in Germany.',
          },
        ],
        author: {
          name: 'Hans Mueller',
          role: 'DAAD Representative',
          image:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 07, 2026',
      },
      {
        id: 'sch_6',
        slug: 'erasmus-mundus-joint-masters',
        name: 'Erasmus Mundus Joint Masters',
        category: 'Scholarships',
        description:
          'Study in at least two different European countries with this prestigious scholarship.',
        heroImage:
          'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'What is Erasmus Mundus?',
            body: 'A high-level integrated study program delivered by an international consortium of higher education institutions across Europe and beyond.',
          },
          {
            title: 'The EMJM Scholarship Benefits',
            body: 'A full scholarship covering tuition, travel, and a monthly subsistence allowance for the entire duration of the program.',
          },
          {
            title: 'The Mobility Requirement',
            body: 'Scholars must study in at least two different European countries within the consortium, leading to a double or joint degree.',
          },
          {
            title: 'Searching the EMJM Catalog',
            body: 'Use the official Erasmus+ catalog to find programs that match your background. Each program has its own application portal.',
          },
          {
            title: 'Application Deadlines and Cycle',
            body: 'Most programs open applications in October/November and close in January/February for an intake in the following September.',
          },
          {
            title: 'Academic and Language Prerequisites',
            body: "A Bachelor's degree and proof of English proficiency (C1 level) are standard requirements for most Erasmus Mundus programs.",
          },
          {
            title: 'The Motivation and Recommendation Letters',
            body: 'The selection committee looks for academic excellence, a strong motivation for international mobility, and potential for leadership.',
          },
          {
            title: 'Consortium-Specific Requirements',
            body: "Some programs may require a portfolio, a writing sample, or a specific research interest within the program's scope.",
          },
          {
            title: 'Living and Studying in Europe',
            body: 'Gain a truly international perspective by experiencing different academic systems and cultures across the European Union.',
          },
          {
            title: 'Post-Graduation Opportunities',
            body: 'Erasmus Mundus graduates are highly sought after by international organizations, research institutions, and global corporations.',
          },
        ],
        author: {
          name: 'Elena Rossi',
          role: 'Erasmus Coordinator',
          image:
            'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 06, 2026',
      },
      {
        id: 'sch_7',
        slug: 'turkiye-burslari-scholarship',
        name: 'Turkiye Burslari Scholarship',
        category: 'Scholarships',
        description:
          'Study in Turkey with a full scholarship covering tuition, health, and housing.',
        heroImage:
          'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'Overview of Turkiye Burslari',
            body: 'A government-funded, competitive scholarship program for international students to study at the most prestigious universities in Turkey.',
          },
          {
            title: 'The Full-Funding Package',
            body: 'Covers university placement, tuition fees, a 1-year Turkish language course, accommodation, health insurance, and a monthly stipend.',
          },
          {
            title: 'Undergraduate and Postgraduate Tracks',
            body: "Scholarships are available for Associate, Bachelor's, Master's, and PhD levels across almost all academic disciplines.",
          },
          {
            title: 'The Online Application Portal',
            body: 'Applications are only accepted through the official Turkiye Burslari website. Ensure all documents are scanned and uploaded correctly.',
          },
          {
            title: 'Academic Criteria and Age Limits',
            body: 'There are specific minimum academic achievement levels (e.g., 70% for undergrad, 75% for grad) and age limits for each level.',
          },
          {
            title: 'The One-Year Turkish Language Course',
            body: 'All scholars, even those in English-taught programs, must complete a one-year Turkish language course to help them integrate.',
          },
          {
            title: 'The Interview and Selection Process',
            body: 'Shortlisted candidates are interviewed by a committee, often in person in their home country or via video call.',
          },
          {
            title: 'Letter of Intent and Career Goals',
            body: 'Your application should clearly explain why you want to study in Turkey and how your education will benefit your future career.',
          },
          {
            title: 'Living in Turkey as a Scholar',
            body: 'Turkey offers a unique blend of Eastern and Western cultures, affordable living, and high-quality education in modern campuses.',
          },
          {
            title: 'The Turkish Alumni Network',
            body: 'Graduates join a growing global network of "Turkey Graduates," fostering economic and cultural ties between Turkey and their home countries.',
          },
        ],
        author: {
          name: 'Ahmet Yilmaz',
          role: 'Scholarship Admin',
          image:
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 05, 2026',
      },
      {
        id: 'sch_8',
        slug: 'mastercard-foundation-scholarships',
        name: 'Mastercard Foundation Scholarships',
        category: 'Scholarships',
        description: 'Empowering young people in Africa to lead change in their communities.',
        heroImage:
          'https://images.unsplash.com/photo-1529390079861-591de354faf5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'The Mastercard Foundation Vision',
            body: 'A global initiative to provide talented but economically disadvantaged young people in Africa with access to quality education.',
          },
          {
            title: 'Scholarship Coverage and Support',
            body: 'Includes tuition, books, accommodation, stipends, and a comprehensive mentorship and leadership development program.',
          },
          {
            title: 'Partner Universities in Africa and Abroad',
            body: 'Scholarships are offered through partner institutions like UCT (South Africa), KNUST (Ghana), McGill (Canada), and Oxford (UK).',
          },
          {
            title: 'Financial Need and Social Commitment',
            body: 'Applicants must demonstrate significant financial need and a proven track record of community service and leadership.',
          },
          {
            title: 'The Application Process',
            body: 'You must apply directly to the partner university of your choice. Each university has its own application procedure and deadline.',
          },
          {
            title: 'Mentorship and Career Services',
            body: 'Scholars receive dedicated academic and career support, including internships and networking opportunities within the Mastercard network.',
          },
          {
            title: 'The Give-Back Component',
            body: "A core value of the program is the commitment to return to one's community and contribute to its development through social projects.",
          },
          {
            title: 'Leadership Development Training',
            body: 'Regular workshops and seminars on leadership, entrepreneurship, and ethics are integrated into the scholarship experience.',
          },
          {
            title: 'The Mastercard Foundation Alumni',
            body: 'Joining a community of "Transformative Leaders" who are committed to creating a more equitable and prosperous Africa.',
          },
          {
            title: 'Eligibility for Refugees and IDPs',
            body: 'The program has a specific focus on including displaced youth and young people with disabilities.',
          },
        ],
        author: {
          name: 'Kofi Annan',
          role: 'Program Manager',
          image:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 04, 2026',
      },
      {
        id: 'sch_9',
        slug: 'gates-cambridge-scholarship',
        name: 'Gates Cambridge Scholarship',
        category: 'Scholarships',
        description:
          'One of the most prestigious international scholarships in the world for study at Cambridge.',
        heroImage:
          'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'Establishment and Mission',
            body: 'Founded by a donation from the Bill and Melinda Gates Foundation to the University of Cambridge for outstanding international students.',
          },
          {
            title: 'Full-Funding for Graduate Study',
            body: 'Covers the full cost of studying at Cambridge, including university and college fees, a maintenance allowance, and travel.',
          },
          {
            title: 'Selection Criteria: Intellectual Ability',
            body: "A candidate's academic record must be exceptional, showing the potential to make a significant contribution to their field.",
          },
          {
            title: 'Selection Criteria: Leadership Potential',
            body: 'The Trust looks for individuals who can show they have been leaders and have the potential to lead in the future.',
          },
          {
            title: 'A Commitment to Improving Lives',
            body: 'Candidates must demonstrate how their research and future career will contribute to the betterment of society.',
          },
          {
            title: 'The Application for Admission and Funding',
            body: 'You apply for a Gates Cambridge Scholarship as part of your application for admission to a graduate course at Cambridge.',
          },
          {
            title: 'The Gates Cambridge Reference',
            body: "A specific reference (usually from a supervisor or employer) that addresses the scholarship's unique criteria.",
          },
          {
            title: 'The Interview and Final Selection',
            body: 'Shortlisted candidates are interviewed in the US or Cambridge (or online) by panels of academic and professional experts.',
          },
          {
            title: 'The Scholar Community at Cambridge',
            body: 'Being a Gates Scholar means joining a vibrant, diverse community of over 200 scholars from all over the world.',
          },
          {
            title: 'Alumni and the Gates Cambridge Trust',
            body: 'The Trust supports its alumni through networking events and opportunities to collaborate on global challenges.',
          },
        ],
        author: {
          name: 'Dr. Bill Gates',
          role: 'Scholarship Trust',
          image:
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 03, 2026',
      },
      {
        id: 'sch_10',
        slug: 'japanese-mext-scholarship',
        name: 'Japanese MEXT Scholarship',
        category: 'Scholarships',
        description:
          'Study in Japan with the Ministry of Education, Culture, Sports, Science and Technology scholarship.',
        heroImage:
          'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'The Monbukagakusho (MEXT) Program',
            body: 'The Japanese government offers several scholarship tracks, including Research Students, Undergraduate Students, and College of Technology Students.',
          },
          {
            title: 'Embassy vs. University Recommendation',
            body: 'You can apply either through the Japanese embassy in your country (Embassy Track) or directly through a Japanese university.',
          },
          {
            title: 'The Written Examination',
            body: 'Applicants for the Embassy Track must sit for written exams in subjects like Mathematics, English, and Japanese.',
          },
          {
            title: 'The Research Plan Requirement',
            body: 'For graduate students, a detailed and feasible research plan that can be carried out in a Japanese university is crucial.',
          },
          {
            title: 'Language Proficiency (Japanese/English)',
            body: 'While many programs are in English, a willingness to learn Japanese is essential. Some tracks require Japanese language exams.',
          },
          {
            title: 'The Interview at the Embassy',
            body: 'A panel interview that evaluates your academic potential, character, and your reasons for choosing Japan as a study destination.',
          },
          {
            title: 'The Preparatory Japanese Language Course',
            body: 'Most scholars undergo a 6-month intensive Japanese language training program upon arrival in Japan.',
          },
          {
            title: 'Stipends, Tuition, and Travel',
            body: 'MEXT provides a monthly stipend, full tuition coverage, and round-trip airfare between Japan and your home country.',
          },
          {
            title: 'Living and Studying in Japan',
            body: "Experience Japan's world-class research facilities, unique culture, and safe environment as an international scholar.",
          },
          {
            title: 'Post-Scholarship Career and Networking',
            body: 'MEXT alumni often go on to successful careers in academia, industry, and diplomacy, maintaining strong ties with Japan.',
          },
        ],
        author: {
          name: 'Yuki Tanaka',
          role: 'MEXT Advisor',
          image:
            'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 02, 2026',
      },
    ],
  },
  'online-courses': {
    id: 'cat_courses',
    title: 'Online Courses',
    slug: 'online-courses',
    description: 'The best platforms and courses to learn any skill from anywhere.',
    resources: [
      {
        id: 'oc_1',
        slug: 'best-free-online-courses-2026',
        name: 'Best Free Online Courses for 2026',
        category: 'Online Courses',
        description: 'Boost your career with these top-rated free certifications.',
        heroImage:
          'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'Selection Criteria and Learning Goals',
            body:
              'Begin with clear outcomes and time constraints, then shortlist courses that offer rigorous curricula, credible assessments, and recognized certificates; prioritize programs that include practical projects and peer feedback so your learning converts into visible, verifiable proof of skill.',
          },
          {
            title: 'Platform Landscape and Certification Signals',
            body:
              'Coursera and EdX partner with top universities and big tech, offering structured paths and graded assessments; Google Career Certificates focus on job‑ready tracks; LinkedIn Learning provides breadth and fast onboarding; treat certificates as conversation starters backed by tangible portfolio artifacts.',
          },
          {
            title: 'Study Strategy and Cadence',
            body:
              'Use weekly targets, daily recall prompts, and mixed media learning; combine lectures with readings, labs, and discussions; maintain a progress journal to capture decisions, obstacles, and breakthroughs so you can iterate intelligently over time.',
          },
          {
            title: 'Assessment and Portfolio Integration',
            body:
              'Prefer courses with capstones, peer reviews, and graded tasks; convert assignments into polished case studies with visuals, metrics, and narratives; host on a personal site or portfolio so recruiters can inspect your work.',
          },
          {
            title: 'Career Alignment and Next Steps',
            body:
              'Map certificates to target roles and local market demand; stack learning with internships, freelance gigs, and volunteer projects; seek feedback from practitioners and escalate to advanced tracks once foundations are stable.',
          },
        ],
        tips: [
          { title: 'Audit then Upgrade', content: 'Audit courses first to test fit, then upgrade for certificates.' },
          { title: 'Weekly Milestones', content: 'Publish a small artifact every week to show momentum.' },
        ],
        author: {
          name: 'Kevin Hart',
          role: 'EdTech Specialist',
          image:
            'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 10, 2026',
      },
      {
        id: 'oc_2',
        slug: 'data-science-bootcamp-online',
        name: 'Data Science Bootcamp Online',
        category: 'Online Courses',
        description: 'Become a data scientist in 6 months with this comprehensive online bootcamp.',
        heroImage:
          'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'Curriculum Architecture',
            body:
              'Start with Python foundations, data structures, and workflow hygiene; progress to statistics, data cleaning, feature engineering, and model building; alternate theory with applied labs to create durable knowledge.',
          },
          {
            title: 'Practical Labs and Tooling',
            body:
              'Work with notebooks, pandas, scikit‑learn, and visualization stacks; practice version control, reproducible environments, and experiment tracking so stakeholders can trust and repeat your results.',
          },
          {
            title: 'Capstone Design',
            body:
              'Choose a problem with measurable impact; collect or simulate real data, define baselines, and iterate models; document trade‑offs, ablations, and error analysis to demonstrate professional rigor.',
          },
          {
            title: 'Career Support',
            body:
              'Translate projects into portfolio case studies, prepare concise narratives for interviews, and engage with mentors; use mock interviews and code reviews to raise signal before applying widely.',
          },
          {
            title: 'Assessment and Mastery',
            body:
              'Run weekly quizzes and practicals; maintain a learning log of mistakes and fixes; revisit weak areas with targeted drills and spaced repetition until your performance is consistently strong.',
          },
        ],
        tips: [
          { title: 'Notebooks to Repo', content: 'Turn notebooks into cleaned repos with READMEs and results.' },
          { title: 'Public Datasets', content: 'Use Kaggle/open data to build recognizable projects.' },
        ],
        author: {
          name: 'Dr. Data',
          role: 'Senior Data Scientist',
          image:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 09, 2026',
      },
      {
        id: 'oc_3',
        slug: 'digital-marketing-masterclass',
        name: 'Digital Marketing Masterclass',
        category: 'Online Courses',
        description: 'Master SEO, SEM, social media, and email marketing.',
        heroImage:
          'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'Content Strategy and Audience',
            body:
              'Define personas, pain points, and value propositions; craft editorial calendars that blend evergreen education with timely campaigns; design content to generate genuine engagement and conversion pathways.',
          },
          {
            title: 'Search and Paid Channels',
            body:
              'Master keyword research, on‑page SEO, and technical health; design paid campaigns on Google Ads with clear structures, bidding strategies, and measurement; iterate creatives and landing pages based on data.',
          },
          {
            title: 'Social Platforms and Community',
            body:
              'Use platform‑native formats and genuine conversation; implement testing loops for hooks, formats, and CTAs; prioritize trust and value over spam so audiences stick around.',
          },
          {
            title: 'Email and Lifecycle',
            body:
              'Build segmented lists, automated journeys, and deliverability hygiene; write copy that respects attention and provides useful outcomes; measure retention and LTV.',
          },
          {
            title: 'Analytics and Optimization',
            body:
              'Implement GA4, pixels, event tracking, and dashboards; define success metrics and run controlled experiments; document learnings to refine strategy continuously.',
          },
        ],
        tips: [
          { title: 'Hypothesis First', content: 'State a hypothesis before every campaign experiment.' },
          { title: 'Creative Variants', content: 'Test multiple creatives simultaneously to learn faster.' },
        ],
        author: {
          name: 'Marketing Guru',
          role: 'Digital Strategist',
          image:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 08, 2026',
      },
      {
        id: 'oc_4',
        slug: 'ux-ui-design-fundamentals',
        name: 'UX/UI Design Fundamentals',
        category: 'Online Courses',
        description: 'Learn the principles of user-centric design and prototyping.',
        heroImage:
          'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'Research and Problem Framing',
            body:
              'Conduct interviews, surveys, and usability studies to uncover needs; synthesize insights into clear problem statements; define scope and success criteria to focus effort.',
          },
          {
            title: 'Information Architecture and Wireframing',
            body:
              'Structure content and flows for clarity; build wireframes that emphasize hierarchy and affordances; iterate quickly to test assumptions before heavy visual work.',
          },
          {
            title: 'Visual Systems',
            body:
              'Create typography, color, spacing, and component rules; apply accessibility standards and contrast ratios; ensure consistency across states and devices.',
          },
          {
            title: 'Prototyping',
            body:
              'Use Figma and prototyping tools to simulate interactions; validate microcopy, animations, and transitions; collect qualitative and quantitative feedback.',
          },
          {
            title: 'Usability and Iteration',
            body:
              'Run moderated sessions and measure task success; prioritize fixes, document decisions, and ship improvements with clear release notes.',
          },
        ],
        tips: [
          { title: 'Design Crits', content: 'Seek critique early; incorporate actionable feedback explicitly.' },
          { title: 'Accessibility', content: 'Test with accessibility tools and real users where possible.' },
        ],
        author: {
          name: 'Design Pro',
          role: 'Lead UI Designer',
          image:
            'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 07, 2026',
      },
      {
        id: 'oc_5',
        slug: 'full-stack-web-development',
        name: 'Full-Stack Web Development',
        category: 'Online Courses',
        description: 'Learn to build modern web applications from scratch.',
        heroImage:
          'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'Frontend Foundations',
            body:
              'Master semantic HTML, modern CSS, and accessible JS; build responsive layouts and componentized UIs; enforce performance budgets and testing to ensure quality.',
          },
          {
            title: 'Frameworks and SSR',
            body:
              'Use React and Next.js for routing, data fetching, and server‑side rendering; design state management and error handling for resilience.',
          },
          {
            title: 'Backend Services',
            body:
              'Implement Node.js/Express APIs with validation, authentication, and logging; design modular architectures and maintain observability.',
          },
          {
            title: 'Databases',
            body:
              'Model relational schemas and NoSQL documents appropriately; apply indexing, migrations, and backup strategies; measure query performance.',
          },
          {
            title: 'DevOps and Delivery',
            body:
              'Automate CI/CD, testing, and deployments; manage environments, secrets, and monitoring; write runbooks and incident processes.',
          },
        ],
        tips: [
          { title: 'Code Reviews', content: 'Request reviews with clear diffs and context.' },
          { title: 'Deployment Logs', content: 'Capture changelogs and rollback plans for every release.' },
        ],
        author: {
          name: 'Code Master',
          role: 'Full Stack Developer',
          image:
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 06, 2026',
      },
      {
        id: 'oc_6',
        slug: 'project-management-pmp-prep',
        name: 'Project Management: PMP Prep',
        category: 'Online Courses',
        description: 'Comprehensive course to pass the PMP exam on your first try.',
        heroImage:
          'https://images.unsplash.com/photo-1454165833767-027ffea9e778?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'Exam Domains and Mindset',
            body:
              'Understand people, process, and business environment domains; adopt a leadership mindset that balances governance with adaptive practices; link theory to real scenarios.',
          },
          {
            title: 'Study Plan and Materials',
            body:
              'Build a 6–10 week plan with PMBOK v7, Agile Practice Guide, and trusted question banks; schedule daily review and weekly mocks with error analysis.',
          },
          {
            title: 'Question Strategies',
            body:
              'Practice scenario reading, elimination techniques, and time management; tag tricky areas and revisit with focused drills.',
          },
          {
            title: 'Agile and Hybrid',
            body:
              'Integrate Scrum, Kanban, and hybrid delivery patterns; demonstrate situational judgment on when to adapt processes.',
          },
          {
            title: 'Application and Eligibility',
            body:
              'Document experience and education accurately; prepare references and submission artifacts; plan exam logistics and retake policies.',
          },
        ],
        tips: [
          { title: 'Study Group', content: 'Join or form a study group to sustain momentum.' },
          { title: 'Mock Cadence', content: 'Run full mocks weekly and section drills mid‑week.' },
        ],
        author: {
          name: 'PM Expert',
          role: 'Certified PMP',
          image:
            'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 05, 2026',
      },
      {
        id: 'oc_7',
        slug: 'business-analytics-for-managers',
        name: 'Business Analytics for Managers',
        category: 'Online Courses',
        description: 'Make data-driven decisions for your business or organization.',
        heroImage:
          'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'Decision Frameworks',
            body:
              'Clarify objectives, constraints, and trade‑offs; align metrics to outcomes and build governance for data‑informed decisions that respect context and risk.',
          },
          {
            title: 'Modeling and Forecasts',
            body:
              'Use statistical models and predictive techniques to estimate outcomes; document assumptions and confidence so stakeholders understand reliability.',
          },
          {
            title: 'Visualization and Dashboards',
            body:
              'Design dashboards that answer specific questions; apply visual best practices and access control; iterate with stakeholders to ensure usefulness.',
          },
          {
            title: 'Data Governance and Ethics',
            body:
              'Define ownership, quality standards, privacy, and compliance; create processes for monitoring and incident management.',
          },
          {
            title: 'Communicating Insights',
            body:
              'Tell clear stories with data, combining visuals and narratives; provide recommendations and next steps with quantified impact.',
          },
        ],
        tips: [
          { title: 'Stakeholder Map', content: 'Identify decision makers and tailor dashboards accordingly.' },
          { title: 'Metric Trees', content: 'Link KPIs to underlying drivers to guide improvements.' },
        ],
        author: {
          name: 'Biz Analyst',
          role: 'Business Strategist',
          image:
            'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 04, 2026',
      },
      {
        id: 'oc_8',
        slug: 'cybersecurity-essentials',
        name: 'Cybersecurity Essentials',
        category: 'Online Courses',
        description: 'Protect yourself and your organization from cyber threats.',
        heroImage:
          'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'Threat Modeling and Risk',
            body:
              'Identify assets, threats, and vulnerabilities; evaluate likelihood and impact; prioritize controls that reduce real risk efficiently.',
          },
          {
            title: 'Network Security Basics',
            body:
              'Understand segmentation, firewalls, IDS/IPS, and secure protocols; monitor logs and alerts to spot anomalies early.',
          },
          {
            title: 'Incident Response Lifecycle',
            body:
              'Prepare, detect, contain, eradicate, recover, and learn; simulate incidents and write post‑mortems to improve resilience.',
          },
          {
            title: 'Policy and Compliance',
            body:
              'Build practical policies for access, data handling, and acceptable use; align with standards and educate users regularly.',
          },
          {
            title: 'Home Lab Practice',
            body:
              'Set up safe environments for learning tools and techniques; never target unauthorized systems; document findings ethically.',
          },
        ],
        tips: [
          { title: 'Patch Hygiene', content: 'Maintain updates and backups; reduce attack surface methodically.' },
          { title: 'Least Privilege', content: 'Grant only necessary access and audit regularly.' },
        ],
        author: {
          name: 'Security Pro',
          role: 'Cybersecurity Analyst',
          image:
            'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 03, 2026',
      },
      {
        id: 'oc_9',
        slug: 'ai-and-machine-learning-intro',
        name: 'AI and Machine Learning Intro',
        category: 'Online Courses',
        description: 'A beginner-friendly introduction to artificial intelligence.',
        heroImage:
          'https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'Machine Learning Concepts',
            body:
              'Learn supervised and unsupervised learning, evaluation metrics, and bias/variance; build intuition with simple models before advancing.',
          },
          {
            title: 'Neural Networks Overview',
            body:
              'Understand layers, activation, loss, and optimization; experiment with small networks to see how representation learning emerges.',
          },
          {
            title: 'Natural Language Processing',
            body:
              'Explore tokenization, embeddings, sequence models, and transformers; build mini‑projects like text classification and summarization.',
          },
          {
            title: 'Responsible AI',
            body:
              'Consider fairness, transparency, and real‑world impact; document data provenance and risk mitigations in project notes.',
          },
          {
            title: 'Learning Path',
            body:
              'Progress from conceptual courses to implementation; maintain reproducible code and written explanations; join communities for feedback.',
          },
        ],
        tips: [
          { title: 'Toy Datasets', content: 'Start with small datasets to learn mechanisms clearly.' },
          { title: 'Reproducibility', content: 'Fix random seeds and log experiments consistently.' },
        ],
        author: {
          name: 'AI Researcher',
          role: 'Machine Learning Engineer',
          image:
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 02, 2026',
      },
      {
        id: 'oc_10',
        slug: 'creative-writing-workshop',
        name: 'Creative Writing Workshop',
        category: 'Online Courses',
        description: 'Unlock your creativity and write compelling stories.',
        heroImage:
          'https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'Story Structure',
            body:
              'Explore classic and modern structures; experiment with pacing, tension, and payoff; outline arcs that support theme and reader engagement.',
          },
          {
            title: 'Characters and Voice',
            body:
              'Craft believable motivations, contradictions, and growth; develop distinct voices through diction and rhythm; show, don’t tell.',
          },
          {
            title: 'Dialogue and Scene Work',
            body:
              'Write dialogue that moves plot and reveals character; choreograph scenes with sensory detail and purposeful beats.',
          },
          {
            title: 'Editing and Revision',
            body:
              'Use passes for structure, language, and continuity; adopt feedback loops with critique partners; track changes and rationale.',
          },
          {
            title: 'Publishing Paths',
            body:
              'Research traditional and indie options; prepare query letters, synopses, and samples; build a simple author platform and pitch strategy.',
          },
        ],
        tips: [
          { title: 'Daily Pages', content: 'Write small daily; momentum beats waiting for inspiration.' },
          { title: 'Critique Groups', content: 'Exchange honest feedback and set revision goals.' },
        ],
        author: {
          name: 'Author X',
          role: 'Bestselling Novelist',
          image:
            'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 01, 2026',
      },
    ],
  },
  certifications: {
    id: 'cat_certs',
    title: 'Professional Certifications',
    slug: 'certifications',
    description: 'Advance your career with globally recognized certifications.',
    resources: [
      {
        id: 'cert_1',
        slug: 'it-certifications-high-demand',
        name: 'High-Demand IT Certifications',
        category: 'Certifications',
        description: 'The most valuable IT certifications to have in 2026.',
        heroImage:
          'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'Top Paths in 2026',
            body:
              'Cloud, security, networking, and project leadership remain the highest‑impact domains. Pair AWS Solutions Architect with hands‑on services, CompTIA Security+ for a security baseline, CCNA for core networking, and PMP for leadership and delivery credibility.',
          },
          {
            title: 'Prerequisites and Eligibility',
            body:
              'Confirm exam prerequisites early: AWS SA has no formal prerequisite but benefits from 6–12 months of AWS use; Security+ is entry‑level but expects familiarity with basic IT; CCNA demands strong networking fundamentals; PMP requires documented hours and education.',
          },
          {
            title: 'Study Roadmap',
            body:
              'Build a 10–12 week plan: official guides, structured courses, daily recall prompts, and weekly labs. Rotate domains and interleave practice questions. Use cloud free tiers and packet tracer labs to convert theory into repeatable skills.',
          },
          {
            title: 'Exam Strategy',
            body:
              'Simulate timing weekly, flag weak domains, and practice question styles (scenario, drag‑and‑drop, performance‑based). Create a test‑day checklist and a pacing plan per section. Review answers you marked for return in the final 10 minutes.',
          },
          {
            title: 'Career Outcomes',
            body:
              'Update CV and LinkedIn with verified credentials, attach lab projects, and map certifications to target roles (Cloud Engineer, Network Engineer, Security Analyst, Project Manager). Track interviews and compensation changes to measure ROI.',
          },
        ],
        tips: [
          { title: 'Hands‑on First', content: 'Prefer labs over passive videos; build and break small projects.' },
          { title: 'Mock Exams', content: 'Run full‑length mocks weekly and analyze errors by domain.' },
          { title: 'Portfolio', content: 'Publish short write‑ups of labs and architectures with diagrams.' },
        ],
        author: {
          name: 'Michael Chen',
          role: 'Tech Recruiter',
          image:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 09, 2026',
      },
      {
        id: 'cert_2',
        slug: 'cloud-computing-aws-azure-gcp',
        name: 'Cloud Computing: AWS, Azure, GCP',
        category: 'Certifications',
        description: 'Which cloud certification is right for your career path?',
        heroImage:
          'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'Choosing Your Cloud',
            body:
              'Pick AWS for breadth of ecosystem and hiring volume, Azure if you work with Microsoft stacks and enterprise AD/Intune, and GCP for data/ML tooling and Kubernetes leadership. Align the choice with your team stack and local market demand.',
          },
          {
            title: 'AWS Track',
            body:
              'Start with Cloud Practitioner for foundations, then Solutions Architect Associate to design resilient architectures. Add Developer or SysOps if you focus on CI/CD or operations. Practice on free tier: S3, EC2, IAM policies, VPCs, and CloudWatch.',
          },
          {
            title: 'Azure Track',
            body:
              'Begin with AZ‑900 then move to AZ‑104 (Administrator) or AZ‑204 (Developer). Emphasize identity, RBAC, VNets, Storage, and App Services. Use Microsoft Learn sandboxes and validate skills with small deployments and policy assignments.',
          },
          {
            title: 'GCP Track',
            body:
              'Take Cloud Digital Leader or Associate Cloud Engineer. Focus on IAM, VPC, Cloud Storage, GKE, and monitoring. Build containerized apps, deploy to GKE, and measure cost/performance trade‑offs.',
          },
          {
            title: 'Security in the Cloud',
            body:
              'Learn shared responsibility, encryption at rest/in transit, key management, IAM least privilege, and logging/alerting. Practice incident simulations and policy remediation.',
          },
        ],
        tips: [
          { title: 'Free Tiers', content: 'Use provider free tiers to practice daily without high costs.' },
          { title: 'Architect Diagrams', content: 'Draw architectures; reviewers hire people who can explain trade‑offs.' },
          { title: 'Cost Awareness', content: 'Track spend; set budgets and alerts to avoid surprise bills.' },
        ],
        author: {
          name: 'Cloud Expert',
          role: 'Solutions Architect',
          image:
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 08, 2026',
      },
      {
        id: 'cert_3',
        slug: 'project-management-certifications',
        name: 'Project Management Certifications',
        category: 'Certifications',
        description: 'From CAPM to PMP: Choosing the best PM certification.',
        heroImage:
          'https://images.unsplash.com/photo-1454165833767-027ffea9e778?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'PMP vs PRINCE2',
            body:
              'PMP emphasizes process groups and knowledge areas across industries; PRINCE2 focuses on controlled governance and stages. Choose PMP for broad global recognition, PRINCE2 where structured governance is dominant.',
          },
          {
            title: 'Eligibility & Paths',
            body:
              'CAPM suits entry‑level PMs; PMP requires documented hours and formal education. Combine PMP with Agile/Scrum credentials for hybrid delivery in modern teams.',
          },
          {
            title: 'Exam Content',
            body:
              'Master people, process, and business environment domains with significant Agile content. Practice scenario questions and risk/issue logs.',
          },
          {
            title: 'Continuous Improvement',
            body:
              'Six Sigma belts develop data‑driven improvement skills. Pair with PM frameworks to optimize delivery and quality.',
          },
          {
            title: 'Maintaining Credentials',
            body:
              'Track PDUs, submit continuing education, and align learning with your project portfolio and leadership goals.',
          },
        ],
        tips: [
          { title: 'PMBOK v7', content: 'Use PMBOK v7 and Agile Practice Guide together for the current exam mix.' },
          { title: 'Rita Mulcahy', content: 'Practice with trusted prep books and question banks.' },
        ],
        author: {
          name: 'Sarah PM',
          role: 'Project Director',
          image:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 07, 2026',
      },
      {
        id: 'cert_4',
        slug: 'hr-certifications-phr-sphr',
        name: 'HR Certifications: PHR & SPHR',
        category: 'Certifications',
        description: 'Boost your HR career with professional certifications.',
        heroImage:
          'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'SHRM vs HRCI',
            body:
              'SHRM focuses on behavioral competencies and HR knowledge; HRCI (PHR/SPHR) centers on technical HR practices. Choose based on employer preference and your career stage.',
          },
          {
            title: 'Eligibility',
            body:
              'Review experience and education requirements carefully for PHR/SPHR and SHRM‑CP/SCP. Plan timelines to meet eligibility by the exam window.',
          },
          {
            title: 'Preparation',
            body:
              'Use official learning systems, practice cases, and flashcards. Emphasize employment law, compensation, benefits, and talent management scenarios.',
          },
          {
            title: 'Recertification',
            body:
              'Track credits via conferences, webinars, and on‑the‑job projects. Set annual targets and log evidence proactively.',
          },
          {
            title: 'Career Value',
            body:
              'Certifications validate strategic HR capability; pair with analytics and change management to increase impact.',
          },
        ],
        author: {
          name: 'HR Pro',
          role: 'HR Director',
          image:
            'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 06, 2026',
      },
      {
        id: 'cert_5',
        slug: 'finance-certifications-cfa-acca',
        name: 'Finance Certifications: CFA, ACCA',
        category: 'Certifications',
        description: 'The ultimate guide to accounting and finance certifications.',
        heroImage:
          'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'CFA Levels',
            body:
              'Level I covers foundations; Level II deepens analysis; Level III focuses on portfolio management. Expect heavy quantitative work and ethics throughout.',
          },
          {
            title: 'ACCA Modules',
            body:
              'Progress through Applied Knowledge/Skills and Strategic Professional. Emphasize financial reporting, audit, and taxation practicals.',
          },
          {
            title: 'CPA Structure',
            body:
              'Understand jurisdiction policies, exam sections, and the new discipline‑based model. Prepare with authoritative practice questions and simulations.',
          },
          {
            title: 'Career Impact',
            body:
              'Map credentials to roles: investment analyst, accountant, auditor, finance manager. Build case studies and models in your portfolio.',
          },
        ],
        tips: [
          { title: 'Study Discipline', content: 'Use spaced repetition and daily problem sets to retain formulas.' },
          { title: 'Mock Reviews', content: 'Analyze wrong answers by topic and re‑learn with targeted drills.' },
        ],
        author: {
          name: 'Finance Expert',
          role: 'Chartered Accountant',
          image:
            'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 05, 2026',
      },
      {
        id: 'cert_6',
        slug: 'marketing-certifications-google-hubspot',
        name: 'Marketing Certifications: Google, HubSpot',
        category: 'Certifications',
        description: 'Free and paid marketing certifications to validate your skills.',
        heroImage:
          'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'Google Ads',
            body:
              'Master search, display, and video fundamentals. Practice campaign structures, match types, bidding strategies, and measurement with GA4.',
          },
          {
            title: 'HubSpot Inbound',
            body:
              'Learn inbound methodology, content strategy, lead capture, and nurturing. Build sample workflows and measure conversion lift.',
          },
          {
            title: 'Meta Blueprint',
            body:
              'Understand audience targeting, creative testing, and pixel events. Practice campaign diagnostics and scaling.',
          },
          {
            title: 'Social Management',
            body:
              'Use Hootsuite or similar tools to schedule, listen, and report. Create a portfolio of campaigns with outcomes.',
          },
        ],
        author: {
          name: 'Marketer',
          role: 'Digital Strategist',
          image:
            'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 04, 2026',
      },
      {
        id: 'cert_7',
        slug: 'cybersecurity-certifications-cissp-ceh',
        name: 'Cybersecurity Certs: CISSP, CEH',
        category: 'Certifications',
        description: 'Advanced certifications for cybersecurity professionals.',
        heroImage:
          'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'CISSP Domains',
            body:
              'Cover security and risk, asset security, engineering, communications/networking, IAM, testing, operations, and software security. Focus on management‑level thinking and trade‑offs.',
          },
          {
            title: 'Ethical Hacking',
            body:
              'CEH teaches recon, scanning, exploitation, post‑exploitation, and reporting. Build a home lab for safe practice and document findings ethically.',
          },
          {
            title: 'CISM vs CISA',
            body:
              'CISM targets management and governance; CISA focuses on audit and controls. Pick based on role aspirations.',
          },
          {
            title: 'Entry Path',
            body:
              'Security+ establishes baseline knowledge. Add Blue/Red team labs, SIEM practice, and incident simulations.',
          },
        ],
        tips: [
          { title: 'Home Lab', content: 'Use VMs and safe targets to practice tools legally and ethically.' },
          { title: 'CTFs', content: 'Participate in capture‑the‑flag events to sharpen practical skills.' },
        ],
        author: {
          name: 'Security Expert',
          role: 'CISO',
          image:
            'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 03, 2026',
      },
      {
        id: 'cert_8',
        slug: 'data-analytics-certifications-tableau-powerbi',
        name: 'Data Analytics Certs: Tableau, PowerBI',
        category: 'Certifications',
        description: 'Visualize your skills with data analytics certifications.',
        heroImage:
          'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'Tableau Specialist',
            body:
              'Focus on data connections, calculations, visual best practices, and dashboards. Build portfolio dashboards with real datasets.',
          },
          {
            title: 'PL‑300 (Power BI)',
            body:
              'Modeling, DAX, Power Query, and visualization. Practice with row‑level security and performance optimization.',
          },
          {
            title: 'Google Data Analytics',
            body:
              'Learn spreadsheets, SQL, visualization, and case studies. Prepare job‑ready projects with clear narratives.',
          },
          {
            title: 'IBM Data Science',
            body:
              'Cover Python, pandas, visualization, and basic ML. Document notebooks and share reproducible work.',
          },
        ],
        tips: [
          { title: 'Portfolio First', content: 'Show dashboards that answer real business questions.' },
          { title: 'Data Sources', content: 'Use open datasets and track cleaning assumptions explicitly.' },
        ],
        author: {
          name: 'Analyst',
          role: 'Senior Data Analyst',
          image:
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 02, 2026',
      },
      {
        id: 'cert_9',
        slug: 'agile-and-scrum-certifications',
        name: 'Agile and Scrum Certifications',
        category: 'Certifications',
        description: 'Become an expert in Agile methodologies and Scrum frameworks.',
        heroImage:
          'https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'PSM vs CSM',
            body:
              'Both validate Scrum mastery; PSM emphasizes rigorous assessment while CSM includes training + test. Choose based on local employer recognition.',
          },
          {
            title: 'SAFe Agile',
            body:
              'Adopt scaled roles and ceremonies. Understand PI planning, ARTs, and lean portfolio management.',
          },
          {
            title: 'Product Ownership',
            body:
              'PSPO deepens backlog strategy, value slicing, and stakeholder alignment. Practice writing outcomes and measurable product goals.',
          },
          {
            title: 'Coaching Path',
            body:
              'Develop facilitation, conflict resolution, and continuous improvement. Pair credentials with practical org change work.',
          },
        ],
        author: {
          name: 'Scrum Master',
          role: 'Agile Coach',
          image:
            'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 01, 2026',
      },
      {
        id: 'cert_10',
        slug: 'legal-certifications-paralegal',
        name: 'Legal Certifications: Paralegal',
        category: 'Certifications',
        description: 'Enhance your legal career with recognized paralegal certifications.',
        heroImage:
          'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'NALA vs NFPA',
            body:
              'NALA CP and NFPA RP offer recognized pathways. Compare exam content, eligibility, and local employer preferences.',
          },
          {
            title: 'Eligibility and Prep',
            body:
              'Confirm education/experience requirements, assemble transcripts, and plan study using official outlines and mock exams.',
          },
          {
            title: 'Core Skills',
            body:
              'Strengthen legal research, writing, evidence handling, and case file management. Practice citations and briefing.',
          },
          {
            title: 'Tools',
            body:
              'Learn common case management systems and research platforms. Document repeatable workflows and checklists.',
          },
          {
            title: 'Ethics',
            body:
              'Understand confidentiality, conflicts, and jurisdictional rules. Apply ethical decision trees to scenarios.',
          },
        ],
        author: {
          name: 'Legal Pro',
          role: 'Senior Paralegal',
          image:
            'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Jan 31, 2026',
      },
    ],
  },
  'career-advice': {
    id: 'cat_career',
    title: 'Career Advice',
    slug: 'career-advice',
    description: 'Expert tips on navigating your professional journey.',
    resources: [
      {
        id: 'car_1',
        slug: 'career-path-planning-guide',
        name: 'Career Path Planning Guide',
        category: 'Career Advice',
        description: 'How to choose and grow in the right career for you.',
        heroImage:
          'https://images.unsplash.com/photo-1454165833767-027ffea9e778?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'Self-Assessment Framework',
            body:
              'Start with strengths, interests, and values. Use simple instruments and reflection prompts to uncover what energizes you. Map these to role archetypes and environments where you thrive.',
          },
          {
            title: 'Industry Research & Market Mapping',
            body:
              'Identify growth sectors, common role ladders, and skill demand. Read job postings, analyst reports, and talk to practitioners. Build a shortlist of viable paths aligned with your profile.',
          },
          {
            title: 'Skills Matrix & Experience Plan',
            body:
              'Translate target roles into skill matrices. Plan projects, internships, volunteering, or freelance work to gain evidence. Create weekly deliverables that turn learning into artifacts.',
          },
          {
            title: 'Networking & Mentorship',
            body:
              'Conduct informational interviews, join communities, and find mentors. Prepare authentic outreach scripts and clear questions. Offer value and document insights as operating notes.',
          },
          {
            title: 'Goals, Cadence, and Portfolio',
            body:
              'Set quarterly outcomes and weekly execution. Publish a portfolio with case studies, visuals, and measurable results. Iterate monthly using feedback and data from applications.',
          },
        ],
        tips: [
          { title: 'Informational Interviews', content: 'Speak to 5 practitioners per month; synthesize takeaways.' },
          { title: 'Role Fit Notes', content: 'Track patterns from job descriptions to refine your target roles.' },
        ],
        author: {
          name: 'Sarah Jenkins',
          role: 'Career Coach',
          image:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 08, 2026',
      },
      {
        id: 'car_2',
        slug: 'effective-networking-strategies',
        name: 'Effective Networking Strategies',
        category: 'Career Advice',
        description: 'Build a powerful professional network that opens doors.',
        heroImage:
          'https://images.unsplash.com/photo-1515162305285-0293e4767cc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'Profile & Positioning',
            body:
              'Optimize your headline, summary, and featured work to signal focus and credibility. Use role keywords, outcomes, and visual assets that demonstrate your value.',
          },
          {
            title: 'Outbound Outreach',
            body:
              'Send concise, respectful messages with a clear ask: advice, feedback, or a short call. Personalize based on their work and explain your context in 2–3 sentences.',
          },
          {
            title: 'Informational Interviews',
            body:
              'Structure 20–30 minute calls: career story, role realities, success traits, and advice. Close with requests for resources and 1–2 introductions if comfortable.',
          },
          {
            title: 'Events & Communities',
            body:
              'Attend meetups, webinars, and conferences. Prepare a simple pitch, take notes, and follow up within 24–48 hours with a value add or summary.',
          },
          {
            title: 'Relationship System',
            body:
              'Track contacts, last touch, and mutual interests. Share useful articles, congratulate milestones, and offer help without expectation. Build trust over time.',
          },
        ],
        tips: [
          { title: 'Give First', content: 'Lead with helpfulness; share resources or introductions freely.' },
          { title: 'Short Asks', content: 'Keep requests specific and easy to answer in a minute or two.' },
        ],
        author: {
          name: 'John Connect',
          role: 'Networking Expert',
          image:
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 07, 2026',
      },
      {
        id: 'car_3',
        slug: 'navigating-career-changes',
        name: 'Navigating Career Changes',
        category: 'Career Advice',
        description: 'How to successfully pivot to a new industry or role.',
        heroImage:
          'https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'Transferable Skills',
            body:
              'Extract capabilities from past roles: problem solving, stakeholder management, tooling, and delivery. Match them to the language of your target field.',
          },
          {
            title: 'Gap Analysis & Training',
            body:
              'Identify missing technical and domain skills. Plan short courses, project sprints, and mentorship to close gaps quickly with artifacts you can show.',
          },
          {
            title: 'Transition Projects',
            body:
              'Build 2–3 projects that mirror real work in the target role. Document decisions, trade‑offs, and outcomes; add visuals and metrics.',
          },
          {
            title: 'Pivot Narrative',
            body:
              'Craft a story that connects your past strengths to future impact. Use concise bullets in CV and a compelling summary in your profile.',
          },
          {
            title: 'Entry Paths & Risk',
            body:
              'Consider apprenticeships, internal transfers, bootcamps, and freelance gigs. Plan financial runway and milestones to manage transition risk.',
          },
        ],
        tips: [
          { title: 'Talk to Practitioners', content: 'Interview 5 people in target roles to validate fit.' },
          { title: 'Small Bets', content: 'Pilot mini‑projects before committing to a full pivot.' },
        ],
        author: {
          name: 'Pivot Pro',
          role: 'Career Transitionist',
          image:
            'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        },
        publishDate: 'Feb 06, 2026',
      },
      {
        id: 'car_4',
        slug: 'work-life-balance-tips',
        name: 'Work-Life Balance Tips',
        category: 'Career Advice',
        description: 'Maintain your well-being while excelling in your career.',
        heroImage:
          'https://images.unsplash.com/photo-1499209974431-9dac3adaf471?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'Boundaries & Agreements',
            body:
              'Define response windows, meeting norms, and focus blocks. Document team agreements and protect deep work time.',
          },
          {
            title: 'Time & Energy',
            body:
              'Use time blocking and plan around peak energy. Batch tasks and insert recovery breaks to sustain performance.',
          },
          {
            title: 'Remote Ergonomics',
            body:
              'Optimize workspace, lighting, and posture. Use tools to reduce friction and automate repetitive workflows.',
          },
          {
            title: 'Burnout Prevention',
            body:
              'Track early warning signs, workload patterns, and recovery practices. Seek support and adjust scope proactively.',
          },
          {
            title: 'Communication & Care',
            body:
              'Coordinate with managers and family. Plan for caregiving, emergencies, and time off with clear communication.',
          },
        ],
        tips: [
          { title: 'No-Meeting Blocks', content: 'Reserve weekly focus time for high‑value work.' },
          { title: 'Micro‑Breaks', content: 'Short movement breaks reset attention and prevent strain.' },
        ],
        author: {
          name: 'Balance Guru',
          role: 'Wellness Coach',
          image:
            'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 05, 2026',
      },
      {
        id: 'car_5',
        slug: 'salary-negotiation-strategies',
        name: 'Salary Negotiation Strategies',
        category: 'Career Advice',
        description: 'Get paid what you are worth with these negotiation tactics.',
        heroImage:
          'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'Market & Leveling',
            body:
              'Research compensation bands and leveling frameworks. Calibrate expectations using multiple sources and peer signals.',
          },
          {
            title: 'Total Compensation',
            body:
              'Assess base, bonus, equity, benefits, and perks. Model scenarios and long‑term value rather than focusing only on base.',
          },
          {
            title: 'Framing & Scripts',
            body:
              'Practice clear, confident language. Anchor on value and impact; ask for ranges and propose packages rather than single numbers.',
          },
          {
            title: 'Timing & Leverage',
            body:
              'Negotiate after an offer or performance wins. Use alternatives (BATNA) and keep conversations professional and positive.',
          },
          {
            title: 'Counter‑Offers & Growth',
            body:
              'Handle counters by revisiting priorities and risk. Align negotiations with growth path and learning opportunities.',
          },
        ],
        tips: [
          { title: 'Never First Number', content: 'Invite ranges and avoid naming a number early.' },
          { title: 'Practice Aloud', content: 'Rehearse with a partner to build confidence and clarity.' },
        ],
        author: {
          name: 'Negotiator',
          role: 'Compensation Analyst',
          image:
            'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 04, 2026',
      },
      {
        id: 'car_6',
        slug: 'leadership-development-guide',
        name: 'Leadership Development Guide',
        category: 'Career Advice',
        description: 'How to transition from a contributor to a leader.',
        heroImage:
          'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'Emotional Intelligence',
            body:
              'Develop self‑awareness, self‑management, social awareness, and relationship skills. Model composure under pressure and empathy in interactions.',
          },
          {
            title: 'Delegation & Empowerment',
            body:
              'Delegate outcomes, not tasks. Clarify constraints and support with coaching. Build autonomy and accountability.',
          },
          {
            title: 'Conflict & Alignment',
            body:
              'Use frameworks for resolving conflict and aligning goals. Facilitate dialogue, generate options, and document agreements.',
          },
          {
            title: 'Strategy & Decisions',
            body:
              'Define vision, choose priorities, and make trade‑offs. Use data and narratives to drive decisions and communicate clearly.',
          },
          {
            title: 'Teams & Culture',
            body:
              'Design rituals, feedback loops, and norms. Hire for values and strengths; run retrospectives and celebrate wins.',
          },
        ],
        tips: [
          { title: 'Weekly 1:1s', content: 'Hold structured 1:1s with notes and follow‑ups.' },
          { title: 'Outcomes First', content: 'Define expected results before planning tasks.' },
        ],
        author: {
          name: 'Leader Coach',
          role: 'Executive Trainer',
          image:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 03, 2026',
      },
      {
        id: 'car_7',
        slug: 'building-a-personal-brand',
        name: 'Building a Personal Brand',
        category: 'Career Advice',
        description: 'Establish yourself as an authority in your field.',
        heroImage:
          'https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: ['Content creation', 'Public speaking', 'Thought leadership', 'Online presence'],
        author: {
          name: 'Brand Master',
          role: 'PR Consultant',
          image:
            'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 02, 2026',
      },
      {
        id: 'car_8',
        slug: 'freelancing-career-success',
        name: 'Freelancing Career Success',
        category: 'Career Advice',
        description: 'How to build a sustainable and profitable freelance business.',
        heroImage:
          'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          'Finding clients',
          'Pricing your services',
          'Managing finances',
          'Portfolio building',
        ],
        author: {
          name: 'Freelance Pro',
          role: 'Solopreneur',
          image:
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 01, 2026',
      },
      {
        id: 'car_9',
        slug: 'managing-up-effectively',
        name: 'Managing Up Effectively',
        category: 'Career Advice',
        description: 'How to build a productive relationship with your manager.',
        heroImage:
          'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          'Communication styles',
          'Managing expectations',
          'Providing feedback',
          'Alignment with goals',
        ],
        author: {
          name: 'Manager X',
          role: 'HR Consultant',
          image:
            'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Jan 31, 2026',
      },
      {
        id: 'car_10',
        slug: 'navigating-toxic-workplaces',
        name: 'Navigating Toxic Workplaces',
        category: 'Career Advice',
        description: 'Strategies for surviving and exiting a negative work environment.',
        heroImage:
          'https://images.unsplash.com/photo-1521791136064-7986c2923216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: ['Identifying toxicity', 'Coping mechanisms', 'Documentation', 'Exit planning'],
        author: {
          name: 'HR Ally',
          role: 'Employee Advocate',
          image:
            'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Jan 30, 2026',
      },
    ],
  },
  'resume-building': {
    id: 'cat_resume',
    title: 'Resume Building',
    slug: 'resume-building',
    description: 'Craft a resume that gets you hired.',
    resources: [
      {
        id: 'res_1',
        slug: 'ats-friendly-resume-tips',
        name: 'ATS-Friendly Resume Tips',
        category: 'Resume Building',
        description: 'How to beat the Applicant Tracking Systems and land interviews.',
        heroImage:
          'https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: ['Keywords', 'Clean formatting', 'Quantifying results', 'Common mistakes'],
        author: {
          name: 'John Doe',
          role: 'HR Manager',
          image:
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 07, 2026',
      },
      {
        id: 'res_2',
        slug: 'chronological-vs-functional-resume',
        name: 'Chronological vs Functional Resume',
        category: 'Resume Building',
        description: 'Choosing the right format for your experience level.',
        heroImage:
          'https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          'Format pros and cons',
          'Hybrid options',
          'Experience mapping',
          'Targeted resumes',
        ],
        author: {
          name: 'Resume Pro',
          role: 'Career Consultant',
          image:
            'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 06, 2026',
      },
      {
        id: 'res_3',
        slug: 'writing-a-killer-cover-letter',
        name: 'Writing a Killer Cover Letter',
        category: 'Resume Building',
        description: 'Complement your resume with a compelling cover letter.',
        heroImage:
          'https://images.unsplash.com/photo-1523480717984-24cba35ae1ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: ['Hooking the reader', 'Value proposition', 'Closing strong', 'Customization'],
        author: {
          name: 'Writer X',
          role: 'Copywriter',
          image:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 05, 2026',
      },
      {
        id: 'res_4',
        slug: 'showcasing-skills-on-resume',
        name: 'Showcasing Skills on Resume',
        category: 'Resume Building',
        description: 'How to list hard and soft skills effectively.',
        heroImage:
          'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: ['Skill categorization', 'Action verbs', 'Proof of skills', 'Tailoring to JD'],
        author: {
          name: 'Skill Analyst',
          role: 'Talent Acquisition',
          image:
            'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 04, 2026',
      },
      {
        id: 'res_5',
        slug: 'resume-tips-for-fresh-graduates',
        name: 'Resume Tips for Fresh Graduates',
        category: 'Resume Building',
        description: 'How to build a resume with little to no work experience.',
        heroImage:
          'https://images.unsplash.com/photo-1523240715639-99a8086f73e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          'Education first',
          'Projects & internships',
          'Extracurriculars',
          'Volunteer work',
        ],
        author: {
          name: 'Career Coach',
          role: 'Graduate Advisor',
          image:
            'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 03, 2026',
      },
      {
        id: 'res_6',
        slug: 'executive-resume-writing',
        name: 'Executive Resume Writing',
        category: 'Resume Building',
        description: 'High-level resumes for senior leadership roles.',
        heroImage:
          'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          'Executive summaries',
          'Strategic leadership',
          'Board experience',
          'P&L responsibility',
        ],
        author: {
          name: 'Exec Writer',
          role: 'Executive Coach',
          image:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 02, 2026',
      },
      {
        id: 'res_7',
        slug: 'creative-resume-designs',
        name: 'Creative Resume Designs',
        category: 'Resume Building',
        description: 'When and how to use a creative or non-traditional resume.',
        heroImage:
          'https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          'Portfolio resumes',
          'Visual hierarchies',
          'Canva vs Word',
          'Industry appropriateness',
        ],
        author: {
          name: 'Designer Pro',
          role: 'Creative Director',
          image:
            'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 01, 2026',
      },
      {
        id: 'res_8',
        slug: 'linkedin-profile-vs-resume',
        name: 'LinkedIn Profile vs Resume',
        category: 'Resume Building',
        description: 'Optimizing both for maximum job search impact.',
        heroImage:
          'https://images.unsplash.com/photo-1616469829581-73993eb86b02?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: ['Differences in tone', 'The "About" section', 'Recommendations', 'Endorsements'],
        author: {
          name: 'LI Expert',
          role: 'Digital Brander',
          image:
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Jan 31, 2026',
      },
      {
        id: 'res_9',
        slug: 'explaining-employment-gaps',
        name: 'Explaining Employment Gaps',
        category: 'Resume Building',
        description: 'How to handle resume gaps due to travel, family, or health.',
        heroImage:
          'https://images.unsplash.com/photo-1521791136064-7986c2923216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          'Honesty vs Detail',
          'Upskilling during gaps',
          'Functional elements',
          'Cover letter context',
        ],
        author: {
          name: 'HR Ally',
          role: 'Talent Lead',
          image:
            'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Jan 30, 2026',
      },
      {
        id: 'res_10',
        slug: 'global-resume-standards-cv',
        name: 'Global Resume Standards',
        category: 'Resume Building',
        description: 'Understanding the difference between a Resume and a CV globally.',
        heroImage:
          'https://images.unsplash.com/photo-1523480717984-24cba35ae1ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: ['US vs UK vs EU', 'Photo requirements', 'Personal details', 'Length and format'],
        author: {
          name: 'Global Coach',
          role: 'Career Strategist',
          image:
            'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Jan 29, 2026',
      },
    ],
  },
  'interview-tips': {
    id: 'cat_interview',
    title: 'Interview Tips',
    slug: 'interview-tips',
    description: 'Master the art of the job interview.',
    resources: [
      {
        id: 'int_1',
        slug: 'cracking-behavioral-interviews',
        name: 'Cracking Behavioral Interviews',
        category: 'Interview Tips',
        description: 'How to use the STAR method to ace your interview.',
        heroImage:
          'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: ['STAR method', 'Common questions', 'Body language', 'Follow-up'],
        author: {
          name: 'Emma Watson',
          role: 'Interview Coach',
          image:
            'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 06, 2026',
      },
      {
        id: 'int_2',
        slug: 'mastering-virtual-interviews',
        name: 'Mastering Virtual Interviews',
        category: 'Interview Tips',
        description: 'Tips for excelling in video calls and remote interviews.',
        heroImage:
          'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: ['Tech setup', 'Lighting and background', 'Eye contact', 'Digital rapport'],
        author: {
          name: 'Remote Pro',
          role: 'Remote Work Expert',
          image:
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 05, 2026',
      },
      {
        id: 'int_3',
        slug: 'answering-tell-me-about-yourself',
        name: 'Answering "Tell Me About Yourself"',
        category: 'Interview Tips',
        description: 'How to craft the perfect response to this common opener.',
        heroImage:
          'https://images.unsplash.com/photo-1521791136064-7986c2923216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          'Past, Present, Future',
          'Relevance to role',
          'Keeping it concise',
          'Personal branding',
        ],
        author: {
          name: 'Interview Guru',
          role: 'Career Coach',
          image:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 04, 2026',
      },
      {
        id: 'int_4',
        slug: 'handling-difficult-interview-questions',
        name: 'Handling Difficult Questions',
        category: 'Interview Tips',
        description: 'Strategies for answering tricky or unexpected questions.',
        heroImage:
          'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: ['Salary expectations', 'Why you left', 'Weaknesses', 'Conflict stories'],
        author: {
          name: 'HR Insider',
          role: 'Talent Lead',
          image:
            'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 03, 2026',
      },
      {
        id: 'int_5',
        slug: 'questions-to-ask-the-interviewer',
        name: 'Questions to Ask the Interviewer',
        category: 'Interview Tips',
        description: 'Show your engagement and interest with these thoughtful questions.',
        heroImage:
          'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: ['Company culture', 'Success metrics', 'Team dynamics', 'Next steps'],
        author: {
          name: 'Pro Interviewer',
          role: 'Hiring Manager',
          image:
            'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 02, 2026',
      },
      {
        id: 'int_6',
        slug: 'dressing-for-interview-success',
        name: 'Dressing for Success',
        category: 'Interview Tips',
        description: 'What to wear for different types of job interviews.',
        heroImage:
          'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: ['Business formal', 'Business casual', 'Startup casual', 'Grooming tips'],
        author: {
          name: 'Style Guide',
          role: 'Professional Brander',
          image:
            'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 01, 2026',
      },
      {
        id: 'int_7',
        slug: 'body-language-in-interviews',
        name: 'Body Language in Interviews',
        category: 'Interview Tips',
        description: 'Non-verbal cues that can make or break your interview.',
        heroImage:
          'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: ['Posture', 'Hand gestures', 'Smiling', 'Active listening'],
        author: {
          name: 'Body Logic',
          role: 'Communication Coach',
          image:
            'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Jan 31, 2026',
      },
      {
        id: 'int_8',
        slug: 'post-interview-thank-you-notes',
        name: 'Post-Interview Thank You Notes',
        category: 'Interview Tips',
        description: 'How to write a follow-up email that keeps you top of mind.',
        heroImage:
          'https://images.unsplash.com/photo-1523480717984-24cba35ae1ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: ['Timing', 'Personalization', 'Reiterating value', 'Next steps'],
        author: {
          name: 'Writer Pro',
          role: 'Career Expert',
          image:
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Jan 30, 2026',
      },
      {
        id: 'int_9',
        slug: 'group-and-panel-interviews',
        name: 'Group and Panel Interviews',
        category: 'Interview Tips',
        description: 'How to stand out when being interviewed by multiple people.',
        heroImage:
          'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: ['Engaging everyone', 'Note-taking', 'Consistency', 'Handling group tasks'],
        author: {
          name: 'Panel Pro',
          role: 'Hiring Consultant',
          image:
            'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Jan 29, 2026',
      },
      {
        id: 'int_10',
        slug: 'negotiating-the-job-offer',
        name: 'Negotiating the Job Offer',
        category: 'Interview Tips',
        description: 'You got the offer! Now learn how to negotiate the best terms.',
        heroImage:
          'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: ['Market value', 'Total package', 'Asking for time', 'Finalizing the deal'],
        author: {
          name: 'Negotiator',
          role: 'HR Expert',
          image:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Jan 28, 2026',
      },
    ],
  },
  'learn-english': {
    id: 'cat_english',
    title: 'Learn English',
    slug: 'learn-english',
    description:
      'Master the global language of business and education with our comprehensive guides.',
    resources: [
      {
        id: 'eng_1',
        slug: 'english-grammar-essentials',
        name: 'English Grammar Essentials',
        category: 'Learn English',
        description: 'Master the core rules of English grammar for clear communication.',
        heroImage:
          'https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'The Eight Parts of Speech',
            body: 'Understanding nouns, pronouns, verbs, adjectives, adverbs, prepositions, conjunctions, and interjections is the foundation of English grammar. Each part plays a specific role in constructing meaningful sentences.',
          },
          {
            title: 'Mastering Verb Tenses',
            body: 'The 12 verb tenses in English allow speakers to express time with precision. From the simple present for habits to the future perfect continuous for duration, mastering these is key to fluency.',
          },
          {
            title: 'Sentence Structure and Syntax',
            body: 'Learn how to combine words into simple, compound, complex, and compound-complex sentences. Correct syntax ensures your message is logical and easy to follow.',
          },
          {
            title: 'Subject-Verb Agreement',
            body: 'A fundamental rule where the subject and verb must agree in number. We explore singular and plural subjects, including collective nouns and indefinite pronouns.',
          },
          {
            title: 'The Power of Punctuation',
            body: 'Commas, semicolons, and colons are not just decorations. They provide the rhythm and clarity needed for written English to be understood correctly.',
          },
          {
            title: 'Active vs. Passive Voice',
            body: 'Discover when to use the active voice for directness and the passive voice for emphasis or neutrality. Balancing both improves your writing style.',
          },
          {
            title: 'Understanding Articles (A, An, The)',
            body: 'Articles can be tricky. Learn the rules for definite and indefinite articles, and when to omit them entirely in general statements.',
          },
          {
            title: 'Conditional Sentences',
            body: 'Master the zero, first, second, and third conditionals to talk about real possibilities, hypothetical situations, and regrets about the past.',
          },
          {
            title: 'Direct and Indirect Speech',
            body: 'Learn how to report what others have said by transforming direct quotes into reported speech, adjusting tenses and pronouns accordingly.',
          },
          {
            title: 'Common Grammatical Errors',
            body: 'Avoid frequent mistakes like misplaced modifiers, run-on sentences, and comma splices that can confuse readers and listeners.',
          },
        ],
        author: {
          name: 'Prof. Jane Smith',
          role: 'Linguistics Expert',
          image:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 12, 2026',
      },
      {
        id: 'eng_2',
        slug: 'business-english-communication',
        name: 'Business English Communication',
        category: 'Learn English',
        description: 'Professional English for meetings, emails, and presentations.',
        heroImage:
          'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'Effective Business Email Writing',
            body: 'Learn how to structure professional emails, from clear subject lines to appropriate closings, ensuring your communication is concise and professional.',
          },
          {
            title: 'Language for Meetings and Negotiations',
            body: 'Master the phrases needed to interrupt politely, agree or disagree diplomatically, and reach a consensus in a business environment.',
          },
          {
            title: 'Mastering Formal Presentations',
            body: 'Discover the vocabulary used to introduce topics, transition between points, and summarize key takeaways during a professional presentation.',
          },
          {
            title: 'Professional Telephone Etiquette',
            body: 'Learn how to handle business calls, take messages accurately, and use polite language when speaking with clients or colleagues.',
          },
          {
            title: 'Corporate Jargon and Idioms',
            body: 'Understand common business terms like "low-hanging fruit," "circle back," and "deep dive" to navigate the corporate world with confidence.',
          },
          {
            title: 'Writing Reports and Proposals',
            body: 'A guide to structuring formal business documents, using objective language, and presenting data clearly to stakeholders.',
          },
          {
            title: 'Cross-Cultural Communication',
            body: 'Understand the nuances of communicating with international partners, including differences in directness and formality.',
          },
          {
            title: 'Conflict Resolution Language',
            body: 'Learn how to address disagreements in the workplace using neutral, non-confrontational language to find productive solutions.',
          },
          {
            title: 'Networking and Small Talk',
            body: 'Master the art of professional socializing, including how to introduce yourself and maintain engaging conversations at events.',
          },
          {
            title: 'Job Interview Preparation',
            body: 'Vocabulary and strategies for answering common interview questions, highlighting your skills, and asking insightful questions.',
          },
        ],
        author: {
          name: 'Robert Brown',
          role: 'Business Coach',
          image:
            'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 11, 2026',
      },
      {
        id: 'eng_3',
        slug: 'mastering-english-pronunciation',
        name: 'Mastering English Pronunciation',
        category: 'Learn English',
        description: 'Speak clearly and confidently with perfect English phonetics.',
        heroImage:
          'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'The Phonetic Alphabet (IPA)',
            body: 'Understanding the International Phonetic Alphabet is the first step to pronouncing any English word correctly without guessing.',
          },
          {
            title: 'Vowel Sounds and Diphthongs',
            body: 'English has many more vowel sounds than letters. Learn the difference between long and short vowels and how to master diphthongs.',
          },
          {
            title: 'Consonant Clusters',
            body: 'Practice difficult combinations of consonants like "str" in "strength" or "th" in "through" to improve your clarity.',
          },
          {
            title: 'Word Stress and Rhythm',
            body: 'English is a stress-timed language. Learn which syllables to emphasize to sound more like a native speaker.',
          },
          {
            title: 'Sentence Intonation',
            body: 'How your voice rises and falls can change the meaning of a sentence. Master the melody of English questions and statements.',
          },
          {
            title: 'Connected Speech and Linking',
            body: "Native speakers don't say every word separately. Learn how words link together in natural conversation.",
          },
          {
            title: 'Silent Letters in English',
            body: 'From the "k" in "knight" to the "b" in "climb," understand the history and rules of silent letters.',
          },
          {
            title: 'The Schwa Sound /ə/',
            body: 'Master the most common sound in English. The schwa is the secret to natural-sounding, effortless speech.',
          },
          {
            title: 'Minimal Pairs Practice',
            body: 'Distinguish between similar sounds like "ship" and "sheep" or "bat" and "bet" through targeted listening and speaking drills.',
          },
          {
            title: 'Reducing Your Accent',
            body: 'Strategies for identifying and working on the specific sounds that are most challenging based on your native language.',
          },
        ],
        author: {
          name: 'Dr. Linda Voice',
          role: 'Phonetics Specialist',
          image:
            'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 10, 2026',
      },
      {
        id: 'eng_4',
        slug: 'advanced-academic-vocabulary',
        name: 'Advanced Academic Vocabulary',
        category: 'Learn English',
        description: 'Elevate your writing and speech for university and research settings.',
        heroImage:
          'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'Using the Academic Word List (AWL)',
            body: 'Focus on the 570 word families most frequently used in academic texts across various disciplines.',
          },
          {
            title: 'Precision in Word Choice',
            body: 'Learn how to replace common words like "good" or "bad" with precise academic alternatives like "advantageous" or "detrimental."',
          },
          {
            title: 'Nominalization in Writing',
            body: 'Discover how to turn verbs into nouns to create a more formal, objective, and academic tone in your essays.',
          },
          {
            title: 'Signposting and Transition Words',
            body: 'Master the connectors that guide your reader through your arguments, such as "furthermore," "nevertheless," and "consequently."',
          },
          {
            title: 'Understanding Collocations',
            body: 'Learn which words naturally go together in academic contexts, like "conduct research" or "formulate a hypothesis."',
          },
          {
            title: 'Expressing Critical Thinking',
            body: 'Vocabulary for analyzing, evaluating, and synthesizing information rather than just describing it.',
          },
          {
            title: 'Avoiding Slang and Informal Language',
            body: 'Strategies for maintaining a formal register and identifying words that are too casual for academic submissions.',
          },
          {
            title: 'Describing Trends and Data',
            body: 'Learn the specific verbs and adverbs needed to accurately describe graphs, charts, and statistical changes.',
          },
          {
            title: 'Hedging and Boosting',
            body: 'Master the art of using cautious language like "suggests" or "may" versus strong claims like "proves" or "clearly."',
          },
          {
            title: 'Paraphrasing and Summarizing',
            body: 'Learn how to restate complex ideas in your own words while maintaining the original meaning and academic rigor.',
          },
        ],
        author: {
          name: 'Prof. Mark Thesis',
          role: 'Academic Dean',
          image:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 09, 2026',
      },
      {
        id: 'eng_5',
        slug: 'conversational-english-mastery',
        name: 'Conversational English Mastery',
        category: 'Learn English',
        description: 'Learn to speak naturally and fluently in any social situation.',
        heroImage:
          'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'The Art of Small Talk',
            body: 'Learn how to start and maintain conversations with strangers and acquaintances on common topics like weather, work, and hobbies.',
          },
          {
            title: 'Using Fillers and Hesitation Devices',
            body: 'Sound more natural by using words like "well," "actually," and "you know" while you think of what to say next.',
          },
          {
            title: 'Common Slang and Expressions',
            body: 'Understand the informal language that native speakers actually use in daily life to avoid sounding like a textbook.',
          },
          {
            title: 'Active Listening Skills',
            body: 'Learn how to show you are engaged in a conversation through verbal cues and body language.',
          },
          {
            title: 'Expressing Opinions and Feelings',
            body: 'Master the phrases needed to share your thoughts, agree, disagree, and show empathy in social settings.',
          },
          {
            title: 'Asking Open-Ended Questions',
            body: 'The secret to keeping a conversation going is asking questions that require more than a "yes" or "no" answer.',
          },
          {
            title: 'Handling Misunderstandings',
            body: "Learn polite ways to ask for clarification or repetition when you don't understand something.",
          },
          {
            title: 'Social Etiquette and Taboos',
            body: 'Understand the cultural norms of English-speaking countries, including what topics to avoid in polite conversation.',
          },
          {
            title: 'Telling Stories and Jokes',
            body: 'Techniques for sharing anecdotes and humor effectively in English to build rapport with others.',
          },
          {
            title: 'Ending Conversations Gracefully',
            body: 'Learn how to exit a conversation politely without being abrupt or rude.',
          },
        ],
        author: {
          name: 'Sarah Chat',
          role: 'Communication Coach',
          image:
            'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 08, 2026',
      },
      {
        id: 'eng_6',
        slug: 'english-for-travel-and-tourism',
        name: 'English for Travel and Tourism',
        category: 'Learn English',
        description: 'Essential English for your next international adventure.',
        heroImage:
          'https://images.unsplash.com/photo-1488646953359-4676404847ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'Navigating the Airport',
            body: 'Master the vocabulary for check-in, security, boarding, and handling flight delays or cancellations.',
          },
          {
            title: 'Booking and Checking into Hotels',
            body: 'Learn how to make reservations, ask about amenities, and resolve issues with your room.',
          },
          {
            title: 'Ordering Food and Drinks',
            body: 'A guide to restaurant vocabulary, understanding menus, and communicating dietary requirements.',
          },
          {
            title: 'Asking for and Giving Directions',
            body: 'Learn the essential phrases for finding your way around a new city and using public transportation.',
          },
          {
            title: 'Handling Emergencies Abroad',
            body: 'Crucial language for seeking medical help, reporting lost items, or contacting your embassy.',
          },
          {
            title: 'Shopping and Bargaining',
            body: 'Vocabulary for sizes, prices, payment methods, and polite ways to negotiate in markets.',
          },
          {
            title: 'Sightseeing and Tours',
            body: 'Learn how to book tours, ask about historical sites, and understand museum guides.',
          },
          {
            title: 'Making New Friends While Traveling',
            body: 'Simple icebreakers and conversation starters for meeting fellow travelers and locals.',
          },
          {
            title: 'Understanding Signs and Notices',
            body: "A guide to common icons and written warnings you'll encounter in international travel hubs.",
          },
          {
            title: 'Currency and Money Matters',
            body: 'Vocabulary for banking, ATMs, exchange rates, and managing your travel budget in English.',
          },
        ],
        author: {
          name: 'James Globe',
          role: 'Travel Blogger',
          image:
            'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 07, 2026',
      },
      {
        id: 'eng_7',
        slug: 'ielts-preparation-strategy',
        name: 'IELTS Preparation Strategy',
        category: 'Learn English',
        description: 'Everything you need to achieve a Band 7.0 or higher in the IELTS exam.',
        heroImage:
          'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'Understanding the IELTS Format',
            body: 'A detailed breakdown of the Listening, Reading, Writing, and Speaking modules for both Academic and General Training.',
          },
          {
            title: 'Listening Section Techniques',
            body: 'Learn how to predict answers, handle distractors, and manage your time during the 30-minute listening test.',
          },
          {
            title: 'Reading Paper Strategies',
            body: 'Master skimming, scanning, and identifying "True, False, Not Given" answers to improve your speed and accuracy.',
          },
          {
            title: 'Writing Task 1: Data Description',
            body: 'Learn how to summarize graphs, tables, and diagrams using accurate mathematical and descriptive vocabulary.',
          },
          {
            title: 'Writing Task 2: Essay Masterclass',
            body: 'How to structure your argument, use cohesive devices, and demonstrate a wide range of vocabulary and grammar.',
          },
          {
            title: 'Speaking Test Confidence',
            body: 'Strategies for all three parts of the speaking interview, including how to expand your answers and avoid long pauses.',
          },
          {
            title: 'Time Management Skills',
            body: 'Learn how to allocate your time effectively across all sections to ensure you complete the exam.',
          },
          {
            title: 'Common IELTS Pitfalls',
            body: "Identify the frequent mistakes that lower candidates' scores, from spelling errors to misunderstanding the prompt.",
          },
          {
            title: 'Practice Tests and Resources',
            body: 'A guide to the best official and unofficial practice materials to simulate the real exam environment.',
          },
          {
            title: 'Exam Day Preparation',
            body: 'Final tips for what to bring, how to stay calm, and what to expect at the test center.',
          },
        ],
        author: {
          name: 'Emma Grade',
          role: 'IELTS Examiner',
          image:
            'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 06, 2026',
      },
      {
        id: 'eng_8',
        slug: 'idioms-and-phrasal-verbs',
        name: 'Idioms and Phrasal Verbs',
        category: 'Learn English',
        description: 'The secret to sounding like a native speaker through colorful language.',
        heroImage:
          'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'What are Phrasal Verbs?',
            body: 'Understand the logic behind verb + preposition combinations like "get up," "take off," and "look forward to."',
          },
          {
            title: 'Separable vs. Inseparable Phrasal Verbs',
            body: 'Learn the grammar rules for when you can put an object between the verb and the particle.',
          },
          {
            title: 'Common Idioms for Daily Life',
            body: 'Master expressions like "break a leg," "under the weather," and "a piece of cake" to add color to your speech.',
          },
          {
            title: 'Business and Workplace Idioms',
            body: 'Understand professional expressions like "think outside the box" and "on the same page."',
          },
          {
            title: 'Animal-Based Idioms',
            body: 'Learn why English speakers talk about "letting the cat out of the bag" or "the elephant in the room."',
          },
          {
            title: 'Idioms About Time and Money',
            body: 'Master phrases like "once in a blue moon," "kill time," and "cost an arm and a leg."',
          },
          {
            title: 'Phrasal Verbs for Travel',
            body: 'Essential combinations like "check in," "set off," and "get away" for your journeys.',
          },
          {
            title: 'Phrasal Verbs for Relationships',
            body: 'Learn how to describe social interactions with verbs like "get along," "fall out," and "hang out."',
          },
          {
            title: 'Understanding Context and Tone',
            body: "Learn when it's appropriate to use idioms and when they might be too informal for the situation.",
          },
          {
            title: 'Memorization Strategies',
            body: 'Effective techniques for learning and retaining these tricky parts of the English language through grouped learning.',
          },
        ],
        author: {
          name: 'Luke Phrase',
          role: 'Vocabulary Specialist',
          image:
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 05, 2026',
      },
      {
        id: 'eng_9',
        slug: 'public-speaking-confidence',
        name: 'Public Speaking Confidence',
        category: 'Learn English',
        description: 'Deliver powerful speeches and presentations with ease and authority.',
        heroImage:
          'https://images.unsplash.com/photo-1475721027785-f74dea327912?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'Structuring Your Speech',
            body: 'Learn how to organize your ideas into a compelling introduction, informative body, and memorable conclusion.',
          },
          {
            title: 'Overcoming Stage Fright',
            body: 'Practical techniques for managing anxiety and turning nervous energy into enthusiastic delivery.',
          },
          {
            title: 'The Power of Body Language',
            body: 'Discover how eye contact, gestures, and posture can reinforce your message and build trust with your audience.',
          },
          {
            title: 'Vocal Variety and Projection',
            body: 'Learn how to use volume, pitch, and pacing to keep your audience engaged and emphasize key points.',
          },
          {
            title: 'Using Visual Aids Effectively',
            body: 'A guide to creating and using slides and props that support rather than distract from your speech.',
          },
          {
            title: 'Handling Q&A Sessions',
            body: 'Strategies for answering difficult questions confidently and maintaining control of the room.',
          },
          {
            title: 'Hooking Your Audience',
            body: 'Learn how to start your speech with a story, quote, or shocking statistic to grab immediate attention.',
          },
          {
            title: 'The Art of Storytelling',
            body: 'How to use personal anecdotes and metaphors to make complex ideas more relatable and memorable.',
          },
          {
            title: 'Persuasive Speaking Techniques',
            body: 'Master the rhetorical devices and logical structures used to influence and inspire your listeners.',
          },
          {
            title: 'Practicing for Success',
            body: 'The best ways to rehearse your speech, including recording yourself and getting constructive feedback.',
          },
        ],
        author: {
          name: 'Grace Podium',
          role: 'Public Speaking Coach',
          image:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 04, 2026',
      },
      {
        id: 'eng_10',
        slug: 'creative-writing-workshop',
        name: 'Creative Writing Workshop',
        category: 'Learn English',
        description: 'Unleash your imagination and master the craft of English storytelling.',
        heroImage:
          'https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'Finding Your Unique Voice',
            body: 'Discover your personal writing style and learn how to express your perspective through original language.',
          },
          {
            title: 'Character Development',
            body: 'How to create believable, multi-dimensional characters that your readers will care about.',
          },
          {
            title: 'World-Building Techniques',
            body: 'Learn how to describe settings vividly using all five senses to immerse your reader in your story.',
          },
          {
            title: 'Plotting and Narrative Arc',
            body: 'Master the structure of a good story, from the inciting incident to the climax and resolution.',
          },
          {
            title: 'Showing vs. Telling',
            body: 'The most important rule in creative writing. Learn how to describe actions and emotions rather than just stating them.',
          },
          {
            title: 'Writing Compelling Dialogue',
            body: 'How to write natural-sounding speech that reveals character and moves the plot forward.',
          },
          {
            title: 'The Power of Metaphor and Simile',
            body: 'Use figurative language to create striking imagery and deeper meaning in your work.',
          },
          {
            title: 'Editing and Revision',
            body: 'Learn the difference between writing and editing, and how to polish your draft into a finished piece.',
          },
          {
            title: "Overcoming Writer's Block",
            body: 'Creative exercises and prompts to help you start writing when you feel stuck or uninspired.',
          },
          {
            title: 'Getting Published',
            body: 'A brief guide to literary journals, self-publishing, and how to submit your work to editors.',
          },
        ],
        author: {
          name: 'Arthur Pen',
          role: 'Award-Winning Author',
          image:
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 03, 2026',
      },
    ],
  },
  'learn-french': {
    id: 'cat_french',
    title: 'Learn French',
    slug: 'learn-french',
    description:
      'Unlock opportunities in the Francophone world with our structured learning guides.',
    resources: [
      {
        id: 'fr_1',
        slug: 'french-for-beginners',
        name: 'French for Beginners',
        category: 'Learn French',
        description: 'Start your journey with the basics of the French language.',
        heroImage:
          'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'Greetings and Introductions',
            body: "Learn how to say hello (Bonjour), good evening (Bonsoir), and introduce yourself (Je m'appelle...) in both formal and informal settings.",
          },
          {
            title: 'The French Alphabet and Accents',
            body: 'Master the 26 letters and the 5 unique accents (é, à, è, ô, ç) that define French pronunciation and spelling.',
          },
          {
            title: 'Numbers 1-100 and Counting',
            body: 'Learn to count in French, including the tricky numbers from 70 to 99 (like "soixante-dix" for 70 and "quatre-vingt-dix" for 90).',
          },
          {
            title: 'Essential Nouns and Gender',
            body: 'Every noun in French is either masculine (le) or feminine (la). Learn the rules and common exceptions for identifying gender.',
          },
          {
            title: 'Basic Verb Conjugation (Être and Avoir)',
            body: 'Master the two most important verbs: "to be" (être) and "to have" (avoir) in the present tense.',
          },
          {
            title: 'Days of the Week and Months',
            body: 'Learn the French words for days (lundi, mardi...), months (janvier, février...), and how to tell the date.',
          },
          {
            title: 'Common Phrases for Daily Life',
            body: 'Essential expressions for shopping, ordering food, and asking for help in a French-speaking environment.',
          },
          {
            title: 'Asking Basic Questions',
            body: 'Learn how to form questions using "Est-ce que," inversion, and question words like "Qui," "Quoi," and "Où."',
          },
          {
            title: 'Describing People and Things',
            body: "Use basic adjectives to describe colors, sizes, and personality traits, remembering that adjectives must agree with the noun's gender.",
          },
          {
            title: 'Tips for Starting Your Journey',
            body: "Consistency is key. Use language apps, listen to French music, and don't be afraid to make mistakes when speaking.",
          },
        ],
        author: {
          name: 'Marie Dubois',
          role: 'French Instructor',
          image:
            'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 10, 2026',
      },
      {
        id: 'fr_2',
        slug: 'french-grammar-mastery',
        name: 'French Grammar Mastery',
        category: 'Learn French',
        description: 'Deep dive into the rules and structures of the French language.',
        heroImage:
          'https://images.unsplash.com/photo-1513001900722-370f803f498d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'The Three Verb Groups',
            body: 'Understand the classification of verbs ending in -er, -ir, and -re, and how their regular conjugation patterns work.',
          },
          {
            title: 'The Passé Composé Tense',
            body: 'Learn how to talk about the past using the auxiliary verbs "avoir" or "être" and the past participle of the main verb.',
          },
          {
            title: "The L'Imparfait Tense",
            body: 'Master the imperfect tense to describe ongoing actions, habits, or settings in the past.',
          },
          {
            title: 'Future Tenses: Proche and Simple',
            body: 'Learn the difference between the immediate future (aller + infinitive) and the simple future tense.',
          },
          {
            title: 'Direct and Indirect Object Pronouns',
            body: 'Replace nouns with pronouns (le, la, les, lui, leur) to avoid repetition and make your French sound more natural.',
          },
          {
            title: 'The Subjunctive Mood',
            body: 'An essential part of advanced French. Learn when to use the subjunctive to express doubt, emotion, or necessity.',
          },
          {
            title: 'Reflexive Verbs and Daily Routine',
            body: 'Master verbs like "se laver" or "se réveiller" to describe your daily activities.',
          },
          {
            title: 'Negation in French (Ne... pas)',
            body: 'Learn how to form negative sentences and use other negative expressions like "ne... plus" or "ne... jamais."',
          },
          {
            title: 'Prepositions of Place and Time',
            body: 'Correctly use "à," "en," "dans," and "chez" to describe locations and time frames.',
          },
          {
            title: 'Common Grammar Pitfalls',
            body: 'Avoid frequent mistakes with gender agreement, false friends (faux amis), and irregular verb conjugations.',
          },
        ],
        author: {
          name: 'Prof. Luc Garnier',
          role: 'Grammar Expert',
          image:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 09, 2026',
      },
      {
        id: 'fr_3',
        slug: 'conversational-french-fluency',
        name: 'Conversational French Fluency',
        category: 'Learn French',
        description: 'Speak like a local with idiomatic expressions and natural flow.',
        heroImage:
          'https://images.unsplash.com/photo-1550340499-a6c60bb828a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'The Art of the "Bise"',
            body: 'Understand the cultural nuances of the French greeting kiss and when it is appropriate in social settings.',
          },
          {
            title: 'French Slang and "Verlan"',
            body: 'Learn common informal expressions and the unique "back-to-front" slang used by young people in France.',
          },
          {
            title: 'Filler Words (Alors, Donc, Bah)',
            body: 'Sound more like a native speaker by using common fillers to bridge gaps in your conversation.',
          },
          {
            title: 'Ordering in a French Bistro',
            body: 'Master the vocabulary and etiquette for dining out, from calling the waiter to asking for the bill.',
          },
          {
            title: 'Expressing Opinions and Debate',
            body: 'Learn the phrases needed to agree, disagree, and participate in the classic French art of "la polémique."',
          },
          {
            title: 'Telephone Etiquette in French',
            body: 'How to answer the phone, take messages, and handle professional or social calls in French.',
          },
          {
            title: 'Handling Misunderstandings',
            body: "Polite ways to ask someone to repeat themselves or explain a word you don't understand.",
          },
          {
            title: 'Social Etiquette and Polite Forms',
            body: 'Master the difference between "tu" and "vous" and when to use formal versus informal language.',
          },
          {
            title: 'Telling Stories and Anecdotes',
            body: 'Learn how to keep an audience engaged when sharing personal stories in a social setting.',
          },
          {
            title: 'Ending a Conversation Gracefully',
            body: 'Common phrases for saying goodbye and making plans to meet again (À plus tard, On se rappelle).',
          },
        ],
        author: {
          name: 'Chloé Martin',
          role: 'Conversation Coach',
          image:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 08, 2026',
      },
      {
        id: 'fr_4',
        slug: 'french-for-business-pro',
        name: 'French for Business Professionals',
        category: 'Learn French',
        description: 'Navigate the Francophone corporate world with confidence.',
        heroImage:
          'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'Writing Professional Emails',
            body: 'Learn the formal structures and formulas needed for business correspondence in French.',
          },
          {
            title: 'Language for Meetings',
            body: 'Master the vocabulary for starting meetings, presenting agendas, and summarizing action points.',
          },
          {
            title: 'Negotiation Tactics in French',
            body: 'Phrases and cultural tips for successful business negotiations in France and Francophone Africa.',
          },
          {
            title: 'Presenting Data and Reports',
            body: 'Learn how to describe trends, graphs, and financial results using professional French terminology.',
          },
          {
            title: 'Corporate Culture in France',
            body: 'Understand hierarchy, the importance of "le déjeuner," and the formal "vous" culture in the workplace.',
          },
          {
            title: 'Job Interviews in French',
            body: 'Strategies and common questions for succeeding in a professional interview with a French-speaking company.',
          },
          {
            title: 'Networking and Professional Socializing',
            body: 'How to introduce your company and build relationships at industry events.',
          },
          {
            title: 'Understanding French Labor Laws',
            body: 'Key vocabulary related to contracts (CDI, CDD), working hours, and employee rights.',
          },
          {
            title: 'Managing a Francophone Team',
            body: 'Communication styles and leadership vocabulary for managing multicultural teams.',
          },
          {
            title: 'Cross-Cultural Communication Tips',
            body: 'Avoid common misunderstandings by learning about French directness and formality in business.',
          },
        ],
        author: {
          name: 'Jean-Pierre Laurent',
          role: 'Business Consultant',
          image:
            'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 07, 2026',
      },
      {
        id: 'fr_5',
        slug: 'delf-dalf-exam-prep',
        name: 'DELF/DALF Exam Preparation',
        category: 'Learn French',
        description: 'Strategic guide to passing the official French proficiency exams.',
        heroImage:
          'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'Understanding the Levels (A1-C2)',
            body: 'A breakdown of the Common European Framework of Reference for Languages and which level you should aim for.',
          },
          {
            title: 'Listening Comprehension Strategies',
            body: 'Tips for handling different audio formats, from short announcements to long academic lectures.',
          },
          {
            title: 'Reading Comprehension Techniques',
            body: 'How to quickly identify key information and handle complex texts under time pressure.',
          },
          {
            title: 'Writing Section Masterclass',
            body: 'Learn how to structure formal letters, essays, and reports according to the exam requirements.',
          },
          {
            title: 'Speaking Test Confidence',
            body: 'Strategies for the monologue, role-play, and debate sections of the oral exam.',
          },
          {
            title: 'Essential Vocabulary for the Exam',
            body: 'Targeted word lists for common exam themes like environment, technology, and society.',
          },
          {
            title: 'Time Management on Exam Day',
            body: 'How to allocate your time effectively across all four sections of the test.',
          },
          {
            title: 'Common Pitfalls and How to Avoid Them',
            body: 'Identify the mistakes that cost candidates points, from spelling to incorrect register.',
          },
          {
            title: 'Official Practice Materials',
            body: 'A guide to the best books and online resources for simulating the real exam environment.',
          },
          {
            title: 'Final Countdown to the Exam',
            body: 'A checklist for the last week of preparation and what to bring to the test center.',
          },
        ],
        author: {
          name: 'Sophie Lefebvre',
          role: 'Certified Examiner',
          image:
            'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 06, 2026',
      },
      {
        id: 'fr_6',
        slug: 'french-for-travel-adventures',
        name: 'French for Travel and Tourism',
        category: 'Learn French',
        description: 'Everything you need for your next trip to a French-speaking country.',
        heroImage:
          'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'Navigating Airports and Trains',
            body: 'Essential vocabulary for travel hubs, handling delays, and buying tickets.',
          },
          {
            title: 'Checking into Your "Hôtel"',
            body: 'Learn how to make reservations, ask about breakfast, and resolve room issues.',
          },
          {
            title: 'Ordering Food like a Local',
            body: 'A guide to reading menus, understanding French food terms, and paying the bill.',
          },
          {
            title: 'Asking for Directions',
            body: 'Master the phrases needed to find your way around cities like Paris, Montreal, or Dakar.',
          },
          {
            title: 'Shopping and Local Markets',
            body: 'Vocabulary for sizes, prices, and polite interaction with market vendors.',
          },
          {
            title: 'Handling Emergencies Abroad',
            body: 'Crucial language for seeking medical help or contacting the police in a French-speaking area.',
          },
          {
            title: 'Sightseeing and Guided Tours',
            body: 'How to book tours and ask questions about historical sites and museums.',
          },
          {
            title: 'Making New Friends on the Road',
            body: 'Simple icebreakers and conversation starters for meeting fellow travelers and locals.',
          },
          {
            title: 'Understanding French Signs',
            body: "A guide to common icons and written notices you'll encounter while traveling.",
          },
          {
            title: 'Money and Banking Vocabulary',
            body: 'How to handle ATMs, exchange rates, and financial transactions in French.',
          },
        ],
        author: {
          name: 'Antoine Morel',
          role: 'Travel Guide',
          image:
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 05, 2026',
      },
      {
        id: 'fr_7',
        slug: 'french-literature-and-culture',
        name: 'French Literature and Culture',
        category: 'Learn French',
        description: 'Explore the rich heritage of the French-speaking world.',
        heroImage:
          'https://images.unsplash.com/photo-1491841573634-28140fc7ced7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'Introduction to Classic Authors',
            body: 'A brief look at the works of Victor Hugo, Molière, and Albert Camus.',
          },
          {
            title: 'Modern Francophone Cinema',
            body: 'Discover influential French-language films and the "Nouvelle Vague" movement.',
          },
          {
            title: 'The Diversity of the Francophonie',
            body: 'Learn about the cultures of French-speaking Africa, the Caribbean, and North America.',
          },
          {
            title: 'French History Highlights',
            body: 'Key moments in history that shaped the French language and national identity.',
          },
          {
            title: 'The Art of French Cuisine',
            body: 'Explore the regional specialties and the cultural importance of gastronomy in France.',
          },
          {
            title: 'Contemporary French Music',
            body: 'From Chanson to modern Rap and Electronic music, explore the French music scene.',
          },
          {
            title: 'French Philosophy and Thought',
            body: 'An introduction to the ideas of Descartes, Rousseau, and Sartre.',
          },
          {
            title: 'Festivals and Public Holidays',
            body: 'Understand the significance of Bastille Day, Fête de la Musique, and other celebrations.',
          },
          {
            title: 'Architecture and Art History',
            body: 'A guide to the styles of the Louvre, Notre Dame, and modern French architecture.',
          },
          {
            title: 'Francophone Influence in the World',
            body: 'How the French language and culture continue to impact global diplomacy and art.',
          },
        ],
        author: {
          name: 'Dr. Isabelle Roy',
          role: 'Cultural Historian',
          image:
            'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 04, 2026',
      },
      {
        id: 'fr_8',
        slug: 'french-pronunciation-workshop',
        name: 'French Pronunciation Workshop',
        category: 'Learn French',
        description: 'Perfect your accent and sound like a native Francophone.',
        heroImage:
          'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'The French "R" Sound',
            body: 'Master the uvular "R" that is the hallmark of a good French accent.',
          },
          {
            title: 'Nasal Vowels (An, En, In, On)',
            body: "Learn how to produce the unique nasal sounds that don't exist in English.",
          },
          {
            title: 'Silent Final Letters',
            body: 'Understand the rules for which letters are not pronounced at the end of French words.',
          },
          {
            title: 'The "Liaison" and Flow',
            body: 'Learn how to connect words together to create the smooth, musical rhythm of French.',
          },
          {
            title: 'Intonation and Word Stress',
            body: 'Discover where to put the emphasis in French sentences for a natural-sounding flow.',
          },
          {
            title: 'Minimal Pairs Practice',
            body: 'Distinguish between similar sounds like "u" and "ou" or "é" and "è" through drills.',
          },
          {
            title: 'Common Pronunciation Mistakes',
            body: 'Identify and fix the errors that most English speakers make when learning French.',
          },
          {
            title: 'Vowel Purity and Duration',
            body: 'Learn why French vowels are shorter and more "pure" than their English counterparts.',
          },
          {
            title: 'The Role of Facial Muscles',
            body: 'Discover how changing your mouth shape can dramatically improve your French sounds.',
          },
          {
            title: 'Resources for Audio Immersion',
            body: 'The best podcasts, movies, and tools for training your ear to the sounds of French.',
          },
        ],
        author: {
          name: 'Pierre Durand',
          role: 'Phonetics Coach',
          image:
            'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 03, 2026',
      },
      {
        id: 'fr_9',
        slug: 'french-idioms-and-expressions',
        name: 'French Idioms and Expressions',
        category: 'Learn French',
        description: 'Add color to your speech with popular French sayings.',
        heroImage:
          'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'Food-Related Idioms',
            body: 'Learn why the French say "raconter des salades" or "avoir du pain sur la planche."',
          },
          {
            title: 'Animal Sayings in French',
            body: 'Master expressions like "avoir un chat dans la gorge" or "poser un lapin."',
          },
          {
            title: 'Idioms About Time and Weather',
            body: 'Phrases like "faire un temps de chien" or "chercher midi à quatorze heures."',
          },
          {
            title: 'Common Daily Expressions',
            body: 'Master the phrases that French speakers use every day to sound more natural.',
          },
          {
            title: 'Body Part Idioms',
            body: 'Learn what it means to "avoir le cœur sur la main" or "être une fine mouche."',
          },
          {
            title: 'Idioms About Color',
            body: 'Expressions like "être dans le rouge" or "voir la vie en rose."',
          },
          {
            title: 'Understanding Context and Tone',
            body: 'Learn when it is appropriate to use colorful idioms versus formal language.',
          },
          {
            title: 'Idioms for Emotions',
            body: 'How to express feelings using traditional French sayings.',
          },
          {
            title: 'Phrases for Success and Failure',
            body: 'Common expressions for winning and losing in the French language.',
          },
          {
            title: 'Tips for Memorizing Idioms',
            body: 'Effective ways to learn and use these tricky parts of the language in context.',
          },
        ],
        author: {
          name: 'Hélène Dubois',
          role: 'Language Enthusiast',
          image:
            'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 02, 2026',
      },
      {
        id: 'fr_10',
        slug: 'advanced-french-writing',
        name: 'Advanced French Writing',
        category: 'Learn French',
        description: 'Master the art of academic and creative writing in French.',
        heroImage:
          'https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'Structuring a "Dissertation"',
            body: 'Learn the rigorous three-part structure required for academic essays in the French system.',
          },
          {
            title: 'Formal vs. Informal Register',
            body: 'Master the nuances of tone needed for different types of written communication.',
          },
          {
            title: 'The Art of "La Synthèse"',
            body: 'How to summarize multiple documents into a single, coherent piece of writing.',
          },
          {
            title: 'Creative Writing Exercises',
            body: 'Prompts and techniques for developing your own voice in French literature.',
          },
          {
            title: 'Advanced Transition Words',
            body: 'Use connectors like "toutefois," "néanmoins," and "par ailleurs" to improve flow.',
          },
          {
            title: 'Avoiding Common Anglicisms',
            body: 'Learn how to identify and replace English-influenced words with authentic French terms.',
          },
          {
            title: 'The Power of Nominalization',
            body: 'Discover how to turn verbs into nouns to create a more formal, academic tone.',
          },
          {
            title: 'Editing and Proofreading Tips',
            body: 'A checklist for polishing your French writing, from grammar to punctuation.',
          },
          {
            title: 'Building an Advanced Vocabulary',
            body: 'Strategies for learning the sophisticated words needed for high-level writing.',
          },
          {
            title: 'Getting Your Work Reviewed',
            body: 'How to find language partners or tools to help you improve your written French.',
          },
        ],
        author: {
          name: 'Prof. André Malraux',
          role: 'Literature Professor',
          image:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 01, 2026',
      },
    ],
  },
  'local-languages': {
    id: 'cat_local_lang',
    title: 'Local Languages',
    slug: 'local-languages',
    description:
      'Connect with your roots by learning Nigerian languages and exploring their cultural significance.',
    resources: [
      {
        id: 'loc_1',
        slug: 'yoruba-language-basics',
        name: 'Yoruba Language Basics',
        category: 'Local Languages',
        description: 'Learn the fundamentals of Yoruba language and culture.',
        heroImage:
          'https://images.unsplash.com/photo-1523821741446-edb2b68bb7a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'The Yoruba Alphabet (Abidi)',
            body: 'Yoruba uses the Latin script but with unique tonal marks and characters like ẹ, ọ, and ṣ. Understanding these is the first step to correct pronunciation.',
          },
          {
            title: 'Mastering the Three Tones',
            body: 'Yoruba is a tonal language with high (do), mid (re), and low (mi) tones. The same word can have different meanings depending on the tone used.',
          },
          {
            title: 'Common Greetings (E nle o!)',
            body: 'Learn how to greet elders and peers appropriately, including "E kaaro" (Good morning) and "E kaale" (Good evening).',
          },
          {
            title: 'Family Terms and Kinship',
            body: 'Understand the hierarchy and terms for family members, such as "Baba" (Father), "Iya" (Mother), and "Egbon" (Elder sibling).',
          },
          {
            title: 'Numbers and Counting',
            body: 'Learn to count from 1 to 20 and beyond, including the unique vigesimal (base-20) system used in traditional Yoruba mathematics.',
          },
          {
            title: 'Days of the Week',
            body: 'Learn the seven days of the week, from "Ojo Aiku" (Sunday) to "Ojo Abameta" (Saturday), and their meanings.',
          },
          {
            title: 'Parts of the Body',
            body: 'Master common nouns for body parts like "Ori" (Head), "Oju" (Eyes), and "Owo" (Hand).',
          },
          {
            title: 'Basic Sentence Structure',
            body: 'Yoruba typically follows a Subject-Verb-Object (SVO) pattern. Learn how to construct simple sentences for daily communication.',
          },
          {
            title: 'Cultural Etiquette and Proverbial Wisdom',
            body: 'Discover the importance of "Oluwa" and the role of proverbs (Owe) in conveying deep cultural and moral lessons.',
          },
          {
            title: 'Tips for Fluency',
            body: 'Immerse yourself in Yoruba music (Juju, Afrobeat) and practice speaking with native speakers to master the natural rhythm and tones.',
          },
        ],
        author: {
          name: 'Olawale Adeyemi',
          role: 'Yoruba Scholar',
          image:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 09, 2026',
      },
      {
        id: 'loc_2',
        slug: 'igbo-language-essentials',
        name: 'Igbo Language Essentials',
        category: 'Local Languages',
        description: 'Discover the beauty and structure of the Igbo language.',
        heroImage:
          'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'The Igbo Alphabet (Onwu Abidi)',
            body: 'Learn the 36 letters of the Igbo alphabet, including digraphs like "ch," "gw," and "kp."',
          },
          {
            title: 'Tones and Pronunciation',
            body: 'Like Yoruba, Igbo is tonal. Learn to distinguish between high and low tones to ensure clear communication.',
          },
          {
            title: 'Greetings and Social Etiquette',
            body: 'Master essential greetings like "Nno" (Welcome), "Kedu" (How are you?), and "Daalu" (Thank you).',
          },
          {
            title: 'Family and Kinship Terms',
            body: 'Learn how to address family members: "Nna" (Father), "Nne" (Mother), and "Nwanne" (Sibling).',
          },
          {
            title: 'Numbers and Basic Arithmetic',
            body: 'Learn the Igbo counting system from 1 to 100, focusing on the decimal-based structure.',
          },
          {
            title: 'Common Verbs and Actions',
            body: 'Master everyday verbs like "iri" (to eat), "iga" (to go), and "isi" (to say).',
          },
          {
            title: 'Describing Things (Adjectives)',
            body: 'Learn how to use adjectives for colors, sizes, and quality, and where they typically follow the noun.',
          },
          {
            title: 'Daily Routine Vocabulary',
            body: 'Vocabulary for activities from waking up to going to bed in an Igbo household.',
          },
          {
            title: 'Igbo Proverbs (Ilu)',
            body: 'Introduction to the rich world of Igbo proverbs, which are considered the "palm oil with which words are eaten."',
          },
          {
            title: 'Resources for Immersion',
            body: 'The best Igbo movies (Nollywood) and podcasts to help you hear the language in natural contexts.',
          },
        ],
        author: {
          name: 'Dr. Chidi Okoro',
          role: 'Linguistics Professor',
          image:
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 08, 2026',
      },
      {
        id: 'loc_3',
        slug: 'hausa-for-beginners',
        name: 'Hausa for Beginners',
        category: 'Local Languages',
        description: 'Start speaking Hausa, the most widely spoken language in West Africa.',
        heroImage:
          'https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'The Hausa Alphabet (Boko and Ajami)',
            body: 'Learn about the Latin-based Boko script and the Arabic-based Ajami script used for writing Hausa.',
          },
          {
            title: 'Greetings and Formalities',
            body: 'Master essential greetings like "Sannu" (Hello), "Ina kwana?" (How was your night?), and "Ina gajiya?" (How is the tiredness/work?).',
          },
          {
            title: 'Family and Community Roles',
            body: 'Understand the terms for family members and community leaders like "Uba" (Father) and "Uwa" (Mother).',
          },
          {
            title: 'Numbers and Market Language',
            body: 'Learn to count in Hausa and the essential phrases for bargaining in a traditional market setting.',
          },
          {
            title: 'Common Nouns and Objects',
            body: 'Vocabulary for everyday items, animals, and places in a Hausa-speaking community.',
          },
          {
            title: 'Basic Verb Conjugation',
            body: "Hausa verbs don't change much; instead, the person-aspect markers change. Learn this unique system.",
          },
          {
            title: 'Telling Time and Days',
            body: 'Learn the days of the week and how to express time using "karfe" (o\'clock).',
          },
          {
            title: 'Describing People and Emotions',
            body: 'Adjectives for personality, physical appearance, and sharing how you feel.',
          },
          {
            title: 'Hausa Cultural Traditions',
            body: 'A brief look at the history, music, and social norms of the Hausa people.',
          },
          {
            title: 'Tips for Rapid Learning',
            body: 'The best ways to practice Hausa daily, including watching Kannywood films and listening to Hausa radio.',
          },
        ],
        author: {
          name: 'Musa Ibrahim',
          role: 'Hausa Language Coach',
          image:
            'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 07, 2026',
      },
      {
        id: 'loc_4',
        slug: 'pidgin-english-masterclass',
        name: 'Pidgin English Masterclass',
        category: 'Local Languages',
        description: 'Master the lingua franca of Nigeria and West Africa.',
        heroImage:
          'https://images.unsplash.com/photo-1523240715639-99a8086f73e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'Introduction to Nigerian Pidgin',
            body: 'Understand the origins and the vital role of Pidgin in uniting diverse ethnic groups in Nigeria.',
          },
          {
            title: 'Essential Greetings (How body?)',
            body: 'Master the most common greetings like "How you dey?", "Abeg," and "I go see you later."',
          },
          {
            title: 'Grammar and Sentence Structure',
            body: 'Learn the simplified grammar of Pidgin, including the use of "don," "dey," and "go" to express tense.',
          },
          {
            title: 'Slang and Street Lingo',
            body: 'Stay current with the latest expressions used in popular culture and daily life.',
          },
          {
            title: 'Expressing Emotions and Reactions',
            body: 'Phrases for showing surprise (Chai!), agreement (I no lie), and frustration.',
          },
          {
            title: 'Numbers and Money in Pidgin',
            body: 'Learn the unique terms for currency, like "kobo," "naira," and slang terms like "ego" or "mula."',
          },
          {
            title: 'Navigating Daily Situations',
            body: 'Vocabulary for transportation, markets, and social gatherings in a Pidgin-speaking environment.',
          },
          {
            title: 'Pidgin in Music and Media',
            body: 'How Afrobeats artists use Pidgin to connect with a global audience.',
          },
          {
            title: 'Formal vs. Informal Pidgin',
            body: 'Understand the nuances of using Pidgin in different social and professional settings.',
          },
          {
            title: 'Tips for Sounding Authentic',
            body: 'Master the intonation and rhythm that make Pidgin sound natural and engaging.',
          },
        ],
        author: {
          name: 'Wale "Pidgin" Jones',
          role: 'Cultural Expert',
          image:
            'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 06, 2026',
      },
      {
        id: 'loc_5',
        slug: 'edo-language-for-beginners',
        name: 'Edo Language for Beginners',
        category: 'Local Languages',
        description: 'Learn the language of the ancient Benin Kingdom.',
        heroImage:
          'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'The Edo Alphabet and Sounds',
            body: 'Learn the unique phonetic sounds of the Edo language, including nasal vowels.',
          },
          {
            title: 'Greetings and Social Norms',
            body: 'Master essential greetings like "Ob\'okhian" (Welcome) and "Koyo" (Hello).',
          },
          {
            title: 'Family and Ancestry Terms',
            body: 'Understand the importance of lineage and terms for family members in Edo culture.',
          },
          {
            title: 'Numbers and Counting',
            body: 'Learn the Edo counting system and its application in daily life.',
          },
          {
            title: 'Common Verbs and Phrases',
            body: 'Master basic actions and sentences for everyday communication.',
          },
          {
            title: 'Describing the World Around You',
            body: 'Vocabulary for nature, animals, and common objects in the Edo environment.',
          },
          {
            title: 'Edo Cultural History',
            body: 'A brief introduction to the rich heritage and history of the Benin people.',
          },
          {
            title: 'Traditional Edo Names and Meanings',
            body: 'Discover the significance behind common Edo names.',
          },
          {
            title: 'Basic Sentence Construction',
            body: 'Learn how to form simple questions and statements in Edo.',
          },
          {
            title: 'Tips for Practice',
            body: 'Connect with Edo communities and use online resources to improve your fluency.',
          },
        ],
        author: {
          name: 'Osasere Ighodaro',
          role: 'Edo Historian',
          image:
            'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 05, 2026',
      },
      {
        id: 'loc_6',
        slug: 'tiv-language-essentials',
        name: 'Tiv Language Essentials',
        category: 'Local Languages',
        description: 'Explore the language and culture of the Tiv people of Central Nigeria.',
        heroImage:
          'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'Tiv Phonetics and Alphabet',
            body: 'Learn the sounds and writing system of the Tiv language.',
          },
          {
            title: 'Greetings and Respect',
            body: 'Master essential greetings like "Msugh" (Hello/Thank you) and "Msugh uwer" (Good night).',
          },
          {
            title: 'Kinship and Family Structure',
            body: 'Understand the terms for family members and the importance of community in Tiv culture.',
          },
          {
            title: 'Numbers and Counting in Tiv',
            body: 'Learn the Tiv counting system from 1 to 100.',
          },
          {
            title: 'Common Nouns and Verbs',
            body: 'Essential vocabulary for daily life, farming, and social interactions.',
          },
          {
            title: 'Describing People and Places',
            body: 'Adjectives and phrases for physical and personality traits.',
          },
          {
            title: 'Tiv Proverbs and Wisdom',
            body: 'Discover the deep moral and social lessons embedded in Tiv proverbs.',
          },
          {
            title: 'Telling Time and Seasons',
            body: 'Learn how the Tiv people describe time and the agricultural seasons.',
          },
          {
            title: 'Basic Sentence Patterns',
            body: 'Learn how to construct simple sentences for daily use.',
          },
          {
            title: 'Immersion Strategies',
            body: 'The best ways to practice Tiv through music, storytelling, and community engagement.',
          },
        ],
        author: {
          name: 'Terver Akirga',
          role: 'Tiv Language Teacher',
          image:
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 04, 2026',
      },
      {
        id: 'loc_7',
        slug: 'efik-ibibio-language-guide',
        name: 'Efik-Ibibio Language Guide',
        category: 'Local Languages',
        description: 'Learn the language of the people of South-South Nigeria.',
        heroImage:
          'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'Alphabet and Pronunciation',
            body: 'Learn the sounds and writing system of the Efik and Ibibio languages.',
          },
          {
            title: 'Greetings and Social Etiquette',
            body: 'Master essential greetings like "Emesiere" (Good morning) and "Abadie?" (How are you?).',
          },
          {
            title: 'Family and Kinship Terms',
            body: 'Understand the terms for family members and the social structure of the Efik/Ibibio people.',
          },
          {
            title: 'Numbers and Basic Counting',
            body: 'Learn the counting system used in the Cross River and Akwa Ibom regions.',
          },
          {
            title: 'Everyday Nouns and Verbs',
            body: 'Vocabulary for daily activities, food, and common objects.',
          },
          {
            title: 'Describing the Environment',
            body: 'Phrases for talking about the weather, landscape, and surroundings.',
          },
          {
            title: 'Efik-Ibibio Cultural Heritage',
            body: 'A brief look at the traditions, dance, and history of the people.',
          },
          {
            title: 'Traditional Names and Their Meanings',
            body: 'Discover the significance behind names in Efik and Ibibio cultures.',
          },
          {
            title: 'Simple Sentence Construction',
            body: 'Learn how to form basic questions and statements.',
          },
          {
            title: 'Tips for Fluent Speaking',
            body: 'Practice techniques and resources for mastering the language.',
          },
        ],
        author: {
          name: 'Itoro Bassey',
          role: 'Cultural Consultant',
          image:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 03, 2026',
      },
      {
        id: 'loc_8',
        slug: 'fulfulde-language-basics',
        name: 'Fulfulde Language Basics',
        category: 'Local Languages',
        description: 'Learn the language of the Fulani people across West Africa.',
        heroImage:
          'https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'Introduction to Fulfulde',
            body: 'Understand the spread and variations of the Fulfulde language across the Sahel and West Africa.',
          },
          {
            title: 'Greetings and Social Formalities',
            body: 'Master essential greetings like "Jam bandu" (Health to you) and "Sannu" (Hello).',
          },
          {
            title: 'Family and Nomadic Life Vocabulary',
            body: 'Terms for family members and vocabulary related to the traditional pastoralist lifestyle.',
          },
          {
            title: 'Numbers and Counting in Fulfulde',
            body: 'Learn the Fulfulde counting system and its unique structure.',
          },
          {
            title: 'Common Nouns and Verbs',
            body: 'Essential vocabulary for daily life and social interactions.',
          },
          {
            title: 'Describing People and Emotions',
            body: 'Adjectives for physical appearance and sharing feelings.',
          },
          {
            title: 'Fulani Cultural Traditions',
            body: 'A look at the history, music, and social codes (Pulaaku) of the Fulani people.',
          },
          {
            title: 'Telling Time and Seasons',
            body: 'Learn how to describe time and the seasonal changes in Fulfulde.',
          },
          {
            title: 'Basic Sentence Structure',
            body: 'Learn how to construct simple sentences for daily communication.',
          },
          {
            title: 'Resources for Continuous Learning',
            body: 'The best ways to practice Fulfulde and connect with native speakers.',
          },
        ],
        author: {
          name: 'Amadou Diallo',
          role: 'Fulfulde Educator',
          image:
            'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 02, 2026',
      },
      {
        id: 'loc_9',
        slug: 'kanuri-language-introduction',
        name: 'Kanuri Language Introduction',
        category: 'Local Languages',
        description: 'Discover the language of the ancient Kanem-Bornu Empire.',
        heroImage:
          'https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'Kanuri Alphabet and Phonetics',
            body: 'Learn the sounds and writing system of the Kanuri language.',
          },
          {
            title: 'Greetings and Social Etiquette',
            body: 'Master essential greetings like "Lale" (Welcome) and "Afiye?" (How are you?).',
          },
          {
            title: 'Family and Social Hierarchy',
            body: 'Understand the terms for family members and the importance of respect in Kanuri culture.',
          },
          {
            title: 'Numbers and Basic Math',
            body: 'Learn the Kanuri counting system from 1 to 100.',
          },
          {
            title: 'Everyday Nouns and Verbs',
            body: 'Essential vocabulary for daily life in the Borno and Yobe regions.',
          },
          {
            title: 'Describing the World',
            body: 'Phrases for talking about nature, the city, and daily objects.',
          },
          {
            title: 'Kanuri History and Heritage',
            body: 'A brief introduction to the rich history of the Kanem-Bornu Empire.',
          },
          {
            title: 'Traditional Names and Meanings',
            body: 'Discover the significance behind Kanuri names.',
          },
          {
            title: 'Simple Sentence Construction',
            body: 'Learn how to form basic questions and statements.',
          },
          {
            title: 'Tips for Effective Practice',
            body: 'How to immerse yourself in the Kanuri language and culture.',
          },
        ],
        author: {
          name: 'Baba Gana',
          role: 'Kanuri Scholar',
          image:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 01, 2026',
      },
      {
        id: 'loc_10',
        slug: 'nupe-language-basics',
        name: 'Nupe Language Basics',
        category: 'Local Languages',
        description: 'Learn the fundamentals of the Nupe language of North-Central Nigeria.',
        heroImage:
          'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'Nupe Phonetics and Script',
            body: 'Learn the unique sounds and the Latin-based writing system of Nupe.',
          },
          {
            title: 'Greetings and Polite Forms',
            body: 'Master essential greetings like "Kubuta" (Hello) and "O ku ciya" (Good morning).',
          },
          {
            title: 'Family and Kinship Terms',
            body: 'Understand the terms for family members and the social structure of Nupe communities.',
          },
          {
            title: 'Numbers and Counting',
            body: 'Learn the Nupe counting system and its application in daily life.',
          },
          {
            title: 'Common Nouns and Action Verbs',
            body: 'Vocabulary for daily activities, farming, and social interactions.',
          },
          {
            title: 'Describing Things and People',
            body: 'Adjectives and phrases for talking about physical and personality traits.',
          },
          {
            title: 'Nupe Cultural History',
            body: 'A brief look at the traditions, art, and history of the Nupe people.',
          },
          {
            title: 'Traditional Nupe Names',
            body: 'Discover the meanings and significance behind common Nupe names.',
          },
          {
            title: 'Basic Sentence Patterns',
            body: 'Learn how to construct simple sentences for daily use.',
          },
          {
            title: 'Strategies for Mastery',
            body: 'The best ways to practice Nupe and connect with native speakers.',
          },
        ],
        author: {
          name: 'Mohammed Nupe',
          role: 'Language Instructor',
          image:
            'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Jan 31, 2026',
      },
    ],
  },
  'learn-coding': {
    id: 'cat_coding',
    title: 'Learn Coding',
    slug: 'learn-coding',
    description:
      'Master the language of the future with our comprehensive coding and software development guides.',
    resources: [
      {
        id: 'cod_1',
        slug: 'intro-to-web-development',
        name: 'Introduction to Web Development',
        category: 'Learn Coding',
        description: 'Learn HTML, CSS, and JavaScript from scratch to build modern websites.',
        heroImage:
          'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'Understanding the Web Ecosystem',
            body: 'Learn how browsers work, what HTTP/HTTPS protocols are, and the difference between client-side and server-side development.',
          },
          {
            title: 'HTML5 Semantic Structure',
            body: 'Master the art of structuring content using semantic tags like header, nav, main, section, and article for better SEO and accessibility.',
          },
          {
            title: 'CSS3 Styling Fundamentals',
            body: 'Learn about selectors, the box model, colors, typography, and how to make your websites look professional.',
          },
          {
            title: 'Modern Layouts with Flexbox',
            body: 'Master one-dimensional layouts using Flexbox to align items and distribute space within a container efficiently.',
          },
          {
            title: 'Advanced Layouts with CSS Grid',
            body: 'Learn two-dimensional layouts with CSS Grid to create complex, responsive website structures with ease.',
          },
          {
            title: 'JavaScript Basics for the Web',
            body: 'Introduction to variables, data types, operators, and basic control flow (if/else, loops) in JavaScript.',
          },
          {
            title: 'DOM Manipulation and Events',
            body: 'Learn how to interact with HTML elements using JavaScript and respond to user actions like clicks and form submissions.',
          },
          {
            title: 'Responsive Design and Media Queries',
            body: 'Ensure your website looks great on all devices, from mobile phones to large desktop monitors.',
          },
          {
            title: 'Version Control with Git',
            body: 'Learn the essentials of Git for tracking changes in your code and collaborating with other developers.',
          },
          {
            title: 'Deploying Your First Website',
            body: 'A step-by-step guide to hosting your website using platforms like Vercel, Netlify, or GitHub Pages.',
          },
        ],
        author: {
          name: 'Alex Tech',
          role: 'Full Stack Developer',
          image:
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 12, 2026',
      },
      {
        id: 'cod_2',
        slug: 'python-programming-for-beginners',
        name: 'Python Programming for Beginners',
        category: 'Learn Coding',
        description:
          'Start your coding journey with the most popular and versatile programming language.',
        heroImage:
          'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'Introduction to Python',
            body: 'Learn why Python is the best first language and how to set up your development environment.',
          },
          {
            title: 'Variables and Data Types',
            body: 'Master integers, floats, strings, booleans, and how to use them in your programs.',
          },
          {
            title: 'Control Flow and Logic',
            body: 'Learn how to use if-statements, while-loops, and for-loops to control the flow of your Python scripts.',
          },
          {
            title: 'Functions and Modularity',
            body: 'Discover how to write reusable code blocks using functions and how to organize your scripts into modules.',
          },
          {
            title: 'Lists, Tuples, and Dictionaries',
            body: "Master Python's built-in data structures for storing and manipulating collections of data.",
          },
          {
            title: 'File Input and Output',
            body: 'Learn how to read from and write to text and CSV files using Python.',
          },
          {
            title: 'Object-Oriented Programming (OOP)',
            body: 'Introduction to classes, objects, inheritance, and polymorphism in Python.',
          },
          {
            title: 'Error Handling and Exceptions',
            body: 'Learn how to handle runtime errors gracefully using try-except blocks.',
          },
          {
            title: 'Working with Python Libraries',
            body: 'Discover the power of the Python Standard Library and how to install third-party packages using pip.',
          },
          {
            title: 'Building a Simple Automation Script',
            body: 'Put your skills to the test by creating a script that automates a common task.',
          },
        ],
        author: {
          name: 'Sarah Py',
          role: 'Data Scientist',
          image:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 11, 2026',
      },
      {
        id: 'cod_3',
        slug: 'mastering-react-js',
        name: 'Mastering React.js',
        category: 'Learn Coding',
        description:
          'Build powerful, interactive user interfaces with the most popular JavaScript library.',
        heroImage:
          'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'Introduction to React',
            body: "Learn what React is, why it's so popular, and the benefits of a component-based architecture.",
          },
          {
            title: 'JSX and Elements',
            body: 'Master the syntax that allows you to write HTML-like code inside your JavaScript.',
          },
          {
            title: 'Components and Props',
            body: 'Learn how to build reusable UI components and pass data between them using props.',
          },
          {
            title: 'State and the useState Hook',
            body: 'Discover how to manage dynamic data in your components using React state.',
          },
          {
            title: 'Effect Hook (useEffect)',
            body: 'Learn how to handle side effects like data fetching and subscriptions in your functional components.',
          },
          {
            title: 'Handling Events in React',
            body: 'Learn how to respond to user interactions in a React-friendly way.',
          },
          {
            title: 'Conditional Rendering',
            body: 'Master techniques for showing or hiding components based on specific conditions.',
          },
          {
            title: 'Lists and Keys',
            body: 'Learn how to efficiently render lists of data and why unique keys are important.',
          },
          {
            title: 'Building Forms with React',
            body: 'Master controlled components and how to handle form data in React applications.',
          },
          {
            title: 'React Router for Navigation',
            body: 'Learn how to add multiple pages and navigation to your React apps.',
          },
        ],
        author: {
          name: 'David React',
          role: 'Senior Frontend Engineer',
          image:
            'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 10, 2026',
      },
      {
        id: 'cod_4',
        slug: 'full-stack-node-js-development',
        name: 'Full-Stack Node.js Development',
        category: 'Learn Coding',
        description: 'Learn how to build scalable backend services and APIs using JavaScript.',
        heroImage:
          'https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'Introduction to Node.js',
            body: 'Learn about the V8 engine, the event loop, and why Node.js is great for backend development.',
          },
          {
            title: 'NPM and Package Management',
            body: 'Master the Node Package Manager to install and manage dependencies for your projects.',
          },
          {
            title: 'Building APIs with Express.js',
            body: 'Learn the most popular Node.js framework for building fast and minimalist web APIs.',
          },
          {
            title: 'Understanding Middleware',
            body: 'Discover how to use middleware to handle logging, authentication, and error handling.',
          },
          {
            title: 'Connecting to MongoDB',
            body: 'Learn how to use NoSQL databases with Node.js and Mongoose for data persistence.',
          },
          {
            title: 'RESTful API Design',
            body: 'Master the principles of designing clean, logical, and scalable APIs.',
          },
          {
            title: 'Authentication with JWT',
            body: 'Learn how to secure your APIs using JSON Web Tokens for user authentication.',
          },
          {
            title: 'Asynchronous Programming',
            body: 'Master Promises and Async/Await for handling non-blocking I/O operations.',
          },
          {
            title: 'Testing with Jest',
            body: 'Learn how to write unit and integration tests to ensure your backend is reliable.',
          },
          {
            title: 'Deploying Node.js Apps',
            body: 'A guide to deploying your Node.js applications to cloud platforms like AWS or Heroku.',
          },
        ],
        author: {
          name: 'Michael Backend',
          role: 'Backend Architect',
          image:
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 09, 2026',
      },
      {
        id: 'cod_5',
        slug: 'data-structures-and-algorithms',
        name: 'Data Structures and Algorithms',
        category: 'Learn Coding',
        description:
          'Master the foundations of computer science for technical interviews and efficient coding.',
        heroImage:
          'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'Big O Notation',
            body: 'Learn how to analyze the time and space complexity of your algorithms.',
          },
          {
            title: 'Arrays and Linked Lists',
            body: 'Master the basic building blocks of data structures and their trade-offs.',
          },
          {
            title: 'Stacks and Queues',
            body: 'Understand these linear data structures and their real-world applications.',
          },
          {
            title: 'Searching Algorithms',
            body: 'Learn about Linear Search, Binary Search, and their efficiencies.',
          },
          {
            title: 'Sorting Algorithms',
            body: 'Master Bubble Sort, Merge Sort, and Quick Sort and when to use each.',
          },
          {
            title: 'Trees and Binary Search Trees',
            body: 'Discover hierarchical data structures and how to navigate them.',
          },
          {
            title: 'Graphs and Graph Algorithms',
            body: 'Learn about BFS, DFS, and how to model complex relationships.',
          },
          {
            title: 'Hash Tables',
            body: 'Understand how hash tables provide fast data retrieval and how to handle collisions.',
          },
          {
            title: 'Recursion and Dynamic Programming',
            body: 'Learn advanced techniques for solving complex problems efficiently.',
          },
          {
            title: 'Ace the Coding Interview',
            body: 'Tips and strategies for solving algorithmic problems during technical interviews.',
          },
        ],
        author: {
          name: 'Dr. Algorithm',
          role: 'CS Professor',
          image:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 08, 2026',
      },
      {
        id: 'cod_6',
        slug: 'mobile-app-dev-with-flutter',
        name: 'Mobile App Dev with Flutter',
        category: 'Learn Coding',
        description:
          'Build beautiful, natively compiled applications for mobile, web, and desktop from a single codebase.',
        heroImage:
          'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'Introduction to Flutter and Dart',
            body: 'Learn about the Flutter framework and the Dart programming language.',
          },
          {
            title: 'Everything is a Widget',
            body: 'Master the core philosophy of Flutter UI development.',
          },
          {
            title: 'Building Layouts in Flutter',
            body: 'Learn how to use Row, Column, Container, and Stack to create complex UIs.',
          },
          {
            title: 'Stateful vs. Stateless Widgets',
            body: "Understand the difference and when to use each for your app's UI.",
          },
          {
            title: 'Navigation and Routing',
            body: 'Learn how to move between screens and pass data in your Flutter apps.',
          },
          {
            title: 'Working with Assets and Fonts',
            body: 'Learn how to include images, icons, and custom fonts in your application.',
          },
          {
            title: 'Fetching Data from APIs',
            body: 'Learn how to make network requests and display dynamic content.',
          },
          {
            title: 'Firebase Integration',
            body: 'Discover how to use Firebase for authentication, database, and storage.',
          },
          {
            title: 'State Management (Provider/Riverpod)',
            body: 'Master professional techniques for managing state in large Flutter apps.',
          },
          {
            title: 'Publishing to App Stores',
            body: 'A guide to preparing and submitting your apps to the Apple App Store and Google Play Store.',
          },
        ],
        author: {
          name: 'Mobile Mike',
          role: 'App Developer',
          image:
            'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 07, 2026',
      },
      {
        id: 'cod_7',
        slug: 'sql-and-database-design',
        name: 'SQL and Database Design',
        category: 'Learn Coding',
        description: 'Master the language for managing and querying relational databases.',
        heroImage:
          'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'Introduction to Relational Databases',
            body: 'Learn about tables, rows, columns, and the relational model.',
          },
          {
            title: 'Basic SQL Queries (SELECT)',
            body: 'Master the art of retrieving data from a database with filters and sorting.',
          },
          {
            title: 'Data Manipulation (INSERT, UPDATE, DELETE)',
            body: 'Learn how to modify the data stored in your tables.',
          },
          {
            title: 'Joins and Relationships',
            body: 'Master Inner, Left, Right, and Full Joins to combine data from multiple tables.',
          },
          {
            title: 'Aggregate Functions and Grouping',
            body: 'Learn how to perform calculations on your data using SUM, AVG, and GROUP BY.',
          },
          {
            title: 'Database Normalization',
            body: 'Learn the principles of designing efficient and non-redundant database schemas.',
          },
          {
            title: 'Indexes and Performance',
            body: 'Discover how to speed up your queries using database indexes.',
          },
          {
            title: 'Subqueries and Common Table Expressions',
            body: 'Master advanced techniques for writing complex and readable SQL.',
          },
          {
            title: 'Transactions and Concurrency',
            body: 'Learn how to ensure data integrity using SQL transactions.',
          },
          {
            title: 'Database Security and Permissions',
            body: 'A guide to protecting your data and managing user access.',
          },
        ],
        author: {
          name: 'Data Dan',
          role: 'Database Administrator',
          image:
            'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 06, 2026',
      },
      {
        id: 'cod_8',
        slug: 'cloud-computing-with-aws',
        name: 'Cloud Computing with AWS',
        category: 'Learn Coding',
        description:
          "Learn how to deploy and manage applications on the world's leading cloud platform.",
        heroImage:
          'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'What is Cloud Computing?',
            body: 'Understand the benefits of the cloud and the different service models (IaaS, PaaS, SaaS).',
          },
          {
            title: 'Introduction to AWS',
            body: 'Overview of the AWS ecosystem and setting up your Free Tier account.',
          },
          {
            title: 'EC2: Virtual Servers in the Cloud',
            body: 'Learn how to launch and manage virtual machines on AWS.',
          },
          {
            title: 'S3: Scalable Storage',
            body: 'Master Amazon Simple Storage Service for hosting static files and data.',
          },
          {
            title: 'Lambda: Serverless Computing',
            body: 'Discover how to run code without managing servers using AWS Lambda.',
          },
          {
            title: 'IAM: Identity and Access Management',
            body: 'Learn how to secure your AWS resources and manage user permissions.',
          },
          {
            title: 'VPC: Networking Essentials',
            body: 'Master the basics of creating isolated virtual networks in the cloud.',
          },
          {
            title: 'RDS: Managed Relational Databases',
            body: 'Learn how to set up and scale databases with Amazon RDS.',
          },
          {
            title: 'Monitoring with CloudWatch',
            body: 'Discover how to track the health and performance of your AWS resources.',
          },
          {
            title: 'AWS Certified Cloud Practitioner',
            body: 'Tips and resources for getting your first AWS certification.',
          },
        ],
        author: {
          name: 'Cloud Cathy',
          role: 'DevOps Engineer',
          image:
            'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 05, 2026',
      },
      {
        id: 'cod_9',
        slug: 'cybersecurity-fundamentals',
        name: 'Cybersecurity Fundamentals',
        category: 'Learn Coding',
        description: 'Learn how to protect systems, networks, and data from digital attacks.',
        heroImage:
          'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'Introduction to Cybersecurity',
            body: 'Understand the threat landscape and the importance of the CIA triad (Confidentiality, Integrity, Availability).',
          },
          {
            title: 'Common Cyber Attacks',
            body: 'Learn about Phishing, Malware, Ransomware, and Social Engineering.',
          },
          {
            title: 'Network Security Basics',
            body: 'Discover how to secure networks using firewalls, VPNs, and intrusion detection systems.',
          },
          {
            title: 'Cryptography and Encryption',
            body: 'Master the fundamentals of protecting data at rest and in transit.',
          },
          {
            title: 'Web Application Security',
            body: 'Learn about the OWASP Top 10 and how to prevent common web vulnerabilities like SQL injection and XSS.',
          },
          {
            title: 'Identity and Access Management',
            body: 'Discover the best practices for user authentication and authorization.',
          },
          {
            title: 'Incident Response and Recovery',
            body: 'Learn how to respond to security breaches and restore systems safely.',
          },
          {
            title: 'Ethical Hacking and Pentesting',
            body: 'Introduction to the tools and techniques used by security professionals to find vulnerabilities.',
          },
          {
            title: 'Security Compliance and Laws',
            body: 'Overview of GDPR, HIPAA, and other regulations that impact cybersecurity.',
          },
          {
            title: 'Building a Career in Security',
            body: 'Tips for gaining experience and getting certified in the field of cybersecurity.',
          },
        ],
        author: {
          name: 'Sec Pro',
          role: 'Security Analyst',
          image:
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 04, 2026',
      },
      {
        id: 'cod_10',
        slug: 'ai-and-machine-learning-basics',
        name: 'AI and Machine Learning Basics',
        category: 'Learn Coding',
        description:
          'Explore the fascinating world of artificial intelligence and how to build intelligent systems.',
        heroImage:
          'https://images.unsplash.com/photo-1555255707-c079664889ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'What is Artificial Intelligence?',
            body: 'Understand the difference between AI, Machine Learning, and Deep Learning.',
          },
          {
            title: 'Supervised vs. Unsupervised Learning',
            body: 'Learn the two main types of machine learning and their applications.',
          },
          {
            title: 'Introduction to Neural Networks',
            body: 'Discover the building blocks of modern AI and how they mimic the human brain.',
          },
          {
            title: 'Working with Data for ML',
            body: 'Learn about data cleaning, feature engineering, and splitting data into training and test sets.',
          },
          {
            title: 'Linear and Logistic Regression',
            body: 'Master the foundational algorithms for prediction and classification.',
          },
          {
            title: 'Natural Language Processing (NLP)',
            body: 'Explore how computers understand and generate human language.',
          },
          {
            title: 'Computer Vision Basics',
            body: 'Learn how AI systems can see and interpret images and videos.',
          },
          {
            title: 'Ethics in AI',
            body: 'Understand the importance of fairness, transparency, and bias in AI development.',
          },
          {
            title: 'Popular AI Tools and Libraries',
            body: 'Introduction to TensorFlow, PyTorch, and Scikit-learn.',
          },
          {
            title: 'The Future of AI',
            body: 'A look at emerging trends and the impact of AI on various industries.',
          },
        ],
        author: {
          name: 'Dr. AI',
          role: 'Machine Learning Researcher',
          image:
            'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 03, 2026',
      },
    ],
  },
  'graphic-design': {
    id: 'cat_design',
    title: 'Graphic Design',
    slug: 'graphic-design',
    description:
      'Create stunning visuals and master design principles with our expert-led tutorials.',
    resources: [
      {
        id: 'des_1',
        slug: 'design-principles-for-beginners',
        name: 'Design Principles for Beginners',
        category: 'Graphic Design',
        description: 'Learn color theory, typography, and layout design.',
        heroImage:
          'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'Introduction to Visual Design',
            body: 'Learn why design matters and how it influences human perception and behavior.',
          },
          {
            title: 'The Power of Color Theory',
            body: 'Master the color wheel, harmonies, and the psychological impact of different colors on viewers.',
          },
          {
            title: 'Typography Fundamentals',
            body: 'Learn about serif vs. sans-serif, kerning, leading, and how to choose the right fonts for your project.',
          },
          {
            title: 'Grid Systems and Layout',
            body: 'Discover how to use grids to create balance, hierarchy, and professional-looking layouts.',
          },
          {
            title: 'Composition and Focal Points',
            body: "Learn the rule of thirds, white space, and how to guide the viewer's eye through your design.",
          },
          {
            title: 'Branding and Identity Design',
            body: "Master the process of creating logos and visual identities that tell a brand's story.",
          },
          {
            title: 'Design Software Overview',
            body: 'An introduction to industry-standard tools like Adobe Photoshop, Illustrator, and Figma.',
          },
          {
            title: 'Digital vs. Print Design',
            body: 'Understand the technical differences, including color modes (RGB vs. CMYK) and resolution (DPI vs. PPI).',
          },
          {
            title: 'User Experience (UX) Basics',
            body: 'Learn how to design with the user in mind, focusing on usability and accessibility.',
          },
          {
            title: 'Building Your Design Portfolio',
            body: 'Tips for selecting and presenting your best work to land your first design job.',
          },
        ],
        author: {
          name: 'Elena Visual',
          role: 'Senior Designer',
          image:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 11, 2026',
      },
      {
        id: 'des_2',
        slug: 'mastering-adobe-photoshop',
        name: 'Mastering Adobe Photoshop',
        category: 'Graphic Design',
        description: "Comprehensive guide to the world's most popular photo editing software.",
        heroImage:
          'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'Photoshop Interface and Tools',
            body: 'Learn your way around the workspace and master the essential toolbar functions.',
          },
          {
            title: 'Working with Layers and Masks',
            body: 'Discover the power of non-destructive editing using layers and layer masks.',
          },
          {
            title: 'Selection Techniques',
            body: 'Master the pen tool, lasso tools, and AI-powered selection features for precise cutouts.',
          },
          {
            title: 'Color Correction and Grading',
            body: 'Learn how to adjust exposure, contrast, and color balance to enhance your photos.',
          },
          {
            title: 'Photo Retouching and Restoration',
            body: 'Master the clone stamp, healing brush, and patch tools for professional retouching.',
          },
          {
            title: 'Working with Text and Shapes',
            body: 'Learn how to create vector shapes and add beautiful typography to your images.',
          },
          {
            title: 'Filters and Smart Objects',
            body: 'Discover how to apply effects non-destructively and use smart objects for flexible design.',
          },
          {
            title: 'Digital Painting in Photoshop',
            body: 'Learn how to use custom brushes and blending modes for digital illustration.',
          },
          {
            title: 'Automation and Actions',
            body: 'Save time by recording and running actions for repetitive tasks.',
          },
          {
            title: 'Exporting for Web and Print',
            body: 'Master the different file formats and settings for sharing your final creations.',
          },
        ],
        author: {
          name: 'Photo Pro',
          role: 'Retoucher',
          image:
            'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 10, 2026',
      },
      {
        id: 'des_3',
        slug: 'vector-illustration-with-illustrator',
        name: 'Vector Illustration with Illustrator',
        category: 'Graphic Design',
        description: 'Learn how to create scalable graphics for logos, icons, and illustrations.',
        heroImage:
          'https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'Introduction to Vector Graphics',
            body: 'Understand the difference between raster and vector and why vectors are essential for logos.',
          },
          {
            title: 'The Pen Tool Masterclass',
            body: 'Master the most important and difficult tool in Illustrator for creating precise paths.',
          },
          {
            title: 'Shape Builder and Pathfinder',
            body: 'Learn how to combine and subtract shapes to create complex icons and illustrations.',
          },
          {
            title: 'Working with Color and Gradients',
            body: 'Master swatches, global colors, and the powerful gradient mesh tool.',
          },
          {
            title: 'Typography and Type on a Path',
            body: 'Learn advanced text manipulation techniques for unique logo designs.',
          },
          {
            title: 'Brushes and Symbols',
            body: 'Discover how to create custom brushes and use symbols for efficient design.',
          },
          {
            title: 'Appearance Panel and Effects',
            body: 'Learn how to apply multiple strokes and effects to a single object.',
          },
          {
            title: 'Image Trace and Vectorization',
            body: 'Learn how to convert sketches and photos into clean, scalable vector art.',
          },
          {
            title: 'Artboard Management',
            body: 'Master the use of multiple artboards for designing brand collateral.',
          },
          {
            title: 'Exporting Vector Assets',
            body: 'Learn how to save your work in SVG, AI, and EPS formats for various uses.',
          },
        ],
        author: {
          name: 'Vector Vic',
          role: 'Illustrator',
          image:
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 09, 2026',
      },
      {
        id: 'des_4',
        slug: 'logo-design-and-branding',
        name: 'Logo Design and Branding',
        category: 'Graphic Design',
        description: 'The complete process of creating memorable and impactful brand identities.',
        heroImage:
          'https://images.unsplash.com/photo-1572044162444-ad60f128bde2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'The Branding Process',
            body: 'Learn the stages of branding, from research and discovery to final delivery.',
          },
          {
            title: 'Logo Types and Styles',
            body: 'Understand the difference between wordmarks, symbols, and combination marks.',
          },
          {
            title: 'Sketching and Conceptualization',
            body: 'Learn how to generate and refine ideas on paper before moving to digital.',
          },
          {
            title: 'Color Psychology in Branding',
            body: 'Master the use of color to evoke specific emotions and build brand trust.',
          },
          {
            title: 'Brand Typography',
            body: "Learn how to select and pair fonts that represent a brand's personality.",
          },
          {
            title: 'Creating Brand Style Guides',
            body: 'Master the documentation that ensures a brand remains consistent across all platforms.',
          },
          {
            title: 'Client Communication and Pitching',
            body: 'Learn how to present your concepts and handle feedback professionally.',
          },
          {
            title: 'Designing Brand Collateral',
            body: 'Apply the brand identity to business cards, stationery, and social media.',
          },
          {
            title: 'Brand Evolution and Rebranding',
            body: 'Understand when and how to update a brand identity for a modern audience.',
          },
          {
            title: 'Logo Design Legalities',
            body: 'Learn about trademarks and ensuring your designs are original and protectable.',
          },
        ],
        author: {
          name: 'Brand Master',
          role: 'Identity Designer',
          image:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 08, 2026',
      },
      {
        id: 'des_5',
        slug: 'ui-ux-design-with-figma',
        name: 'UI/UX Design with Figma',
        category: 'Graphic Design',
        description: "Design modern web and mobile interfaces with the industry's favorite tool.",
        heroImage:
          'https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'Introduction to UI/UX Design',
            body: 'Learn the difference between User Interface and User Experience design.',
          },
          {
            title: 'Figma Basics and Components',
            body: 'Master the workspace and learn how to create reusable design components.',
          },
          {
            title: 'Auto Layout and Responsiveness',
            body: 'Learn how to use Auto Layout to create designs that adapt to different screen sizes.',
          },
          {
            title: 'Prototyping and Interactions',
            body: 'Discover how to create clickable prototypes to test your user flows.',
          },
          {
            title: 'Design Systems in Figma',
            body: 'Learn how to build and maintain a consistent design system for large projects.',
          },
          {
            title: 'User Research and Wireframing',
            body: 'Master the early stages of design, focusing on user needs and layout structure.',
          },
          {
            title: 'Visual Design and Accessibility',
            body: 'Learn how to create beautiful interfaces that are usable by everyone.',
          },
          {
            title: 'Collaboration and Developer Handoff',
            body: 'Discover how to work with teams and prepare your designs for developers.',
          },
          {
            title: 'Designing for Mobile vs. Web',
            body: 'Understand the unique constraints and best practices for different platforms.',
          },
          {
            title: 'Building Your UX Portfolio',
            body: 'Tips for documenting your design process and showcasing your problem-solving skills.',
          },
        ],
        author: {
          name: 'UX Ursula',
          role: 'Product Designer',
          image:
            'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 07, 2026',
      },
      {
        id: 'des_6',
        slug: 'motion-graphics-with-after-effects',
        name: 'Motion Graphics with After Effects',
        category: 'Graphic Design',
        description: 'Bring your designs to life with animation and visual effects.',
        heroImage:
          'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'Introduction to Motion Design',
            body: 'Learn the 12 principles of animation and how to apply them to graphic design.',
          },
          {
            title: 'After Effects Workspace and Timeline',
            body: 'Master the interface and learn how to manage keyframes on the timeline.',
          },
          {
            title: 'Working with Shapes and Text',
            body: 'Learn how to animate vector shapes and create dynamic kinetic typography.',
          },
          {
            title: 'Masking and Track Mattes',
            body: 'Discover advanced techniques for revealing and hiding elements in your animations.',
          },
          {
            title: 'Using Effects and Presets',
            body: 'Learn how to add flair to your work with built-in After Effects plugins.',
          },
          {
            title: 'The Graph Editor for Smooth Motion',
            body: 'Master the graph editor to create natural and professional-looking motion curves.',
          },
          {
            title: '3D Layers and Cameras',
            body: 'Discover how to create depth and move through a 3D space in After Effects.',
          },
          {
            title: 'Compositing and Visual Effects',
            body: 'Learn how to combine multiple elements and add effects like fire, smoke, or light.',
          },
          {
            title: 'Expressions and Automation',
            body: 'Introduction to using simple code to automate complex animations.',
          },
          {
            title: 'Rendering and Compression',
            body: 'Learn the best settings for exporting your animations for web and social media.',
          },
        ],
        author: {
          name: 'Motion Max',
          role: 'Motion Designer',
          image:
            'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 06, 2026',
      },
      {
        id: 'des_7',
        slug: 'layout-design-with-indesign',
        name: 'Layout Design with InDesign',
        category: 'Graphic Design',
        description:
          'Master the art of multi-page document design for print and digital publishing.',
        heroImage:
          'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'Introduction to Desktop Publishing',
            body: 'Learn why InDesign is the industry standard for books, magazines, and reports.',
          },
          {
            title: 'Document Setup and Master Pages',
            body: 'Master the foundations of multi-page layouts and consistent design.',
          },
          {
            title: 'Working with Text and Paragraph Styles',
            body: 'Learn how to handle large amounts of text efficiently and professionally.',
          },
          {
            title: 'Grid Systems for Publication',
            body: 'Discover how to use complex grids for balanced and readable document design.',
          },
          {
            title: 'Placing Images and Graphics',
            body: 'Learn how to manage external assets and ensure high-quality output.',
          },
          {
            title: 'Table Design and Data Management',
            body: 'Master the creation of clean and organized tables for reports and data.',
          },
          {
            title: 'Interactive PDF and Digital Publishing',
            body: 'Learn how to add buttons, links, and navigation to your digital documents.',
          },
          {
            title: 'Preflight and Print Preparation',
            body: 'Discover how to avoid common print errors and prepare files for professional printing.',
          },
          {
            title: 'Designing for Magazines and Books',
            body: 'Understand the unique challenges and best practices for long-form publishing.',
          },
          {
            title: 'Exporting for EPUB and Kindle',
            body: 'Learn how to adapt your layouts for the world of e-readers.',
          },
        ],
        author: {
          name: 'Print Penny',
          role: 'Publication Designer',
          image:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 05, 2026',
      },
      {
        id: 'des_8',
        slug: 'digital-illustration-techniques',
        name: 'Digital Illustration Techniques',
        category: 'Graphic Design',
        description:
          'Learn how to create beautiful digital art using tablets and professional software.',
        heroImage:
          'https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'Getting Started with Digital Art',
            body: 'Overview of tablets (Wacom, iPad) and software (Procreate, Photoshop, Fresco).',
          },
          {
            title: 'Understanding Brushes and Settings',
            body: 'Learn how to customize brushes for different styles, from watercolor to ink.',
          },
          {
            title: 'Sketching and Composition',
            body: 'Master the early stages of illustration, focusing on form, gesture, and layout.',
          },
          {
            title: 'Light, Shadow, and Value',
            body: 'Learn how to create depth and volume in your digital paintings.',
          },
          {
            title: 'Mastering Digital Color',
            body: 'Discover techniques for choosing and blending colors for a professional look.',
          },
          {
            title: 'Texture and Rendering',
            body: 'Learn how to add realistic textures and details to your illustrations.',
          },
          {
            title: 'Character Design Fundamentals',
            body: 'Master the process of creating unique and expressive characters.',
          },
          {
            title: 'Environment and Background Design',
            body: 'Learn how to build immersive worlds for your characters to inhabit.',
          },
          {
            title: 'Finding Your Personal Style',
            body: 'Tips and exercises for developing a unique visual voice in your art.',
          },
          {
            title: 'Sharing and Selling Your Art',
            body: 'A guide to social media for artists and exploring platforms for selling prints and commissions.',
          },
        ],
        author: {
          name: 'Artie Digital',
          role: 'Concept Artist',
          image:
            'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 04, 2026',
      },
      {
        id: 'des_9',
        slug: 'advertising-and-marketing-design',
        name: 'Advertising and Marketing Design',
        category: 'Graphic Design',
        description: 'Learn how to create designs that grab attention and drive results.',
        heroImage:
          'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'Designing for Persuasion',
            body: 'Understand the principles of advertising and how design influences consumer decisions.',
          },
          {
            title: 'Social Media Graphics Masterclass',
            body: 'Master the specific sizes, styles, and strategies for Instagram, Facebook, and LinkedIn.',
          },
          {
            title: 'Email Marketing Design',
            body: 'Learn how to create engaging and responsive email templates that drive clicks.',
          },
          {
            title: 'Designing High-Converting Ad Banners',
            body: 'Master the art of the CTA (Call to Action) and visual hierarchy in digital ads.',
          },
          {
            title: 'Print Advertising and Billboards',
            body: 'Understand the unique challenges of designing for large-scale outdoor media.',
          },
          {
            title: 'Landing Page Design for Marketers',
            body: 'Learn how to design web pages that convert visitors into leads.',
          },
          {
            title: 'Content Marketing and Infographics',
            body: 'Master the art of presenting complex information in a visually engaging way.',
          },
          {
            title: 'Video and Motion for Social Media',
            body: 'Introduction to creating short, eye-catching videos for modern marketing.',
          },
          {
            title: 'A/B Testing Your Designs',
            body: 'Learn how to use data to improve the performance of your marketing materials.',
          },
          {
            title: 'Working with Marketing Teams',
            body: 'Discover how to collaborate effectively with copywriters and strategists.',
          },
        ],
        author: {
          name: 'Ad Adam',
          role: 'Art Director',
          image:
            'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 03, 2026',
      },
      {
        id: 'des_10',
        slug: 'packaging-and-3d-design',
        name: 'Packaging and 3D Design',
        category: 'Graphic Design',
        description:
          'Learn how to design for the physical world, from product boxes to 3D mockups.',
        heroImage:
          'https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'Introduction to Packaging Design',
            body: 'Understand the unique constraints of designing for 3D objects and different materials.',
          },
          {
            title: 'Understanding Dielines and Folds',
            body: 'Learn how to create accurate templates for boxes, labels, and pouches.',
          },
          {
            title: 'Typography and Hierarchy on Packaging',
            body: 'Master the art of making information clear and attractive on a shelf.',
          },
          {
            title: 'Sustainable Packaging Design',
            body: 'Discover the latest trends and materials for eco-friendly product packaging.',
          },
          {
            title: 'Creating 3D Mockups with Adobe Dimension',
            body: 'Learn how to visualize your packaging designs in a realistic 3D environment.',
          },
          {
            title: 'Materials and Finishes (Foil, Spot UV)',
            body: 'Master the technical aspects of adding premium finishes to your designs.',
          },
          {
            title: 'Shelf Presence and Competitor Analysis',
            body: 'Learn how to design packaging that stands out in a crowded market.',
          },
          {
            title: 'Label Design and Legal Requirements',
            body: 'Understand the mandatory information required on packaging for different industries.',
          },
          {
            title: 'Working with Manufacturers',
            body: 'Discover how to prepare files and communicate with printers for physical production.',
          },
          {
            title: 'The Future of Packaging (AR/Interactive)',
            body: 'Explore how technology is changing the way we interact with physical products.',
          },
        ],
        author: {
          name: 'Pack Paul',
          role: 'Packaging Specialist',
          image:
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 02, 2026',
      },
    ],
  },
  'digital-marketing': {
    id: 'cat_marketing',
    title: 'Digital Marketing',
    slug: 'digital-marketing',
    description: 'Master the art of online growth and build a powerful digital presence.',
    resources: [
      {
        id: 'mark_1',
        slug: 'social-media-marketing-mastery',
        name: 'Social Media Marketing Mastery',
        category: 'Digital Marketing',
        description:
          'Learn how to build, engage, and convert audiences across all major social platforms.',
        heroImage:
          'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'The Social Media Landscape in 2026',
            body: 'Understand the current state of social media and which platforms are best for your goals.',
          },
          {
            title: 'Defining Your Target Audience',
            body: 'Learn how to create detailed buyer personas and find where they hang out online.',
          },
          {
            title: 'Content Strategy and Planning',
            body: 'Master the art of creating a content calendar that balances value, engagement, and sales.',
          },
          {
            title: 'Instagram and TikTok Growth Tactics',
            body: 'Discover the latest algorithms and trends for short-form video and visual storytelling.',
          },
          {
            title: 'LinkedIn for Professional Branding',
            body: 'Learn how to leverage LinkedIn for B2B marketing and personal thought leadership.',
          },
          {
            title: 'Community Management and Engagement',
            body: 'Master the techniques for building a loyal community and handling customer feedback.',
          },
          {
            title: 'Social Media Advertising Basics',
            body: 'Introduction to running paid ad campaigns on Meta, TikTok, and LinkedIn.',
          },
          {
            title: 'Influencer Marketing Strategies',
            body: 'Learn how to find and collaborate with influencers to expand your reach.',
          },
          {
            title: 'Analytics and ROI Tracking',
            body: 'Discover how to measure the success of your social media efforts and adjust your strategy.',
          },
          {
            title: 'Social Media Tools and Automation',
            body: 'Overview of the best tools for scheduling, monitoring, and analyzing social media.',
          },
        ],
        author: {
          name: 'Mark Digital',
          role: 'Marketing Consultant',
          image:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 10, 2026',
      },
      {
        id: 'mark_2',
        slug: 'search-engine-optimization-seo',
        name: 'Search Engine Optimization (SEO)',
        category: 'Digital Marketing',
        description:
          'Learn how to rank higher on Google and drive organic traffic to your website.',
        heroImage:
          'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'How Search Engines Work',
            body: 'Understand crawling, indexing, and the key factors Google uses to rank websites.',
          },
          {
            title: 'Keyword Research and Strategy',
            body: 'Learn how to find high-value keywords that your audience is actually searching for.',
          },
          {
            title: 'On-Page SEO Optimization',
            body: 'Master the art of optimizing titles, headings, and content for search engines.',
          },
          {
            title: 'Technical SEO Fundamentals',
            body: 'Learn about site speed, mobile-friendliness, and ensuring search engines can crawl your site.',
          },
          {
            title: 'Content Marketing for SEO',
            body: 'Discover how to create high-quality content that naturally attracts links and rankings.',
          },
          {
            title: 'Link Building and Authority',
            body: "Master ethical techniques for building backlinks and increasing your site's authority.",
          },
          {
            title: 'Local SEO for Small Businesses',
            body: 'Learn how to optimize your presence for local searches and Google Business Profile.',
          },
          {
            title: 'SEO Audits and Performance Tracking',
            body: 'Discover how to use tools like Google Search Console and Ahrefs to track your progress.',
          },
          {
            title: 'The Future of SEO (AI and Voice Search)',
            body: 'Understand how AI and voice search are changing the way people find information.',
          },
          {
            title: 'Building an SEO Career',
            body: 'Tips and resources for becoming a professional SEO specialist.',
          },
        ],
        author: {
          name: 'Sara Search',
          role: 'SEO Specialist',
          image:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 09, 2026',
      },
      {
        id: 'mark_3',
        slug: 'content-marketing-strategy',
        name: 'Content Marketing Strategy',
        category: 'Digital Marketing',
        description:
          'Learn how to create and distribute valuable content to attract and retain customers.',
        heroImage:
          'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'The Power of Content Marketing',
            body: 'Understand why content is the foundation of modern digital marketing.',
          },
          {
            title: 'Creating a Content Mission Statement',
            body: 'Learn how to define your "why" and ensure your content serves your audience.',
          },
          {
            title: 'Blogging and Long-Form Content',
            body: 'Master the art of writing engaging articles that provide deep value.',
          },
          {
            title: 'Video Marketing for Brands',
            body: "Learn how to leverage YouTube and social video to tell your brand's story.",
          },
          {
            title: 'Podcasting and Audio Content',
            body: 'Discover how to start and grow a podcast that builds a loyal following.',
          },
          {
            title: 'Visual Content and Infographics',
            body: 'Learn how to use imagery and data visualization to make your content more shareable.',
          },
          {
            title: 'Content Distribution and Promotion',
            body: 'Master the art of getting your content in front of the right people.',
          },
          {
            title: 'Repurposing Content for Efficiency',
            body: 'Learn how to turn one piece of content into multiple assets for different platforms.',
          },
          {
            title: 'Measuring Content Performance',
            body: 'Discover the key metrics for tracking engagement and conversions from your content.',
          },
          {
            title: 'Building a Content Marketing Team',
            body: 'Tips for hiring and managing writers, designers, and strategists.',
          },
        ],
        author: {
          name: 'Connie Content',
          role: 'Content Strategist',
          image:
            'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 08, 2026',
      },
      {
        id: 'mark_4',
        slug: 'email-marketing-masterclass',
        name: 'Email Marketing Masterclass',
        category: 'Digital Marketing',
        description: 'Learn how to build an email list and drive sales with automated campaigns.',
        heroImage:
          'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'Why Email is Still King',
            body: 'Understand the high ROI of email marketing and its importance in the customer journey.',
          },
          {
            title: 'Building a Quality Email List',
            body: 'Learn ethical strategies for attracting subscribers using lead magnets and opt-in forms.',
          },
          {
            title: 'Choosing an Email Marketing Platform',
            body: 'Overview of popular tools like Mailchimp, ConvertKit, and Klaviyo.',
          },
          {
            title: 'Crafting High-Converting Subject Lines',
            body: 'Master the art of getting your emails opened in a crowded inbox.',
          },
          {
            title: 'Email Design and Copywriting',
            body: 'Learn how to write and design emails that drive clicks and sales.',
          },
          {
            title: 'Email Automation and Drip Campaigns',
            body: 'Discover how to set up automated sequences that nurture leads on autopilot.',
          },
          {
            title: 'Segmentation and Personalization',
            body: 'Learn how to send the right message to the right person at the right time.',
          },
          {
            title: 'A/B Testing Your Email Campaigns',
            body: 'Master the techniques for improving your open and click-through rates.',
          },
          {
            title: 'Email Deliverability and Spam Filters',
            body: "Learn how to ensure your emails actually reach your subscribers' inboxes.",
          },
          {
            title: 'Analytics and Performance Tracking',
            body: 'Discover how to measure the success of your email marketing efforts.',
          },
        ],
        author: {
          name: 'Emma Mail',
          role: 'Email Marketer',
          image:
            'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 07, 2026',
      },
      {
        id: 'mark_5',
        slug: 'pay-per-click-ppc-advertising',
        name: 'Pay-Per-Click (PPC) Advertising',
        category: 'Digital Marketing',
        description: 'Master Google Ads and Bing Ads to drive targeted traffic and leads.',
        heroImage:
          'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'Introduction to Search Advertising',
            body: 'Understand the PPC model and how the Google Ads auction works.',
          },
          {
            title: 'Setting Up Your Google Ads Account',
            body: 'Step-by-step guide to configuring your account for success.',
          },
          {
            title: 'Keyword Match Types and Strategy',
            body: 'Learn how to use Broad, Phrase, and Exact match to control your ad spend.',
          },
          {
            title: 'Writing Compelling Ad Copy',
            body: 'Master the art of writing headlines and descriptions that stand out.',
          },
          {
            title: 'Understanding Quality Score',
            body: 'Learn the factors that impact your ad rank and how to lower your cost per click.',
          },
          {
            title: 'Display Advertising and Remarketing',
            body: 'Discover how to show ads to people who have already visited your website.',
          },
          {
            title: 'Shopping Ads for E-commerce',
            body: 'Master the specific strategies for promoting physical products on Google.',
          },
          {
            title: 'Bidding Strategies and Budget Management',
            body: 'Learn how to optimize your bids for clicks, conversions, or impressions.',
          },
          {
            title: 'Conversion Tracking and Attribution',
            body: 'Discover how to accurately measure the ROI of your PPC campaigns.',
          },
          {
            title: 'PPC Audits and Optimization',
            body: 'Learn how to identify and fix issues in your existing ad campaigns.',
          },
        ],
        author: {
          name: 'Paul PPC',
          role: 'Ad Specialist',
          image:
            'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 06, 2026',
      },
      {
        id: 'mark_6',
        slug: 'data-analytics-for-marketers',
        name: 'Data Analytics for Marketers',
        category: 'Digital Marketing',
        description: 'Learn how to use data to make better marketing decisions and drive growth.',
        heroImage:
          'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'The Importance of Data in Marketing',
            body: 'Understand how data-driven decisions lead to better results and higher ROI.',
          },
          {
            title: 'Introduction to Google Analytics 4 (GA4)',
            body: 'Master the new industry standard for website and app tracking.',
          },
          {
            title: 'Setting Up Goals and Events',
            body: 'Learn how to track the actions that matter most to your business.',
          },
          {
            title: 'Understanding the Customer Journey',
            body: 'Discover how to use data to map out the path from first touch to conversion.',
          },
          {
            title: 'A/B Testing and Experimentation',
            body: 'Learn how to run controlled tests to improve your website and campaigns.',
          },
          {
            title: 'Data Visualization and Dashboards',
            body: 'Master tools like Looker Studio to create clear and actionable reports.',
          },
          {
            title: 'Attribution Modeling Basics',
            body: 'Learn how to give credit to the different marketing channels that drive sales.',
          },
          {
            title: 'Privacy and Ethics in Data',
            body: 'Understand the impact of GDPR, CCPA, and cookie changes on marketing data.',
          },
          {
            title: 'Predictive Analytics and AI',
            body: 'Discover how to use data to forecast future trends and customer behavior.',
          },
          {
            title: 'Building a Data-Driven Culture',
            body: 'Tips for using data to communicate with stakeholders and drive business growth.',
          },
        ],
        author: {
          name: 'Ana Lytics',
          role: 'Marketing Analyst',
          image:
            'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 05, 2026',
      },
      {
        id: 'mark_7',
        slug: 'affiliate-marketing-for-beginners',
        name: 'Affiliate Marketing for Beginners',
        category: 'Digital Marketing',
        description: "Learn how to earn commissions by promoting other people's products.",
        heroImage:
          'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'How Affiliate Marketing Works',
            body: 'Understand the relationship between the merchant, the affiliate, and the customer.',
          },
          {
            title: 'Finding Profitable Niches',
            body: 'Learn how to choose a niche with high demand and low competition.',
          },
          {
            title: 'Choosing the Right Affiliate Programs',
            body: 'Overview of platforms like Amazon Associates, ShareASale, and Impact.',
          },
          {
            title: 'Building an Affiliate Website',
            body: 'Learn how to create a site that provides value and drives affiliate clicks.',
          },
          {
            title: 'Content Strategies for Affiliates',
            body: 'Master the art of writing reviews, comparisons, and "best of" guides.',
          },
          {
            title: 'Disclosures and Ethical Marketing',
            body: 'Learn about the legal requirements for disclosing affiliate relationships.',
          },
          {
            title: 'Driving Traffic to Your Affiliate Links',
            body: 'Discover how to use SEO, social media, and email to reach your audience.',
          },
          {
            title: 'Scaling Your Affiliate Business',
            body: 'Tips for growing your income through outsourcing and multiple sites.',
          },
          {
            title: 'Tracking and Optimizing Commissions',
            body: 'Learn how to identify which products and pages are driving the most revenue.',
          },
          {
            title: 'The Future of Affiliate Marketing',
            body: 'Understand how changes in technology and consumer behavior are impacting the industry.',
          },
        ],
        author: {
          name: 'Affiliate Al',
          role: 'Full-Time Affiliate',
          image:
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 04, 2026',
      },
      {
        id: 'mark_8',
        slug: 'conversion-rate-optimization-cro',
        name: 'Conversion Rate Optimization (CRO)',
        category: 'Digital Marketing',
        description: 'Learn how to turn more website visitors into paying customers.',
        heroImage:
          'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'The Fundamentals of CRO',
            body: 'Understand why increasing your conversion rate is often better than increasing traffic.',
          },
          {
            title: 'User Research and Heatmaps',
            body: 'Learn how to use tools like Hotjar to see how people interact with your site.',
          },
          {
            title: 'Identifying Friction Points',
            body: 'Discover the common reasons why people leave your website without converting.',
          },
          {
            title: 'Mastering the Landing Page',
            body: 'Learn the key elements of high-converting pages, from headlines to forms.',
          },
          {
            title: 'Psychology and Persuasion in Design',
            body: 'Discover how to use social proof, scarcity, and urgency to drive action.',
          },
          {
            title: 'A/B Testing Frameworks',
            body: "Learn how to design and run scientific tests to improve your site's performance.",
          },
          {
            title: 'Optimizing the Checkout Process',
            body: 'Master the art of reducing cart abandonment and simplifying the path to purchase.',
          },
          {
            title: 'Mobile Optimization for Conversions',
            body: 'Learn how to ensure your site converts just as well on phones as on desktops.',
          },
          {
            title: 'Copywriting for Conversions',
            body: 'Master the art of writing words that persuade and drive action.',
          },
          {
            title: 'Building a CRO Strategy',
            body: 'Tips for creating a continuous cycle of testing and improvement.',
          },
        ],
        author: {
          name: 'Connor Conv',
          role: 'CRO Specialist',
          image:
            'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 03, 2026',
      },
      {
        id: 'mark_9',
        slug: 'influencer-and-community-marketing',
        name: 'Influencer and Community Marketing',
        category: 'Digital Marketing',
        description:
          'Learn how to build trust and reach new audiences through powerful partnerships.',
        heroImage:
          'https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'The Rise of the Creator Economy',
            body: 'Understand the shift from traditional advertising to trust-based marketing.',
          },
          {
            title: 'Finding the Right Influencers',
            body: 'Learn how to identify influencers whose audience aligns with your brand.',
          },
          {
            title: 'Micro vs. Macro Influencers',
            body: 'Discover the pros and cons of working with creators of different sizes.',
          },
          {
            title: 'Negotiating Influencer Deals',
            body: 'Master the art of setting expectations and agreeing on fair compensation.',
          },
          {
            title: 'Building Long-Term Brand Ambassadors',
            body: 'Learn how to move beyond one-off posts to powerful, long-term partnerships.',
          },
          {
            title: 'Measuring Influencer Marketing ROI',
            body: 'Discover how to track the success of your campaigns using unique links and codes.',
          },
          {
            title: 'Introduction to Community Building',
            body: 'Learn how to create a space where your customers can connect and grow.',
          },
          {
            title: 'Managing Online Groups and Forums',
            body: 'Master the techniques for moderating and engaging a digital community.',
          },
          {
            title: 'Turning Customers into Advocates',
            body: 'Learn how to leverage your community to drive organic growth and referrals.',
          },
          {
            title: 'Legal and Ethical Considerations',
            body: 'Understand the FTC guidelines and the importance of transparency in influencer marketing.',
          },
        ],
        author: {
          name: 'Inara Influencer',
          role: 'Partnership Manager',
          image:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 02, 2026',
      },
      {
        id: 'mark_10',
        slug: 'digital-marketing-strategy-and-planning',
        name: 'Digital Marketing Strategy and Planning',
        category: 'Digital Marketing',
        description:
          'Learn how to tie all the pieces together into a cohesive and effective marketing plan.',
        heroImage:
          'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'The Digital Marketing Funnel',
            body: 'Understand the stages of awareness, consideration, and conversion.',
          },
          {
            title: 'Setting SMART Marketing Goals',
            body: 'Learn how to define clear, measurable, and achievable objectives for your business.',
          },
          {
            title: 'Competitive Analysis and Market Research',
            body: 'Discover how to find your edge in a crowded digital landscape.',
          },
          {
            title: 'Allocating Your Marketing Budget',
            body: 'Learn how to distribute your funds across different channels for maximum impact.',
          },
          {
            title: 'Creating an Omnichannel Strategy',
            body: 'Master the art of providing a consistent experience across all digital touchpoints.',
          },
          {
            title: 'The Role of Branding in Digital Marketing',
            body: 'Understand how your visual identity and voice impact your marketing success.',
          },
          {
            title: 'Building a Marketing Technology Stack',
            body: 'Learn how to choose and integrate the tools you need to run your business.',
          },
          {
            title: 'Reporting and Communicating Results',
            body: 'Master the techniques for presenting data and insights to stakeholders.',
          },
          {
            title: 'Staying Ahead of Digital Trends',
            body: 'Learn how to keep your skills sharp and adapt to a constantly changing industry.',
          },
          {
            title: 'Developing Your Marketing Career Plan',
            body: 'Tips for setting long-term goals and building a successful career in digital marketing.',
          },
        ],
        author: {
          name: 'Strat Sam',
          role: 'Chief Marketing Officer',
          image:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 01, 2026',
      },
    ],
  },
  'financial-literacy': {
    id: 'cat_finance',
    title: 'Financial Literacy',
    slug: 'financial-literacy',
    description: 'Master your money, build wealth, and secure your financial future.',
    resources: [
      {
        id: 'fin_1',
        slug: 'personal-finance-mastery-for-students',
        name: 'Personal Finance Mastery for Students',
        category: 'Financial Literacy',
        description: 'Learn the essentials of budgeting, saving, and investing while in school.',
        heroImage:
          'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'The Importance of Financial Literacy',
            body: 'Understand why managing your money early is the key to long-term freedom.',
          },
          {
            title: 'Creating Your First Student Budget',
            body: 'Learn how to track your income and expenses using simple tools and apps.',
          },
          {
            title: 'The Power of Compound Interest',
            body: 'Discover why starting to save even small amounts now can lead to massive wealth later.',
          },
          {
            title: 'Understanding Credit and Debt',
            body: 'Learn how credit works and how to avoid the common traps of student loans and credit cards.',
          },
          {
            title: 'Building an Emergency Fund',
            body: 'Discover how to save for the unexpected and create a financial safety net.',
          },
          {
            title: 'Introduction to Investing',
            body: 'Learn the basics of stocks, bonds, and mutual funds for beginners.',
          },
          {
            title: 'Saving on Student Essentials',
            body: 'Master the art of stretching your money on food, books, and housing.',
          },
          {
            title: 'Financial Goal Setting',
            body: 'Learn how to define and achieve your short-term and long-term financial objectives.',
          },
          {
            title: 'Taxes and Financial Responsibility',
            body: 'A simple guide to understanding your tax obligations as a student.',
          },
          {
            title: 'Resources for Continued Learning',
            body: 'Overview of the best books, podcasts, and websites for improving your financial knowledge.',
          },
        ],
        author: {
          name: 'Finance Fred',
          role: 'Financial Advisor',
          image:
            'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 09, 2026',
      },
      {
        id: 'fin_2',
        slug: 'investing-for-beginners',
        name: 'Investing for Beginners',
        category: 'Financial Literacy',
        description: 'Learn how to put your money to work and build a diversified portfolio.',
        heroImage:
          'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'What is Investing?',
            body: 'Understand the difference between saving and investing and why you need both.',
          },
          {
            title: 'Risk vs. Reward',
            body: 'Learn how to balance the potential for gain with the possibility of loss.',
          },
          {
            title: 'Understanding the Stock Market',
            body: 'A simple guide to how companies go public and how you can own a piece of them.',
          },
          {
            title: 'Bonds and Fixed Income',
            body: 'Learn about safer investment options and how they fit into a portfolio.',
          },
          {
            title: 'Mutual Funds and ETFs',
            body: 'Discover how to diversify your investments easily using professionally managed funds.',
          },
          {
            title: 'Index Fund Investing',
            body: 'Learn the "lazy" way to invest that often beats the professionals.',
          },
          {
            title: 'The Role of Real Estate',
            body: 'Introduction to investing in physical property and REITs.',
          },
          {
            title: 'Cryptocurrency and Alternative Assets',
            body: 'Understand the risks and rewards of newer investment classes.',
          },
          {
            title: 'Developing an Investment Plan',
            body: 'Learn how to choose the right mix of assets based on your goals and timeline.',
          },
          {
            title: 'Managing Your Portfolio',
            body: 'Tips for rebalancing and staying the course during market ups and downs.',
          },
        ],
        author: {
          name: 'Ivy Invest',
          role: 'Portfolio Manager',
          image:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 08, 2026',
      },
      {
        id: 'fin_3',
        slug: 'mastering-debt-and-credit',
        name: 'Mastering Debt and Credit',
        category: 'Financial Literacy',
        description: 'Learn how to manage loans and build a stellar credit score.',
        heroImage:
          'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'How Credit Scores Work',
            body: 'Understand the factors that impact your score and why it matters for your future.',
          },
          {
            title: 'Building Credit from Scratch',
            body: 'Tips for students and young adults to establish a positive credit history.',
          },
          {
            title: 'Managing Student Loans',
            body: 'A guide to understanding interest rates, repayment plans, and forgiveness options.',
          },
          {
            title: 'The Dangers of Credit Card Debt',
            body: 'Learn how to use credit cards responsibly and avoid high-interest traps.',
          },
          {
            title: 'Strategies for Debt Repayment',
            body: 'Master the "Snowball" and "Avalanche" methods for paying off debt quickly.',
          },
          {
            title: 'Understanding Interest Rates',
            body: 'Learn how APR and compounding impact the total cost of your loans.',
          },
          {
            title: 'Dealing with Debt Collectors',
            body: 'Understand your rights and how to handle difficult financial situations.',
          },
          {
            title: 'Credit Monitoring and Protection',
            body: 'Learn how to spot identity theft and errors on your credit report.',
          },
          {
            title: 'The Impact of Debt on Mental Health',
            body: 'Strategies for managing the stress and anxiety that often come with financial burden.',
          },
          {
            title: 'Living Debt-Free',
            body: "Tips for building a lifestyle that doesn't rely on borrowed money.",
          },
        ],
        author: {
          name: 'David Debt',
          role: 'Credit Counselor',
          image:
            'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 07, 2026',
      },
      {
        id: 'fin_4',
        slug: 'budgeting-for-the-real-world',
        name: 'Budgeting for the Real World',
        category: 'Financial Literacy',
        description: 'Learn how to manage your money after graduation and beyond.',
        heroImage:
          'https://images.unsplash.com/photo-1554224155-169745427562?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'The 50/30/20 Rule',
            body: 'A simple framework for allocating your income between needs, wants, and savings.',
          },
          {
            title: 'Zero-Based Budgeting',
            body: 'Learn how to give every dollar a job and eliminate wasteful spending.',
          },
          {
            title: 'Budgeting for Big Purchases',
            body: 'How to save for a car, a home, or a dream vacation without going into debt.',
          },
          {
            title: 'Managing Irregular Income',
            body: 'Tips for freelancers and gig workers to maintain a consistent budget.',
          },
          {
            title: 'Financial Planning for Couples',
            body: 'How to talk about money and manage shared expenses with a partner.',
          },
          {
            title: 'Emergency Funds and Safety Nets',
            body: "Learn how much you really need to save for life's unexpected events.",
          },
          {
            title: 'Automating Your Finances',
            body: 'Discover how to use technology to save and invest without thinking about it.',
          },
          {
            title: 'Cutting Expenses Without Sacrificing Joy',
            body: 'Tips for finding "hidden" money in your current spending habits.',
          },
          {
            title: 'The Role of Insurance',
            body: 'Understand why health, life, and disability insurance are critical for your financial plan.',
          },
          {
            title: 'Reviewing and Adjusting Your Budget',
            body: 'Learn how to keep your financial plan relevant as your life changes.',
          },
        ],
        author: {
          name: 'Bella Budget',
          role: 'Financial Coach',
          image:
            'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 06, 2026',
      },
      {
        id: 'fin_5',
        slug: 'retirement-planning-101',
        name: 'Retirement Planning 101',
        category: 'Financial Literacy',
        description: "Learn why it's never too early to start saving for your golden years.",
        heroImage:
          'https://images.unsplash.com/photo-1473186578172-c141e6798ee4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'The Concept of Financial Independence',
            body: 'Understand the "FIRE" movement and what it takes to stop working for money.',
          },
          {
            title: 'Understanding 401(k)s and IRAs',
            body: 'A guide to tax-advantaged retirement accounts and how to choose the best one.',
          },
          {
            title: 'The Power of Employer Matching',
            body: 'Learn why you should never leave "free money" on the table at your job.',
          },
          {
            title: 'Social Security and Pensions',
            body: 'Understand the role of government and corporate plans in your retirement.',
          },
          {
            title: 'How Much Do You Really Need?',
            body: 'Learn how to calculate your retirement number based on your desired lifestyle.',
          },
          {
            title: 'The Impact of Inflation',
            body: 'Understand why your money will buy less in the future and how to protect against it.',
          },
          {
            title: 'Asset Allocation for the Long Term',
            body: 'Learn how to shift your investments as you get closer to retirement.',
          },
          {
            title: 'Withdrawal Strategies and the 4% Rule',
            body: 'Learn how to safely spend your savings without running out of money.',
          },
          {
            title: 'Estate Planning Basics',
            body: 'Introduction to wills, trusts, and ensuring your assets go to the right people.',
          },
          {
            title: 'The Psychological Aspect of Retirement',
            body: 'How to prepare for the transition from a career to a life of leisure.',
          },
        ],
        author: {
          name: 'Old Man Wealth',
          role: 'Retirement Specialist',
          image:
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 05, 2026',
      },
      {
        id: 'fin_6',
        slug: 'entrepreneurial-finance',
        name: 'Entrepreneurial Finance',
        category: 'Financial Literacy',
        description: 'Learn how to manage the finances of a small business or startup.',
        heroImage:
          'https://images.unsplash.com/photo-1454165833767-027ffea9e77b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'Separating Personal and Business Finances',
            body: 'Learn why you must have separate accounts and how to pay yourself.',
          },
          {
            title: 'Understanding Cash Flow',
            body: 'Master the difference between profit and cash and why it matters for survival.',
          },
          {
            title: 'Bookkeeping Basics for Founders',
            body: 'A guide to tracking income, expenses, and staying organized for tax season.',
          },
          {
            title: 'Pricing Your Products and Services',
            body: 'Learn how to calculate your margins and ensure your business is profitable.',
          },
          {
            title: 'Funding Your Business',
            body: 'Overview of bootstrapping, loans, and seeking outside investment.',
          },
          {
            title: 'Managing Business Debt',
            body: 'Learn how to use leverage responsibly to grow your company.',
          },
          {
            title: 'Tax Obligations for Small Businesses',
            body: 'Understand your responsibilities for income, sales, and payroll taxes.',
          },
          {
            title: 'Budgeting for Growth',
            body: 'How to plan for hiring, marketing, and expanding your operations.',
          },
          {
            title: 'Financial Statements 101',
            body: 'Learn how to read and use Profit & Loss, Balance Sheets, and Cash Flow statements.',
          },
          {
            title: 'Exit Strategies and Valuation',
            body: 'Understand how businesses are valued and how to prepare for a potential sale.',
          },
        ],
        author: {
          name: 'Biz Beth',
          role: 'Business Consultant',
          image:
            'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 04, 2026',
      },
      {
        id: 'fin_7',
        slug: 'the-psychology-of-money',
        name: 'The Psychology of Money',
        category: 'Financial Literacy',
        description: 'Explore the emotional and mental aspects of how we spend, save, and invest.',
        heroImage:
          'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'Your Money Script',
            body: 'Understand the deeply held beliefs about money you learned in childhood.',
          },
          {
            title: 'Emotional Spending and Its Triggers',
            body: "Learn why we buy things we don't need and how to break the cycle.",
          },
          {
            title: 'The Fear of Missing Out (FOMO) in Investing',
            body: 'How to stay rational when everyone else is getting rich off the latest trend.',
          },
          {
            title: 'Scarcity vs. Abundance Mindset',
            body: 'Discover how your perspective on money impacts your ability to build wealth.',
          },
          {
            title: 'Financial Anxiety and Stress Management',
            body: 'Strategies for coping with the mental burden of financial instability.',
          },
          {
            title: 'The Happiness of Spending',
            body: 'Learn how to use your money to buy experiences and time rather than just things.',
          },
          {
            title: 'Dealing with Financial Shame',
            body: 'How to move past past mistakes and start fresh on your financial journey.',
          },
          {
            title: 'Communicating About Money',
            body: 'Tips for having healthy financial conversations with family and friends.',
          },
          {
            title: 'Setting Boundaries with Money',
            body: 'Learn how to say "no" to financial requests that jeopardize your own goals.',
          },
          {
            title: 'The Goal of Financial Freedom',
            body: 'Redefining success as having control over your time rather than just a high net worth.',
          },
        ],
        author: {
          name: 'Mindful Mike',
          role: 'Financial Therapist',
          image:
            'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 03, 2026',
      },
      {
        id: 'fin_8',
        slug: 'real-estate-investing-basics',
        name: 'Real Estate Investing Basics',
        category: 'Financial Literacy',
        description: 'Learn how to build wealth through property and land.',
        heroImage:
          'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'Why Invest in Real Estate?',
            body: 'Understand the benefits of cash flow, appreciation, and tax advantages.',
          },
          {
            title: 'Residential vs. Commercial Property',
            body: 'Learn the differences between owning homes and owning office or retail space.',
          },
          {
            title: 'House Hacking for Beginners',
            body: 'Discover how to live for free by renting out parts of your own home.',
          },
          {
            title: 'Understanding Mortgages and Financing',
            body: 'A guide to how banks lend money for property and the importance of interest rates.',
          },
          {
            title: 'The Role of a Landlord',
            body: 'Learn the responsibilities of managing tenants and maintaining properties.',
          },
          {
            title: 'REITs: Investing Without Owning Property',
            body: 'Discover how to get exposure to real estate through the stock market.',
          },
          {
            title: 'Flipping Houses for Profit',
            body: 'Learn the risks and rewards of buying, renovating, and selling properties.',
          },
          {
            title: 'Short-Term Rentals (Airbnb) Strategy',
            body: 'Master the art of high-yield property management in the vacation market.',
          },
          {
            title: 'Real Estate Taxes and Legalities',
            body: 'Understand property taxes, depreciation, and the legal aspects of ownership.',
          },
          {
            title: 'Building a Real Estate Portfolio',
            body: 'Tips for scaling from one property to many and achieving financial freedom.',
          },
        ],
        author: {
          name: 'Landlord Laura',
          role: 'Real Estate Investor',
          image:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 02, 2026',
      },
      {
        id: 'fin_9',
        slug: 'advanced-investing-strategies',
        name: 'Advanced Investing Strategies',
        category: 'Financial Literacy',
        description:
          'Take your investment knowledge to the next level with sophisticated techniques.',
        heroImage:
          'https://images.unsplash.com/photo-1611974717525-58a3619179c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'Value vs. Growth Investing',
            body: 'Understand the two main philosophies of picking stocks and when to use each.',
          },
          {
            title: 'Technical vs. Fundamental Analysis',
            body: 'Learn how to evaluate companies and time your entries into the market.',
          },
          {
            title: 'Introduction to Options and Derivatives',
            body: 'Understand how to use leverage and hedge your portfolio against losses.',
          },
          {
            title: 'Short Selling and Market Speculation',
            body: 'Learn the high-risk techniques used by professional traders.',
          },
          {
            title: 'Investing in Emerging Markets',
            body: 'Discover the opportunities and risks of putting money into developing economies.',
          },
          {
            title: 'Venture Capital and Angel Investing',
            body: 'Learn how to invest in early-stage startups and potentially reap massive rewards.',
          },
          {
            title: 'Tax-Loss Harvesting',
            body: 'Discover how to use your investment losses to lower your tax bill.',
          },
          {
            title: 'The Role of Hedge Funds and Private Equity',
            body: "Understand how the world's largest investors manage their capital.",
          },
          {
            title: 'Algorithmic and High-Frequency Trading',
            body: 'A look at how computers are changing the landscape of modern markets.',
          },
          {
            title: 'Developing a Disciplined Investment Process',
            body: 'Tips for removing emotion from your decisions and sticking to your plan.',
          },
        ],
        author: {
          name: 'Quant Quinn',
          role: 'Investment Strategist',
          image:
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 01, 2026',
      },
      {
        id: 'fin_10',
        slug: 'the-future-of-finance-fintech-and-crypto',
        name: 'The Future of Finance: Fintech and Crypto',
        category: 'Financial Literacy',
        description: 'Explore how technology is revolutionizing the way we handle money.',
        heroImage:
          'https://images.unsplash.com/photo-1621761191319-c6fb62004040?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'What is Fintech?',
            body: 'Understand the rise of digital banks, payment apps, and automated advisors.',
          },
          {
            title: 'Introduction to Blockchain Technology',
            body: 'Learn the foundation of decentralized finance and why it matters.',
          },
          {
            title: 'Bitcoin and the History of Digital Currency',
            body: "Discover the origin and purpose of the world's first cryptocurrency.",
          },
          {
            title: 'Ethereum and Smart Contracts',
            body: 'Learn how programmable money is changing the world of legal and financial agreements.',
          },
          {
            title: 'Decentralized Finance (DeFi) Explained',
            body: 'Understand how people are borrowing, lending, and trading without banks.',
          },
          {
            title: 'NFTs and Digital Ownership',
            body: 'Learn about the technology behind digital art and collectibles.',
          },
          {
            title: 'The Risks of Cryptocurrency',
            body: 'A sober look at volatility, scams, and the importance of security.',
          },
          {
            title: 'Central Bank Digital Currencies (CBDCs)',
            body: 'How governments are responding to the rise of private digital money.',
          },
          {
            title: 'Investing in the Fintech Sector',
            body: 'Learn how to get exposure to the companies building the future of finance.',
          },
          {
            title: 'Preparing for a Digital Financial World',
            body: 'Tips for staying relevant and secure as money continues to evolve.',
          },
        ],
        author: {
          name: 'Crypto Chris',
          role: 'Fintech Analyst',
          image:
            'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Jan 31, 2026',
      },
    ],
  },
  'student-productivity': {
    id: 'cat_productivity',
    title: 'Student Productivity',
    slug: 'student-productivity',
    description:
      'Master your time, boost focus, and achieve academic excellence with proven productivity systems.',
    resources: [
      {
        id: 'prod_1',
        slug: 'time-management-for-students',
        name: 'Time Management for Students',
        category: 'Student Productivity',
        description:
          'Learn how to balance your academic workload, social life, and personal projects.',
        heroImage:
          'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'The Importance of Time Management',
            body: 'Understand why managing your time is the foundation of student success.',
          },
          {
            title: 'The Eisenhower Matrix',
            body: 'Learn how to prioritize tasks based on their urgency and importance.',
          },
          {
            title: 'Time Blocking for Deep Work',
            body: 'Discover how to schedule your day in dedicated blocks for maximum focus.',
          },
          {
            title: 'Eliminating Common Distractions',
            body: 'Practical tips for dealing with phones, social media, and noise.',
          },
          {
            title: 'The Power of a Daily Routine',
            body: 'How to build habits that make productivity feel automatic.',
          },
          {
            title: 'Overcoming Academic Procrastination',
            body: 'Learn the psychological triggers of delay and how to beat them.',
          },
          {
            title: 'Effective Task List Management',
            body: 'Discover how to create to-do lists that actually get finished.',
          },
          {
            title: 'The Role of Sleep in Productivity',
            body: 'Understand why rest is just as important as work for your brain.',
          },
          {
            title: 'Batching Similar Tasks',
            body: 'Learn how to group related activities to minimize context switching.',
          },
          {
            title: 'Reviewing and Refining Your System',
            body: 'Tips for tracking your progress and making adjustments over time.',
          },
        ],
        author: {
          name: 'Dr. Time',
          role: 'Efficiency Expert',
          image:
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 12, 2026',
      },
      {
        id: 'prod_2',
        slug: 'mastering-focus-and-concentration',
        name: 'Mastering Focus and Concentration',
        category: 'Student Productivity',
        description:
          'Learn how to train your brain for deep concentration in a world of distractions.',
        heroImage:
          'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'The Science of Focus',
            body: 'Understand how your brain pays attention and what drains its energy.',
          },
          {
            title: 'The Pomodoro Technique',
            body: 'Learn how to use timed intervals to maintain high levels of focus.',
          },
          {
            title: 'Creating a Distraction-Free Environment',
            body: 'How to optimize your physical and digital space for deep work.',
          },
          {
            title: 'Meditation for Concentration',
            body: 'Simple exercises to train your "focus muscle" and stay present.',
          },
          {
            title: 'Digital Minimalism for Students',
            body: 'How to use technology intentionally rather than being controlled by it.',
          },
          {
            title: 'The Myth of Multitasking',
            body: 'Learn why trying to do everything at once is killing your productivity.',
          },
          {
            title: 'Flow State: What It Is and How to Get There',
            body: 'Discover the secrets of peak performance and total immersion.',
          },
          {
            title: 'Nutrition for Brain Health',
            body: 'Foods and habits that support cognitive function and mental clarity.',
          },
          {
            title: 'Using Music for Focus',
            body: 'Learn how different types of sound can enhance or hinder your concentration.',
          },
          {
            title: 'Building a Focusing Habit',
            body: 'A step-by-step plan to gradually increase your attention span.',
          },
        ],
        author: {
          name: 'Focus Fiona',
          role: 'Cognitive Coach',
          image:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 11, 2026',
      },
      {
        id: 'prod_3',
        slug: 'effective-note-taking-systems',
        name: 'Effective Note-Taking Systems',
        category: 'Student Productivity',
        description: 'Discover how to capture and organize information for long-term retention.',
        heroImage:
          'https://images.unsplash.com/photo-1517842645767-c639042777db?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'The Cornell Method',
            body: 'A classic system for organizing lecture notes and facilitating review.',
          },
          {
            title: 'Mind Mapping for Complex Subjects',
            body: 'Learn how to visualize connections between different ideas and concepts.',
          },
          {
            title: 'Digital Note-Taking Tools (Notion, Obsidian)',
            body: 'An overview of the best apps for building a "Second Brain".',
          },
          {
            title: 'The Outline Method',
            body: 'How to structure information hierarchically for clear understanding.',
          },
          {
            title: 'Visual Note-Taking and Sketchnoting',
            body: 'Learn how to use simple drawings to enhance memory and engagement.',
          },
          {
            title: 'Active Recall and Spaced Repetition',
            body: 'How to turn your notes into powerful study tools using science-backed methods.',
          },
          {
            title: 'Synthesizing Multiple Sources',
            body: 'Learn how to combine information from lectures, books, and research.',
          },
          {
            title: 'Organizing Your Digital Files',
            body: 'Tips for keeping your computer and cloud storage tidy and searchable.',
          },
          {
            title: 'The Importance of Regular Review',
            body: 'How to schedule note reviews to prevent the "forgetting curve".',
          },
          {
            title: 'Creating a Personalized System',
            body: 'How to mix and match different methods to suit your learning style.',
          },
        ],
        author: {
          name: 'Note-taker Nick',
          role: 'Learning Strategist',
          image:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 10, 2026',
      },
      {
        id: 'prod_4',
        slug: 'goal-setting-and-motivation',
        name: 'Goal Setting and Motivation',
        category: 'Student Productivity',
        description: 'Learn how to define your vision and stay driven throughout the semester.',
        heroImage:
          'https://images.unsplash.com/photo-1491336477066-31156b5e4f35?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'Setting SMART Goals',
            body: 'Learn how to create objectives that are Specific, Measurable, Achievable, Relevant, and Time-bound.',
          },
          {
            title: 'The Power of "Why"',
            body: 'Discover how to find the underlying purpose that drives your academic efforts.',
          },
          {
            title: 'Breaking Down Large Projects',
            body: 'How to turn intimidating goals into manageable, bite-sized tasks.',
          },
          {
            title: 'Dealing with the "Mid-Semester Slump"',
            body: 'Strategies for maintaining energy and focus when the initial excitement fades.',
          },
          {
            title: 'Visualizing Success',
            body: 'How to use mental imagery to boost confidence and performance.',
          },
          {
            title: 'The Role of Self-Compassion',
            body: 'Learn why being kind to yourself is essential for long-term motivation.',
          },
          {
            title: 'Building a Support Network',
            body: 'How to find mentors and peers who will keep you accountable.',
          },
          {
            title: 'Celebrating Small Wins',
            body: 'The importance of rewarding yourself for progress, not just final results.',
          },
          {
            title: 'Overcoming Fear of Failure',
            body: 'How to reframe setbacks as learning opportunities.',
          },
          {
            title: 'Creating a Long-Term Academic Vision',
            body: 'Tips for aligning your daily work with your future career goals.',
          },
        ],
        author: {
          name: 'Motivator Mia',
          role: 'Performance Coach',
          image:
            'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 09, 2026',
      },
      {
        id: 'prod_5',
        slug: 'advanced-study-techniques',
        name: 'Advanced Study Techniques',
        category: 'Student Productivity',
        description: 'Learn the science-backed methods used by top-performing students worldwide.',
        heroImage:
          'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'Active Recall vs. Passive Review',
            body: 'Understand why testing yourself is better than re-reading your textbook.',
          },
          {
            title: 'Spaced Repetition Systems (Anki)',
            body: 'How to use flashcards and algorithms to remember information forever.',
          },
          {
            title: 'Interleaved Practice',
            body: 'Learn why mixing up different subjects is better for long-term learning.',
          },
          {
            title: 'The Feynman Technique',
            body: 'Discover how to master complex topics by explaining them in simple terms.',
          },
          {
            title: 'Elaborative Interrogation',
            body: 'How to deepen your understanding by asking "why" and "how" things work.',
          },
          {
            title: 'Dual Coding',
            body: 'Learn how to combine words and visuals to create stronger mental models.',
          },
          {
            title: 'The SQ3R Method for Reading',
            body: 'A systematic approach to getting the most out of your academic textbooks.',
          },
          {
            title: 'Mnemonic Devices and Memory Palaces',
            body: 'Fun and effective ways to memorize large amounts of data.',
          },
          {
            title: 'Effective Group Study Sessions',
            body: 'How to collaborate with others without wasting time.',
          },
          {
            title: 'Preparing for Different Exam Formats',
            body: 'Specific strategies for multiple choice, essay, and oral exams.',
          },
        ],
        author: {
          name: 'Scholar Scott',
          role: 'Academic Advisor',
          image:
            'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 08, 2026',
      },
      {
        id: 'prod_6',
        slug: 'writing-productivity-and-flow',
        name: 'Writing Productivity and Flow',
        category: 'Student Productivity',
        description: 'Master the art of writing essays, reports, and dissertations efficiently.',
        heroImage:
          'https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'The Pre-Writing Phase',
            body: 'How to research and outline your ideas before you start typing.',
          },
          {
            title: "Overcoming Writer's Block",
            body: 'Practical strategies for getting those first few words onto the page.',
          },
          {
            title: 'Free Writing and the "Shitty First Draft"',
            body: 'Learn why you should separate writing from editing.',
          },
          {
            title: 'Effective Research and Citation Management',
            body: 'Tools and tips for keeping track of your sources and avoiding plagiarism.',
          },
          {
            title: 'The Art of Self-Editing',
            body: 'How to refine your work for clarity, flow, and academic rigor.',
          },
          {
            title: 'Writing with AI Responsibly',
            body: 'How to use tools like ChatGPT as a brainstorming partner, not a replacement.',
          },
          {
            title: 'Managing Large Writing Projects',
            body: 'Strategies for staying organized during a thesis or dissertation.',
          },
          {
            title: 'Creating a Writing Routine',
            body: 'How to make writing a regular part of your academic life.',
          },
          {
            title: 'Peer Review and Feedback',
            body: 'How to give and receive constructive criticism on your writing.',
          },
          {
            title: 'Formatting and Final Touches',
            body: 'Ensuring your work meets the professional standards of your field.',
          },
        ],
        author: {
          name: 'Author Alice',
          role: 'Writing Specialist',
          image:
            'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 07, 2026',
      },
      {
        id: 'prod_7',
        slug: 'productivity-apps-and-tools',
        name: 'Productivity Apps and Tools',
        category: 'Student Productivity',
        description:
          'A curated guide to the best digital tools for streamlining your student life.',
        heroImage:
          'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'Project Management with Trello and Asana',
            body: 'How to track your assignments and deadlines visually.',
          },
          {
            title: 'Mastering Google Calendar',
            body: 'Tips for scheduling your life and never missing an important event.',
          },
          {
            title: 'Note-Taking with Notion and Evernote',
            body: 'Choosing the right home for your thoughts and research.',
          },
          {
            title: 'Cloud Storage and Collaboration (Drive, Dropbox)',
            body: 'How to work seamlessly with others and access files anywhere.',
          },
          {
            title: 'Focus Apps (Forest, Freedom)',
            body: 'Using gamification and blockers to stay off distracting websites.',
          },
          {
            title: 'Automation with Zapier and IFTTT',
            body: 'How to connect your apps and save time on repetitive tasks.',
          },
          {
            title: 'Reference Managers (Zotero, Mendeley)',
            body: 'Simplifying the process of citing sources and building a bibliography.',
          },
          {
            title: 'Mind Mapping Tools (MindMeister, XMind)',
            body: 'Visualizing complex information and brainstorming new ideas.',
          },
          {
            title: 'Password Managers and Digital Security',
            body: 'Keeping your academic and personal data safe online.',
          },
          {
            title: 'Evaluating and Choosing Your Tech Stack',
            body: 'How to avoid "app overload" and find what really works for you.',
          },
        ],
        author: {
          name: 'Tech Tom',
          role: 'Digital Strategist',
          image:
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 06, 2026',
      },
      {
        id: 'prod_8',
        slug: 'health-and-wellbeing-for-productivity',
        name: 'Health and Wellbeing for Productivity',
        category: 'Student Productivity',
        description: 'Learn why taking care of your body is the ultimate productivity hack.',
        heroImage:
          'https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'The Productivity-Health Connection',
            body: 'Understand how physical health impacts mental performance.',
          },
          {
            title: 'Exercise for Brain Power',
            body: 'How regular movement boosts memory, focus, and mood.',
          },
          {
            title: 'Sleep Hygiene for Students',
            body: 'Practical tips for getting the quality rest your brain needs to learn.',
          },
          {
            title: 'Hydration and Brain Function',
            body: 'Why drinking enough water is critical for concentration.',
          },
          {
            title: 'Healthy Eating on a Student Budget',
            body: 'Nutritious meals that fuel your brain without breaking the bank.',
          },
          {
            title: 'Managing Stress and Burnout',
            body: "Signs that you're pushing too hard and how to recover.",
          },
          {
            title: 'The Importance of Breaks and Leisure',
            body: 'Why doing nothing is sometimes the most productive thing you can do.',
          },
          {
            title: 'Ergonomics for Your Study Space',
            body: 'How to set up your desk to prevent pain and fatigue.',
          },
          {
            title: 'Eye Health in the Digital Age',
            body: 'Tips for reducing screen strain and protecting your vision.',
          },
          {
            title: 'Building a Sustainable Lifestyle',
            body: 'How to balance high performance with long-term well-being.',
          },
        ],
        author: {
          name: 'Wellness Will',
          role: 'Health Coach',
          image:
            'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 05, 2026',
      },
      {
        id: 'prod_9',
        slug: 'personal-organization-and-habits',
        name: 'Personal Organization and Habits',
        category: 'Student Productivity',
        description: 'Master the small behaviors that lead to big academic results.',
        heroImage:
          'https://images.unsplash.com/photo-1506784919141-17799d88f178?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'The Science of Habit Formation',
            body: 'How to use cues, routines, and rewards to build positive behaviors.',
          },
          {
            title: 'Atomic Habits for Students',
            body: 'Learn how 1% improvements lead to massive long-term success.',
          },
          {
            title: 'Organizing Your Physical Workspace',
            body: 'How a tidy desk leads to a tidy mind.',
          },
          {
            title: 'Managing Your Digital Life',
            body: 'Cleaning up your email, desktop, and cloud storage.',
          },
          {
            title: 'The Power of Reviewing Your Day',
            body: 'How a 5-minute evening ritual can set you up for success tomorrow.',
          },
          {
            title: 'Building a Reading Habit',
            body: 'Tips for getting through your academic reading list and beyond.',
          },
          {
            title: 'Financial Organization for Students',
            body: 'Keeping track of your budget and expenses effortlessly.',
          },
          {
            title: 'Meal Planning and Preparation',
            body: 'Saving time and energy on your daily nutrition.',
          },
          {
            title: 'The Role of Environment in Habits',
            body: 'How to design your surroundings to make good habits easy.',
          },
          {
            title: 'Tracking Your Progress',
            body: 'Using habit trackers and journals to stay accountable.',
          },
        ],
        author: {
          name: 'Organizer Olive',
          role: 'Lifestyle Coach',
          image:
            'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 04, 2026',
      },
      {
        id: 'prod_10',
        slug: 'leadership-and-soft-skills',
        name: 'Leadership and Soft Skills',
        category: 'Student Productivity',
        description:
          'Develop the essential skills for success in university and your future career.',
        heroImage:
          'https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'Effective Communication and Networking',
            body: 'How to build relationships with professors, peers, and professionals.',
          },
          {
            title: 'Mastering Public Speaking',
            body: 'Overcoming nerves and delivering powerful presentations.',
          },
          {
            title: 'Critical Thinking and Problem Solving',
            body: 'Learn how to analyze information and find creative solutions.',
          },
          {
            title: 'Working Effectively in Teams',
            body: 'The art of collaboration, delegation, and conflict resolution.',
          },
          {
            title: 'Emotional Intelligence (EQ)',
            body: 'Understanding and managing your own emotions and those of others.',
          },
          {
            title: 'Adaptability and Resilience',
            body: 'How to thrive in a changing environment and bounce back from failure.',
          },
          {
            title: 'Negotiation Skills for Students',
            body: 'How to advocate for yourself in academic and professional settings.',
          },
          {
            title: 'Time Management for Leaders',
            body: 'Balancing your own work with the responsibilities of leading a group.',
          },
          {
            title: 'Ethical Leadership and Decision Making',
            body: 'Understanding the impact of your choices on others and the world.',
          },
          {
            title: 'Preparing for the Transition to Career',
            body: 'How to translate your student skills into the professional world.',
          },
        ],
        author: {
          name: 'Leader Larry',
          role: 'Career Consultant',
          image:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 03, 2026',
      },
    ],
  },
  'mental-health': {
    id: 'cat_mental_health',
    title: 'Mental Health',
    slug: 'mental-health',
    description:
      'Nurture your mind, manage stress, and build emotional resilience with our comprehensive mental health resources.',
    resources: [
      {
        id: 'mh_1',
        slug: 'managing-exam-stress',
        name: 'Managing Exam Stress',
        category: 'Mental Health',
        description: 'Stay calm and focused during high-pressure academic periods.',
        heroImage:
          'https://images.unsplash.com/photo-1521791136064-7986c2923216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'The Physiology of Stress',
            body: 'Understand how your body responds to academic pressure and what it means for your health.',
          },
          {
            title: 'Effective Breathing Techniques',
            body: 'Simple exercises to calm your nervous system instantly during a test or study session.',
          },
          {
            title: 'The Power of Mindfulness',
            body: 'Learn how to stay present and reduce anxiety about future outcomes.',
          },
          {
            title: 'Physical Activity and Stress Relief',
            body: 'Discover the best types of exercise for clearing your mind and boosting your mood.',
          },
          {
            title: 'Nutrition for Emotional Balance',
            body: 'Foods that help stabilize your energy levels and reduce irritability.',
          },
          {
            title: 'The Importance of Quality Sleep',
            body: 'How to maintain a healthy sleep schedule even when deadlines are looming.',
          },
          {
            title: 'Time Management as a Stress Reducer',
            body: 'How staying organized can prevent the feeling of being overwhelmed.',
          },
          {
            title: 'Social Support and Connection',
            body: 'The role of friends, family, and peers in maintaining your mental well-being.',
          },
          {
            title: 'Cognitive Reframing',
            body: 'Learn how to challenge negative thoughts and replace them with more positive, realistic ones.',
          },
          {
            title: 'When to Seek Professional Help',
            body: 'Signs that you might need additional support and where to find it.',
          },
        ],
        author: {
          name: 'Wellness Wendy',
          role: 'Psychologist',
          image:
            'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 11, 2026',
      },
      {
        id: 'mh_2',
        slug: 'building-emotional-resilience',
        name: 'Building Emotional Resilience',
        category: 'Mental Health',
        description: 'Learn how to bounce back from setbacks and thrive in the face of adversity.',
        heroImage:
          'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'What is Resilience?',
            body: "Understanding the ability to adapt and grow through life's challenges.",
          },
          {
            title: 'Developing a Growth Mindset',
            body: 'Learn to see failures as opportunities for learning and development.',
          },
          {
            title: 'The Role of Self-Compassion',
            body: 'Why being kind to yourself is the foundation of emotional strength.',
          },
          {
            title: 'Building a Strong Support System',
            body: 'How to cultivate relationships that provide strength and perspective.',
          },
          {
            title: 'Emotional Regulation Techniques',
            body: 'Practical tools for managing intense feelings like anger, sadness, and fear.',
          },
          {
            title: 'Finding Meaning in Difficulty',
            body: 'How to use your experiences to build a sense of purpose and direction.',
          },
          {
            title: 'The Power of Gratitude',
            body: 'Discover how focusing on the positive can rewire your brain for resilience.',
          },
          {
            title: 'Setting Healthy Boundaries',
            body: 'Learn how to protect your energy and prioritize your own needs.',
          },
          {
            title: 'Problem-Solving Under Pressure',
            body: 'Strategies for staying rational and effective when things go wrong.',
          },
          {
            title: 'Building Long-Term Mental Strength',
            body: 'Daily habits and practices that foster emotional durability.',
          },
        ],
        author: {
          name: 'Resilient Ray',
          role: 'Therapist',
          image:
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 10, 2026',
      },
      {
        id: 'mh_3',
        slug: 'coping-with-student-anxiety',
        name: 'Coping with Student Anxiety',
        category: 'Mental Health',
        description: 'Practical strategies for managing social, academic, and general anxiety.',
        heroImage:
          'https://images.unsplash.com/photo-1474418397713-7ede21d49118?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'Understanding Anxiety Triggers',
            body: 'Identify the situations and thoughts that cause you the most distress.',
          },
          {
            title: 'Grounding Exercises for Panic',
            body: 'Simple techniques to bring yourself back to the present moment during high anxiety.',
          },
          {
            title: 'Managing Social Anxiety in University',
            body: 'Tips for navigating classes, clubs, and social events with confidence.',
          },
          {
            title: 'Dealing with Perfectionism',
            body: 'How the need to be perfect fuels anxiety and how to let go of it.',
          },
          {
            title: 'The Role of Digital Overload',
            body: 'How social media and constant notifications contribute to mental tension.',
          },
          {
            title: 'Cognitive Behavioral Therapy (CBT) Basics',
            body: 'Learn how to challenge the "anxious voice" in your head.',
          },
          {
            title: 'Creating a "Calm Kit"',
            body: 'A collection of tools and resources you can turn to when feeling anxious.',
          },
          {
            title: 'Anxiety and Physical Health',
            body: 'How your gut, heart, and lungs are connected to your mental state.',
          },
          {
            title: 'Communicating Your Needs to Others',
            body: 'How to talk to professors and friends about your anxiety.',
          },
          {
            title: 'Building a Lifestyle for Inner Peace',
            body: 'Long-term changes that can help reduce your overall anxiety levels.',
          },
        ],
        author: {
          name: 'Anxiety-free Anna',
          role: 'Counselor',
          image:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 09, 2026',
      },
      {
        id: 'mh_4',
        slug: 'understanding-and-preventing-burnout',
        name: 'Understanding and Preventing Burnout',
        category: 'Mental Health',
        description: 'Learn how to spot the signs of exhaustion and reclaim your energy.',
        heroImage:
          'https://images.unsplash.com/photo-1512438248247-f0f2a5a8b7f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'The Three Stages of Burnout',
            body: 'Recognize the progression from enthusiasm to total depletion.',
          },
          {
            title: 'Identifying Your Personal "Red Flags"',
            body: "Learn the physical and emotional signs that you're pushing too hard.",
          },
          {
            title: 'The Importance of "True Rest"',
            body: "Why watching TV isn't always the rest your brain actually needs.",
          },
          {
            title: 'Re-evaluating Your Priorities',
            body: 'How to say "no" to things that aren\'t essential to your goals.',
          },
          {
            title: 'Creating Sustainable Work Habits',
            body: 'Strategies for working effectively without sacrificing your health.',
          },
          {
            title: 'The Role of Passion and Purpose',
            body: 'How losing touch with "why" you do what you do leads to burnout.',
          },
          {
            title: 'Recovering from Academic Burnout',
            body: 'A step-by-step guide to getting your spark back after a period of exhaustion.',
          },
          {
            title: 'Building "Buffer Time" into Your Schedule',
            body: 'How to prevent the back-to-back lifestyle that causes stress.',
          },
          {
            title: 'The Power of Hobbies and Non-Academic Life',
            body: 'Why having interests outside of school is critical for mental health.',
          },
          {
            title: 'Advocating for Yourself in High-Pressure Environments',
            body: 'How to set limits with demanding professors or employers.',
          },
        ],
        author: {
          name: 'Balanced Ben',
          role: 'Burnout Specialist',
          image:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 08, 2026',
      },
      {
        id: 'mh_5',
        slug: 'navigating-relationships-and-loneliness',
        name: 'Navigating Relationships and Loneliness',
        category: 'Mental Health',
        description: 'Build meaningful connections and manage the challenges of student life.',
        heroImage:
          'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'The Impact of Social Connection on Mental Health',
            body: 'Why humans are wired for belonging and the consequences of isolation.',
          },
          {
            title: 'Managing Loneliness in a New Environment',
            body: 'Practical tips for students moving away from home for the first time.',
          },
          {
            title: 'The Art of Making Friends in University',
            body: 'Strategies for meeting people and building deep, lasting connections.',
          },
          {
            title: 'Dealing with Conflict in Friendships',
            body: 'How to handle disagreements and misunderstandings in a healthy way.',
          },
          {
            title: 'Setting Boundaries in Relationships',
            body: 'Learn how to protect your own needs while still being a good friend.',
          },
          {
            title: 'Navigating Romantic Relationships and Heartbreak',
            body: 'Managing the emotional highs and lows of student romance.',
          },
          {
            title: 'The Role of Family Dynamics',
            body: 'How your relationship with home impacts your mental state at school.',
          },
          {
            title: 'Finding Community in Clubs and Organizations',
            body: 'The benefits of joining groups with shared interests and goals.',
          },
          {
            title: 'Digital Relationships vs. Real-Life Connection',
            body: 'Understanding the limitations of online social interaction.',
          },
          {
            title: 'Building a Sense of Belonging',
            body: 'How to feel at home in your academic and social environment.',
          },
        ],
        author: {
          name: 'Social Sarah',
          role: 'Relationship Coach',
          image:
            'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 07, 2026',
      },
      {
        id: 'mh_6',
        slug: 'self-esteem-and-body-image',
        name: 'Self-Esteem and Body Image',
        category: 'Mental Health',
        description: 'Learn to value yourself and build a positive relationship with your body.',
        heroImage:
          'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'The Roots of Self-Esteem',
            body: 'Understand the factors that shape how you see yourself.',
          },
          {
            title: 'Challenging Your "Inner Critic"',
            body: 'How to stop the negative self-talk that holds you back.',
          },
          {
            title: 'Developing Body Neutrality',
            body: 'Moving away from appearance-based self-worth toward appreciation for what your body can do.',
          },
          {
            title: 'The Impact of Social Media on Self-Image',
            body: 'How to curate your feed for a healthier perspective.',
          },
          {
            title: 'Dealing with Comparison and Envy',
            body: "Strategies for focusing on your own journey rather than others'.",
          },
          {
            title: 'The Power of Positive Affirmations',
            body: 'How to use intentional language to build your confidence.',
          },
          {
            title: 'Finding Your Strengths and Talents',
            body: "Focusing on what you're good at to build a sense of competence.",
          },
          {
            title: 'Dealing with Imposter Syndrome',
            body: 'Learn how to own your achievements and feel like you belong.',
          },
          {
            title: 'Practicing Self-Care Beyond the Surface',
            body: 'Nurturing your mind and spirit as much as your physical appearance.',
          },
          {
            title: 'Building a Sustainable Sense of Worth',
            body: 'How to value yourself for who you are, not just what you achieve.',
          },
        ],
        author: {
          name: 'Confident Chloe',
          role: 'Self-Worth Advocate',
          image:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 06, 2026',
      },
      {
        id: 'mh_7',
        slug: 'grief-loss-and-life-transitions',
        name: 'Grief, Loss, and Life Transitions',
        category: 'Mental Health',
        description: 'Navigate the difficult periods of change and loss during your student years.',
        heroImage:
          'https://images.unsplash.com/photo-1516589174184-c6858b16ecfb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'Understanding the Stages of Grief',
            body: 'Learn the common emotional responses to loss and how to navigate them.',
          },
          {
            title: 'Coping with the Loss of a Loved One',
            body: 'Practical advice for grieving while trying to maintain your academic responsibilities.',
          },
          {
            title: 'Navigating Major Life Transitions',
            body: 'How to handle the stress of moving, changing majors, or graduating.',
          },
          {
            title: 'Dealing with the End of a Relationship',
            body: 'Managing the emotional fallout of a breakup or friendship loss.',
          },
          {
            title: 'The Role of Ritual and Memorialization',
            body: 'Finding meaningful ways to honor what you have lost.',
          },
          {
            title: 'Self-Care During Times of Sorrow',
            body: 'How to be gentle with yourself when your world feels upside down.',
          },
          {
            title: 'Finding Support in Grief Groups',
            body: 'The benefits of sharing your experience with others who understand.',
          },
          {
            title: 'The Impact of Grief on Focus and Memory',
            body: 'Understanding why your brain feels "foggy" during difficult times.',
          },
          {
            title: 'Building Resilience Through Loss',
            body: 'How facing difficulty can ultimately lead to personal growth.',
          },
          {
            title: 'When Grief Becomes Complicated',
            body: 'Signs that you may need professional help to process your loss.',
          },
        ],
        author: {
          name: 'Grace Griever',
          role: 'Bereavement Counselor',
          image:
            'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 05, 2026',
      },
      {
        id: 'mh_8',
        slug: 'sleep-and-mental-health-optimization',
        name: 'Sleep and Mental Health Optimization',
        category: 'Mental Health',
        description: 'Discover the critical link between rest and your emotional well-being.',
        heroImage:
          'https://images.unsplash.com/photo-1511295742364-917e703516ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'The Science of Sleep and the Brain',
            body: 'Understand how sleep processes emotions and clears toxins.',
          },
          {
            title: 'Sleep Deprivation and Anxiety',
            body: 'How a lack of rest makes you more vulnerable to stress and worry.',
          },
          {
            title: 'Creating the Perfect Sleep Environment',
            body: 'Tips for optimizing your bedroom for deep, restorative rest.',
          },
          {
            title: 'The Importance of a Consistent Routine',
            body: "How your body's internal clock impacts your mood and energy.",
          },
          {
            title: 'Managing Insomnia and Racing Thoughts',
            body: 'Techniques for calming your mind before bed.',
          },
          {
            title: 'The Role of Light and Technology',
            body: 'Why screens are killing your sleep and what to do about it.',
          },
          {
            title: 'Napping for Mental Clarity',
            body: 'How to use power naps to boost your performance without ruining your night.',
          },
          {
            title: 'The Impact of Caffeine and Alcohol',
            body: 'Understanding how substances interfere with your sleep architecture.',
          },
          {
            title: 'Sleep and Academic Performance',
            body: "Why a good night's rest is better for your grades than an all-nighter.",
          },
          {
            title: 'Developing a Long-Term Sleep Strategy',
            body: 'Habits for a lifetime of better rest and better mental health.',
          },
        ],
        author: {
          name: 'Sleepy Sam',
          role: 'Sleep Scientist',
          image:
            'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 04, 2026',
      },
      {
        id: 'mh_9',
        slug: 'mindfulness-and-meditation-for-students',
        name: 'Mindfulness and Meditation for Students',
        category: 'Mental Health',
        description: 'Practical tools for building focus, calm, and emotional awareness.',
        heroImage:
          'https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'What is Mindfulness?',
            body: 'Understanding the practice of non-judgmental awareness of the present moment.',
          },
          {
            title: 'The Benefits of Meditation for Learning',
            body: 'How sitting still can actually improve your concentration and memory.',
          },
          {
            title: 'Simple Breathing Exercises for Beginners',
            body: 'Start your practice with just a few minutes a day.',
          },
          {
            title: 'Guided vs. Unguided Meditation',
            body: 'Choosing the right style for your personality and goals.',
          },
          {
            title: 'Mindful Eating and Movement',
            body: 'Bringing awareness to your daily activities outside of formal practice.',
          },
          {
            title: 'Dealing with a "Busy Mind"',
            body: 'How to handle distractions and thoughts during meditation.',
          },
          {
            title: 'The Science of Meditation and the Brain',
            body: 'How regular practice changes the structure and function of your mind.',
          },
          {
            title: 'Building a Daily Mindfulness Habit',
            body: 'Tips for staying consistent and making it a part of your life.',
          },
          {
            title: 'Using Mindfulness for Stressful Moments',
            body: 'How to apply your skills in the middle of a difficult exam or social situation.',
          },
          {
            title: 'Resources for Continued Practice',
            body: 'The best apps, books, and courses for deepening your journey.',
          },
        ],
        author: {
          name: 'Zen Zoe',
          role: 'Meditation Teacher',
          image:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 03, 2026',
      },
      {
        id: 'mh_10',
        slug: 'holistic-mental-wellbeing',
        name: 'Holistic Mental Wellbeing',
        category: 'Mental Health',
        description: 'Integrate physical, emotional, and social health for total well-being.',
        heroImage:
          'https://images.unsplash.com/photo-1490127252417-7c393f993ee4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'The Mind-Body Connection',
            body: 'Understand how your physical state impacts your mental health and vice versa.',
          },
          {
            title: 'The Role of Environment in Wellbeing',
            body: 'How your living and study space affects your mood and productivity.',
          },
          {
            title: 'Cultivating a Sense of Purpose',
            body: 'Finding meaning in your studies and your life beyond school.',
          },
          {
            title: 'The Importance of Creative Expression',
            body: 'How art, music, and writing can be powerful tools for mental health.',
          },
          {
            title: 'Connecting with Nature',
            body: 'The benefits of spending time outdoors for stress reduction and perspective.',
          },
          {
            title: 'Financial Health and Mental Wellbeing',
            body: 'Understanding the link between money stress and emotional distress.',
          },
          {
            title: 'The Power of Service and Volunteering',
            body: 'How helping others can boost your own sense of worth and happiness.',
          },
          {
            title: 'Developing a Personalized Wellbeing Plan',
            body: 'Choosing the practices and habits that work best for your unique life.',
          },
          {
            title: 'The Journey of Self-Discovery',
            body: 'Embracing the student years as a time of growth, exploration, and learning.',
          },
          {
            title: 'Building a Life You Love',
            body: 'Setting long-term goals that align with your values and your mental health.',
          },
        ],
        author: {
          name: 'Holistic Holly',
          role: 'Wellbeing Consultant',
          image:
            'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 02, 2026',
      },
    ],
  },
  'student-budgeting': {
    id: 'cat_budgeting',
    title: 'Student Budgeting',
    slug: 'student-budgeting',
    description:
      'Stretch your student budget, master frugal living, and manage your finances with ease.',
    resources: [
      {
        id: 'bud_1',
        slug: 'budget-friendly-student-living',
        name: 'Budget-Friendly Student Living',
        category: 'Student Budgeting',
        description: 'How to live well and enjoy your student years on a limited income.',
        heroImage:
          'https://images.unsplash.com/photo-1525921429624-479b6a26d84d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'The Student Budgeting Mindset',
            body: 'Learn how to view frugal living as a temporary challenge rather than a permanent limitation.',
          },
          {
            title: 'Essential Meal Prepping Skills',
            body: 'Save hundreds of dollars a month by cooking in bulk and avoiding expensive takeout.',
          },
          {
            title: 'Mastering Student Discounts',
            body: 'A guide to finding and using the best deals for technology, travel, and entertainment.',
          },
          {
            title: 'Second-Hand Shopping and Thrifting',
            body: 'How to find quality clothes, furniture, and textbooks for a fraction of the price.',
          },
          {
            title: 'Tracking Every Dollar',
            body: 'The importance of using apps or spreadsheets to understand where your money is going.',
          },
          {
            title: 'Saving on Housing and Utilities',
            body: 'Tips for finding affordable accommodation and reducing your monthly bills.',
          },
          {
            title: 'Low-Cost Socializing and Entertainment',
            body: 'How to have fun with friends without spending a fortune.',
          },
          {
            title: 'The "Envelope System" for Students',
            body: 'A classic method for managing your cash and preventing overspending.',
          },
          {
            title: 'Emergency Funds for Student Life',
            body: "Why you still need a safety net, even if you don't have much income.",
          },
          {
            title: 'Reviewing and Adjusting Your Budget',
            body: 'How to stay flexible and keep your financial plan relevant throughout the semester.',
          },
        ],
        author: {
          name: 'Saver Sam',
          role: 'Financial Coach',
          image:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 10, 2026',
      },
      {
        id: 'bud_2',
        slug: 'smart-grocery-shopping-for-students',
        name: 'Smart Grocery Shopping for Students',
        category: 'Student Budgeting',
        description: 'Learn how to eat healthily and deliciously on a shoestring budget.',
        heroImage:
          'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'The Art of the Grocery List',
            body: 'Why you should never shop without a plan and how to stick to it.',
          },
          {
            title: 'Buying in Bulk vs. Single Items',
            body: "Understanding when it makes sense to stock up and when it's a waste of money.",
          },
          {
            title: 'Seasonal Produce and Frozen Options',
            body: 'How to get the most nutrition for the lowest price throughout the year.',
          },
          {
            title: 'Generic Brands vs. Name Brands',
            body: 'Discover which items are worth the extra money and which are exactly the same.',
          },
          {
            title: 'Cooking with Cheap Proteins',
            body: 'Mastering beans, lentils, eggs, and frozen chicken for affordable meals.',
          },
          {
            title: 'Reducing Food Waste',
            body: 'Tips for storing food properly and using up leftovers before they go bad.',
          },
          {
            title: 'The Benefits of Meal Planning',
            body: "How to design your week's meals around what's on sale.",
          },
          {
            title: 'Avoiding "Impulse Buys" at the Checkout',
            body: 'Strategies for staying focused and keeping your bill low.',
          },
          {
            title: 'Using Coupons and Rewards Programs Responsibly',
            body: "How to save money without buying things you don't actually need.",
          },
          {
            title: 'Eating Well on a Limited Schedule',
            body: 'Quick, easy, and affordable recipes for busy student nights.',
          },
        ],
        author: {
          name: 'Chef Cheap',
          role: 'Nutritionist',
          image:
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 09, 2026',
      },
      {
        id: 'bud_3',
        slug: 'managing-student-debt-and-loans',
        name: 'Managing Student Debt and Loans',
        category: 'Student Budgeting',
        description: 'Navigate the world of student financing and prepare for a debt-free future.',
        heroImage:
          'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'Understanding Your Loan Agreement',
            body: 'Learn the difference between subsidized and unsubsidized loans and what it means for your interest.',
          },
          {
            title: 'Creating a Repayment Plan Early',
            body: 'How to estimate your future payments and build them into your post-grad budget.',
          },
          {
            title: 'The Role of Scholarships and Grants',
            body: 'Tips for finding "free money" to reduce your reliance on loans.',
          },
          {
            title: 'Managing Interest While in School',
            body: 'Why making small payments now can save you thousands later.',
          },
          {
            title: 'The Impact of Debt on Your Credit Score',
            body: 'How your student loans affect your ability to rent an apartment or buy a car.',
          },
          {
            title: 'Exploring Loan Forgiveness Programs',
            body: 'An overview of the different options for public service and teacher forgiveness.',
          },
          {
            title: 'Consolidating and Refinancing Loans',
            body: 'Understanding the pros and cons of combining your debt into one payment.',
          },
          {
            title: 'Dealing with Financial Aid Offices',
            body: 'How to advocate for yourself and ask for more support if your situation changes.',
          },
          {
            title: 'Avoiding Predatory Lending',
            body: 'Recognizing the signs of "bad" debt and protecting your financial future.',
          },
          {
            title: 'Staying Positive on Your Debt Journey',
            body: 'Strategies for managing the stress and anxiety of carrying a balance.',
          },
        ],
        author: {
          name: 'Debt-free Dan',
          role: 'Financial Advisor',
          image:
            'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 08, 2026',
      },
      {
        id: 'bud_4',
        slug: 'side-hustles-for-students',
        name: 'Side Hustles for Students',
        category: 'Student Budgeting',
        description: 'Discover how to boost your income without sacrificing your grades.',
        heroImage:
          'https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'The Gig Economy for Students',
            body: 'An overview of platforms like Fiverr, Upwork, and TaskRabbit.',
          },
          {
            title: 'Tutoring and Academic Support',
            body: 'How to turn your knowledge into cash by helping other students.',
          },
          {
            title: 'On-Campus Work Opportunities',
            body: 'The benefits of working in the library, cafeteria, or administrative offices.',
          },
          {
            title: 'Selling Your Skills Online',
            body: 'From graphic design to social media management, find your niche.',
          },
          {
            title: 'Flipping Items for Profit',
            body: 'How to find bargains at thrift stores and resell them for more.',
          },
          {
            title: 'Balancing Work and Study',
            body: 'Strategies for managing your time and preventing burnout.',
          },
          {
            title: 'Tax Responsibilities for Freelancers',
            body: 'Understand what you need to report and how to stay organized.',
          },
          {
            title: 'Building a Professional Portfolio',
            body: 'How your side hustle can help you get a "real" job after graduation.',
          },
          {
            title: 'Avoiding "Get Rich Quick" Scams',
            body: 'Learn how to spot and stay away from dangerous opportunities.',
          },
          {
            title: 'Scaling Your Side Business',
            body: 'Tips for taking your project from a few extra dollars to a full-time income.',
          },
        ],
        author: {
          name: 'Hustle Hannah',
          role: 'Entrepreneur',
          image:
            'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 07, 2026',
      },
      {
        id: 'bud_5',
        slug: 'affordable-student-travel',
        name: 'Affordable Student Travel',
        category: 'Student Budgeting',
        description: 'See the world without breaking the bank using student-specific strategies.',
        heroImage:
          'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'The Art of the "Budget Trip"',
            body: 'How to plan an entire vacation around a limited amount of money.',
          },
          {
            title: 'Finding Cheap Flights and Trains',
            body: 'Mastering search engines and booking at the right time.',
          },
          {
            title: 'Hostels and Alternative Accommodation',
            body: 'Why sharing a room is the best way to meet people and save cash.',
          },
          {
            title: 'Eating Like a Local on a Budget',
            body: 'Avoiding tourist traps and finding the best street food.',
          },
          {
            title: 'Free Things to Do in Any City',
            body: "Discovering museums, parks, and walking tours that don't cost a cent.",
          },
          {
            title: 'Using Student IDs for International Savings',
            body: 'How the ISIC card can save you money all over the world.',
          },
          {
            title: 'Travel Insurance for Students',
            body: 'Why you should never leave home without it and how to find a cheap policy.',
          },
          {
            title: 'Packing Light to Avoid Fees',
            body: 'Tips for living out of a backpack for weeks at a time.',
          },
          {
            title: 'Slow Travel and Volunteering',
            body: 'How to stay in one place longer and potentially get free housing.',
          },
          {
            title: 'Budgeting for the Unexpected',
            body: 'Why you always need a "buffer" in your travel fund.',
          },
        ],
        author: {
          name: 'Traveler Tim',
          role: 'Travel Blogger',
          image:
            'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 06, 2026',
      },
      {
        id: 'bud_6',
        slug: 'saving-on-technology-and-software',
        name: 'Saving on Technology and Software',
        category: 'Student Budgeting',
        description: 'Get the tools you need for school without the high price tag.',
        heroImage:
          'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'Education Pricing for Laptops and Tablets',
            body: 'How to save hundreds of dollars on your next big tech purchase.',
          },
          {
            title: 'Free Software Alternatives for Students',
            body: 'Discover open-source versions of the most popular professional tools.',
          },
          {
            title: 'Mastering Cloud Computing',
            body: 'How to use free storage and web-based apps to save money.',
          },
          {
            title: 'Refurbished vs. New Electronics',
            body: 'Why buying "last year\'s model" is often the smartest move.',
          },
          {
            title: 'Saving on Mobile Phone Plans',
            body: 'Finding the best student deals and avoiding expensive contracts.',
          },
          {
            title: 'Using Campus Resources to the Fullest',
            body: 'Why you should use the computer labs and printing services instead of buying your own.',
          },
          {
            title: 'Sharing Subscriptions and Family Plans',
            body: 'How to legally split the cost of streaming and software with friends.',
          },
          {
            title: 'The Importance of Digital Security on a Budget',
            body: 'Finding free and effective ways to protect your data.',
          },
          {
            title: 'Repairing vs. Replacing Your Gear',
            body: 'Simple tips for extending the life of your devices.',
          },
          {
            title: 'Reselling Your Old Tech',
            body: "How to get the most money back when you're ready to upgrade.",
          },
        ],
        author: {
          name: 'Techie Tina',
          role: 'IT Consultant',
          image:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 05, 2026',
      },
      {
        id: 'bud_7',
        slug: 'housing-and-roommate-management',
        name: 'Housing and Roommate Management',
        category: 'Student Budgeting',
        description: 'Navigate the challenges of living with others while keeping your costs low.',
        heroImage:
          'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'Finding Affordable Student Housing',
            body: 'Tips for searching for apartments and understanding lease agreements.',
          },
          {
            title: 'The Financial Benefits of Having Roommates',
            body: 'How splitting the rent and utilities can save you a fortune.',
          },
          {
            title: 'Creating a Shared Budget for the House',
            body: 'How to manage common expenses like toilet paper and cleaning supplies.',
          },
          {
            title: 'Splitting Utility Bills Fairly',
            body: 'Using apps and spreadsheets to track who owes what.',
          },
          {
            title: 'Furnishing Your First Apartment for Less',
            body: 'Where to find free and cheap furniture and decor.',
          },
          {
            title: 'Dealing with Conflict Over Money',
            body: 'How to have healthy conversations with roommates about bills.',
          },
          {
            title: 'Understanding Your Rights as a Tenant',
            body: 'Protecting your security deposit and avoiding unfair fees.',
          },
          {
            title: 'Energy-Saving Tips for Shared Houses',
            body: 'How to keep your heating and electricity bills low.',
          },
          {
            title: 'Cooking Together to Save Money',
            body: 'The benefits of shared meals and bulk shopping.',
          },
          {
            title: 'Moving on a Budget',
            body: 'How to transport your belongings without hiring an expensive company.',
          },
        ],
        author: {
          name: 'Homey Hope',
          role: 'Property Manager',
          image:
            'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 04, 2026',
      },
      {
        id: 'bud_8',
        slug: 'personal-finance-for-international-students',
        name: 'Personal Finance for International Students',
        category: 'Student Budgeting',
        description: 'Navigate the unique financial challenges of studying in a different country.',
        heroImage:
          'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'Understanding Exchange Rates and Fees',
            body: 'How to move money across borders without losing a fortune.',
          },
          {
            title: 'Opening a Local Bank Account',
            body: 'A guide to the documents you need and the best accounts for students.',
          },
          {
            title: 'Managing Tuition Payments and Deadlines',
            body: 'How to plan for large expenses and avoid late fees.',
          },
          {
            title: 'Navigating the Local Tax System',
            body: 'Understanding your responsibilities as an international resident.',
          },
          {
            title: 'Finding Part-Time Work as an International Student',
            body: 'Understanding your visa restrictions and finding legal jobs.',
          },
          {
            title: 'Healthcare and Insurance for Expats',
            body: "Ensuring you're covered without overpaying for a policy.",
          },
          {
            title: 'Budgeting for Trips Back Home',
            body: 'How to save for flights and gifts for your family.',
          },
          {
            title: 'Understanding the Local Cost of Living',
            body: 'Researching the prices of food, housing, and transport before you arrive.',
          },
          {
            title: 'Dealing with Financial Emergencies Abroad',
            body: 'Who to contact and how to get help if things go wrong.',
          },
          {
            title: 'Building a Financial Future in a New Country',
            body: 'Tips for staying and working after your studies are complete.',
          },
        ],
        author: {
          name: 'Global Gabi',
          role: 'International Student Advisor',
          image:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 03, 2026',
      },
      {
        id: 'bud_9',
        slug: 'investing-for-students-with-little-money',
        name: 'Investing for Students with Little Money',
        category: 'Student Budgeting',
        description:
          'Learn how to start building wealth even if you only have a few dollars to spare.',
        heroImage:
          'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'The Power of Micro-Investing',
            body: 'How apps that round up your purchases can help you start a portfolio.',
          },
          {
            title: 'Understanding Compound Interest for Beginners',
            body: 'Why time is your greatest asset as a young investor.',
          },
          {
            title: 'Index Funds and ETFs for Students',
            body: 'Low-cost ways to own a piece of the entire stock market.',
          },
          {
            title: 'The Importance of a Long-Term Perspective',
            body: "Why you shouldn't worry about daily market fluctuations.",
          },
          {
            title: 'Opening Your First Brokerage Account',
            body: 'A step-by-step guide for students to get started.',
          },
          {
            title: 'Investing in Yourself vs. The Market',
            body: 'When it makes more sense to spend money on your education and skills.',
          },
          {
            title: 'The Role of Cryptocurrency in a Student Portfolio',
            body: 'A sober look at the risks and potential rewards.',
          },
          {
            title: 'Automating Your Savings and Investments',
            body: 'How to pay yourself first without thinking about it.',
          },
          {
            title: 'The Basics of Risk Management',
            body: 'How to protect your money while still seeking growth.',
          },
          {
            title: 'Setting Your First Investment Goals',
            body: 'What are you saving for and how much do you need?',
          },
        ],
        author: {
          name: 'Investor Izzy',
          role: 'Financial Planner',
          image:
            'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 02, 2026',
      },
      {
        id: 'bud_10',
        slug: 'preparing-for-financial-life-after-grad',
        name: 'Preparing for Financial Life After Grad',
        category: 'Student Budgeting',
        description: 'Bridge the gap between student life and your first professional career.',
        heroImage:
          'https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: [
          {
            title: 'The "Real World" Budget',
            body: 'How your expenses will change when you start a full-time job.',
          },
          {
            title: 'Understanding Your First Job Offer',
            body: 'Negotiating salary, benefits, and retirement plans.',
          },
          {
            title: 'Managing Your First Professional Paycheck',
            body: 'How to avoid "lifestyle creep" and stay on track with your goals.',
          },
          {
            title: 'Building an Emergency Fund for Adulthood',
            body: 'How much you really need to save when you have more responsibilities.',
          },
          {
            title: 'The Basics of Retirement Planning',
            body: 'Understanding 401(k)s and IRAs from day one.',
          },
          {
            title: 'Managing Your Taxes as a Professional',
            body: 'What you need to know about withholding and filing.',
          },
          {
            title: 'The Importance of Financial Boundaries',
            body: 'How to handle family and friends who may expect more from you now.',
          },
          {
            title: 'Continuing Your Financial Education',
            body: 'The best books, podcasts, and resources for lifelong wealth building.',
          },
          {
            title: 'Setting Five-Year Financial Goals',
            body: 'Where do you want to be in your late twenties?',
          },
          {
            title: 'The Journey to Financial Independence',
            body: 'Starting the path to a life where work is optional.',
          },
        ],
        author: {
          name: 'Graduation Greg',
          role: 'Career Coach',
          image:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        },
        publishDate: 'Feb 01, 2026',
      },
    ],
  },
};
