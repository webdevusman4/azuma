import { Clock, Globe, Landmark } from "lucide-react";
import WorldGlobe from "./WorldGlobe";
import { Tight } from "./Tight";
import s from "./site.module.css";

/** "Worldwide" section: dark panel, rotating globe, regions and cities we serve. */
export default function Worldwide() {
  return (
    <section className={s.sec} id="worldwide" aria-labelledby="world-title">
      <div className={s.in}>
        <div className={s.world}>
          <div className={s.worldHead}>
            <div>
              <span className={s.eyebrow}>Worldwide</span>
              <h2 className={s.h2} id="world-title"><Tight>{"Local expertise. Global reach."}</Tight></h2>
            </div>
            <ul className={s.worldFacts}>
              <li><Landmark size={18} aria-hidden="true" /> Offices in the USA &amp; Pakistan</li>
              <li><Globe size={18} aria-hidden="true" /> Clients across 6 regions</li>
              <li><Clock size={18} aria-hidden="true" /> Working across time zones</li>
            </ul>
          </div>
          <WorldGlobe />
        </div>
      </div>
    </section>
  );
}
