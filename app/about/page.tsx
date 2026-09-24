import type { Metadata } from "next";
import Story from "../components/About/Story";

export const metadata: Metadata = {
  title: "Our Story — Hope Rugby Academy",
  description: "How Coach Belven Hope founded Hope Rugby Academy as a free, community-rooted rugby program in Cape Town.",
};

export default function AboutPage() {
  return (
    <main>
      <Story />
    </main>
  );
}
