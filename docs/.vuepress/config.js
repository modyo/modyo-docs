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
    plugins: [
        [
            'code-switcher',
            {
                groups: {
                    default: { lq: 'Liquid', js: 'JavaScript', curl: 'cURL' },
                },
            },
        ],
    ],
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
        activeHeaderLinks: false,
        algolia: {
            apiKey: "d6d3315d4f9b9a8a5f7870a8bd10d187",
            indexName: "modyo",
        },
        locales: {
            "/en/": {
                selectText: "Languages",
                label: "English",
                nav: [
                    { text: "Platform", link: "/en/platform/" },
                    { text: "Widgets", link: "/en/widgets/" },
                    /*{ text: "Cloud", link: "/en/services/" },*/
                    { text: "Modyo", link: "https://www.modyo.com" },
                    { text: "Support", link: "https://support.modyo.com/hc/en-us" },
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
                            title: "Tutorials",
                            path: "/en/platform/tutorials/",
                            collapsable: true,
                            children: [
                                "/en/platform/tutorials/how-to-create-content",
                                "/en/platform/tutorials/how-to-create-home",
                                "/en/platform/tutorials/how-to-create-a-custom-view",
                                "/en/platform/tutorials/how-to-create-private-site",
                                "/en/platform/tutorials/how-to-create-a-menu",
                                "/en/platform/tutorials/how-to-create-a-pwa",
                            ],
                        },
                        {
                            title: "Platform",
                            path: "/en/platform/core/",
                            collapsable: true,
                            children: [
                                "/en/platform/core/the-modyo-interface",
                                "/en/platform/core/key-concepts",
                                "/en/platform/core/roles",
                                "/en/platform/core/security",
                                "/en/platform/core/api",
                                "/en/platform/core/webhooks",
                                {
                                    title: "Integrations",
                                    path: "/en/platform/core/integrations/",
                                    collapsable: true,
                                    children: [
                                        ["/en/platform/core/integrations/identity-providers", "Identity Providers"],
                                        ["/en/platform/core/integrations/scim", "SCIM Integration with Azure AD"],
                                    ],
                                },
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
                                "/en/platform/channels/templates",
                                "/en/platform/channels/liquid-markup",
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
                    "/en/widgets/": [{
                            title: "Catalog",
                            collapsable: true,
                            children: [
                                "/en/widgets/guides/first-steps",
                                "/en/widgets/guides/look-and-feel",
                                ["/en/widgets/guides/i18n", "Internationalization"],
                                ["/en/widgets/guides/share-state", "Shared state"],
                                "/en/widgets/guides/liquid-variables",
                                "/en/widgets/guides/ci-cd",
                                "/en/widgets/guides/repository-pattern"
                            ],
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
                                "/en/widgets/retail/bill-payment",
                                "/en/widgets/retail/payment-summary",
                            ],
                        },
                        {
                            title: "Investments",
                            collapsable: true,
                            children: [
                                "/en/widgets/investments/accounts",
                                "/en/widgets/investments/accounts-react",
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
                                "/en/widgets/insurance-retail/detailed-view"
                            ],
                        },
                    ],
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
                    }, ],
                    "/en/legal/": [{
                        title: "Legal",
                        collapsable: true,
                        children: [
                            ["/en/legal/", "License Agreement"],
                        ],
                    }, ],
                },
            },
            "/es/": {
                selectText: "Lenguaje",
                label: "Español",
                nav: [
                    { text: "Plataforma", link: "/es/platform/" },
                    { text: "Widgets", link: "/es/widgets/" },
                    /*{ text: "Cloud", link: "/es/services/" },*/
                    { text: "Modyo", link: "https://es.modyo.com" },
                    { text: "Soporte", link: "https://support.modyo.com/hc/es" },
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
                            title: "Tutoriales",
                            path: "/es/platform/tutorials/",
                            collapsable: true,
                            children: [
                                "/es/platform/tutorials/how-to-create-content",
                                "/es/platform/tutorials/how-to-create-home",
                                "/es/platform/tutorials/how-to-create-a-custom-view",
                                "/es/platform/tutorials/how-to-create-private-site",
                                "/es/platform/tutorials/how-to-create-a-menu",
                                //"/es/platform/tutorials/conect-modyo-saleforce",
                                "/es/platform/tutorials/how-to-create-a-pwa",
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
                                "/es/platform/core/roles",
                                "/es/platform/core/security",
                                "/es/platform/core/api",
                                "/es/platform/core/identity-providers",
                                "/es/platform/core/webhooks",
                                {
                                    title: "Integraciones",
                                    path: "/es/platform/core/integrations/",
                                    collapsable: true,
                                    children: [
                                        ["/es/platform/core/integrations/identity-providers", "Proveedores de Identidad"],
                                        ["/es/platform/core/integrations/scim", "Integración SCIM con Azure AD"],
                                    ],
                                },
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
                                "/es/platform/channels/templates",
                                "/es/platform/channels/liquid-markup",
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
                    "/es/widgets/": [{
                            title: "Catálogo",
                            collapsable: true,
                            path: "/es/widgets/",
                            children: [
                                "/es/widgets/guides/first-steps",
                                "/es/widgets/guides/look-and-feel",
                                ["/es/widgets/guides/i18n", "Internacionalización"],
                                ["/es/widgets/guides/share-state", "Compartir estado"],
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
                                "/es/widgets/retail/bill-payment",
                                "/es/widgets/retail/payment-summary",
                            ],
                        },
                        {
                            title: "Inversiones",
                            collapsable: true,
                            children: [
                                "/es/widgets/investments/accounts",
                                "/es/widgets/investments/accounts-react",
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
                                "/es/widgets/insurance-retail/detailed-view"
                            ],
                        },
                    ],
                    "/es/services/": [{
                        title: "Servicios de Cloud",
                        collapsable: false,
                        children: [
                            ["/es/services/", "Introducción"],
                            "/es/services/cloud",
                            "/es/services/connect",
                            "/es/services/faq",
                        ],
                    }, ],
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
                    }, ],
                    "/es/legal/": [{
                        title: "Legal",
                        collapsable: true,
                        children: [
                            ["/es/legal/", "Acuerdo de Licencia"],
                        ],
                    }, ],
                },
            },

        },
    },
};