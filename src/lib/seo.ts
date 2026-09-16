import type { Metadata } from "next";

import type { Locale } from "@/i18n/config";

export const siteUrl = "https://oakflarecr.com";

const openGraphLocales: Record<Locale, "en_US" | "es_CR"> = {
  en: "en_US",
  es: "es_CR",
};

const socialImageAlt: Record<Locale, string> = {
  en: "Oakflare — Digital products that stand out",
  es: "Oakflare — Productos digitales que destacan",
};

export function createPageMetadata({
  locale,
  title,
  description,
  path = "",
  type,
}: {
  locale: Locale;
  title: string;
  description: string;
  path?: string;
  type: "website" | "article";
}): Metadata {
  const canonical = `/${locale}${path}`;
  const imageAlt = socialImageAlt[locale];

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        en: `/en${path}`,
        es: `/es${path}`,
        "x-default": `/en${path}`,
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "Oakflare",
      locale: openGraphLocales[locale],
      type,
      images: [
        {
          url: `/${locale}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [
        {
          url: `/${locale}/twitter-image`,
          alt: imageAlt,
        },
      ],
    },
  };
}
