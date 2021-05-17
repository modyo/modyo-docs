---
search: true
---

# Primeros pasos

 Si nunca has usado la plataforma Modyo y/o los Widgets, te recomiendo empezar por [aquí](/platform/). Ademas esta guía asume que tienes el [modyo-cli](/platform/channels/Widgets.md#modyo-cli) instalado y que has leído su [documentación](/platform/channels/Widgets.md#modyo-cli).

:::tip Token de acceso al API
Para poder usar los Widgets de este catálogo, necesitas tener un token de acceso de API que te permitirá descargarlos para su uso. Éste lo puedes conseguir con tu organización o directamente con Modyo.
:::

### Iniciar un Widget

La manera mas rápida de iniciar un Widget, es utilizando una de las plantillas de este Catalogo como acelerador y modificarla para nuestras necesidades.
Para utilizar una de nuestras plantillas usaremos el comando `GET` del `modyo-cli`:

```bash
modyo-cli get nombre-del-Widget nombreCarpeta
```

Por ejemplo si queremos usar la plantilla de `Crédito de Consumo` de la Banca de Personas el comando seria el siguiente:

```shell
modyo-cli get modyo-widgets-retail-consumer-loan ~/Desktop/MyLoanWidget
```

Y para iniciar el servidor en modo de desarrollo:

```shell
cd ~/Desktop/MyLoanWidget && yarn serve
```

### Publicar un Widget

Para cargar nuestro Widget a la plataforma y publicarlo, usaremos el comando `PUSH` del `modyo-cli`. Esto se puede hacer de manera local o usando integración continua (recomendado).

Antes de poder cargar y publicar nuestro Widget de manera local, debemos crear un archivo de variables de entorno `.env` en la raíz del proyecto con las siguientes variables:

```shell
MODYO_TOKEN=[siteToken]
MODYO_ACCOUNT_URL=[accountUrl]
MODYO_SITE_HOST=[siteHost]
MODYO_WIDGET_NAME=[widgetName]
```

Sigue [ésta](/es/widgets/guides/ci-cd.html#despliegue-de-un-widget-con-github-actions) guía para obtener un token que nos permita cargar y publicar el Widget.

El **accountUrl** es el la URL de la cuenta dueña del sitio y el **siteHost** lo podemos buscar en la sección **Channels --> Sites** y revisar la columna host del listado de sitios.

![Host](/assets/img/widgets/host.png)

Con el archivo `.env` creado y los valores agregados podemos cargar el Widget a nuestro sitio:

```shell
modyo-cli push
```

Una vez terminado el proceso de carga, el Widget estará disponible en la sección **Widgets** de nuestro sitio esperando para ser revisado y publicado.

![widgets-list](/assets/img/widgets/widgets_list.png)

Si queremos que el Widget se publique automáticamente al terminar la carga, podemos usar la opción `--publish` del comando `PUSH`

```shell
modyo-cli push --publish
```

