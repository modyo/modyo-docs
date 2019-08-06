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
      sidebarDepth: 0,
      activeHeaderLinks: true,
      locales: {
          "/": {
              // text for the language dropdown
              selectText: "Lenguaje",
              // label for this locale in the language dropdown
              label: "Español",
              // text for the edit-on-github link
              nav: [
                  { text: "Guías", link: "/guides/" }
              ],
              sidebar: [
                "/guides/",
                {
                  title: "Introducción",
                  collapsable: true,
                  children:[
                    "/guides/key-concepts",
                    "/guides/the-modyo-interface",
                    "/guides/navigating-through-modyo"
                  ]
                },
                {
                  title: "Contenido",
                  collapsable: true,
                  children:[
                    ["/guides/content/","Introducción"],
                    "/guides/content/spaces",
                    "/guides/content/entries",
                    "/guides/content/types",
                    "/guides/content/asset-manager",
                    "/guides/content/public-api-reference",
                    ]
                },
                {
                  title: "Channels",
                  collapsable: true,
                  children:[
                    ["/guides/channels/","Introducción"]
                  ] 
                },
                {
                  title: "Custommerce",
                  collapsable: true,
                  children: [
                    ["/guides/customers/","Introducción"],
                    "/guides/customers/users",
                    "/guides/customers/targets",
                    "/guides/customers/forms",
                    "/guides/customers/messaging",
                    
                  ]
                },
                {
                  title: "Commerce",
                  collapsable: true,
                  children: [
                    ["/guides/commerce/","Introducción"],
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
                },
                
                {
                  title: "Temas avanzados",
                  collapsable: true,
                  children:[
                    "/guides/advance-topics/",
                    "/guides/advance-topics/locks",
                    "/guides/advance-topics/versioning",
                    "/guides/advance-topics/team-review",
                  ]
                }
                
                
              ]
          },
          "/en/": {
              // text for the language dropdown
              selectText: "Languages",
              // label for this locale in the language dropdown
              label: "English",
              // text for the edit-on-github link
              nav: [
                  { text: "Guides", link: "/en/guides/" }
              ],
              sidebar: [
                "/en/guides/",
                {
                  title: "Introduction",
                  collapsable: true,
                  children:[
                    "/en/guides/key-concepts",
                    "/en/guides/the-modyo-interface",
                    "/en/guides/navigating-through-modyo"
                  ]
                },
                {
                  title: "Content",
                  collapsable: true,
                  children:[
                    ["/en/guides/content/","Introduction"],
                    "/en/guides/content/spaces",
                    "/en/guides/content/entries",
                    "/en/guides/content/types",
                    "/en/guides/content/asset-manager",
                    "/en/guides/content/public-api-reference",
                    ]
                },
                {
                  title: "Channels",
                  collapsable: true,
                  children:[
                    ["/en/guides/channels/","Introduction"]
                  ] 
                },
                {
                  title: "Custommerce",
                  collapsable: true,
                  children: [
                    ["/en/guides/customers/","Introduction"],
                    "/en/guides/customers/users",
                    "/en/guides/customers/targets",
                    "/en/guides/customers/forms",
                    "/en/guides/customers/messaging",
                  ]
                },
                {
                  title: "Commerce",
                  collapsable: true,
                  children: [
                    ["/en/guides/commerce/","Introduction"],
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
                },
                
                {
                  title: "Advanced topics",
                  collapsable: true,
                  children:[
                    "/en/guides/advance-topics/",
                    "/en/guides/advance-topics/locks",
                    "/en/guides/advance-topics/versioning",
                    "/en/guides/advance-topics/team-review",
                  ]
                }
                
                
              ]
          }
      }
  }
};