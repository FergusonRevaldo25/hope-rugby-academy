import type { ReactNode } from "react";
import type { HeadingContent } from "@/lib/content/types";

export function Heading({ h, as: Tag = "h2" }: { h: HeadingContent; as?: "h1" | "h2" }) {
  const size = Tag === "h1" ? "text-4xl lg:text-5xl" : "text-3xl lg:text-4xl";
  return (
    <div className="mb-12 max-w-2xl">
      {h.eyebrow && (
        <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-red-soft">{h.eyebrow}</p>
      )}
      <Tag className={`mt-3 text-balance font-display font-extrabold leading-[1.05] tracking-tight text-bone ${size}`}>
        {h.titleBefore}
        {h.highlight && <span className="text-crimson-bright text-glow-red">{h.highlight}</span>}
        {h.titleAfter}
      </Tag>
      {h.intro && <p className="mt-4 text-[16px] leading-relaxed text-mist">{h.intro}</p>}
    </div>
  );
}

/** Page section. `tone="dim"` adds a translucent dark band; otherwise the animated background shows through. */
export default function Section({
  heading,
  as,
  tone = "clear",
  top = false,
  children,
}: {
  heading?: HeadingContent;
  as?: "h1" | "h2";
  tone?: "clear" | "dim";
  /** first section of a page (extra top padding for the fixed navbar) */
  top?: boolean;
  children: ReactNode;
}) {
  return (
    <section className={`relative ${tone === "dim" ? "bg-ink/55" : ""} ${top ? "pt-40 pb-20" : "py-20"}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {heading && <Heading h={heading} as={as ?? (top ? "h1" : "h2")} />}
        {children}
      </div>
    </section>
  );
}
