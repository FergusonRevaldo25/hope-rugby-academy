import type { Metadata } from "next";
import Contact from "../components/Contact/Contact";

export const metadata: Metadata = {
  title: "Contact — Hope Rugby Academy",
  description: "Get in touch with Hope Rugby Academy by phone, WhatsApp, or email.",
};

export default function ContactPage() {
  return (
    <main>
      <Contact />
    </main>
  );
}
