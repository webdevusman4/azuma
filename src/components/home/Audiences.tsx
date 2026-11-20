"use client";

import { useLayoutEffect, useRef, useState, type KeyboardEvent } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AUDIENCES, SERVICES, serviceHref } from "@/lib/site";
import { Tight } from "./Tight";
import s from "./home.module.css";

/** "Who we serve" switcher: an accessible tab list with a sliding thumb, one panel per audience. */
export default function Audiences() {
  const [active, setActive] = useState(0);
  const [ind, setInd] = useState<{ x: number; w: number } | null>(null);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const a = AUDIENCES[active];

  useLayoutEffect(() => {
    const measure = () => {
      const el = tabs.current[active];
      if (el) setInd({ x: el.offsetLeft, w: el.offsetWidth });
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [active]);

  const onKey = (e: KeyboardEvent<HTMLButtonElement>) => {
    const n = AUDIENCES.length;
    let next = -1;
    if (e.key === "ArrowRight") next = (active + 1) % n;
    if (e.key === "ArrowLeft") next = (active - 1 + n) % n;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = n - 1;
    if (next < 0) return;
    e.preventDefault();
    setActive(next);
    tabs.current[next]?.focus();
  };

  return (
    <section className={s.sec} id="who" aria-labelledby="who-title" style={{ paddingTop: 24 }}>
      <div className={s.in}>
        <div className={`${s.aud} ${s.glass}`}>
          <div className={s.audHead}>
            <div>
              <span className={s.eyebrow}>Who we serve</span>
              <h2 className={s.h2} id="who-title"><Tight>{"Built for owners, not finance teams."}</Tight></h2>
              <p className={s.sub}>Pick the one that sounds like you.</p>
            </div>
          </div>

          <div className={s.seg} role="tablist" aria-label="Client type">
            {ind && <span className={s.segInd} aria-hidden="true" style={{ transform: `translateX(${ind.x}px)`, width: ind.w }} />}
            {AUDIENCES.map((x, i) => (
              <button
                key={x.id}
                ref={(el) => {
                  tabs.current[i] = el;
                }}
                id={`tab-${x.id}`}
                role="tab"
                type="button"
                aria-selected={i === active}
                aria-controls={`panel-${x.id}`}
                tabIndex={i === active ? 0 : -1}
                onClick={() => setActive(i)}
                onKeyDown={onKey}
              >
                {x.label}
              </button>
            ))}
          </div>

          <div key={a.id} className={`${s.ares} ${s.swap}`} role="tabpanel" id={`panel-${a.id}`} aria-labelledby={`tab-${a.id}`}>
            <div className={s.ac}>
              <small>What you need</small>
              <p>{a.need}</p>
            </div>
            <div className={`${s.ac} ${s.acDark}`}>
              <small>How we help</small>
              <p>{a.help}</p>
            </div>
          </div>
          <div className={s.picks} aria-label={`Services for ${a.label.toLowerCase()}`}>
            {a.services.map((slug) => {
              const svc = SERVICES.find((x) => x.slug === slug);
              if (!svc) return null;
              return (
                <Link key={slug} href={serviceHref(slug)}>
                  {svc.name} <ArrowRight size={16} strokeWidth={2.4} aria-hidden="true" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
