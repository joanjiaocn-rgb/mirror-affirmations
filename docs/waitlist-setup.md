# Waitlist Setup

Date: 2026-07-30

## Storage Architecture

Waitlist signups are stored in the project's Cloudflare D1 database. The site does not send signup data to a third-party form provider.

The Worker requires one D1 binding named `WAITLIST_DB`. A signup returns success only after the database write succeeds.

## One-Time Cloudflare Setup

1. In Cloudflare Dashboard, open **Workers & Pages** and then **D1 SQL Database**.
2. Create a database named `mirror-affirmations-waitlist`.
3. Open the database and use **Console** to run the SQL in `migrations/0001_create_waitlist_subscribers.sql`.
4. Open the database **Settings** page and copy its **Database ID**.
5. Add the D1 binding to `wrangler.jsonc` before deployment. It must use the exact binding name `WAITLIST_DB`:

```jsonc
"d1_databases": [
  {
    "binding": "WAITLIST_DB",
    "database_name": "mirror-affirmations-waitlist",
    "database_id": "your-database-id"
  }
]
```

6. Redeploy the current `main` commit. The Git-based deployment then carries the database binding with every future release.

The database ID is safe to share with the project maintainer, but it should be kept in the Cloudflare configuration rather than pasted into unrelated public content.

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
