import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

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

  const payload = {
    email,
    source,
    interest,
    useCase,
    featureInterest,
    message: body?.message?.slice(0, 500) || "",
    consent: true,
    createdAt: new Date().toISOString()
  };

  if (!process.env.WAITLIST_WEBHOOK_URL) {
    console.info("waitlist_preview", {
      source: payload.source,
      interest: payload.interest,
      useCase: payload.useCase,
      featureInterest: payload.featureInterest,
      createdAt: payload.createdAt
    });
    return NextResponse.json({ ok: true, demoMode: true });
  }

  const response = await fetch(process.env.WAITLIST_WEBHOOK_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    return NextResponse.json({ error: "Waitlist provider failed." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
