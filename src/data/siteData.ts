export interface ServiceIncludedItem {
  title: string;
  items: string[];
}

export interface ServiceDetail {
  id: string;
  slug: string;
  title: string;
  h3Title: string;
  shortDesc: string;
  badge: string;
  tag: string;
  iconName: string;
  color: string;
  glowColor: string;
  gradient: string;
  description: string;
  whatsIncluded: string[];
  keyHighlights: string[];
  idealFor: string[];
}

export interface WhyChoosePillar {
  number: string;
  title: string;
  description: string;
  tag: string;
  accent: string;
  iconName: string;
  metrics: string;
}

export interface MetaAdsProcessStep {
  title: string;
  description: string;
  tag: string;
  iconName: string;
}

export interface WhoWeHelpItem {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  accentColor: string;
  marketingSolutions: string[];
  benefits: string[];
  iconName: string;
}

export interface IndustryItem {
  title: string;
  subtitle: string;
  description: string;
  solutions: string[];
  iconName: string;
}

export interface WorkProcessStep {
  step: string;
  number: string;
  title: string;
  description: string;
  deliverable: string;
  iconName: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  practice: string;
  location: string;
  rating: number;
  metric: string;
  metricLabel: string;
  quote: string;
  tags: string[];
  avatarUrl?: string;
  hasVideo?: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const SITE_METADATA = {
  title: "Digital Marketing Agency for Health & Wellness | Team With Someone",
  description:
    "Team With Someone is a digital marketing agency for health and wellness, helping doctors, dietitians and nutritionists grow their online presence.",
  keywords: [
    "Digital Marketing Agency for Health & Wellness",
    "digital marketing agency for healthcare",
    "Digital Marketing Agency for Health and Wellness",
    "digital marketing services for healthcare",
    "Marketing agency for health and wellness",
    "advertising agency for health and wellness",
    "Meta Ads for Doctors",
    "Healthcare SEO Agency",
    "Dietitian Lead Generation",
    "Clinic Marketing India",
  ],
  siteUrl: "https://teamwithsomeone.com",
  canonicalUrl: "https://teamwithsomeone.com",
  agencyName: "Team With Someone",
  brandShort: "TWS",
  establishedYear: "2021",
  experienceYears: "5+",
  bookingCalendlyUrl: "https://calendly.com/teamwithsomeone/new-meeting",
  wistiaMediaId: "62rppgk58c",
  logoUrl: "https://d1yei2z3i6k35z.cloudfront.net/13189876/697dc5fca5d22_twslogo4.png",
  phone: "+91 98765 43210",
  email: "contact@teamwithsomeone.com",
  address: "DLF Cyber City, Sector 24, Gurugram, Haryana, India",
  socials: {
    instagram: "https://www.instagram.com/teamwithsomeone?igsh=MTd3cDg4aDZoNWdhdg%3D%3D",
    linkedin: "https://www.linkedin.com/company/team-with-someone/",
    facebook: "https://www.facebook.com/teamwithsomeone?rdid=BEIV1m3TMoAliRiE&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1E29U11HMV%2F#",
    youtube: "https://www.youtube.com/@teamwithsomeone",
  },
};

export const HERO_CONTENT = {
  eyebrow: "DIGITAL MARKETING FOR HEALTHCARE PROFESSIONALS",
  h1: "Digital Marketing Agency for Health & Wellness",
  leadParagraph1:
    "Team With Someone is a digital marketing agency for healthcare professionals, helping doctors, dietitians, nutritionists, and wellness coaches attract potential patients and clients through strategic Meta Ads, Google Ads, SEO, and performance-driven marketing.",
  leadParagraph2:
    "As a digital marketing agency for health and wellness, we create customized marketing strategies to improve your online visibility, generate relevant enquiries, and support the growth of your healthcare practice.",
  primaryCTA: "Schedule a Call",
  secondaryCTA: "Get in Touch",
  trustPoints: [
    "Specialized Healthcare Marketing",
    "Meta Ads & Lead Generation",
    "Strategies Built Around Your Practice",
  ],
  keyMetrics: [
    { value: "5+ Years", label: "Healthcare Ad Experience" },
    { value: "50+", label: "Doctors & Health Brands Scaled" },
    { value: "300K+", label: "Followers Scaled for Clients" },
    { value: "4.8x", label: "Average Patient Enquiry Surge" },
    { value: "98%", label: "Client Practice Retention" },
  ],
};

export const CORE_SERVICES: ServiceDetail[] = [
  {
    id: "paid-advertising",
    slug: "paid-advertising",
    title: "Paid Advertising",
    h3Title: "Paid Advertising – Meta & Google Ads",
    badge: "High-Intent Acquisition",
    tag: "Patient Acquisition",
    iconName: "TrendingUp",
    color: "#0ea5e9",
    glowColor: "rgba(14, 165, 233, 0.25)",
    gradient: "from-sky-500/20 via-sky-600/10 to-transparent",
    shortDesc:
      "As an advertising agency for health and wellness, we plan and manage targeted advertising campaigns across Facebook, Instagram, Google Search, and YouTube to help you connect with potential patients and clients.",
    description:
      "Precision-crafted campaigns built specifically for medical ethics, patient psychology, and high-conversion consultations. We optimize daily to ensure zero ad spend waste and maximum patient inquiry volume.",
    whatsIncluded: [
      "Targeted Meta Ads campaigns across Facebook and Instagram",
      "Google Search, Call Ads, and YouTube Ads management",
      "Ad copywriting and creative strategy",
      "Audience research and campaign setup",
      "Continuous campaign monitoring and A/B testing",
    ],
    keyHighlights: [
      "Meta Health Advertising Compliance",
      "Cost Per Qualified Enquiry (CPL) Optimization",
      "Direct WhatsApp & Appointment Call Routing",
    ],
    idealFor: ["Medical Clinics", "Dentists", "Dermatologists", "Nutritionists", "Wellness Centers"],
  },
  {
    id: "social-media-management",
    slug: "social-media-management",
    title: "Social Media Management",
    h3Title: "Social Media Management",
    badge: "Authority & Trust",
    tag: "Brand Presence",
    iconName: "Share2",
    color: "#6366f1",
    glowColor: "rgba(99, 102, 241, 0.25)",
    gradient: "from-indigo-500/20 via-indigo-600/10 to-transparent",
    shortDesc:
      "Build a consistent and professional presence across Instagram, YouTube, and LinkedIn with social media marketing designed for healthcare and wellness brands.",
    description:
      "Elevate your medical authority and patient trust through scientific yet easily consumable visual content. We transform complicated medical and diet concepts into engaging, shareable brand assets.",
    whatsIncluded: [
      "Monthly content calendar and strategy",
      "Social media posting and stories",
      "Audience engagement and community management",
      "Monthly performance tracking and reporting",
    ],
    keyHighlights: [
      "Medical credibility enhancement",
      "Community trust & direct messaging triage",
      "Consistent clinical aesthetic & storytelling",
    ],
    idealFor: ["Doctors", "Dietitians", "Holistic Healers", "Fitness Studios"],
  },
  {
    id: "content-creation-video",
    slug: "content-creation",
    title: "Content Creation",
    h3Title: "Content Creation & Video Production",
    badge: "Viral Authority",
    tag: "Video & Media",
    iconName: "Video",
    color: "#ec4899",
    glowColor: "rgba(236, 72, 153, 0.25)",
    gradient: "from-pink-500/20 via-pink-600/10 to-transparent",
    shortDesc:
      "Create engaging content that communicates your expertise, builds credibility, and helps your healthcare brand connect with its audience.",
    description:
      "We write medical scripts, film on-location clinic & studio shoots, and edit high-retention short videos that stop the scroll and establish you as the go-to authority in your specialty.",
    whatsIncluded: [
      "Reel and short-video production",
      "Doctor, clinic, and wellness brand shoots",
      "Video scriptwriting and content ideas",
      "Carousel posts and graphic design",
    ],
    keyHighlights: [
      "High-retention hooks & medical storytelling",
      "Professional 4K lighting & on-camera coaching",
      "Graphic carousels designed for maximum saves & shares",
    ],
    idealFor: ["Specialist Doctors", "Nutrition Coaches", "Physiotherapy Clinics", "Wellness Gurus"],
  },
  {
    id: "local-seo",
    slug: "local-seo",
    title: "Local SEO",
    h3Title: "Local SEO",
    badge: "Clinic Walk-in Engine",
    tag: "Google Maps Domination",
    iconName: "MapPin",
    color: "#10b981",
    glowColor: "rgba(16, 185, 129, 0.25)",
    gradient: "from-emerald-500/20 via-emerald-600/10 to-transparent",
    shortDesc:
      "Improve your local search visibility and help nearby patients discover your clinic or healthcare services through Google Search and Google Maps.",
    description:
      "When someone nearby searches 'best doctor near me' or 'top dietitian in city', your practice must dominate the top 3-pack Google Maps results. We build local medical authority that brings patients straight to your doors.",
    whatsIncluded: [
      "Google Business Profile optimization",
      "Review management strategy",
      "Local keyword research and targeting",
      "Regular Google Business Profile updates and posts",
    ],
    keyHighlights: [
      "Google 3-Pack Local Maps Ranking",
      "Automated patient review collection workflow",
      "Local clinic citation & schema consistency",
    ],
    idealFor: ["Private Clinics", "Polyclinics", "Diagnostic Labs", "Physiotherapy Centers"],
  },
  {
    id: "seo-services",
    slug: "seo-services",
    title: "SEO Services",
    h3Title: "Search Engine Optimization (SEO)",
    badge: "Compounding Traffic",
    tag: "Organic Growth",
    iconName: "Search",
    color: "#38bdf8",
    glowColor: "rgba(56, 189, 248, 0.25)",
    gradient: "from-cyan-500/20 via-cyan-600/10 to-transparent",
    shortDesc:
      "Our healthcare SEO services help improve your website's organic visibility for relevant medical, healthcare, and wellness searches.",
    description:
      "Build long-term digital practice equity. We rank your clinic website for high-intent medical condition searches, treatment queries, and wellness keywords that generate organic patient appointments 24/7.",
    whatsIncluded: [
      "On-page, off-page, and technical SEO",
      "Healthcare keyword research",
      "Medical and wellness blog optimization",
      "Search intent and content planning",
      "Monthly SEO performance tracking",
    ],
    keyHighlights: [
      "Medical Search Quality (E-E-A-T) Optimization",
      "Zero-ad-spend evergreen patient acquisition",
      "Fast, mobile-first medical website indexing",
    ],
    idealFor: ["Hospitals", "Speciality Doctors", "Dietitians", "Online Health Programs"],
  },
  {
    id: "sales-closing-mentorship",
    slug: "sales-mentorship",
    title: "Sales & Closing Mentorship",
    h3Title: "Sales & Closing Mentorship",
    badge: "Revenue Multiplier",
    tag: "Consultation Closing",
    iconName: "Headphones",
    color: "#f59e0b",
    glowColor: "rgba(245, 158, 11, 0.25)",
    gradient: "from-amber-500/20 via-amber-600/10 to-transparent",
    shortDesc:
      "Support your clinic team or business with structured consultation conversations and follow-up practices that help handle enquiries more effectively.",
    description:
      "Leads mean nothing if they aren't converted into paying patients. We train your front-desk coordinators and consultation team on empathetic objection handling, rapid follow-ups, and structured consultation frameworks.",
    whatsIncluded: [
      "Consultation scripts and communication frameworks",
      "Call handling and enquiry management guidance",
      "Guidance for handling common questions and price objections",
      "Call reviews and performance improvement",
    ],
    keyHighlights: [
      "High-ticket medical treatment conversion frameworks",
      "WhatsApp rapid lead response SOPs",
      "Front-desk empathy & qualification coaching",
    ],
    idealFor: ["Doctors with Intake Staff", "Nutrition Clinics", "High-Ticket Wellness Programs"],
  },
];

export const WHY_CHOOSE_TWS: WhyChoosePillar[] = [
  {
    number: "01",
    title: "Healthcare-Focused Marketing Strategies",
    description:
      "We understand that every healthcare practice has different goals, services, and audiences. Team With Someone creates customized digital marketing strategies for doctors, dietitians, and nutritionists to connect their services with relevant potential patients and clients.",
    tag: "Industry Specificity",
    accent: "from-sky-500 to-cyan-400",
    iconName: "Stethoscope",
    metrics: "100% Tailored to Health Regulations",
  },
  {
    number: "02",
    title: "Targeted Meta Ads & Lead Generation",
    description:
      "We manage Facebook and Instagram advertising campaigns designed to reach relevant audiences and generate enquiries for your healthcare services. From audience research and ad creatives to lead forms and campaign optimization, we focus on improving lead quality and campaign performance.",
    tag: "Qualified Inquiries",
    accent: "from-indigo-500 to-purple-400",
    iconName: "Target",
    metrics: "Anti-Junk Intent Qualification",
  },
  {
    number: "03",
    title: "Conversion-Focused Marketing Funnels",
    description:
      "Generating leads is only one part of growing a healthcare practice. We develop structured marketing funnels using landing pages, lead qualification forms, and follow-up strategies to help turn interested prospects into consultation enquiries.",
    tag: "Full-Funnel Architecture",
    accent: "from-emerald-500 to-teal-400",
    iconName: "Filter",
    metrics: "Frictionless Appointment Booking",
  },
  {
    number: "04",
    title: "Data-Driven Campaign Optimization",
    description:
      "We monitor advertising campaigns, analyze performance metrics, test creatives, and optimize audience targeting. Our goal is to improve campaign effectiveness and make better use of your marketing investment.",
    tag: "Algorithmic Precision",
    accent: "from-pink-500 to-rose-400",
    iconName: "BarChart3",
    metrics: "Daily Creative & Bid Auditing",
  },
  {
    number: "05",
    title: "Specialized Marketing for Healthcare Professionals",
    description:
      "Whether you are a doctor, dietitian, nutritionist, or health coach, we develop marketing campaigns around your services, audience, and business goals. Our healthcare marketing approach focuses on relevant messaging and industry-specific requirements.",
    tag: "Ethical & Compliant",
    accent: "from-amber-500 to-orange-400",
    iconName: "ShieldCheck",
    metrics: "Zero Compliance Red Flags",
  },
];

export const META_ADS_SECTION = {
  h2: "Generate Quality Leads for Your Healthcare Practice with Meta Ads",
  introParagraph1:
    "Reaching potential patients and clients consistently can be challenging without a structured advertising strategy. Our Meta Ads management services help healthcare professionals connect with relevant audiences through Facebook and Instagram advertising.",
  introParagraph2:
    "At Team With Someone, we plan, create, launch, and optimize campaigns designed to generate enquiries for healthcare services, consultations, programs, and appointments.",
  whatWeDo: [
    {
      title: "Targeted Audience Research",
      description:
        "We identify relevant audiences based on your healthcare niche, services, location, and ideal customer profile.",
      tag: "Precision Targeting",
      iconName: "Users",
    },
    {
      title: "Facebook & Instagram Ads",
      description:
        "We create and manage Meta Ads campaigns to help doctors, dietitians, and nutritionists reach people who may be interested in their services.",
      tag: "Omnichannel Reach",
      iconName: "Sparkles",
    },
    {
      title: "Ad Creative & Copywriting",
      description:
        "We develop engaging ad creatives, videos, headlines, and advertising messages that communicate your services clearly.",
      tag: "Medical Copy & Hooks",
      iconName: "PenTool",
    },
    {
      title: "Lead Generation Campaigns",
      description:
        "We create lead forms and advertising funnels designed to capture relevant enquiries from potential patients and clients.",
      tag: "High-Intent Forms",
      iconName: "UserCheck",
    },
    {
      title: "Landing Page Optimization",
      description:
        "We create and improve landing pages that explain your services, build trust, and encourage visitors to submit enquiries.",
      tag: "High-Converting Pages",
      iconName: "Layout",
    },
    {
      title: "Campaign Monitoring & Optimization",
      description:
        "We monitor campaign performance, test different creatives and audiences, and optimize campaigns using lead quality and performance data.",
      tag: "Daily Algorithmic Pacing",
      iconName: "Activity",
    },
  ],
};

export const WHO_WE_HELP: WhoWeHelpItem[] = [
  {
    id: "doctors-practitioners",
    title: "Doctors & Medical Practitioners",
    subtitle: "Consultants, Specialists, Surgeons & Private Practice Owners",
    badge: "Medical Authority",
    description:
      "We help doctors and medical practitioners promote their expertise, improve their online visibility, and attract potential patients through targeted digital marketing campaigns.",
    accentColor: "sky",
    marketingSolutions: [
      "Meta Ads for Doctors",
      "Patient Lead Generation",
      "Google Ads Management",
      "Doctor Personal Branding",
      "Social Media Marketing",
      "Healthcare SEO",
    ],
    benefits: [
      "Fill your weekly OPD schedule with verified patient appointments",
      "Build patient trust with high-authority medical video reels",
      "Dominate local Google searches for your medical specialty",
    ],
    iconName: "Stethoscope",
  },
  {
    id: "dietitians-nutritionists",
    title: "Dietitians & Nutritionists",
    subtitle: "Clinical Dietitians, Weight Loss Mentors & Gut Health Specialists",
    badge: "Lifestyle & Nutrition",
    description:
      "Whether you offer personalized diet plans, weight management programs, nutritional consultations, or online coaching, we help you connect with people looking for professional nutrition guidance.",
    accentColor: "emerald",
    marketingSolutions: [
      "Digital Marketing for Dietitians",
      "Meta Ads for Nutritionists",
      "Lead Generation for Nutrition Coaches",
      "Online Program Advertising",
      "Personal Branding & Content Creation",
      "Facebook & Instagram Ads",
    ],
    benefits: [
      "Scale high-ticket personalized meal & consultation packages",
      "Grow your online community to 100K+ followers organically",
      "Automate lead qualification so only serious clients book",
    ],
    iconName: "Apple",
  },
  {
    id: "wellness-coaches",
    title: "Health & Wellness Coaches",
    subtitle: "Fitness Coaches, Yoga Gurus, Holistic Healers & Mental Health Mentors",
    badge: "Coaching & Transformation",
    description:
      "We help health and wellness coaches promote their coaching programs, reach relevant audiences, and generate enquiries through performance marketing and digital strategies.",
    accentColor: "indigo",
    marketingSolutions: [
      "Wellness Lead Generation",
      "Meta Ads Management",
      "Google Ads Campaigns",
      "Social Media Management",
      "Landing Page Development",
      "Marketing Funnel Optimization",
    ],
    benefits: [
      "Attract high-ticket clients willing to invest in their health",
      "Fill recurring retreats, workshops, and cohort memberships",
      "Establish a distinct brand positioning that commands premium pricing",
    ],
    iconName: "HeartPulse",
  },
];

export const ABOUT_US_SECTION = {
  h2: "About Us",
  leadSubtitle: "Digital Marketing Built Specifically for Health, Wellness & Medical Growth",
  paragraphs: [
    "Team With Someone (TWS) is a digital marketing agency focused on helping doctors, clinics, dietitians, nutritionists, and wellness professionals grow their businesses online.",
    "Established in 2021, we bring over five years of digital marketing experience, with a strong focus on healthcare advertising and lead generation.",
    "We understand that every healthcare business has different services, audiences, and marketing requirements. That's why we develop strategies based on your business goals rather than following the same approach for everyone.",
    "Our primary expertise is in Meta Ads management, where we plan and manage Facebook and Instagram campaigns to help healthcare professionals reach relevant audiences and generate enquiries. We also offer Google Ads, SEO, social media management, content creation, and landing page support.",
    "At Team With Someone, our focus is on understanding your business, communicating your services effectively, and making your digital marketing efforts more structured and result-focused.",
  ],
  stats: [
    { label: "Established In", value: "2021" },
    { label: "Healthcare Focus", value: "5+ Years" },
    { label: "Client Retention Rate", value: "98%" },
    { label: "Followers Scaled", value: "300K+" },
  ],
  industriesWeSpecializeIn: [
    {
      title: "Digital Marketing for Doctors & Medical Practitioners",
      subtitle: "Medical Expertise & Practice Growth",
      description:
        "Building trust and reaching the right patients are important for every medical practice. Our digital marketing services for healthcare help doctors communicate their expertise, promote their medical services, and improve their online presence. From Meta Ads and Google Ads to healthcare SEO and doctor personal branding, we develop marketing strategies around your medical specialty and practice goals.",
      solutions: ["Doctor Personal Branding", "OPD Patient Ads", "Medical SEO", "Local Google 3-Pack"],
      iconName: "Stethoscope",
    },
    {
      title: "Digital Marketing for Clinics & Hospitals",
      subtitle: "Regional Authority & OPD Footfall",
      description:
        "Patients often search online when looking for medical services in their area. As a healthcare marketing agency, we help clinics and healthcare centres improve their local search visibility, promote their specialties, and reach people looking for relevant medical services. Our strategies focus on local SEO, Google Business Profile optimization, paid advertising, and social media marketing.",
      solutions: ["Hospital Lead Funnels", "Google Maps Domination", "Multi-Specialty Campaigns", "Reputation Management"],
      iconName: "Building2",
    },
    {
      title: "Digital Marketing for Dietitians & Nutritionists",
      subtitle: "Targeted Nutrition & Program Sales",
      description:
        "Dietitians and nutritionists need to reach people who are actively interested in nutrition guidance, consultations, and personalized programs. We provide digital marketing for dietitians and nutritionists through targeted Meta Ads, social media marketing, and lead generation campaigns. Whether you offer online consultations, personalized diet plans, or nutrition coaching programs, we help you communicate your services to the right audience.",
      solutions: ["Diet Plan Funnels", "Viral Health Reels", "High-Ticket Client Closing", "Instagram Community"],
      iconName: "Salad",
    },
    {
      title: "Digital Marketing for Health & Wellness Coaches",
      subtitle: "Online Programs & 1-on-1 Coaching",
      description:
        "Health and wellness coaches need a clear marketing strategy to promote their coaching programs and connect with potential clients. As a marketing agency for health and wellness, we help coaches build their online presence and generate interest in their services through targeted advertising, content marketing, and lead generation.",
      solutions: ["Coaching Program Ads", "VSL Landing Pages", "Webinar & Workshop Funnels", "Automated Intake"],
      iconName: "Flame",
    },
    {
      title: "Advertising for Wellness & Healthcare Brands",
      subtitle: "Scalable Direct-to-Consumer Growth",
      description:
        "From healthcare consultations to wellness programs, every service needs the right advertising approach. Our advertising agency for health and wellness focuses on audience research, campaign planning, creative development, and Meta Ads management to help healthcare and wellness brands reach relevant audiences and scale revenue predictably.",
      solutions: ["Meta & Google Performance Ads", "Conversion Rate Optimization", "ROAS Optimization", "Brand Creative Studio"],
      iconName: "Sparkles",
    },
  ],
};

export const HOW_WE_WORK: WorkProcessStep[] = [
  {
    step: "01",
    number: "Phase 1",
    title: "Understand Your Business",
    description:
      "We learn about your healthcare services, target audience, business goals, and current marketing challenges to build the right strategy.",
    deliverable: "Practice Discovery & ICP Analysis",
    iconName: "Compass",
  },
  {
    step: "02",
    number: "Phase 2",
    title: "Plan Your Marketing Strategy",
    description:
      "We research your audience, competitors, and market opportunities to create a customized digital marketing and lead generation plan.",
    deliverable: "Tailored Healthcare Marketing Roadmap",
    iconName: "Lightbulb",
  },
  {
    step: "03",
    number: "Phase 3",
    title: "Create Ads & Marketing Funnels",
    description:
      "We develop engaging ad creatives, persuasive copy, lead forms, and conversion-focused landing pages to attract potential patients and clients.",
    deliverable: "High-Converting Creatives & Landing Pages",
    iconName: "Palette",
  },
  {
    step: "04",
    number: "Phase 4",
    title: "Launch & Manage Campaigns",
    description:
      "We launch and manage Meta Ads campaigns across Facebook and Instagram, targeting relevant audiences to generate enquiries.",
    deliverable: "Live Omnichannel Paid Ad Deployment",
    iconName: "Rocket",
  },
  {
    step: "05",
    number: "Phase 5",
    title: "Monitor & Optimize",
    description:
      "We analyze campaign performance, evaluate lead quality, test different strategies, and make improvements to optimize advertising results.",
    deliverable: "Daily Bid & Lead Quality Optimization",
    iconName: "TrendingUp",
  },
  {
    step: "06",
    number: "Phase 6",
    title: "Track Growth & Performance",
    description:
      "We review campaign data and share performance insights to help you understand your marketing progress and identify opportunities for further growth.",
    deliverable: "Transparent Growth Reports & Strategy Reviews",
    iconName: "Award",
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "shweta-parasrampuriya",
    name: "Shweta Parasrampuriya",
    role: "Clinical Nutritionist & Founder",
    practice: "Reverse It with Shweta",
    location: "Mumbai, India",
    rating: 5,
    metric: "300K+ Followers",
    metricLabel: "Scaled From Scratch",
    quote:
      "As a nutritionist, I wanted to grow my personal brand but wasn’t sure how to scale. Working with Team With Someone helped me build a strong online presence and reach over 300K+ followers. The content strategy, video production, and funnels brought real organic authority and high-ticket clients consistently.",
    tags: ["Clinical Nutrition", "Viral Video Reels", "High-Ticket Funnels"],
  },
  {
    id: "dr-adnan-khan",
    name: "Dr. Adnan Khan",
    role: "Doctor & Medical Specialist",
    practice: "Multi-Speciality Polyclinic",
    location: "Delhi NCR",
    rating: 5,
    metric: "4.2x Growth",
    metricLabel: "Private OPD Inquiries",
    quote:
      "I wanted to increase my clinic’s visibility and attract more patients online. Team With Someone managed my social media and performance marketing effectively. I’ve seen consistent growth in inquiries, real local walk-ins, and a much stronger online presence across our medical practice.",
    tags: ["Medical Practice", "OPD Footfall", "Meta Ads for Doctors"],
  },
  {
    id: "venu-das",
    name: "Venu Das",
    role: "Founder & Head Fitness Coach",
    practice: "Venu Fitness",
    location: "Bengaluru, India",
    rating: 5,
    metric: "85% Qualified",
    metricLabel: "Lead Quality Rate",
    quote:
      "I was struggling to get quality leads for my fitness business. After working with Team With Someone, not only did I start getting qualified inquiries, but their team also guided me on how to handle and close those leads. That sales support made all the difference in converting them into paying clients.",
    tags: ["Fitness Coaching", "Sales Closing", "Paid Acquisition"],
    avatarUrl: "/Venu.png",
  },
  {
    id: "asif-mentor",
    name: "Asif",
    role: "Fitness Mentor & Fat Loss Coach",
    practice: "Get Fit with Asif",
    location: "Hyderabad, India",
    rating: 5,
    metric: "2 Weeks",
    metricLabel: "Time to First Breakthrough",
    quote:
      "I was posting regularly but not getting proper leads. That’s when I started working with Team With Someone. They handled my social media and set up a proper funnel, and things started improving within a few weeks. Now I’m getting consistent inquiries and better engagement on my content.",
    tags: ["Social Media", "Lead Funnel", "Personal Brand"],
    avatarUrl: "/Asif.png",
  },
  {
    id: "dr-divya",
    name: "Dr. Divya",
    role: "Holistic Health Doctor",
    practice: "Divya Shiva Yoga & Garbh Sanskar",
    location: "Pune, India",
    rating: 5,
    metric: "100% Relevant",
    metricLabel: "Targeting Accuracy",
    quote:
      "I wanted to generate leads for my Garbh Sanskar program but wasn’t getting the right audience. After working with Team With Someone, I started receiving relevant inquiries from the right people. The entire process became much more structured and effective.",
    tags: ["Garbh Sanskar", "Holistic Wellness", "Niche Audience"],
    avatarUrl: "/divya.png",
  },
];

export const FAQS: FaqItem[] = [
  {
    id: "faq-1",
    question: "What does a digital marketing agency for healthcare do?",
    answer:
      "A digital marketing agency for healthcare helps doctors, clinics, dietitians, and nutritionists promote their services through Meta Ads, Google Ads, SEO, social media marketing, and lead generation strategies. Team With Someone provides these services to help healthcare professionals reach relevant audiences.",
    category: "Healthcare Marketing",
  },
  {
    id: "faq-2",
    question: "Do you run Meta Ads for doctors and clinics?",
    answer:
      "Yes. Team With Someone manages Facebook and Instagram advertising campaigns for doctors and medical clinics to help them reach relevant audiences and generate enquiries.",
    category: "Meta Ads",
  },
  {
    id: "faq-3",
    question: "Can you generate leads for dietitians and nutritionists?",
    answer:
      "Yes. We develop targeted advertising campaigns for dietitians and nutritionists promoting consultations, nutrition programs, weight management services, and online coaching.",
    category: "Dietitians & Nutritionists",
  },
  {
    id: "faq-4",
    question: "Do you manage Facebook and Instagram Ads?",
    answer:
      "Yes! Team With Someone handles audience research, campaign setup, ad creatives, copywriting, lead forms, monitoring, and ongoing Meta Ads optimization.",
    category: "Paid Advertising",
  },
  {
    id: "faq-5",
    question: "Do you guarantee a specific number of leads?",
    answer:
      "At Team With Someone, we focus on generating relevant enquiries through strategic advertising and continuous campaign optimization. However, results depend on budget, competition, audience, and market demand.",
    category: "Expectations & Guarantees",
  },
  {
    id: "faq-6",
    question: "Do you provide Google Ads and SEO services?",
    answer:
      "Yes. We provide Google Ads management and healthcare SEO services to help healthcare professionals improve their online visibility and connect with relevant audiences.",
    category: "Google Ads & SEO",
  },
  {
    id: "faq-7",
    question: "Why choose Team With Someone as your healthcare marketing agency?",
    answer:
      "Team With Someone specializes in digital marketing for healthcare and wellness professionals, combining targeted Meta Ads, lead generation strategies, SEO, and customized marketing solutions.",
    category: "Why Choose TWS",
  },
  {
    id: "faq-8",
    question: "How do we get started with Team With Someone?",
    answer:
      "You can get in touch with our team or schedule a strategy call. We will understand your practice, services, marketing goals, and current challenges before recommending a suitable marketing strategy.",
    category: "Onboarding",
  },
];

export const FOOTER_LINKS = {
  navigation: [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms & Conditions", href: "/terms-and-conditions" },
    { name: "Refund & Cancellation Policy", href: "/refund-and-cancellation-policy" },
    { name: "Disclaimer", href: "/disclaimer" },
    { name: "FAQs", href: "/#faqs" },
  ],
  coreServices: [
    { name: "Local SEO", href: "/services#local-seo" },
    { name: "Paid Advertising", href: "/services#paid-advertising" },
    { name: "SEO Services", href: "/services#seo-services" },
    { name: "Social Media Management", href: "/services#social-media-management" },
    { name: "Content Creation", href: "/services#content-creation" },
    { name: "Sales & Closing Mentorship", href: "/services#sales-mentorship" },
  ],
  companyLinks: [
    { name: "About Us", href: "/about-us" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Our Process", href: "/#how-we-work" },
    { name: "Contact Us", href: "/contact-us" },
    { name: "Schedule a Call", href: "https://calendly.com/teamwithsomeone/new-meeting", external: true },
  ],
};
