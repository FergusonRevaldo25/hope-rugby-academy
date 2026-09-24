import { ChevronDown } from "lucide-react";
import type { FaqItem } from "@/lib/content/types";

// Native <details>: keyboard + screen-reader accessible with zero JavaScript.
export default function FaqList({ items }: { items: FaqItem[] }) {
  if (items.length === 0) return null;
  return (
    <div className="mx-auto grid max-w-3xl gap-3">
      {items.map((f) => (
        <details
          key={f.id}
          className="group rounded-2xl border border-white/10 bg-navy-900/80 shadow-card transition-colors duration-300 open:border-crimson-bright/40"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-display text-[16px] font-bold text-bone [&::-webkit-details-marker]:hidden">
            {f.question}
            <ChevronDown
              size={18}
              className="shrink-0 text-red-soft transition-transform duration-300 group-open:rotate-180"
            />
          </summary>
          <p className="whitespace-pre-line px-5 pb-5 text-[15px] leading-relaxed text-mist">{f.answer}</p>
        </details>
      ))}
    </div>
  );
}
