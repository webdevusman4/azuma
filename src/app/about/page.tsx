import type { Metadata } from "next";
import Image from "next/image";
import { Eye, Target } from "lucide-react";
import PageHero from "@/components/site/PageHero";
import Why from "@/components/site/Why";
import { FinalCta } from "@/components/site/Sections";
import { Tight } from "@/components/site/Tight";
import { ABOUT, FOUNDERS } from "@/lib/site";
import s from "@/components/site/site.module.css";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "A U.S.-registered tax and accounting firm with a regional office in Pakistan, led by Chartered Accountant Arsalan Zahid and Umair Mughal.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Qualified accountants. Global reach."
        lede="A U.S.-registered firm with a regional office in Pakistan."
        chips={["U.S. LLC", "USA + Pakistan", "CA & ACCA led"]}
        image="/photos/hero-team.jpg"
        imageAlt="Professionals discussing reports around a table in a modern office"
        crumbs={[{ label: "About" }]}
        pill={{ big: "8+ years", small: "in corporate finance" }}
      />
      <main id="main">
        <section className={s.sec} aria-labelledby="story-title">
          <div className={`${s.in} ${s.story}`}>
            <div>
              <span className={s.eyebrow}>Our story</span>
              <h2 className={s.h2} id="story-title"><Tight>{"Built to make good accounting accessible."}</Tight></h2>
            </div>
            <div className={s.storyText}>
              {ABOUT.story.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
          <div className={`${s.in} ${s.mv}`}>
            <article className={s.glass}>
              <span><Eye size={24} aria-hidden="true" /></span>
              <h3>Vision</h3>
              <p>{ABOUT.vision}</p>
            </article>
            <article className={s.mvDark}>
              <span><Target size={24} aria-hidden="true" /></span>
              <h3>Mission</h3>
              <p>{ABOUT.mission}</p>
            </article>
          </div>
        </section>

        <section className={`${s.sec} ${s.band}`} id="team" aria-labelledby="founders-title">
          <div className={s.in}>
            <div className={s.head}>
              <div>
                <span className={s.eyebrow}>Leadership</span>
                <h2 className={s.h2} id="founders-title"><Tight>{"The founders."}</Tight></h2>
              </div>
            </div>
            <div className={s.bios}>
              {FOUNDERS.map((f) => (
                <article key={f.name} className={`${s.bio} ${s.glass}`}>
                  <div className={s.bioPhoto}>
                    <Image src={f.photo} alt={`${f.name}, ${f.role}`} fill sizes="(max-width: 640px) 92vw, 240px" />
                  </div>
                  <div className={s.bioBody}>
                    <span className={s.badge}>{f.credentials}</span>
                    <h3>{f.name}</h3>
                    <p className={s.role}>{f.role}</p>
                    <p>{f.bio}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <Why />
        <FinalCta />
      </main>
    </>
  );
}
