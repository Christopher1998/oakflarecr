import type { Metadata } from "next";
import { notFound } from "next/navigation";

import LogisticaCaseStudy from "@/components/work/LogisticaCaseStudy";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { createPageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: PageProps<"/[locale]/work/logistica-sa">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dictionary = await getDictionary(locale);

  return createPageMetadata({
    locale,
    title: dictionary.metadata.logisticaTitle,
    description: dictionary.metadata.logisticaDescription,
    path: "/work/logistica-sa",
    type: "article",
  });
}

export default async function LogisticaPage({ params }: PageProps<"/[locale]/work/logistica-sa">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <LogisticaCaseStudy locale={locale} dictionary={await getDictionary(locale)} />;
}
