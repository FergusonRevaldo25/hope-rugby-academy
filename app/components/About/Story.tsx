"use client";

import { motion } from "framer-motion";
import { FOUNDER_QUOTE } from "@/lib/data";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Story() {
  return (
    <section className="relative bg-hope-gradient pt-40 pb-28">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="text-[13px] font-semibold uppercase tracking-[0.2em] text-red-soft"
        >
          Our Story
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05, ease }}
          className="mt-4 text-balance font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-bone lg:text-5xl"
        >
          It started with one coach, one school, and a <span className="text-crimson-bright text-glow-red">simple belief.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease }}
          className="mt-10 space-y-5 text-[16px] leading-relaxed text-mist lg:text-[17px]"
        >
          <p>
            Growing up, rugby was more than a sport for Coach Belven Hope —
            it was a lifeline. It taught him discipline, gave him purpose,
            and built him a community when he needed one most.
          </p>
          <p>
            That experience became the reason Hope Rugby Academy exists.
            Belven started the academy on one simple belief: every child
            deserves the chance to experience what rugby can do for them —
            not just the ones who can afford it, or the ones who already
            know how to play.
          </p>
          <p>
            So the academy was built at Zwaanswyk Academy Primary School,
            open to any child, at no cost. Every Friday afternoon, kids from
            U8 to U14 show up to learn the game, build friendships, and
            grow into more disciplined, confident versions of themselves —
            regardless of experience level.
          </p>
        </motion.div>

        <motion.blockquote
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease }}
          className="mt-14 rounded-2xl border border-white/10 bg-navy-950/60 p-8 text-[18px] italic leading-relaxed text-bone shadow-card"
        >
          &ldquo;{FOUNDER_QUOTE}&rdquo;
          <footer className="mt-4 text-[13px] not-italic font-medium text-red-soft">
            — Coach Belven Hope, Founder
          </footer>
        </motion.blockquote>
      </div>
    </section>
  );
}
