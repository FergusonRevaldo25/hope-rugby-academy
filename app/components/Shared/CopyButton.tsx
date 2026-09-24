"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

async function copyText(text: string) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // Fallback for older browsers / non-secure contexts
    try {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.setAttribute("readonly", "");
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      const ok = document.execCommand("copy");
      document.body.removeChild(ta);
      return ok;
    } catch {
      return false;
    }
  }
}

export default function CopyButton({
  value,
  label = "Copy",
  ariaLabel,
  className = "",
}: {
  value: string;
  label?: string;
  ariaLabel?: string;
  className?: string;
}) {
  const [state, setState] = useState<"idle" | "copied" | "failed">("idle");

  async function onClick() {
    const ok = await copyText(value);
    setState(ok ? "copied" : "failed");
    setTimeout(() => setState("idle"), 1800);
  }

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel ?? `${label} ${value}`}
      className={`inline-flex min-h-10 shrink-0 items-center gap-1.5 rounded-full border px-4 text-[12px] font-semibold transition-colors duration-300 ${
        state === "copied"
          ? "border-crimson-bright bg-crimson-bright/15 text-white"
          : "border-white/15 text-mist hover:bg-white/5 hover:text-bone"
      } ${className}`}
    >
      {state === "copied" ? <Check size={14} /> : <Copy size={14} />}
      {state === "copied" ? "Copied" : state === "failed" ? "Press Ctrl+C" : label}
      <span className="sr-only" role="status" aria-live="polite">
        {state === "copied" ? "Copied to clipboard" : ""}
      </span>
    </button>
  );
}
