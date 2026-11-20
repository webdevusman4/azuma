import type { Metadata } from "next";
import LegalPage from "@/components/site/LegalPage";
import { SITE } from "@/lib/site";

export const metadata: Metadata = { title: "Terms of Use", alternates: { canonical: "/terms" } };

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of use"
      crumb="Terms"
      updated="November 20, 2026"
      sections={[
        { h: "Using this site", p: [`By using ${SITE.url} you agree to these terms. If you don't agree, please don't use the site.`] },
        { h: "Information only", p: ["Content on this site is general information. It isn't tax, legal or financial advice for your situation."] },
        { h: "No client relationship", p: ["Using this site or contacting us doesn't create a client relationship. Our services are provided under a separate written engagement."] },
        { h: "Content and images", p: [`Text, logos and graphics on this site belong to ${SITE.legalName}. Some photographs are used under the Unsplash License.`] },
        { h: "Links", p: ["We link to other websites for convenience. We aren't responsible for their content or practices."] },
        { h: "Contact", p: [`Questions about these terms: ${SITE.email}.`] },
      ]}
    />
  );
}
