"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Camera, Lock, Shuffle, Square, VideoOff } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { categories, getCategory, getPromptsByCategory, prompts, type Prompt, type PromptCategory } from "@/lib/prompts";
import { trackEvent } from "@/lib/analytics";
import { WaitlistForm } from "@/components/WaitlistForm";

type CameraState = "idle" | "requesting" | "live" | "denied" | "unsupported" | "off";
type OverlayPosition = "top" | "center" | "bottom";
type TextSize = "small" | "medium" | "large";

const defaultSettings = {
  category: "bedtime" as PromptCategory,
  position: "center" as OverlayPosition,
  textSize: "medium" as TextSize,
  mirror: true,
  promptId: "bedtime_001"
};

type DemoSettings = typeof defaultSettings;

function isPromptCategory(value: string | null): value is PromptCategory {
  return Boolean(value && categories.some((category) => category.id === value));
}

function randomPrompt(items: Prompt[], currentId?: string) {
  if (items.length <= 1) {
    return items[0] || prompts[0];
  }

  const nextItems = items.filter((item) => item.id !== currentId);
  return nextItems[Math.floor(Math.random() * nextItems.length)] || items[0];
}

function firstPromptForCategory(category: PromptCategory) {
  return getPromptsByCategory(category)[0] || prompts[0];
}

function readInitialSettings(requestedCategory: PromptCategory | null): DemoSettings {
  const settings = {
    ...defaultSettings,
    category: requestedCategory || defaultSettings.category,
    promptId: firstPromptForCategory(requestedCategory || defaultSettings.category).id
  };

  if (typeof window === "undefined") {
    return settings;
  }

  const savedSettings = window.localStorage.getItem("mirror-affirmations:settings");

  if (!savedSettings) {
    return settings;
  }

  try {
    const parsed = JSON.parse(savedSettings) as Partial<DemoSettings> & { lastPromptId?: string };
    const savedCategory = parsed.category || null;
    const nextCategory = requestedCategory || (isPromptCategory(savedCategory) ? savedCategory : settings.category);
    const savedPrompt = prompts.find((item) => item.id === parsed.lastPromptId && item.category === nextCategory);

    return {
      category: nextCategory,
      position:
        parsed.position === "top" || parsed.position === "center" || parsed.position === "bottom"
          ? parsed.position
          : settings.position,
      textSize:
        parsed.textSize === "small" || parsed.textSize === "medium" || parsed.textSize === "large"
          ? parsed.textSize
          : settings.textSize,
      mirror: typeof parsed.mirror === "boolean" ? parsed.mirror : settings.mirror,
      promptId: savedPrompt?.id || firstPromptForCategory(nextCategory).id
    };
  } catch {
    window.localStorage.removeItem("mirror-affirmations:settings");
    return settings;
  }
}

export function DemoClient() {
  const searchParams = useSearchParams();
  const requestedCategory = searchParams.get("category");
  const initialCategory: PromptCategory | null = isPromptCategory(requestedCategory) ? requestedCategory : null;
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const [cameraState, setCameraState] = useState<CameraState>("idle");
  const [settings, setSettings] = useState<DemoSettings>(() => readInitialSettings(initialCategory));
  const { category, mirror, position, promptId, textSize } = settings;
  const categoryPrompts = useMemo(() => getPromptsByCategory(category), [category]);
  const prompt = useMemo(
    () => prompts.find((item) => item.id === promptId && item.category === category) || firstPromptForCategory(category),
    [category, promptId]
  );

  useEffect(() => {
    window.localStorage.setItem(
      "mirror-affirmations:settings",
      JSON.stringify({
        category,
        position,
        textSize,
        mirror,
        lastPromptId: prompt.id
      })
    );
  }, [category, mirror, position, prompt.id, textSize]);

  useEffect(() => {
    const video = videoRef.current;

    if (video && streamRef.current) {
      video.srcObject = streamRef.current;
    }
  }, [cameraState]);

  const stopCamera = useCallback(() => {
    streamRef.current?.getTracks().forEach((track) => track.stop());
    streamRef.current = null;

    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }

    setCameraState((current) => (current === "live" || current === "requesting" ? "off" : current));
  }, []);

  useEffect(() => {
    return () => {
      stopCamera();
    };
  }, [stopCamera]);

  const startCamera = async () => {
    trackEvent("demo_start_clicked", { mode: "camera" });

    if (!navigator.mediaDevices?.getUserMedia) {
      setCameraState("unsupported");
      return;
    }

    setCameraState("requesting");
    trackEvent("camera_permission_requested");

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: false,
        video: {
          facingMode: "user"
        }
      });

      streamRef.current = stream;
      setCameraState("live");
      trackEvent("camera_permission_granted");

      requestAnimationFrame(() => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.play().catch(() => undefined);
          trackEvent("camera_preview_ready");
        }
      });
    } catch {
      setCameraState("denied");
      trackEvent("camera_permission_denied");
    }
  };

  const practiceWithoutCamera = () => {
    stopCamera();
    setCameraState("off");
    trackEvent("demo_start_clicked", { mode: "no_camera" });
  };

  const selectCategory = (nextCategory: PromptCategory) => {
    const nextPrompt = firstPromptForCategory(nextCategory);
    setSettings((current) => ({
      ...current,
      category: nextCategory,
      promptId: nextPrompt.id
    }));
    trackEvent("prompt_category_selected", { category: nextCategory });
  };

  const shufflePrompt = () => {
    const nextPrompt = randomPrompt(categoryPrompts, prompt.id);
    setSettings((current) => ({
      ...current,
      promptId: nextPrompt.id
    }));
    trackEvent("prompt_randomized", { category });
  };

  const setOverlayPosition = (nextPosition: OverlayPosition) => {
    setSettings((current) => ({
      ...current,
      position: nextPosition
    }));
    trackEvent("overlay_position_changed", { position: nextPosition });
  };

  const setOverlaySize = (nextSize: TextSize) => {
    setSettings((current) => ({
      ...current,
      textSize: nextSize
    }));
    trackEvent("overlay_size_changed", { size: nextSize });
  };

  const toggleMirror = () => {
    const nextMirror = !mirror;
    setSettings((current) => ({
      ...current,
      mirror: nextMirror
    }));
    trackEvent("mirror_toggle_changed", { mirror: nextMirror });
  };

  const selectedCategory = getCategory(category);
  const showVideo = cameraState === "live";
  const showFallback =
    cameraState === "idle" || cameraState === "off" || cameraState === "denied" || cameraState === "unsupported";

  return (
    <div className="demo-layout">
      <section className="demo-stage" aria-label="Private mirror practice preview">
        <div className={`phone-frame ${showVideo ? "is-live" : ""}`}>
          <div className="video-surface">
            <video
              ref={videoRef}
              className={mirror ? "camera-video mirrored" : "camera-video"}
              autoPlay
              muted
              playsInline
              aria-label="Live private camera preview"
            />
            {showFallback ? (
              <div className="camera-placeholder">
                <div className="placeholder-mark">
                  {cameraState === "denied" || cameraState === "unsupported" ? (
                    <VideoOff size={30} aria-hidden="true" />
                  ) : (
                    <Camera size={30} aria-hidden="true" />
                  )}
                </div>
                <p>{cameraState === "idle" ? "Private preview is off" : "Practice mode is ready"}</p>
                <span>
                  {cameraState === "denied"
                    ? "Camera access is off. You can still practice without it."
                    : cameraState === "unsupported"
                      ? "This browser does not support camera preview."
                      : "Start the camera or practice without it."}
                </span>
              </div>
            ) : null}
            <div className={`prompt-overlay position-${position} size-${textSize}`}>
              <p>{prompt.text}</p>
            </div>
          </div>
          <div className="phone-controls">
            {cameraState === "live" ? (
              <button className="secondary-button dark" type="button" onClick={stopCamera}>
                <Square size={16} aria-hidden="true" />
                Stop camera
              </button>
            ) : (
              <button className="primary-button dark" type="button" onClick={startCamera} disabled={cameraState === "requesting"}>
                <Camera size={16} aria-hidden="true" />
                {cameraState === "requesting" ? "Starting..." : "Start camera"}
              </button>
            )}
            <button className="secondary-button dark" type="button" onClick={shufflePrompt}>
              <Shuffle size={16} aria-hidden="true" />
              New prompt
            </button>
          </div>
        </div>
        <p className="privacy-inline">
          <Lock size={15} aria-hidden="true" />
          Your camera preview stays in your browser. This demo does not record, save, or upload video.
        </p>
      </section>

      <aside className="demo-panel">
        <div>
          <p className="eyebrow">Current prompt</p>
          <h2>{selectedCategory.label}</h2>
          <p>{selectedCategory.description}</p>
        </div>

        <div className="control-group">
          <span className="control-label">Category</span>
          <div className="chip-row">
            {categories.map((item) => (
              <button
                className={item.id === category ? "chip selected" : "chip"}
                key={item.id}
                type="button"
                onClick={() => selectCategory(item.id)}
              >
                {item.shortLabel}
              </button>
            ))}
          </div>
        </div>

        <div className="control-grid">
          <div className="control-group">
            <span className="control-label">Text size</span>
            <div className="segmented-control">
              {(["small", "medium", "large"] as const).map((item) => (
                <button
                  className={item === textSize ? "selected" : ""}
                  key={item}
                  type="button"
                  onClick={() => setOverlaySize(item)}
                >
                  {item === "small" ? "S" : item === "medium" ? "M" : "L"}
                </button>
              ))}
            </div>
          </div>
          <div className="control-group">
            <span className="control-label">Position</span>
            <div className="segmented-control position">
              {(["top", "center", "bottom"] as const).map((item) => (
                <button
                  className={item === position ? "selected" : ""}
                  key={item}
                  type="button"
                  onClick={() => setOverlayPosition(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="control-row">
          <button className="secondary-button" type="button" onClick={practiceWithoutCamera}>
            <VideoOff size={16} aria-hidden="true" />
            Practice without camera
          </button>
          <button className={mirror ? "toggle selected" : "toggle"} type="button" onClick={toggleMirror} aria-pressed={mirror}>
            Mirror preview
          </button>
        </div>

        <div className="mini-waitlist">
          <h2>Want local recording later?</h2>
          <p>Join the waitlist for the future iOS app with local recording, private history, and gentle reminders.</p>
          <WaitlistForm source="demo" compact />
        </div>
      </aside>
    </div>
  );
}
