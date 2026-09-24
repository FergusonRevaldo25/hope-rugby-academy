import type { Enquiry } from "@/lib/content/types";
import { prisma } from "@/lib/prisma";

export type FieldErrors = Partial<Record<keyof Enquiry | "form", string>>;
const str = (v: unknown, max: number) =>
  typeof v === "string" ? v.trim().slice(0, max) : "";

export function validateEnquiry(
  raw: unknown,
): { ok: true; data: Enquiry } | { ok: false; errors: FieldErrors } {
  const r = (raw && typeof raw === "object" ? raw : {}) as Record<
    string,
    unknown
  >;
  const errors: FieldErrors = {};
  const childName = str(r.childName, 80),
    ageGroup = str(r.ageGroup, 40),
    parentName = str(r.parentName, 80);
  const phone = str(r.phone, 24),
    email = str(r.email, 120),
    message = str(r.message, 1000);
  if (childName.length < 2)
    errors.childName = "Please enter your child's name.";
  if (!ageGroup) errors.ageGroup = "Please choose an age group.";
  if (parentName.length < 2)
    errors.parentName = "Please enter the parent or guardian's name.";
  if (
    !/^\+?[0-9\s()-]{9,20}$/.test(phone) ||
    phone.replace(/\D/g, "").length < 9
  )
    errors.phone = "Please enter a valid phone number.";
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    errors.email = "That email address doesn't look right.";
  if (r.consent !== true)
    errors.consent =
      "Please confirm you are the parent or guardian and agree to the privacy policy.";
  if (Object.keys(errors).length) return { ok: false, errors };
  return {
    ok: true,
    data: {
      childName,
      ageGroup,
      parentName,
      phone,
      email: email || undefined,
      message: message || undefined,
      consent: true,
    },
  };
}

const hits = new Map<string, number[]>();
export function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < 600000);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > 5;
}

const esc = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

async function sendEmail(e: Enquiry) {
  if (!process.env.RESEND_API_KEY || !process.env.ENQUIRY_TO_EMAIL) return;
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
    '<h2>New enquiry — Hope Rugby Academy</h2><table cellpadding="6">' +
    lines
      .map(
        ([k, v]) =>
          `<tr><td><b>${esc(k)}</b></td><td>${esc(v).replace(/\n/g, "<br>")}</td></tr>`,
      )
      .join("") +
    "</table>";
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from:
        process.env.ENQUIRY_FROM_EMAIL ??
        "Hope Rugby Academy <onboarding@resend.dev>",
      to: process.env.ENQUIRY_TO_EMAIL.split(",").map((s) => s.trim()),
      subject: `New enquiry: ${e.childName} (${e.ageGroup})`,
      text,
      html,
      ...(e.email ? { reply_to: e.email } : {}),
    }),
  });
  if (!res.ok) throw new Error(`Resend: ${res.status}`);
}

export async function deliverEnquiry(e: Enquiry) {
  // Database is now the primary source of truth. This means enquiries are
  // visible in /admin/enquiries even when email is not configured.
  const saved = await prisma.enquiry.create({
    data: {
      childName: e.childName,
      ageGroup: e.ageGroup,
      parentName: e.parentName,
      parentPhone: e.phone,
      email: e.email,
      message: e.message,
      status: "new",
    },
  });

  try {
    await sendEmail(e);
  } catch (err) {
    console.error(
      "[enquiry] email delivery failed; enquiry is safely stored in Neon",
      err,
    );
  }

  if (process.env.NODE_ENV !== "production" && !process.env.RESEND_API_KEY) {
    console.log("[enquiry] stored in database", saved.id, e);
  }
}
