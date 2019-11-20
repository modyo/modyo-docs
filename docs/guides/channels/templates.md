---
search: true
---

# Templates

Uno de los aspectos más importantes al crear nuestro sitio es la arquitectura base y apariencia de este. En Template Builder, podrás modificar los templates base, junto con el JavaScript y CSS globales para usar en tus páginas y cambiar su estructura según lo requieras.

Una vez seleccionado el tema que se usará dentro del sitio, se puede acceder desde el Template Builder a las distintas páginas para cambiar los códigos según los necesitas.

Una vez dentro del Template Builder, verás que el menú principal se esconde para optimizar el área de trabajo. En la barra superior, a la izquierda, encontrarás el nombre de la sección y el estado actual:

- **Publicado**: Este estado lo verás luego de haber hecho una publicación y cuando las versiones editable y publicada son iguales.
- **Cambios pendientes**: Este estado lo verás si es que ya hay una versión publicada, pero hay cambios pendientes de publicar en tu versión editable.
- **En revisión**: Este estado lo verás cuando esté habilitada la [revisión en equipo](guides/platform/team-review.html) y se haya enviado a revisión la versión editable.
- **Aprobado**: Este estado lo verás cuando esté habilitada la [revisión en equipo](guides/platform/team-review.html) y si es que se cumplieron las condiciones de revisión del elemento. Si estás en este estado, tus templates están listos para ser publicados.

![Template builder](/assets/img/channels/template_builder/template-builder.jpg) 

En la parte superior derecha, encontrarás la última fecha de publicación y las acciones disponibles:

**Vista previa** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5c-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0a9.821 9.821 0 0 0-17.64 0z" fill="#626262"/><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg>: Al hacer click en este icono se abrirá una nueva pestaña con el modo vista previa de los templates, en el cual podrás ver como si estuvieran publicados, todos los cambios que tienes en tus templates.

<img src="/assets/img/channels/template_builder/differences.jpg" style="border: 1px solid #EEEEEE" width="700">

**Diferencias** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M19 3h-5v2h5v13l-5-6v9h5a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-9 15H5l5-6m0-9H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h5v2h2V1h-2v2z" fill="#626262"/></svg>: Al hacer click en este icono, abrirás el modal de diferencias, en el cual podrás comparar los cambios que hay entre múltiples versiones de tus templates. Por defecto partirás comparando la versión publicada con la versión editable, pero al hacer uso de los selectores de versiones, podrás comparar además con las versiones de respaldo.

:::tip
Cada vez que publicas una versión, la versión que estaba publicada pasa a ser una versión de respaldo. Por defecto, se guardan hasta 20 respaldos, de tal forma que los veinte respaldos más recientes se pueden comparar, restaurar y hacer rollback. Para mas información sobre el versionamiento, échale un vistazo a la sección de [versionado](/guides/platform/team-review.html#versionado).
:::

<img src="/assets/img/channels/template_builder/conversation.jpg" style="border: 1px solid #EEEEEE" width="700">

**Actividad/Comentarios** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M12 23a1 1 0 0 1-1-1v-3H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-4.1l-3.7 3.71c-.2.18-.44.29-.7.29H12m1-6v3.08L16.08 17H21V7H7v10h6M3 15H1V3a2 2 0 0 1 2-2h16v2H3v12m6-6h10v2H9V9m0 4h8v2H9v-2z" fill="#626262"/><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg>: Despliega una barra lateral con el historial de actividad y comentarios de los templates. Al final de la barra lateral, verás una caja de texto donde podrás escribir un comentario. Junto a cada actividad, podrás hacer click en "ver detalle" para mostrar la información completa de ese registro de actividad.

**Más acciones** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M12 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2z" fill="#626262"/><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg>:

- **Temas**: Irás directo al indice de temas del sitio, donde podrás crear copias del tema actual para usar en los otros sitios de tu cuenta. Para saber más revisa [Temas](/guides/channels/templates.html#temas)
- **Restaurar todo**: Restaurarás todos los templates al valor original del tema.

**Acción principal**

- **Guardar**: Guardará todos los cambios de todos los templates.
- **Enviar a revisión**: Cambia el estado de los templates a "esperando revisión". En este estado podrás seguir haciendo cambios, pero cada cambio será notificado via correo a los revisores asignados.
- **Rechazar**: Vuelve al estado "en edición", notificando a los revisores que el elemento fue rechazado.
- **Publicar**: Una vez que los templates fueron aprobados, se podrán pasar a la versión publicada.

En el área de trabajo principal, podrás ver dos secciones:

- El área de trabajo.
- El area de selección de templates.

Cada template al que le hagas click en la barra lateral derecha, se abrirá en el área central, muy similar a un IDE. Si abres múltiples templates, estos quedarán abiertos como pestañas en el área de trabajo.

La barra de templates a la derecha tiene dos pestañas: vistas y snippets.

Las vistas son elementos base y requeridos por Modyo, y usualmente se traducen en la estructura directa de alguna de las URL de tu sitio.

### Snippets ###

Los snippets son pedazos de código que pueden ser utilizados una o más veces. Junto a cada snippet, encontrarás un icono (<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M19 21H8V7h11m0-2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m-3-4H4a2 2 0 0 0-2 2v14h2V3h12V1z" fill="#626262"/><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg>) para copiar su ruta de referencia. El código lucirá similar a este: <span v-pre>`{% snippet "nombre-del-snippet" %}`</span>.

Puedes añadir snippets personalizados al final del listado de snippets de la plataforma, haciendo click en el botón **"+ Añadir un snippet"**.

<img src="/assets/img/channels/template_builder/custom-snippet.jpg" style="border: 1px solid #EEEEEE" width="300">

:::tip
Para que el sistema reconozca el tipo de lenguaje de programación al que pertenece el snippet, se debe agregar la terminación con underline + terminación, es decir **"front_css"** o **"library_js"** por defecto reconocerá el snippet como lenguaje HTML.
:::


:::tip
Todos los elementos del Template Builder usan _Liquid_ como motor de plantillas.

Para mas información sobre qué es Liquid y cómo sacarle el mejor provecho, echa un vistazo a la página [Liquid Markup](/docs/channels/liquid-markup.html)
:::

En el área de trabajo, debajo de las pestañas, encontrarás una barra con elementos útiles:

<img src="/assets/img/channels/template_builder/bar-templates.jpg" style="border: 1px solid #EEEEEE" width="700">

**Gestor de archivos**: Se levantará un modal donde podrás acceder a todos los archivos de la cuenta y copiar su URL, si accedes a la segunda pestaña, podrás subir nuevos archivos.

:::tip
Para mas información sobre los beneficios y prestaciones de Gestor de Archivos, dirígete a [Asset Manager](/docs/content/asset-manager.html)
:::

**Atajos de teclado**: Se mostrará un pequeño pop-up con algunos de los atajos de teclado útiles para usar en el template builder.

<img src="/assets/img/channels/template_builder/keywords.jpg" width="400">

**Snippets**: Se desplegará un listado con todos los snippets, junto a la opción de copiar su código de referencia.

<img src="/assets/img/channels/template_builder/snippets.jpg" width="300">

**Cambios**: Un listado de todas las veces y estados en los que has hecho la acción "Guardar" en esta versión. Al hacer click en alguna de las sub-versiones, cambiarás el contenido del template en el que estás trabajando a esa sub-versión.

<img src="/assets/img/channels/template_builder/changes.jpg" style="border: 1px solid #EEE" width="300">

:::tip
Si publicas una versión, verás que el listado de cambios desaparece, esto es porque la nueva versión editable no ha tenido ningún cambio.
:::

:::tip
Las sub-versiones son por cada template, por lo que para algunos verás que hay cambios y para otros no verás el selector de cambios. De la misma forma, si vuelves a una sub-versión anterior de un template, no afectarás al resto de los templates.
:::

:::tip
Si se reestablece una versión anterior a la versión editable, podrás acceder a las sub-versiones de cada template de esa versión. Puedes aprender mas sobre el [versionado aquí](/guides/platform/team-review.html#versionado)
:::

Al igual que cada template, puedes restaurar todos los templates a su versión original haciendo click en la acción secundaria de la barr superior "<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M12.5 8c-2.65 0-5.05 1-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88c3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z" fill="#626262"/><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg> Restaurar todo". Para que esos cambios tengan efecto, debes publicar los templates.

### Temas

En esta vista podrás ver cual es el tema que tienes instalado, y luego el listado de todos los temas disponibles para el sitio. Haciendo _click_ en el botón "Instalar" de un tema, reemplazarás todo el contenido de tus temas editables por el contenido de el tema que estás instalando. Podrás previsualizar los cambios usando el modo vista previa del template builder y luego publicarlos para llevar ese nuevo tema al sitio publicado.

En la parte superior encontrarás distintas acciones:
- **Personalizar** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M14.6 16.6l4.6-4.6l-4.6-4.6L16 6l6 6l-6 6l-1.4-1.4m-5.2 0L4.8 12l4.6-4.6L8 6l-6 6l6 6l1.4-1.4z" fill="#626262"/><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg>: Te lleva a la edición (template builder) del tema actualmente instalado.
- **Copiar** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M19 21H8V7h11m0-2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m-3-4H4a2 2 0 0 0-2 2v14h2V3h12V1z" fill="#626262"/><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg>: Crea una copia del tema instalado. Te permitirá elegir un nuevo nombre para el tema copia del instalado.
- **Reestablecer** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M12.5 8c-2.65 0-5.05 1-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88c3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z" fill="#626262"/><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg>: Al igual que la acción reestablecer del template builder, esta acción restaura todos los templates editables a la versión original del tema.
- **Cargar templates** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M13 9h5.5L13 3.5V9M6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2m.12 13.5l3.74 3.74l1.42-1.41l-2.33-2.33l2.33-2.33l-1.42-1.41l-3.74 3.74m11.16 0l-3.74-3.74l-1.42 1.41l2.33 2.33l-2.33 2.33l1.42 1.41l3.74-3.74z" fill="#626262"/><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg>: En algunos casos, luego de migraciones complejas, hay algunos templates no modificado que se pueden perder y podrías no verlos en el listado de templates en el template builder. Esta acción recupera esos templates desde el tema original y te permite volver a ocuparlos.

:::tip
La acción cargar templates no modifica ni toca los templates editables que ya están visibles en el template builder, solo restaura aquellos que no son visibles.
:::

:::tip
Cuando creas o copias un tema en un sitio, ese tema queda disponible para todos los otros sitios de la cuenta, de tal forma que puedes crear un tema base, y partir desde esa base cuando necesites crear nuevos sitios de forma rápida.
:::

## Vistas para contenido

Para poder mostrar [contenido](/guides/content/) de forma automática en un sitio, debes cumplir con ciertas condiciones:

1. Contar con un espacio con al menos un idioma (el mismo del sitio) con por lo menos un Tipo. Dirígete a [Espacios](/guides/content/spaces.html) y [Tipos](/guides/content/types.html) para aprender cómo.
1. Contar con entradas publicadas en el idioma del sitio. Dirígete a [Entradas](/guides/content/entries.html) y [Localización](/guides/content/spaces.html#localizacion) para aprender más.
1. Asociar el espacio a tu sitio. Dirígete a [configuración general de sitios](/guides/channels/sites.html#general) para aprender más.
1. Crear una vista personalizada en los templates y nombrarla igual que el UID del Espacio que quieres mostrar. Dirígete a [crear un Espacio](/guides/content/spaces.html#crear-un-espacio.html) para aprender más.

Para crear una vista personalizada, debes entrar al Template Builder y asegurarte de que estás en la primera pestaña "Vistas". Al hacer scroll hasta el final de la lista, verás que hay una sección llamada "Custom" y un botón "+ Añadir vista personalizada". Cuando crees la vista personalizada, asegúrate de que su nombre coincide con el UID del espacio que quieres mostrar en esa vista.

Al modificar esta vista, puedes hacer uso de Liquid, y del objeto `entry`, por ejemplo: <span v-pre>`{{ entry.published_at | format_date }}`</span>

Un ejemplo básico de código _Liquid+HTML_ que puedes usar en estas vistas es:

```html
<div>
    <h1 class="title">{{ entry.title }}</h1>
    <time>{{ entry.published_at | format_date }}</time>
    <span class="url"><a href="{{site.url}}/{{entry.type_uid}}/{{entry.slug}}">{{site.url}}/{{entry.type_uid}}/{{entry.slug}}</a></span>
</div>

<div>
    <div class="description">
        {{ entry.description }}
    </div>
</div>
```

:::tip
Para aprender más sobre cómo usar Liquid, dirígete a [Liquid markup](/guides/channels/liquid-markup.html)
:::

Con esta vista creada y publicada, si la URL a la que se está accediendo es del tipo `site_url/space_uid/entry_slug`, donde `space_uid` es el UID del espacio que quieres mostrar y coincide con el nombre de la vista que acabas de crear, y existe una entrada publicada en el idioma del sitio y además, el slug de la entry es `entry_slug`, estarás mostrando la vista con los valores de esa entrada.

## SEO

El SEO es uno de los temas más importantes del sitio y del contenido. En Modyo tenemos una forma de controlar la forma en que los motores de búsqueda leen tu sitio y contenido, añadiendo meta tags de forma dinámica dependiendo de los atributos que añadas a tus páginas y contenidos.

Te recomendamos añadir este snippet de código al Template Builder, y luego llamar a este snippet desde el head de tu sitio:

```html
<!-- Site SEO -->
<meta name="keywords" content="{{ site.keywords }}"/>
<meta name="author" content="{{ site.name }}"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
{% if current_layout_page %}
<!--Layouts SEO -->
<meta name="description" content="{{ current_layout_page.excerpt }}"/>
<meta property="og:title" content="{{ current_layout_page.title }}"/>
<meta property="og:type" content="website"/>
<meta property="og:url" content="{{ current_layout_page.url }}"/>
<meta property="og:image" content="{{ site.logo | asset_url : 'original' }}"/>
<meta property="og:site_name" content="{{ site.name }}"/>
<meta property="og:description" content="{{ current_layout_page.excerpt }}"/>
{% endif %}
{% if entry %}
<!-- Content SEO -->
<meta name="description" content="{{ entry.excerpt }}"/>
<meta property="og:title" content="{{ entry.title }}"/>
<meta property="og:type" content="article"/>
<meta property="og:url" content="{{site.url}}/{{entry.type_uid}}/{{entry.slug}}"/>
<meta property="og:image" content="{{ entry.covers.first | asset_url : 'original' }}"/>
<meta property="og:site_name" content="{{ site.name }}"/>
<meta property="og:description" content="{{ entry.excerpt }}"/>
{% endif %}
{% unless current_layout_page or entry %}
<!-- Default SEO -->
<meta name="description" content="{{ site.description }}"/>
<meta property="og:title" content="{{ site.name }}"/>
<meta property="og:type" content="website"/>
<meta property="og:url" content="{{ request.url }}"/>
<meta property="og:image" content="{{ site.logo | asset_url : 'original' }}"/>
<meta property="og:site_name" content="{{ site.name }}"/>
<meta property="og:description" content="{{ site.description }}"/>
{% endunless %}
<!-- END SEO <-->
```

Este snippet diferencia cuando se está usando una página personalizada, alguna de las páginas por defecto de Modyo, o bien, alguna de las vistas de contenido, por lo que haciendo uso de los atributos de cada elemento, puedes definir una buena base de SEO para todas las URLs de tu sitio.

Si es que lo requieres, puedes personalizar aún más este snippet, definiendo que metas quieres que aparezcan para URLs específicas o para tipos específicos, por ejemplo, en la sección de contenido, puedes usar:

```html
...
{% if entry %}
<!-- Content SEO -->
    <meta name="description" content="{{ entry.excerpt }}"/>
    <meta property="og:title" content="{{ entry.title }}"/>
    <meta property="og:url" content="{{site.url}}/{{entry.type_uid}}/{{entry.slug}}"/>
    <meta property="og:image" content="{{ entry.covers.first | asset_url : 'original' }}"/>
    <meta property="og:site_name" content="{{ site.name }}"/>
    <meta property="og:description" content="{{ entry.excerpt }}"/>
    {% if entry.type_uid = 'posts'%}
        <meta property="og:type" content="article"/>
    {endif}
    {% if entry.type_uid = 'place'%}
        <meta property="og:type" content="place"/>
        <meta property="place:latitude" content="{{ entry.location.first.latitude }}"/>
        <meta property="place:longitude" content="{{ entry.location.first.longitude }}"/>
    {% endif %}
{% endif %}
...
```

En este caso, los tipos `posts` y `place` comparten los atributos title, exerpt y covers, y difieren en el objeto locations. Además, definimos un tipo de documento diferente para cada uno.
