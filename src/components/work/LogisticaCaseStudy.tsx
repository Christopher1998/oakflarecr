import Image from "next/image";
import Link from "next/link";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Arrow from "@/components/ui/Arrow";
import ProjectCTA from "@/components/ui/ProjectCTA";
import SectionLabel from "@/components/ui/SectionLabel";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";

const technologies = ["React", "JavaScript", "FastAPI", "Python", "PostgreSQL", "Docker", "Caddy", "Linux"];

export default function LogisticaCaseStudy({ locale, dictionary }: { locale: Locale; dictionary: Dictionary }) {
  const { common, logistica, nav, footer, projectCta } = dictionary;

  return (
    <>
      <Navbar locale={locale} messages={nav} caseStudy />
      <main id="main-content">
        <section className="site-container section-space">
          <div className="mb-10"><SectionLabel>{common.caseStudy} · 2026</SectionLabel></div>
          <div className="grid gap-10 lg:grid-cols-[1.4fr_0.6fr] lg:items-end">
            <div><h1 className="display-title">Logística<br />SA.</h1></div>
            <div className="max-w-md"><p className="section-copy">{logistica.description}</p></div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-6 border-t border-line pt-8 text-sm sm:grid-cols-2 lg:grid-cols-4">
            <ProjectDetail label={common.industry} value={logistica.industryValue} />
            <ProjectDetail label={common.type} value={logistica.typeValue} />
            <ProjectDetail label={common.year} value="2026" />
            <ProjectDetail label={common.role} value={common.designDevelopment} />
          </div>
        </section>

        <section>
          <div className="site-container">
            <div className="overflow-hidden rounded border border-copper/50 bg-surface p-1.5 md:p-2">
              <div className="relative aspect-[2048/1017] overflow-hidden bg-white"><Image src="/projects/logistica-sa/home.png" alt={logistica.heroAlt} fill preload sizes="(max-width: 1600px) 100vw, 1600px" className="object-contain" /></div>
            </div>
            <div className="mt-5 flex justify-between gap-6 text-xs uppercase tracking-[0.16em] text-muted"><span>{common.publicExperience}</span><span className="text-right">SA Logística · 2026</span></div>
          </div>
        </section>

        <section className="grid site-container gap-10 lg:grid-cols-2 section-space">
          <div><SectionLabel>{logistica.challengeLabel}</SectionLabel><h2 className="mt-7 max-w-xl section-title">{logistica.challengeTitle1} <span className="text-muted">{logistica.challengeTitle2}</span></h2></div>
          <div className="flex items-end"><div className="max-w-xl space-y-7 section-copy">{logistica.challengeParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></div>
        </section>

        <section className="border-y border-line bg-surface">
          <div className="grid site-container gap-10 lg:grid-cols-2 section-space">
            <div><SectionLabel>{logistica.solutionLabel}</SectionLabel><h2 className="mt-7 max-w-2xl section-title">{logistica.solutionTitle1}<br /><span className="text-muted">{logistica.solutionTitle2}</span></h2></div>
            <div className="flex items-end"><p className="max-w-xl section-copy">{logistica.solutionCopy}</p></div>
          </div>
          <div className="grid site-container gap-x-6 border-t border-line pb-10 sm:grid-cols-2 lg:grid-cols-4">
            {logistica.features.map((feature, index) => <div key={feature} className="border-b border-line py-6 md:pr-6"><span className="font-mono text-xs text-accent">{String(index + 1).padStart(2, "0")}</span><p className="mt-5 text-base">{feature}</p></div>)}
          </div>
        </section>

        <section className="site-container section-space">
          <SectionLabel>{logistica.productLabel}</SectionLabel>
          <div className="mt-12"><ProjectScreenshot src="/projects/logistica-sa/operator-dashboard.png" {...logistica.screens[0]} large /></div>
          <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:gap-8">
            <ProjectScreenshot src="/projects/logistica-sa/client-dashboard.png" {...logistica.screens[1]} />
            <ProjectScreenshot src="/projects/logistica-sa/packages.png" {...logistica.screens[2]} />
          </div>
          <div className="mt-16"><ProjectScreenshot src="/projects/logistica-sa/login.png" {...logistica.screens[3]} large /></div>
        </section>

        <section className="border-y border-line bg-surface">
          <div className="site-container section-space">
            <div className="grid gap-10 lg:grid-cols-2">
              <div><SectionLabel>{logistica.architectureLabel}</SectionLabel><h2 className="mt-7 max-w-2xl section-title">{logistica.architectureTitle1}<br /><span className="text-muted">{logistica.architectureTitle2}</span></h2></div>
              <div className="flex items-end"><p className="max-w-xl section-copy">{logistica.architectureCopy}</p></div>
            </div>
            <div className="mt-12 grid gap-x-8 border-t border-line sm:grid-cols-2 lg:grid-cols-4">
              {logistica.architectureItems.map((item, index) => <ArchitectureItem key={item.title} number={String(index + 1).padStart(2, "0")} title={item.title} description={item.description} />)}
            </div>
          </div>
        </section>

        <section className="site-container section-space">
          <div className="grid gap-10 lg:grid-cols-2">
            <div><SectionLabel>{logistica.technologyLabel}</SectionLabel><h2 className="mt-7 section-title">{logistica.technologyTitle1}<br /><span className="text-muted">{logistica.technologyTitle2}</span></h2></div>
            <div className="grid grid-cols-2 gap-px self-end bg-white/10">{technologies.map((technology) => <div key={technology} className="bg-background p-7 text-lg text-muted">{technology}</div>)}</div>
          </div>
        </section>

        <section className="border-t border-line bg-surface">
          <div className="site-container section-space">
            <SectionLabel>{logistica.resultLabel}</SectionLabel>
            <div className="mt-12 grid gap-10 lg:grid-cols-[1.3fr_0.7fr]">
              <h2 className="max-w-5xl section-title">{logistica.resultTitle1} <span className="text-muted">{logistica.resultTitle2}</span></h2>
              <div className="self-end"><p className="section-copy">{logistica.resultCopy}</p></div>
            </div>
          </div>
        </section>

        <section className="border-t border-line bg-background">
          <div className="site-container py-20">
            <p className="mb-8 text-xs uppercase tracking-[0.2em] text-muted">{common.nextProject}</p>
            <Link href={`/${locale}/work/moss-project`} className="project-link group flex items-end justify-between border-b border-line pb-8 hover:border-accent">
              <div><p className="mb-3 text-sm text-muted">{logistica.nextCategory}</p><h2 className="text-[clamp(2rem,3.8vw,3.5rem)] font-medium leading-tight tracking-[-0.04em]">Moss Project</h2></div>
              <span className="flex h-12 w-12 shrink-0 items-center justify-center text-accent"><Arrow diagonal /></span>
            </Link>
          </div>
        </section>
        <ProjectCTA locale={locale} messages={projectCta} startProject={nav.startProject} />
      </main>
      <Footer locale={locale} nav={nav} messages={footer} opensNewTab={common.opensNewTab} />
    </>
  );
}

function ProjectDetail({ label, value }: { label: string; value: string }) {
  return <div><p className="mb-2 text-xs uppercase tracking-[0.15em] text-muted">{label}</p><p className="text-muted">{value}</p></div>;
}

function ArchitectureItem({ number, title, description }: { number: string; title: string; description: string }) {
  return <div className="bg-surface py-7 pr-6"><div className="flex h-full flex-col gap-7"><span className="font-mono text-xs text-accent">{number}</span><div><h3 className="mb-4 text-2xl font-medium">{title}</h3><p className="text-sm leading-6 text-muted">{description}</p></div></div></div>;
}

function ProjectScreenshot({ src, alt, label, description, large = false }: { src: string; alt: string; label: string; description: string; large?: boolean }) {
  return <article><div className="screenshot-frame group relative aspect-[2/1]"><Image src={src} alt={alt} fill sizes={large ? "(max-width: 1600px) 100vw, 1600px" : "(max-width: 1024px) 100vw, 800px"} className="object-contain transition-transform duration-700 group-hover:scale-[1.01]" /></div><div className="mt-6 grid gap-4 md:grid-cols-[0.35fr_0.65fr]"><p className="text-sm font-medium text-foreground">{label}</p><p className="max-w-xl text-sm leading-6 text-muted">{description}</p></div></article>;
}
