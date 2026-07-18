import Link from "next/link";
import Image from "next/image";
import type { Route } from "next";
import { ArrowRight } from "lucide-react";
import { navigation, services, site } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-cta">
        <div>
          <p className="eyebrow">Long-term growth partner</p>
          <h2>Ready to build something that lasts?</h2>
          <p>
            Let us review your digital presence and identify the most valuable
            opportunities for growth.
          </p>
        </div>
        <Link className="button primary" href={site.ctaHref as Route}>
          {site.ctaLabel}
          <ArrowRight size={18} />
        </Link>
      </div>
      <div className="footer-grid">
        <div>
          <Link className="brand footer-brand" href="/">
            <span className="brand-mark">
              <Image
                src="/assets/logos/framkant-nordic-logo-transparent.png"
                alt=""
                width={36}
                height={36}
              />
            </span>
            <span>{site.name}</span>
          </Link>
          <p>{site.footerStatement}</p>
        </div>
        <div>
          <h3>Explore</h3>
          {navigation.slice(0, 5).map((item) => (
            <Link href={item.href as Route} key={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
        <div>
          <h3>Services</h3>
          {services.slice(0, 5).map((service) => (
            <Link href={`/services/${service.slug}` as Route} key={service.slug}>
              {service.title}
            </Link>
          ))}
        </div>
        <div>
          <h3>Contact</h3>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <a href={`tel:${site.phone.replaceAll(" ", "")}`}>{site.phone}</a>
          <p>{site.businessHours}</p>
          <p>{site.address}</p>
        </div>
        <div>
          <h3>Legal</h3>
          <Link href={"/privacy" as Route}>Privacy Policy</Link>
          <Link href={"/cookies" as Route}>Cookie Policy</Link>
          <Link href={"/terms" as Route}>Terms</Link>
          <p>{site.registeredName}</p>
          <p>{site.organizationNumber}</p>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Framkant Nordic.</span>
        <span>Built for performance, accessibility, and long-term SEO.</span>
      </div>
    </footer>
  );
}
