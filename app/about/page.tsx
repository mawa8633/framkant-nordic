import type { Metadata } from "next";
import Image from "next/image";
import { InnerHeroVisual, OwnerTrustPanel, SystemSnapshot } from "@/components/page-visuals";
import { CTA, GrowthSystem, SectionIntro } from "@/components/sections";
import { principles } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn why Framkant Nordic exists and how it approaches long-term digital growth partnerships.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <main className="page">
      <section className="hero compact hero-dark inner-page-hero">
        <div className="hero-copy">
          <p className="eyebrow">Brand and philosophy</p>
          <h1>
            Why Framkant Nordic <span className="marker">exists.</span>
          </h1>
          <p>
            Framkant Nordic was built on a simple belief: businesses should not have to
            become digital experts to grow. Our role is to take responsibility for the
            systems behind the scenes.
          </p>
        </div>
        <InnerHeroVisual image="owner" label="Owner-led growth partner" />
      </section>

      <section className="section alt">
        <div className="split founder-section">
          <SectionIntro
            eyebrow="Mission"
            title="We help businesses grow through structured digital systems."
            copy="Not by delivering isolated services. Not by following short-term trends. By building complete digital ecosystems that create sustainable business growth."
          />
          <div className="story-image founder-portrait">
            <Image
              src="/assets/images/owner/framkant-owner-portrait-same-face.webp"
              alt="Framkant Nordic founder portrait"
              fill
              quality={95}
              sizes="(max-width: 1060px) 100vw, 42vw"
              priority
            />
            <span>Personal responsibility</span>
          </div>
        </div>
      </section>

      <section className="section">
        <SectionIntro eyebrow="Our philosophy" title="The way we think." />
        <div className="card-grid two">
          {[
            ["We Build Systems", "We do not sell websites. We build digital systems that work together."],
            ["We Take Responsibility", "Our clients gain one long-term digital growth partner."],
            ["We Think Long-Term", "We optimize for sustainable business growth over many years."],
            ["We Only Win When You Win", "Our success depends entirely on the success of our clients."],
          ].map(([title, copy]) => (
            <div className="feature-card" key={title}>
              <h3>{title}</h3>
              <p>{copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section alt">
        <SectionIntro
          eyebrow="Trust"
          title="Not every business is the right fit."
          copy="We deliberately choose businesses where every new customer has meaningful long-term value. If we do not believe we can create real value, we will say so."
        />
        <OwnerTrustPanel />
      </section>

      <section className="section">
        <SectionIntro eyebrow="Principles" title="What guides the work." />
        <div className="card-grid three">
          {principles.map(([title, copy]) => (
            <div className="feature-card" key={title}>
              <h3>{title}</h3>
              <p>{copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section alt">
        <SectionIntro eyebrow="Growth system" title="Complete systems, not isolated services." />
        <SystemSnapshot compact />
        <GrowthSystem />
      </section>

      <CTA
        title="Ready to Build Something That Lasts?"
        copy="Let us discuss how a long-term digital partnership can help your business grow."
      />
    </main>
  );
}
