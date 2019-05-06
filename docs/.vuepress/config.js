module.exports = {
  title: "Modyo Docs",
  description: "Welcome to the Modyo Support Center",
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    "/": {
      lang: "es", // this will be set as the lang attribute on <html>
      title: "Modyo Docs",
      description: "Bienvenido al centro de soporte Modyo"
    },
    "/en/": {
      lang: "en",
      title: "Modyo Docs",
      description: "Welcome to the Modyo Support Center"
    } 
  },
  themeConfig: {
    logo: "/assets/img/modyo.png",
    repo: "modyo/modyo-docs",
    docsDir: "docs",
    locales: {
      "/": {
        // text for the language dropdown
        selectText: "Lenguaje",
        // label for this locale in the language dropdown
        label: "Español",
        // text for the edit-on-github link
        editLinkText: "Edita esta página en GitHub",
        nav: [
          { text: "Guías", link: "/guides/" }
        ],
        sidebarDepth: 1,
        sidebar: [
          {
            title: "Introducción",
            collapsable: true,
            children: [
              "/guides/",
              ["/guides/key-concepts", "Conceptos claves"],
              ["/guides/the-modyo-interface", "La interfaz Modyo"],
              ["/guides/navigating-through-modyo", "Navegando por Modyo"]
            ]
          },
          {
            title: "Channels",
            collapsable: true,
            children: [
              "/guides/channels/"
            ]
          },
          {
            title: "Customers",
            collapsable: true,
            children: [
              "/guides/customers/"
            ]
          },
          {
            title: "Commerce",
            collapsable: true,
            children: [
              "/guides/commerce/"
            ]
          },
          {
            title: "Insights",
            collapsable: true,
            children: [
              "/guides/insights/"
            ]
          },
          {
            title: "Advance Topics",
            collapsable: faltruese,
            children: [
              "/guides/advance-topics/"
            ]
          },
          {
            title: "Referencias a la API",
            children: [
              /* ... */
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
        editLinkText: "Edit this page on GitHub",
        nav: [
          { text: "Guides", link: "/en/guides/" }
        ],
        sidebarDepth: 1,
        sidebar: [
          {
            title: "Introduction",
            collapsable: true,
            children: [
              "/guides/",
              ["/en/guides/key-concepts", "Key Concepts"],
              ["/en/guides/the-modyo-interface", "The modyo interface"],
              ["/en/guides/navigating-through-modyo", "Navigating Through Modyo"]

            ]
          },
          {
            title: "Channels",
            collapsable: true,
            children: [
              "/guides/channels/"
            ]
          },
          {
            title: "Customers",
            collapsable: true,
            children: [
              "/guides/customers/"
            ]
          },
          {
            title: "Commerce",
            collapsable: true,
            children: [
              "/guides/commerce/"
            ]
          },
          {
            title: "Insights",
            collapsable: true,
            children: [
              "/guides/insights/"
            ]
          },
          {
            title: "Advance Topics",
            collapsable: true,
            children: [
              "/guides/advance-topics/"
            ]
          },
          {
            title: "API Reference",
            children: [
              /* ... */
            ]
          }
        ]
      }
    }
  }
};
