import type { Metadata } from "next";
import Link from "next/link";
import { absoluteUrl, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms | Mirror Affirmations",
  description: "Basic terms for using the Mirror Affirmations private mirror practice demo and waitlist.",
  alternates: {
    canonical: "/terms"
  },
  openGraph: {
    title: "Terms | Mirror Affirmations",
    description: "Basic terms for using the Mirror Affirmations private mirror practice demo and waitlist.",
    url: absoluteUrl("/terms"),
    type: "website",
    siteName: site.name
  }
};

export default function TermsPage() {
  return (
    <article className="article-page legal-page">
      <div className="breadcrumb">
        <Link href="/" title="Mirror Affirmations home">
          Home
        </Link>{" "}
        / Terms
      </div>
      <h1>Terms</h1>
      <p className="article-intro">
        Mirror Affirmations provides a simple self-care practice demo and product waitlist. By using the site, you agree
        to use it for personal reflection only.
      </p>

      <section>
        <h2>No medical service</h2>
        <p>The site does not provide medical advice, mental health treatment, therapy, diagnosis, or emergency support.</p>
      </section>

      <section>
        <h2>Camera use</h2>
        <p>
          The web demo is intended for live preview only. Do not use it in unsafe situations or where camera use is not
          appropriate.
        </p>
      </section>

      <section>
        <h2>Availability</h2>
        <p>The demo may change, break, or be removed while the product is being tested.</p>
      </section>

      <section>
        <h2>Contact</h2>
        <p>
          For questions, contact{" "}
          <a href={`mailto:${site.contactEmail}`} title="Email Mirror Affirmations support">
            {site.contactEmail}
          </a>
          .
        </p>
      </section>
    </article>
  );
}
