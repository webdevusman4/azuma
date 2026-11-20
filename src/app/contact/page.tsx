import type { Metadata } from "next";
import { Mail, Phone } from "lucide-react";
import PageHero from "@/components/site/PageHero";
import ContactForm from "@/components/site/ContactForm";
import { WhatsAppLogo } from "@/components/site/icons";
import { Tight } from "@/components/site/Tight";
import { SITE } from "@/lib/site";
import s from "@/components/site/site.module.css";

export const metadata: Metadata = {
  title: "Contact & Book a Free Consultation",
  description: "Book a free consultation with Azuma Solutions. Call +1 (920) 473-1934, WhatsApp us, or email info@azumasolution.com.",
  alternates: { canonical: "/contact" },
};

const CHANNELS = [
  { Icon: Phone, label: "Call", value: SITE.phone, href: SITE.tel, external: false },
  { Icon: WhatsAppLogo, label: "WhatsApp", value: "Chat with us", href: SITE.whatsapp, external: true },
  { Icon: Mail, label: "Email", value: SITE.email, href: `mailto:${SITE.email}`, external: false },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk numbers."
        lede="Book a free, no-obligation consultation."
        chips={["Free first call", "Phone · WhatsApp · Email", "USA + Pakistan"]}
        image="/photos/audience-international.jpg"
        imageAlt="A business owner on a video call with his advisers"
        crumbs={[{ label: "Contact" }]}
        pill={{ big: "Free", small: "first consultation" }}
        actions={false}
      />
      <main id="main">
        <section className={s.sec} id="book" aria-labelledby="book-title">
          <div className={`${s.in} ${s.contactGrid}`}>
            <div>
              <span className={s.eyebrow}>Book a consultation</span>
              <h2 className={s.h2} id="book-title"><Tight>{"Tell us what you need."}</Tight></h2>
              <ul className={s.channels}>
                {CHANNELS.map(({ Icon, label, value, href, external }) => (
                  <li key={label}>
                    <a href={href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})} className={s.glass}>
                      <span><Icon size={22} /></span>
                      <div><small>{label}</small><b>{value}</b></div>
                    </a>
                  </li>
                ))}
              </ul>
              <div className={s.socialRow}>
                {SITE.social.map((x) => (
                  <a key={x.label} href={x.href} target="_blank" rel="noopener noreferrer">{x.label}</a>
                ))}
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
    </>
  );
}
