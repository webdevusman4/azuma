import Image from "next/image";
import { BadgeCheck, PiggyBank, ShieldCheck } from "lucide-react";
import { Tight } from "./Tight";
import s from "./site.module.css";

const REASONS = [
  { Icon: ShieldCheck, word: "Accurate", line: "Accredited professionals. Compliance checked." },
  { Icon: BadgeCheck, word: "Certified", line: "Led by a Chartered Accountant and ACCA member." },
  { Icon: PiggyBank, word: "Affordable", line: "U.S. firm, global team, fair pricing." },
];

/** One big photo with floating proof pills, three one-line reasons beside it. */
export default function Why() {
  return (
    <section className={s.sec} id="why" aria-labelledby="why-title">
      <div className={`${s.in} ${s.whyGrid}`}>
        <div className={s.whyPhoto}>
          <div className={s.whyFrame}>
            <Image src="/photos/why-team.jpg" alt="A team celebrating good results around a laptop" fill sizes="(max-width: 900px) 92vw, 560px" />
          </div>
          <div className={`${s.pill} ${s.pill3} ${s.glass}`} aria-hidden="true"><b>8+ years</b><span>in corporate finance</span></div>
          <div className={`${s.pill} ${s.pill4} ${s.glass}`} aria-hidden="true"><b>CA · ACCA</b><span>qualified leadership</span></div>
        </div>
        <div>
          <span className={s.eyebrow}>Why Azuma</span>
          <h2 className={s.h2} id="why-title"><Tight>{"Three reasons owners choose us."}</Tight></h2>
          <ul className={s.reasons}>
            {REASONS.map(({ Icon, word, line }) => (
              <li key={word}>
                <span><Icon size={24} aria-hidden="true" /></span>
                <div>
                  <h3>{word}</h3>
                  <p>{line}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
