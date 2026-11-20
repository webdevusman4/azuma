import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/lib/site";
import ServiceTiles from "./ServiceTiles";
import { Tight } from "./Tight";
import s from "./site.module.css";

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
        <ServiceTiles items={SERVICES} />
      </div>
    </section>
  );
}
