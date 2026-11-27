export interface SitemapLink {
  lang: string
  url: string
}

export interface SitemapItem {
  url: string
  changefreq?: string
  links?: SitemapLink[]
}

export function withAlternateLanguages(items: SitemapItem[], languages: string[]): SitemapItem[] {
  const urls = new Set(items.map((item) => item.url))

  return items.map((item) => {
    const [language, ...rest] = item.url.split('/')
    if (!languages.includes(language)) return { ...item, changefreq: 'weekly' }

    const links = languages
      .map((lang) => ({ lang, url: [lang, ...rest].join('/') }))
      .filter((link) => urls.has(link.url))

    return { ...item, changefreq: 'weekly', ...(links.length > 1 ? { links } : {}) }
  })
}
