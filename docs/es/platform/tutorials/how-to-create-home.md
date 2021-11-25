---
search: true
---

# Creación de un Sitio Básico

## Introducción

Bienvenido a un nuevo tutorial de la serie de entrenamiento de Modyo. En este tutorial nos vamos a enfocar en [Modyo Channels](/es/platform/channels) donde aprenderás a crear un sitio, modificar la base del template, agregar nuevas librerías y conectar widgets con contenido ya creado.

Hacer el enlace entre Content y Channels es una de las funcionalidads más importantes a la hora de tener sitios dinámicos y fáciles de administrar por cualquier persona.

A lo largo de este tutorial, y otros también, usaremos la marca ficticia "Dynamic Bank", la cual te introducimos a continuación.

### Dynamic Bank

Dynamic Bank es el nombre que le damos en Modyo a todo lo referente a demos y ejemplos de la plataforma. Quisimos crearlo para poder ofrecer una experiencia muy cercana a la realidad de lo que significa realmente trabajar con Modyo. Una vez completado este tutorial tu sitio debería lucir así:

<img src="/assets/img/tutorials/how-to-create-dynamicbank-content/home.png" style="border: 1px solid rgb(238, 238, 238);max-width: 300px;margin: auto 0;"/>

<a href="https://www.figma.com/proto/jifcy8uqhsHdRzB78Oow6o/PD-Dynamic-Bank?page-id=808%3A0&node-id=808%3A1&viewport=694%2C507%2C0.23551106452941895&scaling=min-zoom" target="blank">Ver Figma del diseño</a>

## Requisitos Previos

Para ejecutar los pasos de este tutorial debes tener creados los contenidos del tutorial de [Contenido de Dynamic Bank](/es/platform/tutorials/how-to-create-content) y tener conocimientos sobre HTML, CSS, JS y la plataforma Modyo.

## Paso 1: Crear un sitio en la Nube

Para crear nuestro [sitio](/es/platform/channels/sites), donde vamos a montar Dynamic Bank, tenemos que ir a la sección [Modyo Channels](/es/platform/channels) y hacer clic en el botón <b>New Site</b>.

Llenamos los campos Name con "Bank", se autocompleta el Host key y dejamos el Site realm como está.

<img src="/assets/img/tutorials/how-to-create-dynamicbank-home/new-site.png" style="border: 1px solid rgb(238, 238, 238);max-width: 300px;margin: auto 0;"/>

<b>!Ya creaste tu primer sitio en Modyo!</b>

## Paso 2: Cambiar variables CSS para darle look and feel de Dynamic Bank

Dentro de nuestro nuevo sitio, a la izquierda encontrarás el menú principal con las secciones en las que trabajaremos en este tutorial.

Vamos a partir en la sección [Templates](/es/platform/channels/templates), la que corresponde a la estructura que contiene el sitio, es decir la base del HTML, el CSS y JS, más las librerías que contemplan el Template.

Aquí vamos a modificar las variables de CSS, que están en un snippet llamado <b>variables css</b> que alimenta el resto de las hojas de estilo ya configuradas dentro del Theme Minimal.

Para hacer el cambio, vamos a modificar en el snippet ya mencionado las siguientes variables:

#### Colores:

<code>primary = rgba(240, 90, 162, 1)</code><br>
<code>secondary = rgba(98, 125, 229, 1)</code><br>
<code>light = rgba(250, 250, 250, 1)</code><br>
<code>info = rgba(121, 133, 178, 1)</code><br>
<code>dark = rgba(56, 68, 112, 1)</code><br>

#### Botones:

<code>button_radius = 100px</code><br>
<code>button_font_weight = 600</code>

Para revisar el cambio que acabas de realizar vamos a utiliar el [modo vista previa](/es/platform/core/key-concepts.html#modo-vista-previa).

## Paso 3: Sacar container

En los [layout](/es/platform/channels/templates.html#layouts-personalizados), que son la estructura HTML en la cual se montan los widgets que agregaremos en cada [Page](/es/platform/channels/pages), tenemos que quitar la clase <b>container</b> del main para poder utilizar el 100% del ancho de nuestra Page.

Para esto, dentro de Templates, vamos a volver a la pestaña Views, buscamos la sección Layouts y abrimos el home.

<img src="/assets/img/tutorials/how-to-create-dynamicbank-home/main.png" style="border: 1px solid rgb(238, 238, 238);max-width: 300px;margin: auto 0;"/>

Y quitamos <code>class="container"</code>.

## Paso 4: Cambiar fuente del sitio

En el Minimal estamos usando la librería [webfontload](https://github.com/typekit/webfontloader) para cargar la tipografía de manera asincrónica.

Para Dynamic utilizaremos la fuente Jost. Para cambiarla tenemos que entrar a la hoja de javascript <b>Base</b> dentro de Views.

<img src="/assets/img/tutorials/how-to-create-dynamicbank-home/javascript.png" style="border: 1px solid rgb(238, 238, 238);max-width: 300px;margin: auto 0;"/>

Donde modificaremos la línea donde se hace el llamado, remplazando <code>families: ['DM Sans:400,700&display=swap']</code> por <code>families: ['Jost:400,700&display=swap']</code>.

<img src="/assets/img/tutorials/how-to-create-dynamicbank-home/webfontloader.png" style="border: 1px solid rgb(238, 238, 238);max-width: 300px;margin: auto 0;"/>

## Paso 5: Cambiar header y footer

Dentro de los Templates, una de las funcionalidades más potentes que tenemos es la de reutilizar código en diversas Pages, que es el caso del Header y Footer.

El HTML de ellos se encuentra dentro de la pestaña Snippets, agrupados en General, y lo vamos a remplazar por los siguientes códigos HTML.

<code>header</code>

```html
<header role="banner" id="header">
  <div
    class="navbar navbar-expand-md  navbar-light py-4"
    role="navigation"
    aria-label="Navbar"
  >
    <div
      class="navbar-inner container d-flex justify-content-between align-items-center text-right"
    >
      <div class="d-flex flex-column">
        <a
          class="navbar-brand"
          href="{{ site.url }}"
          title="Logo {{site.name}}"
          rel="home"
        >
          <img
            src="{{ site.logo | asset_url | replace: 'R360x50', 'original'}}"
            alt="Logo {{site.name}}"
          />
        </a>
        <a class="sr-only sr-only-focusable btn btn-dark p-2" href="#content"
          >Skip to main content</a
        >
      </div>
      <div
        class="d-flex justify-content-end align-items-center"
        id="navbar-menu"
      >
        <nav class="d-none d-md-flex align-items-center">
          <h2 class="sr-only">Main Menu</h2>
          {% snippet 'shared/general/menu' %}
          <a href="#" class="ml-3 btn btn-primary btn-sm">Banco en línea</a>
        </nav>
        <button
          type="button"
          class="py-2 px-3 bg-transparent border-0 text-dark position-relative d-block d-md-none"
          data-toggle="modal"
          data-target="#menu_panel"
        >
          <h2 id="mainmenulabel" class="sr-only">Open Menu</h2>
          <svg
            width="2em"
            height="2em"
            viewBox="0 0 16 16"
            class="bi bi-list"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5- 5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </button>
      </div>
    </div>
    <!-- Menu Panel -->
    <div
      class="modal right fade"
      id="menu_panel"
      tabindex="-1"
      aria-labelledby="notificationsLabel"
      aria-modal="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header bg-white">
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&#10005;</span>
            </button>
          </div>
          <div
            class="modal-body p-4 navbar navbar-expand-md  navbar-light align-items-start"
          >
            <nav>
              {% assign responsive = "Responsive" %}
              {% snippet "shared/general/menu" %}
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>
```

<code>footer</code>

```html
<footer id="footer" class="py-5 bg-dark navbar-expand-md" role="contentinfo">
  <div class="navbar-inner container text-center text-md-left">
    <div class="row align-items-start">
      <div
        class="col-12 col-md-3 justify-content-center justify-content-md-start"
      >
        <img
          src="https://cloud.modyocdn.com/uploads/764b5b8e-8d5b-4139-9460-2f2545f5d5ee/original/icn_di_white.svg"
          alt="Icono Blanco Dynamic"
        />
      </div>
      <div
        class="col-12 col-md-9 justify-content-end d-none d-md-flex text-white"
      >
        {% menu %}
      </div>
    </div>
    <div class="d-flex justify-content-between text-muted mt-4 pt-4 border-top">
      <p class="small m-0 text-muted ">
        © 2008-{{ site.current_year }} Modyo Spa
      </p>
      <p class="small m-0">
        Made with
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          class="bi bi-heart-fill"
          fill="#627DE5"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
          />
        </svg>
        in <a href="https://www.modyo.com" class="font-weight-bold">Modyo</a>
      </p>
    </div>
  </div>
</footer>
```

Luego de terminar nuestros snippets header y footer, vamos a trabajar en el CSS del footer. Por temas de orden vamos a generar un nuevo [snippet](/es/platform/channels/templates.html#snippets) y lo agregaremos en la hoja de estilos base del Template.

Para crear un nuevo snippet debes ir a la sección Custom y presionar el botón <b>+</b>, llenar el campo Path como <b>footer_css</b> para luego agregar el siguiente código.

```css
footer {
	border-top: 5px solid {{secondary}};
}
footer a {
	color: {{white}};
	transition:.3s;
}
footer a:hover {
	color: {{primary}};
	transition:.3s;
}
```

Para agregar nuestro nuevo snippet a la hoja de estilo base del template, debemos apretar el ícono de copiar al lado de nuestro snippet como muestra la siguiente imagen:

<img src="/assets/img/tutorials/how-to-create-dynamicbank-home/copy.png" style="border: 1px solid rgb(238, 238, 238);max-width: 300px;margin: auto 0;"/>

Y pegarla en nuestra Hoja de estilo que está en Views, Style Sheets, <b>base</b>.

<img src="/assets/img/tutorials/how-to-create-dynamicbank-home/StyleSheets.png" style="border: 1px solid rgb(238, 238, 238);max-width: 300px;margin: auto 0;"/>

El código que nos entrega el snippet es asi:

<code>{% snippet "footer_css" %}</code>

## Paso 6: Cargar logo y favicon

Para realizar este paso vamos a ir a la sección [Site settings](/es/platform/channels/sites.html#configuracion-de-un-sitio), donde podemos cambiar o agregar algunas configuraciones del sitio, entre ellas: Nombre del sitio, Descripción, idioma, ID de GTM, SEO, PWA, Team, entre otras.

En este caso nos enfocaremos en General y agregaremos nuestro archivo del logo en <b>Site logo</b> y el Favicon en <b>Visualization</b>.

#### Logo

<img src="https://cloud.modyocdn.com/uploads/b3d572c9-a49a-4b8a-b411-d9b79b9b7b1d/original/dynamicbank-01.svg" style="margin: 30px 0;max-width: 300px;">

#### Favicon

<img src="https://cloud.modyocdn.com/uploads/7c6b4dd7-5b50-43f3-9ca1-a07a2cbc6412/original/favicon.ico" style="margin: 30px 0;max-width: 32px;">

Recuerda guardar los cambios luego de cargar los archivos.

## Paso 7: Hacer cambios de css de Bootstrap

Una vez cargado nuestro logo, vamos a hacer los cambios de tamaño para que se ajuste a nuestro diseño. Para esto vamos a ir a Templates y dentro de el grupo de Libs abrimos el snippet <b>bootstrap css</b> y buscamos la clase que está afectando a nuestro logo, <code>.navbar-brand img</code> y cambiamos el height de <code>50px</code> a <code>30px</code>.

Una vez revisado en modo vista previa que nuestro logo se vea bien, tenemos que cambiar cómo se ven los enlaces del menú.

Para esto modificaremos los estilos de las clases navbar-light, navbar-nav y nav-link.

```css
.navbar-light .navbar-nav .nav-link {
	color: {{dark}};
	font-weight: bold;
	padding: 0rem .5rem !important;
	margin: 0rem .5rem !important;
}

.navbar-light .navbar-nav .nav-link:hover, .navbar-light .navbar-nav .nav-link:focus {
	color: {{primary}};
	transition:.3s;
}

.navbar-light .navbar-nav .nav-link.disabled {
	color: rgba(0, 0, 0, 0.3);
}

.navbar-light .navbar-nav .show > .nav-link,
.navbar-light .navbar-nav .active > .nav-link,
.navbar-light .navbar-nav .nav-link.show,
.navbar-light .navbar-nav .nav-link.active {
	color: {{dark}};
	border-bottom: 2px solid {{primary}};
}
```

## Paso 8: Crear Snippet css para Home

Por temas de orden, vamos a crear un snippet de CSS, donde más adelante agregaremos todos los estilos que afectarán a nuestro Home.

<img src="/assets/img/tutorials/how-to-create-dynamicbank-home/snippet.png" style="margin: 30px 0;width: 400px;">

Para que este snippet haga efecto en nuestro Home tenemos que agregar el código del llamado del snippet en la hoja de CSS general con el siguiente código <code>{% snippet "home_css" %}</code> para que el contenido de nuestro snippet aparezca dentro de la hoja de estilos generales del template.

## Paso 9: Agregar librerías dependientes

Ahora que ya sabemos cómo crear snippets dentro de Templates, vamos a cargar librerías externas de la misma forma.

Para algunas de las secciones de nuestro Home vamos a necesitar librerías de JS y CSS, para agregar animaciones en el Hero o slides de testimonios por ejemplo.

De la misma forma en la que creamos el snippet footer_css, vamos a crear cuatro nuevos snippets para cargar las librerías externas, donde dos serán de CSS y dos de JS. Incluiremos cada uno de ellos en las hojas correspondientes con el código del snippet.

<code>animate_css</code>

[CSS Animate Minificado](https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css)

<code>wow_js</code>

[Libreria WOW JS Minificada](https://gist.githubusercontent.com/susi917/13cc28a396418b1554efeb2929b0cc6a/raw/82f9a6d1af6bd55a71d315e8967b8e89e82cc948/wow.min.js)

<code>slick_css</code>

[CSS Slick Slider](https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css)

<code>slick_js</code>

[Libreria Slick Slider Minificada](https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js)

No olvides agregar los snippets animate_css y slick_css a la hoja de estilos y wow_js y slick_js a la hoja de javascripts del Template.

## Paso 10: Generar el menú

Otra de las funcionalidades que existen dentro de Modyo es la herramienta de Navigation, en la cual podemos generar el menú para nuestro sitio de manera sencilla.

Para esto, vamos a la sección [Navigation](/es/platform/channels/navigation.html), modificamos el menú ya existente y dejaremos las siguientes opciones.

<table>
 <tr>
  <th style="text-align: left">Name</th>
  <th style="text-align: left">Associated Layout Page</th>
  <th style="text-align: left">URL</th>
 </tr>
 <tr>
  <td>
   Home
  </td>
  <td>
   Home
  </td>
  <td></td>
 </tr>
 <tr>
  <td>
   Products
  </td>
  <td>
   Custom URL
  </td>
  <td>
  #
  </td>
 </tr>
 <tr>
  <td>
   Benefits
  </td>
  <td>
   Custom URL
  </td>
  <td>
  #
  </td>
 </tr>
 <tr>
  <td>
   Offices
  </td>
  <td>
   Custom URL
  </td>
  <td>
  #
  </td>
 </tr>
</table>

Lo que se vería reflejado de la siguiente forma:

<img src="/assets/img/tutorials/how-to-create-dynamicbank-home/navigation.png" style="margin: 30px 0;max-width: 700px;">

Luego de tener nuestro menú completo guardamos y publicamos.

## Paso 11: Modificar Page Home

Una vez lista la base del Template, el menú y la configuración del sitio, vamos a comenzar a trabajar en nuestro Home. Para ello vamos ir a la seccion [Page](/es/platform/channels/pages) y entrar al Home.

<img src="/assets/img/tutorials/how-to-create-dynamicbank-home/page.png" style="margin: 30px 0;max-width: 300px;">

Lo primero que vamos a hacer es modificar el widget de HTML que ya viene en el Page, cambiando el Title del widget por Hero y cambiando el HTML por el siguiente:

```html
{% assign entries = spaces['bank'].types['hero'].entries | paginated: 1 %}
<div class="mb-5 mb-md-0 pb-5 pb-md-0" id="hero">
  <div class="bg-dark mb-5 mb-md-0 pt-5 pb-0 py-md-5">
    <div class="pattern_hero"></div>
    {% for entry in entries %}
    <div class="d-flex mb-0 my-md-5 hero_img">
      <div class="row w-100 justify-content-end no-gutters">
        <div
          class="col-10 col-md-7 wow slideInRight hero_img rounded-left"
          style="background-image: url({{ entry.fields['Cover'].url }})"
          ;}
        ></div>
      </div>
    </div>
    <div class="hero_txt">
      <div class="container">
        <div class="row">
          <div
            class="bg-info p-5 col-10 col-md-6 rounded text-white wow slideInLeft"
          >
            <h1 class="h3 h2-md">{{ entry.meta.title }}</h1>
            <p class="p h6-md font-weight-light mb-4">
              {{ entry.fields.Text }}
            </p>
            <a
              href="{{ entry.fields.Url }}"
              class="btn btn-{{ entry.fields['Button color'] }}"
              >{{ entry.fields['Title Link'] }}</a
            >
          </div>
        </div>
      </div>
    </div>
    {% endfor %}
  </div>
</div>
```

En este HTML vamos a utilizar el [SKD de Liquid](/es/platform/content/public-api-reference.html#sdk-de-liquid) para conectar [Modyo Channels](/es/platform/channels) con [Modyo Content](/es/platform/content).

El llamado al SDK de Liquid se realiza a través de un assign de la siguiente forma: <code>{% assign entries = spaces['bank'].types['hero'].entries | paginated: 1 %}</code>, en el cual le asignamos a entries el Space y el Type que ya habíamos creado en el tutorial anterior.

Una vez listo nuestro HTML en el page, vamos a agregar el estilo en el snippet <b>home_css</b> que ya habíamos creado dentro de Templates.

```css
/*** hero ***/
.hero_img {
  height: 55vh;
  background-position: center;
  background-size: cover;
}
#hero {
  position: relative;
}
.hero_txt {
  position: absolute;
  width: 100%;
  top: 50%;
  transform: translateY(-50%);
}
.pattern_hero {
  background: url(https://cloud.modyocdn.com/uploads/1e3588d5-1d5b-4ddb-b73d-77d88e1e37b1/original/pattern_circle.png);
  width: 75%;
  height: 65%;
  position: absolute;
  right: 0;
  top: 15%;
  animation: float 6s ease-in-out infinite;
}
@keyframes float {
  0% {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
    transform: translatey(0px);
  }
  50% {
    box-shadow: 0 0.15rem 1rem rgba(0, 0, 0, 0.25) !important;
    transform: translatey(-20px);
  }
  100% {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
    transform: translatey(0px);
  }
}
@keyframes smallFloat {
  0% {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
    transform: translatey(0px);
  }
  50% {
    box-shadow: 0 0.15rem 1rem rgba(0, 0, 0, 0.25) !important;
    transform: translatey(-10px);
  }
  100% {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
    transform: translatey(0px);
  }
}
@media (max-width: {{media_md}}) {
  .hero_txt {
    bottom: 0;
    top: auto;
    left: 2%;
    transform: none;
  }
  .pattern_hero {
    width: 90%;
  }
}
```

Al tener listo nuestro código Hero, el HTML en el Page y el CSS en Templates, podemos [previsualizar](/es/platform/core/key-concepts.html#modo-vista-previa) nuestro trabajo activando Page y Templates en Draft en la barra del modo vista previa.

<img src="/assets/img/tutorials/how-to-create-dynamicbank-home/preview.png" style="margin: 30px 0;">

## Paso 12: Widgets de News

Para la sección de noticias de nuestro Home, vamos a crear un widget de HTML similar al de Hero dentro de nuesto Page Home. En la pestaña <b>Add Widgets</b>, hacemos click en HTML y en nuestro widget pegamos el siguiente código:

```html
{% assign entries = spaces['bank'].types['news'].entries | paginated: 3 %}
<div class="container my-5 py-5">
  <div class="row justify-content-center mb-4">
    <div class="col-12 col-md-8 text-center">
      <h3 class="text-dark">
        Mantente informado de todo lo que necesitas de tu banca
      </h3>
      <p class="text-muted">
        Enterate de todas las noticias que tenemos para tí
      </p>
    </div>
  </div>
  <div class="row">
    {% for entry in entries %}
    <div class="col-4 d-flex">
      <a class="card shadow-sm w-100 bg-white text-decoration-none rounded overflow-hidden" href="{{ entry.fiels.Url }}">
        <figure class="m-0">
          <img
            aria-hidden="true"
            src="{{ entry.fields['Cover'].url }}"
            alt="{{ entry.meta.title }}"
            class="w-100"
          />
        </figure>
        <figcaption class="pt-4 px-4 pb-2">
          <h4 class="h6 text-dark">{{ entry.meta.title }}</h4>
          <p class="text-muted">{{ entry.fields.Excerpt }}</p>
        </figcaption>
        <div class="d-flex justify-content-end pb-4 px-4  mt-auto">
          <span class="btn btn-primary btn-sm">{{ entry.fields.Link }}</span>
        </div>
      </a>
    </div>
    {% endfor %}
  </div>
</div>
```

Para estas Cards no necesitamos CSS ya que sólo utilizamos helpers de Bootstrap.

## Paso 13: Widgets de Beneficios

Para los beneficios seguiremos la misma lógica de los widgets ya creados, agregando un nuevo widget de HTML al Page Home con el código HTML:

```html
{% assign entries = spaces['bank'].types['benefits'].entries | paginated: 7 %}
<div class="py-5 bg-primary" id="benefits">
  <div class="container my-5">
    <div class="row justify-content-center mb-4">
      <div class="col-12 col-md-8 text-center">
        <h3 class="text-white">
          Se parte de un mundo de beneficios pensados especialmete para ti
        </h3>
        <p class="text-white">
          Para nosotros lo más importante es que disfrutes tu banca
        </p>
      </div>
    </div>
    <div class="row">
      {% for entry in entries limit:1 %}
      <div class="col-12 col-md-6 mb-4 pb-2 d-flex">
        <a class="card shadow-sm w-100 bg-white text-decoration-none rounded overflow-hidden" href="{{ entry.meta.url }}">
          <figure class="m-0">
            <span
              class="badge_category bg-white text-primary d-inline-block text-uppercase px-3 py-1 rounded-sm small"
              >{{ entry.meta.category}}</span
            >
            <img
              aria-hidden="true"
              src="{{ entry.fields['Cover'].url }}"
              alt="{{ entry.meta.title }}"
              class="w-100"
            />
          </figure>
          <figcaption class="pt-4 px-4 pb-2">
            <h4 class="h6 text-dark">{{ entry.meta.title }}</h4>
            <p class="text-muted">{{ entry.fields.Excerpt }}</p>
          </figcaption>
        </a>
      </div>
      {% endfor %} {% for entry in entries offset:1 %}
      <div class="col-12 col-md-6 col-lg-3 mb-4 pb-2 d-flex">
        <a class="card shadow-sm w-100 bg-white text-decoration-none rounded overflow-hidden" href="{{ entry.meta.url }}">
          <figure class="m-0">
            <span
              class="badge_category bg-white text-primary d-inline-block text-uppercase px-3 py-1 rounded-sm small"
              >{{ entry.meta.category}}</span
            >
            <img
              aria-hidden="true"
              src="{{ entry.fields['Cover'].url }}"
              alt="{{ entry.meta.title }}"
              class="w-100"
            />
          </figure>
          <figcaption class="pt-4 px-4 pb-2">
            <h4 class="h6 text-dark">{{ entry.meta.title }}</h4>
            <p class="text-muted">{{ entry.fields.Excerpt }}</p>
          </figcaption>
        </a>
      </div>
      {% endfor %}
    </div>
  </div>
</div>
```

Y el CSS en el snippet <b>home_css</b> dentro de Templates.

```css
/** benefits **/
#benefits .card figure {
  height: 115px;
  overflow: hidden;
  position: relative;
}
#benefits .card figure img {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
#benefits .card figure .badge_category {
  position: absolute;
  bottom: 1rem;
  left: 1.5rem;
  z-index: 1;
}
```

Recuerda que puedes revisar cómo va quedando nuestro Home con el modo vista previa.

## Paso 14: Widgets de DYNAMIC APP

El widget de DYNAMIC APP es un widget simple de HTML que no está conectado a Content por lo que no tiene assign de liquid.

Nuevamente crearemos un widget HTML dentro del Page Home y su respectivo CSS en el snippet <b>home_css</b>.

```html
<div class="bg-white" id="app_home">
  <div class="container py-5 position-relative">
    <div class="row justify-content-center align-items-center">
      <div class="pattern_app"></div>
      <div class="col-12 col-md-4">
        <h4 class="h2 mb-3">
          DYNAMIC APP,
          <span class="font-weight-normal">lleva tu banca a todas partes</span>
        </h4>
        <img
          src="https://cloud.modyocdn.com/uploads/36e7b591-d60d-4312-b1ad-cd984533206a/original/download_app.png"
        />
      </div>
      <div class="col-12 col-md-5">
        <img
          src="https://cloud.modyocdn.com/uploads/1b60b2a2-0748-4340-b3c5-a4a63695eb52/original/app.png"
        />
      </div>
    </div>
  </div>
</div>
```

```css
/** APP **/
.pattern_app {
  background: url(https://cloud.modyocdn.com/uploads/1e3588d5-1d5b-4ddb-b73d-77d88e1e37b1/original/pattern_circle.png);
  width: 35%;
  height: 85%;
  position: absolute;
  right: 0;
  top: 0%;
}
```

## Paso 15: Widgets de Testimonios

El widget de testimonios es un poco más complejo ya que utilizaremos JS para generar el slide. Es por eso que crearemos un widget dentro de la sección [Widget Builder](/es/platform/channels/widgets.html).

<img src="/assets/img/tutorials/how-to-create-dynamicbank-home/widgets.png" style="max-width: 300px;margin: auto 0;"/>

El Widget Builder es donde puedes crear micro frontends para tus sitios. Para crear uno solo necesitamos entrar a la sección ya mencionada, hacer click en el botón <b>New Widget</b> y le asignaremos un nombre, que en nuestro caso es Testimonial. Al crearlo, este te desplegará tres pestañas, donde deberás pegar el JS, CSS y HTML según corresponda.

<code>JS</code>

```js
$('.single-item').slick({
  dots: true,
  arrows: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: false,
})
```

<code>CSS</code>

```css
#testimonial {
  position: relative;
}
#testimonial:after {
  content: '';
  display: block;
  position: absolute;
  background-image: url(https://cloud.modyocdn.com/uploads/1e3588d5-1d5b-4ddb-b73d-77d88e1e37b1/original/pattern_circle.png);
  background-position: top left;
  width: 30%;
  height: 55%;
  top: 10%;
  left: 0;
  z-index: 1;
}
#testimonial .container {
  z-index: 2;
}
@media (max-width: 768px) {
  #testimonial:after {
    width: 50%;
    height: 30%;
    top: 20%;
  }
}
```

<code>HTML</code>

```html
{% assign entries = spaces['bank'].types['testimonial'].entries %}
<div class="bg-light px-3 py-5" id="testimonial">
  <div class="py-5">
    <div class="container d-block d-md-none">
      <h3 class="h3 mb-4 text-dark">Nuestros clientes dicen...</h3>
    </div>
    <div class="container p-relative single-item">
      {% for entry in entries %}
      <div>
        <div class="row justify-content-center">
          <figure class="col-7 col-md-3 mb-4 m-md-0">
            <img
              class="w-100"
              src="{{ entry.fields.Image.url }}"
              alt="{{ entry.fields.Author }}"
            />
          </figure>
          <div class="figcaption col-11 col-md-6">
            <figcaption class="p-0 p-md-5">
              <h3 class="d-none d-md-block h3 mb-4 text-dark">
                Nuestros clientes dicen...
              </h3>
              <p class="text-muted">{{ entry.fields.Testimony }}</p>
              <p class="text-muted font-weight-bold">{{ entry.fields.Author }}</p>
            </figcaption>
          </div>
        </div>
      </div>
      {% endfor %}
    </div>
  </div>
</div>
```

Una vez terminado el widget deberás guardar tus cambios para poder revisarlo en modo vista previa. Al publicarlo quedará disponible en la bibiolteca de widgets, a los que podrás acceder desde Pages.

Para desplegarlo en el Home tenemos que agregarlo como widget <b>Custom</b> y buscarlo dentro del listado (en este ejemplo solo tenemos uno).

<img src="/assets/img/tutorials/how-to-create-dynamicbank-home/cursom_widget.png" style="max-width: 300px;margin: auto 0;"/>

<b>¡Felicidades! Ya tenemos todos los widgets necesarios en el Home</b>

<img src="/assets/img/tutorials/how-to-create-dynamicbank-home/widgets_home.png" style="max-width: 400px;margin: auto 0;"/>

## Paso 16: Revisar y Publicar

Una vez terminados todos nuestros widgets y CSS del Home, revisaremos en modo vista previa el trabajo que hemos realizado en este Tutorial. Una vez que estés conforme con el resultado debemos publicar los cambios para recién ahora dejar todo nuestro trabajo disponible de cara a nuestros usuarios finales.

Para realizar una publicación, hacemos clic en el botón <b>Publish</b> donde se abrirá un panel con los cambios que hemos realizado.

<img src="/assets/img/tutorials/how-to-create-dynamicbank-home/review_publish.png" style="max-width: 700px;margin: auto 0;"/>

Luego seguiremos los pasos para seleccionar la fecha de publicación, que en este caso será publicación inmediata.

## Conclusiones

¡Felicidades! Haz finalizado el curso de Creación del Home de Dynamic Bank en Modyo.

Ahora tienes conocimientos de cómo utilizar [Modyo Channels](/es/platform/channels) con todos sus módulos; [Pages](/es/platform/channels/pages), [Navigation](/es/platform/channels/navigation), [Widgets](/es/platform/channels/widgets), [Templates](/es/platform/channels/templates) y algunos detalles dentro de [Site settings](/es/platform/channels/sites.html#configuracion-de-un-sitio). Además, lograste enlazar tu sitio con [Modyo Content](/es/platform/content) que permite generar canales digitales dinámicos conectados a contenidos separados del código del sitio.
