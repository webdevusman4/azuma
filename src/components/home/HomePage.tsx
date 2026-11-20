import Nav from "./Nav";
import Hero from "./Hero";
import Services from "./Services";
import Pillars from "./Pillars";
import Audiences from "./Audiences";
import Process from "./Process";
import { Faq, FinalCta, Footer, Founders, Insights } from "./Sections";
import Reveal from "./Reveal";
import TabBar from "./TabBar";
import { WhatsAppLogo } from "./icons";
import { SITE } from "@/lib/site";
import s from "./home.module.css";

/** Azuma home page (Project Bible: Sitemap & page specs, Home). */
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
        <Services />
        <Pillars />
        <Audiences />
        <Process />
        <Founders />
        <Insights />
        <Faq />
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
