import type { BringItem } from "@/lib/content/types";
import PhotoCardGrid from "../Shared/PhotoCardGrid";

export default function BringGrid({ items }: { items: BringItem[] }) {
  return (
    <PhotoCardGrid cols={4} empty="Kit list coming soon.">
      {items.map((b) => (
        <div
          key={b.id}
          className="flex w-full flex-col rounded-2xl border border-white/10 bg-navy-900/80 p-6 shadow-card transition-all duration-500 ease-silk hover:-translate-y-1 hover:border-crimson-bright/40 hover:shadow-glow"
        >
          <span className="text-4xl" aria-hidden="true">{b.icon}</span>
          <h3 className="mt-4 font-display text-lg font-bold text-bone">{b.title}</h3>
          <p className="mt-2 text-[14px] leading-relaxed text-mist">{b.description}</p>
        </div>
      ))}
    </PhotoCardGrid>
  );
}
