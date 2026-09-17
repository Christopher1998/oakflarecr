import { notFound } from "next/navigation";
import ServicePage from "@/components/services/ServicePage";
import { serviceContent } from "@/content/services";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { createPageMetadata } from "@/lib/seo";
import { serviceIds, serviceRoutes } from "@/lib/service-routes";

export type ServiceParams = { params: Promise<{ locale: string; slug: string }> };

function resolveService(locale: string, slug: string, expected: Locale) {
  if (locale !== expected) notFound();
  const id = serviceIds.find((id) => serviceRoutes[id][expected].split("/").at(-1) === slug);
  if (!id) notFound();
  return id;
}

export function serviceStaticParams(locale: Locale) {
  return serviceIds.map((id) => ({ locale, slug: serviceRoutes[id][locale].split("/").at(-1)! }));
}

export async function serviceMetadata({ params }: ServiceParams, expected: Locale) {
  const { locale, slug } = await params;
  const id = resolveService(locale, slug, expected);
  const content = serviceContent[expected][id];
  return createPageMetadata({ locale: expected, title: content.title, description: content.description, localizedPaths: serviceRoutes[id], type: "website" });
}

export async function renderService({ params }: ServiceParams, expected: Locale) {
  const { locale, slug } = await params;
  const id = resolveService(locale, slug, expected);
  return <ServicePage locale={expected} id={id} dictionary={await getDictionary(expected)} />;
}
