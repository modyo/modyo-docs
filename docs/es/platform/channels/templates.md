---
search: true
---

# Plantillas

La arquitectura base y la apariencia son aspectos esenciales de un sitio. En la sección de Plantillas, puedes ajustar las plantillas base, así como el JavaScript y CSS globales y modificar la estructura según sea necesario.

Cuando creas un sitio, se completa con plantillas distintas para generar el tema Minimal y puedes empezar a crear tu canal digital en él. Puedes también crear snippets de código HTML, JS y CSS para extender la funcionalidad de tu sitio.

En la sección de plantillas, el menú principal se oculta para optimizar el área de trabajo. En la parte superior izquierda, encuentras el nombre de la sección y el estado actual de la publicación:

- **Publicado:** Hay una versión publicada y que la versión editable es idéntica.
- **Cambios pendientes:** Existe una versión publicada, pero hay modificaciones pendientes de publicar en tu versión editable.
- **En revisión:** La [revisión en equipo](/es/platform/core/key-concepts.html) está activada y se ha enviado a revisión la versión editable.
- **Aprobado:** La [revisión en equipo](/es/platform/core/key-concepts.html) está activada y las condiciones de revisión del elemento se han cumplido. En este estado, la plantilla está lista para ser publicada.

En la parte superior derecha, puedes ver la última fecha de publicación e íconos con las acciones disponibles:

**Vista previa:** Da click en este ícono para abrir una nueva pestaña con la vista previa de las plantillas. Aquí puedes visualizar todos los cambios en tus plantillas, como si estuvieran publicados.

:::warning Atención
Puedes previsualizar los cambios como usuario sin sesión o usuario con sesión activa de Modyo. Para esto, recomendamos iniciar o cerrar la sesión de Modyo en el sitio antes de entrar al modo vista previa, dado que si se inicia o cierra sesión dentro del modo vista previa. Esto se debe a que iniciar o cerrar sesión dentro del modo vista previa puede generar errores de seguridad como _x-frame-options_ o _mixed-content_, dependiendo de la configuración de dominios personalizados y SSL del sitio.
:::

**Diferencias:** Compara los cambios entre múltiples versiones de tus plantillas. Por defecto, Modyo compara la versión publicada con la versión editable. Usa los selectores de versiones para comparar con versiones de respaldo.

:::tip Tip
Cada vez que publicas una versión, la versión que estaba publicada pasa a ser una versión de respaldo. Por defecto, se guardan hasta 20 respaldos, permitiéndote comparar, restaurar y hacer rollback a las últimas 20 versiones

Para más información sobre el versionamiento, consulta la sección de [versionado](/es/platform/core/key-concepts.html#versionado).
:::

**Buscar en plantillas:** Despliega una barra lateral con un buscador de texto que explora todas las plantillas editables.

**Ver actividad:** Despliega una barra lateral que muestra el historial de actividad y donde puedes leer y escribir comentarios. Haz click en **ver detalle** para mostrar la información completa de cualquier registro de actividad.

**Más acciones:** Este ícono te permite **archivar** o **borrar** una plantilla.

La última opción en la bara superior muestra las acciones principales que puedes llevar a cabo:

- **Guardar:** Guarda todos los cambios de todas las plantillas.
- **Enviar a revisión:** Cambia el estado de las plantillas a "Esperando revisión". En este estado puedes seguir haciendo modificaciones, pero cada cambio será notificado por correo a los revisores asignados.
- **Forzar publicación:** Solo disponible para administradores del sitio, permite publicar inmediatamente una plantilla, incluso si está esperando revisión
- **Rechazar:** Vuelve al estado "En edición" y notifica a los revisores que el elemento fue rechazado.
- **Publicar:** Una vez que la plantilla ha sido aprobada, puedes enviarla a publicar.

En el área de trabajo principal, hay dos secciones:

- **El área de edición:** El hacer click en una plantilla del listado del área de selección del lado derecho abrirá la plantilla en el área central con un editor de texto. Si abres múltiples plantillas, abrirán como pestañas en el área de trabajo.
- **El área de selección de plantillas:** Selecciona la pestaña de vistas o snippets, según requieras.

## Layouts

Modyo ofrece tres layouts predefinidos:

* **Home:** Exclusivamente para la página principal del sitio.
* **Base:** Todas las páginas, excepto la de inicio, usan este layout.
* **Error:** Empleado en las vistas de error (404, 401), presentando un diseño limpio.

Para crear un nuevo layout:
1. En la sección de **Plantillas** da click en la pestaña **Vistas**
2. Da click en el botón **+** junto a **Layouts**.
3. Agrega la Ruta y haz clic en Añadir.

Esto te permite definir una nueva estructura base para usar en las páginas.

Puedes usar como base este código que contiene todo lo necesario para que tus páginas usen los elementos del sitio, como el encabezado, pie de página, service worker y la configuración de Google Tag Manager. También puedes modificar el código, según requieras.


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

Para aplicar un layout nuevo a una página, sigue estos pasos:
1. Ve a la sección **Páginas**
2. Selecciona la pestaña **Propiedades**.
3. Elige el layout que deseas usar en tu página.
4. Envía a revisión o publica tu layout, según el caso.


## Errores en Vistas

En la sección de vistas puedes personalizar cuatro tipos de errores:

* **Deshabilitado:** Se muestra cuando el sitio al que intentas acceder está [deshabilitado](/es/platform/channels/sites.html).
* **404:** Si en la configuración de [restricciones del sitio](/es/platform/channels/sites.html#privacidad) decides mostrar el 404 en lugar de redireccionar a la página de inicio, se muestra este error al ingresar a una URL no definida.
* **Privacy:** Se muestra cuando no tienes permisos para acceder al [sitio](/es/platform/channels/sites.html#privacidad) o a una de sus [páginas](/es/platform/channels/pages.html#privacidad).
* **Template:** Visible cuando la página cargada tiene un error de sintaxis de Liquid. Es poco probable que veas esta vista, debido a que a partir de Modyo 8.1 la plataforma realiza una verificación de la sintaxis antes de guardar y publicar cambios en Plantillas.

## CSS y JavaScript

Crea vistas personalizadas de CSS y JavaScript para importar tus librerías a Modyo Platform. Para ello, sigue estos pasos:

1. En la sección de **Plantillas** da click en la pestaña **Vistas**.
1. Dirígete a la sección CSS o JavaScript, debajo de la sección de **Layout**.
1. Da click en el botón **+**correspondiente.
1. Agrega la Ruta y haz click en **Añadir**.
1. Una vez que hayas terminado de editar la Hoja de Estilo o Javascript, debes incluirla en tu layout. Para ello, puedes usar los siguientes filtros de Liquid:

- `asset_url`: Para definir el tipo de archivo
- `stylesheet_tag`: Genera un tag <link> para incluir la vista de CSS.
- `script_tag`: Genera un tag <script> para incluir la vista de Javascript.

### Ejemplos
- Una vista personalizada de CSS con media: screen
- Una vista personalizada de Javascript con carga asíncrona


```html
<head>
  {{ 'my-css' | asset_url: 'css' | stylesheet_tag: media: 'screen', title: 'color style' }}
  {{ 'my-js'  | asset_url: 'js'  | script_tag: async: 'async', defer: 'defer' }}
</head>
```

Una vez guardado y publicado, se traduce al siguiente código HTML:

```html
<link href='my-css' rel='stylesheet' type='text/css' media='screen' title='color style' />
<script src='my-js' type='text/javascript' async='async' defer='defer'></script>
```

Para obtener información detallada y conocer los parámetros admitidos por estos filtros, consulta la sección de [filtros de Liquid](/es/platform/channels/liquid-markup.html#filtros-estandar).


## Snippets

Los snippets son fragmentos reutilizables de código HTML, JS o CSS para tus sitios. Para usar un snippet:

1. Copia la ruta de referencia del snippet personalizado. El código Liquid será similar a: <span v-pre>`{% snippet "nombre-del-snippet" %}`</span>.
1. Pega el código donde quieras llamar a este Snippet.

Para añadir un snippet personalizado:
1. En la sección de **Plantillas** da click en la pestaña **Snippets**
1. Navega hasta la sección Personalizado, al final del listado de snippets.
1. Da click en el botón **+**
1. Agrega la Ruta y haz clic en Añadir.


:::warning Importante
Para que el sistema reconozca el lenguaje de programación al que pertenece el snippet, debes agregar un guión bajo y después la terminación; de la siguiente manera: "front_css" o "library_js". Por defecto, el sistema reconocerá el snippet como lenguaje HTML.
:::

:::tip Tip
Todos los elementos del Template Builder usan Liquid como motor de plantillas. Para más información sobre Liquid y cómo usarlo, consulta la sección [Liquid Markup](/es/platform/channels/liquid-markup.html)
:::

En el área de trabajo, debajo de las pestañas, encontrarás una barra con estos elementos:

**Elementos de la barra de herramientas**
La barra de herramientas debajo de las pestañas del Template Builder contiene los siguientes elementos:

- **Gestor de archivos:** Abre un modal que te permite acceder a todos los archivos de tu cuenta y copiar su URL. Selecciona la pestaña **Subir archivos** para cargar nuevos archivos. Para más información sobre los beneficios y funcionalidades de Gestor de Archivos, dirígete a [Gestor de Archivos](/es/platform/content/asset-manager.html)
- **Atajos de teclado:** Muestra atajos de teclado útiles para Plantillas.
- **Snippets:** Despliega un listado con todos los snippets y la opción de copiar su código de referencia.
- **Cambios:** Despliega un listado de todas las veces y estados en los que has guardado la versión actual. Al hacer click en una de las sub-versiones, cambias el contenido del template a esa sub-versión.

:::tip Tip
Al publicar una versión, el listado de cambios desaparece, debido a que la nueva versión editable no ha tenido cambios.
:::

:::tip Tip
Las sub-versiones son específicas a cada plantilla, por lo que algunos pueden tener cambios y otros no, las que no tienen cambios no mostrarán el selector de cambios. De la misma forma, si vuelves a una sub-versión anterior de un template, no afectas al resto de los templates.
:::

:::tip Tip
Si restableces una versión anterior a la versión editable, puedes acceder a las sub-versiones de cada template de esa versión. Puedes aprender más sobre [versionado](/platform/core/key-concepts.html#versionado) aquí.
:::

Para restaurar todas las plantillas a su versión original, haz click en la acción secundaria de la barra superior **Restaurar todo**. Para que los cambios tengan efecto, debes publicar las plantillas.

## SEO

El SEO [(Search Engine Optimization)](/es/platform/channels/sites.html#seo) es fundamental para el posicionamiento de tu sitio y contenido.

En Modyo puedes controlar la forma en que los motores de búsqueda leen tu sitio y contenido, agregando meta tags de forma dinámica, según los atributos que añadas a tus páginas y contenidos.

Para añadir las meta tags en Modyo, usa este snippet de código en Plantillas y luego llámalo desde el head de tu sitio:

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

Este snippet usa Liquid para agregar meta tags a nivel de sitio. También agrega meta tags específicas cuando el usuario navega a una página de widget o de contenido.

Puedes personalizar este snippet y definir qué meta tags deseas para URLs o tipos específicos.


## Ejemplos de SEO

A continuación te proporcionamos ejemplos de cómo usar el snippet de SEO para mejorar el SEO de diferentes casos:

### Meta tags específicos para una Entrada

Emplea este código para usar meta tags específicas cuando un usuario visita una entrada:

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

En este caso, los tipos de entrada `posts` y `place` comparten los atributos _title_, _excerpt_ y _covers_ y difieren en el objeto _locations_. Además, define un tipo de documento diferente para cada uno.

### Meta tags específicos para Categoría en Página de Contenido

Para meta tags específicos al mostrar entradas de una categoría, copia el siguiente código:

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

En este código, se crea una variable `category_name` que contiene el nombre de la categoría tomado del URL, después se utiliza un `{% if category_path.size > 0 %}` para añadir metadata pertinente a la categoría.

Liquid te permite crear contenido dinámico para tu sitio. Para conocer más acerca de Liquid y como usar Liquid Drops, visita [Liquid Markup](/es/platform/channels/liquid-markup).