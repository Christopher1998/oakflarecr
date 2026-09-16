import Link from "next/link";
import Arrow from "@/components/ui/Arrow";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";

export default function Footer({ locale, nav, messages, opensNewTab }: {
  locale: Locale;
  nav: Dictionary["nav"];
  messages: Dictionary["footer"];
  opensNewTab: string;
}) {
  const home = `/${locale}`;
  const links = [
    { label: nav.work, hash: "work" },
    { label: nav.services, hash: "services" },
    { label: nav.about, hash: "about" },
    { label: messages.contact, hash: "contact" }
  ];
  return (
    <footer className="border-t border-line bg-background">
      <div className="site-container pb-8 pt-12 md:pt-16">
        <div className="grid gap-8 border-b border-line pb-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <Link href={home} aria-label={nav.homeLabel} className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em]">
              Oakflare <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
            </Link>
            <p className="mt-3 max-w-sm text-sm leading-7 text-muted">{messages.tagline}</p>
          </div>
          <div className="lg:justify-self-end">
            <nav aria-label={messages.navigationLabel} className="flex flex-wrap gap-x-6 text-sm text-muted">
              {links.map((link) => <Link key={link.hash} href={`${home}#${link.hash}`} className="inline-flex min-h-11 items-center hover:text-foreground">{link.label}</Link>)}
            </nav>
            <div className="mt-2 flex flex-wrap gap-x-6">
              <a href="https://github.com/Christopher1998" target="_blank" rel="noreferrer" className="arrow-link text-muted hover:text-foreground">GitHub <Arrow diagonal /><span className="sr-only"> ({opensNewTab})</span></a>
              <a href="https://www.linkedin.com/in/christopher-jim%C3%A9nez-417540302/" target="_blank" rel="noreferrer" className="arrow-link text-muted hover:text-foreground">LinkedIn <Arrow diagonal /><span className="sr-only"> ({opensNewTab})</span></a>
            </div>
            <a href="mailto:hello@oakflarecr.com" className="arrow-link mt-2">hello@oakflarecr.com <Arrow diagonal /></a>
          </div>
        </div>
        <div className="flex flex-col gap-3 pt-6 text-xs leading-6 text-muted sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Oakflare. {messages.rights}</p>
          <p>{messages.credit}</p>
        </div>
      </div>
    </footer>
  );
}
