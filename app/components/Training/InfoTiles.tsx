import { MapPin, Clock, Calendar } from "lucide-react";
import { CONTACT } from "@/lib/data";

const TILES = [
  { icon: Calendar, label: "Day", value: CONTACT.trainingDay },
  { icon: Clock, label: "Time", value: CONTACT.trainingTime },
  { icon: MapPin, label: "Venue", value: CONTACT.venue, sub: CONTACT.address },
];

export default function InfoTiles() {
  return (
    <>
      <div className="grid gap-5 sm:grid-cols-3">
        {TILES.map((t) => {
          const Icon = t.icon;
          return (
            <div key={t.label} className="rounded-2xl border border-white/10 bg-navy-900/80 p-6 shadow-card">
              <Icon size={20} className="text-red-soft" />
              <p className="mt-4 text-[12px] font-medium uppercase tracking-wide text-mist/80">{t.label}</p>
              <p className="mt-1 text-[16px] font-semibold text-bone">{t.value}</p>
              {"sub" in t && t.sub && <p className="mt-1 text-[13px] text-mist">{t.sub}</p>}
            </div>
          );
        })}
      </div>
    </>
  );
}
