// Pure helpers for "Add to calendar". No dependencies.
import type { EventItem } from "@/lib/content/types";

const pad = (n: number) => String(n).padStart(2, "0");

/** 20261010T070000Z */
function utc(d: Date) {
  return (
    `${d.getUTCFullYear()}${pad(d.getUTCMonth() + 1)}${pad(d.getUTCDate())}` +
    `T${pad(d.getUTCHours())}${pad(d.getUTCMinutes())}${pad(d.getUTCSeconds())}Z`
  );
}

function range(e: EventItem) {
  const start = new Date(e.start);
  const end = e.end ? new Date(e.end) : new Date(start.getTime() + 2 * 3600_000);
  return { start, end };
}

const where = (e: EventItem) => [e.venue, e.address].filter(Boolean).join(", ");

export function googleCalendarUrl(e: EventItem) {
  const { start, end } = range(e);
  const p = new URLSearchParams({
    action: "TEMPLATE",
    text: `${e.title} — Hope Rugby Academy`,
    dates: `${utc(start)}/${utc(end)}`,
    details: e.description,
    location: where(e),
  });
  return `https://calendar.google.com/calendar/render?${p.toString()}`;
}

const esc = (s: string) => s.replace(/\\/g, "\\\\").replace(/;/g, "\\;").replace(/,/g, "\\,").replace(/\r?\n/g, "\\n");

export function buildIcs(e: EventItem) {
  const { start, end } = range(e);
  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Hope Rugby Academy//Events//EN",
    "CALSCALE:GREGORIAN",
    "BEGIN:VEVENT",
    `UID:${e.id}@hoperugbyacademy`,
    `DTSTAMP:${utc(new Date())}`,
    `DTSTART:${utc(start)}`,
    `DTEND:${utc(end)}`,
    `SUMMARY:${esc(`${e.title} — Hope Rugby Academy`)}`,
    `DESCRIPTION:${esc(e.description)}`,
    `LOCATION:${esc(where(e))}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
}
