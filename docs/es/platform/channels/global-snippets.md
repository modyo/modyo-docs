---
search: true
---

# Snippets Globales

Un snippet es una porción de código reutilizable que modulariza y descompone funcionalidades complejas en partes más simples. Los snippets globales se renderizan dinámicamente al cargar la página.

Los snippets globales en Modyo permiten compartir código entre diferentes aplicaciones web.

:::tip Código compartido
Un cambio en un snippet global afecta a todas las aplicaciones web donde se utiliza. Por ello, solo los usuarios con rol de administrador pueden acceder a los snippets globales.
:::

En la vista de edición de snippets, puedes crear y gestionar tus snippets globales. La barra superior ofrece las siguientes opciones:

- **Diferencias**: Permite comparar cambios entre múltiples versiones de un snippet, seleccionar versiones a comparar y realizar reset o rollback a versiones previas.
- **Otras acciones**:
    - **Archivar**: Solo está disponible si el snippet no tiene una versión publicada. Si está publicado, primero usa **Despublicar**.
    - **Borrar**: Para eliminar un snippet, primero debes archivarlo. Además, no puede tener una publicación programada.
- **Guardar**: Una vez guardado tu snippet, este botón cambia de estado a **Publicar**.
- **Despublicar**: Si el snippet está publicado, esta opción aparece en el desplegable del botón **Publicar**. Te permite despublicarlo de inmediato o programar la despublicación para una fecha específica.

Las siguientes secciones se encuentran encima de la zona de trabajo:

- Media
- Atajos de teclado
- Snippets: Listado de snippets creados previamente.
- Cambios: Listado de versiones guardadas previamente.



### Crear y publicar un snippet global

Para crear y publicar un snippet global, sigue estos pasos:

1. En el menú lateral, haz clic en Channels.
1. Haz clic en Snippets.
1. Haz clic sobre el botón **+** junto a "Global" en la columna derecha.
1. Ingresa tu código.
1. Haz clic en **Guardar**.
1. Haz clic en **Publicar**.
1. Selecciona si quieres publicar tu snippet global inmediatamente o en una fecha específica. También puedes seleccionar una fecha de despublicación, si lo deseas.

### Cargar un snippet global
Para cargar y utilizar un snippet global creado previamente:

1. En el menú lateral, haz clic en Channels.
1. Selecciona tu aplicación web.
1. Selecciona Widgets o Plantillas (si seleccionas Plantillas, ve directo al paso 5).
1. Selecciona tu widget.
1. Haz clic en la pestaña "Snippets", encima de la zona de trabajo, para desplegar el listado de snippets globales disponibles.
1. Haz clic en el botón de copiar del snippet global que quieres usar. Los snippets globales siempre usan la nomenclatura `global/nombre_del_snippet` y el botón copia al portapapeles la etiqueta <code v-pre>{% snippet "global/nombre_del_snippet" %}</code>.
1. Pega la etiqueta en el código del widget o la plantilla, en el lugar donde quieres que se renderice el snippet.
1. Haz clic en **Guardar** y publica el widget o la plantilla para que el snippet se renderice en tu aplicación web.

### Previsualizar un snippet
Los cambios que guardas en un snippet global y aún no publicas no se ven en el sitio. Para revisarlos antes de publicar:

1. Abre la vista previa de una página, plantilla o widget que use el snippet global.
1. En la barra de vista previa, marca la opción **Snippets globales** para que indique **Editable**. Así la vista previa muestra la última versión guardada del snippet.

Si la opción indica **Publicada**, la vista previa muestra la versión publicada del snippet.


### Editar un snippet
Para modificar un snippet, sigue estos pasos:

1. En el menú lateral, haz clic en Channels.
1. Haz clic en Snippets.
1. Selecciona el snippet que quieres editar. Los snippets globales siempre usan la nomenclatura `global/nombre_del_snippet`.
1. Modifica el snippet según requieras.
1. Haz clic en **Guardar**.
1. Haz clic en **Publicar**.
1. Selecciona si quieres publicar tu snippet global inmediatamente o en una fecha específica. También puedes seleccionar una fecha de despublicación, si lo deseas.


:::warning Publicación inmediata
Realizar cambios en un snippet global afecta a todas las aplicaciones web donde esté publicado. Procede con cuidado antes de editar o eliminar un snippet.
:::


