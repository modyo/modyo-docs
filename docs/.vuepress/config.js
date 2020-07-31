module.exports = {
  title: "Modyo Docs",
  description: "Welcome to the Modyo Support Center",
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    "/": {
      lang: "es", // this will be set as the lang attribute on <html>
      title: "Documentación de Modyo",
      description: "Bienvenido a la documentación oficial de Modyo",
    },
    "/en/": {
      lang: "en",
      title: "Modyo Docs",
      description: "Welcome to the official Modyo documentation",
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
        selectText: "Lenguaje",
        label: "Español",
        nav: [
          { text: "Plataforma", link: "/platform/" },
          { text: "Widgets", link: "/widgets/" },
          { text: "Modyo", link: "https://es.modyo.com" },
          { text: "Soporte", link: "https://support.modyo.com/hc/es" },
        ],
        sidebar: {
          "/platform/": [
            {
              title: "Primeros Pasos",
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
              title: "Infraestructura",
              collapsable: true,
              children: [
                "/platform/infrastructure/cloud",
                /*"/platform/infrastructure/onpremise",*/
                "/platform/infrastructure/security",
              ],
            },
            {
              title: "Plataforma",
              collapsable: true,
              children: [
                ["/platform/core/", "Introducción"],
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
                ["/platform/content/", "Introducción"],
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
                ["/platform/channels/", "Introducción"],
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
                ["/platform/customers/", "Introducción"],
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
                ["/platform/insights/", "Introducción"],
                "/platform/insights/digital-factory",
                ["/platform/insights/data-studio", "Data Studio"],
              ],
            },
          ],
          "/widgets/": [
            {
              title: "Catálogo",
              collapsable: false,
              children: [["/widgets/", "Introducción"]],
            },
            {
              title: "Personas",
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
              title: "Inversiones",
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
              title: "Seguros Intermediarios",
              collapsable: true,
              children: [
                "/widgets/insurance-brokers/dashboard",
                "/widgets/insurance-brokers/quote",
                "/widgets/insurance-brokers/detailed-view",
                "/widgets/insurance-brokers/issue-policy",
              ],
            },
            {
              title: "Seguros Personas",
              collapsable: true,
              children: [
                "/widgets/insurance-retail/summary",
                "/widgets/insurance-retail/quote",
                "/widgets/insurance-retail/detailed-view",
              ],
            },
            /*{
              title: "Onboarding",
              collapsable: true,
              children: ["/widgets/onboarding/"]
            }*/
          ],
          "/brand/": [
            {
              title: "Guía de Marca",
              collapsable: true,
              children: [
                ["/brand/", "Introducción"],
                "/brand/logo",
                "/brand/colors",
                "/brand/icons",
                "/brand/typography",
              ],
            },
            {
              title: "Ilustraciones",
              collapsable: true,
              children: [
                ["/brand/illustrations/", "Introducción"],
                "/brand/illustrations/structure",
                "/brand/illustrations/applications",
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
      "/en/": {
        selectText: "Languages",
        label: "English",
        nav: [
          { text: "Platform", link: "/en/platform/" },
          { text: "Widgets", link: "/en/widgets/" },
          { text: "Modyo", link: "https://www.modyo.com" },
          { text: "Support", link: "https://support.modyo.com/hc/en-us" },
        ],
        sidebar: {
          "/en/platform/": [
            {
              title: "First Steps",
              collapsable: true,
              children: [
                "/en/platform/",
                "/en/platform/whats-new",
                "/en/platform/key-concepts",
                "/en/platform/versions",
                "/en/platform/release-notes",
              ],
            },
            {
              title: "Platform",
              collapsable: true,
              children: [
                ["/en/platform/core/", "Introduction"],
                "/en/platform/core/the-modyo-interface",
                "/en/platform/core/key-concepts",
                "/en/platform/core/integration",
                "/en/platform/core/roles",
                "/en/platform/core/security",
                "/en/platform/core/api",
              ],
            },
            {
              title: "Content",
              collapsable: true,
              children: [
                ["/en/platform/content/", "Introduction"],
                "/en/platform/content/spaces",
                "/en/platform/content/types",
                "/en/platform/content/entries",
                "/en/platform/content/asset-manager",
                "/en/platform/content/public-api-reference",
              ],
            },
            {
              title: "Channels",
              collapsable: true,
              children: [
                ["/en/platform/channels/", "Introduction"],
                "/en/platform/channels/sites",
                "/en/platform/channels/pages",
                "/en/platform/channels/navigation",
                "/en/platform/channels/widgets",
                "/en/platform/channels/templates",
                "/en/platform/channels/liquid-markup",
              ],
            },
            {
              title: "Customers",
              collapsable: true,
              children: [
                ["/en/platform/customers/", "Introduction"],
                "/en/platform/customers/users",
                "/en/platform/customers/targets",
                "/en/platform/customers/forms",
                "/en/platform/customers/messaging",
              ],
            },
            {
              title: "Insights",
              collapsable: true,
              children: [
                ["/en/platform/insights/", "Introduction"],
                "/en/platform/insights/digital-factory",
                ["/en/platform/insights/data-studio", "Data Studio"],
              ],
            },
          ],
          "/en/widgets/": [
            {
              title: "Catalog",
              collapsable: false,
              children: [["/en/widgets/", "About widgets"]],
            },
            {
              title: "Retail",
              collapsable: true,
              children: [
                "/en/widgets/retail/summary",
                "/en/widgets/retail/accounts",
                "/en/widgets/retail/credit-cards",
                "/en/widgets/retail/credit-card-payment",
                "/en/widgets/retail/loans",
                "/en/widgets/retail/consumer-loan",
                "/en/widgets/retail/mortgage-loans",
                "/en/widgets/retail/cash-advance",
                "/en/widgets/retail/transfer",
                "/en/widgets/retail/transfers",
              ],
            },
            {
              title: "Investments",
              collapsable: true,
              children: [
                "/en/widgets/investments/accounts",
                "/en/widgets/investments/general-summary",
                "/en/widgets/investments/detailed-summary",
                "/en/widgets/investments/investments-transfers",
                "/en/widgets/investments/investments-transfer",
                "/en/widgets/investments/deposits",
                "/en/widgets/investments/documents",
                "/en/widgets/investments/mutual-funds",
                "/en/widgets/investments/stocks",
              ],
            },
            {
              title: "Insurance Brokers",
              collapsable: true,
              children: [
                "/en/widgets/insurance-brokers/dashboard",
                "/en/widgets/insurance-brokers/quote",
                "/en/widgets/insurance-brokers/detailed-view",
                "/en/widgets/insurance-brokers/issue-policy",
              ],
            },
            {
              title: "Insurance Retail",
              collapsable: true,
              children: [
                "/en/widgets/insurance-retail/summary",
                "/en/widgets/insurance-retail/quote",
                "/en/widgets/insurance-retail/detailed-view",
              ],
            },
            /*  {
              title: "Onboarding",
              collapsable: true,
              children: ["/en/widgets/onboarding/"]
            }, */
          ],
          "/en/brand/": [
            {
              title: "Brand Guidelines",
              collapsable: true,
              children: [
                ["/en/brand/", "Introduction"],
                "/en/brand/logo",
                "/en/brand/colors",
                "/en/brand/icons",
                "/en/brand/typography",
              ],
            },
            {
              title: "Illustrations",
              collapsable: true,
              children: [
                ["/en/brand/illustrations/", "Introduction"],
                "/en/brand/illustrations/structure",
                "/en/brand/illustrations/applications",
              ],
            },
            /*{
              title: "Documents",
              collapsable: true,
              children: [
                ["/en/brand/documents/", "Introduction"],
              ],
            },*/
          ],
        },
      },
    },
  },
};
