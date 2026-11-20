"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone } from "lucide-react";
import { BOOK_HREF, NAV_LINKS, SITE } from "@/lib/site";
import s from "./site.module.css";

/** Floating glass pill nav. Tightens after a short scroll, like the HiScale nav. */
export default function Nav() {
  const [shrunk, setShrunk] = useState(false);
  const path = usePathname() ?? "/";

  useEffect(() => {
    const onScroll = () => setShrunk(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={s.navWrap}>
      <nav className={`${s.nav} ${s.glass} ${shrunk ? s.navShrunk : ""}`} aria-label="Primary">
        <Link className={s.logo} href="/" aria-label="Azuma Solutions home">
          <Image src="/brand/azuma-logo-color.png" alt="Azuma Tax and Financial Solutions" width={248} height={155} priority />
        </Link>
        <div className={s.links}>
          {NAV_LINKS.map((l) => (
            <Link key={l.href} href={l.href} aria-current={path === l.href || path.startsWith(l.href + "/") ? "page" : undefined}>
              {l.label}
            </Link>
          ))}
        </div>
        <div className={s.navRight}>
          <a className={s.navPhone} href={SITE.tel}>
            <Phone size={16} strokeWidth={2.4} aria-hidden="true" />
            {SITE.phone}
          </a>
          <Link className={`${s.btn} ${s.btnN}`} href={BOOK_HREF}>
            <span className={s.ctaLong}>Book a consultation</span>
            <span className={s.ctaShort}>Book a call</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}
