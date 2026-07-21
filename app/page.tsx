import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import {
  ArticleGrid,
  CaseStudyCard,
  CTA,
  IndustryGrid,
  SectionIntro,
  ServiceGrid,
} from "@/components/sections";
import { TrustCarousel } from "@/components/trust-carousel";
import { articles, caseStudies, industries, principles, services } from "@/lib/content";

const process = ["Discovery", "Strategy", "Implementation", "Optimization", "Long-Term Partnership"];

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  const featuredCase = caseStudies.find((item) => item.featured) ?? caseStudies[0];

  return (
    <main className="page">
      <section className="hero hero-dark">
        <div className="hero-copy">
          <p className="eyebrow">Digital growth systems for selected industries</p>
          <h1>
            Your growth system should feel <span className="marker">wide open.</span>
          </h1>
          <p>
            Framkant Nordic takes responsibility for the digital systems behind long-term
            business growth. Website, visibility, CRM, automation, customer follow-up,
            reviews, and reporting all work together instead of fighting for attention.
          </p>
          <div className="actions">
            <Link className="button primary" href="/contact">
              Book a Free Growth Analysis
              <ArrowRight size={18} />
            </Link>
            <Link className="button secondary" href="/services">
              Explore Our Growth System
            </Link>
          </div>
        </div>
        <div className="hero-board hero-board-simple" aria-label="Free growth analysis form">
          <div className="form-panel hero-form">
            <h2>Free Growth Analysis</h2>
            <p>Start with a simple review of your digital presence.</p>
            <ContactForm variant="compact" />
          </div>
        </div>
      </section>

      <TrustCarousel />

      <section className="section dark">
        <SectionIntro
          eyebrow="The complete system"
          title="Not isolated services. One connected growth engine."
          copy="Every service supports a specific part of the customer journey, so traffic, conversion, follow-up, and retention work together."
        />
        <ServiceGrid items={services} />
      </section>

      <section className="section">
        <div className="split">
          <SectionIntro
            eyebrow="How we work"
            title="Your first 90 days, built in a clear rhythm."
            copy="The process is designed to reduce complexity for business owners while keeping every important decision structured, visible, and measurable."
          />
          <div className="process-stack">
            <div className="story-image tall">
              <Image
                src="/assets/images/analytics-tablet.jpg"
                alt="Analytics dashboard reviewed during a digital growth planning session"
                fill
                sizes="(max-width: 1060px) 100vw, 46vw"
              />
              <span>Planning with real numbers</span>
            </div>
            <div className="process-list">
              {process.map((item) => (
                <div className="process-card" key={item}>
                  <h3>{item}</h3>
                  <p>
                    A focused stage that moves the digital ecosystem from understanding to
                    implementation, then into continuous improvement.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section image-band">
        <div className="image-band-copy">
          <p className="eyebrow">Personalized execution</p>
          <h2>Built for the businesses your customers actually meet.</h2>
          <p>
            The work is shaped around real service environments, real conversations, and
            the follow-up systems that turn attention into booked revenue.
          </p>
        </div>
        <div className="image-band-grid">
          <div className="story-image">
            <Image
              src="/assets/images/salon-payment.jpg"
              alt="Beauty salon customer payment and booking moment"
              fill
              sizes="(max-width: 700px) 100vw, 36vw"
            />
            <span>Beauty booking moments</span>
          </div>
          <div className="story-image">
            <Image
              src="/assets/images/office-cleaning.jpg"
              alt="Office cleaning service team at work"
              fill
              sizes="(max-width: 700px) 100vw, 36vw"
            />
            <span>Cleaning service trust</span>
          </div>
        </div>
      </section>

      <section className="section visual-section">
        <SectionIntro
          eyebrow="Selected industries"
          title="Markets taken. Trust built."
          copy="The first version focuses on beauty, cleaning, and future high-value service industries where structured follow-up creates meaningful value."
        />
        <IndustryGrid items={industries} />
      </section>

      <section className="section dark">
        <SectionIntro
          eyebrow="Proof"
          title="They give reports. We build a system."
          copy="Case studies are structured around challenges, reasoning, implementation, and verified outcomes. No invented metrics."
        />
        <CaseStudyCard item={featuredCase} featured />
      </section>

      <section className="section visual-section">
        <SectionIntro
          eyebrow="Comparison"
          title="Framkant Nordic vs. everyone else."
          copy="The difference is not louder marketing. It is ownership, structure, and a system that keeps improving after launch."
        />
        <div className="comparison-grid">
          <div className="comparison-card muted-card">
            <p className="mini-label">Generic agency</p>
            <ul>
              <li>One-off website project</li>
              <li>Disconnected tools</li>
              <li>Reporting without ownership</li>
              <li>Short-term campaigns</li>
              <li>Client coordinates suppliers</li>
            </ul>
          </div>
          <div className="comparison-card highlight-card">
            <p className="mini-label">Framkant Nordic</p>
            <ul>
              <li>Complete growth system</li>
              <li>Website, CRM, automation, and visibility connected</li>
              <li>Continuous optimization</li>
              <li>Long-term responsibility</li>
              <li>One partner for the customer journey</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="report-panel">
          <div>
            <p className="eyebrow">Reporting rhythm</p>
            <h2>Before you get another report, get a system.</h2>
            <p>
              Clear reporting matters, but reports alone do not create growth. Framkant
              Nordic connects the work, the numbers, and the next actions into one
              improvement rhythm.
            </p>
          </div>
          <div className="report-visual-stack">
            <div className="story-image report-image">
              <Image
                src="/assets/images/marketing-dashboard.jpg"
                alt="Marketing dashboard showing growth and performance data"
                fill
                sizes="(max-width: 1060px) 100vw, 42vw"
              />
              <span>Dashboard to action</span>
            </div>
            <div className="report-card">
              {["Traffic quality", "Conversion path", "Lead follow-up", "Review flow"].map((item, index) => (
                <div className="report-row" key={item}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{item}</strong>
                  <em>Tracked</em>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section alt">
        <SectionIntro
          eyebrow="Principles"
          title="The standards behind every partnership."
        />
        <div className="card-grid three">
          {principles.map(([title, copy]) => (
            <div className="feature-card" key={title}>
              <CheckCircle2 className="card-icon" size={24} />
              <h3>{title}</h3>
              <p>{copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section visual-section">
        <SectionIntro
          eyebrow="Knowledge center"
          title="A content platform built to educate, rank, and convert."
        />
        <ArticleGrid items={articles} />
      </section>

      <CTA copy="Let us review your current digital presence, identify the strongest opportunities, and recommend the right starting point." />
    </main>
  );
}
