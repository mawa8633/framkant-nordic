import type { Metadata } from "next";
import { CookieConsent } from "@/components/cookie-consent";
import { LocalBusinessJsonLd, OrganizationJsonLd, WebsiteJsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/lib/content";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Framkant Nordic",
    template: "%s | Framkant Nordic",
  },
  description:
    "Framkant Nordic builds structured digital growth systems for long-term business growth.",
  metadataBase: new URL(site.url),
  icons: {
    icon: [
      { url: "/assets/icons/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/assets/icons/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/assets/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: "Framkant Nordic",
    description:
      "Structured digital growth systems for long-term business growth.",
    url: site.url,
    siteName: site.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Framkant Nordic",
    description:
      "Structured digital growth systems for long-term business growth.",
  },
  other: {
    "x-deploy-commit": process.env.VERCEL_GIT_COMMIT_SHA ?? "local",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <OrganizationJsonLd />
        <LocalBusinessJsonLd />
        <WebsiteJsonLd />
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <SiteHeader />
        <div id="main-content">{children}</div>
        <SiteFooter />
        <CookieConsent />
      </body>
    </html>
  );
}
