import type { MetadataRoute } from "next";

const origin = "https://oakflarecr.com";
const paths = ["", "/work/moss-project", "/work/logistica-sa"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.flatMap((path) =>
    (["en", "es"] as const).map((locale) => ({
      url: `${origin}/${locale}${path}`,
      alternates: {
        languages: {
          en: `${origin}/en${path}`,
          es: `${origin}/es${path}`,
          "x-default": `${origin}/en${path}`,
        },
      },
    })),
  );
}
