import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Plus } from "lucide-react";
import { BOOK_HREF, FAQ, FOUNDERS, LATEST_INSIGHT, NAV_LINKS, SERVICES, SITE, serviceHref } from "@/lib/site";
import { WhatsAppLogo } from "./icons";
import { Tight } from "./Tight";
import s from "./home.module.css";

export function Founders() {
  return (
    <section className={s.sec} id="team" aria-labelledby="team-title" style={{ paddingTop: 24 }}>
      <div className={s.in}>
        <span className={s.eyebrow}>The people behind your numbers</span>
        <h2 className={s.h2} id="team-title"><Tight>{"You work with the founders."}</Tight></h2>
        <p className={s.sub}>Two partners, one in chartered accountancy and corporate finance, one in business operations and strategy.</p>
        <div className={s.fGrid}>
          {FOUNDERS.map((f) => (
            <article key={f.name} className={`${s.founder} ${s.glass}`}>
              <div className={s.photo}>
                <Image src={f.photo} alt={`${f.name}, ${f.role}`} fill sizes="(max-width: 560px) 90vw, 200px" />
              </div>
              <div className={s.fBody}>
                <span className={s.badge}>{f.credentials}</span>
                <h3>{f.name}</h3>
                <p className={s.role}>{f.role}</p>
                <p>{f.bio}</p>
              </div>
            </article>
          ))}
        </div>
        <Link className={s.textLink} href="/about">
          More about Azuma <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}

export function Insights() {
  const a = LATEST_INSIGHT;
  return (
    <section className={s.sec} id="insights" aria-labelledby="insights-title" style={{ paddingTop: 24 }}>
      <div className={`${s.in} ${s.insGrid}`}>
        <div>
          <span className={s.eyebrow}>Insights</span>
          <h2 className={s.h2} id="insights-title"><Tight>{"Plain-English tax and finance updates."}</Tight></h2>
          <p className={s.sub}>Practical guidance from our accountants on the rules that affect your business.</p>
          <Link className={s.textLink} href="/insights">
            All insights <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
          </Link>
        </div>
        <Link href={a.href} className={`${s.article} ${s.glass}`}>
          <div className={s.cover} aria-hidden="true">
            <Image src="/photos/insight-tax-forms.jpg" alt="" fill sizes="(max-width: 900px) 92vw, 420px" className={s.coverImg} />
            <small>{a.category}</small>
            <strong>Top 5</strong>
            <em>strategies for small businesses</em>
          </div>
          <div className={s.aBody}>
            <h3>{a.title}</h3>
            <p>{a.excerpt}</p>
            <div className={s.meta}>
              <span>
                {a.author} · <time dateTime={a.isoDate}>{a.date}</time>
              </span>
              <span className={s.more}>
                Read <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
              </span>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}

export function Faq() {
  return (
    <section className={s.sec} id="faq" aria-labelledby="faq-title" style={{ paddingTop: 24 }}>
      <div className={`${s.in} ${s.faqGrid}`}>
        <div className={s.sticky}>
          <span className={s.eyebrow}>FAQ</span>
          <h2 className={s.h2} id="faq-title"><Tight>{"Questions, answered."}</Tight></h2>
          <p className={s.sub}>Straight answers before you book a call. Anything else, just ask.</p>
        </div>
        <div className={`${s.faqList} ${s.glass}`}>
          {FAQ.map((f, i) => (
            <details key={f.q} open={i === 0}>
              <summary>
                {f.q}
                <span className={s.pl} aria-hidden="true"><Plus size={16} strokeWidth={2.8} /></span>
              </summary>
              <p>{f.a}</p>
            </details>
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
