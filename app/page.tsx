import Link from "next/link";
import { ArrowRight, Camera, CheckCircle2, Lock, MessageCircle } from "lucide-react";
import { WaitlistForm } from "@/components/WaitlistForm";
import { categories } from "@/lib/prompts";

const howItWorks = [
  "Choose a prompt that fits your moment.",
  "Turn on the private preview.",
  "Read the line out loud once or twice.",
  "Stop when it feels complete."
];

export default function HomePage() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">A quiet practice for ordinary days</p>
          <div className="hero-title-row">
            <h1>Mirror<br />Affirmations</h1>
            <span aria-hidden="true">01</span>
          </div>
          <p className="hero-subtitle">A private mirror practice for saying one gentle thing to yourself.</p>
          <p className="hero-body">
            Open your camera, choose a prompt, and read it out loud while looking at yourself. The web demo is
            practice-only: it does not record, save, or upload video.
          </p>
          <div className="hero-actions">
            <Link className="primary-button" href="/demo">
              <Camera size={18} aria-hidden="true" />
              Start private practice
            </Link>
            <Link className="secondary-button" href="/waitlist">
              Join the waitlist
            </Link>
          </div>
          <p className="privacy-inline">
            <Lock size={15} aria-hidden="true" />
            Camera preview stays in your browser. No account. No feed. No recording in the web demo.
          </p>
          <div className="hero-details" aria-label="Practice details">
            <span>One minute</span>
            <span>No account</span>
            <span>Private by design</span>
          </div>
        </div>
        <div className="hero-preview" aria-label="Mirror Affirmations product preview">
          <div className="practice-window">
            <div className="practice-window-bar">
              <span className="practice-window-title">
                <i aria-hidden="true" />
                Mirror practice
              </span>
              <span className="practice-window-state">Private preview</span>
            </div>
            <div className="practice-window-stage">
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
              <Link href="/demo">
                <Camera size={16} aria-hidden="true" />
                Open practice
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="content-band">
        <div className="section-heading">
          <p className="eyebrow">Why it feels different</p>
          <h2>Not just another quote app</h2>
          <p>
            Most affirmation apps ask you to read a sentence and move on. Mirror Affirmations makes the practice more
            personal: you see your own face, slow down, and say the words out loud in a private space.
          </p>
        </div>
        <div className="feature-grid">
          <article className="feature-block">
            <span className="feature-number">01</span>
            <Lock size={21} aria-hidden="true" />
            <h3>Private by default</h3>
            <p>The browser demo uses your camera only for live preview. It does not record, save, or upload video.</p>
          </article>
          <article className="feature-block">
            <span className="feature-number">02</span>
            <MessageCircle size={21} aria-hidden="true" />
            <h3>Built for gentle self-talk</h3>
            <p>Prompts are short, spoken, and first-person. No hype, no pressure, no forced positivity.</p>
          </article>
          <article className="feature-block">
            <span className="feature-number">03</span>
            <Camera size={21} aria-hidden="true" />
            <h3>Easy to try</h3>
            <p>Start with one line, adjust the text position, and practice without creating an account.</p>
          </article>
        </div>
      </section>

      <section className="content-band split-band">
        <div>
          <p className="eyebrow">How it works</p>
          <h2>A 60-second mirror practice</h2>
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

      <section className="content-band">
        <div className="section-heading">
          <p className="eyebrow">Prompt categories</p>
          <h2>Prompts for real moments</h2>
        </div>
        <div className="category-grid">
          {categories.map((category, index) => (
            <Link className="category-row" href={`/demo?category=${category.id}`} key={category.id}>
              <span className="category-number">0{index + 1}</span>
              <div>
                <h3>{category.label}</h3>
                <p>{category.description}</p>
                <span>{category.sample}</span>
              </div>
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          ))}
        </div>
      </section>

      <section className="content-band related-band">
        <div className="section-heading">
          <p className="eyebrow">Learn and practice</p>
          <h2>Start where the words fit</h2>
        </div>
        <div className="link-grid">
          <Link href="/mirror-affirmations">Mirror affirmations</Link>
          <Link href="/selfie-affirmations">Selfie affirmations</Link>
          <Link href="/bedtime-affirmations">Bedtime affirmations</Link>
          <Link href="/positive-self-talk">Positive self-talk</Link>
          <Link href="/self-love-affirmations">Self love affirmations</Link>
          <Link href="/work-stress-affirmations">Work stress affirmations</Link>
        </div>
      </section>

      <section className="waitlist-band" id="waitlist">
        <div>
          <p className="eyebrow">Future local video app</p>
          <h2>Want the local video app?</h2>
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
