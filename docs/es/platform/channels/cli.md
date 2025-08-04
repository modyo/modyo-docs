---
search: true
---

# Modyo CLI

La Interfaz de Línea de Comandos de Modyo (CLI) es una herramienta basada en dos principios fundamentales: aceleración e integración, implementados a través de los comandos `get` y `push`, respectivamente.

 #### Beneficios de la CLI de Modyo

- **Trabajo local**: Permite crear widgets de cualquier tamaño o complejidad desde tu entorno local.
- **Almacenamiento en repositorios locales**: Facilita la gestión de widgets y la colaboración con otros desarrolladores mediante sistemas de control de versiones.
- **Reutilización de widgets**: Permite crear un widget una vez y reutilizarlo en múltiples sitios y ocasiones.

## Instalación

Para usar la Línea de Comandos de Modyo, primero debes instalarla globalmente en tu máquina local. Esto habilitará el comando `modyo-cli`, que permite inicializar un proyecto con decisiones arquitectónicas de front-end predefinidas mediante la plantilla base de Modyo o con una experiencia del catálogo de [Dynamic Framework](https://dynamicframework.dev).

Tienes dos opciones para usar el CLI de Modyo:

- Instalación global mediante NPM o Yarn
```bash
$ npm i -g @modyo/cli #via npm
$ yarn global add @modyo/cli #via yarn
```

- Ejecutarlo sin instalación mediante npx

```bash
$ npx @modyo/cli #via npx
$ npx @modyo/cli@latest #via npx - señalando una versión en particular
```


Para comprobar la instalación y confirmar la versión del CLI, ejecuta este comando:

```bash
$ modyo-cli version
@modyo/cli/3.3.0 darwin-arm64v8 node-v21.2.0
```

:::tip Tip
En algunos casos, es necesario recargar el perfil de la terminal o iniciar una nueva sesión para que el comando `modyo-cli` esté disponible.
:::

Modyo ofrece la habilidad de configurar el autocompletado de los comandos del CLI. Para obtener instrucciones sobre cómo configurarlo, ejecuta uno de los siguientes comandos:

```bash
$ modyo-cli autocomplete zsh
# o
$ modyo-cli autocomplete bash
```

## Configuración del entorno

El siguiente paso es configurar tu proyecto para facilitar la carga de widgets en la plataforma Modyo y su inclusión en las páginas. Aunque puedes especificar todo como parámetros en la llamada `push`, se recomienda definir un conjunto de variables de entorno en un archivo `.env`. Este archivo te permitirá especificar atributos como la URL de la cuenta, el sitio donde se alojará y el token de acceso, entre otros.

#### Acciones Previas

1. **Obtener un token de acceso a Modyo**: Para obtener el token, necesitas tener un usuario o [crear uno](/es/platform/core/roles.html#crear-usuario) con al menos el [rol](/es/platform/core/roles.html#roles) de `site developer-cli` en los sitios o stages donde desplegarás tu widget. Una vez creado el usuario, puedes [configurarle un token de acceso](/es/platform/core/api.html#autenticacion). Este token se utilizará para configurar y activar los despliegues en la plataforma.

2. **Identificar la aplicación donde publicarás**:
Para obtener el ID de tu aplicación, ve al resumen de tu aplicación. Se recomienda utilizar este valor siempre que sea posible. Si necesitas utilizar el site host, lo encontrarás en la sección general de la configuración de tu aplicación.

#### Configuración del Archivo .env

 Después de obtener la información de tu aplicación y generar los tokens requeridos, configura el archivo `.env` con los datos correspondientes.

 Puedes utilizar el archivo de ejemplo `.env.example` incluido en la plantilla base. Este archivo contiene las variables necesarias predefinidas y una breve descripción de cada una.


```bash
# Base URL of your Modyo organization
MODYO_ACCOUNT_URL=https://advocate.modyo.cloud/
# Either the host or the ID where you will deploy your micro frontend (not both)
# MODYO_SITE_HOST=my-site
MODYO_SITE_ID=77
# Token for authorizing the deployment, obtained from Modyo
MODYO_TOKEN=gT0ogW43lSy4nV9cYtc_hH0i_sUNq01q-12ptFzoW8
# Major version of the Modyo platform where the deployment will take place (8, 9 or 10)
MODYO_VERSION=10
# Directory containing the micro frontend bundle
MODYO_BUILD_DIRECTORY=build
# Name to identify your Micro Frontend in Modyo
MODYO_WIDGET_NAME=my-project
# Directive necessary for safely removing some libraries from the liquid parser
MODYO_DISABLE_LIQUID_REGEX=raw
```

#### Descripción de Variables en el .env

* `MODYO_ACCOUNT_URL` URL del dominio donde se hará el despliegue en Modyo.
* `MODYO_SITE_HOST` Host del sitio donde quieres desplegar el widget. No es necesario si especificas el ID del sitio.
* `MODYO_SITE_ID` ID del sitio donde se hará el despliegue.
* `MODYO_TOKEN` Token de acceso del usuario para los despliegues.
* `MODYO_VERSION` Versión de la plataforma Modyo. Para versiones antiguas es 8 y la actual es 10.
* `MODYO_BUILD_DIRECTORY` Nombre de la carpeta que contiene el resultado del build, como "dist" o "build" según el framework utilizado.
* `MODYO_WIDGET_NAME` Nombre que tendrá el widget después de ser desplegado en la plataforma.
* `MODYO_DISABLE_LIQUID_REGEX` Define una expresión regular para seleccionar archivos que necesitan deshabilitar el uso de Liquid, por ejemplo, archivos de plantillas donde es probable que la definición o el uso de variables colisionen con el uso en Liquid.

## Inicialización de un nuevo proyecto

La forma más rápida y fácil de crear tu primer widget es utilizando la plantilla base en React de nuestro framework mediante el comando `get`.

```bash
$ modyo-cli get dynamic-react-base-template my-project-name
```
Esto inicializa un proyecto funcional para comenzar un nuevo desarrollo.

Modyo tiene también un conjunto de plantillas de experiencias financieras que agilizan aún más el desarrollo de soluciones en el ámbito de la banca digital e industria financiera. Puedes encontrar información sobre estas experiencias y cómo obtener sus plantillas en la sección [Experiencias](https://dynamicframework.dev) de la documentación de [Dynamic Framework](https://dynamicframework.dev).

:::tip Tip
Todas las plantillas de [Dynamic Framework](https://dynamicframework.dev) tienen un archivo README con información sobre sus requisitos y uso.
:::

Una organización puede, también, crear sus propias plantillas para personalizar el proceso de inicialización. Para obtener una plantilla personalizada, utiliza la opción `organization`.

```bash
$ modyo-cli get --organization=myOrganization my-custom-template-repo my-project-name
```
A partir de este punto, tienes ya un proyecto funcional y puedes obtener sus dependencias y ejecutar el servidor integrado.

```bash
$ cd my-project-name
$ npm install
$ npm run start
```
En un navegador web visita [`http://localhost:8081/`](http://localhost:8081/) para ver el proyecto inicializado.


## Comandos del CLI
Los comandos disponibles en el CLI de Modyo y la descripción de cada una de sus opciones, son:

### `modyo-cli (-v|--version|version)`
Imprime la versión de `modyo-cli`.

```bash
$ modyo-cli (-v|--version|version)
@modyo/cli/3.3.0 darwin-arm64v8 node-v21.2.0
```

### `modyo-cli help`
Muestra ayuda contextual del comando indicado.

```bash
USAGE
  $ modyo-cli help [COMMAND]

ARGUMENTS
  autocomplete Display autocomplete installation instructions
  get          Pull a widget from our catalog into a new directory
  help         Display help for modyo-cli
  push         Push widget to Modyo platform
```

### `modyo-cli autocomplete`

Muestra instrucciones de autocompletado, en caso de configurarse la opción.

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

### `modyo-cli get`

El comando `get` se usa para obtener una plantilla de widget de nuestro [catálogo de experiencias](https://dynamicframework.dev) utilizando un token proporcionado por Modyo.

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

### `modyo-cli push`

Integra un widget escrito en Vue al sitio seleccionado de Modyo Platform.

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
  -v, --version=9|10                      [default: 10] Version of Modyo platform

EXAMPLE
  $ modyo-cli push <NAME>

```

### `modyo-cli preview`

El comando `preview` te permite previsualizar un widget localmente para depurar su código en un entorno local antes de publicarlo.

#### Requisitos

Para utilizar el comando `preview`, asegúrate de cumplir con los siguientes requisitos:

- Un archivo [.env](https://docs.modyo.com/es/platform/channels/cli.html#configuracion-inicial) correctamente configurado. Los campos `MODYO_ACCOUNT_URL`, `MODYO_SITE_HOST` o `MODYO_SITE_ID` y `MODYO_TOKEN ` son requeridos.
- Un servidor local en ejecución con el widget que deseas previsualizar.

#### Pasos para Previsualizar un Widget

Una vez tengas tu archivo `.env` configurado y tu proyecto funcionando en el servidor local, sigue estos pasos:

1. Abre una nueva ventana de terminal.
2. Ejecuta el comando `modyo-cli preview`.

:::warning Importante

Para visualizar un cambio, debes refrescar manualmente tu web app. Haz click en **refresh** para cargar los cambios.

:::

#### Variables Predeterminadas
Modyo usa variables predeterminadas para la previsualización de widgets, puedes modificarlas según requieras. Las variables predefinadas son:

  - `MODYO_LOCAL_PORT`: Puerto del servidor local (por defecto: `8080`)
  - `MODYO_LOCAL_DOM_ID`: El ID del elemento contenedor del widget (por defecto: `widgetName`)
  - `MODYO_LOCAL_ENTRY_JS`: El archivo JavaScript principal (por defecto: `main.js`)


Además, puedes seleccionar si quieres previsualizar tu widget en la versión publicada de tu sitio o en la versión editable. Para ello, da click en la casilla debajo de **templates**. El texto cambiará de **publicada** a **editable**.


Estos comandos te permiten seleccionar los entry points locales que quieres usar.


    OPTIONS

    -p, –port=<value> [default: 8080) Deploy port local widget running
    -s, –dom-id=<value> [default: widgetName] Container id of the widget
    -j, –entry-js=<value> [default: main.js] Entry JS file of the widget

    EXAMPLE

    MODYO_LOCAL_PORT=8080
    MODYO_LOCAL_DOM_ID=widgetName
    MODYO_LOCAL_ENTRY_JS=main.js



### Code Splitting

Los [widgets](/es/platform/channels/widgets.html#widgets) te permiten desarrollar funcionalidades complejas en tus aplicaciones web de Modyo, incrementando así la funcionalidad de tus sitios.

Sin embargo, al incluir librerías externas o incrementar la complejidad de un widget, puedes enfrentar tiempos de carga excesivos o exceder los límites de tamaño establecidos para los widgets en Modyo, lo que afecta negativamente tanto la experiencia de desarrollo como la del usuario.

La técnica de _code splitting_ te permite dividir el código de tus widgets en componentes que se cargan bajo demanda o en paralelo, resolviendo estos problemas. Los beneficios de code splitting incluyen:

* Reducción en la velocidad de carga.
* Mejora en el tiempo de interacción.
* Eliminación de restricciones en el tamaño de los widgets.
* Aumento del rendimiento.

#### Comandos de CLI para code splitting

Con la interfaz de línea de comandos (CLI) de Modyo, puedes publicar y actualizar un widget desarrollado externamente o en el que has implementado code splitting.

Cuando creas un widget con Modyo CLI, tendrá una etiqueta con el texto CLI junto a su nombre.

En el caso de widgets creados con code splitting, debes especificar cuál es el archivo principal y cuáles son los chunks que se cargaran dinámicamente, según sean requeridos.

Para empaquetar un archivo como zip en Modyo CLI usa las siguientes opciones:

 * zip: empaqueta el bundle del widget para enviarlo a la plataforma.
 * zip-entry-css: archivo CSS principal del widget.
 * zip-entry-js: archivo JS principal del widget.

Ejemplo:

```bash
modyo-cli push --zip --zip-entry-css=main.css --zip-entry-js=main.js
```


## Despliegue
Una vez terminado widget, puedes prepararlo para su publicación con el comando `build`.

Este comando realizará las acciones necesarias para preparar tu widget para producción, incluyendo la limpieza y minificación de los archivos finales:

```bash
$ npm run build
```

Para enviarlo a Modyo, utiliza el comando `push`. Este comando utiliza tus configuraciones para seleccionar un sitio o stage de destino y comprobar si el widget ya existe en Modyo. Según el caso, lo creará o lo actualizará en la plataforma.

```bash
$ modyo-cli push
```

Puedes publicar de forma inmediata el micro-frontend en la plataforma utilizando el parámetro `-p`.

```bash
$ modyo-cli push -p
```

:::warning Atención
El usuario dueño del token debe tener un rol de [site reviewer o admin](/es/platform/core/roles.html#roles) en el sitio en el cual estás desplegando el widget para que se pueda realizar la publicación correctamente.
:::

Una vez que un widget está desplegado y publicado en Modyo, está disponible para ser utilizado en las páginas del sitio al que pertenece.

Si has definido [variables](/es/platform/core/key-concepts.html#variables-globales) sus valores pueden ser especificados a nivel global o particular a cada instancia del widget.
