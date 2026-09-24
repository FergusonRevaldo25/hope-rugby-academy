"use client";

import Link from "next/link";
import { SPONSORS } from "@/lib/data";

export default function SponsorsMarquee() {
  // duplicate the list so the scrolling loop is seamless
  const loop = [...SPONSORS, ...SPONSORS];

  return (
    <section className="relative overflow-hidden bg-navy-950/45 py-14">
      <p className="mb-8 text-center text-[12px] font-medium uppercase tracking-[0.2em] text-mist/60">
        Supported by
      </p>

      <div className="group relative [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]">

        <div className="flex w-max animate-marquee gap-14 group-hover:[animation-play-state:paused]">
          {loop.map((sponsor, i) => (
            <span
              key={`${sponsor.name}-${i}`}
              className="whitespace-nowrap font-display text-[15px] font-semibold text-mist/50 transition-colors duration-300 hover:text-mist"
            >
              {sponsor.name}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/sponsors"
          className="text-[13px] font-medium text-red-soft transition-colors hover:text-bone"
        >
          See all sponsors →
        </Link>
      </div>
    </section>
  );
}
