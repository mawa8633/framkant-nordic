import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ArticleJsonLd } from "@/components/json-ld";
import { InnerHeroVisual, SystemSnapshot } from "@/components/page-visuals";
import { AssetGallery, CaseStudyCard, CTA, SectionIntro, ServiceGrid, Testimonial } from "@/components/sections";
import { caseStudies, services } from "@/lib/content";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return caseStudies.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = caseStudies.find((caseStudy) => caseStudy.slug === slug);
  if (!item) return {};
  return {
    title: item.client,
    description: item.headline,
    alternates: {
      canonical: `/case-studies/${item.slug}`,
    },
  };
}

export default async function CaseStudyDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = caseStudies.find((caseStudy) => caseStudy.slug === slug);
  if (!item) notFound();
  const relatedCases = caseStudies.filter((caseStudy) => caseStudy.slug !== item.slug).slice(0, 2);
  const relatedServices = services.filter((service) => item.services.includes(service.title));

  return (
    <main className="page">
      <section className="hero compact hero-dark inner-page-hero">
        <div className="hero-copy">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Case Studies", href: "/case-studies" }, { label: item.client, href: `/case-studies/${item.slug}` }]} />
          <ArticleJsonLd title={item.client} description={item.headline} url={`/case-studies/${item.slug}`} />
          <p className="eyebrow">{item.industry}</p>
          <h1>{item.headline}</h1>
          <p>{item.challenge}</p>
        </div>
        <InnerHeroVisual image="analytics" label={item.client} />
      </section>

      <section className="section alt">
        <SectionIntro eyebrow="Client overview" title="Context without the biography." />
        <SystemSnapshot compact />
        <div className="card-grid three">
          {[
            ["Business", item.client],
            ["Industry", item.industry],
            ["Services used", item.services.join(", ")],
          ].map(([label, value]) => (
            <div className="stat-card" key={label}>
              <p className="mini-label">{label}</p>
              <h3>{value}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="split">
          <SectionIntro
            eyebrow="Diagnosis and strategy"
            title="The reasoning behind the solution."
            copy="The work prioritized the weakest parts of the customer journey first, then connected the implementation into a system that can improve over time."
          />
          <div className="process-list">
            {["Discovery", "Strategy", "Build", "Launch", "Optimization"].map((step) => (
              <div className="process-card" key={step}>
                <h3>{step}</h3>
                <p>Structured milestone used to move from diagnosis to measurable improvement.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <SectionIntro eyebrow="Results" title="Verified practical outcomes." />
        <div className="card-grid three">
          {item.outcomes.map((outcome) => (
            <div className="feature-card" key={outcome}>
              <h3>{outcome}</h3>
              <p>Presented as a practical verified outcome, without invented performance numbers.</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <SectionIntro eyebrow="Client testimonial" title="Authentic proof, pending final approval." />
        <Testimonial quote={item.testimonial.quote} name={item.testimonial.name} role={item.testimonial.role} />
      </section>

      <section className="section alt">
        <SectionIntro eyebrow="Project gallery" title="Evidence, not decoration." />
        <AssetGallery items={item.gallery} />
      </section>

      <section className="section">
        <SectionIntro eyebrow="Services used" title="Connected pieces of the system." />
        <ServiceGrid items={relatedServices.length ? relatedServices : services.slice(0, 3)} />
      </section>

      <section className="section alt">
        <SectionIntro eyebrow="Related case studies" title="More relevant proof." />
        <div className="card-grid two">
          {relatedCases.map((related) => (
            <CaseStudyCard item={related} key={related.slug} />
          ))}
        </div>
      </section>

      <CTA
        title="Could We Create Similar Progress for Your Business?"
        copy="Book a free growth analysis and let us identify where the greatest opportunities exist."
      />
    </main>
  );
}
