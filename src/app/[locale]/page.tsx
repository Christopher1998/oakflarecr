import type { Metadata } from "next";
import { notFound } from "next/navigation";

import About from "@/components/home/About";
import Contact from "@/components/home/Contact";
import Hero from "@/components/home/Hero";
import Process from "@/components/home/Process";
import SelectedWork from "@/components/home/SelectedWork";
import Services from "@/components/home/Services";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { getDictionary } from "@/i18n/dictionaries";
import { isLocale } from "@/i18n/config";

export async function generateMetadata({ params }: PageProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dictionary = await getDictionary(locale);
  const canonical = `/${locale}`;
  return {
    title: dictionary.metadata.homeTitle,
    description: dictionary.metadata.homeDescription,
    alternates: {
      canonical,
      languages: { en: "/en", es: "/es", "x-default": "/en" },
    },
  };
}

export default async function Home({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dictionary = await getDictionary(locale);

  return (
    <>
      <Navbar locale={locale} messages={dictionary.nav} />
      <main id="main-content">
        <Hero messages={dictionary.hero} />
        <SelectedWork locale={locale} messages={dictionary.work} technologiesLabel={dictionary.common.technologies} />
        <Services messages={dictionary.services} />
        <About messages={dictionary.about} opensNewTab={dictionary.common.opensNewTab} />
        <Process messages={dictionary.process} />
        <Contact messages={dictionary.contact} />
      </main>
      <Footer locale={locale} nav={dictionary.nav} messages={dictionary.footer} opensNewTab={dictionary.common.opensNewTab} />
    </>
  );
}
