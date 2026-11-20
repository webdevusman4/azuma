import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Lightbulb } from "lucide-react";
import PageHero from "@/components/site/PageHero";
import { FinalCta } from "@/components/site/Sections";
import { ARTICLES, FOUNDERS, SITE, articleHref } from "@/lib/site";
import s from "@/components/site/site.module.css";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const a = ARTICLES.find((x) => x.slug === slug);
  if (!a) return {};
  return {
    title: a.title,
    description: a.description,
    alternates: { canonical: articleHref(slug) },
    openGraph: { type: "article", title: a.title, description: a.description, publishedTime: a.isoDate, authors: [a.author] },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const a = ARTICLES.find((x) => x.slug === slug);
  if (!a) notFound();
  const author = FOUNDERS.find((f) => f.name === a.author);
  const ld = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.title,
    description: a.description,
    datePublished: a.isoDate,
    author: { "@type": "Person", name: a.author, jobTitle: author?.role },
    publisher: { "@id": `${SITE.url}/#org` },
    image: `${SITE.url}${a.image}`,
  };

  return (
    <>
      <PageHero
        eyebrow={a.category}
        title={a.title}
        crumbs={[{ label: "Insights", href: "/insights" }, { label: "Article" }]}
        actions={false}
      />
      <main id="main">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld).replace(/</g, "\\u003c") }} />
        <article className={`${s.in} ${s.article}`}>
          <div className={s.byline}>
            {author && (
              <span className={s.byAvatar}>
                <Image src={author.photo} alt="" fill sizes="48px" />
              </span>
            )}
            <div>
              <b>{a.author}</b>
              <small>{author?.role} · <time dateTime={a.isoDate}>{a.date}</time></small>
            </div>
          </div>
          <div className={s.artHero}>
            <Image src={a.image} alt="Tax forms and a pen on a desk" fill priority sizes="(max-width: 900px) 92vw, 760px" />
          </div>
          <div className={s.prose}>
            {a.body.map((b, i) => {
              if (b.type === "h2") return <h2 key={i}>{b.text}</h2>;
              if (b.type === "ul") return <ul key={i}>{b.items.map((it) => <li key={it}>{it}</li>)}</ul>;
              if (b.type === "tip") return <p key={i} className={s.tip}><Lightbulb size={20} aria-hidden="true" />{b.text}</p>;
              return <p key={i}>{b.text}</p>;
            })}
            <p className={s.disclaimerNote}>This article is general information, not tax advice for your situation. Book a consultation for advice on your own taxes.</p>
          </div>
        </article>
        <FinalCta />
      </main>
    </>
  );
}
