import Image from "next/image";
import Link from "next/link";
import { AUDIENCES, BOOK_HREF } from "@/lib/site";
import { Tight } from "./Tight";
import s from "./home.module.css";

/** Four tall photo cards, label + three keywords each. */
export default function Audiences() {
  return (
    <section className={`${s.sec} ${s.band}`} id="who" aria-labelledby="who-title">
      <div className={s.in}>
        <div className={s.head}>
          <div>
            <span className={s.eyebrow}>Who we serve</span>
            <h2 className={s.h2} id="who-title"><Tight>{"Built for owners."}</Tight></h2>
          </div>
        </div>
        <ul className={s.people}>
          {AUDIENCES.map((a) => (
            <li key={a.id}>
              <Link href={BOOK_HREF} className={s.person}>
                <Image src={a.image} alt={a.imageAlt} fill sizes="(max-width: 640px) 46vw, (max-width: 1080px) 46vw, 290px" style={{ objectPosition: a.imagePos }} />
                <div className={s.personBody}>
                  <h3>{a.title}</h3>
                  <ul className={s.kwLight}>
                    {a.keywords.map((k) => (
                      <li key={k}>{k}</li>
                    ))}
                  </ul>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
