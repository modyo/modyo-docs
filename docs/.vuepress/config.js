module.exports = {
  title: "Modyo Docs",
  description: "Welcome to the Modyo Support Center",
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    "/": {
      lang: "en",
      title: "Modyo Docs",
      description: "Welcome to the official Modyo documentation",
    },
    "/es/": {
      lang: "es",
      title: "Documentación de Modyo",
      description: "Bienvenido a la documentación oficial de Modyo",
    },
  },
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
    ],
  ],
  themeConfig: {
    logo: "/assets/img/modyo.png",
    docsDir: "docs",
    sidebarDepth: 1,
    activeHeaderLinks: true,
    algolia: {
      apiKey: "d6d3315d4f9b9a8a5f7870a8bd10d187",
      indexName: "modyo",
    },
    locales: {
      "/": {
        selectText: "Languages",
        label: "English",
        nav: [
          { text: "Platform", link: "/platform/" },
          { text: "Widgets", link: "/widgets/" },
          { text: "Modyo", link: "https://www.modyo.com" },
          { text: "Support", link: "https://support.modyo.com/hc/en-us" },
        ],
        sidebar: {
          "/platform/": [
            {
              title: "First Steps",
              collapsable: true,
              children: [
                "/platform/",
                "/platform/whats-new",
                "/platform/key-concepts",
                "/platform/versions",
                "/platform/release-notes",
              ],
            },
            {
              title: "Platform",
              collapsable: true,
              children: [
                ["/platform/core/", "Introduction"],
                "/platform/core/the-modyo-interface",
                "/platform/core/key-concepts",
                "/platform/core/integration",
                "/platform/core/roles",
                "/platform/core/security",
                "/platform/core/api",
              ],
            },
            {
              title: "Content",
              collapsable: true,
              children: [
                ["/platform/content/", "Introduction"],
                "/platform/content/spaces",
                "/platform/content/types",
                "/platform/content/entries",
                "/platform/content/asset-manager",
                "/platform/content/public-api-reference",
              ],
            },
            {
              title: "Channels",
              collapsable: true,
              children: [
                ["/platform/channels/", "Introduction"],
                "/platform/channels/sites",
                "/platform/channels/pages",
                "/platform/channels/navigation",
                "/platform/channels/widgets",
                "/platform/channels/templates",
                "/platform/channels/liquid-markup",
              ],
            },
            {
              title: "Customers",
              collapsable: true,
              children: [
                ["/platform/customers/", "Introduction"],
                "/platform/customers/users",
                "/platform/customers/targets",
                "/platform/customers/forms",
                "/platform/customers/messaging",
              ],
            },
            {
              title: "Insights",
              collapsable: true,
              children: [
                ["/platform/insights/", "Introduction"],
                "/platform/insights/digital-factory",
                ["/platform/insights/data-studio", "Data Studio"],
              ],
            },
          ],
          "/widgets/": [
            {
              title: "Catalog",
              collapsable: false,
              children: [["/widgets/", "About widgets"]],
            },
            {
              title: "Retail",
              collapsable: true,
              children: [
                "/widgets/retail/summary",
                "/widgets/retail/accounts",
                "/widgets/retail/credit-cards",
                "/widgets/retail/credit-card-payment",
                "/widgets/retail/loans",
                "/widgets/retail/consumer-loan",
                "/widgets/retail/mortgage-loans",
                "/widgets/retail/cash-advance",
                "/widgets/retail/transfer",
                "/widgets/retail/transfers",
              ],
            },
            {
              title: "Investments",
              collapsable: true,
              children: [
                "/widgets/investments/accounts",
                "/widgets/investments/general-summary",
                "/widgets/investments/detailed-summary",
                "/widgets/investments/investments-transfers",
                "/widgets/investments/investments-transfer",
                "/widgets/investments/deposits",
                "/widgets/investments/documents",
                "/widgets/investments/mutual-funds",
                "/widgets/investments/stocks",
              ],
            },
            {
              title: "Insurance Brokers",
              collapsable: true,
              children: [
                "/widgets/insurance-brokers/dashboard",
                "/widgets/insurance-brokers/quote",
                "/widgets/insurance-brokers/detailed-view",
                "/widgets/insurance-brokers/issue-policy",
              ],
            },
            {
              title: "Insurance Retail",
              collapsable: true,
              children: [
                "/widgets/insurance-retail/summary",
                "/widgets/insurance-retail/quote",
                "/widgets/insurance-retail/detailed-view",
              ],
            },
            /*  {
              title: "Onboarding",
              collapsable: true,
              children: ["/widgets/onboarding/"]
            }, */
          ],
          "/brand/": [
            {
              title: "Brand Guidelines",
              collapsable: true,
              children: [
                ["/brand/", "Introduction"],
                "/brand/logo",
                "/brand/colors",
                "/brand/icons",
                "/brand/typography",
              ],
            },
            {
              title: "Illustrations",
              collapsable: true,
              children: [
                ["/brand/illustrations/", "Introduction"],
                "/brand/illustrations/structure",
                "/brand/illustrations/applications",
              ],
            },
            /*{
              title: "Documents",
              collapsable: true,
              children: [
                ["/brand/documents/", "Introduction"],
              ],
            },*/
          ],
        },
      },
      "/es/": {
        selectText: "Lenguaje",
        label: "Español",
        nav: [
          { text: "Plataforma", link: "/es/platform/" },
          { text: "Widgets", link: "/es/widgets/" },
          { text: "Modyo", link: "https://es.modyo.com" },
          { text: "Soporte", link: "https://support.modyo.com/hc/es" },
        ],
        sidebar: {
          "/es/platform/": [
            {
              title: "Primeros Pasos",
              collapsable: true,
              children: [
                "/es/platform/",
                "/es/platform/whats-new",
                "/es/platform/key-concepts",
                "/es/platform/versions",
                "/es/platform/release-notes",
              ],
            },
            {
              title: "Infraestructura",
              collapsable: true,
              children: [
                "/es/platform/infrastructure/cloud",
                /*"/platform/infrastructure/onpremise",*/
                "/es/platform/infrastructure/security",
              ],
            },
            {
              title: "Plataforma",
              collapsable: true,
              children: [
                ["/es/platform/core/", "Introducción"],
                "/es/platform/core/the-modyo-interface",
                "/es/platform/core/key-concepts",
                "/es/platform/core/integration",
                "/es/platform/core/roles",
                "/es/platform/core/security",
                "/es/platform/core/api",
              ],
            },
            {
              title: "Content",
              collapsable: true,
              children: [
                ["/es/platform/content/", "Introducción"],
                "/es/platform/content/spaces",
                "/es/platform/content/types",
                "/es/platform/content/entries",
                "/es/platform/content/asset-manager",
                "/es/platform/content/public-api-reference",
              ],
            },
            {
              title: "Channels",
              collapsable: true,
              children: [
                ["/es/platform/channels/", "Introducción"],
                "/es/platform/channels/sites",
                "/es/platform/channels/pages",
                "/es/platform/channels/navigation",
                "/es/platform/channels/widgets",
                "/es/platform/channels/templates",
                "/es/platform/channels/liquid-markup",
              ],
            },
            {
              title: "Customers",
              collapsable: true,
              children: [
                ["/es/platform/customers/", "Introducción"],
                "/es/platform/customers/users",
                "/es/platform/customers/targets",
                "/es/platform/customers/forms",
                "/es/platform/customers/messaging",
              ],
            },
            {
              title: "Insights",
              collapsable: true,
              children: [
                ["/es/platform/insights/", "Introducción"],
                "/es/platform/insights/digital-factory",
                ["/es/platform/insights/data-studio", "Data Studio"],
              ],
            },
          ],
          "/es/widgets/": [
            {
              title: "Catálogo",
              collapsable: false,
              children: [
                ["/es/widgets/", "Introducción"],
                "/es/widgets/guides/look-and-feel",
                "/es/widgets/guides/i18n",
                "/es/widgets/guides/share-state",
                "/es/widgets/guides/liquid-variables",
                "/es/widgets/guides/ci-cd",
                "/es/widgets/guides/repository-pattern"
              ],
            },
            {
              title: "Personas",
              collapsable: true,
              children: [
                "/es/widgets/retail/summary",
                "/es/widgets/retail/accounts",
                "/es/widgets/retail/credit-cards",
                "/es/widgets/retail/credit-card-payment",
                "/es/widgets/retail/loans",
                "/es/widgets/retail/consumer-loan",
                "/es/widgets/retail/mortgage-loans",
                "/es/widgets/retail/cash-advance",
                "/es/widgets/retail/transfer",
                "/es/widgets/retail/transfers",
              ],
            },
            {
              title: "Inversiones",
              collapsable: true,
              children: [
                "/es/widgets/investments/accounts",
                "/es/widgets/investments/general-summary",
                "/es/widgets/investments/detailed-summary",
                "/es/widgets/investments/investments-transfers",
                "/es/widgets/investments/investments-transfer",
                "/es/widgets/investments/deposits",
                "/es/widgets/investments/documents",
                "/es/widgets/investments/mutual-funds",
                "/es/widgets/investments/stocks",
              ],
            },
            {
              title: "Seguros Intermediarios",
              collapsable: true,
              children: [
                "/es/widgets/insurance-brokers/dashboard",
                "/es/widgets/insurance-brokers/quote",
                "/es/widgets/insurance-brokers/detailed-view",
                "/es/widgets/insurance-brokers/issue-policy",
              ],
            },
            {
              title: "Seguros Personas",
              collapsable: true,
              children: [
                "/es/widgets/insurance-retail/summary",
                "/es/widgets/insurance-retail/quote",
                "/es/widgets/insurance-retail/detailed-view",
              ],
            },
            /* {
              title: "Guías",
              collapsable: true,
              children: [
                "/es/widgets/guides/look-and-feel",
                "/es/widgets/guides/i18n",
                "/es/widgets/guides/share-state",
                "/es/widgets/guides/liquid-variables"
              ]
            }, */
            /*{
              title: "Onboarding",
              collapsable: true,
              children: ["/widgets/onboarding/"]
            }*/
          ],
          "/es/brand/": [
            {
              title: "Guía de Marca",
              collapsable: true,
              children: [
                ["/es/brand/", "Introducción"],
                "/es/brand/logo",
                "/es/brand/colors",
                "/es/brand/icons",
                "/es/brand/typography",
              ],
            },
            {
              title: "Ilustraciones",
              collapsable: true,
              children: [
                ["/es/brand/illustrations/", "Introducción"],
                "/es/brand/illustrations/structure",
                "/es/brand/illustrations/applications",
              ],
            },
            /*{
              title: "Documentos",
              collapsable: true,
              children: [
                ["/brand/documents/", "Introducción"],
              ],
            },*/
          ],
        },
      },

    },
  },
};
