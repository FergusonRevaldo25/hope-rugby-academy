import type { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

const ROUTES = [
  "", "/about", "/coaches", "/players", "/training", "/events", "/gallery",
  "/sponsors", "/faq", "/join", "/donate", "/contact", "/privacy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((r) => ({
    url: `${SITE_URL}${r}`,
    lastModified: new Date(),
    changeFrequency: r === "/events" || r === "" ? "weekly" : "monthly",
    priority: r === "" ? 1 : r === "/join" || r === "/training" ? 0.9 : 0.6,
  }));
}
