import Hero from "./components/Home/Hero";
import StatsStrip from "./components/Home/StatsStrip";
import WhyHope from "./components/Home/WhyHope";
import Gallery from "./components/Home/Gallery";
import QuickLinks from "./components/Home/QuickLinks";
import SponsorsMarquee from "./components/Home/SponsorsMarquee";
import UpcomingEvents from "./components/Home/UpcomingEvents";
import CTABanner from "./components/Shared/CTABanner";
import { getGallery, getEvents } from "@/lib/content";

// upcoming events / gallery refresh periodically
export const revalidate = 300;

export default async function Home() {
  const [gallery, { upcoming }] = await Promise.all([getGallery(), getEvents()]);
  return (
    <main>
      <Hero />
      <StatsStrip />
      <WhyHope />
      <UpcomingEvents events={upcoming.slice(0, 3)} />
      <Gallery items={gallery.slice(0, 7)} hasMore={gallery.length > 7} />
      <QuickLinks />
      <SponsorsMarquee />
      <CTABanner
        eyebrow="Get involved"
        title="Bring your boots this Friday."
        subtitle="No sign-up required, no cost, no experience needed. Just show up at Zwaanswyk Academy Primary, 16h00."
        primaryLabel="Join the Academy"
        primaryHref="/join"
        secondaryLabel="Training Details"
        secondaryHref="/training"
      />
    </main>
  );
}
