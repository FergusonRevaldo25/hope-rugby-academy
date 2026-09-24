"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Calendar } from "lucide-react";
import { CONTACT, SESSION_BREAKDOWN } from "@/lib/data";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Schedule() {
  return (
    <section className="relative bg-navy-950 pt-40 pb-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="mb-14 max-w-lg"
        >
          <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-red-soft">Training</p>
          <h1 className="mt-4 text-balance font-display text-4xl font-extrabold tracking-tight text-bone lg:text-5xl">
            One session, <span className="text-crimson-bright text-glow-red">every Friday.</span>
          </h1>
          <p className="mt-4 text-[16px] leading-relaxed text-mist">
            All age groups train together at the same time and place —
            no need to check a separate schedule per group.
          </p>
        </motion.div>

        <div className="mb-16 grid gap-5 sm:grid-cols-3">
          {[
            { icon: Calendar, label: "Day", value: CONTACT.trainingDay },
            { icon: Clock, label: "Time", value: CONTACT.trainingTime },
            { icon: MapPin, label: "Venue", value: CONTACT.venue },
          ].map((d) => {
            const Icon = d.icon;
            return (
              <div key={d.label} className="rounded-2xl border border-white/8 bg-navy-900/50 p-6">
                <Icon size={20} className="text-red-soft" />
                <p className="mt-4 text-[12px] font-medium uppercase tracking-wide text-mist/70">{d.label}</p>
                <p className="mt-1 text-[16px] font-semibold text-bone">{d.value}</p>
              </div>
            );
          })}
        </div>

        <a
          href={CONTACT.mapsHref}
          target="_blank"
          rel="noopener noreferrer"
          className="mb-20 inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-[14px] font-medium text-bone transition-colors duration-300 hover:bg-white/5"
        >
          <MapPin size={16} className="text-crimson-bright" />
          Get directions to {CONTACT.venue}
        </a>

        <h2 className="mb-8 font-display text-2xl font-bold text-bone">What a session looks like</h2>
        <div className="grid gap-4">
          {SESSION_BREAKDOWN.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.06, ease }}
              className="flex flex-col gap-1 rounded-2xl border border-white/8 bg-navy-900/50 p-6 sm:flex-row sm:items-center sm:gap-6"
            >
              <span className="w-32 shrink-0 text-[13px] font-semibold text-red-soft">{step.time}</span>
              <div>
                <h3 className="font-display text-[15px] font-bold text-bone">{step.title}</h3>
                <p className="mt-1 text-[14px] text-mist">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
