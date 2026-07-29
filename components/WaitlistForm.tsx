"use client";

import { FormEvent, useState } from "react";
import { Mail } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

type WaitlistFormProps = {
  source: "homepage" | "demo" | "seo_page";
  compact?: boolean;
};

const interests = [
  { value: "ios_app", label: "iOS app" },
  { value: "android_app", label: "Android app" },
  { value: "web_only", label: "Web only" },
  { value: "creator_resource", label: "Creator resource" }
];

export function WaitlistForm({ source, compact = false }: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState("ios_app");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "demo" | "error">("idle");
  const [hasStarted, setHasStarted] = useState(false);

  const markStarted = () => {
    if (!hasStarted) {
      setHasStarted(true);
      trackEvent("waitlist_form_started", { source });
    }
  };

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    markStarted();

    if (!email.includes("@")) {
      setStatus("error");
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email,
          source,
          interest,
          message
        })
      });

      if (!response.ok) {
        throw new Error("Waitlist request failed");
      }

      const result = (await response.json()) as { demoMode?: boolean };
      trackEvent("waitlist_submitted", { source, interest, demoMode: Boolean(result.demoMode) });
      setStatus(result.demoMode ? "demo" : "success");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <form className={compact ? "waitlist-form compact" : "waitlist-form"} onSubmit={submit}>
      <label>
        <span>Email</span>
        <input
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          onFocus={markStarted}
          required
        />
      </label>
      <label>
        <span>Interest</span>
        <select
          name="interest"
          value={interest}
          onChange={(event) => {
            setInterest(event.target.value);
            markStarted();
          }}
        >
          {interests.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </label>
      {!compact ? (
        <label>
          <span>Optional note</span>
          <textarea
            name="message"
            placeholder="What would make this useful for you?"
            value={message}
            onChange={(event) => {
              setMessage(event.target.value);
              markStarted();
            }}
          />
        </label>
      ) : null}
      <button className="primary-button" type="submit" disabled={status === "submitting"}>
        <Mail size={17} aria-hidden="true" />
        {status === "submitting" ? "Joining..." : "Join waitlist"}
      </button>
      {status === "success" ? (
        <p className="form-note success">You are on the list. I will only email when there is something useful to try.</p>
      ) : null}
      {status === "demo" ? (
        <p className="form-note">
          Saved for this preview. Add a waitlist endpoint before public launch to collect signups.
        </p>
      ) : null}
      {status === "error" ? <p className="form-note error">Please check the email and try again.</p> : null}
    </form>
  );
}
