import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import type { PageData } from 'vitepress'
import { applyLegacyFrontmatter, HOME_LAYOUT } from './page-data.ts'

function page(frontmatter: Record<string, unknown>): PageData {
  return {
    title: '',
    titleTemplate: undefined,
    description: '',
    headers: [],
    frontmatter,
    params: {},
    relativePath: 'es/index.md',
    filePath: 'es/README.md',
  }
}

describe('applyLegacyFrontmatter', () => {
  it('uses the legacy meta description as the page description', () => {
    const data = page({ meta: [{ name: 'description', content: 'Descripción' }] })
    applyLegacyFrontmatter(data)
    assert.equal(data.description, 'Descripción')
    assert.equal(data.frontmatter.head, undefined)
  })

  it('keeps an explicit frontmatter description', () => {
    const data = page({ description: 'Explícita', meta: [{ name: 'description', content: 'Legacy' }] })
    data.description = 'Explícita'
    applyLegacyFrontmatter(data)
    assert.equal(data.description, 'Explícita')
  })

  it('moves other legacy meta entries to head', () => {
    const data = page({
      head: [['link', { rel: 'canonical', href: '/x' }]],
      meta: [{ property: 'og:title', content: 'Título' }],
    })
    applyLegacyFrontmatter(data)
    assert.deepEqual(data.frontmatter.head, [
      ['link', { rel: 'canonical', href: '/x' }],
      ['meta', { property: 'og:title', content: 'Título' }],
    ])
  })

  it('creates head when only extra meta entries exist', () => {
    const data = page({ meta: [{ name: 'robots', content: 'noindex' }] })
    applyLegacyFrontmatter(data)
    assert.deepEqual(data.frontmatter.head, [['meta', { name: 'robots', content: 'noindex' }]])
  })

  it('renders legacy home pages with the Modyo home layout and no title template', () => {
    const data = page({ home: true })
    applyLegacyFrontmatter(data)
    assert.equal(data.frontmatter.layout, HOME_LAYOUT)
    assert.equal(data.frontmatter.titleTemplate, false)
  })

  it('leaves regular pages untouched', () => {
    const data = page({ search: true })
    applyLegacyFrontmatter(data)
    assert.deepEqual(data.frontmatter, { search: true })
    assert.equal(data.description, '')
  })
})
