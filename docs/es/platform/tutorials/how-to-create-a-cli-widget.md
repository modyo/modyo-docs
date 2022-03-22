---
search: true
---

# Crear un Widget con el Modyo CLI

## Introducción

Te damos la bienvenida a un nuevo tutorial de la serie de entrenamiento de Modyo. Este tutorial se enfoca en crear un  [Widget](/es/platform/channels/widgets.html), donde podrás utilizar nuestro [Catálogo de Widgets Financieros de Modyo](/es/widgets/) utilizando el [Modyo CLI](/es/platform/channels/widgets.html#modyo-cli).

Al igual que en los otros tutoriales usaremos la marca ficticia "Dynamic Bank".

### Dynamic Bank

Dynamic Bank es el nombre que le damos en Modyo a todo lo referente a demos y ejemplo de la plataforma. Quisimos crearlo para poder ofrecer una experiencia muy cercana a la realidad de lo que significa realmente trabajar con Modyo. Una vez completado este tutorial tu sitio debería lucir así:

<img src="/assets/img/tutorials/how-to-create-private-site/summary.png" style="border: 1px solid rgb(238, 238, 238);max-width: 400px;margin: auto 0;"/>

## Requisitos Previos

Necesitas tener conocimientos de:

- HTML
- CSS
- JS
- La plataforma Modyo

Para tener una visión más completa, se recomienda que antes de realizar este tutorial, termines el ejercicio de [Creación de un sitio privado](/es/platform/tutorials/how-to-create-private-site.html)

## Paso 1: Instalar Modyo CLI

Para agregar un Widget, tienes que instalar [Modyo CLI](/es/platform/channels/widgets.html#modyo-cli).

[Modyo CLI](/es/platform/channels/widgets.html#modyo-cli) es una herramienta de línea de comandos basada en los principios de aceleración e integración con comandos GET y PUSH respectivamente.

Para instalar Modyo CLI necesitamos algunas dependencias, que deben estar instaladas de manera global.

Ellas son:

* Git distributed version control system (v 1.7+)
* Node (v 14+)
* Un editor de código como por ejemplo Visual Studio Code
* Npm (v 6.14+) 
* Yarn (v 1.22+)

Para realizar la instalación se puede usar una de estas opciones en la terminal:

<code>Vía yarn</code>

```sh
$ yarn global add @modyo/cli
```

<code>Vía npm</code>

```sh
$ npm i -g @modyo/cli
```

Una vez instalado, verifica que todo esté bien ejecutando el comando <code>modyo-cli help</code>.

## Paso 2: Inicializar un Widget del Catálogo

Luego de completar el proceso de instalación, vamos a obtener el Widget de [Resumen de Cuentas](/es/widgets/retail/summary.html) desde el [Catálogo de Widgets Financieros de Modyo](/es/widgets/).

Para descargar el Widget a tu ambiente local lo hacemos con el siguiente comando:

```sh
modyo-cli get modyo-widgets-retail-summary
```

Esto desgargará un widget basado en Vue. Al terminar el proceso, aparece una vista así:

<img src="/assets/img/tutorials/how-to-create-private-site/terminal.png" style="max-width: 400px;margin: auto 0;"/>


Para editarlo debes navegar a la carpeta <code>modyo-widgets-retail-summary</code> dentro de la terminal.

:::tip Tip
Si es la primera vez que ejecutas este widget, asegurate de instalar sus dependencias con <code>npm install</code>, el proceso puede tardar unos minutos dependiendo de tu conexión a internet
:::

Para construirlo de manera local, utiliza <code>yarn serve</code> o <code>npm run serve</code>en tu navegador, el resultado se verá asi en tu navegador:

<img src="/assets/img/tutorials/how-to-create-private-site/widget.png" style="max-width: 600px;margin: auto 0;"/>

## Paso 3: Modificar estilos del Widget

Los Widgets del catálogo se han diseñado en Modyo con un estilo simple. Para hacer cambios debes abrir la carpeta del widget <code>modyo-widgets-retail-summary</code> en tu editor, que en nuestro caso es Visual Studio Code.

<img src="/assets/img/tutorials/how-to-create-private-site/vscode.png" style="max-width: 600px;margin: auto 0;"/>

Para cambiar los colores de las variables por los de Dynamic Bank, sigue estos pasos:

1. Navega a la carpeta <code>src</code>.
1. Dentro de la carpeta css, abre el archivo `_variables.css`.
1. Modifica el código con el siguiente:

```css
$primary-10: #EEF0F5;
$primary-20: #E8EAF1;
$primary-40: #D2D6E5;
$primary-60: #A5AECC;
$primary-80: #7985B2;
$primary-100: #384470;
$primary-dark: #2e4553;
$secondary-10: #eff0f1;
$secondary-20: #e0e2e3;
$secondary-40: #c1c5c7;
$secondary-60: #a1a8aa;
$secondary-80: #828b8e;
$secondary-100: #636e72;
$secondary-dark: #515a5e;
$tertiary-10: #f7f8f9;
$tertiary-20: #f0f2f3;
$tertiary-40: #e0e5e7;
$tertiary-60: #d1d8db;
$tertiary-80: #c1cbcf;
$tertiary-100: #b2bec3;
$tertiary-dark: #a3afb4;
$red: #D7426E;
$yellow: #F2C10D;
$green: #70D960;
$primary: $primary-100;
$secondary: $secondary-100;
$light: $secondary-10;
$dark: $secondary-dark;
```

4. Abre el archivo `_theme.css`.
5. Modifica la línea 8, dejando el _body_ con un `background: white`;
6. En el directorio <code>src/components/SummaryAccount.vue</code>, modifica el header de las cards, modificando el background por `$primary-40`, específicamente la línea 169 para que luzca así:

```css
.card-header.product-summary__header:first-child {
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  background: $primary-40;
}
```

7. En la línea 8 le agregamos la clase h6 al h2 de esta manera:

```html
<h2 class="h6 mb-0 text-capitalize">
  {{ account.accountType }}
  <span class="d-block mt-1">{{ $tc('commons.number', account.accountNumber) }}</span>
</h2>
```

8. Agrega estilos para que la barra de monto se vea verde:

```css
.m-progress-bar .progress-bar {
  background: $green !important;
}
```

9. Abre el archivo <code>App.vue</code>.
10. Para agregar el título, copia el siguiente código:

```html
<template>
  <article
    id="summary-app"
    class="py-4 py-sm-5">
    <div class="container-fluid px-0">
      <div
        v-if="isLoading"
        class="loading text-center pt-5">
        <font-awesome-icon
          icon="circle-notch"
          size="5x"
          spin />
      </div>
      <div
        v-else
        ref="viewport"
        class="products-viewport">
        <div class="header-summary mb-3">
          <h3 class="h4 text-primary font-weight-bold">Hola</h3>
          <h3 class="h4 text-primary">Bienvenido a Dynamic</h3>
        </div>
        <div
          ref="content"
          class="products-summary d-flex align-items-stretch">
          <summary-account
            v-for="account in accounts"
            :key="`account-${account.id}`"
            :account="account"
            :client-id="clientId" />

          <summary-card
            v-for="card in cards"
            :key="`card-${card.id}`"
            :card="card"
            :client-id="clientId" />

          <summary-add key="add" />
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import ScrollBooster from 'scrollbooster';
import { getURLParams } from '@modyo/financial-commons';
import SummaryAccount from './components/SummaryAccount.vue';
import SummaryCard from './components/SummaryCard.vue';
import SummaryAdd from './components/SummaryAdd.vue';

export default {
  name: 'App',
  components: {
    SummaryAccount,
    SummaryCard,
    SummaryAdd,
  },
  data() {
    return {
      carousel: {},
    };
  },
  computed: {
    isLoading() {
      return this.$store.state.isLoading;
    },
    accounts() {
      return this.$store.state.accounts;
    },
    cards() {
      return this.$store.state.cards;
    },
    clientId() {
      return this.$store.state.clientId;
    },
  },
  created() {
    const client = parseInt(getURLParams('client'), 10) || 1;
    this.$store.commit('SET_CLIENT_ID', client);
    this.$store.dispatch('DO_DATA_INITIALIZATION').then(() => {
      this.initProductsCarousel();
    });
  },
  methods: {
    initProductsCarousel() {
      const { viewport } = this.$refs;
      const { content } = this.$refs;

      // eslint-disable-next-line no-unused-vars
      const sb = new ScrollBooster({
        viewport,
        content,
        direction: 'horizontal',
        emulateScroll: false,
        onUpdate: (state) => {
          if (state.borderCollision.right) {
            content.style.transform = `translateX(${-state.position.x - 20}px)`;
          } else {
            content.style.transform = `translateX(${-state.position.x}px)`;
          }

          if (state.isMoving) {
            viewport.style.cursor = 'grabbing';
          } else {
            viewport.style.cursor = 'grab';
          }
        },
        shouldScroll: (state, event) => {
          // disable scroll if clicked on button
          const isLink = event.target.nodeName.toLowerCase() === 'a';
          return !isLink;
        },
      });

      sb.updateMetrics();
    },
  },
};
</script>

<style lang="scss" scoped>
.products-viewport {
  overflow: hidden;

  cursor: grab;
}

@media (max-width: 575.98px) {
  .header-summary h2 {
    font-size: 24px;
  }
}
.header-summary {
  margin-left: 30px;
}
@media (min-width: 1200px) {
  .header-summary {
    margin-left: 140px;
  }
}
</style>
```

Una vez que termines de darle el look and feel al widget, tu sitio se verá como el de esta imagen y estarás listo para hacer push a los servidores de Modyo.

## Paso 4: Enviar Widget al sitio

Para hacer el push del Widget al sitio en Modyo, tienes que generar la configuración en el Modyo CLI para que sepa hacia donde va el push.

Sigue estos pasos para crear el archivo de configuración:

1. En la carpeta raíz del widget, crea un archivo <code>.env</code>. 
2. Agrega el siguiente código y remplaza **[Account url]** y **[Modyo API Token]** según tu contexto:

```
MODYO_ACCOUNT_URL=[URL de tu cuenta ie: http://myaccount.modyo.cloud]
MODYO_SITE_HOST=[ El site donde planeas publicar ej: private-site ]
MODYO_VERSION=9
MODYO_TOKEN= [Modyo API Token]
MODYO_BUILD_DIRECTORY=dist
MODYO_WIDGET_NAME=Summary

```
Para obtener un API token, sigue estos pasos:

1. En el menú principal de la Plataforma, selecciona **Configuración** y haz click en **Acceso a la API**
1. Haz click en <b>+ Nuevo Acceso a la API</b>.
1. En el modal completa los siguientes datos:

<table>
 <tr>
  <td>
   Name
  </td>
  <td>
   modyo-cli
  </td>
 </tr>
<tr>
  <td>
   Description
  </td>
  <td>
   Token que se utilizara para hacer push desde modyo-cli
  </td>
 </tr>
 <tr>
  <td>
   Redirect URI
  </td>
  <td>
   urn:ietf:wg:oauth:2.0:oob
  </td>
 </tr>
</table>

<img src="/assets/img/tutorials/how-to-create-private-site/token.png" style="max-width: 400px;margin: auto 0;"/>

4. Una vez creado el API access, haz click en **Equipo**.
5. Busca y selecciona tu usuario.
6. Haz click en el apartado de **Acceso a la API** y haz click en **+ Nuevo Token de Acceso**.
7. Selecciona **modyo-cli** y haz click en **Crear Token**.

<img src="/assets/img/tutorials/how-to-create-private-site/access_token.png" style="max-width: 400px;margin: auto 0;"/>

Ahora que ya tienes un token, puedes agregarlo al archivo <b>.env</b> de configuración.

<img src="/assets/img/tutorials/how-to-create-private-site/token_gnerated.png" style="max-width: 400px;margin: auto 0;"/>


Ejecutar <code>npm run build</code>

8. En la terminal, usa el comando <code>modyo-cli push Summary</code>, este comando lleva el widget al tu sitio. Lo podrás encontrar en el apartado de Widgets Personalizados.


<img src="/assets/img/tutorials/how-to-create-private-site/wb.png" style="max-width: 400px;margin: auto 0;"/>


:::tip Tip
Si encuentras problemas para ejecutar el comando de compilacion , prueba instalar una version compatible de postCSS con esta linea

<code>npm i -D @fullhuman/postcss-purgecss@3.0.0 postcss@7.0.35</code>
:::

9. Para hacerlo disponible en la biblioteca de widgets, en la plataforma, dentro de Channels -> Sitios, entra a tu sitio.
10. Haz click en **Widgets**, tu widget se encontrará listado como un Widget listo para ser publicado. Entra a tu widget y haz click en **Publicar**.
11. En la ventana de Revisar y Publicar, selecciona tu widget y haz click en **Publicar**. Selecciona la opción de **Publicar Ahora**.

<img src="/assets/img/tutorials/how-to-create-private-site/widget_custom.png" style="max-width: 400px;margin: auto 0;"/>

12. Selecciona **Pages** y haz click en Home.
13. Borra el Widget de HTML existente y agrega tu Custom Widget.

<img src="/assets/img/tutorials/how-to-create-private-site/home.png" style="max-width: 600px;margin: auto 0;"/>

## Paso 5: Revisar y Publicar Home, Navigation, y Template

Una vez realizados los pasos anteriores, revisa todo el sitio en modo vista previa. Al estar conforme con el resultado, debes publicar los cambios para dejar todos los cambios disponibles a tus usuarios finales.

Para realizar una publicación, desde la sección **Resumen**, haz click en el botón <b>Publicar</b> donde se abrirá un panel con los cambios que haz realizado.

<img src="/assets/img/tutorials/how-to-create-private-site/publish.png" style="max-width: 700px;margin: auto 0;"/>

Selecciona todos los cambios pendientes, y haz click en **Publicar**. Selecciona **Publicar Ahora**.

## Conclusiones

¡Muy bien! Haz finalizado el curso de Sitio Privado con Widgets del Modyo CLI.

Encuentra mas informacion sobre Modyo:
- [Modyo Channels](/es/platform/channels) con todos sus módulos:
- [Pages](/es/platform/channels/pages)
- [Navigation](/es/platform/channels/navigation)
- [Widgets](/es/platform/channels/widgets)
- [Templates](/es/platform/channels/templates)
- [Site settings](/es/platform/channels/sites.html#configuracion-de-un-sitio)
- [Modyo CLI](/es/platform/channels/widgets.html#modyo-cli) 
- [Catálogo de Modyo](/es/widgets/)
