import type { Metadata } from "next";
import { LegalBrandPanel } from "@/components/page-visuals";
import { SectionIntro } from "@/components/sections";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy and data handling information for Framkant Nordic.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <main className="page">
      <section className="hero compact legal-hero">
        <div className="hero-copy">
          <p className="eyebrow">Legal</p>
          <h1>Privacy Policy</h1>
          <p>
            Framkant Nordic only collects the information needed to respond to inquiries,
            qualify opportunities, and improve the website with consent-based analytics.
          </p>
        </div>
        <LegalBrandPanel title="Privacy Policy" />
      </section>
      <section className="section alt">
        <SectionIntro
          eyebrow="Data use"
          title="Simple, necessary, and transparent."
          copy="Production deployment should connect this page to the final legal text, data processor list, retention rules, and consent management policy."
        />
      </section>
    </main>
  );
}
