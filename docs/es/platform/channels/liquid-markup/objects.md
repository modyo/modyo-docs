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

| Objeto | Descripción | Ejemplo |
|---|---|---|
| **account.url** | La URL de Modyo Platform, incluido el protocolo y el subdominio. | ```https://test.modyo.com``` |
| **account.host** | El nombre del subdominio de Modyo Platform. | ```test``` |
| **account.google_key** | Si hay autenticación con Google, devuelve la clave de credencial; de lo contrario, devuelve vacío (void). | ```AIzaSyDmrYmbFpzqdIxHycHbgtJrs9lhKOfggEE``` |

## adminuser

Los administradores de la Cuenta son usuarios con privilegios para realizar cambios a nivel de Cuenta, así como en la configuración de Espacios o Sitios.

| Objeto | Descripción | Ejemplo |
|---|---|---|
| **adminuser.avatar** | Objeto de tipo asset para el avatar del administrador. |  |
| **adminuser.email** | Email del administrador. | ```john.doe@modyo.com``` |
| **adminuser.first_name** | Nombre del administrador. | ```John``` |
| **adminuser.last_name** | Apellido del administrador. | ```Doe``` |
| **adminuser.name** | Nombre completo del administrador. | ```John Doe``` |

## asset

Objeto de tipo asset. Contiene la información relevante de un archivo dentro del [Gestor de Archivos](/es/platform/content/asset-manager).

| Objeto | Descripción | Ejemplo |
|---|---|---|
| **asset.data_file_name** | El nombre del asset. | ```foto.jpg``` |
| **asset.description** | Descripción del archivo, si se ha configurado. | ```Platón usa esta alegoría para explicar cómo es para el filósofo y maestro guiar a las personas al conocimiento``` |
| **asset.title** | El título asociado al asset. | ```Foto``` |
| **asset.uuid** | El uuid del asset. | ```7b1b3f82-c9f5-4c51-87dc-b93fc9918c9c``` |
| **asset.alt** | Texto alternativo asociado al asset, si se ha configurado. | ```El mito de la caverna de Platon``` |
| **asset.alt_text** | Texto alternativo asociado al asset, si se ha configurado. | ```El mito de la caverna de Platon``` |
| **asset.content_type** | Tipo de contenido asociado al asset. | ```image/jpeg``` |
| **asset.name** | El nombre asignado al asset. | ```foto.jpg``` |
| **asset.size** | Tamaño (en bytes) del archivo subido. | ```20959``` |
| **asset.thumbnail_url** | URL del thumbnail del asset. | ```/uploads/7b1b3f82-c9f5-4c51-87dc-b93fc9918c9c/C50x50/foto.jpg``` |
| **asset.url** | URL donde se encuentra el asset. | ```/uploads/7b1b3f82-c9f5-4c51-87dc-b93fc9918c9c/original/foto.jpg``` |

### audio_asset

El objeto de Audio es una subclase que hereda los mismos atributos que Asset. Se puede utilizar `audio_asset` en lugar de `asset`.

Se heredan los siguientes atributos de [Asset](#asset):

`.data_file_name, .description, .title, .uuid, .alt, .alt_text, .content_type, .name, .size, .thumbnail_url, .url`

### file_asset

El objeto de Archivo es una subclase que hereda los mismos atributos que Asset. Se puede utilizar `file_asset` en lugar de `asset`.

Se heredan los siguientes atributos de [Asset](#asset):

`.data_file_name, .description, .title, .uuid, .alt, .alt_text, .content_type, .name, .size, .thumbnail_url, .url`

| Objeto | Descripción | Ejemplo |
|---|---|---|
| **file_asset.url** | La URL del archivo. | ```/uploads/8de5a204-74e6-4d6b-a319-6f7896c09135/original/platon.csv``` |
| **file_asset.thumbnail_url** | La URL del thumb del archivo. | ```/uploads/7b1b3f82-c9f5-4c51-87dc-b93fc9918c9c/C50x50/platon.jpg``` |
| **file_asset.image_thumbnail_url** | La URL del archivo. | ```/uploads/8de5a204-74e6-4d6b-a319-6f7896c09135/C200x200/cave.csv``` |
| **file_asset.is_image?** | booleano que indica si el archivo es una imagen. | ```false``` |
| **file_asset.is_video?** | booleano que indica si el archivo es un video. | ```false``` |
| **file_asset.is_audio?** | booleano que indica si el archivo es un audio. | ```false``` |
| **file_asset.is_pdf?** | booleano que indica si el archivo es un PDF. | ```false``` |
| **file_asset.is_another?** | booleano que indica si el archivo es de otro tipo no especificado. | ```false``` |

### video_asset

El objeto de Video es una subclase que hereda los mismos atributos que Asset. Se puede utilizar `video_asset` en lugar de `asset`.

| Objeto | Descripción | Ejemplo |
|---|---|---|
| **video_asset.url** | La URL del video. | ```/uploads/8de5a204-74e6-4d6b-a319-6f7896c09135/original/caverna.webm``` |
| **video_asset.thumbnail_url** | La URL del thumbnail del video. | ```/uploads/7b1b3f82-c9f5-4c51-87dc-b93fc9918c9c/C50x50/platon.jpg``` |

## category

Objeto de tipo categoría (Tag). Contiene la información relevante de las categorías de una entrada.

| Objeto | Descripción | Ejemplo |
|---|---|---|
| **category.id** | ID de la categoría. | ```12345``` |
| **category.slug** | Slug de la categoría. | ```category-1``` |
| **category.name** | Nombre de la categoría. | ```Category 1``` |
| **category.url** | URL canónica de la categoría. | ```/category-1``` |
| **category.children** | Array de objetos de tipo `category` con todos los hijos de la categoría. |  |
| **category.parent** | Objeto de tipo `category` correspondiente al padre de la categoría. |  |
| **category.siblings** | Array de objetos de tipo `category` con todos los hermanos de la categoría. |  |

## entry

Crea contenido dinámico en tus espacios usando Entradas. En este objeto tienes acceso a toda la información relevante de las entradas. Los atributos disponibles son:

| Objeto | Descripción | Ejemplo |
|---|---|---|
| **entry.space** | Nombre del espacio asociado a la entrada. | ```espacio1``` |
| **entry.category** | Ruta de la categoría de esta entrada. | ```category-1/category-2``` |
| **entry.category_name** | Nombre de la categoría de esta entrada. | ```category 2``` |
| **entry.category_slug** | Slug de la categoría de esta entrada. | ```category-2``` |
| **entry.type** | Tipo de la entrada. | ``type2`` |
| **entry.type_uid** | ID único del tipo de la entrada. | ``type2`` |
| **entry.tags** | Array de strings con los tags de esta entrada. | ```tag1, tag2``` |
| **entry.excerpt** | Extracto asociado a la entrada. | ```Este es el excerpt de una entry muy cool``` |
| **entry.account_url** | URL de la cuenta. | ```https://test.modyo.com``` |
| **entry.url** | URL canónica de la entrada. | ```https://test.modyo.com/entry``` |
| **entry.author** | Objeto del usuario autor de la entrada. |  |
| **entry.meta** | Objeto con los siguientes atributos de metadatos: uuid, published_at, locale, slug, created_at, updated_at, unpublished_at y private. |
| **entry.fields** | Array de objetos con los campos de la entrada. |  |

## field

Muestra toda la información de los campos de una entrada.

| Objeto | Descripción | Ejemplo |
|---|---|---|
| **field.name** | Nombre del campo personalizado. | ```Field1``` |
| **field.type** | Nombre del tipo asociado al campo. | ```Type1``` |

## form

Estos objetos permiten obtener información a través de Liquid para un formulario del módulo Customers.

| Objeto | Descripción | Ejemplo |
|---|---|---|
| **form.slug** | Slug del formulario. | ```el-nuevo-formulario``` |

### alternative

| Objeto | Descripción | Ejemplo |
|---|---|---|
| **alternative.id** | ID de la alternativa. | ```La primera pregunta``` |
| **alternative.question** | Objeto de tipo pregunta. |  |

### answer

| Objeto | Descripción | Ejemplo |
|---|---|---|
| **answer.edit_url** | URL de edición de la respuesta. | ```"https://test.modyo.com/forms/el-nuevo-formulario/edit_answer?question_id=3&answer_id=8"``` |
| **answer.id** | ID de la respuesta. | ```5``` |
| **answer.question** | Objeto de tipo pregunta asociado a la respuesta. |  |
| **answer.response** | Objeto de tipo respuesta asociado a la respuesta. |  |
| **answer.text_field** | Campo de texto asociado a la respuesta. | ```Este es la respuesta en el campo de texto``` |
| **answer.type** | Tipo de respuesta. | ```text_answer``` |

### form_response

| Objeto | Descripción | Ejemplo |
|---|---|---|
| **form_response.description** | Descripción del formulario. | ```Este formulario es el nuevo formulario de los usuarios``` |
| **form_response.name** | Nombre del formulario. | ```El nuevo formulario``` |
| **form_response.questions** | Array con las preguntas del formulario. | ```[{"title"=>"¿Cual es tu puesto de trabajo?", "type"=>"textquestion", "answer"=>"Software developer"}]``` |

### question

Estos objetos permiten obtener información a través de Liquid para las preguntas de un formulario del módulo Customers.

| Objeto | Descripción | Ejemplo |
|---|---|---|
| **question.allow_alternatives?** | booleano que indica si la pregunta acepta alternativas. | ```false``` |
| **question.alternatives** | Array de objetos de tipo alternativa. |  |
| **question.form** | Objeto de tipo formulario. |  |
| **question.id** | devuelve el ID de la pregunta. | ```3``` |
| **question.label** | Etiqueta de la pregunta. | ```La primera pregunta``` |

## grid

Contiene la definición de una Grilla en una Página.


| Objeto | Descripción | Ejemplo |
|---|---|---|
| **grid.id** | ID de la grilla. | ```508``` |
| **grid.cache_key** | Clave de caché asociada a la grilla. | ```layouts/grids/full_grids/508``` |
| **grid.resolve_type** | Tipo de la grilla con underscore. | ```full_grid``` |

### full_grid

Extiende la funcionalidad del objeto Grid y contiene los siguientes atributos adicionales:

| Objeto | Descripción | Ejemplo |
|---|---|---|
| **full_grid.main_widgets** | Array de objetos de tipo widget. |  |

### full_three_cols_grid

Extiende la funcionalidad del objeto Grid y contiene los siguientes atributos adicionales:

| Objeto | Descripción | Ejemplo |
|---|---|---|
| **full_three_cols_grid.main_widgets** | Array de objetos de tipo widget. |  |
| **full_three_cols_grid.col1_widgets** | Array de objetos de tipo widget. |  |
| **full_three_cols_grid.col2_widgets** | Array de objetos de tipo widget. |  |
| **full_three_cols_grid.col3_widgets** | Array de objetos de tipo widget. |  |
| **side_right_three_cols_grid.main_widgets** | Array de objetos de tipo widget. |  |


### full_two_cols_grid

Extiende la funcionalidad del objeto Grid y contiene los siguientes atributos adicionales:

| Objeto | Descripción | Ejemplo |
|---|---|---|
| **full_two_cols_grid.main_widgets** | Array de objetos de tipo widget. |  |
| **full_two_cols_grid.col1_widgets** | Array de objetos de tipo widget. |  |
| **full_two_cols_grid.col2_widgets** | Array de objetos de tipo widget. |  |


### side_left_grid

Extiende la funcionalidad del objeto Grid y contiene los siguientes atributos adicionales:

| Objeto | Descripción | Ejemplo |
|---|---|---|
| **side_left_grid.main_widgets** | Array de objetos de tipo widget. |  |
| **side_left_grid.side_left_widgets** | Array de objetos de tipo widget. |  |


### side_left_one_col_grid

Extiende la funcionalidad del objeto Grid y contiene los siguientes atributos adicionales:

| Objeto | Descripción | Ejemplo |
|---|---|---|
| **side_left_one_col_grid.main_widgets** | Array de objetos de tipo widget. |  |
| **side_left_one_col_grid.side_left_widgets** | Array de objetos de tipo widget. |  |
| **side_left_one_col_grid.full_widgets** | Array de objetos de tipo widget. |  |

### side_left_three_cols_grid

Extiende la funcionalidad del objeto Grid y contiene los siguientes atributos adicionales:

| Objeto | Descripción | Ejemplo |
|---|---|---|
| **side_left_three_cols_grid.main_widgets** | Array de objetos de tipo widget. |  |
| **side_left_three_cols_grid.side_left_widgets** | Array de objetos de tipo widget. |  |
| **side_left_three_cols_grid.col1_widgets** | Array de objetos de tipo widget. |  |
| **side_left_three_cols_grid.col2_widgets** | Array de objetos de tipo widget. |  |
| **side_left_three_cols_grid.col3_widgets** | Array de objetos de tipo widget. |  |

### side_right_grid

Extiende la funcionalidad del objeto Grid y contiene los siguientes atributos adicionales:

| Objeto | Descripción | Ejemplo |
|---|---|---|
| **side_right_grid.main_widgets** | Array de objetos de tipo widget. |  |
| **side_right_grid.side_right_widgets** | Array de objetos de tipo widget. |  |

### side_right_one_col_grid

Extiende la funcionalidad del objeto Grid y contiene los siguientes atributos adicionales:

| Objeto | Descripción | Ejemplo |
|---|---|---|
| **side_right_one_col_grid.main_widgets** | Array de objetos de tipo widget. |  |
| **side_right_one_col_grid.side_right_widgets** | Array de objetos de tipo widget. |  |
| **side_right_one_col_grid.full_widgets** | Array de objetos de tipo widget. |  |


### side_right_three_cols_grid

Extiende la funcionalidad del objeto Grid y contiene los siguientes atributos adicionales:

| Objeto | Descripción | Ejemplo |
|---|---|---|
| **side_right_three_cols_grid.side_right_widgets** | Array de objetos de tipo widget. |  |
| **side_right_three_cols_grid.col1_widgets** | Array de objetos de tipo widget. |  |
| **side_right_three_cols_grid.col2_widgets** | Array de objetos de tipo widget. |  |
| **side_right_three_cols_grid.col3_widgets** | Array de objetos de tipo widget. |  |

## location

Objeto de tipo ubicación. Contiene la información relevante de un punto de geolocalización.

| Objeto | Descripción | Ejemplo |
|---|---|---|
| **location.location_street** | Nombre de la ubicación en Google Maps. | ```Main street 3883``` |
| **location.latitude** | Latitud del punto en Google Maps. | ```-33.3982607``` |
| **location.longitude** | Longitud del punto en Google Maps. | ```-70.6003616``` |

## menu

Objeto de tipo menú. Contiene la información relevante de los ítems de un menú.

| Objeto | Descripción | Ejemplo |
|---|---|---|
| **menu.items** | Array de objetos de tipo `menu_items` asociados a este menú. |  |

### menu_item

| Objeto | Descripción | Ejemplo |
|---|---|---|
| **menu_item.category** | Categoría asociada al ítem de menú. | ```home``` |
| **menu_item.child_items** | Array de objetos de ítems hijos del ítem actual. |  |
| **menu_item.classes** | Clases CSS asociadas a este ítem. | ```mdi, mdi-circle``` |
| **menu_item.description** | Descripción para este ítem. |  |
| **menu_item.label** | Etiqueta del ítem de menú. | ```Home``` |
| **menu_item.parameterized_label** | Etiqueta parametrizada asociada al ítem de menú. | ```home``` |
| **menu_item.position** | Posición asociada al ítem de menú (0 como primera posición). | ```0``` |
| **menu_item.url** | URL asociada al ítem de menú. | ```https://test.modyo.com/newsite/``` |

## notification

Estos objetos permiten obtener información a través de Liquid para las notificaciones del módulo Customers.

| Objeto | Descripción | Ejemplo |
|---|---|---|
| **notification.opened** | booleano que indica si la notificación fue abierta. | ```true``` |
| **notification.sent_at** | Fecha de envío de la notificación. | ```2012-11-16 00:46:40``` |
| **notification.body** | Cuerpo de la notificación. | ```mdi, mdi-circle``` |
| **menu_item.description** | Descripción para este ítem. | ```<p>Este es un mensaje de prueba en las campañas via notificaciones</p>``` |
| **notification.subject** | Asunto de la notificación. | ```Modyo Developers Update``` |
| **notification.url** | URL de la notificación. | ```https://test.modyo.com/profile?notification_id=65345``` |

## order

Estos objetos permiten obtener información a través de Liquid para las órdenes del módulo Commerce.

| Objeto | Descripción | Ejemplo |
|---|---|---|
| **order.created_at** | String con la fecha de creación de la orden. |  |
| **order.current_state** | String con el estado actual de la orden. | ```2012-11-16 00:46:40``` |
| **order.id** | ID de la orden. |  |
| **order.order_items** | Array de objetos de tipo `order_item`. |  |
| **order.payment_info** | Hash con la información de pago de la orden. |  |
| **order.short_uuid** | String con el UUID corto de la orden. |  |
| **order.tax_total** | Float con el monto total de impuestos pagados de la orden. |  |
| **order.total** | Float con el monto total de la orden. |  |
| **order.updated_at** | String con la fecha de última modificación. |  |
| **order.url** | String con el url de la orden. |  |
| **order.uuid** | String con el UUID completo de la orden. |  |
| **order.confirmation_code** | String con el código de confirmación de la orden. |  |
| **order.customer_email** | String con el email del cliente asociado a esta orden. |  |
| **order.customer_name** | String con el nombre completo del cliente asociado. |  |
| **order.order_description** | String con la descripción de la orden. |  |
| **order.order.reference_id** | String con el ID de referencia para esta orden. |  |

### order_item


| Objeto | Descripción | Ejemplo |
|---|---|---|
| **order_item.created_at** | Fecha de creación del ítem de orden. |  |
| **order_item.id** | ID del ítem de orden. |  |
| **order_item.name** | Nombre del ítem de orden. |  |
| **order_item.price** | Precio del ítem de orden. |  |
| **order_item.quantity** | Cantidad de ítems en la orden. |  |
| **order_item.updated_at** | Fecha de última actualización del ítem de orden. |  |

## origination

Estos drops permiten acceder a información de originación en páginas de originación.

| Objeto | Descripción | Ejemplo |
|---|---|---|
| **origination.name** | Nombre de la originación. | ```Mi nueva Originación``` |
| **origination.description** | Descripción de la originación. | ```Proceso de originación para guiar a los clientes desde el registro de información personal hasta la validación de datos bancarios``` |
| **origination.due_value** | (Entero) Valor del período de vencimiento. | ```15``` |
| **origination.due_unit** | Unidad del período de vencimiento. Los valores posibles son days, weeks y months | ```days``` |
| **origination.uid** | UID de la originación. | ```mi-originacion``` |
| **origination.url** | URL de la página de originación. | ```https://test.modyo.com/new-site/myorigination``` |
| **origination.steps['step_uid']** | Step con el UID proporcionado. |  |

## page

Estos objetos son de gran utilidad para crear páginas dinámicas usando Liquid.


| Objeto | Descripción | Ejemplo |
|---|---|---|
| **page.content** | Contenido de la página. | ```Home Main Sectionx Build better digital products to unify your customer experiences and accelerate growth. Welcome to the Minimal theme. This is an HTML widget that you can modify in the Page Builder section. You can also modify the style in the Template Builder section. Go to Modyo Read the docs Create and launch digital products faster Welcome to the Minimal theme. This is an HTML widget that you can modify in the Page Builder section. You can also modify the style in the Template Builder section. Learn more Loren Ipsum dolor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Learn more Loren Ipsum dolor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Learn more Loren Ipsum dolor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Learn more HTML dsfdfdfs customivan Content list Content list newentry 7 Feb, 2022 42838bbc-8ce8-4401-9898-3c0f2590c992 2022-02-08 14:59:31 UTC en newentry 2022-02-07 21:09:18 UTC 2022-02-08 14:59:31 UTC false``` |
| **page.name** | Nombre asociado a la página. | ```Home``` |
| **page.parent** | Objeto de tipo página que es padre de la página; si no existe, devuelve vacío (void). |  |
| **page.url** | URL de la página. | ```https://test.modyo.com/newsite/``` |
| **page.current_path** | Ruta asociada a la página. | ```/examples``` |
| **page.description** | Descripción de la página. | ```Este es la descripcion de una página muy cool``` |
| **page.excerpt** | Extracto asociado a la página. | ```Este es el excerpt de una página muy cool``` |
| **page.grid** | Objeto de tipo grilla asociado a la página. |  |
| **page.meta_tags** | Array de strings con las meta etiquetas asociadas a la página. | ```My, Test, Metatag``` |
| **page.title** | Título asociado a la página. | ```Home``` |

## realm

| Objeto | Descripción | Ejemplo |
|---|---|---|
| **realm.disable_modyo_credentials** | booleano que determina si las credenciales de Modyo están desactivadas. `true` desactiva las credenciales. |  |
| **realm.oauth2_callback_url** | String que determina la URL de callback de OAuth2. |  |
| **realm.oidc_callback_url** | String que determina la URL de callback de OIDC. |  |

## request

Estos drops permiten obtener información al momento de realizar una solicitud (request).

| Objeto | Descripción | Ejemplo |
|---|---|---|
| **request.domain** | Dominio de la solicitud. | ```modyo.com``` |
| **request.host** | Host de la solicitud. | ```test.modyo.com``` |
| **request.protocol** | Protocolo asociado a la solicitud. | ```https://``` |
| **request.user_agent** | Detalles del user agent. | ```mozilla/5.0 (macintosh; intel mac os x 10_15_2) applewebkit/537.36 (khtml, like gecko) chrome/96.0.4664.110 safari/537.36``` |
| **request.comments_url** | URL de comentarios de la solicitud. | ```https://test.modyo.com/newsite/requests/123124/comments``` |
| **request.interact_url** | URL de interacción de la solicitud. | ```https://test.modyo.com/newsite/requests``` |
| **request.is_app_shell?** | booleano que indica si el user agent de la solicitud pertenece a una aplicación de Modyo. | ```false``` |
| **request.path** | Ruta de la solicitud. | ```/newsite/the-new-type/newentry``` |
| **request.refresh_url** | URL de refresco de la solicitud. | ```https://test.modyo.com/newsite/requests/refresh``` |
| **request.url** | URL de la solicitud. | ```https://test.modyo.com/ivansite/the-new-type/newentry``` |

## site

Los objetos de Sitio se utilizan para obtener toda la información de un sitio. Los atributos disponibles son:

| Objeto | Descripción | Ejemplo |
|---|---|---|
| **site.account** | Objeto de tipo Cuenta asociada a este sitio. |  |
| **site.apple_touch_icons** | String con el enlace para el Apple touch icon. |  |
| **site.cache_key** | Clave de caché asociada al sitio. |  |
| **site.description** | String con la descripción del sitio. |  |
| **site.favicon_link** | String con el enlace al favicon. |  |
| **site.host** | String con el host del sitio. |  |
| **site.keywords** | String con todas las palabras clave separadas por coma en el sitio. |  |
| **site.language** | String con el idioma del sitio. |  |
| **site.login_url** | String con la URL para iniciar sesión en el sitio. |  |
| **site.logo** | String con la ubicación del logo para el sitio. |  |
| **site.logout_url** | String con la URL de cierre de sesión del sitio. |  |
| **site.name** | String con el nombre del sitio. |  |
| **site.profile_url** | String con el enlace del perfil para el sitio. |  |
| **site.pwa_icon** | Objeto de tipo Asset que contiene la información del icono PWA. |  |
| **site.search_url** | String con la URL para la barra de búsqueda del sitio. |  |
| **site.tag_manager_id** | String con el ID de Google Tag Manager del sitio. |  |
| **site.tagline** | String con la descripción del tagline del sitio. |  |
| **site.use_pwa_manifest** | booleano que determina si el sitio usa el manifiesto PWA. |  |
| **site.uuid** | String con el UUID del sitio. |  |
| **site.account_url** | String con la URL de la cuenta asociada al sitio. |  |
| **site.breadcrumb** | String con la clase CSS del div de breadcrumb. |  |
| **site.cache_version** | String con la clave de caché de esta versión del sitio. |  |
| **site.csrf_meta_tag** | String con la meta etiqueta CSRF. |  |
| **site.css_path** | String con la ubicación del archivo CSS del sitio. |  |
| **site.current_year** | String con el año actual del sitio. |  |
| **site.js_path** | String con la ubicación del archivo JS del sitio. |  |
| **site.login_enabled** | booleano que determina si el sitio usa login. |  |
| **site.manifest_url** | String con la URL del manifiesto para el sitio. |  |
| **site.meta_tags** | String con las meta etiquetas del sitio separadas por coma. |  |
| **site.originations** | Array de objetos de originación que contiene todas las originaciones con página de originación asociada en el sitio actual. |  |
| **site.root_path** | String con la ubicación raíz del sitio. |  |
| **site.service_worker_enabled** | booleano que determina si el service worker de nivel superior está activado (alias: `sw_enabled`). |  |
| **site.service_worker_scope** | String con el scope del service worker del sitio. |  |
| **site.service_worker_url** | String con la URL del service worker para el sitio. |  |
| **site.url** | String con la URL asociada al sitio. |  |

## sitesearch

Estos drops permiten obtener información del navegador de un sitio.

| Objeto | Descripción | Ejemplo |
|---|---|---|
| **sitesearch.have_results** | booleano que determina si la búsqueda tiene resultados. |  |
| **sitesearch.results** | Objeto de tipo Página que cumple con los parámetros de búsqueda. |  |
| **sitesearch.have_less_relevant_results** | booleano que determina si hay más resultados que exceden el límite máximo. |  |

## space

Muestra contenido dinámico creado en tus espacios desde cualquier parte de tu sitio. En este objeto tienes acceso a toda la información relevante de las entradas, los tipos de contenido y el gestor de archivos. Los atributos disponibles son:

| Objeto | Descripción | Ejemplo |
|---|---|---|
| **spaces['nombre_del_espacio'].categories** | Array de objetos de tipo categoría que contiene todas las categorías del espacio. |  |
| **spaces['nombre_del_espacio'].entries** | Objeto de tipo Página que cumple con los parámetros de búsqueda. |  |
| **space['nombre_del_espacio'].name** | Nombre del espacio. | ```Espacio Nuevo``` |

## submission

Estos objetos obtienen la información relevante a las Respuestas de Origination.

| Objeto | Descripción | Ejemplo |
|---|---|---|
| **submission.status** | El estado de la respuesta. | ```completed``` |
| **submission.progress** | El porcentaje de progreso de completitud de la respuesta. | ```100%``` |
| **submission.assignee** | El Administrador asignado a esta respuesta. |  |
| **submission.created_at** | La fecha en que la respuesta fue creada. | ```Tue, 15 Feb 2025 15:14:03 UTC +00:00``` |
| **submission.updated_at** | La última fecha en que la respuesta fue actualizada. | ```Tue, 15 Feb 2025 20:30:10 UTC +00:00``` |
| **submission.started_at** | La fecha en que la respuesta fue iniciada. | ```Tue, 15 Feb 2025 15:14:03 UTC +00:00``` |
| **submission.completed_at** | La fecha en que la respuesta fue completada. | ```Tue, 15 Feb 2025 20:30:10 UTC +00:00``` |
| **submission.due_date** | La fecha de vencimiento de la respuesta. | ```Tue, 22 Feb 2025 12:00:00 UTC +00:00``` |
| **submission.origination** | Origination de la respuesta. |  |
| **submission.url** | URL de la página de Origination. | ```https://test.modyo.com/new-site/myorigination``` |
| **submission.uuid** | UUID de Origination. | ```abcd-1234-5678-0000``` |
| **submission.tasks['task_uid']** | Respuesta de tarea con el UID proporcionado. Los tipos de respuestas de tareas se describen en la siguiente sección. |  |
| **submission.sequence_id** | Número de secuencia de la respuesta actual. | ```77``` |
| **submission.fields** | Array con los campos almacenados dentro de la respuesta actual. | ```[{"question": {"label": "What's your name?"},"text_field": "Jorge Regula"}]``` |
| **submission.QUESTION_ID** | Al usar el ID de una pregunta específica (ej: submission.123456) se accede directamente a su información. | ```{"question": {"label": "What's your name?"},"text_field": "John Doe"}``` |
| **submission.origination.name** | Nombre de la originación. | ```My Origination``` |
| **submission.origination.steps** | Array con los nombres de los steps en la originación. | ```[{"uid": "step 1"}, {"uid": "step 2"}]``` |
| **submission.origination.tasks** | Array con todos los tasks en la originación y el step al que corresponden. | ```[{"task_id": "67890","name": "Task 1", "step": {"uid": "abcd1234"}}]``` |

## target

Estos drops permiten obtener información de Targets. Los atributos disponibles son:

| Objeto | Descripción | Ejemplo |
|---|---|---|
| **target.id** | String con el ID asociado al target. |  |
| **target.name** | String con el nombre asociado al target. |  |

## type

Usa los objetos de Content Type para obtener información de tus tipos de contenido del módulo Content.

| Objeto | Descripción | Ejemplo |
|---|---|---|
| **type.entries** | Arreglo de objetos de entradas que contiene todas las entradas del tipo. |  |
| **type.fields** | Arreglo de objetos de los campos dentro del tipo de contenido seleccionado. |  |
| **type.entry** | Objeto de la primera entrada del tipo seleccionado. Esto también es utilizado con entradas de cardinalidad individual. |  |
| **type.name** | Nombre del tipo. | ```TipoNuevo``` |

## user

Usa los objetos de user para obtener información de tus usuarios del módulo Customers.

| Objeto | Descripción | Ejemplo |
|---|---|---|
| **user.access_token** | El access token del usuario. | ```Uel7k61VuWhSxX3dJDILB7BtM1I_KQi1wEkV9PtnHLQ``` |
| **user.age** | La edad del usuario | ```39``` |
| **user.avatar** | Objecto del tipo asset que representa el avatar de usuario. |  |
| **type.name** | Nombre del tipo. | ```508``` |
| **user.birth_at** | La fecha de nacimiento del usuario. | ```1982-09-01``` |
| **user.change_password_url** | La URL de cambio de password. | ```https://test.modyo.com/newsite/password/change``` |
| **user.custom_fields** | Hash con los datos de los custom fields del usuario. | ```{"_ucf_job"=>"Software Engineer"}``` |
| **user.email** | El correo electrónico del usuario. | ```ivan@modyo.com``` |
| **user.external_access_token** | El external access token del usuario, en caso de no tener, despliega vacío (void). | ```Uel7k69VuWhSxX9dJDILB7BtM1I_KQipwEkV9PtnHLQ``` |
| **user.external_user_id** | El external user id del usuario en caso de tener uno. | ```aswerr1m@mdaa.com``` |
| **user.female_sex_value** | El valor por defecto cuando el sexo es femenino. | ```1``` |
| **user.first_name** | retorna el primer nombre del usuario. | ```Ivan``` |
| **user.genders** | Los géneros presentes en la plataforma. | ```{:id=>0, :name=>"Male"}{:id=>1, :name=>"Female"}``` |
| **user.generated_password** | booleano que determina si el password fue generado automáticamente (true) o creado por el usuario (false). | ```false``` |
| **user.id** | El id del usuario. | ```16``` |
| **user.initials** | Las iniciales del nombre de usuario. | ```IM``` |
| **user.last_name** | El apellido del del usuario. | ```Modyo``` |
| **user.male_sex_value** | El valor por defecto cuando el sexo es masculino. | ```0``` |
| **user.member_since** | La fecha desde la cual es usuario es miembro del sitio. | ```2021-11-23 18:25:07 UTC``` |
| **user.name** | El nombre completo del usuario. | ```Ivan Modyo Gonzalez``` |
| **user.notifications** | Array de objetos del tipo notification. |  |
| **user.profile_url** | La URL del perfil del usuario. | ```https://test.modyo.com/realms/default/profile``` |
| **user.sex** | El valor del sexo configurado para el usuario. | ```0``` |
| **user.targets** | Array de objetos del tipo target. |  |
| **user.undefined_sex_value** | El valor por defecto cuando el sexo es indefinido. | ```3``` |
| **user.unread_notifications** | Array de objetos del tipo notificación. |  |
| **user.unread_notifications_count** | El conteo de las notificaciones no leídas. | ```2``` |
| **user.username** | El username del usuario. | ```ivan@modyo.com``` |
| **user.uuid** | El uuid del usuario. | ```cdc7f0e2-b5c3-4b92-aa34-962ffa0bi572``` |
| **user.realm_uid** | El reino del usuario. | ```my-realm``` |

## user_agent

Usa los objetos de user agent para obtener información del agente del navegador web. 

:::warning Sitios públicos
No aplica para sitios públicos, ya que en estos casos las respuestas del servidor se sirven desde un caché.
:::

| Objeto | Descripción | Ejemplo |
|---|---|---|
| **user_agent.agent** | Un string con el tipo de agente que está corriendo. |  |
| **user_agent.as_json** | Un string en formato JSON con toda la configuración del agente corriendo. |  |
| **user_agent.browser** | Un string con el nombre del navegador para el agente. |  |
| **user_agent.browser_version** | Un string con la versión del navegador para el agente. |  |
| **user_agent.is_modyo_shell** | Boolean que determina si el agente está siendo gestionado por una aplicación de Modyo |  |
| **user_agent.platform** | Un string con la versión del sistema operativo del agente. |  |

## widget

Estos objetos obtienen la información relevante a los Widgets.

| Objeto | Descripción | Ejemplo |
|---|---|---|
| **widget.cache_key** | La key del cache asociada al widget. | ```widgets/content_list_widgets/506-20220215151403000000``` |
| **widget.created_at** | La fecha de creación del widget. | ```Tue, 15 Feb 2022 15:14:03 UTC +00:00``` |
| **widget.id** | El ID asociado al widget respectivo. | ```506``` |
| **widget.resolve_type** | El tipo del widget con underscore. | ```content_list_widget``` |
| **widget.title** | El título del widget. | ```Content list``` |
| **widget.css_class** | La clase de css asociado al widget. | ```content-list-widget``` |
| **widget.name** | El nombre del widget. | ```Content list``` |
| **widget.type** | El tipo del widget. | ```content-list``` |
| **widget.use_default_title** | booleano indicando si el widget usa el titulo por defecto. | ```false``` |
| **widget.wid** | El wid del widget. | ```63ae60e2-d152-4c70-a5b0-ffa9916162e3``` |
| **widget.width** | El ancho configurado en el widget. | ```full``` |

### content_list_widget

| Objeto | Descripción | Ejemplo |
|---|---|---|
| **content_list_widget.context_params** | Los parametros de contexto asociado al widget. | ```{:page=>1, :per_page=>10, :account=>#account_object, :user=>nil, :version_type=>:currents}``` |
| **content_list_widget.entries** | Arreglo de Objetos de tipo Entries asociadas al widget. |  |
| **content_list_widget.show_caption** | Booleano si la opción de show caption está activa. | ```true``` |
| **content_list_widget.space_id** | El id del Espacio asociado al widget. | ```5``` |
| **content_list_widget.type_uid** | El uid del type asociado al widget. | ```the-new-type``` |

### custom_widget

| Objeto | Descripción | Ejemplo |
|---|---|---|
| **custom_widget.manager_uuid** | El uuid del custom widget. | ```a6090e3f-1d46-44e3-885c-14971ca8fc27``` |
| **custom_widget.sync** | Boolean que determina si la carga es sincrónica (true) o asincrónica (false). | ```true``` |
| **custom_widget.css** | Un string con el CSS asociado al widget. |  |
| **custom_widget.html** | Un string con el HTML asociado al widget. |  |
| **custom_widget.js** | Un string con el JavaScript asociado al widget. |  |
| **custom_widget.version** | La versión hash del custom widget. | ```a666a9243ea76806e4fcebfcd99650b27f162ff5f9e4c4719ab9e0f5c7d159fe``` |

### rich_text_widget

| Objeto | Descripción | Ejemplo |
|---|---|---|
| **rich_text_widget.html** | El contenido html del widget. | ```<p><strong><span style=\"color: rgb(216, 55, 98);\">Hello World&nbsp;<span class=\"fr-emoticon fr-deletable\">😃</span>&nbsp;</span></strong></p>``` |

### text_widget

| Objeto | Descripción | Ejemplo |
|---|---|---|
| **text_widget.html** | El html asociado al text widget. | ```Hola mundo``` |