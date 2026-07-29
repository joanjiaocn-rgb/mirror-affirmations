import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Camera, Lock } from "lucide-react";
import { notFound } from "next/navigation";
import { articlePages, getArticle } from "@/lib/articles";
import { absoluteUrl, site } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return articlePages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getArticle(slug);

  if (!page) {
    return {};
  }

  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: `/${page.slug}`
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url: absoluteUrl(`/${page.slug}`),
      type: "article",
      siteName: site.name
    },
    twitter: {
      card: "summary",
      title: page.title,
      description: page.description
    }
  };
}

export default async function ArticleRoute({ params }: Props) {
  const { slug } = await params;
  const page = getArticle(slug);

  if (!page) {
    notFound();
  }

  const related = page.related.map((relatedSlug) => getArticle(relatedSlug)).filter((item): item is NonNullable<typeof item> => Boolean(item));

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: page.h1,
    description: page.description,
    url: absoluteUrl(`/${page.slug}`),
    author: {
      "@type": "Organization",
      name: site.name
    },
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: site.url
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="article-page">
        <div className="breadcrumb">
          <Link href="/">Home</Link> / {page.h1}
        </div>
        <p className="eyebrow">Gentle self-talk guide</p>
        <h1>{page.h1}</h1>
        <p className="article-intro">{page.intro}</p>

        <div className="article-cta">
          <div>
            <h2>Try it privately</h2>
            <p>
              Your camera preview stays in your browser. The demo does not record, save, or upload video.
            </p>
          </div>
          <Link className="primary-button" href={page.ctaHref}>
            <Camera size={17} aria-hidden="true" />
            {page.cta}
          </Link>
        </div>

        <section>
          <h2>Prompts to try</h2>
          <div className="prompt-list">
            {page.prompts.map((prompt) => (
              <blockquote key={prompt}>{prompt}</blockquote>
            ))}
          </div>
        </section>

        {page.sections.map((section) => (
          <section key={section.heading}>
            <h2>{section.heading}</h2>
            {section.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>
        ))}

        <section className="privacy-callout">
          <Lock size={20} aria-hidden="true" />
          <div>
            <h2>Privacy note</h2>
            <p>
              This practice is not a medical or therapy service. It is a private self-care exercise, and the web demo
              does not upload camera, audio, or face data.
            </p>
          </div>
        </section>

        <section>
          <h2>FAQ</h2>
          <div className="faq-list">
            {page.faqs.map((faq) => (
              <div className="faq-item" key={faq.question}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2>Related practice pages</h2>
          <div className="link-grid compact">
            {related.map((item) => (
              <Link href={`/${item.slug}`} key={item.slug}>
                {item.h1}
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            ))}
            <Link href="/demo">
              Open mirror practice
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
