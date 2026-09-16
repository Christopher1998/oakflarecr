import Link from "next/link";
import Arrow from "@/components/ui/Arrow";
import SectionLabel from "@/components/ui/SectionLabel";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";

export default function ProjectCTA({ locale, messages, startProject }: {
  locale: Locale;
  messages: Dictionary["projectCta"];
  startProject: string;
}) {
  return (
    <section className="theme-paper border-t border-line">
      <div className="site-container section-space">
        <SectionLabel>{messages.eyebrow}</SectionLabel>
        <div className="mt-6 flex flex-col items-start gap-8 md:flex-row md:items-end md:justify-between">
          <h2 className="section-title">{messages.titleLine1}<br />{messages.titleLine2}</h2>
          <Link href={`/${locale}#contact`} className="oakflare-button oakflare-button-dark shrink-0">{startProject} <Arrow /></Link>
        </div>
      </div>
    </section>
  );
}
