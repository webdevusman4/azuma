import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHero from "@/components/site/PageHero";
import Included from "@/components/site/Included";
import Audiences from "@/components/site/Audiences";
import Steps from "@/components/site/Steps";
import ServiceTiles from "@/components/site/ServiceTiles";
import { FinalCta } from "@/components/site/Sections";
import { Tight } from "@/components/site/Tight";
import { SERVICES, SERVICE_DETAILS, SITE, serviceHref } from "@/lib/site";
import s from "@/components/site/site.module.css";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICES.map((x) => ({ slug: x.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const svc = SERVICES.find((x) => x.slug === slug);
  if (!svc) return {};
  return {
    title: svc.name,
    description: `${SERVICE_DETAILS[slug].intro} ${svc.tags.join(", ")}.`,
    alternates: { canonical: serviceHref(slug) },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const svc = SERVICES.find((x) => x.slug === slug);
  const detail = SERVICE_DETAILS[slug];
  if (!svc || !detail) notFound();

  const i = SERVICES.indexOf(svc);
  const related = [1, 2, 3].map((k) => SERVICES[(i + k) % SERVICES.length]);
  const ld = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: svc.name,
    serviceType: svc.name,
    description: detail.intro,
    provider: { "@id": `${SITE.url}/#org` },
    areaServed: ["United States", "Worldwide"],
  };

  return (
    <>
      <PageHero
        eyebrow="Service"
        title={svc.name}
        lede={detail.intro}
        chips={svc.tags}
        image={svc.image}
        imageAlt={svc.imageAlt}
        crumbs={[{ label: "Services", href: "/services" }, { label: svc.name }]}
        pill={{ big: "CA · ACCA", small: "qualified team" }}
      />
      <main id="main">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld).replace(/</g, "\\u003c") }} />
        <Included items={detail.included} />
        <Audiences title="Who it's for." only={slug} />
        <Steps title="How we work with you." />
        <section className={s.sec} aria-labelledby="related-title">
          <div className={s.in}>
            <div className={s.head}>
              <div>
                <span className={s.eyebrow}>Related</span>
                <h2 className={s.h2} id="related-title"><Tight>{"Often paired with."}</Tight></h2>
              </div>
            </div>
            <ServiceTiles items={related} />
          </div>
        </section>
        <FinalCta />
      </main>
    </>
  );
}
