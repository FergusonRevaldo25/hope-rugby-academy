import type { CoachItem } from "@/lib/content/types";
import PhotoCard from "../Shared/PhotoCard";
import PhotoCardGrid from "../Shared/PhotoCardGrid";

const initials = (name: string) =>
  name.replace(/^Coach\s+/i, "").split(" ").map((n) => n[0]).join("").slice(0, 2);

export default function CoachGrid({ coaches }: { coaches: CoachItem[] }) {
  return (
    <PhotoCardGrid cols={4} empty="Coaches will be listed here soon.">
      {coaches.map((c, i) => (
        <PhotoCard
          key={c.id}
          index={i}
          photo={c.photo}
          fallback={initials(c.name)}
          aspect="portrait"
          title={c.name}
          subtitle={c.role}
          body={c.bio}
          tags={[c.focus]}
        />
      ))}
    </PhotoCardGrid>
  );
}
