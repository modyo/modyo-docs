---
search: true
---

# Command Line Interface

La Command Line Interface (CLI) de Modyo te permite desarrollar los [widgets](/es/platform/channels/widgets.html) de tu sitio en tu entorno local, previsualizarlos dentro del sitio y desplegarlos al sitio o stage que elijas, sin escribir el código en el panel.

Esta página describe ese flujo desde Channels. La instalación de la CLI, la configuración del archivo `.env` y la referencia completa de comandos y opciones están en [Modyo CLI](/es/platform/tools/cli.html).

## Antes de empezar

- Instala la CLI y prepara el archivo `.env` de tu proyecto siguiendo [Configuración del Entorno](/es/platform/tools/cli.html#configuracion-del-entorno).
- Identifica el sitio o stage de destino: su ID o su host son los valores que usas en `MODYO_SITE_ID` o `MODYO_SITE_HOST`.
- Usa el token de acceso de un usuario que sea miembro de ese sitio con un rol que incluya el permiso **Crear Widgets CLI**, como **Site Developer CLI**. Si el rol no incluye ese permiso, la plataforma rechaza el envío aunque el token sea válido.

:::tip Tip
Cada sitio y cada stage es un destino independiente. Si trabajas con stages, agrega al usuario del token como [miembro del equipo](/es/platform/channels/sites.html#miembros-del-equipo) en cada uno y cambia `MODYO_SITE_ID` antes de desplegar en otro destino.
:::

## Previsualizar un widget local en tu sitio

Con el comando `preview` montas el widget que corre en tu servidor local dentro de tu sitio, con sus plantillas y estilos, antes de subirlo a la plataforma.

1. Deja corriendo el servidor local de tu proyecto.
1. Inicia sesión en el panel de Modyo con el mismo navegador que usarás para la vista previa: la vista previa se abre en el sitio, pero necesita una sesión de administrador activa.
1. Abre una nueva ventana de terminal y ejecuta `modyo-cli preview`.
1. Elige si quieres ver tu widget sobre las plantillas publicadas del sitio o sobre las editables.

El puerto local, el ID del contenedor y el archivo de entrada tienen valores por defecto que puedes cambiar; están descritos en [Variables predeterminadas](/es/platform/tools/cli.html#variables-predeterminadas).

:::warning Atención
La vista previa no se actualiza sola. Después de cada cambio en tu código local, refresca la página para verlo.
:::

## Desplegar el widget al sitio o stage

1. Genera el build de tu proyecto.
1. Ejecuta `modyo-cli push` con el destino configurado. Si el widget no existe en ese sitio o stage, se crea; si ya existe, se actualiza con una versión nueva.
1. Publica el widget desde el listado de **Widgets** del sitio, o agrega el parámetro `-p` al push para publicarlo en la misma ejecución.

El detalle de los parámetros del comando y de los permisos necesarios para publicar está en [Despliegue](/es/platform/tools/cli.html#despliegue).

## Widgets desplegados con la CLI

En el listado de **Widgets** del sitio, los widgets que llegaron con un push se distinguen con la etiqueta **CLI** junto a su nombre y se comportan distinto a los que creas desde el panel:

- Su código es de solo lectura: puedes abrirlo en el **Widget Builder** para revisarlo, pero no guardar cambios ahí. Para modificarlo, cambia tu proyecto local y vuelve a ejecutar `modyo-cli push`.
- Sus [variables](/es/platform/channels/widgets.html#variables-del-widget) se detectan desde el código que envías y sus valores se siguen administrando desde el panel.
- Puedes publicarlo e instanciarlo en las [páginas](/es/platform/channels/pages.html) del sitio como cualquier otro widget.