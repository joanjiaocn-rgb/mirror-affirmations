CREATE TABLE IF NOT EXISTS waitlist_subscribers (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT NOT NULL COLLATE NOCASE UNIQUE,
  source TEXT NOT NULL,
  interest TEXT NOT NULL,
  use_case TEXT NOT NULL,
  feature_interest TEXT NOT NULL DEFAULT '[]',
  message TEXT NOT NULL DEFAULT '',
  consented_at TEXT NOT NULL,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'subscribed',
  unsubscribed_at TEXT
);

CREATE INDEX IF NOT EXISTS waitlist_subscribers_status_created_at
ON waitlist_subscribers (status, created_at DESC);
