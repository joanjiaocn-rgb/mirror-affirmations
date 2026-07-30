"use client";

import { FormEvent, useMemo, useState } from "react";
import { CheckCircle2, Mail } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

type WaitlistFormProps = {
  source: "homepage" | "demo" | "seo_page" | "waitlist_page";
  compact?: boolean;
};

const interests = [
  { value: "ios_app", label: "iOS app" },
  { value: "android_app", label: "Android app" },
  { value: "web_only", label: "Web only" },
  { value: "creator_resource", label: "Creator resource" }
];

const useCases = [
  { value: "bedtime", label: "Bedtime wind-down" },
  { value: "work_stress", label: "After work stress" },
  { value: "self_doubt", label: "Self-doubt moments" },
  { value: "morning", label: "Morning reset" },
  { value: "creator", label: "For my audience or clients" }
];

const featureOptions = [
  { value: "local_recording", label: "Local video recording" },
  { value: "private_history", label: "Private history" },
  { value: "gentle_reminders", label: "Gentle reminders" },
  { value: "face_id_lock", label: "Face ID lock" },
  { value: "custom_prompts", label: "Custom prompts" },
  { value: "creator_pack", label: "Shareable resource pack" }
];

export function WaitlistForm({ source, compact = false }: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState("ios_app");
  const [useCase, setUseCase] = useState("bedtime");
  const [featureInterest, setFeatureInterest] = useState<string[]>(compact ? ["local_recording"] : []);
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "demo" | "error">("idle");
  const [hasStarted, setHasStarted] = useState(false);

  const selectedFeatureText = useMemo(() => {
    if (!featureInterest.length) {
      return "Choose what would make the app useful for you.";
    }

    return `${featureInterest.length} selected`;
  }, [featureInterest.length]);

  const markStarted = () => {
    if (!hasStarted) {
      setHasStarted(true);
      trackEvent("waitlist_form_started", { source });
    }
  };

  const toggleFeature = (value: string) => {
    markStarted();
    setFeatureInterest((current) =>
      current.includes(value) ? current.filter((item) => item !== value) : [...current, value]
    );
  };

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    markStarted();

    if (!email.includes("@") || !consent) {
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
          useCase,
          featureInterest,
          consent,
          website,
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
      setConsent(false);
    } catch {
      setStatus("error");
    }
  };

  return (
    <form className={compact ? "waitlist-form compact" : "waitlist-form"} onSubmit={submit}>
      <div className="honeypot-field" aria-hidden="true">
        <label>
          <span>Website</span>
          <input
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={website}
            onChange={(event) => setWebsite(event.target.value)}
          />
        </label>
      </div>

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
          <span>Most likely use</span>
          <select
            name="useCase"
            value={useCase}
            onChange={(event) => {
              setUseCase(event.target.value);
              markStarted();
            }}
          >
            {useCases.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </label>
      ) : null}

      {!compact ? (
        <fieldset className="feature-picker">
          <legend>What would you want first?</legend>
          <p>{selectedFeatureText}</p>
          <div className="feature-options">
            {featureOptions.map((option) => (
              <label key={option.value}>
                <input
                  type="checkbox"
                  checked={featureInterest.includes(option.value)}
                  onChange={() => toggleFeature(option.value)}
                />
                <span>{option.label}</span>
              </label>
            ))}
          </div>
        </fieldset>
      ) : null}

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

      <label className="consent-row">
        <input
          type="checkbox"
          checked={consent}
          onChange={(event) => {
            setConsent(event.target.checked);
            markStarted();
          }}
          required
        />
        <span>Email me about this product. I understand this is a self-care tool, not a medical or therapy service.</span>
      </label>

      <button className="primary-button" type="submit" disabled={status === "submitting"}>
        <Mail size={17} aria-hidden="true" />
        {status === "submitting" ? "Joining..." : "Join waitlist"}
      </button>

      {status === "success" ? (
        <div className="form-result success">
          <CheckCircle2 size={18} aria-hidden="true" />
          <p>You are on the list. I will only email when there is something useful to try.</p>
        </div>
      ) : null}
      {status === "demo" ? (
        <div className="form-result">
          <CheckCircle2 size={18} aria-hidden="true" />
          <p>Preview mode: the form works. Connect the waitlist collector before inviting real visitors.</p>
        </div>
      ) : null}
      {status === "error" ? <p className="form-note error">Please check the email, consent checkbox, and try again.</p> : null}
      <p className="form-note">No camera, video, audio, or face data is sent with this form.</p>
    </form>
  );
}
