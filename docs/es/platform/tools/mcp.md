---
search: true
---

# Modyo MCP

## Qué es

El [Model Context Protocol (MCP)](https://modelcontextprotocol.io) es un estándar abierto para conectar asistentes de inteligencia artificial con herramientas y fuentes de datos. El **Modyo MCP Server** conecta un asistente de IA con la API de administración de Modyo, para gestionar la plataforma (contenido, sitios, widgets, customers y administración) y para construir widgets con Dynamic Framework, conversando en lenguaje natural.

Se distribuye como el paquete npm [`@modyo/mcp`](https://www.npmjs.com/package/@modyo/mcp) y corre como un proceso local que el cliente de IA lanza por stdio. Esta página describe la versión 0.5.10.

## Requisitos

- Node.js 22 o superior.
- Una instancia de Modyo.
- Un token de administrador, que se crea en Modyo Admin → Settings → API Access. El MCP opera con los permisos del usuario dueño del token (ver [Permisos del token](#permisos-del-token)).

## Instalación

El cliente lanza el server con el comando `npx -y @modyo/mcp` y le pasa las variables de entorno `MODYO_URL` y `MODYO_TOKEN`. La instalación consiste en registrar ese comando en la configuración del cliente.

| Cliente | Dónde se configura | Documentación del cliente |
|---|---|---|
| Claude Code | Comando `claude mcp add` | [Claude Code: MCP](https://code.claude.com/docs/en/mcp) |
| Claude Desktop | `claude_desktop_config.json` | [Connect to local MCP servers](https://modelcontextprotocol.io/docs/develop/connect-local-servers) |
| Cursor | `~/.cursor/mcp.json` | [Cursor: MCP](https://cursor.com/docs/context/mcp) |
| GitHub Copilot en VS Code | `MCP: Add Server` → `~/.copilot/mcp-config.json` | [Add MCP servers in VS Code](https://code.visualstudio.com/docs/copilot/customization/mcp-servers) |
| GitHub Copilot CLI | Comando `copilot mcp add` → `~/.copilot/mcp-config.json` | [Adding MCP servers to Copilot CLI](https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/add-mcp-servers) |
| Otros clientes | Según el cliente | Ver [Otros clientes](#otros-clientes) |

En los ejemplos, reemplaza `https://my-company.modyo.cloud` por la URL de tu plataforma y `your-admin-token` por tu token.

### Claude Code

```bash
claude mcp add modyo --scope user \
  --env MODYO_URL=https://my-company.modyo.cloud \
  --env MODYO_TOKEN=your-admin-token \
  -- npx -y @modyo/mcp
```

Con `--scope user`, el server queda disponible en todos tus proyectos y la configuración se guarda en `~/.claude.json`, fuera de cualquier repositorio. Las opciones `--env` van después del nombre del server y antes de `--`.

Para verificar el registro:

```bash
claude mcp list
```

El server aparece como `modyo: npx -y @modyo/mcp - ✔ Connected`. Dentro de una sesión, `/mcp` muestra el server y su cantidad de tools.

Para compartir la configuración con un equipo a través del repositorio, crea un `.mcp.json` en la raíz del proyecto que lea las credenciales del entorno de cada persona, sin escribirlas en el archivo:

```json
{
  "mcpServers": {
    "modyo": {
      "command": "npx",
      "args": ["-y", "@modyo/mcp"],
      "env": {
        "MODYO_URL": "${MODYO_URL}",
        "MODYO_TOKEN": "${MODYO_TOKEN}"
      }
    }
  }
}
```

Claude Code reemplaza `${MODYO_URL}` y `${MODYO_TOKEN}` con las variables de entorno de la sesión. La primera vez que se abre el proyecto, el server aparece como `⏸ Pending approval` hasta que lo apruebas.

### Claude Desktop

En Claude Desktop, abre **Settings** → **Developer** → **Edit Config**. Se abre (o se crea) `claude_desktop_config.json`:

- **macOS:** `~/Library/Application Support/Claude/claude_desktop_config.json`
- **Windows:** `%APPDATA%\Claude\claude_desktop_config.json`

```json
{
  "mcpServers": {
    "modyo": {
      "command": "npx",
      "args": ["-y", "@modyo/mcp"],
      "env": {
        "MODYO_URL": "https://my-company.modyo.cloud",
        "MODYO_TOKEN": "your-admin-token"
      }
    }
  }
}
```

Si el archivo ya tiene otros servers, agrega solo la entrada `modyo` dentro de `mcpServers`. Guarda, cierra Claude Desktop por completo y vuelve a abrirlo. El server y sus tools aparecen en **Connectors** → **Manage connectors**.

### Cursor

Edita `~/.cursor/mcp.json` para todos tus proyectos, o `.cursor/mcp.json` para un proyecto:

```json
{
  "mcpServers": {
    "modyo": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@modyo/mcp"],
      "env": {
        "MODYO_URL": "https://my-company.modyo.cloud",
        "MODYO_TOKEN": "your-admin-token"
      }
    }
  }
}
```

El server se habilita y se revisa desde **Customize** en la barra lateral de Cursor.

### GitHub Copilot en VS Code

1. Abre la paleta de comandos y ejecuta **MCP: Add Server**.
2. Elige **Command (stdio)** e ingresa `npx -y @modyo/mcp` como comando.
3. Cuando el flujo pida el nombre, escribe `modyo`. Si no lo escribes, VS Code asigna un nombre genérico.
4. Como destino, elige **Global** → **Copilot Global**.

VS Code guarda el server en `~/.copilot/mcp-config.json`. Es el mismo archivo que usa [GitHub Copilot CLI](#github-copilot-cli): un server agregado en uno aparece en el otro. Agrega las credenciales en un bloque `env` dentro de la entrada:

```json
{
  "mcpServers": {
    "modyo": {
      "tools": ["*"],
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@modyo/mcp"],
      "env": {
        "MODYO_URL": "https://my-company.modyo.cloud",
        "MODYO_TOKEN": "your-admin-token"
      }
    }
  }
}
```

Para iniciar el server, ejecuta **MCP: List Servers**, elige `modyo` y luego **Start Server**. Las tools se ven en el chat, en modo **Agent**, con **Configure Tools**.

:::tip Límite de tools en VS Code
Una solicitud del chat de VS Code admite hasta 128 tools habilitadas. Si usas el Modyo MCP junto con otros servers, puedes limitar sus módulos con [`MODYO_MCP_MODULES`](#filtrado-por-modulos).
:::

### GitHub Copilot CLI

```bash
copilot mcp add modyo \
  --env MODYO_URL=https://my-company.modyo.cloud \
  --env MODYO_TOKEN=your-admin-token \
  -- npx -y @modyo/mcp
```

Las opciones `--env` van antes de `--`. El subcomando `copilot mcp` requiere una versión reciente de Copilot CLI: si tu versión no lo reconoce, actualiza el CLI.

El server queda en `~/.copilot/mcp-config.json`, el mismo archivo que usa [GitHub Copilot en VS Code](#github-copilot-en-vs-code). Para verificarlo, dentro de una sesión de Copilot CLI ejecuta `/mcp show modyo`: muestra el estado del server y sus tools.

### Otros clientes

Cualquier cliente MCP que lance servers locales por stdio se configura con los mismos tres datos. El formato del archivo depende de cada cliente: consulta su documentación.

```
command: npx
args: ["-y", "@modyo/mcp"]
env:
  MODYO_URL: https://my-company.modyo.cloud
  MODYO_TOKEN: your-admin-token
```

Algunos clientes no pasan al server las variables de entorno de tu terminal, o descartan las que parecen secretos, como las que contienen `TOKEN`. Declara `MODYO_URL` y `MODYO_TOKEN` en la configuración del server, no solo en tu terminal.

## Configuración

El server se configura con variables de entorno, en el bloque `env` del cliente.

| Variable | Requerida | Descripción |
|---|---|---|
| `MODYO_URL` | Sí | URL de la plataforma, por ejemplo `https://my-company.modyo.cloud`. |
| `MODYO_TOKEN` | Sí | Token de administrador (Modyo Admin → Settings → API Access). |
| `MODYO_PLATFORM_NAME` | No | Nombre visible de la plataforma. Por defecto, `default`. |
| `MODYO_MCP_MODULES` | No | Módulos activos, separados por comas: `core`, `content`, `channels`, `customers`, `widgets`. Sin definir, todos. Ver [Filtrado por módulos](#filtrado-por-modulos). |
| `MODYO_READ_ONLY` | No | Con el valor exacto `true`, activa el modo de solo lectura. Ver [Modo de solo lectura](#modo-de-solo-lectura). |
| `MODYO_DEFAULT_SITE_THEME` | No | ID del theme que se usa al crear un sitio sin indicar uno. Por defecto, `208`; el ID que corresponde depende de tu instancia. El theme solo se aplica al crear el sitio. |
| `DEBUG` | No | Con `true` o `1`, el server escribe registros de depuración en stderr, con los valores sensibles ocultos. |

### Sin credenciales

Sin `MODYO_URL` y `MODYO_TOKEN`, el server arranca igual y lista todas sus tools, resources y prompts. Al arrancar, escribe en su log:

```
No platform configured. Set MODYO_URL and MODYO_TOKEN environment variables.
```

Las tools del módulo Widgets funcionan sin credenciales. Las demás responden con un error:

```
Platform not configured. Set MODYO_URL and MODYO_TOKEN environment variables.
```

## Seguridad y control

### Permisos del token

:::warning Permisos
El MCP opera con los mismos permisos que el usuario administrador dueño del `MODYO_TOKEN`. Un agente con ese token puede crear, modificar y eliminar contenido, sitios, widgets, usuarios y configuraciones. **Usa el token de un usuario con los permisos mínimos necesarios** y revisa las acciones del agente antes de aprobar operaciones destructivas. En producción, considera un usuario administrador dedicado con un rol acotado.
:::

Los tokens de la API de administración no caducan y la plataforma no los renueva: el `MODYO_TOKEN` sigue siendo válido hasta que alguien lo elimina desde la consola. Rotarlo es una tarea manual. Ver [Ciclo de vida del token de acceso](/es/platform/core/api.html#ciclo-de-vida-del-token-de-acceso).

### Modo de solo lectura

Con `MODYO_READ_ONLY=true`, el server no ejecuta ningún cambio en la plataforma, aunque el token tenga permisos de escritura. Cualquier otro valor, o la ausencia de la variable, equivale al comportamiento normal. Sirve para auditar o explorar un sitio en producción sin riesgo de modificarlo.

Funciona en dos capas:

1. Las tools que solo escriben o eliminan no se registran: el cliente no las ve.
2. Las tools que agrupan varias acciones (por ejemplo, las `*-manage`) siguen disponibles, pero solo ejecutan las acciones de lectura: `list`, `get`, `search`, `find` y `status`. La acción `manage` sin campos que cambien algo actúa como una lectura.

Una acción rechazada no es un error (`isError: false`). La respuesta trae el rechazo en `control`:

```json
{
  "control": {
    "readOnly": true,
    "rejected": "create",
    "reason": "Server running in read-only mode (MODYO_READ_ONLY). Only read actions are permitted."
  }
}
```

Los prompts siguen listados en modo de solo lectura, pero los pasos que escriben quedan rechazados.

### Filtrado por módulos

`MODYO_MCP_MODULES` define qué módulos se activan, con una lista separada por comas. Valores válidos: `core`, `content`, `channels`, `customers`, `widgets`. Sin la variable, todos los módulos quedan activos.

El filtro aplica a las tools, los resources, los prompts y las instrucciones que el server envía al agente. Los resources transversales (`platforms://list`, `modyo://context/agent-rules` y la guía de widgets) siguen disponibles con cualquier filtro. Un prompt que necesita dos módulos solo aparece si los dos están activos: `modyo-create-blog` requiere `channels` y `content`.

Un valor inválido detiene el arranque con un mensaje explícito:

```
Error: Invalid module(s) in MODYO_MCP_MODULES: 'widgetz'.
Valid values: core, content, channels, customers, widgets.
```

### Combinaciones

Las dos variables se combinan. Para auditar un sitio sin riesgo de modificarlo, usa `MODYO_MCP_MODULES=channels` con `MODYO_READ_ONLY=true`:

```json
"env": {
  "MODYO_URL": "https://my-company.modyo.cloud",
  "MODYO_TOKEN": "your-admin-token",
  "MODYO_MCP_MODULES": "channels",
  "MODYO_READ_ONLY": "true"
}
```

Tools que lista el cliente según la configuración, en la versión 0.5.10:

| Configuración | Tools |
|---|---|
| Sin variables | 82 |
| `MODYO_READ_ONLY=true` | 48 |
| `MODYO_MCP_MODULES=widgets` | 5 |
| `MODYO_MCP_MODULES=widgets` y `MODYO_READ_ONLY=true` | 4 |
| `MODYO_MCP_MODULES=channels` y `MODYO_READ_ONLY=true` | 16 |

El log de arranque confirma la configuración activa. Con `MODYO_MCP_MODULES=widgets`:

```
Module filtering active. Modules enabled: widgets. Filtered out: core, content, channels, customers.
Tools: 5 (filtered from 82). Resources: 7 (filtered from 10). Prompts: 1 (filtered from 9).
```

En esa línea, "Resources" cuenta juntos los resources y los resource templates. Con `MODYO_READ_ONLY=true`:

```
Read-only mode active (MODYO_READ_ONLY). Read tools exposed: 22. Multi-action tools gated: 26. Write/destroy tools skipped: 34.
```

### Confirmación de borrados

Las tools que eliminan recursos piden confirmación:

- En clientes con confirmación interactiva, la tool pide confirmar antes de borrar. Si la confirmación vence o falla, no borra.
- En clientes sin confirmación interactiva, una llamada sin `confirmed: true` no ejecuta nada y responde lo que borraría, en `control.aborted`. Para ejecutar el borrado, se repite la llamada con `confirmed: true`.

Archivar una definición de widget también pide confirmación, porque elimina sus instancias de las páginas del sitio.

### Respuestas de las escrituras

- **Lo que quedó guardado.** Después de escribir, las tools vuelven a leer el recurso y responden ese estado. Si un campo pedido no quedó guardado, responden `FIELDS_NOT_PERSISTED` o `UNSUPPORTED_FIELD`. Un parámetro que la acción no usa vuelve en `ignored`.
- **Operaciones en segundo plano.** Las que continúan en la plataforma responden `queued` o `deletion_started`.
- **Identificadores exactos.** Las acciones que escriben o eliminan resuelven el recurso solo por id, UUID, path o slug exactos. Una lectura con varios candidatos responde `AMBIGUOUS_IDENTIFIER` con la lista. En una entrada con varias traducciones, la tool pide el idioma (`LOCALE_REQUIRED`).

## Qué puede hacer

El server expone tres tipos de capacidades: **tools** (acciones que el agente ejecuta), **resources** (información que el agente consulta por URI) y **prompts** (flujos guiados que la persona invoca). El cliente lista el detalle de cada una: cada tool trae su descripción y su `inputSchema`, que el agente lee antes de usarla.

Las tools siguen la convención `{módulo}-{recurso}-{acción}`, por ejemplo `content-spaces-list` o `channels-pages-create`.

### Core

Administración de la cuenta: usuarios administradores, grupos, roles, membresías y configuración de la plataforma.

- `core-groups-manage`: crea, actualiza, elimina y lista grupos de administradores, y agrega o quita usuarios de un grupo.
- `core-groups-upsert`: crea o actualiza un grupo por su nombre, con su lista completa de usuarios.
- `core-members-manage`: asigna, cambia o quita usuarios y grupos en sitios, spaces y realms, y lista los miembros con su rol.
- `core-roles-create`: crea un rol, con grupos de permisos opcionales.
- `core-roles-manage`: lista los roles por contexto: cuenta, sitio, space o realm.
- `core-settings-manage`: actualiza la configuración de la plataforma: nombre, host, idioma, CORS, logo, favicon, sitio por defecto, archivos SEO y colores del administrador.
- `core-users-bulk`: activa o desactiva administradores en lote.
- `core-users-manage`: crea, actualiza y lista administradores, consulta sus sesiones y muestra el usuario del token.
- `core-users-upsert`: crea o actualiza un administrador, que se busca por email o nombre de usuario.

### Content

Spaces, tipos de contenido, categorías, entradas y assets.

- `content-spaces-list`: lista los spaces de la plataforma.
- `content-spaces-get`: muestra un space con su configuración e idiomas.
- `content-spaces-manage`: crea, actualiza y elimina spaces, y asigna un realm a un space que no tiene.
- `content-spaces-copy`: clona un space completo: tipos de contenido, categorías, entradas en cada idioma (como borradores) y assets.
- `content-types-list`: lista los tipos de contenido de un space.
- `content-types-get`: muestra el esquema de un tipo de contenido con sus campos.
- `content-types-manage`: gestiona el esquema de un tipo de contenido y agrega o quita campos.
- `content-types-upsert`: crea o actualiza un tipo de contenido por su UID.
- `content-types-copy`: copia un tipo de contenido a otro space, con o sin sus entradas.
- `content-categories-list`: lista las categorías de un space con su jerarquía.
- `content-categories-get`: muestra una categoría y su lugar en la jerarquía.
- `content-categories-manage`: crea, consulta, actualiza, elimina y lista categorías.
- `content-entries-list`: lista las entradas de un space.
- `content-entries-get`: muestra una traducción de una entrada con sus valores.
- `content-entries-manage`: crea, actualiza, traduce, publica, despublica, archiva, restaura, clona y elimina entradas.
- `content-entries-upsert`: crea o actualiza una entrada por su slug, en un tipo de contenido y un idioma.
- `content-entries-bulk`: publica, despublica, archiva, restaura o elimina entradas en lote, en un idioma.
- `content-assets-list`: lista los assets de un space.
- `content-assets-get`: muestra un asset con sus metadatos y su URL.
- `content-assets-manage`: consulta y actualiza los metadatos de un asset, reemplaza su archivo, lo elimina o lista assets.
- `content-assets-bulk`: sube varios assets a la vez.
- `content-jobs-manage`: consulta el estado de las copias de spaces y las descargas de sitios iniciadas desde el MCP.

### Channels

Sitios, páginas, templates, definiciones de widget, menús, variables y publicación.

- `channels-sites-overview`: muestra el mapa de un sitio: páginas, templates, menús y definiciones de widget.
- `channels-sites-manage`: crea, actualiza, clona y elimina sitios, y crea sus stages.
- `channels-site-assets-manage`: sube uno o varios assets a un sitio.
- `channels-pages-create`: crea una página de widgets, de contenido o de originación.
- `channels-pages-copy`: copia una página en el mismo sitio o a otro.
- `channels-pages-manage`: consulta, actualiza, archiva, restaura, despublica, elimina y lista páginas.
- `channels-pages-content`: gestiona páginas de contenido y sus templates Liquid.
- `channels-pages-widget`: crea o ubica una página de widgets y reemplaza su composición completa de widgets.
- `channels-pages-widget-instance`: agrega, consulta, actualiza o quita un solo widget de una página.
- `channels-pages-widget-variables`: lista, consulta, asigna y quita las variables de un widget personalizado en una página.
- `channels-templates-find`: busca un template por nombre y categoría.
- `channels-templates-search`: busca expresiones regulares en el código de los templates.
- `channels-templates-manage`: gestiona los templates de un sitio: layouts, CSS, JavaScript y snippets.
- `channels-templates-upsert`: crea o actualiza un template por nombre y categoría.
- `channels-templates-replace`: busca y reemplaza en el código de los templates, con vista previa de los cambios.
- `channels-templates-copy`: copia un template a otro sitio.
- `channels-account-templates-manage`: gestiona los templates globales de la cuenta.
- `channels-widgets-manage`: crea, actualiza, clona, despublica, archiva, restaura, elimina y lista definiciones de widget.
- `channels-widgets-upsert`: crea o actualiza una definición de widget por su nombre.
- `channels-widgets-code-edit`: edita una sección del código de una definición de widget (HTML, CSS o JavaScript) sin reenviar las demás.
- `channels-widgets-copy`: copia una definición de widget a otro sitio.
- `channels-variables-manage`: gestiona variables globales de la cuenta, del sitio y de los widgets.
- `channels-publish`: publica cambios en un paso, con simulación previa y en orden de dependencias.
- `channels-menus-manage`: crea, consulta, renombra, archiva, despublica, elimina y lista menús.
- `channels-menu-items-manage`: gestiona los ítems de un menú, incluidos los anidados.
- `channels-menus-copy`: copia un menú con todos sus ítems al mismo sitio o a otro.
- `channels-locks-manage`: toma, libera y consulta los bloqueos de edición de páginas, templates, widgets y entradas.
- `channels-download`: descarga el contexto de un sitio como ZIP.
- `channels-preview`: genera URLs de vista previa de páginas y widgets.

### Customers

Realms, usuarios, segmentos, formularios, data sets y originaciones.

- `customers-realms-manage`: lista, consulta, crea y actualiza realms, y cambia su logo.
- `customers-realms-delete`: elimina un realm y sus stages.
- `customers-users-list`: lista los usuarios de un realm, con filtros.
- `customers-users-manage`: crea o actualiza un usuario de un realm.
- `customers-users-bulk`: crea o actualiza usuarios en lote, por email.
- `customers-segments-manage`: gestiona segmentos dinámicos y cuenta los usuarios que cumplen sus filtros.
- `customers-forms-manage`: crea, actualiza, elimina, habilita y deshabilita formularios con sus preguntas.
- `customers-forms-copy`: copia un formulario a otro realm con sus preguntas.
- `customers-submissions-manage`: lista, consulta, crea y actualiza solicitudes, cambia su estado y las asigna.
- `customers-submissions-bulk`: opera solicitudes en lote, con vista previa.
- `customers-datasets-manage`: gestiona data sets simples o anidados.
- `customers-datasets-copy`: copia un data set a otro realm con todas sus alternativas.
- `customers-originations-manage`: crea, actualiza, publica, despublica, archiva, elimina y lista originaciones.
- `customers-originations-validate`: revisa la estructura de una originación y reporta errores y advertencias.
- `customers-origination-steps-manage`: crea o actualiza los pasos de una originación con sus tareas y preguntas.
- `customers-origination-steps-clone`: clona pasos con sus tareas, preguntas y alternativas en la misma originación o en otra.
- `customers-origination-rules-manage`: gestiona las reglas que muestran u ocultan elementos de una originación.

### Widgets

Construcción de widgets con Dynamic Framework: catálogo de componentes y patterns, creación del proyecto y validación. Las tools de este módulo no necesitan credenciales.

- `widgets-list-components`: lista el catálogo de Dynamic UI: componentes, contextos y hooks.
- `widgets-get-component-props`: devuelve la definición completa de un componente, subcomponente, contexto o hook de Dynamic UI.
- `widgets-list-patterns`: lista los patterns de composición publicados en el Storybook de Dynamic UI.
- `widgets-scaffold`: crea un proyecto de widget nuevo a partir del template base de Dynamic.
- `widgets-validate`: valida un widget contra las convenciones de Dynamic UI, accesibilidad, estados de datos, manejo de errores y pruebas.

### Lo que el MCP no cubre

Para estas tareas, usa el Modyo Admin. El server también se lo indica al agente.

- **Core:** quitar el segundo factor de otro administrador; seguridad de la cuenta (segundo factor obligatorio, política de contraseñas, expiración de sesión); proveedores de identidad (SSO) y SCIM; aplicaciones de acceso a la API y sus tokens; webhooks y assets de la cuenta; registros de actividad y reportes; ver los permisos de un rol, editar roles y eliminarlos.
- **Content:** revisión en equipo de entradas; programar la publicación o despublicación; historial de versiones, diferencias y restauración; vista previa de una entrada; edición y creación masiva; reindexar un tipo de contenido.
- **Channels:** revisión en equipo (con revisión en equipo activa, `channels-publish` solo publica lo aprobado); historial de versiones, diferencias y rollback; programar la publicación de un release; redirecciones; actividad y comentarios de páginas; listar, editar y eliminar assets del sitio (`channels-site-assets-manage` solo los sube); publicar snippets globales (`channels-account-templates-manage` los guarda sin publicar); sincronizar stages; descargar una definición de widget como ZIP; cambiar el host de un sitio y su configuración de `llms.txt`; dueños de definiciones de widget.
- **Customers:** dominios y headers de seguridad del realm; restringir miembros del equipo a segmentos; eliminar usuarios, ver o revocar sus sesiones, notas de usuario e impersonación; campos personalizados de usuario; respuestas y estadísticas de formularios; programar la publicación de una originación; historial de versiones, diferencias y rollback de originaciones; stages del realm y su sincronización; eliminar solicitudes o respuestas de tareas e invitaciones de solicitudes; campañas de mensajería y sus plantillas de correo; integraciones del realm (proveedores de identidad, clientes OAuth) y webhooks; pagos y órdenes.

### Resources

| URI | Módulo | Contenido |
|---|---|---|
| `platforms://list` | Transversal | Plataformas configuradas. |
| `modyo://context/agent-rules` | Transversal | Reglas operativas para el agente. |
| `modyo://docs/widgets/{widgetPath}` | Transversal | Guía de widgets para el agente. Entrada: `modyo://docs/widgets/INDEX`. |
| `modyo-spaces://list` | Content | Todos los spaces. |
| `modyo-realms://list` | Customers | Todos los realms. |
| `modyo://liquid-reference` | Channels | Referencia de Liquid: objetos, propiedades, filtros y tags, con lo que hay disponible en cada contexto. |
| `modyo://widgets/catalog/components` | Widgets | Lista de componentes de Dynamic UI. |
| `modyo://widgets/catalog/components/{componentId}` | Widgets | Detalle de un componente: stories con código y props con tipos. |
| `modyo://widgets/catalog/patterns` | Widgets | Lista de patterns. |
| `modyo://widgets/catalog/patterns/{patternId}` | Widgets | Contenido completo de un pattern. |

Los catálogos de widgets corresponden a la versión de Dynamic UI que fija el server.

### Prompts

Los prompts son flujos guiados que la persona invoca desde el cliente, por lo general como un slash command. Cada uno aparece solo si sus módulos están activos.

| Prompt | Módulos | Flujo |
|---|---|---|
| `modyo-create-space` | Content | Crear un space con su estructura base. |
| `modyo-setup-site` | Channels | Crear un sitio con su configuración y páginas iniciales. |
| `modyo-create-widget-page` | Channels | Crear una página que aloja una definición de widget. |
| `modyo-create-content-page` | Channels | Crear una página que lista las entradas de un tipo de contenido. |
| `modyo-create-widget-definition` | Channels | Crear una definición de widget con código inicial. |
| `modyo-manage-templates` | Channels | Editar los templates Liquid de un sitio: layouts, snippets y hojas de estilo. |
| `modyo-manage-releases` | Channels | Revisar los cambios pendientes y publicar un release. |
| `modyo-create-blog` | Channels y Content | Crear un blog: space, tipo de contenido "Post" y entradas iniciales. |
| `widgets-init-project` | Widgets | Crear un proyecto de widget nuevo con `widgets-scaffold`. |

### Forma de la respuesta

Para quien integra el MCP con código propio: todas las tools publican un `outputSchema` y responden con `structuredContent`. La respuesta trae `platform` (la plataforma usada), `data` (el resultado) y, cuando corresponde, `resource`, `state` (por ejemplo `returned`, `total` y `complete` en los listados) y `control` (rechazos, confirmaciones y parámetros ignorados).

## Ejemplos de uso

Una vez configurado el server, conversa con el agente en lenguaje natural.

**Exploración**

> "Lista todos los spaces de mi plataforma"
>
> "¿Qué páginas tiene el sitio 1001?"
>
> "Muéstrame los tipos de contenido del space `blog`"

**Creación y edición**

> "Crea un tipo de contenido llamado 'Products' con los campos `name` (texto), `price` (número) y `description` (texto enriquecido)"
>
> "Crea una página `/about` en el sitio `marketing` con el layout `base`"
>
> "Agrega al menú principal del sitio 1001 un ítem 'Contact' que apunte a `/contact`"
>
> "Cambia el color primario en el `root.css` del sitio `marketing` a `#ff6600`"

**Publicación**

> "Muéstrame los cambios pendientes del sitio 1001 y publícalos"
>
> "Despublica la página `/promo` del sitio `marketing`"

**Usuarios**

> "Crea el administrador `user@my-company.com` con el rol `site editor` en el sitio `marketing`"
>
> "Lista los usuarios del realm `my-realm`"

**Auditoría sin riesgo** (con `MODYO_MCP_MODULES=channels` y `MODYO_READ_ONLY=true`)

> "Audita el sitio 1001: revisa páginas, widgets y templates sin modificar nada"

**Widgets**

Un widget nuevo empieza con el prompt `widgets-init-project`, invocado como slash command del cliente (en Claude Code, `/mcp__modyo__widgets-init-project my-widget`), y sigue con la descripción de la funcionalidad en el turno siguiente.

## Problemas frecuentes

### El agente responde "Platform not configured"

Al server le faltan `MODYO_URL` o `MODYO_TOKEN`. Revisa que las dos estén en el bloque `env` de la configuración del cliente y reinicia el cliente. Para probar el token directamente contra la API:

```bash
curl -H "Authorization: Bearer $MODYO_TOKEN" "$MODYO_URL/api/admin/profile"
```

Con un token válido, la API responde `200` con el usuario dueño del token. Si no, crea un token nuevo en Modyo Admin → Settings → API Access.

### El server no arranca después de definir MODYO_MCP_MODULES

Si el server termina al arrancar con un mensaje como este:

```
Error: Invalid module(s) in MODYO_MCP_MODULES: 'widgetz'.
Valid values: core, content, channels, customers, widgets.
```

la lista tiene un valor que no existe. Corrígelo (los valores válidos son `core`, `content`, `channels`, `customers` y `widgets`) y vuelve a iniciar el cliente.

### Una tool responde readOnly: true

El server corre con `MODYO_READ_ONLY=true` y la acción pedida escribe en la plataforma. No es un error: el rechazo llega en `control` con `isError: false`. Para ejecutar la acción, quita la variable y reinicia el cliente.

### El agente dice que no borró nada

En clientes sin confirmación interactiva, un borrado sin `confirmed: true` no se ejecuta: la respuesta trae en `control.aborted` lo que se habría borrado. Revisa la lista y pide al agente que repita la operación con la confirmación.

### El agente no ve las tools

Reinicia el cliente: las tools se descubren cuando el cliente inicia el server. En Claude Code, `claude mcp list` muestra si el server está conectado.

### Ver los logs del server

Agrega `DEBUG=true` al bloque `env` del cliente. El server escribe sus registros en stderr, y cada cliente los muestra en un lugar distinto. En Claude Desktop, por ejemplo, quedan en `~/Library/Logs/Claude/mcp-server-modyo.log` (macOS) o en `%APPDATA%\Claude\logs` (Windows).

## Recursos

- Paquete npm: [`@modyo/mcp`](https://www.npmjs.com/package/@modyo/mcp)
- Especificación MCP: [modelcontextprotocol.io](https://modelcontextprotocol.io)
- Otras herramientas de Modyo: [CLI](/es/platform/tools/cli.html), [SDK](/es/platform/tools/sdk.html)
