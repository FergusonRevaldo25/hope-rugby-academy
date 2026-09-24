import type { NewsItem } from "@/lib/content/types";
import PhotoCard from "./PhotoCard";
import PhotoCardGrid from "./PhotoCardGrid";

const fmt = new Intl.DateTimeFormat("en-ZA", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" });

export default function NewsGrid({ items }: { items: NewsItem[] }) {
  return (
    <PhotoCardGrid cols={3}>
      {items.map((n, i) => (
        <PhotoCard
          key={n.id}
          index={i}
          photo={n.photo}
          fallback="📰"
          badge={fmt.format(new Date(n.date))}
          eyebrow={n.category === "general" ? "News" : n.category}
          title={n.title}
          body={n.excerpt}
          href={n.href}
          cta={n.href ? "Read more" : undefined}
        />
      ))}
    </PhotoCardGrid>
  );
}
