import type { Metadata } from "next";
import { Mail, Rocket, Sparkles, Users } from "lucide-react";
import PageHero from "@/components/site/PageHero";
import { Tight } from "@/components/site/Tight";
import { CAREERS, SITE } from "@/lib/site";
import s from "@/components/site/site.module.css";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join Azuma Solutions, a growing tax and finance firm serving clients in the U.S. and worldwide. Send your resume to info@azumasolution.com.",
  alternates: { canonical: "/careers" },
};

const ICONS = [Users, Rocket, Sparkles];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build a future in finance."
        lede={CAREERS.intro}
        chips={["Tax", "Accounting", "Advisory"]}
        image="/photos/why-team.jpg"
        imageAlt="A team celebrating good results around a laptop"
        crumbs={[{ label: "Careers" }]}
        pill={{ big: "Hiring", small: "always open to talent" }}
        actions={false}
      />
      <main id="main">
        <section className={s.sec} aria-labelledby="join-title">
          <div className={s.in}>
            <div className={s.head}>
              <div>
                <span className={s.eyebrow}>Why join</span>
                <h2 className={s.h2} id="join-title"><Tight>{"Work that matters."}</Tight></h2>
              </div>
            </div>
            <ul className={s.incl} data-cols="3">
              {CAREERS.reasons.map((r, i) => {
                const Icon = ICONS[i];
                return (
                  <li key={r.title} className={s.glass}>
                    <span><Icon size={24} aria-hidden="true" /></span>
                    <h3>{r.title}</h3>
                    <p>{r.line}</p>
                  </li>
                );
              })}
            </ul>
            <div className={s.apply}>
              <div>
                <span className={s.eyebrow}>How to apply</span>
                <h2 className={s.h3x}><Tight>{"Send us your resume."}</Tight></h2>
                <p>{CAREERS.apply}</p>
              </div>
              <a className={`${s.btn} ${s.btnL}`} href={`mailto:${SITE.email}?subject=${encodeURIComponent("Job application")}`}>
                <Mail size={18} aria-hidden="true" />
                Email your resume
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
