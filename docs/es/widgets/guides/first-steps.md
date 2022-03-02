---
search: true
---

# Primeros pasos

Inicializa y publica un widget localmente utilizando Modyo CLI.

### Prerequisitos

Esta guía fue creada para usuarios que ya tienen conocimiento de los siguientes temas:
- [Modyo Platform](/es/platform/)
- [Interfaz de linea de comandos `modyo-cli`](/es/platform/channels/Widgets.md#modyo-cli) instalada y conocer su [documentación](/es/platform/channels/widgets.html#modyo-cli)
- Tener [acceso a la API administrativa](es/platform/core/api.html#bearer-token)

### Inicializar un Widget

La manera mas rápida de inicializar un Widget, es utilizando una de las plantillas de este catálogo como acelerador y modificarlo para tus necesidades.

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

### Publicar un Widget

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

:::tip Tip
Para saber más acerca de como obtener un token de acceso a la API, vea [API de administración](es/platform/core/api.html)
:::

![Host](/assets/img/widgets/host.png)

2. Abre una terminal en el proyecto y usa `push` para enviar el widget a la plataforma:

```shell
modyo-cli push
```

Una vez terminado el proceso de carga, el Widget estará disponible en la sección **Widgets** de nuestro sitio esperando para ser revisado y publicado.

![widgets-list](/assets/img/widgets/widgets_list.png)

Si queremos que el Widget se publique automáticamente al terminar la carga, podemos usar la opción `--publish`.

```shell
modyo-cli push --publish
```

