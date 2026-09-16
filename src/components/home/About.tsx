import Arrow from "@/components/ui/Arrow";
import SectionLabel from "@/components/ui/SectionLabel";
import type { Dictionary } from "@/i18n/types";

export default function About({ messages, opensNewTab }: {
  messages: Dictionary["about"];
  opensNewTab: string;
}) {
  return (
    <section id="about" className="border-t border-line" aria-labelledby="about-heading">
      <div className="site-container section-space">
        <div className="section-intro">
          <div className="self-start">
            <SectionLabel>{messages.eyebrow}</SectionLabel>
            <h2 id="about-heading" className="section-title mt-6">
              {messages.titleLine1}<br /><span className="text-muted">{messages.titleLine2}</span>
            </h2>
          </div>
          <div className="section-copy md:justify-self-end">
            <p>{messages.paragraph1}</p>
            <p className="mt-6">{messages.paragraph2}</p>
          </div>
        </div>
        <div className="grid gap-8 border-t border-line py-10 md:grid-cols-[1.2fr_0.8fr] md:gap-12">
          <div>
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">{messages.foundedBy}</p>
            <h3 className="text-3xl font-medium tracking-[-0.04em] lg:text-4xl">Christopher Jiménez.</h3>
            <div className="mt-4 flex flex-wrap gap-x-6">
              <a href="https://github.com/Christopher1998" target="_blank" rel="noreferrer" className="arrow-link text-muted hover:text-foreground">GitHub <Arrow diagonal /><span className="sr-only"> ({opensNewTab})</span></a>
              <a href="https://www.linkedin.com/in/christopher-jim%C3%A9nez-417540302/" target="_blank" rel="noreferrer" className="arrow-link text-muted hover:text-foreground">LinkedIn <Arrow diagonal /><span className="sr-only"> ({opensNewTab})</span></a>
            </div>
          </div>
          <div>
            <p className="section-copy">{messages.founderCopy}</p>
            <a href="#contact" className="oakflare-button oakflare-button-outline mt-6">{messages.workWith} <Arrow /></a>
          </div>
        </div>
        <ul className="grid gap-6 border-t border-line pt-8 sm:grid-cols-2 lg:grid-cols-4">
          {messages.capabilities.map((item, index) => (
            <li key={item} className="flex gap-4 text-sm text-muted">
              <span className="font-mono text-xs text-accent">{String(index + 1).padStart(2, "0")}</span>{item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
