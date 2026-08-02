import type { Metadata } from "next";
import Link from "next/link";
import { Mail } from "lucide-react";
import { absoluteUrl, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Mirror Affirmations",
  description:
    "Contact Mirror Affirmations for privacy questions, product feedback, waitlist questions, or corrections to self-care content.",
  alternates: {
    canonical: "/contact"
  },
  openGraph: {
    title: "Contact Mirror Affirmations",
    description:
      "Contact Mirror Affirmations for privacy questions, product feedback, waitlist questions, or corrections to self-care content.",
    url: absoluteUrl("/contact"),
    type: "website",
    siteName: site.name
  }
};

export default function ContactPage() {
  const contactJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Mirror Affirmations",
    url: absoluteUrl("/contact"),
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }} />
      <div className="breadcrumb">
        <Link href="/" title="Mirror Affirmations home">
          Home
        </Link>{" "}
        / Contact
      </div>
      <p className="eyebrow">Contact</p>
      <h1>Contact Mirror Affirmations</h1>
      <p className="article-intro">
        Have a privacy question, product suggestion, content correction, or waitlist question? Send a short note.
      </p>

      <a className="contact-card-link" href={`mailto:${site.contactEmail}`} title="Email Mirror Affirmations support">
        <Mail size={18} aria-hidden="true" />
        {site.contactEmail}
      </a>

      <section>
        <h2>What to include</h2>
        <ul className="check-list">
          <li>The page or feature you are asking about.</li>
          <li>What felt unclear, broken, or concerning.</li>
          <li>Whether your question is about privacy, waitlist signup, prompts, or product direction.</li>
        </ul>
      </section>

      <section>
        <h2>Medical and crisis note</h2>
        <p>
          Mirror Affirmations cannot provide therapy, diagnosis, medical advice, or crisis support. If you may hurt
          yourself or someone else, contact emergency services or a crisis line right away.
        </p>
      </section>
    </article>
  );
}
