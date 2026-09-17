# SEO service pages — implementation report

Implemented locally; not deployed.

## Architecture and files

Added:
- src/content/services.ts — typed bilingual copy for four services.
- src/lib/service-routes.ts — explicit locale route mapping.
- src/lib/service-page.tsx — shared route validation, metadata and rendering.
- src/components/services/ServicePage.tsx — server component with editorial layout.
- src/app/[locale]/services/[slug]/page.tsx — English static routes.
- src/app/[locale]/servicios/[slug]/page.tsx — Spanish static routes.
- docs/service-pages-report.md — this report.

Updated:
- src/lib/seo.ts — optional localized paths.
- src/app/sitemap.ts — eight URLs and explicit language alternatives.
- src/components/home/Services.tsx — links on the first four service titles.
- src/app/[locale]/page.tsx — locale passed to Services.
- src/components/layout/LocaleSwitcher.tsx — translated service paths.

Pages share an editorial layout: breadcrumbs, hero, numbered deliverables, business problems, service-specific Discover/Design/Build/Launch stages, technology, scope guidance, relevant projects, related services and the existing contact CTA. No new dependencies. Navbar, footer, homepage visual design, case studies and global CSS are preserved.

## Routes and hreflang

| English | Spanish |
| --- | --- |
| /en/services/web-development | /es/servicios/desarrollo-web |
| /en/services/web-app-development | /es/servicios/aplicaciones-web |
| /en/services/mobile-app-development | /es/servicios/desarrollo-movil |
| /en/services/backend-api-development | /es/servicios/backend-api |

Each pair uses reciprocal en/es alternatives and x-default pointing to English. Canonicals and Open Graph URLs use https://oakflarecr.com. The sitemap includes all eight URLs with these explicit mappings. Wrong-language prefixes and slugs return 404.

## Spanish titles and descriptions

**Desarrollo Web en Costa Rica | Oakflare**

Sitios web a medida para empresas en Costa Rica: diseño adaptable, rendimiento, arquitectura SEO y contenido bilingüe. Conocé el enfoque de Oakflare.

**Desarrollo de Aplicaciones Web | Oakflare**

Aplicaciones web a medida para reservas, portales de clientes y operaciones internas. Oakflare conecta procesos, permisos y datos de tu negocio en Costa Rica.

**Desarrollo de Aplicaciones Móviles | Oakflare**

Planificación y desarrollo de aplicaciones móviles con UX, autenticación e integración de APIs. Evaluamos iOS, Android y opciones multiplataforma para tu producto.

**Desarrollo Backend y APIs | Oakflare**

Backend y APIs REST para lógica de negocio, datos e integraciones. Oakflare desarrolla con PostgreSQL y planifica autenticación, despliegue y operación.

## English titles and descriptions

**Web Development | Oakflare**

Custom business websites with responsive design, fast performance and SEO-ready architecture. Built by Oakflare in Costa Rica for local and remote clients.

**Web Application Development | Oakflare**

Custom web applications for bookings, customer portals and internal operations. Oakflare connects workflows, permissions, integrations and business data.

**Mobile App Development | Oakflare**

Plan and develop mobile products with thoughtful UX, authentication and API integration. Oakflare scopes iOS, Android and cross-platform options around your needs.

**Backend & API Development | Oakflare**

Backend systems and REST APIs for business logic, PostgreSQL data and integrations. Oakflare plans authentication, deployment and production reliability.


## Internal links and projects

Homepage service titles link to their localized pages. Cloud & Deployment remains homepage content. Service pages link to the other three services, the localized homepage contact section and relevant localized case studies. Existing anchor navigation remains in use.

Web development references Moss Project for public content and responsive presentation. Web applications and backend pages reference Moss Project and Logística SA for documented reservations, payments, customer management, packages and operational workflows. Existing screenshots use next/image and localized alt text. Mobile is presented as a service capability, without fabricated mobile projects or shipped-app claims.

## Structured data and social images

The existing Organization component is preserved and reused. Each service adds a Service node referencing the Organization provider and actual canonical URL, plus BreadcrumbList data matching visible labels and destinations. No address, reviews, ratings or prices were added.

Existing localized Open Graph and Twitter image endpoints are reused at 1200×630. Titles and descriptions in Open Graph and Twitter metadata are service-specific.

## Validation

- npm run lint: passed after final code changes.
- npm run build: passed; all eight URLs appear explicitly in build output and the prerender manifest (21 static pages overall).
- All eight service URLs returned HTTP 200 from the local production build.
- Sixteen incorrect locale/slug combinations returned HTTP 404.
- Chrome checked all eight pages at 1440, 820 and 390 pixels: 24 combinations, no document or element horizontal overflow.
- Verified one H1, document language, canonical, reciprocal hreflang, x-default, Open Graph/Twitter titles, JSON-LD and localized links for every page at each width.
- All project images loaded with nonempty localized alt text.
- Screenshots reviewed for Spanish mobile and tablet and English desktop; headings, breadcrumbs, navigation and CTAs wrap cleanly. Full Spanish mobile capture includes project imagery and footer.
- Actual Tab-key focus displays the inherited visible outline; reduced-motion mode disables smooth scrolling.
- Client-side language switching from the Spanish application page reaches its English equivalent.
- Verified homepage links and all eight sitemap entries.
- git diff --check: passed, with only Git line-ending notices.

Browser checks are a local Chrome review, not a full assistive-technology or cross-browser audit.
