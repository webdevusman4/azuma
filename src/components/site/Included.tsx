import { CheckCircle2 } from "lucide-react";
import { Tight } from "./Tight";
import s from "./site.module.css";

/** "What's included": four keyword cards with a one-line explanation each. */
export default function Included({ items, title = "What's included." }: { items: { title: string; line: string }[]; title?: string }) {
  return (
    <section className={s.sec} id="included" aria-labelledby="included-title">
      <div className={s.in}>
        <div className={s.head}>
          <div>
            <span className={s.eyebrow}>What you get</span>
            <h2 className={s.h2} id="included-title"><Tight>{title}</Tight></h2>
          </div>
        </div>
        <ul className={s.incl}>
          {items.map((it) => (
            <li key={it.title} className={s.glass}>
              <span><CheckCircle2 size={24} aria-hidden="true" /></span>
              <h3>{it.title}</h3>
              <p>{it.line}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
