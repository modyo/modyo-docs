import { fileURLToPath } from 'node:url'
import { defineConfig, type DefaultTheme } from 'vitepress'
import navigation from './navigation.cjs'
import { convertLocale, type LegacyNavigation } from './lib/legacy-navigation'
import { localizeContainerTitle } from './lib/containers'
import { applyLegacyFrontmatter } from './lib/page-data'
import { withAlternateLanguages } from './lib/sitemap'

const srcDir = fileURLToPath(new URL('..', import.meta.url))
const legacyNavigation = navigation as LegacyNavigation
const en = convertLocale(legacyNavigation, '/en/', srcDir)
const es = convertLocale(legacyNavigation, '/es/', srcDir)

const esSearchTranslations: DefaultTheme.AlgoliaSearchOptions['translations'] = {
  button: { buttonText: 'Buscar', buttonAriaLabel: 'Buscar' },
  modal: {
    searchBox: {
      resetButtonTitle: 'Limpiar búsqueda',
      resetButtonAriaLabel: 'Limpiar búsqueda',
      cancelButtonText: 'Cancelar',
      cancelButtonAriaLabel: 'Cancelar',
    },
    startScreen: {
      recentSearchesTitle: 'Recientes',
      noRecentSearchesText: 'No hay búsquedas recientes',
      saveRecentSearchButtonTitle: 'Guardar esta búsqueda',
      removeRecentSearchButtonTitle: 'Eliminar esta búsqueda del historial',
      favoriteSearchesTitle: 'Favoritas',
      removeFavoriteSearchButtonTitle: 'Eliminar esta búsqueda de favoritas',
    },
    errorScreen: {
      titleText: 'No se pudieron obtener resultados',
      helpText: 'Revisa tu conexión a internet.',
    },
    footer: {
      selectText: 'para seleccionar',
      selectKeyAriaLabel: 'Tecla Enter',
      navigateText: 'para navegar',
      navigateUpKeyAriaLabel: 'Flecha arriba',
      navigateDownKeyAriaLabel: 'Flecha abajo',
      closeText: 'para cerrar',
      closeKeyAriaLabel: 'Tecla Escape',
      searchByText: 'Búsqueda por',
    },
    noResultsScreen: {
      noResultsText: 'No hay resultados para',
      suggestedQueryText: 'Intenta buscar',
      reportMissingResultsText: '¿Crees que esta búsqueda debería tener resultados?',
      reportMissingResultsLinkText: 'Avísanos.',
    },
  },
}

export default defineConfig({
  title: 'Modyo Docs',
  description: 'Welcome to the Modyo Support Center',
  outDir: '.vuepress/dist',
  appearance: false,
  ignoreDeadLinks: 'localhostLinks',
  rewrites: (id) => id.replace(/(^|\/)README\.md$/, '$1index.md'),
  transformPageData: applyLegacyFrontmatter,
  sitemap: {
    hostname: 'https://docs.modyo.com',
    transformItems: (items) => withAlternateLanguages(items, ['en', 'es']),
  },
  markdown: {
    anchor: { uniqueSlugStartIndex: 2 },
    container: {
      tipLabel: 'TIP',
      infoLabel: 'INFO',
      warningLabel: 'WARNING',
      dangerLabel: 'WARNING',
    },
    config: (md) => localizeContainerTitle(md, 'info', { es: 'INFORMACIÓN' }),
  },
  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://cloud.modyocdn.com' }],
    ['link', { rel: 'dns-prefetch', href: 'https://www.googletagmanager.com' }],
    ['meta', { name: 'theme-color', content: '#00D4AA' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'Modyo Docs' }],
    ['meta', { property: 'twitter:card', content: 'summary_large_image' }],
    [
      'script',
      {},
      "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-MW9VKMC');",
    ],
  ],
  themeConfig: {
    logo: '/assets/img/modyo.png',
    outline: { level: [2, 3] },
    search: {
      provider: 'algolia',
      options: {
        appId: 'TEEU706UKD',
        apiKey: '0830ca92d68cf8e7626a6eaa2d2e083b',
        indexName: 'modyo_docs_index',
        locales: {
          es: { placeholder: 'Buscar en la documentación', translations: esSearchTranslations },
        },
      },
    },
  },
  locales: {
    en: {
      label: en.label,
      lang: 'en',
      link: '/en/',
      description: 'Welcome to the official Modyo documentation.',
      themeConfig: {
        nav: en.nav,
        sidebar: en.sidebar,
        outline: { level: [2, 3], label: 'On this page' },
      },
    },
    es: {
      label: es.label,
      lang: 'es',
      link: '/es/',
      description: 'Bienvenido a la documentación oficial de Modyo.',
      themeConfig: {
        nav: es.nav,
        sidebar: es.sidebar,
        outline: { level: [2, 3], label: 'En esta página' },
        docFooter: { prev: 'Anterior', next: 'Siguiente' },
        returnToTopLabel: 'Volver arriba',
        sidebarMenuLabel: 'Menú',
        langMenuLabel: 'Cambiar idioma',
        notFound: {
          title: 'PÁGINA NO ENCONTRADA',
          quote: 'La página que buscas no existe o fue movida.',
          linkLabel: 'Ir al inicio',
          linkText: 'Volver al inicio',
        },
      },
    },
  },
})
