import type { Metadata } from "next";
import { notFound } from "next/navigation";

import MossProjectCaseStudy from "@/components/work/MossProjectCaseStudy";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { createPageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: PageProps<"/[locale]/work/moss-project">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dictionary = await getDictionary(locale);

  return createPageMetadata({
    locale,
    title: dictionary.metadata.mossTitle,
    description: dictionary.metadata.mossDescription,
    path: "/work/moss-project",
    type: "article",
  });
}

export default async function MossProjectPage({ params }: PageProps<"/[locale]/work/moss-project">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <MossProjectCaseStudy locale={locale} dictionary={await getDictionary(locale)} />;
}
