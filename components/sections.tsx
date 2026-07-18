import Link from "next/link";
import Image from "next/image";
import type { Route } from "next";
import {
  ArrowRight,
  BarChart3,
  Bot,
  Building2,
  Check,
  FileText,
  Gauge,
  LineChart,
  MessageSquare,
  MousePointerClick,
  Search,
  Sparkles,
  Star,
  Workflow,
} from "lucide-react";
import type { Article, CaseStudy, Industry, Service } from "@/lib/content";
import { growthSteps, whyFramkant } from "@/lib/content";

const serviceIcons = [
  MousePointerClick,
  Search,
  Workflow,
  MessageSquare,
  Bot,
  Gauge,
  Sparkles,
  Star,
  BarChart3,
];

const industryImages: Record<string, { src: string; alt: string }> = {
  beauty: {
    src: "/assets/images/salon-work.jpg",
    alt: "Beauty salon professional working with a customer",
  },
  cleaning: {
    src: "/assets/images/office-cleaning.jpg",
    alt: "Professional office cleaning service in progress",
  },
  "future-industries": {
    src: "/assets/images/analytics-tablet.jpg",
    alt: "Business analytics dashboard used for future industry planning",
  },
};

const articleImages: Record<string, { src: string; alt: string }> = {
  "how-local-seo-works": {
    src: "/assets/images/marketing-dashboard.jpg",
    alt: "Marketing dashboard used to review local SEO performance",
  },
  "website-launch-checklist": {
    src: "/assets/images/analytics-tablet.jpg",
    alt: "Digital checklist and analytics workspace",
  },
  "digital-marketing-for-beauty-salons": {
    src: "/assets/images/salon-payment.jpg",
    alt: "Beauty salon customer booking and payment touchpoint",
  },
};

const galleryImages = [
  "/assets/images/marketing-dashboard.jpg",
  "/assets/images/analytics-tablet.jpg",
  "/assets/logos/framkant-nordic-logo-transparent.png",
];

export function SectionIntro({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
}) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {copy ? <p>{copy}</p> : null}
    </div>
  );
}

export function GrowthSystem({ active }: { active?: string }) {
  return (
    <div className="growth-system" aria-label="Framkant Nordic growth system">
      {growthSteps.map((step, index) => (
        <div className={step === active ? "growth-node active" : "growth-node"} key={step}>
          <span>{index + 1}</span>
          <strong>{step}</strong>
        </div>
      ))}
    </div>
  );
}

export function ServiceGrid({ items }: { items: Service[] }) {
  return (
    <div className="card-grid three">
      {items.map((service, index) => {
        const Icon = serviceIcons[index % serviceIcons.length];
        return (
          <Link className="feature-card clickable" href={`/services/${service.slug}` as Route} key={service.slug}>
            <span className="icon-tile" aria-hidden="true">
              <Icon className="card-icon" size={24} />
            </span>
            <span className="card-connector" aria-hidden="true" />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <ul className="clean-list">
              {service.benefits.map((benefit) => (
                <li key={benefit}>
                  <Check size={16} />
                  {benefit}
                </li>
              ))}
            </ul>
            <span className="text-link">
              Learn More
              <ArrowRight size={16} />
            </span>
          </Link>
        );
      })}
    </div>
  );
}

export function IndustryGrid({ items }: { items: Industry[] }) {
  return (
    <div className="card-grid three">
      {items.map((industry) => (
        <Link className="feature-card clickable" href={`/industries/${industry.slug}` as Route} key={industry.slug}>
          <span className="industry-photo" aria-hidden="true">
            <Image
              src={industryImages[industry.slug]?.src ?? "/assets/images/analytics-tablet.jpg"}
              alt={industryImages[industry.slug]?.alt ?? ""}
              fill
              sizes="(max-width: 700px) 100vw, 30vw"
            />
            <span className="photo-badge">
              <Building2 size={18} />
            </span>
          </span>
          <p className="mini-label">{industry.eyebrow}</p>
          <h3>{industry.title}</h3>
          <p>{industry.description}</p>
          <span className="text-link">
            View Industry
            <ArrowRight size={16} />
          </span>
        </Link>
      ))}
    </div>
  );
}

export function CaseStudyCard({ item, featured = false }: { item: CaseStudy; featured?: boolean }) {
  return (
    <Link className={featured ? "case-card featured clickable" : "case-card clickable"} href={`/case-studies/${item.slug}` as Route}>
      <div className="proof-visual" aria-hidden="true">
        {featured ? (
          <Image
            src="/assets/images/marketing-dashboard.jpg"
            alt=""
            fill
            sizes="(max-width: 700px) 100vw, 34vw"
          />
        ) : (
          <LineChart size={28} />
        )}
        <span className="photo-badge proof-badge">
          <LineChart size={18} />
        </span>
        <span className="proof-bar one" />
        <span className="proof-bar two" />
        <span className="proof-bar three" />
      </div>
      <div>
        <p className="mini-label">{item.industry}</p>
        <h3>{item.client}</h3>
        <p>{item.headline}</p>
        <ul className="metric-list">
          {item.outcomes.map((outcome) => (
            <li key={outcome}>{outcome}</li>
          ))}
        </ul>
        <span className="text-link">
          View Case Study
          <ArrowRight size={16} />
        </span>
      </div>
    </Link>
  );
}

export function ArticleGrid({ items }: { items: Article[] }) {
  return (
    <div className="card-grid three">
      {items.map((article) => (
        <Link className="article-card clickable" href={`/resources/${article.slug}` as Route} key={article.slug}>
          <span className="article-photo" aria-hidden="true">
            <Image
              src={articleImages[article.slug]?.src ?? "/assets/images/analytics-tablet.jpg"}
              alt={articleImages[article.slug]?.alt ?? ""}
              fill
              sizes="(max-width: 700px) 100vw, 30vw"
            />
          </span>
          <p className="mini-label">{article.category}</p>
          <h3>{article.title}</h3>
          <p>{article.excerpt}</p>
          <span className="read-time">{article.readTime}</span>
        </Link>
      ))}
    </div>
  );
}

export function FAQ({ items }: { items: { question: string; answer: string }[] }) {
  return (
    <div className="faq-list">
      {items.map((item) => (
        <details key={item.question}>
          <summary>{item.question}</summary>
          <p>{item.answer}</p>
        </details>
      ))}
    </div>
  );
}

export function WhyFramkant() {
  return (
    <div className="card-grid four">
      {whyFramkant.map(([title, copy]) => (
        <div className="feature-card" key={title}>
          <Check className="card-icon" size={24} />
          <h3>{title}</h3>
          <p>{copy}</p>
        </div>
      ))}
    </div>
  );
}

export function Testimonial({
  quote,
  name,
  role,
}: {
  quote: string;
  name: string;
  role: string;
}) {
  return (
    <figure className="testimonial-card">
      <blockquote>{quote}</blockquote>
      <figcaption>
        <strong>{name}</strong>
        <span>{role}</span>
      </figcaption>
    </figure>
  );
}

export function AssetGallery({ items }: { items: string[] }) {
  return (
    <div className="card-grid three">
      {items.map((item, index) => (
        <div className="asset-card" key={item}>
          <span className="asset-preview" aria-hidden="true">
            <Image
              src={galleryImages[index % galleryImages.length]}
              alt=""
              fill
              sizes="(max-width: 700px) 100vw, 30vw"
            />
          </span>
          <FileText size={26} />
          <h3>{item}</h3>
          <p>Approved authentic asset slot for screenshots, dashboards, workflows, or client proof.</p>
        </div>
      ))}
    </div>
  );
}

export function CTA({ title = "Ready to Grow Your Business?", copy }: { title?: string; copy: string }) {
  return (
    <section className="cta-band">
      <span className="cta-logo" aria-hidden="true">
        <Image
          src="/assets/logos/framkant-nordic-logo-transparent.png"
          alt=""
          width={48}
          height={48}
        />
      </span>
      <div>
        <p className="eyebrow">Free Growth Analysis</p>
        <h2>{title}</h2>
        <p>{copy}</p>
      </div>
      <Link className="button primary" href={"/contact" as Route}>
        Book a Free Growth Analysis
        <ArrowRight size={18} />
      </Link>
    </section>
  );
}
