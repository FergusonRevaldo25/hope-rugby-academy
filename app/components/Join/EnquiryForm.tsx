"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import { Loader2, CheckCircle2, MessageCircle } from "lucide-react";
import { CONTACT } from "@/lib/data";

type Errors = Partial<Record<"childName" | "ageGroup" | "parentName" | "phone" | "email" | "consent" | "form", string>>;

const input =
  "w-full rounded-xl border bg-navy-950/70 px-4 py-3 text-[15px] text-bone placeholder:text-mist/50 transition-colors duration-300 focus:border-crimson-bright focus:outline-none";

function Field({
  id, label, error, optional, children,
}: { id: string; label: string; error?: string; optional?: boolean; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-[13px] font-semibold text-bone">
        {label} {optional && <span className="font-normal text-mist/70">(optional)</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-[12px] font-medium text-red-soft">
          {error}
        </p>
      )}
    </div>
  );
}

export default function EnquiryForm({ ageGroups }: { ageGroups: string[] }) {
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");
  const [errors, setErrors] = useState<Errors>({});
  const startedAt = useRef(0);
  const summary = useRef<HTMLDivElement>(null);

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    const fd = new FormData(e.currentTarget);
    const payload = {
      childName: fd.get("childName"),
      ageGroup: fd.get("ageGroup"),
      parentName: fd.get("parentName"),
      phone: fd.get("phone"),
      email: fd.get("email"),
      message: fd.get("message"),
      consent: fd.get("consent") === "on",
      website: fd.get("website"), // honeypot
      startedAt: startedAt.current,
    };

    setStatus("sending");
    setErrors({});
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json().catch(() => ({ ok: false, errors: { form: "Something went wrong." } }));
      if (json.ok) {
        setStatus("done");
        return;
      }
      setErrors(json.errors ?? { form: "Something went wrong." });
    } catch {
      setErrors({ form: "We couldn't reach the server. Check your connection and try again." });
    }
    setStatus("idle");
    setTimeout(() => summary.current?.focus(), 50);
  }

  if (status === "done") {
    return (
      <div className="rounded-2xl border border-crimson-bright/40 bg-navy-900/80 p-8 shadow-glow" role="status">
        <CheckCircle2 size={36} className="text-crimson-bright" />
        <h2 className="mt-4 font-display text-2xl font-extrabold text-bone">Thank you — we've got it!</h2>
        <p className="mt-3 text-[15px] leading-relaxed text-mist">
          A coach will contact you soon. Training is on {CONTACT.trainingDay.toLowerCase()}, {CONTACT.trainingTime}, at{" "}
          {CONTACT.venue} — you're welcome to come along any time.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/training" className="rounded-full bg-crimson px-6 py-3 text-[14px] font-semibold text-white shadow-crimson">
            Training details
          </Link>
          <a
            href={CONTACT.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-[14px] font-medium text-bone hover:bg-white/5"
          >
            <MessageCircle size={16} /> WhatsApp us
          </a>
        </div>
      </div>
    );
  }

  const bd = (k: keyof Errors) => (errors[k] ? "border-crimson-bright" : "border-white/15");
  const aria = (k: keyof Errors) => ({
    "aria-invalid": errors[k] ? true : undefined,
    "aria-describedby": errors[k] ? `${k}-error` : undefined,
  });

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="grid gap-5 rounded-2xl border border-white/10 bg-navy-900/80 p-6 shadow-card sm:p-8"
    >
      {errors.form && (
        <div
          ref={summary}
          tabIndex={-1}
          role="alert"
          className="rounded-xl border border-crimson-bright/50 bg-crimson/15 p-4 text-[14px] text-bone"
        >
          {errors.form} You can also{" "}
          <a href={CONTACT.whatsappHref} className="font-semibold underline" target="_blank" rel="noopener noreferrer">
            WhatsApp us
          </a>{" "}
          or call{" "}
          <a href={CONTACT.phoneHref} className="font-semibold underline">
            {CONTACT.phone}
          </a>
          .
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="childName" label="Child's name" error={errors.childName}>
          <input id="childName" name="childName" type="text" required maxLength={80} autoComplete="off"
            className={`${input} ${bd("childName")}`} {...aria("childName")} />
        </Field>
        <Field id="ageGroup" label="Age group" error={errors.ageGroup}>
          <select id="ageGroup" name="ageGroup" required defaultValue="" className={`${input} ${bd("ageGroup")}`} {...aria("ageGroup")}>
            <option value="" disabled>Choose…</option>
            {ageGroups.map((g) => (
              <option key={g} value={g}>{g}</option>
            ))}
            <option value="Not sure yet">Not sure yet</option>
          </select>
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="parentName" label="Parent / guardian name" error={errors.parentName}>
          <input id="parentName" name="parentName" type="text" required maxLength={80} autoComplete="name"
            className={`${input} ${bd("parentName")}`} {...aria("parentName")} />
        </Field>
        <Field id="phone" label="Contact number" error={errors.phone}>
          <input id="phone" name="phone" type="tel" inputMode="tel" required maxLength={24} autoComplete="tel"
            placeholder="072 123 4567" className={`${input} ${bd("phone")}`} {...aria("phone")} />
        </Field>
      </div>

      <Field id="email" label="Email" optional error={errors.email}>
        <input id="email" name="email" type="email" maxLength={120} autoComplete="email"
          className={`${input} ${bd("email")}`} {...aria("email")} />
      </Field>

      <Field id="message" label="Anything we should know?" optional>
        <textarea id="message" name="message" rows={4} maxLength={1000}
          placeholder="Previous experience, questions, medical notes…" className={`${input} border-white/15`} />
      </Field>

      {/* honeypot — hidden from people, bots fill it in */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div>
        <label className="flex cursor-pointer items-start gap-3 text-[13px] leading-relaxed text-mist">
          <input type="checkbox" name="consent" required className="mt-1 h-4 w-4 shrink-0 accent-[#f2233e]"
            {...aria("consent")} />
          <span>
            I am this child's parent or guardian and I agree to Hope Rugby Academy using these details to respond to my
            enquiry, as explained in the{" "}
            <Link href="/privacy" className="font-semibold text-red-soft underline">
              Privacy Policy
            </Link>
            .
          </span>
        </label>
        {errors.consent && <p id="consent-error" className="mt-1.5 text-[12px] font-medium text-red-soft">{errors.consent}</p>}
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="animate-glow-pulse inline-flex items-center justify-center gap-2 rounded-full bg-crimson px-7 py-4 text-[15px] font-semibold text-white shadow-crimson transition-transform duration-300 ease-silk hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70"
      >
        {status === "sending" ? (<><Loader2 size={17} className="animate-spin" /> Sending…</>) : "Send enquiry"}
      </button>
    </form>
  );
}
