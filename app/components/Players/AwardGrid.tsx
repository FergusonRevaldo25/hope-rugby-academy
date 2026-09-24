import type { AwardItem } from "@/lib/content/types";
import PhotoCard from "../Shared/PhotoCard";
import PhotoCardGrid from "../Shared/PhotoCardGrid";

export default function AwardGrid({ awards }: { awards: AwardItem[] }) {
  return (
    <PhotoCardGrid cols={3} empty="Awards will be announced here.">
      {awards.map((a, i) => (
        <PhotoCard
          key={a.id}
          index={i}
          photo={a.photo}
          fallback={<span className="text-7xl">{a.icon}</span>}
          aspect="landscape"
          badge={a.season}
          title={a.title}
          subtitle={a.recipient ? `Awarded to ${a.recipient}` : undefined}
          body={a.description}
        />
      ))}
    </PhotoCardGrid>
  );
}
