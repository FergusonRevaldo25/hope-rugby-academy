"use client";

import { motion } from "framer-motion";
import { TESTIMONIALS } from "@/lib/data";
import StoryCard from "./StoryCard";

export default function News() {
  return (
    <section id="stories" className="relative bg-ink py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 max-w-lg"
        >
          <h2 className="text-balance font-display text-4xl font-extrabold tracking-tight text-bone lg:text-5xl">
            Stories from the sideline.
          </h2>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <StoryCard key={t.name} story={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}