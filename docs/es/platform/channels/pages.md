---
search: true
---

# Pages

Las Pages (o páginas) son lo que te permite crear una estructura para tu sitio, donde puedes añadir contenido no estructurado y personalizar las rutas de donde se muestra ese contenido.

![Índice de páginas](/assets/img/platform/page-index.png)

Para editar una página, debes hacer click en el ícono de edición (<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M14.06 9l.94.94L5.92 19H5v-.92L14.06 9m3.6-6c-.25 0-.51.1-.7.29l-1.83 1.83l3.75 3.75l1.83-1.83c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29m-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z" fill="#626262"/><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg>) o en el nombre de la página para ir a la vista de edición.

En la vista de edición, encuentras una barra superior con acciones, una grilla central y una barra lateral con pestañas.

En la barra superior, encuentras distintas acciones e información:

**Título**: Se encuentra en la parte superior izquierda, e indica el nombre de la página que estás modificando. A la derecha el nombre, encontrarás el estado actual de la página. Esos pueden ser "Borrador", "En revisión", "Aprobado", "Cambios pendientes", "Publicado". Para aprender más sobre estos estados, puedes revisar la sección de [Versionado y Revisión en Equipo](/es/platform/core/key-concepts.html).

**Fecha de publicación**: Si es que la página ha sido publicada, se indicará la fecha de la última publicación.

**Vista previa** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5c-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0a9.821 9.821 0 0 0-17.64 0z" fill="#626262"/><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg>: Este ícono te permite abrir una pestaña nueva con el modo Vista Previa para poder visualizar los cambios que se han hecho en la página sin necesidad de publicarla.

:::warning Atención
Puedes previsualizar las páginas como usuario sin sesión o usuario con sesión de Modyo. Para esto, es recomendable iniciar o cerrar la sesión de Modyo en el sitio antes de entrar al modo vista previa, dado que si se inicia o cierra sesión dentro del modo vista previa, podrías encontrarte con errores de seguridad del tipo _x-frame-options_ o _mixed-content_, dependiendo de la configuración de dominios personalizados y SSL del sitio
:::

**Diferencias** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M19 3h-5v2h5v13l-5-6v9h5a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-9 15H5l5-6m0-9H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h5v2h2V1h-2v2z" fill="#626262"/><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg>: Al hacer click en el ícono de diferencias, irás a la [vista de diferencias](/es/platform/channels/sites.html#revision-y-publicacion-conjunta) de la página que te permite seleccionar dos versiones a comparar, permitiendo ejecutar las acciones [reestablecer y rollback](/es/platform/core/key-concepts.html#acciones-para-el-versionado)

:::tip Tip
Si tu página está en estado "Borrador" no aparece el icono de diferencias, dado que no hay nada con que comparar la versión editable actual. Para aprender más sobre las diferencias y respaldos, revisa la sección de [versionado](/es/platform/core/key-concepts.html#versionado)
:::

**Actividad** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M12 23a1 1 0 0 1-1-1v-3H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-4.1l-3.7 3.71c-.2.18-.44.29-.7.29H12m1-6v3.08L16.08 17H21V7H7v10h6M3 15H1V3a2 2 0 0 1 2-2h16v2H3v12m6-6h10v2H9V9m0 4h8v2H9v-2z" fill="#626262"/><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg>: Al hacer click en este ícono, se despliega una barra lateral que te muestra la actividad asociada a la página, como las modificaciones, publicaciones y comentarios. En la parte inferior de esta barra, puedes escribir comentarios asociados. En caso de que la página esté en revisión, todos quienes estén asignados como revisores recibirán una notificación con el comentario.

**Otras acciones** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M12 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2z" fill="#626262"/><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg>:

- Archivar <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M5.12 5l.81-1h12l.94 1M12 17.5L6.5 12H10v-2h4v2h3.5L12 17.5m8.54-12.27l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6 3 6.5V19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.5c0-.5-.17-.93-.46-1.27z" fill="#626262"/><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg>: Si una página no se encuentra publicada, esta acción te permite archivarla. Cuando una página se encuentra archivada, por defecto no aparece en el índice de página y permite mantener la estructura del sitio limpia.
- Duplicar <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M20 16V4H8v12h12m2 0a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2h12a2 2 0 0 1 2 2v12m-6 4v2H4a2 2 0 0 1-2-2V7h2v13h12z" fill="#626262"/><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg>: Esta acción te permite copiar la versión editable de la página en la que estás. La versión copiada queda en estado "Borrador".

:::warning Atención
Una vez terminada la acción de copiado, te dirige a la nueva página, por lo que es importante guardar todos los cambios antes de usar esta acción, de lo contrario podrías perder información importante.
:::

## Crear una página
Para crear una nueva página, sigue estos pasos:

1. Dentro del menú principal de Modyo Platform, expande Channels y haz click en Sitios.
2. Selecciona el sitio que desees agregar una nueva página.
3. Haz click en **Pages**.
4. Haz click en **+ Nueva Página**.
5. Llena el Nombre del Layout, la Ruta, de ser necesario selecciona el layout padre, y presiona **Crear**.
6. Personaliza la página agregando o editando widgets.
7. Una vez terminado, haz click en **Publicar**.

Para conocer los tipos de widgets que puedes agregar, ve [Widgets](/es/platform/channels/pages.html#widget-pages)

Para conocer más acerca de content pages, ve [Content Pages](/es/platform/channels/pages.html#content-pages)

**Acción principal**: Es el botón verde en la parte superior derecha. Este botón puede tomar distintas formas:

- Guardar: Te permite guardar los cambios que has hecho en la página.
- Enviar a revisión: Si está habilitada la revisión en equipo, entonces si no hay cambios que guardar, esta acción te permitirá enviar a revisión la página y asignar revisores.
- Publicar: Si la página está aprobada, puedes ir a la [vista de publicación conjunta](/es/platform/channels/sites.html#revision-y-publicacion-conjunta) haciendo uso de esta acción.

:::tip Tip
* Si una página tiene un padre, solo la puedes publicar si es que éste se encuentra publicado.
* Si una página tiene hijos, solo puedes despublicarla si todos estos se encuentran despublicados.
* Si una página tiene hijos, solo puedes archivarla si todos estos se encuentran archivados.
:::

**Acciones secundarias**:
- Forzar publicación: Si es que eres administrador del sitio, entonces puedes ver y usar esta opción que te permite publicar la página en cualquier momento, incluso saltándote la revisión en equipo.
- Despublicar: Si es que la página está publicada, entonces ves esta acción que te permite despublicar la página.

![Page builder](/assets/img/platform/page-builder.png)

La grilla central es el lugar donde puedes posicionar tus widgets. Puedes mover los widgets de un lado a otro haciendo uso de la funcionalidad _drag-and-drop_ arrastrándolos desde el ícono <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M7 19v-2h2v2H7m4 0v-2h2v2h-2m4 0v-2h2v2h-2m-8-4v-2h2v2H7m4 0v-2h2v2h-2m4 0v-2h2v2h-2m-8-4V9h2v2H7m4 0V9h2v2h-2m4 0V9h2v2h-2M7 7V5h2v2H7m4 0V5h2v2h-2m4 0V5h2v2h-2z" fill="#626262"/><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg>.

En la sección lateral derecha encontrarás tres pestañas:

- Añadir widgets: Te permite seleccionar dentro de un listado de widgets para añadirlos a la grilla.
- Editar widget: Te permite cambiar distintas propiedades y filtros para cada uno de los widgets.
- Propiedades: Te permite modificar el nombre, excerpt, ruta, padre, privacidad, grilla de la página y meta tags.

## Widget Pages

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

#### Delegación de rutas

Habilita la delegación de rutas para permitir el control absoluto de las sub-rutas de la página a través del router de JavaScript.

## Privacidad

Si habilitas la privacidad en una página, entonces se requerirá una sesión para poder ver esta página. Junto a la privacidad, también puedes asociar [Segmentos](/es/platform/customers/segments.html), de tal manera que solo los usuarios que pertenezcan a esos segmentos podrán acceder a esta página. Quienes no sean parte del grupo de segmentos seleccionados, serán redirigidos a la página anterior o al home del sitio.

## Meta tags

En esta sección podrás añadir meta tags a las páginas y modificar el valor de los meta tags existentes, para enriquecer el SEO de la página. Con los tags añadidos a las página, podrás decidir si usar el valor por defecto, sobrescribir el valor disponible para el tag, o eliminar el tag de la página.

:::tip Tip
Debes tener en cuenta que para que los meta tags tengan efecto en tu página, debes publicar los cambios.
:::

Para acceder al listado de meta tags de la página, debes usar el drop de Liquid <span v-pre>`{{ page.meta_tags }}`</span>. Te recomendamos ver el ejemplo en la sección SEO del [Template builder](/es/platform/channels/templates.html#seo).

:::tip Tip
Si quieres añadir un meta tag común para todos los pages en una sola acción, dirígete a la [configuración del sitio, sección SEO](/es/platform/channels/sites.html#seo).
:::
