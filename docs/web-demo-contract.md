# Web Demo Contract - Mirror Affirmations

Date: 2026-07-30
Scope: Browser-based practice demo, no recording

## 1. Demo Goal

Let a visitor experience the core product feeling in less than 30 seconds:

1. Open the page.
2. Understand that the camera stays local.
3. Start the front camera.
4. See their face with an affirmation overlay.
5. Change the prompt or layout.
6. Join the waitlist if the experience feels useful.

## 2. User Flow

### Flow A - Happy Path

- User lands on homepage.
- User clicks "Start private practice".
- Demo screen explains camera privacy.
- User clicks "Start camera".
- Browser permission prompt appears.
- Camera preview opens with front-facing video.
- Prompt overlay appears.
- User adjusts text size or position.
- User chooses another prompt category.
- User clicks "Join waitlist".

### Flow B - Permission Denied

- User clicks "Start camera".
- Browser denies permission or user blocks camera.
- Show calm fallback state:
  - "Camera access is off."
  - Let user practice without camera using a soft background.
  - Offer browser permission instructions.
  - Keep waitlist CTA visible.

### Flow C - Unsupported Browser

- If camera API is unavailable, show a no-camera practice mode.
- Do not break the page.

## 3. Required UI Components

### CameraPreview

- Uses browser `navigator.mediaDevices.getUserMedia`.
- Requests `video` only, no audio.
- Prefers `facingMode: "user"`.
- Shows mirrored preview by default.
- Has a visible camera-off fallback.

### PromptOverlay

- Semi-transparent text overlay.
- Position options: top, center, bottom.
- Text size options: small, medium, large.
- Must remain readable on dark and light camera backgrounds.
- Should not overlap core controls on mobile.

### PromptLibrary

Categories:

- Bedtime
- Morning
- Work stress
- Low mood
- Self-doubt
- Small wins
- Healing days

Each prompt object:

```json
{
  "id": "bedtime_001",
  "category": "bedtime",
  "text": "I can let today be enough.",
  "tags": ["night", "rest", "gentle"]
}
```

### Controls

- Start camera.
- Stop camera.
- Random prompt.
- Category switcher.
- Text size segmented control.
- Position segmented control.
- Mirror toggle.
- Join waitlist.

Do not include recording controls in web v0.

## 4. Data Contract

### Local State

Stored in browser local storage:

```json
{
  "textSize": "medium",
  "position": "center",
  "mirror": true,
  "lastCategory": "bedtime",
  "lastPromptId": "bedtime_001"
}
```

Do not store:

- Photo data.
- Video data.
- Audio data.
- Face landmarks.
- Biometric identifiers.
- User mental health notes.

### Waitlist Submission

Fields:

```json
{
  "email": "user@example.com",
  "source": "homepage|demo|seo_page",
  "interest": "ios_app|android_app|web_only|creator_resource",
  "createdAt": "iso_timestamp"
}
```

Optional field:

```json
{
  "message": "I want local recording and reminders."
}
```

## 5. Analytics Events

Allowed events:

- `page_view`
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

Disallowed analytics payloads:

- Prompt custom text if user-created.
- Photo, video, audio, or camera frames.
- Face-derived data.
- Health or mental health descriptions.

## 6. Privacy Copy Inside Demo

Short version:

"Your camera preview stays in your browser. This demo does not record, save, or upload video."

Expanded version:

"The web demo only uses your camera to show a live mirror preview on your device. We do not receive your photo, video, audio, or face data. You can also practice without the camera."

## 7. Technical Acceptance Criteria

- Works on modern mobile Safari, Chrome, and desktop Chrome.
- Uses HTTPS in production, because camera permission requires a secure context.
- Does not request microphone permission.
- Gracefully handles camera denial.
- Stops camera tracks when user leaves the demo or taps stop.
- No server logs contain image, video, audio, or custom emotional text.
- Mobile controls stay reachable with one hand.
- Page still works as a no-camera practice tool.

## 8. Future App Notes

If Phase 0 passes validation, build native iOS next.

Native app should add:

- Local video recording.
- Local-only archive.
- Post-recording playback.
- Streak calendar.
- Optional export.
- Face ID protection.

Native app should not add:

- Cloud upload.
- Social feed.
- AI face or mood interpretation.
