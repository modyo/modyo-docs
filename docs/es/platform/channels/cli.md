---
search: true
---

# Modyo Command Line Interface

La interfaz de línea de comandos de Modyo (CLI) es una herramienta de línea de comandos basada en dos principios de aceleración e integración, estos principios tienen un comando get y push respectivamente.

## Instalación

Primero, necesitas instalar la CLI de Modyo globalmente en su máquina local para tener disponible el comando `modyo-cli`, esto le permitirá inicializar un proyecto con algunas decisiones arquitectónicas de front-end predefinidas mediante nuestra plantilla base, o inicializar desde alguna de nuestras experiencias predefinidas disponibles en el catalogo del dynamic framework.

Para instalar el modyo-cli globalmente para ser usado desde un terminal, puede usar una alguna de estas opciones:

```sh
$ npm i -g @modyo/cli #via npm
$ yarn global add @modyo/cli #via yarn
```
o bien puede ejecutarlo sin instalación mediante npx

```sh
$ npx @modyo/cli #via npx
$ npx @modyo/cli@version #via npx - señalando una versión en específico
```
Puede comprobar que la instalación fue correcta y ver la versión instalada del CLI ejecutando:

```sh
$ modyo-cli version
@modyo/cli/3.3.0 darwin-arm64v8 node-v21.2.0
```

:::tip Tip
Puede que en algunos casos sea necesario volver a cargar el profile del terminal o iniciar una nueva sesión para tener disponible el comando `modyo-cli`
:::


Modyo ofrece la habilidad de configurar un autocompletado de los comandos del CLI. Puedes acceder a las instrucciones de su configuración mediante:

```sh
$ modyo-cli autocomplete zsh
# o
$ modyo-cli autocomplete bash
```

## Inicialización de un nuevo proyecto

La vía mas rápida y fácil de comenzar a crear nuestro primer micro-frontend es mediante el uso de la plantilla base en react de nuestro framework mediante el comando `get` del CLI

```sh
$ modyo-cli get dynamic-react-base-template my-project-name 
```
el cual nos inicializará un proyecto funcional con todo lo necesario para comenzar un nuevo desarrollo.

Tambien tenemos disponible un conjunto de plantillas de experiencias financieras las cuales nos permiten acelerar y agilizar aún mas el desarrollo de soluciones en el ámbito de la banca digital e industria financiera. Las experiencias y como obtener sus plantillas lo puedes encontrar en la [sección Experiencias](https://docs.modyo.com/es/dynamic/experiences/retail/dashboard.html) de la documentación del [dynamic framework](https://docs.modyo.com/es/dynamic/#dynamic-framework).

:::tip Tip
Cada plantilla obtenida del dynamic framework cuenta con un archivo README con una pequeña documentación en la cual se indican sus requerimientos y como utilizarla.
:::

Como organización también pueden crear sus plantillas para la inicialización a medida y con sus propios estándares. Para obtenerlos pueden hacerlo mediante la opción `organization`

```sh
$ modyo-cli get --organization=myOrganization my-custom-template-repo my-project-name
```
desde este punto ya se cuenta con un proyecto funcional el cual puede ser visualizado obteniendo sus dependencias y ejecutando el servidor integrado

```sh
$ npm install
$ npm run start
```
en un navegador web puedes visitar la url [`http://localhost:8081/`](http://localhost:8081/) para ver en acción el proyecto recien inicializado.

## Configuración inicial

El siguiente paso es configurar nuestro proyecto para facilitar la carga del micro-frontend en la plataforma Modyo y poder incluirlo en lás páginas que en él se construyen. Si bien todo puede ser indicado como parámetros en la llamada `push` existe un archivo `.env` en el cual se puede definir un conjunto de variables de entorno para especificar todos los atributos tales como url de la cuenta, el sitio donde se alojará y el token de accesso entre otros.
para esta configuración necesitamos de algunas acciones previas

### Obtención de un token de acceso a Modyo

Lo primero que debemos obtener es el acceso a Modyo, para esto debemos [crear un usuario](https://docs.modyo.com/es/platform/core/roles.html#crear-usuario) que por lo menos tenga el [rol](https://docs.modyo.com/es/platform/core/roles.html#roles) de developer-cli en los sitios o stages en los que desplegaremos nuestro micro-frontend, luego [configurar un access token](https://docs.modyo.com/es/platform/core/api.html#autenticacion) para este usuario el cual utilizaremos para obtener la información necesaria para la configuración y para gatillar los despliegues a la plataforma.

### Identificación del sitio o stage
Luego debemos tener la información del sitio o stage en el cual se desplegará el micro-frontend y obtener algunos datos escenciales como la url de la cuenta, el host o id del sitio o el id de algun stage del sitio. Para esto podemos hacerlo mediante el API administrativa de modyo usando el access token obtenido previamente y adjuntarlo como header de autorización del tipo Bearer de la siguiente forma:

```sh
$ curl https://my-org.modyo.cloud/api/admin/sites\?only\[\]\=id\&only\[\]\=host\&only\[\]\=stages -H 'Authorization: Bearer gT0ogW43lSy4nV9cYtc_hH0i_sUNq01q-12ptFzoW8'
```
el cual tendrá como salida el siguiente listado:
```sh
{
  "sites": [
    {
      "id": 1,
      "host": "my-Site",
      "stages": []
    },
    {
      "id": 2,
      "host": "portal",
      "stages": [
        {
          "id": 3,
          "uuid": "7a5d4b2d-de98-4c7f-8f0d-2c08599a218c",
          "name": "Portal",
          "host": "portal",
          "stage_name": "main",
          "created_at": "2019-03-15T11:02:07.000-03:00",
          "original_stage": "",
          "base_stage": true
        },
        {
          "id": 4,
          "uuid": "951b258b-5c86-4e7b-a21a-8e605e9cf0de",
          "name": "Portal Certification",
          "host": "cert-portal",
          "stage_name": "Cert",
          "created_at": "2022-08-10T18:03:19.000-04:00",
          "original_stage": "main",
          "base_stage": false
        }
      ]
    }
  ]
}

```

el listado muestra los sitios con sus respectivos stages a los cuales el usuario tiene acceso. De este listado podemos obtener el id y el host que serán requeridos en la configuración para el despliegue.

### Archivo .env
Ya con la información del sitio al cual haremos el despliegue debemos configurar nuestro archivo `.env`,  como base podemos utilizar renombrar el archivo `.env.example` que viene incluido en la plantilla base el cual trae predefinidas las variables necesarias y una breve descripción de cada una de ellas.
```sh
# The url base of the organization in Modyo
MODYO_ACCOUNT_URL=https://my-org.modyo.cloud/
# Where you will deploy your micro frontend, you can use either the host or the ID but not both.
# MODYO_SITE_HOST=my-site
MODYO_SITE_ID=1
# The token authorizing the deployment, taken from Modyo
MODYO_TOKEN=gT0ogW43lSy4nV9cYtc_hH0i_sUNq01q-12ptFzoW8
# The major version of the Modyo platform where the deployment will take place (8 or 9)
MODYO_VERSION=9
# The name of the directory that contains the bundle of the micro frontend
MODYO_BUILD_DIRECTORY=build
# The name that will identify your Micro Frontend in Modyo
MODYO_WIDGET_NAME=my-project
# This directive is necessary to safely remove some libraries from the liquid parser
MODYO_DISABLE_LIQUID_REGEX=raw
```
* `MODYO_ACCOUNT_URL`: Es la url del dominio de nuestro despliegue modyo.
* `MODYO_SITE_HOST`: Es el host del sitio donde queremos hacer el despliegue de nuestro micro-frontend, no es necesario si el id del sitio está especificado.
* `MODYO_SITE_ID`: Es el id del sitio donde queremos hacer el despliegue de nuestro micro-frontend. 
* `MODYO_TOKEN`: Es el access token del usuario el cual será utilizado para los despliegues del micro-frontend
* `MODYO_VERSION`: Es la versión de modyo, para versiones legacy es 8 y la actual es 9
* `MODYO_BUILD_DIRECTORY`: Indicamos el nombre de la carpeta que produce el build según el framework utilizado, por ejemplo dist o build
* `MODYO_WIDGET_NAME`: es el nombre que tendrá el widget despues que se despliegue en la plataforma
* `MODYO_DISABLE_LIQUID_REGEX`: Define una expresión regular para seleccionar los archivos que necesiten deshabilitar el uso de liquid, por ejemplo archivos de templates donde es probable que la definición o uso de variables colisionen con el uso en liquid

## Despliegue
Una vez que tenemos todo configurado y listo para llevar nuestro micro-frontend a Modyo debemos construir nuestro widget:

```sh
$ npm run build
```
Este commando hará todo lo necesario para dejar el micro-frontend listo para producción, limpiando y minificando los archivos finales. Para enviar a Modyo hacemos uso del commando `push` el cual utilizará nuestras configuraciones para seleccionar el sitio o stage y comprobará si el micro-frontend existe previamente en Modyo, según el caso lo creará o actualizará en la plataforma.

```sh
$ modyo-cli push
```

Mediante el commando push podemos gatillar el publicado automático del micro-fronent en la plataforma esto lo realizamos con el parámetro `-p`

```sh
$ modyo-cli push -p
```

:::tip Nota
El usuario dueño del token debe tener un rol de reviewer o admin en el sitio en el cual estamos desplegando nuestros micro-frontend para que se pueda realizar la publicación correctamente.
:::

## Siguientes pasos
Cuando un widget está desplegado y publicado en la plataforma Modyo, está disponible para ser utilizado en las páginas del sitio al que pertence, si se hace uso de [variables](http://localhost:8080/es/platform/core/key-concepts.html#variables-globales) sus valores pueden ser especificados en distintos niveles para ser establecidos a nivel global o particular a cada instancia del micro-frontend, para obtener mas información sobre lo que puedes hacer en los sitios de Modyo consulta la [documentación de Channels](https://docs.modyo.com/en/platform/channels/#frontmatter-title) especificamente la sección de [Página de Widgets](https://docs.modyo.com/en/platform/channels/pages.html#widget-page) y [widgets](http://localhost:8080/es/platform/channels/widgets.html)

## Guía rápida

Los comandos disponibles del CLI son:

- [modyo-cli (-v|--version|version)](#modyo-cli-version)
- [modyo-cli help [COMMAND]](#modyo-cli-help-command)
- [modyo-cli autocomplete [SHELL]](#modyo-cli-autocomplete-shell)
- [modyo-cli get NAME [DIRECTORY]](#modyo-cli-get-name-directory)
- [modyo-cli push NAME](#modyo-cli-push-name)

A continuación mostramos la ayuda de cada uno de los comandos disponibles y la descripción de cada una de sus opciones.

### `modyo-cli (-v|--version|version)`
Imprime la versión de `modyo-cli`.

```bash
$ modyo-cli (-v|--version|version)
@modyo/cli/3.3.0 darwin-arm64v8 node-v21.2.0
```

### `modyo-cli help`
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

### `modyo-cli help autocomplete`

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

### `modyo-cli help get`

El comando `get` se usa para obtener una plantilla de widget de nuestro [catálogo de widgets](/es/widgets/) utilizando un token proporcionado por Modyo.

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

### `modyo-cli help push`

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
  -v, --version=8|9                      [default: 9] Version of Modyo platform

EXAMPLE
  $ modyo-cli push <NAME>

```
