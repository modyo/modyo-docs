---
search: true
---

# Entradas

Las entradas son la forma de desplegar a tus sitios el contenido creado en un espacio. Puedes ver tus entradas desde los sitios creados en Modyo Platform, en el módulo de Channels, o en sitios externos mediante nuestra API.

En un espacio, las entradas se separan por tipos de contenido. El tipo de contenido define la estructura básica y los requerimientos y validaciones necesarios para que una entrada pueda publicarse.

Adicionalmente, al emplear los módulos de Channels y Customers, puedes crear sitios capaces de segmentar entradas y mostrarlas solo a usuarios específicos.


## Sobre la interfaz

En la interfaz de entradas, puedes ver una lista con todos los contenidos generados por los usuarios, ordenados por fecha de última actualización.

Las columnas para ordenar la lista de entradas son:

- **Estado:** Borrador, publicado, programado o archivado.
- **Nombre:** Nombre del contenido.
- **Tipo:** [Tipo](/es/platform/content/types.html) de contenido.
- **Actualizado:** Fecha de la última actualización guardada del contenido.
- **Autor:** Nombre del autor del contenido.

También puedes filtrar la vista con filtros predeterminados:

- **Tipo:** [Tipo](/es/platform/content/types.html) de contenido.
- **Estado:** Borrador, publicado, programado y archivado.
- **Categoría:** Categoría asignada a las entradas.
- **Idioma** Idioma del contenido.
- **Traducción:** Estado de traducción de la entrada. Si una entrada no tiene versión en el idioma seleccionado, se considera "no traducida".
- **Tags:** Etiquetas disponibles en la cuenta.
- **Barra de búsqueda:** Filtra por el contenido del título de las entradas.

:::tip Tip
Da click en el menú de Filters en la parte superior derecha de la lista de entradas para agregar o eliminar cualquiera de las opciones de filtrado del encabezado.
:::


## Acciones masivas

Selecciona una o más entradas y da click en el recuadro de Acciones masivas para:

- **Editar masivamente:** Esta opción abre una interfaz donde puedes modificar múltiples entradas a la vez, seleccionando los campos que deseas sobrescribir y aplicando los cambios.

:::warning Importante
La opción de editar masivamente entradas solo esta disponible para entradas del mismo tipo y solo es visible si filtras las entradas por tipo.
:::

Puedes hacer cambios en todos los campos del tipo. Una vez hechos los cambios, da click en **Siguiente** en la parte superior de la pantalla para ver el resumen de tus cambios. Da click en "Guardar" confirmar los cambios.

Estas entradas ahora tendrán cambios pendientes y debes publicarlas. Para ello, puedes hacer uso de la acción masiva "Publicar".


:::warning Atención
Al usar la edición masiva de entradas estás sobreescribiendo los valores para los campos seleccionados en todas las entradas seleccionadas, por lo que los valores que existían antes de la edición conjunta ya no estarán disponibles en la versión editable.

Para recuperar un valor específico de una entrada, accede a la vista de edición de entradas y selecciona la opción **Diferencias** para revisar los valores previos de una entrada.
:::

- **Publicar:**  Publica las entradas seleccionadas que tengan cambios pendientes o estén en estado borrador.
- **Forzar publicación:** Si está habilitada la revisión en equipo, los administradores del espacio pueden usar esta acción para forzar la publicación de entradas que tienen cambios pendientes o estén en estado borrador, sin necesidad de pasar por el proceso de revisión.
- **Despublicar**
- **Archivar:** Archivar en masa solo tiene efecto en las entradas seleccionadas que no estén publicadas. Si intentas archivar una entrada publicada, la acción no tendrá efecto.

:::tip Tip
Las acciones masivas se ejecutan en segundo plano y es posible que no veas los cambios inmediatamente, por lo que deberás esperar un momento y refrescar la vista luego de ejecutar una acción masiva.
:::



## Crear y publicar una entrada

Para crear una entrada, sigue estos pasos:

1. En el menú lateral selecciona Content.
1. Selecciona tu espacio.
1. Haz click en Entradas
1. Haz click en **+ Nueva Entrada**.
1. Selecciona el tipo de contenido, nombre e identificador.
1. Haz click en **Crear**.
1. Una vez creada la entrada, puedes incluir el contenido que requieras. La entrada tendrá la estructura definida en el tipo de contenido que seleccionaste.
1. Haz click en **Guardar**.
1. Haz click en **Publicar**.


:::warning Atención
Si el campo de nombre queda vacío, el identificador por defecto será el UUID de la entrada.
:::

## Traducir una entrada

Para traducir una entrada, debes primero añadir el idioma a tu espacio. Para ello, sigue estos pasos:

1. En el menú lateral, selecciona Content.
1. Haz click en tu espacio.
1. Da click en Configuración del espacio
1. Haz click en Localización.
1. Selecciona el idioma que quieres agregar y haz click en **Añadir idioma**.


Una vez que tu espacio tenga ya los idiomas que requieres, puedes ya traducir tus entradas, para ello:

1. En el menú lateral, selecciona Content.
1. Haz click en tu espacio.
1. Selecciona Entradas.
1. Del listado de entradas, da click en la entrada que quieres traducir para abrir la vista de edición.
1. Da click en el recuadro de idioma junto al título de tu entrada y selecciona el idioma al cual quieres traducir tu entrada.
1. Haz click en el botón de más acciones (...) y selecciona **Copiar desde idioma**.
1. Selecciona el idioma desde el cual quieres copiar el contenido.
1. Confirma tu selección.
1. Ingresa en los campos tu contenido.
1. Haz click en **Guardar**.
1. Haz click en **Publicar**.


### Publicar una entrada

Para publicar una entrada en Modyo, sigue estos pasos:

1. En el menú lateral, selecciona Content.
1. Haz click en tu espacio.
1. Selecciona Entradas.
1. Del listado de entradas, da click en la entrada que quieres publicar.
1. En la parte superior de la pantalla, haz click en **Guardar**.
1. Si tienes permisos de administrador, el botón de **Guardar** cambia a **Publicar** y puedes proceder a publicar tu entrada. De lo contrario, otro usuario con permisos de Administrador puede hacerlo. Si está activa la revisión en equipo, pasará por ese proceso antes de publicarse.

Puedes encontrar más información de revisión en equipo en la sección de [Conceptos Clave](https://docs.modyo.com/es/platform/core/key-concepts.html) de nuestra documentación.


### Despublicar una entrada

Despublicar una entrada permite pasar la entrada a estado Borrador y ocultarla del público. Si la revisión en equipo está activada, deberá pasar por ese flujo nuevamente para publicarla.

Para despublicar:
1. En el menú lateral, selecciona Content.
1. Haz click en tu espacio.
1. Selecciona Entradas.
1. Del listado de entradas, marca la casilla de la entrada que quieres despublicar.
1. Expande el menú de Acciones Masivas
1. Haz click en **Despublicar**.


### Eliminar entradas

Para eliminar una entrada:

1. En el menú lateral, selecciona Content.
1. Haz click en tu espacio.
1. Selecciona Entradas.
1. Del listado de entradas, da click en la entrada que quieres eliminar.
1. Haz click en el botón de más acciones (...) y selecciona **Borrar**. Si la entrada no está archivada, esta opción no estará activa, selecciona primero **Archivar** y posteriormente selecciona **Borrar**.
1. Da click en **Ok** para confirmar.

### Vista previa

Modyo te permite visualizar como se verá tu entrada publicada en múltiples sitios, previo a que la publiques.

Además, puedes previsualizar el contenido como usuario sin sesión o usuario con sesión de Modyo. Recomendamos iniciar o cerrar la sesión de Modyo en el sitio antes de entrar al modo vista previa, para evitar errores de seguridad del tipo x-frame-options o mixed-content.

:::tip Tip
Es necesario configurar previamente la vista de contenido para activar la opción de vista previa. Para obtener más detalles sobre cómo configurarla, consulta [vistas de contenido](https://docs.modyo.com/es/platform/channels/templates.html).
:::

Para previsualizar tu contenido:

1. En el menú lateral, selecciona Content.
1. Haz click en tu espacio.
1. Selecciona Entradas.
1. Del listado de entradas, da click en la entrada que quieres previsualizar.
1. Da click en el ícono de vista previa en la parte superior derecha.

:::warning Atención
Te recomendamos tener en cuenta:

- Solo puedes previsualizar contenido en el idioma del sitio. Si la entrada está en otro idioma, la vista previa muestra un error 404.
- Si el Espacio no está asociado a un sitio, solo podrás ver el código JSON de la entrada que estás desarrollando.
:::

### Editar una entrada

Para editar una entrada, sigue estos pasos:

1. En el menú lateral, selecciona Content.
1. Haz click en tu espacio.
1. Selecciona Entradas.
1. Del listado de entradas, da click en la entrada que quieres editar.
1. Modifica los campos que requieras.
1. Da click en **Guardar**.
1. Da click en **Publicar**.  Si la entrada está en proceso de revisión en equipo, los revisores deberán actualizar su vista para notar los cambios.


## Categorías

Las categorías son una herramienta fundamental en Modyo para organizar tus Entradas.

Cuando creas una categoría, Modyo genera una ruta única en la URL que proporciona acceso al recurso, siempre que esté publicado.

Para ver tus categorías, haz click en el menú lateral en Content y después selecciona Categorías.


#### Crear una categoría

Para crear una categoría:

1. Haz click en Content
1. Selecciona Categorías
1. Haz click en el botón **+ Nueva categoría**.
1. En la ventana emergente, ingresa el nombre, la ruta y, opcionalmente, una categoría padre.

Cuando asignas una entrada a una categoría, Modyo agrega el identificador como prefijo a la URL de la entrada, por ejemplo:

Una entrada con URL: test.modyo.com/visita-chile y categoría ‘travel’, ahora sería test.modyo.com/travel/visita-chile.

:::tip Tip
Al ingresar el nombre de la categoría, la ruta se establece automáticamente como identificador. Para cambiarla, haz click en la ruta.

Si modificas la ruta, asegúrate de actualizar todos los enlaces vínculos a ella.
:::

#### Eliminar una categoría

Para eliminar una categoría:

1. Haz click en Content
1. Selecciona Categorías
1. Haz click en el botón de más acciones (...)  después del nombre de la categoría
1. Selecciona **Borrar**.
1. Da click en **OK** para confirmar la eliminación.

:::tip Tip
Al eliminar una categoría que tiene entradas asignadas, las entradas no se eliminan, sin embargo, no estarán asignadas a una categoría. Si deseas asignarles una nueva categoría deberás hacerlo nuevamente.
:::

:::warning Atención
Si eliminas una categoría padre, se eliminarán todas las subcategorías asociadas a ella. Las entradas vinculadas a esas categorías quedarán sin categoría asignada.
:::

### Tags

Los tags permiten agregar mayor detalle a tus entradas al combinarlos con Liquid en tus páginas de contenido.

Al crear entradas, puedes agregar un tag que aparecerá tanto en el código fuente como en nuestra API de contenido, permitiéndote agregar funcionalidades específicas a ese tag.


### Identificador

El identificador es un valor único que se usa para generar la URL de una entrada.
Cuando crees una entrada, la plataforma le asigna un identificador. Si deseas crear un enlace más amigable, puedes modificarlo al momento de crear la entrada o posteriormente al editarla.

Forzosamente, el identificador debe ser un valor único para las entradas del mismo tipo. Si tratas de guardar dos entradas con el mismo identificador, la plataforma modificará la última, al publicar la entrada.


:::warning Importante
Si deseas modificar el identificador de tu entrada posterior a su creación, debes dar click sobre el candado en el campo de identificador y confirmar que deseas cambiarlo, ya que el hacer cambios en el identificador rompe todas las referencias al contenido a través de la API o los SDKs.

:::


### Contenido privado

Habilita la opción de contenido privado para que tu contenido sea exclusivo para usuarios que tengan una sesión en la plataforma.

Dependiendo de como estés consumiendo el contenido, es posible que debas seguir algunos pasos adicionales para acceder a él:

- **A través de la API pública:** Consulta la sección sobre contenido privado en la API.
- **A través de Liquid:** Al iniciar sesión en tu sitio, tus usuarios podrán visualizar el contenido privado.


### Segmentos

El contenido segmentado es fundamental para cualquier entidad o empresa que desee enviar información específica a un grupo de usuarios.

Para habilitar que una entrada sea visible para un grupo determinado de usuarios:

1. Marca la opción de contenido privado
1. Habilita la segmentación
1. Selecciona el segmento de usuarios al que se dirige la entrada.
1. Da click en **Guardar**.

Para crear un segmento en específico, revisa la sección Segmentos.


## Consumir externamente

Puedes acceder al contenido creado en el módulo de Content desde cualquier lugar, usando nuestra API.
Para obtener el UUID de una entrada, sigue estos pasos:

1. En el menú lateral, selecciona Content.
1. Haz click en tu espacio.
1. Selecciona Entradas.
1. Del listado de entradas, da click en una entrada
1. Haz click en el ícono de vista previa.
1. Haz click en **Link de la API**. Serás redirigido a una nueva página que usa la API para obtener el contenido de la entrada. El resultado será similar a esto:

URL: `https://test.modyo.com/api/content/spaces/test-space/types/nuevo/entries/45fa2ef7-bf12-47a3-8ff7-f7d1f5f36844`

```json
{
  "meta":
  {
    "name": "MyNewEntry",
    "slug": "mynewentry",
    "tags": [],
    "type": "newType",
    "uuid": "45fa2ef7-bf12-47a3-8ff7-f7d1f5f36844",
    "space": "test-space",
    "author":
    {},
    "locale": "es-cl",
    "private": false,
    "targets": [],
    "category": "mycategory",
    "created_at": "2022-02-24T12:44:24.000-03:00",
    "updated_at": "2022-02-25T10:06:46.000-03:00",
    "published_at": "2022-02-25T10:06:46.000-03:00",
    "version_type": "current",
    "category_name": "MyCategory",
    "category_slug": "mycategory",
    "unpublished_at": null,
    "available_locales": ["es-cl"]
  },
  "fields":
  {
    "My items": "..."
  }
}
```

Para más infromación de nuestra API y las diferentes acciones que puedes realizar, ve [API de administración](/es/platform/core/api).