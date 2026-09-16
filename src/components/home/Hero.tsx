import Arrow from "@/components/ui/Arrow";
import SectionLabel from "@/components/ui/SectionLabel";
import type { Dictionary } from "@/i18n/types";

export default function Hero({ messages }: { messages: Dictionary["hero"] }) {
  return (
    <section aria-labelledby="hero-heading">
      <div className="site-container pb-8 pt-12 md:pb-10 md:pt-16">
        <SectionLabel>{messages.eyebrow}</SectionLabel>
        <div className="grid items-end gap-10 py-12 md:py-16 lg:grid-cols-[minmax(0,1.65fr)_minmax(0,0.8fr)] lg:gap-16 lg:py-20">
          <h1 id="hero-heading" className="display-title text-[clamp(3rem,8.8vw,8.5rem)]">
            {messages.titleLine1}<br />
            {messages.titleLine2}<br />
            <span className="text-muted">{messages.titleLine3}</span>
          </h1>
          <div className="max-w-md lg:pb-2">
            <p className="section-copy">
              {messages.description}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
              <a href="#contact" className="oakflare-button oakflare-button-light">
                {messages.startProject} <Arrow />
              </a>
              <a href="#work" className="arrow-link text-muted hover:text-foreground">
                {messages.explore} <Arrow />
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 border-t border-line pt-6 font-mono text-[11px] leading-6 text-muted md:flex-row md:justify-between">
          <p>{messages.capabilities}</p>
          <p>{messages.signature}</p>
        </div>
      </div>
    </section>
  );
}
