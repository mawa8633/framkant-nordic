import type { Metadata } from "next";
import Image from "next/image";
import { SystemSnapshot } from "@/components/page-visuals";
import { ContactForm } from "@/components/contact-form";
import { CTA, SectionIntro } from "@/components/sections";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a free growth analysis with Framkant Nordic and identify the most valuable digital growth opportunities.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="page">
      <section className="hero compact hero-dark inner-page-hero contact-hero">
        <div className="hero-copy">
          <p className="eyebrow">Contact</p>
          <h1>
            Stop watching your competitors <span className="marker">win.</span>
          </h1>
          <p>
            Tell us where your digital system feels unclear. We will review your current
            presence, identify the strongest opportunities, and recommend the right
            starting point.
          </p>
        </div>
        <div className="contact-side">
          <div className="contact-brand-card">
            <Image
              src="/assets/logos/framkant-nordic-logo-transparent.png"
              alt="Framkant Nordic logo"
              width={72}
              height={72}
              priority
            />
            <div>
              <p className="mini-label">Direct owner-led review</p>
              <h2>Talk to the person responsible for the system.</h2>
            </div>
            <div className="owner-mini">
              <Image
                src="/assets/images/owner/framkant-owner-portrait.jpg"
                alt="Framkant Nordic owner"
                fill
                sizes="96px"
              />
            </div>
          </div>
          <div className="form-panel">
            <ContactForm />
          </div>
        </div>
      </section>
      <section className="section alt">
        <SectionIntro
          eyebrow="Qualification"
          title="We focus on businesses where the system can create real value."
          copy="If we do not believe Framkant Nordic is the right partner, we will say so clearly. That is part of being a trusted advisor."
        />
        <SystemSnapshot compact />
        <div className="card-grid three">
          <div className="stat-card">
            <h3>Email</h3>
            <p>hello@framkantnordic.com</p>
          </div>
          <div className="stat-card">
            <h3>Phone</h3>
            <p>+46 00 000 00 00</p>
          </div>
          <div className="stat-card">
            <h3>Business Hours</h3>
            <p>Monday-Friday, 09:00-17:00 CET</p>
          </div>
        </div>
        <div className="notice spaced">
          Calendar booking and CRM submission are ready for integration with the selected booking calendar and sales pipeline.
        </div>
      </section>
      <CTA copy="Prefer a direct conversation? Send the short form and we will guide the next step." />
    </main>
  );
}
