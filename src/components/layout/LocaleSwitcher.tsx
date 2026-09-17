"use client";

import type { MouseEvent } from "react";
import { usePathname, useRouter } from "next/navigation";

import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import { translatedServicePath } from "@/lib/service-routes";

function persistLocalePreference(locale: Locale) {
  document.cookie = `oakflare-locale=${locale}; Path=/; Max-Age=31536000; SameSite=Lax`;
}

export default function LocaleSwitcher({ locale, labels }: {
  locale: Locale;
  labels: Dictionary["nav"];
}) {
  const pathname = usePathname();
  const router = useRouter();

  function hrefFor(target: Locale) {
    const servicePath = translatedServicePath(pathname, target);
    if (servicePath) return servicePath;
    const parts = pathname.split("/");
    parts[1] = target;
    return parts.join("/") || `/${target}`;
  }

  function rememberLocale(event: MouseEvent<HTMLAnchorElement>, target: Locale) {
    event.preventDefault();
    persistLocalePreference(target);
    router.push(`${hrefFor(target)}${window.location.hash}`);
  }

  return (
    <nav aria-label={labels.languageLabel} className="flex min-h-11 items-center gap-2 font-mono text-[11px] tracking-[0.12em]">
      {(["en", "es"] as const).map((target, index) => {
        const active = locale === target;
        const label = target === "en" ? labels.switchToEnglish : labels.switchToSpanish;
        return (
          <span key={target} className="contents">
            {index > 0 && <span aria-hidden="true" className="text-muted">/</span>}
            {active ? (
              <span aria-current="page" aria-label={label} className="border-b border-accent pb-1 text-foreground">{target.toUpperCase()}</span>
            ) : (
              <a href={hrefFor(target)} onClick={(event) => rememberLocale(event, target)} aria-label={label} hrefLang={target} lang={target} className="pb-1 text-muted transition-colors hover:text-foreground">
                {target.toUpperCase()}
              </a>
            )}
          </span>
        );
      })}
    </nav>
  );
}
