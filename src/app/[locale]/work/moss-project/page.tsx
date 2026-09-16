import type { Metadata } from "next";
import { notFound } from "next/navigation";

import MossProjectCaseStudy from "@/components/work/MossProjectCaseStudy";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export async function generateMetadata({ params }: PageProps<"/[locale]/work/moss-project">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dictionary = await getDictionary(locale);
  return {
    title: dictionary.metadata.mossTitle,
    description: dictionary.metadata.mossDescription,
    alternates: { canonical: `/${locale}/work/moss-project`, languages: { en: "/en/work/moss-project", es: "/es/work/moss-project", "x-default": "/en/work/moss-project" } },
  };
}

export default async function MossProjectPage({ params }: PageProps<"/[locale]/work/moss-project">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <MossProjectCaseStudy locale={locale} dictionary={await getDictionary(locale)} />;
}
