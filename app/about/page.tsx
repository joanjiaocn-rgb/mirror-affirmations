import type { Metadata } from "next";
import Link from "next/link";
import { Camera, Mail } from "lucide-react";
import { absoluteUrl, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn what Mirror Affirmations is, who it is for, and how the private no-recording mirror practice demo works.",
  alternates: {
    canonical: "/about"
  },
  openGraph: {
    title: "About",
    description:
      "Learn what Mirror Affirmations is, who it is for, and how the private no-recording mirror practice demo works.",
    url: absoluteUrl("/about"),
    type: "website",
    siteName: site.name
  }
};

export default function AboutPage() {
  const aboutJsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Mirror Affirmations",
    url: absoluteUrl("/about"),
    description: metadata.description,
    author: {
      "@type": "Person",
      name: site.editorialAuthor,
      url: site.url
    },
    datePublished: site.publishedDate,
    dateModified: site.lastUpdated
  };

  return (
    <article className="article-page legal-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }} />
      <div className="breadcrumb">
        <Link href="/" title="Mirror Affirmations home">
          Home
        </Link>{" "}
        / About
      </div>
      <p className="eyebrow">About</p>
      <h1>About Mirror Affirmations</h1>
      <p className="article-intro">
        Mirror Affirmations is a privacy-first self-care site for practicing short, gentle self-talk prompts with an
        optional live camera preview. The current web demo is no-recording and account-free.
      </p>

      <section>
        <h2>Who is this for?</h2>
        <p>
          This site is for people who want a small private practice before bed, before work, after a difficult moment,
          or when their inner voice feels too sharp. It is intentionally quiet: no social feed, no public profile, and
          no saved video in the web demo.
        </p>
      </section>

      <section>
        <h2>What does the demo do?</h2>
        <ul className="check-list">
          <li>Shows short first-person prompts on screen.</li>
          <li>Uses your camera only for live browser preview if you turn it on.</li>
          <li>Lets you practice without creating an account.</li>
          <li>Does not record, save, or upload video, audio, camera frames, or face data.</li>
        </ul>
      </section>

      <section>
        <h2>What should this not replace?</h2>
        <p>
          Mirror Affirmations is not medical advice, therapy, diagnosis, crisis care, or emergency support. If you feel
          unsafe or need urgent help, contact local emergency services or a qualified support line in your country.
        </p>
      </section>

      <div className="article-cta">
        <Link className="primary-button" href="/demo" title="Open the private mirror practice demo">
          <Camera size={17} aria-hidden="true" />
          Try the demo
        </Link>
        <Link className="secondary-button" href="/contact" title="Contact Mirror Affirmations">
          <Mail size={17} aria-hidden="true" />
          Contact
        </Link>
      </div>
    </article>
  );
}
