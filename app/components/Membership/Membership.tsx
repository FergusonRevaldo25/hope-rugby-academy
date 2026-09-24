"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { PROGRAMS } from "@/lib/data";

export default function Membership() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="join" className="relative bg-hope-gradient py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-balance font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-bone lg:text-5xl">
              Your first trial is free.
            </h2>
            <p className="mt-5 max-w-md text-[16px] leading-relaxed text-mist">
              Come run a session with us before committing to anything.
              We&rsquo;ll place your child in the right age group and send
              you everything you need to know beforehand.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl border border-white/10 bg-navy-950/70 p-7 shadow-card backdrop-blur-sm lg:p-9"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center gap-3 py-10 text-center">
                <CheckCircle2 size={40} className="text-blue-soft" />
                <p className="font-display text-lg font-bold text-bone">You&rsquo;re on the list.</p>
                <p className="text-[14px] text-mist">
                  We&rsquo;ll email trial times within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="flex flex-col gap-2 text-[13px] font-medium text-mist">
                    Player name
                    <input
                      required
                      type="text"
                      className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-[14px] text-bone outline-none transition-colors focus:border-blue-accent"
                    />
                  </label>
                  <label className="flex flex-col gap-2 text-[13px] font-medium text-mist">
                    Parent/guardian name
                    <input
                      required
                      type="text"
                      className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-[14px] text-bone outline-none transition-colors focus:border-blue-accent"
                    />
                  </label>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="flex flex-col gap-2 text-[13px] font-medium text-mist">
                    Email
                    <input
                      required
                      type="email"
                      className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-[14px] text-bone outline-none transition-colors focus:border-blue-accent"
                    />
                  </label>
                  <label className="flex flex-col gap-2 text-[13px] font-medium text-mist">
                    Program
                    <select className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-[14px] text-bone outline-none transition-colors focus:border-blue-accent">
                      {PROGRAMS.map((p) => (
                        <option key={p.name} value={p.name} className="bg-navy-900">
                          {p.name} ({p.ageRange})
                        </option>
                      ))}
                    </select>
                  </label>
                </div>
                <button
                  type="submit"
                  className="mt-2 rounded-full bg-crimson px-7 py-3.5 text-[15px] font-semibold text-white shadow-crimson transition-transform duration-300 ease-silk hover:scale-[1.01] active:scale-[0.98]"
                >
                  Reserve My Trial Spot
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}