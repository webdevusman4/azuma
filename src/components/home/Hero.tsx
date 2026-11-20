import Image from "next/image";
import Link from "next/link";
import { BadgeCheck, CalendarCheck, Check, FileCheck2, Globe, Landmark } from "lucide-react";
import { BOOK_HREF, SITE } from "@/lib/site";
import { WhatsAppLogo } from "./icons";
import { Tight } from "./Tight";
import s from "./home.module.css";

// Illustrative bar heights for the "books reconciled" widget (Jan to Dec). Purely decorative.
const MONTHS = [38, 52, 46, 60, 55, 68, 64, 74, 70, 82, 88, 100];

export default function Hero() {
  return (
    <header className={s.hero} id="top">
      {/* Background: photo under an ink overlay, a teal glow and a fine ledger grid (decorative). */}
      <div className={s.heroBg} aria-hidden="true">
        <Image src="/photos/hero-calculator.jpg" alt="" fill priority sizes="100vw" className={s.heroImg} />
      </div>
      <div className={`${s.in} ${s.heroGrid}`}>
        <section aria-labelledby="hero-title">
          <span className={s.eyebrow}>U.S. tax &amp; accounting, led by Chartered Accountants</span>
          <h1 className={s.h1} id="hero-title">
            <span><Tight>{"Accurate."}</Tight></span>
            <span className={s.accent}><Tight>{"Certified."}</Tight></span>
            <span><Tight>{"Affordable."}</Tight></span>
          </h1>
          <p className={s.lede}>
            Tax, bookkeeping and financial planning for U.S. small businesses, startups and international owners. Qualified accountants, at a
            price that makes sense.
          </p>
          <div className={s.cta}>
            <Link className={`${s.btn} ${s.btnL}`} href={BOOK_HREF}>
              Book a free consultation
            </Link>
            <a className={`${s.btn} ${s.btnO}`} href={SITE.whatsapp} target="_blank" rel="noopener noreferrer">
              <WhatsAppLogo size={19} />
              WhatsApp us
            </a>
          </div>
          <ul className={s.proof}>
            <li><Check size={17} strokeWidth={2.6} aria-hidden="true" />CA &amp; ACCA qualified</li>
            <li><Check size={17} strokeWidth={2.6} aria-hidden="true" />U.S.-registered LLC</li>
            <li><Check size={17} strokeWidth={2.6} aria-hidden="true" />No-obligation first call</li>
          </ul>
        </section>

        {/* Decorative: an illustrative client workspace. All values are examples, so it is hidden from assistive tech. */}
        <div className={s.viz} aria-hidden="true">
          <div className={s.win}>
            <div className={s.winBar}>
              <i />
              <i />
              <i />
              <span>Your Azuma workspace</span>
            </div>
            <div className={s.winBody}>
              <div className={`${s.wd} ${s.wide} ${s.notif}`}>
                <span className={s.notifIcon}><FileCheck2 size={20} /></span>
                <div>
                  <p><span>Azuma Solutions</span><span>now</span></p>
                  <strong>Your tax return is ready to review</strong>
                </div>
              </div>
              <div className={`${s.wd} ${s.wide}`}>
                <h4>Books reconciled</h4>
                <div className={s.months}>
                  {MONTHS.map((h, k) => (
                    <i key={k} data-on={k < 11 ? "" : undefined} style={{ ["--h" as string]: `${h}%`, ["--k" as string]: k }} />
                  ))}
                </div>
                <div className={s.monthLbl}><span>Jan</span><span>Jun</span><span>Dec</span></div>
              </div>
              <div className={s.wd}>
                <h4>Tax return</h4>
                <b>Filed <Check size={16} strokeWidth={3} /></b>
                <small>On time, reviewed</small>
              </div>
              <div className={s.wd}>
                <h4>Cash-flow forecast</h4>
                <svg className={s.spark} viewBox="0 0 160 56" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="azSparkFill" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#3a7a80" stopOpacity="0.28" />
                      <stop offset="100%" stopColor="#3a7a80" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path className={s.sparkArea} d="M2 46 C 22 42, 34 44, 50 36 S 82 30, 98 24 S 130 14, 158 8 L158 56 L2 56 Z" />
                  <path className={s.sparkLine} d="M2 46 C 22 42, 34 44, 50 36 S 82 30, 98 24 S 130 14, 158 8" />
                </svg>
                <small>Next 12 months</small>
              </div>
              <div className={`${s.wd} ${s.wide} ${s.next}`}>
                <span><CalendarCheck size={20} /></span>
                <div>
                  <h4 style={{ margin: 0 }}>Next step</h4>
                  <b>Quarterly planning call</b>
                </div>
                <em className={s.chip} style={{ fontStyle: "normal" }}>Booked</em>
              </div>
            </div>
          </div>
          <div className={`${s.pill} ${s.pill1} ${s.glass}`}><b>CA · ACCA</b><span>qualified leadership</span></div>
          <div className={`${s.pill} ${s.pill2} ${s.glass}`}><b>U.S. LLC</b><span>registered firm</span></div>
        </div>
      </div>

      <div className={`${s.strip} ${s.glass}`}>
        <div>
          <span><BadgeCheck size={22} aria-hidden="true" /></span>
          <div><small>Chartered-accountant led</small><b>CA and ACCA qualified founders</b></div>
        </div>
        <div>
          <span><Landmark size={22} aria-hidden="true" /></span>
          <div><small>U.S.-registered</small><b>{SITE.legalName}</b></div>
        </div>
        <div>
          <span><Globe size={22} aria-hidden="true" /></span>
          <div><small>Two offices</small><b>United States and Pakistan</b></div>
        </div>
      </div>
    </header>
  );
}
