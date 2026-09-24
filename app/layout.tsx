import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import ScrollProgress from "./components/Shared/ScrollProgress";
import BackgroundFX from "./components/Shared/BackgroundFX";
import AnnouncementBar from "./components/Shared/AnnouncementBar";
import JsonLd from "./components/Shared/JsonLd";
import { getActiveAlert } from "@/lib/content";
import { CONTACT } from "@/lib/data";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Hope Rugby Academy — Building Champions of Tomorrow",
  description:
    "Hope Rugby Academy is a free, community-rooted rugby program for U8–U14 players in Cape Town, training every Friday at Zwaanswyk Academy Primary. Founded by Coach Belven Hope, every child is welcome.",
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    type: "website",
    siteName: "Hope Rugby Academy",
    locale: "en_ZA",
    title: "Hope Rugby Academy — Building Champions of Tomorrow",
    description:
      "Free, community-rooted rugby for U8–U14 players in Cape Town. Training every Friday at Zwaanswyk Academy Primary.",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hope Rugby Academy — Building Champions of Tomorrow",
    description: "Free rugby for U8–U14 players in Cape Town. Every child is welcome.",
  },
};

const ORG_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "SportsOrganization",
  name: "Hope Rugby Academy",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  slogan: "Building Champions of Tomorrow",
  sport: "Rugby",
  description:
    "A free, community-rooted rugby academy for players aged U8–U14, training every Friday at Zwaanswyk Academy Primary School.",
  telephone: "+27726461436",
  email: CONTACT.email,
  areaServed: "Cape Town",
  address: {
    "@type": "PostalAddress",
    streetAddress: "338 Main Rd",
    addressLocality: "Retreat",
    addressRegion: "Western Cape",
    postalCode: "7945",
    addressCountry: "ZA",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const alert = await getActiveAlert();
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${manrope.variable} ${inter.variable}`}>
      <body className="font-body antialiased">
        <JsonLd data={ORG_JSON_LD} />
        <BackgroundFX />
        <ScrollProgress />
        <AnnouncementBar alert={alert} />
        <Navbar />
        <div className="relative z-10">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
