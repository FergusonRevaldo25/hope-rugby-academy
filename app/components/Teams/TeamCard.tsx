"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Program } from "@/lib/data";

export default function TeamCard({ program, index }: { program: Program; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group flex items-start justify-between gap-6 rounded-2xl border border-white/8 bg-navy-900/50 p-7 transition-colors duration-300 hover:bg-navy-900"
    >
      <div>
        <span className="text-[12px] font-semibold uppercase tracking-wide text-blue-soft">
          {program.ageRange}
        </span>
        <h3 className="mt-2 font-display text-xl font-bold text-bone">{program.name}</h3>
        <p className="mt-3 max-w-sm text-[14px] leading-relaxed text-mist">{program.focus}</p>
        <p className="mt-4 text-[13px] text-mist/70">{program.schedule}</p>
      </div>
      <ArrowUpRight
        size={20}
        className="mt-1 shrink-0 text-mist transition-all duration-300 ease-silk group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-crimson-bright"
      />
    </motion.div>
  );
}