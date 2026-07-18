import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { FAQJsonLd, ServiceJsonLd } from "@/components/json-ld";
import { InnerHeroVisual, OwnerTrustPanel, SystemSnapshot } from "@/components/page-visuals";
import { CaseStudyCard, CTA, FAQ, SectionIntro, ServiceGrid, WhyFramkant } from "@/components/sections";
import { caseStudies, faq, services } from "@/lib/content";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.description,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();
  const related = services.filter((item) => item.slug !== service.slug).slice(0, 4);
  const businessCase =
    caseStudies.find((item) => item.services.includes(service.title)) ?? caseStudies[0];

  return (
    <main className="page">
      <section className="hero compact hero-dark inner-page-hero">
        <div className="hero-copy">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: service.title, href: `/services/${service.slug}` }]} />
          <ServiceJsonLd name={service.title} description={service.description} url={`/services/${service.slug}`} />
          <FAQJsonLd items={faq} />
          <p className="eyebrow">Service</p>
          <h1>
            {service.title} that fits the <span className="marker">system.</span>
          </h1>
          <p>{service.description}</p>
          <div className="actions">
            <Link className="button primary" href="/contact">
              Book a Free Growth Analysis
            </Link>
          </div>
        </div>
        <InnerHeroVisual image="dashboard" label={`${service.title} inside the system`} />
      </section>

      <section className="section alt">
        <div className="split">
          <SectionIntro
            eyebrow="The problem"
            title={`Without ${service.title}`}
            copy="The visitor should recognize the commercial problem before the technical solution is introduced."
          />
          <div className="card-grid two">
            {service.problems.map((problem) => (
              <div className="feature-card" key={problem}>
                <h3>{problem}</h3>
                <p>This creates friction in the customer journey and makes growth harder to manage.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <SectionIntro
          eyebrow="Our solution"
          title="Built around business outcomes."
          copy="The implementation focuses on the role this service plays inside the wider growth system."
        />
        <SystemSnapshot compact />
        <div className="card-grid three">
          {service.solutions.map((solution) => (
            <div className="feature-card" key={solution}>
              <h3>{solution}</h3>
              <p>Designed to connect with the rest of the digital ecosystem.</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section alt">
        <SectionIntro eyebrow="What's included" title="A consistent feature structure." />
        <div className="card-grid three">
          {service.included.map((item) => (
            <div className="stat-card" key={item}>
              <h3>{item}</h3>
              <p>Configured as part of the reusable service template.</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <SectionIntro eyebrow="Business case" title="Proof connected to this service." />
        <CaseStudyCard item={businessCase} featured />
      </section>

      <section className="section alt">
        <SectionIntro eyebrow="Why Framkant Nordic" title="One partner for the full system." />
        <OwnerTrustPanel />
        <WhyFramkant />
      </section>

      <section className="section">
        <SectionIntro eyebrow="FAQ" title={`${service.title} questions.`} />
        <FAQ items={faq} />
      </section>

      <section className="section alt">
        <SectionIntro eyebrow="Related services" title="Complementary parts of the system." />
        <ServiceGrid items={related} />
      </section>

      <CTA copy={`Let's discuss how ${service.title} fits into your digital growth strategy.`} />
    </main>
  );
}
