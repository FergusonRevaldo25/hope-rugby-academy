import type { SessionStepItem } from "@/lib/content/types";
import PhotoCard from "../Shared/PhotoCard";
import PhotoCardGrid from "../Shared/PhotoCardGrid";

export default function SessionGrid({ steps }: { steps: SessionStepItem[] }) {
  return (
    <PhotoCardGrid cols={3} empty="The session plan will be listed here soon.">
      {steps.map((s, i) => (
        <PhotoCard
          key={s.id}
          index={i}
          photo={s.photo}
          fallback={String(i + 1).padStart(2, "0")}
          aspect="landscape"
          badge={s.time}
          title={s.title}
          body={s.description}
        />
      ))}
    </PhotoCardGrid>
  );
}
