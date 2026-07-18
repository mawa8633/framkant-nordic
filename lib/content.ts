export type Service = {
  slug: string;
  title: string;
  description: string;
  benefits: string[];
  problems: string[];
  solutions: string[];
  included: string[];
  systemStep: string;
};

export type Industry = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  businessTypes: string[];
  challenges: string[];
  solutions: string[];
};

export type CaseStudy = {
  slug: string;
  client: string;
  industry: string;
  headline: string;
  challenge: string;
  outcomes: string[];
  services: string[];
  testimonial: {
    quote: string;
    name: string;
    role: string;
  };
  gallery: string[];
  featured?: boolean;
};

export type Article = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  readTime: string;
};

export const site = {
  name: "Framkant Nordic",
  url: "https://framkantnordic.com",
  email: "hello@framkantnordic.com",
  phone: "Phone consultation after request",
  registeredName: "Framkant Nordic AB",
  organizationNumber: "Registration details available on request",
  address: "Sweden",
  businessHours: "Monday-Friday, 09:00-17:00 CET",
  ctaLabel: "Book a Free Growth Analysis",
  ctaHref: "/contact",
  footerStatement:
    "Structured digital growth systems for businesses that value long-term partnerships.",
};

export const navigation = [
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const growthSteps = [
  "Traffic",
  "Website",
  "CRM",
  "Automation",
  "Lead Management",
  "Customer Experience",
  "Growth",
];

export const services: Service[] = [
  {
    slug: "web-design",
    title: "Web Design",
    description: "High-converting websites built as the foundation of the digital growth system.",
    benefits: ["Conversion-focused structure", "Fast responsive pages", "Clear business positioning"],
    problems: ["Outdated website", "Weak conversion paths", "Unclear service communication"],
    solutions: ["Plan the customer journey", "Build reusable sections", "Optimize speed and clarity"],
    included: ["UX structure", "Responsive design", "Landing pages", "Conversion copy", "Analytics setup"],
    systemStep: "Website",
  },
  {
    slug: "local-seo",
    title: "Local SEO",
    description: "Stronger visibility in Google Search and Google Maps for local customers.",
    benefits: ["More qualified local traffic", "Better map visibility", "Ongoing search improvement"],
    problems: ["Low Google visibility", "Competitors appear first", "Weak local authority"],
    solutions: ["Optimize key pages", "Improve Google Business Profile", "Build local relevance"],
    included: ["Keyword research", "On-page SEO", "Google Business Profile", "Local content", "Tracking"],
    systemStep: "Traffic",
  },
  {
    slug: "crm",
    title: "CRM",
    description: "A structured system for leads, conversations, bookings, and customer follow-up.",
    benefits: ["No lost inquiries", "Clear pipeline", "Better customer follow-up"],
    problems: ["Leads scattered across channels", "Slow response", "No clear ownership"],
    solutions: ["Create one lead hub", "Define pipeline stages", "Connect forms and follow-up"],
    included: ["Pipeline setup", "Lead forms", "Contact records", "Booking flow", "Team handover"],
    systemStep: "CRM",
  },
  {
    slug: "marketing-automation",
    title: "Marketing Automation",
    description: "Automated communication and follow-up that prevents opportunities from being lost.",
    benefits: ["Faster response", "Consistent nurturing", "Less manual work"],
    problems: ["Manual reminders", "Inconsistent follow-up", "Missed booking opportunities"],
    solutions: ["Map key touchpoints", "Automate reminders", "Trigger relevant messages"],
    included: ["Email flows", "SMS reminders", "Lead routing", "Review requests", "Workflow reporting"],
    systemStep: "Automation",
  },
  {
    slug: "ai-chat",
    title: "AI Chat",
    description: "AI-powered website communication that answers questions and captures leads.",
    benefits: ["Instant answers", "More captured inquiries", "Better visitor experience"],
    problems: ["Visitors leave with questions", "Forms feel slow", "Staff repeat the same answers"],
    solutions: ["Train answers on business context", "Qualify visitors", "Send leads to CRM"],
    included: ["Knowledge setup", "Lead capture", "Escalation logic", "CRM handoff", "Quality review"],
    systemStep: "Lead Management",
  },
  {
    slug: "google-ads",
    title: "Google Ads",
    description: "Search advertising focused on customers with active purchase intent.",
    benefits: ["High-intent traffic", "Clear conversion tracking", "Controlled budget learning"],
    problems: ["Slow lead flow", "Untracked ad spend", "Generic campaigns"],
    solutions: ["Target commercial searches", "Build focused landing paths", "Measure every inquiry"],
    included: ["Campaign structure", "Keyword strategy", "Landing alignment", "Conversion tracking", "Reporting"],
    systemStep: "Traffic",
  },
  {
    slug: "meta-ads",
    title: "Meta Ads",
    description: "Targeted campaigns designed to create awareness, demand, and qualified inquiries.",
    benefits: ["Local demand creation", "Retargeting audiences", "Creative testing"],
    problems: ["Low awareness", "No retargeting", "Unclear creative performance"],
    solutions: ["Define audiences", "Test offers and visuals", "Connect campaigns to CRM"],
    included: ["Audience setup", "Creative testing", "Retargeting", "Lead tracking", "Performance reviews"],
    systemStep: "Traffic",
  },
  {
    slug: "review-management",
    title: "Review Management",
    description: "Structured systems for collecting and using customer reviews.",
    benefits: ["More trust signals", "Better local SEO", "Stronger sales proof"],
    problems: ["Few recent reviews", "No request system", "Proof hidden from the website"],
    solutions: ["Automate requests", "Monitor feedback", "Use proof across the journey"],
    included: ["Review request flow", "Response guidance", "Website proof blocks", "Reputation reporting"],
    systemStep: "Customer Experience",
  },
  {
    slug: "analytics-reporting",
    title: "Analytics & Reporting",
    description: "Clear tracking and reporting that connects digital activity to business outcomes.",
    benefits: ["Better decisions", "Visible performance", "Continuous improvement"],
    problems: ["No clear numbers", "Disconnected tools", "Activity without insight"],
    solutions: ["Define key events", "Connect reporting", "Review progress regularly"],
    included: ["GA4 setup", "Conversion events", "Dashboard", "Monthly insight", "Improvement backlog"],
    systemStep: "Growth",
  },
];

export const industries: Industry[] = [
  {
    slug: "beauty",
    title: "Beauty",
    eyebrow: "Salons, clinics, and appointment-based beauty businesses",
    description:
      "A connected digital system for visibility, bookings, follow-up, reviews, and repeat visits.",
    businessTypes: ["Beauty salons", "Aesthetic clinics", "Hair studios", "Nail studios"],
    challenges: ["Inconsistent bookings", "Low Google visibility", "Manual follow-up", "Weak review flow"],
    solutions: ["Local SEO", "Conversion-focused website", "CRM booking pipeline", "Automated review requests"],
  },
  {
    slug: "cleaning",
    title: "Cleaning",
    eyebrow: "Residential and commercial cleaning companies",
    description:
      "A practical growth system that turns local search demand into qualified inquiries and structured follow-up.",
    businessTypes: ["Home cleaning", "Office cleaning", "Move-out cleaning", "Specialist cleaning"],
    challenges: ["Price-shopping leads", "Slow response", "Fragmented quote requests", "Weak local trust"],
    solutions: ["Service landing pages", "Google Ads", "CRM quote pipeline", "Review management"],
  },
  {
    slug: "future-industries",
    title: "Future Industries",
    eyebrow: "Scalable templates for upcoming priority sectors",
    description:
      "The same reusable industry framework can expand into dental, construction, wellness, and other high-value sectors.",
    businessTypes: ["Dental clinics", "Construction firms", "Wellness studios", "Local service brands"],
    challenges: ["Complex customer journeys", "High customer value", "Competitive search markets", "Need for trust"],
    solutions: ["Reusable industry pages", "Proof-led case studies", "Search visibility", "Lead management"],
  },
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "nordic-beauty-studio",
    client: "Nordic Beauty Studio",
    industry: "Beauty",
    headline: "From scattered inquiries to a clearer booking journey.",
    challenge: "The business had demand, but weak visibility and manual follow-up made growth inconsistent.",
    outcomes: ["Clearer service pages", "Structured lead pipeline", "Automated review requests"],
    services: ["Web Design", "Local SEO", "CRM", "Review Management"],
    testimonial: {
      quote: "The project gave us a clearer structure for turning interest into bookings.",
      name: "Client feedback",
      role: "Business owner",
    },
    gallery: ["Website service view", "CRM lead pipeline", "Review request workflow"],
    featured: true,
  },
  {
    slug: "clear-space-cleaning",
    client: "Clear Space Cleaning",
    industry: "Cleaning",
    headline: "A local lead system built around qualified quote requests.",
    challenge: "Quote requests came from many channels and were difficult to track.",
    outcomes: ["New quote flow", "CRM stages", "Google Ads tracking"],
    services: ["Web Design", "Google Ads", "CRM", "Analytics & Reporting"],
    testimonial: {
      quote: "The new flow made inquiries easier to understand and follow up.",
      name: "Client feedback",
      role: "Operations lead",
    },
    gallery: ["Quote request page", "CRM quote stages", "Analytics dashboard"],
  },
  {
    slug: "growth-partner-example",
    client: "Growth Partner Example",
    industry: "Future Industries",
    headline: "A reusable digital ecosystem ready for long-term optimization.",
    challenge: "The company needed one partner to connect website, CRM, automation, and reporting.",
    outcomes: ["Connected systems", "Reduced manual work", "Improvement backlog"],
    services: ["CRM", "Marketing Automation", "Analytics & Reporting"],
    testimonial: {
      quote: "The biggest change was having one connected system instead of separate tools.",
      name: "Client feedback",
      role: "Managing director",
    },
    gallery: ["Growth system map", "Automation workflow", "Reporting overview"],
  },
];

export const articles: Article[] = [
  {
    slug: "how-local-seo-works",
    title: "How Local SEO Works for Service Businesses",
    category: "Educational",
    excerpt: "A practical explanation of search visibility, Google Maps, and local trust signals.",
    readTime: "6 min read",
  },
  {
    slug: "website-launch-checklist",
    title: "Website Launch Checklist",
    category: "Practical Guides",
    excerpt: "The essential checks before launching a fast, accessible, conversion-focused website.",
    readTime: "8 min read",
  },
  {
    slug: "digital-marketing-for-beauty-salons",
    title: "Digital Marketing for Beauty Salons",
    category: "Industry Guides",
    excerpt: "How salons can connect local search, booking flows, CRM, and reviews into one system.",
    readTime: "7 min read",
  },
];

export const faq = [
  {
    question: "Do we need every service?",
    answer:
      "No. Framkant Nordic identifies the most valuable starting point and builds from there. The goal is one connected system, not unnecessary complexity.",
  },
  {
    question: "Can Framkant Nordic work with our existing website?",
    answer:
      "Yes, if the current foundation supports the growth system. If it creates performance, conversion, or tracking problems, the recommendation will be clear.",
  },
  {
    question: "How long does implementation take?",
    answer:
      "Timing depends on scope, but the process follows discovery, strategy, build, launch, optimization, and long-term partnership.",
  },
  {
    question: "What is included in the Growth Partnership?",
    answer:
      "The partnership combines strategy, implementation, measurement, and continuous improvement across the selected digital growth system.",
  },
];

export const principles = [
  ["Structure", "Every solution should be documented, scalable, and built to last."],
  ["Responsibility", "We take ownership of the complete digital ecosystem."],
  ["Transparency", "We communicate honestly, even when the conversation is difficult."],
  ["Simplicity", "Complex systems should feel simple for our clients."],
  ["Continuous Improvement", "Optimization is an ongoing process, not a one-time project."],
  ["Long-Term Thinking", "Every decision should create value for years, not weeks."],
] as const;

export const whyFramkant = [
  ["One Partner", "No need to coordinate multiple suppliers across website, visibility, CRM, automation, and reporting."],
  ["Connected Systems", "Every service is designed to support the full customer journey instead of operating alone."],
  ["Continuous Improvement", "The system is measured and improved over time through practical optimization."],
  ["Long-Term Responsibility", "Framkant Nordic remains involved after launch and takes responsibility for progress."],
] as const;

export const resourceCategories = [
  "All",
  "Educational",
  "Industry Guides",
  "Practical Guides",
  "Local SEO",
  "CRM",
  "Marketing Automation",
  "Ads",
];
