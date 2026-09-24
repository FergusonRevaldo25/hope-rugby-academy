"use client";

import { motion } from "framer-motion";
import { HeartHandshake, BrainCircuit, Dumbbell, GraduationCap } from "lucide-react";

const PILLARS = [
  { icon: HeartHandshake, title: "Brotherhood", copy: "Every player is accountable to the fifteen beside them, not just the scoreboard." },
  { icon: Dumbbell, title: "Technical mastery", copy: "Fundamentals drilled until they become instinct, not just a checklist." },
  { icon: BrainCircuit, title: "Game intelligence", copy: "We coach decision-making, not just plays — rugby rewards the player who reads first." },
  { icon: GraduationCap, title: "Life beyond the pitch", copy: "Academic support and leadership habits that outlast any season." },
];

export default function Philosophy() {
  return (
    <section id="philosophy" className="relative bg-ink py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-balance font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-bone lg:text-5xl">
              We&rsquo;re not building a roster.
              <br />
              We&rsquo;re building people.
            </h2>
            <p className="mt-6 max-w-md text-balance text-[16px] leading-relaxed text-mist">
              Hope Rugby Academy exists because rugby teaches things a
              classroom can&rsquo;t — resilience, trust, and the discipline to
              show up for someone else. Every drill we run serves that first.
            </p>
          </motion.div>

          <div className="grid gap-8 sm:grid-cols-2">
            {PILLARS.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="rounded-2xl border border-white/8 bg-navy-900/60 p-6 shadow-card"
                >
                  <Icon size={22} className="text-crimson-bright" />
                  <h3 className="mt-4 font-display text-lg font-bold text-bone">{pillar.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-mist">{pillar.copy}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}