"use client";

import { motion } from "framer-motion";
import { PROGRAMS } from "@/lib/data";
import AgeGroupCard from "./AgeGroupCard";

const ease = [0.16, 1, 0.3, 1] as const;

export default function AgeGroups() {
  return (
    <section className="relative bg-navy-950 pt-40 pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="mb-14 max-w-lg"
        >
          <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-red-soft">Players</p>
          <h1 className="mt-4 text-balance font-display text-4xl font-extrabold tracking-tight text-bone lg:text-5xl">
            A pathway from <span className="text-crimson-bright text-glow-red">U8 to U14.</span>
          </h1>
          <p className="mt-4 text-[16px] leading-relaxed text-mist">
            Every age group trains together on Fridays, with coaching
            tailored to where each player is at.
          </p>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-2">
          {PROGRAMS.map((program, i) => (
            <AgeGroupCard key={program.name} program={program} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
