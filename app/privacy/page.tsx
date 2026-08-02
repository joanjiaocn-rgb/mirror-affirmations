import type { Metadata } from "next";
import Link from "next/link";
import { Camera } from "lucide-react";
import { absoluteUrl, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy | Mirror Affirmations",
  description:
    "Read how Mirror Affirmations handles camera preview, waitlist emails, analytics, and privacy in the no-recording web demo.",
  alternates: {
    canonical: "/privacy"
  },
  openGraph: {
    title: "Privacy | Mirror Affirmations",
    description:
      "Read how Mirror Affirmations handles camera preview, waitlist emails, analytics, and privacy in the no-recording web demo.",
    url: absoluteUrl("/privacy"),
    type: "website",
    siteName: site.name
  }
};

export default function PrivacyPage() {
  return (
    <article className="article-page legal-page">
      <div className="breadcrumb">
        <Link href="/" title="Mirror Affirmations home">
          Home
        </Link>{" "}
        / Privacy
      </div>
      <h1>Privacy</h1>
      <p className="article-intro">
        Mirror Affirmations is designed to feel private from the first visit. The web demo uses your camera only to show
        a live preview in your browser. We do not receive, record, save, or upload your photo, video, audio, or face
        data.
      </p>

      <section>
        <h2>Camera</h2>
        <p>
          The demo requests camera access only when you tap the start button. It does not request microphone access. You
          can stop the camera at any time, or use no-camera practice mode.
        </p>
      </section>

      <section>
        <h2>Waitlist</h2>
        <p>
          If you join the waitlist, we collect your email address and optional message so we can contact you about the
          product. You can unsubscribe or ask for deletion.
        </p>
      </section>

      <section>
        <h2>Analytics</h2>
        <p>
          We may measure basic product events, such as whether the demo was started or whether camera access was
          granted. Analytics must not include camera frames, videos, audio, face data, or sensitive personal notes.
        </p>
      </section>

      <section>
        <h2>Medical note</h2>
        <p>Mirror Affirmations is a self-care and reflection tool. It is not a medical, mental health, or therapy service.</p>
      </section>

      <Link className="primary-button" href="/demo" title="Return to the private mirror practice demo">
        <Camera size={17} aria-hidden="true" />
        Return to demo
      </Link>
    </article>
  );
}
