---
search: true
---

# Gestor de Archivos

Una organización necesita tener una plataforma que les permita organizar los archivos y documentos de contenido que se requieran dentro de la plataforma.

Modyo permite subir, revisar, y editar archivos dentro de la misma plataforma, a través de la herramienta del Gestor de Archivos. Esta se puede acceder desde tus Espacios, Sitios, o en el menú lateral dentro de Content. 

El único requisito es que los archivos estén dentro de los límites de tamaño. Los límites son:

- **Imágenes**: 6 MB
- **Videos**: 10 MB
- **Audios**: 10 MB
- **Archivos**: 10 MB

Los tipos de archivos permitidos son los siguientes:

- **Imágenes**: apng avif bmp gif ico jpeg jpg png tif tiff webp
- **Videos**: av avi f4v flv mkv mov mp4 mpeg webm wmv
- **Audios**: 3gp aac alac dsd flac mp3 pcm wav m4a ogg wma
- **Archivos**: 7z ai apk css csv doc docx fon ico iso jar js msi ods odt otf pdf ppt pptx rar rss rtf scss tar tex ttf txt vcf wdp xhtml xls xlsm xlsx xml zip one ecf pub xps json svg woff woff2 ics

#### Rich Text

<img src="/assets/img/content/asset-manager/2.jpg" style="margin: 20px 0" alt="Add image button inside a rich text textbox">

#### Multiline

<img src="/assets/img/content/asset-manager/3.jpg"  style="margin: 20px 0" alt="Asset manager button inside a multiline box">

#### Selector de Assets

<img src="/assets/img/content/asset-manager/4.jpg" width="150px" style="margin: 20px 0" alt="Asset list button">

La segunda es directamente a través de la herramienta del gestor de archivos que se encuentra en la sección Content.

<img src="/assets/img/content/asset-manager/5.jpg" width="150px" style="margin: 20px 0" alt="Asset manager from the main menu.">


## Acerca de la interfaz

<img src="/assets/img/content/asset-manager/1.jpg" width="600" style="border: 1px solid #EEE; margin: 20px 0" alt="Asset manager UI">

La primera interfaz es una lista de todos los archivos que existen dentro de la plataforma.

En la parte superior derecha de la pantalla puedes ver el porcentaje de espacio utilizado correspondiente al total asignado para la cuenta y el botón para subir archivos nuevos.

El listado cuenta con tres tipos de filtros que te serán útiles para encontrar un archivo.

<img src="/assets/img/content/asset-manager/7.jpg" width="400" style="margin: 20px 0" alt="The three filters inside asset manager">

**Extensiones**: Con este filtro puedes ver todos los archivos de un mismo tipo que se encuentren dentro de la plataforma (el listado esta conformado por los tipos de archivos que han sido subidos a la plataforma).

**Tags**: Este filtro permite mostrar todos los archivos asociados a una etiqueta que se encuentren dentro de la plataforma.

:::tip Tip
Si quieres agregar una etiqueta a un archivo o un grupo de archivos, puedes hacerlo editando directamente el archivo o utilizando las acciones masivas que aparecen en la parte inferior izquierda del listado. 

Así, aparecerá apenas selecciones el primer elemento (haciendo click en el checkbox de la primera columna.)

Si seleccionas uno o más checkboxes que estén en tu pantalla, el botón solo asignará etiquetas a esos archivos que hayas marcado.

<img src="/assets/img/content/asset-manager/14.jpg" width="400" style="margin: 20px 0" alt="Apply tags to assets to identify them">

:::

**Barra de búsqueda**: Con la barra de búsqueda, el Gestor te mostrará todos los archivos que tengan una palabra o contenido que se encuentre dentro de la metadata de este. En este caso, también incluye la búsqueda de su extensión específica, etiqueta, nombre o usuario que lo haya subido.

:::tip Tip
Modyo permite mostrar solo 30 archivos a la vez. Esto viene de manera predeterminada y no es posible cambiarlo.
:::

Para esta vista, las columnas son:

<img src="/assets/img/content/asset-manager/8.jpg" style="margin: 20px 0" alt="The available columns when searching for an asset.">

Las que poseen flechas pueden ser ordenadas de manera ascendente y descendente. La opción de ordenamiento  **predeterminada** es la fecha de actualización de los archivos.

**Previsualizar**: Si la plataforma identifica que el archivo es una imagen, puedes ver una pequeño thumbnail de esta. Si no lo es, este espacio aparecerá en blanco.

**Nombre**: Nombre del archivo con la extensión incluida. El ordenamiento es por orden alfabético.

**Tipo**: Tipo de archivo y extensión del mismo. El ordenamiento es por orden alfabético primero por tipo y después por la letra del nombre de la extensión.

**Tamaño**: Tamaño en kilobytes del archivo.

**Creado el**: Fecha de subida o creación dentro de la plataforma, independiente si el archivo fue creado en una fecha distinta en otro servicio.

**Autor**: Nombre del usuario que subió el archivo, siempre y cuando el usuario tenga asignado un nombre.

Finalmente, en la esquina inferior derecha, puedes encontrar la paginación de todos los archivos del sistema.


## Propiedades de los archivos

<img src="/assets/img/content/asset-manager/9.jpg" width="500" style="border: 1px solid #EEE; margin: 20px 0" alt="Edit Asset UI.">

La plataforma permite el manejo y subida de archivos de todos los tipos, sin un límite de extensión.

Sin embargo, cuando se trate de extensiones conocidas, la plataforma los reconoce y clasifica el archivo según su uso y después su extensión.

Para acceder a las propiedades de los archivos, se debe hacer click en el nombre de este. De esta manera, se levanta un modal en el que puedes editar cada una de las propiedades.

## Editar un archivo

<img src="/assets/img/content/asset-manager/12.jpg" width="500" style="margin: 20px 0" alt="The URL and Liquid Tag assigned to the asset.">

En la interfaz de edición de las propiedades del archivo, puedes ver ciertos campos:

**URL del Archivo**: Muestra la URL pública del archivo. Puedes copiarla a tu portapapeles haciendo click en el ícono lateral.

**Tag de Liquid**: Muestra el tag de Liquid del archivo, para usarse dentro de los contenidos de la plataforma.

:::warning Atención
Ni la URL ni el Tag de Liquid son posibles de cambiar a través de Modyo.
:::

**Título**: Muestra el título del archivo. Esta sección es distinta al nombre del archivo, el cual no se puede cambiar.

**Texto alternativo**: Muestra el ```alt text``` del elemento. (Solo aplica a imágenes y videos).

**Descripción**: Descripción del elemento. Es una buena práctica escribir un pequeño texto que haga referencia a la imagen.

**Etiquetas**: Muestra las etiquetas asociadas al archivo, haciendo click en la caja se pueden buscar y agregar más etiquetas. A su vez que se puede hacer click en la X de las etiquetas existentes para eliminar la asociación con el archivo.

<hr style="margin: 40px 0;" />

Para guardar la modificación de los datos, es necesario hacer click en el botón **Actualizar Información** que se encuentra en la parte inferior derecha de la ventana. 

Si se modifican los datos pero no se hace click en el botón para que queden guardados, estas modificaciones se perderán.

Si se quiere cerrar la ventana y volver a la interfaz del Gestor, se debe hacer click en el botón **Cerrar**, ubicado en la parte inferior de la pantalla.

## Resubir una imagen

Si quieres volver a subir un archivo, manteniendo el nombre y el link original, haz clic en el ícono para subir el archivo que se encuentra en la ventana **Actualizar Información**. Así, muestra una nueva ventana donde puedes seleccionar un archivo nuevo.

<img src="/assets/img/content/asset-manager/13.jpg" width="300" style="border: 1px solid #EEE; margin: 20px 0" alt="Re-upload an image using the reupload button.">

## Editar una imagen

<img src="/assets/img/content/asset-manager/10.jpg" width="500" style="border: 1px solid #EEE; margin: 20px 0" alt="You can also perform small changes to images using Asset Manager.">

Para facilitar el manejo de imágenes dentro de la plataforma, Modyo incluye un editor de imágenes que permite hacer cambios pequeños de manera online.

Uno de los cambios que se puede hacer es editar las medidas de la imagen. Para ello, haz click en el ícono del **lápiz** que se encuentra en la ventana de Actualizar Información.

Tras ello, se despliega otra ventana en la que tendrás dos vistas. La imagen original y la vista previa de la imagen editada.

Posteriormente, puedes ver las tres opciones que puedes elegir para editar el tamaño:

- **16:9**: Edita la imagen en una proporción de 16:9.
- **Cuadrado**: Edita la imagen al tamaño de un cuadrado.
- **Libre**: Edita la imagen a un tamaño libre en pixeles que puedes cambiar en la parte inferior de la pantalla.

A un costado, puedes observar el tamaño original de la imagen y el tamaño en pixeles de lo que ya hayas editado.

:::tip Tip
Existen dos maneras para cambiar la vista y corte de la imagen con el cursor:

- **Zoom:** Usa el scroll del mouse para acercar la imagen.
- **Mover fondo:** Haz doble click fuera de la zona de recorte y arrastra el fondo.
:::

Si quieres reeditar el archivo o restaurarlo, puedes volver a la ventana de Actualizar Información, donde encuentras el botón **Restaurar Original**, lo cual provoca que la imagen vuelva a su estado original pero la modificada se pierde permanentemente.

## Borrar un archivo

Para borrar un archivo en específico se debe hacer click en el ícono Borrar, que se encuentra en un costado de la URL del archivo.

:::warning Atención
Esta acción es irreversible. Si este archivo se encuentra vinculado a un contenido, no puedes recuperarlo y aparece como un link roto.
:::

## Subir un archivo

<img src="/assets/img/content/asset-manager/11.jpg" width="500" style="border: 1px solid #EEE; margin: 20px 0" alt="Upload Image UI">

Hay dos formas de subir un archivo para usarse en **Modyo**. Una de ellas es a través de la misma sección desde la que se trabaja y otra es a través del Gestor de Archivos, que da la opción de tomar cualquier material del disco local para subirlo a la plataforma.

Para subir el archivo, haz click en **Añadir**.

Esta acción abre una nueva ventana que permite subir los archivos de dos maneras:

- **Drag & Drop**: Arrastrar desde el navegador de archivos de tu computador hacia la ventana
- **Manera tradicional**: A través del navegador, pinchando y seleccionado los archivos

:::warning Atención
Modyo solo permite la subida de 10 archivos a la vez. Si se quiere subir más elementos, se debe hacer en dos o más tandas.
:::
