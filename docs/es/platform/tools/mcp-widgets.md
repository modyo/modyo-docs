---
search: true
---

# Desarrollar widgets con el MCP

## Qué obtienes

Con el módulo Widgets del [Modyo MCP](/es/platform/tools/mcp.html), un agente de IA crea un widget a partir del template base de Dynamic Framework, lo desarrolla con los componentes y patterns del catálogo de Dynamic UI y lo valida contra la versión de Dynamic que fija el MCP. El resultado es un proyecto con su manifiesto (`widget.manifest.json`), listo para publicar en Modyo.

Esta guía describe el flujo. Los conceptos de Dynamic (componentes, theming, estructura del proyecto) están en la documentación de Dynamic Framework: [Estructura del proyecto](/es/dynamic/getting-started/project-structure.html) y [Sistema de temas](/es/dynamic/customization/theming.html).

## Antes de empezar

- **El MCP instalado** en tu cliente (ver [Instalación](/es/platform/tools/mcp.html#instalacion)). Para este flujo basta el módulo Widgets (`MODYO_MCP_MODULES=widgets`), y crear y validar el widget no requiere credenciales de Modyo.
- **Node.js 22** o superior.
- **git** con `user.name` y `user.email` configurados. Sin esa identidad, el proyecto se crea sin commit inicial.
- **Un token de acceso y un sitio de Modyo** para publicar. No hace falta instalar el Modyo CLI: el proyecto trae el script `npm run push`, que lo ejecuta.

## El flujo paso a paso

### 1. Crear el proyecto

Invoca el prompt `widgets-init-project` con el nombre del proyecto. Es un slash command del cliente; en Claude Code:

```
/mcp__modyo__widgets-init-project my-widget
```

En otros clientes, busca `widgets-init-project` entre los prompts o slash commands del server `modyo`. Si omites el nombre, el agente lo pregunta.

El prompt tiene un solo efecto: el agente ejecuta la tool `widgets-scaffold` y se detiene. Usa el prompt en lugar de pedirlo en lenguaje natural: "crea un widget" puede interpretarse como una definición de widget de Channels, y el prompt deja claro que se trata de un proyecto nuevo, sin tocar los widgets que ya existen.

`widgets-scaffold`:

1. Clona el template base (`dynamic-framework/dynamic-react-vite-base-template`) en el tag que fija el MCP.
2. Elimina la historia git del template.
3. Renombra el widget con el nombre del proyecto y la versión `0.1.0`: en `package.json`, `widget.manifest.json` y `package-lock.json`, en el nombre de montaje, en el prefijo de las clases CSS y en `MODYO_WIDGET_NAME` de `.modyo.example` y `.env.example`.
4. Inicializa un repositorio git nuevo, con un commit inicial si git tiene identidad configurada.
5. Instala las dependencias con `npm ci`.

El proyecto se crea en `./<nombre>/`, bajo el directorio de trabajo del agente. Para otra ubicación, indícala en la conversación.

**El nombre** es un nombre de proyecto, no la descripción de una funcionalidad. Va en kebab-case y empieza con una letra (`^[a-z][a-z0-9]*(-[a-z0-9]+)*$`), porque también es el prefijo de las clases CSS. Por ejemplo, `my-widget` o `transfer-detail`.

La tool falla sin tocar nada si:

- el directorio destino ya existe;
- el destino está dentro de otro proyecto de widget, en su raíz o en cualquier subdirectorio;
- el directorio padre no existe o no es un directorio;
- git no está disponible.

`widgets-scaffold` no crea `.modyo`, no publica el widget y no modifica otros proyectos.

### 2. Configurar la publicación

Copia `.modyo.example` a `.modyo` en la raíz del proyecto y completa los valores:

```bash
cp .modyo.example .modyo
```

| Variable | Valor |
|---|---|
| `MODYO_ACCOUNT_URL` | URL de tu cuenta, por ejemplo `https://my-company.modyo.cloud`. |
| `MODYO_TOKEN` | Token de acceso para publicar. |
| `MODYO_WIDGET_NAME` | Nombre del widget en Modyo. El scaffold ya lo completó con el nombre del proyecto. |
| `MODYO_SITE_HOST` o `MODYO_SITE_ID` | El sitio donde se publica. Usa uno de los dos. |

Este paso lo haces tú. El agente nunca lee ni escribe `.modyo`, y el archivo está en `.gitignore` porque contiene el token.

### 3. Describir el widget

En el turno siguiente, describe lo que tiene que hacer el widget:

> "El widget muestra el detalle de una transferencia: monto, fecha, origen, destino y estado, con acciones para repetir o agendar"

Antes de escribir la interfaz, el agente busca un pattern oficial de Dynamic UI que resuelva el caso. Si no encuentra uno, lo dice y construye la interfaz solo con componentes del catálogo. Para eso consulta el catálogo con `widgets-list-components`, `widgets-get-component-props` y los resources `modyo://widgets/catalog/*`.

### 4. Validar

Pide al agente que valide el widget. La tool `widgets-validate` revisa el proyecto contra las convenciones de Dynamic UI, accesibilidad, estados de datos, manejo de errores y pruebas, y devuelve un reporte con puntaje, errores y advertencias. El objetivo es `passing: true`.

- **Perfil de reglas.** El validador lo elige según `widget.manifest.json`: `domain-1.4` para un widget creado con el template 1.4 o una versión 1.x posterior, y `type-based` para un widget sin manifiesto. Con un manifiesto que no reconoce, falla cerrado.
- **Alineación de stack.** La tool compara el major.minor de `@dynamic-framework/ui-react` en `package.json` con la versión de Dynamic UI que fija el MCP (ver [Versiones](#versiones)). Si no coinciden, agrega un error de "Stack Alignment" y el reporte queda en `passing: false`. La revisión no se aplica si falta `package.json` o si la versión declarada no fija un major.minor (por ejemplo, `2.x` o una dependencia `file:`).
- **Un widget de otra versión.** Para validar un widget hecho sobre otra versión de Dynamic UI, pide al agente que omita la alineación de stack (`allowLegacyStack: true`). Las demás reglas se aplican igual.

Después, prueba el widget en local:

```bash
npm run dev
```

### 5. Publicar

El MCP no publica widgets. Tienes dos caminos, los dos fuera del agente:

- **Desde tu terminal**, en la raíz del proyecto:

  ```bash
  npm run push
  ```

  El script compila el widget y lo sube con el Modyo CLI, usando la configuración de `.modyo`. Ver [`modyo-cli push`](/es/platform/tools/cli.html#modyo-cli-push).

- **Desde CI**, con el repositorio git que creó el scaffold.

## Pedidos de ejemplo

| Paso | Pedido |
|---|---|
| Crear | `/mcp__modyo__widgets-init-project account-summary` (Claude Code) |
| Describir | "El widget muestra el saldo de cada cuenta del usuario y sus últimos cinco movimientos" |
| Ajustar | "Usa `DCard` para cada cuenta y muestra un estado de carga mientras llegan los datos" |
| Consultar | "¿Qué props acepta `DCard.Body`?" |
| Validar | "Valida el widget y corrige los errores que reporte" |
| Preparar la publicación | "Revisa que el proyecto compile antes de publicarlo" |

## Versiones

El MCP fija las versiones del stack de widgets. Cada versión del MCP puede cambiarlas.

| Modyo MCP | Dynamic UI | Template base | `@modyo/widget-validator` | Modyo CLI (en `npm run push`) |
|---|---|---|---|---|
| 0.5.10 | 2.12.1 | `v1.4.1` | 0.3.1 | 3.6.2 |

El `widget.manifest.json` del proyecto registra la versión de Dynamic UI y del template con que se creó.

## Problemas frecuentes

### widgets-scaffold responde TEMPLATE_MISMATCH

El template descargado no contiene lo que la tool espera renombrar, y la tool se detiene antes de renombrar. Si el directorio del proyecto quedó creado, elimínalo antes de volver a intentarlo, porque la tool no crea un proyecto en un destino que ya existe.

### El nombre del proyecto no se acepta

El nombre tiene que ir en kebab-case y empezar con una letra: `my-widget` sirve, `1-widget`, `My_Widget` y `my--widget` no.

### El proyecto no se crea porque el destino ya existe o está dentro de otro widget

La tool no reutiliza directorios ni crea un widget dentro de otro. Elige otro nombre o pide al agente que cree el proyecto en otra ubicación, fuera de cualquier proyecto de widget.

### El proyecto quedó sin commit inicial

git no tenía `user.name` y `user.email` configurados. El repositorio está inicializado: configura tu identidad y haz el primer commit.

### La validación falla por Stack Alignment

El widget usa una versión de `@dynamic-framework/ui-react` con otro major.minor que la que fija el MCP. Actualiza la dependencia a la versión de la tabla de [Versiones](#versiones), o valida con `allowLegacyStack: true` si el widget debe seguir en su versión.

### Los ids de los patterns no coinciden

`widgets-list-patterns` lee el índice más reciente del Storybook de Dynamic UI, mientras que `modyo://widgets/catalog/patterns` sirve los patterns de la versión fijada. Los ids pueden diferir. Para el contenido de un pattern, el agente usa el resource.
