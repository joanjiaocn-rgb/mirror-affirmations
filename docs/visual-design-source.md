# Visual Design Source - Mirror Affirmations

Date: 2026-07-30
Stage: 06-design
Status: Design source draft for frontend

## 1. Design Goal

Create a calm, private, mobile-first website that makes the visitor feel safe enough to try the camera demo. The page should feel like a quiet personal tool, not a glossy mental-health startup, not a social app, and not a generic SaaS landing page.

## 2. Visual Style Rationale

### Option A - Quiet Bedside Journal

Mood: soft, personal, low-light, journal-like.

Strength:

- Fits bedtime and self-care use cases.
- Feels private and safe.
- Works well for trust and waitlist conversion.

Weakness:

- Can become too beige or too lifestyle-blog-like if not handled carefully.

### Option B - Clean Camera Utility

Mood: crisp, minimal, tool-first, like a camera app with warm copy.

Strength:

- Makes the demo feel real and usable.
- Reduces the "AI wellness" look.
- Works well on mobile.

Weakness:

- May feel too cold if the color system is too neutral.

### Option C - Dreamy Wellness App

Mood: gradients, soft glows, atmospheric hero.

Strength:

- Familiar to affirmation app users.

Weakness:

- High risk of looking generic, overproduced, and AI-generated.
- Less trustworthy for a camera and privacy product.

Recommended direction:

Use a blend of Option A and B: a quiet camera utility with a bedside-journal warmth. Avoid dreamy gradient blobs, purple wellness gradients, large abstract illustrations, and empty motivational cards.

## 3. Design Principles

- Product visible immediately: the first viewport must show the phone-like mirror practice, not only text.
- Privacy before permission: the camera start button must sit near the privacy reassurance.
- Mobile-first: most users will judge the idea on a phone.
- No nested cards: use full-width sections and clear tool panels only.
- Text must fit in compact controls on mobile.
- Do not over-decorate. Let the live camera area and prompt overlay be the main visual.

## 4. Color System

Use a balanced, restrained palette. Avoid making the whole page beige, purple, or dark blue.

Base:

- `--ink: #202124`
- `--muted-ink: #62605C`
- `--paper: #FAF8F3`
- `--surface: #FFFFFF`
- `--line: #DDD8CE`

Accent:

- `--sage: #7A8C6F`
- `--rose: #B46A6A`
- `--clay: #A9754F`
- `--night: #2E3440`
- `--focus: #3B7D7A`

Demo dark layer:

- `--camera-bg: #141414`
- `--overlay-bg: rgba(20, 20, 20, 0.34)`
- `--overlay-text: #FFFFFF`

Usage:

- Paper background for general pages.
- White surfaces for forms and text-heavy blocks.
- Sage for primary actions.
- Rose or clay only as small emphasis.
- Night for the camera demo shell and footer.

## 5. Typography

Recommended CSS font stack:

```css
font-family: ui-serif, Georgia, Cambria, "Times New Roman", serif;
```

For UI controls:

```css
font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
```

Scale:

- Hero H1 desktop: 56px, line-height 1.02
- Hero H1 mobile: 40px, line-height 1.05
- Page H1: 44px desktop, 34px mobile
- H2: 28-34px
- Body: 17px desktop, 16px mobile
- Button: 15-16px
- Demo overlay medium: 30px mobile, 38px desktop

Do not scale font size with viewport width. Letter spacing should be 0.

## 6. Layout System

Page max width:

- Content: 1120px
- Article: 760px
- Demo: 1180px

Spacing:

- Section padding desktop: 72px top/bottom
- Section padding mobile: 44px top/bottom
- Grid gap: 24px desktop, 16px mobile

Border radius:

- Cards and panels: 8px maximum
- Phone/demo frame: 20px is allowed because it represents a device, not a generic card
- Buttons: 999px pill allowed only for primary CTA and compact controls

## 7. Homepage Design

### Header

Desktop:

- Left: wordmark "Mirror Affirmations"
- Right nav: Demo, Affirmations, Bedtime, Privacy
- CTA button: Start practice

Mobile:

- Wordmark left
- Compact menu or horizontal minimal nav if it fits
- CTA visible as an icon+text button or full-width below hero

### Hero

Layout:

- Two-column desktop: copy left, live product preview right.
- Single-column mobile: product preview first or immediately below the headline.
- Avoid a separate decorative hero card. The product preview is the visual anchor.

Hero content:

- H1: Mirror Affirmations
- Subheading: A private mirror practice for saying one gentle thing to yourself.
- Support copy: Open your camera, choose a prompt, and read it out loud while looking at yourself. The web demo is practice-only: it does not record, save, or upload video.
- CTAs: Start private practice, Join the waitlist
- Trust line: Camera preview stays in your browser. No account. No feed. No recording in the web demo.

Product preview:

- Phone-like vertical frame.
- Use a blurred neutral placeholder only before camera starts.
- Show prompt overlay: "I can let today be enough."
- Bottom controls visible: Start camera, New prompt.
- Add small privacy badge inside or under the frame.

### Why It Feels Different

Use three compact blocks, not oversized marketing cards:

- Private by default
- Built for gentle self-talk
- Easy to try

Each block should include one short paragraph and a small icon:

- Lock icon for privacy.
- MessageCircle or Type icon for prompts.
- Camera icon for practice.

Use lucide icons in implementation.

### How It Works

Use a numbered vertical flow on mobile and horizontal steps on desktop:

1. Choose a prompt.
2. Turn on private preview.
3. Read it out loud.
4. Stop when it feels complete.

### Prompt Categories

Use a dense, scannable grid of category rows or chips, not large decorative cards.

Each category shows:

- Category name.
- One sample line.
- A "Try this" link to demo with category preselected if implemented.

### Waitlist

This section should feel like a small signup panel, not a sales pricing block.

Fields:

- Email.
- Interest select: iOS app, Android app, web only, creator resource.
- Optional message can be hidden behind "Add a note".

Copy:

- "Want the local video app?"
- Explain local recording and reminders as future direction only.

### Footer

Keep quiet and explicit:

- Links.
- Disclaimer.
- Contact placeholder.

## 8. Demo Page Design

The demo page is the primary product surface.

Desktop:

- Left: prompt library and settings.
- Center/right: vertical camera preview.
- Right or bottom: waitlist CTA.

Mobile:

- Camera preview at top with fixed aspect ratio.
- Controls below preview.
- Category chips horizontally scrollable.
- Waitlist CTA after the practice controls.

Required states:

- Before camera permission.
- Camera live.
- Camera denied.
- Camera unsupported.
- No-camera practice.
- Camera stopped.
- Waitlist submitting.
- Waitlist success.
- Waitlist error.

Camera preview:

- Aspect ratio: 9 / 16.
- Max height desktop: 720px.
- Mobile width: 100%.
- Mirrored by default.
- Overlay text sits in safe zones and never covers bottom controls.

Controls:

- Start camera button with Camera icon.
- Stop camera button with Square icon.
- New prompt button with Shuffle icon.
- Mirror toggle with Switch/Toggle.
- Position segmented control: Top, Center, Bottom.
- Text size segmented control: S, M, L.

Privacy note:

Place directly above Start camera:

"Your camera preview stays in your browser. This demo does not record, save, or upload video."

## 9. SEO Article Page Design

Article layout:

- Max width 760px.
- Intro answer near top.
- Demo CTA block after first section.
- Sample prompts list in a calm grid or list.
- Step-by-step practice.
- FAQ.
- Related links.

Avoid:

- Huge hero sections for every SEO page.
- Stock wellness imagery.
- Hidden accordion-only content for core SEO copy.

## 10. UI Component Inventory

Core components:

- Header
- Footer
- Button
- IconButton
- SegmentedControl
- Toggle
- CategoryChips
- PromptCard
- DemoPreview
- PromptOverlay
- WaitlistForm
- PrivacyNote
- FAQ
- ArticleLayout
- RelatedLinks

## 11. Asset Plan

No external photos are required for v0.

Use:

- Live camera preview when permission is granted.
- Neutral placeholder gradient inside demo frame before permission.
- Simple lucide icons.
- Optional generated OG image later, showing a phone-like mirror preview with text overlay.

Do not use:

- Stock portraits.
- Therapy-session imagery.
- Medical icons.
- Abstract purple gradient hero art.

## 12. Accessibility

- All controls must be keyboard reachable.
- Camera start action must be a button, not an auto-start.
- Provide visible focus state using `--focus`.
- Text overlay should meet contrast requirements with a semi-transparent backing layer.
- Buttons must have clear labels.
- Do not rely on color alone for selected states.

## 13. Frontend Handoff

Recommended stack:

- Next.js or Astro for SEO pages.
- React component for the demo if using Next.js.
- Browser camera via `navigator.mediaDevices.getUserMedia`.
- Static prompt library in JSON or TypeScript.
- Waitlist can start with a simple hosted form provider or a Cloudflare Worker endpoint.

Analytics:

- Track only non-sensitive events from `web-demo-contract.md`.
- Do not send prompt custom text, images, videos, audio, or health descriptions.

SEO:

- Generate sitemap.
- Add robots.
- Add canonical URLs.
- Add WebApplication schema on `/` and `/demo`.
- Add FAQPage schema on article pages.

## 14. Design QA Checklist

- First viewport shows the product preview.
- Camera privacy line is visible before the camera request.
- Mobile demo controls do not overlap the preview.
- Article pages have crawlable content.
- No medical or therapy claims.
- No generic AI wellness visual style.
- No nested cards.
- Color palette is not dominated by one hue.
- Buttons and chips have stable dimensions.
