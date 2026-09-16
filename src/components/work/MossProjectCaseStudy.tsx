import Image from "next/image";
import Link from "next/link";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Arrow from "@/components/ui/Arrow";
import ProjectCTA from "@/components/ui/ProjectCTA";
import SectionLabel from "@/components/ui/SectionLabel";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";

const technologies = ["React", "TypeScript", ".NET", "PostgreSQL", "PayPal", "Docker"];

export default function MossProjectCaseStudy({ locale, dictionary }: { locale: Locale; dictionary: Dictionary }) {
  const { common, moss, nav, footer, projectCta } = dictionary;

  return (
    <>
      <Navbar locale={locale} messages={nav} caseStudy />
      <main id="main-content">
        <section className="site-container section-space">
          <SectionLabel>{common.caseStudy} · 2026</SectionLabel>
          <div className="mt-12 grid gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:items-end">
            <h1 className="display-title">Moss<br />Project</h1>
            <p className="max-w-lg section-copy md:text-xl">{moss.description}</p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-6 border-t border-line pt-8 text-sm sm:grid-cols-2 lg:grid-cols-4">
            <ProjectDetail label={common.industry} value={moss.industryValue} />
            <ProjectDetail label={common.type} value={moss.typeValue} />
            <ProjectDetail label={common.year} value="2026" />
            <ProjectDetail label={common.role} value={common.designDevelopment} />
          </div>
        </section>

        <section>
          <div className="site-container">
            <div className="rounded border border-[#9DCE35]/30 bg-[#111712] p-1.5 md:p-2">
              <ProjectImage src="/projects/moss-project/home.png" alt={moss.heroAlt} width={2541} height={1264} sizes="(max-width: 1600px) 100vw, 1600px" preload borderless />
            </div>
            <div className="mt-5 flex justify-between gap-6 text-xs uppercase tracking-[0.16em] text-muted">
              <span>{common.publicExperience}</span><span className="text-right">Moss Project · 2026</span>
            </div>
          </div>
        </section>

        <section className="grid site-container gap-10 lg:grid-cols-2 lg:gap-20 section-space">
          <div>
            <SectionLabel>{moss.challengeLabel}</SectionLabel>
            <h2 className="mt-7 max-w-2xl section-title">{moss.challengeTitle1} <span className="text-muted">{moss.challengeTitle2}</span></h2>
          </div>
          <p className="max-w-xl self-end section-copy">{moss.challengeCopy}</p>
        </section>

        <section className="border-y border-line bg-[#111712]">
          <div className="grid site-container gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 section-space">
            <div>
              <SectionLabel>{moss.solutionLabel}</SectionLabel>
              <h2 className="mt-7 max-w-2xl section-title">{moss.solutionTitle1} <span className="text-muted">{moss.solutionTitle2}</span></h2>
            </div>
            <div className="flex items-end lg:justify-end">
              <p className="max-w-2xl border-l border-[#9DCE35]/50 pl-7 section-copy md:pl-10">{moss.solutionCopy}</p>
            </div>
          </div>
        </section>

        <section className="py-28 md:py-36">
          <div className="site-container">
            <SectionLabel>{moss.storyLabel}</SectionLabel>
            <article className="mt-16">
              <StoryHeader number="01" title={moss.stories[0].title} copy={moss.stories[0].copy} />
              <div className="mt-10"><ProjectImage src="/projects/moss-project/tours.png" alt={moss.stories[0].alt} width={2532} height={1259} sizes="(max-width: 1600px) 100vw, 1600px" /></div>
            </article>

            <article className="mt-16 border-t border-line pt-12 md:mt-24 md:pt-16">
              <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
                <StoryHeader number="02" title={moss.stories[1].title} copy={moss.stories[1].copy} />
                <p className="hidden justify-self-end text-xs uppercase tracking-[0.18em] text-muted lg:block">{moss.travelerView}</p>
              </div>
              <div className="mt-10 lg:ml-[11%] lg:w-[89%]"><ProjectImage src="/projects/moss-project/tour-detail.png" alt={moss.stories[1].alt} width={2535} height={1259} sizes="(max-width: 1024px) 100vw, 1420px" /></div>
            </article>

            <article className="mt-16 border-t border-line pt-12 md:mt-24 md:pt-16">
              <StoryHeader number="03" title={moss.stories[2].title} copy={moss.stories[2].copy} />
              <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-6">
                <VisualWithCaption caption={moss.departureCaption}><ProjectImage src="/projects/moss-project/departure-selection.png" alt={moss.stories[2].alt} width={2535} height={1261} sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1023px) 92vw, (max-width: 1520px) 45vw, 684px" /></VisualWithCaption>
                <VisualWithCaption caption={moss.bookingCaption}><ProjectImage src="/projects/moss-project/booking-form.png" alt={moss.bookingAlt} width={2519} height={1249} sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1023px) 92vw, (max-width: 1520px) 45vw, 684px" /></VisualWithCaption>
              </div>
            </article>

            <article className="mt-16 border-t border-line pt-12 md:mt-24 md:pt-16">
              <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
                <StoryHeader number="04" title={moss.stories[3].title} copy={moss.stories[3].copy} />
                <p className="max-w-md text-sm leading-6 text-muted lg:justify-self-end">{moss.operationsNote}</p>
              </div>
              <div className="mt-10 rounded border border-line bg-paper p-1.5 md:p-2"><ProjectImage src="/projects/moss-project/admin-dashboard.png" alt={moss.stories[3].alt} width={2557} height={1265} sizes="(max-width: 1600px) 100vw, 1600px" borderless /></div>
            </article>

            <article className="mt-16 border-t border-line pt-12 md:mt-24 md:pt-16">
              <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr]">
                <StoryHeader number="05" title={moss.stories[4].title} copy={moss.stories[4].copy} />
                <div className="lg:pt-16"><ProjectImage src="/projects/moss-project/booking-lookup.png" alt={moss.stories[4].alt} width={2532} height={1262} sizes="(max-width: 1024px) 100vw, 1000px" /></div>
              </div>
            </article>
          </div>
        </section>

        <section className="border-y border-line bg-surface">
          <div className="grid site-container gap-10 lg:grid-cols-2 section-space">
            <div><SectionLabel>{common.technology}</SectionLabel><h2 className="mt-7 section-title">{moss.technologyTitle1}<br /><span className="text-muted">{moss.technologyTitle2}</span></h2></div>
            <div className="grid grid-cols-2 gap-px self-end bg-white/10">{technologies.map((technology) => <div key={technology} className="bg-surface p-6 text-base text-muted sm:p-7 sm:text-lg">{technology}</div>)}</div>
          </div>
        </section>

        <section className="site-container section-space">
          <SectionLabel>{common.result}</SectionLabel>
          <div className="mt-12 grid gap-10 lg:grid-cols-[1.25fr_0.75fr]">
            <h2 className="max-w-5xl section-title">{moss.resultTitle1} <span className="text-muted">{moss.resultTitle2}</span></h2>
            <p className="self-end section-copy">{moss.resultCopy}</p>
          </div>
        </section>

        <section className="border-t border-line bg-background">
          <div className="site-container py-20">
            <p className="mb-8 text-xs uppercase tracking-[0.2em] text-muted">{common.nextProject}</p>
            <Link href={`/${locale}/work/logistica-sa`} className="project-link group flex items-end justify-between gap-8 border-b border-line pb-8 hover:border-accent">
              <div><p className="mb-3 text-sm text-muted">{moss.nextCategory}</p><h2 className="text-[clamp(2rem,3.8vw,3.5rem)] font-medium leading-tight tracking-[-0.04em]">Logística SA</h2></div>
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

function StoryHeader({ number, title, copy }: { number: string; title: string; copy: string }) {
  return <div className="max-w-3xl"><p className="font-mono text-xs text-[#9DCE35]">{number}</p><h2 className="mt-5 text-[clamp(2rem,3.8vw,3.5rem)] font-medium leading-tight tracking-[-0.04em]">{title}</h2><p className="mt-6 max-w-2xl text-base leading-7 text-muted md:text-lg md:leading-8">{copy}</p></div>;
}

function VisualWithCaption({ caption, children }: { caption: string; children: React.ReactNode }) {
  return <div>{children}<p className="mt-4 text-xs uppercase tracking-[0.16em] text-muted">{caption}</p></div>;
}

function ProjectImage({ src, alt, width, height, sizes, preload = false, borderless = false }: { src: string; alt: string; width: number; height: number; sizes: string; preload?: boolean; borderless?: boolean }) {
  return <div className={`screenshot-frame group ${borderless ? "border-0" : ""}`}><Image src={src} alt={alt} width={width} height={height} sizes={sizes} preload={preload} className="h-auto w-full transition-transform duration-700 group-hover:scale-[1.005]" /></div>;
}
