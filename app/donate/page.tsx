import type { Metadata } from "next";
import Donate from "../components/Donate/Donate";

export const metadata: Metadata = {
  title: "Donate — Hope Rugby Academy",
  description: "Support Hope Rugby Academy's General and Equipment funds via EFT and keep training free for every player.",
};

export default function DonatePage() {
  return (
    <main>
      <Donate />
    </main>
  );
}
