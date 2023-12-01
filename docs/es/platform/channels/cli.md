---
search: true
---

# Modyo Command Line Interface

La Interfaz de Línea de Comandos de Modyo (CLI) es una herramienta basada en dos principios fundamentales: aceleración e integración. Estos principios se implementan a través de los comandos _get_ y _push_, respectivamente.

Los principales beneficios de trabajar con la CLI de Modyo son:
- **Trabajar en local:** Permitiendo crear widgets de cualquier tamaño o complejidad
- **Almacenar los widgets en repositorios locales:** Facilitando la gestión de los widgets y la colaboración con otros desarrolladores.
- **Crear un widget una vez y reusarlo en múltiples sitios**

## Instalación

Para usar la Línea de Comandos de Modyo, primero debes instalarla globalmente en tu máquina local. Esto te permitirá usar el comando `modyo-cli`, eque te permite inicializar un proyecto con algunas decisiones arquitectónicas de front-end predefinidas mediante la plantilla base de Modyo o con una experiencia del catálogo de [Dynamic Framework](https://docs.modyo.com/es/dynamic/).


Para usar el CLI de Modyo puedes optar por alguna de las siguientes opciones:
- Instalar modyo-cli globalmente para usar desde la terminal


```sh
$ npm i -g @modyo/cli #via npm
$ yarn global add @modyo/cli #via yarn
```

- Ejecutarlo sin instalación mediante npx

```sh
$ npx @modyo/cli #via npx
$ npx @modyo/cli@version #via npx - señalando una versión en específico
```

Para comprobar que la instalación fue correcta y confirmar la versión instalada del CLI, ejecuta este comando:

```sh
$ modyo-cli version
@modyo/cli/3.3.0 darwin-arm64v8 node-v21.2.0
```

:::tip Tip
En algunos casos, es necesario volver a cargar el perfil de la terminal o iniciar una nueva sesión para que el comando `modyo-cli` esté disponible.
:::

Modyo ofrece la habilidad de configurar el autocompletado de los comandos del CLI. Para obtener instrucciones sobre cómo configurarlo, ejecuta uno de los siguientes comandos:

```sh
$ modyo-cli autocomplete zsh
# o
$ modyo-cli autocomplete bash
```

## Inicialización de un nuevo proyecto

La forma más rápida y fácil de crear tu primer micro-frontend es utilizando la plantilla base en React de nuestro framework mediante el comando `get`.

```sh
$ modyo-cli get dynamic-react-base-template my-project-name
```
Esto inicializa un proyecto funcional para comenzar un nuevo desarrollo.

Modyo tiene también un conjunto de plantillas de experiencias financieras que agilizan aún más el desarrollo de soluciones en el ámbito de la banca digital e industria financiera. Puedes encontrar información sobre estas experiencias y cómo obtener sus plantillas en la sección [Experiencias](https://docs.modyo.com/es/dynamic/experiences/retail/dashboard.html) de la documentación de [Dynamic Framework](https://docs.modyo.com/es/dynamic/#dynamic-framework).

:::tip Tip
Todas las plantillas de [Dynamic Framework](https://docs.modyo.com/es/dynamic/) tienen un archivo README con información sobre sus requisitos y uso.
:::

Una organización puede, también, crear sus propias plantillas para personalizar el proceso de inicialización. Para obtener una plantilla personalizada, utiliza la opción `organization`.

```sh
$ modyo-cli get --organization=myOrganization my-custom-template-repo my-project-name
```
A partir de este punto, tienes ya un proyecto funcional y puedes obtener sus dependencias y ejecutar el servidor integrado.

```sh
$ npm install
$ npm run start
```
En un navegador web visita [`http://localhost:8081/`](http://localhost:8081/) para ver el proyecto inicializado.

## Configuración inicial

El siguiente paso es configurar tu proyecto para facilitar la carga del microfrontend en la plataforma Modyo e incluirlo en las páginas que construyas. Puedes especificar todo como parámetros en la llamada `push`, sin embargo, existe un archivo `.env` en el que puedes definir un conjunto de variables de entorno para especificar todos los atributos, como la URL de la cuenta, el sitio donde se alojará y el token de acceso, entre otros. Para esta configuración, necesitas realizar previamente estas acciones:


1. **Obtener un token de acceso a Modyo:** Para obtener el token necesitas tener un usuario o [crear uno](https://docs.modyo.com/es/platform/core/roles.html#crear-usuario) que tenga como mínimo el [rol](https://docs.modyo.com/es/platform/core/roles.html#roles) de site developer-cli en los sitios o stages donde desplegarás tu micro-frontend. Una vez que hayas creado el usuario, puedes[configurar un token de acceso](https://docs.modyo.com/es/platform/core/api.html#autenticacion) para él. Este token de acceso lo utilizarás para obtener la información necesaria para configurar y activar los despliegues en la plataforma.

2. **Identificar el sitio o stage:** Utiliza la API administrativa de Modyo con el token de acceso obtenido previamente, para obtener la información del sitio o stage en el que se desplegará el microfrontend así como la URL de la cuenta, el host o ID del sitio o el ID de algún stage del sitio. Para ello, adjunta el encabezado de autorización del tipo Bearer de la siguiente manera:

```sh
$ curl https://my-org.modyo.cloud/api/admin/sites\?only\[\]\=id\&only\[\]\=host\&only\[\]\=stages -H 'Authorization: Bearer gT0ogW43lSy4nV9cYtc_hH0i_sUNq01q-12ptFzoW8'
```
El comando devuelve un listado con la información necesaria para configurar tu microfrontend en Modyo. Muestra los sitios, con sus respectivos stages, a los cuales el usuario tiene acceso. De este listado puedes obtener el id y el host que necesitas para configurar el despliegue.

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



3. **Configurar el archivo .env:** Una vez que has obtenido el listado de sitios y stages, donde puedes identificar el ID y el host, configura el archivo `.env` con la información correspondiente. Puedes utilizar el archivo de ejemplo proporcionado, llamado `.env.example`, que viene incluido en la plantilla base, el cual trae predefinidas las variables necesarias y una breve descripción de cada una de ellas.
```sh
# Base URL base of the organization in Modyo
MODYO_ACCOUNT_URL=https://my-org.modyo.cloud/
# Where you will deploy your micro frontend, you can use either the host or the ID but not both.
# MODYO_SITE_HOST=my-site
MODYO_SITE_ID=1
# The token authorizing the deployment, taken from Modyo
MODYO_TOKEN=gT0ogW43lSy4nV9cYtc_hH0i_sUNq01q-12ptFzoW8
# The version of Modyo platform where the deployment will take place (8 or 9)
MODYO_VERSION=9
# The name of the directory that contains the micro frontend's bundle
MODYO_BUILD_DIRECTORY=build
# The name that will identify your Micro Frontend in Modyo
MODYO_WIDGET_NAME=my-project
# This directive is necessary to safely remove some libraries from the Liquid parser
MODYO_DISABLE_LIQUID_REGEX=raw
```
* `MODYO_ACCOUNT_URL` La url del dominio de nuestro despliegue Modyo.
* `MODYO_SITE_HOST` El host del sitio donde quieres hacer el despliegue del micro-frontend. No es necesario si el id del sitio está especificado.
* `MODYO_SITE_ID` El id del sitio donde quieres hacer el despliegue del micro-frontend.
* `MODYO_TOKEN` El token de acceso del usuario que se usará para los despliegues del micro-frontend.
* `MODYO_VERSION` La versión de Modyo. Para versiones antiguas es 8 y la actual es 9.
* `MODYO_BUILD_DIRECTORY` El nombre de la carpeta que contiene el resultado del build, como "dist" o "build" según el framework utilizado.
* `MODYO_WIDGET_NAME` El nombre que tendrá el widget después de desplegarse en la plataforma.
* `MODYO_DISABLE_LIQUID_REGEX` Define una expresión regular para seleccionar archivos que necesitan deshabilitar el uso de Liquid, por ejemplo, archivos de plantillas donde es probable que la definición o el uso de variables colisionen con el uso en Liquid.

## Despliegue
Una vez configurado y listo tu micro-frontend, puedes construir tu widget.

Este comando realizará las acciones necesarias para preparar tu microfrontend para producción, limpiando y minificando los archivos finales.

```sh
$ npm run build
```
Para enviarlo a Modyo, utiliza el comando push. Este comando utiliza tus configuraciones para seleccionar el sitio o stage y comprobar si el microfrontend ya existe en Modyo. Según el caso, lo creará o actualizará en la plataforma.


```sh
$ modyo-cli push
```

Activa la publicación automática del microfrontend en la plataforma mediante el parámetro `-p`.

```sh
$ modyo-cli push -p
```

:::warning Atención
El usuario dueño del token debe tener un rol de [site reviewer o admin](https://docs.modyo.com/es/platform/core/roles.html#roles) en el sitio en el cual estás desplegando el micro-frontend para que se pueda realizar la publicación correctamente.
:::

## Siguientes pasos
Una vez que un widget está desplegado y publicado en Modyo, está disponible para ser utilizado en las páginas del sitio al que pertenece.

Si has definido [variables](http://localhost:8080/es/platform/core/key-concepts.html#variables-globales) sus valores pueden ser especificados a nivel global o particular a cada instancia del microfrontend. Para obtener más información sobre las funcionalidades en los sitios de Modyo, consulta la [documentación de Channels](https://docs.modyo.com/en/platform/channels/#frontmatter-title) especificamente la sección de [página de widgets](https://docs.modyo.com/en/platform/channels/pages.html#widget-page) y [widgets](http://localhost:8080/es/platform/channels/widgets.html)

## Guía rápida
Los comandos disponibles en el CLI de Modyo y la descripción de cada una de sus opciones, son:

- **`modyo-cli (-v|--version|version)`**
Imprime la versión de `modyo-cli`.

```bash
$ modyo-cli (-v|--version|version)
@modyo/cli/3.3.0 darwin-arm64v8 node-v21.2.0
```

- **`modyo-cli help`**
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

- **`modyo-cli help autocomplete`**

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

- **`modyo-cli help get`**

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

- **`modyo-cli help push`**

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
