---
search: true
---

# Widgets

Los widgets son los que te permiten crear _micro frontends_ encapsulados para tus sitios y aplicaciones.

Al entrar en la sección **Widgets** del sitio, se puede ver un listado de todos los widgets que se han creado. En la barra superior se puede filtrar el listado de widgets por estado, autor, tags, o hacer una búsqueda de texto por el nombre del widget.

En la vista de edición del widget, se puede ver la barra superior de acciones, el área de trabajo y la columna de propiedades.

![Widget Builder](/assets/img/platform/widget-builder.png) 

En la barra superior se encuentran las siguientes secciones:

- **Borrador**: Este estado aparece cuando recién se haya creado un widget o cuando se haya despublicado.
- **Publicado**: Este estado aparece luego de haber hecho una publicación y cuando las versiones editable y publicada son iguales.
- **Cambios pendientes**: Este estado aparece si es que ya hay una versión publicada, pero hay cambios pendientes de publicar en versión editable.
- **En revisión**: Este estado aparece cuando esté habilitada la [revisión en equipo](/es/platform/core/key-concepts.html) y se haya enviado a revisión la versión editable.
- **Aprobado**: Este estado aparece cuando esté habilitada la [revisión en equipo](/es/platform/core/key-concepts.html) y si es que se cumplieron las condiciones de revisión del elemento. Si se está en este estado, los templates están listos para ser publicados.

A la derecha, estas son las distintas acciones:
**Vista previa** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5z" fill="#626262"/><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg>: Permite abrir en una nueva pestaña la vista previa de la versión editable del widget.

:::warning Atención
Puedes previsualizar los widgets como usuario sin sesión o usuario con sesión de Modyo. Para esto, es recomendable iniciar o cerrar la sesión de Modyo en el sitio antes de entrar al modo vista previa, dado que si se inicia o cierra sesión dentro del modo vista previa, podrías encontrarte con errores de seguridad del tipo _x-frame-options_ o _mixed-content_, dependiendo de la configuración de dominios personalizados y SSL del sitio
:::

**Diferencias** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M19 3h-5v2h5v13l-5-6v9h5a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-9 15H5l5-6m0-9H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h5v2h2V1h-2v2z" fill="#626262"/></svg>: Al hacer click en este ícono, irás a la [vista de diferencias](/es/platform/channels/sites.html#revision-y-publicacion-conjunta), en la cual puedes comparar los cambios que hay entre múltiples versiones del widget.

Por defecto comienzas comparando la versión publicada con la versión editable, pero al hacer uso de los selectores de versiones, se puede además con las versiones de respaldo. Si este ícono no aparece, entonces no hay ninguna versión publicada de este widget.

**Actividad** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M12 23a1 1 0 0 1-1-1v-3H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-4.1l-3.7 3.71c-.2.18-.44.29-.7.29H12m1-6v3.08L16.08 17H21V7H7v10h6M3 15H1V3a2 2 0 0 1 2-2h16v2H3v12m6-6h10v2H9V9m0 4h8v2H9v-2z" fill="#626262"/><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg>: Te permite desplegar una pestaña lateral que muestra la actividad y comentarios del widget.

**Otras opciones**<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M12 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2z" fill="#626262"/><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg>: Permite archivar y crear una copia del widget actual.

**Botón principal:**

- **Guardar**: Guarda los cambios actuales.
- **Enviar a revisión**: Si está la revisión en equipo habilitada, entonces se puede enviar a revisión y notificar a los revisores de que el widget está listo para ser revisado.
- **Publicar**: Te lleva a la vista de [publicación conjunta](/es/platform/channels/sites.html#revision-y-publicacion-conjunta) donde podrás publicar tus widgets.

**Otras acciones principales:**<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6l1.41-1.42z" fill="#626262"/><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg>

- **Despublicar**: Si el widget está publicado, se puede sacar de producción usando esta opción.
- **Forzar publicación**: Si eres administrador del sitio, se puede hacer uso de de esta opción para publicar inmediatamente un widget, incluso si está habilitada la Revisión en Equipo.

:::tip Tip
Sólo se pueden archivar los widgets que han sido despublicados previamente.
:::

:::tip Tip
Los widgets archivados no aparecerán en el listado inicial ni tampoco en el modal de selección de widgets en el Page Builder. Para restaurar un widget archivado, se debe entrar a la vista de edición, usando la opción **Restaurar** en la esquina superior derecha de la vista.
:::

Una vez que un widget está publicado, este será visible en el modal de selección de widgets personalizados en el [Page Builder.](/es/platform/channels/pages.html)

:::tip Tip
Para aprender más sobre el flujo de publicación, revise la sección de [Versionado.](/es/platform/core/key-concepts.html#versionado)
:::

En el área de trabajo se puede ver:

- **Pestañas de código**: Se tiene a disposición una pestaña de JavaScript, CSS, y HTML para construir widgets.
- **Gestor de archivos**: Al hacer click, se levanta el modal de gestión de archivos, donde se puede filtrar y buscar los archivos que has subido en el [Gestor de Archivos](/es/platform/content/asset-manager.html) y copiar su URL para usarlos en el widget. También se puede subir nuevos archivos desde este modal.
- **Atajos de teclado**: Muestra una pequeña ventana informativa con algunos atajos de teclado útiles.
- **Snippets**: Muestra una lista de los snippets disponibles desde el [Template Builder](/es/platform/channels/templates.html#snippets) y se copia su código para referenciarlos en el widget.
- **Cambios**: Si se han guardado cambios y no han publicado, mostrará este listado de todas las veces guardadas cada uno de los archivos (JS, CSS, y HTML). Al hacer click en una sub-versión, se cambia el contenido de la pestaña por el contenido de la sub-versión que se hizo click.

:::tip Tip
Para no perder los cambios que tienes actualmente, se debe guardar antes de saltar entre sub-versiones, de tal forma que siempre pueda volver a la última versión guardada en la lista de cambios.
:::

:::tip Tip
Cuando se publica el widget, no se observarán cambios disponibles. Esto es porque cada versión parte sin cambios desde la versión productiva. Si se restaura el widget a una versión anterior, también lo harán las sub-versiones, por lo que se puede acceder a todas las instancias en que se guardaron cambios en esa versión.
:::

En las tres pestañas del widget se puede hacer uso de Liquid. Para más información revise [la documentación asociada a Liquid.](/es/platform/channels/liquid-markup.html)

En la columna de propiedades se pueden ver: 

- **Nombre**: Permite cambiar el nombre del widget
- **Tags**: Permite añadir tags a un widget. Los tag son de uso administrativo y sirven para buscar y filtrar los widgets y así poder encontrarlos rápidamente.
- **Páginas que usan este widget**: Verás un listado de páginas que están usando este widget. Mientras veas páginas en este listado, no podrás despublicar ni archivar el widget.

:::warning Atención
Si eliminas un widget de una página y publicas, seguirás viendo esa página en este listado dado que el widget sigue referenciado en los respaldos de esa página. Desde la versión 9.1.10 en adelante, puedes despublicar cualquier widget publicado, incluso si está en uso. Las referencias activas en las páginas quedarán inactivas, por lo que no verás el widget en el sitio si lo despublicaste. Además, podrás archivar cualquier widget que no esté publicado, de tal forma que si aun existen referencias en algunas páginas del widget que quieres archivar, estas se eliminarán al momento de archivar el widget. 
:::

## Crear un Widget
Para crear un nuevo Widget y tener un _micro frontend_ para tus sitios y publicaciones, sigue estos pasos:
1. Dentro del menú principal de Modyo Platform, expande Channels y haz click en tu sitio.
1. Haz click en Widgets.
1. Haz click en el botón **+ Nuevo Widget**.
1. Escribe el nombre de tu widget y haz click en **Crear**.
1. Personaliza tu widget usando HTML, CSS, JavaScript, o Liquid.
1. Una vez terminado, haz click en **Publicar**.

## Variables del Widget

En la pestaña de variables puedes ver el listado de variables creadas en el widget, y sus respectivas acciones para:

* **Copiar** el código liquid para usar esa variable.
* **Modificar** la variable
* **Eliminar** la variable.

Junto al nombre de cada variable verás un indicador "sobreescrita" si es que la variable también existe a nivel de cuenta o sitio en las [variables globales](/es/platform/core/key-concepts.html#variables-globales).

Al modificar una variable, podrás decidir el nombre y valor por defecto que tomará esa variable en el widget. Además, podrás decidir si quieres disponibilizar un listado de valores para que al momento de instanciar el widget en una página, se pueda elegir entre estos distintos valores. 

Cuando usas el listado de posibles valores, debes dejar cada valor en una linea nueva, y dejar un `*` delante del valor que quieres que sea tomado como valor por defecto.

Al momento de instanciar el widget en una página, verás que ahora todas las variables que se están usando (ya sean de cuenta, sitio o de widget) se listarán como "deshabilitadas" con su valor por defecto. Si quieres sobreescribir el valor de una variable en particular para esa instancia del widget en esa página, debes seleccionar el checkbox a la izquierda de la variable y cambiar el valor que toma.

:::warning Atención
Al instanciar el widget en una página se listarán todas las variables que ese widget está usando, por lo que si no ves alguna de las variables que están definidas en el widget, es muy probable que no se esté usando la variable en el código del widget.
:::

## Carga síncrona

:::warning Atención
Esta es una funcionalidad experimental y puede estar sujeta a cambios.
:::

Puedes decidir si quieres cargar tus widgets de forma sincrónica, es decir, que el código HTML, CSS, y JavaScript de tu widget se carguen junto con el resto de la página desde el servidor, o bien, que se carguen de forma asincrónica, de tal manera que se cargará todo el contenido estático de la página y una vez que el documento principal esté cargado, el contenido de tu widget se cargará mediante JavaScript. Por defecto, todos los widgets se cargan de forma asincróica.

Para cambiar la forma en que se carga cada widget, debes ir a la vista de edición de la página que contiene el widget, seleccionar el widget y marcar o desmarcar la opción "Carga síncrona".

:::warning Atención
Debes tener en consideración que usar widgets muy pesados de forma sincrónica puede hacer que se vea disminuido el rendimiento de tu página, por lo que debes decidir con cuidado cuales widgets se cargarán de forma síncrona y cuales de forma asíncrona.
:::

## Modyo CLI

La interfaz de línea de comandos de Modyo (CLI) es una herramienta de línea de comandos basada en dos principios de aceleración e integración, estos principios tienen un comando get y push respectivamente.

### Introduction

Primero, necesita instalar la CLI de Modyo globalmente en su máquina local para tener disponible el comando `modyo-cli`, esto le permitirá inicializar un proyecto con algunas decisiones arquitectónicas de front-end predefinidas, o usar para inicializar un widget desde catálogo si tiene acceso.

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
  autocomplete Display autocomplete installation instructions 
  get          Pull a widget from our catalog into a new directory
  help         Display help for modyo-cli
  push         Push widget to Modyo platform
```

:::tip Tip
Las opciones se pueden definir en variables de entorno o dentro de un archivo _.env_ en el directorio raíz del proyecto. Se recomienda la opción de un archivo para evitar la publicación de información delicada en el registro de Github.
:::

La siguiente lista son las variables de entorno que puedes configurar:

```bash
MODYO_BUILD_DIRECTORY=buildDirectoryPath
MODYO_VERSION=version
MODYO_TOKEN=token
MODYO_ACCOUNT_URL=account-url
MODYO_SITE_ID=siteId
MODYO_SITE_HOST=siteHost
MODYO_BUILD_COMMAND=buildCommand
MODYO_REGEX_EXCLUDE=regexToExcludeFiles
```

:::tip Tip
Las opciones se pueden definir en variables de entorno o dentro de un archivo _.env_. Se recomienda la opción de un archivo para evitar la publicación en el registro de Github porque puede contener información delicada
:::

### `modyo-cli autocomplete [SHELL]`

Modyo ofrece la habilidad de autocompletar los comandos de nuestro CLI si se configura esta opción.

```bash
USAGE
  $ modyo-cli autocomplete [SHELL]

ARGUMENTS
  SHELL       shell type

OPTIONS
  -r, --refresh-cache   Refresh cache (ignores displaying instructions)

EXAMPLE
  $ modyo-cli autocomplete
  $ modyo-cli autocomplete bash
  $ modyo-cli autocomplete zsh
  $ modyo-cli autocomplete --refresh-cache
```

### Instrucciones para utilizar MODYO-CLI CLI Autocomplete

1. Agregar autocomplete variable de entorno para tu perfil de zsh y agregarlo a source
```bash
$ printf "eval $(modyo-cli autocomplete:script zsh)" >> ~/.zshrc; source ~/.zshrc
```

:::tip Tip
Después del comando, puedes correr `$ compaudit -D` para verificar que no hay conflictos en los permisos.
:::

2. Prueba que funcione correctamente, e.g.:
```bash
$ modyo-cli <TAB>           #Completar comando
$ modyo-cli command --<TAB> #Completar opción
```

### Obtenga una plantilla para un proyecto

La CLI de Modyo está diseñada para funcionar en base a una arquitectura de micro front-end y acelerará el proceso de inicialización de un widget.

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
  -f, --force        Override folder if exist
  -h, --help         Output usage information
  -o, --organization [default: modyo] Github organization
  -x, --no-install   Don't install packages

EXAMPLE
  $ modyo-cli get name [directory]
```

>Hay algunas plantillas de widgets públicos a los que se puede acceder a través de este comando

```bash
  EJEMPLOS
    $ modyo-cli get modyo-widgets-template-vue [DIRECTORY] #to initialize a widget
```

>Desde este comando y en adelante, puede continuar utilizando el widget como cualquier otro widget vue-cli.

### `modyo-cli push NAME`

El comando `push` es el encargado del integrar el widget al sitio seleccionado en la plataforma Modyo.

Utilizarás un argumento llamado nombre para cargar el widget en la plataforma y algunos indicadores requeridos como token `site_base id` o `host` para identificar la plataforma Modyo que aloja el widget y tienen un indicador adicional para evitar el flujo de proceso manual de la publicación del widget.

```bash
USAGE
  $ modyo-cli push NAME

ARGUMENTS
  NAME  The name of the widget

OPTIONS
  -b, --build-command=build-command      [default: build] Build command in package.json
  -d, --build-directory=build-directory  [default: dist] Build directory path
  -h, --help                             Output usage information
  -i, --site-id=site-id                  Id of the site where the widget will be pushed
  -l, --disable-liquid                   Disable Liquid
  -n, --site-host=site-host              Host of the site where the widget will be pushed
  -p, --publish                          Force widget publication
  -t, --token=token                      (required) Modyo Api token
  -u, --account-url=account-url          (required) URL of your Modyo account ex("https://account.modyo.com")
  -v, --version=8|9                      [default: 9] Version of Modyo platform

EXAMPLE
  $ modyo-cli push <NAME>
```