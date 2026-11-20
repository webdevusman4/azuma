import Nav from "./Nav";
import Hero from "./Hero";
import Marquee from "./Marquee";
import Services from "./Services";
import Audiences from "./Audiences";
import Why from "./Why";
import { FinalCta, Footer, Founders } from "./Sections";
import Reveal from "./Reveal";
import TabBar from "./TabBar";
import { WhatsAppLogo } from "./icons";
import { SITE } from "@/lib/site";
import s from "./home.module.css";

/**
 * Azuma home page: short, image-led and keyword-first. Detail (process, FAQ, insights, full service copy)
 * lives on the inner pages.
 */
export default function HomePage() {
  return (
    <div className={s.root}>
      <div className={s.field} aria-hidden="true" />
      <a className={s.skip} href="#main">
        Skip to main content
      </a>
      <Nav />
      <Hero />
      <main id="main">
        <Marquee />
        <Services />
        <Audiences />
        <Why />
        <Founders />
        <FinalCta />
      </main>
      <Footer />
      <a className={s.fab} href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Chat with Azuma on WhatsApp">
        <WhatsAppLogo size={28} />
      </a>
      <TabBar />
      <Reveal />
    </div>
  );
}
