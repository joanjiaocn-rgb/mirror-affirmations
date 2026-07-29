import type { Metadata } from "next";
import { Suspense } from "react";
import { DemoClient } from "@/components/DemoClient";
import { absoluteUrl, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Private Mirror Practice | Mirror Affirmations",
  description:
    "Try a private camera-based affirmation practice. Read gentle prompts on screen with no recording, no upload, and no account required.",
  alternates: {
    canonical: "/demo"
  },
  openGraph: {
    title: "Private Mirror Practice | Mirror Affirmations",
    description:
      "Try a private camera-based affirmation practice. Read gentle prompts on screen with no recording, no upload, and no account required.",
    url: absoluteUrl("/demo"),
    type: "website",
    siteName: site.name
  }
};

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
      <Suspense fallback={<div className="demo-loading">Loading private practice...</div>}>
        <DemoClient />
      </Suspense>
    </>
  );
}
