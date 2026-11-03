---
search: true
---

# Artifacts for Tools and Agents

This page is for developers building a tool, a code generator, or an agent that works with Dynamic UI and needs to read its API, examples, or tokens programmatically. It describes which files each Dynamic UI version publishes, where they are, and what each one contains. If you build widgets by hand you do not need it: what these files describe is explained for people in [Components](components.html) and [Theming](../customization/theming.html).

The examples and counts on this page are from Dynamic UI 2.12.1.

## Published Artifacts

The base of every path is `https://cdn.dynamicframework.dev/assets/{version}/ui-react/`.

| Artifact | CDN path | In the npm package | Purpose |
|----------|----------|--------------------|---------|
| `api.json` | `{version}/ui-react/api.json` | `dist/api.json` | Components, contexts, and hooks with their props, signatures, and types |
| `components.json` | `{version}/ui-react/manifests/components.json` | No | Storybook stories with their import and the code of each example |
| `docs.json` | `{version}/ui-react/manifests/docs.json` | No | Storybook documentation pages in MDX |
| `token-overrides.json` | `{version}/ui-react/tokens/token-overrides.json` | No | Which theme variables can be overridden and how |
| `known-tokens.json` | No | `scripts/theme/known-tokens.json` | Inventory of every custom property in the version's CSS |
| `icons-core.json` | `{version}/ui-react/icons-core.json` | `dist/icons-core.json` | Lucide icons the library uses internally |
| `dynamic-ui.css` | `{version}/ui-react/css/dynamic-ui.css` | `dist/css/dynamic-ui.css` | Compiled CSS |
| `dynamic-ui.min.css` | `{version}/ui-react/css/dynamic-ui.min.css` | `dist/css/dynamic-ui.min.css` | Compiled and minified CSS |
| `manifest.json` | `manifest.json` (outside `{version}`) | No | Index of published versions |

Package paths are relative to `node_modules/@dynamic-framework/ui-react/`.

## Versions

Always use the versioned path, with the same version as the CSS the application loads. The `latest/ui-react/` path exists, but its content changes with every release.

To find the most recent version, read the `latest` field of `https://cdn.dynamicframework.dev/assets/manifest.json`. Do not rely on the order of the `versions` keys: it is not a version order.

```json
// jq '{latest}' manifest.json
{
  "latest": "2.12.1"
}
```

Each `versions` entry points to that version's `api.json` and states its publication date and whether it is deprecated:

```json
// jq '.versions["2.12.1"]' manifest.json
{
  "ui-react": "https://cdn.dynamicframework.dev/assets/2.12.1/ui-react/api.json",
  "publishedAt": "2026-10-26T19:46:17Z",
  "deprecated": false
}
```

## api.json

`api.json` is generated from the package types; when `api.json` and the types in `dist/types/` differ, the types prevail.

Top-level fields:

| Field | Content |
|-------|---------|
| `$schema` | URL of the file's JSON schema |
| `schemaVersion` | Version of the file structure, independent of the package version (`1.2.0` in 2.12.1) |
| `packageVersion` | Dynamic UI version |
| `repository` | Link to the release |
| `generatedAt` | Generation date |
| `components` | Components, by name |
| `contexts` | Contexts, by name |
| `hooks` | Hooks, by name |

### Components, Contexts, and Hooks

`components`, `contexts`, and `hooks` are objects whose keys are the names used in code. In 2.12.1 there are 81 entries in `components`, 1 in `contexts` (`DContextProvider`), and 25 in `hooks`. TypeScript types are read from the npm package, in `dist/types/`.

Each component has `description`, `sourcePath`, `props`, `forwardedProps`, and `types`. Each prop states its type, whether it is required, its default value, and its description:

```json
// jq '.components.DButton.props.variant' api.json
{
  "type": "undefined | \"solid\" | \"outline\" | \"link\" | \"soft\"",
  "required": false,
  "defaultValue": "solid",
  "description": ""
}
```

Each hook has `name`, `kind`, `source`, `description`, `signature`, `parameters`, `returns`, `returnType`, `requires`, and `types`. `requires` lists what must be mounted for the hook to work:

```json
// jq '.hooks.useCountdown | {name, signature, returnType, requires}' api.json
{
  "name": "useCountdown",
  "signature": "useCountdown(seconds: number) => { secondsLeft, restartCountdown }",
  "returnType": "{ secondsLeft: number; restartCountdown: () => void; }",
  "requires": []
}
```

```json
// jq -c '.hooks.useDPortalContext.requires' api.json
["DContextProvider"]
```

Contexts have the same shape as hooks, with `props` instead of `parameters` and `returns`.

### Subcomponents

A subcomponent is a `components` entry with `parent` and `accessor`. A subcomponent is used through its accessor and is not imported by its name:

```json
// jq '.components.DCardHeader | {parent, accessor}' api.json
{
  "parent": "DCard",
  "accessor": "DCard.Header"
}
```

In code, `DCardHeader` is written `<DCard.Header>`.

### forwardedProps and types

`forwardedProps` states which element or component receives the props the component does not declare, and with what type. Those props are not listed in `props`. It is `null` when the component does not forward props.

```json
// jq '.components.DButton.forwardedProps' api.json
{
  "target": "button",
  "type": "ButtonHTMLAttributes<HTMLButtonElement>"
}
```

`types` defines the named types that appear in props, parameters, or return values, so they do not have to be resolved from another file. Each entry has `description` and `type`; object types also describe each field in `fields`, and in components, unions of literals list their values in `values`:

```json
// jq '.components.DButton.types.IconValue' api.json
{
  "description": "",
  "type": "string | IconComponent"
}
```

A `fields` entry, in a `DContextProvider` type:

```json
// jq '.contexts.DContextProvider.types.CurrencyProps.fields.symbol' api.json
{
  "type": "string",
  "required": true,
  "description": "Currency symbol (e.g. `\"$\"`, `\"€\"`)."
}
```

## manifests/components.json

Index of the Storybook stories. It has two top-level fields: `v`, the format version, and `components`, an object whose keys are story ids. In 2.12.1 it has 73 entries: 52 for components (`design-system-*`) and 21 for patterns (`patterns-*`).

Each entry has:

| Field | Content |
|-------|---------|
| `id` | Story id |
| `name` | Main component of the story |
| `path` | Story file |
| `import` | Import line the examples use |
| `stories` | Examples, each with `id`, `name`, and `snippet` (JSX code) |
| `jsDocTags` | JSDoc tags of the component |
| `reactDocgen` | Component props according to react-docgen |

Some pattern entries have no `reactDocgen` and include an `error` field, because the story does not declare a component.

```json
// jq '.components["design-system-components-box"]' manifests/components.json
{
  "id": "design-system-components-box",
  "name": "DBox",
  "path": "./stories/components/DBox.stories.tsx",
  "stories": [
    {
      "id": "design-system-components-box--default",
      "name": "Default",
      "snippet": "const Default = () => <DBox>(<>\n      <h4>Hello world</h4>\n      <p className=\"m-0\">Loren ipsum dolor</p>\n    </>)</DBox>;"
    },
    {
      "id": "design-system-components-box--custom-padding",
      "name": "Custom Padding",
      "snippet": "const CustomPadding = () => <DBox className=\"p-8\">(<>\n      <h4>Hello world</h4>\n      <p className=\"m-0\">Lorem ipsum dolor</p>\n    </>)</DBox>;"
    }
  ],
  "import": "import { DBox } from \"@dynamic-framework/ui-react\";",
  "jsDocTags": {},
  "reactDocgen": {
    "description": "",
    "methods": [],
    "displayName": "DBox",
    "definedInFile": "src/components/DBox/DBox.tsx",
    "actualName": "DBox",
    "exportName": "default",
    "props": {
      "style": {
        "required": false,
        "tsType": {
          "name": "CSSProperties | undefined"
        }
      },
      "className": {
        "required": false,
        "tsType": {
          "name": "string | undefined"
        }
      },
      "dataAttributes": {
        "required": false,
        "tsType": {
          "name": "DataAttributes | undefined"
        }
      },
      "children": {
        "required": false,
        "tsType": {
          "name": "ReactNode"
        }
      }
    }
  }
}
```

## manifests/docs.json

Storybook documentation pages: usage guides, foundations, hooks, and utilities. It has two top-level fields: `v` and `docs`, an object whose keys are page ids. In 2.12.1 it has 32 pages.

Each page has `id`, `name`, `path`, `title`, and `content`, which is the full MDX:

```json
// jq '.docs["design-system-utils-formatcurrency--docs"] | {id, name, path, title}' manifests/docs.json
{
  "id": "design-system-utils-formatcurrency--docs",
  "name": "Docs",
  "path": "./stories/utils/formatCurrency.mdx",
  "title": "Design System/Utils/formatCurrency"
}
```

## tokens/token-overrides.json

Describes which theme variables can be overridden, how they behave when you do, and what should not be touched. It is the machine version of [Theming](../customization/theming.html), which is the theming contract for people.

Top-level fields:

| Field | Content |
|-------|---------|
| `$schema` | URL of the file's JSON schema |
| `dynamicUi` | Dynamic UI version it belongs to |
| `generatedFrom`, `generatedAt` | Source and generation date |
| `consumption` | Anchor selector, how to win the cascade with and without `@layer`, color format, and how to wire your own variables |
| `behaviorClasses` | The four behavior classes when overriding a variable |
| `color` | Hue groups, ramps, and the scope of a rebrand |
| `typography`, `spacing`, `radius`, `shadow` | Variables of each foundation |
| `slots` | Variables the CSS references and does not declare |
| `gaps` | Known limitations of theming with variables, with their state and the workaround |
| `componentTokens` | Status of component variables |

The behavior classes:

```json
// jq '.behaviorClasses' tokens/token-overrides.json
{
  "override-base": "Override the base --bs-X-rgb. Drags --bs-X and --bs-X-500-rgb along. Does NOT recolor the rest of the ramp.",
  "override-leaf": "Baked literal. Override one by one; does not follow the base.",
  "follows": "Auto-derived (alias/wrapper). Do NOT override; it recolors itself.",
  "not-overridable": "Baked value outside var() (data-URI). Replace the whole variable or treat as a gap."
}
```

Coverage in 2.12.1: the file names 281 of the 1,215 custom properties the compiled CSS declares in `:root, [data-bs-theme="dynamic"]`, the theme variables. The count is the variable names that appear in the file and are also declared in that selector. Component variables (`--bs-{component}-*`) are not enumerated: `componentTokens` states that they are deferred and how many there are.

```json
// jq '.componentTokens | {status, deferredCount}' tokens/token-overrides.json
{
  "status": "deferred",
  "deferredCount": 703
}
```

Read the file of the same version as the CSS the application loads.

## known-tokens.json

Full inventory of the `--bs-*` custom properties declared by the version's compiled CSS, in alphabetical order. It ships only in the npm package, at `node_modules/@dynamic-framework/ui-react/scripts/theme/known-tokens.json`. Use it to check that a variable exists before overriding or referencing it.

```json
// jq '{dynamicUi, count}' scripts/theme/known-tokens.json
{
  "dynamicUi": "2.12.1",
  "count": 1908
}
```

`tokens` is the array of names.

## icons-core.json

The `lucide-react` icons the library uses internally: chevrons, close, alert states, input adornments, and file actions. It is for anyone who trims `lucide-react` in their build: these icons must stay included even if the application does not use them directly. In 2.12.1 there are 27.

```json
// jq '.' icons-core.json
{
  "dynamicUi": "2.12.1",
  "lucideReact": "^0.553.0",
  "icons": [
    "AlertCircle",
    "AlertTriangle",
    "Calendar",
    "Check",
    "CheckCircle",
    "ChevronDown",
    "ChevronLeft",
    "ChevronRight",
    "ChevronUp",
    "Eye",
    "EyeOff",
    "Info",
    "Minus",
    "Plus",
    "Search",
    "Upload",
    "X",
    "Circle",
    "CircleCheck",
    "CircleCheckBig",
    "Download",
    "FileText",
    "MoreVertical",
    "Paperclip",
    "RefreshCw",
    "Share2",
    "Trash"
  ]
}
```

## Schemas

`api.json` and `token-overrides.json` declare their JSON schema (draft 2020-12) in the `$schema` field:

| Artifact | Schema |
|----------|--------|
| `api.json` | `https://cdn.dynamicframework.dev/assets/schema/v1.json` |
| `token-overrides.json` | `https://cdn.dynamicframework.dev/assets/schema/token-overrides.v1.json` |

`components.json` and `docs.json` have no published schema.

## Paths That Do Not Exist

These paths return an error. There is no directory listing.

| Path | Use instead |
|------|-------------|
| `{version}/ui-react/token-overrides.json` | `{version}/ui-react/tokens/token-overrides.json` |
| `{version}/ui-react/tokens-overrides.json` | `{version}/ui-react/tokens/token-overrides.json` |
| `{version}/ui-react/dynamic-ui.css` | `{version}/ui-react/css/dynamic-ui.css` |
| `{version}/ui-react/dynamic-ui.min.css` | `{version}/ui-react/css/dynamic-ui.min.css` |
| `{version}/ui-react/known-tokens.json` | `scripts/theme/known-tokens.json` in the npm package |
| `{version}/ui-react/` | The paths in the artifacts table |
| `schema/` | The `$schema` URLs |
