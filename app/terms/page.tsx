import type { Metadata } from "next";
import { LegalBrandPanel } from "@/components/page-visuals";
import { SectionIntro } from "@/components/sections";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms and website information for Framkant Nordic.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <main className="page">
      <section className="hero compact legal-hero">
        <div className="hero-copy">
          <p className="eyebrow">Legal</p>
          <h1>Terms</h1>
          <p>
            This page is prepared for final business terms, website usage information, and
            client engagement notes.
          </p>
        </div>
        <LegalBrandPanel title="Terms" />
      </section>
      <section className="section alt">
        <SectionIntro
          eyebrow="Production note"
          title="Final legal copy should be reviewed before launch."
        />
      </section>
    </main>
  );
}
