---
search: true
---

# Widgets

Los widgets son los que te permiten crear _micro frontends_ encapsulados para tus sitios y aplicaciones.

Al entrar en la sección **Widgets** del sitio, se puede ver un listado de todos los widgets que se han creado. En la barra superior se puede filtrar el listado de widgets por estado, autor o tags, o hacer una búsqueda de texto por el nombre del widget.

En la esquina superior derecha se observa un botón principal **+ Nuevo** que permite crear un nuevo widget. Para ello, se debe escribir un nombre para luego entrar a la vista de edición del widget.

En la vista de edición del widget, se puede ver la barra superior de acciones, el área de trabajo y la columna de propiedades.

![Widget Builder](/assets/img/platform/widget-builder.png) 

En la barra superior se encuentran las siguientes secciones:

- **Borrador**: Este estado aparece cuando recién se haya creado un widget o cuando se haya despublicado.
- **Publicado**: Este estado aparece luego de haber hecho una publicación y cuando las versiones editable y publicada son iguales.
- **Cambios pendientes**: Este estado aparece si es que ya hay una versión publicada, pero hay cambios pendientes de publicar en versión editable.
- **En revisión**: Este estado aparece cuando esté habilitada la [revisión en equipo]/platform/core/team-review.html) y se haya enviado a revisión la versión editable.
- **Aprobado**: Este estado aparece cuando esté habilitada la [revisión en equipo]/platform/core/team-review.html) y si es que se cumplieron las condiciones de revisión del elemento. Si se está en este estado, los templates están listos para ser publicados.

A la derecha, estas son las distintas acciones:
**Vista previa** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5z" fill="#626262"/><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg>: Permite abrir en una nueva pestaña la vista previa de la versión editable del widget.

:::warning Atención
Puedes previsualizar los widgets como usuario sin sesión o usuario con sesión de Modyo. Para esto, es recomendable iniciar o cerrar la sesión de Modyo en el sitio antes de entrar al modo vista previa, dado que si se inicia o cierra sesión dentro del modo vista previa, podrías encontrarte con errores de seguridad del tipo _x-fame-options_ o _mixed-content_, dependiendo de la configuración de dominios personalizados y SSL del sitio
:::

**Diferencias** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M19 3h-5v2h5v13l-5-6v9h5a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-9 15H5l5-6m0-9H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h5v2h2V1h-2v2z" fill="#626262"/></svg>: Al hacer 
_click_ en este ícono, se abrirá el modal de diferencias, en el cual se puede comparar los cambios que hay entre múltiples versiones del widget. 

Por defecto comienza comparando la versión publicada con la versión editable, pero al hacer uso de los selectores de versiones, se puede además con las versiones de respaldo. Si este ícono no aparece, entonces no hay ninguna versión publicada de este widget.

**Actividad** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M12 23a1 1 0 0 1-1-1v-3H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-4.1l-3.7 3.71c-.2.18-.44.29-.7.29H12m1-6v3.08L16.08 17H21V7H7v10h6M3 15H1V3a2 2 0 0 1 2-2h16v2H3v12m6-6h10v2H9V9m0 4h8v2H9v-2z" fill="#626262"/><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg>: Te permite desplegar una pestaña lateral que muestra la actividad y comentarios del widget.

**Otras opciones**<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M12 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2z" fill="#626262"/><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg>: Permite archivar y crear una copia del widget actual.

**Botón principal:**

- **Guardar**: Guarda los cambios actuales.
- **Enviar a revisión**: Si está la revisión en equipo habilitada, entonces se puede enviar a revisión y notificar a los revisores de que el widget está listo para ser revisado.
- **Publicar**: Pasa la versión editable o aprobada (si está habilitada la revisión en equipo) a la versión publicada.

**Otras acciones principales:**<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6l1.41-1.42z" fill="#626262"/><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg>

- **Despublicar**: Si el widget está publicado, se puede sacar de producción usando esta opción.
- **Forzar publicación**: Si eres administrador del sitio, se puede hacer uso de de esta opción para publicar inmediatamente un widget, incluso si está habilitada la Revisión en Equipo.

:::tip Tip
Sólo se pueden archivar los widgets que han sido despublicados previamente.
:::

:::warning Atención
Solo se pueden despublicar los widgets que se encuentran inactivos dentro de la plataforma. Si este se encuentra en uso, no estará habilitada la función. 
:::

:::tip Tip
Los widgets archivados no aparecerán en el listado inicial ni tampoco en el modal de selección de widgets en el Page Builder. Para restaurar un widget archivado, se debe entrar a la vista de edición, usando la opción **Restaurar** en la esquina superior derecha de la vista.
:::

Una vez que un widget está publicado, este será visible en el modal de selección de widgets personalizados en el [Page Builder.](/platform/channels/pages.html)

:::tip Tip
Para aprender más sobre el flujo de publicación, revise la sección de [Versionado.](/platform/core/team-review.html#versionado)
:::


En el área de trabajo se puede ver:

- **Pestañas de código**: Se tiene a disposición una pestaña de JavaScript, CSS y HTML para construir widgets.
- **Gestor de archivos**: Al hacer _click_, se levanta el modal de gestión de archivos, donde se puede filtrar y buscar los archivos que has subido en el [Gestor de Archivos](/platform/content/asset-manager.html) y copiar su URL para usarlos en el widget. También se puede subir nuevos archivos desde este modal.
- **Atajos de teclado**: Muestra una pequeña ventana informativa con algunos atajos de teclado útiles.
- **Snippets**: Muestra una lista de los snippets disponibles desde el [Template Builder](/platform/channels/templates.html#snippets) y se copia su código para referenciarlos en el widget.
- **Cambios**: Si se han guardado cambios y no han publicado, mostrará este listado de todas las veces guardadas cada uno de los archivos (JS, CSS y HTML). Al hacer _click_ en una sub-versión, se cambia el contenido de la pestaña por el contenido de la sub-versión que se hizo _click_.

:::tip Tip
Para no perder los cambios que tienes actualmente, se debe guardar antes de saltar entre sub-versiones, de tal forma que siempre pueda volver a la última versión guardada en la lista de cambios.
:::

:::tip Tip
Cuando se publica el widget, no se observarán cambios disponibles. Esto es porque cada versión parte sin cambios desde la versión productiva. Si se restaura el widget a una versión anterior, también lo harán las sub-versiones, por lo que se puede acceder a todas las instancias en que se guardaron cambios en esa versión.
:::

En las tres pestañas del widget se puede hacer uso de Liquid. Para más información revise [la documentación asociada a Liquid.](/platform/channels/liquid-markup.html)

En la columna de propiedades se pueden ver: 

- **Nombre**: Permite cambiar el nombre del widget
- **Tags**: Permite añadir tags a un widget. Los tag son de uso administrativo y sirven para buscar y filtrar los widgets y así poder encontrarlos rápidamente.
- **Páginas que usan este widget**: Verás un listado de páginas que están usando este widget. Mientras veas páginas en este listado, no podrás despublicar ni archivar el widget.

:::warning Atención
Si eliminas un widget de una página y publicas, seguirás viendo esa página en este listado dado que el widget sigue referenciado en los respaldos de esa página. Modyo por defecto guarda hasta 20 respaldos por cada elemento, por lo que si quieres despublicar y archivar un widget, deberás publicar 20 veces las páginas sin la referencia del widget para así poder eliminar todas las referencias del mismo. 

Debido a que Modyo cuenta con las funcionalidades para [restaurar y restablecer](/platform/core/team-review.html#acciones-para-el-versionado) desde versiones pasadas, no se puede permitir eliminar un elemento que está siendo referenciado en los respaldos de otros elementos.
:::

## Modyo CLI

La interfaz de línea de comandos de Modyo (CLI) es una herramienta de línea de comandos basada en dos principios de aceleración e integración, y estos principios tienen un comando get y push respectivamente.

### Introduction

Primero, necesita instalar la CLI de Modyo globalmente en su máquina local para tener disponible el comando `modyo-cli`, esto le permitirá inicializar un proyecto con algunas decisiones arquitectónicas de front-end ya tomadas, o usar para inicializar un widget desde catálogo si tiene acceso.

Para instalar el modyo-cli globalmente, debe usar una de estas opciones

```bash
$ npm i -g @modyo/cli #via npm
$ yarn global add @modyo/cli #via yarn
```

> Este comando hará que el comando modyo-cli esté disponible en la sesión de terminal globalmente

Los comandos disponibles son get, push y help

- [`modyo-cli (-v|--version|version)`](#modyo-cli-version)
- [`modyo-cli help [COMMAND]`](#modyo-cli-help-command)
- [`modyo-cli get NAME [DIRECTORY]`](#modyo-cli-get-name-directory)
- [`modyo-cli push NAME`](#modyo-cli-push-name)

### `modyo-cli (-v|--version|version)`
Imprima la versión `modyo-cli`

```bash
$ modyo-cli (-v|--version|version)
modyo-cli/3.0.6 darwin-x64 node-v12.13.1
```

### `modyo-cli help [COMMAND]`

```bash
USAGE
  $ modyo-cli help [COMMAND]

ARGUMENTS
  get   Pull a widget from our catalog into a new directory
  help  Display help for modyo-cli
  push  Push widget to Modyo platform
```

### `modyo-cli get NAME [DIRECTORY]`

En general, el comando `get` se usa para obtener una plantilla de widget.
Si tiene un token proporcionado por Modyo, puede usar el mismo comando para extraer cualquiera de nuestros widgets premium de nuestra Biblioteca de widgets:

```bash
USAGE
  $ modyo-cli get NAME [DIRECTORY]

ARGUMENTS
  NAME       The name of the widget
  DIRECTORY  Name of directory to init

OPTIONS
  -f, --force       Override folder if exist
  -h, --help        Output usage information
  -x, --no-install  Don't install packages

EXAMPLE
  $ modyo-cli get name [directory]
```

>Hay algunas plantillas de widgets públicos a los que se puede acceder a través de este comando
>El CLI de Modyo está diseñado para funcionar en base a una arquitectura de micro front-end y acelerará el proceso de inicialización de un widget, con decisiones modyo.

```bash
  EJEMPLOS
    $ modyo-cli get modyo-widgets-template-vue [DIRECTORY] #to initialize a widget
    $ modyo-cli get modyo-widgets-project-vue [DIRECTORY] #to initialize a base project library
```

>Desde este comando y en adelante, puede continuar utilizando el widget como cualquier otro widget vue-cli.

### `modyo-cli push NAME`

El comando `push` es el encargado del principio de integración, utilizado para enviar el widget al sitio seleccionado en la plataforma modyo.

Utilizará un argumento llamado nombre para cargar el widget en la plataforma y algunos indicadores requeridos como token site_base id o host para identificar la plataforma ®Modyo que aloja el widget y tienen un indicador adicional para evitar el flujo de proceso manual de la publicación del widget.

```bash
USAGE
  $ modyo-cli push NAME

ARGUMENTS
  NAME  The name of the widget

OPTIONS
  -b, --build-command=build-command      [default: build] Build command in package.json
  -d, --build-directory=build-directory  [default: dist] Build directory path
  -h, --help                             Output usage information
  -i, --site-id=site-id                  Id of the site where the widget will be push
  -n, --site-host=site-host              Host of the site where the widget will be push
  -p, --publish                          Force widget publication
  -t, --token=token                      (required) Modyo Api token
  -u, --account-url=account-url          (required) URL of your ®Modyo account ex("https://account.modyo.com")
  -v, --version=8|9                      [default: 9] Version of Modyo platform

EXAMPLE
  $ modyo-cli push <NAME>
```

>Muchas de las opciones se pueden definir como variables de entorno o dentro de un archivo .env que se recomienda para evitar la publicación en el registro de github porque puede contener información delicada

```bash
MODYO_BUILD_DIRECTORY=buildDirectoryPath
MODYO_VERSION=version
MODYO_TOKEN=token
MODYO_ACCOUNT_URL=account-url
MODYO_SITE_ID=siteId
MODYO_SITE_HOST=siteHost
MODYO_BUILD_COMMAND=buildCommand
MODYO_REGEX_EXCLUDE=regexToExcludeFiles
MODYO_WIDGET_NAME=name of widget
```
