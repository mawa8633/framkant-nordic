import type { Metadata } from "next";
import { LegalBrandPanel } from "@/components/page-visuals";
import { SectionIntro } from "@/components/sections";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Cookie categories and consent rules for Framkant Nordic.",
  alternates: {
    canonical: "/cookies",
  },
};

export default function CookiesPage() {
  return (
    <main className="page">
      <section className="hero compact legal-hero">
        <div className="hero-copy">
          <p className="eyebrow">Legal</p>
          <h1>Cookie Policy</h1>
          <p>
            The site supports granular cookie categories: Necessary, Analytics, and
            Marketing. Optional tracking waits for explicit consent.
          </p>
        </div>
        <LegalBrandPanel title="Cookie Policy" />
      </section>
      <section className="section alt">
        <SectionIntro
          eyebrow="Consent categories"
          title="Necessary, Analytics, Marketing."
          copy="The implementation stores consent preferences locally and provides a clear integration point for analytics and marketing scripts."
        />
      </section>
    </main>
  );
}
