# Waitlist Setup

Date: 2026-07-30

## Storage Architecture

Waitlist signups are stored in the project's Cloudflare D1 database. The site does not send signup data to a third-party form provider.

The Worker requires one D1 binding named `WAITLIST_DB`. A signup returns success only after the database write succeeds.

## One-Time Cloudflare Setup

1. In Cloudflare Dashboard, open **Workers & Pages** and then **D1 SQL Database**.
2. Create a database named `mirror-affirmations-waitlist`.
3. Open the database and use **Console** to run the SQL in `migrations/0001_create_waitlist_subscribers.sql`.
4. Open the `mirror-affirmations` Worker project, then **Settings** > **Bindings** > **Add** > **D1 database**.
5. Set the variable name to `WAITLIST_DB` and select `mirror-affirmations-waitlist`.
6. Save the binding and redeploy the current `main` commit.

The production database ID is intentionally not committed to the repository. If future command-line deployment needs it, add the same D1 binding to `wrangler.jsonc` using the ID shown in the D1 database settings.

## Verify A Real Signup

1. Open `/waitlist` on the deployed site in an incognito window.
2. Submit a test email you control.
3. In the D1 Console, run:

```sql
SELECT email, source, created_at, status
FROM waitlist_subscribers
ORDER BY created_at DESC;
```

4. Confirm the submitted email appears exactly once. Submit it again to verify duplicate signups update the existing row instead of creating another row.

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
