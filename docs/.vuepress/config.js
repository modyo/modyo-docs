module.exports = {
  title: "Modyo Docs",
  description: "Welcome to the Modyo Support Center",
  locales: {
      // The key is the path for the locale to be nested under.
      // As a special case, the default locale can use '/' as its path.
      "/en/": {
          lang: "en",
          title: "Modyo Docs",
          description: "Welcome to the official Modyo documentation.",
      },
      "/es/": {
          lang: "es",
          title: "Modyo Docs",
          description: "Bienvenido a la documentación oficial de Modyo.",
      },
  },
  plugins: [],
  head: [
      [
          "script",
          {},
          `
  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-MW9VKMC');
  `,
      ]
  ],
  themeConfig: {
      logo: "/assets/img/modyo.png",
      docsDir: "docs",
      sidebarDepth: 1,
      activeHeaderLinks: false,
      smoothScroll: true,
      algolia: {
          apiKey: '0830ca92d68cf8e7626a6eaa2d2e083b',
          indexName: 'modyo_docs_index',
          appId: 'TEEU706UKD'
      },
      locales: {
          "/en/": {
              selectText: "Languages",
              label: "English",
              nav: [{
                      text: "Platform",
                      link: "/en/platform/basics/"
                  },
                  {
                      text: "Connect",
                      link: "/en/connect/"
                  },
                  {
                      text: "Dynamic",
                      link: "https://dynamicframework.dev"
                  },
                  {
                      text: "Modyo",
                      link: "https://www.modyo.com"
                  },
                  {
                      text: "Support",
                      link: "https://support.modyo.com/hc/en-us"
                  },
              ],
              sidebar: {
                  "/en/platform/": [{
                      title: "Modyo Basics",
                      path: "/en/platform/basics",
                      collapsable: true,
                      children: [
                          "/en/platform/basics/",
                          "/en/platform/basics/learn-modyo",
                          "/en/platform/basics/key-concepts",
                      ],
                  },
                      {
                          title: "Platform",
                          path: "/en/platform/core/",
                          collapsable: true,
                          children: [
                              "/en/platform/core/key-concepts",
                              "/en/platform/core/configuration",
                              {
                                  title: "Integrations",
                                  path: "/en/platform/core/integrations/",
                                  collapsable: true,
                                  children: [
                                      ["/en/platform/core/integrations/identity-providers", "Identity Providers"],
                                      ["/en/platform/core/integrations/scim", "SCIM Provision with Microsoft Azure AD"],
                                      ["/en/platform/core/integrations/google-data-studio-integration", "Integration with Google Analytics"],
                                      ["/en/platform/core/integrations/oidc", "Manage private sessions using OpenID Connect (OIDC)"],
                                  ],
                              },
                              "/en/platform/core/webhooks",
                              "/en/platform/core/api",
                              "/en/platform/core/activity-logs",
                              "/en/platform/core/roles",
                              "/en/platform/core/security",
                          ],
                      },
                      {
                        title: "Channels",
                        path: "/en/platform/channels/",
                        collapsable: true,
                        children: [
                            "/en/platform/channels/sites",
                            "/en/platform/channels/global-variables",
                            "/en/platform/channels/global-snippets",
                            "/en/platform/channels/pages",
                            "/en/platform/channels/navigation",
                            "/en/platform/channels/widgets",
                            "/en/platform/channels/cli",
                            "/en/platform/channels/templates",
                            {
                                title: "Liquid Markup",
                                path: "/en/platform/channels/liquid-markup/",
                                collapsable: true,
                                children: [
                                    "/en/platform/channels/liquid-markup/variables",
                                    "/en/platform/channels/liquid-markup/filters",
                                    "/en/platform/channels/liquid-markup/tags",
                                    "/en/platform/channels/liquid-markup/examples",
                                ],
                            },
                            "/en/platform/channels/drops",
                        ],
                      },
                      {
                        title: "Customers",
                        path: "/en/platform/customers/",
                        collapsable: true,
                        children: [
                            "/en/platform/customers/realms",
                            "/en/platform/customers/profile",
                            "/en/platform/customers/events",
                            "/en/platform/customers/segments",
                            "/en/platform/customers/forms",
                            "/en/platform/customers/origination",
                            "/en/platform/customers/messaging",
                            "/en/platform/customers/api",
                        ],
                      },
                      {
                          title: "Content",
                          path: "/en/platform/content/",
                          collapsable: true,
                          children: [
                              "/en/platform/content/spaces",
                              "/en/platform/content/types",
                              "/en/platform/content/entries",
                              "/en/platform/content/asset-manager",
                              "/en/platform/content/public-api-reference",
                              "/en/platform/content/javascript",
                          ],
                      },
                      {
                          title: "Insights",
                          path: "/en/platform/insights/",
                          collapsable: true,
                          children: [
                              "/en/platform/insights/digital-factory",
                              ["/en/platform/insights/data-studio", "Data Studio"],
                          ],
                      },
                  ],
                  "/en/connect/": [{
                          title: "Modyo Connect",
                          collapsable: false,
                          children: [
                              ["/en/connect/", "What is Modyo Connect?"],
                              "/en/connect/architecture",
                              "/en/connect/activation",
                              "/en/connect/support",
                          ],
                      },
                      {
                          title: "Components",
                          collapsable: true,
                          children: [
                              "/en/connect/components/development",
                              "/en/connect/components/infrastructure",
                              "/en/connect/components/monitoring",
                          ],
                      },
                      {
                          title: "Resources",
                          collapsable: true,
                          children: [
                              "/en/connect/resources/mrus",
                              "/en/connect/resources/faq",
                          ],
                      },
                  ],
                  "/en/architecture/": [{
                          title: "Architecture",
                          collapsable: false,
                          children: [
                              ["/en/architecture/", "Introduction"],
                              ["/en/architecture/why-modyo", "Why Modyo?"],
                          ],
                      },
                      {
                          title: "Patterns",
                          collapsable: true,
                          children: [
                              "/en/architecture/patterns/public-site",
                              "/en/architecture/patterns/private-site",
                              "/en/architecture/patterns/hybrid-site",
                              "/en/architecture/patterns/micro-frontend",
                              "/en/architecture/patterns/microservice",
                              "/en/architecture/patterns/sso",
                              "/en/architecture/patterns/bff",
                              "/en/architecture/patterns/design-system",
                              "/en/architecture/patterns/web-components",
                              "/en/architecture/patterns/pwa",
                              "/en/architecture/patterns/ssr",
                              "/en/architecture/patterns/ssg",
                              "/en/architecture/patterns/spa",
                              "/en/architecture/patterns/repository",
                              "/en/architecture/patterns/code-reuse",
                              "/en/architecture/patterns/ddd",
                              "/en/architecture/patterns/accessibility",
                              "/en/architecture/patterns/internationalization",
                          ],
                      },
                      {
                          title: "Resources",
                          collapsable: true,
                          children: [
                              "/en/architecture/resources/",
                              "/en/architecture/resources/web-performance",
                          ],
                      },
                  ],
              },
          },
          "/es/": {
              selectText: "Lenguaje",
              label: "Español",
              nav: [{
                      text: "Plataforma",
                      link: "/es/platform/basics/"
                  },
                  {
                      text: "Connect",
                      link: "/es/connect/"
                  },
                  {
                      text: "Dynamic",
                      link: "https://dynamicframework.dev"
                  },
                  {
                      text: "Modyo",
                      link: "https://es.modyo.com"
                  },
                  {
                      text: "Soporte",
                      link: "https://support.modyo.com/hc/es"
                  },
              ],
              sidebar: {
                  "/es/platform/": [{
                          title: "Fundamentos de Modyo",
                          path: "/es/platform/basics/",
                          collapsable: true,
                          children: [
                            ["/es/platform/basics/", "Bienvenido a Modyo"],
                            ["/es/platform/basics/learn-modyo", "Aprende Modyo"],
                            ["/es/platform/basics/key-concepts", "Conceptos claves"],
                          ],
                      },

                      {
                        title: "Plataforma",
                        path: "/es/platform/core/",
                        collapsable: true,
                        children: [
                            "/es/platform/core/key-concepts",
                            /*"/es/platform/core/integration",*/
                            /*"/es/platform/core/installation",*/
                            "/es/platform/core/configuration",
                            {
                                title: "Integraciones",
                                path: "/es/platform/core/integrations/",
                                collapsable: true,
                                children: [
                                    ["/es/platform/core/integrations/identity-providers", "Proveedores de Identidad"],
                                    ["/es/platform/core/integrations/scim", "Aprovisionamiento SCIM con Microsoft Azure AD"],
                                    ["/es/platform/core/integrations/google-data-studio-integration", "Integración con Google Analytics"],
                                    ["/es/platform/core/integrations/oidc", "Gestión de sesión privada usando OpenID Connect (OIDC)"],
                                ],
                            },
                            "/es/platform/core/webhooks",
                            "/es/platform/core/api",
                            "/es/platform/core/activity-logs",
                            "/es/platform/core/roles",
                            "/es/platform/core/security",
                        ],
                      },
                      {
                        title: "Channels",
                        path: "/es/platform/channels/",
                        collapsable: true,
                        children: [
                            "/es/platform/channels/sites",
                            "/es/platform/channels/global-variables",
                            "/es/platform/channels/global-snippets",
                            "/es/platform/channels/pages",
                            "/es/platform/channels/navigation",
                            "/es/platform/channels/widgets",
                            "/es/platform/channels/cli",
                            "/es/platform/channels/templates",
                            {
                                title: "Liquid Markup",
                                path: "/es/platform/channels/liquid-markup/",
                                collapsable: true,
                                children: [
                                    "/es/platform/channels/liquid-markup/variables",
                                    "/es/platform/channels/liquid-markup/filters",
                                    "/es/platform/channels/liquid-markup/tags",
                                    "/es/platform/channels/liquid-markup/examples",
                                ],
                            },
                            "/es/platform/channels/drops",
                        ],
                      },
                      {
                          title: "Customers",
                          path: "/es/platform/customers/",
                          collapsable: true,
                          children: [
                              "/es/platform/customers/realms",
                              "/es/platform/customers/profile",
                              "/es/platform/customers/events",
                              "/es/platform/customers/segments",
                              "/es/platform/customers/forms",
                              "/es/platform/customers/origination",
                              "/es/platform/customers/messaging",
                              "/es/platform/customers/api",
                          ],
                      },
                      {
                          title: "Content",
                          path: "/es/platform/content/",
                          collapsable: true,
                          children: [
                              "/es/platform/content/spaces",
                              "/es/platform/content/types",
                              "/es/platform/content/entries",
                              "/es/platform/content/asset-manager",
                              "/es/platform/content/public-api-reference",
                              "/es/platform/content/javascript",
                          ],
                      },
                      {
                          title: "Insights",
                          path: "/es/platform/insights/",
                          collapsable: true,
                          children: [
                              "/es/platform/insights/digital-factory",
                              ["/es/platform/insights/data-studio", "Data Studio"],
                          ],
                      },
                  ],
                  "/es/connect/": [{
                          title: "Modyo Connect",
                          collapsable: false,
                          children: [
                              ["/es/connect/", "¿Qué es Modyo Connect?"],
                              "/es/connect/architecture",
                              "/es/connect/activation",
                              "/es/connect/support",
                          ],
                      },
                      {
                          title: "Componentes",
                          collapsable: true,
                          children: [
                              "/es/connect/components/development",
                              "/es/connect/components/infrastructure",
                              "/es/connect/components/monitoring",
                          ],
                      },
                      {
                          title: "Recursos",
                          collapsable: true,
                          children: [
                              "/es/connect/resources/mrus",
                              "/es/connect/resources/faq",
                          ],
                      },
                  ],
                  "/es/architecture/": [{
                          title: "Arquitectura",
                          collapsable: false,
                          children: [
                              ["/es/architecture/", "Introducción"],
                              ["/es/architecture/why-modyo", "¿Por qué Modyo?"],
                          ],
                      },
                      {
                          title: "Patrones",
                          collapsable: true,
                          children: [
                              "/es/architecture/patterns/public-site",
                              "/es/architecture/patterns/private-site",
                              "/es/architecture/patterns/hybrid-site",
                              "/es/architecture/patterns/micro-frontend",
                              "/es/architecture/patterns/microservice",
                              "/es/architecture/patterns/sso",
                              "/es/architecture/patterns/bff",
                              "/es/architecture/patterns/design-system",
                              "/es/architecture/patterns/web-components",
                              "/es/architecture/patterns/pwa",
                              "/es/architecture/patterns/ssr",
                              "/es/architecture/patterns/ssg",
                              "/es/architecture/patterns/spa",
                              "/es/architecture/patterns/repository",
                              "/es/architecture/patterns/code-reuse",
                              "/es/architecture/patterns/ddd",
                              "/es/architecture/patterns/accessibility",
                              "/es/architecture/patterns/internationalization",
                          ],
                      },
                      {
                          title: "Recursos",
                          collapsable: true,
                          children: [
                              "/es/architecture/resources/",
                              "/es/architecture/resources/web-performance",
                          ],
                      },
                  ],
              },
          },
      },
  },
};