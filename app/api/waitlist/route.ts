import { NextRequest, NextResponse } from "next/server";
import { getCloudflareContext } from "@opennextjs/cloudflare";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const allowedSources = new Set(["homepage", "demo", "seo_page", "waitlist_page"]);
const allowedInterests = new Set(["ios_app", "android_app", "web_only", "creator_resource"]);
const allowedUseCases = new Set(["bedtime", "work_stress", "self_doubt", "morning", "creator"]);
const allowedFeatures = new Set([
  "local_recording",
  "private_history",
  "gentle_reminders",
  "face_id_lock",
  "custom_prompts",
  "creator_pack"
]);

export async function POST(request: NextRequest) {
  const body = (await request.json().catch(() => null)) as
    | {
        email?: string;
        source?: string;
        interest?: string;
        useCase?: string;
        featureInterest?: string[];
        consent?: boolean;
        website?: string;
        message?: string;
      }
    | null;

  const email = body?.email?.trim().toLowerCase();

  if (body?.website) {
    return NextResponse.json({ ok: true, filtered: true });
  }

  if (!email || email.length > 254 || !emailPattern.test(email)) {
    return NextResponse.json({ error: "A valid email is required." }, { status: 400 });
  }

  if (!body?.consent) {
    return NextResponse.json({ error: "Consent is required." }, { status: 400 });
  }

  const rawSource = body.source || "";
  const rawInterest = body.interest || "";
  const rawUseCase = body.useCase || "";
  const source = allowedSources.has(rawSource) ? rawSource : "unknown";
  const interest = allowedInterests.has(rawInterest) ? rawInterest : "ios_app";
  const useCase = allowedUseCases.has(rawUseCase) ? rawUseCase : "bedtime";
  const featureInterest = Array.isArray(body.featureInterest)
    ? body.featureInterest.filter((item) => allowedFeatures.has(item)).slice(0, 6)
    : [];

  const now = new Date().toISOString();
  const payload = {
    email,
    source,
    interest,
    useCase,
    featureInterest,
    message: body?.message?.slice(0, 500) || "",
    consentedAt: now,
    createdAt: now
  };

  let database: WaitlistDatabase | undefined;

  try {
    const { env } = await getCloudflareContext({ async: true });
    database = env.WAITLIST_DB;
  } catch {
    return NextResponse.json({ error: "Waitlist storage is not available yet." }, { status: 503 });
  }

  if (!database) {
    return NextResponse.json({ error: "Waitlist storage is not available yet." }, { status: 503 });
  }

  try {
    const result = await database
      .prepare(
        `INSERT INTO waitlist_subscribers (
          email, source, interest, use_case, feature_interest, message, consented_at, created_at, updated_at
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
        ON CONFLICT(email) DO UPDATE SET
          source = excluded.source,
          interest = excluded.interest,
          use_case = excluded.use_case,
          feature_interest = excluded.feature_interest,
          message = excluded.message,
          consented_at = excluded.consented_at,
          updated_at = excluded.updated_at,
          status = 'subscribed',
          unsubscribed_at = NULL`
      )
      .bind(
        payload.email,
        payload.source,
        payload.interest,
        payload.useCase,
        JSON.stringify(payload.featureInterest),
        payload.message,
        payload.consentedAt,
        payload.createdAt,
        payload.createdAt
      )
      .run();

    if (!result.success) {
      throw new Error("D1 write did not complete.");
    }
  } catch {
    return NextResponse.json({ error: "Could not save your signup. Please try again." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
