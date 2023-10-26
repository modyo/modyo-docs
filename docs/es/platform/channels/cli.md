---
search: true
---

# Modyo CLI

La interfaz de línea de comandos de Modyo (CLI) es una herramienta de línea de comandos basada en dos principios de aceleración e integración, estos principios tienen un comando get y push respectivamente.

## Instalación

Primero, necesita instalar la CLI de Modyo globalmente en su máquina local para tener disponible el comando `modyo-cli`, esto le permitirá inicializar un proyecto con algunas decisiones arquitectónicas de front-end predefinidas, o usar para inicializar un widget desde catálogo si tiene acceso.

Para instalar el modyo-cli globalmente, debe usar una de estas opciones:

```bash
$ npm i -g @modyo/cli #via npm
$ yarn global add @modyo/cli #via yarn
```

> Este comando hará que el comando modyo-cli esté disponible en la sesión de terminal globalmente

Los comandos disponibles son:

- [modyo-cli (-v|--version|version)](#modyo-cli-version)
- [modyo-cli help [COMMAND]](#modyo-cli-help-command)
- [modyo-cli autocomplete [SHELL]](#modyo-cli-autocomplete-shell)
- [modyo-cli get NAME [DIRECTORY]](#modyo-cli-get-name-directory)
- [modyo-cli push NAME](#modyo-cli-push-name)

## Plantillas de widget

En nuestro catálogo de widgets, ofrecemos plantillas que contienen lo mínimo para subir un widget a Modyo Platform. Las plantillas las puedes encontrar en los siguientes frameworks:

- [Vue](https://github.com/modyo/modyo-widgets-template-vue)
- [Angular](https://github.com/modyo/modyo-widgets-template-angular)
- [React](https://github.com/modyo/modyo-widgets-template-react)

Puedes clonar estos repositorios, modificarlos a tus necesidades, y usar modyo-cli para hacer un push hacia la plataforma. Para más información de como enviar widgets a Modyo Platform, ve [modyo-cli push NAME](#modyo-cli-push-name).

## `modyo-cli (-v|--version|version)`
Imprime la versión de `modyo-cli`.

```bash
$ modyo-cli (-v|--version|version)
modyo-cli/3.0.6 darwin-x64 node-v12.13.1
```

## `modyo-cli help [COMMAND]`
Muestra ayuda contextual dependiendo del comando que se escriba.

```bash
USAGE
  $ modyo-cli help [COMMAND]

ARGUMENTS
  autocomplete Display autocomplete installation instructions 
  get          Pull a widget from our catalog into a new directory
  help         Display help for modyo-cli
  push         Push widget to Modyo platform
```

La siguiente lista son las variables de entorno que puedes configurar:

```bash
MODYO_ACCOUNT_URL=account-url
MODYO_VERSION=version
MODYO_TOKEN=token
MODYO_SITE_ID=siteId
MODYO_SITE_HOST=siteHost
MODYO_BUILD_COMMAND=buildCommand
MODYO_REGEX_EXCLUDE=regexToExcludeFiles
MODYO_BUILD_DIRECTORY=buildDirectoryPath
```

### Variables de entorno

Para facilitar el proceso de subir tus widgets a la plataforma Modyo, puedes hacer uso del archivo de variables de entorno `.env`. Sigue estos pasos para crear tu archivo:

1. Crea un archivo `.env` en la raíz de tu proyecto.
2. Agrega la siguiente información:

```bash
MODYO_ACCOUNT_URL=test.myModyo.com
MODYO_VERSION=9
MODYO_TOKEN=ak9cb2....a53s
MODYO_SITE_HOST=mySite
MODYO_WIDGET_NAME=myNewWidget
MODYO_BUILD_COMMAND=build
MODYO_BUILD_DIRECTORY=dist
```

3. Al hacer uso de modyo-cli dentro de la raíz de tu proyecto, se agregarán los datos del archivo automáticamente.

:::tip Tip
Recomendamos utilizar un archivo de variables de entorno para facilitar el uso de modyo-cli y evitar el registro de información sensible.
:::

## `modyo-cli autocomplete [SHELL]`

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
$ modyo-cli <TAB>           #Complete command
$ modyo-cli command --<TAB> #Complete option
```

### Obtenga una plantilla para un proyecto

La CLI de Modyo está diseñada para funcionar en base a una arquitectura de micro front-end y acelerará el proceso de inicialización de un widget.

## `modyo-cli get NAME [DIRECTORY]`

El comando `get` se usa para obtener una plantilla de widget de nuestro [catálogo de experiencias](es/dynamic/experiences/) utilizando un token proporcionado por Modyo.

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
    $ modyo-cli get modyo-widgets-template-vue [DIRECTORY] #to initialize a widget
```

>Desde este comando y en adelante, puede continuar utilizando el widget como cualquier otro widget de Vue.

## `modyo-cli push NAME`

Integra un widget escrito en Vue al sitio seleccionado de Modyo Platform.

Utilizarás un argumento llamado nombre para cargar el widget en la plataforma y algunos indicadores requeridos como token `site_base id` o `host` para identificar la plataforma Modyo que aloja el widget y tienen un indicador adicional para evitar el flujo de proceso manual de la publicación del widget.

:::warning Advertencia
Por el momento, Modyo CLI sólo ofrece soporte para widgets hechos y compilados con las herramientas incluídas por defecto de Vue. 
:::

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

### Variables de entorno

Para hacer push hacia la plataforma, es necesario llenar las opciones requeridas. Para esto, hay dos opciones para le envío: escribir el comando con opciones o usar un archivo `.env`. Funcionan de la misma manera pero se implementan diferente.

#### Archivo de variables de entorno

En el directorio raíz del widget, crea un archivo `.env` que contenga los siguientes datos:

```bash
MODYO_ACCOUNT_URL=https://test.myModyo.com
MODYO_VERSION=9
MODYO_TOKEN=ax93...nm3
MODYO_SITE_HOST=myHost
MODYO_SITE_ID=myStage
MODYO_WIDGET_NAME=myWidget
MODYO_BUILD_COMMAND=build
MODYO_BUILD_DIRECTORY=dist 
```

#### Opciones

En una terminal con modyo-cli instalado, es posible hacer push a través de la linea de comandos de la siguiente manera:

```bash
modyo-cli push myWidget -b build -d dist -n myHost -v 9 -u "https://test.myModyo.com" -t $TOKEN 
```

#### Push hacia Stage

Al utilizar nuestra API de administración, también podrás hacer push hacia un stage. Sigue estos pasos para hacer un push hacia tu stage desde Modyo CLI.

1. Haz una llamada a nuestra API de administración */api/admin/sites*, por ejemplo:

``curl -X GET https://test.modyo.com/api/admin/sites`` 

Recibirás un JSON con toda la información relacionada a sitios. Dentro de este JSON, en la información de tu sitio, existe un apartado de *stages* en donde encontrarás el Id necesario para hacer push a este stage, a través de Modyo CLI.

```json
"meta": [...],
"sites": [
    ...,
    "name": "myHost",
    "stages": [
        {
          "id": 1044,
          "uuid": "7a5d4b2d-de98-4c7f-8f0d-2c08599a218c",
          "name": "CLI DEMO",
          "host": "cli-demo",
          "stage_name": "main",
          "created_at": "2019-03-15T11:02:07.000-03:00",
          "original_stage": "",
          "base_stage": true
        },
        {
          "id": 2673,
          "uuid": "951b258b-5c86-4e7b-a21a-8e605e9cf0de",
          "name": "Test Stage CLI DEMO",
          "host": "test-cli-demo",
          "stage_name": "Test",
          "created_at": "2022-08-10T18:03:19.000-04:00",
          "original_stage": "main",
          "base_stage": false
        }
    ],
]
```

2. Abre tu archivo de variables de entorno `.env`. Se debe borrar la variable MODYO_SITE_HOST ya que usaremos el Id del sitio. Para hacer push hacia un stage, solo se puede usar MODYO_SITE_ID. Agrega el MODYO_SITE_ID de la siguiente manera:

```bash
MODYO_ACCOUNT_URL=https://test.myModyo.com
MODYO_VERSION=9
MODYO_TOKEN=ax93...nm3
MODYO_WIDGET_NAME=myWidget
MODYO_BUILD_COMMAND=build
MODYO_BUILD_DIRECTORY=dist
MODYO_SITE_ID=2673
```

3. En tu terminal, haz push a tu stage utilizando Modyo CLI:

``modyo-cli push myWidget``

En caso de querer hacer push a main, se tiene que modificar la variable MODYO_SITE_ID para main o borrar esta variable y usar MODYO_SITE_HOST.