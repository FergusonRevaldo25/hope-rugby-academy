import type { AgeGroupItem } from "@/lib/content/types";
import PhotoCard from "../Shared/PhotoCard";
import PhotoCardGrid from "../Shared/PhotoCardGrid";

export default function AgeGroupGrid({ groups }: { groups: AgeGroupItem[] }) {
  return (
    <PhotoCardGrid cols={4} empty="Age groups will be listed here soon.">
      {groups.map((g, i) => (
        <PhotoCard
          key={g.id}
          index={i}
          photo={g.photo}
          fallback={g.ageRange}
          aspect="square"
          badge={g.ageRange}
          title={g.name}
          body={g.focus}
        />
      ))}
    </PhotoCardGrid>
  );
}
