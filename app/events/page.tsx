import type { Metadata } from "next";
import Link from "next/link";
import Section from "../components/Shared/Section";
import EventGrid from "../components/Events/EventGrid";
import CTABanner from "../components/Shared/CTABanner";
import { getEvents, getHeading } from "@/lib/content";

export const metadata: Metadata = {
  title: "Events & Fixtures — Hope Rugby Academy",
  description: "Match days, tournaments, clinics and awards evenings at Hope Rugby Academy, with add-to-calendar.",
};

// events move from "upcoming" to "past" over time
export const revalidate = 300;

export default async function EventsPage() {
  const [heading, { upcoming, past }] = await Promise.all([getHeading("events"), getEvents()]);
  return (
    <main>
      <Section top heading={heading}>
        {upcoming.length > 0 ? (
          <EventGrid events={upcoming} />
        ) : (
          <div className="rounded-2xl border border-dashed border-white/15 p-10 text-center">
            <p className="font-display text-xl font-bold text-bone">No events scheduled right now.</p>
            <p className="mt-2 text-[15px] text-mist">
              Training still runs every Friday —{" "}
              <Link href="/training" className="font-semibold text-red-soft underline">see the details</Link>.
            </p>
          </div>
        )}
      </Section>
      {past.length > 0 && (
        <Section
          tone="dim"
          heading={{ titleBefore: "Past ", highlight: "events.", intro: "Recent match days and results." }}
        >
          <EventGrid events={past.slice(0, 6)} past />
        </Section>
      )}
      <CTABanner
        eyebrow="Ready to play?"
        title="Bring your boots this Friday."
        primaryLabel="Join the Academy"
        primaryHref="/join"
        secondaryLabel="Training Details"
        secondaryHref="/training"
      />
    </main>
  );
}
