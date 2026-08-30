import type { Metadata } from "next";
import Link from "next/link";
import { Camera, Lock } from "lucide-react";
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
        email: site.contactEmail,
        sameAs: [site.githubUrl]
      },
      {
        "@type": "Person",
        name: site.editorialAuthor,
        url: site.url,
        sameAs: [site.githubUrl]
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
        author: {
          "@type": "Person",
          name: site.editorialAuthor,
          url: site.url
        },
        datePublished: site.publishedDate,
        dateModified: site.lastUpdated,
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
              <Link className="brand" href="/" title="Mirror Affirmations home">
                <span className="brand-mark" aria-hidden="true">M</span>
                <span className="brand-title">Mirror Affirmations</span>
              </Link>
              <div className="nav-links">
                <Link href="/demo" title="Open the private mirror practice demo">
                  <Camera size={16} aria-hidden="true" />
                  Demo
                </Link>
                <Link href="/mirror-affirmations" title="Read about mirror affirmations">Affirmations</Link>
                <Link href="/bedtime-affirmations" title="Read bedtime affirmations">Bedtime</Link>
                <Link href="/privacy" title="Read the privacy policy">
                  <Lock size={16} aria-hidden="true" />
                  Privacy
                </Link>
                <Link href="/about" title="About Mirror Affirmations">About</Link>
                <Link href="/waitlist" title="Join the Mirror Affirmations waitlist">Waitlist</Link>
              </div>
              <Link className="nav-cta" href="/demo" title="Start private mirror practice">
                Start practice
              </Link>
            </nav>
          </header>
          <main className="main">{children}</main>
          <footer className="site-footer">
            <div className="footer-inner">
              <div>
                <Link className="footer-brand" href="/" title="Mirror Affirmations home">
                  Mirror Affirmations
                </Link>
                <p>Mirror Affirmations is a self-care practice tool, not a medical or therapy service.</p>
              </div>
              <div className="footer-links">
                <Link href="/demo" title="Open the private mirror practice demo">Demo</Link>
                <Link href="/mirror-affirmations" title="Read about mirror affirmations">Mirror Affirmations</Link>
                <Link href="/selfie-affirmations" title="Read about selfie affirmations">Selfie Affirmations</Link>
                <Link href="/morning-affirmations-to-say-out-loud" title="Read morning affirmations to say out loud">Morning Affirmations</Link>
                <Link href="/bedtime-affirmations" title="Read bedtime affirmations">Bedtime</Link>
                <Link href="/sleep-affirmations-for-a-calmer-evening" title="Read sleep affirmations for a calmer evening">Sleep Affirmations</Link>
                <Link href="/how-mirror-affirmations-work" title="Read how Mirror Affirmations works">How It Works</Link>
                <Link href="/positive-self-talk" title="Read about positive self-talk">Positive Self-Talk</Link>
                <Link href="/affirmations-to-say-to-yourself-in-the-mirror" title="Read 25 affirmations to say to yourself in the mirror">25 Mirror Affirmations</Link>
                <Link href="/about" title="About Mirror Affirmations">About</Link>
                <Link href="/contact" title="Contact Mirror Affirmations">Contact</Link>
                <Link href="/waitlist" title="Join the Mirror Affirmations waitlist">Waitlist</Link>
                <Link href="/privacy" title="Read the privacy policy">Privacy</Link>
                <Link href="/terms" title="Read the terms of use">Terms</Link>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
