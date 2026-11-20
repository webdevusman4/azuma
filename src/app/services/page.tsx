import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Check, MessageCircleQuestion } from "lucide-react";
import PageHero from "@/components/site/PageHero";
import Steps from "@/components/site/Steps";
import { FinalCta } from "@/components/site/Sections";
import { ServiceGlyph } from "@/components/site/icons";
import { Tight } from "@/components/site/Tight";
import { BOOK_HREF, SERVICE_CATEGORIES, SITE } from "@/lib/site";
import s from "@/components/site/site.module.css";

export const metadata: Metadata = {
  title: "Services: Tax, Accounting, CFO, Corporate, Audit & Advisory",
  description:
    "Tax returns and planning, bookkeeping and financial statements, budgeting and forecasting, corporate structuring, audit support and business advisory, for U.S. and international clients.",
  alternates: { canonical: "/services" },
};

const ld = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: "Azuma Solutions services",
  provider: { "@id": `${SITE.url}/#org` },
  itemListElement: SERVICE_CATEGORIES.map((c) => ({
    "@type": "OfferCatalog",
    name: c.name,
    itemListElement: c.services.map((x) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: x } })),
  })),
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Every part of your finances."
        lede="Tax, accounting, CFO, corporate, audit and advisory, under one roof."
        chips={SERVICE_CATEGORIES.map((c) => c.short)}
        image="/photos/service-structure.jpg"
        imageAlt="A team meeting around a boardroom table"
        crumbs={[{ label: "Services" }]}
        pill={{ big: "One team", small: "for all of it" }}
      />
      <main id="main">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld).replace(/</g, "\\u003c") }} />
        <nav className={s.catNav} aria-label="Service categories">
          <div className={s.in}>
            <ul>
              {SERVICE_CATEGORIES.map((c) => (
                <li key={c.id}><a href={`#${c.id}`}>{c.short}</a></li>
              ))}
            </ul>
          </div>
        </nav>
        {SERVICE_CATEGORIES.map((c, i) => (
          <section key={c.id} id={c.id} className={`${s.sec} ${s.catSec} ${i % 2 ? s.catFlip : ""}`} aria-labelledby={`${c.id}-title`}>
            <div className={`${s.in} ${s.catGrid}`}>
              <div className={s.catPhoto}>
                <Image src={c.image} alt={c.imageAlt} fill sizes="(max-width: 900px) 92vw, 540px" />
                <span className={s.catIcon}><ServiceGlyph name={c.icon} size={24} strokeWidth={2} /></span>
              </div>
              <div>
                <span className={s.eyebrow}>{c.short}</span>
                <h2 className={s.h2} id={`${c.id}-title`}><Tight>{c.name}</Tight></h2>
                <p className={s.catLine}>{c.line}</p>
                <ul className={s.catList}>
                  {c.services.map((x) => (
                    <li key={x}><Check size={17} strokeWidth={2.8} aria-hidden="true" />{x}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        ))}
        <section className={s.sec} style={{ paddingTop: 8 }} aria-label="Something else">
          <div className={s.in}>
            <div className={`${s.notListed} ${s.glass}`}>
              <span><MessageCircleQuestion size={24} aria-hidden="true" /></span>
              <p><b>Need something that isn&apos;t listed?</b> Finance is broad, and so is our team. Tell us what you need.</p>
              <Link className={`${s.btn} ${s.btnN}`} href={BOOK_HREF}>Ask us</Link>
            </div>
          </div>
        </section>
        <Steps />
        <FinalCta />
      </main>
    </>
  );
}
