import Link from "next/link";
import LocaleSwitcher from "@/components/layout/LocaleSwitcher";
import Arrow from "@/components/ui/Arrow";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";

export default function Navbar({ locale, messages, caseStudy = false }: {
  locale: Locale;
  messages: Dictionary["nav"];
  caseStudy?: boolean;
}) {
  const home = `/${locale}`;

  return (
    <header className="relative z-50 border-b border-line">
      <div className="site-container flex min-h-20 flex-wrap items-center justify-between gap-x-4 md:min-h-24">
        <Link href={home} aria-label={messages.homeLabel} className="group inline-flex min-h-11 shrink-0 items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em]">
          Oakflare
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent transition-transform duration-200 group-hover:scale-150 group-focus-visible:scale-150" />
        </Link>

        {caseStudy ? (
          <div className="flex items-center gap-4 sm:gap-7">
            <LocaleSwitcher locale={locale} labels={messages} />
            <Link href={`${home}#work`} className="arrow-link text-muted hover:text-foreground">
              <span aria-hidden="true">←</span>
              <span className="hidden sm:inline">{messages.backToWork}</span>
            </Link>
          </div>
        ) : (
          <>
            <nav aria-label={messages.navigationLabel} className="order-3 flex w-full items-center justify-between gap-5 border-t border-line py-1 text-sm text-muted md:order-none md:w-auto md:border-0 md:py-0">
              <Link href={`${home}#work`} className="inline-flex min-h-11 items-center transition-colors hover:text-foreground">{messages.work}</Link>
              <Link href={`${home}#services`} className="inline-flex min-h-11 items-center transition-colors hover:text-foreground">{messages.services}</Link>
              <Link href={`${home}#about`} className="inline-flex min-h-11 items-center transition-colors hover:text-foreground">{messages.about}</Link>
            </nav>
            <div className="flex items-center gap-4 sm:gap-6">
              <LocaleSwitcher locale={locale} labels={messages} />
              <Link href={`${home}#contact`} aria-label={messages.startProject} className="arrow-link border-b border-line text-foreground transition-colors hover:border-accent">
                <span className="hidden lg:inline">{messages.startProject}</span>
                <Arrow diagonal />
              </Link>
            </div>
          </>
        )}
      </div>
    </header>
  );
}
