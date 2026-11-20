import { Check } from "lucide-react";
import { Tight } from "./Tight";
import s from "./home.module.css";

// Each word of the tagline becomes a proof pillar (Project Bible: Website type & positioning).
const PILLARS = [
  {
    word: "Accurate.",
    text: "Accredited professionals prepare your returns, statements and models with a focus on precision and compliance in every financial domain.",
    points: ["Clear deliverables and deadlines", "Compliance checked before anything is filed"],
    dark: false,
  },
  {
    word: "Certified.",
    text: "The firm is led by Arsalan Zahid, a Chartered Accountant and ACCA member with more than 8 years across multinational and domestic companies.",
    points: ["Chartered Accountant (CA)", "Member of ACCA, UK", "U.S.-registered firm"],
    dark: true,
  },
  {
    word: "Affordable.",
    text: "A U.S.-registered firm with a delivery team in Pakistan. You get qualified accountants at a price small businesses can manage.",
    points: ["Price confirmed before work starts", "Free first consultation"],
    dark: false,
  },
];

export default function Pillars() {
  return (
    <section className={s.sec} id="why" aria-labelledby="why-title" style={{ paddingTop: 24 }}>
      <div className={s.in}>
        <div className={s.center}>
          <span className={s.eyebrow}>Why Azuma</span>
          <h2 className={s.h2} id="why-title"><Tight>{"Three promises, and how we keep them."}</Tight></h2>
          <p className={s.sub}>Our tagline isn&apos;t a slogan. Each word is something you can check.</p>
        </div>
        <div className={s.pillars}>
          {PILLARS.map((p) => (
            <article key={p.word} className={`${s.pillar} ${p.dark ? s.pillarDark : s.glass}`}>
              <h3><Tight>{p.word}</Tight></h3>
              <p>{p.text}</p>
              <ul>
                {p.points.map((pt) => (
                  <li key={pt}><Check size={17} strokeWidth={2.6} aria-hidden="true" />{pt}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
