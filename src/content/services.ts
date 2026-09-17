import type { Locale } from "@/i18n/config";
import type { ServiceId } from "@/lib/service-routes";

type Entry = { title: string; copy: string };
export type ServiceContent = {
  name: string;
  title: string;
  description: string;
  heading: string;
  intro: string;
  builds: Entry[];
  problems: Entry[];
  approach: [string, string, string, string];
  technology: string;
  technologies: string[];
  scope: string;
  projects: { slug: "moss-project" | "logistica-sa"; copy: string }[];
};

export const serviceLabels = {
  en: { service: "Service", services: "Services", builds: "What we build", problems: "When this service makes sense", approach: "From the first conversation to launch", technology: "Technology with a purpose", scope: "Before we begin", projects: "Relevant work", viewProject: "Explore the project", related: "Explore other services", breadcrumb: "Breadcrumb", steps: ["Discover", "Design", "Build", "Launch"] },
  es: { service: "Servicio", services: "Servicios", builds: "Qué desarrollamos", problems: "Cuándo tiene sentido este servicio", approach: "De la primera conversación al lanzamiento", technology: "Tecnología con un propósito", scope: "Antes de empezar", projects: "Proyectos relacionados", viewProject: "Explorar el proyecto", related: "Explorá otros servicios", breadcrumb: "Ruta de navegación", steps: ["Descubrir", "Diseñar", "Desarrollar", "Lanzar"] },
};

export const serviceContent: Record<Locale, Record<ServiceId, ServiceContent>> = {
  en: {
    web: {
      name: "Web development",
      title: "Web Development | Oakflare",
      description: "Custom business websites with responsive design, fast performance and SEO-ready architecture. Built by Oakflare in Costa Rica for local and remote clients.",
      heading: "A better website for your next stage of business.",
      intro: "Your website should make it easy to understand your business and take the next step. Oakflare is an independent digital product studio in Costa Rica, building custom websites for local businesses and remote clients. Structure, design and development work together from the start.",
      builds: [
        { title: "Business websites with a clear purpose", copy: "Company websites, service pages and focused landing pages organized around what visitors need to know. We plan the content hierarchy and contact paths before choosing layouts, so the website answers real questions instead of filling a template." },
        { title: "Responsive, multilingual experiences", copy: "Interfaces that adapt to phones, tablets and desktops, with readable typography and usable navigation. For bilingual sites, each language gets its own content, URLs and search metadata, with a clear way to move between equivalent pages." },
        { title: "A website you can keep working with", copy: "Reusable components, a practical content structure and a deployment setup suited to your needs. If your team needs to publish frequently, we define which content should be editable and whether a content management system belongs in the scope." },
      ],
      problems: [
        { title: "Visitors cannot find the next step", copy: "A site may look finished while leaving people unsure what you offer or how to contact you. We clarify service information, simplify navigation and connect relevant pages to enquiry flows with understandable form feedback." },
        { title: "The mobile experience or loading time gets in the way", copy: "Oversized imagery, unstable layouts and hard-to-use forms create friction. We address image delivery, rendering and responsive behavior, then check the pages on different screen sizes. Technical SEO includes semantic markup, crawlable links, canonical URLs and a sitemap; rankings are never guaranteed." },
      ],
      approach: [
        "Identify your audience, the questions they ask and the action each page should support. Review existing content and agree on the page inventory, languages and ownership of copy and assets.",
        "Plan the information architecture and key layouts. Design mobile navigation, contact forms and content patterns together, so the site stays coherent as new pages are added.",
        "Develop reusable components, connect any agreed content tools and implement metadata, image optimization and form validation. Review real content in the browser, including longer translated text.",
        "Check links, accessibility basics, metadata and contact delivery. Configure hosting and the domain, agree on maintenance responsibilities and provide a clear way to make future updates.",
      ],
      technology: "Next.js, React and TypeScript support a structured, maintainable website. Tailwind CSS keeps the interface consistent. Hosting and content tools are selected around publishing needs and operating costs, rather than added by default.",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      scope: "Bring your current website, a list of services and any brand or content material you already have. Page count, languages, content preparation and integrations shape the scope. Ongoing content work and maintenance can be discussed separately from the initial launch.",
      projects: [{ slug: "moss-project", copy: "Moss Project shows how a public-facing experience can help visitors explore tours, understand the details and move into a reservation flow. It is a useful reference for content hierarchy and responsive product presentation." }],
    },
    apps: {
      name: "Web application development",
      title: "Web Application Development | Oakflare",
      description: "Custom web applications for bookings, customer portals and internal operations. Oakflare connects workflows, permissions, integrations and business data.",
      heading: "Web applications shaped around how your business works.",
      intro: "When spreadsheets and disconnected tools become the workflow, a custom application can bring the pieces together. Oakflare develops browser-based products for customers and internal teams, connecting the interface to the rules and data behind the business.",
      builds: [
        { title: "Internal platforms and dashboards", copy: "Operational workspaces for teams that need to find records, assign work and follow progress. Views are organized around daily decisions, with roles and permissions defining what each person can see or change." },
        { title: "Customer portals and reservations", copy: "Account-based experiences for booking services, reviewing information and tracking requests. We map availability, authentication and status changes so customer actions stay consistent with the administrative side of the system." },
        { title: "Connected workflows", copy: "Database-backed systems that connect logistics, customer management or other business processes through APIs. Integrations include validation and failure handling, so an unavailable third-party service does not leave users guessing what happened." },
      ],
      problems: [
        { title: "The same information lives in several places", copy: "Copying records between spreadsheets, inboxes and dashboards makes it hard to know which version is current. A shared data model and clear update rules can reduce duplicate entry and give each role the context it needs." },
        { title: "Your process has outgrown a generic tool", copy: "A reservation business may need departure availability and payment review; a logistics operation needs package states and customer tracking. We define the essential workflow first, then decide what should be custom and what can remain in an existing service." },
      ],
      approach: [
        "Map the current workflow with the people who use it. Identify user roles, business rules, data sources and exceptions, then define a first release that can complete a useful process end to end.",
        "Design the core screens and data model together. Walk through empty states, permission boundaries, errors and handoffs between customers and operators before implementation.",
        "Build the interface, API and database in connected increments. Implement authentication and server-side authorization, and test important transitions such as booking confirmation or package updates.",
        "Validate representative workflows with real users or agreed test scenarios. Plan any data migration, configure production services and agree on monitoring, support and the next iteration.",
      ],
      technology: "React and Next.js support the browser experience; .NET or FastAPI can implement business rules and APIs, with PostgreSQL for persistent data. The stack depends on the product and existing systems. There is no requirement to use every technology in one project.",
      technologies: ["React", "Next.js", ".NET", "FastAPI", "PostgreSQL"],
      scope: "A sample spreadsheet, a walkthrough of today's process or a list of user roles is a useful starting point. Integrations, data migration and permission complexity affect the scope as much as screen count. Oakflare works with businesses in Costa Rica and remotely.",
      projects: [
        { slug: "moss-project", copy: "Tour discovery, departure availability, bookings and payments connect to an administrative workspace. Moss Project illustrates how a customer journey and day-to-day operations belong to the same application." },
        { slug: "logistica-sa", copy: "Customer management, package tracking and operational workflows come together in Logística SA. Its customer and operator views demonstrate interfaces organized around different responsibilities." },
      ],
    },
    mobile: {
      name: "Mobile app development",
      title: "Mobile App Development | Oakflare",
      description: "Plan and develop mobile products with thoughtful UX, authentication and API integration. Oakflare scopes iOS, Android and cross-platform options around your needs.",
      heading: "Mobile applications with a clear reason to exist.",
      intro: "A mobile product needs to fit the moments when people actually use it. Oakflare offers mobile product planning and development, from defining the core experience to connecting it with backend services. The approach starts with your users and the capabilities the product needs.",
      builds: [
        { title: "Focused customer and business tools", copy: "Mobile experiences for recurring tasks such as checking account information, following a service request or capturing information away from a desk. We prioritize the main journey and keep the first release focused enough to validate with users." },
        { title: "An appropriate platform strategy", copy: "We assess Android and iOS needs, device features and distribution requirements. Cross-platform development can make sense when the experience is similar across devices; platform-specific work may be needed for deeper device integrations. A responsive website may be sufficient for simpler needs." },
        { title: "Connected application experiences", copy: "Authentication, API integration and backend connections keep account data and business actions consistent. Notifications are designed around useful events, permissions and user preferences, rather than treated as a reason to interrupt people." },
      ],
      problems: [
        { title: "A desktop workflow does not fit work on the move", copy: "Small screens, touch input and interrupted connections change how people complete a task. We plan concise forms, clear feedback and layouts that respond to device size, and decide explicitly whether offline use or synchronization is part of the product." },
        { title: "The app idea is larger than the first release needs to be", copy: "Trying to serve every use case at launch makes the product harder to evaluate. We identify the essential user journey, separate required device features from optional ones and define what needs to be learned before expanding the scope." },
      ],
      approach: [
        "Define who uses the product, how often and in what setting. Review required device features, existing APIs and distribution options to decide whether a mobile app is the appropriate format.",
        "Prototype the core journey with touch targets, keyboard behavior and permission requests in mind. Consider loading, errors and interrupted sessions alongside the ideal path.",
        "Implement the agreed platform approach and connect authentication and backend services. Test business actions at the API boundary and review behavior on the target devices.",
        "Prepare a device test plan, production configuration and any required store submission materials. Store review timing depends on the platform; post-launch updates and OS compatibility need an agreed maintenance plan.",
      ],
      technology: "The mobile framework is selected after reviewing platform requirements and device integrations. Existing REST APIs can provide shared business logic, with TypeScript, .NET or FastAPI considered where appropriate for supporting services. Framework choice follows the product brief.",
      technologies: ["iOS / Android", "REST APIs", "Authentication", "Backend integration"],
      scope: "Share the main task your users need to complete and any existing product or API. We will clarify target devices, offline needs, notifications and distribution before defining the release. This is a service capability; the current portfolio presents web products, not shipped mobile apps.",
      projects: [],
    },
    backend: {
      name: "Backend & API development",
      title: "Backend & API Development | Oakflare",
      description: "Backend systems and REST APIs for business logic, PostgreSQL data and integrations. Oakflare plans authentication, deployment and production reliability.",
      heading: "A backend that gives your product room to grow.",
      intro: "A useful interface depends on consistent data and dependable business logic. Oakflare develops backend systems and APIs that connect applications, support operations and make product behavior easier to maintain as requirements evolve.",
      builds: [
        { title: "REST APIs and business rules", copy: "Clear endpoints for web and mobile clients, with request validation, authentication and server-side authorization. Business rules live in the backend so permissions and important state changes do not depend on which interface makes the request." },
        { title: "Data, integrations and background work", copy: "PostgreSQL data models, external service integrations and background jobs for tasks that should not block a user request. We consider duplicate events, retries and partial failures when designing payment callbacks, notifications or data synchronization." },
        { title: "Administrative systems and deployment", copy: "Operational tools for managing the records and actions behind a product, supported by a deployment process for cloud or Linux environments. Docker can make application environments repeatable; configuration and secrets need a separate, deliberate setup." },
      ],
      problems: [
        { title: "Business logic is scattered across the product", copy: "If several screens implement their own rules, behavior can drift. A shared backend clarifies who can perform an action, which data is required and how changes are recorded. API contracts make those decisions explicit for every client." },
        { title: "An integration works until something goes wrong", copy: "External services can time out or deliver the same event twice. We plan error responses, safe retries and observable job states around the consequences of failure. Reliability also involves database migrations, backups and a recovery approach suited to the system." },
      ],
      approach: [
        "Review the product's data, business rules and existing integrations. Identify sensitive operations, expected usage and operational constraints before deciding where service boundaries belong.",
        "Define API contracts, authorization rules and the database model. Plan transaction boundaries and failure behavior, including how background jobs are retried and how operators investigate errors.",
        "Implement endpoints, migrations and integrations with tests for important rules and permission boundaries. Keep configuration separate from code and document how clients interact with the API.",
        "Prepare deployment, health checks, logs and the agreed backup and recovery procedures. Review migrations and rollback options, then establish who maintains the infrastructure after launch.",
      ],
      technology: ".NET and FastAPI with Python provide options for API services. PostgreSQL handles relational data, while Docker and Linux support repeatable deployment. Cloud infrastructure is selected around workload, budget and operating responsibility; complexity must earn its place.",
      technologies: [".NET", "FastAPI", "Python", "PostgreSQL", "Docker", "Linux"],
      scope: "Existing API documentation, integration requirements and a description of critical business actions help define the work. Availability expectations, data migration and ongoing operational support should be agreed explicitly. Oakflare can work on a new backend or a defined part of an existing system.",
      projects: [
        { slug: "moss-project", copy: "Moss Project connects reservations, departure availability, payments and administration with a .NET and PostgreSQL foundation. These flows show why customer actions and operational rules need a consistent backend." },
        { slug: "logistica-sa", copy: "Logística SA combines a FastAPI backend, PostgreSQL persistence and Dockerized services on Linux. Customer, package and tracking workflows provide a concrete example of the systems this service supports." },
      ],
    },
  },
  es: {
    web: {
      name: "Desarrollo web",
      title: "Desarrollo Web en Costa Rica | Oakflare",
      description: "Sitios web a medida para empresas en Costa Rica: diseño adaptable, rendimiento, arquitectura SEO y contenido bilingüe. Conocé el enfoque de Oakflare.",
      heading: "Desarrollo web moderno para empresas que quieren crecer.",
      intro: "Tu sitio debe explicar lo que hacés y facilitar el siguiente paso. Oakflare es un estudio independiente de productos digitales en Costa Rica que desarrolla sitios a medida para empresas locales y clientes remotos. La estructura, el diseño y el desarrollo se piensan juntos desde el inicio.",
      builds: [
        { title: "Sitios para empresas, con una intención clara", copy: "Sitios corporativos, páginas de servicios y landing pages organizados alrededor de lo que necesita saber cada visitante. Primero definimos la jerarquía del contenido y las rutas de contacto; después diseñamos las páginas para responder preguntas concretas." },
        { title: "Experiencias adaptables y bilingües", copy: "Interfaces que funcionan en teléfonos, tabletas y computadoras, con textos legibles y navegación clara. En un sitio bilingüe, cada idioma tiene contenido, direcciones y metadatos propios, además de enlaces entre páginas equivalentes." },
        { title: "Una base que se puede mantener", copy: "Componentes reutilizables, contenido bien organizado y un despliegue acorde con el proyecto. Si tu equipo publica con frecuencia, definimos qué necesita editar y si conviene integrar un gestor de contenido dentro del alcance." },
      ],
      problems: [
        { title: "El visitante no sabe cómo avanzar", copy: "Un sitio puede verse terminado y aun así dejar dudas sobre tus servicios o cómo contactarte. Aclaramos la información, simplificamos la navegación y conectamos las páginas con formularios que explican qué ocurrió después de enviarlos." },
        { title: "El sitio es lento o difícil de usar en el teléfono", copy: "Las imágenes pesadas, los saltos de diseño y los formularios incómodos dificultan la consulta. Revisamos carga de imágenes, renderizado y comportamiento adaptable. La base SEO incluye HTML semántico, enlaces rastreables, direcciones canónicas y sitemap; no prometemos posiciones en buscadores." },
      ],
      approach: [
        "Identificamos a tu público, sus preguntas y la acción que debe facilitar cada página. Revisamos el contenido disponible y acordamos páginas, idiomas y quién prepara los textos e imágenes.",
        "Definimos la arquitectura de información y los diseños principales. La navegación móvil, los formularios y los patrones de contenido se resuelven juntos para mantener la coherencia al sumar páginas.",
        "Desarrollamos componentes reutilizables, integramos las herramientas de contenido acordadas y configuramos metadatos, imágenes y validación de formularios. Revisamos contenido real en ambos idiomas.",
        "Verificamos enlaces, accesibilidad básica, metadatos y recepción de consultas. Configuramos dominio y hosting, y dejamos claras las responsabilidades de mantenimiento y actualización.",
      ],
      technology: "Next.js, React y TypeScript permiten organizar el sitio para facilitar su mantenimiento. Tailwind CSS ayuda a mantener una interfaz consistente. Elegimos hosting y herramientas de contenido según la frecuencia de publicación y los costos de operación.",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      scope: "Podés empezar con tu sitio actual, una lista de servicios y el material de marca que ya tengás. La cantidad de páginas, los idiomas, la preparación de contenido y las integraciones definen el alcance. El mantenimiento y la publicación continua se pueden acordar por separado.",
      projects: [{ slug: "moss-project", copy: "Moss Project permite explorar tours, consultar sus detalles y avanzar hacia una reserva. Su experiencia pública sirve como referencia de jerarquía de contenido y presentación de un producto en distintos tamaños de pantalla." }],
    },
    apps: {
      name: "Aplicaciones web",
      title: "Desarrollo de Aplicaciones Web | Oakflare",
      description: "Aplicaciones web a medida para reservas, portales de clientes y operaciones internas. Oakflare conecta procesos, permisos y datos de tu negocio en Costa Rica.",
      heading: "Aplicaciones web diseñadas alrededor de tu negocio.",
      intro: "Cuando las hojas de cálculo y las herramientas separadas terminan definiendo el trabajo, una aplicación a medida puede conectar el proceso. Oakflare desarrolla plataformas web para clientes y equipos internos, con interfaces vinculadas a las reglas y los datos del negocio.",
      builds: [
        { title: "Plataformas internas y paneles de control", copy: "Espacios de trabajo para consultar registros, asignar tareas y dar seguimiento a la operación. Las vistas responden a las decisiones del día a día, mientras los roles y permisos determinan qué puede ver o modificar cada persona." },
        { title: "Portales de clientes y sistemas de reservas", copy: "Experiencias con cuentas de usuario para reservar servicios, consultar información y seguir solicitudes. Definimos disponibilidad, autenticación y cambios de estado para que las acciones del cliente sean coherentes con la administración." },
        { title: "Procesos conectados", copy: "Sistemas con base de datos que enlazan logística, gestión de clientes y otros procesos mediante APIs. Las integraciones contemplan validación y manejo de errores para que una falla externa no deje al usuario sin saber qué pasó." },
      ],
      problems: [
        { title: "La misma información está en varios lugares", copy: "Copiar registros entre correos, hojas de cálculo y paneles dificulta saber qué versión está al día. Un modelo de datos compartido y reglas claras de actualización pueden reducir la digitación duplicada y dar contexto a cada rol." },
        { title: "Una herramienta genérica ya no alcanza", copy: "Un negocio de reservas necesita disponibilidad por salida y revisión de pagos; una operación logística necesita estados de paquetes y seguimiento para clientes. Primero delimitamos el proceso esencial y luego decidimos qué desarrollar y qué conservar en servicios existentes." },
      ],
      approach: [
        "Revisamos el proceso actual con quienes lo usan. Identificamos roles, reglas, fuentes de datos y excepciones para definir una primera versión que complete un flujo útil de principio a fin.",
        "Diseñamos las pantallas y el modelo de datos en conjunto. Revisamos estados vacíos, límites de permisos, errores y traspasos entre clientes y operadores antes de programar.",
        "Construimos interfaz, API y base de datos por entregas conectadas. Implementamos autenticación y autorización en el servidor, y probamos cambios importantes como confirmar una reserva o actualizar un paquete.",
        "Validamos los procesos con usuarios o escenarios acordados. Preparamos cualquier migración de datos, configuramos producción y definimos seguimiento, soporte y próximos pasos.",
      ],
      technology: "React y Next.js permiten construir la experiencia en el navegador; .NET o FastAPI pueden resolver las APIs y reglas de negocio, con PostgreSQL para los datos. La elección depende del producto y de los sistemas existentes, sin necesidad de usar todas las herramientas.",
      technologies: ["React", "Next.js", ".NET", "FastAPI", "PostgreSQL"],
      scope: "Una hoja de cálculo de ejemplo, un recorrido del proceso actual o una lista de roles es suficiente para empezar la conversación. Las integraciones, la migración de datos y los permisos influyen tanto como la cantidad de pantallas. Trabajamos con empresas en Costa Rica y de forma remota.",
      projects: [
        { slug: "moss-project", copy: "El catálogo de tours, la disponibilidad, las reservas y los pagos se conectan con un espacio administrativo. Moss Project muestra cómo la experiencia del cliente y la operación diaria forman parte de una misma aplicación." },
        { slug: "logistica-sa", copy: "Logística SA reúne gestión de clientes, paquetes, seguimiento y procesos operativos. Las vistas de clientes y operadores muestran cómo organizar una plataforma alrededor de responsabilidades distintas." },
      ],
    },
    mobile: {
      name: "Desarrollo móvil",
      title: "Desarrollo de Aplicaciones Móviles | Oakflare",
      description: "Planificación y desarrollo de aplicaciones móviles con UX, autenticación e integración de APIs. Evaluamos iOS, Android y opciones multiplataforma para tu producto.",
      heading: "Aplicaciones móviles pensadas para productos reales.",
      intro: "Un producto móvil tiene que encajar en los momentos en que las personas lo usan. Oakflare ofrece planificación y desarrollo móvil, desde la experiencia principal hasta su conexión con servicios backend. El punto de partida son los usuarios y las funciones que realmente necesitan.",
      builds: [
        { title: "Herramientas para clientes y equipos", copy: "Experiencias para tareas recurrentes como consultar una cuenta, seguir una solicitud o registrar información fuera de la oficina. Priorizamos el recorrido principal y una primera versión que permita validar el producto con usuarios." },
        { title: "Una estrategia de plataforma adecuada", copy: "Evaluamos necesidades de Android e iOS, funciones del dispositivo y requisitos de distribución. El desarrollo multiplataforma puede servir cuando la experiencia es similar; algunas integraciones requieren trabajo específico por sistema. Para necesidades sencillas, un sitio adaptable puede ser suficiente." },
        { title: "Experiencias conectadas al negocio", copy: "La autenticación, las APIs y el backend mantienen coherentes los datos de la cuenta y las acciones del usuario. Las notificaciones se diseñan según eventos útiles, permisos y preferencias, con un propósito claro para quien las recibe." },
      ],
      problems: [
        { title: "El proceso de escritorio no funciona fuera de la oficina", copy: "La pantalla pequeña, la interacción táctil y las conexiones interrumpidas cambian la forma de completar una tarea. Diseñamos formularios breves, respuestas claras y una interfaz adaptable, y acordamos si el uso sin conexión y la sincronización forman parte del alcance." },
        { title: "La idea abarca demasiado para la primera versión", copy: "Incluir todos los casos desde el inicio dificulta evaluar el producto. Identificamos el recorrido esencial, separamos funciones necesarias del dispositivo de opciones secundarias y definimos qué conviene aprender antes de ampliar el alcance." },
      ],
      approach: [
        "Definimos quién usará el producto, con qué frecuencia y en qué contexto. Revisamos funciones del dispositivo, APIs existentes y distribución para decidir si una aplicación móvil es el formato adecuado.",
        "Prototipamos el recorrido principal considerando controles táctiles, teclado y solicitudes de permisos. Los estados de carga, errores y sesiones interrumpidas también forman parte del diseño.",
        "Implementamos el enfoque de plataforma acordado y conectamos autenticación y backend. Probamos las acciones de negocio en la API y revisamos el comportamiento en los dispositivos objetivo.",
        "Preparamos pruebas por dispositivo, configuración de producción y los materiales de publicación necesarios. Los tiempos de revisión dependen de cada tienda; las actualizaciones y la compatibilidad futura requieren un plan de mantenimiento.",
      ],
      technology: "El framework móvil se elige después de revisar requisitos e integraciones del dispositivo. Las APIs REST pueden compartir la lógica de negocio, con TypeScript, .NET o FastAPI cuando sean apropiados para los servicios de soporte. La tecnología responde al alcance del producto.",
      technologies: ["iOS / Android", "APIs REST", "Autenticación", "Integración backend"],
      scope: "Contanos qué tarea debe completar el usuario y si ya existe un producto o una API. Antes de definir la versión, aclaramos dispositivos, uso sin conexión, notificaciones y distribución. Esta es una capacidad de servicio; el portafolio actual presenta productos web, no aplicaciones móviles publicadas.",
      projects: [],
    },
    backend: {
      name: "Backend y APIs",
      title: "Desarrollo Backend y APIs | Oakflare",
      description: "Backend y APIs REST para lógica de negocio, datos e integraciones. Oakflare desarrolla con PostgreSQL y planifica autenticación, despliegue y operación.",
      heading: "Backend y APIs preparados para crecer con tu producto.",
      intro: "Una interfaz útil depende de datos consistentes y reglas de negocio bien resueltas. Oakflare desarrolla sistemas backend y APIs que conectan aplicaciones, sostienen la operación y facilitan mantener el producto a medida que cambian sus necesidades.",
      builds: [
        { title: "APIs REST y reglas de negocio", copy: "Endpoints claros para clientes web y móviles, con validación, autenticación y autorización en el servidor. Las reglas viven en el backend para que los permisos y los cambios importantes no dependan de la interfaz que envía la solicitud." },
        { title: "Datos, integraciones y tareas en segundo plano", copy: "Modelos de datos en PostgreSQL, conexiones con servicios externos y trabajos que no deben bloquear una solicitud. Al diseñar eventos de pago, notificaciones o sincronización, contemplamos duplicados, reintentos y fallas parciales." },
        { title: "Administración y despliegue", copy: "Herramientas para gestionar registros y acciones internas, con un proceso de despliegue en infraestructura cloud o entornos Linux. Docker permite reproducir entornos de aplicación; la configuración y los secretos se gestionan de forma separada." },
      ],
      problems: [
        { title: "Las reglas están repartidas por todo el producto", copy: "Si varias pantallas implementan sus propias reglas, el comportamiento puede dejar de coincidir. Un backend compartido define quién puede actuar, qué datos se necesitan y cómo se registran los cambios. Los contratos de API hacen explícitas esas decisiones." },
        { title: "La integración funciona hasta que algo falla", copy: "Un servicio externo puede tardar demasiado o enviar un evento dos veces. Planificamos respuestas de error, reintentos seguros y estados consultables según las consecuencias de cada falla. La confiabilidad también requiere migraciones, respaldos y un enfoque de recuperación acorde con el sistema." },
      ],
      approach: [
        "Revisamos datos, reglas de negocio e integraciones existentes. Identificamos operaciones sensibles, uso esperado y restricciones operativas antes de definir los límites de cada servicio.",
        "Definimos contratos de API, permisos y modelo de datos. Acordamos límites de transacciones, manejo de errores y cómo reintentar tareas o investigar problemas desde la operación.",
        "Implementamos endpoints, migraciones e integraciones con pruebas para reglas importantes y límites de acceso. Separamos la configuración del código y documentamos el uso de la API.",
        "Preparamos despliegue, verificaciones de salud, registros y procedimientos acordados de respaldo y recuperación. Revisamos migraciones y opciones de reversión, y definimos quién mantiene la infraestructura.",
      ],
      technology: ".NET y FastAPI con Python ofrecen opciones para servicios de API. PostgreSQL gestiona datos relacionales, mientras Docker y Linux facilitan despliegues reproducibles. La infraestructura cloud se elige según carga, presupuesto y responsabilidad operativa, sin sumar complejidad innecesaria.",
      technologies: [".NET", "FastAPI", "Python", "PostgreSQL", "Docker", "Linux"],
      scope: "La documentación de APIs existentes, los requisitos de integración y una descripción de las acciones críticas ayudan a definir el trabajo. Acordamos expectativas de disponibilidad, migración y soporte operativo. Podemos desarrollar un backend nuevo o una parte delimitada de un sistema existente.",
      projects: [
        { slug: "moss-project", copy: "Moss Project conecta reservas, disponibilidad por salida, pagos y administración con una base de .NET y PostgreSQL. Estos procesos muestran por qué las acciones del cliente necesitan reglas de negocio consistentes." },
        { slug: "logistica-sa", copy: "Logística SA combina FastAPI, PostgreSQL y servicios con Docker desplegados en Linux. Sus procesos de clientes, paquetes y seguimiento son una referencia concreta de los sistemas que abarca este servicio." },
      ],
    },
  },
};
