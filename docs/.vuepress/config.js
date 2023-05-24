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
      apiKey: '99dcc8c4afd966e0e2f614f8498897d6',
      indexName: 'dev_docs',
      appId: '2C0N9ZVWQI'
    },
    locales: {
      "/en/": {
        selectText: "Languages",
        label: "English",
        nav: [
          {text: "Platform", link: "/en/platform/"},
          {text: "Dynamic", link: "/en/dynamic/"},
          {text: "Connect", link: "/en/connect/"},
          {text: "Modyo", link: "https://www.modyo.com"},
          {text: "Support", link: "https://support.modyo.com/hc/en-us"},
        ],
        sidebar: {
          "/en/platform/": [{
            title: "First Steps",
            path: "/en/platform/",
            collapsable: true,
            children: [
              "/en/platform/whats-new",
              "/en/platform/key-concepts",
              "/en/platform/release-notes",
              "/en/platform/training",
            ],
          },
            {
              title: "Platform",
              path: "/en/platform/core/",
              collapsable: true,
              children: [
                "/en/platform/core/the-modyo-interface",
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
                "/en/platform/core/roles",
                "/en/platform/core/security",
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
              title: "Channels",
              path: "/en/platform/channels/",
              collapsable: true,
              children: [
                "/en/platform/channels/sites",
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
                "/en/platform/customers/segments",
                "/en/platform/customers/forms",
                "/en/platform/customers/messaging",
                "/en/platform/customers/api",
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
          "/en/dynamic/": [{
            title: "Modyo Dynamic",
            collapsable: false,
            children: [
              ["/en/dynamic/", "What is Modyo Dynamic?"],
              "/en/dynamic/architecture",
              "/en/dynamic/activation",
              "/en/dynamic/support"
            ],
          },
            {
              title: "Dynamic UI",
              path: "/en/dynamic/ui/",
              collapsable: true,
              children: [
                "/en/dynamic/ui/",
                "/en/dynamic/ui/design-kit",
                "/en/dynamic/ui/components"
              ],
            },
            {
              title: "Dynamic Experiences",
              path: "/en/dynamic/experiences/",
              collapsable: true,
              children: [
                {
                  title: "Retail Banking",
                  path: "/en/dynamic/experiences/retail/",
                  collapsable: true,
                  children: [
                    "/en/dynamic/experiences/retail/dashboard",
                    "/en/dynamic/experiences/retail/dashboard-payments",
                    "/en/dynamic/experiences/retail/pay-debt",
                    "/en/dynamic/experiences/retail/loan-application",
                    "/en/dynamic/experiences/retail/loan-approval",
                    "/en/dynamic/experiences/retail/product-detail",
                    "/en/dynamic/experiences/retail/transfer",
                  ],
                },
                {
                  title: "Business Banking",
                  path: "/en/dynamic/experiences/business/",
                  collapsable: true,
                  children: [
                    "/en/dynamic/experiences/business/dashboard",
                    "/en/dynamic/experiences/business/entitlements"
                  ],
                },
                {
                  title: "Wealth Management",
                  path: "/en/dynamic/experiences/investments/",
                  collapsable: true,
                  children: [
                    "/en/dynamic/experiences/investments/accounts",
                    "/en/dynamic/experiences/investments/general-summary",
                    "/en/dynamic/experiences/investments/detailed-summary",
                    "/en/dynamic/experiences/investments/investments-transfers",
                    "/en/dynamic/experiences/investments/investments-transfer",
                    "/en/dynamic/experiences/investments/deposits",
                    "/en/dynamic/experiences/investments/documents",
                    "/en/dynamic/experiences/investments/mutual-funds",
                    "/en/dynamic/experiences/investments/stocks",
                  ],
                },
                {
                  title: "Insurance",
                  path: "/en/dynamic/experiences/insurance/",
                  collapsable: true,
                  children: [
                    "/en/dynamic/experiences/insurance/dashboard",
                    "/en/dynamic/experiences/insurance/quote",
                    "/en/dynamic/experiences/insurance/quote2",
                    "/en/dynamic/experiences/insurance/detailed-view",
                    "/en/dynamic/experiences/insurance/detailed-view2",
                    "/en/dynamic/experiences/insurance/issue-policy",
                  ],
                }
              ],
            },
            {
              title: "Dynamic Integrations",
              path: "/en/dynamic/integrations/",
              collapsable: true,
              children: [
                "/en/dynamic/integrations/mambu",
                "/en/dynamic/integrations/jumio",
                "/en/dynamic/integrations/salesforce"
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
                "/en/connect/resources/microfrontends",
                "/en/connect/resources/microservices",
                "/en/connect/resources/mrus",
                "/en/connect/resources/faq",
              ],
            },],
          "/en/brand/": [{
            title: "Brand Guidelines",
            collapsable: true,
            children: [
              ["/en/brand/", "Introduction"],
              "/en/brand/logo",
              "/en/brand/colors",
              "/en/brand/typography",
              "/en/brand/illustrations",
            ],
          },],
          "/en/legal/": [{
            title: "Legal",
            collapsable: true,
            children: [
              ["/en/legal/", "License Agreement"],
            ],
          },],
        },
      },
      "/es/": {
        selectText: "Lenguaje",
        label: "Español",
        nav: [
          {text: "Plataforma", link: "/es/platform/"},
          {text: "Dynamic", link: "/es/dynamic/"},
          {text: "Connect", link: "/es/connect/"},
          // { text: "Dynamic", link: "/es/dynamic/" },
          {text: "Modyo", link: "https://es.modyo.com"},
          {text: "Soporte", link: "https://support.modyo.com/hc/es"},
        ],
        sidebar: {
          "/es/platform/": [{
            title: "Primeros Pasos",
            path: "/es/platform/",
            collapsable: true,
            children: [
              ["/es/platform/whats-new", "¿Qué hay de nuevo?"],
              ["/es/platform/key-concepts", "Conceptos claves"],
              "/es/platform/release-notes",
              ["/es/platform/training", "Entrenamiento"],
            ],
          },
            {
              title: "Plataforma",
              path: "/es/platform/core/",
              collapsable: true,
              children: [
                "/es/platform/core/the-modyo-interface",
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
                    ["/es/platform/core/integrations/scim", "Provisionamiento SCIM con Microsoft Azure AD"],
                    ["/es/platform/core/integrations/google-data-studio-integration", "Integración con Google Analytics"],
                    ["/es/platform/core/integrations/oidc", "Gestión de sesión privada usando OpenID Connect (OIDC)"],
                  ],
                },
                "/es/platform/core/webhooks",
                "/es/platform/core/api",
                "/es/platform/core/roles",
                "/es/platform/core/security",
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
              title: "Channels",
              path: "/es/platform/channels/",
              collapsable: true,
              children: [
                "/es/platform/channels/sites",
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
                "/es/platform/customers/segments",
                "/es/platform/customers/forms",
                "/es/platform/customers/messaging",
                "/es/platform/customers/api",
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
          "/es/dynamic/": [{
            title: "Modyo Dynamic",
            collapsable: false,
            children: [
              ["/es/dynamic/", "¿Qué es Modyo Dynamic?"],
              "/es/dynamic/architecture",
              "/es/dynamic/activation",
              "/es/dynamic/support"
            ],
          },
            {
              title: "Dynamic UI",
              path: "/es/dynamic/ui/",
              collapsable: true,
              children: [
                "/es/dynamic/ui/",
                "/es/dynamic/ui/design-kit",
                "/es/dynamic/ui/components"
              ],
            },
            {
              title: "Dynamic Experiences",
              path: "/es/dynamic/experiences/",
              collapsable: true,
              children: [
                {
                  title: "Banca Retail",
                  path: "/es/dynamic/experiences/retail/",
                  collapsable: true,
                  children: [
                    "/es/dynamic/experiences/retail/dashboard",
                    "/es/dynamic/experiences/retail/dashboard-payments",
                    "/es/dynamic/experiences/retail/pay-debt",
                    "/es/dynamic/experiences/retail/loan-application",
                    "/es/dynamic/experiences/retail/loan-approval",
                    "/es/dynamic/experiences/retail/product-detail",
                    "/es/dynamic/experiences/retail/transfer",
                  ],
                },
                {
                  title: "Banca Empresas",
                  path: "/es/dynamic/experiences/business/",
                  collapsable: true,
                  children: [
                    "/es/dynamic/experiences/business/dashboard",
                    "/es/dynamic/experiences/business/product-detail",
                    "/es/dynamic/experiences/business/entitlements",
                    "/es/dynamic/experiences/business/entitlement-management",
                  ],
                },
                {
                  title: "Inversiones",
                  path: "/es/dynamic/experiences/investments/",
                  collapsable: true,
                  children: [
                    "/es/dynamic/experiences/investments/accounts",
                    "/es/dynamic/experiences/investments/general-summary",
                    "/es/dynamic/experiences/investments/detailed-summary",
                    "/es/dynamic/experiences/investments/investments-transfers",
                    "/es/dynamic/experiences/investments/investments-transfer",
                    "/es/dynamic/experiences/investments/deposits",
                    "/es/dynamic/experiences/investments/documents",
                    "/es/dynamic/experiences/investments/mutual-funds",
                    "/es/dynamic/experiences/investments/stocks",
                  ],
                },
                {
                  title: "Seguros",
                  path: "/es/dynamic/experiences/insurance/",
                  collapsable: true,
                  children: [
                    "/es/dynamic/experiences/insurance/dashboard",
                    "/es/dynamic/experiences/insurance/quote",
                    "/es/dynamic/experiences/insurance/quote2",
                    "/es/dynamic/experiences/insurance/detailed-view",
                    "/es/dynamic/experiences/insurance/detailed-view2",
                    "/es/dynamic/experiences/insurance/issue-policy",
                  ],
                }
              ],
            },
            {
              title: "Dynamic Integrations",
              path: "/es/dynamic/integrations/",
              collapsable: true,
              children: [
                "/es/dynamic/integrations/mambu",
                "/es/dynamic/integrations/jumio",
                "/es/dynamic/integrations/salesforce"
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
                "/es/connect/resources/microfrontends",
                "/es/connect/resources/microservices",
                "/es/connect/resources/mrus",
                "/es/connect/resources/faq",
              ],
            },],
          "/es/brand/": [{
            title: "Guía de Marca",
            collapsable: false,
            children: [
              ["/es/brand/", "Introducción"],
              "/es/brand/logo",
              "/es/brand/colors",
              "/es/brand/typography",
              "/es/brand/illustrations",
            ],
          },],
          "/es/legal/": [{
            title: "Legal",
            collapsable: false,
            children: [
              ["/es/legal/", "Acuerdo de Licencia"],
              ["/es/legal/dpa"],
            ],
          },],
        },
      },
    },
  },
};
