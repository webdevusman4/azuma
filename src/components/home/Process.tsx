"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BOOK_HREF, PROCESS } from "@/lib/site";
import { Tight } from "./Tight";
import s from "./home.module.css";

/**
 * Sticky heading on the left; on the right a progress rail fills as the reader scrolls and each step
 * lights up as it passes the reading line (55% down the viewport). Same pattern as the HiScale process.
 */
export default function Process() {
  const railRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    const update = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rail = railRef.current;
        if (!rail) return;
        if (reduce) {
          rail.style.setProperty("--p", "1");
          setActive(PROCESS.length - 1);
          return;
        }
        const line = window.innerHeight * 0.55;
        const r = rail.getBoundingClientRect();
        if (r.bottom < -200 || r.top > window.innerHeight + 200) return;
        rail.style.setProperty("--p", String(Math.min(1, Math.max(0, (line - r.top) / r.height))));
        let a = 0;
        rail.querySelectorAll<HTMLElement>("[data-step]").forEach((el, i) => {
          const b = el.getBoundingClientRect();
          if (b.top + b.height / 2 < line + 40) a = i;
        });
        setActive(a);
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <section className={`${s.sec} ${s.band}`} id="how" aria-labelledby="how-title">
      <div className={`${s.in} ${s.howGrid}`}>
        <div className={s.sticky}>
          <span className={s.eyebrow}>How it works</span>
          <h2 className={s.h2} id="how-title"><Tight>{"Four steps from first call to filed."}</Tight></h2>
          <p className={s.sub}>A clear process, so you always know what happens next and what we need from you.</p>
          <Link className={s.textLink} href={BOOK_HREF}>
            Start with step one <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
          </Link>
        </div>
        <div className={s.rail} ref={railRef}>
          <i className={s.fillBar} aria-hidden="true" />
          <ol className={s.steps}>
            {PROCESS.map((step, n) => (
              <li key={step.title} data-step className={`${s.step} ${s.glass} ${n <= active ? s.stepOn : ""} ${n === active ? s.stepNow : ""}`}>
                <span className={s.num} aria-hidden="true">0{n + 1}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
