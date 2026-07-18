import type { Metadata } from "next";
import { InnerHeroVisual, OwnerTrustPanel, SystemSnapshot } from "@/components/page-visuals";
import { CTA, FAQ, SectionIntro, ServiceGrid } from "@/components/sections";
import { faq, services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Framkant Nordic digital growth services built to work together across visibility, website, CRM, automation, reviews, and reporting.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <main className="page">
      <section className="hero compact hero-dark inner-page-hero">
        <div className="hero-copy">
          <p className="eyebrow">Services</p>
          <h1>
            Services that run the <span className="marker">same system.</span>
          </h1>
          <p>
            Framkant Nordic combines strategy, technology, visibility, and automation into
            one connected growth system. Each service supports a clear part of the
            customer journey.
          </p>
        </div>
        <InnerHeroVisual image="dashboard" label="One service system" />
      </section>

      <section className="section dark">
        <SectionIntro
          eyebrow="The complete growth system"
          title="Traffic to growth, connected end to end."
          copy="Traffic -> Website -> CRM -> Automation -> Follow-up -> Customer -> Reviews -> Growth."
        />
        <ServiceGrid items={services} />
      </section>

      <section className="section">
        <SectionIntro eyebrow="Starting points" title="Choose the right place to begin." />
        <SystemSnapshot compact />
        <div className="card-grid three">
          {[
            ["We Need a Stronger Foundation", "Recommended: Web Design, CRM, Analytics"],
            ["We Need More Visibility and Leads", "Recommended: Local SEO, Google Ads, Meta Ads"],
            ["We Need Better Follow-Up and Retention", "Recommended: CRM, Automation, AI Chat, Review Management"],
          ].map(([title, copy]) => (
            <div className="feature-card" key={title}>
              <h3>{title}</h3>
              <p>{copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section visual-section">
        <OwnerTrustPanel />
      </section>

      <section className="section alt">
        <SectionIntro eyebrow="FAQ" title="Common service questions." />
        <FAQ items={faq} />
      </section>

      <CTA
        title="Not Sure Where to Start?"
        copy="We will review your current digital presence, identify the most important opportunities, and recommend the right starting point."
      />
    </main>
  );
}
