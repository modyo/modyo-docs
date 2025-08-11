---
search: true
---

# Pages

Las Páginas (o pages) permiten crear una estructura para tu sitio, añadir contenido no estructurado y personalizar las rutas donde se muestra ese contenido.

Puedes crear dos tipos de páginas: de widgets o de contenido. Las páginas de widgets se basan en un esquema modular que permite crear tu sitio a medida usando HTML, JS y CSS. Podrás arrastrar y acomodar diferentes widgets predefinidos o personalizados creados por tu equipo.

Las páginas de contenido conectan los módulos de Content con Channels. Aquí podrás crear el índice que contiene las entradas y la estructura para todas ellas usando HTML, JS, CSS y Liquid.

Para editar una página, haz clic en el icono de edición o en el nombre de la página para ir a la vista de edición.

En la vista de edición, encontrarás una barra superior con acciones, una grilla central y una barra lateral con pestañas.

En la barra superior, encontrarás distintas acciones e información:

**Título**: Se encuentra en la parte superior izquierda e indica el nombre de la página que estás modificando. A la derecha del nombre, encontrarás el estado actual de la página: "Borrador", "En revisión", "Aprobado", "Cambios pendientes" o "Publicado". Para aprender más sobre estos estados, puedes revisar la sección de [Versionado y Revisión en Equipo](/es/platform/core/key-concepts.html).

**Fecha de publicación**: Si la página ha sido publicada, indicará la fecha de la última publicación.

**Vista previa**: Este icono te permite abrir una pestaña nueva con el modo Vista Previa para visualizar los cambios realizados en la página sin necesidad de publicarla.

:::warning Atención
Puedes previsualizar las páginas como usuario sin sesión o con sesión de Modyo. Para esto, es recomendable iniciar o cerrar la sesión de Modyo en el sitio antes de entrar al modo vista previa, ya que hacerlo dentro de este modo puede generar errores de seguridad como _x-frame-options_ o _mixed-content_, dependiendo de la configuración de dominios personalizados y SSL del sitio.
:::

**Diferencias**: Al hacer clic en el icono de diferencias, accedes a la vista de diferencias de la página, donde puedes seleccionar dos versiones a comparar, permitiendo ejecutar las acciones [restablecer y rollback](/es/platform/core/key-concepts.html#revertir-un-cambio).

:::tip Tip
Si tu página está en estado _borrador_, no aparecerá el icono de diferencias, dado que no hay nada con qué comparar la versión editable actual. Para aprender más sobre las diferencias y respaldos, revisa la sección de [versionado](/es/platform/core/key-concepts.html#versionado).
:::

**Actividad**: Despliega una barra lateral que muestra la actividad asociada a la página, como modificaciones, publicaciones y comentarios. En la parte inferior de esta barra, puedes escribir comentarios. Si la página está en revisión, todos los revisores asignados recibirán una notificación con el comentario.

**Otras acciones**:

- Archivar: Si una página no está publicada, esta acción te permite archivarla. Cuando una página está archivada, por defecto, no aparece en el índice de página, lo que permite mantener la estructura del sitio limpia.
- Duplicar: Esta acción te permite copiar la versión editable de la página actual. La versión copiada queda en estado _borrador_.

:::warning Atención
Una vez que completes la acción de copiado, serás redirigido a la nueva página, por lo que es importante guardar todos los cambios antes de usar esta acción para evitar la pérdida de información importante.
:::

## Crear una página
Para crear una nueva página, sigue estos pasos:

1. Dentro del menú principal de Modyo Platform, expande Channels y haz clic en Sitios.
2. Selecciona el sitio al que desees agregar una nueva página.
3. Haz clic en **Pages**.
4. Haz clic en **Nueva Página**.
5. Selecciona el tipo de página (**Widget** o **Content**) que quieres crear.
6. Ingresa el Nombre del Layout, la Ruta y, si es necesario, selecciona el layout padre, luego presiona **Crear**.
7. Personaliza la página según el tipo: agregando o editando widgets para Página de Widget, o editando el Index y Show para Página de Contenido.
8. Una vez terminado, haz clic en **Publicar**.

Para conocer los tipos de widgets que puedes agregar, consulta [Widgets](/es/platform/channels/pages.html#pagina-de-widget).

Para conocer más acerca de páginas de contenido, consulta [Página de Contenido](/es/platform/channels/pages.html#pagina-de-contenido).

**Acción principal**: Es el botón verde en la parte superior derecha que puede tomar distintas formas:

- Guardar: Permite guardar los cambios realizados en la página.
- Enviar a revisión: Si la revisión en equipo está habilitada y no hay cambios pendientes, esta acción permite enviar la página a revisión y asignar revisores.
- Publicar: Si la página está aprobada, puedes ir a la [vista de publicación conjunta](/es/platform/core/key-concepts) usando esta acción.

:::tip Tip
* Si una página tiene un padre, solo puedes publicarla si este se encuentra publicado.
* Si una página tiene hijos, solo puedes despublicarla si todos ellos se encuentran despublicados.
* Si una página tiene hijos, solo puedes archivarla si todos ellos se encuentran archivados.
:::

**Acciones secundarias**:
- Forzar publicación: Si eres administrador del sitio, puedes usar esta opción para publicar la página en cualquier momento, incluso saltándote la revisión en equipo.
- Despublicar: Si la página está publicada, esta acción te permite despublicarla.

La grilla central es donde puedes posicionar tus widgets. Puedes moverlos utilizando la funcionalidad _drag-and-drop_.

En la sección lateral derecha, hay tres pestañas:

- Añadir widgets: Permite seleccionar widgets de un listado para añadirlos a la grilla.
- Editar widget: Permite cambiar propiedades y filtros para cada widget.
- Propiedades: Permite modificar el nombre, excerpt, ruta, padre, privacidad, grilla de la página y meta tags.


### Insertar una imagen con Liquid

Modyo recomienda usar el tag de Liquid y no el asset URL para insertar imágenes en tu contenido. Esto te permite redimensionar o sustituir una imagen en todos los lugares donde esté en uso y asegurarte que cualquier cambio se refleje de inmediato.

Además, Modyo convierte la imagen a formato webp con calidad lossless de compresión. Lo que genera imágenes más pequeñas, con tiempos de carga menores y sin perder calidad.


#### Para obtener el código Liquid de una imagen:

1. Haz click en el ícono de media sobre tu área de trabajo
1. Haz click sobre la imagen.
1. Haz click en el ícono de copiar, junto al tag de Liquid de la imagen.

#### Para sustituir una imagen, sigue estos pasos:

1. Haz click en content.
1. Selecciona el espacio donde está la imagen que quieres modificar.
1. Haz click en media.
1. Selecciona la imagen que quieres sustituir.
1. Haz click en el ícono de cargar imagen sobre la imagen actual.
1. Selecciona la imagen nueva.
1. Da click en **actualizar información**.

:::tip Tip
Es necesario que el CDN de tu cuenta esté en la nube para que los cambios se reflejen de inmediato, de lo contrario deberás solicitar la invalidación de caché, mediante un ticket a [Modyo](https://support.modyo.com/hc/en-us).
:::

## Página de Widget

Aquí puedes personalizar tu página usando widgets preestablecidos de la siguiente lista:


- **HTML**: Te permite ingresar código HTML y CSS sin validaciones. No te permitirá ingresar código Javascript.
- **Texto enriquecido**: Te permitirá hacer uso de un editor de texto enriquecido, en el que puedes darle formato al texto y cambiar entre la vista de código y texto enriquecido.
:::warning Atención
El widget de texto enriquecido cuenta con un formateador automático, por lo que el código que escribas en la vista de código puede verse afectado.
:::
- **Listado de contenido**: Muestra listados de contenido haciendo uso de filtros por espacio, tipo, idioma, tags, y categoría. Para modificar como se ven estos widgets, debes hacerlo en la sección de Widgets en [Templates](/es/platform/channels/templates.html).
- **Contenido destacado**: Muestra un listado de entradas como imágenes "hero" en un carrusel.
- **Personalizado**: Encontrarás un listado de todos los widgets que has creado y publicado en el widget builder.

Una vez seleccionado un widget en la sección central, el foco pasará a la pestaña lateral, donde podrás encontrar distintas opciones de configuración del widget y en caso de seleccionar un widget personalizado, encontrarás un link para ir directamente a su vista de edición en [widget builder](/es/platform/channels/widgets.html) y el listado de variables que el widget está usando. Si quieres sobrescribir el valor de una variable en particular para esa instancia del widget en esa página, debes seleccionar el checkbox a la izquierda de la variable y cambiar el valor que toma.

### Propiedades

En esta pestaña encontrarás opciones propiedades comunes de todas las páginas:

* Nombre
* Padre
* Ruta
* Extracto
* Grilla
* Privacidad
* Meta tags personalizados

:::warning Atención
Modyo cuenta con rutas reservadas para las página, por lo que no podrás usarlos como rutas de tus páginas personalizadas:
<table style="border: none;"><tr style="border: none;">
<td style="border: none;"><ul>
<li>404</li>
<li>422</li>
<li>500</li>
<li>admin</li>
<li>auth</li>
</ul></td>
<td style="border: none;"><ul>
<li>crossdomain</li>
<li>dist</li>
<li>forms</li>
<li>javascript</li>
<li>login</li>
</ul></td>
<td style="border: none;"><ul>
<li>logout</li>
<li>manifest</li>
<li>ping</li>
<li>preview</li>
<li>profile</li>
</ul></td>
<td style="border: none;"><ul>
<li>robots</li>
<li>search</li>
<li>serviceworker</li>
<li>session</li>
<li>site_logout</li>
</ul></td>
<td style="border: none; vertical-align: top;"><ul>
<li>sitemap</li>
<li>stylesheets</li>
<li>uploads</li>
<li>widget_manager</li>
</ul></td>
</tr></table>
:::

## Página de Contenido

Despliega las [entradas](/es/platform/content/entries) de tus [tipos de contenido](/es/platform/content/types) desde una sola página usando páginas de contenido.

### Requisitos previos

Para poder mostrar contenido en un sitio, debes cumplir con ciertas condiciones:

* Contar con un espacio con al menos un idioma (el mismo del sitio) y con por lo menos un Tipo de contenido. Para más información, ve a [Crear un Espacio](/es/platform/content/spaces.html#crear-un-espacio) y [Crear un Tipo](/es/platform/content/types.html#crear-un-tipo)
* Contar con entradas publicadas en el idioma del sitio. Para más información, ve [Entradas](/es/platform/content/entries.html) y [Localización](/es/platform/content/spaces.html#localizacion)

:::tip Tip
Puedes usar el nombre que desees para las vistas, sin importar a que tipo o espacio lo quieras asociar. Siempre debes tener en consideración que las entradas solo se mostrarán si tienen una versión publicada en el idioma del sitio en el que estás creando estas vistas.
:::

Estas páginas están compuestas por dos secciones **Index** y **Show**.

### Index

La página índice que contiene el listado de todas las entradas del tipo de contenido. Aquí podrás seleccionar las siguientes opciones:

#### Edit

- **Habilitar Índice de Entradas**: Deshabilitado por defecto. La ruta que toma es el nombre que se le dio a la página cuando fue creada. Si se deshabilita esta opción, solo las páginas de **Show** serán accesibles y si se intenta acceder se les mostrará un error 404.
- **Layout**: La plantilla Layout que va a cargar para el Index.
- **Custom Meta Tag**: Agrega custom meta tags para optimizar el SEO del índice. Este meta tag solo será cargado para el Index, no para el Show. También puedes utilizar Liquid para cargar meta tags dinámicos.

### Show

La pestaña en donde defines como van a lucir las entradas dinámicas. Aquí podrás seleccionar las siguientes opciones:

#### Edit:

- **Layout**: La plantilla Layout que va a cargar para el Show.
- **Custom Meta Tag**: Agrega custom meta tags para optimizar el SEO del show. Este meta tag solo será cargado para el Show, no para el Index. También puedes utilizar Liquid para cargar meta tags dinámicos.

Un ejemplo básico de código Liquid+HTML que puedes usar en **Show** es:

```html
<div>
  <h1 class="title">{{ entry.name }}</h1>
  <time>{{ entry.published_at | format_date }}</time>
  <span class="url">
    <a href="{{request.url}}">{{request.url}}</a>
    </span>
</div>

<div>
  <div class="description">
    {{ entry.description }}
  </div>
</div>
```

Este snippet toma `entry.name`, `entry.published_at`, `request.url`, y `entry.description` para generar una página dinámica dependiendo de la entrada que selecciones.

:::tip Tip
Para aprender más sobre cómo usar Liquid, dirígete a [Liquid markup](/es/platform/channels/liquid-markup.html).

Para aprender que campos puedes utilizar con el drop `entry`, ve [Drops de Content](/es/platform/channels/drops.html#entrada).
Se puede complementar con el uso de [Filtros de contenido](/es/platform/channels/liquid-markup/filters.html#content).
:::

#### Propiedades

Muestra el tipo de contenido y el espacio al cual pertenece esta página. A demás tendrás opciones para cambiar el nombre, la página padre, la ruta, y un extracto.

:::tip Tip
En el caso de que el custom domain esté habilitado, para encontrar la forma de la URL debes ir a ``Configuración del Sitio > Dominios``.

En caso de que no se encuentre habilitado, la URL será de la forma `account_url/site_host`.
:::

El extracto se agrega como parte de los meta tags para mejorar el SEO. Esto es posible tanto para todos los tipos de páginas y [Plantillas](/es/platform/channels/templates.html). Dentro del `<head>` se agrega un tag:

```html
<meta name="description" content="{{ page.excerpt }}"/>
```

#### Delegación de rutas

Habilita la delegación de rutas para permitir el control absoluto de las sub-rutas de la página a través del router de JavaScript.

## Privacidad

Si habilitas la privacidad en una página, entonces se requerirá una sesión para poder ver esta página. Junto a la privacidad, también puedes asociar [Segmentos](/es/platform/customers/segments.html), de tal manera que solo los usuarios que pertenezcan a esos segmentos podrán acceder a esta página. Quienes no sean parte del grupo de segmentos seleccionados, serán redirigidos a la página anterior o al home del sitio.

## Meta tags

Los meta tags definen el contenido de una página y los motores de búsqueda dependen de estos para proveer el listado de una búsqueda al usuario. En esta sección podrás añadir meta tags a las páginas y modificar el valor de los meta tags existentes, para enriquecer el SEO de la página. Con los tags añadidos a las páginas, podrás decidir si usar el valor por defecto, sobrescribir el valor disponible para el tag, o eliminar el tag de la página.

Para acceder al listado de meta tags de la página, debes usar el drop de Liquid <span v-pre>`{{ page.meta_tags }}`</span>. Te recomendamos ver el ejemplo en la sección SEO del [Template builder](/es/platform/channels/templates.html#seo).

### Agregar un nuevo meta tag

Para agregar un nuevo meta tag a tu sitio, sigue estos pasos:

1. En Modyo Platform, desde el menú principal, expande **Channels**, y haz click en **Sitios**.
1. Haz click en tu Sitio.
1. Expande **Configuración de sitio** y haz click en **SEO**.
1. En la sección de Meta tags personalizados, haz click en **Nuevo meta tag**.

En la pantalla que aparece tienes la opción de elegir entre diferentes meta tags y asignarles un valor. Este valor puede ser dinámico si se utiliza Liquid. Si activas la opción **Replicar meta tag en páginas**, se creará un meta tag en la sección de Propiedades de todas tus páginas.

Como parte de la Plantilla `base`, incluimos el Snippet `seo` que contiene la información necesaria para imprimir los valores de los meta tags dependiendo si es un Sitio, una Página, o una Entrada.

:::tip Tip
Debes tener en cuenta que para que los meta tags tengan efecto en tu página, debes publicar los cambios.
:::

Para más información acerca de como usamos meta tags dinámicos en los sitios, visita [configuración del sitio, sección SEO](/es/platform/channels/sites.html#seo).

