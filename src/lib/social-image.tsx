import { ImageResponse } from "next/og";

import type { Locale } from "@/i18n/config";

const copy = {
  en: {
    eyebrow: "DIGITAL PRODUCT STUDIO",
    title: ["DIGITAL PRODUCTS", "THAT STAND OUT."],
    capabilities: "Websites · Web apps · Mobile apps · APIs",
  },
  es: {
    eyebrow: "ESTUDIO DE PRODUCTOS DIGITALES",
    title: ["PRODUCTOS DIGITALES", "QUE DESTACAN."],
    capabilities: "Sitios web · Apps web · Apps móviles · APIs",
  },
} satisfies Record<Locale, {
  eyebrow: string;
  title: [string, string];
  capabilities: string;
}>;

export function createSocialImage(locale: Locale) {
  const messages = copy[locale];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0D0D0C",
          color: "#F3F0E8",
          padding: "64px 72px",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: 5,
          }}
        >
          OAKFLARE
          <span
            style={{
              width: 11,
              height: 11,
              marginLeft: 14,
              borderRadius: 999,
              backgroundColor: "#E87932",
            }}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              color: "#B8B5AD",
              fontSize: 17,
              letterSpacing: 4,
            }}
          >
            <span
              style={{
                width: 42,
                height: 3,
                marginRight: 18,
                backgroundColor: "#E87932",
              }}
            />
            {messages.eyebrow}
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: 28,
              fontSize: 76,
              fontWeight: 700,
              lineHeight: 0.98,
              letterSpacing: -3,
            }}
          >
            <span>{messages.title[0]}</span>
            <span style={{ color: "#A5A39B" }}>{messages.title[1]}</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: 26,
            borderTop: "1px solid rgba(243, 240, 232, 0.22)",
            color: "#C7C3B9",
            fontSize: 20,
          }}
        >
          <span>{messages.capabilities}</span>
          <span style={{ color: "#E87932", fontWeight: 700 }}>oakflarecr.com</span>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
