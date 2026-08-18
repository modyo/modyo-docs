---
search: true
---

# Media

:::tip Tip
- En `Modyo 9` este espacio se llama **Gestor de archivos**. Si migras de Modyo 9 a Modyo 10 todos los assets se conservan y se mueven al espacio **default media**.
:::

Este espacio te permite cargar, organizar y gestionar tus archivos de forma simple y eficiente.

En Media puedes asignar permisos de edición y eliminación de imágenes a través de grupos. De esta manera, un grupo puede tener permisos para ver y usar assets, pero no podrá modificarlos o eliminarlos.
Puedes cargar diversos tipos de media a este espacio, considerando las siguientes restricciones de tamaño por archivo:


- **Imágenes**: 6 MB
- **Videos**: 10 MB
- **Audios**: 10 MB
- **Archivos**: 10 MB

Los tipos de archivos permitidos son:
- **Imágenes**: apng, avif, bmp, gif, ico, jpeg, jpg, png, svg, tif, tiff, webp
- **Videos**: av, avi, f4v, flv, mkv, mov, mp4, mpeg, webm, wmv
- **Audios**: 3gp, aac, alac, dsd, flac, mp3, pcm, wav, m4a, ogg, wma
- **Archivos**: 7z, ai, apk, css, csv, doc, docx, fon, ico, iso, jar, js, msi, ods, odt, otf, pdf, ppt, pptx, rar, rss, rtf, scss, tar, tex, ttf, txt, vcf, wdp, xhtml, xls, xlsm, xlsx, xml, zip, one, ecf, pub, xps, json, svg, woff, woff2, ics

:::warning Atención
El formato `svg` depende de una configuración de tu cuenta. La casilla **Permitir el uso de SVG**, en **Configuración** > **Seguridad**, viene desactivada, y mientras siga así cualquier intento de subir o de actualizar un archivo SVG se rechaza con el mensaje _No se pueden cargar ni actualizar archivos SVG debido a las políticas de seguridad configuradas_. Antes de activarla, revisa [Imágenes SVG](/es/platform/core/security.html#imagenes-svg), porque tiene implicancias de seguridad.
:::

Modyo también revisa el nombre del archivo: no puede contener más de un punto, así que un nombre como `estilos.min.css` se rechaza con el mensaje _no debe incluir puntos_. Al guardar, además, cualquier carácter que no sea una letra sin acento, un número o un guion se reemplaza por un guion bajo, por lo que `Presentación final.pdf` queda almacenado como `Presentaci_n_final.pdf`.

:::warning Atención
Desde Modyo 10.2, además de la extensión y del tamaño, se comprueba que el tipo de contenido real del archivo corresponda a su extensión. Si no coinciden, la subida falla y el panel muestra el nombre del archivo junto al mensaje _el tipo de contenido no coincide con la extensión del archivo_. La comprobación se aplica a los cuatro tipos de media, tanto en el panel como en la API de administración, así que un PNG renombrado a `.jpg` o un CSV renombrado a `.xlsx` dejan de subirse. Si te encuentras con este error, renombra el archivo con su extensión real o vuelve a exportarlo en el formato que necesitas.
:::

## Acerca de la Interfaz

La interfaz te muestra una lista de todos los archivos que existen dentro de la plataforma.

En la parte superior derecha de la pantalla puedes ver el porcentaje de espacio utilizado correspondiente al total asignado para la cuenta y el botón para subir archivos nuevos.

Modyo muestra 30 archivos por página. En la parte inferior puedes navegar entre las páginas de archivos.

Puedes filtrar el contenido por:
- **Extensiones**: Filtra por tipo de archivo.
- **Autor**: Filtra por nombre de usuario que subió el contenido.
- **Tags**: Muestra todos los archivos asociados a una etiqueta.
- **Barra de búsqueda**: Escribe una palabra para desplegar los archivos que contengan esa palabra en su nombre o metadata.

Las etiquetas te permiten organizar y agrupar tus archivos. Para modificar las etiquetas de más de un archivo, selecciona los archivos que desees y da click en el botón **Agregar o quitar etiquetas** que aparece en la parte inferior del listado.

En esta vista, las columnas son:
- **Previsualizar**: Si la plataforma identifica que el archivo es una imagen, puedes ver una imagen en miniatura del archivo. Si no lo es, el espacio aparece en blanco.
- **Nombre**: Nombre del archivo y su extensión. El ordenamiento es alfabético.
- **Tipo**: Tipo y extensión del archivo. El ordenamiento es alfabético, primero por tipo y después por el nombre de la extensión.
- **Tamaño**: Tamaño en kilobytes del archivo.
- **Creado el**: Fecha de subida o creación dentro de la plataforma, sin considerar si el archivo fue creado en una fecha distinta en otro servicio.
- **Autor**: Nombre del usuario que subió el archivo, solo cuando el usuario tiene asignado un nombre.


## Subir un archivo
Para cargar un archivo en Modyo, elige una de las siguientes opciones:

#### Desde la sección donde estás trabajando, plantillas, páginas, reinos o sitios:
1. Abre el editor de texto,
1. En la barra superior, selecciona **insertar imagen** para abrir un modal donde podrás arrastar o subir un archivo.

#### En la sección dedicada para administrar archivos.

1. En el menú lateral da click en el ícono de **Content**.
1. Selecciona un espacio.
1. En el menú lateral da click en **Media**.
1. Da click en el botón **Nuevo Asset**.
1. Arrastra el archivo o haz clic en el recuadro de carga para abrir una ventana de búsqueda.
1. Agrega etiquetas al archivo si lo deseas.
1. Da click en **Upload** para confirmar.

::: tip Tip
Modyo permite subir 10 archivos a la vez. Si necesitas subir más elementos, repite el proceso.
:::

## Editar un archivo
En la interfaz de archivos, da click en el nombre de un archivo para abrir la interfaz de edición de las propiedades del archivo y ver:

- **URL del Archivo**: Muestra la URL pública del archivo. Da click en el ícono junto a la URL para copiarla. No es modificable.
- **Tag de liquid**: Muestra el tag de liquid del archivo, da click en el ícono para copiar y usarlo en los contenidos de la plataforma. No es modificable.
- **Título**: Muestra el título del archivo. Esta sección es distinta al nombre del archivo, el cual no se puede cambiar.
- **Texto alternativo**: Muestra el alt text del elemento. Solo para imágenes y videos.
- **Descripción**: Descripción del elemento, recomendamos escribir un texto corto referente a la imagen.
- **Etiquetas**: Muestra las etiquetas asociadas al archivo. Puedes buscar y agregar más etiquetas, así como eliminar etiquetas existentes.

Da click en **Actualizar información** para confirmar los cambios o en **Cerrar** para cancelarlos.

## Subir de Nuevo una Imagen

Para cargar un archivo nuevo manteniendo el nombre y el enlace originales, sigue estos pasos:

1. Da click en el nombre de un archivo para abrir la interfaz de edición de propiedades.
2. Haz click en el botón de carga sobre la imagen.
3. Selecciona un archivo nuevo.
4. Confirma que deseas reemplazar el archivo anterior.
5. Haz click en **Actualizar información** para confirmar los cambios


## Editar una imagen

El editor de imágenes de Modyo te permite realizar pequeños cambios a las imágenes para facilitar su manejo en la plataforma. Para ajustar las dimensiones de una imagen, sigue estos pasos:

1. Da click en el nombre de un archivo, para abrir la interfaz de edición de propiedades.
2. Haz click en el ícono de edición sobre la imagen.
3. Elige la opción que desees para editar el tamaño:
    - 16:9
    - Cuadrado
    - Libre: Edita la imagen a un tamaño personalizado en píxeles, ajustable en la parte inferior de la pantalla.
4. Da click en **Aplicar**.

:::tip Tip
Puedes cambiar la vista y el recorte de la imagen de dos maneras:

- Zoom: Usa el scroll del mouse para acercar la imagen.
- Mover fondo: Haz doble click fuera de la zona de recorte y arrastra el fondo.
:::

Para restaurar el archivo, abre nuevamente la ventana de edición de propiedades y da click en **Restore Original**, esto elimina permanentemente las modificaciones realizadas.


## Redimensionar una imagen

En Modyo puedes redimensionar dinámicamente una imagen, lo que te permite modificar el tamaño de la imagen sin perder calidad y garantizar que se ajuste a la pantalla del dispositivo de tus usuarios.  Este redimensionamiento lo haces con código Liquid, en el área de trabajo donde hayas insertado la imagen.


:::warning Importante
Te recomendamos siempre usar el tag de Liquid de una imagen para incluirla en tu contenido y no el asset URL. De esta forma, cualquier cambio que hagas en la imagen, se reflejará en todos los lugares donde se use la imagen.
:::


Para redimensionar una imagen debes primero copiar el código Liquid para renderizar la imagen, para eso:

1. Haz click en content.
1. Selecciona el espacio donde está la imagen que quieres modificar.
1. Haz click en media.
1. Haz click sobre la imagen.
1. Haz click en el ícono de copiar, junto al tag de Liquid de la imagen.


Una vez que tengas el código Liquid de la imagen, accede al área de trabajo donde quieres insertar la imagen, ya sea en plantillas, pages o widgets y sigue estos pasos:

1. Pega el código Liquid. Debe verse similar a esto:
<span v-pre>`{{ 'ec0a3e4-ccdb-48c5-87be-5e1eca560dee' | asset_image }}`</span>
2. Agrega al filtro los parámetros que necesites. Los disponibles son `width`, `height`, `quality`, `blur`, `fit` y `format`, más `widths`, `sizes` y `style` para imágenes responsivas. Puedes seguir cualquiera de estos formatos:
- <span v-pre>`asset_image: width: XXX`</span> donde XXX es el tamaño en píxeles deseado.
- <span v-pre>`asset_image: quality: XX`</span> donde XX es el porcentaje de calidad deseado.
- <span v-pre>`asset_image: width: 800, quality: 80, widths: '300, 600, 900', sizes: '(min-width: 400px) 298px, 78.75vw'`</span> adaptando los valores según tus necesidades para asegurar que la imagen se ajuste a las diferentes pantallas y resoluciones de los dispositivos de tus usuarios, usando el atributo [srcset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/srcset) para soporte responsivo.
3. Da click en **guardar**.
4. Da click en **publicar**.

:::tip Tip

Al redimensionar imágenes, se conserva la relación de aspecto original, por lo que la imagen se ajusta de manera proporcional, sin distorsionarse.

Si incluyes solamente la altura o ancho de la imagen, automáticamente se calcula el valor faltante para mantener la relación de aspecto correcta de la imagen.
:::


:::warning Atención
Las opciones de `asset_image` dependen del procesamiento de imágenes por CDN de tu cuenta. Si no está activo, el filtro publica la imagen original y las ignora todas en silencio: no hay error ni aviso, solo una imagen del tamaño original. Si el tamaño no cambia por más que ajustes los valores, consúltalo con el equipo que administra tu cuenta.

`sizes` y `style` solo se emiten cuando pasas también `widths`, y de cada variante del `srcset` solo se propagan `width`, `quality`, `blur` y `height`. La ficha completa del filtro está en [Asset image](/es/platform/channels/liquid-markup/filters.html#asset-image).
:::


## Borrar un archivo

Para borrar un archivo sigue estos pasos:
1. Da click en el nombre de un archivo para abrir la interfaz de edición de propiedades.
1. Haz click en **Borrar**, debajo de la imagen.

:::warning Atención
Esta acción es irreversible. Si el archivo está vinculado a un contenido, no podrás recuperarlo y aparecerá como un enlace roto.
:::
