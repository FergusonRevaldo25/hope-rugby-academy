"use client";

import { motion } from "framer-motion";
import { SPONSORS } from "@/lib/data";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Sponsors() {
  return (
    <section className="relative bg-navy-950 pt-40 pb-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="mb-14 max-w-lg"
        >
          <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-red-soft">Sponsors</p>
          <h1 className="mt-4 text-balance font-display text-4xl font-extrabold tracking-tight text-bone lg:text-5xl">
            Supported by our <span className="text-crimson-bright text-glow-red">community.</span>
          </h1>
          <p className="mt-4 text-[16px] leading-relaxed text-mist">
            Hope Rugby Academy runs for free because these partners help
            cover what the academy can&rsquo;t on its own.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2">
          {SPONSORS.map((sponsor, i) => (
            <motion.div
              key={sponsor.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.06, ease }}
              whileHover={{ y: -5, boxShadow: "0 0 50px -14px rgba(242,35,62,0.4)" }}
              className="rounded-2xl border border-white/8 bg-navy-900/50 p-7 shadow-card transition-colors duration-300 hover:border-white/15"
            >
              <span className="text-[11px] font-semibold uppercase tracking-wide text-red-soft">
                {sponsor.tier}
              </span>
              <h3 className="mt-2 font-display text-lg font-bold text-bone">{sponsor.name}</h3>
              <p className="mt-3 text-[14px] leading-relaxed text-mist">{sponsor.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
