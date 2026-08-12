import type { MetadataRoute } from "next";

const routes = [
  "",
  "/ultrasound",
  "/laboratory",
  "/prepare",
  "/about",
  "/visit",
  "/book",
  "/faq",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((path) => ({
    url: `https://rosmalab.co.ke${path}`,
    lastModified: new Date(),
  }));
}
