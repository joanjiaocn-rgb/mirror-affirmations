import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  const body = (await request.json().catch(() => null)) as
    | {
        email?: string;
        source?: string;
        interest?: string;
        message?: string;
      }
    | null;

  const email = body?.email?.trim().toLowerCase();

  if (!email || !emailPattern.test(email)) {
    return NextResponse.json({ error: "A valid email is required." }, { status: 400 });
  }

  const payload = {
    email,
    source: body?.source || "unknown",
    interest: body?.interest || "ios_app",
    message: body?.message?.slice(0, 500) || "",
    createdAt: new Date().toISOString()
  };

  if (!process.env.WAITLIST_WEBHOOK_URL) {
    console.info("waitlist_preview", { source: payload.source, interest: payload.interest, createdAt: payload.createdAt });
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
