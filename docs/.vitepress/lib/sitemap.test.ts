import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { withAlternateLanguages } from './sitemap.ts'

describe('withAlternateLanguages', () => {
  const languages = ['en', 'es']

  it('links pages that exist in every language', () => {
    const items = withAlternateLanguages([{ url: 'en/platform/api.html' }, { url: 'es/platform/api.html' }], languages)
    const links = [
      { lang: 'en', url: 'en/platform/api.html' },
      { lang: 'es', url: 'es/platform/api.html' },
    ]
    assert.deepEqual(items, [
      { url: 'en/platform/api.html', changefreq: 'weekly', links },
      { url: 'es/platform/api.html', changefreq: 'weekly', links },
    ])
  })

  it('omits alternates for pages that exist in only one language', () => {
    assert.deepEqual(withAlternateLanguages([{ url: 'es/only.html' }], languages), [
      { url: 'es/only.html', changefreq: 'weekly' },
    ])
  })

  it('keeps pages outside the language folders', () => {
    assert.deepEqual(withAlternateLanguages([{ url: 'api/index.html' }], languages), [
      { url: 'api/index.html', changefreq: 'weekly' },
    ])
  })
})
