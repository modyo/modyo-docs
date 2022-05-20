---
search: true
title: Creación de un Site Stage
meta:
  - name: description
    content: Bienvenido a un nuevo tutorial de la serie de entrenamiento de Modyo. Este tutorial se enfocará en Modyo Channels donde se creará un nuevo site stage para trabajar en una nueva página para tu sitio sin tocar la rama principal. Al finalizar este tutorial, podrás sincronizar los cambios entre tus ramas y de esta manera trabajar en diferentes componentes en el mismo sitio.
---

# {{ $frontmatter.title }}

{{ $frontmatter.meta[0].content }}

## Introducción

Site stages te permite crear ramas en tus sitios, permitiendo que tus desarrolladores puedan trabajar en un sitio sin afectar lo que está publicado en la rama principal. Una razón para crear stages es para aislar el desarrollo de cada tarea, cada stage cuenta con su propio ciclo de estados (Borrador, Cambios Pendientes, Publicado). Esto presenta una alternativa a tener todo el desarrollo en la rama principal, ya que con stages puedes probar diferentes widgets y plantillas sin afectar el trabajo de tu equipo.

En este tutorial seguiremos usando la marca ficticia "Dynamic Bank", pero ahora nos enfocamos en expandir el menú hacia dos nuevos productos. Al terminar de trabajar en el nuevo stage, se van a sincronizar los cambios a la rama principal.

## Requisitos Previos

Completado los tutoriales:

- [Creación y Publicación de Contenidos](/es/platform/tutorials/how-to-create-content)
- [Creación de un Sitio Básico](/es/platform/tutorials/how-to-create-home)

Conocimientos de:

- HTML
- CSS
- JS
- La plataforma Modyo

## Paso 1: Crear un nuevo stage

1. En la plataforma, haz click en **Channels**, selecciona **Sitios**.
1. Haz click en el Sitio **Bank** y en **Configuración del sitio** selecciona **Stages**.
1. Haz click en el botón **+ Nuevo Stage**.
1. En la pantalla que aparece, selecciona los valores:
 - Stage de origen: **main**
 - Nombre: **nuevo-feature**

<img src="/assets/img/tutorials/how-to-create-a-site-stage/new-stage.png" style="width: 400px;" alt="Create a new Stage modal.">

5. Haz click en **Crear**.

Al tener stages, el UI cambia un poco para mostrar en que stage se está trabajando.

<img src="/assets/img/tutorials/how-to-create-a-site-stage/stage-UI.png" style="width: 400px;" alt="Create a new Stage modal.">
 
## Paso 2: Crear entrada con nuevos campos

Luego de tener el tipo con los nuevos campos, el siguiente paso es publicar contenido de este tipo. Para crear una nueva entrada llamada **Dynamic Cine**, sigue estos pasos:

1. En el menú lateral, selecciona **Entradas**.
1. Haz click en **+ Nueva Entrada**.
1. Selecciona el tipo **Benefits**.
1. Llena el nombre **Dynamic Cine** e identificador **dynamic-cine**.
1. Haz click en **Crear**.
1. En la pantalla de campos de Entrada, llena los siguientes valores:


<table>
<tr><th style="text-align: left;">Field</th> <th style="text-align: left;"></th></tr> 
<tr>
  <td>
    Short description
  </td>
  <td>
    40% de descuento en entradas todos los Viernes.
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
    Cover
  </td>
  <td>
    <img src="https://cloud.modyocdn.com/uploads/c83b4e17-4ff6-44bd-a23e-ef9d2163778d/original/cine.jpeg" style="max-width: 200px;margin: auto 0;"/>
  </td>
</tr>
<tr>
  <td>
    Description
  </td>
  <td>
    Disfruta todos los Viernes de un 40% en entradas para la mejor cartelera de Dynamic Cine, aprovecha este beneficios exclusivo para clientes Dynamic Bank pagando con tu Tarjetas de crédito o débito.
  </td>
</tr>
<tr>
  <td>
    Commercial terms
  </td>
  <td>
    Beneficio válido para clientes Dynamic Bank al pagar con su Tarjetas de Crédito o Débito en entradas para el día Viernes con un máximo de 8 entradas diarias por cliente titular.
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
    Santiago, Chile
  </td>
</tr>
</table>

7. Haz click en **Guardar**.

## Paso 3: Crear Página de Contenido "Benefits"

Después de crear la entrada con su contenido, ahora tienes que crear una [Página de contenido](/es/platform/channels/pages.html#content-pages) dentro de tu sitio para así generar páginas dinámicas conectadas a **Content**.

Para crear una Página de contenido, sigue estos pasos:

1. En el menú lateral, selecciona **Channels**, haz click **Sitios**.
1. Selecciona tu sitio y haz click en **Pages**.
1. Haz click en **+ Nueva Página**.

<img src="/assets/img/tutorials/how-to-create-content-page/content-pages.png" style="max-width: 400px;margin: auto 0;"/>

4. En el modal, selecciona la opción **Página de Contenido**.
5. Selecciona el espacio el Espacio **Bank** y Tipo **Benefits**. Define el nombre de la página y su ruta.
6. Presiona crear.


Para seguir el diseño Figma, pega el siguiente HTML remplazando el código que viene de ejemplo:


``INDEX``

```html
<div class="mb-5" id="benefits">
	<div class="container">
		<div class="row">
			{% for entry in entries %}
			<div class="col-12 col-md-6 col-lg-3 mb-4 pb-2 d-flex">
				<a class="card shadow-sm w-100 text-decoration-none" href="{{ entry.meta.url }}" >
					<figure class="m-0">
						<span class="badge_category bg-white text-primary d-inline-block text-uppercase px-3 py-1 rounded-sm small">{{ entry.meta.category}}</span>
						<img aria-hidden="true" src="{{ entry.fields['Cover'].url }}" alt="{{ entry.meta.title }}" class="w-100"/>
					</figure>
					<figcaption class="pt-4 px-4 pb-2">
						<h4 class="h6 text-dark">{{ entry.meta.title }}</h4>
						<p class="text-muted">{{ entry.fields['Short description'] }}</p>
					</figcaption>
				</a>
			</div>
			{% endfor %}
		</div>
	</div>
</div>
```

``SHOW``
 
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
                {{entry.fields['Location'] | static_map: '800x400', 15, 'roadmap','https://cloud.modyocdn.com/uploads/5fc8b46c-1f64-404c-86a0-3db703f76398/original/pin_dynamic.png'}}
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
        {% assign relateds = spaces['bank'].types['benefits'].entries | paginated: 5 %}
        <div class="py-5" id="productos">
            <div class="row">
                {% assign count = 0 %} {% for related in relateds %} {% if related.slug != entry.slug and 4 > count %} {% assign count = count | plus: 1 %}
                <div class="col-12 col-md-6 col-lg-3 mb-4 pb-2 d-flex">
                    <a class="card shadow-sm w-100 bg-white text-decoration-none rounded overflow-hidden" href="{{ related.meta.url }}">
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

Esta **Página de Contenido** ahora está conectada al Espacio de **Dynamic Bank**. Con ella puedes ingresar a los datos de la Entrada desde tu Sitio utilizando Liquid.

Ahora que ya tenemos nuestro Espacio y Tipo asociados a un Sitio, podrás activar [Modo vista previa en un sitio](/es/platform/content/entries.html#vista-previa). Para acceder al modo vista previa haz click en el ícono del "ojo" en la barra superior de acciones:

<img src="/assets/img/tutorials/how-to-create-content-page/preview_content.png" style="max-width: 400px;margin: auto 0;"/>


## Conclusiones

¡Felicidades! Haz finalizado el tercer curso de la serie de tutoriales de Modyo.

En este tutorial realizaste una de las principales herramientas que entrega Modyo a la hora de mantener tus canales digitales, agregaste una capa intermedia para poder visualizar el trabajo que se desarrolló en [Modyo Content](/es/platform/content), y generaste una Página dinámicas conectada a tu Sitio en [Modyo Channels](/es/platform/channels).
