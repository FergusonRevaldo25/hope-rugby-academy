"use client";

import { motion } from "framer-motion";
import { PROGRAMS } from "@/lib/data";
import TeamCard from "./TeamCard";

export default function Teams() {
  return (
    <section id="programs" className="relative bg-navy-950 py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 max-w-lg"
        >
          <h2 className="text-balance font-display text-4xl font-extrabold tracking-tight text-bone lg:text-5xl">
            A pathway for every age.
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-mist">
            From first touch to representative selection, each program builds
            directly on the one before it.
          </p>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-2">
          {PROGRAMS.map((program, i) => (
            <TeamCard key={program.name} program={program} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}