import Image from "next/image";
import Link from "next/link";
import Arrow from "@/components/ui/Arrow";
import SectionLabel from "@/components/ui/SectionLabel";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";

const projects = [
  { number: "01", slug: "/work/moss-project", year: "2026", technologies: ["React", ".NET", "PostgreSQL", "PayPal"], image: "/projects/moss-project/tours.png", imageWidth: 2532, imageHeight: 1259 },
  { number: "02", slug: "/work/logistica-sa", year: "2026", technologies: ["React", "FastAPI", "PostgreSQL", "Docker"], image: "/projects/logistica-sa/operator-dashboard.png", imageWidth: 1774, imageHeight: 887 }
];

export default function SelectedWork({ locale, messages, technologiesLabel }: {
  locale: Locale;
  messages: Dictionary["work"];
  technologiesLabel: string;
}) {
  return (
    <section id="work" className="border-t border-line" aria-labelledby="work-heading">
      <div className="site-container section-space">
        <div className="section-intro">
          <div>
            <SectionLabel>{messages.eyebrow}</SectionLabel>
            <h2 id="work-heading" className="section-title mt-6">
              {messages.titleLine1}<br /><span className="text-muted">{messages.titleLine2}</span>
            </h2>
          </div>
          <p className="section-copy md:justify-self-end">{messages.intro}</p>
        </div>
        {projects.map((project, index) => {
          const copy = messages.projects[index];
          return (
            <article key={copy.name} className="border-t border-line last:border-b">
              <Link href={`/${locale}${project.slug}`} aria-label={messages.viewCaseStudyLabel.replace("{project}", copy.name)} className="project-link group block py-8 md:py-10">
                <div className="grid grid-cols-[2rem_minmax(0,1fr)_auto] items-baseline gap-3 font-mono text-[11px] leading-5 text-muted sm:grid-cols-[4rem_minmax(0,1fr)_auto]">
                  <span className="text-accent">{project.number}</span>
                  <span>{copy.category}</span>
                  <span>{project.year}</span>
                </div>
                <div className="mt-6 grid min-w-0 gap-6 md:grid-cols-[minmax(0,.38fr)_minmax(0,.62fr)] md:gap-x-10 md:gap-y-6 lg:gap-x-16">
                  <div className="min-w-0">
                    <h3 className="text-[clamp(2rem,3vw,3rem)] font-medium leading-tight tracking-[-0.045em]">{copy.name}</h3>
                    <p className="mt-4 max-w-md text-[15px] leading-7 text-muted">{copy.description}</p>
                  </div>
                  <div className="screenshot-frame w-full max-w-[760px] md:col-start-2 md:row-span-2 md:row-start-1 md:justify-self-end">
                    <Image src={project.image} alt={copy.imageAlt} width={project.imageWidth} height={project.imageHeight} sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1520px) 56vw, 760px" className="h-auto w-full transition-transform duration-500 ease-out group-hover:scale-[1.015]" />
                  </div>
                  <div className="self-end">
                    <ul aria-label={technologiesLabel} className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted">
                      {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
                    </ul>
                    <span className="arrow-link mt-3 text-foreground">{messages.viewCaseStudy} <Arrow /></span>
                  </div>
                </div>
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
}
