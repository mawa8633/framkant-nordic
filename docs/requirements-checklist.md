# Framkant Nordic Requirements Checklist

This checklist maps the PDF instruction folder to the current implementation.

## Implemented In Code

- Global design system: colors, typography scale, spacing, cards, buttons, forms, icons.
- Header/navigation: sticky header, desktop dropdowns, mobile accessible menu, primary CTA.
- Footer: brand statement, navigation, services, contact details, CTA, legal links.
- Home/Landing: hero, CTA, growth system, services, industries, process, proof, principles, resources.
- About: brand/philosophy sections, mission, values, principles, growth system, final CTA.
- Services: overview template, all launch service cards, reusable service detail pages.
- Service details: problem, solution, included features, growth system highlight, business case, why Framkant Nordic, FAQ, related services, final CTA.
- Industries: overview template, reusable industry detail pages, business types, challenges, solutions, featured case, related services, why Framkant Nordic, FAQ.
- Case studies: archive, featured case, filters, individual case template, services used, testimonial slot, proof gallery slots, related cases.
- Resources: knowledge center archive, category chips, SEO strategy sections, and reusable article template.
- Contact: required fields, qualification questions, contact options, business hours, CRM/calendar integration placeholder.
- Contact API: validates required lead fields and provides a CRM/email/booking integration handoff point.
- CMS-ready structure: local structured content models for services, industries, cases, resources, FAQs, testimonials-ready data.
- Technical SEO: clean URLs, redirects from Swedish sitemap aliases, metadata, canonical tags, manifest, sitemap, robots, Organization, WebSite, LocalBusiness, Breadcrumb, Service, Article, FAQ schema.
- Responsive: desktop/tablet/mobile grids, mobile single-column layouts, touch-friendly buttons/forms.
- Cookie consent: Necessary, Analytics, Marketing categories with consent storage.
- Accessibility: semantic landmarks, labels, keyboard focus states, accessible forms and accordions.
- Motion: restrained hover/fade transitions with reduced-motion support.
- Security headers: frame, content-type, referrer, and permissions-policy headers configured in Next.js.
- Image optimization: Next.js configured for AVIF/WebP output; real approved imagery still needs to be supplied.

## External Or Final-Content Items Required Before Production

- Final approved brand logo files.
- Authentic client photography, screenshots, approved testimonials, and real case metrics.
- Final legal privacy/cookie/terms copy.
- Live CRM, form endpoint, spam protection, and booking calendar URL.
- Live analytics IDs, Search Console, uptime monitoring, and JavaScript error logging.
- Hosting, HTTPS, secure headers, backups, staging, and production deployment setup.
- Final cross-browser/device QA and Lighthouse/PageSpeed audit in the production environment.
