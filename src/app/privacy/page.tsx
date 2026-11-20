import type { Metadata } from "next";
import LegalPage from "@/components/site/LegalPage";
import { SITE } from "@/lib/site";

export const metadata: Metadata = { title: "Privacy Policy", alternates: { canonical: "/privacy" } };

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy policy"
      crumb="Privacy"
      updated="November 20, 2026"
      sections={[
        { h: "Who we are", p: [`${SITE.legalName} ("Azuma", "we") runs ${SITE.url}. Questions about this policy: ${SITE.email}.`] },
        { h: "What we collect", p: ["Information you send us: your name, email, phone number, the service you're interested in and your message when you use our consultation form, and anything you share with us by email, phone or WhatsApp."] },
        { h: "How we use it", p: ["To reply to you, arrange consultations, provide the services you ask for, and keep the records the law requires."] },
        { h: "Sharing", p: ["We don't sell your personal information. We share it only with providers that help us run this website and handle messages (such as website hosting and form processing), or when the law requires it."] },
        { h: "Cookies and analytics", p: ["This site doesn't use advertising cookies. If we add analytics, we'll update this policy first."] },
        { h: "Your choices", p: [`You can ask us to access, correct or delete the information we hold about you by emailing ${SITE.email}.`] },
        { h: "Changes", p: ["We'll post any changes to this policy on this page with a new date."] },
      ]}
    />
  );
}
