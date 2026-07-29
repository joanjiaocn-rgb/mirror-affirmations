# Copy + Design Handoff - Mirror Affirmations

Date: 2026-07-30
Stages: 05-copy, 06-design
Status: Ready for frontend implementation

## Current Conclusion

Build a responsive SEO site plus a no-recording camera web demo. The product should validate the private mirror practice before building a native app.

## Must Preserve

- H1 on homepage: Mirror Affirmations.
- Primary CTA: Start private practice.
- Demo privacy line must appear before camera permission.
- The web demo must not request microphone access.
- The web demo must not record, save, or upload video.
- The first viewport must show a product preview.
- SEO article content must be crawlable HTML.
- FAQ content should be available in page markup and schema.

## First Routes To Build

Required for v0:

- `/`
- `/demo`
- `/mirror-affirmations`
- `/selfie-affirmations`
- `/bedtime-affirmations`
- `/positive-self-talk`
- `/privacy`
- `/terms`

Recommended after v0:

- `/video-affirmations`
- `/self-love-affirmations`
- `/work-stress-affirmations`

## Data Inputs

- Prompt library: `data/prompt-library-v0.json`
- Copy source: `docs/seo-copy-freeze.md`
- Design source: `docs/visual-design-source.md`
- Demo interaction contract: `docs/web-demo-contract.md`

## Analytics Events

Track these only:

- `demo_start_clicked`
- `camera_permission_requested`
- `camera_permission_granted`
- `camera_permission_denied`
- `camera_preview_ready`
- `prompt_category_selected`
- `prompt_randomized`
- `overlay_position_changed`
- `overlay_size_changed`
- `mirror_toggle_changed`
- `waitlist_form_started`
- `waitlist_submitted`

Do not send prompt custom text, video, audio, images, face data, or mental health notes.

## Visual Direction

Use a quiet camera utility with bedside-journal warmth.

Avoid:

- Generic AI wellness gradients.
- Purple-heavy hero visuals.
- Stock portraits.
- Therapy or medical imagery.
- Nested cards.

## Validation Gates

Continue to native iOS only if:

- 40 percent or more of demo visitors click "Start private practice".
- 50 percent or more of demo starters grant camera permission.
- 8 percent or more of demo visitors join the waitlist.
- At least 5 users ask for local recording, reminders, or private history.

## Known TBD Items

- Final brand name.
- Domain.
- Contact email.
- Waitlist storage provider.
- Analytics provider.

## Next Stage Prompt

Use `frontend-site-automation` to build the v0 website from:

- `docs/seo-copy-freeze.md`
- `docs/visual-design-source.md`
- `docs/web-demo-contract.md`
- `data/prompt-library-v0.json`

Build only the website, web demo, waitlist, privacy, terms, sitemap, robots, and basic analytics hooks. Do not build recording, login, payment, AI analysis, or cloud storage.
