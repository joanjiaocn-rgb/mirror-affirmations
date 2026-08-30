import type { Metadata } from "next";
import { Suspense } from "react";
import { Camera, Clock3, Lock, SlidersHorizontal, Sparkles } from "lucide-react";
import { DemoClient } from "@/components/DemoClient";
import { absoluteUrl, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Private Mirror Practice",
  description:
    "Try a private mirror practice with a live browser camera preview, short prompts, and no recording, upload, or account required on desktop or mobile.",
  alternates: {
    canonical: "/demo"
  },
  openGraph: {
    title: "Private Mirror Practice",
    description:
      "Try a private mirror practice with a live browser camera preview, short prompts, and no recording, upload, or account required on desktop or mobile.",
    url: absoluteUrl("/demo"),
    type: "website",
    siteName: site.name
  },
  twitter: {
    card: "summary",
    title: "Private Mirror Practice",
    description:
      "Try a private mirror practice with a live browser camera preview, short prompts, and no recording, upload, or account required on desktop or mobile."
  }
};

const demoNotes = [
  {
    icon: Clock3,
    title: "How it works",
    body: "Pick one prompt, open the preview if you want it, say the line once, and stop when it feels complete."
  },
  {
    icon: Lock,
    title: "Privacy",
    body: "The camera preview stays in your browser. The demo does not record, save, or upload video, audio, or face data."
  },
  {
    icon: SlidersHorizontal,
    title: "Controls",
    body: "You can switch prompt category, move the text, resize it, shuffle prompts, or practice without camera access."
  },
  {
    icon: Sparkles,
    title: "When to use it",
    body: "It works well before work, after a stressful message, before bed, or any time you need one smaller sentence."
  }
] as const;

export default function DemoPage() {
  return (
    <>
      <section className="demo-hero">
        <div>
          <p className="eyebrow">No-recording browser demo</p>
          <h1>Private Mirror Practice</h1>
          <p>
            Use your camera as a quiet mirror. Choose a prompt, place it where it feels comfortable, and say it to
            yourself once.
          </p>
        </div>
      </section>
      <section className="demo-info-band">
        <div className="section-heading">
          <p className="eyebrow">Before you start</p>
          <h2>What to expect from the demo</h2>
          <p>
            The page is built for a quick private session: one prompt, one preview, and enough structure to keep the
            practice calm and easy to scan.
          </p>
        </div>
        <div className="demo-info-grid">
          {demoNotes.map((note) => (
            <article className="demo-info-card" key={note.title}>
              <note.icon size={18} aria-hidden="true" />
              <h3>{note.title}</h3>
              <p>{note.body}</p>
            </article>
          ))}
          <article className="demo-info-card demo-info-card-list">
            <Camera size={18} aria-hidden="true" />
            <h3>What changes inside the demo</h3>
            <ul>
              <li>Prompt category</li>
              <li>Text size and position</li>
              <li>Mirror mode on or off</li>
              <li>Camera preview or no-camera practice</li>
            </ul>
          </article>
        </div>
      </section>
      <Suspense fallback={<div className="demo-loading">Loading private practice...</div>}>
        <DemoClient />
      </Suspense>
    </>
  );
}
