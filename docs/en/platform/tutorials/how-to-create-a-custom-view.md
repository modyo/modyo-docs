---
search: true
---

# Creación de una Vista de Contenido

## Introduction

Bienvenido a un nuevo tutorial de la serie de entrenamiento de Modyo. En este tutorial vamos a enfocar en [Modyo Channels](/es/platform/channels) donde crearemos una vista para poder desplegar nuestras entradas creadas en [Modyo Content](/es/platform/content).

El enlace entre Content y Channels, es una de las funcionalidads más importantes a la hora de tener sitios dinámicos y fáciles de administrar por cualquier persona.

En este tutorial seguiremos usando la marca ficticia "Dynamic Bank", pero ahora nos enfocaremos en la viste detalle de los beneficios.

<img src="/assets/img/tutorials/how-to-create-custom-view/beneficios.png" style="border: 1px solid rgb(238, 238, 238);max-width: 300px;margin: auto 0;" />

<a href="https://www.figma.com/proto/jifcy8uqhsHdRzB78Oow6o/PD-Dynamic-Bank?page-id=847%3A8&node-id=847%3A14&viewport=599%2C497%2C0.26033779978752136&scaling=min-zoom" target="blank">View Design Figma</a>

## Prerequisites

Para comenzar este tutorial debemos haber completado los siguientes tutoriales: [Contenido de Dynamic Bank](/es/platform/tutorials/how-to-create-content) y [Creacion Home Dynamic Bank](/es/platform/tutorials/how-to-create-home). Y al igual que en los tutoriales anteriores debes tener conocimientos sobre HTML, CSS, JS y la plataforma Modyo.

## Paso 1: Agregar nuevos campos a los Beneficios

En el Tutorial de creación de contenido, habíamos creado el [Space](/es/platform/content/space) Bank, el [Type](/es/platform/content/types) Benefits y las [Entries](/es/platform/content/entries). Ahora utilizaremos este Type, pero añandiendo los campos necesarios para generar su detalle según el diseño del Figma.

Para modificar el Type <b>Benefits</b> vamos a ingresar al módulo de Content, seleccionar nuestro space y una vez ya dentro, ingresamos a Types y seleccionamos el Type correspondiente. A los campos ya existentes (Cover y Excerpt) vamos a agregar los siguientes campos:

<table>
<tr><th style="text-align: left;">Field</th> <th style="text-align: left;">Name</th></tr>
<tr>
  <td>
    Multiline text
  </td>
  <td>
    Short description
  </td>
</tr>
<tr>
  <td>
    Asset
  </td>
  <td>
    Logo
  </td>
</tr>
<tr>
  <td>
    Multiline text
  </td>
  <td>
    Description
  </td>
</tr>
<tr>
  <td>
    Multiline text
  </td>
  <td>
    Commercial terms
  </td>
</tr>
<tr>
  <td>
    Multiline text
  </td>
  <td>
    Validity
  </td>
</tr>
<tr>
  <td>
    Locations
  </td>
  <td>
    Location
  </td>
</tr>
</table>

## Paso 2: Llenar campos de una entrada

Luego de tener nuestro Type con todos los campos que necesitamos, vamos a completar una entrada para poder utilizarla de ejemplo.

Para este caso usaremos la entrada Dynamic Cine:

<table>
<tr><th style="text-align: left;">Field</th> <th style="text-align: left;"></th></tr>
<tr>
  <td>
    Short description
  </td>
  <td>
    40% de decuento en entradas todos los Viernes.
  </td>
</tr>
<tr>
  <td>
    Logo
  </td>
  <td>
    <img src="https://cloud.modyocdn.com/uploads/90e43e8b-f15e-41c7-9abf-5fa1196079cb/original/Dynamic_cinema.png" style="max-width: 200px;margin: auto 0;"/>
  </td>
</tr>
<tr>
  <td>
    Description
  </td>
  <td>
    Disfruta todos los Viernes de un 40% en entradas para la mejor cartelera de Dynamic Cine, aprovecha este beneficios exclusivo para clientes Dynamic Bank Pagando con tu Tarjetas crédito o débito.
  </td>
</tr>
<tr>
  <td>
    Commercial terms
  </td>
  <td>
    Beneficio válido para clientes Dynamic Bank al pagar con su Tarjetas de Crédito o Débito en entradas para día viernes con un máximo 8 entradas diarias por cliente titular.
  </td>
</tr>
<tr>
  <td>
    Validity
  </td>
  <td>
    Del 1 de Enero al 31 de Diciembre del 2021
  </td>
</tr>
<tr>
  <td>
    Location
  </td>
  <td>
    Agregar location ejemplo
  </td>
</tr>
</table>

Recuerda publicar tus cambios para que se vean reflejados.

## Paso 3: Crear Custom View de Beneficios

Una vez listo nuestro contenido, vamos a desarrollar su [Custom View](/es/platform/channels/templates.html#vistas-para-contenido) dentro de nuestro sitio, para así generar Pages dinámicas conectadas a Content.

Para esto, volveremos a ingresar a Templates dentro de nuestro sitio, y en la sección Views en el apartado Custom hacemos click en el <b>+</b>.

<img src="/assets/img/tutorials/how-to-create-custom-view/custom_view.png" style="max-width: 400px;margin: auto 0;" />

Al abirse el panel debemos ingresar un Path, que es la url que tendrá anidado nuestro contenido, que en nuestro caso será <b>beneficio</b>, y seleccionamos nuestro Space <b>Bank</b> y Type <b>Benefits</b>.

Para que se vea como en nuestro diseño, vamos a copiar el siguiente HTML remplazando el código que viene de ejemplo.

```html
<div class="mb-5 mb-md-0 pb-5 pb-md-0" id="hero">
  <div class="bg-dark mb-5 mb-md-0 pt-5 pb-0 py-md-5">
    <div class="pattern_hero"></div>
    <div class="d-flex mb-0 my-md-5 hero_img">
      <div class="row w-100 justify-content-end no-gutters">
        <div
          class="col-10 col-md-7 wow slideInRight hero_img rounded-left"
          style="background-image: url({{ entry.fields['Cover'].url }})"
        ></div>
      </div>
    </div>
    <div class="hero_txt">
      <div class="container">
        <div class="row">
          <div
            class="ml-3 ml-md-0 bg-info p-5 col-10 col-md-6 rounded text-white wow slideInLeft"
          >
            <span
              class="h6 badge_category bg-white text-primary d-inline-block text-uppercase px-3 py-1 rounded-sm"
              >{{ entry.meta.category}}</span
            >
            <h1 class="h2 font-weight-bold mb-2">{{ entry.meta.title }}</h1>
            <h3 class="h6 font-weight-bold mb-0">
              {{ entry.fields['Short description'] }}
            </h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="container my-5 py-5">
  <div class="row justify-content-between">
    <div class="col-12 col-md-6">
      <div class="col-7 d-flex-inline shadow-sm rounded px-5 py-4 mb-5">
        <img
          src="{{ entry.fields['Logo'].url }}"
          alt="{{ entry.meta.title }}"
          class="w-100 my-2"
        />
      </div>
      <div class="mb-4">
        <h5 class="text-dark">Description</h5>
        <p class="text-muted">{{ entry.fields.Description }}</p>
      </div>
      <div class="mb-4">
        <h5 class="text-dark">Validity</h5>
        <p class="text-muted">{{ entry.fields.Validity }}</p>
      </div>
    </div>
    <div class="col-12 col-md-5">
      <div class="mb-4">
        <h5 class="text-dark">Where</h5>
        {{entry.fields['Location'] | static_map: '800x400', 15, 'roadmap',
        'https://cloud.modyocdn.com/uploads/5fc8b46c-1f64-404c-86a0-3db703f76398/original/pin_dynamic.png'}}
      </div>
      <div class="mb-4">
        <h5 class="text-dark">Commercial terms</h5>
        <p class="text-muted">{{ entry.fields['Commercial terms'] }}</p>
      </div>
    </div>
  </div>
</div>
<div class="bg-light py-5" id="benefits">
  <div class="container py-5">
    <h3 class="text-dark text-center">Related benefits</h3>
    {% assign relateds = spaces['bank'].types['benefits'].entries | paginated: 5
    | by_lang: 'en' %}
    <div class="py-5" id="productos">
      <div class="row">
        {% assign count = 0 %} {% for related in relateds %} {% if related.slug
        != entry.slug and 4 > count %} {% assign count = count | plus: 1 %}
        <div class="col-12 col-md-6 col-lg-3 mb-4 pb-2 d-flex">
          <a class="card shadow-sm w-100" href="{{ related.meta.url }}">
            <figure class="m-0">
              <span
                class="badge_category bg-white text-primary d-inline-block text-uppercase px-3 py-1 rounded-sm small"
                >{{ related.meta.category}}</span
              >
              <img
                aria-hidden="true"
                src="{{ related.fields['Cover'].url }}"
                alt="{{ related.meta.title }}"
                class="w-100"
              />
            </figure>
            <figcaption class="pt-4 px-4 pb-2">
              <h4 class="h6 text-dark">{{ related.meta.title }}</h4>
              <p class="text-muted">{{ related.fields.Excerpt }}</p>
            </figcaption>
          </a>
        </div>
        {% endif %} {% endfor %}
      </div>
    </div>
  </div>
</div>
<style>
  .hero_img {
    height: 350px;
  }
  #hero .badge_category {
    position: absolute;
    top: 0;
    transform: translateY(-50%);
  }
</style>
```

Ya creaste tu primer Custom View conectada a un Space de Modyo Content. Con ella podremos ingresar a una Entry desde nuestro sitio y además previsualizar el trabajo desde Modyo Content.

## Paso 4: Previsualizar entries en Content

Ahora que ya tenemos nuestro Space y Type asociados a un sitio, se nos activará una nueva funcionalidad, el [Modo vistra previa en un sitio](/es/platform/content/entries.html#vista-previa). Para acceder al modo vista previa tenemos que hacer click en el ícono del "ojo" en la barra superior de acciones:

<img src="/assets/img/tutorials/how-to-create-custom-view/preview_content.png" style="max-width: 400px;margin: auto 0;" />

Dentro del modal hacer click en <b>Preview on site</b> y seleccionar el sitio donde hicimos la custom view dentro del dropdown:

<img src="/assets/img/tutorials/how-to-create-custom-view/preview_site.png" style="max-width: 400px;margin: auto 0;" />

Al seleccionarlo en una nueva pestaña se nos abrirá el preview de la entrada en el sitio, para que se pueda ir revisando los cambios en el sitio.

## Opinion

¡Felicidades! Haz finalizado el tercer curso de la serie de tutoriales de Modyo.

En este tutorial realizamos una de las principales herramientas que entrega Modyo a la hora de mantener tus canales digitales, agregando una capa intermedia para poder revisar el trabajo que se está desarrollando en [Modyo Content](/es/platform/content) y generando Pages dinámicos conectados a nuestros sitios en [Modyo Channels](/es/platform/channels).
