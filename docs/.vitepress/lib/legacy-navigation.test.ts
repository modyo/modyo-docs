import { after, before, describe, it } from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { createRequire } from 'node:module'
import {
  convertLocale,
  convertSidebar,
  convertSidebarItem,
  readPageTitle,
  resolveSourceFile,
  stripInlineMarkdown,
  type LegacyNavigation,
} from './legacy-navigation.ts'

let srcDir: string

before(() => {
  srcDir = fs.mkdtempSync(path.join(os.tmpdir(), 'modyo-docs-'))
  fs.mkdirSync(path.join(srcDir, 'es/platform/core'), { recursive: true })
  fs.mkdirSync(path.join(srcDir, 'es/dynamic'), { recursive: true })
  fs.writeFileSync(path.join(srcDir, 'es/platform/README.md'), '---\nsearch: true\n---\n\n# Bienvenido\n')
  fs.writeFileSync(path.join(srcDir, 'es/platform/core/api.md'), '# API de `Administración`\n')
  fs.writeFileSync(path.join(srcDir, 'es/dynamic/index.md'), '---\ntitle: "Dynamic Framework"\n---\n\n# Otro\n')
})

after(() => {
  fs.rmSync(srcDir, { recursive: true, force: true })
})

describe('resolveSourceFile', () => {
  it('resolves a directory link to its README.md', () => {
    assert.equal(resolveSourceFile(srcDir, '/es/platform/'), path.join(srcDir, 'es/platform/README.md'))
  })

  it('resolves a directory link to its index.md', () => {
    assert.equal(resolveSourceFile(srcDir, '/es/dynamic/'), path.join(srcDir, 'es/dynamic/index.md'))
  })

  it('resolves a page link with or without the html extension', () => {
    const expected = path.join(srcDir, 'es/platform/core/api.md')
    assert.equal(resolveSourceFile(srcDir, '/es/platform/core/api'), expected)
    assert.equal(resolveSourceFile(srcDir, '/es/platform/core/api.html'), expected)
  })

  it('returns undefined when the file does not exist', () => {
    assert.equal(resolveSourceFile(srcDir, '/es/missing'), undefined)
    assert.equal(resolveSourceFile(srcDir, '/es/missing/'), undefined)
  })
})

describe('stripInlineMarkdown', () => {
  it('removes links, images, code, emphasis and html', () => {
    assert.equal(
      stripInlineMarkdown('**Bold** _it_ `code` [link](/x) ![img](/y.png) <Badge text="x"/> end'),
      'Bold it code link img  end',
    )
  })
})

describe('readPageTitle', () => {
  it('prefers the frontmatter title and removes quotes', () => {
    assert.equal(readPageTitle("---\ntitle: 'Modyo Docs'\n---\n# Heading\n"), 'Modyo Docs')
    assert.equal(readPageTitle('---\ntitle: Plain\n---\n# Heading\n'), 'Plain')
  })

  it('uses the first level one heading', () => {
    assert.equal(readPageTitle('---\nsearch: true\n---\n\nIntro\n\n# Main **title** #\n\n## Sub\n'), 'Main title')
  })

  it('ignores headings inside fenced code blocks', () => {
    assert.equal(readPageTitle('```bash\n# comment\n```\n\n# Real\n'), 'Real')
    assert.equal(readPageTitle('~~~~\n# comment\n~~~~\n# Real\n'), 'Real')
  })

  it('returns undefined without a title', () => {
    assert.equal(readPageTitle('## Only second level\n'), undefined)
  })
})

describe('convertSidebarItem', () => {
  it('reads the title of a string item from its page', () => {
    assert.deepEqual(convertSidebarItem('/es/platform/core/api', srcDir), {
      text: 'API de Administración',
      link: '/es/platform/core/api',
    })
  })

  it('falls back to the link when the page has no title', () => {
    assert.deepEqual(convertSidebarItem('/es/missing', srcDir), { text: '/es/missing', link: '/es/missing' })
  })

  it('keeps the explicit text of a tuple item', () => {
    assert.deepEqual(convertSidebarItem(['/es/platform/', 'Inicio'], srcDir), { text: 'Inicio', link: '/es/platform/' })
  })

  it('converts collapsable groups with a path', () => {
    assert.deepEqual(
      convertSidebarItem({ title: 'Plataforma', path: '/es/platform/', collapsable: true, children: ['/es/platform/'] }, srcDir),
      {
        text: 'Plataforma',
        link: '/es/platform/',
        collapsed: true,
        items: [{ text: 'Bienvenido', link: '/es/platform/' }],
      },
    )
  })

  it('converts fixed groups without path or children', () => {
    assert.deepEqual(convertSidebarItem({ title: 'Recursos' }, srcDir), { text: 'Recursos', items: [] })
  })
})

describe('convertSidebar', () => {
  it('converts every sidebar section', () => {
    assert.deepEqual(convertSidebar({ '/es/platform/': ['/es/platform/core/api'] }, srcDir), {
      '/es/platform/': [{ text: 'API de Administración', link: '/es/platform/core/api' }],
    })
  })
})

describe('convertLocale', () => {
  const navigation: LegacyNavigation = {
    locales: {
      '/es/': {
        label: 'Español',
        nav: [{ text: 'Plataforma', link: '/es/platform/' }],
        sidebar: { '/es/platform/': [['/es/platform/', 'Inicio']] },
      },
    },
  }

  it('returns label, nav and converted sidebar', () => {
    assert.deepEqual(convertLocale(navigation, '/es/', srcDir), {
      label: 'Español',
      nav: [{ text: 'Plataforma', link: '/es/platform/' }],
      sidebar: { '/es/platform/': [{ text: 'Inicio', link: '/es/platform/' }] },
    })
  })

  it('throws when the locale does not exist', () => {
    assert.throws(() => convertLocale(navigation, '/fr/', srcDir), /Missing navigation for locale \/fr\//)
  })
})

describe('site navigation', () => {
  const docsDir = fileURLToPath(new URL('../..', import.meta.url))
  const navigation = createRequire(import.meta.url)('../navigation.cjs') as LegacyNavigation

  function collectLinks(items: ReturnType<typeof convertSidebarItem>[]): { text: string, link?: string }[] {
    return items.flatMap((item) => [item, ...collectLinks(item.items ?? [])])
  }

  for (const base of Object.keys(navigation.locales)) {
    it(`resolves a title for every sidebar entry in ${base}`, () => {
      const { sidebar } = convertLocale(navigation, base, docsDir)
      const unresolved = Object.values(sidebar)
        .flatMap((items) => collectLinks(items))
        .filter((item) => item.link && item.text === item.link)
      assert.deepEqual(unresolved, [])
    })
  }
})
