import Link from "next/link";
import { BadgeCheck, CalendarCheck, Globe, Landmark } from "lucide-react";
import { BOOK_HREF, HERO_KEYWORDS, SITE } from "@/lib/site";
import { WhatsAppLogo } from "./icons";
import LiveVisual from "./LiveVisual";
import { Tight } from "./Tight";
import s from "./home.module.css";

const TRUST = [
  { Icon: BadgeCheck, big: "CA & ACCA", small: "qualified founders" },
  { Icon: Landmark, big: "U.S. LLC", small: "registered firm" },
  { Icon: Globe, big: "USA + Pakistan", small: "two offices" },
  { Icon: CalendarCheck, big: "Free", small: "first consultation" },
];

export default function Hero() {
  return (
    <header className={s.hero} id="top">
      {/* Dark living background: drifting teal glows and a fine ledger grid (decorative). */}
      <div className={s.heroBg} aria-hidden="true" />
      <div className={`${s.in} ${s.heroGrid}`}>
        <section aria-labelledby="hero-title">
          <span className={s.eyebrow}>U.S. tax &amp; accounting firm</span>
          <h1 className={s.h1} id="hero-title">
            <span><Tight>{"Accurate."}</Tight></span>
            <span className={s.accent}><Tight>{"Certified."}</Tight></span>
            <span><Tight>{"Affordable."}</Tight></span>
          </h1>
          <p className={s.lede}>Tax, bookkeeping and financial planning by Chartered Accountants, for U.S. businesses and international owners.</p>
          <div className={s.cta}>
            <Link className={`${s.btn} ${s.btnL}`} href={BOOK_HREF}>
              Book a free consultation
            </Link>
            <a className={`${s.btn} ${s.btnO}`} href={SITE.whatsapp} target="_blank" rel="noopener noreferrer">
              <WhatsAppLogo size={19} />
              WhatsApp us
            </a>
          </div>
          <ul className={s.heroChips} aria-label="Services">
            {HERO_KEYWORDS.map((k) => (
              <li key={k}>{k}</li>
            ))}
          </ul>
        </section>
        <LiveVisual />
      </div>

      <ul className={`${s.strip} ${s.glass}`}>
        {TRUST.map(({ Icon, big, small }) => (
          <li key={big}>
            <span><Icon size={22} aria-hidden="true" /></span>
            <div><b>{big}</b><small>{small}</small></div>
          </li>
        ))}
      </ul>
    </header>
  );
}
