import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import Shell from "@/components/site/Shell";
import { SITE } from "@/lib/site";
import "./globals.css";

// Self-hosted variable fonts (no request to Google at runtime). Project Bible: Typography.
const jakarta = localFont({
  src: "./fonts/plus-jakarta-sans-latin-wght-normal.woff2",
  variable: "--font-jakarta",
  weight: "200 800",
  display: "swap",
});

const inter = localFont({
  src: "./fonts/inter-latin-wght-normal.woff2",
  variable: "--font-inter",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Azuma Solutions | U.S. Tax, Bookkeeping & Financial Planning",
    template: "%s | Azuma Solutions",
  },
  description: SITE.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: "Azuma Solutions | Accurate. Certified. Affordable.",
    description: SITE.description,
    url: SITE.url,
    locale: "en_US",
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#f7f7f4",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-US" className={`${jakarta.variable} ${inter.variable}`}>
      <body>
        <Shell>{children}</Shell>
      </body>
    </html>
  );
}
