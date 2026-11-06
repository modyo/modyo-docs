import type { HeadConfig, PageData } from 'vitepress'

export const HOME_LAYOUT = 'ModyoHome'

interface LegacyMeta {
  name?: string
  property?: string
  content?: string
}

export function applyLegacyFrontmatter(pageData: PageData): void {
  const { frontmatter } = pageData
  const meta: LegacyMeta[] = Array.isArray(frontmatter.meta) ? frontmatter.meta : []

  const description = meta.find((entry) => entry.name === 'description')?.content
  if (description && !frontmatter.description) pageData.description = description

  const extraMeta = meta.filter((entry) => entry.name !== 'description')
  if (extraMeta.length > 0) {
    const head: HeadConfig[] = frontmatter.head ?? []
    frontmatter.head = [...head, ...extraMeta.map((entry): HeadConfig => ['meta', { ...entry }])]
  }

  if (frontmatter.home === true) {
    frontmatter.layout = HOME_LAYOUT
    frontmatter.titleTemplate = false
  }
}
