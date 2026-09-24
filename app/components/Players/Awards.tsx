"use client";

import { motion } from "framer-motion";
import { AWARDS } from "@/lib/data";

export default function Awards() {
  return (
    <section className="relative bg-ink/55 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 max-w-lg"
        >
          <h2 className="text-balance font-display text-4xl font-extrabold tracking-tight text-bone lg:text-5xl">
            End-of-season <span className="text-crimson-bright text-glow-red">awards.</span>
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-mist">
            Recognising more than just talent — effort, spirit, and growth
            all get celebrated.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {AWARDS.map((award, i) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl border border-white/8 bg-navy-900/50 p-6 shadow-card"
            >
              <span className="text-3xl">{award.icon}</span>
              <h3 className="mt-4 font-display text-lg font-bold text-bone">{award.title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-mist">{award.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
