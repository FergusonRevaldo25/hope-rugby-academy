import { Children, type ReactNode } from "react";

// Centered flex-wrap instead of a fixed grid, so whatever number of cards an
// admin publishes (1, 5, 7…) the last row always looks tidy.
// (Full class strings so Tailwind can see them.)
const COLS = {
  2: "sm:w-[calc(50%-10px)]",
  3: "sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-13.34px)]",
  4: "sm:w-[calc(50%-10px)] lg:w-[calc(25%-15px)]",
} as const;

export default function PhotoCardGrid({
  cols = 3,
  empty = "Nothing to show yet — check back soon.",
  children,
}: {
  cols?: keyof typeof COLS;
  empty?: string;
  children: ReactNode;
}) {
  const items = Children.toArray(children);
  if (items.length === 0) {
    return (
      <p className="rounded-2xl border border-dashed border-white/15 p-10 text-center text-[14px] text-mist">
        {empty}
      </p>
    );
  }
  return (
    <div className="flex flex-wrap justify-center gap-5">
      {items.map((child, i) => (
        <div key={i} className={`flex w-full ${COLS[cols]}`}>
          {child}
        </div>
      ))}
    </div>
  );
}
