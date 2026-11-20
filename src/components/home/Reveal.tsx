"use client";

import { useEffect } from "react";
import s from "./home.module.css";

// Blocks that rise into place, staggered, as they scroll into view (HiScale / ASINAS pattern).
// The hero has its own entrance and is skipped.
const SELECTORS = [
  `.${s.sec} .${s.eyebrow}`, `.${s.sec} .${s.h2}`, `.${s.head} .${s.textLink}`, `.${s.mqSec}`,
  `.${s.tiles} > *`, `.${s.people} > *`, `.${s.whyPhoto}`, `.${s.reasons} > *`, `.${s.leaders}`,
  `.${s.cta2}`, `.${s.footer}`,
].join(",");

/** Scroll reveal. Does nothing for reduced-motion users, so content is never hidden for them. */
export default function Reveal() {
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const fold = window.innerHeight * 0.92;
    const timers: number[] = [];
    const targets = Array.from(document.querySelectorAll<HTMLElement>(SELECTORS)).filter(
      (el) => !el.closest("#top") && el.getBoundingClientRect().top > fold,
    );

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          const el = e.target as HTMLElement;
          el.setAttribute("data-in", "");
          io.unobserve(el);
          // Hand the element back to its own styles once it has settled, so hover transitions have no stagger delay.
          timers.push(
            window.setTimeout(() => {
              el.removeAttribute("data-r");
              el.removeAttribute("data-in");
              el.style.removeProperty("--rd");
            }, 1500),
          );
        }
      },
      { rootMargin: "0px 0px -8% 0px" },
    );

    for (const el of targets) {
      const siblings = el.parentElement ? Array.from(el.parentElement.children) : [];
      el.style.setProperty("--rd", String(Math.min(Math.max(siblings.indexOf(el), 0), 5)));
      el.setAttribute("data-r", "");
      io.observe(el);
    }
    document.documentElement.setAttribute("data-reveal", "");

    return () => {
      io.disconnect();
      timers.forEach(clearTimeout);
      document.documentElement.removeAttribute("data-reveal");
      for (const el of targets) {
        el.removeAttribute("data-r");
        el.removeAttribute("data-in");
      }
    };
  }, []);

  return null;
}
