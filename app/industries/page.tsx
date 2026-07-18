import type { Metadata } from "next";
import { InnerHeroVisual, SystemSnapshot } from "@/components/page-visuals";
import { CTA, IndustryGrid, SectionIntro } from "@/components/sections";
import { industries } from "@/lib/content";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Industry growth systems for beauty, cleaning, and future high-value service sectors.",
  alternates: {
    canonical: "/industries",
  },
};

export default function IndustriesPage() {
  return (
    <main className="page">
      <section className="hero compact hero-dark inner-page-hero">
        <div className="hero-copy">
          <p className="eyebrow">Industries</p>
          <h1>
            Markets taken. <span className="marker">Trust built.</span>
          </h1>
          <p>
            Framkant Nordic focuses on businesses where each new customer has meaningful
            long-term value, making structured digital systems worth building properly.
          </p>
        </div>
        <InnerHeroVisual image="salon" label="Industry-specific growth systems" />
      </section>
      <section className="section alt">
        <SectionIntro
          eyebrow="Industry templates"
          title="Reusable layouts, industry-specific content."
          copy="Each industry page follows the same scalable structure while adapting challenges, solutions, proof, FAQs, and related services."
        />
        <SystemSnapshot compact />
        <IndustryGrid items={industries} />
      </section>
      <CTA copy="Book a free growth analysis and let us identify the most valuable digital opportunities in your market." />
    </main>
  );
}
