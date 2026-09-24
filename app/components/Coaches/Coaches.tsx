"use client";

import { motion } from "framer-motion";
import { COACHES } from "@/lib/data";
import CoachCard from "./CoachCard";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Coaches() {
  return (
    <section className="relative bg-navy-950 pt-40 pb-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="mb-14 max-w-lg"
        >
          <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-red-soft">Coaches</p>
          <h1 className="mt-4 text-balance font-display text-4xl font-extrabold tracking-tight text-bone lg:text-5xl">
            Volunteers who show up <span className="text-crimson-bright text-glow-red">every Friday.</span>
          </h1>
          <p className="mt-4 text-[16px] leading-relaxed text-mist">
            Every coach at Hope Rugby Academy gives their time freely —
            bringing real playing experience and genuine care to every
            session at Zwaanswyk Academy Primary.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {COACHES.map((coach, i) => (
            <CoachCard key={coach.name} coach={coach} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
