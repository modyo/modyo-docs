---
search: true
---

# Primeros pasos

Inicializa y publica un widget localmente utilizando Modyo CLI.

## Prerequisitos

Esta guía fue creada para usuarios que ya tienen conocimiento de los siguientes temas:
- [Modyo Platform](/es/platform/)
- Tener [acceso a la API administrativa](/es/platform/core/api.html#bearer-token)

## Instalar Modyo-CLI

La interface de línea de comandos de Modyo te permite interactuar con la plataforma y nuestro catálogo de widgets desde una terminal. Para instalarla, corre el comando:

<code>Vía yarn</code>

```sh
$ yarn global add @modyo/cli
```

<code>Vía npm</code>

```sh
$ npm i -g @modyo/cli
```

> Verifica que la instalación fue correcta usando el comando: `modyo-cli help`

## Inicializar un Widget

La manera mas rápida de inicializar un Widget, es utilizando una de las plantillas de este catálogo como acelerador y modificarlo para tus necesidades. Puedes encontrar el `<nombre-del-Widget` como parte de la documentación del Widget.

1. Usa el comando `get` de `modyo-cli` para descargar los archivos necesarios para el widget:

```bash
modyo-cli get <nombre-del-Widget> <directorioDestino>
```

Por ejemplo si queremos usar la plantilla de `Crédito de Consumo` de la Banca de Personas el comando sería el siguiente:

```shell
modyo-cli get modyo-widgets-retail-consumer-loan ~/Desktop/MyLoanWidget
```

2. Cambia de directorio e inicializa el servidor en modo de desarrollo:

```shell
cd ~/Desktop/MyLoanWidget && yarn serve
```

:::warning Alerta
Si encuentras problemas para compilar, prueba instalar una version compatible de postCSS con esta linea

`npm i -D @fullhuman/postcss-purgecss@3.0.0 postcss@7.0.351`
:::

## Publicar un Widget

Para cargar nuestro Widget a la plataforma y publicarlo, usaremos el comando `push` de `modyo-cli`. Esto se puede hacer de manera local o usando integración continua (recomendado).

1. Crea un archivo de variables de entorno `.env` en la raíz del proyecto con las siguientes variables:

```shell
MODYO_ACCOUNT_URL=[accountUrl] //URL de la cuenta dueña del sitio
MODYO_VERSION=9                //La versión de la plataforma Modyo
MODYO_TOKEN=[siteToken]        //El token para accesar a la API administrativa
MODYO_SITE_HOST=[siteHost]     //El nombre de Host, localizado dentro de la plataforma, en la sección de sitios
MODYO_WIDGET_NAME=[widgetName] //El nombre del widget
MODYO_BUILD_COMMAND=build      //El comando para package.json (default: build) 
MODYO_BUILD_DIRECTORY=dist     //La ruta del widget (default: dist) 
```

> En caso de no usar un archivo de variables de entorno, también se pueden mandar los datos necesarios directamente desde la línea de comandos. Por ejemplo:

```
modyo-cli push miWidget -b build -d dist -n miHost -v 9 -u "https://test.miModyo.com" -t $TOKEN 
```

:::tip Tip
Para saber más acerca de como obtener un token de acceso a la API, ve [API de administración](/es/platform/core/api.html)

Para saber todas las opciones disponibles para `modyo-cli push`, ve [Modyo-CLI Push](/es/platform/channels/widgets.html#modyo-cli-push-name)
:::

<img src="/assets/img/widgets/host.png" alt="Image displaying where to find accountURL and siteHost">

2. Abre una terminal en el proyecto y usa `push` para enviar el widget a la plataforma:

```shell
modyo-cli push
```

Una vez terminado el proceso de carga, el Widget estará disponible en la sección **Widgets** de nuestro sitio esperando para ser revisado y publicado.

<img src="/assets/img/widgets/widgets_list.png" alt="Image displaying your new Widget in Modyo Platform">

Si queremos que el Widget se publique automáticamente al terminar la carga, podemos usar la opción `--publish`.

```shell
modyo-cli push --publish
```

### Plantillas de widget

En nuestro catálogo de widgets, ofrecemos plantillas que contienen lo mínimo para subir un widget a Modyo Platform. Las plantillas las puedes encontrar en los siguientes frameworks:

- [Vue](https://github.com/modyo/modyo-widgets-template-vue)
- [Angular](https://github.com/modyo/modyo-widgets-template-angular)
- [React](https://github.com/modyo/modyo-widgets-template-react)