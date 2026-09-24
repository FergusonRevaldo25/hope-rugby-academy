"use client";

import { CalendarPlus } from "lucide-react";
import type { EventItem } from "@/lib/content/types";
import { googleCalendarUrl, buildIcs } from "@/lib/calendar";

export default function AddToCalendar({ event }: { event: EventItem }) {
  function downloadIcs() {
    const blob = new Blob([buildIcs(event)], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${event.id}.ics`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  const btn =
    "inline-flex min-h-10 items-center gap-1.5 rounded-full border border-white/15 px-3.5 text-[12px] font-semibold text-mist transition-colors duration-300 hover:border-crimson-bright/50 hover:bg-white/5 hover:text-bone";

  return (
    <div className="flex flex-wrap gap-2">
      <a href={googleCalendarUrl(event)} target="_blank" rel="noopener noreferrer" className={btn}>
        <CalendarPlus size={14} /> Google
      </a>
      <button type="button" onClick={downloadIcs} className={btn}>
        <CalendarPlus size={14} /> Apple / Outlook
      </button>
    </div>
  );
}
