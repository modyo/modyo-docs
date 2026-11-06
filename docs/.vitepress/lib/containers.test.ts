import { before, describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { fileURLToPath } from 'node:url'
import { createMarkdownRenderer, type MarkdownRenderer } from 'vitepress'
import { localizeContainerTitle } from './containers.ts'

const srcDir = fileURLToPath(new URL('../..', import.meta.url))

describe('localizeContainerTitle', () => {
  let md: MarkdownRenderer

  before(async () => {
    md = await createMarkdownRenderer(srcDir, { container: { infoLabel: 'INFO' } }, '/')
    localizeContainerTitle(md, 'info', { es: 'INFORMACIÓN' })
  })

  it('uses the localized label for pages of the configured locale', () => {
    const html = md.render('::: info\nTexto\n:::\n', { relativePath: 'es/platform/index.md' })
    assert.match(html, /<p class="custom-block-title">INFORMACIÓN<\/p>/)
  })

  it('keeps the default label for other locales', () => {
    const html = md.render('::: info\nText\n:::\n', { relativePath: 'en/platform/index.md' })
    assert.match(html, /<p class="custom-block-title">INFO<\/p>/)
  })

  it('keeps the default label when the page path is unknown', () => {
    const html = md.render('::: info\nText\n:::\n', {})
    assert.match(html, /<p class="custom-block-title">INFO<\/p>/)
  })

  it('keeps custom titles', () => {
    const html = md.render('::: info Nota\nTexto\n:::\n', { relativePath: 'es/platform/index.md' })
    assert.match(html, /<p class="custom-block-title">Nota<\/p>/)
  })

  it('throws when the container is not registered', () => {
    const fake = { renderer: { rules: {} } } as unknown as MarkdownRenderer
    assert.throws(() => localizeContainerTitle(fake, 'note', {}), /Container "note" is not registered/)
  })
})
