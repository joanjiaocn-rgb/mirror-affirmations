"use client";

export type AnalyticsEventName =
  | "page_view"
  | "demo_start_clicked"
  | "camera_permission_requested"
  | "camera_permission_granted"
  | "camera_permission_denied"
  | "camera_preview_ready"
  | "prompt_category_selected"
  | "prompt_randomized"
  | "overlay_position_changed"
  | "overlay_size_changed"
  | "mirror_toggle_changed"
  | "waitlist_form_started"
  | "waitlist_submitted";

type AnalyticsWindow = Window & {
  dataLayer?: unknown[];
  gtag?: (eventType: "event", eventName: string, properties?: Record<string, string | number | boolean>) => void;
};

export function trackEvent(eventName: AnalyticsEventName, properties: Record<string, string | number | boolean> = {}) {
  if (typeof window === "undefined") {
    return;
  }

  const analyticsWindow = window as AnalyticsWindow;

  window.dispatchEvent(
    new CustomEvent("mirror-affirmations:event", {
      detail: {
        eventName,
        properties
      }
    })
  );

  if (analyticsWindow.gtag) {
    analyticsWindow.gtag("event", eventName, properties);
  }

  if (analyticsWindow.dataLayer) {
    analyticsWindow.dataLayer.push({
      event: eventName,
      ...properties
    });
  }
}
