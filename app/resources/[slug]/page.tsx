import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ArticleJsonLd } from "@/components/json-ld";
import { InnerHeroVisual, SystemSnapshot } from "@/components/page-visuals";
import { ArticleGrid, CTA, SectionIntro } from "@/components/sections";
import { articles } from "@/lib/content";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
    alternates: {
      canonical: `/resources/${article.slug}`,
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) notFound();
  const related = articles.filter((item) => item.slug !== article.slug);

  return (
    <main className="page">
      <article>
        <section className="hero compact hero-dark inner-page-hero">
          <div className="hero-copy">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: article.title, href: `/resources/${article.slug}` }]} />
            <ArticleJsonLd title={article.title} description={article.excerpt} url={`/resources/${article.slug}`} />
            <p className="eyebrow">{article.category}</p>
            <h1>{article.title}</h1>
            <p>{article.excerpt}</p>
            <p className="mini-label">{article.readTime}</p>
          </div>
          <InnerHeroVisual image="dashboard" label={article.category} />
        </section>
        <section className="section alt">
          <SectionIntro
            eyebrow="Article template"
            title="Structured for education, SEO, and conversion."
            copy="The CMS version should support author, published date, modified date, reading time, featured image, categories, tags, related articles, and Article schema."
          />
          <SystemSnapshot compact />
          <div className="card-grid three">
            {["Clear introduction", "Practical guidance", "Related conversion path"].map((item) => (
              <div className="feature-card" key={item}>
                <h3>{item}</h3>
                <p>This placeholder content defines the article structure before editorial copy is added.</p>
              </div>
            ))}
          </div>
        </section>
      </article>
      <section className="section">
        <SectionIntro eyebrow="Related articles" title="Keep learning." />
        <ArticleGrid items={related} />
      </section>
      <CTA copy="Turn practical knowledge into a connected growth system with a free analysis." />
    </main>
  );
}
