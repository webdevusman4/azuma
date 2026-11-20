import type { Metadata } from "next";
import PageHero from "@/components/site/PageHero";
import ServiceTiles from "@/components/site/ServiceTiles";
import Steps from "@/components/site/Steps";
import { FinalCta } from "@/components/site/Sections";
import { SERVICES } from "@/lib/site";
import s from "@/components/site/site.module.css";

export const metadata: Metadata = {
  title: "Services: Tax, Bookkeeping, Forecasting & Compliance",
  description:
    "U.S. tax planning and preparation, bookkeeping and financial statements, forecasting, corporate structuring, audit support and business advisory.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Everything your numbers need."
        lede="Six services, one accountable team of qualified accountants."
        chips={SERVICES.map((x) => x.short)}
        image="/photos/service-structure.jpg"
        imageAlt="A team meeting around a boardroom table"
        crumbs={[{ label: "Services" }]}
        pill={{ big: "6 services", small: "one team" }}
      />
      <main id="main">
        <section className={s.sec} aria-label="All services">
          <div className={s.in}>
            <ServiceTiles items={SERVICES} />
          </div>
        </section>
        <Steps />
        <FinalCta />
      </main>
    </>
  );
}
