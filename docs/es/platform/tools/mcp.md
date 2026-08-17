---
search: true
---

# Modyo MCP

El [Model Context Protocol (MCP)](https://modelcontextprotocol.io) es un estándar abierto para comunicar asistentes de inteligencia artificial con herramientas y fuentes de datos externas. El **Modyo MCP Server** implementa este protocolo sobre la API de administración de Modyo, permitiendo que un agente IA gestione contenido, sitios, widgets, customers, y administración de la plataforma usando lenguaje natural.

Distribuido como paquete NPM ([`@modyo/mcp`](https://www.npmjs.com/package/@modyo/mcp)), funciona con cualquier cliente compatible con MCP (Claude Desktop, Claude Code, Cursor, GitHub Copilot, Gemini CLI, etc.).

:::warning Atención — Permisos
El MCP server opera con los mismos permisos que el usuario administrador asociado al `MODYO_TOKEN`. Un agente con acceso a este token puede crear, modificar y eliminar contenido, sitios, widgets, usuarios y configuraciones de la plataforma. **Usa un token con el alcance mínimo necesario** y revisa las acciones del agente antes de aprobar operaciones destructivas (eliminación de páginas, despublicación masiva, borrado de realms o usuarios). Si trabajas en producción, considera crear un usuario admin dedicado con un rol acotado y rotar el token periódicamente. Esa rotación es manual: los tokens de la API de administración no caducan y la plataforma no los renueva sola, así que el `MODYO_TOKEN` sigue siendo válido hasta que alguien lo elimina desde la consola. Ve [Ciclo de vida del token de acceso](/es/platform/core/api.html#ciclo-de-vida-del-token-de-acceso).
:::

## Requisitos

- Node.js 22 o superior
- Una instancia de Modyo accesible vía HTTPS
- Un token de administrador de Modyo (Modyo Admin → Settings → API Access)

## Instalación

El MCP server se ejecuta como un proceso local (transporte stdio) que el cliente IA lanza bajo demanda. La configuración consiste en agregar el server al archivo de configuración del cliente, indicando el comando (`npx -y @modyo/mcp`) y las variables de entorno mínimas.

### Claude Desktop

Edita `claude_desktop_config.json`:

- **macOS:** `~/Library/Application Support/Claude/claude_desktop_config.json`
- **Windows:** `%APPDATA%\Claude\claude_desktop_config.json`
- **Linux:** `~/.config/Claude/claude_desktop_config.json`

```json
{
  "mcpServers": {
    "modyo": {
      "command": "npx",
      "args": ["-y", "@modyo/mcp"],
      "env": {
        "MODYO_URL": "https://your-org.modyo.com",
        "MODYO_TOKEN": "your-admin-token"
      }
    }
  }
}
```

Reinicia Claude Desktop después de guardar.

### Claude Code

```bash
claude mcp add modyo \
  --scope project \
  --env MODYO_URL=https://your-org.modyo.com \
  --env MODYO_TOKEN=your-token \
  -- npx -y @modyo/mcp
```

Usa `--scope user` en lugar de `--scope project` para aplicar la configuración globalmente.

Para verificar el registro:

```bash
claude mcp list
```

### Cursor

Edita `~/.cursor/mcp.json`:

```json
{
  "mcpServers": {
    "modyo": {
      "command": "npx",
      "args": ["-y", "@modyo/mcp"],
      "env": {
        "MODYO_URL": "https://your-org.modyo.com",
        "MODYO_TOKEN": "your-token"
      }
    }
  }
}
```

### GitHub Copilot en VS Code

Requiere Copilot con **Agent Mode** habilitado.

Crea `.vscode/mcp.json` en la raíz de tu proyecto (configuración por proyecto, recomendado):

```json
{
  "servers": {
    "modyo": {
      "command": "npx",
      "args": ["-y", "@modyo/mcp"],
      "env": {
        "MODYO_URL": "https://your-org.modyo.com",
        "MODYO_TOKEN": "your-token"
      }
    }
  }
}
```

Aparecerá un botón **Start** al inicio del archivo. Haz clic para iniciar el server y permitir que Copilot descubra las herramientas.

Para configuración global, usa el Command Palette → `Chat: Open User MCP Configuration` con la misma estructura.

:::tip Para organizaciones con Copilot Business o Enterprise
Un administrador debe habilitar la política "MCP servers in Copilot" en la configuración de la organización.
:::

### GitHub Copilot CLI

Dentro de una sesión interactiva de Copilot CLI:

```
/mcp add
```

Sigue el wizard: selecciona `Local or STDIO`, ingresa `npx -y @modyo/mcp` como comando, y agrega las variables de entorno.

Alternativamente, edita directamente `~/.copilot/mcp-config.json`:

```json
{
  "mcpServers": {
    "modyo": {
      "type": "local",
      "command": "npx",
      "args": ["-y", "@modyo/mcp"],
      "env": {
        "MODYO_URL": "https://your-org.modyo.com",
        "MODYO_TOKEN": "your-token"
      },
      "tools": ["*"]
    }
  }
}
```

### Gemini CLI

Edita `~/.gemini/settings.json` para configuración global, o `.gemini/settings.json` en tu proyecto:

```json
{
  "mcpServers": {
    "modyo": {
      "command": "npx",
      "args": ["-y", "@modyo/mcp"],
      "env": {
        "MODYO_URL": "https://your-org.modyo.com",
        "MODYO_TOKEN": "your-token"
      }
    }
  }
}
```

:::warning Gemini CLI y variables de entorno
Gemini CLI redacta automáticamente variables de entorno con patrones sensibles como `*TOKEN*`. Siempre declara `MODYO_TOKEN` explícitamente dentro del bloque `env` como se muestra arriba — no dependas de variables exportadas en el shell.
:::

### Otros clientes MCP

Cualquier cliente que soporte el transporte stdio puede ejecutar:

```
command: npx
args: ["-y", "@modyo/mcp"]
env:
  MODYO_URL: https://your-org.modyo.com
  MODYO_TOKEN: your-token
```

:::tip Variables opcionales
Cualquier variable opcional va en el mismo bloque `env` de tu cliente. Por ejemplo, para auditar un site en producción sin riesgo de modificarlo:

    "env": {
      "MODYO_URL": "https://your-org.modyo.com",
      "MODYO_TOKEN": "your-admin-token",
      "MODYO_MCP_MODULES": "channels",
      "MODYO_READ_ONLY": "true"
    }

Ver [Variables de Entorno](#variables-de-entorno) y [Filtrado de módulos y modo read-only](#filtrado-de-modulos-y-modo-read-only).
:::

## Variables de Entorno

| Variable | Requerida | Descripción |
|----------|-----------|-------------|
| `MODYO_URL` | Sí | URL de la plataforma (por ejemplo, `https://your-org.modyo.com`) |
| `MODYO_TOKEN` | Sí | Token de admin obtenido desde Modyo Admin → Settings → API Access |
| `MODYO_PLATFORM_NAME` | No | Nombre visible de la plataforma (por defecto: `"default"`) |
| `MODYO_MCP_MODULES` | No | Lista separada por comas de módulos a activar (`core`, `content`, `channels`, `customers`, `widgets`). Sin definir, todos activos. Un valor inválido detiene el arranque con un error explícito. |
| `MODYO_READ_ONLY` | No | Con `true` (valor exacto), el server no ejecuta ninguna mutación contra la plataforma, aunque el token tenga permisos de escritura. |
| `MODYO_DEFAULT_SITE_THEME` | No | ID numérico del theme usado al crear un site sin `theme` explícito (por defecto: `208`, específico del tenant). |
| `DEBUG` | No | Habilita logs de debug si se asigna `true` o `1` |

Sin `MODYO_URL` y `MODYO_TOKEN`, el server arranca en **modo público** y expone únicamente las capacidades que no requieren autenticación. Útil para explorar herramientas y recursos disponibles sin conectarse aún a una plataforma.

## Filtrado de módulos y modo read-only

El server puede levantarse con una superficie reducida de capacidades. Dos variables de entorno controlan esto y se pueden combinar entre sí.

### Filtrado de módulos con `MODYO_MCP_MODULES`

Define qué módulos se activan mediante una lista separada por comas. Valores válidos: `core`, `content`, `channels`, `customers`, `widgets`. Sin la variable, todos los módulos quedan activos (comportamiento por defecto).

El filtro aplica a **tools, resources, prompts y el bloque `instructions`** del handshake inicial. Los resources transversales (documentación, `platforms://list`, `modyo://context/agent-rules`) permanecen siempre disponibles aunque su módulo esté filtrado — son información pura, sin ejecución. Los **workflow prompts** declaran los módulos que requieren y solo se exponen si todos están activos (por ejemplo, `modyo-create-blog` requiere `channels` y `content`).

Un valor inválido detiene el arranque con exit code 1 y un mensaje explícito (fail-loud intencional):

```
Error: Invalid module(s) in MODYO_MCP_MODULES: 'widgetz'.
Valid values: core, content, channels, customers, widgets.
```

Log de startup con el filtrado activo (ejemplo con `MODYO_MCP_MODULES=widgets`):

```
Module filtering active. Modules enabled: widgets. Filtered out: core, content, channels, customers.
Tools: 5 (filtered from 80). Resources: 8 (filtered from 11). Prompts: 1 (filtered from 9).
```

### Modo read-only con `MODYO_READ_ONLY`

Con el valor exacto `true`, el server garantiza que **no ejecuta ninguna mutación** contra la plataforma, aunque el token tenga permisos de escritura. Cualquier otro valor (o la ausencia de la variable) equivale al comportamiento normal. El caso de uso principal es auditar o explorar sitios de clientes en producción sin riesgo de modificarlos.

El mecanismo opera en dos capas:

1. Las tools de propósito único de escritura o borrado **no se registran** — no aparecen en `tools/list`.
2. Las tools multi-acción (`*-manage`) quedan registradas pero **gatean por acción**: solo `list`, `get`, `search` y `find` ejecutan (y `manage` sin campos mutantes, que actúa como un `get`). El resto recibe un rechazo estructurado (`readOnly: true, rejected: ...`), no un error.

Log de startup en modo read-only:

```
Read-only mode active (MODYO_READ_ONLY). Read tools exposed: 20. Multi-action tools gated: 25. Write/destroy tools skipped: 35.
```

### Combinación de ambas variables

Las dos variables componen. Conteos reales de `tools/list` según la configuración:

| Configuración | Tools expuestas |
|---|---|
| Sin variables | 80 |
| `MODYO_MCP_MODULES=widgets` | 5 |
| `MODYO_READ_ONLY=true` | 45 |
| Ambas (`widgets` + read-only) | 4 |

Para auditar un site sin riesgo de modificarlo, la combinación recomendada es `MODYO_MCP_MODULES=channels` + `MODYO_READ_ONLY=true`.

## Capacidades Disponibles

El server expone tres tipos de capacidades MCP: **tools** (acciones invocables por el agente), **resources** (documentación y datos consultables vía URI) y **prompts** (workflows guiados multi-paso).

### Módulos cubiertos

| Módulo | Cobertura |
|--------|-----------|
| **Core** | Equipos, usuarios admin, grupos, roles, settings de plataforma |
| **Content** | Spaces, content types, entries, assets, categorías, jobs asíncronos |
| **Channels** | Sites, páginas, widgets, templates Liquid, releases, navegación, variables globales |
| **Customers** | Realms, usuarios finales, segments, forms, submissions, originations |
| **Widgets** | Generación de widgets transaccionales (React + Dynamic UI): scaffolding desde el template canonical, catálogo de componentes y patterns del Storybook, validación |

### Tools

Las tools siguen la convención de naming `{módulo}-{recurso}-{acción}`. Por ejemplo, `content-spaces-manage`, `channels-pages-create`, `customers-realms-manage`. La mayoría sigue uno de estos patrones:

- `*-list` — Listar recursos con paginación y filtros
- `*-get` — Obtener un recurso individual por ID, slug, o UUID
- `*-manage` — Crear, actualizar, eliminar (un toolset CRUD condensado)
- `*-upsert` — Crear o actualizar (idempotente)
- `*-bulk` — Operaciones por lotes (asíncronas)
- `*-copy` — Clonar recursos preservando relaciones

#### Resumen por módulo

**Core** (~9 tools): `core-groups-manage`, `core-groups-upsert`, `core-members-manage`, `core-roles-create`, `core-roles-manage`, `core-settings-manage`, `core-users-bulk`, `core-users-manage`, `core-users-upsert`.

**Content** (~22 tools): gestión de `content-spaces-*`, `content-types-*`, `content-entries-*`, `content-assets-*`, `content-categories-*`, más `content-jobs-manage` para tareas asíncronas.

**Channels** (~27 tools): gestión de `channels-sites-*`, `channels-pages-*` (incluyendo `channels-pages-content` y `channels-pages-widget` para el contenido vs. la configuración), `channels-widgets-*` (incluyendo `channels-widgets-code-edit` para edición quirúrgica del código de un widget definition), `channels-templates-*` (incluye `channels-templates-find`, `channels-templates-search`, `channels-templates-replace`), `channels-menus-*`, `channels-menu-items-manage`, `channels-variables-manage`, `channels-locks-manage`, `channels-publish`, `channels-preview`, `channels-download`, `channels-site-assets-manage`, `channels-account-templates-manage`.

**Customers** (~17 tools): gestión de `customers-realms-*`, `customers-users-*`, `customers-segments-manage`, `customers-forms-*`, `customers-submissions-*`, `customers-datasets-*`, `customers-originations-*` (incluyendo validación y clonado de steps).

**Widgets** (5 tools): `widgets-list-components`, `widgets-get-component-props`, `widgets-list-patterns` (federan el catálogo del Storybook de Dynamic UI), `widgets-scaffold` (inicializa un proyecto de widget nuevo desde el template canonical) y `widgets-validate` (corre `@modyo/widget-validator` y devuelve un reporte con score).

:::tip Documentación inline
Cada tool incluye un link `📚 modyo://docs/tools/{toolPath}` en su descripción que el agente puede leer para detalles de parámetros, ejemplos y restricciones. Pídele al agente "lee la doc de la tool X" si quieres ver los detalles antes de invocarla.
:::

### Resources

Los resources son URIs que el agente puede leer para consultar información estructurada:

| URI | Descripción |
|-----|-------------|
| `platforms://list` | Lista de plataformas configuradas (Modyo MCP soporta multi-plataforma) |
| `modyo://context/agent-rules` | Reglas operativas para el agente (seguridad, IDs vs UUIDs, patrones recurrentes) |
| `modyo://docs/tools/{toolPath}` | Documentación de cada tool individual |
| `modyo://docs/widgets/{docPath}` | Guía de generación de widgets (entry point `modyo://docs/widgets/INDEX`) |
| `modyo://liquid-reference` | Referencia completa de tags, filtros y drops de Liquid en Modyo |
| `modyo-spaces://list` | Lista de spaces de Content |
| `modyo-realms://list` | Lista de realms de Customers |
| `modyo://widgets/catalog/components` | Lista liviana de componentes (id, name, key, descripción, storyCount) |
| `modyo://widgets/catalog/components/{componentId}` | Detalle completo del componente (stories con código, props con tipos TS) |
| `modyo://widgets/catalog/patterns` | Lista liviana de patterns oficiales |
| `modyo://widgets/catalog/patterns/{patternId}` | Contenido MDX completo del pattern |

Los resources de documentación (`modyo://docs/...`) son transversales: están disponibles aunque su módulo esté filtrado con `MODYO_MCP_MODULES`.

### Prompts

Los prompts son workflows guiados multi-paso. Al invocar un prompt, el agente ejecuta una secuencia de tools en orden y pide confirmación en los puntos de decisión.

| Prompt | Workflow |
|--------|----------|
| `modyo-setup-site` | Crear un site nuevo: configurar dominio, layout base, páginas iniciales |
| `modyo-create-space` | Crear un space de Content con su estructura base |
| `modyo-create-blog` | Crear un space tipo blog con type "Post" y entradas iniciales |
| `modyo-create-content-page` | Crear una página de listado de entries de un content type |
| `modyo-create-widget-page` | Crear una página que aloja un widget definition |
| `modyo-create-widget-definition` | Crear un widget definition con código inicial |
| `modyo-manage-templates` | Editar templates Liquid (layouts, snippets, stylesheets) de un site |
| `modyo-manage-releases` | Revisar cambios pendientes y publicar un release |
| `widgets-init-project` | Inicializar un proyecto de widget nuevo (React + Dynamic UI) desde el template canonical, vía la tool `widgets-scaffold` |

Los prompts ligados a un módulo solo aparecen cuando su módulo está activo (ver [Filtrado de módulos](#filtrado-de-modulos-y-modo-read-only)).

## Generación de widgets

El módulo Widgets permite generar widgets transaccionales (React + Dynamic UI) de forma asistida. El punto de entrada es `widgets-scaffold`, que crea un proyecto de widget nuevo clonando el template canonical (`dynamic-framework/dynamic-react-vite-base-template`) al tag pineado por la matriz de compatibilidad del server.

### Flujo de dos pasos

1. El operador invoca el prompt `widgets-init-project` (slash command del cliente MCP), cuyo único efecto es que el agente ejecute `widgets-scaffold`.
2. El operador entrega la descripción funcional del widget en el turno siguiente. El agente no escribe código de widget antes de recibirla.

`widgets-scaffold` recibe dos argumentos: `name` (kebab-case estricto; es un **nombre de proyecto**, nunca una descripción de feature) y `targetDir` (opcional; directorio padre donde se crea `./<name>/`). Su secuencia determinista es: clone al tag pineado → elimina la historia git del template → `git init` + commit inicial → renombra `package.json` → `npm install`.

### Precondiciones fail-closed

La tool falla cerrada, sin tocar nada, si:

- El directorio destino ya existe.
- El destino está **en cualquier punto dentro de otro proyecto de widget** (raíz o subdirectorio — detecta `@dynamic-framework/ui-react` en las dependencias de cualquier ancestro).
- `targetDir` no existe o no es un directorio.
- Git no está disponible.

La garantía diferenciadora es el **anti-anidamiento**: nunca crea un widget dentro de otro ni reinterpreta el nombre como una feature de un widget existente.

### Validación y deploy

El flujo termina en validación con `widgets-validate` (reporte con score; objetivo ≥ 95%) más un smoke test local (`npm run dev`).

**El deploy no es una operación del MCP.** Para llevar el widget a Modyo hay dos caminos, ambos fuera del agente:

- **CI desde el repo del widget** (el scaffold inicializa git justamente para habilitar este camino).
- **`modyo-cli push` manual y explícito** del developer en su shell.

El agente nunca pushea y nunca lee credenciales (`MODYO_TOKEN`, `.env`, `.modyo`).

:::tip Matriz de compatibilidad
La fuente de verdad de las versiones es el server. Valores actuales de referencia: Dynamic UI `2.6.0`, template `v1.1.0`, validator `0.2.0`.
:::

## Ejemplos de Uso

Una vez configurado el server, puedes conversar con el agente en lenguaje natural. Ejemplos:

**Exploración**:

> "Lista todos los spaces de mi plataforma"
> "¿Qué páginas tiene el site con ID 5?"
> "Muéstrame los content types del space `blog`"

**Creación**:

> "Crea un content type llamado 'Products' con campos `name` (string), `price` (number) y `description` (rich text)"
> "Crea una página `/about` en el site `marketing` usando el layout `base`"
> "Genera 10 entradas de ejemplo en el content type `Products`"

**Edición**:

> "Actualiza el menú principal del site 5: agrega un item 'Contact' que apunte a `/contact`"
> "Cambia el color primario en el `root.css` del site `marketing` a `#ff6600`"

**Publicación**:

> "Muéstrame los cambios pendientes en el site 5 y publícalos"
> "Despublica temporalmente la página `/promo-2024` del site `marketing`"

**Gestión de usuarios**:

> "Crea un usuario admin `juan@empresa.com` con rol `site editor` en el site `marketing`"
> "Lista los usuarios del realm `customers-prod` que se registraron esta semana"

**Generación de widgets** (flujo de dos pasos):

*Paso 1 — invocar el prompt del cliente* (no una frase en lenguaje natural):

    /mcp__modyo__widgets-init-project transfer-detail

La sintaxis depende del cliente (en OpenCode es `/modyo:widgets-init-project transfer-detail`); sin el argumento, el agente pregunta el nombre. El agente ejecuta `widgets-scaffold`: crea `./transfer-detail/` bajo el directorio de trabajo — para otra ubicación, menciónala en la conversación — y se detiene, sin inspeccionar ni tocar otros widgets de la carpeta.

*Paso 2 — describir la funcionalidad, en el turno siguiente:*

> "El widget muestra el detalle de una transferencia: monto, fecha, origen, destino y estado, con acciones para repetir o agendar"

Recién con esta descripción el agente consulta el catálogo de patterns y genera el código.

::: warning El slash command es deliberado
"Inicializa un widget" en lenguaje natural es ambiguo (puede interpretarse como un widget definition de Channels) y deja al criterio del agente no explorar ni modificar widgets existentes. El prompt elimina ambas ambigüedades.
:::

**Auditoría sin riesgo** (requiere levantar el server con `MODYO_MCP_MODULES=channels` + `MODYO_READ_ONLY=true`):

> "Audita el site 5: revisa páginas, widgets y templates sin modificar nada"

## Troubleshooting

### Error "Platform not configured"

```bash
# Verifica que las variables de entorno estén configuradas
echo $MODYO_URL
echo $MODYO_TOKEN

# Prueba el token directamente contra la API
curl -H "Authorization: Bearer $MODYO_TOKEN" "$MODYO_URL/api/admin/account"
```

Si el `curl` falla, regenera el token desde Modyo Admin → Settings → API Access.

### El server no arranca tras configurar módulos

Si definiste `MODYO_MCP_MODULES` y el server termina inmediatamente con exit code 1 y un mensaje como:

```
Error: Invalid module(s) in MODYO_MCP_MODULES: 'widgetz'.
Valid values: core, content, channels, customers, widgets.
```

la causa es un typo o un valor no soportado en la lista. El fail-loud es intencional: corrige el valor (los válidos son `core`, `content`, `channels`, `customers`, `widgets`) y vuelve a iniciar.

### Una tool devuelve `readOnly: true, rejected: ...`

El server está corriendo con `MODYO_READ_ONLY=true`. Es un rechazo controlado, no un bug: en modo read-only las acciones mutantes se bloquean aunque el token tenga permisos de escritura. Si necesitas ejecutar la mutación, reinicia el server sin esa variable.

### El agente no detecta las tools después de instalar

Reinicia el cliente IA (Claude Desktop, Cursor, VS Code, etc.). El descubrimiento de tools ocurre al iniciar el server, no en runtime.

Para Claude Code, usa `claude mcp list` para confirmar que el server está registrado.

### Gemini CLI — la autenticación falla silenciosamente

Gemini CLI filtra las variables de entorno que coinciden con `*TOKEN*` antes de pasarlas al MCP server. Asegúrate de declarar `MODYO_TOKEN` explícitamente en el bloque `env` del `settings.json`, no solo de exportarla en el shell.

### GitHub Copilot CLI — error `CAPIError: 400` después de tool calls

La auto-compactación de Copilot CLI puede corromper el historial de mensajes durante respuestas grandes de tool calls. Es un [bug conocido del CLI](https://github.com/github/copilot-cli/issues/1050), no un problema del server.

Workarounds:

- Inicia una sesión nueva: `rm -rf ~/.copilot/session-state && copilot --allow-all-tools`
- Mantén las respuestas pequeñas — pídele al agente campos específicos en lugar de objetos completos. Por ejemplo: *"lista los sites, devuélveme solo id, name y host"*.

### Habilitar logs de debug

Agrega `DEBUG=true` (o `DEBUG=1`) al bloque `env` de la configuración del cliente. Los logs se escriben en `stderr` y son visibles en la consola del cliente IA si soporta mostrarlos.

## Recursos

- Paquete NPM: [`@modyo/mcp`](https://www.npmjs.com/package/@modyo/mcp)
- Especificación MCP: [modelcontextprotocol.io](https://modelcontextprotocol.io)
- Otras herramientas Modyo: [CLI](/es/platform/tools/cli.html), [SDK](/es/platform/tools/sdk.html)
