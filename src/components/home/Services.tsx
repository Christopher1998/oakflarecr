import SectionLabel from "@/components/ui/SectionLabel";
import Arrow from "@/components/ui/Arrow";
import type { Dictionary } from "@/i18n/types";

export default function Services({ messages }: { messages: Dictionary["services"] }) {
  return (
    <section id="services" className="border-t border-line bg-surface" aria-labelledby="services-heading">
      <div className="site-container section-space">
        <div className="section-intro">
          <div>
            <SectionLabel>{messages.eyebrow}</SectionLabel>
            <h2 id="services-heading" className="section-title mt-6">
              {messages.titleLine1}<br /><span className="text-muted">{messages.titleLine2}</span>
            </h2>
          </div>
          <p className="section-copy md:justify-self-end">{messages.intro}</p>
        </div>
        <ol className="border-t border-line">
          {messages.items.map((service, index) => (
            <li key={service.title} className="grid grid-cols-[2rem_minmax(0,1fr)] gap-x-4 gap-y-5 border-b border-line py-8 md:grid-cols-[2rem_minmax(0,1fr)_minmax(0,1fr)] md:gap-x-8 md:py-10">
              <span className="pt-2 font-mono text-xs text-accent">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="text-[clamp(1.75rem,2.8vw,2.75rem)] font-medium leading-tight tracking-[-0.04em]">{service.title}</h3>
              <div className="col-start-2 md:col-start-3">
                <p className="max-w-xl text-base leading-7 text-muted">{service.description}</p>
                <ul aria-label={messages.capabilitiesLabel} className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs leading-5 text-muted">
                  {service.capabilities.map((capability) => <li key={capability} className="border-l border-line pl-3">{capability}</li>)}
                </ul>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-8 flex justify-end">
          <a href="#contact" className="arrow-link">{messages.different} <Arrow diagonal /></a>
        </div>
      </div>
    </section>
  );
}
