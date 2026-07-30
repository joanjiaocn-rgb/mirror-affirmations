import type { Metadata } from "next";
import Link from "next/link";
import { Camera, CheckCircle2, Lock, MessageCircle } from "lucide-react";
import { WaitlistForm } from "@/components/WaitlistForm";
import { absoluteUrl, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Join the Waitlist | Mirror Affirmations",
  description:
    "Join the Mirror Affirmations waitlist and tell us which privacy-first features matter most: local recording, private history, reminders, and more.",
  alternates: {
    canonical: "/waitlist"
  },
  openGraph: {
    title: "Join the Waitlist | Mirror Affirmations",
    description:
      "Join the Mirror Affirmations waitlist and tell us which privacy-first features matter most: local recording, private history, reminders, and more.",
    url: absoluteUrl("/waitlist"),
    type: "website",
    siteName: site.name
  }
};

const nextFeatures = [
  "Local-only video recording",
  "Private history on your device",
  "Gentle reminders without pressure",
  "Device lock or Face ID protection"
];

export default function WaitlistPage() {
  return (
    <>
      <section className="waitlist-page-hero">
        <div>
          <p className="eyebrow">Help shape the local app</p>
          <h1>Join the Mirror Affirmations waitlist</h1>
          <p>
            The web demo is practice-only. The waitlist helps decide what should come next before building the native
            app.
          </p>
          <div className="hero-actions">
            <Link className="secondary-button" href="/demo">
              <Camera size={17} aria-hidden="true" />
              Try the demo first
            </Link>
          </div>
        </div>
        <div className="waitlist-proof">
          <div>
            <Lock size={20} aria-hidden="true" />
            <h2>Privacy-first direction</h2>
            <p>No cloud sync, no social feed, no AI face reading. The app direction is local recording and private use.</p>
          </div>
          <ul>
            {nextFeatures.map((feature) => (
              <li key={feature}>
                <CheckCircle2 size={17} aria-hidden="true" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="waitlist-page-grid">
        <div className="waitlist-explainer">
          <MessageCircle size={22} aria-hidden="true" />
          <h2>Why this form asks more than email</h2>
          <p>
            For this product, a useful signup is not just a number. It needs to say whether people want recording,
            reminders, private history, custom prompts, or a creator resource pack.
          </p>
          <p>
            Your signup does not include camera, video, audio, face data, or prompt recordings. It only sends the fields
            in the form.
          </p>
        </div>
        <WaitlistForm source="waitlist_page" />
      </section>
    </>
  );
}
