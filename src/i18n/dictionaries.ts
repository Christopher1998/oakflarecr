import "server-only";

import type { Locale } from "./config";
import type { Dictionary } from "./types";

const dictionaries = {
  en: () => import("@/messages/en.json").then((module) => module.default),
  es: () => import("@/messages/es.json").then((module) => module.default),
};

export function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale]();
}
