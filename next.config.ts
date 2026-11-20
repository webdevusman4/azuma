import type { NextConfig } from "next";

const securityHeaders = [
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig: NextConfig = {
  // Standalone output runs on Hostinger's Node.js hosting through server.js (same setup as HiScale).
  // Netlify's Next.js adapter manages its own output, so standalone is switched off there (Netlify sets NETLIFY=true).
  output: process.env.NETLIFY ? undefined : "standalone",
  poweredByHeader: false,
  // Old WordPress URLs (Project Bible: SEO plan). Trailing slashes are stripped by Next.js automatically.
  async redirects() {
    return [
      { source: "/publications", destination: "/insights", permanent: true },
      {
        source: "/top-5-tax-planning-strategies-for-small-businesses-in-2025-by-arsalan-zahid-ceo-azuma-financial-and-tax-solutions",
        destination: "/insights/tax-planning-strategies-small-businesses-2025",
        permanent: true,
      },
      { source: "/pricing", destination: "/contact", permanent: false },
      { source: "/author/:path*", destination: "/about", permanent: true },
      { source: "/metform-form/:path*", destination: "/contact", permanent: true },
    ];
  },
  async headers() {
    return [{ source: "/(.*)", headers: securityHeaders }];
  },
};

export default nextConfig;
