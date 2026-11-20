"use client";

import { useEffect } from "react";
import s from "./home.module.css";

// Blocks that rise into place as they scroll into view. Hero content has its own entrance and is skipped,
// and so are elements with scroll behaviour of their own (process steps).
const SELECTORS = [
  `.${s.sec} .${s.eyebrow}`, `.${s.sec} .${s.h2}`, `.${s.sec} .${s.sub}`, `.${s.textLink}`,
  `.${s.cards} > *`, `.${s.pillars} > *`, `.${s.aud}`, `.${s.fGrid} > *`, `.${s.article}`,
  `.${s.faqList}`, `.${s.cta2}`, `.${s.footer}`,
].join(",");

/** Scroll reveal (same approach as the HiScale and ASINAS sites). Does nothing for reduced-motion users. */
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
            }, 1400),
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
