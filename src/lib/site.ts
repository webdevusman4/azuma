/**
 * Single source of truth for contact details, navigation and core content (Project Bible: "Tech stack" rule).
 * Change a phone number here once and it updates everywhere.
 *
 * Items marked CONFIRM are still open questions in the Project Bible and need the client's sign-off.
 */

export const SITE = {
  name: "Azuma Solutions",
  legalName: "Azuma Tax and Financial Solutions LLC",
  url: "https://azumasolution.com",
  tagline: "Accurate. Certified. Affordable.",
  description:
    "U.S. tax, bookkeeping and financial planning by Chartered Accountants, for small businesses, startups and international owners.",
  phone: "+1 (920) 473-1934",
  tel: "tel:+19204731934",
  // CONFIRM: the current site lists both +1 (920) 473-1934 and +92 320 8308266 as WhatsApp. The live hero button uses this one.
  whatsapp: "https://wa.me/19204731934",
  email: "info@azumasolution.com",
  offices: "United States · Pakistan",
  social: [
    { label: "LinkedIn", href: "https://www.linkedin.com/company/azuma-solution" },
    { label: "Facebook", href: "https://www.facebook.com/azumasolutionllc" },
    { label: "Instagram", href: "https://www.instagram.com/azumasolution" },
  ],
} as const;

export const BOOK_HREF = "/contact#book";

export const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
] as const;

export type ServiceIcon = "tax" | "books" | "forecast" | "structure" | "audit" | "advisory";

export type Service = {
  slug: string;
  name: string;
  short: string;
  outcome: string;
  tags: string[];
  icon: ServiceIcon;
  image: string;
  imageAlt: string;
};

/** The six consolidated services (Project Bible: Sitemap). Outcomes are rewritten from the current site's service copy. */
export const SERVICES: Service[] = [
  {
    slug: "tax-planning-preparation",
    image: "/photos/service-tax.jpg",
    imageAlt: "Two professionals reviewing tax forms at a table",
    name: "Tax Planning & Preparation",
    short: "Tax",
    outcome: "Returns filed accurately and on time, with planning that lowers what you owe.",
    tags: ["Tax filing", "Tax planning", "Compliance"],
    icon: "tax",
  },
  {
    slug: "bookkeeping-financial-statements",
    image: "/photos/service-books.jpg",
    imageAlt: "An accountant working through figures with a calculator and notebook",
    name: "Bookkeeping & Financial Statements",
    short: "Books",
    outcome: "Statements prepared to regulatory standards, so you always know where you stand.",
    tags: ["Bookkeeping", "Financial statements", "Reporting"],
    icon: "books",
  },
  {
    slug: "financial-planning-forecasting",
    image: "/photos/service-forecast.jpg",
    imageAlt: "A business owner reviewing financial charts on a tablet",
    name: "Financial Planning & Forecasting",
    short: "Forecasts",
    outcome: "Budgets, financial models and forecasts that turn your numbers into decisions.",
    tags: ["Budgeting", "Financial models", "Forecasts"],
    icon: "forecast",
  },
  {
    slug: "corporate-structuring-compliance",
    image: "/photos/service-structure.jpg",
    imageAlt: "A team meeting around a boardroom table",
    name: "Corporate Structuring & Compliance",
    short: "Structure",
    outcome: "The right structure for your business, kept compliant as you grow.",
    tags: ["Entity structure", "Mergers & acquisitions", "Regulatory compliance"],
    icon: "structure",
  },
  {
    slug: "audit-support",
    image: "/photos/service-audit.jpg",
    imageAlt: "A professional reading through documents",
    name: "Audit Support",
    short: "Audit",
    outcome: "Thorough preparation before an audit, and steady support all the way through it.",
    tags: ["Audit preparation", "Documentation", "Compliance review"],
    icon: "audit",
  },
  {
    slug: "business-advisory",
    image: "/photos/service-advisory.jpg",
    imageAlt: "Advisers in discussion with a client in a modern office",
    name: "Business Advisory",
    short: "Advisory",
    outcome: "Strategic advice that improves performance, cuts costs and protects profitability.",
    tags: ["Performance", "Cost optimization", "Risk management"],
    icon: "advisory",
  },
];

/** Keyword chips under the hero headline. */
export const HERO_KEYWORDS = ["Tax Filing", "Bookkeeping", "Forecasting", "Compliance", "Audit Support"] as const;

/** Scrolling keyword marquee: only services Azuma actually offers (from the current site's service copy). */
export const MARQUEE_ROWS = [
  ["Tax Filing", "Tax Planning", "Business Returns", "Individual Returns", "Bookkeeping", "Financial Statements", "Financial Reporting", "Budgeting"],
  ["Forecasting", "Financial Models", "Entity Structuring", "Mergers & Acquisitions", "Regulatory Compliance", "Audit Support", "Cost Optimization", "Risk Management", "Business Advisory"],
] as const;

export const serviceHref = (slug: string) => `/services/${slug}`;

/** Audience switcher (Project Bible: Audiences). Services are referenced by slug. */
export const AUDIENCES = [
  {
    id: "small-business",
    imagePos: "38% 50%",
    title: "Small Businesses",
    keywords: ["Tax filing", "Clean books", "Year-round planning"],
    image: "/photos/audience-small-business.jpg",
    imageAlt: "An adviser and a business owner reviewing and signing paperwork at a desk",
    label: "Small businesses",
    need: "Tax filing, clean books and year-round planning, without hiring a full-time finance team.",
    help: "We keep your statements accurate, file on time and plan ahead, so tax season holds no surprises.",
    services: ["tax-planning-preparation", "bookkeeping-financial-statements", "business-advisory"],
  },
  {
    id: "founders",
    imagePos: "50% 50%",
    title: "Startups",
    keywords: ["Forecasts", "Financial models", "Structure"],
    image: "/photos/audience-founders.jpg",
    imageAlt: "A startup team planning at a whiteboard in an open office",
    label: "Startup founders",
    need: "Financial models, forecasts and a company structure that investors and regulators understand.",
    help: "We build your budget and forecast, set up the right structure and keep you compliant as you raise and grow.",
    services: ["financial-planning-forecasting", "corporate-structuring-compliance"],
  },
  {
    id: "international",
    imagePos: "78% 50%",
    title: "International Owners",
    keywords: ["U.S. filings", "Compliance", "Across time zones"],
    image: "/photos/audience-international.jpg",
    imageAlt: "A business owner on a video call with his advisers",
    label: "International owners",
    need: "U.S. tax and compliance obligations handled correctly, wherever you live and work.",
    help: "A U.S.-registered firm with a team in Pakistan, so your U.S. filings are covered across time zones.",
    services: ["tax-planning-preparation", "corporate-structuring-compliance"],
  },
  {
    id: "freelancers",
    imagePos: "74% 50%",
    title: "Freelancers & Expats",
    keywords: ["Personal returns", "Fair price", "Simple process"],
    image: "/photos/audience-freelancers.jpg",
    imageAlt: "A freelancer working on a laptop by a bright window at home",
    label: "Freelancers & expats",
    need: "Personal U.S. tax filing at a fair price, through a process that doesn't eat your week.",
    help: "Share your documents, we prepare and file, and you get clear answers from a qualified accountant.",
    services: ["tax-planning-preparation"],
  },
] as const;

/** The four-step process from the current Services page, tightened. */
export const PROCESS = [
  {
    title: "Initial consultation",
    text: "We learn your financial, tax and corporate requirements, and what you want to achieve.",
  },
  {
    title: "Assessment and analysis",
    text: "We review your statements, budgets and forecasts to find opportunities, risks and compliance gaps.",
  },
  {
    title: "Strategy and planning",
    text: "We design a plan for your situation: optimizing tax positions, restructuring entities or improving reporting.",
  },
  {
    title: "Implementation and support",
    text: "We put the plan into action with your team, then stay on for continuous support.",
  },
] as const;

export const FOUNDERS = [
  {
    name: "Arsalan Zahid",
    credentials: "CA, ACCA, LLB",
    role: "Co-Founder & Managing Partner",
    photo: "/people/arsalan-zahid.jpg",
    bio: "Chartered Accountant and ACCA member with 8+ years across multinational and domestic companies: corporate finance, reporting, taxation, budgeting and forecasting. He has led ERP implementations and overseen audits.",
  },
  {
    name: "Umair Mughal",
    credentials: "NED University",
    role: "Co-Founder & Director",
    photo: "/people/umair-mughal.jpg",
    bio: "Business management, operations and strategic planning experience, leading projects for multinational firms and digital-literacy initiatives. He builds the teams and operations behind Azuma's client work.",
  },
] as const;

/** Latest article (the only one published on the current site). */
export const LATEST_INSIGHT = {
  title: "Top 5 tax planning strategies for small businesses in 2025",
  href: "/insights/tax-planning-strategies-small-businesses-2025",
  author: "Arsalan Zahid",
  date: "April 8, 2025",
  isoDate: "2025-04-08",
  excerpt:
    "Five practical ways small businesses can lower their tax bill and stay compliant, from the Managing Partner of Azuma Solutions.",
  category: "Tax planning",
};

/** CONFIRM: answers are drawn from the current site's copy; pricing and consultation wording need client sign-off. */
export const FAQ = [
  {
    q: "Do you work with clients outside the United States?",
    a: "Yes. Azuma is a U.S.-registered firm with a regional office in Pakistan. We serve U.S. businesses and individuals, and international clients with U.S. tax obligations, including freelancers, startup founders and expatriates.",
  },
  {
    q: "Who will actually handle my work?",
    a: "Our team of accredited professionals, led by the founders. Arsalan Zahid is a Chartered Accountant and ACCA member with more than 8 years of experience in corporate finance, reporting and taxation.",
  },
  {
    q: "What happens in the free consultation?",
    a: "We talk through your financial, tax and corporate requirements and your goals. You leave with a clear view of what needs doing and how we would approach it, with no obligation to go further.",
  },
  {
    q: "How much do your services cost?",
    a: "It depends on the scope: a single tax return is very different from monthly bookkeeping and forecasting. We confirm the price with you after the consultation, before any work starts.",
  },
] as const;
