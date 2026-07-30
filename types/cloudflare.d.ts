interface WaitlistStatement {
  bind(...values: unknown[]): WaitlistStatement;
  run(): Promise<{ success: boolean }>;
}

interface WaitlistDatabase {
  prepare(query: string): WaitlistStatement;
}

interface CloudflareEnv {
  WAITLIST_DB?: WaitlistDatabase;
}
