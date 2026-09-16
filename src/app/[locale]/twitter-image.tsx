import { defaultLocale, isLocale } from "@/i18n/config";
import { createSocialImage } from "@/lib/social-image";

export const alt = "Oakflare";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function TwitterImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: requestedLocale } = await params;
  const locale = isLocale(requestedLocale) ? requestedLocale : defaultLocale;

  return createSocialImage(locale);
}
