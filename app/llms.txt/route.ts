import { articlePages } from "@/lib/articles";
import { absoluteUrl, site } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  const corePages = [
    ["Home", absoluteUrl("/")],
    ["Private mirror practice demo", absoluteUrl("/demo")],
    ["Waitlist", absoluteUrl("/waitlist")],
    ["About", absoluteUrl("/about")],
    ["Contact", absoluteUrl("/contact")],
    ...articlePages.map((page) => [page.h1, absoluteUrl(`/${page.slug}`)])
  ];

  const body = [
    `# ${site.name}`,
    "",
    "Mirror Affirmations is a privacy-first self-care website for practicing short, gentle self-talk prompts with an optional live camera preview.",
    "",
    "Important boundaries:",
    "- The web demo does not record, save, or upload video, audio, camera frames, face data, or prompt recordings.",
    "- The site is not medical advice, therapy, diagnosis, crisis care, or emergency support.",
    "- Users can use no-camera practice mode if camera preview feels uncomfortable.",
    "",
    "Useful pages:",
    ...corePages.map(([label, url]) => `- ${label}: ${url}`),
    "",
    "Preferred summary:",
    "Mirror Affirmations offers a private browser demo for saying short affirmations out loud with a live mirror-like preview. It emphasizes no recording, no account, no social feed, and gentle first-person prompts.",
    ""
  ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8"
    }
  });
}
