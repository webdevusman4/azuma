import Hero from "./Hero";
import Marquee from "./Marquee";
import Services from "./Services";
import Worldwide from "./Worldwide";
import Audiences from "./Audiences";
import Why from "./Why";
import { FinalCta, Founders } from "./Sections";

/**
 * Azuma home page: short, image-led and keyword-first. Detail (process, FAQ, insights, full service copy)
 * lives on the inner pages. Nav, footer and the rest of the chrome come from Shell (app/layout.tsx).
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <main id="main">
        <Marquee />
        <Services />
        <Worldwide />
        <Audiences />
        <Why />
        <Founders />
        <FinalCta />
      </main>
    </>
  );
}
