import type { Metadata } from "next";
import { InnerHeroVisual, SystemSnapshot } from "@/components/page-visuals";
import { ArticleGrid, CTA, SectionIntro } from "@/components/sections";
import { articles, resourceCategories } from "@/lib/content";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Framkant Nordic knowledge center with educational, industry, and practical digital growth guides.",
  alternates: {
    canonical: "/resources",
  },
};

export default function ResourcesPage() {
  return (
    <main className="page">
      <section className="hero compact hero-dark inner-page-hero">
        <div className="hero-copy">
          <p className="eyebrow">Resources</p>
          <h1>
            Learn the system before you <span className="marker">engage.</span>
          </h1>
          <p>
            This is not a blog. It is a strategic content platform for practical guides,
            industry education, and long-term SEO authority.
          </p>
        </div>
        <InnerHeroVisual image="dashboard" label="Knowledge that supports conversion" />
      </section>
      <section className="section alt">
        <SectionIntro eyebrow="Featured articles" title="Start with practical growth knowledge." />
        <SystemSnapshot compact />
        <div className="chip-row" aria-label="Resource categories">
          {resourceCategories.map((category) => (
            <span className="chip" key={category}>{category}</span>
          ))}
        </div>
        <ArticleGrid items={articles} />
      </section>
      <section className="section">
        <SectionIntro
          eyebrow="SEO strategy"
          title="Built as a long-term knowledge library."
          copy="Resources are structured around educational articles, industry guides, and practical checklists that strengthen topical authority over time."
        />
        <div className="card-grid three">
          {["Educational", "Industry Guides", "Practical Guides"].map((category) => (
            <div className="feature-card" key={category}>
              <h3>{category}</h3>
              <p>Reusable category structure for future CMS-managed publishing and internal linking.</p>
            </div>
          ))}
        </div>
      </section>
      <CTA copy="Use the knowledge center as a starting point, then book a growth analysis when you are ready to turn insight into implementation." />
    </main>
  );
}
