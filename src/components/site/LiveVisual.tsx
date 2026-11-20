"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { BookOpenCheck, ChartLine, FileCheck2, ShieldCheck, type LucideIcon } from "lucide-react";
import s from "./site.module.css";

// Illustrative updates a client might see. Decorative only (the whole visual is aria-hidden).
const UPDATES: { Icon: LucideIcon; title: string; sub: string }[] = [
  { Icon: FileCheck2, title: "Tax return filed", sub: "Business return · on time" },
  { Icon: BookOpenCheck, title: "Books reconciled", sub: "All 12 months balanced" },
  { Icon: ChartLine, title: "Forecast updated", sub: "Next 12 months ready" },
  { Icon: ShieldCheck, title: "Compliance checked", sub: "Nothing outstanding" },
];
const BARS = [34, 46, 40, 58, 52, 66, 74, 70, 86, 100];

/**
 * The hero's living visual: a team photo that slowly zooms and tilts with the pointer (HiScale's phone tilt),
 * a notification card that cycles through client updates, growing bars and floating pills.
 */
export default function LiveVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const [i, setI] = useState(0);

  useEffect(() => {
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const t = window.setInterval(() => setI((n) => (n + 1) % UPDATES.length), 3200);
    const viz = ref.current;
    const hero = viz?.closest("header");
    if (!viz || !hero || !matchMedia("(hover: hover)").matches) return () => clearInterval(t);
    const onMove = (e: PointerEvent) => {
      const r = hero.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width - 0.5) * 2;
      const y = ((e.clientY - r.top) / r.height - 0.5) * 2;
      viz.style.setProperty("--ry", `${x * 5}deg`);
      viz.style.setProperty("--rx", `${-y * 4}deg`);
    };
    hero.addEventListener("pointermove", onMove);
    return () => {
      clearInterval(t);
      hero.removeEventListener("pointermove", onMove);
    };
  }, []);

  const u = UPDATES[i];
  return (
    <div className={s.viz} ref={ref} aria-hidden="true">
      <div className={s.frame}>
        <Image src="/photos/hero-team.jpg" alt="" fill priority sizes="(max-width: 900px) 92vw, 560px" className={s.frameImg} />
      </div>

      <div className={`${s.live} ${s.glass}`}>
        <span className={s.liveIcon} key={`i${i}`}><u.Icon size={20} /></span>
        <div key={`t${i}`} className={s.liveText}>
          <p><span>Azuma Solutions</span><span>now</span></p>
          <strong>{u.title}</strong>
          <small>{u.sub}</small>
        </div>
      </div>

      <div className={`${s.cash} ${s.glass}`}>
        <h4>Cash flow</h4>
        <div className={s.cashBars}>
          {BARS.map((h, k) => (
            <i key={k} style={{ ["--h" as string]: `${h}%`, ["--k" as string]: k }} />
          ))}
        </div>
        <b>
          <ChartLine size={15} /> Growing
        </b>
      </div>

      <div className={`${s.pill} ${s.pill1} ${s.glass}`}><b>CA · ACCA</b><span>qualified team</span></div>
      <div className={`${s.pill} ${s.pill2} ${s.glass}`}><b>U.S. LLC</b><span>registered firm</span></div>
    </div>
  );
}
