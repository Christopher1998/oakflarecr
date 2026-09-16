// src/app/sitemap.ts

import type { MetadataRoute } from "next";

const baseUrl = "https://oakflarecr.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "",
    "/work/moss-project",
    "/work/logistica-sa",
  ];

  return pages.flatMap((path) => [
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
}