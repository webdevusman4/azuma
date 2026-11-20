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

export type ServiceCategory = {
  id: string;
  name: string;
  short: string;
  line: string;
  icon: ServiceIcon;
  image: string;
  imageAlt: string;
  /** Services in this category. Finance is broad, so this is a living list, not a fixed menu. */
  services: string[];
};

/**
 * What Azuma does, grouped into six categories so the breadth shows without six thin pages.
 * Items marked "confirm" are common finance services that aren't in the current site's copy: keep, edit or remove.
 */
export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "tax",
    name: "Tax Planning & Compliance",
    short: "Tax",
    line: "Returns, planning and advice for businesses and individuals, in the U.S. and across borders.",
    icon: "tax",
    image: "/photos/service-tax.jpg",
    imageAlt: "Two professionals reviewing tax forms at a table",
    services: [
      "Business tax returns",
      "Individual tax returns",
      "Tax planning",
      "Tax advisory",
      "Cross-border & non-resident filings",
      "Tax compliance reviews",
      "IRS notices & correspondence", // confirm
      "Sales & use tax", // confirm
    ],
  },
  {
    id: "accounting",
    name: "Accounting & Bookkeeping",
    short: "Accounting",
    line: "Clean books and accurate financial statements, prepared to regulatory standards.",
    icon: "books",
    image: "/photos/service-books.jpg",
    imageAlt: "An accountant working through figures with a calculator and notebook",
    services: [
      "Bookkeeping",
      "Financial statements",
      "Financial reporting",
      "Bank & account reconciliations", // confirm
      "Month-end & year-end close", // confirm
      "Accounts payable & receivable", // confirm
      "Payroll support", // confirm
    ],
  },
  {
    id: "cfo",
    name: "CFO & Financial Planning",
    short: "CFO Services",
    line: "Budgets, models and forecasts that turn your numbers into decisions.",
    icon: "forecast",
    image: "/photos/service-forecast.jpg",
    imageAlt: "A business owner reviewing financial charts on a tablet",
    services: [
      "Budgeting",
      "Forecasting & projections",
      "Financial modeling",
      "Long-term financial planning",
      "Cash-flow management", // confirm
      "Fractional CFO", // confirm
      "Investor & board reporting", // confirm
    ],
  },
  {
    id: "corporate",
    name: "Corporate Structuring & Compliance",
    short: "Corporate",
    line: "The right structure, deals done properly and compliance kept current as you grow.",
    icon: "structure",
    image: "/photos/service-structure.jpg",
    imageAlt: "A team meeting around a boardroom table",
    services: [
      "Business structuring",
      "Mergers & acquisitions",
      "Regulatory compliance",
      "Financial risk management",
      "Entity setup & formation", // confirm
      "Due diligence", // confirm
    ],
  },
  {
    id: "audit",
    name: "Audit & Assurance",
    short: "Audit",
    line: "Thorough preparation before an audit and steady support all the way through it.",
    icon: "audit",
    image: "/photos/service-audit.jpg",
    imageAlt: "A professional reading through documents",
    services: [
      "Audit preparation",
      "Audit support",
      "Compliance reviews",
      "Documentation & schedules",
      "Internal controls review", // confirm
    ],
  },
  {
    id: "advisory",
    name: "Business Advisory & Systems",
    short: "Advisory",
    line: "Strategic advice and better systems that lift performance and protect profitability.",
    icon: "advisory",
    image: "/photos/service-advisory.jpg",
    imageAlt: "Advisers in discussion with a client in a modern office",
    services: [
      "Business advisory",
      "Cost optimization",
      "Profitability analysis",
      "ERP implementation",
      "Process improvement", // confirm
      "Startup advisory", // confirm
    ],
  },
];

export const categoryHref = (id: string) => `/services#${id}`;

/** Keyword chips under the hero headline. */
export const HERO_KEYWORDS = ["Tax Filing", "Bookkeeping", "Forecasting", "Compliance", "Audit Support"] as const;

/** Scrolling keyword marquee, drawn from SERVICE_CATEGORIES. */
export const MARQUEE_ROWS = [
  ["Business Tax Returns", "Individual Returns", "Tax Planning", "Cross-border Filings", "Bookkeeping", "Financial Statements", "Reconciliations", "Month-end Close", "Payroll Support", "Budgeting"],
  ["Forecasting", "Financial Modeling", "Cash-flow Management", "Fractional CFO", "Business Structuring", "Mergers & Acquisitions", "Regulatory Compliance", "Audit Support", "ERP Implementation", "Cost Optimization", "Business Advisory"],
] as const;


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

/* ------------------------------------------------------------------------------------------------
 * Inner pages. All copy is drawn from the current azumasolution.com pages, tightened to keywords.
 * ---------------------------------------------------------------------------------------------- */

export const ABOUT = {
  story: [
    "Azuma Tax and Financial Solutions LLC is a U.S.-registered firm with a regional office in Pakistan.",
    "We provide financial and tax solutions for businesses and individuals in the United States, and for international clients with U.S. tax obligations.",
    "Our accredited professionals focus on accuracy, efficiency and compliance across every financial domain.",
  ],
  vision:
    "To set new standards of excellence in tax and financial services through precision, innovation and client-focused solutions.",
  mission:
    "To empower businesses and individuals with accurate, efficient and affordable financial strategies that ensure compliance, growth and long-term success.",
};

export const CAREERS = {
  intro: "We're always looking for great talent to join our growing team.",
  reasons: [
    { title: "Growing team", line: "A tax and finance firm serving clients in the U.S. and worldwide." },
    { title: "Make an impact", line: "Real client work for professionals eager to make a difference." },
    { title: "Dynamic workplace", line: "An innovative team passionate about financial services." },
  ],
  apply: "Send your resume to info@azumasolution.com. We'll reach out when a relevant role opens.",
};

export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "tip"; text: string }
  | { type: "ul"; items: string[] };

export type Article = {
  slug: string;
  title: string;
  description: string;
  author: string;
  date: string;
  isoDate: string;
  category: string;
  image: string;
  body: ArticleBlock[];
};

/**
 * Articles. Text is Arsalan Zahid's post from the current site (April 8, 2025), lightly formatted.
 * CONFIRM: the Solo 401(k) figure below ($69,000) is the 2024 limit; the 2025 limit is $70,000. Check before launch.
 */
export const ARTICLES: Article[] = [
  {
    slug: "tax-planning-strategies-small-businesses-2025",
    title: "Top 5 tax planning strategies for small businesses in 2025",
    description:
      "Five practical ways small businesses can lower their tax bill and stay compliant, from the Managing Partner of Azuma Solutions.",
    author: "Arsalan Zahid",
    date: "April 8, 2025",
    isoDate: "2025-04-08",
    category: "Tax planning",
    image: "/photos/insight-tax-forms.jpg",
    body: [
      { type: "p", text: "As we step into 2025, small businesses are navigating a rapidly evolving tax environment. With shifting regulations, emerging technologies and increased scrutiny by tax authorities, proactive tax planning has never been more critical. At Azuma, we believe smart tax strategies can make the difference between surviving and thriving." },
      { type: "p", text: "Here are the top five tax planning strategies every small business should consider in 2025." },
      { type: "h2", text: "1. Optimize your entity structure for tax efficiency" },
      { type: "p", text: "Is your current business structure (sole proprietorship, partnership, LLC, S-Corp) still the best fit for your growth and tax objectives? Each structure has its own implications for how income is taxed. With recent legislative changes, it may be time to reassess and possibly restructure to reduce liability and maximize deductions." },
      { type: "tip", text: "An S-Corp election may significantly reduce self-employment taxes for certain small businesses." },
      { type: "h2", text: "2. Maximize deductions through strategic expense planning" },
      { type: "p", text: "Take full advantage of allowable business expenses by reviewing every category, from home office deductions to technology upgrades and professional fees. Implement a monthly review system to track and categorize all expenses properly." },
      { type: "tip", text: "New in 2025: the IRS has updated thresholds for Section 179 deductions, making capital investment even more beneficial." },
      { type: "h2", text: "3. Leverage retirement plans for owner and employee benefits" },
      { type: "p", text: "Contributions to retirement plans like SEP-IRAs, SIMPLE IRAs and Solo 401(k)s not only secure your financial future but also reduce taxable income. For growing businesses, offering employee retirement benefits is also a great retention tool." },
      { type: "tip", text: "A Solo 401(k) allows business owners to contribute up to $69,000 in 2025, depending on income." },
      { type: "h2", text: "4. Use tax credits: don't leave money on the table" },
      { type: "p", text: "Tax credits are often overlooked. Depending on your industry, location or workforce, you may qualify for credits like:" },
      { type: "ul", items: ["Work Opportunity Tax Credit (WOTC)", "R&D Tax Credit (even for software or system improvements)", "Energy-efficient building or vehicle credits"] },
      { type: "tip", text: "Credits reduce your tax liability directly, dollar for dollar." },
      { type: "h2", text: "5. Adopt cloud accounting and bookkeeping tools" },
      { type: "p", text: "Inaccurate or delayed books lead to missed opportunities and increased risk. Cloud-based accounting tools like QuickBooks Online, Xero or FreshBooks can help you stay organized, monitor KPIs and prepare for tax season in real time." },
      { type: "tip", text: "Digital record-keeping not only improves compliance but can also reduce audit risk." },
      { type: "h2", text: "Final thoughts" },
      { type: "p", text: "Tax planning is not a once-a-year activity. It's a continuous process. Whether you're just starting out or scaling rapidly, these strategies can help you keep more of what you earn while staying compliant." },
      { type: "p", text: "Need help putting these strategies into action? Book a consultation and we'll guide you every step of the way." },
    ],
  },
];

export const articleHref = (slug: string) => `/insights/${slug}`;

/* ------------------------------------------------------------------------------------------------
 * Worldwide globe (home page). CONFIRM with the client: regions and cities shown as places Azuma serves.
 * ---------------------------------------------------------------------------------------------- */
export type City = { name: string; lat: number; lng: number };
/** `labels`: cities named on the globe itself (well-separated ones; close neighbours would overlap). */
export type Region = { id: string; name: string; focus: [number, number]; labels: string[]; cities: City[] };

export const REGIONS: Region[] = [
  {
    id: "usa",
    name: "United States",
    focus: [38, -96],
    labels: ["New York", "Los Angeles", "Miami"],
    cities: [
      { name: "New York", lat: 40.71, lng: -74.01 },
      { name: "Chicago", lat: 41.88, lng: -87.63 },
      { name: "Houston", lat: 29.76, lng: -95.37 },
      { name: "Los Angeles", lat: 34.05, lng: -118.24 },
      { name: "Miami", lat: 25.76, lng: -80.19 },
    ],
  },
  {
    id: "canada",
    name: "Canada",
    focus: [50, -95],
    labels: ["Toronto", "Vancouver"],
    cities: [
      { name: "Toronto", lat: 43.65, lng: -79.38 },
      { name: "Vancouver", lat: 49.28, lng: -123.12 },
      { name: "Montreal", lat: 45.5, lng: -73.57 },
    ],
  },
  {
    id: "europe",
    name: "Europe",
    focus: [50, 8],
    labels: ["London", "Frankfurt"],
    cities: [
      { name: "London", lat: 51.51, lng: -0.13 },
      { name: "Paris", lat: 48.86, lng: 2.35 },
      { name: "Frankfurt", lat: 50.11, lng: 8.68 },
      { name: "Amsterdam", lat: 52.37, lng: 4.9 },
    ],
  },
  {
    id: "middle-east",
    name: "Middle East",
    focus: [25, 50],
    labels: ["Dubai", "Riyadh"],
    cities: [
      { name: "Dubai", lat: 25.2, lng: 55.27 },
      { name: "Abu Dhabi", lat: 24.45, lng: 54.38 },
      { name: "Riyadh", lat: 24.71, lng: 46.68 },
      { name: "Doha", lat: 25.29, lng: 51.53 },
    ],
  },
  {
    id: "pakistan",
    name: "Pakistan",
    focus: [29, 70],
    labels: ["Karachi", "Islamabad"],
    cities: [
      { name: "Karachi", lat: 24.86, lng: 67.0 },
      { name: "Lahore", lat: 31.55, lng: 74.34 },
      { name: "Islamabad", lat: 33.68, lng: 73.05 },
    ],
  },
  {
    id: "southeast-asia",
    name: "Southeast Asia",
    focus: [6, 104],
    labels: ["Singapore", "Bangkok"],
    cities: [
      { name: "Singapore", lat: 1.35, lng: 103.82 },
      { name: "Kuala Lumpur", lat: 3.14, lng: 101.69 },
      { name: "Bangkok", lat: 13.76, lng: 100.5 },
      { name: "Jakarta", lat: -6.2, lng: 106.85 },
    ],
  },
];
