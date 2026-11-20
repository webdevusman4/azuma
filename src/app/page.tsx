import HomePage from "@/components/home/HomePage";
import { FOUNDERS, SITE } from "@/lib/site";

// Structured data (Project Bible: SEO plan). AccountingService is a LocalBusiness subtype Google understands.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "AccountingService"],
      "@id": `${SITE.url}/#org`,
      name: SITE.name,
      legalName: SITE.legalName,
      url: SITE.url,
      logo: `${SITE.url}/brand/azuma-logo-color.png`,
      slogan: SITE.tagline,
      description: SITE.description,
      telephone: "+1-920-473-1934",
      email: SITE.email,
      sameAs: SITE.social.map((x) => x.href),
      founder: FOUNDERS.map((f) => ({ "@type": "Person", name: f.name, jobTitle: f.role })),
    }
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <HomePage />
    </>
  );
}
