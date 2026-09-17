import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import OrganizationJsonLd from "@/components/seo/OrganizationJsonLd";
import SectionLabel from "@/components/ui/SectionLabel";
import ProjectCTA from "@/components/ui/ProjectCTA";
import Arrow from "@/components/ui/Arrow";
import { serviceContent, serviceLabels } from "@/content/services";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import { serviceIds, serviceRoutes, type ServiceId } from "@/lib/service-routes";
import { siteUrl } from "@/lib/seo";

export default function ServicePage({ locale, id, dictionary }: { locale: Locale; id: ServiceId; dictionary: Dictionary }) {
  const content = serviceContent[locale][id];
  const labels = serviceLabels[locale];
  const url = `${siteUrl}${serviceRoutes[id][locale]}`;
  const breadcrumbs = [
    { name: "Oakflare", url: `/${locale}` },
    { name: labels.services, url: `/${locale}#services` },
    { name: content.name, url: serviceRoutes[id][locale] },
  ];
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Service", "@id": `${url}#service`, name: content.name, description: content.description, url, provider: { "@id": `${siteUrl}/#organization` } },
      { "@type": "BreadcrumbList", itemListElement: breadcrumbs.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.name, item: `${siteUrl}${item.url}` })) },
    ],
  };

  return (
    <>
      <OrganizationJsonLd />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replaceAll("<", "\\u003c") }} />
      <Navbar locale={locale} messages={dictionary.nav} />
      <main id="main-content">
        <section className="site-container section-space">
          <nav aria-label={labels.breadcrumb} className="mb-12 text-xs leading-6 text-muted">
            <ol className="flex flex-wrap items-center gap-x-3 gap-y-1">
              {breadcrumbs.map((item, index) => <li key={item.url} className="flex items-center gap-3">
                {index > 0 && <span aria-hidden="true">/</span>}
                {index === 2 ? <span aria-current="page">{item.name}</span> : <Link href={item.url} className="inline-flex min-h-11 items-center hover:text-foreground">{item.name}</Link>}
              </li>)}
            </ol>
          </nav>
          <SectionLabel>{labels.service} · {String(serviceIds.indexOf(id) + 1).padStart(2, "0")}</SectionLabel>
          <h1 className="mt-8 max-w-6xl text-[clamp(2.75rem,6.4vw,6.5rem)] font-medium leading-[1.04] tracking-[-0.055em]">{content.heading}</h1>
          <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:items-end">
            <p className="max-w-2xl text-lg leading-8 text-muted">{content.intro}</p>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 lg:justify-end">
              <Link href={`/${locale}#contact`} className="oakflare-button oakflare-button-light">{dictionary.nav.startProject}<Arrow /></Link>
              {content.projects.length > 0 && <a href="#related-work" className="arrow-link">{labels.projects}<Arrow diagonal /></a>}
            </div>
          </div>
        </section>
        <section className="border-y border-line bg-surface" aria-labelledby="builds-heading">
          <div className="site-container section-space">
            <SectionLabel>{labels.service}</SectionLabel>
            <h2 id="builds-heading" className="section-title mt-6 mb-12">{labels.builds}</h2>
            <ol className="border-t border-line">
              {content.builds.map((entry, index) => <li key={entry.title} className="grid gap-5 border-b border-line py-8 md:grid-cols-[2rem_1fr_1.2fr] md:gap-8 md:py-10">
                <span className="font-mono text-xs text-accent">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="max-w-lg text-2xl font-medium leading-tight tracking-tight md:text-3xl">{entry.title}</h3>
                <p className="section-copy">{entry.copy}</p>
              </li>)}
            </ol>
          </div>
        </section>
        <section className="site-container section-space" aria-labelledby="problems-heading">
          <h2 id="problems-heading" className="section-title max-w-3xl">{labels.problems}</h2>
          <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-16">
            {content.problems.map((entry) => <div key={entry.title} className="border-t border-line pt-7">
              <h3 className="max-w-xl text-2xl font-medium leading-tight tracking-tight">{entry.title}</h3>
              <p className="section-copy mt-5">{entry.copy}</p>
            </div>)}
          </div>
        </section>
        <section className="border-y border-line bg-surface" aria-labelledby="approach-heading">
          <div className="site-container section-space">
            <h2 id="approach-heading" className="section-title max-w-4xl">{labels.approach}</h2>
            <ol className="mt-14 grid md:grid-cols-2 md:gap-y-12 xl:grid-cols-4">
              {content.approach.map((copy, index) => <li key={labels.steps[index]} className="process-step">
                <span className="font-mono text-xs text-muted">0{index + 1}</span>
                <h3 className="mt-4 text-2xl font-medium tracking-tight">{labels.steps[index]}</h3>
                <p className="mt-4 max-w-lg text-sm leading-7 text-muted">{copy}</p>
              </li>)}
            </ol>
          </div>
        </section>
        <section className="site-container section-space grid gap-12 lg:grid-cols-2 lg:gap-20" aria-labelledby="technology-heading">
          <div>
            <h2 id="technology-heading" className="text-3xl font-medium tracking-tight">{labels.technology}</h2>
            <p className="section-copy mt-6">{content.technology}</p>
            <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-3 font-mono text-xs text-muted">
              {content.technologies.map((name) => <li key={name} className="border-l border-line pl-3">{name}</li>)}
            </ul>
          </div>
          <div className="border-l border-line pl-7">
            <h2 className="text-3xl font-medium tracking-tight">{labels.scope}</h2>
            <p className="section-copy mt-6">{content.scope}</p>
          </div>
        </section>
        {content.projects.length > 0 && <section id="related-work" className="border-t border-line" aria-labelledby="work-heading">
          <div className="site-container section-space">
            <h2 id="work-heading" className="section-title">{labels.projects}</h2>
            <div className="mt-12 grid gap-12 md:grid-cols-2">
              {content.projects.map((project) => {
                const moss = project.slug === "moss-project";
                const name = moss ? "Moss Project" : "Logística SA";
                return <article key={project.slug}>
                  <Link href={`/${locale}/work/${project.slug}`} className="project-link block">
                    <div className="screenshot-frame"><Image src={`/projects/${project.slug}/home.png`} alt={moss ? dictionary.moss.heroAlt : dictionary.logistica.heroAlt} width={moss ? 2541 : 2048} height={moss ? 1264 : 1017} sizes="(max-width: 767px) 92vw, (max-width: 1520px) 45vw, 684px" className="h-auto w-full" /></div>
                    <h3 className="mt-6 flex items-center justify-between gap-4 text-3xl font-medium tracking-tight">{name}<Arrow diagonal /></h3>
                    <span className="mt-3 inline-block text-sm text-muted">{labels.viewProject}</span>
                  </Link>
                  <p className="section-copy mt-4">{project.copy}</p>
                </article>;
              })}
            </div>
          </div>
        </section>}
        <nav aria-label={labels.related} className="site-container border-t border-line py-10">
          <p className="mb-4 font-mono text-xs text-muted">{labels.related}</p>
          <ul className="flex flex-wrap gap-x-10 gap-y-3">
            {serviceIds.filter((other) => other !== id).map((other) => <li key={other}><Link href={serviceRoutes[other][locale]} className="arrow-link">{serviceContent[locale][other].name}<Arrow diagonal /></Link></li>)}
          </ul>
        </nav>
        <ProjectCTA locale={locale} messages={dictionary.projectCta} startProject={dictionary.nav.startProject} />
      </main>
      <Footer locale={locale} nav={dictionary.nav} messages={dictionary.footer} opensNewTab={dictionary.common.opensNewTab} />
    </>
  );
}
