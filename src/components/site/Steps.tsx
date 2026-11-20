import { PROCESS } from "@/lib/site";
import { Tight } from "./Tight";
import s from "./site.module.css";

/** "How it works": four numbered steps in a row, joined by a line that draws in. */
export default function Steps({ title = "Four steps from first call to filed." }: { title?: string }) {
  return (
    <section className={`${s.sec} ${s.band}`} id="how" aria-labelledby="how-title">
      <div className={s.in}>
        <div className={s.head}>
          <div>
            <span className={s.eyebrow}>How it works</span>
            <h2 className={s.h2} id="how-title"><Tight>{title}</Tight></h2>
          </div>
        </div>
        <ol className={s.steps}>
          {PROCESS.map((p, i) => (
            <li key={p.title}>
              <span className={s.stepNum} aria-hidden="true">0{i + 1}</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
