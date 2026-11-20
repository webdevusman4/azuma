import PageHero from "./PageHero";
import s from "./site.module.css";

export type LegalSection = { h: string; p: string[] };

/** Plain-text legal page. DRAFT copy: have the client (and ideally counsel) review before launch. */
export default function LegalPage({ title, crumb, updated, sections }: { title: string; crumb: string; updated: string; sections: LegalSection[] }) {
  return (
    <>
      <PageHero eyebrow="Legal" title={title} lede={`Last updated ${updated}`} crumbs={[{ label: crumb }]} actions={false} />
      <main id="main">
        <div className={`${s.in} ${s.article}`}>
          <div className={s.prose}>
            {sections.map((sec) => (
              <section key={sec.h}>
                <h2>{sec.h}</h2>
                {sec.p.map((t) => (
                  <p key={t}>{t}</p>
                ))}
              </section>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
