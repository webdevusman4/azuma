import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { type Service, serviceHref } from "@/lib/site";
import { ServiceGlyph } from "./icons";
import s from "./site.module.css";

/** Photo tiles: title + three keywords each. Used on Home, the Services hub and as "related services". */
export default function ServiceTiles({ items }: { items: Service[] }) {
  return (
    <div className={s.tiles}>
      {items.map((svc) => (
        <Link key={svc.slug} href={serviceHref(svc.slug)} className={s.tile}>
          <div className={s.tileImg}>
            <Image src={svc.image} alt={svc.imageAlt} fill sizes="(max-width: 640px) 120px, (max-width: 1080px) 46vw, 380px" />
          </div>
          <div className={s.tileBody}>
            <span className={s.tileIcon}><ServiceGlyph name={svc.icon} size={22} strokeWidth={2} /></span>
            <h3>{svc.name}</h3>
            <ul className={s.kw}>
              {svc.tags.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <span className={s.go} aria-hidden="true"><ArrowUpRight size={18} strokeWidth={2.4} /></span>
          </div>
        </Link>
      ))}
    </div>
  );
}
