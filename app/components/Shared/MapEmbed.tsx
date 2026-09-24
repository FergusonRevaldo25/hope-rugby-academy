"use client";

import { useState } from "react";
import { MapPin, Navigation } from "lucide-react";
import { CONTACT } from "@/lib/data";

// Click-to-load: Google's map iframe is heavy, so nothing third-party loads
// (and page speed isn't hurt) until the visitor asks for the map.
export default function MapEmbed() {
  const [loaded, setLoaded] = useState(false);
  const src = `https://www.google.com/maps?q=${encodeURIComponent(CONTACT.mapsQuery)}&output=embed`;

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-navy-900/80 shadow-card">
      <div className="relative aspect-[16/10] w-full sm:aspect-[16/7]">
        {loaded ? (
          <iframe
            src={src}
            title={`Map to ${CONTACT.venue}`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 h-full w-full border-0"
            allowFullScreen
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-navy-800 via-navy-900 to-crimson/30 px-6 text-center">
            <MapPin size={36} className="text-crimson-bright" />
            <div>
              <p className="font-display text-lg font-bold text-bone">{CONTACT.venue}</p>
              <p className="mt-1 text-[14px] text-mist">{CONTACT.address}</p>
            </div>
            <button
              type="button"
              onClick={() => setLoaded(true)}
              className="rounded-full bg-crimson px-6 py-3 text-[14px] font-semibold text-white shadow-crimson transition-transform duration-300 ease-silk hover:scale-[1.03]"
            >
              Show map
            </button>
          </div>
        )}
      </div>
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 px-5 py-4">
        <p className="text-[13px] text-mist">
          {CONTACT.address} · {CONTACT.trainingDay}, {CONTACT.trainingTime}
        </p>
        <a
          href={CONTACT.mapsHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[13px] font-semibold text-red-soft transition-colors hover:text-bone"
        >
          <Navigation size={14} /> Get directions
        </a>
      </div>
    </div>
  );
}
