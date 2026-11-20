import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SERVICES, serviceHref } from "@/lib/site";
import { ServiceGlyph } from "./icons";
import { Tight } from "./Tight";
import s from "./home.module.css";

/** Sticky intro on the left, six service cards on the right (Project Bible: 8 services consolidated into 6). */
export default function Services() {
  return (
    <section className={s.sec} id="services" aria-labelledby="services-title">
      <div className={`${s.in} ${s.svcGrid}`}>
        <div className={s.sticky}>
          <span className={s.eyebrow}>What we do</span>
          <h2 className={s.h2} id="services-title"><Tight>{"Six services. One accountable team."}</Tight></h2>
          <p className={s.sub}>From your yearly tax return to the forecast your investors want to see, handled by qualified accountants who know your numbers.</p>
          <Link className={s.textLink} href="/services">
            Compare all services <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
          </Link>
        </div>
        <div className={s.cards}>
          {SERVICES.map((svc) => (
            <Link key={svc.slug} href={serviceHref(svc.slug)} className={`${s.svc} ${s.glass}`}>
              <span className={s.svcIcon}><ServiceGlyph name={svc.icon} size={24} strokeWidth={2} /></span>
              <h3>{svc.name}</h3>
              <p>{svc.outcome}</p>
              <span className={s.tags}>
                {svc.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </span>
              <span className={s.more}>
                Learn more <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
