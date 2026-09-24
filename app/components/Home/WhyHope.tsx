"use client";

import { motion } from "framer-motion";
import { HeartHandshake, Users, ShieldCheck } from "lucide-react";
import { FOUNDER_QUOTE } from "@/lib/data";

const POINTS = [
  { icon: HeartHandshake, title: "Free, always", copy: "No fees, no barriers — every session is open to any child who wants to play." },
  { icon: Users, title: "Community-rooted", copy: "Built at a local primary school, for local kids, by people who live here." },
  { icon: ShieldCheck, title: "Every skill level welcome", copy: "First-timers train right alongside kids who've played for years." },
];

export default function WhyHope() {
  return (
    <section className="relative bg-ink/55 py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-balance font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-bone lg:text-5xl">
              Not a club.
              <br /><span className="text-crimson-bright text-glow-red">A lifeline.</span>
            </h2>
            <p className="mt-6 max-w-md text-balance text-[16px] italic leading-relaxed text-mist">
              &ldquo;{FOUNDER_QUOTE}&rdquo;
            </p>
            <p className="mt-3 text-[13px] font-medium text-red-soft">
              — Coach Belven Hope, Founder
            </p>
          </motion.div>

          <div className="grid gap-8 sm:grid-cols-3">
            {POINTS.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="rounded-2xl border border-white/8 bg-navy-900/60 p-6 shadow-card"
                >
                  <Icon size={22} className="text-crimson-bright" />
                  <h3 className="mt-4 font-display text-lg font-bold text-bone">{p.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-mist">{p.copy}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
