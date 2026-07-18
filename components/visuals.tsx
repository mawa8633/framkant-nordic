import {
  BarChart3,
  CalendarCheck,
  MessageSquareText,
  Search,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import type { CSSProperties } from "react";

const systemNodes = [
  { label: "Traffic", Icon: Search, className: "traffic" },
  { label: "Website", Icon: Workflow, className: "website" },
  { label: "CRM", Icon: MessageSquareText, className: "crm" },
  { label: "Reviews", Icon: ShieldCheck, className: "reviews" },
  { label: "Reporting", Icon: BarChart3, className: "reporting" },
  { label: "Follow-up", Icon: CalendarCheck, className: "followup" },
];

export function SystemMapVisual() {
  return (
    <div className="system-visual" aria-label="Connected Framkant Nordic growth system visual">
      <div className="system-grid" aria-hidden="true" />
      <span className="system-ring one" aria-hidden="true" />
      <span className="system-ring two" aria-hidden="true" />
      <div className="system-pin">
        <span>FN</span>
        <small>Growth hub</small>
      </div>
      <div className="system-line line-a" aria-hidden="true" />
      <div className="system-line line-b" aria-hidden="true" />
      <div className="system-line line-c" aria-hidden="true" />
      <div className="system-line line-d" aria-hidden="true" />
      {systemNodes.map(({ label, Icon, className }, index) => (
        <div className={`system-node ${className}`} key={label} style={{ "--delay": `${index * 0.18}s` } as CSSProperties}>
          <Icon size={17} />
          <span>{label}</span>
        </div>
      ))}
      <div className="system-note">
        <strong>One accountable system</strong>
        <span>Visibility, conversion, follow-up and proof connected.</span>
      </div>
    </div>
  );
}
