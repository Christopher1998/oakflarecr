import SectionLabel from "@/components/ui/SectionLabel";
import type { Dictionary } from "@/i18n/types";

export default function Process({ messages }: { messages: Dictionary["process"] }) {
  return (
    <section id="process" className="border-t border-line bg-surface" aria-labelledby="process-heading">
      <div className="site-container section-space">
        <div className="section-intro">
          <div>
            <SectionLabel>{messages.eyebrow}</SectionLabel>
            <h2 id="process-heading" className="section-title mt-6">{messages.titleLine1}<br /><span className="text-muted">{messages.titleLine2}</span></h2>
          </div>
          <p className="section-copy md:justify-self-end">{messages.intro}</p>
        </div>
        <ol className="grid md:grid-cols-4">
          {messages.steps.map((step, index) => (
            <li key={step.title} className="process-step">
              <span className="font-mono text-xs text-muted">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mb-4 mt-5 text-2xl font-medium tracking-[-0.035em] lg:text-3xl">{step.title}</h3>
              <p className="max-w-xs text-sm leading-7 text-muted">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
