import { Check } from "lucide-react";
import { MARQUEE_ROWS } from "@/lib/site";
import s from "./home.module.css";

/** Two rows of service keywords drifting in opposite directions (HiScale's stack marquee). Pauses on hover. */
export default function Marquee() {
  return (
    <section className={s.mqSec} aria-label="What we handle">
      <p className={s.cap}>What we handle, every day</p>
      {MARQUEE_ROWS.map((row, r) => (
        <div key={r} className={`${s.mq} ${r % 2 ? s.rev : ""}`}>
          <ul className={s.track}>
            {[...row, ...row].map((k, i) => (
              <li key={i} className={s.tk} aria-hidden={i >= row.length ? true : undefined} data-dup={i >= row.length ? "" : undefined}>
                <i><Check size={15} strokeWidth={3} aria-hidden="true" /></i>
                {k}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
