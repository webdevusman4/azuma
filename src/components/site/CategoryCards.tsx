import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MessageCircleQuestion } from "lucide-react";
import { BOOK_HREF, SERVICE_CATEGORIES, categoryHref } from "@/lib/site";
import { ServiceGlyph } from "./icons";
import s from "./site.module.css";

/**
 * Service categories as a photo bento: one large card, five smaller ones, each listing its services as
 * keywords with "+N more". A "not listed?" strip underneath makes the point that the list isn't the limit.
 */
export default function CategoryCards() {
  return (
    <>
      <div className={s.bento}>
        {SERVICE_CATEGORIES.map((c, i) => {
          // The large card shows six services, the wide ones three, the small 1x1 cards two.
          const shown = i === 0 ? 6 : i === 2 || i === 3 ? 2 : 3;
          const more = c.services.length - shown;
          return (
            <Link key={c.id} href={categoryHref(c.id)} className={s.cat}>
              <Image src={c.image} alt={c.imageAlt} fill sizes={i === 0 ? "(max-width: 1080px) 92vw, 580px" : "(max-width: 640px) 92vw, (max-width: 1080px) 46vw, 290px"} />
              <span className={s.catIcon}><ServiceGlyph name={c.icon} size={22} strokeWidth={2} /></span>
              <span className={s.go} aria-hidden="true"><ArrowUpRight size={18} strokeWidth={2.4} /></span>
              <div className={s.catBody}>
                <h3>{c.name}</h3>
                {i === 0 && <p>{c.line}</p>}
                <ul className={s.kwLight}>
                  {c.services.slice(0, shown).map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                  {more > 0 && <li className={s.more}>+{more} more</li>}
                </ul>
              </div>
            </Link>
          );
        })}
      </div>
      <div className={`${s.notListed} ${s.glass}`}>
        <span><MessageCircleQuestion size={24} aria-hidden="true" /></span>
        <p>
          <b>Don&apos;t see your need?</b> If it involves your finances, chances are we handle it.
        </p>
        <Link className={`${s.btn} ${s.btnN}`} href={BOOK_HREF}>Ask us</Link>
      </div>
    </>
  );
}
