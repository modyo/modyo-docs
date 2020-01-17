---
search: true
---

# Templates

Uno de los aspectos más importantes al crear el sitio es la arquitectura base y apariencia de este. En Template Builder, podrás modificar los templates base, junto con el JavaScript y CSS globales para usar en tus páginas y cambiar su estructura según lo requieras.

Cuando ya se selecciona el tema que se usa dentro del sitio, se puede acceder desde el Template Builder a las distintas páginas para cambiar los códigos según los necesitas.

Una vez dentro del Template Builder, puedes ver que el menú principal se esconde para optimizar el área de trabajo. En la barra superior, a la izquierda, encuentras el nombre de la sección y el estado de publicación actual:

- **Publicado**: Cuando ya existe una versión publicada y su version editable es igual.
- **Cambios pendientes**: Cuando hay una versión publicada, pero hay cambios pendientes de publicar en tu versión editable.
- **En revisión**: Cuando se habilita la [revisión en equipo](guides/platform/team-review.html) y se ha enviado a revisión la versión editable.
- **Aprobado**: Cuando se habilita la [revisión en equipo](guides/platform/team-review.html) y si es que se cumplieron las condiciones de revisión del elemento. Si estás en este estado, tus templates están listos para ser publicados.

![Template Builder](/assets/img/channels/template_builder/template-builder.jpg)

En la parte superior derecha, encuentras la última fecha de publicación y las acciones disponibles:

**Vista previa** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5c-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0a9.821 9.821 0 0 0-17.64 0z" fill="#626262"/><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg>: Al hacer _click_ en este icono se abre una nueva pestaña con el modo vista previa de los templates, en el cual podrás ver como si estuvieran publicados, todos los cambios que tienes en tus templates.

<img src="/assets/img/channels/template_builder/differences.jpg" style="border: 1px solid #EEEEEE" width="700">

**Diferencias** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M19 3h-5v2h5v13l-5-6v9h5a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-9 15H5l5-6m0-9H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h5v2h2V1h-2v2z" fill="#626262"/></svg>: Al hacer _click_ en este icono, abres el modal de diferencias, en el cual podrás comparar los cambios que hay entre múltiples versiones de tus templates. 

Por defecto, partes comparando la versión publicada con la versión editable, pero al hacer uso de los selectores de versiones, puedes comparar además con las versiones de respaldo.

:::tip Tip
Cada vez que publicas una versión, la versión que estaba publicada pasa a ser una versión de respaldo. Por defecto, se guardan hasta 20 respaldos, de tal forma que los veinte respaldos más recientes se pueden comparar, restaurar y hacer rollback. 
Para más información sobre el versionamiento, échale un vistazo a la sección de [versionado](/guides/platform/team-review.html#versionado).
:::

<img src="/assets/img/channels/template_builder/conversation.jpg" style="border: 1px solid #EEEEEE" width="700">

**Actividad/Comentarios** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M12 23a1 1 0 0 1-1-1v-3H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-4.1l-3.7 3.71c-.2.18-.44.29-.7.29H12m1-6v3.08L16.08 17H21V7H7v10h6M3 15H1V3a2 2 0 0 1 2-2h16v2H3v12m6-6h10v2H9V9m0 4h8v2H9v-2z" fill="#626262"/><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg>: Despliega una barra lateral con el historial de actividad y comentarios de los templates. 

Al final de la barra lateral, ves una caja de texto donde puedes escribir un comentario. Junto a cada actividad, puedes hacer _click_ en **ver detalle** para mostrar la información completa de ese registro de actividad.

**Más acciones** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M12 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2z" fill="#626262"/><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg>:

- **Temas**: Se dirige directo al indice de temas del sitio, donde podrás crear copias del tema actual para usar en los otros sitios de tu cuenta. Para saber más revisa [Temas](/guides/channels/templates.html#temas)
- **Restaurar todo**: Restauras todos los templates al valor original del tema.

**Acción principal**

- **Guardar**: Guarda todos los cambios de todos los templates.
- **Enviar a revisión**: Cambia el estado de los templates a "Esperando revisión". En este estado puedes seguir haciendo cambios, pero cada cambio será notificado via correo a los revisores asignados.
- **Rechazar**: Vuelve al estado "En edición", notificando a los revisores que el elemento fue rechazado.
- **Publicar**: Una vez que los templates fueron aprobados, se pueden pasar a la versión publicada.

En el área de trabajo principal, puedes ver dos secciones:

- El área de trabajo.
- El area de selección de templates.

Cada template al que le hagas _click_ en la barra lateral derecha, se abre en el área central, muy similar a un IDE. Si abres múltiples templates, estos quedan abiertos como pestañas en el área de trabajo.

La barra de templates a la derecha tiene dos pestañas: vistas y snippets.

Las vistas son elementos base y requeridos por Modyo, y usualmente se traducen en la estructura directa de alguna de las URL de tu sitio.

### Snippets

Los snippets son pedazos de código que pueden ser utilizados una o más veces. Junto a cada snippet personalizado, encontrarás un ícono (<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M19 21H8V7h11m0-2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m-3-4H4a2 2 0 0 0-2 2v14h2V3h12V1z" fill="#626262"/><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg>) para copiar su ruta de referencia. El código lucirá similar a este: <span v-pre>`{% snippet "nombre-del-snippet" %}`</span>.

Puedes añadir snippets personalizados al final del listado de snippets de la plataforma, haciendo _click_ en el botón **+ Añadir un snippet**.

<img src="/assets/img/channels/template_builder/custom-snippet.jpg" style="border: 1px solid #EEEEEE" width="300">

:::tip Tip
Para que el sistema reconozca el tipo de lenguaje de programación al que pertenece el snippet, se debe agregar la terminación con guión bajo + terminación, es decir **"front_css"** o **"library_js"** por defecto reconocerá el snippet como lenguaje HTML.
:::

:::tip Tip
Todos los elementos del Template Builder usan Liquid como motor de plantillas.

Para más información sobre qué es Liquid y cómo sacarle el mejor provecho, echa un vistazo a la página [Liquid Markup](/docs/channels/liquid-markup.html)
:::

En el área de trabajo, debajo de las pestañas, encontrarás una barra con elementos útiles:

<img src="/assets/img/channels/template_builder/bar-templates.jpg" style="border: 1px solid #EEEEEE" width="700">

**Gestor de archivos**: Se levanta un modal donde puedes acceder a todos los archivos de la cuenta y copiar su URL. Si accedes a la segunda pestaña, puedes subir nuevos archivos.

:::tip Tip
Para más información sobre los beneficios y prestaciones de Gestor de Archivos, dirígete a [Asset Manager](/docs/content/asset-manager.html)
:::

**Atajos de teclado**: Se muestra un pequeño pop-up con algunos de los atajos de teclado útiles para usar en el Template Builder.

<img src="/assets/img/channels/template_builder/keywords.jpg" width="400">

**Snippets**: Se despliega un listado con todos los snippets, junto a la opción de copiar su código de referencia.

<img src="/assets/img/channels/template_builder/snippets.jpg" width="300">

**Cambios**: Un listado de todas las veces y estados en los que has hecho la acción "Guardar" en esta versión. Al hacer _click_ en alguna de las sub-versiones, cambias el contenido del template en el que estás trabajando a esa sub-versión.

<img src="/assets/img/channels/template_builder/changes.jpg" style="border: 1px solid #EEE" width="300">

:::tip Tip
Si publicas una versión, puedes ver que el listado de cambios desaparece, esto es porque la nueva versión editable no ha tenido ningún cambio.
:::

:::tip Tip
Las sub-versiones son por cada template, por lo que para algunos puedes observar que hay cambios y para otros no verás el selector de cambios. De la misma forma, si vuelves a una sub-versión anterior de un template, no afectas al resto de los templates.
:::

:::tip Tip
Si se reestablece una versión anterior a la versión editable, podrás acceder a las sub-versiones de cada template de esa versión. 
Puedes aprender más sobre el [versionado aquí].(/guides/platform/team-review.html#versionado)
:::

Al igual que cada template, puedes restaurar todos los templates a su versión original haciendo _click_ en la acción secundaria de la barra superior "<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M12.5 8c-2.65 0-5.05 1-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88c3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z" fill="#626262"/><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg> Restaurar todo". Para que esos cambios tengan efecto, debes publicar los templates.

### Temas

En esta vista puedes ver cuál es el tema que tienes instalado, y luego el listado de todos los temas disponibles para el sitio. 

Haciendo _click_ en el botón **Instalar** de un tema, reemplazas todo el contenido de tus temas editables por el contenido de el tema que estás instalando. Puedes previsualizar los cambios usando el modo vista previa del Template Builder y luego publicarlos para llevar ese nuevo tema al sitio publicado.

En la parte superior encuentras distintas acciones:

- **Personalizar** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M14.6 16.6l4.6-4.6l-4.6-4.6L16 6l6 6l-6 6l-1.4-1.4m-5.2 0L4.8 12l4.6-4.6L8 6l-6 6l6 6l1.4-1.4z" fill="#626262"/><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg>: Te lleva a la edición (Template Builder) del tema actualmente instalado.
- **Copiar** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M19 21H8V7h11m0-2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m-3-4H4a2 2 0 0 0-2 2v14h2V3h12V1z" fill="#626262"/><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg>: Crea una copia del tema instalado. Te permitirá elegir un nuevo nombre para el tema copia del instalado.
- **Reestablecer** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M12.5 8c-2.65 0-5.05 1-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88c3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z" fill="#626262"/><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg>: Al igual que la acción reestablecer del Template Builder, esta acción restaura todos los templates editables a la versión original del tema.
- **Cargar templates** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M13 9h5.5L13 3.5V9M6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2m.12 13.5l3.74 3.74l1.42-1.41l-2.33-2.33l2.33-2.33l-1.42-1.41l-3.74 3.74m11.16 0l-3.74-3.74l-1.42 1.41l2.33 2.33l-2.33 2.33l1.42 1.41l3.74-3.74z" fill="#626262"/><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg>: En unos casos, luego de migraciones complejas, existen templates no modificados que se pueden perder y podrías no verlos en el listado que se encuentra en el Template Builder. Esta acción recupera esos templates desde el tema original y permite volver a ocuparlos.

:::tip Tip
La acción cargar templates no modifica ni toca los templates editables que ya están visibles en el Template Builder, solo restaura aquellos que no son visibles.
:::

:::tip Tip
Cuando creas o copias un tema en un sitio, ese tema queda disponible para todos los otros sitios de la cuenta, de tal forma que puedes crear un tema base, y partir desde esa base cuando necesites crear nuevos sitios de forma rápida.
:::

## Vistas para contenido

Para poder mostrar [contenido](/guides/content/) de forma automática en un sitio, debes cumplir con ciertas condiciones:

1. Contar con un espacio con al menos un idioma (el mismo del sitio) con por lo menos un Tipo. Dirígete a [Espacios](/guides/content/spaces.html) y [Tipos](/guides/content/types.html) para aprender cómo.
1. Contar con entradas publicadas en el idioma del sitio. Dirígete a [Entradas](/guides/content/entries.html) y [Localización](/guides/content/spaces.html#localizacion) para aprender más.
1. Asociar el espacio a tu sitio. Dirígete a [configuración general de sitios](/guides/channels/sites.html#general) para aprender más.
1. Crear una vista personalizada en los templates y nombrarla igual que el UID del tipo que quieres mostrar. Dirígete a [crear un Espacio](/guides/content/spaces.html#crear-un-espacio.html) para aprender más.

Para crear una vista personalizada, debes entrar al Template Builder y asegurarte de que estás en la primera pestaña "Vistas". Al hacer scroll hasta el final de la lista, verás que hay una sección llamada **Custom** y un botón **+ Añadir vista personalizada**. Cuando crees la vista personalizada, asegúrate de que su nombre coincide con el UID del espacio que quieres mostrar en esa vista.

Al modificar esta vista, puedes hacer uso de Liquid, y del objeto `entry`, por ejemplo: <span v-pre>`{{ entry.published_at | format_date }}`</span>

Un ejemplo básico de código Liquid+HTML que puedes usar en estas vistas es:

```html
<div>
  <h1 class="title">{{ entry.title }}</h1>
  <time>{{ entry.published_at | format_date }}</time>
  <span class="url"
    ><a href="{{site.url}}/{{entry.type_uid}}/{{entry.slug}}"
      >{{site.url}}/{{entry.type_uid}}/{{entry.slug}}</a
    ></span
  >
</div>

<div>
  <div class="description">
    {{ entry.description }}
  </div>
</div>
```

:::tip Tip
Para aprender más sobre cómo usar Liquid, dirígete a [Liquid markup](/guides/channels/liquid-markup.html)
:::

Si quieres mostrar la vista con los valores de la entrada en que estás trabajando, se debe cumplir con los siguientes requisitos:

1. La vista debe estar creada y publicada. 
2. La URL a la que se está accediendo es del tipo `site_url/type_uid/entry_slug`.
3. El `type_uid` es el UID del tipo de contenido que quieres mostrar.
4. La URL coincide con el nombre de la vista que acabas de crear. 
5. Ya existe una entrada publicada en el idioma del sitio. 
6. El slug de la entrada es `entry_slug`.

:::tip Tip

Para encontrar la forma de la URL, en el caso de que el custom domain esté habilitado, debes ir a ``Configuración del Sitio > Dominios``.

En caso de que no se encuentre habilitado, la URL será de la forma `account_url/site_host`.
:::


## SEO

El SEO [(Search Engine Optimization)](/guides/channels/sites.html#seo) es uno de los tópicos más importantes del sitio y del contenido. 

En Modyo existe una forma de controlar la forma en que los motores de búsqueda leen tu sitio y contenido, añadiendo meta tags de forma dinámica dependiendo de los atributos que añadas a tus páginas y contenidos.

Puedes añadir este snippet de código al Template Builder, y luego llamar a este snippet desde el head de tu sitio:

```html
<!-- Site SEO -->
<meta name="keywords" content="{{ site.keywords }}" />
<meta name="author" content="{{ site.name }}" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
{% if current_layout_page %}
<!--Layouts SEO -->
<meta name="description" content="{{ current_layout_page.excerpt }}" />
<meta property="og:title" content="{{ current_layout_page.title }}" />
<meta property="og:type" content="website" />
<meta property="og:url" content="{{ current_layout_page.url }}" />
<meta property="og:image" content="{{ site.logo | asset_url : 'original' }}" />
<meta property="og:site_name" content="{{ site.name }}" />
<meta property="og:description" content="{{ current_layout_page.excerpt }}" />
{% endif %} {% if entry %}
<!-- Content SEO -->
<meta name="description" content="{{ entry.excerpt }}" />
<meta property="og:title" content="{{ entry.title }}" />
<meta property="og:type" content="article" />
<meta
  property="og:url"
  content="{{site.url}}/{{entry.type_uid}}/{{entry.slug}}"
/>
<meta
  property="og:image"
  content="{{ entry.covers.first | asset_url : 'original' }}"
/>
<meta property="og:site_name" content="{{ site.name }}" />
<meta property="og:description" content="{{ entry.excerpt }}" />
{% endif %} {% unless current_layout_page or entry %}
<!-- Default SEO -->
<meta name="description" content="{{ site.description }}" />
<meta property="og:title" content="{{ site.name }}" />
<meta property="og:type" content="website" />
<meta property="og:url" content="{{ request.url }}" />
<meta property="og:image" content="{{ site.logo | asset_url : 'original' }}" />
<meta property="og:site_name" content="{{ site.name }}" />
<meta property="og:description" content="{{ site.description }}" />
{% endunless %}
<!-- END SEO <-->
```

Este snippet diferencia cuando se está usando una página personalizada, alguna de las páginas por defecto de Modyo, o bien, las vistas de contenido, por lo que haciendo uso de los atributos de cada elemento, puedes definir una buena base de SEO para todas las URLs de tu sitio.

Si es que lo requieres, puedes personalizar aún más este snippet, definiendo qué metas quieres que aparezcan para URLs o tipos específicos. 

Por ejemplo, en la sección de contenido, puedes usar:

```html
... {% if entry %}
<!-- Content SEO -->
<meta name="description" content="{{ entry.excerpt }}" />
<meta property="og:title" content="{{ entry.title }}" />
<meta
  property="og:url"
  content="{{site.url}}/{{entry.type_uid}}/{{entry.slug}}"
/>
<meta
  property="og:image"
  content="{{ entry.covers.first | asset_url : 'original' }}"
/>
<meta property="og:site_name" content="{{ site.name }}" />
<meta property="og:description" content="{{ entry.excerpt }}" />
{% if entry.type_uid = 'posts'%}
<meta property="og:type" content="article" />
{endif} {% if entry.type_uid = 'place'%}
<meta property="og:type" content="place" />
<meta property="place:latitude" content="{{ entry.location.first.latitude }}" />
<meta
  property="place:longitude"
  content="{{ entry.location.first.longitude }}"
/>
{% endif %} {% endif %} ...
```

En este caso, los tipos `posts` y `place` comparten los atributos title, exerpt y covers, y difieren en el objeto locations. Además, define un tipo de documento diferente para cada uno.

## Integraciones

### Manejo de sesión privada usando OpenID Connect (OIDC)

El método recomendado para interactuar con una API privada usando la sesión de Modyo con una integración OIDC, consiste, básicamente de dos pasos: **hacer el sitio privado** y **habilitar la integración a nivel de cuenta**.

#### Hacer el sitio privado

1. Inicia sesión en la cuenta dónde se desea crear el sitio privado.
2. Haz _click_ en crear un nuevo sitio.
3. Asigna un nombre al nuevo sitio y selecciona el tema base.
4. En la sección `Configuración > Sitio`, bajo la pestaña **Restricciones**, selecciona **Privado**. Además activa **Mostrar home a visitas públicas** para poder redireccionar usuarios sin sesión.

#### Habilitar la integración a nivel de cuenta (para todos los sitios)

1. Ve a la cuenta, **Customers** y desde ahí a la sección **Configuración** y luego la pestaña **Integración**
2. Selecciona la integración OpenID Connect y activa la casilla de **Habilitar OpenID Connect**
3. Llena los datos de **Nombre del servicio, Client ID, Secret e Issuer** y haz _click_ en **Lanzar servicio de descubrimiento**
4. Chequea los campos que necesites (Habilitar refresh token, Habilitar cierre de sesión remoto, Habilitar revocación de token, Habilitar sincronización de claims)
5. Asocia los campos del proveedor con los campos personalizados que tengas en Modyo [OpenID Connect 1.0 specification for Standard Claims](http://openid.net/specs/openid-connect-core-1_0.html#StandardClaims)

### Usando Axios para hacer la integración

Si quieres usar una librería como `axios` para realizar una integración desde Modyo, un patrón que resulta conveniente es crear 3 snippets que se hagan cargo de los aspectos más básicas de una integración.

Las tareas que debes cubrir con los snippets son:

1. Un interceptor de requests para incluyan un token.
2. Un controlador de sesiones.
3. Una ventana modal que informe al usuario que su sesión va a expirar.

### Interceptar los request para que incluyan un token

```js
// variable global que representará una instancia de axios que se encargará de hacer las peticiones de los servicios
var axios_api = axios.create();
  axios_api.defaults.baseURL = 'URL DE API';
}
// variable global que representará una instancia de axios que se encargará de hacer las peticiones de la api de modyo
var axios_modyo=axios.create({
  baseURL: window.baseUrl + '/api/admin',
});
// variable global que representará una instancia de axios que se encargará de hacer las peticiones los json de contenido del sitio
var axios_modyo_json=axios.create({
  baseURL: {{site.url}},
});
// variable global que representará una instancia de axios que se encargará de hacer las peticiones relacionadas con la autenticación
var axios_auth = axios.create();
axios_auth.defaults.baseURL = window.baseUrl + '/auth/openidc';
// función que genera actividad en el sitio con cada petición de autenticación
var resetIdleTime = function(request){
  sessionManager.resetIdleTime();
	return request;
}
// función que agrega el token a cada uno de los request
var appendTokenToRequest=function (request) {
	return axios_auth.get('/access_token').then(function(response){
		request.headers.authorization='Bearer '+ response.data.access_token;
		return request;
	}
}
// función que maneja los errores de cada una de las peticiones y los envía a una instancia superior
var errorRequest=function(error){
  throw error;
}
axios_auth.interceptors.request.use(resetIdleTime);
axios_api.interceptors.request.use(appendTokenToRequest ,errorRequest);
```

### Un controlador de sesiones

```js
// se encarga de levantar el modal de advertencia que avisara el cierre próximo de la sesión, esta variable devolverá una promesa que será efectiva si se hace _click_ en el botón Mantener Sesión y que lanzara una promesa reject en el caso de seleccionar el botón con la negativa de continuar
var modalConfirm = function() {
  return new Promise(function(resolve, reject) {
    $("#session-modal").modal({
      backdrop: "static",
      keyboard: false,
      show: true
    });
    $("#session-modal-yes").on("click", function() {
      resolve("keep session");
      $("#session-modal").modal("hide");
    });
    $("#session-modal-no").on("click", function() {
      reject("destroy session");
      $("#session-modal").modal("hide");
    });
  });
};
// será la que se encarga de al iniciarse comenzar el tracking del tiempo para levantar este modal y manejar del lado Front la sesión a continuación se explica cada una de las propiedades y métodos de este objeto que maneja la sesión
var sessionManager = {
  // propiedad que define el tiempo desde la ultima actividad hasta el fin de la sesión en segundos (ojo no el tiempo de refresco del token sino el de finalización de la sesión, es recomendado que este sea un minuto menor al declarado por el provider del Open ID Connect para tener un poco de holgura con la sesión y el cierre de la misma sea 100% valido)
  timeToEndSessionInSeconds: 900,
  // propiedad donde se define el tiempo de levantamiento del modal de inactividad desde la ultima acción o petición en la pagina
  timeToRaiseWarningModalInSeconds: 720,
  // propiedad que guarda el timestamp del ultimo momento de actividad del sessionManager
  lastActionTimeInThisWindow: new Date().getTime(),
  // función que convierte segundos a milisegundos
  secondsToMilisecs: function(minutes) {
    return minutes * 1000;
  },
  // propiedad para almacenar el interval id de revision de eventos de sesion
  intevalId:null,
  // función que determina si se esta accediendo a la aplicación desde el modyoShell o no
  isModyoAppShell: function() {
    return /; Modyo_App_Shell/.test(navigator.userAgent);
  },
  // método que debe ser ejecutado en cada carga de pagina para comenzar el proceso de eventos de sesión a hacer seguimiento recomendado hacer esta invocación sessionManager.init() en el head del layout para comenzar a trackear la sesión (en algunos casos se define que los developers no lancen esta invocación en ese caso la API de prueba a conectar debe tener también este if y así lograrás que axios_api sirva para el entorno develop y el de desarrollo uno con sesión y el otro sin sesión manager)
  init: function() {
    this.resetIdleTime();
    this.intevalId=this.interval();
  },
  // reinicia el tiempo de espera o crea una nueva actividad en el sitio
  resetIdleTime: function() {
    this.lastActionTimeInThisWindow = new Date().getTime();
    var sessionEndTime =
      this.lastActionTimeInThisWindow +
      this.secondsToMilisecs(this.timeToEndSessionInSeconds);
    localStorage.setItem("timeToEndSession", sessionEndTime);
    var raiseWarningModalTime =
      this.lastActionTimeInThisWindow +
      this.secondsToMilisecs(this.timeToRaiseWarningModalInSeconds);
    localStorage.setItem("timeToRaiseWarningModal", raiseWarningModalTime);
  },
  // método que inicia la actividad cada segundo js que maneja los eventos de sesión
  interval: function() {
    var self = this;
    return setInterval(this.checkSessionEvents, 1000, self);
  },
  // método que levanta el modal de warning time
  raiseModal: function() {
    return modalConfirm();
  },
  // método que cierra sesión y limpia storage
  logout: function() {
    localStorage.clear();
    sessionStorage.clear();
    clearInterval(this.intevalId);
    var withRedirect =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    if (withRedirect) {
      window.location.href =
        "{{site.account_url}}/logout?multi=true&redirect_to=https://chile.larrainvial.com";
    } else {
      window.location.href = "{{site.account_url}}/logout?site={{site.uuid}}";
    }
  },
  // método que revisa los eventos de sesión para determinar si es momento de cierre de la misma o de mantenerla después de mostrar el modal
  checkSessionEvents: function(self) {
    var sessionEndTime = localStorage.getItem("timeToEndSession");
    var raiseWarningModalTime = localStorage.getItem("timeToRaiseWarningModal");
    var diffInSecsToShow =
      Math.round((sessionEndTime - new Date().getTime()) / 1000) > 0
        ? Math.round((sessionEndTime - new Date().getTime()) / 1000)
        : 0;
    var expirationTimeHtml = document.querySelector("#expiration-time");
    var timeNow = new Date().getTime();
    expirationTimeHtml.innerText = diffInSecsToShow;
    if (sessionEndTime - timeNow < 0) {
      self.logout();
    } else if (raiseWarningModalTime - timeNow < 0) {
      self
        .raiseModal()
        .then(function(response) {
          axios_auth.get("/access_token");
        })
        .catch(function(err) {
          self.logout();
        });
    } else {
      if (($("#session-modal").data("bs.modal") || {})._isShown) {
        $("#session-modal").modal("hide");
      }
    }
  }
};
```

### Una ventana modal que informe al usuario que su sesión va a expirar

Este es el modal a activar en el paso anterior con bootstrap para el manejo del warning modal.

```html
<div
  id="session-modal"
  class="modal fade"
  tabindex="-1"
  role="dialog"
  aria-labelledby="session-modal-label"
>
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="session-modal-label">
          Su sesión va a expirar
        </h5>
      </div>
      <div class="modal-body text-center">
        <p>
          Su sesión va a expirar en <span id="expiration-time"></span> segundos.
        </p>
        <p>¿Quiere mantener su sesión?</p>
      </div>
      <div class="modal-footer">
        <button id="session-modal-yes" type="button" class="btn btn-primary">
          Si
        </button>
        <button
          id="session-modal-no"
          type="button"
          class="btn btn-secondary"
          data-dismiss="modal"
        >
          No
        </button>
      </div>
    </div>
  </div>
</div>
```
