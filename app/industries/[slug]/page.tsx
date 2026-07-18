import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { FAQJsonLd } from "@/components/json-ld";
import { InnerHeroVisual, OwnerTrustPanel, SystemSnapshot } from "@/components/page-visuals";
import { CaseStudyCard, CTA, FAQ, SectionIntro, ServiceGrid, WhyFramkant } from "@/components/sections";
import { caseStudies, faq, industries, services } from "@/lib/content";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = industries.find((item) => item.slug === slug);
  if (!industry) return {};
  return {
    title: `${industry.title} Industry`,
    description: industry.description,
    alternates: {
      canonical: `/industries/${industry.slug}`,
    },
  };
}

export default async function IndustryDetailPage({ params }: Props) {
  const { slug } = await params;
  const industry = industries.find((item) => item.slug === slug);
  if (!industry) notFound();
  const featuredCase =
    caseStudies.find((item) => item.industry === industry.title) ?? caseStudies[0];

  return (
    <main className="page">
      <section className="hero compact hero-dark inner-page-hero">
        <div className="hero-copy">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Industries", href: "/industries" }, { label: industry.title, href: `/industries/${industry.slug}` }]} />
          <FAQJsonLd items={faq} />
          <p className="eyebrow">{industry.eyebrow}</p>
          <h1>
            Digital growth for <span className="marker">{industry.title.toLowerCase()}</span> businesses.
          </h1>
          <p>{industry.description}</p>
        </div>
        <InnerHeroVisual image={industry.slug === "cleaning" ? "cleaning" : "salon"} label={`${industry.title} customer journey`} />
      </section>

      <section className="section alt">
        <SectionIntro eyebrow="Business types" title="Who this template serves." />
        <SystemSnapshot compact />
        <div className="card-grid four">
          {industry.businessTypes.map((type) => (
            <div className="stat-card" key={type}>
              <h3>{type}</h3>
              <p>Structured around local visibility, trust, conversion, and follow-up.</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="split">
          <SectionIntro eyebrow="Common challenges" title="Where growth usually leaks." />
          <div className="stack">
            {industry.challenges.map((challenge) => (
              <div className="process-card" key={challenge}>
                <h3>{challenge}</h3>
                <p>Handled through a connected system rather than another isolated tool.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <SectionIntro eyebrow="Solutions" title="What the system usually needs." />
        <div className="card-grid three">
          {industry.solutions.map((solution) => (
            <div className="feature-card" key={solution}>
              <h3>{solution}</h3>
              <p>Configured for the realities of the {industry.title.toLowerCase()} customer journey.</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <SectionIntro eyebrow="Related services" title="Services commonly used here." />
        <ServiceGrid items={services.slice(0, 4)} />
      </section>

      <section className="section alt">
        <SectionIntro eyebrow="Featured case" title="Relevant proof for this industry." />
        <CaseStudyCard item={featuredCase} featured />
      </section>

      <section className="section">
        <SectionIntro eyebrow="Why Framkant Nordic" title="Built for long-term industry growth." />
        <OwnerTrustPanel />
        <WhyFramkant />
      </section>

      <section className="section alt">
        <SectionIntro eyebrow="FAQ" title={`${industry.title} growth questions.`} />
        <FAQ items={faq} />
      </section>

      <CTA copy={`Let us identify the most valuable digital growth opportunities for your ${industry.title.toLowerCase()} business.`} />
    </main>
  );
}
