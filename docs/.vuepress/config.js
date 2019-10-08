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
  themeConfig: {
      logo: "/assets/img/modyo.png",
      docsDir: "docs",
      sidebarDepth: 1,
      activeHeaderLinks: true,
      locales: {
          "/": {
              selectText: "Lenguaje",
              label: "Español",
              nav: [
                { text: "Guías", link: "/guides/" },
                { text: "Modyo", link: "https://es.modyo.com" },
                { text: "Soporte", link: "https://support.modyo.com/hc/es" }                               
              ],
              sidebar: [                
                {
                  title: "Primeros Pasos",
                  collapsable: true,
                  children:[
                    "/guides/",
                    "/guides/whats-new",                    
                    "/guides/key-concepts",                    
                    "/guides/versions"
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
                  title: "Commerce",
                  collapsable: true,
                  children: [
                    ["/guides/commerce/","Introducción"],
                    "/guides/commerce/orders"
                  ]
                },
                {
                  title: "Insights",
                  collapsable: true,
                  children: [
                    ["/guides/insights/","Introducción"],
                    "/guides/insights/digital-factory",
                    "/guides/insights/customers",
                    "/guides/insights/payments"
                  ]
                }
              ]
          },
          "/en/": {
              selectText: "Languages",
              label: "English",
              nav: [
                { text: "Guides", link: "/en/guides/" },
                { text: "Modyo", link: "https://www.modyo.com" },
                { text: "Support", link: "https://support.modyo.com/hc/en-us" }                
              ],
              sidebar: [                
                {
                  title: "First Steps",
                  collapsable: true,
                  children:[
                    "/en/guides/",
                    "/en/guides/whats-new",                    
                    "/en/guides/key-concepts",                    
                    "/en/guides/versions"
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
                  title: "Commerce",
                  collapsable: true,
                  children: [
                    ["/en/guides/commerce/","Introduction"],
                    "/en/guides/commerce/orders"
                  ]
                },
                {
                  title: "Insights",
                  collapsable: true,
                  children: [
                    ["/en/guides/insights/","Introduction"],
                    "/en/guides/insights/digital-factory",
                    "/en/guides/insights/customers",
                    "/en/guides/insights/payments"
                  ]
                }
              ]
          }
      }
  }
};