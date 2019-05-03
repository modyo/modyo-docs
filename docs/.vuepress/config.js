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
    editLinks: true,
    locales: {
      "/": {
        // text for the language dropdown
        selectText: "Lenguaje",
        // label for this locale in the language dropdown
        label: "Español",
        // text for the edit-on-github link
        editLinkText: "Edita esta página en GitHub",
        nav: [
          { text: "Guías", link: "/guides/" },
          { text: "Ayuda", link: "https://www.modyo.com" }
        ],
        sidebarDepth: 2,
        sidebar: [
          {
            title: "Introducción",
            collapsable: false,
            children: [
              "/guides/",
              ["/guides/key-concepts", "Conceptos claves"],
              ["/guides/the-modyo-interface", "La interfaz Modyo"],
              ["/guides/navigating-through-modyo", "Navegando por Modyo"]
            ]
          },
          {
            title: "Channels",
            children: [
              /* ... */
            ]
          },
          {
            title: "Customers",
            children: [
              /* ... */
            ]
          },
          {
            title: "Commerce",
            children: [
              /* ... */
            ]
          },
          {
            title: "Insights",
            children: [
              /* ... */
            ]
          },
          {
            title: "Temas Avanzados",
            children: [
              /* ... */
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
          { text: "Guides", link: "/en/guides/" },
          { text: "Help", link: "https://www.modyo.com" }
        ],
        sidebarDepth: 2,
        sidebar: [
          {
            title: "Introduction",
            collapsable: false,
            children: [
              "/en/guides/",
              ["/en/guides/key-concepts", "Key Concepts"],
              ["/en/guides/the-modyo-interface", "The modyo interface"],
              ["/en/guides/navigating-through-modyo", "Navigating Through Modyo"]

            ]
          },
          {
            title: "Channels",
            children: [
              /* ... */
            ]
          },
          {
            title: "Customers",
            children: [
              /* ... */
            ]
          },
          {
            title: "Commerce",
            children: [
              /* ... */
            ]
          },
          {
            title: "Insights",
            children: [
              /* ... */
            ]
          },
          {
            title: "Advanced Topics",
            children: [
              /* ... */
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
