export type AnalyticsEvent =
  | "page_view"
  | "cta_click"
  | "whatsapp_click"
  | "consultation_form_start"
  | "consultation_form_submit"
  | "survey_request"
  | "portfolio_view"
  | "project_view"
  | "budget_guide_view"
  | "phone_click"
  | "scroll_75";

export interface EventProperties {
  page_path?: string;
  cta_location?: string;
  cta_text?: string;
  project_slug?: string;
  service_type?: string;
  lead_source?: string;
  campaign?: string;
  viewport_type?: string;
  [key: string]: unknown;
}

export function trackEvent(eventName: AnalyticsEvent, properties?: EventProperties) {
  if (typeof window === "undefined") return;

  const payload = {
    event: eventName,
    properties: {
      ...properties,
      timestamp: new Date().toISOString(),
      url: window.location.href,
      path: window.location.pathname,
    },
  };

  // Push to dataLayer if present (Google Tag Manager)
  const win = window as unknown as { dataLayer?: unknown[] };
  if (Array.isArray(win.dataLayer)) {
    win.dataLayer.push(payload);
  }

  // Store in session storage for local debugging / admin verification
  try {
    const existingRaw = sessionStorage.getItem("analytics_events") || "[]";
    const existing = JSON.parse(existingRaw);
    existing.push(payload);
    sessionStorage.setItem("analytics_events", JSON.stringify(existing.slice(-100)));
  } catch {
    // Ignore storage errors
  }

  // Dev log
  if (process.env.NODE_ENV === "development") {
    // eslint-disable-next-line no-console
    console.log(`[Analytics Event] ${eventName}:`, payload.properties);
  }
}
