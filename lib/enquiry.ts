// Enquiry form: validation + delivery. Server-side only.
//
// Delivery channels (any that are configured are used; at least one must
// succeed):
//   1. CMS   — POST `${CMS_URL}/enquiries` (so admins see it in the CMS)
//   2. Email — Resend (https://resend.com): RESEND_API_KEY + ENQUIRY_TO_EMAIL
// In development with nothing configured, the enquiry is logged to the console.
import type { Enquiry } from "@/lib/content/types";

export type FieldErrors = Partial<Record<keyof Enquiry | "form", string>>;

const str = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export function validateEnquiry(raw: unknown): { ok: true; data: Enquiry } | { ok: false; errors: FieldErrors } {
  const r = (raw && typeof raw === "object" ? raw : {}) as Record<string, unknown>;
  const errors: FieldErrors = {};

  const childName = str(r.childName, 80);
  const ageGroup = str(r.ageGroup, 40);
  const parentName = str(r.parentName, 80);
  const phone = str(r.phone, 24);
  const email = str(r.email, 120);
  const message = str(r.message, 1000);

  if (childName.length < 2) errors.childName = "Please enter your child's name.";
  if (!ageGroup) errors.ageGroup = "Please choose an age group.";
  if (parentName.length < 2) errors.parentName = "Please enter the parent or guardian's name.";
  if (!/^\+?[0-9\s()-]{9,20}$/.test(phone) || phone.replace(/\D/g, "").length < 9)
    errors.phone = "Please enter a valid phone number.";
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "That email address doesn't look right.";
  if (r.consent !== true) errors.consent = "Please confirm you are the parent or guardian and agree to the privacy policy.";

  if (Object.keys(errors).length) return { ok: false, errors };
  return {
    ok: true,
    data: { childName, ageGroup, parentName, phone, email: email || undefined, message: message || undefined, consent: true },
  };
}

// --- simple per-instance rate limit (5 submissions / 10 min / IP) ----------
const hits = new Map<string, number[]>();
export function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < 10 * 60_000);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > 5;
}

const escHtml = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

async function sendToCms(e: Enquiry) {
  const token = process.env.CMS_TOKEN;
  const res = await fetch(`${process.env.CMS_URL}/enquiries`, {
    method: "POST",
    headers: { "Content-Type": "application/json", ...(token ? { Authorization: `Bearer ${token}` } : {}) },
    body: JSON.stringify({ ...e, receivedAt: new Date().toISOString(), status: "new" }),
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`CMS enquiries: ${res.status}`);
}

async function sendEmail(e: Enquiry) {
  const lines: [string, string][] = [
    ["Child", e.childName],
    ["Age group", e.ageGroup],
    ["Parent / guardian", e.parentName],
    ["Phone", e.phone],
    ["Email", e.email ?? "—"],
    ["Message", e.message ?? "—"],
  ];
  const text = lines.map(([k, v]) => `${k}: ${v}`).join("\n");
  const html =
    "<h2>New enquiry — Hope Rugby Academy</h2><table cellpadding=\"6\">" +
    lines.map(([k, v]) => `<tr><td><b>${escHtml(k)}</b></td><td>${escHtml(v).replace(/\n/g, "<br>")}</td></tr>`).join("") +
    "</table>";

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${process.env.RESEND_API_KEY}` },
    body: JSON.stringify({
      from: process.env.ENQUIRY_FROM_EMAIL ?? "Hope Rugby Academy <onboarding@resend.dev>",
      to: process.env.ENQUIRY_TO_EMAIL!.split(",").map((s) => s.trim()),
      subject: `New enquiry: ${e.childName} (${e.ageGroup})`,
      text,
      html,
      ...(e.email ? { reply_to: e.email } : {}),
    }),
  });
  if (!res.ok) throw new Error(`Resend: ${res.status}`);
}

/** Throws if the enquiry could not be delivered anywhere. */
export async function deliverEnquiry(e: Enquiry) {
  const jobs: Promise<void>[] = [];
  if (process.env.CMS_URL) jobs.push(sendToCms(e));
  if (process.env.RESEND_API_KEY && process.env.ENQUIRY_TO_EMAIL) jobs.push(sendEmail(e));

  if (jobs.length === 0) {
    if (process.env.NODE_ENV === "production") throw new Error("No enquiry delivery channel configured");
    console.log("[enquiry] (dev — nothing configured)", e);
    return;
  }
  const results = await Promise.allSettled(jobs);
  results.forEach((r) => r.status === "rejected" && console.error("[enquiry] delivery failed:", r.reason));
  if (!results.some((r) => r.status === "fulfilled")) throw new Error("All enquiry channels failed");
}
