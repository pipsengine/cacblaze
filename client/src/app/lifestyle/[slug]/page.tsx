import { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Breadcrumb from '@/components/common/Breadcrumb';
import AppImage from '@/components/ui/AppImage';
import { menuData } from '@/data/menuData';

function formatSlug(slug: string) {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const lifestyleMenu = menuData.mainMenu.find((m) => m.id === 'lifestyle');
  let categoryItem;

  if (lifestyleMenu?.categories) {
    for (const cat of lifestyleMenu.categories) {
      const item = cat.items?.find((i) => i.href === `/lifestyle/${params.slug}`);
      if (item) {
        categoryItem = item;
        break;
      }
    }
  }

  const title = categoryItem ? categoryItem.label : formatSlug(params.slug);

  return {
    title: `${title} - Lifestyle - CACBLAZE`,
    description: `Health, wellness and lifestyle guidance about ${title}.`,
  };
}

export default function LifestyleCategoryPage({ params }: { params: { slug: string } }) {
  const lifestyleMenu = menuData.mainMenu.find((m) => m.id === 'lifestyle');
  let categoryItem;

  if (lifestyleMenu?.categories) {
    for (const cat of lifestyleMenu.categories) {
      const item = cat.items?.find((i) => i.href === `/lifestyle/${params.slug}`);
      if (item) {
        categoryItem = item;
        break;
      }
    }
  }

  const title = categoryItem ? categoryItem.label : formatSlug(params.slug);

  const breadcrumbItems = [
    { name: 'Home', href: '/homepage' },
    { name: 'Lifestyle', href: '/lifestyle' },
    { name: title, href: `/lifestyle/${params.slug}` },
  ];

  const contentMap: Record<
    string,
    {
      description: string;
      sections: { title: string; items: (string | { text: string; detail?: string })[] }[];
      checklist?: string[];
    }
  > = {
    'healthy-living': {
      description:
        'Build a practical health system that you can maintain long term. Focus on daily basics, balanced nutrition, realistic training, recovery, sleep, stress regulation, and supportive environments. Avoid extremes; prefer small consistent actions that compound over time.',
      sections: [
        {
          title: 'Daily Foundations',
          items: [
            'Drink water within the first hour of waking and keep a bottle visible.',
            'Eat mostly whole foods and reduce added sugar and ultra processed snacks.',
            'Walk daily and insert short movement breaks to reduce sitting time.',
            'Use sunlight exposure early in the day to anchor your body clock.',
            'Plan simple meals and one movement block before the day gets busy.',
            'Review your main three priorities and remove unnecessary tasks.',
          ],
        },
        {
          title: 'Balanced Nutrition Principles',
          items: [
            'Compose plates with vegetables, lean protein, complex carbohydrates, and healthy fats.',
            'Aim for adequate protein across the day to support muscle and satiety.',
            'Prefer fiber rich carbs like oats, brown rice, beans, and root vegetables.',
            'Use olive oil, nuts, and seeds for healthy fats without overdoing portions.',
            'Limit fried foods and choose baking, grilling, steaming, or sautéing.',
            'Season with herbs and spices to enhance flavor while moderating salt.',
          ],
        },
        {
          title: 'Meal Planning And Prep',
          items: [
            'Plan a simple weekly menu and repeat favorite meals to reduce decisions.',
            'Batch cook staple proteins and grains and store portions for quick use.',
            'Keep fruit, yogurt, nuts, and eggs for fast balanced snacks.',
            'Place healthy options at eye level and move treats out of daily sight.',
            'Prepare a go bag with a shaker, snacks, and water for busy days.',
            'Use shopping lists and avoid impulse buys by sticking to planned aisles.',
          ],
        },
        {
          title: 'Movement Routine Design',
          items: [
            'Combine strength, cardio, and mobility across the week for balanced fitness.',
            'Start with short sessions and grow duration as consistency improves.',
            'Warm up before training and cool down after to reduce injury risk.',
            'Track simple metrics like sets, reps, minutes, and perceived effort.',
            'Use progressive overload by increasing volume or load gradually.',
            'Schedule rest days and light recovery sessions to consolidate gains.',
          ],
        },
        {
          title: 'Strength Training Basics',
          items: [
            'Prioritize compound movements like squats, presses, hinges, and pulls.',
            'Choose loads that allow clean technique and stop sets before form breaks.',
            'Use two to three sessions weekly targeting full body or upper lower splits.',
            'Log exercises and small weekly improvements to guide progression.',
            'Deload periodically by reducing volume or intensity to manage fatigue.',
            'Use bodyweight and bands when equipment is limited and maintain intent.',
          ],
        },
        {
          title: 'Cardio And Conditioning',
          items: [
            'Mix steady state work with intervals to build capacity efficiently.',
            'Choose joint friendly modes like cycling, brisk walking, or swimming.',
            'Use heart rate or talk tests to gauge intensity and avoid overtraining.',
            'Prefer outdoor sessions when feasible for mood and sunlight benefits.',
            'Progress minutes or increase interval work very gradually each week.',
            'Include low intensity movement on recovery days to promote circulation.',
          ],
        },
        {
          title: 'Mobility And Flexibility',
          items: [
            'Perform short daily mobility blocks for tight areas like hips and shoulders.',
            'Use dynamic warmups before training and static stretches after sessions.',
            'Integrate balance and core control to support joint stability.',
            'Address recurrent tightness by adjusting training technique and volume.',
            'Use gentle ranges without pain and respect gradual improvements over time.',
            'Track a few mobility drills and repeat them consistently for best results.',
          ],
        },
        {
          title: 'Recovery Protocols',
          items: [
            'Sleep seven to nine hours most nights and protect wind down routines.',
            'Use light movement and stretching on recovery days to ease soreness.',
            'Eat enough protein and carbohydrates after training to refuel and repair.',
            'Reduce training stress during life stress spikes to prevent overload.',
            'Hydrate and include electrolytes thoughtfully during heat or long sessions.',
            'Monitor fatigue and adjust blocks before performance drops persist.',
          ],
        },
        {
          title: 'Sleep Hygiene',
          items: [
            'Keep regular sleep and wake times even on weekends to stabilize rhythms.',
            'Dim lights and avoid screens in the last hour before bed to aid relaxation.',
            'Maintain a cool, dark, quiet bedroom and remove bright clocks from view.',
            'Avoid heavy meals and stimulants late in the day to prevent sleep disruption.',
            'Use calming activities like reading or breathing to transition into sleep.',
            'If awake too long, get up for a short calm activity and then return to bed.',
          ],
        },
        {
          title: 'Stress Regulation',
          items: [
            'Use simple breathing patterns like box breathing during stressful moments.',
            'Organize work with time blocks and define top three tasks per day.',
            'Batch errands and reduce constant context switching to protect focus.',
            'Schedule breaks and short walks to lower tension and reset attention.',
            'Limit notifications and set clear availability windows for messaging.',
            'Reframe setbacks and practice self compassion to sustain momentum.',
          ],
        },
        {
          title: 'Mental Health Practices',
          items: [
            'Use brief daily mindfulness sessions or guided breathing to lower arousal.',
            'Journal worries and plans to externalize thoughts and reduce rumination.',
            'Connect with trusted people and share concerns before they accumulate.',
            'Limit doomscrolling and curate feeds to reduce unnecessary stress inputs.',
            'Seek licensed support if persistent symptoms interfere with daily life.',
            'Combine therapy with lifestyle changes for the strongest long term results.',
          ],
        },
        {
          title: 'Social Health And Community',
          items: [
            'Schedule regular check ins with friends and family to maintain bonds.',
            'Join activity groups or classes that encourage movement and learning.',
            'Set boundaries and protect energy when demands become excessive.',
            'Share goals weekly within a small accountability circle for support.',
            'Plan light social activities outdoors for combined mood and health benefits.',
            'Practice kind speech and empathy to strengthen relationships rapidly.',
          ],
        },
        {
          title: 'Habit Design',
          items: [
            'Attach new habits to existing routines using clear anchors and cues.',
            'Start with a two minute version and grow once actions feel automatic.',
            'Use visible trackers and celebrate small wins to reinforce identity.',
            'Prefer repetition over intensity and avoid all or nothing patterns.',
            'Design environments that reduce friction and prompt intended actions.',
            'Build backup plans for busy days to protect streaks and continuity.',
          ],
        },
        {
          title: 'Environment Setup',
          items: [
            'Keep healthy snacks and water in visible locations throughout the home.',
            'Store workout gear where you will see it and can start quickly.',
            'Declutter work and rest areas to lower decision fatigue and stress.',
            'Use warm lighting at night and bright lighting during the day.',
            'Create quiet corners for reading, reflection, and mindful breathing.',
            'Post simple checklists in common areas to guide household routines.',
          ],
        },
        {
          title: 'Medical And Preventive Care',
          items: [
            'Schedule periodic checkups and recommended screenings based on age and risk.',
            'Know family history and personal risk factors and record them simply.',
            'Follow reputable guidance sources and avoid miracle cure claims.',
            'Maintain basic first aid supplies and emergency contacts visibly.',
            'Keep vaccination and health records organized and backed up.',
            'Consult professionals when new symptoms persist or escalate.',
          ],
        },
        {
          title: 'Tracking And Reflection',
          items: [
            'Journal weekly about energy, mood, nutrition, movement, and sleep patterns.',
            'Use simple logs for training and meals to guide realistic adjustments.',
            'Plan next week routines and appointments in one short session.',
            'Assess workloads and reduce non critical tasks during high stress periods.',
            'Review progress monthly and refine goals to match current life context.',
            'Celebrate inputs and process more than outcomes to sustain motivation.',
          ],
        },
      ],
      checklist: [
        'Hydration, sunlight, and short walks daily.',
        'Balanced plates and planned meals.',
        'Strength, cardio, mobility across the week.',
        'Wind down routine and steady sleep schedule.',
        'Breathing breaks and focused work blocks.',
        'Weekly review and realistic adjustments.',
      ],
    },
    nutrition: {
      description:
        'Build a sustainable nutrition system that supports energy, focus, and long‑term health. Emphasize whole foods, realistic portions, consistent meal rhythms, and practical planning. Prefer progress over perfection; small habits maintained beat short‑lived extremes.',
      sections: [
        {
          title: 'Whole Foods First',
          items: [
            'Base meals on vegetables, fruits, legumes, whole grains, and lean proteins.',
            'Prefer foods with short, recognizable ingredient lists over packaged snacks.',
            'Use herbs and spices to boost flavor while moderating salt.',
            'Rotate colors of produce to diversify micronutrients across the week.',
            'Keep staples like beans, oats, eggs, and frozen vegetables on hand.',
            'Limit ultra‑processed foods that drive cravings and roller‑coaster energy.',
          ],
        },
        {
          title: 'Macronutrient Balance',
          items: [
            'Include protein in each meal to support satiety and muscle repair.',
            'Favor complex carbohydrates for stable energy (oats, brown rice, yams).',
            'Add healthy fats (olive oil, avocado, nuts) for hormones and brain health.',
            'Balance plates visually: vegetables, protein, complex carbs, and fats.',
            'Adjust macro mix based on activity and satiety signals, not rigid rules.',
            'Avoid fear of any macro; aim for moderation and quality sources.',
          ],
        },
        {
          title: 'Meal Timing & Rhythm',
          items: [
            'Set consistent meal windows that align with your daily routine.',
            'Anchor mornings with a simple breakfast to stabilize appetite and focus.',
            'Avoid skipping meals when it leads to late overeating and poor choices.',
            'Use predictable times for main meals to reduce constant snacking.',
            'Plan lighter evening meals to support digestion and sleep quality.',
            'Adapt meal timing to training days to fuel and recover appropriately.',
          ],
        },
        {
          title: 'Portion & Satiety',
          items: [
            'Start with modest portions and add more if still hungry after 10 minutes.',
            'Use smaller plates and slow eating to improve satiety signals.',
            'Emphasize protein and fiber to reduce cravings and late snacking.',
            'Drink water before meals to distinguish thirst from hunger.',
            'Track “fullness” on a simple scale to avoid habitual overeating.',
            'Respect individual differences; portion needs vary by context and goals.',
          ],
        },
        {
          title: 'Smart Snacks',
          items: [
            'Prefer nuts, yogurt, fruit, or boiled eggs over sweets and chips.',
            'Pair carbs with protein or fat to slow absorption and stabilize energy.',
            'Keep grab‑and‑go options prepped to prevent impulse choices.',
            'Place snacks in visible, accessible spots and hide trigger foods.',
            'Use planned mini‑meals when schedules are tight to avoid vending machines.',
            'Avoid constant grazing; include intentional snack windows if needed.',
          ],
        },
        {
          title: 'Hydration',
          items: [
            'Carry a bottle and set reminders to drink water regularly.',
            'Use unsweetened teas and limit sugary beverages.',
            'Include electrolytes thoughtfully in heat or long workouts.',
            'Check urine color trends instead of fixating on exact amounts.',
            'Hydrate earlier in the day to reduce sleep disruptions.',
            'Pair hydration with movement breaks for habit stacking.',
          ],
        },
        {
          title: 'Label Literacy',
          items: [
            'Scan ingredient lists and prefer shorter, familiar items.',
            'Compare per‑serving values and watch deceptive portion sizes.',
            'Watch for hidden sugars, trans fats, and excessive sodium.',
            'Identify ultra‑processed cues: many additives and sweeteners.',
            'Use fiber and protein metrics to judge satiety potential.',
            'Avoid marketing buzzwords; read the actual nutrition facts.',
          ],
        },
        {
          title: 'Budget Nutrition',
          items: [
            'Buy seasonal produce and staple grains/beans in bulk.',
            'Batch cook and freeze portions to reduce waste and costs.',
            'Use simple recipes with overlapping ingredients.',
            'Leverage local markets and compare store brands vs name brands.',
            'Plan menus before shopping; stick to list to avoid impulse buys.',
            'Cook larger batches to create affordable “next‑day” meals.',
          ],
        },
        {
          title: 'Cooking Methods',
          items: [
            'Prefer baking, grilling, steaming, and sautéing over deep frying.',
            'Use non‑stick pans and minimal oil for lighter dishes.',
            'Season generously with herbs and aromatics to satisfy without excess fat.',
            'Prep vegetables in bulk for easy stir‑fries and soups.',
            'Marinate lean proteins to improve tenderness and flavor.',
            'Keep a “base” of onions, tomatoes, peppers for quick, healthy sauces.',
          ],
        },
        {
          title: 'Special Contexts',
          items: [
            'Adapt for allergies or intolerances using safe substitutions.',
            'Consult professionals for medical conditions or strict diets.',
            'Plan travel meals to avoid airport defaults and fast‑food overload.',
            'Use simple portable options (nuts, fruit, bars) when in transit.',
            'Maintain hydration and lighter meals in hot climates.',
            'Respect cultural and religious food rules during events and visits.',
          ],
        },
        {
          title: 'Cultural Foods',
          items: [
            'Embrace traditional staples prepared with lighter methods.',
            'Balance festive meals with lighter days around them.',
            'Share family recipes and evolve them gently over time.',
            'Prefer home‑cooked versions to control ingredients and portions.',
            'Learn local produce and grains to expand healthy options.',
            'Celebrate culture through food without turning every day into a feast.',
          ],
        },
        {
          title: 'Eating Out',
          items: [
            'Scan menus for grilled, baked, or steamed options.',
            'Request dressings/sauces on the side to control portions.',
            'Split large meals or save half for later when appropriate.',
            'Favor vegetables and lean proteins; limit heavy sides.',
            'Drink water first; avoid starting meals with sugary drinks.',
            'Plan dining out within your weekly budget and nutrition targets.',
          ],
        },
        {
          title: 'Micronutrients',
          items: [
            'Diversify produce colors to cover vitamins and minerals broadly.',
            'Include leafy greens, citrus, berries, and cruciferous vegetables weekly.',
            'Use fortified staples judiciously when dietary gaps exist.',
            'Consider lab checks for deficiencies if symptoms persist.',
            'Balance supplements with food sources; avoid overreliance.',
            'Review micronutrient needs during pregnancy and aging.',
          ],
        },
        {
          title: 'Gut Health',
          items: [
            'Increase fiber gradually to avoid discomfort.',
            'Include fermented foods (yogurt, kefir) when tolerated.',
            'Hydrate well to support digestion and regularity.',
            'Limit ultra‑processed foods that disrupt satiety and gut signals.',
            'Observe personal triggers and adjust choices accordingly.',
            'Seek professional help for persistent GI symptoms.',
          ],
        },
        {
          title: 'Consistency & Tracking',
          items: [
            'Keep a simple food log for awareness without obsession.',
            'Track energy, mood, and sleep alongside meals to find patterns.',
            'Iterate weekly; adjust portions and recipes based on results.',
            'Prefer habit streaks over strict macro targets in early stages.',
            'Use visual cues and checklists to maintain planning routines.',
            'Review monthly and refine goals to match current life demands.',
          ],
        },
        {
          title: 'Myths & Pitfalls',
          items: [
            'Avoid all‑or‑nothing thinking; small improvements compound.',
            'Beware quick‑fix diets promising extreme results.',
            'Don’t demonize entire food groups without medical need.',
            'Recognize marketing claims vs evidence‑based guidance.',
            'Expect plateaus; adjust inputs gradually, not drastically.',
            'Prioritize sustainable patterns over temporary hacks.',
          ],
        },
      ],
    },
    fitness: {
      description:
        'Build a sustainable training system with balanced strength, cardio, and mobility. Emphasize technique, gradual progression, recovery, sleep, and consistent programming. Prefer realistic sessions over extremes; small improvements maintained weekly compound into durable fitness.',
      sections: [
        {
          title: 'Safety First',
          items: [
            'Warm up dynamically before training and cool down after each session.',
            'Use proper form; reduce load or range when technique breaks.',
            'Scale movements to your level and avoid ego lifting and unsafe maxes.',
            'Set clear failure limits to protect joints and connective tissue.',
            'Respect pain signals; distinguish normal effort from injury risk.',
            'Maintain clear training zones for skill, strength, and conditioning.',
          ],
        },
        {
          title: 'Technique Essentials',
          items: [
            'Learn neutral spine, bracing, and safe joint stacking in core lifts.',
            'Use full‑body tension and controlled tempo to build stability.',
            'Film key lifts occasionally to audit bar path and depth objectively.',
            'Practice patterning with lighter loads before adding intensity.',
            'Cue simple focus points (e.g., “chest up”, “drive feet”, “track knees”).',
            'Revisit fundamentals monthly to prevent drift and reinforce quality.',
          ],
        },
        {
          title: 'Strength Blocks',
          items: [
            'Train compound lifts (squats, presses, hinges, pulls) 2–3x weekly.',
            'Progress via reps, sets, load, tempo, or density slowly and steadily.',
            'Use rep ranges appropriate to goals (5–8 strength, 8–12 hypertrophy).',
            'Add accessories to address weak links and balance movement patterns.',
            'Track lifts and plan micro‑progressions to avoid random sessions.',
            'Deload periodically to consolidate gains and manage fatigue.',
          ],
        },
        {
          title: 'Cardio & Conditioning',
          items: [
            'Mix steady state and intervals across the week for capacity and power.',
            'Choose joint‑friendly modes (cycling, brisk walking, swimming).',
            'Use heart rate zones or talk tests to manage intensity intelligently.',
            'Progress minutes or interval volume gradually; avoid sudden spikes.',
            'Prefer outdoor sessions when feasible for mood and sunlight benefits.',
            'Pair light cardio on recovery days to promote circulation.',
          ],
        },
        {
          title: 'Mobility & Core',
          items: [
            'Run short daily mobility blocks for tight areas (hips, thoracic spine).',
            'Warm up dynamically and use static stretches post‑training.',
            'Train anti‑extension/rotation core patterns (planks, dead bugs, carries).',
            'Address asymmetries with unilateral work and tempo control.',
            'Integrate balance drills to support ankle and knee stability.',
            'Track a few mobility drills consistently rather than chasing novelty.',
          ],
        },
        {
          title: 'Recovery Protocols',
          items: [
            'Sleep 7–9 hours and protect wind‑down routines nightly.',
            'Use light movement, stretching, and breath work on rest days.',
            'Eat sufficient protein and carbs post‑training to refuel and repair.',
            'Hydrate and include electrolytes thoughtfully in heat or long sessions.',
            'Manage stress inputs; reduce training stress during life peaks.',
            'Monitor fatigue markers and adjust blocks before performance drops.',
          ],
        },
        {
          title: 'Training Programming',
          items: [
            'Organize the week with clear focus (e.g., strength, conditioning, skills).',
            'Use monthly blocks to rotate priorities and prevent plateaus.',
            'Plan progression and deloads; avoid random increases and overreach.',
            'Adjust volume during busy weeks to maintain momentum, not perfection.',
            'Include skill or technique days separate from heavy sessions.',
            'Keep sessions predictable and modular for flexible scheduling.',
          ],
        },
        {
          title: 'Warmups & Prep',
          items: [
            'Start with general pulse‑raising work (5–10 minutes).',
            'Mobilize joints specific to the session’s main lifts or movements.',
            'Use ramp‑up sets to groove technique and assess readiness.',
            'Cue breathing and bracing before heavy sets.',
            'Prime the nervous system with speed or explosive drills sparingly.',
            'Avoid skipping prep; warmups prevent injury and improve output.',
          ],
        },
        {
          title: 'Injury Management',
          items: [
            'Stop aggravating movements; swap or modify patterns promptly.',
            'Train around injuries using pain‑free ranges and lighter loads.',
            'Use isometrics or tempo work to retain capacity safely.',
            'Consult professionals if pain persists or worsens despite adjustments.',
            'Rebuild gradually with tolerance tests and careful volume ramps.',
            'Record triggers and recoveries to guide future prevention.',
          ],
        },
        {
          title: 'Equipment & Home Training',
          items: [
            'Use bands, dumbbells, and bodyweight circuits in small spaces.',
            'Create a compact zone with mat, adjustable DBs, and a door‑anchor band.',
            'Leverage short 10–20 minute micro‑sessions across busy days.',
            'Prioritize compounds and carries for efficient full‑body stimulus.',
            'Track sessions with minimal apps or paper logs for adherence.',
            'Invest gradually; focus on essentials before fancy gear.',
          ],
        },
        {
          title: 'Outdoor Options',
          items: [
            'Use hills, stairs, park circuits, and playgrounds creatively.',
            'Blend sunlight and movement for mood and circadian benefits.',
            'Vary terrain and elevation for robust conditioning.',
            'Hydrate and protect skin during mid‑day training.',
            'Plan routes with safety and visibility in mind.',
            'Pair outdoor sessions with social accountability for consistency.',
          ],
        },
        {
          title: 'Nutrition For Training',
          items: [
            'Anchor meals with protein and fiber to support recovery.',
            'Time carbs nearer sessions to fuel performance if needed.',
            'Use simple post‑training meals for refuel (protein + carbs).',
            'Hydrate and include electrolytes in longer or hot sessions.',
            'Avoid drastic diet changes during high‑stress blocks.',
            'Adjust portions gradually based on outcomes, not fads.',
          ],
        },
        {
          title: 'Mindset & Motivation',
          items: [
            'Set process goals (sessions completed) over outcome obsessions.',
            'Use habit stacking and calendar blocks for predictability.',
            'Celebrate small wins weekly to reinforce identity.',
            'Train with partners or groups to improve adherence.',
            'Expect plateaus; adjust inputs without panic.',
            'Keep training enjoyable to sustain the long game.',
          ],
        },
        {
          title: 'Tracking & Review',
          items: [
            'Log sessions, loads, reps, and perceived effort simply.',
            'Review monthly trends and refine targets realistically.',
            'Use milestones (reps, minutes, distances) to see progress.',
            'Record readiness and sleep to correlate performance.',
            'Adjust plans based on the data you actually collect.',
            'Prefer consistent logs over perfect tracking apps.',
          ],
        },
        {
          title: 'Community & Support',
          items: [
            'Share goals and weekly summaries for accountability.',
            'Join beginner‑friendly classes when starting new skills.',
            'Learn from coaches or mentors to shortcut common errors.',
            'Contribute to group routines to stay engaged.',
            'Respect diverse training paths; avoid comparison traps.',
            'Build a supportive environment that celebrates effort.',
          ],
        },
      ],
    },
    'mental-wellness': {
      description:
        'Strengthen mental health through daily practices that regulate stress, improve sleep, nurture relationships, and build resilient thought patterns. Focus on repeatable routines, gentle progress, and evidence‑informed strategies integrated into regular life.',
      sections: [
        {
          title: 'Mindfulness Fundamentals',
          items: [
            'Practice brief breathing or meditation sessions daily.',
            'Use body scans to observe tension and let it release.',
            'Anchor attention with simple cues (breath, sounds).',
            'Accept thoughts without judgment; return to the anchor.',
            'Start with 2–5 minutes and extend gradually over weeks.',
            'Prefer consistency over duration to build the habit.',
          ],
        },
        {
          title: 'Stress Buffers',
          items: [
            'Schedule short breaks; stand, stretch, or walk.',
            'Batch tasks to reduce constant context switching.',
            'Use focus modes and mute non‑urgent notifications.',
            'Spend light time outdoors to reset mood and attention.',
            'Pair breaks with hydration or breath work for habit stacking.',
            'Protect recovery windows after intense work blocks.',
          ],
        },
        {
          title: 'Sleep & Mood',
          items: [
            'Keep regular sleep/wake times to stabilize rhythms.',
            'Dim lights and reduce screens in the last hour.',
            'Avoid heavy late meals and excess caffeine.',
            'Use calming wind‑down rituals (reading, breathing).',
            'Track mood alongside sleep quality for patterns.',
            'Adjust evening routines based on observed triggers.',
          ],
        },
        {
          title: 'Social Support',
          items: [
            'Share concerns with trusted friends or family.',
            'Join supportive communities; avoid toxic spaces.',
            'Practice asking for help early, not after burnout.',
            'Schedule regular check‑ins to sustain connection.',
            'Offer reciprocal support to deepen relationships.',
            'Express gratitude to reinforce positive bonds.',
          ],
        },
        {
          title: 'Professional Help',
          items: [
            'Seek licensed support for persistent or severe symptoms.',
            'Follow evidence‑based plans; avoid miracle cures.',
            'Combine therapy with lifestyle changes for best outcomes.',
            'Clarify goals with your provider and track progress.',
            'Discuss medications openly about risks/benefits.',
            'Review plans periodically and adjust as needed.',
          ],
        },
        {
          title: 'Digital Hygiene',
          items: [
            'Limit doomscrolling; curate feeds intentionally.',
            'Schedule screen‑free blocks each day.',
            'Use app limits to prevent late‑night spirals.',
            'Move devices out of the bedroom to protect sleep.',
            'Prefer long‑form content over constant micro‑stimuli.',
            'Mute or unfollow accounts that elevate anxiety.',
          ],
        },
        {
          title: 'Resilience Skills',
          items: [
            'Practice reframing to challenge catastrophic thoughts.',
            'Keep a gratitude log to highlight daily positives.',
            'Set small goals to rebuild momentum steadily.',
            'Track wins and effort, not just outcomes.',
            'Recognize progress during difficult periods.',
            'Use compassionate self‑talk when setbacks occur.',
          ],
        },
        {
          title: 'Creative Outlets',
          items: [
            'Draw, write, sing, or craft to express emotions.',
            'Choose low‑pressure hobbies to relax mindfully.',
            'Create with no performance expectations or deadlines.',
            'Share within supportive circles for connection.',
            'Use short, frequent sessions to sustain practice.',
            'Explore new mediums gently to spark curiosity.',
          ],
        },
        {
          title: 'Cognitive Tools',
          items: [
            'Identify thinking patterns (all‑or‑nothing, catastrophizing).',
            'Use thought records to test assumptions against evidence.',
            'Separate facts from interpretations during stress.',
            'Define problems clearly and generate options.',
            'Use “if‑then” plans for known triggers.',
            'Review outcomes and refine strategies calmly.',
          ],
        },
        {
          title: 'Emotional Regulation',
          items: [
            'Name emotions to reduce intensity and improve clarity.',
            'Use paced breathing to lower physiological arousal.',
            'Practice acceptance for feelings without acting impulsively.',
            'Apply grounding techniques (senses, surroundings).',
            'Delay responses; choose actions after emotions settle.',
            'Pair regulation with supportive self‑talk scripts.',
          ],
        },
        {
          title: 'Boundaries & Assertiveness',
          items: [
            'Define limits for time, energy, and commitments.',
            'Communicate requests clearly and respectfully.',
            'Use “no” when demands exceed capacity or values.',
            'Negotiate compromises without self‑sacrifice.',
            'Limit exposure to draining environments.',
            'Protect rest and recharge windows seriously.',
          ],
        },
        {
          title: 'Lifestyle Inputs',
          items: [
            'Use regular movement to elevate mood and reduce anxiety.',
            'Eat balanced meals to stabilize energy and focus.',
            'Spend light time in nature for mood benefits.',
            'Hydrate consistently; avoid excessive stimulants.',
            'Keep alcohol low to protect sleep and mood stability.',
            'Track inputs alongside mental state to see links.',
          ],
        },
        {
          title: 'Environment Design',
          items: [
            'Create calm zones for reading, reflection, and breath work.',
            'Reduce clutter in work and rest areas to lower stress.',
            'Use warm lighting at night; bright during the day.',
            'Add plants or art that evokes calm and meaning.',
            'Control noise with headphones or quiet spaces.',
            'Keep supportive reminders visible (notes, quotes).',
          ],
        },
        {
          title: 'Routine Integration',
          items: [
            'Embed short practices into existing daily routines.',
            'Pair mental wellness habits with physical activity.',
            'Use tiny versions on busy days to protect streaks.',
            'Schedule weekly reviews to adjust doses and tools.',
            'Keep routines flexible yet anchored to time cues.',
            'Scale practices based on season and workload.',
          ],
        },
        {
          title: 'Crisis Plan',
          items: [
            'Prepare contacts and local resources in advance.',
            'Note personal warning signs and early actions.',
            'Reduce access to triggers during vulnerable periods.',
            'Define safe spaces and grounding steps.',
            'Share the plan with trusted people for support.',
            'Rehearse steps calmly when stable to build confidence.',
          ],
        },
        {
          title: 'Tracking & Reflection',
          items: [
            'Log mood, sleep, stress, and helpful practices.',
            'Spot patterns and adjust routines realistically.',
            'Celebrate small improvements weekly.',
            'Record helpful phrases for future difficult moments.',
            'Document support resources and positive contacts.',
            'Review monthly to refine and retire ineffective tactics.',
          ],
        },
      ],
    },
    'stress-management': {
      description:
        'Lower chronic stress with practical routines: breathing, prioritization, movement, environment design, boundaries, sleep support, and resilient mindset. Favor small repeatable actions embedded into daily life over occasional intense efforts.',
      sections: [
        {
          title: 'Breathing',
          items: [
            'Use box breathing (4‑4‑4‑4) or 4‑7‑8 during acute spikes.',
            'Practice slow nasal breathing during transitions between tasks.',
            'Pair breaths with posture resets to release upper‑body tension.',
            'Schedule 1–2 minute breath breaks each hour to prevent buildup.',
            'Use paced breathing before crucial conversations or presentations.',
            'Anchor morning routines with 10 slow breaths to set tone.',
          ],
        },
        {
          title: 'Priorities',
          items: [
            'Define daily top‑3 tasks that must happen regardless of chaos.',
            'Use time blocks; protect deep work windows from interruptions.',
            'Defer non‑critical tasks to preserve focus on priority outcomes.',
            'Batch errands and messages to reduce cognitive switching costs.',
            'Write tasks the evening before to reduce morning decision load.',
            'Review priorities weekly and retire low‑impact commitments.',
          ],
        },
        {
          title: 'Movement',
          items: [
            'Insert short walks or mobility breaks hourly to reset physiology.',
            'Use micro‑workouts (5–10 minutes) to release accumulated tension.',
            'Prefer outdoor movement for sunlight and mood benefits.',
            'Stretch neck, thoracic spine, and hips after long sitting blocks.',
            'Combine movement with hydration for habit stacking.',
            'Track steps lightly to encourage regular motion without obsession.',
          ],
        },
        {
          title: 'Environment',
          items: [
            'Declutter key work and rest areas to lower visual stress.',
            'Control noise with headphones, white noise, or quiet zones.',
            'Add plants or natural light where possible for calm.',
            'Use warm light in evenings and bright light in mornings.',
            'Keep essentials in visible, reachable spots to reduce friction.',
            'Create a small “reset corner” for quick calm practices.',
          ],
        },
        {
          title: 'Boundaries',
          items: [
            'Limit after‑hours messages; set availability expectations clearly.',
            'Mute non‑urgent channels during deep work windows.',
            'Say no to overload and renegotiate unrealistic timelines.',
            'Schedule recovery periods after intense days or sprints.',
            'Define meeting rules: agendas, durations, outcomes.',
            'Protect personal routines as non‑negotiable appointments.',
          ],
        },
        {
          title: 'Breaks',
          items: [
            'Use Pomodoro cycles with intentional recharge pauses.',
            'Hydrate, stretch, or take brief mindful walks during breaks.',
            'Plan mini‑rewards after deep work blocks to reinforce focus.',
            'Avoid doomscrolling; choose restorative break activities.',
            'Include micro‑social touchpoints to boost mood.',
            'Respect break boundaries; return on time to sustain rhythm.',
          ],
        },
        {
          title: 'Sleep Support',
          items: [
            'Create a wind‑down ritual with low light and screens off.',
            'Avoid stimulants late and heavy evening meals.',
            'Keep the room dark, cool, and quiet to promote deep sleep.',
            'Journal next‑day priorities briefly to reduce rumination.',
            'Use relaxing music or breathing to transition into rest.',
            'Maintain consistent sleep/wake times to stabilize hormones.',
          ],
        },
        {
          title: 'Planning',
          items: [
            'Run weekly reviews and schedule highlights visibly.',
            'Prepare meals, clothes, and essentials in advance.',
            'Use templates or checklists for recurring tasks.',
            'Chunk large projects into concrete steps with owners and dates.',
            'Automate reminders for critical deadlines.',
            'Leave buffer blocks daily for surprises and recovery.',
          ],
        },
        {
          title: 'Mindset',
          items: [
            'Reframe setbacks into learning signals; iterate calmly.',
            'Track inputs and effort rather than obsess over outcomes.',
            'Limit perfectionism; prefer steady progress.',
            'Practice compassionate self‑talk during high‑stress weeks.',
            'Use gratitude and small wins logs to sustain motivation.',
            'Recognize triggers and choose prepared responses.',
          ],
        },
        {
          title: 'Support',
          items: [
            'Discuss workloads with managers or family to redistribute tasks.',
            'Ask for help early; avoid silent burnout patterns.',
            'Share stress tools and checklists within your circle.',
            'Use accountability partners for break adherence and focus blocks.',
            'Join supportive communities that normalize healthy pacing.',
            'Seek professional guidance if symptoms persist despite changes.',
          ],
        },
        {
          title: 'Digital Detox',
          items: [
            'Schedule screen‑free blocks and device‑free meals.',
            'Disable non‑essential notifications during deep work.',
            'Curate feeds; unfollow anxiety‑inducing accounts.',
            'Limit late‑night device use to protect sleep.',
            'Batch messaging twice daily to reduce constant pings.',
            'Use app timers to cap high‑stimulus platforms.',
          ],
        },
        {
          title: 'Workflows',
          items: [
            'Write agendas for meetings; end with clear next steps.',
            'Use kanban or simple lists to visualize work.',
            'Define “done” criteria to reduce rework and uncertainty.',
            'Close loops daily; respond or archive rather than let linger.',
            'Template common requests to speed up responses.',
            'Review bottlenecks weekly and adjust processes.',
          ],
        },
        {
          title: 'Time Management',
          items: [
            'Estimate realistically and include buffer time.',
            'Group similar tasks to reduce context switching.',
            'Protect mornings for deep work when possible.',
            'Set hard cutoffs to exit low‑value loops.',
            'Use timers to start tasks you avoid.',
            'Track actual time briefly to refine planning.',
          ],
        },
        {
          title: 'Nutrition & Stress',
          items: [
            'Favor balanced meals with protein and fiber to stabilize energy.',
            'Limit caffeine during high‑stress days to avoid jitters.',
            'Hydrate regularly; pair water with stretch breaks.',
            'Plan snacks to prevent impulse sugar spikes.',
            'Eat lighter evenings to support sleep quality.',
            'Monitor triggers (skipped meals) that worsen stress.',
          ],
        },
        {
          title: 'Emergency Toolkit',
          items: [
            'Prepare a short list of rapid calming steps (breath, walk, call).',
            'Keep contacts and key resources handy.',
            'Use grounding techniques (5‑4‑3‑2‑1 senses).',
            'Step outside for light and fresh air when possible.',
            'De‑escalate with space and reduced stimuli.',
            'Reassess tasks; postpone non‑critical items.',
          ],
        },
        {
          title: 'Tracking & Review',
          items: [
            'Log stress levels, sleep, and helpful routines briefly.',
            'Spot patterns and adjust schedules realistically.',
            'Celebrate adherence to breaks and boundaries.',
            'Record triggers and effective responses.',
            'Retire ineffective tactics and keep what works.',
            'Review monthly; refine and simplify further.',
          ],
        },
      ],
    },
    sleep: {
      description:
        'Improve sleep quality with consistent schedules, low‑stimulus evenings, optimized environments, and gentle relaxation tools. Treat sleep as a daily practice; small adjustments maintained over time deliver durable results.',
      sections: [
        {
          title: 'Sleep Foundations',
          items: [
            { text: 'Prioritize 7–9 hours for most adults; teens may need more.', detail: 'Aim for a consistent nightly window that fits your life. If current sleep is lower, add 15–30 minutes gradually until you reach a stable target.' },
            { text: 'Protect regular sleep and wake times across the week.', detail: 'Consistency anchors circadian rhythms. Fix wake time first; bed time will align as your sleep pressure increases at night.' },
            { text: 'Avoid large swings on weekends that disrupt rhythms.', detail: 'Big schedule changes confuse your internal clock. Keep differences within about one hour when possible.' },
            { text: 'Anchor mornings with light exposure and brief movement.', detail: 'Bright light and gentle activity signal “daytime” to your brain, improving alertness and setting up easier nights.' },
            { text: 'Keep caffeine moderate and earlier in the day.', detail: 'Caffeine’s effects can last for hours. Restrict to morning–midday to reduce sleep onset issues and nighttime awakenings.' },
            { text: 'Treat sleep like training: repeat the basics consistently.', detail: 'Master the fundamentals and apply them daily. Small, steady behaviors outperform sporadic, intense changes.' },
          ],
        },
        {
          title: 'Consistent Schedule',
          items: [
            { text: 'Set fixed wake time first; bed time adjusts naturally.', detail: 'Wake up at the same time daily, even after poor nights. Sleep pressure will build and bed time will normalize.' },
            { text: 'Use daily anchors (meals, exercise, light) to stabilize timing.', detail: 'Keep meals and movement at predictable times. These cues help synchronize your body’s clocks.' },
            { text: 'Plan relaxing pre‑bed rituals; start 60–90 minutes before sleep.', detail: 'Create a gentle wind‑down routine: dim lights, light stretching, quiet reading, and calming breath work.' },
            { text: 'Avoid long daytime sleep deficits that lead to late‑night rebounds.', detail: 'Leaving major tasks late can push bed time. Spread demanding work earlier and add buffers.' },
            { text: 'Maintain schedule during travel and busy weeks as much as possible.', detail: 'Protect anchors and wind‑down routines even in hectic periods to prevent large rhythm shifts.' },
            { text: 'Keep a simple calendar reminder for wind‑down start.', detail: 'Set an alarm to begin the evening routine so you do not drift into late, stimulating activities.' },
          ],
        },
        {
          title: 'Evening Routine',
          items: [
            { text: 'Dim lights and reduce screens in the last hour.', detail: 'Lower brightness and switch to warm light. If screens are required, use night modes and keep content calm.' },
            { text: 'Switch to low‑stimulation activities (reading, stretching).', detail: 'Choose quiet tasks that settle the mind. Avoid problem‑solving or competitive content near bed time.' },
            { text: 'Avoid heavy meals and intense exercise late evening.', detail: 'Large meals and hard workouts raise body temperature and alertness, delaying sleep onset.' },
            { text: 'Use warm shower or bath to promote relaxation.', detail: 'A warm rinse followed by cooling helps the body naturally prepare for sleep.' },
            { text: 'Journal to park thoughts for tomorrow.', detail: 'Write brief plans and concerns so the brain can let go. End with one next action per task.' },
            { text: 'Practice paced breathing or gentle meditation before bed.', detail: 'Use slow nasal breathing or short guided sessions to lower arousal and ease the transition to sleep.' },
          ],
        },
        {
          title: 'Light Management',
          items: [
            { text: 'Get bright morning light for circadian alignment.', detail: 'Seek outdoor light shortly after waking. Even 10–15 minutes improves alertness and synchronizes your internal clock.' },
            { text: 'Dim indoor lighting after sunset; prefer warm tones.', detail: 'Lower intensity and color temperature at night to signal winding down.' },
            { text: 'Limit blue‑heavy screens at night; use filters if needed.', detail: 'If screens are unavoidable, enable night filters and reduce brightness significantly.' },
            { text: 'Expose eyes to natural light during the day when possible.', detail: 'Regular daylight helps maintain healthy rhythms and supports mood and energy.' },
            { text: 'Keep bedroom dark with blackout curtains if sensitive.', detail: 'Block streetlights and early dawn light that can disrupt sleep continuity.' },
            { text: 'Use low night‑lights for safe navigation without bright exposure.', detail: 'Choose minimal, warm light for brief nighttime needs to avoid full wakefulness.' },
          ],
        },
        {
          title: 'Caffeine & Nutrition',
          items: [
            { text: 'Limit caffeine after mid‑day to reduce sleep disruption.', detail: 'Caffeine timing matters more than total dose. Shift intake earlier to protect sleep onset.' },
            { text: 'Avoid large late meals; prefer lighter dinners.', detail: 'Digesting big meals raises temperature and can cause reflux. Keep evening meals simple and moderate.' },
            { text: 'Balance evening snacks with protein/fiber to avoid sugar spikes.', detail: 'Stable blood sugar reduces nighttime awakenings. Pair fruit or whole‑grain carbs with yogurt or nuts.' },
            { text: 'Hydrate earlier to reduce nocturnal awakenings.', detail: 'Front‑load fluids and taper toward evening to minimize bathroom trips.' },
            { text: 'Moderate alcohol; it fragments sleep even if it aids onset.', detail: 'Alcohol shortens deep sleep and increases awakenings. Reduce or avoid near bedtime.' },
            { text: 'Observe personal triggers and adjust accordingly.', detail: 'Track how foods and timing affect your nights and fine‑tune choices accordingly.' },
          ],
        },
        {
          title: 'Environment',
          items: [
            { text: 'Keep bedroom dark, cool, and quiet.', detail: 'Set a cool room temperature, block light sources, and minimize noise to support deeper sleep.' },
            { text: 'Declutter space to reduce visual stress.', detail: 'A tidy room lowers mental load and speeds the wind‑down process.' },
            { text: 'Use comfortable bedding and breathable fabrics.', detail: 'Choose materials that regulate heat and moisture to prevent discomfort overnight.' },
            { text: 'Reserve bed for sleep and intimacy; avoid work in bed.', detail: 'Keeping the bed for rest strengthens the mental association with sleep, easing onset.' },
            { text: 'Place clocks out of direct view to reduce time anxiety.', detail: 'Clock‑watching increases stress. Turn displays away or use non‑glowing clocks.' },
            { text: 'Add calming cues (aroma, soft light) sparingly.', detail: 'Subtle sensory cues can help relaxation; keep them minimal to avoid stimulation.' },
          ],
        },
        {
          title: 'Temperature & Bedding',
          items: [
            'Set room to a cool range; adjust seasonally as needed.',
            'Use breathable sheets and layers for easy adjustment.',
            'Try separate blankets for couples with different needs.',
            'Avoid heavy duvets that trap heat if you overheat.',
            'Consider cooling pads or fans if temperature is a barrier.',
            'Warm feet slightly to aid sleep onset if needed.',
          ],
        },
        {
          title: 'Noise',
          items: [
            'Use earplugs or white noise to mask disruptive sounds.',
            'Reduce intermittent noises; stabilize ambient levels.',
            'Place noisy devices outside the bedroom if possible.',
            'Communicate household quiet hours respectfully.',
            'Test different soundscapes to find calming options.',
            'Protect sleep from late‑night notifications.',
          ],
        },
        {
          title: 'Digital Hygiene',
          items: [
            'Create device‑free zones near bedtime.',
            'Disable non‑essential notifications at night.',
            'Avoid doomscrolling; choose calming content if screens remain.',
            'Move chargers outside the bedroom when practical.',
            'Use night mode and reduced brightness after sunset.',
            'Replace late messaging with next‑day planning notes.',
          ],
        },
        {
          title: 'Pre‑sleep Relaxation',
          items: [
            'Practice paced breathing to lower arousal.',
            'Use progressive muscle relaxation or body scans.',
            'Journal worries and next steps to externalize loops.',
            'Try gentle stretches for neck, shoulders, and hips.',
            'Use calming audio or guided meditations sparingly.',
            'Develop a simple ritual that signals “time to rest”.',
          ],
        },
        {
          title: 'Stress & Rumination',
          items: [
            'Park tasks by writing them down; choose one next action for tomorrow.',
            'Use cognitive defusion: notice thoughts, let them pass without engagement.',
            'Practice acceptance; don’t force sleep—invite it.',
            'Avoid clock‑watching; focus on breath or sensations.',
            'If awake >20–30 minutes, get up for a brief calm reset.',
            'Return to bed when drowsy; repeat without frustration.',
          ],
        },
        {
          title: 'Naps',
          items: [
            'Keep naps short (10–30 minutes) and earlier in the day.',
            'Use naps strategically after sleep‑loss days.',
            'Avoid long late naps that delay bedtime.',
            'Set alarms and create a quiet nap environment.',
            'Combine with a brief walk or light after waking.',
            'Skip naps if they consistently impair night sleep.',
          ],
        },
        {
          title: 'Chronotype Adaptation',
          items: [
            'Identify natural tendencies (early vs late).',
            'Use light timing and meal anchors to nudge schedules.',
            'Shift in small steps (15–30 minutes) over days.',
            'Align demanding work with your alertness windows.',
            'Avoid sudden large shifts that trigger fatigue.',
            'Protect sleep during season changes and travel.',
          ],
        },
        {
          title: 'Travel & Jet Lag',
          items: [
            'Adjust sleep/wake times gradually before trips.',
            'Use morning light exposure at the destination.',
            'Anchor meals and movement to local time quickly.',
            'Hydrate and choose lighter dinners initially.',
            'Nap briefly early afternoon if needed; avoid long late naps.',
            'Plan flexible schedules the first 1–2 days.',
          ],
        },
        {
          title: 'Sleep & Performance',
          items: [
            'Match training intensity with sleep capacity.',
            'Deload or lighten sessions during poor sleep weeks.',
            'Avoid stimulants as compensation for chronic deficits.',
            'Use gentle cardio and mobility on recovery days.',
            'Protect pre‑competition nights with calm routines.',
            'Review data trends; rest before performance drops.',
          ],
        },
        {
          title: 'Tracking & Review',
          items: [
            'Track sleep and mood lightly; avoid obsession.',
            'Spot patterns with inputs (caffeine, screens, stress).',
            'Iterate routines monthly based on observed outcomes.',
            'Prefer adherence to basics over gadget chasing.',
            'Consult professionals for persistent sleep issues.',
            'Celebrate streaks and small improvements.',
          ],
        },
      ],
    },
    hygiene: {
      description:
        'Personal hygiene practices that reduce illness, improve comfort, and support social confidence.',
      sections: [
        {
          title: 'Hand Hygiene',
          items: [
            { text: 'Wash hands with soap for ~20 seconds, especially before meals.', detail: 'Scrub palms, backs of hands, between fingers, and under nails. Rinse thoroughly and dry with a clean towel.' },
            { text: 'Carry sanitizer for situations without water.', detail: 'Use alcohol‑based sanitizer (≥60%). Apply enough to cover all surfaces and rub until dry.' },
            { text: 'Avoid face touching during public outings.', detail: 'Reduce transfer of microbes to eyes, nose, and mouth. Use tissues or clean hands if you must touch your face.' },
            { text: 'Clean hands after high‑touch surfaces.', detail: 'Sanitize after handling door handles, railings, ATMs, and shared devices.' },
            { text: 'Use hand care to prevent cracking.', detail: 'Moisturize after frequent washing to maintain skin barrier and reduce irritation.' },
            { text: 'Teach and model good technique at home.', detail: 'Show kids and family proper washing steps and set routine cues (e.g., arriving home).' },
          ],
        },
        {
          title: 'Oral Care',
          items: [
            { text: 'Brush twice daily and floss once; replace brushes regularly.', detail: 'Use fluoride toothpaste and gentle circular motions. Replace manual or electric brush heads every 3 months.' },
            { text: 'Limit sugary snacks and late‑night eating.', detail: 'Sugar feeds plaque bacteria. Avoid eating right before bed to reduce overnight acid exposure.' },
            { text: 'Schedule periodic dental checkups.', detail: 'Aim for 6–12 month intervals depending on personal risk. Address issues early to avoid complications.' },
            { text: 'Clean the tongue lightly.', detail: 'A tongue scraper or gentle brushing reduces odor‑causing compounds and bacterial load.' },
            { text: 'Use mouthwash judiciously.', detail: 'Alcohol‑free options can reduce plaque and freshen breath without irritating tissues.' },
            { text: 'Track sensitive spots and bleeding gums.', detail: 'Persistent symptoms warrant professional evaluation for gum disease or enamel issues.' },
          ],
        },
        {
          title: 'Skin & Hair',
          items: [
            { text: 'Choose gentle cleansers and moisturize after bathing.', detail: 'Use lukewarm water; avoid harsh soaps. Apply moisturizer while skin is slightly damp to lock in hydration.' },
            { text: 'Protect skin from excessive sun; hydrate well.', detail: 'Use broad‑spectrum protection and cover exposed areas. Drink water consistently throughout the day.' },
            { text: 'Keep hair care simple and consistent.', detail: 'Match shampoo/conditioner to scalp and hair type. Avoid over‑washing that strips natural oils.' },
            { text: 'Manage common irritants.', detail: 'Patch test new products and avoid fragrances if sensitive. Seek hypoallergenic options when needed.' },
            { text: 'Trim nails and clean regularly.', detail: 'Short, filed nails reduce dirt accumulation and the risk of scratches.' },
            { text: 'Mind shared tools and towels.', detail: 'Avoid sharing combs, razors, or towels to reduce microbial transfer.' },
          ],
        },
        {
          title: 'Clothing',
          items: [
            { text: 'Wear breathable fabrics; wash sweaty gear promptly.', detail: 'Choose cotton or moisture‑wicking materials. Wash gym clothes soon after use to prevent odor.' },
            { text: 'Rotate shoes and air out frequently.', detail: 'Alternate pairs to allow drying and reduce bacterial growth inside footwear.' },
            { text: 'Store clothes dry to prevent odors.', detail: 'Dry fully before storing to avoid musty smells and mildew.' },
            { text: 'Separate work and home garments.', detail: 'Keep outdoor clothes from contact with bedding and sofas to minimize dirt transfer.' },
            { text: 'Use garment care labels.', detail: 'Follow washing and drying instructions to maintain fabric integrity and cleanliness.' },
            { text: 'Refresh infrequently worn items.', detail: 'Air out and lightly steam or press garments before special use to remove odors.' },
          ],
        },
        {
          title: 'Home Hygiene',
          items: [
            { text: 'Clean high‑touch surfaces regularly.', detail: 'Disinfect handles, switches, remotes, and shared devices at least weekly or after illness.' },
            { text: 'Ventilate rooms; use sunlight where possible.', detail: 'Open windows to improve air exchange and reduce indoor pollutants.' },
            { text: 'Declutter to simplify cleaning routines.', detail: 'Fewer items on counters and floors makes regular cleaning faster and more effective.' },
            { text: 'Use separate cleaning cloths per area.', detail: 'Assign kitchen, bathroom, and general cloths to prevent cross‑contamination.' },
            { text: 'Maintain bathroom hygiene.', detail: 'Clean sinks, toilet surfaces, and shower areas routinely; dry mats and curtains.' },
            { text: 'Schedule weekly tidy blocks.', detail: 'Create short recurring windows for laundry, surfaces, and floors to maintain baseline cleanliness.' },
          ],
        },
        {
          title: 'Food Safety',
          items: [
            { text: 'Cook meats thoroughly; refrigerate leftovers quickly.', detail: 'Use appropriate internal temperatures. Cool and store within two hours to prevent bacterial growth.' },
            { text: 'Wash produce and separate raw/cooked items.', detail: 'Rinse fruit and vegetables; use separate cutting boards for raw meat and ready‑to‑eat foods.' },
            { text: 'Follow safe reheating practices.', detail: 'Reheat to steaming hot throughout; avoid repeated reheats that increase risk.' },
            { text: 'Label and date stored foods.', detail: 'Track storage times and discard items beyond safe windows.' },
            { text: 'Keep cold chain during transport.', detail: 'Use coolers or insulated bags for perishable groceries in hot weather.' },
            { text: 'Sanitize prep areas after cooking.', detail: 'Clean counters and tools promptly, especially after handling raw meat.' },
          ],
        },
        {
          title: 'Public Spaces',
          items: [
            { text: 'Use tissues or elbows for coughs/sneezes.', detail: 'Cover properly to reduce droplet spread. Dispose of tissues and clean hands afterward.' },
            { text: 'Maintain respectful distance in crowded areas.', detail: 'Reduce close contact when possible, especially during illness seasons.' },
            { text: 'Wash hands after public transport.', detail: 'Clean hands after buses, trains, ride‑shares, and before eating.' },
            { text: 'Avoid touching shared surfaces unnecessarily.', detail: 'Use knuckles or elbows for buttons and handles when practical.' },
            { text: 'Carry a small hygiene kit.', detail: 'Include sanitizer, tissues, and a spare mask if needed for specific environments.' },
            { text: 'Respect local health advisories.', detail: 'Follow posted guidelines for clinics, schools, and event venues.' },
          ],
        },
        {
          title: 'Preventive Care',
          items: [
            { text: 'Follow recommended vaccinations and screenings.', detail: 'Check age‑ and risk‑appropriate schedules; maintain a simple record of completed items.' },
            { text: 'Know allergy triggers and carry required meds.', detail: 'Keep antihistamines or prescribed devices accessible and communicate needs to close contacts.' },
            { text: 'Use reputable sources for guidance.', detail: 'Prefer licensed professionals and evidence‑based references over unverified claims.' },
            { text: 'Schedule routine checkups.', detail: 'Plan annual or biannual visits for general health maintenance.' },
            { text: 'Maintain basic first‑aid supplies.', detail: 'Stock bandages, antiseptics, and pain relievers; review expiry dates periodically.' },
            { text: 'Prepare an emergency contacts list.', detail: 'Keep phone numbers for clinics, hotlines, and nearby trusted helpers.' },
          ],
        },
        {
          title: 'Laundry',
          items: [
            { text: 'Separate heavily soiled items and wash properly.', detail: 'Use appropriate temperature settings and pre‑treat stains for effective cleaning.' },
            { text: 'Dry fully to prevent damp odors.', detail: 'Ensure complete drying before folding or storing to reduce mildew risk.' },
            { text: 'Clean machines periodically.', detail: 'Run maintenance cycles, wipe seals, and clear filters to prevent buildup.' },
            { text: 'Use correct detergent amounts.', detail: 'Follow manufacturer guidelines; excess soap can leave residue and irritate skin.' },
            { text: 'Air out hampers.', detail: 'Prevent moisture accumulation by keeping laundry baskets dry and ventilated.' },
            { text: 'Store clean clothes properly.', detail: 'Fold or hang promptly to avoid wrinkles and dust accumulation.' },
          ],
        },
        {
          title: 'Consistency',
          items: [
            { text: 'Create weekly checklists for key tasks.', detail: 'List surfaces, rooms, and laundering steps to maintain a predictable cadence.' },
            { text: 'Keep supplies accessible in each room.', detail: 'Store small cleaning kits where needed to lower friction and prompt quick wipes.' },
            { text: 'Review and adjust routines seasonally.', detail: 'Adapt schedules and products to weather changes and household events.' },
            { text: 'Use brief daily resets.', detail: 'Five‑minute tidying bursts prevent buildup and make weekly tasks faster.' },
            { text: 'Share responsibilities clearly.', detail: 'Assign chores and track completion to keep standards consistent across the household.' },
            { text: 'Celebrate small wins and progress.', detail: 'Reinforce the habit loop by acknowledging effort and improvements.' },
          ],
        },
      ],
    },
    habits: {
      description:
        'Design simple, reliable habits that stick using small actions, clear cues, environment design, and feedback loops. Build identity around consistent practice, remove friction, and iterate based on real‑world results.',
      sections: [
        {
          title: 'Start Small',
          items: [
            { text: 'Define the 2‑minute version of any habit.', detail: 'Shrink the behavior to a version you can perform daily without negotiation; consistency builds foundations for scaling later.' },
            { text: 'Focus on repetition over intensity.', detail: 'Repeat tiny actions more often to encode automaticity; intensity is optional once frequency is reliable.' },
            { text: 'Use immediate cues and simple contexts.', detail: 'Pair the habit with a clear trigger (after breakfast, after shower) in a stable location to reduce decision load.' },
          ],
        },
        {
          title: 'Cues & Anchors',
          items: [
            { text: 'Attach new habits to existing routines.', detail: 'Use “After X, I will Y” formulas (habit stacking) so the preceding routine acts as a dependable cue.' },
            { text: 'Place visual cues in high‑traffic areas.', detail: 'Keep tools visible where you perform the habit (water bottle on desk, shoes by door) to prompt action.' },
            { text: 'Use alarms or checklists for consistency.', detail: 'Time‑based reminders and simple checklists externalize memory and maintain momentum through busy periods.' },
          ],
        },
        {
          title: 'Identity',
          items: [
            { text: 'Reinforce “the kind of person who…” statements.', detail: 'Adopt identity language (I am a walker) to align choices with self‑image and reduce internal resistance.' },
            { text: 'Track actions to see evidence of change.', detail: 'Collect simple proof (tally marks, app logs) that confirms identity; evidence strengthens belief and persistence.' },
            { text: 'Prefer steady identity shifts over quick fixes.', detail: 'Avoid dramatic changes that collapse under stress; steady identity growth survives schedule variability.' },
          ],
        },
        {
          title: 'Feedback',
          items: [
            { text: 'Log habits and review weekly.', detail: 'A brief weekly review highlights patterns and obstacles, guiding small adjustments without overhauls.' },
            { text: 'Use simple rewards and celebrate tiny wins.', detail: 'Immediate, modest rewards reinforce the loop; acknowledgment matters more than extravagance.' },
            { text: 'Share progress with a partner for accountability.', detail: 'Public or partner updates create gentle social pressure and encouragement.' },
          ],
        },
        {
          title: 'Environment',
          items: [
            { text: 'Reduce friction; prepare tools in advance.', detail: 'Lay out clothes, fill bottles, pre‑stage equipment so starting requires no extra decisions.' },
            { text: 'Remove temptations or relocate them.', detail: 'Move distractions out of sight or to difficult locations to prevent cue‑driven derailment.' },
            { text: 'Design spaces to prompt intended actions.', detail: 'Organize rooms so the default path supports the habit (mat ready for stretching, bowl on counter for fruit).' },
          ],
        },
        {
          title: 'Scheduling',
          items: [
            { text: 'Set realistic times that align with energy peaks.', detail: 'Schedule habits when energy is naturally higher to reduce willpower costs.' },
            { text: 'Plan “if‑then” contingencies for busy days.', detail: 'Define backups: If I miss morning, I will do a 5‑minute version at lunch.' },
            { text: 'Batch related habits in short stacks.', detail: 'Group small behaviors into quick sequences (stretch, water, breath) to improve efficiency.' },
          ],
        },
        {
          title: 'Streaks',
          items: [
            { text: 'Protect streaks with minimum viable actions.', detail: 'When overloaded, perform the smallest version to keep the streak alive and reduce restart friction.' },
            { text: 'Use habit trackers and calendars.', detail: 'Visual streaks on calendars or apps create momentum and a desire not to break the chain.' },
            { text: 'Expect slips; resume without guilt.', detail: 'Treat misses as neutral data; restart at next opportunity without self‑criticism.' },
          ],
        },
        {
          title: 'Iteration',
          items: [
            { text: 'Adjust scope every few weeks based on results.', detail: 'Increase or decrease duration/complexity based on adherence, not ambition.' },
            { text: 'Replace failing cues or contexts.', detail: 'If a trigger rarely works, test a different cue or location until reliability improves.' },
            { text: 'Keep friction low and rewards immediate.', detail: 'Tiny setup and immediate satisfaction sustain automaticity and reduce churn.' },
          ],
        },
        {
          title: 'Community',
          items: [
            { text: 'Join groups or challenges to sustain motivation.', detail: 'Community structures support persistence via encouragement and shared milestones.' },
            { text: 'Share goals and weekly summaries.', detail: 'Regular check‑ins create gentle accountability without pressure.' },
            { text: 'Avoid competitive comparisons; focus on your path.', detail: 'Comparison can demotivate; measure against your previous baseline.' },
          ],
        },
        {
          title: 'Maintenance',
          items: [
            { text: 'Evolve habits as life changes.', detail: 'Adjust routines to new schedules, responsibilities, or health contexts so they remain relevant.' },
            { text: 'Review monthly and retire outdated routines.', detail: 'Eliminate low‑value habits to reclaim time and attention for priorities.' },
            { text: 'Build backups for travel and disruptions.', detail: 'Define portable versions (hotel walk, in‑room stretch) to survive context shifts.' },
          ],
        },
        {
          title: 'Habit Stacking',
          items: [
            { text: 'Add one habit to a stable anchor.', detail: 'Place the new behavior immediately after a reliable routine to inherit its stability.' },
            { text: 'Keep stacks short and specific.', detail: 'Limit to 2–3 linked actions to avoid complexity that breaks under stress.' },
            { text: 'Refine order by friction and flow.', detail: 'Arrange steps so each sets up the next with minimal movement or setup.' },
          ],
        },
        {
          title: 'Friction Removal',
          items: [
            { text: 'Pre‑commit materials and locations.', detail: 'Decide and prepare the where/what in advance so you can start instantly.' },
            { text: 'Automate triggers when possible.', detail: 'Use device automations or calendar blocks to initiate cues without manual effort.' },
            { text: 'Eliminate decision points.', detail: 'Standardize routines so you do not choose among options during execution.' },
          ],
        },
        {
          title: 'Reward Design',
          items: [
            { text: 'Use immediate, intrinsic rewards.', detail: 'Choose satisfying endings (checklist tick, short reflection) to cement the loop.' },
            { text: 'Avoid large extrinsic rewards.', detail: 'Big rewards create dependency and can distort behavior when removed.' },
            { text: 'Celebrate process, not outcomes.', detail: 'Reinforce the act of showing up to stabilize identity and consistency.' },
          ],
        },
        {
          title: 'Breaking Bad Habits',
          items: [
            { text: 'Identify cue‑routine‑reward.', detail: 'Map the loop to see where to intervene (swap routine, change reward, remove cue).' },
            { text: 'Increase friction strategically.', detail: 'Make the undesired behavior harder (move app, hide snacks) to reduce impulse execution.' },
            { text: 'Replace with better alternatives.', detail: 'Define a positive substitute routine that satisfies the same need.' },
          ],
        },
        {
          title: 'Time Blocking',
          items: [
            { text: 'Reserve fixed windows for key habits.', detail: 'Protect time on your calendar to reduce conflict with other tasks.' },
            { text: 'Add buffers before/after blocks.', detail: 'Transitions prevent spillover and maintain the habit’s start on time.' },
            { text: 'Review blocks weekly.', detail: 'Adjust durations and placements based on adherence and energy.' },
          ],
        },
        {
          title: 'Keystone Habits',
          items: [
            { text: 'Pick one habit that improves others.', detail: 'Sleep, hydration, or planning can cascade benefits across multiple routines.' },
            { text: 'Prioritize foundational behaviors.', detail: 'Support habits that increase bandwidth and reduce stress for the rest.' },
            { text: 'Track cross‑effects explicitly.', detail: 'Note which habits improve mood or productivity to guide focus.' },
          ],
        },
        {
          title: 'Fallback Plans',
          items: [
            { text: 'Define “rainy day” versions.', detail: 'When conditions fail, use a reduced action that preserves momentum.' },
            { text: 'Prepare travel and illness adaptations.', detail: 'Have safe, portable routines ready for disrupted contexts.' },
            { text: 'Use reset rituals after slips.', detail: 'A short restart routine prevents guilt spirals and restores normal practice.' },
          ],
        },
      ],
    },
    'home-wellness': {
      description:
        'Make your home a supportive health environment with air quality, lighting, ergonomics, noise management, predictable routines, functional zones, kitchen flow, safety, aesthetics, and community cooperation.',
      sections: [
        {
          title: 'Air & Ventilation',
          items: [
            { text: 'Open windows daily or use fans for fresh airflow.', detail: 'Ventilate rooms for 10–20 minutes to reduce indoor pollutants and stale air; cross‑vent when possible.' },
            { text: 'Reduce indoor smoke; prefer clean cooking methods.', detail: 'Use exhaust fans or lids while cooking; avoid burning incense/candles frequently in enclosed spaces.' },
            { text: 'Add plants where appropriate for aesthetics.', detail: 'Plants can improve mood and humidity feel; avoid relying on them as primary air filters.' },
          ],
        },
        {
          title: 'Light',
          items: [
            { text: 'Maximize natural light during the day.', detail: 'Open blinds and position work surfaces near windows to support alertness and circadian cues.' },
            { text: 'Use warm lighting at night to cue relaxation.', detail: 'Shift bulbs and lamps toward warmer color temperatures after sunset to reduce stimulation.' },
            { text: 'Avoid harsh glare in work areas.', detail: 'Use diffusers, task lamps, or indirect lighting to reduce eye strain and headaches.' },
          ],
        },
        {
          title: 'Ergonomics',
          items: [
            { text: 'Use supportive chairs and monitor heights.', detail: 'Align screens at eye level, keep wrists neutral, and support lumbar to reduce strain.' },
            { text: 'Stand or stretch breaks hourly.', detail: 'Set a gentle timer to change posture and perform micro‑stretches for neck, shoulders, and hips.' },
            { text: 'Design tidy work zones to reduce strain.', detail: 'Keep essential tools within arm’s reach; route cables safely to prevent awkward positions.' },
          ],
        },
        {
          title: 'Noise',
          items: [
            { text: 'Create quiet corners or use noise control.', detail: 'Use rugs, curtains, and soft materials to dampen sound; consider white noise for focus.' },
            { text: 'Schedule noisy tasks away from rest periods.', detail: 'Batch vacuuming, laundry, or repairs when they won’t disrupt naps or focused work.' },
            { text: 'Use soft furnishings to dampen echo.', detail: 'Wall hangings and bookshelves break up reflections in open rooms.' },
          ],
        },
        {
          title: 'Routines',
          items: [
            { text: 'Morning resets: air rooms, tidy surfaces.', detail: 'Simple, repeatable steps set the tone for the day and prevent clutter buildup.' },
            { text: 'Evening wind‑down: low light and calm tasks.', detail: 'Reduce stimulation before sleep with gentle chores and quiet activities.' },
            { text: 'Weekly deep clean for hygiene and clarity.', detail: 'Plan a short, focused block to maintain sanitation and reduce stress.' },
          ],
        },
        {
          title: 'Zones',
          items: [
            { text: 'Separate work, rest, and play areas.', detail: 'Define clear uses for spaces to reduce mental switching costs and distractions.' },
            { text: 'Keep sleep spaces tech‑free.', detail: 'Remove bright screens and notifications from bedrooms to support better rest.' },
            { text: 'Use storage to prevent clutter creep.', detail: 'Label bins and use closed storage to keep visual fields calm and functional.' },
          ],
        },
        {
          title: 'Kitchen Flow',
          items: [
            { text: 'Organize staples for quick healthy meals.', detail: 'Group ingredients by use; maintain an inventory to speed up meal prep.' },
            { text: 'Use batch cooking on weekends.', detail: 'Cook base components once; portion and freeze for fast, nutritious meals.' },
            { text: 'Rotate fridge items to reduce waste.', detail: 'Move older items forward and plan meals around what needs to be used first.' },
          ],
        },
        {
          title: 'Safety',
          items: [
            { text: 'Check smoke alarms and first‑aid supplies.', detail: 'Test alarms monthly; keep basic supplies accessible and labeled.' },
            { text: 'Secure cables and reduce trip hazards.', detail: 'Route cords along walls; use cable clips and tidy mats to prevent falls.' },
            { text: 'Store chemicals safely and label clearly.', detail: 'Keep cleaning agents high or locked; avoid decanting into unmarked containers.' },
          ],
        },
        {
          title: 'Aesthetics',
          items: [
            { text: 'Keep personal touches that boost mood.', detail: 'Photos, art, or plants personalize spaces and support emotional well‑being.' },
            { text: 'Use calm colors and textures.', detail: 'Favor balanced palettes and soft materials to reduce visual noise.' },
            { text: 'Maintain a simple, tidy visual field.', detail: 'Clear surfaces and hidden storage improve focus and relaxation.' },
          ],
        },
        {
          title: 'Community',
          items: [
            { text: 'Share chores and routines within the household.', detail: 'Assign responsibilities and keep a visible checklist for fairness and clarity.' },
            { text: 'Agree on quiet hours and boundaries.', detail: 'Set norms for noise, device use, and shared spaces to reduce conflict.' },
            { text: 'Post shared checklists in common areas.', detail: 'Centralized lists make routines visible and easier to follow.' },
          ],
        },
      ],
    },
    pregnancy: {
      description:
        'Understand pregnancy stages and build supportive routines across safe nutrition, antenatal care, movement, sleep, work/travel, and birth planning. Use professional guidance and adapt plans as needs change.',
      sections: [
        {
          title: 'Trimester Overview',
          items: [
            { text: 'Learn common changes per trimester.', detail: 'Review typical physical and emotional changes to anticipate needs and prepare adjustments.' },
            { text: 'Track energy and symptoms weekly.', detail: 'Use a simple log to notice patterns and discuss them during visits.' },
            { text: 'Adjust routines based on stage.', detail: 'Modify movement, sleep, and workload as comfort and medical guidance evolve.' },
          ],
        },
        {
          title: 'Nutrition & Supplements',
          items: [
            { text: 'Prioritize whole foods and hydration.', detail: 'Emphasize fruits, vegetables, proteins, and steady fluids to support energy and development.' },
            { text: 'Follow professional supplement guidance.', detail: 'Use recommended prenatal vitamins and specific supplements only under clinical advice.' },
            { text: 'Limit caffeine and ultra‑processed foods.', detail: 'Keep stimulants low and choose minimally processed options for stability.' },
          ],
        },
        {
          title: 'Antenatal Care',
          items: [
            { text: 'Schedule regular checkups and tests.', detail: 'Attend recommended appointments and screenings to monitor health and progress.' },
            { text: 'Record vitals and notes.', detail: 'Keep a simple record of measurements, questions, and outcomes for continuity.' },
            { text: 'Prepare questions for visits.', detail: 'List topics in advance (symptoms, plans, medications) to make sessions effective.' },
          ],
        },
        {
          title: 'Warning Signs',
          items: [
            { text: 'Know urgent symptoms that require care.', detail: 'Understand red flags (severe pain, bleeding, concerning changes) and seek help promptly.' },
            { text: 'Maintain emergency contacts.', detail: 'Store key numbers visibly and on your phone for rapid access.' },
            { text: 'Avoid self‑medicating without guidance.', detail: 'Consult professionals before taking medications or remedies.' },
          ],
        },
        {
          title: 'Movement',
          items: [
            { text: 'Use gentle walks and mobility.', detail: 'Favor low‑impact movement to support circulation and mood.' },
            { text: 'Avoid high‑risk exercises.', detail: 'Skip activities with fall or impact risk; follow clinical advice for modifications.' },
            { text: 'Listen to fatigue signals.', detail: 'Adjust effort based on comfort; prioritize safety and rest.' },
          ],
        },
        {
          title: 'Sleep & Rest',
          items: [
            { text: 'Create a supportive sleep environment.', detail: 'Use cool, dark, quiet settings and supportive pillows.' },
            { text: 'Use side‑sleeping aids.', detail: 'Consider wedges or pregnancy pillows to support hips and back.' },
            { text: 'Respect naps and downtime.', detail: 'Plan short rest periods to manage energy and recovery.' },
          ],
        },
        {
          title: 'Work & Travel',
          items: [
            { text: 'Plan frequent breaks and hydration.', detail: 'Schedule short pauses and steady fluids to reduce strain.' },
            { text: 'Carry essentials and snacks.', detail: 'Keep documents, meds, and nutritious snacks accessible.' },
            { text: 'Consult before long trips.', detail: 'Seek guidance for extended travel and adjust plans accordingly.' },
          ],
        },
        {
          title: 'Birth Plan',
          items: [
            { text: 'Define preferences and contingencies.', detail: 'Outline desired approaches and backup plans for flexibility.' },
            { text: 'Share plan with support team.', detail: 'Ensure partner and professionals know preferences and roles.' },
            { text: 'Prepare hospital bag and documents.', detail: 'Pack essentials and organize paperwork ahead of time.' },
          ],
        },
        {
          title: 'Postpartum Prep',
          items: [
            { text: 'Arrange home support and supplies.', detail: 'Stock recovery items and plan assistance for care and chores.' },
            { text: 'Plan gentle recovery phases.', detail: 'Allow gradual return to activities with rest prioritized.' },
            { text: 'Coordinate pediatric care.', detail: 'Schedule early visits and prepare records for continuity.' },
          ],
        },
        {
          title: 'Support Network',
          items: [
            { text: 'Involve partner/family appropriately.', detail: 'Share tasks and expectations clearly to reduce stress.' },
            { text: 'Join trusted community groups.', detail: 'Seek moderated, evidence‑aligned spaces for guidance and connection.' },
            { text: 'Share updates and needs clearly.', detail: 'Communicate changes and requests to align support.' },
          ],
        },
      ],
      checklist: ['Attend antenatal visits.', 'Plan birth preferences.', 'Prepare postpartum support.'],
    },
    'newborn-care': {
      description:
        'Establish safe, calm newborn routines: feeding, sleep, hygiene, soothing, health checks, and environment.',
      sections: [
        {
          title: 'Feeding Basics',
          items: [
            { text: 'Follow recommended feeding intervals.', detail: 'Use guidance from your pediatric provider; expect variability and respond to hunger cues.' },
            { text: 'Burp gently after feeds.', detail: 'Support head and neck; use light pats to release air and reduce discomfort.' },
            { text: 'Track intake patterns.', detail: 'Record amounts or durations to spot trends and share helpful data at visits.' },
          ],
        },
        {
          title: 'Sleep Safety',
          items: [
            { text: 'Use firm mattress; back sleeping.', detail: 'Place baby on their back on a firm, flat surface to reduce risk.' },
            { text: 'Keep crib clear of objects.', detail: 'Avoid pillows, blankets, and toys; use a fitted sheet only.' },
            { text: 'Monitor room temperature.', detail: 'Aim for a cool, comfortable environment; avoid overheating and check neck for sweat.' },
          ],
        },
        {
          title: 'Hygiene',
          items: [
            { text: 'Gentle bathing and skincare.', detail: 'Use mild products; avoid over‑bathing to protect natural oils.' },
            { text: 'Frequent hand washing.', detail: 'Wash hands before handling baby, after diaper changes, and when returning home.' },
            { text: 'Clean feeding tools thoroughly.', detail: 'Sterilize bottles/nipples per guidance; air‑dry on clean racks.' },
          ],
        },
        {
          title: 'Diapering',
          items: [
            { text: 'Change promptly; prevent rashes.', detail: 'Check often; use barrier creams as advised to protect skin.' },
            { text: 'Use gentle wipes or water.', detail: 'Prefer fragrance‑free options; pat dry to reduce irritation.' },
            { text: 'Dispose or wash safely.', detail: 'Seal disposables and launder cloth diapers per hygiene recommendations.' },
          ],
        },
        {
          title: 'Soothing',
          items: [
            { text: 'Swaddle safely; avoid overheating.', detail: 'Use hip‑friendly wraps; ensure the face remains clear and breathing unimpeded.' },
            { text: 'Use rocking or white noise.', detail: 'Gentle motion and consistent sound can calm; keep volume low and duration reasonable.' },
            { text: 'Maintain calm, low‑light environment.', detail: 'Dim lights and reduce stimulation to help settle and cue rest.' },
          ],
        },
        {
          title: 'Health Checks',
          items: [
            { text: 'Track weight and growth.', detail: 'Record measurements as provided; observe steady trends and discuss concerns.' },
            { text: 'Attend pediatric visits.', detail: 'Follow recommended schedule and prepare questions in advance.' },
            { text: 'Record vaccines and milestones.', detail: 'Keep an organized log for easy reference and care continuity.' },
          ],
        },
        {
          title: 'Environment',
          items: [
            { text: 'Quiet, low‑stimulus space.', detail: 'Limit loud sounds and bright lights; offer calm surroundings for rest and bonding.' },
            { text: 'Safe storage of supplies.', detail: 'Keep items within reach but secured; avoid clutter around sleep areas.' },
            { text: 'Sunlight exposure briefly and safely.', detail: 'Use short, gentle daylight periods; protect skin and avoid direct harsh sun.' },
          ],
        },
        {
          title: 'Bonding',
          items: [
            { text: 'Skin‑to‑skin time.', detail: 'Support warmth and connection; monitor comfort and positioning.' },
            { text: 'Gentle talking/singing.', detail: 'Soft voice and simple songs build familiarity and calm.' },
            { text: 'Respond promptly to cues.', detail: 'Observe signals (feeding, comfort, rest) and respond consistently.' },
          ],
        },
        {
          title: 'Warning Signs',
          items: [
            { text: 'Note fever, lethargy, breathing issues.', detail: 'Recognize urgent symptoms and seek prompt professional care.' },
            { text: 'Keep emergency contacts.', detail: 'Store key numbers visibly and on devices for quick access.' },
            { text: 'Follow professional guidance.', detail: 'Use advice from providers before attempting treatments or remedies.' },
          ],
        },
        {
          title: 'Care Log',
          items: [
            { text: 'Record feeds, diapers, sleep.', detail: 'Simple logs help reveal patterns for routines and care discussions.' },
            { text: 'Share log with caregivers.', detail: 'Provide clear handoffs to maintain consistency across helpers.' },
            { text: 'Use patterns to guide routines.', detail: 'Adjust timing and steps based on observed regularities.' },
          ],
        },
      ],
    },
    'child-development': {
      description:
        'Support developmental milestones through play, language, movement, social skills, sleep, nutrition, and safety.',
      sections: [
        {
          title: 'Milestones',
          items: [
            { text: 'Understand age‑appropriate skills.', detail: 'Use trusted milestone guides to set expectations; remember children progress at individual rates.' },
            { text: 'Observe gently; avoid pressure.', detail: 'Watch skills emerge through play; avoid pushing timelines which can add stress.' },
            { text: 'Celebrate progress.', detail: 'Acknowledge small steps to build confidence and enjoyment in learning.' },
          ],
        },
        {
          title: 'Play & Stimulation',
          items: [
            { text: 'Use simple, safe toys.', detail: 'Choose age‑appropriate items without small parts; favor open‑ended play for creativity.' },
            { text: 'Rotate activities for novelty.', detail: 'Cycle toys weekly to keep interest high without constant new purchases.' },
            { text: 'Encourage curiosity outdoors.', detail: 'Short, supervised outdoor time supports sensory learning and movement.' },
          ],
        },
        {
          title: 'Language',
          items: [
            { text: 'Read daily and narrate actions.', detail: 'Describe routines and surroundings; language grows through frequent exposure.' },
            { text: 'Sing and rhyme for rhythm.', detail: 'Songs and rhymes support phonological awareness and memory.' },
            { text: 'Respond to sounds and words.', detail: 'Echo and expand child speech to model vocabulary and sentence patterns.' },
          ],
        },
        {
          title: 'Motor Skills',
          items: [
            { text: 'Practice crawling/walking safely.', detail: 'Provide safe floor space, remove hazards, and let exploration lead the pace.' },
            { text: 'Fine motor with drawing/building.', detail: 'Offer chunky crayons, blocks, and simple tools to develop hand control.' },
            { text: 'Encourage varied movement.', detail: 'Mix reaching, climbing, and balance games to build coordination.' },
          ],
        },
        {
          title: 'Social Skills',
          items: [
            { text: 'Model sharing and turn‑taking.', detail: 'Demonstrate behaviors in calm interactions; children learn through observation.' },
            { text: 'Schedule gentle playtimes.', detail: 'Short, supervised sessions with peers build comfort and cooperation.' },
            { text: 'Teach empathy and kind speech.', detail: 'Label feelings and practice kind phrases to guide responses.' },
          ],
        },
        {
          title: 'Nutrition',
          items: [
            { text: 'Balanced meals and snacks.', detail: 'Serve colorful plates with proteins, fruits/veggies, and whole grains.' },
            { text: 'Limit sugar and refined carbs.', detail: 'Favor steady energy options; reserve sweets for occasional treats.' },
            { text: 'Introduce diverse foods gradually.', detail: 'Offer small tastes of new foods repeatedly without pressure.' },
          ],
        },
        {
          title: 'Sleep',
          items: [
            { text: 'Age‑appropriate sleep schedules.', detail: 'Use typical ranges as a guide and adjust to the child’s cues.' },
            { text: 'Predictable wind‑down routines.', detail: 'Create calm sequences (bath, books, music) that signal bedtime.' },
            { text: 'Calm bedroom environment.', detail: 'Keep lights dim, noise low, and toys minimal around sleep areas.' },
          ],
        },
        {
          title: 'Screen Time',
          items: [
            { text: 'Set age‑appropriate limits.', detail: 'Follow trusted recommendations; keep sessions short and purposeful.' },
            { text: 'Prefer co‑viewed, educational content.', detail: 'Watch together and discuss to turn viewing into learning.' },
            { text: 'Avoid screens near bedtime.', detail: 'Remove devices in the evening to protect sleep quality.' },
          ],
        },
        {
          title: 'Safety',
          items: [
            { text: 'Childproof key areas.', detail: 'Secure outlets, cabinets, and cords; use gates near stairs.' },
            { text: 'Supervise near water and stairs.', detail: 'Maintain close supervision; avoid distractions during higher‑risk contexts.' },
            { text: 'Teach basic safety rules.', detail: 'Practice simple rules (hold hands, look both ways) through repetition.' },
          ],
        },
        {
          title: 'Tracking',
          items: [
            { text: 'Log milestones briefly.', detail: 'Keep a simple record of new skills to spot patterns and share with caregivers.' },
            { text: 'Share updates with caregivers.', detail: 'Coordinate routines and expectations for consistency across settings.' },
            { text: 'Consult if concerns persist.', detail: 'Seek professional guidance when delays or behaviors cause ongoing worry.' },
          ],
        },
      ],
    },
    'parenting-tips': {
      description:
        'Actionable parenting approaches: communication, boundaries, routines, positive reinforcement, and emotional coaching.',
      sections: [
        {
          title: 'Communication',
          items: [
            { text: 'Listen before advising.', detail: 'Start with reflective listening to understand context and emotions before offering solutions.' },
            { text: 'Reflect feelings; clarify needs.', detail: 'Name the emotion and ask simple questions to surface needs and reduce tension.' },
            { text: 'Use calm, simple language.', detail: 'Short sentences and neutral tone lower arousal and improve comprehension.' },
          ],
        },
        {
          title: 'Boundaries',
          items: [
            { text: 'Define clear rules.', detail: 'State expectations in positive terms and write them visibly for consistency.' },
            { text: 'Explain reasons and outcomes.', detail: 'Briefly link rules to safety and respect; clarify natural outcomes of choices.' },
            { text: 'Be consistent and fair.', detail: 'Apply rules predictably; adjust only with clear communication and rationales.' },
          ],
        },
        {
          title: 'Routines',
          items: [
            { text: 'Morning/evening structure.', detail: 'Create simple sequences with visual aids to reduce decision load.' },
            { text: 'Visual schedules for clarity.', detail: 'Use icons or lists for steps; review together before transitions.' },
            { text: 'Include transitions and breaks.', detail: 'Add brief buffers between activities to prevent rush and meltdowns.' },
          ],
        },
        {
          title: 'Positive Reinforcement',
          items: [
            { text: 'Praise effort and process.', detail: 'Focus on strategies and persistence to build growth mindset.' },
            { text: 'Use small rewards thoughtfully.', detail: 'Keep rewards modest and occasional; avoid dependency on prizes.' },
            { text: 'Celebrate small wins.', detail: 'Recognize progress promptly to reinforce desired behaviors.' },
          ],
        },
        {
          title: 'Discipline',
          items: [
            { text: 'Avoid harsh punishment.', detail: 'Harsh methods increase fear and resistance; prefer teaching approaches.' },
            { text: 'Use natural consequences.', detail: 'Let outcomes follow actions when safe to teach responsibility.' },
            { text: 'Model desired behavior.', detail: 'Demonstrate the behavior you expect; children imitate adult examples.' },
          ],
        },
        {
          title: 'Co‑Parenting',
          items: [
            { text: 'Align on rules and roles.', detail: 'Share a simple plan and divide responsibilities for a unified approach.' },
            { text: 'Share updates routinely.', detail: 'Use brief check‑ins to maintain context and prevent miscommunication.' },
            { text: 'Resolve conflicts privately.', detail: 'Discuss disagreements away from children to preserve stability.' },
          ],
        },
        {
          title: 'School Liaison',
          items: [
            { text: 'Communicate with teachers.', detail: 'Provide context and ask for simple strategies that can be mirrored at home.' },
            { text: 'Support homework routines.', detail: 'Define a consistent time and quiet space; use short focus blocks.' },
            { text: 'Attend meetings prepared.', detail: 'Bring notes, examples, and goals to keep sessions focused and collaborative.' },
          ],
        },
        {
          title: 'Chores',
          items: [
            { text: 'Age‑appropriate tasks.', detail: 'Match chores to abilities and teach steps patiently with demonstrations.' },
            { text: 'Pair chores with music or timers.', detail: 'Make tasks engaging and time‑bounded to improve follow‑through.' },
            { text: 'Rotate and track responsibilities.', detail: 'Use simple charts for fairness and visibility.' },
          ],
        },
        {
          title: 'Emotional Coaching',
          items: [
            { text: 'Name emotions and validate.', detail: 'Label feelings accurately and acknowledge them to reduce escalation.' },
            { text: 'Practice coping strategies.', detail: 'Teach breathing, breaks, and simple self‑talk when calm.' },
            { text: 'Build resilience gently.', detail: 'Set small challenges with support and praise recovery efforts.' },
          ],
        },
        {
          title: 'Self‑Care',
          items: [
            { text: 'Protect rest for caregivers.', detail: 'Plan downtime and sleep routines to sustain patience and clarity.' },
            { text: 'Ask for help early.', detail: 'Engage family, friends, or services before stress peaks.' },
            { text: 'Use community resources.', detail: 'Leverage local programs, groups, and hotlines for support and education.' },
          ],
        },
      ],
    },
    'education-support': {
      description:
        'Help kids learn effectively with environment design, consistent routines, teacher communication, targeted remediation, and motivating enrichment. Use simple tracking and calm review habits to guide adjustments.',
      sections: [
        {
          title: 'Study Environment',
          items: [
            { text: 'Quiet, tidy workspace.', detail: 'Reduce noise and clutter; use a simple desk setup to lower distractions.' },
            { text: 'Consistent lighting and seating.', detail: 'Use comfortable seating and steady lighting that reduces eye strain.' },
            { text: 'Keep materials organized.', detail: 'Store pens, notebooks, and references within reach to avoid task switching.' },
          ],
        },
        {
          title: 'Homework Routine',
          items: [
            { text: 'Set start time and breaks.', detail: 'Pick a daily start time and short breaks to build predictability and endurance.' },
            { text: 'Use timers to focus.', detail: 'Work in brief focus blocks (e.g., 20–30 minutes) with a visible timer.' },
            { text: 'Review and pack for next day.', detail: 'End with a 2–3 minute check to confirm tasks and prepare materials.' },
          ],
        },
        {
          title: 'Reading Habit',
          items: [
            { text: 'Daily reading time.', detail: 'Schedule a consistent window; keep books visible to prompt the habit.' },
            { text: 'Choose engaging books.', detail: 'Select topics the child enjoys; balance challenge with confidence.' },
            { text: 'Discuss stories together.', detail: 'Ask simple questions about characters, events, and ideas to deepen comprehension.' },
          ],
        },
        {
          title: 'Learning Styles',
          items: [
            { text: 'Observe preferences.', detail: 'Notice whether visual, auditory, or hands‑on explanations stick better.' },
            { text: 'Mix visual/auditory/kinesthetic.', detail: 'Combine diagrams, talk‑throughs, and simple activities to reinforce learning.' },
            { text: 'Adapt explanations accordingly.', detail: 'Use the preferred style to clarify hard topics and maintain engagement.' },
          ],
        },
        {
          title: 'Teacher Communication',
          items: [
            { text: 'Share context and goals.', detail: 'Provide brief background and objectives to align support at school and home.' },
            { text: 'Track feedback and progress.', detail: 'Log notes from teacher updates; review monthly for patterns.' },
            { text: 'Schedule check‑ins.', detail: 'Set short, periodic meetings to adjust strategies collaboratively.' },
          ],
        },
        {
          title: 'Assessments',
          items: [
            { text: 'Review results calmly.', detail: 'Go over outcomes without pressure; focus on understanding rather than fault.' },
            { text: 'Identify gaps and strengths.', detail: 'Highlight what went well and what needs practice to guide effort.' },
            { text: 'Plan targeted practice.', detail: 'Create short, focused exercises that address specific skill gaps.' },
          ],
        },
        {
          title: 'Remediation',
          items: [
            { text: 'Small, frequent sessions.', detail: 'Use short, regular practices to build skills steadily without fatigue.' },
            { text: 'Use scaffolding and examples.', detail: 'Model steps and provide worked examples before independent attempts.' },
            { text: 'Celebrate incremental gains.', detail: 'Acknowledge small improvements to sustain motivation.' },
          ],
        },
        {
          title: 'Enrichment',
          items: [
            { text: 'Clubs and safe online resources.', detail: 'Join interest‑based groups or curated platforms that broaden skills.' },
            { text: 'Projects and hands‑on tasks.', detail: 'Encourage building, experiments, or creative work to apply learning.' },
            { text: 'Encourage curiosity.', detail: 'Invite questions and exploration; follow interests to deepen engagement.' },
          ],
        },
        {
          title: 'Exams',
          items: [
            { text: 'Prepare schedules early.', detail: 'Plan study windows in advance; avoid cramming with realistic pacing.' },
            { text: 'Practice past questions.', detail: 'Use sample papers to build familiarity with formats and timing.' },
            { text: 'Teach test‑day routines.', detail: 'Sleep well, eat a simple meal, and pack essentials the night before.' },
          ],
        },
        {
          title: 'Progress Tracking',
          items: [
            { text: 'Keep a simple log.', detail: 'Record brief notes on effort and outcomes to inform adjustments.' },
            { text: 'Share updates with caregivers.', detail: 'Coordinate across home and school for consistent support.' },
            { text: 'Adjust plans monthly.', detail: 'Refine routines and goals based on tracked progress and feedback.' },
          ],
        },
      ],
    },
    'family-budgeting': {
      description:
        'Plan and track family finances with budgeting, saving goals, debt strategies, and regular reviews.',
      sections: [
        {
          title: 'Budget Setup',
          items: [
            { text: 'Choose a tool or spreadsheet.', detail: 'Pick one simple system everyone can use; keep categories lean for clarity.' },
            { text: 'Define categories and caps.', detail: 'Set realistic limits based on past spending and current priorities.' },
            { text: 'Assign owners for tracking.', detail: 'Designate responsibility per category to improve visibility and follow‑through.' },
          ],
        },
        {
          title: 'Income Planning',
          items: [
            { text: 'Map pay dates and variability.', detail: 'Plot salaries, freelance income, and timing to anticipate cash flow.' },
            { text: 'Plan buffers for irregulars.', detail: 'Hold a small reserve to smooth variable or seasonal income.' },
            { text: 'Document sources clearly.', detail: 'List each source and typical amounts; note dependencies or risks.' },
          ],
        },
        {
          title: 'Expenses',
          items: [
            { text: 'Separate fixed and variable.', detail: 'Identify non‑negotiables (rent, utilities) versus flexible (dining, entertainment).' },
            { text: 'Identify discretionary areas.', detail: 'Spot categories with room to trim; set guidelines rather than bans.' },
            { text: 'Set alerts for overspend.', detail: 'Use app rules or manual checks to flag when categories approach caps.' },
          ],
        },
        {
          title: 'Savings Goals',
          items: [
            { text: 'Short‑, mid‑, long‑term goals.', detail: 'Define timelines and amounts for near needs, upcoming plans, and future security.' },
            { text: 'Automate transfers.', detail: 'Schedule small, regular moves to savings to reduce decision friction.' },
            { text: 'Use labeled accounts.', detail: 'Name sub‑accounts (travel, school, repairs) to keep goals visible and motivating.' },
          ],
        },
        {
          title: 'Emergency Fund',
          items: [
            { text: 'Target 3–6 months baseline.', detail: 'Aim for core expenses coverage; start with a modest target and grow steadily.' },
            { text: 'Start small and grow.', detail: 'Begin with micro‑savings; increase contributions after debts or bills improve.' },
            { text: 'Keep accessible but separate.', detail: 'Store funds where they are safe and liquid but not in spend accounts.' },
          ],
        },
        {
          title: 'Debt Management',
          items: [
            { text: 'List balances and rates.', detail: 'Create a clear inventory to prioritize high‑interest accounts.' },
            { text: 'Choose snowball or avalanche.', detail: 'Snowball builds momentum; avalanche saves interest—pick what sustains consistency.' },
            { text: 'Avoid new high‑interest debt.', detail: 'Use spending rules and buffers to prevent adding costly balances.' },
          ],
        },
        {
          title: 'Spending Rules',
          items: [
            { text: 'Use 24‑hour pause for big buys.', detail: 'Delay large purchases to reduce impulse decisions and regret.' },
            { text: 'Limit impulse categories.', detail: 'Cap flexible areas (e.g., dining out) and track weekly rather than monthly.' },
            { text: 'Prefer planned purchases.', detail: 'Batch buying decisions; use lists aligned with goals to stay focused.' },
          ],
        },
        {
          title: 'Family Discussions',
          items: [
            { text: 'Hold monthly reviews.', detail: 'Review spending, goals, and adjustments together; keep sessions short and calm.' },
            { text: 'Set shared priorities.', detail: 'Agree on top goals and tradeoffs to reduce friction in daily choices.' },
            { text: 'Teach kids simple money habits.', detail: 'Model saving, thoughtful spending, and delayed gratification with small examples.' },
          ],
        },
        {
          title: 'Tools',
          items: [
            { text: 'Budget apps or shared docs.', detail: 'Use a shared platform for visibility and easy updates.' },
            { text: 'Alerts and dashboards.', detail: 'Enable notifications and quick views to catch issues early.' },
            { text: 'Backup data regularly.', detail: 'Export or sync data to avoid loss and maintain continuity.' },
          ],
        },
        {
          title: 'Reviews',
          items: [
            { text: 'Quarterly goal checks.', detail: 'Assess progress and adjust targets based on real outcomes.' },
            { text: 'Adjust caps realistically.', detail: 'Change category limits when life or prices shift; avoid rigid adherence.' },
            { text: 'Celebrate milestones.', detail: 'Acknowledge achievements to keep motivation strong and habits durable.' },
          ],
        },
      ],
    },
    'home-routines': {
      description:
        'Design predictable home routines that reduce stress: mornings, after‑school, meals, chores, weekends, and sleep.',
      sections: [
        {
          title: 'Morning',
          items: [
            { text: 'Prep night before.', detail: 'Lay out clothes, pack bags, and set out breakfast staples to reduce morning decisions.' },
            { text: 'Simple breakfast and checklists.', detail: 'Use a default menu and a visible checklist for essential steps before leaving.' },
            { text: 'Leave buffer time.', detail: 'Add 10–15 minutes to absorb surprises without stress.' },
          ],
        },
        {
          title: 'After‑School',
          items: [
            { text: 'Snack and decompress.', detail: 'Offer a healthy snack and 10–15 minutes of calm time before work blocks.' },
            { text: 'Homework window and breaks.', detail: 'Use short focus blocks with brief breaks to maintain energy and attention.' },
            { text: 'Pack for tomorrow.', detail: 'Check assignments and prepare materials before evening wind‑down.' },
          ],
        },
        {
          title: 'Meal Prep',
          items: [
            { text: 'Batch cooking weekly.', detail: 'Cook staple components once and portion for quick, healthy meals.' },
            { text: 'Shared recipe board.', detail: 'Keep a visible list of go‑to meals and ingredients to speed decisions.' },
            { text: 'Rotate menus for variety.', detail: 'Use simple theme nights to avoid choice fatigue.' },
          ],
        },
        {
          title: 'House Chores',
          items: [
            { text: 'Assign age‑appropriate tasks.', detail: 'Match chores to ability and teach steps patiently with demonstrations.' },
            { text: 'Use timers and music.', detail: 'Run 10‑minute sprints with music to make tasks engaging and time‑bounded.' },
            { text: 'Track progress visibly.', detail: 'Use charts or checklists on the fridge for fairness and motivation.' },
          ],
        },
        {
          title: 'Weekend Planning',
          items: [
            { text: 'Plan errands and rest.', detail: 'Make a short list and block downtime to prevent over‑scheduling.' },
            { text: 'Schedule family activities.', detail: 'Choose simple outings that fit energy and budget constraints.' },
            { text: 'Keep buffer for spontaneity.', detail: 'Leave open windows to adapt plans and avoid rush.' },
          ],
        },
        {
          title: 'Health Routines',
          items: [
            { text: 'Hydration and movement.', detail: 'Set specific times for water and short movement breaks across the day.' },
            { text: 'Light outdoor time.', detail: 'Use brief walks or balcony time for natural light and fresh air.' },
            { text: 'Simple mindfulness blocks.', detail: 'Add 5‑minute breathing or quiet time to reduce stress.' },
          ],
        },
        {
          title: 'Sleep',
          items: [
            { text: 'Consistent wind‑down.', detail: 'Create a calm sequence (tidy, hygiene, books) that signals bedtime.' },
            { text: 'Tech off earlier.', detail: 'Park devices outside bedrooms and shift to warm lighting before sleep.' },
            { text: 'Calm bedroom setup.', detail: 'Keep lights dim, noise low, and surfaces clear to support rest.' },
          ],
        },
        {
          title: 'Digital Hygiene',
          items: [
            { text: 'Screen time limits.', detail: 'Set simple rules for daily totals and content types.' },
            { text: 'Co‑view educational content.', detail: 'Watch together and discuss to turn viewing into learning.' },
            { text: 'Device charging station.', detail: 'Charge devices in a common area to reduce bedtime disruption.' },
          ],
        },
        {
          title: 'Calendars',
          items: [
            { text: 'Shared family calendar.', detail: 'Keep events and tasks synced and visible for all.' },
            { text: 'Visual schedules for kids.', detail: 'Use icons and color coding for clarity and buy‑in.' },
            { text: 'Weekly review ritual.', detail: 'Hold a short Sunday check‑in to adjust plans and confirm priorities.' },
          ],
        },
        {
          title: 'Adjustments',
          items: [
            { text: 'Revise routines each month.', detail: 'Tweak steps based on what actually works rather than sticking rigidly.' },
            { text: 'Retire friction points.', detail: 'Remove or redesign steps that repeatedly cause delay or stress.' },
            { text: 'Keep changes small and steady.', detail: 'Implement one change at a time and stabilize before adding more.' },
          ],
        },
      ],
    },
    'parenting-resources': {
      description:
        'Curated resources for parents: clinics, hotlines, books, apps, groups, courses, programs, and templates.',
      sections: [
        {
          title: 'Clinics & Professionals',
          items: [
            { text: 'List trusted local clinics.', detail: 'Compile verified providers with addresses and contact details for quick access.' },
            { text: 'Note specialties and hours.', detail: 'Record areas of expertise and opening times to match needs efficiently.' },
            { text: 'Keep contacts updated.', detail: 'Review entries quarterly; remove outdated info and add new options.' },
          ],
        },
        {
          title: 'Hotlines',
          items: [
            { text: 'Emergency and support numbers.', detail: 'Store national/local emergency and counseling lines prominently.' },
            { text: 'Store visibly and digitally.', detail: 'Post on the fridge and save in phones for immediate retrieval.' },
            { text: 'Practice usage scenarios.', detail: 'Discuss when and how to call so family members feel prepared.' },
          ],
        },
        {
          title: 'Books & Guides',
          items: [
            { text: 'Evidence‑based titles.', detail: 'Favor resources aligned with reputable organizations and current research.' },
            { text: 'Summaries and key ideas.', detail: 'Create brief notes to recall concepts without re‑reading entire books.' },
            { text: 'Library and online options.', detail: 'Use library holds and credible online repositories to reduce costs.' },
          ],
        },
        {
          title: 'Apps',
          items: [
            { text: 'Trackers and education apps.', detail: 'Choose tools that simplify routines or teach skills without heavy ads.' },
            { text: 'Privacy and safety checks.', detail: 'Review permissions, data policies, and content ratings before adoption.' },
            { text: 'Share setup tips.', detail: 'Document configurations and usage best practices for caregivers.' },
          ],
        },
        {
          title: 'Support Groups',
          items: [
            { text: 'Local/community groups.', detail: 'Join nearby meetups or community centers for in‑person support.' },
            { text: 'Online moderated spaces.', detail: 'Prefer moderated forums to maintain safety and constructive dialogue.' },
            { text: 'Meeting schedules.', detail: 'Track times, locations, and agendas to plan attendance smoothly.' },
          ],
        },
        {
          title: 'Courses',
          items: [
            { text: 'Parenting classes or webinars.', detail: 'Select courses with clear outcomes and practical exercises.' },
            { text: 'Age‑specific modules.', detail: 'Match material to developmental stages for relevance.' },
            { text: 'Certificates and follow‑ups.', detail: 'Save completion records and schedule refreshers if offered.' },
          ],
        },
        {
          title: 'Government Programs',
          items: [
            { text: 'Health and education support.', detail: 'Identify benefits, screenings, and services available locally.' },
            { text: 'Documentation requirements.', detail: 'List required IDs, forms, and proofs to prevent application delays.' },
            { text: 'Application timelines.', detail: 'Note deadlines and processing windows to plan appropriately.' },
          ],
        },
        {
          title: 'Checklists',
          items: [
            { text: 'Emergency kits.', detail: 'Prepare supplies, contacts, and plans; review seasonally.' },
            { text: 'Care logs and schedules.', detail: 'Use simple templates to coordinate caregivers and track routines.' },
            { text: 'School readiness lists.', detail: 'Organize documents, supplies, and health checks ahead of term.' },
          ],
        },
        {
          title: 'Templates',
          items: [
            { text: 'Budget sheets.', detail: 'Provide simple tables for income, expenses, and goals.' },
            { text: 'Routine planners.', detail: 'Offer daily/weekly layouts to standardize blocks and transitions.' },
            { text: 'Meal plans and chore charts.', detail: 'Use clear grids to assign tasks and plan balanced menus.' },
          ],
        },
        {
          title: 'Curation Process',
          items: [
            { text: 'Review and update quarterly.', detail: 'Audit links and materials; verify accuracy and relevance.' },
            { text: 'Gather feedback from users.', detail: 'Ask caregivers what helped and what needs improvement.' },
            { text: 'Archive outdated resources.', detail: 'Retire obsolete content to keep the library clean and trusted.' },
          ],
        },
      ],
    },
    'travel-planning': {
      description:
        'Plan smooth trips with clear goals, documents, budgets, itineraries, safety steps, and review routines.',
      sections: [
        {
          title: 'Trip Goals',
          items: [
            { text: 'Define purpose and must‑see items.', detail: 'Choose themes and top experiences to guide route, pacing, and budget.' },
            { text: 'Estimate time windows.', detail: 'Plan realistic days with rest; avoid over‑stacking activities.' },
            { text: 'Align with companions.', detail: 'Capture preferences, constraints, and energy levels for shared buy‑in.' },
          ],
        },
        {
          title: 'Documents',
          items: [
            { text: 'Check passport validity.', detail: 'Confirm at least 6 months remaining beyond your return date.' },
            { text: 'Visas and entry requirements.', detail: 'Use official sources to verify visas, e‑visas, and permits.' },
            { text: 'Travel insurance confirmation.', detail: 'Ensure medical, cancellation, and baggage coverage are active.' },
          ],
        },
        {
          title: 'Packing',
          items: [
            { text: 'Create a checklist.', detail: 'List essentials by category and climate to prevent last‑minute stress.' },
            { text: 'Pack light and versatile.', detail: 'Favor layers and multi‑use items; keep bag size within easy carry limits.' },
            { text: 'Include basic meds and chargers.', detail: 'Add first‑aid basics, prescriptions, adapters, and power banks.' },
          ],
        },
        {
          title: 'Itinerary',
          items: [
            { text: 'Map daily highlights.', detail: 'Choose 1–2 anchors per day and let extras be optional.' },
            { text: 'Group nearby attractions.', detail: 'Cluster by neighborhoods to reduce transit time and fatigue.' },
            { text: 'Add buffer time.', detail: 'Leave 20–30% flexible time for delays or spontaneous finds.' },
          ],
        },
        {
          title: 'Budget',
          items: [
            { text: 'Set caps per category.', detail: 'Assign limits for lodging, food, transport, and activities.' },
            { text: 'Track real‑time spend.', detail: 'Use an app or shared sheet to update costs daily.' },
            { text: 'Keep emergency buffer.', detail: 'Hold a small reserve for unexpected expenses or changes.' },
          ],
        },
        {
          title: 'Safety',
          items: [
            { text: 'Register emergency contacts.', detail: 'Save embassy, local clinics, and trusted contacts in phones.' },
            { text: 'Save local hotlines.', detail: 'Record police, medical, and tourist assistance numbers.' },
            { text: 'Share itinerary with someone.', detail: 'Provide check‑in times and route changes to a contact at home.' },
          ],
        },
        {
          title: 'Transport',
          items: [
            { text: 'Book flights or routes early.', detail: 'Secure better schedules and pricing with advance booking.' },
            { text: 'Compare options for value.', detail: 'Balance cost against time and convenience for each leg.' },
            { text: 'Plan airport/city transfers.', detail: 'Decide on trains, buses, or rides; note pickup points and timings.' },
          ],
        },
        {
          title: 'Accommodation',
          items: [
            { text: 'Pick location near transit.', detail: 'Choose walkable areas or close to lines for easy movement.' },
            { text: 'Check reviews and safety.', detail: 'Read recent, balanced reviews; verify neighborhood safety.' },
            { text: 'Confirm cancellation policies.', detail: 'Prefer flexible options if plans may change.' },
          ],
        },
        {
          title: 'Local Tips',
          items: [
            { text: 'Learn basic phrases.', detail: 'Practice greetings, directions, and polite forms for smoother interactions.' },
            { text: 'Know customs and etiquette.', detail: 'Understand dress, table manners, and public behavior norms.' },
            { text: 'Understand tipping and fees.', detail: 'Check expected gratuities and typical service charges.' },
          ],
        },
        {
          title: 'Post‑Trip',
          items: [
            { text: 'Review what worked.', detail: 'Note highlights and friction points to refine future plans.' },
            { text: 'Archive receipts.', detail: 'Store records for budgeting, reimbursements, or claims.' },
            { text: 'Note improvements for next time.', detail: 'Update packing lists, routes, and vendor choices based on experience.' },
          ],
        },
      ],
    },
    'budget-travel': {
      description:
        'Travel well on a budget using smart booking, flexible dates, local food, affordable stays, and free activities.',
      sections: [
        {
          title: 'Budgeting',
          items: [
            { text: 'Set total cap.', detail: 'Define an overall trip limit and stick to it with daily guardrails.' },
            { text: 'Allocate by category.', detail: 'Distribute funds across lodging, food, transport, and activities.' },
            { text: 'Track daily spend.', detail: 'Log costs each day to adjust quickly when a category runs hot.' },
          ],
        },
        {
          title: 'Flights',
          items: [
            { text: 'Flexible dates for deals.', detail: 'Search ±3–7 days; use fare calendars to spot cheaper windows.' },
            { text: 'Use alerts and points.', detail: 'Set price alerts; redeem miles or flexible points for big savings.' },
            { text: 'Avoid peak seasons.', detail: 'Prefer shoulder periods and midweek departures to cut costs.' },
          ],
        },
        {
          title: 'Accommodation',
          items: [
            { text: 'Compare hostels and rentals.', detail: 'Balance privacy, location, and shared amenities for value.' },
            { text: 'Choose shared spaces or kitchens.', detail: 'Access to kitchens reduces food costs and increases flexibility.' },
            { text: 'Check weekly rates.', detail: 'Longer stays often unlock discounted nightly pricing.' },
          ],
        },
        {
          title: 'Food',
          items: [
            { text: 'Local markets and street food.', detail: 'Eat where locals eat; prioritize fresh, simple dishes.' },
            { text: 'Cook simple meals.', detail: 'Prepare breakfasts or one meal daily to trim expenses.' },
            { text: 'Avoid tourist traps.', detail: 'Skip venues near main attractions; compare menus a block away.' },
          ],
        },
        {
          title: 'Transport',
          items: [
            { text: 'Use public transit.', detail: 'Buy day passes or reloadable cards for predictable, low fares.' },
            { text: 'Walk or cycle when possible.', detail: 'Plan short routes to save money and discover neighborhoods.' },
            { text: 'Buy passes to save.', detail: 'Weekly or multi‑ride tickets reduce per‑trip costs.' },
          ],
        },
        {
          title: 'Activities',
          items: [
            { text: 'Free museums and parks.', detail: 'Target free days and public spaces for rich experiences.' },
            { text: 'City walking tours.', detail: 'Use tip‑based tours to learn history affordably.' },
            { text: 'Bundle tickets.', detail: 'City passes or combo tickets can lower total spend.' },
          ],
        },
        {
          title: 'Off‑Peak',
          items: [
            { text: 'Travel shoulder seasons.', detail: 'Lower prices, fewer crowds, and better availability.' },
            { text: 'Visit weekdays.', detail: 'Aim for Tuesday–Thursday to avoid weekend premiums.' },
            { text: 'Time visits early or late.', detail: 'Arrive off hours to reduce lines and dynamic pricing.' },
          ],
        },
        {
          title: 'Rewards',
          items: [
            { text: 'Use loyalty programs.', detail: 'Enroll in airline, hotel, and transit schemes for perks.' },
            { text: 'Collect miles/points.', detail: 'Pay with cards that earn transferable points for flexibility.' },
            { text: 'Leverage cashback.', detail: 'Stack cashback portals and card offers on bookings.' },
          ],
        },
        {
          title: 'Safety',
          items: [
            { text: 'Protect documents and cash.', detail: 'Carry copies and split storage; use money belts discreetly.' },
            { text: 'Beware common scams.', detail: 'Research local tactics; confirm prices before service.' },
            { text: 'Keep emergency numbers.', detail: 'Save medical, police, and embassy contacts offline.' },
          ],
        },
        {
          title: 'Review',
          items: [
            { text: 'Track savings.', detail: 'Compare planned vs actual costs; note standout wins.' },
            { text: 'Note best value tips.', detail: 'Record tactics that worked to reuse on future trips.' },
            { text: 'Plan future optimizations.', detail: 'Refine packing, routes, and booking strategies iteratively.' },
          ],
        },
      ],
    },
    'travel-safety': {
      description:
        'Reduce risks with preparation, health steps, secure bookings, careful transit, local awareness, and contingency planning.',
      sections: [
        {
          title: 'Preparation',
          items: [
            { text: 'Research local risks.', detail: 'Check government advisories and recent news on safety, weather, and events.' },
            { text: 'Share plans with contacts.', detail: 'Provide itinerary and check‑in schedule to someone you trust.' },
            { text: 'Backup documents digitally.', detail: 'Store scans of passports, visas, and policies in secure cloud storage.' },
          ],
        },
        {
          title: 'Health',
          items: [
            { text: 'Vaccinations and meds.', detail: 'Confirm required shots and carry prescriptions with generic names.' },
            { text: 'Travel clinic advice.', detail: 'Consult professionals for region‑specific precautions and kits.' },
            { text: 'Pack first‑aid essentials.', detail: 'Include pain relief, bandages, antiseptic, rehydration salts, and allergy meds.' },
          ],
        },
        {
          title: 'Documents',
          items: [
            { text: 'Copies of ID and visas.', detail: 'Keep printed and digital copies separate from originals.' },
            { text: 'Emergency contacts list.', detail: 'Record embassy, local health providers, and personal contacts.' },
            { text: 'Secure storage.', detail: 'Use hotel safes or hidden pouches; avoid carrying all documents at once.' },
          ],
        },
        {
          title: 'Transport',
          items: [
            { text: 'Choose reputable providers.', detail: 'Book verified taxis, trains, and buses; check ratings and licenses.' },
            { text: 'Avoid risky routes/times.', detail: 'Prefer daylight travel; ask locals about safer paths.' },
            { text: 'Seatbelts and helmets.', detail: 'Buckle up and wear helmets; decline unsafe vehicles.' },
          ],
        },
        {
          title: 'Accommodation',
          items: [
            { text: 'Well‑reviewed areas.', detail: 'Pick neighborhoods with consistent positive feedback on safety.' },
            { text: 'Locks and safes.', detail: 'Check room locks; use safes for valuables or lockable bags.' },
            { text: 'Know exits and rules.', detail: 'Locate exits, alarms, and house rules upon arrival.' },
          ],
        },
        {
          title: 'Money',
          items: [
            { text: 'Limit cash carry.', detail: 'Carry only what you need; keep reserves in separate places.' },
            { text: 'Use cards carefully.', detail: 'Enable transaction alerts; avoid public Wi‑Fi for banking.' },
            { text: 'Hide backups and split storage.', detail: 'Separate cards/cash across bags and pockets to reduce single‑point loss.' },
          ],
        },
        {
          title: 'Communication',
          items: [
            { text: 'Local SIM or eSIM.', detail: 'Stay reachable and access maps and translation on the go.' },
            { text: 'Emergency dialing codes.', detail: 'Note country‑specific codes and quick‑dial contacts.' },
            { text: 'Share live location.', detail: 'Use trusted apps to let contacts track your movements when needed.' },
          ],
        },
        {
          title: 'Local Laws',
          items: [
            { text: 'Understand restrictions.', detail: 'Check rules on medications, drones, and photography.' },
            { text: 'Respect customs.', detail: 'Adapt dress and behavior to local norms to avoid conflict.' },
            { text: 'Avoid prohibited items.', detail: 'Confirm bans on foods, plants, or cultural artifacts.' },
          ],
        },
        {
          title: 'Emergencies',
          items: [
            { text: 'Nearest clinics and police.', detail: 'Map locations and routes before you need them.' },
            { text: 'Insurance claim steps.', detail: 'Know documentation required and the process to file quickly.' },
            { text: 'Contingency contacts.', detail: 'Keep backups for transportation, lodging, and local assistance.' },
          ],
        },
        {
          title: 'Post‑Trip',
          items: [
            { text: 'Debrief incidents.', detail: 'Record what happened and lessons learned to improve future safety.' },
            { text: 'Update checklists.', detail: 'Revise packing and procedures based on real‑world gaps.' },
            { text: 'Adjust future plans.', detail: 'Change routes, vendors, or policies to reduce similar risks next time.' },
          ],
        },
      ],
    },
    accommodation: {
      description:
        'Choose safe, convenient stays with the right location, amenities, policies, and reviews for your trip goals.',
      sections: [
        {
          title: 'Types',
          items: [
            { text: 'Hotels and hostels.', detail: 'Pick based on budget, privacy, and services; hostels suit social, low‑cost travel.' },
            { text: 'Apartments and homestays.', detail: 'Gain kitchens and space; confirm building rules and access details.' },
            { text: 'Unique stays.', detail: 'Consider cabins or boutique options; verify amenities match your needs.' },
          ],
        },
        {
          title: 'Booking',
          items: [
            { text: 'Compare platforms.', detail: 'Check multiple sites for price, policies, and included services.' },
            { text: 'Check policies and fees.', detail: 'Read cancellation, deposits, and cleaning fees to avoid surprises.' },
            { text: 'Use filters wisely.', detail: 'Filter for location, rating, and essentials (Wi‑Fi, kitchen, AC).' },
          ],
        },
        {
          title: 'Location',
          items: [
            { text: 'Near transit and attractions.', detail: 'Reduce commute time; pick walkable areas aligned with itinerary.' },
            { text: 'Safe neighborhoods.', detail: 'Scan recent reviews and local guidance for safety signals.' },
            { text: 'Noise considerations.', detail: 'Ask about street noise, clubs, or construction; request quiet rooms.' },
          ],
        },
        {
          title: 'Amenities',
          items: [
            { text: 'Kitchen and laundry.', detail: 'Save on food and packing; confirm appliances and availability.' },
            { text: 'Wi‑Fi reliability.', detail: 'Check speed reports; contact host for typical speeds and outages.' },
            { text: 'Workspace needs.', detail: 'Ensure desk space, outlets, and lighting if you plan to work.' },
          ],
        },
        {
          title: 'Safety',
          items: [
            { text: 'Locks and security.', detail: 'Verify door locks, secondary latches, and building access controls.' },
            { text: 'Emergency exits.', detail: 'Locate exits and alarms; know procedures in case of incident.' },
            { text: 'Host verification.', detail: 'Prefer verified hosts and platforms with strong fraud protections.' },
          ],
        },
        {
          title: 'Budget',
          items: [
            { text: 'Total cost and deposits.', detail: 'Calculate full stay cost including cleaning, taxes, and deposits.' },
            { text: 'Weekly/monthly discounts.', detail: 'Longer bookings often reduce nightly rates significantly.' },
            { text: 'Hidden fees.', detail: 'Ask about parking, resort, or key replacement fees before booking.' },
          ],
        },
        {
          title: 'Check‑In',
          items: [
            { text: 'Arrival times and access.', detail: 'Confirm check‑in windows and keys, codes, or staff availability.' },
            { text: 'ID requirements.', detail: 'Carry necessary identification per platform or local regulation.' },
            { text: 'House rules.', detail: 'Understand guest limits, noise, smoking, and pet policies in advance.' },
          ],
        },
        {
          title: 'House Rules',
          items: [
            { text: 'Guests and noise.', detail: 'Respect quiet hours and capacity limits to avoid penalties.' },
            { text: 'Cleaning expectations.', detail: 'Clarify chores and checkout steps to prevent extra fees.' },
            { text: 'Local regulations.', detail: 'Follow building and city rules for short‑term stays.' },
          ],
        },
        {
          title: 'Reviews',
          items: [
            { text: 'Recent, balanced feedback.', detail: 'Read multiple recent reviews to catch changes in quality.' },
            { text: 'Read negatives.', detail: 'Assess consistent complaints (noise, cleanliness) before committing.' },
            { text: 'Photos vs reality.', detail: 'Compare traveler photos with listings to spot misleading angles.' },
          ],
        },
        {
          title: 'Troubleshooting',
          items: [
            { text: 'Contact host early.', detail: 'Report issues promptly to allow fixes or adjustments.' },
            { text: 'Document issues.', detail: 'Take photos and notes; communicate through the platform for records.' },
            { text: 'Relocation options.', detail: 'Know backup stays or platform support if problems persist.' },
          ],
        },
      ],
    },
    transportation: {
      description:
        'Navigate cities efficiently using public transit, safe rides, walking, cycling, and smart booking strategies.',
      sections: [
        {
          title: 'Modes',
          items: [
            { text: 'Transit, rides, bikes.', detail: 'Choose modes per distance, cost, and safety; mix for efficiency.' },
            { text: 'Compare options.', detail: 'Balance price vs time; consider transfers and wait times.' },
            { text: 'Accessibility needs.', detail: 'Verify lifts, ramps, and accessible vehicles before travel.' },
          ],
        },
        {
          title: 'Booking',
          items: [
            { text: 'Apps and passes.', detail: 'Install local apps; buy day or weekly passes for savings.' },
            { text: 'Advance tickets.', detail: 'Reserve intercity routes early for schedules and better fares.' },
            { text: 'Flexible options.', detail: 'Prefer refundable or changeable tickets when plans may shift.' },
          ],
        },
        {
          title: 'Safety',
          items: [
            { text: 'Stay alert.', detail: 'Keep valuables secured; avoid distraction in crowded areas.' },
            { text: 'Verified providers.', detail: 'Use licensed rides and official stations to reduce risk.' },
            { text: 'Night travel rules.', detail: 'Choose well‑lit routes; sit near staff or exits when possible.' },
          ],
        },
        {
          title: 'Local Transit',
          items: [
            { text: 'Maps and lines.', detail: 'Learn key lines and transfer points to simplify navigation.' },
            { text: 'Peak times.', detail: 'Avoid rush hours when possible; plan buffers for delays.' },
            { text: 'Etiquette.', detail: 'Follow local norms for queuing, seating, and noise.' },
          ],
        },
        {
          title: 'Rides & Taxis',
          items: [
            { text: 'Official stands.', detail: 'Board at marked areas; confirm driver and car details.' },
            { text: 'License checks.', detail: 'Verify permit and meter; agree on fare for non‑metered rides.' },
            { text: 'Upfront pricing.', detail: 'Use apps with upfront fares; avoid cash‑only surprises.' },
          ],
        },
        {
          title: 'Driving',
          items: [
            { text: 'Permits and insurance.', detail: 'Check license requirements and ensure proper coverage.' },
            { text: 'Local laws.', detail: 'Learn speed limits, alcohol rules, and right‑of‑way norms.' },
            { text: 'Parking and tolls.', detail: 'Plan for parking costs and toll routes to avoid fines.' },
          ],
        },
        {
          title: 'Walk & Cycle',
          items: [
            { text: 'Routes and paths.', detail: 'Pick pedestrian‑friendly areas and protected bike lanes.' },
            { text: 'Lights and helmets.', detail: 'Carry lights at night and wear helmets for safety.' },
            { text: 'Secure storage.', detail: 'Lock bikes properly; keep personal items close.' },
          ],
        },
        {
          title: 'Accessibility',
          items: [
            { text: 'Elevators and ramps.', detail: 'Confirm station and vehicle accessibility features.' },
            { text: 'Priority seating.', detail: 'Know policies and ask staff for assistance when needed.' },
            { text: 'Service availability.', detail: 'Check for outages or reduced services before setting out.' },
          ],
        },
        {
          title: 'Luggage',
          items: [
            { text: 'Storage options.', detail: 'Use lockers or hotel storage to reduce burden in city visits.' },
            { text: 'Weight and size limits.', detail: 'Follow carrier rules to avoid extra fees and delays.' },
            { text: 'Label bags.', detail: 'Add contact info and markers to speed identification.' },
          ],
        },
        {
          title: 'Contingency',
          items: [
            { text: 'Alternate routes.', detail: 'Prepare backups for closures or delays to maintain schedule.' },
            { text: 'Delay buffers.', detail: 'Add time between connections to absorb disruptions.' },
            { text: 'Local contacts.', detail: 'Save numbers for stations, vendors, or friends who can assist.' },
          ],
        },
      ],
    },
    'living-abroad': {
      description:
        'Adapt to life overseas with visas, housing, banking, healthcare, community, language, safety, and logistics.',
      sections: [
        {
          title: 'Visa & Legal',
          items: [
            { text: 'Right to reside.', detail: 'Confirm residency status and permitted activities before arrival.' },
            { text: 'Work/study permits.', detail: 'Apply early; track requirements and processing times.' },
            { text: 'Renewals and compliance.', detail: 'Set reminders; keep copies of filings and approvals.' },
          ],
        },
        {
          title: 'Housing',
          items: [
            { text: 'Neighborhood research.', detail: 'Assess safety, transit, and grocery access; visit at different times.' },
            { text: 'Lease terms.', detail: 'Review deposits, notice periods, and maintenance responsibilities.' },
            { text: 'Utilities and setup.', detail: 'Arrange power, water, internet, and waste services quickly.' },
          ],
        },
        {
          title: 'Banking',
          items: [
            { text: 'Local accounts.', detail: 'Open checking and savings; confirm ID and address requirements.' },
            { text: 'Transfers & fees.', detail: 'Compare wire, ACH, and card fees; use low‑cost providers.' },
            { text: 'Emergency funds.', detail: 'Keep a backup reserve in accessible accounts.' },
          ],
        },
        {
          title: 'Healthcare',
          items: [
            { text: 'Insurance and clinics.', detail: 'Enroll in appropriate plans; list nearby clinics and hospitals.' },
            { text: 'Registration steps.', detail: 'Complete local health registrations if required.' },
            { text: 'Pharmacies.', detail: 'Locate reliable pharmacies; learn prescription transfer rules.' },
          ],
        },
        {
          title: 'Language',
          items: [
            { text: 'Classes and apps.', detail: 'Use formal courses and daily practice apps for acceleration.' },
            { text: 'Local practice.', detail: 'Join conversation groups; practice in low‑stakes settings.' },
            { text: 'Key survival phrases.', detail: 'Master basics for directions, shopping, and emergencies.' },
          ],
        },
        {
          title: 'Work/Study',
          items: [
            { text: 'Contracts and rules.', detail: 'Understand terms, probation periods, and grievance processes.' },
            { text: 'Schedules and holidays.', detail: 'Map public holidays and typical work hours to plan well.' },
            { text: 'Support offices.', detail: 'Identify HR/international offices for onboarding help.' },
          ],
        },
        {
          title: 'Community',
          items: [
            { text: 'Clubs and groups.', detail: 'Join local communities for interests and support.' },
            { text: 'Mentors and support.', detail: 'Find guides who share practical advice and connections.' },
            { text: 'Events.', detail: 'Attend fairs and meetups to expand networks.' },
          ],
        },
        {
          title: 'Safety',
          items: [
            { text: 'Local risks.', detail: 'Research neighborhood‑specific risks and emergency services.' },
            { text: 'Secure habits.', detail: 'Adopt routines for locking, lighting, and travel awareness.' },
            { text: 'Emergency plans.', detail: 'Create contacts, meeting points, and backup housing options.' },
          ],
        },
        {
          title: 'Culture',
          items: [
            { text: 'Etiquette and norms.', detail: 'Learn greetings, queue rules, and social expectations.' },
            { text: 'Food and festivals.', detail: 'Explore local cuisine and calendar events respectfully.' },
            { text: 'Dress and customs.', detail: 'Adapt attire to context; understand religious considerations.' },
          ],
        },
        {
          title: 'Logistics',
          items: [
            { text: 'Transport and phones.', detail: 'Choose plans and passes; set up local SIM or eSIM.' },
            { text: 'Mailing and IDs.', detail: 'Register addresses; obtain resident IDs as required.' },
            { text: 'Cost of living.', detail: 'Track expenses and adjust budgets to local prices.' },
          ],
        },
      ],
    },
    'cultural-tips': {
      description:
        'Respect local customs with etiquette, communication, food practices, dress codes, gifts, and punctuality.',
      sections: [
        {
          title: 'Etiquette',
          items: [
            { text: 'Greetings and gestures.', detail: 'Use local forms of address and respectful body language.' },
            { text: 'Queueing and lines.', detail: 'Follow local norms for order and spacing; avoid cutting.' },
            { text: 'Dining manners.', detail: 'Learn utensil use, hand rules, and serving customs.' },
          ],
        },
        {
          title: 'Communication',
          items: [
            { text: 'Direct vs indirect styles.', detail: 'Adjust tone to local preference; avoid confrontational phrasing.' },
            { text: 'Volume and space.', detail: 'Match typical speaking volume and personal distance.' },
            { text: 'Honorifics.', detail: 'Use titles and polite forms appropriately, especially with elders.' },
          ],
        },
        {
          title: 'Food',
          items: [
            { text: 'Common staples.', detail: 'Learn typical dishes to order confidently and respectfully.' },
            { text: 'Religious rules.', detail: 'Respect dietary restrictions and preparation customs.' },
            { text: 'Allergies and substitutions.', detail: 'Communicate needs clearly; carry translations if necessary.' },
          ],
        },
        {
          title: 'Religion & Customs',
          items: [
            { text: 'Places of worship rules.', detail: 'Follow dress, entry, and photography guidelines; remain discreet.' },
            { text: 'Dress expectations.', detail: 'Adapt attire to modesty and occasion standards.' },
            { text: 'Photography guidance.', detail: 'Ask permission and avoid restricted areas or sacred objects.' },
          ],
        },
        {
          title: 'Dress',
          items: [
            { text: 'Modesty norms.', detail: 'Understand local modesty rules to avoid offense.' },
            { text: 'Event attire.', detail: 'Choose appropriate outfits for ceremonies and formal events.' },
            { text: 'Practical choices.', detail: 'Prioritize comfort and climate‑appropriate fabrics.' },
          ],
        },
        {
          title: 'Gifts',
          items: [
            { text: 'Receiving and giving.', detail: 'Use both hands where customary; avoid opening immediately if not expected.' },
            { text: 'Avoid faux pas.', detail: 'Check items or colors considered unlucky or inappropriate.' },
            { text: 'Wrapping styles.', detail: 'Follow local wrapping traditions and presentation etiquette.' },
          ],
        },
        {
          title: 'Photography',
          items: [
            { text: 'Ask permission.', detail: 'Gain consent for portraits; respect privacy and cultural norms.' },
            { text: 'Restricted sites.', detail: 'Follow rules at government or religious locations.' },
            { text: 'Discretion and respect.', detail: 'Avoid disruption and remain sensitive to context.' },
          ],
        },
        {
          title: 'Negotiation',
          items: [
            { text: 'Bargaining norms.', detail: 'Learn where haggling is expected and typical discount ranges.' },
            { text: 'Fair pricing.', detail: 'Aim for reasonable outcomes; avoid aggressive tactics.' },
            { text: 'Polite refusals.', detail: 'Decline courteously and firmly when needed.' },
          ],
        },
        {
          title: 'Punctuality',
          items: [
            { text: 'Time expectations.', detail: 'Understand local flexibility versus strict schedules.' },
            { text: 'Grace periods.', detail: 'Offer and expect small buffers; communicate proactively.' },
            { text: 'Communicate delays.', detail: 'Notify hosts promptly with revised ETAs.' },
          ],
        },
        {
          title: 'Respect',
          items: [
            { text: 'Learn local phrases.', detail: 'Use basic language to show effort and build goodwill.' },
            { text: 'Avoid stereotypes.', detail: 'Stay curious and open; ask questions rather than assume.' },
            { text: 'Be curious and humble.', detail: 'Listen actively and follow local leads on behavior.' },
          ],
        },
      ],
    },
    'nigerian-culture': {
      description:
        'Understand Nigerian culture: greetings, food, markets, music, festivals, dress, transport, safety, and language.',
      sections: [
        {
          title: 'Greetings',
          items: [
            { text: 'Respectful forms of address.', detail: 'Use titles and honorifics; greet elders first with deference.' },
            { text: 'Handshakes and bows.', detail: 'Offer firm but polite handshakes; slight bows show respect in some contexts.' },
            { text: 'Elders first.', detail: 'Prioritize elders in greetings and seating; avoid interrupting.' },
          ],
        },
        {
          title: 'Food',
          items: [
            { text: 'Staples and dishes.', detail: 'Know jollof, suya, pounded yam, egusi; try local variations.' },
            { text: 'Street food etiquette.', detail: 'Buy from busy, clean vendors; watch handling and reheating.' },
            { text: 'Regional flavors.', detail: 'Explore differences across regions for spice levels and ingredients.' },
          ],
        },
        {
          title: 'Markets',
          items: [
            { text: 'Bargaining norms.', detail: 'Expect negotiation; start low, remain friendly, and settle fairly.' },
            { text: 'Cash vs transfers.', detail: 'Carry small bills; many vendors accept mobile transfers.' },
            { text: 'Safety tips.', detail: 'Keep valuables hidden; travel with companions where possible.' },
          ],
        },
        {
          title: 'Music & Arts',
          items: [
            { text: 'Popular genres.', detail: 'Afrobeats, highlife, and fuji are widely enjoyed; check local charts.' },
            { text: 'Local venues.', detail: 'Attend open‑air shows or cultural centers for authentic experiences.' },
            { text: 'Etiquette at events.', detail: 'Respect performance space; ask before filming or photographing.' },
          ],
        },
        {
          title: 'Festivals',
          items: [
            { text: 'Major celebrations.', detail: 'Note Eyo, Durbar, and cultural harvests; confirm schedules and routes.' },
            { text: 'Dress expectations.', detail: 'Wear comfortable, respectful attire; consider traditional fabrics.' },
            { text: 'Community roles.', detail: 'Observe roles and protocols; follow local guidance during processions.' },
          ],
        },
        {
          title: 'Dress',
          items: [
            { text: 'Traditional attire.', detail: 'Ankara, agbada, and gele feature prominently; ask for styling help.' },
            { text: 'Modesty and comfort.', detail: 'Adapt to climate and setting; carry light layers for sun.' },
            { text: 'Occasion specifics.', detail: 'Match attire to weddings, church, or official events appropriately.' },
          ],
        },
        {
          title: 'Transport',
          items: [
            { text: 'Danfo and keke tips.', detail: 'Learn routes and fares; board at official stops when possible.' },
            { text: 'Routes and hubs.', detail: 'Identify major terminals and typical interchange points.' },
            { text: 'Safety at night.', detail: 'Prefer ride‑hailing and well‑lit roads; share trips with contacts.' },
          ],
        },
        {
          title: 'Safety',
          items: [
            { text: 'Stay aware.', detail: 'Watch surroundings; avoid displaying valuables; plan routes in advance.' },
            { text: 'Local contacts.', detail: 'Save trusted numbers for quick assistance or advice.' },
            { text: 'Emergency numbers.', detail: 'Record police, medical, and fire services for your area.' },
          ],
        },
        {
          title: 'Language',
          items: [
            { text: 'Common phrases.', detail: 'Learn greetings in Yoruba, Igbo, Hausa, and Pidgin for connection.' },
            { text: 'Regional languages.', detail: 'Expect multilingual environments; ask politely which language to use.' },
            { text: 'Polite forms.', detail: 'Use courteous expressions; avoid slang until you understand context.' },
          ],
        },
        {
          title: 'Tipping & Negotiation',
          items: [
            { text: 'When and how.', detail: 'Tip for good service where customary; ask locals for norms.' },
            { text: 'Fair pricing.', detail: 'Negotiate respectfully; accept small overages as goodwill when needed.' },
            { text: 'Polite refusals.', detail: 'Decline extra purchases with warm but firm language.' },
          ],
        },
      ],
    },
    'local-tourism': {
      description:
        'Explore nearby attractions with smart planning, safety, budget awareness, and respectful local engagement.',
      sections: [
        {
          title: 'Research',
          items: [
            { text: 'Attractions and hours.', detail: 'Confirm opening times and closures; check seasonal highlights.' },
            { text: 'Best times.', detail: 'Visit early or late to avoid crowds and heat.' },
            { text: 'Local rules.', detail: 'Learn restrictions on food, pets, and drones before visiting.' },
          ],
        },
        {
          title: 'Itinerary',
          items: [
            { text: 'Routes and clusters.', detail: 'Group nearby sites to maximize time at attractions.' },
            { text: 'Buffer times.', detail: 'Add breaks and transit margins to keep the day calm.' },
            { text: 'Reservations.', detail: 'Book timed entries where required to skip lines.' },
          ],
        },
        {
          title: 'Transport',
          items: [
            { text: 'Transit and rides.', detail: 'Use public transit or ride‑hailing; check route availability in advance.' },
            { text: 'Parking options.', detail: 'Identify lots or street parking and payment methods.' },
            { text: 'Walking routes.', detail: 'Plan safe paths with shade and rest spots.' },
          ],
        },
        {
          title: 'Tickets',
          items: [
            { text: 'Buy online.', detail: 'Purchase ahead for discounts and guaranteed entry.' },
            { text: 'Combo passes.', detail: 'Bundle multiple sites to reduce total costs.' },
            { text: 'Student/senior discounts.', detail: 'Carry ID to access local concession pricing.' },
          ],
        },
        {
          title: 'Weather',
          items: [
            { text: 'Check forecasts.', detail: 'Review updates on rain, heat, and wind; adjust plans accordingly.' },
            { text: 'Sun and rain gear.', detail: 'Pack sunscreen, hats, and compact umbrellas.' },
            { text: 'Heat and cold plans.', detail: 'Schedule indoor breaks or warm‑up stops when needed.' },
          ],
        },
        {
          title: 'Packing',
          items: [
            { text: 'Day bag essentials.', detail: 'Carry maps, small first‑aid, and basic hygiene items.' },
            { text: 'Water and snacks.', detail: 'Stay hydrated; avoid overpriced tourist options.' },
            { text: 'Power banks.', detail: 'Charge phones and cameras for navigation and photos.' },
          ],
        },
        {
          title: 'Safety',
          items: [
            { text: 'Stay aware.', detail: 'Keep belongings secure; avoid isolated areas after dark.' },
            { text: 'Group options.', detail: 'Join guided tours for added safety and local insight.' },
            { text: 'Emergency contacts.', detail: 'Save local assistance numbers and nearest clinic locations.' },
          ],
        },
        {
          title: 'Photography',
          items: [
            { text: 'Respect rules.', detail: 'Follow signs and staff guidance on restricted areas.' },
            { text: 'Ask permission.', detail: 'Be courteous with portraits and private spaces.' },
            { text: 'Avoid blocking paths.', detail: 'Stay aware of traffic flow and other visitors.' },
          ],
        },
        {
          title: 'Budget',
          items: [
            { text: 'Track small spends.', detail: 'Log snacks and souvenirs; small costs add up quickly.' },
            { text: 'Avoid tourist traps.', detail: 'Compare prices off main streets; ask locals for recommendations.' },
            { text: 'Use local deals.', detail: 'Seek resident rates, weekday discounts, and free days.' },
          ],
        },
        {
          title: 'Review',
          items: [
            { text: 'Favorite spots.', detail: 'Note highlights to revisit or recommend to friends.' },
            { text: 'Improvements.', detail: 'Record friction points and better alternatives for next time.' },
            { text: 'Share tips.', detail: 'Post concise guidance to help others navigate efficiently.' },
          ],
        },
      ],
    },
  };

  const detailed = contentMap[params.slug];
  const isDetailed = !!detailed;
  const sections = detailed?.sections || [];
  const description =
    detailed?.description ||
    `Browse our latest lifestyle guides and practical routines for ${title}.`;
  const checklist = detailed?.checklist || [];

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        <section className="py-16 bg-gradient-to-br from-rose-50 to-pink-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <Breadcrumb items={breadcrumbItems} className="mb-6" />
              <span className="inline-block px-4 py-2 rounded-full bg-rose-100 text-rose-700 text-sm font-semibold uppercase tracking-wide mb-4">
                Topic
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">{title}</h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">{description}</p>
              <div className="mt-4">
                <AppImage
                  src={`/assets/images/lifestyle/${params.slug}.jpg`}
                  alt={title}
                  width={1600}
                  height={256}
                  className="w-full max-w-3xl h-64 object-cover rounded-2xl border border-rose-100"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            {isDetailed ? (
              <div className="space-y-12">
                <div className="grid md:grid-cols-2 gap-8">
                  {sections.slice(0, 4).map((section, idx) => (
                  <div
                      key={section.title}
                      className="p-6 rounded-2xl bg-gray-50 border border-gray-200"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                        <div className="w-10 h-10 rounded-full bg-rose-600 text-white flex items-center justify-center font-semibold shadow-sm">
                          {idx + 1}
                        </div>
                      </div>
                      <ul className="space-y-4">
                        {section.items.map((item) => {
                          const obj = typeof item === 'string' ? { text: item } : item;
                          return (
                            <li key={obj.text} className="flex items-start">
                              <span className="mt-1 mr-3 inline-block w-2 h-2 rounded-full bg-rose-500"></span>
                              <div>
                                <div className="text-gray-800 font-medium">{obj.text}</div>
                                {obj.detail && (
                                  <div className="text-gray-600 mt-1">{obj.detail}</div>
                                )}
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {sections.slice(4, 8).map((section, idx) => (
                    <div
                      key={section.title}
                      className="p-6 rounded-2xl bg-gray-50 border border-gray-200"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                        <div className="w-10 h-10 rounded-full bg-pink-600 text-white flex items-center justify-center font-semibold shadow-sm">
                          {idx + 5}
                        </div>
                      </div>
                      <ul className="space-y-4">
                        {section.items.map((item) => {
                          const obj = typeof item === 'string' ? { text: item } : item;
                          return (
                            <li key={obj.text} className="flex items-start">
                              <span className="mt-1 mr-3 inline-block w-2 h-2 rounded-full bg-pink-500"></span>
                              <div>
                                <div className="text-gray-800 font-medium">{obj.text}</div>
                                {obj.detail && (
                                  <div className="text-gray-600 mt-1">{obj.detail}</div>
                                )}
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {sections.slice(8).map((section, idx) => (
                    <div
                      key={section.title}
                      className="p-6 rounded-2xl bg-gray-50 border border-gray-200"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                        <div className="w-10 h-10 rounded-full bg-slate-800 text-white flex items-center justify-center font-semibold shadow-sm">
                          {idx + 9}
                        </div>
                      </div>
                      <ul className="space-y-4">
                        {section.items.map((item) => {
                          const obj = typeof item === 'string' ? { text: item } : item;
                          return (
                            <li key={obj.text} className="flex items-start">
                              <span className="mt-1 mr-3 inline-block w-2 h-2 rounded-full bg-slate-600"></span>
                              <div>
                                <div className="text-gray-800 font-medium">{obj.text}</div>
                                {obj.detail && (
                                  <div className="text-gray-600 mt-1">{obj.detail}</div>
                                )}
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  ))}
                </div>

                {checklist.length > 0 && (
                  <div className="p-6 rounded-2xl bg-rose-50 border border-rose-200">
                    <h3 className="text-xl font-bold text-rose-900 mb-2">Checklist</h3>
                    <p className="text-rose-800 mb-4">Work through these steps in order.</p>
                    <ol className="list-decimal pl-6 space-y-2 text-rose-900">
                      {checklist.map((step) => (
                        <li key={step}>{step}</li>
                      ))}
                    </ol>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
                <div className="max-w-md mx-auto">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Curating Content</h3>
                  <p className="text-gray-500">
                    We are currently compiling the best resources for {title}. Check back soon for
                    updated guides and articles.
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
