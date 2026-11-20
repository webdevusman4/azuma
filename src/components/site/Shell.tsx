import Nav from "./Nav";
import { Footer } from "./Sections";
import Reveal from "./Reveal";
import TabBar from "./TabBar";
import { WhatsAppLogo } from "./icons";
import { SITE } from "@/lib/site";
import s from "./site.module.css";

/** Everything every page shares: living background, nav, footer, WhatsApp button, phone tab bar, scroll reveal. */
export default function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className={s.root}>
      <div className={s.field} aria-hidden="true" />
      <a className={s.skip} href="#main">
        Skip to main content
      </a>
      <Nav />
      {children}
      <Footer />
      <a className={s.fab} href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Chat with Azuma on WhatsApp">
        <WhatsAppLogo size={28} />
      </a>
      <TabBar />
      <Reveal />
    </div>
  );
}
