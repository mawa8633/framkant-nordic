import type { Metadata } from "next";
import { InnerHeroVisual, SystemSnapshot } from "@/components/page-visuals";
import { CaseStudyCard, CTA, SectionIntro } from "@/components/sections";
import { caseStudies } from "@/lib/content";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Browse Framkant Nordic case studies focused on verified progress, connected systems, and practical business outcomes.",
  alternates: {
    canonical: "/case-studies",
  },
};

export default function CaseStudiesPage() {
  const featured = caseStudies.find((item) => item.featured) ?? caseStudies[0];
  const remaining = caseStudies.filter((item) => item.slug !== featured.slug);

  return (
    <main className="page">
      <section className="hero compact hero-dark inner-page-hero">
        <div className="hero-copy">
          <p className="eyebrow">Case Studies</p>
          <h1>
            Real businesses. <span className="marker">Measurable progress.</span>
          </h1>
          <p>
            Explore how Framkant Nordic helps businesses improve visibility, customer
            follow-up, digital systems, and long-term growth.
          </p>
        </div>
        <InnerHeroVisual image="analytics" label="Evidence over decoration" />
      </section>

      <section className="section alt">
        <SystemSnapshot compact />
        <div className="chip-row" aria-label="Case study filters">
          {["All", "Beauty", "Cleaning", "Future Industries", "Web Design", "CRM", "Automation"].map((filter) => (
            <span className="chip" key={filter}>{filter}</span>
          ))}
        </div>
        <CaseStudyCard item={featured} featured />
      </section>

      <section className="section">
        <SectionIntro eyebrow="Archive" title="Proof by industry, service, or challenge." />
        <div className="card-grid two">
          {remaining.map((item) => (
            <CaseStudyCard item={item} key={item.slug} />
          ))}
        </div>
      </section>
      <CTA
        title="Ready to Become Our Next Case Study?"
        copy="Let us review your digital presence and identify the most valuable opportunities for growth."
      />
    </main>
  );
}
