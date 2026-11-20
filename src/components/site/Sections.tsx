import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BOOK_HREF, FOUNDERS, NAV_LINKS, SERVICES, SITE, serviceHref } from "@/lib/site";
import { WhatsAppLogo } from "./icons";
import { Tight } from "./Tight";
import s from "./site.module.css";

/** Compact leadership row: photo, name, credentials, role. Bios live on the About page. */
export function Founders() {
  return (
    <section className={s.sec} id="team" aria-labelledby="team-title" style={{ paddingTop: 16 }}>
      <div className={s.in}>
        <div className={`${s.leaders} ${s.glass}`}>
          <div>
            <span className={s.eyebrow}>Leadership</span>
            <h2 className={s.h3x} id="team-title"><Tight>{"Meet the founders."}</Tight></h2>
            <Link className={s.textLink} href="/about">
              About Azuma <ArrowUpRight size={18} strokeWidth={2.4} aria-hidden="true" />
            </Link>
          </div>
          {FOUNDERS.map((f) => (
            <article key={f.name} className={s.leader}>
              <div className={s.avatar}>
                <Image src={f.photo} alt={`${f.name}, ${f.role}`} fill sizes="96px" />
              </div>
              <div>
                <h3>{f.name}</h3>
                <p className={s.cred}>{f.credentials}</p>
                <p className={s.role}>{f.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className={s.sec} id="book" aria-labelledby="book-title" style={{ padding: "24px 0 48px" }}>
      <div className={s.in}>
        <div className={s.cta2}>
          <Image src="/photos/cta-desk.jpg" alt="" fill sizes="(max-width: 1200px) 100vw, 1180px" className={s.ctaImg} />
          <span className={s.eyebrow}>Free consultation</span>
          <h2 id="book-title"><Tight>{"Get your numbers right, this year and every year."}</Tight></h2>
          <p>Tell us where your finances stand. We&apos;ll tell you, plainly, what needs doing and what it will cost.</p>
          <div className={s.ctaRow}>
            <Link className={`${s.btn} ${s.btnL}`} href={BOOK_HREF}>Book a free consultation</Link>
            <a className={`${s.btn} ${s.btnO}`} href={SITE.whatsapp} target="_blank" rel="noopener noreferrer">
              <WhatsAppLogo size={18} />
              WhatsApp us
            </a>
            <a className={`${s.btn} ${s.btnO}`} href={`mailto:${SITE.email}`}>{SITE.email}</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className={`${s.footer} ${s.glass}`}>
      <div className={s.fg}>
        <div>
          <Link className={s.logo} href="/" aria-label="Azuma Solutions home">
            <Image src="/brand/azuma-logo-color.png" alt="Azuma Tax and Financial Solutions" width={248} height={155} />
          </Link>
          <p className={s.blurb}>U.S. tax, bookkeeping and financial planning by Chartered Accountants.</p>
          <div className={s.socials}>
            {SITE.social.map((x) => (
              <a key={x.label} href={x.href} target="_blank" rel="noopener noreferrer">{x.label}</a>
            ))}
          </div>
        </div>
        <div>
          <h4>Services</h4>
          {SERVICES.map((x) => (
            <Link key={x.slug} href={serviceHref(x.slug)}>{x.name}</Link>
          ))}
        </div>
        <div>
          <h4>Company</h4>
          {NAV_LINKS.filter((l) => l.href !== "/services").map((l) => (
            <Link key={l.href} href={l.href}>{l.label}</Link>
          ))}
        </div>
        <div>
          <h4>Contact</h4>
          <a href={SITE.tel}>{SITE.phone}</a>
          <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp</a>
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          <Link href={BOOK_HREF}>Book a consultation</Link>
        </div>
      </div>
      <div className={s.fb}>
        <span>© {new Date().getFullYear()} {SITE.legalName}</span>
        <span>
          {SITE.offices} · <Link href="/privacy">Privacy</Link> · <Link href="/terms">Terms</Link> · <Link href="/disclaimer">Disclaimer</Link>
        </span>
        <p className={s.disclaimer}>The information on this site is general and isn&apos;t tax, legal or financial advice for your situation.</p>
      </div>
    </footer>
  );
}
