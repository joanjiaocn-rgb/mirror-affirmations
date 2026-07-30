import type { Metadata } from "next";
import Link from "next/link";
import { Camera, Heart, Lock } from "lucide-react";
import { Analytics } from "@/components/Analytics";
import { absoluteUrl, site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Mirror Affirmations | Private Self-Talk Practice",
    template: "%s | Mirror Affirmations"
  },
  description: site.description,
  metadataBase: new URL(site.url),
  applicationName: site.name,
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Mirror Affirmations | Private Self-Talk Practice",
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: "website"
  },
  twitter: {
    card: "summary",
    title: "Mirror Affirmations | Private Self-Talk Practice",
    description: site.description
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const siteJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: site.name,
        url: site.url,
        email: site.contactEmail
      },
      {
        "@type": "WebSite",
        name: site.name,
        url: site.url,
        description: site.description
      },
      {
        "@type": "WebApplication",
        name: site.name,
        applicationCategory: "LifestyleApplication",
        operatingSystem: "Any",
        url: absoluteUrl("/demo"),
        description: site.description,
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD"
        }
      }
    ]
  };

  return (
    <html lang="en">
      <body>
        <Analytics />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }} />
        <div className="site-shell">
          <header className="site-header">
            <nav className="nav" aria-label="Main navigation">
              <Link className="brand" href="/">
                <span className="brand-mark">
                  <Heart size={18} aria-hidden="true" />
                </span>
                <span className="brand-title">Mirror Affirmations</span>
              </Link>
              <div className="nav-links">
                <Link href="/demo">
                  <Camera size={16} aria-hidden="true" />
                  Demo
                </Link>
                <Link href="/mirror-affirmations">Affirmations</Link>
                <Link href="/bedtime-affirmations">Bedtime</Link>
                <Link href="/privacy">
                  <Lock size={16} aria-hidden="true" />
                  Privacy
                </Link>
                <Link href="/waitlist">Waitlist</Link>
              </div>
              <Link className="nav-cta" href="/demo">
                Start practice
              </Link>
            </nav>
          </header>
          <main className="main">{children}</main>
          <footer className="site-footer">
            <div className="footer-inner">
              <div>
                <Link className="footer-brand" href="/">
                  Mirror Affirmations
                </Link>
                <p>Mirror Affirmations is a self-care practice tool, not a medical or therapy service.</p>
              </div>
              <div className="footer-links">
                <Link href="/demo">Demo</Link>
                <Link href="/mirror-affirmations">Mirror Affirmations</Link>
                <Link href="/selfie-affirmations">Selfie Affirmations</Link>
                <Link href="/bedtime-affirmations">Bedtime</Link>
                <Link href="/positive-self-talk">Positive Self-Talk</Link>
                <Link href="/waitlist">Waitlist</Link>
                <Link href="/privacy">Privacy</Link>
                <Link href="/terms">Terms</Link>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
