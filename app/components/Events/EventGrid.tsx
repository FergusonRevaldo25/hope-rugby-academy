import type { EventItem, EventType } from "@/lib/content/types";
import PhotoCard from "../Shared/PhotoCard";
import PhotoCardGrid from "../Shared/PhotoCardGrid";
import AddToCalendar from "./AddToCalendar";

const TZ = "Africa/Johannesburg";
const dateShort = new Intl.DateTimeFormat("en-ZA", { weekday: "short", day: "numeric", month: "short", timeZone: TZ });
const timeFmt = new Intl.DateTimeFormat("en-ZA", { hour: "2-digit", minute: "2-digit", hour12: false, timeZone: TZ });

const TYPE_LABEL: Record<EventType, string> = {
  match: "Match day",
  tournament: "Tournament",
  awards: "Awards evening",
  clinic: "Clinic",
  other: "Event",
};
const TYPE_ICON: Record<EventType, string> = { match: "🏉", tournament: "🏆", awards: "🎖️", clinic: "🎽", other: "📅" };

export default function EventGrid({
  events,
  past = false,
  empty,
}: {
  events: EventItem[];
  past?: boolean;
  empty?: string;
}) {
  return (
    <PhotoCardGrid cols={3} empty={empty}>
      {events.map((e, i) => {
        const start = new Date(e.start);
        const time = e.end ? `${timeFmt.format(start)}–${timeFmt.format(new Date(e.end))}` : timeFmt.format(start);
        return (
          <PhotoCard
            key={e.id}
            index={i}
            dim={past}
            photo={e.photo}
            fallback={<span className="text-7xl">{TYPE_ICON[e.type]}</span>}
            badge={dateShort.format(start)}
            eyebrow={TYPE_LABEL[e.type]}
            title={e.title}
            subtitle={`${time} · ${e.venue}`}
            body={e.description}
            meta={
              past ? (
                e.result ? <span className="text-red-soft">Result: {e.result}</span> : undefined
              ) : (
                <AddToCalendar event={e} />
              )
            }
          />
        );
      })}
    </PhotoCardGrid>
  );
}
