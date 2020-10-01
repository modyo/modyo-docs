---
search: true
---

# Introducción

Bienvenido al **Catálogo de Widgets Financieros de Modyo**. Acá encontrarás una completa referencia de todas las experiencias financieras que Modyo entrega como parte de este producto, desde la instalación y desarrollo en tu ambiente local, hasta la descripción de interfaces, parámetros disponibles y referencia de las principales funcionalidades de cada Widget.

<img src="/assets/img/widgets/widgets.png" style="margin-top: 40px;" />

## Inicio rápido

::: warning Recomendación
 Si nunca has usado la plataforma Modyo y/o los Widgets, te recomiendo empezar por [aquí](/platform/). Ademas esta guía asume que tienes el [modyo-cli](/platform/channels/Widgets.md#modyo-cli) instalado y que has leído su [documentación](/platform/channels/Widgets.md#modyo-cli).
:::

::: danger TOKEN de acceso
Para poder usar los Widgets de este catálogo, necesitas tener un token de acceso que te permitirá descargarlos para su uso. Éste lo puedes conseguir con tu organización o directamente con Modyo.
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

## ¿Qué es un Widget?

Un **Widget** es un componente aislado que empaqueta su propio marcado (`html`), estilo (`css`) y javascript de manera que pueda ser desplegado como parte de cualquier página web sin tener errores de runtime o conflictos con los estilos o el javascript de la página que lo aloja.

En otras palabras, un **Widget** es un [micro frontend](https://martinfowler.com/articles/micro-frontends.html): un estilo arquitectónico que permite componer y desplegar múltiples aplicaciones javascript en una página.

Modyo provee la plataforma ideal para desplegar este tipo de aplicaciones y crear tu galería de Widgets a través del [Widget builder](https://develop.docs.modyo.com/platform/channels/Widgets.html) y las herramientas necesarias para poder desarrollarlas usando el [modyo-cli](https://www.npmjs.com/package/@modyo/cli) o el [SDK de javascript](https://www.npmjs.com/package/@modyo/sdk).

Modyo es una plataforma agnóstica en cuanto al uso de frameworks javascript, puedes desplegar aplicaciones hechas en **Vue**, **Angular** o **React**. En el caso de los **Widgets financieros**, nosotros decidimos usar **Vue** (porque opinamos que la curva de aprendizaje es pequeña, tiene un ecosistema vibrante que gana tracción, entre otras cosas), pero tú y tu equipo pueden ocupar Angular o React.

## ¿Por qué usar un Widget de este catálogo?

El catálogo de Widgets financieros están diseñados para acelerar el desarrollo de tus experiencias digitales porque te ofrecen componentes interactivos para que los personalices y los ensambles en flujos que se adapten a tu negocio.

Los Widgets financieros entregan de la caja:

- **UX** pensado para facilitar la interacción de usuarios
- **Accesibilidad básica** (como contraste de colores adecuados, uso de tamaños tipográficos legibles, estructura semántica, etc)
- **Internacionalización y localización de textos y monedas**. Por defecto cada Widget viene en inglés y español, pero tiene toda la infraestructura necesaria para personalizar los idiomas que trae o agregar más idiomas para que se adapte a la necesidad de tu negocio. Si son desplegados en Modyo, los Widgets detectan el idioma configurado para el sitio
- **Validaciones para formularios, fechas**
- **Estilos planos para una fácil personalización** con nuestro sistema de diseño descargable en PDF [desde aquí](/assets/pdf/Widget_Modyo.pdf) que usa **Sass** y librerías populares como [Bootstrap](https://getbootstrap.com/) y [Font Awesome](https://github.com/FortAwesome/vue-fontawesome#using-brand-icons)
