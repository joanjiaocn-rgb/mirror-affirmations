import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Camera, Clock3, Lock, Sparkles } from "lucide-react";
import { notFound } from "next/navigation";
import { articlePages, getArticle } from "@/lib/articles";
import { referenceSources } from "@/lib/contentSources";
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
    title: {
      absolute: page.title
    },
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

  const isFeaturedGuide = page.slug === "affirmations-to-say-to-yourself-in-the-mirror";
  const related = page.related.map((relatedSlug) => getArticle(relatedSlug)).filter((item): item is NonNullable<typeof item> => Boolean(item));
  const updatedDate = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC"
    }).format(new Date(`${site.lastUpdated}T00:00:00.000Z`));
  const sectionId = (value: string) =>
    value
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
  const featuredStats = [
    { icon: Clock3, label: "1 minute to try" },
    { icon: Lock, label: "No recording" },
    { icon: Sparkles, label: "25 private lines" }
  ];
  const featuredAnchors = [
    { href: "#prompts", label: "25 affirmations" },
    ...page.sections.map((section) => ({
      href: `#${sectionId(section.heading)}`,
      label: section.heading
    })),
    { href: "#faq", label: "FAQ" }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    author: {
      "@type": "Person",
      name: site.editorialAuthor,
      url: site.url
    },
    datePublished: site.publishedDate,
    dateModified: site.lastUpdated,
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
      "@type": "Person",
      name: site.editorialAuthor,
      url: site.url
    },
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: site.url
    },
    datePublished: site.publishedDate,
    dateModified: site.lastUpdated,
    mainEntityOfPage: absoluteUrl(`/${page.slug}`),
    citation: referenceSources.map((source) => ({
      "@type": "CreativeWork",
      name: source.name,
      url: source.url
    }))
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className={`article-page${isFeaturedGuide ? " article-page--featured" : ""}`}>
        {isFeaturedGuide ? (
          <>
            <header className="article-hero">
              <div className="article-hero-copy">
                <div className="breadcrumb">
                  <Link href="/" title="Mirror Affirmations home">
                    Home
                  </Link>{" "}
                  / {page.h1}
                </div>
                <p className="eyebrow">Gentle self-talk guide</p>
                <h1>{page.h1}</h1>
                <p className="article-intro">{page.intro}</p>
                <p className="content-meta">
                  By {site.editorialAuthor}. Updated {updatedDate}.
                </p>

                <div className="article-stat-row" aria-label="Guide summary">
                  {featuredStats.map((item) => (
                    <span key={item.label}>
                      <item.icon size={14} aria-hidden="true" />
                      {item.label}
                    </span>
                  ))}
                </div>

                <div className="article-cta article-cta-inline">
                  <div>
                    <h2>Try it privately</h2>
                    <p>
                      Your camera preview stays in your browser. The demo does not record, save, or upload video.
                    </p>
                  </div>
                  <Link className="primary-button" href={page.ctaHref} title={page.cta}>
                    <Camera size={17} aria-hidden="true" />
                    {page.cta}
                  </Link>
                </div>

                <div className="article-toc" aria-label="Section shortcuts">
                  {featuredAnchors.map((item) => (
                    <Link key={item.href} href={item.href} title={`Jump to ${item.label}`}>
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              <aside className="article-hero-aside">
                <div className="article-hero-card">
                  <p className="article-hero-label">Best for</p>
                  <ul className="article-hero-list">
                    <li>Morning starts before messages</li>
                    <li>Self-doubt that needs a smaller sentence</li>
                    <li>Work stress you want to leave at work</li>
                    <li>Bedtime when the day is still noisy</li>
                  </ul>
                </div>
                <div className="article-hero-card article-hero-card-muted">
                  <p className="article-hero-label">Practice rule</p>
                  <p>One believable line is better than a dramatic line you cannot say twice.</p>
                </div>
              </aside>
            </header>

            <section className="article-section article-section-prompts" id="prompts">
              <div className="section-heading article-section-heading">
                <p className="eyebrow">25 prompts</p>
                <h2>Pick one line and speak it once</h2>
                <p>
                  The grid below is arranged so the page feels more like a practice sheet than a wall of text.
                </p>
              </div>
              <div className="prompt-matrix">
                {page.prompts.map((prompt, index) => (
                  <article className="prompt-tile" key={prompt}>
                    <span className="prompt-tile-index">{String(index + 1).padStart(2, "0")}</span>
                    <blockquote>{prompt}</blockquote>
                  </article>
                ))}
              </div>
            </section>

            <div className="article-section-stack">
              {page.sections.map((section) => (
                <section className="article-section article-section-card" id={sectionId(section.heading)} key={section.heading}>
                  <h2>{section.heading}</h2>
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </section>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="breadcrumb">
              <Link href="/" title="Mirror Affirmations home">
                Home
              </Link>{" "}
              / {page.h1}
            </div>
            <p className="eyebrow">Gentle self-talk guide</p>
            <h1>{page.h1}</h1>
            <p className="article-intro">{page.intro}</p>
            <p className="content-meta">
              By {site.editorialAuthor}. Updated {updatedDate}.
            </p>

            <div className="article-cta">
              <div>
                <h2>Try it privately</h2>
                <p>
                  Your camera preview stays in your browser. The demo does not record, save, or upload video.
                </p>
              </div>
              <Link className="primary-button" href={page.ctaHref} title={page.cta}>
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
          </>
        )}

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
          <h2>What sources inform this page?</h2>
          <p>
            This page uses public self-care guidance and self-affirmation research for context. It should not be read as
            medical advice, therapy, diagnosis, crisis care, or a promise that affirmations will treat a condition.
          </p>
          <ul className="source-list">
            {referenceSources.map((source) => (
              <li key={source.url}>
                <a href={source.url} rel="noreferrer" target="_blank" title={`Read ${source.name}`}>
                  {source.name}
                </a>
                <span>{source.summary}</span>
              </li>
            ))}
          </ul>
        </section>

        <section id="faq">
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
              <Link href={`/${item.slug}`} key={item.slug} title={`Read ${item.h1}`}>
                {item.h1}
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            ))}
            <Link href="/demo" title="Open the private mirror practice demo">
              Open mirror practice
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
