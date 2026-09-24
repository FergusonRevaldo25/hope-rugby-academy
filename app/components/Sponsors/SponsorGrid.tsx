import type { SponsorItem } from "@/lib/content/types";
import PhotoCard from "../Shared/PhotoCard";
import PhotoCardGrid from "../Shared/PhotoCardGrid";

const zar = new Intl.NumberFormat("en-ZA", { style: "currency", currency: "ZAR", maximumFractionDigits: 0 });

export default function SponsorGrid({ sponsors }: { sponsors: SponsorItem[] }) {
  return (
    <PhotoCardGrid cols={3} empty="Sponsors will be listed here soon.">
      {sponsors.map((s, i) => (
        <PhotoCard
          key={s.id}
          index={i}
          photo={s.logo}
          fit="contain"
          fallback={s.name.charAt(0)}
          aspect="landscape"
          badge={s.tier}
          title={s.name}
          body={s.description}
          meta={s.contributed ? <>Contributed {zar.format(s.contributed)}</> : undefined}
          href={s.website}
          cta={s.website ? "Visit website" : undefined}
        />
      ))}
    </PhotoCardGrid>
  );
}
