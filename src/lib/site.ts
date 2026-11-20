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

/* ------------------------------------------------------------------------------------------------
 * Inner pages. All copy is drawn from the current azumasolution.com pages, tightened to keywords.
 * ---------------------------------------------------------------------------------------------- */

export type ServiceDetail = { intro: string; included: { title: string; line: string }[] };

/** Service pages: one-line intro + four "what's included" items each. CONFIRM wording with the client. */
export const SERVICE_DETAILS: Record<string, ServiceDetail> = {
  "tax-planning-preparation": {
    intro: "Professional tax filing, planning and advisory that keeps you compliant and lowers what you owe.",
    included: [
      { title: "Tax filing", line: "Business and individual returns, prepared accurately and filed on time." },
      { title: "Tax planning", line: "Year-round strategies that reduce tax liabilities." },
      { title: "Tax advisory", line: "Clear answers when a decision has tax consequences." },
      { title: "Compliance", line: "Filings that meet current tax rules and regulations." },
    ],
  },
  "bookkeeping-financial-statements": {
    intro: "Accurate books and financial statements, prepared in accordance with regulatory standards.",
    included: [
      { title: "Bookkeeping", line: "Transactions recorded and categorized, so your books stay current." },
      { title: "Financial statements", line: "Prepared in line with regulatory standards." },
      { title: "Financial reporting", line: "Reports that show exactly where your business stands." },
      { title: "Statement analysis", line: "What your numbers mean, explained plainly." },
    ],
  },
  "financial-planning-forecasting": {
    intro: "Budgets, data-driven financial models and projections that support informed decisions and growth.",
    included: [
      { title: "Budgeting", line: "Budgets built for efficiency and financial sustainability." },
      { title: "Financial models", line: "Data-driven models for decisions and investors." },
      { title: "Forecasts", line: "Projections that give you a clear view of the months ahead." },
      { title: "Long-term planning", line: "Personalized financial plans for your long-term goals." },
    ],
  },
  "corporate-structuring-compliance": {
    intro: "The right business structure, plus support for mergers, acquisitions, risk and regulatory compliance.",
    included: [
      { title: "Business structuring", line: "Structures chosen for efficiency and compliance." },
      { title: "Mergers & acquisitions", line: "Financial support through mergers and acquisitions." },
      { title: "Risk management", line: "Financial risks identified and managed." },
      { title: "Regulatory compliance", line: "Adherence to financial regulations and laws." },
    ],
  },
  "audit-support": {
    intro: "Assistance before and during audits, so you are thoroughly prepared and compliant.",
    included: [
      { title: "Audit preparation", line: "Records and documents organized before the audit begins." },
      { title: "Documentation", line: "The schedules and support auditors ask for." },
      { title: "Support during the audit", line: "Questions answered and requests handled for you." },
      { title: "Compliance review", line: "Gaps found and fixed early." },
    ],
  },
  "business-advisory": {
    intro: "Strategic advice that improves business performance, efficiency and profitability.",
    included: [
      { title: "Strategic advice", line: "Guidance on the decisions that shape your business." },
      { title: "Performance", line: "What drives results, and what holds them back." },
      { title: "Cost optimization", line: "Budgeting strategies that cut waste and protect margins." },
      { title: "Profitability", line: "Practical steps to improve the bottom line." },
    ],
  },
};

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
