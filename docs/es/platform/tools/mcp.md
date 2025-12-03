---
search: true
---

# Servidor MCP

El servidor MCP (Model Context Protocol) de Modyo es una herramienta basada en dos principios fundamentales: integración con IA y automatización de la plataforma, implementados a través de comandos en lenguaje natural que interactúan directamente con las APIs de la plataforma Modyo.

## Beneficios del Servidor MCP

- **Soporte Multi-Plataforma**: Permite conectar a múltiples instancias de Modyo simultáneamente desde una sola configuración.
- **66 Herramientas**: Herramientas "manage" inteligentes que combinan múltiples operaciones con 70-90% de reducción de tokens.
- **Autenticación Segura**: Utiliza autenticación basada en tokens por plataforma para acceso seguro.
- **Soporte Universal de Clientes**: Funciona con Claude Code, VS Code, Cursor y otros clientes compatibles con MCP.

## Módulos

El servidor está organizado en cuatro módulos independientes:

| Módulo | Descripción | Puerto (HTTP) | Estado |
|--------|-------------|---------------|--------|
| **Content** | CMS Headless - espacios, entradas, tipos, assets, categorías | 3001 | Beta |
| **Channels** | Experiencia Digital - sitios, páginas, widgets, templates, navegación | 3002 | Beta |
| **Customers** | Gestión de Identidad - realms, usuarios, formularios, submissions | 3003 | Beta |
| **Admin** | Administración de Plataforma - usuarios del equipo, grupos, roles, configuraciones | 3004 | Beta |

## Instalación

Para usar el servidor MCP de Modyo, primero debes clonar y compilar el proyecto en tu máquina local. Esto habilitará los servidores MCP que permiten a los asistentes de IA interactuar con tus plataformas Modyo.

:::warning Importante
El repositorio actualmente es privado y solo accesible para miembros internos del equipo Modyo. Contacta a tu administrador si necesitas acceso.
:::

```bash
$ git clone https://github.com/modyo/modyo-mcp
$ cd modyo-mcp
$ pnpm install
$ pnpm run build
```

:::tip Tip
También puedes usar `npm` en lugar de `pnpm`, pero pnpm es recomendado para instalaciones más rápidas y mejor uso de disco.
:::

## Configuración del Entorno

El siguiente paso es configurar tus plataformas para facilitar la interacción con la API de Modyo. Aunque puedes especificar parámetros directamente en las llamadas a herramientas, se recomienda definir un archivo de configuración con las credenciales de tus plataformas.

### Acciones previas

- **Obtener un token de acceso a Modyo**: Para obtener el token, necesitas tener un usuario o [crear uno](/es/platform/core/roles.html#crear-usuario) con al menos el [rol](/es/platform/core/roles.html#roles) de `developer` en los sitios, espacios o realms donde interactuarás. Una vez creado el usuario, puedes [configurarle un token de acceso](/es/platform/core/api.html#autenticacion).

- **Identificar la URL de tu plataforma**: Obtén la URL base de tu organización Modyo (ej., `https://mi-empresa.modyo.com`).

### Configuración del archivo platforms.json

Crea un archivo de configuración en `~/.platforms.json` con la siguiente estructura:

```json
{
  "platforms": {
    "production": {
      "name": "Produccion",
      "url": "https://mi-empresa.modyo.com",
      "token": "tu_token_api_produccion"
    },
    "staging": {
      "name": "Staging",
      "url": "https://staging.mi-empresa.modyo.com",
      "token": "tu_token_api_staging"
    }
  }
}
```

### Descripción de los campos de configuración

- `platforms` Objeto que contiene todas las configuraciones de tus plataformas.
- `production` (o cualquier clave) Identificador de plataforma usado en las llamadas a herramientas. Debe ser minúscula, alfanumérico, con guiones o guiones bajos únicamente.
- `name` Nombre legible para la plataforma.
- `url` URL base de tu organización Modyo.
- `token` Token de acceso del usuario para autenticación de API.

:::warning Importante
Las claves de plataforma deben ser minúsculas, usando solo caracteres alfanuméricos, guiones y guiones bajos. Deben comenzar y terminar con una letra o número.
:::

## Iniciar los Servidores

Para iniciar todos los servidores simultáneamente:

```bash
$ pnpm start
```

O inicia servidores individuales según necesites:

```bash
$ pnpm start:content    # Puerto 3001
$ pnpm start:channels   # Puerto 3002
$ pnpm start:customers  # Puerto 3003
$ pnpm start:admin      # Puerto 3004
```

Para desarrollo con hot-reload:

```bash
$ pnpm dev
```

:::tip Recomendación
Ejecuta el servidor en modo HTTP (`pnpm start` o `pnpm dev`) para ver errores y logs de depuración directamente en tu consola. Esto es especialmente útil al solucionar problemas o cuando tienes el modo debug habilitado en el servidor MCP.
:::

## Configuración del Cliente

### Claude Code

Para configurar Claude Code con transporte HTTP:

```bash
$ claude mcp add modyo-content --transport http --env MODYO_CONFIG_PATH=~/.platforms.json http://localhost:3001/mcp
$ claude mcp add modyo-channels --transport http --env MODYO_CONFIG_PATH=~/.platforms.json http://localhost:3002/mcp
$ claude mcp add modyo-customers --transport http --env MODYO_CONFIG_PATH=~/.platforms.json http://localhost:3003/mcp
$ claude mcp add modyo-admin --transport http --env MODYO_CONFIG_PATH=~/.platforms.json http://localhost:3004/mcp
```

Para configurar Claude Code con transporte stdio:

```bash
$ claude mcp add modyo-content --env MODYO_CONFIG_PATH=~/.platforms.json node /ruta/a/modyo-mcp/packages/mcp-content/build/index.js
```

### VS Code

Agrega a tu archivo `.vscode/mcp.json`:

```json
{
  "servers": {
    "modyo-content": {
      "type": "http",
      "url": "http://localhost:3001/mcp"
    }
  }
}
```

### Cursor

Para configurar Cursor:

1. Abre **Cursor Settings** > **MCP**
2. Da click en el botón **Add new MCP Server**
3. Configura los siguientes campos:
   - Name: `Modyo Content`
   - Type: `HTTP`
   - URL: `http://localhost:3001/mcp`

### Gemini CLI

Agrega a tu archivo `~/.gemini/settings.json`:

```json
{
  "mcpServers": {
    "modyo-content": {
      "httpUrl": "http://localhost:3001/mcp"
    },
    "modyo-channels": {
      "httpUrl": "http://localhost:3002/mcp"
    },
    "modyo-customers": {
      "httpUrl": "http://localhost:3003/mcp"
    },
    "modyo-admin": {
      "httpUrl": "http://localhost:3004/mcp"
    }
  }
}
```

Para transporte stdio:

```json
{
  "mcpServers": {
    "modyo-content": {
      "command": "node",
      "args": ["/ruta/a/modyo-mcp/packages/mcp-content/build/index.js"],
      "env": {
        "MODYO_CONFIG_PATH": "~/.platforms.json"
      }
    }
  }
}
```

:::tip Tip
Después de modificar `settings.json`, recarga tu ventana para activar los servidores MCP.
:::

## Referencia de Herramientas

Las siguientes herramientas están disponibles. Son herramientas "manage" inteligentes que combinan múltiples operaciones en flujos eficientes con 70-90% de reducción de tokens.

:::tip Buena Práctica
La mayoría de los clientes LLM permiten habilitar o deshabilitar herramientas individuales o servidores MCP completos. Mantén habilitadas solo las herramientas que necesitas para conservar un contexto limpio y ayudar a la IA a enfocarse en lo importante. Por ejemplo, si solo trabajas con contenido, habilita únicamente el módulo Content.
:::

### Módulo Content (mcp-content)

| Herramienta | Descripción |
|-------------|-------------|
| `spaces-manage` | Ciclo de vida completo de espacios (listar/obtener/crear/actualizar/eliminar) |
| `space-copy` | Clonar espacios entre plataformas |
| `space-get` | Obtener detalles del espacio |
| `spaces-list` | Listar todos los espacios |
| `types-manage` | Gestión de esquemas de tipos de contenido con actualización incremental de campos |
| `type-update-or-create` | Gestión idempotente de tipos - crea o actualiza por UID |
| `type-copy` | Copiar tipos de contenido entre espacios/plataformas |
| `type-get` | Obtener detalles del tipo |
| `types-list` | Listar tipos en un espacio |
| `entries-manage` | Ciclo de vida de entradas incluyendo publicar/despublicar/archivar/clonar |
| `entry-update-or-create` | Gestión idempotente de entradas - crea o actualiza por slug |
| `entries-bulk-manage` | Operaciones masivas con vista previa (publicar/despublicar/archivar/eliminar) |
| `entry-get` | Obtener detalles de la entrada |
| `entries-list` | Listar entradas con filtros |
| `assets-manage` | Gestión de binarios y metadatos de assets |
| `assets-bulk-create` | Carga masiva de assets mejorada con manejo de errores |
| `asset-get` | Obtener detalles del asset |
| `assets-list` | Listar assets |
| `categories-manage` | Gestión de jerarquía de categorías |
| `category-get` | Obtener detalles de la categoría |
| `categories-list` | Listar categorías

### Módulo Channels (mcp-channels)

| Herramienta | Descripción |
|-------------|-------------|
| `sites-manage` | Ciclo de vida completo de sitios (crear/obtener/actualizar/eliminar/listar) |
| `site-assets-manage` | Gestión de carga de assets del sitio (individual y masiva) |
| `site-get-overview` | Obtener resumen completo del sitio (páginas, widgets, templates, menús) |
| `page-manage` | Ciclo de vida general de páginas (obtener/actualizar/eliminar/archivar/despublicar/listar) |
| `page-widget-manage` | Ciclo de vida completo de páginas de widgets con posicionamiento |
| `page-content-manage` | Ciclo de vida completo de páginas de contenido con templates Liquid |
| `page-copy` | Copiar páginas dentro del mismo sitio o entre sitios |
| `widget-definition-manage` | Ciclo de vida completo de widgets (obtener/crear/actualizar/eliminar/archivar/clonar/listar) |
| `widget-definition-update-or-create` | Gestión idempotente de widgets por nombre |
| `widget-definition-copy` | Copiar definiciones de widgets entre sitios/plataformas |
| `template-manage` | Ciclo de vida completo de templates (obtener/crear/actualizar/eliminar/despublicar/listar) |
| `template-update-or-create` | Gestión idempotente de templates por nombre y categoría |
| `template-find` | Buscar templates por nombre o categoría |
| `template-copy` | Copiar templates entre sitios/plataformas |
| `navigation-menu-manage` | Gestión del ciclo de vida de menús (crear/obtener/actualizar/eliminar/listar) |
| `navigation-menu-item-manage` | Gestión de jerarquía de items de menú (agregar/actualizar/eliminar/listar) |
| `navigation-menu-copy` | Copiar menús entre sitios/plataformas |
| `global-variables-manage` | Ciclo de vida de variables con operaciones masivas |
| `smart-publish` | Flujo de publicación en un paso |
| `account-template-manage` | Gestión de templates globales/a nivel de cuenta |
| `locks-manage` | Bloqueos de edición concurrente (acquire/get/list/release) |

### Módulo Customers (mcp-customers)

| Herramienta | Descripción |
|-------------|-------------|
| `realms-manage` | Ciclo de vida completo de realms (listar/obtener/crear/eliminar/apariencia/logo) |
| `realm-user-manage` | Crear/actualizar usuario idempotente por email |
| `realm-users-bulk-manage` | Operaciones masivas de usuarios con manejo de errores |
| `forms-manage` | Ciclo de vida completo de formularios (listar/obtener/crear/actualizar/eliminar/habilitar/deshabilitar) |
| `forms-copy` | Copiar formularios entre realms/plataformas |
| `data-sets-manage` | Ciclo de vida completo de conjuntos de datos con soporte de jerarquía anidada |
| `data-set-copy` | Copiar conjuntos de datos entre realms/plataformas |
| `originations-manage` | Ciclo de vida completo de originations (listar/obtener/crear/actualizar/eliminar) |
| `origination-step-manage` | Ciclo de vida de pasos con estrategias merge/replace |
| `origination-rules-manage` | Gestión de reglas de validación (lógica condicional) |
| `origination-validate-structure` | Utilidad de validación de estructura |
| `origination-step-clone` | Utilidad para clonar pasos con nuevos UUIDs |
| `submissions-manage` | Ciclo de vida completo de submissions (listar/obtener/crear/actualizar/estado/asignar) |
| `submissions-bulk-manage` | Operaciones masivas con vista previa (estado/asignar) |

### Módulo Admin (mcp-admin)

| Herramienta | Descripción |
|-------------|-------------|
| `admin-users-manage` | Ciclo de vida completo de usuarios del equipo (listar/crear/actualizar/sesiones) |
| `admin-users-update-or-create` | Operaciones idempotentes de usuarios por email/username |
| `admin-users-bulk-manage` | Activar/desactivar masivamente con vista previa |
| `admin-groups-manage` | Ciclo de vida completo de grupos (crear/actualizar/eliminar/listar) |
| `admin-groups-update-or-create` | Operaciones idempotentes de grupos por nombre |
| `admin-team-members-manage` | Asignar usuarios/grupos a sitios/espacios/realms con roles |
| `admin-roles-list` | Listar roles disponibles por contexto (account/site/space/realm) |
| `platforms-list` | Listar plataformas configuradas con detección opcional de versión |
| `settings-get` | Leer configuración de la plataforma |
| `settings-manage` | Actualizar configuración de la plataforma con verificación |

## Ejemplos de Uso

Una vez configurado, puedes interactuar con Modyo usando lenguaje natural:

```
"Lista todos los espacios en mi plataforma de produccion"

"Crea un tipo de contenido llamado 'Productos' con campos: nombre (texto), precio (numero)"

"Crea una entrada en el espacio blog con titulo 'Hola Mundo'"

"Muestra todos los widgets publicados para el sitio ID 5"

"Publica todas las paginas y widgets pendientes para el sitio 4605"

"Asigna el usuario juan@ejemplo.com al sitio de marketing con rol de editor"

"Crea un menu de navegacion para el sitio principal con items Inicio, Nosotros y Contacto"
```

## Variables de Entorno

- `MODYO_CONFIG_PATH` Ruta a platforms.json (por defecto: `~/.platforms.json`).
- `DANGEROUSLY_OMIT_AUTH` Omitir autenticación solo para pruebas (por defecto: `false`).

## MCP Inspector

Puedes probar el servidor sin un cliente usando el inspector integrado:

```bash
$ cd packages/mcp-content
$ pnpm run inspect
```

Esto abre una interfaz visual en `http://localhost:5173` donde puedes explorar herramientas disponibles, inspeccionar esquemas y respuestas, y probar conexiones de plataforma.

## Solución de Problemas

### Errores "Organization not found"

- Verifica que `platformSlug` coincida con una clave en `~/.platforms.json`
- Revisa la variable de entorno `MODYO_CONFIG_PATH`
- Asegúrate de que el archivo JSON sea válido

### Herramientas no visibles

1. Verifica que la compilación se completó correctamente: `ls packages/*/build/index.js`
2. Revisa que las rutas en la configuración MCP sean absolutas
3. Reinicia tu cliente MCP
4. Revisa los logs del cliente MCP en busca de errores

### Errores de autenticación

- Verifica que los tokens de API tengan los permisos correctos
- Revisa el formato del token en platforms.json
- Asegúrate de que los endpoints de API sean correctos

:::warning Atención
El usuario dueño del token debe tener los permisos apropiados para las operaciones que deseas realizar. Verifica que tu token tenga acceso a los módulos requeridos (Content, Channels, Customers o Admin).
:::
