import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageHero from "@/components/site/PageHero";
import { FinalCta } from "@/components/site/Sections";
import { ARTICLES, articleHref } from "@/lib/site";
import s from "@/components/site/site.module.css";

export const metadata: Metadata = {
  title: "Insights: Tax & Finance Updates",
  description: "Plain-English tax and finance guidance for small businesses and international owners, from the accountants at Azuma Solutions.",
  alternates: { canonical: "/insights" },
};

export default function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Tax and finance, in plain English."
        lede="Practical guidance from our accountants."
        chips={["Tax planning", "Compliance", "Small business"]}
        crumbs={[{ label: "Insights" }]}
        actions={false}
      />
      <main id="main">
        <section className={s.sec} aria-label="Articles">
          <div className={s.in}>
            <ul className={s.articles}>
              {ARTICLES.map((a) => (
                <li key={a.slug}>
                  <Link href={articleHref(a.slug)} className={s.artCard}>
                    <div className={s.artImg}>
                      <Image src={a.image} alt="" fill sizes="(max-width: 900px) 92vw, 560px" />
                      <span className={s.artCat}>{a.category}</span>
                    </div>
                    <div className={s.artBody}>
                      <h2>{a.title}</h2>
                      <p>{a.description}</p>
                      <div className={s.meta}>
                        <span>{a.author} · <time dateTime={a.isoDate}>{a.date}</time></span>
                        <span className={s.go} aria-hidden="true"><ArrowUpRight size={18} strokeWidth={2.4} /></span>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <FinalCta />
      </main>
    </>
  );
}
