import Link from "next/link";
import PageHero from "@/components/site/PageHero";
import ServiceTiles from "@/components/site/ServiceTiles";
import { SERVICES } from "@/lib/site";
import s from "@/components/site/site.module.css";

export default function NotFound() {
  return (
    <>
      <PageHero eyebrow="404" title="This page doesn't add up." lede="It may have moved. Try one of these instead." crumbs={[{ label: "Not found" }]} actions={false} />
      <main id="main">
        <section className={s.sec} aria-label="Popular pages">
          <div className={s.in}>
            <div className={s.cta} style={{ marginBottom: 32 }}>
              <Link className={`${s.btn} ${s.btnN}`} href="/">Back to home</Link>
              <Link className={`${s.btn} ${s.btnN}`} href="/contact">Contact us</Link>
            </div>
            <ServiceTiles items={SERVICES.slice(0, 3)} />
          </div>
        </section>
      </main>
    </>
  );
}
