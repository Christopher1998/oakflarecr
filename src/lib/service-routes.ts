import type { Locale } from "@/i18n/config";

export const serviceIds = ["web", "apps", "mobile", "backend"] as const;
export type ServiceId = (typeof serviceIds)[number];

export const serviceRoutes: Record<ServiceId, Record<Locale, string>> = {
  web: { en: "/en/services/web-development", es: "/es/servicios/desarrollo-web" },
  apps: { en: "/en/services/web-app-development", es: "/es/servicios/aplicaciones-web" },
  mobile: { en: "/en/services/mobile-app-development", es: "/es/servicios/desarrollo-movil" },
  backend: { en: "/en/services/backend-api-development", es: "/es/servicios/backend-api" },
};

export function translatedServicePath(path: string, target: Locale) {
  return serviceIds.map((id) => serviceRoutes[id]).find((routes) =>
    Object.values(routes).includes(path.replace(/\/$/, "")),
  )?.[target];
}
