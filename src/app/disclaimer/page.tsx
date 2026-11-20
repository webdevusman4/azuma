import type { Metadata } from "next";
import LegalPage from "@/components/site/LegalPage";

export const metadata: Metadata = { title: "Disclaimer", alternates: { canonical: "/disclaimer" } };

export default function DisclaimerPage() {
  return (
    <LegalPage
      title="Disclaimer"
      crumb="Disclaimer"
      updated="November 20, 2026"
      sections={[
        { h: "General information", p: ["The information on this website, including articles in Insights, is general and for information only. It isn't tax, legal or financial advice for your situation."] },
        { h: "Get advice for your situation", p: ["Tax rules change and every situation is different. Speak to a qualified professional before acting on anything you read here. Book a consultation and we'll look at your circumstances."] },
        { h: "No guarantee", p: ["We work to keep this site accurate and up to date, but we can't guarantee that every page reflects the latest rules at all times."] },
      ]}
    />
  );
}
