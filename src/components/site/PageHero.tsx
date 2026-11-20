import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { BOOK_HREF, SITE } from "@/lib/site";
import { WhatsAppLogo } from "./icons";
import { Tight } from "./Tight";
import s from "./site.module.css";

type Crumb = { label: string; href?: string };

/**
 * Inner-page hero: the home hero's dark living background, breadcrumbs, a short title and one line,
 * keyword chips, and a photo that slowly zooms with a floating proof pill.
 */
export default function PageHero({
  eyebrow,
  title,
  lede,
  chips = [],
  image,
  imageAlt = "",
  crumbs,
  pill,
  actions = true,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  chips?: readonly string[];
  image?: string;
  imageAlt?: string;
  crumbs: Crumb[];
  pill?: { big: string; small: string };
  actions?: boolean;
}) {
  const trail = [{ label: "Home", href: "/" }, ...crumbs];
  const ld = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.label, item: c.href ? `${SITE.url}${c.href === "/" ? "" : c.href}` : undefined })),
  };
  return (
    <header className={`${s.hero} ${s.pageHero}`} id="top">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld).replace(/</g, "\\u003c") }} />
      <div className={s.heroBg} aria-hidden="true" />
      <div className={`${s.in} ${image ? s.phGrid : s.phSolo}`}>
        <section>
          <nav aria-label="Breadcrumb">
            <ol className={s.crumbs}>
              {trail.map((c, i) => (
                <li key={c.label}>
                  {c.href && i < trail.length - 1 ? <Link href={c.href}>{c.label}</Link> : <span aria-current="page">{c.label}</span>}
                  {i < trail.length - 1 && <ChevronRight size={14} aria-hidden="true" />}
                </li>
              ))}
            </ol>
          </nav>
          <span className={s.eyebrow}>{eyebrow}</span>
          <h1 className={s.h1p}><Tight>{title}</Tight></h1>
          {lede && <p className={s.lede}>{lede}</p>}
          {actions && (
            <div className={s.cta}>
              <Link className={`${s.btn} ${s.btnL}`} href={BOOK_HREF}>Book a free consultation</Link>
              <a className={`${s.btn} ${s.btnO}`} href={SITE.whatsapp} target="_blank" rel="noopener noreferrer">
                <WhatsAppLogo size={19} />
                WhatsApp us
              </a>
            </div>
          )}
          {chips.length > 0 && (
            <ul className={s.heroChips}>
              {chips.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          )}
        </section>
        {image && (
          <div className={s.phVisual}>
            <div className={s.phFrame}>
              <Image src={image} alt={imageAlt} fill priority sizes="(max-width: 900px) 92vw, 520px" className={s.frameImg} />
            </div>
            {pill && (
              <div className={`${s.pill} ${s.phPill} ${s.glass}`} aria-hidden="true">
                <b>{pill.big}</b>
                <span>{pill.small}</span>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
}
