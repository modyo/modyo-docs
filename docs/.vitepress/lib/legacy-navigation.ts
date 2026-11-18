import fs from 'node:fs'
import path from 'node:path'
import type { DefaultTheme } from 'vitepress'

export interface LegacySidebarGroup {
  title: string
  path?: string
  collapsable?: boolean
  children?: LegacySidebarItem[]
}

export type LegacySidebarItem = string | [string, string] | LegacySidebarGroup

export interface LegacyLocale {
  label: string
  nav: DefaultTheme.NavItem[]
  sidebar: Record<string, LegacySidebarItem[]>
}

export interface LegacyNavigation {
  locales: Record<string, LegacyLocale>
}

const INDEX_FILES = ['README.md', 'index.md']

export function resolveSourceFile(srcDir: string, link: string): string | undefined {
  const relative = link.replace(/^\//, '').replace(/\.html$/, '')
  const candidates = relative === '' || relative.endsWith('/')
    ? INDEX_FILES.map((name) => path.join(srcDir, relative, name))
    : [path.join(srcDir, `${relative}.md`)]
  return candidates.find((candidate) => fs.existsSync(candidate))
}

export function stripInlineMarkdown(text: string): string {
  return text
    .replace(/!?\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/`([^`]*)`/g, '$1')
    .replace(/(\*\*|__|\*|_)(.+?)\1/g, '$2')
    .replace(/<[^>]+>/g, '')
    .trim()
}

function unquote(value: string): string {
  const match = value.match(/^(['"])(.*)\1$/)
  return match ? match[2] : value
}

export function readPageTitle(source: string): string | undefined {
  const frontmatter = source.match(/^---\r?\n([\s\S]*?)\r?\n---/)
  const frontmatterTitle = frontmatter?.[1].match(/^title:[ \t]*(.+)$/m)
  if (frontmatterTitle) return unquote(frontmatterTitle[1].trim())

  const body = (frontmatter ? source.slice(frontmatter[0].length) : source)
    .replace(/^(`{3,}|~{3,})[^\n]*\n[\s\S]*?^\1[ \t]*$/gm, '')
  const heading = body.match(/^#[ \t]+(.+?)[ \t#]*$/m)
  return heading ? stripInlineMarkdown(heading[1]) : undefined
}

export function convertSidebarItem(item: LegacySidebarItem, srcDir: string): DefaultTheme.SidebarItem {
  if (typeof item === 'string') {
    const file = resolveSourceFile(srcDir, item)
    const title = file ? readPageTitle(fs.readFileSync(file, 'utf8')) : undefined
    return { text: title ?? item, link: item }
  }

  if (Array.isArray(item)) {
    const [link, text] = item
    return { text, link }
  }

  return {
    text: item.title,
    ...(item.path ? { link: item.path } : {}),
    ...(item.collapsable ? { collapsed: true } : {}),
    items: (item.children ?? []).map((child) => convertSidebarItem(child, srcDir)),
  }
}

export function convertSidebar(
  sidebar: Record<string, LegacySidebarItem[]>,
  srcDir: string,
): DefaultTheme.SidebarMulti {
  return Object.fromEntries(
    Object.entries(sidebar).map(([base, items]) => [
      base,
      items.map((item) => convertSidebarItem(item, srcDir)),
    ]),
  )
}

export function convertLocale(
  navigation: LegacyNavigation,
  base: string,
  srcDir: string,
): { label: string, nav: DefaultTheme.NavItem[], sidebar: DefaultTheme.SidebarMulti } {
  const locale = navigation.locales[base]
  if (!locale) throw new Error(`Missing navigation for locale ${base}`)
  return {
    label: locale.label,
    nav: locale.nav,
    sidebar: convertSidebar(locale.sidebar, srcDir),
  }
}
