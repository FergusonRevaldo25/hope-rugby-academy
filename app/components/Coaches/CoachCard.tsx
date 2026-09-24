"use client";

import { motion } from "framer-motion";
import type { Coach } from "@/lib/data";

function initials(name: string) {
  return name
    .replace(/^Coach\s+/i, "")
    .split(" ")
    .map((n) => n[0])
    .join("");
}

export default function CoachCard({ coach, index }: { coach: Coach; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6, boxShadow: "0 0 60px -12px rgba(242,35,62,0.45)" }}
      className="rounded-2xl border border-white/8 bg-navy-900/50 p-6 shadow-card transition-colors duration-300 hover:border-white/15 hover:bg-navy-900"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-crimson-gradient font-display text-[15px] font-bold text-white">
        {initials(coach.name)}
      </div>
      <h3 className="mt-4 font-display text-lg font-bold text-bone">{coach.name}</h3>
      <p className="text-[13px] font-medium text-red-soft">{coach.role}</p>
      <p className="mt-3 text-[14px] leading-relaxed text-mist">{coach.bio}</p>
      <span className="mt-4 inline-block rounded-full border border-white/10 px-2.5 py-1 text-[11px] text-mist/80">
        {coach.focus}
      </span>
    </motion.div>
  );
}
