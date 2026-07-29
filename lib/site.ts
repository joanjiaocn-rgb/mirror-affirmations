export const site = {
  name: "Mirror Affirmations",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://mirroraffirmations.app",
  description:
    "Try a private mirror affirmation practice with gentle prompts on screen. Use your camera for a live preview only. No recording or video upload in the web demo.",
  lastUpdated: "2026-07-30",
  contactEmail: "contact@mirroraffirmations.app",
  gaMeasurementId: "",
  clarityProjectId: ""
};

export function absoluteUrl(path = "") {
  if (!path) {
    return site.url;
  }

  return `${site.url}${path.startsWith("/") ? path : `/${path}`}`;
}
