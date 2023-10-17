---
search: true
---

# Plantillas

Uno de los aspectos más importantes al crear el sitio es la arquitectura base y apariencia de este. En Plantillas, podrás modificar las plantillas base, junto con el JavaScript, y CSS globales para usar en tus páginas y cambiar su estructura según lo requieras.

Al crear un Sitio, se llenará con plantillas distintas para generar el tema Minimal y puedas empezar a crear tu canal digital. Si es necesario, también podrás crear Snippets de código HTML, JS, y CSS para extender la funcionalidad de tu sitio.

Una vez dentro de Plantillas, puedes ver que el menú principal se esconde para optimizar el área de trabajo. En la barra superior, a la izquierda, encuentras el nombre de la sección y el estado de publicación actual.

- **Publicado:** Cuando ya existe una versión publicada y su versión editable es igual.
- **Cambios pendientes:** Cuando hay una versión publicada, pero hay cambios pendientes de publicar en tu versión editable.
- **En revisión:** Cuando se habilita la [revisión en equipo](/es/platform/core/key-concepts.html) y se ha enviado a revisión la versión editable.
- **Aprobado:** Cuando se habilita la [revisión en equipo](/es/platform/core/key-concepts.html) y si es que se cumplieron las condiciones de revisión del elemento. Si estás en este estado, tus plantillas están listos para ser publicados.

En la parte superior derecha, puedes ver la última fecha de publicación y las acciones disponibles:

**Vista previa:** Da click en este icono para abrir una nueva pestaña con el modo de vista previa de las plantillas. En esta vista puedes ver todos los cambios en tus plantillas, como si estuvieran publicados.

:::warning Atención
Puedes previsualizar los cambios como usuario sin sesión o usuario con sesión de Modyo. Para esto, es recomendable iniciar o cerrar la sesión de Modyo en el sitio antes de entrar al modo vista previa, dado que si se inicia o cierra sesión dentro del modo vista previa. Esto se debe a que iniciar o cerrar sesión dentro del modo de vista previa puede generar errores de seguridad como _x-frame-options_ o _mixed-content_, dependiendo de la configuración de dominios personalizados y SSL del sitio.
:::

**Diferencias:** Te lleva a la vista de diferencias, en la cual puedes comparar los cambios que hay entre múltiples versiones de tus plantillas.

Por defecto, comienzas comparando la versión publicada con la versión editable. Usa los selectores de versiones para comparar con versiones de respaldo.

:::tip Tip
Cada vez que publicas una versión, la versión que estaba publicada pasa a ser una versión de respaldo. Por defecto, se guardan hasta 20 respaldos, de tal forma que los veinte respaldos más recientes se pueden comparar, restaurar, y hacer rollback.

Para más información sobre el versionamiento, ve [versionado](/es/platform/core/key-concepts.html#versionado).
:::

**Buscar en plantillas:** Despliega una barra lateral con un buscador de texto que busca en todas las plantillas editables.

**Actividad/Comentarios:** Despliega una barra lateral que muestra el historial de actividad y comentarios de las plantillas.

Al final de la barra lateral, hay una caja de texto donde puedes escribir un comentario. Junto a cada actividad, puedes hacer click en **ver detalle** para mostrar la información completa de ese registro de actividad.

**Más acciones:**

- **Restaurar todo:** Restauras las plantillas a su valor original.

**Acción principal**

- **Guardar:** Guarda todos los cambios de todas las plantillas.
- **Enviar a revisión:** Cambia el estado de las plantillas a "Esperando revisión". En este estado puedes seguir haciendo cambios, pero cada cambio será notificado vía correo a los revisores asignados.
- **Rechazar:** Vuelve al estado "En edición", notificando a los revisores que el elemento fue rechazado.
- **Publicar:** Una vez que las plantillas fueron aprobadas, podrás ir a la vista de [publicación conjunta](/es/platform/channels/sites.html#revision-y-publicacion-conjunta) y publicar tus plantillas.

En el área de trabajo principal, puedes ver dos secciones:

- El área de trabajo.
- El área de selección de plantillas.

Cada plantillas al que le hagas click en la barra lateral derecha, se abre en el área central con un editor de texto. Si abres múltiples plantillas, estas quedan abiertas como pestañas en el área de trabajo.

La barra de plantillas a la derecha tiene dos pestañas: vistas y snippets.

## Layouts

Modyo cuenta con tres layouts por defecto:
* **Home:** Se usa exclusivamente en la página home del sitio.
* **Base:** Todas las páginas excepto el home usan este layout por defecto.
* **Error:** Las vistas de error usan este layout limpio (404, 401)

Puedes crear nuevos Layouts desde Plantillas, haciendo click en "Añadir layout" en la pestaña "Vistas", lo que te permitirá definir una nueva estructura base para usar en las páginas.

Puedes usar como base este código que contiene todo lo necesario para que tus páginas usen todos los elementos necesarios del sitio, como el head, header, footer, service worker, y la configuración de Google Tag Manager, pero ten en cuenta que puedes modifcarlo tanto como quieras:

```liquid
{% html5 %}
<head>
  {% snippet 'shared/general/head' %}
</head>

{% body %}
{% snippet 'shared/general/body_tag_manager' %}
{% snippet 'shared/general/header' %}

{{ site.breadcrumb }}
<div id="main-layout">
{{ content_for_layout }}
</div>

<script>{% snippet "shared/serviceworker/register_js" %}</script>
{% snippet 'shared/general/footer' %}

{% endbody %}
{% endhtml5 %}
```

Luego de haber creado tu nuevo layout, puedes empezar a usarlo yendo a la vista de edición de las páginas y cambiarlo desde el tab de propiedades.


## Errores en Vistas

En la sección de vistas, encontrarás 4 tipos de error disponible para personalizar:

* **Deshabilitado:** Verás esta vista de error si es que el sitio al que estás intentando acceder ha sido [deshabilitado](/es/platform/channels/sites.html).
* **404:** Verás esta vista si entras a una URL del sitio que no está definida y si es que en la configuración de [restricciones del sitio](/es/platform/channels/sites.html#privacidad) decides mostrar el 404 y no redireccionar a la página home.
* **Privacy:** Verás esta vista de error si no tienes permisos para acceder al [sitio](/es/platform/channels/sites.html#privacidad) o a una de sus [páginas](/es/platform/channels/pages.html#privacidad).
* **Template:** Verás esta vista de error cuando la página del sitio que estés cargando tenga un error de sintaxis de liquid. Es poco probable que llegues a ver esta vista, dado que desde modyo 8.1 en adelante contamos con una funcionalidad que checa la sintaxis de liquid antes de poder guardar y publicar cambios en Plantillas.

## CSS y JavaScript

Es posible crear plantillas personalizadas de código CSS y JavaScript haciendo click en los botones **+**, en las secciones de CSS y JavaScript respectivamente, al final de la pestaña Vistas.

### Agregar CSS o Javascript

Las vistas personalizadas de CSS y Javascript son la manera en la cual podrás importar tus librerías a Modyo Platform. Sigue estos pasos para crear una vista de CSS o Javascript:

1. En Modyo Platform, expande **Channels**, y haz click en **Sitios**.
1. Haz click en tu sitio.
1. En el menú lateral, haz click en **Plantillas**.
1. En la sección de Vistas, haz click en el botón **Añadir Hoja de Estilos** (o Javascript).
1. Agrega la Ruta y haz click en **Añadir**.
1. Una vez que hayas terminado de editar la Hoja de Estilo o Javascript, se debe incluir en tu Layout de la siguiente manera.


Para incluir cualquiera de estas vistas, existen distintos filtros de Liquid disponibles: `asset_url` para definir el tipo de archivo, `stylesheet_tag`, y `script_tag` para generar los tags correspondientes, en el siguiente ejemplo se agrega:

- Una vista personalizada de CSS con media: screen
- Una vista personalizada de Javascript con carga asíncrona

```html
<head>
  {{ 'my-css' | asset_url: 'css' | stylesheet_tag: media: 'screen', title: 'color style' }}
  {{ 'my-js'  | asset_url: 'js'  | script_tag: async: 'async', defer: 'defer' }}
</head>
```

Una vez que se haya guardado y publicado, se traduce al siguiente código HTML:

```html
<link href='my-css' rel='stylesheet' type='text/css' media='screen' title='color style' />
<script src='my-js' type='text/javascript' async='async' defer='defer'></script>
```

Para conocer a detalle y los parámetros soportados por estos filtros, dirígete a [filtros de Liquid](/es/platform/channels/liquid-markup.html#filtros-estandar).


## Snippets

Los snippets son fragmentos de código HTML, JS o CSS que puedes reutilizar en tus sitios. Puedes copiar la ruta de referencia de cada snippet personalizado. El código Liquid será similar a: <span v-pre>`{% snippet "nombre-del-snippet" %}`</span>. Pega este código donde quieras llamar a este Snippet.

Puedes añadir snippets personalizados al final del listado de snippets de la plataforma, haciendo click en el botón **+ Add a Snippet**.

:::warning Importante
Para que el sistema reconozca el tipo de lenguaje de programación al que pertenece el snippet, se debe agregar la terminación con guión bajo + terminación, es decir **"front_css"** o **"library_js"** por defecto reconocerá el snippet como lenguaje HTML.
:::

:::tip Tip
Todos los elementos del Template Builder usan Liquid como motor de plantillas.

Para más información sobre qué es Liquid y cómo sacarle el mejor provecho, echa un vistazo a la página [Liquid Markup](/es/platform/channels/liquid-markup.html)
:::

En el área de trabajo, debajo de las pestañas, encontrarás una barra con estos elementos:

**Gestor de archivos:** Se levanta un modal donde puedes acceder a todos los archivos de la cuenta y copiar su URL. Si accedes a la segunda pestaña, puedes subir nuevos archivos.

:::tip Tip
Para más información sobre los beneficios y prestaciones de Gestor de Archivos, dirígete a [Gestor de Archivos](/es/platform/content/asset-manager.html)
:::

**Atajos de teclado:** Se muestra un pequeño pop-up con algunos de los atajos de teclado útiles para usar en Plantillas.

**Snippets:** Se despliega un listado con todos los snippets, junto a la opción de copiar su código de referencia.

**Cambios:** Un listado de todas las veces y estados en los que has hecho la acción "Guardar" en esta versión. Al hacer click en alguna de las sub-versiones, cambias el contenido del template en el que estás trabajando a esa sub-versión.

:::tip Tip
Si publicas una versión, puedes ver que el listado de cambios desaparece, esto es porque la nueva versión editable no ha tenido ningún cambio.
:::

:::tip Tip
Las sub-versiones son por cada plantilla, por lo que para algunos puedes observar que hay cambios y para otros no verás el selector de cambios. De la misma forma, si vuelves a una sub-versión anterior de un template, no afectas al resto de los templates.
:::

:::tip Tip
Si se reestablece una versión anterior a la versión editable, podrás acceder a las sub-versiones de cada template de esa versión.
Puedes aprender más sobre el [versionado aquí](/platform/core/key-concepts.html#versionado).
:::

Al igual que cada plantilla, puedes restaurar todas las plantillas a su versión original haciendo click en la acción secundaria de la barra superior "Restaurar todo". Para que los cambios tengan efecto, debes publicar las plantillas.

## SEO

El SEO [(Search Engine Optimization)](/es/platform/channels/sites.html#seo) es uno de los tópicos más importantes del sitio y del contenido.

En Modyo existe una forma de controlar la forma en que los motores de búsqueda leen tu sitio y contenido, añadiendo meta tags de forma dinámica dependiendo de los atributos que añadas a tus páginas y contenidos.

Puedes añadir este snippet de código en Plantillas y luego llamar a este snippet desde el head de tu sitio:

```html
<!-- Site SEO -->
<meta name="keywords" content="{{ site.keywords }}"/>
<meta name="author" content="{{ site.name }}"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>

{{ site.meta_tags }}

{% if page %}
<!-- Page SEO -->
{{ page.meta_tags }}
<meta name="description" content="{{ page.excerpt }}"/>
<meta property="og:title" content="{{ page.title }}"/>
<meta property="og:type" content="website"/>
<meta property="og:url" content="{{ page.url }}"/>
<meta property="og:image" content="{{ site.logo | asset_url : 'original' }}"/>
<meta property="og:site_name" content="{{ site.name }}"/>
<meta property="og:description" content="{{ page.excerpt }}"/>
{% endif %}
<!-- END SEO -->
```

Este snippet utiliza Liquid para agregar meta tags a nivel Sitio. También agrega meta tags específicos cuando el usuario navega a una Página de Widget o de Contenido.

Si es que lo requieres, puedes personalizar este snippet, definiendo qué meta tags quieres que aparezcan para URLs o tipos específicos.

## Ejemplos de SEO

A continuación proveemos una serie de ejemplos para mejorar el SEO de diferentes casos.

### Meta tags específicos para una Entrada

Por ejemplo, si quieres usar meta tags específicas cuando un usuario visita una Entrada, puedes usar:

```html
...
{% if entry %}
<!-- Content SEO -->
<meta name="description" content="{{ entry.meta.excerpt }}" />
<meta property="og:title" content="{{ entry.meta.title }}" />
<meta property="og:url" content="{{site.url}}/{{entry.meta.type_uid}}/{{entry.meta.slug}}" />
<meta property="og:image" content="{{ entry.fields.covers.first | asset_url : 'original' }}" />
<meta property="og:site_name" content="{{ site.name }}" />
<meta property="og:description" content="{{ entry.meta.excerpt }}" />
{% if entry.type_uid = 'posts'%}
<meta property="og:type" content="article" />
{endif}
{% if entry.type_uid = 'place'%}
<meta property="og:type" content="place" />
<meta property="place:latitude" content="{{ entry.location.first.latitude }}" />
<meta property="place:longitude" content="{{ entry.location.first.longitude }}" />
{% endif %}
{% endif %}
...
```

En este caso, los tipos de Entrada `posts` y `place` comparten los atributos _title_, _excerpt_ y _covers_, y difieren en el objeto _locations_. Además, define un tipo de documento diferente para cada uno.

### Meta tags específicos para Categoría en Página de Contenido

En caso de tener meta tags específicas cuando muestras Entradas que pertenecen a una Categoría, puedes copiar el siguiente código:

```html
{% assign category_name = category_path | split: '/' | last | capitalize %}

{% case category_name %}
  {% when 'Category 1' %}
     {% assign category_description = 'This is the meta description for Category 1' %}
  {% when 'Categoría 2' %}
     {% assign category_description = 'This is the meta description for Category 2' %}
{% endcase %}

{% if category_path.size > 0 %}
<!-- Content Page: Index con categoría -->
<title> {{ category_name }} - {{ site.name }} </title>
<meta name="description" content="{{ category_description }}"/>
<meta property="og:title" content="{{ category_name }} - {{ site.name }}"/>
<meta property="og:type" content="website"/>
<meta property="og:url" content="{{ page.url }}/{{ category_path }}">
<meta property="og:image" content="https://d1dzq2r60kxox4.cloudfront.net/uploads/c82bdfea-3622-4c11-9a20-bea227cbdc60/original/og_image.jpg"/>
<meta property="og:site_name" content="{{ site.name }}"/>
<meta property="og:description" content="{{ category_description }}"/>
```

En este código, se crea una variable `category_name` que contiene el nombre de la categoría tomado del URL, después se utiliza un `{% if category_path.size > 0 %}` para anexar meta data pertinente a la categoría.

Liquid es la manera para crear contenido dinámico en todas las partes de tu Sitio. Para conocer más información acerca de Liquid y como usar Liquid Drops, visita [Liquid Markup](/es/platform/channels/liquid-markup).