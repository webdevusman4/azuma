import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SERVICES, serviceHref } from "@/lib/site";
import { ServiceGlyph } from "./icons";
import { Tight } from "./Tight";
import s from "./home.module.css";

/** Six photo tiles: title + three keywords each. The detail lives on the service pages. */
export default function Services() {
  return (
    <section className={s.sec} id="services" aria-labelledby="services-title">
      <div className={s.in}>
        <div className={s.head}>
          <div>
            <span className={s.eyebrow}>Services</span>
            <h2 className={s.h2} id="services-title"><Tight>{"Everything your numbers need."}</Tight></h2>
          </div>
          <Link className={s.textLink} href="/services">
            All services <ArrowUpRight size={18} strokeWidth={2.4} aria-hidden="true" />
          </Link>
        </div>
        <div className={s.tiles}>
          {SERVICES.map((svc) => (
            <Link key={svc.slug} href={serviceHref(svc.slug)} className={s.tile}>
              <div className={s.tileImg}>
                <Image src={svc.image} alt={svc.imageAlt} fill sizes="(max-width: 640px) 92vw, (max-width: 1080px) 46vw, 380px" />
              </div>
              <div className={s.tileBody}>
                <span className={s.tileIcon}><ServiceGlyph name={svc.icon} size={22} strokeWidth={2} /></span>
                <h3>{svc.name}</h3>
                <ul className={s.kw}>
                  {svc.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                <span className={s.go} aria-hidden="true"><ArrowUpRight size={18} strokeWidth={2.4} /></span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
