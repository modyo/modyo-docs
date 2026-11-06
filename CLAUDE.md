# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build and Development Commands

```bash
# Requires Node.js 24 (see .nvmrc)
npm install

# Start development server (runs on http://localhost:8080)
npm run docs:dev

# Build the documentation site (fails on dead internal links)
npm run docs:build

# Run the unit tests of the VitePress configuration helpers
npm test
```

## Repository Structure

This is the official Modyo technical documentation built with VitePress 1.x.

### Content Organization
- **Spanish (Primary)**: `/docs/es/` - All original documentation is written in Spanish first (Spanish default)
- **English (Secondary)**: `/docs/en/` - Translated by hand from `/docs/es/` in the same PR that changes the Spanish file, keeping the same heading structure
- **Site configuration**: `/docs/.vitepress/config.mts` - Site settings, locales, search, sitemap and markdown options
- **Navigation**: `/docs/.vitepress/navigation.cjs` - Navbar and sidebar of each language
- **Theme**: `/docs/.vitepress/theme/` - VitePress default theme extended with Modyo styles and the home layout
- **Public Assets**: `/docs/public/` - Static assets

### Key Documentation Areas
- **Platform**: Core Modyo platform documentation (`/platform/`)
- **Connect**: Modyo Connect module documentation (`/connect/`)
- **Dynamic**: Dynamic Framework documentation (`/docs/{es,en}/dynamic/`)
- **Architecture**: Patterns and architectural guidance (`/architecture/`)

## Important Guidelines

### Language and Translation
- Spanish is the source of truth - always prioritize accuracy in Spanish documentation
- English files are translated by hand in the same PR as the Spanish change, with `es/` as the source
- Target audience is developers and technical users of the Modyo platform

### Link Conventions
- Internal links must point to `.html` files, not `.md` files
- Anchor links (#) must match section titles in the corresponding language
- Example: `/es/platform/core/api.html#endpoints` not `/es/platform/core/api.md#endpoints`

### Routing
Files follow the filesystem structure plus language prefix:
- Spanish: `/es/platform/foo/`
- English: `/en/platform/foo/`

### VitePress Configuration
- Navbar and sidebar are defined in `/docs/.vitepress/navigation.cjs` and converted to the VitePress format at build time
- A sidebar entry given only as a path takes its text from the page frontmatter `title` or its H1
- `README.md` files are served as the index of their folder (`/es/platform/` renders `docs/es/platform/README.md`)
- Supports Algolia DocSearch; the crawler selectors live in `/algolia.json`
- Uses Google Tag Manager for analytics
- The page outline shows H2 and H3 headings

## Testing Documentation Changes

1. Start the development server: `npm run docs:dev`
2. Navigate to `http://localhost:8080/es/` for Spanish or `http://localhost:8080/en/` for English
3. Verify internal links work correctly (should end in `.html`)
4. Check that anchor links correspond to actual section headers

## CI/CD Pipeline

GitHub Actions workflow (`/.github/workflows/main.yml`) runs on pull requests to master:
- Uses Node.js 24
- Runs `npm ci`, `npm test` and `npm run docs:build`
- Ensures documentation builds successfully before merging
- Los títulos H1, H2 y H3 nunca pueden terminar con ":"