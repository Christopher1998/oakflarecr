import type { Metadata } from "next";
import { notFound } from "next/navigation";

import LogisticaCaseStudy from "@/components/work/LogisticaCaseStudy";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export async function generateMetadata({ params }: PageProps<"/[locale]/work/logistica-sa">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dictionary = await getDictionary(locale);
  return {
    title: dictionary.metadata.logisticaTitle,
    description: dictionary.metadata.logisticaDescription,
    alternates: { canonical: `/${locale}/work/logistica-sa`, languages: { en: "/en/work/logistica-sa", es: "/es/work/logistica-sa", "x-default": "/en/work/logistica-sa" } },
  };
}

export default async function LogisticaPage({ params }: PageProps<"/[locale]/work/logistica-sa">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <LogisticaCaseStudy locale={locale} dictionary={await getDictionary(locale)} />;
}
