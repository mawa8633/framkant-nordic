import Image from "next/image";
import { BarChart3, CheckCircle2, FileText, ShieldCheck, Workflow } from "lucide-react";

const visualImages = {
  analytics: "/assets/images/analytics-tablet.jpg",
  dashboard: "/assets/images/marketing-dashboard.jpg",
  cleaning: "/assets/images/office-cleaning.jpg",
  salon: "/assets/images/salon-work.jpg",
  owner: "/assets/images/owner/framkant-owner-portrait-premium.jpg",
  logo: "/assets/logos/framkant-nordic-logo-transparent.png",
};

export function InnerHeroVisual({
  image = "dashboard",
  label = "Connected growth system",
}: {
  image?: keyof typeof visualImages;
  label?: string;
}) {
  return (
    <div className="inner-hero-visual" aria-label={label}>
      <div className={image === "owner" ? "inner-hero-photo portrait" : "inner-hero-photo"}>
        <Image
          src={visualImages[image]}
          alt=""
          fill
          sizes="(max-width: 1060px) 100vw, 38vw"
          quality={95}
          priority
        />
        <span>{label}</span>
      </div>
      <div className="system-mini-card">
        <Image src={visualImages.logo} alt="" width={42} height={42} />
        <div>
          <strong>Framkant Nordic</strong>
          <small>Website + CRM + visibility + follow-up</small>
        </div>
      </div>
    </div>
  );
}

export function OwnerTrustPanel() {
  return (
    <div className="owner-trust-panel">
      <div className="owner-trust-photo">
        <Image
          src={visualImages.owner}
          alt="Framkant Nordic owner"
          fill
          quality={95}
          sizes="(max-width: 700px) 100vw, 280px"
        />
      </div>
      <div>
        <p className="mini-label">Owner-led responsibility</p>
        <h3>Direct accountability behind every system.</h3>
        <p>The relationship is designed to feel clear, personal, and long-term.</p>
      </div>
    </div>
  );
}

export function SystemSnapshot({ compact = false }: { compact?: boolean }) {
  const items = [
    ["Visibility", BarChart3],
    ["Conversion", Workflow],
    ["Follow-up", CheckCircle2],
    ["Proof", ShieldCheck],
  ] as const;

  return (
    <div className={compact ? "system-snapshot compact" : "system-snapshot"}>
      {items.map(([label, Icon]) => (
        <div className="snapshot-node" key={label}>
          <Icon size={18} />
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}

export function LegalBrandPanel({ title }: { title: string }) {
  return (
    <div className="legal-brand-panel">
      <Image src={visualImages.logo} alt="Framkant Nordic logo" width={72} height={72} />
      <div>
        <p className="mini-label">Framkant Nordic</p>
        <h2>{title}</h2>
        <p>Prepared for production review with clear ownership and transparent policies.</p>
      </div>
      <FileText size={28} />
    </div>
  );
}
