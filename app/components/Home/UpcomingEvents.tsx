import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { EventItem } from "@/lib/content/types";
import EventGrid from "../Events/EventGrid";

export default function UpcomingEvents({ events }: { events: EventItem[] }) {
  if (events.length === 0) return null;
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <h2 className="text-balance font-display text-3xl font-extrabold tracking-tight text-bone lg:text-4xl">
            Coming <span className="text-crimson-bright text-glow-red">up.</span>
          </h2>
          <Link href="/events" className="inline-flex items-center gap-2 text-[14px] font-semibold text-red-soft transition-colors hover:text-bone">
            All events <ArrowRight size={16} />
          </Link>
        </div>
        <EventGrid events={events} />
      </div>
    </section>
  );
}
