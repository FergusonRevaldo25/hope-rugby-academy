"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Users, ShieldCheck, HandCoins, CalendarClock } from "lucide-react";
import { PROGRAMS, COACHES } from "@/lib/data";

type Stat = {
  icon: typeof Users;
  target: number;
  suffix: string;
  label: string;
};

const STATS: Stat[] = [
  { icon: ShieldCheck, target: PROGRAMS.length, suffix: "", label: "Age groups, U8–U14" },
  { icon: Users, target: COACHES.length, suffix: "", label: "Volunteer coaches" },
  { icon: CalendarClock, target: 1, suffix: "x", label: "Session every week" },
  { icon: HandCoins, target: 0, suffix: "", label: "Cost to play" },
];

function CountUp({ target }: { target: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (target === 0) {
      setValue(0);
      return;
    }
    const duration = 900;
    const start = performance.now();
    let frame: number;
    function tick(now: number) {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) frame = requestAnimationFrame(tick);
    }
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {target === 0 ? "Free" : value}
    </span>
  );
}

export default function StatsStrip() {
  return (
    <section className="relative border-y border-white/5 bg-navy-950/45 py-16">
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
              <Icon size={20} className="text-red-soft" />
              <div className="font-display text-3xl font-extrabold tracking-tight text-bone lg:text-4xl">
                <CountUp target={stat.target} />
                {stat.target > 0 ? stat.suffix : ""}
              </div>
              <div className="text-[13px] text-mist">{stat.label}</div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
