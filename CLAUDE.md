# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build and Development Commands

```bash
# Install dependencies
yarn install
# or for Node 17+ on macOS:
export NODE_OPTIONS=--openssl-legacy-provider && yarn install

# Start development server (runs on http://localhost:8080)
yarn docs:dev

# Build the documentation site
yarn docs:build
```

## Repository Structure

This is the official Modyo technical documentation built with VuePress v1.9.10.

### Content Organization
- **Spanish (Primary)**: `/docs/es/` - All original documentation is written in Spanish first (Spanish default)
- **English (Secondary)**: `/docs/en/` - Translations has to be generated every time an spanish file changes (changes will be overwritten)
- **Configuration**: `/docs/.vuepress/config.js` - Controls navigation, sidebar, and site settings
- **Public Assets**: `/docs/.vuepress/public/` - Static assets

### Key Documentation Areas
- **Platform**: Core Modyo platform documentation (`/platform/`)
- **Connect**: Modyo Connect module documentation (`/connect/`)
- **Dynamic**: Dynamic Framework documentation (external site)
- **Architecture**: Patterns and architectural guidance (`/architecture/`)

## Important Guidelines

### Language and Translation
- Spanish is the source of truth - always prioritize accuracy in Spanish documentation
- English files has to be auto-generated using AI - manual changes will be overwritten
- Target audience is developers and technical users of the Modyo platform

### Link Conventions
- Internal links must point to `.html` files, not `.md` files
- Anchor links (#) must match section titles in the corresponding language
- Example: `/es/platform/core/api.html#endpoints` not `/es/platform/core/api.md#endpoints`

### Routing
Files follow the filesystem structure plus language prefix:
- Spanish: `/es/platform/foo/`
- English: `/en/platform/foo/`

### VuePress Configuration
- Main navigation and sidebar controlled by `/docs/.vuepress/config.js`
- Supports Algolia search integration
- Uses Google Tag Manager for analytics
- Sidebar depth set to 1 by default

## Testing Documentation Changes

1. Start the development server: `yarn docs:dev`
2. Navigate to `http://localhost:8080/es/` for Spanish or `http://localhost:8080/en/` for English
3. Verify internal links work correctly (should end in `.html`)
4. Check that anchor links correspond to actual section headers

## CI/CD Pipeline

GitHub Actions workflow (`/.github/workflows/main.yml`) runs on pull requests to master:
- Uses Node.js 16
- Runs `npm ci` followed by `npm run docs:build`
- Ensures documentation builds successfully before merging
- Los títulos H1, H2 y H3 nunca pueden terminar con ":"