---
search: true
---

# Servidor MCP

El servidor MCP (Model Context Protocol) de Modyo es una herramienta basada en dos principios fundamentales: integración con IA y automatización de la plataforma, implementados a través de comandos en lenguaje natural que interactúan directamente con las APIs de la plataforma Modyo.

## Beneficios del Servidor MCP

- **Soporte Multi-Plataforma**: Permite conectar a múltiples instancias de Modyo simultáneamente desde una sola configuración.
- **110+ Herramientas**: Proporciona cobertura completa de API para operaciones de contenido, canales, clientes y administración.
- **Autenticación Segura**: Utiliza autenticación basada en tokens por plataforma para acceso seguro.
- **Soporte Universal de Clientes**: Funciona con Claude Code, VS Code, Cursor y otros clientes compatibles con MCP.

## Módulos

El servidor está organizado en cuatro módulos independientes:

| Módulo | Descripción | Puerto (HTTP) | Estado |
|--------|-------------|---------------|--------|
| **Content** | CMS Headless - espacios, entradas, tipos, assets, categorías | 3001 | Beta |
| **Channels** | Experiencia Digital - sitios, páginas, widgets, templates, navegación | 3002 | Alpha |
| **Customers** | Gestión de Identidad - realms, usuarios, formularios, submissions | 3003 | Alpha |
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

- **Obtener un token de acceso a Modyo**: Para obtener el token, necesitas tener un usuario o [crear uno](/es/platform/core/roles#crear-usuario) con al menos el [rol](/es/platform/core/roles#roles) de `developer` en los sitios, espacios o realms donde interactuarás. Una vez creado el usuario, puedes [configurarle un token de acceso](/es/platform/core/api#autenticacion).

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

## Referencia de Herramientas (Alto Nivel)

Las siguientes herramientas están disponibles con el nivel de abstracción `high` por defecto. Estas combinan múltiples operaciones en flujos inteligentes.

:::tip Tip
Existen herramientas adicionales de bajo nivel disponibles para depuración y casos de uso avanzados. Configura `MODYO_ABSTRACTION_LEVEL=low` para acceder al catálogo completo de más de 110 herramientas.
:::

:::tip Buena Práctica
La mayoría de los clientes LLM permiten habilitar o deshabilitar herramientas individuales o servidores MCP completos. Mantén habilitadas solo las herramientas que necesitas para conservar un contexto limpio y ayudar a la IA a enfocarse en lo importante. Por ejemplo, si solo trabajas con contenido, habilita únicamente el módulo Content.
:::

### Módulo Content (mcp-content)

| Herramienta | Descripción |
|-------------|-------------|
| `spaces-manage` | Ciclo de vida completo de espacios (listar/obtener/crear/actualizar/eliminar) |
| `types-manage` | Gestión de esquemas de tipos de contenido con actualización de campos |
| `type-update-or-create` | Gestión idempotente de tipos - crea o actualiza por UID |
| `entries-manage` | Ciclo de vida de entradas incluyendo publicar/despublicar/archivar |
| `entry-update-or-create` | Gestión idempotente de entradas - crea o actualiza por slug |
| `entries-bulk-manage` | Operaciones masivas con vista previa |
| `assets-manage` | Gestión de binarios y metadatos de assets |
| `categories-manage` | Gestión de jerarquía de categorías |

### Módulo Channels (mcp-channels)

| Herramienta | Descripción |
|-------------|-------------|
| `page-widget-manage` | Ciclo de vida completo de páginas de widgets |
| `page-content-manage` | Ciclo de vida completo de páginas de contenido |
| `widget-definition-update-or-create` | Gestión idempotente de widgets |
| `template-update-or-create` | Gestión idempotente de templates |
| `template-find` | Buscar templates por nombre o categoría |
| `smart-publish` | Flujo de publicación en un paso |

### Módulo Customers (mcp-customers)

| Herramienta | Descripción |
|-------------|-------------|
| `realms-manage` | Ciclo de vida completo de realms |
| `realm-user-manage` | Gestión de usuarios de clientes |
| `realm-users-bulk-manage` | Operaciones masivas de usuarios con vista previa |
| `origination-step-manage` | Configuración de pasos de origination |
| `origination-rules-manage` | Configuración de reglas de origination |
| `origination-step-clone` | Clonar pasos de origination |

### Módulo Admin (mcp-admin)

| Herramienta | Descripción |
|-------------|-------------|
| `admin-users-manage` | Ciclo de vida completo de usuarios del equipo (listar/crear/actualizar/sesiones) |
| `admin-users-update-or-create` | Operaciones idempotentes de usuarios |
| `admin-users-bulk-manage` | Activar/desactivar masivamente con vista previa |
| `admin-groups-manage` | Ciclo de vida completo de grupos |
| `admin-groups-update-or-create` | Operaciones idempotentes de grupos |
| `admin-roles-list` | Listar roles disponibles por contexto |
| `platforms-list` | Listar plataformas configuradas |
| `settings-get` | Leer configuración de la plataforma |
| `settings-manage` | Actualizar configuración de la plataforma |

## Niveles de Abstracción

El servidor MCP soporta diferentes niveles de abstracción para balancear simplicidad versus control:

| Nivel | Herramientas | Caso de Uso |
|-------|--------------|-------------|
| `high` | ~15/módulo | **Por defecto** - Flujos inteligentes, contexto reducido |
| `low` | 110+ total | Control completo de API, respuestas detalladas |

Si no se configura, el nivel de abstracción es `high` por defecto. Para cambiarlo, agrega la siguiente variable de entorno a la configuración de tu cliente MCP:

```json
"env": {
  "MODYO_ABSTRACTION_LEVEL": "high"
}
```

## Ejemplos de Uso

Una vez configurado, puedes interactuar con Modyo usando lenguaje natural:

```
"Lista todos los espacios en mi plataforma de produccion"

"Crea un tipo de contenido llamado 'Productos' con campos: nombre (texto), precio (numero)"

"Crea una entrada en el espacio blog con titulo 'Hola Mundo'"

"Muestra todos los widgets publicados para el sitio ID 5"

"Publica todas las paginas y widgets pendientes para el sitio 4605"
```

## Variables de Entorno

- `MODYO_CONFIG_PATH` Ruta a platforms.json (por defecto: `~/.platforms.json`).
- `MODYO_ABSTRACTION_LEVEL` Nivel de filtrado de herramientas (por defecto: `high`).
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
