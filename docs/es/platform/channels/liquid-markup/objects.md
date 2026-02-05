---
search: true
---

# Objetos

Los Objetos (también conocidos como Variables Liquid) permiten acceder a información dinámica en Modyo Platform. Son contenedores de datos predefinidos que Modyo proporciona para acceder a información del usuario, sitio, contenido y más.

### ¿Qué son los objetos en Modyo?

En Modyo, los objetos son variables especiales que contienen información estructurada sobre diferentes aspectos de tu plataforma:

- **Información del usuario**: Datos del usuario autenticado
- **Datos del sitio**: Configuración y propiedades del sitio actual
- **Contenido dinámico**: Entradas, espacios y tipos de contenido
- **Contexto de la página**: Información sobre la página actual
- **Configuración del sistema**: Datos de la cuenta y configuración global

Estos objetos están disponibles automáticamente en tus plantillas y puedes acceder a sus propiedades usando la notación de punto o corchetes.

### Objetos disponibles

A continuación se detallan todos los objetos disponibles en Modyo Platform, organizados alfabéticamente:

## account

Los objetos de Cuenta se utilizan principalmente en el contexto de autenticación de cuenta, lo que significa que se pueden llamar desde cualquier lugar ya que se consideran de alcance global. Los atributos disponibles son:

| Objeto                 | Descripción                                                                                               | Ejemplo                                       |
|------------------------|-----------------------------------------------------------------------------------------------------------|-----------------------------------------------|
| **account.url**        | La URL de Modyo Platform, incluido el protocolo y el subdominio.                                          | ```https://test.modyo.com```                  |
| **account.host**       | El nombre del subdominio de Modyo Platform.                                                               | ```test```                                    |
| **account.google_key** | Si hay autenticación con Google, devuelve la clave de credencial; de lo contrario, devuelve vacío (void). | ```AIzaSyDmrYmbFpzqdIxHycHbgtJrs9lhKOfggEE``` |

## adminuser

Los administradores de la Cuenta son usuarios con privilegios para realizar cambios a nivel de Cuenta, así como en la configuración de Espacios o Sitios.

| Objeto                   | Descripción                                            | Ejemplo                  |
|--------------------------|--------------------------------------------------------|--------------------------|
| **adminuser.avatar**     | Objeto de tipo asset para el avatar del administrador. |                          |
| **adminuser.email**      | Email del administrador.                               | ```john.doe@modyo.com``` |
| **adminuser.first_name** | Nombre del administrador.                              | ```John```               |
| **adminuser.last_name**  | Apellido del administrador.                            | ```Doe```                |
| **adminuser.name**       | Nombre completo del administrador.                     | ```John Doe```           |

## asset

Objeto de tipo asset. Contiene la información relevante de un archivo dentro del [Gestor de Archivos](/es/platform/content/asset-manager.html).

| Objeto                   | Descripción                                                | Ejemplo                                                                                                              |
|--------------------------|------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------|
| **asset.data_file_name** | El nombre del asset.                                       | ```foto.jpg```                                                                                                       |
| **asset.description**    | Descripción del archivo, si se ha configurado.             | ```Platón usa esta alegoría para explicar cómo es para el filósofo y maestro guiar a las personas al conocimiento``` |
| **asset.title**          | El título asociado al asset.                               | ```Foto```                                                                                                           |
| **asset.uuid**           | El uuid del asset.                                         | ```7b1b3f82-c9f5-4c51-87dc-b93fc9918c9c```                                                                           |
| **asset.alt**            | Texto alternativo asociado al asset, si se ha configurado. | ```El mito de la caverna de Platon```                                                                                |
| **asset.alt_text**       | Texto alternativo asociado al asset, si se ha configurado. | ```El mito de la caverna de Platon```                                                                                |
| **asset.content_type**   | Tipo de contenido asociado al asset.                       | ```image/jpeg```                                                                                                     |
| **asset.name**           | El nombre asignado al asset.                               | ```foto.jpg```                                                                                                       |
| **asset.size**           | Tamaño (en bytes) del archivo subido.                      | ```20959```                                                                                                          |
| **asset.thumbnail_url**  | URL del thumbnail del asset.                               | ```/uploads/7b1b3f82-c9f5-4c51-87dc-b93fc9918c9c/C50x50/foto.jpg```                                                  |
| **asset.url**            | URL donde se encuentra el asset.                           | ```/uploads/7b1b3f82-c9f5-4c51-87dc-b93fc9918c9c/original/foto.jpg```                                                |

### audio_asset

El objeto de Audio es una subclase que hereda los mismos atributos que Asset. Se puede utilizar `audio_asset` en lugar de `asset`.

Se heredan los siguientes atributos de [Asset](#asset):

`.data_file_name, .description, .title, .uuid, .alt, .alt_text, .content_type, .name, .size, .thumbnail_url, .url`

### file_asset

El objeto de Archivo es una subclase que hereda los mismos atributos que Asset. Se puede utilizar `file_asset` en lugar de `asset`.

Se heredan los siguientes atributos de [Asset](#asset):

`.data_file_name, .description, .title, .uuid, .alt, .alt_text, .content_type, .name, .size, .thumbnail_url, .url`

| Objeto                             | Descripción                                                        | Ejemplo                                                                 |
|------------------------------------|--------------------------------------------------------------------|-------------------------------------------------------------------------|
| **file_asset.url**                 | La URL del archivo.                                                | ```/uploads/8de5a204-74e6-4d6b-a319-6f7896c09135/original/platon.csv``` |
| **file_asset.thumbnail_url**       | La URL del thumb del archivo.                                      | ```/uploads/7b1b3f82-c9f5-4c51-87dc-b93fc9918c9c/C50x50/platon.jpg```   |
| **file_asset.image_thumbnail_url** | La URL del archivo.                                                | ```/uploads/8de5a204-74e6-4d6b-a319-6f7896c09135/C200x200/cave.csv```   |
| **file_asset.is_image?**           | Booleano que indica si el archivo es una imagen.                   | ```false```                                                             |
| **file_asset.is_video?**           | Booleano que indica si el archivo es un video.                     | ```false```                                                             |
| **file_asset.is_audio?**           | Booleano que indica si el archivo es un audio.                     | ```false```                                                             |
| **file_asset.is_pdf?**             | Booleano que indica si el archivo es un PDF.                       | ```false```                                                             |
| **file_asset.is_another?**         | Booleano que indica si el archivo es de otro tipo no especificado. | ```false```                                                             |
| **file_asset.pdf_thumbnail_url**   | URL del thumbnail del PDF (si el asset es un PDF).                 | ```/uploads/.../thumb.pdf.png```                                        |
| **file_asset.temp_url**            | URL efímera (con expiración) para acceso seguro.                   | ```https://cdn.example.com/temporary/abc123```                          |

### video_asset

El objeto de Video es una subclase que hereda los mismos atributos que Asset. Se puede utilizar `video_asset` en lugar de `asset`.

| Objeto                        | Descripción                     | Ejemplo                                                                   |
|-------------------------------|---------------------------------|---------------------------------------------------------------------------|
| **video_asset.url**           | La URL del video.               | ```/uploads/8de5a204-74e6-4d6b-a319-6f7896c09135/original/caverna.webm``` |
| **video_asset.thumbnail_url** | La URL del thumbnail del video. | ```/uploads/7b1b3f82-c9f5-4c51-87dc-b93fc9918c9c/C50x50/platon.jpg```     |

## category

Objeto de tipo categoría (Tag). Contiene la información relevante de las categorías de una entrada.

| Objeto                | Descripción                                                                 | Ejemplo           |
|-----------------------|-----------------------------------------------------------------------------|-------------------|
| **category.id**       | ID de la categoría.                                                         | ```12345```       |
| **category.slug**     | Slug de la categoría.                                                       | ```category-1```  |
| **category.name**     | Nombre de la categoría.                                                     | ```Category 1```  |
| **category.url**      | URL canónica de la categoría.                                               | ```/category-1``` |
| **category.children** | Array de objetos de tipo `category` con todos los hijos de la categoría.    |                   |
| **category.parent**   | Objeto de tipo `category` correspondiente al padre de la categoría.         |                   |
| **category.siblings** | Array de objetos de tipo `category` con todos los hermanos de la categoría. |                   |

## entry

Crea contenido dinámico en tus espacios usando Entradas. En este objeto tienes acceso a toda la información relevante de las entradas. Los atributos disponibles son:

| Objeto                  | Descripción                                                                                                                           | Ejemplo                                                                   |
|-------------------------|---------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------|
| **entry.meta.space**         | Nombre del espacio asociado a la entrada.                                                                                             | ```espacio1```                                                            |
| **entry.meta.category**      | Ruta de la categoría de esta entrada.                                                                                                 | ```category-1/category-2```                                               |
| **entry.meta.category_name** | Nombre de la categoría de esta entrada.                                                                                               | ```category 2```                                                          |
| **entry.meta.category_slug** | Slug de la categoría de esta entrada.                                                                                                 | ```category-2```                                                          |
| **entry.meta.type**          | Tipo de la entrada.                                                                                                                   | ``type2``                                                                 |
| **entry.meta.type_uid**      | ID único del tipo de la entrada.                                                                                                      | ``type2``                                                                 |
| **entry.meta.tags**          | Array de strings con los tags de esta entrada.                                                                                        | ```tag1, tag2```                                                          |
| **entry.meta.excerpt**       | Extracto asociado a la entrada.                                                                                                       | ```Este es el excerpt de una entry muy cool```                            |
| **entry.meta.account_url**   | URL de la cuenta.                                                                                                                     | ```https://test.modyo.com```                                              |
| **entry.meta.url**           | URL canónica de la entrada.                                                                                                           | ```https://test.modyo.com/entry```                                        |
| **entry.meta.author**        | Objeto del usuario autor de la entrada.                                                                                               |                                                                           |
| **entry.meta**          | Objeto con los siguientes atributos de metadatos: uuid, published_at, locale, slug, created_at, updated_at, unpublished_at y private. |
| **entry.fields**        | Array de objetos con los campos de la entrada.                                                                                        |                                                                           |
| **entry.as_json**       | Representación JSON (meta + fields).                                                                                                  | ```{"meta":{"uuid":"abc"},"fields":[{"name":"title","value":"Hello"}]}``` |

## field

Muestra toda la información de los campos de una entrada.

| Objeto                                    | Descripción                                                | Ejemplo                               |
|-------------------------------------------|------------------------------------------------------------|---------------------------------------|
| **field.name**                            | Nombre del campo personalizado.                            | ```Field1```                          |
| **field.type**                            | Nombre del tipo asociado al campo.                         | ```Type1```                           |
| **repeatable_group_field.fields_schema**  | Esquema de los campos en un grupo repetible.               | ```[{"name":"item","type":"text"}]``` |
| **repeatable_group_field.json_format**    | Valor del grupo como string JSON.                          | ```"[{\"item\":\"Value\"}]"```        |
| **repeatable_group_field.locale**         | Locale del contenido del grupo.                            | ```"es"```                            |
| **repeatable_group_field.space**          | Identificador del espacio para el grupo.                   | ```"marketing"```                     |
| **repeatable_group_field.as_json**        | Representación JSON del grupo.                             | ```{"fields":[{"item":"Value"}]}```   |
| **asset_field.pdf_thumbnail_url**         | Thumbnail del PDF cuando el campo referencia un asset PDF. | ```/uploads/.../pdf-thumb.png```      |
| **asset_field.temp_url**                  | URL efímera del asset referenciado.                        | ```https://cdn.example.com/tmp/xyz``` |
| **asset_field.special_image?**            | Indica si es una variante especial de imagen.              | ```false```                           |

## form

Estos objetos permiten obtener información a través de Liquid para un formulario del módulo Customers.

| Objeto        | Descripción          | Ejemplo                   |
|---------------|----------------------|---------------------------|
| **form.slug** | Slug del formulario. | ```el-nuevo-formulario``` |

### alternative

| Objeto                   | Descripción              | Ejemplo                   |
|--------------------------|--------------------------|---------------------------|
| **alternative.id**       | ID de la alternativa.    | ```La primera pregunta``` |
| **alternative.question** | Objeto de tipo pregunta. |                           |

### answer

| Objeto                        | Descripción                                         | Ejemplo                                                                                        |
|-------------------------------|-----------------------------------------------------|------------------------------------------------------------------------------------------------|
| **answer.edit_url**           | URL de edición de la respuesta.                     | ```"https://test.modyo.com/forms/el-nuevo-formulario/edit_answer?question_id=3&answer_id=8"``` |
| **answer.id**                 | ID de la respuesta.                                 | ```5```                                                                                        |
| **answer.question**           | Objeto de tipo pregunta asociado a la respuesta.    |                                                                                                |
| **answer.response**           | Objeto de tipo respuesta asociado a la respuesta.   |                                                                                                |
| **answer.text_field**         | Campo de texto asociado a la respuesta.             | ```Este es la respuesta en el campo de texto```                                                |
| **answer.type**               | Tipo de respuesta.                                  | ```text_answer```                                                                              |
| **answer.alternative**        | Alternativa seleccionada (para selección múltiple). |                                                                                                |
| **answer.dynamic_target_url** | URL dinámica basada en el valor de la respuesta.    | ```https://example.com/path```                                                                 |

### form_response

| Objeto                        | Descripción                             | Ejemplo                                                                                                     |
|-------------------------------|-----------------------------------------|-------------------------------------------------------------------------------------------------------------|
| **form_response.description** | Descripción del formulario.             | ```Este formulario es el nuevo formulario de los usuarios```                                                |
| **form_response.name**        | Nombre del formulario.                  | ```El nuevo formulario```                                                                                   |
| **form_response.questions**   | Array con las preguntas del formulario. | ```[{"title"=>"¿Cual es tu puesto de trabajo?", "type"=>"textquestion", "answer"=>"Software developer"}]``` |

### question

Estos objetos permiten obtener información a través de Liquid para las preguntas de un formulario del módulo Customers.

| Objeto                           | Descripción                                             | Ejemplo                   |
|----------------------------------|---------------------------------------------------------|---------------------------|
| **question.allow_alternatives?** | Booleano que indica si la pregunta acepta alternativas. | ```false```               |
| **question.alternatives**        | Array de objetos de tipo alternativa.                   |                           |
| **question.allow_alternatives?** | Booleano que indica si la pregunta acepta alternativas. | ```false```               |
| **question.form**                | Objeto de tipo formulario.                              |                           |
| **question.id**                  | Devuelve el ID de la pregunta.                          | ```3```                   |
| **question.label**               | Etiqueta de la pregunta.                                | ```La primera pregunta``` |
| **question.name**                | Nombre interno de la pregunta.                          | ```La primera pregunta``` |
| **question.uid**                 | Identifier de la pregunta                               | ```text-question-1```     |

## grid

Contiene la definición de una Grilla en una Página.


| Objeto                | Descripción                          | Ejemplo                            |
|-----------------------|--------------------------------------|------------------------------------|
| **grid.id**           | ID de la grilla.                     | ```508```                          |
| **grid.cache_key**    | Clave de caché asociada a la grilla. | ```layouts/grids/full_grids/508``` |
| **grid.resolve_type** | Tipo de la grilla con underscore.    | ```full_grid```                    |

### full_grid

Extiende la funcionalidad del objeto Grid y contiene los siguientes atributos adicionales:

| Objeto                     | Descripción                      | Ejemplo |
|----------------------------|----------------------------------|---------|
| **full_grid.main_widgets** | Array de objetos de tipo widget. |         |

### full_three_cols_grid

Extiende la funcionalidad del objeto Grid y contiene los siguientes atributos adicionales:

| Objeto                                      | Descripción                      | Ejemplo |
|---------------------------------------------|----------------------------------|---------|
| **full_three_cols_grid.main_widgets**       | Array de objetos de tipo widget. |         |
| **full_three_cols_grid.col1_widgets**       | Array de objetos de tipo widget. |         |
| **full_three_cols_grid.col2_widgets**       | Array de objetos de tipo widget. |         |
| **full_three_cols_grid.col3_widgets**       | Array de objetos de tipo widget. |         |
| **side_right_three_cols_grid.main_widgets** | Array de objetos de tipo widget. |         |


### full_two_cols_grid

Extiende la funcionalidad del objeto Grid y contiene los siguientes atributos adicionales:

| Objeto                              | Descripción                      | Ejemplo |
|-------------------------------------|----------------------------------|---------|
| **full_two_cols_grid.main_widgets** | Array de objetos de tipo widget. |         |
| **full_two_cols_grid.col1_widgets** | Array de objetos de tipo widget. |         |
| **full_two_cols_grid.col2_widgets** | Array de objetos de tipo widget. |         |


### side_left_grid

Extiende la funcionalidad del objeto Grid y contiene los siguientes atributos adicionales:

| Objeto                               | Descripción                      | Ejemplo |
|--------------------------------------|----------------------------------|---------|
| **side_left_grid.main_widgets**      | Array de objetos de tipo widget. |         |
| **side_left_grid.side_left_widgets** | Array de objetos de tipo widget. |         |


### side_left_one_col_grid

Extiende la funcionalidad del objeto Grid y contiene los siguientes atributos adicionales:

| Objeto                                       | Descripción                      | Ejemplo |
|----------------------------------------------|----------------------------------|---------|
| **side_left_one_col_grid.main_widgets**      | Array de objetos de tipo widget. |         |
| **side_left_one_col_grid.side_left_widgets** | Array de objetos de tipo widget. |         |
| **side_left_one_col_grid.full_widgets**      | Array de objetos de tipo widget. |         |

### side_left_three_cols_grid

Extiende la funcionalidad del objeto Grid y contiene los siguientes atributos adicionales:

| Objeto                                          | Descripción                      | Ejemplo |
|-------------------------------------------------|----------------------------------|---------|
| **side_left_three_cols_grid.main_widgets**      | Array de objetos de tipo widget. |         |
| **side_left_three_cols_grid.side_left_widgets** | Array de objetos de tipo widget. |         |
| **side_left_three_cols_grid.col1_widgets**      | Array de objetos de tipo widget. |         |
| **side_left_three_cols_grid.col2_widgets**      | Array de objetos de tipo widget. |         |
| **side_left_three_cols_grid.col3_widgets**      | Array de objetos de tipo widget. |         |

### side_right_grid

Extiende la funcionalidad del objeto Grid y contiene los siguientes atributos adicionales:

| Objeto                                 | Descripción                      | Ejemplo |
|----------------------------------------|----------------------------------|---------|
| **side_right_grid.main_widgets**       | Array de objetos de tipo widget. |         |
| **side_right_grid.side_right_widgets** | Array de objetos de tipo widget. |         |

### side_right_one_col_grid

Extiende la funcionalidad del objeto Grid y contiene los siguientes atributos adicionales:

| Objeto                                         | Descripción                      | Ejemplo |
|------------------------------------------------|----------------------------------|---------|
| **side_right_one_col_grid.main_widgets**       | Array de objetos de tipo widget. |         |
| **side_right_one_col_grid.side_right_widgets** | Array de objetos de tipo widget. |         |
| **side_right_one_col_grid.full_widgets**       | Array de objetos de tipo widget. |         |


### side_right_three_cols_grid

Extiende la funcionalidad del objeto Grid y contiene los siguientes atributos adicionales:

| Objeto                                            | Descripción                      | Ejemplo |
|---------------------------------------------------|----------------------------------|---------|
| **side_right_three_cols_grid.side_right_widgets** | Array de objetos de tipo widget. |         |
| **side_right_three_cols_grid.col1_widgets**       | Array de objetos de tipo widget. |         |
| **side_right_three_cols_grid.col2_widgets**       | Array de objetos de tipo widget. |         |
| **side_right_three_cols_grid.col3_widgets**       | Array de objetos de tipo widget. |         |

## location

Objeto de tipo ubicación. Contiene la información relevante de un punto de geolocalización.

| Objeto                                   | Descripción                               | Ejemplo                                |
|------------------------------------------|-------------------------------------------|----------------------------------------|
| **location.location_street**             | Nombre de la ubicación en Google Maps.    | ```Main street 3883```                 |
| **location.latitude**                    | Latitud del punto en Google Maps.         | ```-33.3982607```                      |
| **location.longitude**                   | Longitud del punto en Google Maps.        | ```-70.6003616```                      |
| **location.country**                     | Nombre/código del país.                   | ```Chile```                            |
| **location.administrative_area_level_1** | División administrativa de primer nivel.  | ```Región Metropolitana de Santiago``` |
| **location.administrative_area_level_2** | División administrativa de segundo nivel. | ```Santiago```                         |
| **location.administrative_area_level_3** | División administrativa de tercer nivel.  |                                        |
| **location.administrative_area_level_4** | División administrativa de cuarto nivel.  |                                        |
| **location.administrative_area_level_5** | División administrativa de quinto nivel.  |                                        |

## menu

Objeto de tipo menú. Contiene la información relevante de los ítems de un menú.

| Objeto         | Descripción                                                  | Ejemplo |
|----------------|--------------------------------------------------------------|---------|
| **menu.items** | Array de objetos de tipo `menu_items` asociados a este menú. |         |

### menu_item

| Objeto                            | Descripción                                                  | Ejemplo                               |
|-----------------------------------|--------------------------------------------------------------|---------------------------------------|
| **menu_item.category**            | Categoría asociada al ítem de menú.                          | ```home```                            |
| **menu_item.child_items**         | Array de objetos de ítems hijos del ítem actual.             |                                       |
| **menu_item.classes**             | Clases CSS asociadas a este ítem.                            | ```mdi, mdi-circle```                 |
| **menu_item.description**         | Descripción para este ítem.                                  |                                       |
| **menu_item.label**               | Etiqueta del ítem de menú.                                   | ```Home```                            |
| **menu_item.parameterized_label** | Etiqueta parametrizada asociada al ítem de menú.             | ```home```                            |
| **menu_item.position**            | Posición asociada al ítem de menú (0 como primera posición). | ```0```                               |
| **menu_item.url**                 | URL asociada al ítem de menú.                                | ```https://test.modyo.com/newsite/``` |
| **menu_item.target**              | Target del enlace (p.e. _blank, _self).                      | ```_blank```                          |

## notification

Estos objetos permiten obtener información a través de Liquid para las notificaciones del módulo Customers.

| Objeto                    | Descripción                                         | Ejemplo                                                                      |
|---------------------------|-----------------------------------------------------|------------------------------------------------------------------------------|
| **notification.opened**   | Booleano que indica si la notificación fue abierta. | ```true```                                                                   |
| **notification.sent_at**  | Fecha de envío de la notificación.                  | ```2012-11-16 00:46:40```                                                    |
| **notification.body**     | Cuerpo de la notificación.                          | ```mdi, mdi-circle```                                                        |
| **menu_item.description** | Descripción para este ítem.                         | ```<p>Este es un mensaje de prueba en las campañas via notificaciones</p>``` |
| **notification.subject**  | Asunto de la notificación.                          | ```Modyo Developers Update```                                                |
| **notification.url**      | URL de la notificación.                             | ```https://test.modyo.com/profile?notification_id=65345```                   |

## order

Estos objetos permiten obtener información a través de Liquid para las órdenes del módulo Commerce.

| Objeto                       | Descripción                                                | Ejemplo                   |
|------------------------------|------------------------------------------------------------|---------------------------|
| **order.created_at**         | String con la fecha de creación de la orden.               |                           |
| **order.current_state**      | String con el estado actual de la orden.                   | ```2012-11-16 00:46:40``` |
| **order.id**                 | ID de la orden.                                            |                           |
| **order.order_items**        | Array de objetos de tipo `order_item`.                     |                           |
| **order.payment_info**       | Hash con la información de pago de la orden.               |                           |
| **order.short_uuid**         | String con el UUID corto de la orden.                      |                           |
| **order.tax_total**          | Float con el monto total de impuestos pagados de la orden. |                           |
| **order.total**              | Float con el monto total de la orden.                      |                           |
| **order.updated_at**         | String con la fecha de última modificación.                |                           |
| **order.url**                | String con el url de la orden.                             |                           |
| **order.uuid**               | String con el UUID completo de la orden.                   |                           |
| **order.confirmation_code**  | String con el código de confirmación de la orden.          |                           |
| **order.customer_email**     | String con el email del cliente asociado a esta orden.     |                           |
| **order.customer_name**      | String con el nombre completo del cliente asociado.        |                           |
| **order.order_description**  | String con la descripción de la orden.                     |                           |
| **order.order.reference_id** | String con el ID de referencia para esta orden.            |                           |
| **order.reference_order**    | Identificador de una orden relacionada/de referencia.      | ```REF-2025-01```         |

### order_item


| Objeto                    | Descripción                                      | Ejemplo |
|---------------------------|--------------------------------------------------|---------|
| **order_item.created_at** | Fecha de creación del ítem de orden.             |         |
| **order_item.id**         | ID del ítem de orden.                            |         |
| **order_item.name**       | Nombre del ítem de orden.                        |         |
| **order_item.price**      | Precio del ítem de orden.                        |         |
| **order_item.quantity**   | Cantidad de ítems en la orden.                   |         |
| **order_item.updated_at** | Fecha de última actualización del ítem de orden. |         |

## origination

Estos objetos obtienen la información relevante de los flujos de originación.

| Objeto                             | Descripción                                                          | Ejemplo                                                                                                                                 |
|------------------------------------|----------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------|
| **origination.name**               | Nombre del flujo de originación.                                     | ```Mi nueva Originación```                                                                                                              |
| **origination.description**        | Descripción del flujo de originación.                                | ```Proceso de originación para guiar a los clientes desde el registro de información personal hasta la validación de datos bancarios``` |
| **origination.due_value**          | Valor del período de vencimiento del flujo de originación.           | ```15```                                                                                                                                |
| **origination.due_unit**           | Unidad del período de vencimiento (por ejemplo: "days", "weeks").    | ```days```                                                                                                                              |
| **origination.uid**                | Identificador único (UID) del flujo de originación.                  | ```mi-originacion```                                                                                                                    |
| **origination.url**                | URL de la página del flujo de originación.                           | ```https://test.modyo.com/new-site/myorigination```                                                                                     |
| **origination.steps**              | Lista de objetos step | [ver documentación del step](/es/platform/channels/liquid-markup/objects.html#step) |
| **origination.can_begin**          | Indica si el usuario puede iniciar el flujo de originación.          | ```true```                                                                                                                              |
| **origination.can_create**         | Indica si el usuario puede crear una nueva submission para el flujo. | ```true```                                                                                                                              |
| **origination.can_resume**         | Indica si el usuario puede reanudar una submission del flujo.        | ```true```                                                                                                                              |
| **origination.begin_message**      | Mensaje inicial del flujo de originación.                            | ```"¡Bienvenido!"```                                                                                                                    |
| **origination.completion_message** | Mensaje al completar el flujo de originación.                        | ```"Todo listo"```                                                                                                                      |
| **origination.ordered_steps**      | Indica si los steps del flujo de originación están ordenados.        | ```true```                                                                                                                              |
| **origination.new_submission_url** | URL para crear una nueva submission del flujo.                       | ```/originations/mi-originacion/new```                                                                                                  |

## page

Estos objetos son de gran utilidad para crear páginas dinámicas usando Liquid.


| Objeto                | Descripción                                                                           | Ejemplo                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|-----------------------|---------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **page.content**      | Contenido de la página.                                                               | ```Home Main Sectionx Build better digital products to unify your customer experiences and accelerate growth. Welcome to the Minimal theme. This is an HTML widget that you can modify in the Page Builder section. You can also modify the style in the Template Builder section. Go to Modyo Read the docs Create and launch digital products faster Welcome to the Minimal theme. This is an HTML widget that you can modify in the Page Builder section. You can also modify the style in the Template Builder section. Learn more Loren Ipsum dolor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Learn more Loren Ipsum dolor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Learn more Loren Ipsum dolor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Learn more HTML dsfdfdfs customivan Content list Content list newentry 7 Feb, 2022 42838bbc-8ce8-4401-9898-3c0f2590c992 2022-02-08 14:59:31 UTC en newentry 2022-02-07 21:09:18 UTC 2022-02-08 14:59:31 UTC false``` |
| **page.name**         | Nombre asociado a la página.                                                          | ```Home```                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| **page.parent**       | Objeto de tipo página que es padre de la página; si no existe, devuelve vacío (void). |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| **page.url**          | URL de la página.                                                                     | ```https://test.modyo.com/newsite/```                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| **page.current_path** | Ruta asociada a la página.                                                            | ```/examples```                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| **page.description**  | Descripción de la página.                                                             | ```Este es la descripcion de una página muy cool```                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| **page.excerpt**      | Extracto asociado a la página.                                                        | ```Este es el excerpt de una página muy cool```                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| **page.grid**         | Objeto de tipo grilla asociado a la página.                                           |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| **page.meta_tags**    | Array de strings con las meta etiquetas asociadas a la página.                        | ```My, Test, Metatag```                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| **page.title**        | Título asociado a la página.                                                          | ```Home```                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |

## realm

| Objeto                              | Descripción                                                                                                | Ejemplo |
|-------------------------------------|------------------------------------------------------------------------------------------------------------|---------|
| **realm.disable_modyo_credentials** | Booleano que determina si las credenciales de Modyo están desactivadas. `true` desactiva las credenciales. |         |
| **realm.oauth2_callback_url**       | String que determina la URL de callback de OAuth2.                                                         |         |
| **realm.oidc_callback_url**         | String que determina la URL de callback de OIDC.                                                           |         |

## request

Estos drops permiten obtener información al momento de realizar una solicitud (request).

| Objeto                    | Descripción                                                                               | Ejemplo                                                                                                                         |
|---------------------------|-------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------|
| **request.domain**        | Dominio de la solicitud.                                                                  | ```modyo.com```                                                                                                                 |
| **request.host**          | Host de la solicitud.                                                                     | ```test.modyo.com```                                                                                                            |
| **request.protocol**      | Protocolo asociado a la solicitud.                                                        | ```https://```                                                                                                                  |
| **request.user_agent**    | Detalles del user agent.                                                                  | ```mozilla/5.0 (macintosh; intel mac os x 10_15_2) applewebkit/537.36 (khtml, like gecko) chrome/96.0.4664.110 safari/537.36``` |
| **request.comments_url**  | URL de comentarios de la solicitud.                                                       | ```https://test.modyo.com/newsite/requests/123124/comments```                                                                   |
| **request.interact_url**  | URL de interacción de la solicitud.                                                       | ```https://test.modyo.com/newsite/requests```                                                                                   |
| **request.is_app_shell?** | Booleano que indica si el user agent de la solicitud pertenece a una aplicación de Modyo. | ```false```                                                                                                                     |
| **request.path**          | Ruta de la solicitud.                                                                     | ```/newsite/the-new-type/newentry```                                                                                            |
| **request.refresh_url**   | URL de refresco de la solicitud.                                                          | ```https://test.modyo.com/newsite/requests/refresh```                                                                           |
| **request.url**           | URL de la solicitud.                                                                      | ```https://test.modyo.com/ivansite/the-new-type/newentry```                                                                     |

## segment

Estos drops permiten obtener información de Segmentos. Los atributos disponibles son:

| Objeto           | Descripción                                | Ejemplo |
|------------------|--------------------------------------------|---------|
| **segment.id**   | String con el ID asociado al segmento.     |         |
| **segment.name** | String con el nombre asociado al segmento. |         |

## site

Los objetos de Sitio se utilizan para obtener toda la información de un sitio. Los atributos disponibles son:

| Objeto                          | Descripción                                                                                                                 | Ejemplo                |
|---------------------------------|-----------------------------------------------------------------------------------------------------------------------------|------------------------|
| **site.account**                | Objeto de tipo Cuenta asociada a este sitio.                                                                                |                        |
| **site.apple_touch_icons**      | String con el enlace para el Apple touch icon.                                                                              |                        |
| **site.cache_key**              | Clave de caché asociada al sitio.                                                                                           |                        |
| **site.description**            | String con la descripción del sitio.                                                                                        |                        |
| **site.favicon_link**           | String con el enlace al favicon.                                                                                            |                        |
| **site.host**                   | String con el host del sitio.                                                                                               |                        |
| **site.keywords**               | String con todas las palabras clave separadas por coma en el sitio.                                                         |                        |
| **site.language**               | String con el idioma del sitio.                                                                                             |                        |
| **site.login_url**              | String con la URL para iniciar sesión en el sitio.                                                                          |                        |
| **site.logo**                   | String con la ubicación del logo para el sitio.                                                                             |                        |
| **site.logout_url**             | String con la URL de cierre de sesión del sitio.                                                                            |                        |
| **site.name**                   | String con el nombre del sitio.                                                                                             |                        |
| **site.profile_url**            | String con el enlace del perfil para el sitio.                                                                              |                        |
| **site.pwa_icon**               | Objeto de tipo Asset que contiene la información del icono PWA.                                                             |                        |
| **site.search_url**             | String con la URL para la barra de búsqueda del sitio.                                                                      |                        |
| **site.tag_manager_id**         | String con el ID de Google Tag Manager del sitio.                                                                           |                        |
| **site.tagline**                | String con la descripción del tagline del sitio.                                                                            |                        |
| **site.use_pwa_manifest**       | Booleano que determina si el sitio usa el manifiesto PWA.                                                                   |                        |
| **site.uuid**                   | String con el UUID del sitio.                                                                                               |                        |
| **site.account_url**            | String con la URL de la cuenta asociada al sitio.                                                                           |                        |
| **site.breadcrumb**             | String con la clase CSS del div de breadcrumb.                                                                              |                        |
| **site.cache_version**          | String con la clave de caché de esta versión del sitio.                                                                     |                        |
| **site.csrf_meta_tag**          | String con la meta etiqueta CSRF.                                                                                           |                        |
| **site.css_path**               | String con la ubicación del archivo CSS del sitio.                                                                          |                        |
| **site.current_year**           | String con el año actual del sitio.                                                                                         |                        |
| **site.js_path**                | String con la ubicación del archivo JS del sitio.                                                                           |                        |
| **site.login_enabled**          | Booleano que determina si el sitio usa login.                                                                               |                        |
| **site.manifest_url**           | String con la URL del manifiesto para el sitio.                                                                             |                        |
| **site.meta_tags**              | String con las meta etiquetas del sitio separadas por coma.                                                                 |                        |
| **site.originations**           | Array de objetos de originación que contiene todas las originaciones con página de originación asociada en el sitio actual. |                        |
| **site.root_path**              | String con la ubicación raíz del sitio.                                                                                     |                        |
| **site.service_worker_enabled** | Booleano que determina si el service worker de nivel superior está activado (alias: `sw_enabled`).                          |                        |
| **site.service_worker_scope**   | String con el scope del service worker del sitio.                                                                           |                        |
| **site.service_worker_url**     | String con la URL del service worker para el sitio.                                                                         |                        |
| **site.url**                    | String con la URL asociada al sitio.                                                                                        |                        |
| **site.vapid_public_key**       | Clave pública VAPID para Web Push.                                                                                          | ```BNa...xyz```        |
| **site.time_zone**              | Zona horaria del sitio.                                                                                                     | ```America/Santiago``` |
| **site.realm_slug**             | Slug del realm al que pertenece el sitio.                                                                                   | ```default```          |

## sitesearch

Estos drops permiten obtener información del navegador de un sitio.

| Objeto                                    | Descripción                                                                | Ejemplo |
|-------------------------------------------|----------------------------------------------------------------------------|---------|
| **sitesearch.have_results**               | Booleano que determina si la búsqueda tiene resultados.                    |         |
| **sitesearch.results**                    | Objeto de tipo Página que cumple con los parámetros de búsqueda.           |         |
| **sitesearch.have_less_relevant_results** | Booleano que determina si hay más resultados que exceden el límite máximo. |         |

## space

Muestra contenido dinámico creado en tus espacios desde cualquier parte de tu sitio. En este objeto tienes acceso a toda la información relevante de las entradas, los tipos de contenido y el gestor de archivos. Los atributos disponibles son:

| Objeto                                      | Descripción                                                                       | Ejemplo             |
|---------------------------------------------|-----------------------------------------------------------------------------------|---------------------|
| **spaces['nombre_del_espacio'].categories** | Array de objetos de tipo categoría que contiene todas las categorías del espacio. |                     |
| **spaces['nombre_del_espacio'].entries**    | Array de objetos de tipo Entry que cumplen con los parámetros de búsqueda.        |                     |
| **spaces['nombre_del_espacio'].name**       | Nombre del espacio.                                                               | ```Espacio Nuevo``` |

## submission

Estos objetos obtienen la información relevante a las Submissions.

| Objeto                                         | Descripción                                                    | Ejemplo                                                    |
|------------------------------------------------|----------------------------------------------------------------|------------------------------------------------------------|
| **submission.status**                          | Estado de la submission (por ejemplo: "pending", "completed"). | ```completed```                                            |
| **submission.progress**                        | Progreso de la submission como porcentaje (sin símbolo).       | ```100```                                                  |
| **submission.assignee**                        | Objeto del usuario administrador asigando.                     |  [ver documentación de adminuser](/es/platform/channels/liquid-markup/objects.html#adminuser)                                                          |
| **submission.created_at**                      | Fecha y hora de creación de la submission.                     | ```Tue, 15 Feb 2025 15:14:03 UTC +00:00```                 |
| **submission.updated_at**                      | Fecha y hora de la última actualización de la submission.      | ```Tue, 15 Feb 2025 20:30:10 UTC +00:00```                 |
| **submission.started_at**                      | Fecha y hora en que se inició la submission.                   | ```Tue, 15 Feb 2025 15:14:03 UTC +00:00```                 |
| **submission.completed_at**                    | Fecha y hora en que se completó la submission.                 | ```Tue, 15 Feb 2025 20:30:10 UTC +00:00```                 |
| **submission.due_date**                        | Fecha de vencimiento de la submission.                         | ```Tue, 22 Feb 2025 12:00:00 UTC +00:00```                 |
| **submission.origination**                     | Objeto de la originación.                | [ver documentación de origination](/es/platform/channels/liquid-markup/objects.html#origination)                                                           |
| **submission.url**                             | URL de la página de la submission.                             | ```https://test.modyo.com/new-site/myorigination```        |
| **submission.uuid**                            | Identificador único (UUID) de la submission.                   | ```abcd-1234-5678-0000```                                  |
| **submission.tasks['identificador_del_task']** | Respuestas de tareas para la submission.                       | ```[{"task_id":"t1"}]```                                   |
| **submission.resume_url**                      | URL para reanudar la submission.                               | ```/originations/mi-originacion/submissions/uuid/resume``` |
| **submission.start_info**                      | Información sobre el inicio de la submission.                  | ```{"started_by":"user","at":"2025-02-15"}```              |
| **submission.steps**                           | Steps de la submission.                                        | ```[{"uid"=>"step-1", "name"=>"step 1", "is_completed"=>true, "link"=>"step 1"}{"uid"=>"step-2", "name"=>"step 2", "is_completed"=>false, "link"=>"step 2"}]```                                  |

### step

| Objeto         | Descripción                      | Ejemplo                    |
|----------------|----------------------------------|----------------------------|
| **step.uid**   | Identificador del step.          | ```step-01```              |
| **step.name**  | Nombre del step.                 | ```Información Personal``` |
| **step.tasks** | Lista de objetos de tipo task. | [ver documentación de task](/es/platform/channels/liquid-markup/objects.html#task) |

### task

| Objeto               | Descripción                    | Ejemplo                               |
|----------------------|--------------------------------|---------------------------------------|
| **task.uid**         | Identificador de la task.      | ```task-01```                         |
| **task.step**        | Step al que pertenece la task. |                                       |
| **task.name**        | Nombre de la task.             | ```Ingresa tu información personal``` |
| **task.type**        | Tipo de la task.               | ```user_input```                      |
| **task.description** | Descripción de la task.        | ```Recolecta datos personales```      |

Adicionalmente según el tipo de tarea pueden haber atributos adicionales.

#### user_input_task

| Objeto                     | Descripción                                  | Ejemplo                                                          |
|----------------------------|----------------------------------------------|------------------------------------------------------------------|
| **user_input_task.fields** | Lista los objetos de tipo question. | [ver documentación de question](/es/platform/channels/liquid-markup/objects.html#question) |

#### invitation_task

| Objeto                     | Descripción                                  | Ejemplo                                                          |
|----------------------------|----------------------------------------------|------------------------------------------------------------------|
| **user_input_task.target_tasks** | Lista los objetos de tipo task. | [ver documentación de question](/es/platform/channels/liquid-markup/objects.html#task) |
| **user_input_task.max_invitation** | Número máximo de invitados. | ```12``` |

### Tipos de Respuesta de Tareas

| Objeto                                        | Descripción                                             | Ejemplo                                       |
|-----------------------------------------------|---------------------------------------------------------|-----------------------------------------------|
| **pending_review_task_response.approved**     | Indica si la tarea de revisión fue aprobada.            | ```true```                                    |
| **pending_review_task_response.content**      | Contenido de la revisión.                               | ```Este es el contenido de la revisión```     |
| **code_snippet_task_response.data**           | Contenido del snippet de código (alias de `content`).   | ```{"language":"rb","snippet":"puts 'Hi'"}``` |
| **code_snippet_task_response.completed**      | Indica si la tarea de snippet fue completada.           | ```false```                                   |
| **code_snippet_task_response.content**        | Contenido del snippet de código.                        | ```puts 'Hi'```                               |
| **validation_task_response.validated**        | Indica si la tarea fue validada.                        | ```true```                                    |
| **digital_signature_task_response.signed**    | Indica si la tarea fue firmada digitalmente.            | ```false```                                   |
| **origination_flow_task_response.submission** | Submission asociada a la tarea de flujo de originación. |                                               |

### user_input_task_response

| Objeto                                                              | Descripción                                                  | Ejemplo                                                                                   |
|---------------------------------------------------------------------|--------------------------------------------------------------|-------------------------------------------------------------------------------------------|
| **user_input_task_response.task**                                   | Tarea de entrada de usuario a la que pertenece la respuesta. |                                                                                           |
| **user_input_task_response.fields['identificador_de_la_pregunta']** | Respuestas de la tarea de entrada de usuario.                | ```[{"id":1,"text_field":"John Doe","question":{"id":1,"label":"What is your name?"}}]``` |

## target

Estos drops permiten obtener información de Targets. Los atributos disponibles son:

| Objeto          | Descripción                              | Ejemplo |
|-----------------|------------------------------------------|---------|
| **target.id**   | String con el ID asociado al target.     |         |
| **target.name** | String con el nombre asociado al target. |         |

## type

Usa los objetos de Content Type para obtener información de tus tipos de contenido del módulo Content.

| Objeto           | Descripción                                                                                                            | Ejemplo         |
|------------------|------------------------------------------------------------------------------------------------------------------------|-----------------|
| **type.entries** | Arreglo de objetos de entradas que contiene todas las entradas del tipo.                                               |                 |
| **type.fields**  | Arreglo de objetos de los campos dentro del tipo de contenido seleccionado.                                            |                 |
| **type.entry**   | Objeto de la primera entrada del tipo seleccionado. Esto también es utilizado con entradas de cardinalidad individual. |                 |
| **type.name**    | Nombre del tipo.                                                                                                       | ```TipoNuevo``` |

## user

Usa los objetos de user para obtener información de tus usuarios del módulo Customers.

| Objeto                               | Descripción                                                    | Ejemplo                                              |
|--------------------------------------|----------------------------------------------------------------|------------------------------------------------------|
| **user.access_token**                | El access token del usuario.                                   | ```Uel7k61VuWhSxX3dJDILB7BtM1I_KQi1wEkV9PtnHLQ```    |
| **user.age**                         | Edad del usuario.                                              | ```39```                                             |
| **user.avatar**                      | Objeto de tipo asset que representa el avatar del usuario.     |                                                      |
| **type.name**                        | Nombre del tipo.                                               | ```508```                                            |
| **user.birth_at**                    | Fecha de nacimiento del usuario.                               | ```1982-09-01```                                     |
| **user.change_password_url**         | URL para cambio de contraseña.                                 | ```https://test.modyo.com/newsite/password/change``` |
| **user.custom_fields**               | Hash con los datos de los campos personalizados del usuario.   | ```{"_UCF_Job"=>"Software Engineer"}```              |
| **user.email**                       | Correo electrónico del usuario.                                | ```ivan@modyo.com```                                 |
| **user.external_access_token**       | External access token del usuario (vacío si no existe).        | ```UEL7K69VUWhSXxX9DjDil...```                       |
| **user.external_user_id**            | ID externo del usuario si existe.                              | ```ext-12345```                                      |
| **user.female_sex_value**            | Valor constante para género femenino.                          | ```1```                                              |
| **user.first_name**                  | Primer nombre del usuario.                                     | ```Ivan```                                           |
| **user.genders**                     | Géneros presentes en la plataforma.                            | ```{:id=>0,:name=>"Male"}{:id=>1,:name=>"Female"}``` |
| **user.generated_password**          | Password auto-generado (true) o creado por el usuario (false). | ```false```                                          |
| **user.id**                          | ID del usuario.                                                | ```16```                                             |
| **user.initials**                    | Iniciales del usuario.                                         | ```IM```                                             |
| **user.last_name**                   | Apellido del usuario.                                          | ```Modyo```                                          |
| **user.male_sex_value**              | Valor constante para género masculino.                         | ```0```                                              |
| **user.member_since**                | Fecha desde la cual el usuario es miembro.                     | ```2021-11-23 18:25:07 UTC```                        |
| **user.name**                        | Nombre completo del usuario.                                   | ```Ivan Modyo Gonzalez```                            |
| **user.notifications**               | Array de objetos notification.                                 |                                                      |
| **user.profile_url**                 | URL del perfil del usuario.                                    | ```https://test.modyo.com/realms/default/profile```  |
| **user.sex**                         | Valor del género configurado para el usuario.                  | ```0```                                              |
| **user.submissions**                 | Array de objetos submission.                                   |                                                      |
| **user.segments**                    | Array de objetos segment.                                      |                                                      |
| **user.phone**                       | Número telefónico del usuario.                                 | ```+56 9 5555 5555```                                |
| **user.responses**                   | Colección de objetos form_response.                            | ```[{"name":"Onboarding"}]```                        |
| **user.segment_names**               | Array de nombres de segmentos.                                 | ```["vip","beta"]```                                 |
| **user.target_names**                | Array de nombres de audiencias objetivo.                       | ```["retail","premium"]```                           |
| **user.targets**                     | Array de objetos de audiencia objetivo.                        | ```[{"name":"retail"}]```                            |
| **user.realm_default_avatar**        | Avatar por defecto del realm (asset).                          |                                                      |
| **user.non_binary_sex_value**        | Valor constante para género no binario.                        | ```4```                                              |
| **user.other_sex_value**             | Valor constante para género otro.                              | ```5```                                              |
| **user.prefer_not_to_say_sex_value** | Valor constante para género "prefiere no decir".               | ```6```                                              |
| **user.current_login_at**            | Timestamp del login actual.                                    | ```2025-10-21 11:00:00 UTC```                        |
| **user.current_login_ip**            | IP utilizada en el login actual.                               | ```203.0.113.10```                                   |
| **user.last_login_at**               | Timestamp del login previo.                                    | ```2025-10-19 09:30:01 UTC```                        |
| **user.last_login_ip**               | IP del login previo.                                           | ```198.51.100.7```                                   |
| **user.undefined_sex_value**         | Valor constante para género indefinido.                        | ```3```                                              |
| **user.unread_notifications**        | Array de objetos notification no leídas.                       |                                                      |
| **user.unread_notifications_count**  | Conteo de notificaciones no leídas.                            | ```2```                                              |
| **user.username**                    | Username del usuario.                                          | ```ivan@modyo.com```                                 |
| **user.uuid**                        | UUID del usuario.                                              | ```cdc7f0e2-b5c3-4b92-aa34-962ffa0bi572```           |
| **user.realm_uid**                   | Realm del usuario.                                             | ```my-realm```                                       |

## user_agent

Usa los objetos de user agent para obtener información del agente del navegador web. 

:::warning Sitios públicos
No aplica para sitios públicos, ya que en estos casos las respuestas del servidor se sirven desde un caché.
:::

| Objeto                          | Descripción                                                                            | Ejemplo      |
|---------------------------------|----------------------------------------------------------------------------------------|--------------|
| **user_agent.agent**            | Un string con el tipo de agente que está corriendo.                                    |              |
| **user_agent.as_json**          | Un string en formato JSON con toda la configuración del agente corriendo.              |              |
| **user_agent.browser**          | Un string con el nombre del navegador para el agente.                                  |              |
| **user_agent.browser_version**  | Un string con la versión del navegador para el agente.                                 |              |
| **user_agent.is_modyo_shell**   | Boolean que determina si el agente está siendo gestionado por una aplicación de Modyo. |              |
| **user_agent.platform**         | Un string con la versión del sistema operativo del agente.                             |              |
| **user_agent.platform_version** | Versión del sistema operativo/plataforma del usuario.                                  | ```"14.7"``` |

## widget

Estos objetos obtienen la información relevante a los Widgets.

| Objeto                       | Descripción                                                | Ejemplo                                                     |
|------------------------------|------------------------------------------------------------|-------------------------------------------------------------|
| **widget.cache_key**         | La key del cache asociada al widget.                       | ```widgets/content_list_widgets/506-20220215151403000000``` |
| **widget.created_at**        | La fecha de creación del widget.                           | ```Tue, 15 Feb 2022 15:14:03 UTC +00:00```                  |
| **widget.id**                | El ID asociado al widget respectivo.                       | ```506```                                                   |
| **widget.resolve_type**      | El tipo del widget con underscore.                         | ```content_list_widget```                                   |
| **widget.title**             | El título del widget.                                      | ```Content list```                                          |
| **widget.css_class**         | La clase de css asociado al widget.                        | ```content-list-widget```                                   |
| **widget.name**              | El nombre del widget.                                      | ```Content list```                                          |
| **widget.type**              | El tipo del widget.                                        | ```content-list```                                          |
| **widget.use_default_title** | Booleano indicando si el widget usa el titulo por defecto. | ```false```                                                 |
| **widget.wid**               | El wid del widget.                                         | ```63ae60e2-d152-4c70-a5b0-ffa9916162e3```                  |
| **widget.width**             | El ancho configurado en el widget.                         | ```full```                                                  |

### content_list_widget

| Objeto                                 | Descripción                                             | Ejemplo                                                                                          |
|----------------------------------------|---------------------------------------------------------|--------------------------------------------------------------------------------------------------|
| **content_list_widget.context_params** | Los parametros de contexto asociado al widget.          | ```{:page=>1, :per_page=>10, :account=>#account_object, :user=>nil, :version_type=>:currents}``` |
| **content_list_widget.entries**        | Arreglo de Objetos de tipo Entries asociadas al widget. |                                                                                                  |
| **content_list_widget.show_caption**   | Booleano si la opción de show caption está activa.      | ```true```                                                                                       |
| **content_list_widget.space_id**       | El id del Espacio asociado al widget.                   | ```5```                                                                                          |
| **content_list_widget.type_uid**       | El uid del type asociado al widget.                     | ```the-new-type```                                                                               |

### custom_widget

| Objeto                         | Descripción                                                                   | Ejemplo                                                                |
|--------------------------------|-------------------------------------------------------------------------------|------------------------------------------------------------------------|
| **custom_widget.manager_uuid** | El uuid del custom widget.                                                    | ```a6090e3f-1d46-44e3-885c-14971ca8fc27```                             |
| **custom_widget.sync**         | Boolean que determina si la carga es sincrónica (true) o asincrónica (false). | ```true```                                                             |
| **custom_widget.css**          | Un string con el CSS asociado al widget.                                      |                                                                        |
| **custom_widget.html**         | Un string con el HTML asociado al widget.                                     |                                                                        |
| **custom_widget.js**           | Un string con el JavaScript asociado al widget.                               |                                                                        |
| **custom_widget.version**      | La versión hash del custom widget.                                            | ```a666a9243ea76806e4fcebfcd99650b27f162ff5f9e4c4719ab9e0f5c7d159fe``` |

### rich_text_widget

| Objeto                    | Descripción                   | Ejemplo                                                                                                                                                 |
|---------------------------|-------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------|
| **rich_text_widget.html** | El contenido html del widget. | ```<p><strong><span style=\"color: rgb(216, 55, 98);\">Hello World&nbsp;<span class=\"fr-emoticon fr-deletable\">😃</span>&nbsp;</span></strong></p>``` |

### text_widget

| Objeto               | Descripción                      | Ejemplo          |
|----------------------|----------------------------------|------------------|
| **text_widget.html** | El html asociado al text widget. | ```Hola mundo``` |

## Deprecated Attributes

Los siguientes atributos están deprecados y deben evitarse en nuevo desarrollo. Donde sea posible, usa el reemplazo sugerido.

| Atributo                                         | Reemplazo                     | Notas                                               |
|--------------------------------------------------|-------------------------------|-----------------------------------------------------|
| entry.meta.created_at (directo)                  | entry.meta.created_at         | Usa propiedad anidada en lugar de acceso directo.   |
| entry.meta.updated_at (directo)                  | entry.meta.updated_at         | Usa propiedad anidada en lugar de acceso directo.   |
| entry.meta.published_at (directo)                | entry.meta.published_at       | Usa propiedad anidada en lugar de acceso directo.   |
| entry.meta.unpublished_at (directo)              | entry.meta.unpublished_at     | Usa propiedad anidada en lugar de acceso directo.   |
| entry.meta.slug (directo)                        | entry.meta.slug               | Usa propiedad anidada en lugar de acceso directo.   |
| entry.meta.uuid (directo)                        | entry.meta.uuid               | Usa propiedad anidada en lugar de acceso directo.   |
| entry.meta.private (directo)                     | entry.meta.private            | Usa propiedad anidada en lugar de acceso directo.   |
| location.location                                | location.location_street      | `location` deprecado; usar `location_street`.       |
| widget.uuid                                      | widget.wid                    | `uuid` deprecado; usar `wid`.                       |
| match_path_url                                   | (eliminar)                    | Helper de routing legado eliminado.                 |
| without_category_url                             | entry.url                     | URL sin categoría eliminada.                        |
| location.latitude / longitude (flags deprecadas) | location.latitude / longitude | Flags antiguas reemplazadas por los mismos nombres. |

