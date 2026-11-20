import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import CategoryCards from "./CategoryCards";
import { Tight } from "./Tight";
import s from "./site.module.css";

/** Home: the full range of services, grouped, so the breadth reads at a glance. */
export default function Services() {
  return (
    <section className={s.sec} id="services" aria-labelledby="services-title">
      <div className={s.in}>
        <div className={s.head}>
          <div>
            <span className={s.eyebrow}>Services</span>
            <h2 className={s.h2} id="services-title"><Tight>{"Every part of your finances. Covered."}</Tight></h2>
          </div>
          <Link className={s.textLink} href="/services">
            Full list of services <ArrowUpRight size={18} strokeWidth={2.4} aria-hidden="true" />
          </Link>
        </div>
        <CategoryCards />
      </div>
    </section>
  );
}
