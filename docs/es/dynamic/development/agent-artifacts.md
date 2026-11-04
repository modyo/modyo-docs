---
search: true
---

# Artefactos para herramientas y agentes

Esta página es para quien construye una herramienta, un generador de código o un agente que trabaja con Dynamic UI y necesita leer su API, sus ejemplos o sus tokens de forma programática. Describe qué archivos publica cada versión de Dynamic UI, dónde están y qué contiene cada uno. Si construyes widgets a mano no la necesitas: lo que estos archivos describen está explicado para personas en [Componentes](components.html) y en [Sistema de temas](../customization/theming.html).

Los ejemplos y recuentos de esta página corresponden a Dynamic UI 2.12.1.

## Artefactos publicados

La base de todas las rutas es `https://cdn.dynamicframework.dev/assets/`.

| Artefacto | Ruta en el CDN | En el paquete npm | Para qué sirve |
|-----------|----------------|-------------------|----------------|
| `api.json` | `{version}/ui-react/api.json` | `dist/api.json` | Componentes, contextos y hooks con sus props, firmas y tipos |
| `components.json` | `{version}/ui-react/manifests/components.json` | No | Stories de Storybook con su import y el código de cada ejemplo |
| `docs.json` | `{version}/ui-react/manifests/docs.json` | No | Páginas de documentación de Storybook en MDX |
| `token-overrides.json` | `{version}/ui-react/tokens/token-overrides.json` | No | Qué variables de theme se pueden sobrescribir y cómo |
| `known-tokens.json` | No | `scripts/theme/known-tokens.json` | Inventario de todas las custom properties del CSS de la versión |
| `icons-core.json` | `{version}/ui-react/icons-core.json` | `dist/icons-core.json` | Iconos de Lucide que la librería usa internamente |
| `dynamic-ui.css` | `{version}/ui-react/css/dynamic-ui.css` | `dist/css/dynamic-ui.css` | CSS compilado |
| `dynamic-ui.min.css` | `{version}/ui-react/css/dynamic-ui.min.css` | `dist/css/dynamic-ui.min.css` | CSS compilado y minificado |
| `manifest.json` | `manifest.json` (fuera de `{version}`) | No | Índice de versiones publicadas |

Las rutas del paquete son relativas a `node_modules/@dynamic-framework/ui-react/`.

## Versiones

Usa siempre la ruta versionada, con la misma versión del CSS que carga la aplicación. La ruta `latest/ui-react/` existe, pero su contenido cambia con cada publicación.

Para conocer la versión más reciente, lee el campo `latest` de `https://cdn.dynamicframework.dev/assets/manifest.json`. No uses el orden de las claves de `versions`: no es un orden de versiones.

```json
// jq '{latest}' manifest.json
{
  "latest": "2.12.1"
}
```

Cada entrada de `versions` apunta al `api.json` de esa versión e indica su fecha de publicación y si está deprecada:

```json
// jq '.versions["2.12.1"]' manifest.json
{
  "ui-react": "https://cdn.dynamicframework.dev/assets/2.12.1/ui-react/api.json",
  "publishedAt": "2026-10-26T19:46:17Z",
  "deprecated": false
}
```

## api.json

`api.json` se genera a partir de los tipos del paquete; ante una diferencia entre `api.json` y los tipos de `dist/types/`, mandan los tipos.

Campos de primer nivel:

| Campo | Contenido |
|-------|-----------|
| `$schema` | URL del esquema JSON del archivo |
| `schemaVersion` | Versión de la estructura del archivo, independiente de la del paquete (`1.2.0` en 2.12.1) |
| `packageVersion` | Versión de Dynamic UI |
| `repository` | Enlace a la release |
| `generatedAt` | Fecha de generación |
| `components` | Componentes, por nombre |
| `contexts` | Contextos, por nombre |
| `hooks` | Hooks, por nombre |

### Componentes, contextos y hooks

`components`, `contexts` y `hooks` son objetos cuyas claves son los nombres que se usan en el código. En 2.12.1 hay 81 entradas en `components`, 1 en `contexts` (`DContextProvider`) y 25 en `hooks`. Los tipos de TypeScript se leen del paquete npm, en `dist/types/`.

Cada componente tiene `description`, `sourcePath`, `props`, `forwardedProps` y `types`. Cada prop indica su tipo, si es obligatoria, su valor por defecto y su descripción:

```json
// jq '.components.DButton.props.variant' api.json
{
  "type": "undefined | \"solid\" | \"outline\" | \"link\" | \"soft\"",
  "required": false,
  "defaultValue": "solid",
  "description": ""
}
```

Cada hook tiene `name`, `kind`, `source`, `description`, `signature`, `parameters`, `returns`, `returnType`, `requires` y `types`. `requires` lista lo que debe estar montado para que el hook funcione:

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

Los contextos tienen la misma forma que los hooks, con `props` en lugar de `parameters` y `returns`.

### Subcomponentes

Un subcomponente es una entrada de `components` con `parent` y `accessor`. Un subcomponente se usa con su accessor y no se importa por su nombre:

```json
// jq '.components.DCardHeader | {parent, accessor}' api.json
{
  "parent": "DCard",
  "accessor": "DCard.Header"
}
```

En el código, `DCardHeader` se escribe `<DCard.Header>`.

### forwardedProps y types

`forwardedProps` indica a qué elemento o componente pasa el componente las props que no declara, y con qué tipo. Esas props no se listan en `props`. Vale `null` cuando el componente no reenvía props.

```json
// jq '.components.DButton.forwardedProps' api.json
{
  "target": "button",
  "type": "ButtonHTMLAttributes<HTMLButtonElement>"
}
```

`types` define los tipos con nombre que aparecen en las props, los parámetros o el retorno, para que no haga falta resolverlos en otro archivo. Cada entrada tiene `description` y `type`; los tipos de objeto describen además cada campo en `fields`, y en los componentes las uniones de literales listan sus valores en `values`:

```json
// jq '.components.DButton.types.IconValue' api.json
{
  "description": "",
  "type": "string | IconComponent"
}
```

Un campo de `fields`, en un tipo de `DContextProvider`:

```json
// jq '.contexts.DContextProvider.types.CurrencyProps.fields.symbol' api.json
{
  "type": "string",
  "required": true,
  "description": "Currency symbol (e.g. `\"$\"`, `\"€\"`)."
}
```

## manifests/components.json

Índice de las stories de Storybook. Tiene dos campos de primer nivel: `v`, la versión del formato, y `components`, un objeto cuyas claves son ids de story. En 2.12.1 tiene 73 entradas: 52 de componentes (`design-system-*`) y 21 de patrones (`patterns-*`).

Cada entrada tiene:

| Campo | Contenido |
|-------|-----------|
| `id` | Id de la story |
| `name` | Componente principal de la story |
| `path` | Archivo de la story |
| `import` | Línea de import que usan los ejemplos |
| `stories` | Ejemplos, cada uno con `id`, `name` y `snippet` (código JSX) |
| `jsDocTags` | Etiquetas JSDoc del componente |
| `reactDocgen` | Props del componente según react-docgen |

Algunas entradas de patrones no tienen `reactDocgen` y traen un campo `error`, porque la story no declara un componente.

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

Páginas de documentación de Storybook: guías de uso, fundamentos, hooks y utilidades. Tiene dos campos de primer nivel: `v` y `docs`, un objeto cuyas claves son ids de página. En 2.12.1 tiene 32 páginas.

Cada página tiene `id`, `name`, `path`, `title` y `content`, que es el MDX completo:

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

Describe qué variables de theme se pueden sobrescribir, cómo se comportan al hacerlo y qué no conviene tocar. Es la versión para máquinas del [Sistema de temas](../customization/theming.html), que es el contrato de theming para personas.

Campos de primer nivel:

| Campo | Contenido |
|-------|-----------|
| `$schema` | URL del esquema JSON del archivo |
| `dynamicUi` | Versión de Dynamic UI a la que corresponde |
| `generatedFrom`, `generatedAt` | Origen y fecha de generación |
| `consumption` | Selector de anclaje, cómo ganar la cascada con y sin `@layer`, formato de color y cómo enlazar variables propias |
| `behaviorClasses` | Las cuatro clases de comportamiento al sobrescribir una variable |
| `color` | Grupos de tono, rampas y alcance de un rebrand |
| `typography`, `spacing`, `radius`, `shadow` | Variables de cada fundamento |
| `slots` | Variables que el CSS referencia y no declara |
| `gaps` | Limitaciones conocidas al tematizar con variables, con su estado y la alternativa |
| `componentTokens` | Estado de las variables de componente |

Las clases de comportamiento:

```json
// jq '.behaviorClasses' tokens/token-overrides.json
{
  "override-base": "Override the base --bs-X-rgb. Drags --bs-X and --bs-X-500-rgb along. Does NOT recolor the rest of the ramp.",
  "override-leaf": "Baked literal. Override one by one; does not follow the base.",
  "follows": "Auto-derived (alias/wrapper). Do NOT override; it recolors itself.",
  "not-overridable": "Baked value outside var() (data-URI). Replace the whole variable or treat as a gap."
}
```

Cobertura en 2.12.1: el archivo nombra 281 de las 1.215 custom properties que el CSS compilado declara en `:root, [data-bs-theme="dynamic"]`, las variables de theme. Se cuentan los nombres de variable que aparecen en el archivo y que también se declaran en ese selector. Las variables de componente (`--bs-{componente}-*`) no están enumeradas: `componentTokens` indica que están diferidas y cuántas son.

```json
// jq '.componentTokens | {status, deferredCount}' tokens/token-overrides.json
{
  "status": "deferred",
  "deferredCount": 703
}
```

Lee el archivo de la misma versión que el CSS que carga la aplicación.

## known-tokens.json

Inventario completo de las custom properties `--bs-*` que declara el CSS compilado de la versión, en orden alfabético. Solo viene en el paquete npm, en `node_modules/@dynamic-framework/ui-react/scripts/theme/known-tokens.json`. Sirve para validar que una variable existe antes de sobrescribirla o referenciarla.

```json
// jq '{dynamicUi, count}' scripts/theme/known-tokens.json
{
  "dynamicUi": "2.12.1",
  "count": 1908
}
```

`tokens` es el array con los nombres.

## icons-core.json

Los iconos de `lucide-react` que la librería usa internamente: chevrons, cierre, estados de alerta, adornos de input y acciones de archivo. Sirve a quien recorta `lucide-react` en su build: estos iconos tienen que quedar incluidos aunque la aplicación no los use directamente. En 2.12.1 son 27.

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

## Esquemas

`api.json` y `token-overrides.json` declaran su esquema JSON (draft 2020-12) en el campo `$schema`:

| Artefacto | Esquema |
|-----------|---------|
| `api.json` | `https://cdn.dynamicframework.dev/assets/schema/v1.json` |
| `token-overrides.json` | `https://cdn.dynamicframework.dev/assets/schema/token-overrides.v1.json` |

`components.json` y `docs.json` no tienen esquema publicado.

## Qué rutas no existen

Estas rutas responden con error. No hay listado de directorios.

| Ruta | Usa en su lugar |
|------|-----------------|
| `{version}/ui-react/token-overrides.json` | `{version}/ui-react/tokens/token-overrides.json` |
| `{version}/ui-react/tokens-overrides.json` | `{version}/ui-react/tokens/token-overrides.json` |
| `{version}/ui-react/dynamic-ui.css` | `{version}/ui-react/css/dynamic-ui.css` |
| `{version}/ui-react/dynamic-ui.min.css` | `{version}/ui-react/css/dynamic-ui.min.css` |
| `{version}/ui-react/known-tokens.json` | `scripts/theme/known-tokens.json` del paquete npm |
| `{version}/ui-react/` | Las rutas de la tabla de artefactos |
| `schema/` | Las URL de `$schema` |
