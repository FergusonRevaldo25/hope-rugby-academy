"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import type { Testimonial } from "@/lib/data";

export default function StoryCard({ story, index }: { story: Testimonial; index: number }) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col justify-between rounded-2xl border border-white/8 bg-navy-900/50 p-7 shadow-card"
    >
      <div>
        <Quote size={22} className="text-crimson-bright" />
        <blockquote className="mt-4 text-balance text-[15px] leading-relaxed text-bone">
          {story.quote}
        </blockquote>
      </div>
      <figcaption className="mt-6 border-t border-white/8 pt-4">
        <div className="text-[14px] font-semibold text-bone">{story.name}</div>
        <div className="text-[13px] text-mist">{story.relation}</div>
      </figcaption>
    </motion.figure>
  );
}