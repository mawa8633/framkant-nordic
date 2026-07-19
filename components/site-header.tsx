import Link from "next/link";
import Image from "next/image";
import type { Route } from "next";
import { ArrowRight, Menu } from "lucide-react";
import { industries, navigation, services, site } from "@/lib/content";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Framkant Nordic home">
        <span className="brand-mark">
          <Image
            src="/assets/logos/framkant-nordic-logo-transparent.png"
            alt=""
            width={72}
            height={72}
            priority
          />
        </span>
      </Link>
      <input className="nav-toggle" id="nav-toggle" type="checkbox" aria-label="Toggle navigation" />
      <label
        className="icon-button mobile-menu"
        htmlFor="nav-toggle"
        aria-label="Open navigation"
        role="button"
        tabIndex={0}
      >
        <Menu size={22} />
      </label>
      <nav className="main-nav" aria-label="Main navigation">
        <div className="nav-group">
          <Link href="/industries">Industries</Link>
          <div className="nav-dropdown">
            {industries.map((industry) => (
              <Link href={`/industries/${industry.slug}` as Route} key={industry.slug}>
                {industry.title}
              </Link>
            ))}
            {["Construction", "Landscaping", "Dental Clinics", "Accounting"].map((item) => (
              <span key={item}>{item} - Coming Soon</span>
            ))}
          </div>
        </div>
        <div className="nav-group">
          <Link href="/services">Services</Link>
          <div className="nav-dropdown">
            {services.map((service) => (
              <Link href={`/services/${service.slug}` as Route} key={service.slug}>
                {service.title}
              </Link>
            ))}
          </div>
        </div>
        {navigation
          .filter((item) => !["/industries", "/services"].includes(item.href))
          .map((item) => (
            <Link href={item.href as Route} key={item.href}>
              {item.label}
            </Link>
          ))}
      </nav>
      <Link className="header-cta" href={site.ctaHref as Route}>
        {site.ctaLabel}
        <ArrowRight size={16} />
      </Link>
    </header>
  );
}
