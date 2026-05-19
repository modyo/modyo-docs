---
search: true
---

# Modyo MCP

El [Model Context Protocol (MCP)](https://modelcontextprotocol.io) es un estándar abierto para comunicar asistentes de inteligencia artificial con herramientas y fuentes de datos externas. El **Modyo MCP Server** implementa este protocolo sobre la API de administración de Modyo, permitiendo que un agente IA gestione contenido, sitios, widgets, customers, y administración de la plataforma usando lenguaje natural.

Distribuido como paquete NPM ([`@modyo/mcp`](https://www.npmjs.com/package/@modyo/mcp)), funciona con cualquier cliente compatible con MCP (Claude Desktop, Claude Code, Cursor, GitHub Copilot, Gemini CLI, etc.).

:::warning Atención — Permisos
El MCP server opera con los mismos permisos que el usuario administrador asociado al `MODYO_TOKEN`. Un agente con acceso a este token puede crear, modificar y eliminar contenido, sitios, widgets, usuarios y configuraciones de la plataforma. **Usa un token con el alcance mínimo necesario** y revisa las acciones del agente antes de aprobar operaciones destructivas (eliminación de páginas, despublicación masiva, borrado de realms o usuarios). Si trabajas en producción, considera crear un usuario admin dedicado con un rol acotado y rotar el token periódicamente.
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

## Variables de Entorno

| Variable | Requerida | Descripción |
|----------|-----------|-------------|
| `MODYO_URL` | Sí | URL de la plataforma (por ejemplo, `https://your-org.modyo.com`) |
| `MODYO_TOKEN` | Sí | Token de admin obtenido desde Modyo Admin → Settings → API Access |
| `MODYO_PLATFORM_NAME` | No | Nombre visible de la plataforma (por defecto: `"default"`) |
| `DEBUG` | No | Habilita logs de debug si se asigna `true` o `1` |

Sin `MODYO_URL` y `MODYO_TOKEN`, el server arranca en **modo público** y expone únicamente las capacidades que no requieren autenticación. Útil para explorar herramientas y recursos disponibles sin conectarse aún a una plataforma.

## Capacidades Disponibles

El server expone tres tipos de capacidades MCP: **tools** (acciones invocables por el agente), **resources** (documentación y datos consultables vía URI) y **prompts** (workflows guiados multi-paso).

### Módulos cubiertos

| Módulo | Cobertura |
|--------|-----------|
| **Core** | Equipos, usuarios admin, grupos, roles, settings de plataforma |
| **Content** | Spaces, content types, entries, assets, categorías, jobs asíncronos |
| **Channels** | Sites, páginas, widgets, templates Liquid, releases, navegación, variables globales |
| **Customers** | Realms, usuarios finales, segments, forms, submissions, originations |

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

**Channels** (~26 tools): gestión de `channels-sites-*`, `channels-pages-*` (incluyendo `channels-pages-content` y `channels-pages-widget` para el contenido vs. la configuración), `channels-widgets-*`, `channels-templates-*` (incluye `channels-templates-find`, `channels-templates-search`, `channels-templates-replace`), `channels-menus-*`, `channels-menu-items-manage`, `channels-variables-manage`, `channels-locks-manage`, `channels-publish`, `channels-preview`, `channels-download`, `channels-site-assets-manage`, `channels-account-templates-manage`.

**Customers** (~17 tools): gestión de `customers-realms-*`, `customers-users-*`, `customers-segments-manage`, `customers-forms-*`, `customers-submissions-*`, `customers-datasets-*`, `customers-originations-*` (incluyendo validación y clonado de steps).

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
| `modyo://liquid-reference` | Referencia completa de tags, filtros y drops de Liquid en Modyo |
| `modyo-spaces://list` | Lista de spaces de Content |
| `modyo-realms://list` | Lista de realms de Customers |

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

- Repositorio: [github.com/modyo/modyo-mcp-server](https://github.com/modyo/modyo-mcp-server)
- Paquete NPM: [`@modyo/mcp`](https://www.npmjs.com/package/@modyo/mcp)
- Especificación MCP: [modelcontextprotocol.io](https://modelcontextprotocol.io)
- Otras herramientas Modyo: [CLI](/es/platform/tools/cli.html), [SDK](/es/platform/tools/sdk.html)
