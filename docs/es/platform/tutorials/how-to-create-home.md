---
search: true
---

# Creación de un Sitio Básico

## Introducción

Bienvenido a un tutorial de la serie de entrenamiento de Modyo. En este tutorial se enfoca en [Modyo Channels](/es/platform/channels) donde aprenderás a crear un sitio, modificar la base de una plantilla, agregar nuevas librerías, y conectar widgets con contenido ya creado.

Hacer el enlace entre Content y Channels es una de las funcionalidades más importantes a la hora de tener sitios dinámicos y fáciles de administrar.

A lo largo de este tutorial usaremos la marca ficticia "Dynamic Bank", la cual te presentamos a continuación.

### Dynamic Bank

Dynamic Bank es el nombre que le damos en Modyo a todo lo referente a demos y ejemplos de la plataforma. Quisimos crearlo para poder ofrecer una experiencia cercana a la realidad de lo que significa realmente trabajar con Modyo. Una vez completado este tutorial tu sitio debería lucir así:

<img src="/assets/img/tutorials/how-to-create-dynamicbank-content/home.png" style="border: 1px solid rgb(238, 238, 238);max-width: 300px;margin: auto 0;"/>

<a href="https://www.figma.com/proto/jifcy8uqhsHdRzB78Oow6o/PD-Dynamic-Bank?page-id=808%3A0&node-id=808%3A1&viewport=694%2C507%2C0.23551106452941895&scaling=min-zoom" target="blank">Ver Figma del diseño</a>

## Requisitos Previos

Para ejecutar los pasos de este tutorial debes haber completado:

- [Contenido de Dynamic Bank](/es/platform/tutorials/how-to-create-content)

Tener conocimientos sobre:
- HTML
- CSS
- JS
- La plataforma Modyo

## Paso 1: Crear un sitio en la Nube

Para crear tu [sitio](/es/platform/channels/sites), sigue estos pasos:

1. En el menú principal, selecciona **Channels** y haz click en **Sitios**.
2. Haz click en **+ Nuevo Sitio**.
3. En la ventana de Nuevo Sitio llena los siguientes datos:
  - Nombre: **Bank**
  - Host: **bank**
  - Reino del sitio: **Ninguno**
4. Haz click en **Crear**.

<img src="/assets/img/tutorials/how-to-create-dynamicbank-home/new-site.png" style="border: 1px solid rgb(238, 238, 238);max-width: 300px;margin: auto 0;"/>

<b>!Ya creaste tu primer sitio en Modyo!</b>

## Paso 2: Cambiar variables CSS para darle look and feel de Dynamic Bank

Aquí vamos a modificar las variables de CSS, que están en un snippet llamado <b>variables css</b> que alimenta el resto de las hojas de estilo ya configuradas dentro del Theme Minimal.

Para hacer el cambio a variables css, sigue estos pasos:

1. En el menú principal, haz click en **Plantillas**.
1. En el menú Vistas y Snippets de la derecha, haz click en **Snippets**.
1. En el apartado de **Libs**, haz click en `variables_css`.
1. Modifica los siguientes valores:

#### Colores:

```liquid
{% assign primary = rgba(240, 90, 162, 1) %}
{% assign secondary = rgba(98, 125, 229, 1) %}
{% assign light = rgba(250, 250, 250, 1) %}
{% assign info = rgba(121, 133, 178, 1) %}
{% assign dark = rgba(56, 68, 112, 1) %}
```

#### Botones:

```liquid
{% assign button_radius = 100px %}
{% assign button_font_weight = 600 %}
```

Para revisar el cambio que acabas de realizar, haz click en ícono de un "ojo" para activar el [modo vista previa](/es/platform/core/key-concepts.html#modo-vista-previa).

## Paso 3: Editar `container`

En los [Layouts](/es/platform/channels/templates.html#layouts-personalizados), estructuras HTML que se agregan en cada [Página](/es/platform/channels/pages), tienes que quitar la clase `container` del main para poder utilizar el 100% del ancho de una Página.

1. En **Plantillas**, en la lista de Vistas de la derecha, adentro de Layouts haz click en `home`.
1. Quita `class="container` de la plantilla.
1. Haz click en **Publicar**.

<img src="/assets/img/tutorials/how-to-create-dynamicbank-home/main.png" style="border: 1px solid rgb(238, 238, 238);max-width: 300px;margin: auto 0;"/>

## Paso 4: Cambiar fuente del sitio

En el minimal estamos usando la librería [webfontloader](https://github.com/typekit/webfontloader) para cargar la tipografía de manera asincrónica.

Para Dynamic Bank utilizaremos la fuente Jost. Sigue estos pasos para cambiar la tipografía:

1. Dentro de la lista de Vistas, haz click en Javascript `base`.
1. Reemplaza la siguiente linea:

```css
families: ['DM Sans:400,700&display=swap']

por

families: ['Jost:400,700&display=swap']
```


## Paso 5: Cambiar header y footer

Dentro de Plantillas, una de las funcionalidades más potentes que tienes es la de reutilizar código en diversas Páginas con las plantillas de Header y Footer. Este código se va a cargar para cada página de tu sitio.

Para lograr el look and feel de Dynamic Bank en tu sitio, reemplaza el header y footer, localizado dentro de Snippets -> General, por el siguiente código: 

`header`

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

`footer`

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

### Paso 6: Crear nuevo CSS para footer

Luego de terminar nuestros cambios a los Snippets de header y footer, vamos a trabajar en el CSS del footer. Por temas de orden vamos a generar un nuevo [Snippet](/es/platform/channels/templates.html#snippets) y luego se manda a llamar en la hoja de estilos `base` de la Plantilla.

Para crear un nuevo snippet, sigue estos pasos:

1. Dentro de la lista de Snippets, en la sección de Personalizado, haz click en **+**.
1. El valor de la ruta es: `footer_css`
1. Agrega el siguiente código:

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

4. Para agregar nuestro nuevo snippet a la hoja de estilo base del template, haz click en el ícono de copiar al lado de nuestro snippet como muestra la siguiente imagen:

<img src="/assets/img/tutorials/how-to-create-dynamicbank-home/copy.png" style="border: 1px solid rgb(238, 238, 238);max-width: 300px;margin: auto 0;"/>

5. Pega en nuestra Hoja de estilo que está en Vistas -> Hojas de Estilo -> `base`.

El código que nos entrega el snippet es así:

<code>{% snippet "footer_css" %}</code>

## Paso 6: Cargar logo y favicon

Para cambiar el logo y favicon, tienes que usar la sección de [Configuración del sitio](/es/platform/channels/sites.html#configuracion-de-un-sitio), donde podemos cambiar o agregar algunas configuraciones del sitio, entre ellas: Nombre del sitio, Descripción, Idioma, SEO, PWA, Team, entre otras.

Para cambiar los archivos, sigue estos pasos:

1. Desde el menú principal, selecciona **Configuración del sitio**, haz click en **General**.
1. En logo del sitio, haz click en **Subir**.
1. Selecciona tu logo y haz click en **Abrir**. 
1. Dentro de la sección de Visualización, en Favicon, haz click en **Subir**.
1. Selecciona tu favicon y haz click en **Abrir**.
1. Haz click en **Guardar**.

#### Logo

<img src="https://cloud.modyocdn.com/uploads/b3d572c9-a49a-4b8a-b411-d9b79b9b7b1d/original/dynamicbank-01.svg" style="margin: 30px 0;max-width: 300px;">

#### Favicon

<img src="https://cloud.modyocdn.com/uploads/7c6b4dd7-5b50-43f3-9ca1-a07a2cbc6412/original/favicon.ico" style="margin: 30px 0;max-width: 32px;">


## Paso 7: Hacer cambios de CSS de Bootstrap

Una vez cargado tu nuevo logo, tienes que hacer cambios de tamaño para que se ajuste al diseño de Dynamic Bank. Para realizar los cambios de CSS, sigue estos pasos:

1. En el menú principal, haz click en **Plantillas**.
1. Dentro de el listado de **Snippets**, en el grupo de Libs, abre el snippet `bootstrap_css`.
1. Buscamos la clase `.navbar-brand img` y cambiamos el **height** de `50px` a `30px`.

> Después de revisar en modo vista previa que tu nuevo logo se vea bien, tienes que cambiar como se ven los enlaces del menú.

4. Modifica los estilos de las clases `navbar-light`, `navbar-nav` y `nav-link` con el siguiente código:

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

## Paso 8: Crear Snippet CSS para Home

Para tener todo ordenado, crea un snippet de CSS, donde agregarás todos los estilos que afectan a Home.

Para crear un nuevo snippet, sigue estos pasos:

1. Desde **Plantillas**, en el apartado de **Snippets** personalizados, haz click en **+**.
1. El valor de la ruta es `home_css`. 

<img src="/assets/img/tutorials/how-to-create-dynamicbank-home/snippet.png" style="margin: 30px 0;width: 400px;">

Para que este snippet haga efecto en nuestro Home tenemos que importar el snippet en la vista de CSS `base` con el siguiente código `{% snippet "home_css" %}` para que el contenido de nuestro snippet aparezca dentro de la hoja de estilos generales de la plantilla.

3. En el apartado de **Vistas**, abre la hoja de estilo `base`.
4. Pega el siguiente código para importar el snippet: `{% snippet "home_css" %}`

## Paso 9: Agregar librerías dependientes

Para algunas de las secciones de Home se necesitan agregar librerías de JS y CSS, por ejemplo para agregar animaciones en el Hero o slides de testimonios.

Para agregar dependencias a librerías externas, sigue estos pasos:

1. En la sección de **Plantillas**, dentro del apartado de **Snippets**, crea los siguientes snippets personalizados.

> Los nombres de los snippets son el valor de la Ruta.

`animate_css`

[CSS Animate Minificado](https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css)

`wow_js`

[Libreria WOW JS Minificada](https://gist.githubusercontent.com/susi917/13cc28a396418b1554efeb2929b0cc6a/raw/82f9a6d1af6bd55a71d315e8967b8e89e82cc948/wow.min.js)

`slick_css`

[CSS Slick Slider](https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css)

`slick_js`

[Libreria Slick Slider Minificada](https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js)

2. En la **Vista** de hoja de estilo `base`, agrega `{% snippet "animate_css" %}` y `{% snippet slick_css %}`.
3. En la **Vista** de javascript `base`, agrega `{% snippet "wow_js" %}` y `{% snippet "slick_js" %}`.

## Paso 10: Generar el menú

Otra de las funcionalidades que existen dentro de Modyo es la herramienta de Navegación, en la cual puedes generar el menú para tus sitios.

Para generar un menú, sigue estos pasos:

1. Desde el menú principal de tu sitio, haz click en [Navegación](/es/platform/channels/navigation.html).
1. Haz click en **Menu**.
1. Modifica el menú ya existente con las siguientes opciones:

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

4. Al terminar, haz click en **Guardar** y luego en **Publicar**.
5. En la pantalla de **Revisar y Publicar**, puedes ver todos los archivos que han sido modificados. Selecciona todos y haz click en **Publicar**.

## Paso 11: Modificar page Home

Una vez lista la base de la Plantilla, el menú, y la configuración del sitio, comienza a trabajar en el desarrollo de Home siguiendo estos pasos:

1. En el menú principal de tu sitio, haz click en [Pages](/es/platform/channels/pages).
1. Haz click en **Home**.

<img src="/assets/img/tutorials/how-to-create-dynamicbank-home/page.png" style="margin: 30px 0;max-width: 300px;">

3. Haz click en el widget.
4. Modifica el Title del widget a **Hero**. 
5. Cambia el HTML por el siguiente:

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

En este HTML se utiliza el [SDK de Liquid](/es/platform/content/public-api-reference.html#sdk-de-liquid) para conectar [Modyo Channels](/es/platform/channels) con [Modyo Content](/es/platform/content). El llamado al SDK de Liquid se realiza a través de la siguiente forma: 

```liquid
{% assign entries = spaces['bank'].types['hero'].entries | paginated: 1 %}
```

En esta linea se asigna el Space y Type que creaste previamente a Entries.

6. Una vez listo nuestro HTML, en el menú principal haz click en **Plantillas**.
7. En el apartado de **Snippets**, abre el snippet personalizado `home_css` y pega lo siguiente:

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

> Este código contiene las clases necesarias para el estilo de Hero.

8. Activa el modo de [vista previa](/es/platform/core/key-concepts.html#modo-vista-previa).
9. En la venta de vista previa, activa los cambios de Page y Templates.

<img src="/assets/img/tutorials/how-to-create-dynamicbank-home/preview.png" style="margin: 30px 0;">

## Paso 12: Widgets de News

Para crear la sección de noticias de Home, sigue estos pasos:

1. En el menú principal de tu sitio, haz click en **Pages**.
2. Desde **Home** agrega un widget HTML llamado **News**.
3. En la pestaña HTML pega el siguiente código:

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

> Para estas Cards no necesitas CSS personalizado ya que sólo utilizarás helpers de Bootstrap.

4. Haz click en **Guardar**.
5. Haz click en **Publicar** y luego **Publicar Ahora**.

## Paso 13: Widgets de Beneficios

Para el widgets de los beneficios sigue estos pasos:

1. En el menú principal de tu sitio, haz click en **Pages**.
2. Desde **Home** agrega un widget HTML llamado **Benefits**.
3. En la pestaña HTML pega el siguiente código:

```html
{% assign entries = spaces['bank'].types['benefits'].entries | paginated: 7 %}
<div class="py-5 bg-primary" id="benefits">
  <div class="container my-5">
    <div class="row justify-content-center mb-4">
      <div class="col-12 col-md-8 text-center">
        <h3 class="text-white">
          Se parte de un mundo de beneficios pensados especialmente para ti
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

3. Haz click en **Plantillas**.
4. Abre la pestaña de **Snippets** y abre el snippet personalizado `home_css`.
5. Copia el siguiente código para agregar las clases necesarias para benefits:

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

> Recuerda que puedes revisar cómo va quedando Home con el modo vista previa.

## Paso 14: Widgets de Dynamic App

El widget de Dynamic app es un widget personalizado de HTML que no está conectado a Content por lo que no se puede usar `assign` de Liquid.

1. En el menú principal de tu sitio, haz click en **Widgets**.
2. Haz click en **+ Nuevo Widget** llamado `Dynamic App`.
3. Pega el siguiente código en la pestaña de HTML:

```html
<div class="bg-white" id="app_home">
  <div class="container py-5 position-relative">
    <div class="row justify-content-center align-items-center">
      <div class="pattern_app"></div>
      <div class="col-12 col-md-4">
        <h4 class="h2 mb-3">
          Dynamic App,
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

4. En el menú principal, haz click en **Plantillas**.
5. En el apartado de **Snippets**, abre el snippet personalizado `home_css` y agrega las clases necesarias para Dynamic App:

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

El widget de testimonios es un poco más complejo ya que utiliza JS para generar la animación.

<img src="/assets/img/tutorials/how-to-create-dynamicbank-home/widgets.png" style="max-width: 300px;margin: auto 0;"/>

El Widget Builder es donde puedes crear micro frontends para tus sitios. 

1. En el menú principal de tu sitio, haz click en **Widgets**.
2. Haz click en **+ Nuevo Widget** llamado `Testimonials`.
3. Pega el siguiente código en la pestaña de JS:

`JS`

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

`CSS`

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

`HTML`

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

4. Guarda tus cambios para poder revisarlo en modo vista previa. 
5. Haz click en **Publicar** y selecciona **Publicar Ahora**. Al publicarlo quedará disponible en la biblioteca de widgets personalizados, a los que podrás acceder desde Pages.

> Para poder verlo en el Home tienes que agregarlo como widget <b>Personalizado</b> y buscarlo dentro del listado (en este ejemplo solo tenemos uno).

<img src="/assets/img/tutorials/how-to-create-dynamicbank-home/cursom_widget.png" style="max-width: 300px;margin: auto 0;"/>

<b>¡Felicidades! Ya tenemos todos los widgets necesarios en el Home</b>

<img src="/assets/img/tutorials/how-to-create-dynamicbank-home/widgets_home.png" style="max-width: 400px;margin: auto 0;"/>

## Paso 16: Revisar y Publicar

Una vez terminados todos los widgets y CSS del Home, revisa en modo vista previa el trabajo que realizaste en este Tutorial.

Para realizar una publicación de tu página, sigue estos pasos:

1. Desde el menú principal de tu sitio, haz click en **Resumen**.
1. Haz clic en el botón <b>Publicar</b> donde se abrirá un panel con los cambios que hemos realizado.
1. Agrega todos los archivos y haz click en **Publicar**.

<img src="/assets/img/tutorials/how-to-create-dynamicbank-home/review_publish.png" style="max-width: 700px;margin: auto 0;"/>

1. Selecciona **Publicar Ahora** y haz click en **Publicar**.

## Conclusiones

¡Felicidades! Haz finalizado el curso de Creación del Home de Dynamic Bank en Modyo.

Ahora tienes conocimientos de cómo utilizar:
- [Modyo Channels](/es/platform/channels) con todos sus módulos
- [Pages](/es/platform/channels/pages)
- [Navigation](/es/platform/channels/navigation)
- [Widgets](/es/platform/channels/widgets)
- [Templates](/es/platform/channels/templates)
- [Site settings](/es/platform/channels/sites.html#configuracion-de-un-sitio)
- Además, lograste enlazar tu sitio con [Modyo Content](/es/platform/content) que permite generar canales digitales dinámicos conectados a contenidos separados del código del sitio.