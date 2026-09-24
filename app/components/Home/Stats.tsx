"use client";

import { motion } from "framer-motion";
import { Trophy, Users, ShieldCheck, CalendarDays } from "lucide-react";

const STATS = [
  { icon: CalendarDays, value: "2016", label: "Academy founded" },
  { icon: Users, value: "1,200+", label: "Athletes trained" },
  { icon: ShieldCheck, value: "18", label: "Certified coaches" },
  { icon: Trophy, value: "4", label: "Age-group pathways" },
];

export default function Stats() {
  return (
    <section className="relative border-y border-white/5 bg-navy-950 py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 lg:grid-cols-4 lg:gap-6 lg:px-10">
        {STATS.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-start gap-3 border-l border-white/10 pl-5"
            >
              <Icon size={20} className="text-blue-soft" />
              <div className="font-display text-3xl font-extrabold tracking-tight text-bone lg:text-4xl">
                {stat.value}
              </div>
              <div className="text-[13px] text-mist">{stat.label}</div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}