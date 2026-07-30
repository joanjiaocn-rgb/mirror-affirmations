# Waitlist Setup

Date: 2026-07-30

## Current Behavior

The waitlist form is fully wired, but it runs in preview mode until `WAITLIST_WEBHOOK_URL` is configured.

In preview mode:

- The form validates input.
- The API returns success.
- The server log does not print the visitor email.
- The signup is not stored anywhere permanent.

## Recommended No-Code Setup

Use a webhook collection tool first, such as Make, Zapier, Tally webhook, Airtable automation, or a small Cloudflare Worker endpoint.

Set this environment variable in Cloudflare:

```text
WAITLIST_WEBHOOK_URL=https://your-webhook-url
```

The site will POST JSON to that URL.

## Payload

```json
{
  "email": "user@example.com",
  "source": "homepage",
  "interest": "ios_app",
  "useCase": "bedtime",
  "featureInterest": ["local_recording", "gentle_reminders"],
  "message": "I want a private bedtime routine.",
  "consent": true,
  "createdAt": "2026-07-30T00:00:00.000Z"
}
```

## Privacy Boundary

The waitlist must not collect or send:

- Camera frames.
- Video.
- Audio.
- Face data.
- Emotional diagnosis.
- Health notes.

## Good First Spreadsheet Columns

- createdAt
- email
- source
- interest
- useCase
- featureInterest
- message
- status
- invitedAt
- notes
