import { siteUrl } from "@/lib/seo";

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: "Oakflare",
  url: siteUrl,
  logo: `${siteUrl}/icon.png`,
  email: "hello@oakflarecr.com",
  founder: {
    "@type": "Person",
    name: "Christopher Jiménez",
  },
  sameAs: [
    "https://github.com/Christopher1998",
    "https://www.linkedin.com/in/christopher-jim%C3%A9nez-417540302/",
  ],
};

export default function OrganizationJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(organization).replaceAll("<", "\\u003c"),
      }}
    />
  );
}
