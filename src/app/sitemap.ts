// src/app/sitemap.ts

import type { MetadataRoute } from "next";
import { serviceIds, serviceRoutes } from "@/lib/service-routes";

const baseUrl = "https://oakflarecr.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "",
    "/work/moss-project",
    "/work/logistica-sa",
  ];

  const existing: MetadataRoute.Sitemap = pages.flatMap((path) => [
    {
      url: `${baseUrl}/en${path}`,
      changeFrequency: path === "" ? "weekly" : "monthly",
      priority: path === "" ? 1 : 0.8,
      alternates: {
        languages: {
          en: `${baseUrl}/en${path}`,
          es: `${baseUrl}/es${path}`,
          "x-default": `${baseUrl}/en${path}`,
        },
      },
    },
    {
      url: `${baseUrl}/es${path}`,
      changeFrequency: path === "" ? "weekly" : "monthly",
      priority: path === "" ? 1 : 0.8,
      alternates: {
        languages: {
          en: `${baseUrl}/en${path}`,
          es: `${baseUrl}/es${path}`,
          "x-default": `${baseUrl}/en${path}`,
        },
      },
    },
  ]);
  return [...existing, ...serviceIds.flatMap((id) => (["en", "es"] as const).map((locale) => ({
    url: `${baseUrl}${serviceRoutes[id][locale]}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
    alternates: { languages: {
      en: `${baseUrl}${serviceRoutes[id].en}`,
      es: `${baseUrl}${serviceRoutes[id].es}`,
      "x-default": `${baseUrl}${serviceRoutes[id].en}`,
    } },
  })))];
}