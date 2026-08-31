import Link from "next/link";
import { ArrowRight, ArrowUpRight, Camera, CheckCircle2, HeartHandshake, Lock, MessageCircle, Sparkles } from "lucide-react";
import { TrackedLink } from "@/components/TrackedLink";
import { WaitlistForm } from "@/components/WaitlistForm";
import { practiceDataPoints, referenceSources } from "@/lib/contentSources";
import { categories } from "@/lib/prompts";
import { site } from "@/lib/site";

const howItWorks = [
  "Choose a prompt that fits your moment.",
  "Turn on the private preview.",
  "Read the line out loud once or twice.",
  "Stop when it feels complete."
];

const homeFaqs = [
  {
    question: "What is Mirror Affirmations?",
    answer:
      "Mirror Affirmations is a private browser practice for saying short, gentle self-talk prompts while using an optional live camera preview."
  },
  {
    question: "Does Mirror Affirmations record video?",
    answer:
      "No. The current web demo does not record, save, or upload video, audio, camera frames, face data, or prompt recordings."
  },
  {
    question: "Is Mirror Affirmations a therapy app?",
    answer:
      "No. It is a self-care and reflection tool, not therapy, diagnosis, medical advice, crisis care, or emergency support."
  }
];

export default function HomePage() {
  const homeJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${site.url}/#article`,
        headline: "Mirror Affirmations: private self-talk practice with no recording",
        description: site.description,
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
        mainEntityOfPage: site.url,
        about: ["mirror affirmations", "self-talk", "self-care", "private camera preview"],
        citation: referenceSources.map((source) => ({
          "@type": "CreativeWork",
          name: source.name,
          url: source.url
        }))
      },
      {
        "@type": "FAQPage",
        "@id": `${site.url}/#faq`,
        author: {
          "@type": "Person",
          name: site.editorialAuthor,
          url: site.url
        },
        datePublished: site.publishedDate,
        dateModified: site.lastUpdated,
        mainEntity: homeFaqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer
          }
        }))
      },
      {
        "@type": "HowTo",
        "@id": `${site.url}/#how-to-practice`,
        name: "How to practice mirror affirmations privately",
        description: "A short no-recording mirror affirmation practice with an optional browser camera preview.",
        author: {
          "@type": "Person",
          name: site.editorialAuthor,
          url: site.url
        },
        datePublished: site.publishedDate,
        dateModified: site.lastUpdated,
        totalTime: "PT1M",
        step: howItWorks.map((step, index) => ({
          "@type": "HowToStep",
          position: index + 1,
          name: step,
          text: step
        }))
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }} />

      <section className="hero-section hero-section--immersive">
        <div className="hero-ambient hero-ambient-one" aria-hidden="true" />
        <div className="hero-ambient hero-ambient-two" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow">A quiet practice for ordinary days</p>
          <div className="hero-title-row">
            <h1>Mirror<br />Affirmations</h1>
            <span aria-hidden="true">Private mirror work</span>
          </div>
          <p className="hero-subtitle">A private mirror practice for saying one gentle thing to yourself.</p>
          <p className="hero-body">
            Open your camera, choose a prompt, and read it out loud while looking at yourself. The web demo is
            practice-only: it does not record, save, or upload video.
          </p>
          <p className="content-meta">
            By {site.editorialAuthor}. Updated August 9, 2026.
          </p>
          <div className="hero-actions">
            <TrackedLink
              className="primary-button"
              href="/demo"
              title="Start the private mirror practice demo"
              eventName="homepage_demo_clicked"
              eventProperties={{ position: "hero" }}
            >
              <Camera size={18} aria-hidden="true" />
              Open private practice
            </TrackedLink>
            <TrackedLink
              className="secondary-button"
              href="/how-mirror-affirmations-work"
              title="Read how Mirror Affirmations works"
              eventName="learn_link_clicked"
              eventProperties={{ position: "hero", slug: "how-mirror-affirmations-work" }}
            >
              How it works
            </TrackedLink>
          </div>
          <p className="privacy-inline">
            <Lock size={15} aria-hidden="true" />
            Camera preview stays in your browser. No account. No feed. No recording in the web demo.
          </p>
          <div className="hero-details hero-details--ritual" aria-label="Practice details">
            <span><Sparkles size={14} aria-hidden="true" /> One minute</span>
            <span><Lock size={14} aria-hidden="true" /> No account</span>
            <span><HeartHandshake size={14} aria-hidden="true" /> Your pace</span>
          </div>
        </div>
        <div className="hero-preview" aria-label="Mirror Affirmations product preview">
          <div className="practice-window">
            <div className="practice-window-bar">
              <span className="practice-window-title">
                <i aria-hidden="true" />
                Your private practice
              </span>
            <span className="practice-window-state"><Lock size={13} aria-hidden="true" /> Private</span>
            </div>
            <div className="practice-window-stage">
              <span className="practice-window-light practice-window-light-one" aria-hidden="true" />
              <span className="practice-window-light practice-window-light-two" aria-hidden="true" />
              <div className="mirror-frame-art" aria-hidden="true">
                <span className="mirror-frame-line mirror-frame-line-one" />
                <span className="mirror-frame-line mirror-frame-line-two" />
              </div>
              <p className="preview-prompt">I can let today be enough.</p>
              <div className="preview-prompt-meta">
                <span>Bedtime</span>
                <span>Prompt 01</span>
              </div>
            </div>
            <div className="practice-window-footer">
              <span>
                <Lock size={14} aria-hidden="true" />
                Browser only
              </span>
              <TrackedLink
                href="/demo"
                title="Open the private mirror practice demo"
                eventName="preview_demo_clicked"
                eventProperties={{ position: "hero_preview" }}
              >
                <Camera size={16} aria-hidden="true" />
                Open practice
                <ArrowUpRight size={15} aria-hidden="true" />
              </TrackedLink>
            </div>
          </div>
        </div>
      </section>

      <section className="content-band">
        <div className="section-heading">
          <p className="eyebrow">Why it feels different</p>
          <h2>What makes Mirror Affirmations different?</h2>
          <p>
            Most affirmation apps ask you to read a sentence and move on. Mirror Affirmations makes the practice more
            personal: you see your own face, slow down, and say the words out loud in a private space.
          </p>
        </div>
        <div className="feature-grid">
          <article className="feature-block">
            <span className="feature-number">01 / privacy</span>
            <Lock size={21} aria-hidden="true" />
            <h3>Private by default</h3>
            <p>The browser demo uses your camera only for live preview. It does not record, save, or upload video.</p>
          </article>
          <article className="feature-block">
            <span className="feature-number">02 / language</span>
            <MessageCircle size={21} aria-hidden="true" />
            <h3>Built for gentle self-talk</h3>
            <p>Prompts are short, spoken, and first-person. No hype, no pressure, no forced positivity.</p>
          </article>
          <article className="feature-block">
            <span className="feature-number">03 / ritual</span>
            <Camera size={21} aria-hidden="true" />
            <h3>Easy to try</h3>
            <p>Start with one line, adjust the text position, and practice without creating an account.</p>
          </article>
        </div>
      </section>

      <section className="content-band split-band">
        <div>
          <p className="eyebrow">How it works</p>
          <h2>How does a 60-second mirror practice work?</h2>
          <p>
            The first version is intentionally small. You do not need a profile, a streak, or a saved recording to find
            out whether this kind of self-talk feels useful.
          </p>
        </div>
        <ol className="steps-list">
          {howItWorks.map((step) => (
            <li key={step}>
              <span>{howItWorks.indexOf(step) + 1}</span>
              {step}
            </li>
          ))}
        </ol>
      </section>

      <section className="content-band answer-band" id="quick-answers">
        <div className="section-heading">
          <p className="eyebrow">Direct answers</p>
          <h2>What should I know before trying it?</h2>
          <p>
            The demo is intentionally small: a private preview, short prompts, no account, and no saved recording in
            the web version.
          </p>
        </div>
        <div className="answer-grid">
          {homeFaqs.map((faq) => (
            <article className="answer-card" key={faq.question}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-band data-band" id="practice-data">
        <div className="section-heading">
          <p className="eyebrow">Data and boundaries</p>
          <h2>What concrete details describe the practice?</h2>
        </div>
        <div className="data-grid">
          {practiceDataPoints.map((point) => (
            <article className="data-card" key={point.stat}>
              <strong>{point.stat}</strong>
              <span>{point.detail}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="content-band">
        <div className="section-heading">
          <p className="eyebrow">Prompt categories</p>
          <h2>Which prompt should I start with?</h2>
        </div>
        <div className="category-grid">
          {categories.map((category, index) => (
            <TrackedLink
              className="category-row"
              href={`/demo?category=${category.id}`}
              key={category.id}
              title={`Try ${category.label} prompts`}
              eventName="category_link_clicked"
              eventProperties={{ category: category.id }}
            >
              <span className="category-number">0{index + 1}</span>
              <div>
                <h3>{category.label}</h3>
                <p>{category.description}</p>
                <span>{category.sample}</span>
              </div>
              <ArrowRight size={18} aria-hidden="true" />
            </TrackedLink>
          ))}
        </div>
      </section>

      <section className="content-band related-band">
        <div className="section-heading">
          <p className="eyebrow">Learn and practice</p>
          <h2>Where should I go next?</h2>
        </div>
        <div className="link-grid">
          <TrackedLink
            href="/affirmations-to-say-to-yourself-in-the-mirror"
            title="Read 25 affirmations to say to yourself in the mirror"
            eventName="learn_link_clicked"
            eventProperties={{ slug: "affirmations-to-say-to-yourself-in-the-mirror" }}
          >
            25 affirmations to say to yourself in the mirror
          </TrackedLink>
          <TrackedLink
            href="/mirror-affirmations"
            title="Read about mirror affirmations"
            eventName="learn_link_clicked"
            eventProperties={{ slug: "mirror-affirmations" }}
          >
            Mirror affirmations
          </TrackedLink>
          <TrackedLink
            href="/selfie-affirmations"
            title="Read about selfie affirmations"
            eventName="learn_link_clicked"
            eventProperties={{ slug: "selfie-affirmations" }}
          >
            Selfie affirmations
          </TrackedLink>
          <TrackedLink
            href="/bedtime-affirmations"
            title="Read bedtime affirmations"
            eventName="learn_link_clicked"
            eventProperties={{ slug: "bedtime-affirmations" }}
          >
            Bedtime affirmations
          </TrackedLink>
          <TrackedLink
            href="/morning-affirmations-to-say-out-loud"
            title="Read morning affirmations to say out loud"
            eventName="learn_link_clicked"
            eventProperties={{ slug: "morning-affirmations-to-say-out-loud" }}
          >
            Morning affirmations to say out loud
          </TrackedLink>
          <TrackedLink
            href="/sleep-affirmations-for-a-calmer-evening"
            title="Read sleep affirmations for a calmer evening"
            eventName="learn_link_clicked"
            eventProperties={{ slug: "sleep-affirmations-for-a-calmer-evening" }}
          >
            Sleep affirmations for a calmer evening
          </TrackedLink>
          <TrackedLink
            href="/how-mirror-affirmations-work"
            title="Read how Mirror Affirmations works"
            eventName="learn_link_clicked"
            eventProperties={{ slug: "how-mirror-affirmations-work" }}
          >
            How Mirror Affirmations work
          </TrackedLink>
          <TrackedLink
            href="/positive-self-talk"
            title="Read about positive self-talk"
            eventName="learn_link_clicked"
            eventProperties={{ slug: "positive-self-talk" }}
          >
            Positive self-talk
          </TrackedLink>
          <TrackedLink
            href="/self-love-affirmations"
            title="Read self love affirmations"
            eventName="learn_link_clicked"
            eventProperties={{ slug: "self-love-affirmations" }}
          >
            Self love affirmations
          </TrackedLink>
          <TrackedLink
            href="/work-stress-affirmations"
            title="Read affirmations for work stress"
            eventName="learn_link_clicked"
            eventProperties={{ slug: "work-stress-affirmations" }}
          >
            Work stress affirmations
          </TrackedLink>
          <TrackedLink
            href="/mirror-affirmations-for-self-love"
            title="Read mirror affirmations for self love"
            eventName="learn_link_clicked"
            eventProperties={{ slug: "mirror-affirmations-for-self-love" }}
          >
            Mirror affirmations for self love
          </TrackedLink>
          <TrackedLink
            href="/mirror-affirmations-for-anxiety"
            title="Read mirror affirmations for anxiety"
            eventName="learn_link_clicked"
            eventProperties={{ slug: "mirror-affirmations-for-anxiety" }}
          >
            Mirror affirmations for anxiety
          </TrackedLink>
          <TrackedLink
            href="/morning-mirror-affirmations"
            title="Read morning mirror affirmations"
            eventName="learn_link_clicked"
            eventProperties={{ slug: "morning-mirror-affirmations" }}
          >
            Morning mirror affirmations
          </TrackedLink>
          <TrackedLink
            href="/positive-self-talk-exercises"
            title="Read positive self-talk exercises"
            eventName="learn_link_clicked"
            eventProperties={{ slug: "positive-self-talk-exercises" }}
          >
            Positive self-talk exercises
          </TrackedLink>
          <TrackedLink
            href="/self-compassion-affirmations"
            title="Read self compassion affirmations"
            eventName="learn_link_clicked"
            eventProperties={{ slug: "self-compassion-affirmations" }}
          >
            Self compassion affirmations
          </TrackedLink>
          <TrackedLink
            href="/how-to-practice-mirror-work"
            title="Read how to practice mirror work"
            eventName="learn_link_clicked"
            eventProperties={{ slug: "how-to-practice-mirror-work" }}
          >
            How to practice mirror work
          </TrackedLink>
        </div>
      </section>

      <section className="content-band source-band" id="sources">
        <div className="section-heading">
          <p className="eyebrow">Sources</p>
          <h2>What sources guide this self-care content?</h2>
          <p>
            Mirror Affirmations uses research and public-health sources for safety boundaries and self-care context.
            It does not claim to treat anxiety, depression, insomnia, trauma, or any mental health condition.
          </p>
        </div>
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

      <section className="waitlist-band" id="waitlist">
        <div>
          <p className="eyebrow">Future local video app</p>
          <h2>Do you want the local video app?</h2>
          <p>
            The first web demo is practice-only. Join the waitlist if you want the future iOS app with local recording,
            private history, reminders, and device-protected storage.
          </p>
          <ul className="waitlist-benefits">
            <li>
              <CheckCircle2 size={17} aria-hidden="true" />
              Tell me which feature matters before I build the app.
            </li>
            <li>
              <CheckCircle2 size={17} aria-hidden="true" />
              Get invited when there is a small test version.
            </li>
            <li>
              <CheckCircle2 size={17} aria-hidden="true" />
              No camera, video, audio, or face data is sent with signup.
            </li>
          </ul>
        </div>
        <WaitlistForm source="homepage" />
      </section>
    </>
  );
}
