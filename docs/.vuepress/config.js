module.exports = {
  title: "Modyo Docs",
  description: "Welcome to the Modyo Support Center",
  locales: {
      // The key is the path for the locale to be nested under.
      // As a special case, the default locale can use '/' as its path.
      "/": {
          lang: "es", // this will be set as the lang attribute on <html>
          title: "Documentación de Modyo",
          description: "Bienvenido al centro de referencia de Modyo"
      },
      "/en/": {
          lang: "en",
          title: "Modyo Docs",
          description: "Welcome to the Modyo reference center"
      }
  },
  head: [
    ['script', {}, `
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-MW9VKMC');
    `],
  ],
  themeConfig: {
      logo: "/assets/img/modyo.png",
      docsDir: "docs",
      sidebarDepth: 1,
      activeHeaderLinks: true,
      algolia: {
        apiKey: 'd6d3315d4f9b9a8a5f7870a8bd10d187',
        indexName: 'modyo'
      },
      locales: {
          "/": {
              selectText: "Lenguaje",
              label: "Español",
              nav: [
                { text: "Guías", link: "/guides/" },
                { text: "Modyo", link: "https://es.modyo.com" },
                { text: "Soporte", link: "https://support.modyo.com/hc/es" }                               
              ],
              sidebar: {     
                "/guides/": [                
                  {
                    title: "Primeros Pasos",
                    collapsable: true,
                    children:[
                      "/guides/",
                      "/guides/whats-new",                    
                      "/guides/key-concepts",                    
                      "/guides/versions",
                      "/guides/release-notes"
                    ]
                  },
                  {
                    title: "Plataforma",
                    collapsable: true,
                    children:[
                      ["/guides/platform/","Introducción"],
                      "/guides/platform/the-modyo-interface",
                      "/guides/platform/team-review",
                      "/guides/platform/integration",
                      "/guides/platform/roles",
                      "/guides/platform/security",
                      "/guides/platform/api"                                       
                      ]
                  },
                  {
                    title: "Content",
                    collapsable: true,
                    children:[
                      ["/guides/content/","Introducción"],
                      "/guides/content/spaces",
                      "/guides/content/types",
                      "/guides/content/entries",
                      "/guides/content/asset-manager",
                      "/guides/content/public-api-reference"
                      ]
                  },
                  {
                    title: "Channels",
                    collapsable: true,
                    children:[
                      ["/guides/channels/","Introducción"],
                      "/guides/channels/sites",
                      "/guides/channels/pages",
                      "/guides/channels/navigation",
                      "/guides/channels/widgets",
                      "/guides/channels/templates",
                      "/guides/channels/liquid-markup"
                    ] 
                  },
                  {
                    title: "Customers",
                    collapsable: true,
                    children: [
                      ["/guides/customers/","Introducción"],
                      "/guides/customers/users",
                      "/guides/customers/targets",
                      "/guides/customers/forms",
                      "/guides/customers/messaging"
                    ]
                  },
                  {
                    title: "Insights",
                    collapsable: true,
                    children: [
                      ["/guides/insights/","Introducción"],
                      "/guides/insights/digital-factory",
                      "/guides/insights/data-studio"
                    ]
                  }
                ],
                "/widgets/": [
                      {
                        title: "Catálogo",
                        collapsable: false,
                        children:[
                          ["/widgets/","Acerca de los widgets"],
                        ]
                      },
                      /*{
                        title: "Seguros",
                        collapsable: true,
                        children:[
                          "/widgets/insurance/",
                        ]
                      },
                      {
                        title: "Inversiones",
                        collapsable: true,
                        children:[
                          "/widgets/investments/",
                          "/widgets/investments/accounts",
                          "/widgets/investments/deposits",
                          "/widgets/investments/detailed-summary",
                          "/widgets/investments/documents",
                          "/widgets/investments/general-summary",
                          "/widgets/investments/investments-transfer",
                          "/widgets/investments/investments-transfers",
                          "/widgets/investments/mutual-funds",
                          "/widgets/investments/stocks",
                        ]
                      },
                      {
                        title: "Onboarding",
                        collapsable: true,
                        children:[
                          "/widgets/onboarding/",
                        ]
                      },*/
                      {
                        title: "Personas",
                        collapsable: true,
                        children:[
                          "/widgets/retail/",
                          "/widgets/retail/accounts",
                          //"/widgets/retail/cash-advance",
                          //"/widgets/retail/consumer-loan",
                          "/widgets/retail/credit-cards",
                          "/widgets/retail/credit-card-payment",
                          //"/widgets/retail/loans",
                          //"/widgets/retail/mortgage-loans",
                          "/widgets/retail/summary",
                          //"/widgets/retail/transfer",
                          //"/widgets/retail/transfers",
                        ]
                      },
                ]
              }
          },
          "/en/": {
              selectText: "Languages",
              label: "English",
              nav: [
                { text: "Guides", link: "/en/guides/" },
                { text: "Modyo", link: "https://www.modyo.com" },
                { text: "Support", link: "https://support.modyo.com/hc/en-us" }                
              ],
              sidebar: {
                "/en/guides/": [                
                  {
                    title: "First Steps",
                    collapsable: true,
                    children:[
                      "/en/guides/",
                      "/en/guides/whats-new",                    
                      "/en/guides/key-concepts",                    
                      "/en/guides/versions",
                      "/en/guides/release-notes"
                    ]
                  },
                  {
                    title: "Platform",
                    collapsable: true,
                    children:[
                      ["/en/guides/platform/","Introduction"],
                      "/en/guides/platform/the-modyo-interface",
                      "/en/guides/platform/team-review",
                      "/en/guides/platform/integration",
                      "/en/guides/platform/roles",
                      "/en/guides/platform/security",
                      "/en/guides/platform/api"                                   
                      ]
                  },
                  {
                    title: "Content",
                    collapsable: true,
                    children:[
                      ["/en/guides/content/","Introduction"],
                      "/en/guides/content/spaces",
                      "/en/guides/content/types",
                      "/en/guides/content/entries",
                      "/en/guides/content/asset-manager",
                      "/en/guides/content/public-api-reference"
                      ]
                  },
                  {
                    title: "Channels",
                    collapsable: true,
                    children:[
                      ["/en/guides/channels/","Introduction"],
                      "/en/guides/channels/sites",
                      "/en/guides/channels/pages",
                      "/en/guides/channels/navigation",
                      "/en/guides/channels/widgets",
                      "/en/guides/channels/templates",
                      "/en/guides/channels/liquid-markup"
                    ] 
                  },
                  {
                    title: "Customers",
                    collapsable: true,
                    children: [
                      ["/en/guides/customers/","Introduction"],
                      "/en/guides/customers/users",
                      "/en/guides/customers/targets",
                      "/en/guides/customers/forms",
                      "/en/guides/customers/messaging"
                    ]
                  },
                  {
                    title: "Insights",
                    collapsable: true,
                    children: [
                      ["/en/guides/insights/","Introduction"],
                      "/en/guides/insights/digital-factory",
                      "/en/guides/insights/data-studio"
                    ]
                  }
                ],
                "/en/widgets/": [
                  {
                    title: "Catálogo",
                    collapsable: false,
                    children:[
                      ["/en/widgets/","About widgets"],
                    ]
                  },
                  {
                    title: "Insurance",
                    collapsable: true,
                    children:[
                      "/en/widgets/insurance/",
                    ]
                  },
                  {
                    title: "Investments",
                    collapsable: true,
                    children:[
                      "/en/widgets/investments/",
                      "/en/widgets/investments/accounts",
                      "/en/widgets/investments/deposits",
                      "/en/widgets/investments/detailed-summary",
                      "/en/widgets/investments/documents",
                      "/en/widgets/investments/general-summary",
                      "/en/widgets/investments/investments-transfer",
                      "/en/widgets/investments/investments-transfers",
                      "/en/widgets/investments/mutual-funds",
                      "/en/widgets/investments/stocks",
                    ]
                  },
                  {
                    title: "Onboarding",
                    collapsable: true,
                    children:[
                      "/en/widgets/onboarding/",
                    ]
                  },
                  {
                    title: "Retail",
                    collapsable: true,
                    children:[
                      "/en/widgets/retail/",
                      "/en/widgets/retail/accounts",
                      "/en/widgets/retail/cash-advance",
                      "/en/widgets/retail/consumer-loan",
                      "/en/widgets/retail/credit-cards",
                      "/en/widgets/retail/loans",
                      "/en/widgets/retail/mortgage-loans",
                      "/en/widgets/retail/summary",
                      "/en/widgets/retail/transfer",
                      "/en/widgets/retail/transfers",
                    ]
                  },
          ]
              }
          }
      }
  }
};