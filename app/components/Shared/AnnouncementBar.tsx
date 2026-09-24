"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { X, ArrowRight } from "lucide-react";
import type { AlertItem } from "@/lib/content/types";

// djb2 — so editing an alert's text makes it reappear for people who
// dismissed the old version.
function hash(s: string) {
  let h = 5381;
  for (let i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) | 0;
  return (h >>> 0).toString(36);
}

export default function AnnouncementBar({ alert }: { alert: AlertItem | null }) {
  const [visible, setVisible] = useState(false);
  const urgent = alert?.severity === "urgent";
  const key = alert ? `hra-alert:${alert.id}:${hash(alert.message + (alert.linkHref ?? ""))}` : "";

  useEffect(() => {
    if (!alert) return;
    // re-check the time window in the browser (page may be cached)
    const now = Date.now();
    const s = alert.startsAt ? new Date(alert.startsAt).getTime() : -Infinity;
    const e = alert.endsAt ? new Date(alert.endsAt).getTime() : Infinity;
    if (now < s || now > e) return;
    try {
      // urgent alerts always show; info alerts respect dismissal
      if (urgent || localStorage.getItem(key) !== "1") setVisible(true);
    } catch {
      setVisible(true);
    }
  }, [alert, key, urgent]);

  function dismiss() {
    setVisible(false);
    try {
      localStorage.setItem(key, "1");
    } catch {
      // ignore
    }
  }

  if (!alert) return null;
  const linkColor = urgent ? "text-crimson" : "text-white";

  return (
    <AnimatePresence initial={false}>
      {visible && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          exit={{ height: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          role={urgent ? "alert" : "status"}
          className={`relative z-[70] overflow-hidden ${urgent ? "bg-white" : "bg-crimson-gradient"}`}
        >
          <div className="mx-auto flex max-w-7xl items-center justify-center gap-3 px-12 py-2.5 text-center lg:px-10">
            {urgent && (
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-crimson opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-crimson" />
              </span>
            )}
            <p className={`text-[13px] font-semibold ${urgent ? "text-crimson" : "font-medium text-white"}`}>
              {alert.message}
            </p>
            {alert.linkHref && (
              <Link
                href={alert.linkHref}
                className={`hidden shrink-0 items-center gap-1 text-[13px] font-semibold underline underline-offset-2 sm:inline-flex ${linkColor}`}
              >
                {alert.linkLabel ?? "Details"} <ArrowRight size={13} />
              </Link>
            )}
            {!urgent && (
              <button
                aria-label="Dismiss announcement"
                onClick={dismiss}
                className="absolute right-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/15 hover:text-white"
              >
                <X size={14} />
              </button>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
