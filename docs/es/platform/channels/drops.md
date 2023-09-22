---
search: true
collapsible: true
sidebarDepth: 3
---

# Drops

También conocido como Objetos o Variables Liquid, Modyo cuenta con drops disponibles para distintos contextos dentro de Modyo Platform para mandar a llamar información dinámicamente. Podrás encontrar drops para los contextos de cuenta, content, channels, y customers.

## Cuenta

Los drops de Cuenta son utilizados principalmente en el contexto de autenticación de cuentas, lo cual significa que pueden ser llamados desde cualquier lugar ya que son considerados de escala global. Los atributos disponibles son:

| Descripción  | Ejemplo  |
|---|---|
| **account.url** La URL de Modyo Platform, incluyendo el protocolo y sub-dominio. | ```https://test.miModyo.com``` |
|  **account.host** El nombre del sub-dominio de Modyo Platform.  | ```test``` |
| **account.google_key** Si existe autenticación con Google, despliega la llave de la credencial, de lo contrario despliega vacío (void).  | ```AIzaSyDmrYmbFpzqdIxHycHbgtJrs9lhKOfggEE``` |

## Administrador

Los administradores de la Cuenta son aquellos usuarios con privilegios de hacer cambios a nivel Cuenta además de los cambios a la configuración de Espacios o Sitios.

| Descripción  | Ejemplo  |
|---|---|
| **[adminuser.avatar](#asset)** Objeto de tipo asset para el avatar del administrador. |  |
|  **adminuser.email** Email del administrador.  | ```john.doe@modyo.com ``` |
| **adminuser.first_name** Nombre del administrador.  | ```John``` |
| **adminuser.last_name** Apellido del administrador. | ```Doe``` |
| **adminuser.name** Nombre completo del administrador. | ```John Doe``` |

## Asset

Objecto del tipo asset. Contiene la información pertinente a un archivo dentro del [Gestor de Archivos](/es/platform/content/asset-manager).

| Descripción  | Ejemplo  |
|---|---|
| **asset.data_file_name** El nombre del asset. | ```foto.jpg``` |
|  **asset.description** La descripción del archivo en caso de haberse configurado uno.  | ```Platón usa esta alegoría para explicar cómo es para el filósofo y maestro guiar a las personas al conocimiento``` |
| **asset.title** El título asociado al asset.  | ```Foto``` |
| **asset.uuid** El uuid del asset. | ```7b1b3f82-c9f5-4c51-87dc-b93fc9918c9c``` |
| **asset.alt** El alt asociado al asset en caso de haberse configurado uno.  | ```El mito de la caverna de Platon``` |
| **asset.alt_text** El alt asociado al asset en caso de haberse configurado uno.  | ```El mito de la caverna de Platon``` |
| **asset.content_type** El tipo de contenido asociado al asset. | ```image/jpeg``` |
| **asset.name** El nombre asignado al asset. | ```foto.jpg``` |
| **asset.size** El tamaño (en bytes) del archivo subido. | ```20959``` |
| **asset.thumbnail_url** La URL del thumbnail del asset. | ```/uploads/7b1b3f82-c9f5-4c51-87dc-b93fc9918c9c/C50x50/foto.jpg``` |
| **asset.url** La URL donde se encuentra el asset. | ```/uploads/7b1b3f82-c9f5-4c51-87dc-b93fc9918c9c/original/foto.jpg``` |

### Audio

El drop de Audio es una subclase que hereda los mismos atributos que Asset. Se puede utilizar **audio_asset** y reemplazarlo en lugar de asset.

Se heredan los siguientes atributos de [Asset](#asset):

`.data_file_name, .description, .title, .uuid, .alt, .alt_text, .content_type, .name, .size, .thumbnail_url, .url`

### Archivo

El drop de Archivo es una subclase que hereda los mismos atributos que Asset. Se puede utilizar **file_asset** y reemplazarlo en lugar de asset.

Se heredan los siguientes atributos de [Asset](#asset):

`.data_file_name, .description, .title, .uuid, .alt, .alt_text, .content_type, .name, .size, .thumbnail_url, .url`

| Descripción  | Ejemplo  |
|---|---|
| **file_asset.url** La URL del archivo. | ```/uploads/8de5a204-74e6-4d6b-a319-6f7896c09135/original/platon.csv``` |
| **file_asset.thumbnail_url** La URL del thumb del archivo. | ```/uploads/7b1b3f82-c9f5-4c51-87dc-b93fc9918c9c/C50x50/platon.jpg``` |
| **file_asset.image_thumbnail_url** La URL del archivo. | ```/uploads/8de5a204-74e6-4d6b-a319-6f7896c09135/C200x200/cave.csv``` |
| **file_asset.is_image?** Booleano para saber si el archivo es imagen. | ```false``` |
| **file_asset.is_video?** Booleano para saber si el archivo es video. | ```false``` |
| **file_asset.is_audio?** Booleano para saber si el archivo es audio. | ```false``` |
| **file_asset.is_pdf?** Booleano para saber si el archivo es un PDF. | ```false``` |
| **file_asset.is_another?** Booleano para saber si el archivo es de otro tipo no especificado. | ```false``` |
| **file_asset.temp_url** La URL temporal del archivo. | ```/var/folders/vm/fk9_xg_d7qs8xbxj28csw1000000gp/T/e8ca0956-a576-43c0-9f37-2be39cf9660120210602-6475-1lvfh9t``` |

### Video

El drop de Video es una subclase que hereda los mismos atributos que Asset. Se puede utilizar **video_asset** y reemplazarlo en lugar de asset.

| Descripción  | Ejemplo  |
|---|---|
| **video_asset.url** La URL del video. | ```/uploads/8de5a204-74e6-4d6b-a319-6f7896c09135/original/caverna.webm``` |
| **video_asset.thumbnail_url** La URL del thumbnail del video. | ```/uploads/7b1b3f82-c9f5-4c51-87dc-b93fc9918c9c/C50x50/platon.jpg``` |

## Categoría

Objecto del tipo categoría (Tag). Contiene la información pertinente a las categorías de una entrada.

| Descripción  | Ejemplo  |
|---|---|
| **category.id** ID de la categoría.  | ```12345``` |
| **category.slug** Slug de la categoría. | ```category-1``` |
| **category.name** Nombre de la categoría. | ```Category 1``` |
| **category.url** URL canónica de la categoría. | ```/category-1``` |
| **category.children** Array de objectos tipo category con todos los hijos de la categoria. |  |
| **category.parent** El objecto de tipo category correspondiente a el padre de la categoria. |  |
| **category.siblings** Array de objectos tipo category con todos los hermanos de la categoria. |  |

## Entrada

Crea contenido dinámico en tus espacios usando Entradas. En este objeto tienes acceso a toda información pertinente a las entradas. Los atributos disponibles son:

| Descripción  | Ejemplo  |
|---|---|
| **entry.space** El nombre del espacio asociado a la entry. | ```espacio1``` |
| **entry.category** La ruta de la categoría de esta entrada. | ```category-1/category-2``` |
| **entry.category_name** El nombre de la categoría de esta entrada. | ```category 2``` |
| **entry.category_slug** El slug de la categoría de esta entrada. | ```category-2``` |
| **entry.type** El tipo de la entrada. | ``type2`` |
| **entry.type_uid** El id único del tipo de la entrada. | ``type2`` |
| **entry.tags** Arreglo de strings de los tags de esta entrada. | ```tag1, tag2``` |
| **entry.excerpt** El excerpt asociado a la entry. | ```Este es el excerpt de una entry muy cool``` |
| **entry.account_url** La url de la cuenta. | ```https://test.miModyo.com``` |
| **entry.url** URL canónico de la entrada. | ```https://test.miModyo.com/entry``` |
| **[entry.author](#usuario)** El objeto del usuario autor de la entrada. | ```tag1, tag2``` |
| **entry.meta** El objeto del metadata de la entrada. | Este objecto tiene los siguientes atributos: uuid, published_at, locale, slug, created_at, updated_at, unpublished_at, private, private. |
| **[entry.fields](#campo)** Array con objetos de los campos de la entrada. |  |

## Campo

Despliega toda la información de los campos de una entrada.

| Descripción  | Ejemplo  |
|---|---|
| **field.name** Nombre del campo personalizado.  | ```Field1``` |
| **field.type** Nombre del type asociado al campo. | ```Type1``` |


## Formulario (Form)

Estos drops te permiten obtener información a través de Liquid para un formulario del módulo Customers.

| Descripción  | Ejemplo  |
|---|---|
| **form.slug** El slug del formulario.  | ```el-nuevo-formulario``` |

### Alternative

| Descripción  | Ejemplo  |
|---|---|
| **alternative.id** El id de la alternativa.  | ```La primera pregunta``` |
| **[alternative.question](#question)** Objeto del tipo pregunta.  | |

### Answer

| Descripción  | Ejemplo  |
|---|---|
| **answer.edit_url** La URL de edición de la respuesta.  | ```"https://test.miModyo.com/forms/el-nuevo-formulario/edit_answer?question_id=3&answer_id=8"``` |
| **answer.id** El id de la respuesta.  | ```5``` |
| **[answer.question](#question)** Objecto del tipo pregunta asociado a la respuesta.  |  |
| **[answer.response](#answer)** Objecto del tipo response asociado a la respuesta.  |  |
| **answer.text_field** El campo de texto asociado a la respuesta.  | ```Este es la respuesta en el campo de texto``` |
| **answer.type** El tipo de respuesta.  | ```text_answer``` |

### Response

| Descripción  | Ejemplo  |
|---|---|
| **form_response.description** La descripción del formulario.  | ```Este formulario es el nuevo formulario de los usuarios``` |
| **form_response.name** El nombre de formulario.  | ```El nuevo formulario``` |
| **form_response.questions** Arreglo con las preguntas del formulario.  | ```[{"title"=>"¿Cual es tu puesto de trabajo?", "type"=>"textquestion", "answer"=>"Software developer"}]``` |

### Question

Estos drops te permiten obtener información a través de Liquid para las preguntas de un formulario del módulo Customers.

| Descripción  | Ejemplo  |
|---|---|
| **question.allow_alternatives?** Booleano para verificar si la pregunta acepta alternativas.  | ```false``` |
| **question.alternatives** Array con objectos del tipo alternativas.  | |
| **question.allow_alternatives?** Booleano para verificar si la pregunta acepta alternativas.  | ```false``` |
| **[question.form](#formulario-form)** Objecto del tipo formulario.  | |
| **question.id** Retorna el id de la pregunta.  | ```3``` |
| **question.label** El label de la pregunta. | ```La primera pregunta``` |

## Grilla

Contiene la definición una Grilla en una Página.


| Descripción  | Ejemplo  |
|---|---|
| **grid.id** El id del grid.  | ```508``` |
| **grid.cache_key** La key del cache asociada al grid.  | ```layouts/grids/full_grids/508``` |
| **grid.resolve_type** El tipo del grid con underscore.  | ```full_grid``` |

### Full Grid

Extiende la funcionalidad del drop Grid y adicionalmente contiene los siguientes atributos:

| Descripción  | Ejemplo  |
|---|---|
| **[full_grid.main_widgets](#widget)** Array de objectos del tipo widget.  |  |

### Full Three Column Grid

Extiende la funcionalidad del drop Grid y adicionalmente contiene los siguientes atributos:

| Descripción  | Ejemplo  |
|---|---|
| **[full_three_cols_grid.main_widgets](#widget)** Array de objectos del tipo widget.  | |
| **[full_three_cols_grid.col1_widgets](#widget)** Array de objectos del tipo widget.  | |
| **[full_three_cols_grid.col2_widgets](#widget)** Array de objectos del tipo widget.  | |
| **[full_three_cols_grid.col3_widgets](#widget)** Array de objectos del tipo widget.  | |
| **[side_right_three_cols_grid.main_widgets](#widget)** Array de objectos del tipo widget.  | |


### Full Two Col Grid

Extiende la funcionalidad del drop Grid y adicionalmente contiene los siguientes atributos:

| Descripción  | Ejemplo  |
|---|---|
| **[full_two_cols_grid.main_widgets](#widget)** Array de objectos del tipo widget.  | |
| **[full_two_cols_grid.col1_widgets](#widget)** Array de objectos del tipo widget.  | |
| **[full_two_cols_grid.col2_widgets](#widget)** Array de objectos del tipo widget.  | |


### Side Left Grid

Extiende la funcionalidad del drop Grid y adicionalmente contiene los siguientes atributos:

| Descripción  | Ejemplo  |
|---|---|
| **[side_left_grid.main_widgets](#widget)** Array de objectos del tipo widget.  | |
| **[side_left_grid.side_left_widgets](#widget)** Array de objectos del tipo widget.  | |


### Side Left One Col Grid

Extiende la funcionalidad del drop Grid y adicionalmente contiene los siguientes atributos:

| Descripción  | Ejemplo  |
|---|---|
| **[side_left_one_col_grid.main_widgets](#widget)** Array de objectos del tipo widget.  | |
| **[side_left_one_col_grid.side_left_widgets](#widget)** Array de objectos del tipo widget.  | |
| **[side_left_one_col_grid.full_widgets](#widget)** Array de objectos del tipo widget.  | |

### Side Left Three Col Grid

Extiende la funcionalidad del drop Grid y adicionalmente contiene los siguientes atributos:

| Descripción  | Ejemplo  |
|---|---|
| **[side_left_three_cols_grid.main_widgets](#widget)** Array de objectos del tipo widget.  | |
| **[side_left_three_cols_grid.side_left_widgets](#widget)** Array de objectos del tipo widget.  | |
| **[side_left_three_cols_grid.col1_widgets](#widget)** Array de objectos del tipo widget.  | |
| **[side_left_three_cols_grid.col1_widgets](#widget)** Array de objectos del tipo widget.  | |
| **[side_left_three_cols_grid.col2_widgets](#widget)** Array de objectos del tipo widget.  | |
| **[side_left_three_cols_grid.col3_widgets](#widget)** Array de objectos del tipo widget.  | |

### Side Right Grid

Extiende la funcionalidad del drop Grid y adicionalmente contiene los siguientes atributos:

| Descripción  | Ejemplo  |
|---|---|
| **[side_right_grid.main_widgets](#widget)** Array de objectos del tipo widget.  | |
| **[side_right_grid.side_right_widgets](#widget)** Array de objectos del tipo widget.  | |

### Side Right One Col Grid

Extiende la funcionalidad del drop Grid y adicionalmente contiene los siguientes atributos:

| Descripción  | Ejemplo  |
|---|---|
| **[side_right_one_col_grid.main_widgets](#widget)** Array de objectos del tipo widget.  | |
| **[side_right_one_col_grid.side_right_widgets](#widget)** Array de objectos del tipo widget.  | |
| **[side_right_one_col_grid.full_widgets](#widget)** Array de objectos del tipo widget.  | |


### Side Right Three Col Grid

Extiende la funcionalidad del drop Grid y adicionalmente contiene los siguientes atributos:

| Descripción  | Ejemplo  |
|---|---|
| **[side_right_three_cols_grid.side_right_widgets](#widget)** Array de objectos del tipo widget.  | |
| **[side_right_three_cols_grid.col1_widgets](#widget)** Array de objectos del tipo widget.  | |
| **[side_right_three_cols_grid.col2_widgets](#widget)** Array de objectos del tipo widget.  | |
| **[side_right_three_cols_grid.col3_widgets](#widget)** Array de objectos del tipo widget.  | |


## Ubicación

Objecto del tipo ubicación. Contiene la información pertinente a un punto de geolocalización.

| Descripción  | Ejemplo  |
|---|---|
| **location.location_street** Nombre de la ubicación como aparece en Google Maps.  | ```Main street 3883``` |
| **location.latitude** Latitud del punto de Google Maps.  | ```-33.3982607``` |
| **location.longitude** Longitud del punto de Google Maps.  | ```-70.6003616``` |

## Menú

Objecto del tipo menú. Contiene la información pertinente a los items de un menú.

| Descripción  | Ejemplo  |
|---|---|
| **menu.items** Array de objetos de tipo menu_items asociados a este menú.  |  |

### Menú Items

| Descripción  | Ejemplo  |
|---|---|
| **menu_item.category** La categoría asociada al menu ítem.  | ```home``` |
| **menu_item.child_items** Array de los objetos items hijos del ítem actual.  |  |
| **menu_item.classes** Clases de CSS asociadas a este ítem.  | ```mdi, mdi-circle``` |
| **menu_item.description** La descripción para este ítem.  |  |
| **menu_item.label** El label del menu ítem.  | ```Home``` |
| **menu_item.parameterized_label** El label parametrizado asociado al menu ítem.  | ```home``` |
| **menu_item.position** La posición asociada al menu ítem partiendo del 0 como primera posición.  | ```0``` |
| **menu_item.url** La URL asociada al menu ítem.  | ```https://test.miModyo.com/newsite/``` |

## Notificación

Estos drops te permiten obtener información a través de Liquid para las notificaciones del módulo Customers.

| Descripción  | Ejemplo  |
|---|---|
| **notification.opened** Boolean si la notificación fue abierta o no.  | ```true``` |
| **notification.sent_at** La fecha de envío de la notificación.  | ```2012-11-16 00:46:40``` |
| **notification.body** El body de la notificación.  | ```mdi, mdi-circle``` |
| **menu_item.description** La descripción para este ítem.  | ```<p>Este es un mensaje de prueba en las campañas via notificaciones</p>``` |
| **notification.subject** El subject de la notificación.  | ```Modyo Developers Update``` |
| **notification.url** La url de la notificación.  | ```https://test.miModyo.com/profile?notification_id=65345``` |


# Orden

Estos drops te permiten obtener información a través de Liquid para las órdenes del módulo Commerce.

## Notificación

Estos drops te permiten obtener información a través de Liquid para las notificaciones del módulo Customers.

| Descripción  | Ejemplo  |
|---|---|
| **order.created_at** String con la fecha de la creación de la orden. |  |
| **order.current_state** String con el estado de la orden.  | ```2012-11-16 00:46:40``` |
| **order.id** ID de la orden.  |  |
| **[order.order_items](#item-de-order)** Arreglo de objetos de tipo order_item. |  |
| **order.payment_info** Hash con la información de pago de la orden.  |  |
| **order.short_uuid** String con el short uuid de la orden.  |  |
| **order.tax_total** Float con el monto de impuestos pagados de la orden.  |  |
| **order.total** Float con el monto total de la orden.  |  |
| **order.updated_at** String con la fecha de última modificación.  |  |
| **order.url** String con el url de la orden.  |  |
| **order.uuid** String con el uuid completo de la orden.  |  |
| **order.confirmation_code** String con el código de confirmación de la orden.  |  |
| **order.customer_email** String con el email del cliente asociado a esta orden.  |  |
| **order.customer_name** String con el nombre completo del cliente asociado. |  |
| **order.order_description** String con la descripción de la orden. |  |
| **order.order.reference_id** String con el id de referencia para esta orden. |  |

## Item de Orden


| Descripción  | Ejemplo  |
|---|---|
| **order_item.created_at** Fecha de la creación de la orden. |  |
| **order_item.id** Id del order item.  |  |
| **order_item.name** Nombre del order item.  |  |
| **order_item.price** Precio del order item. |  |
| **order_item.quantity** Cantidad de items en la orden.  |  |
| **order_item.updated_at** Fecha de última actualización del order item.  |  |

## Página

Estos drops son de gran utilidad al momento de querer hacer páginas dinámicas usando Liquid.


| Descripción  | Ejemplo  |
|---|---|
| **page.content** El contenido de la página. | ```Home Main Sectionx Build better digital products to unify your customer experiences and accelerate growth. Welcome to the Minimal theme. This is an HTML widget that you can modify in the Page Builder section. You can also modify the style in the Template Builder section. Go to Modyo Read the docs Create and launch digital products faster Welcome to the Minimal theme. This is an HTML widget that you can modify in the Page Builder section. You can also modify the style in the Template Builder section. Learn more Loren Ipsum dolor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Learn more Loren Ipsum dolor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Learn more Loren Ipsum dolor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Learn more HTML dsfdfdfs customivan Content list Content list newentry 7 Feb, 2022 42838bbc-8ce8-4401-9898-3c0f2590c992 2022-02-08 14:59:31 UTC en newentry 2022-02-07 21:09:18 UTC 2022-02-08 14:59:31 UTC false``` |
| **page.name** El nombre asociado a la página.  | ```Home``` |
| **page.parent** El objecto del tipo página que es padre de la página, de no existir un padre, despliega vacío (void). |  |
| **page.url** La URL de la página. | ```https://test.miModyo.com/newsite/``` |
| **page.current_path** El path asociado a la página.  | ```/examples``` |
| **page.description** La descripción de la página.  | ```Este es la descripcion de una página muy cool``` |
| **page.excerpt** El excerpt asociado a la página.  | ```Este es el excerpt de una página muy cool```
 |
| **[page.grid](#grilla)** El objecto del tipo grilla asociado a la página. |  |
| **page.meta_tags** Arreglo de strings con los meta tags asociados a la página.  | ```My, Test, Metatag``` |
| **page.title** El título asociado a la página.  | ```Home``` |

## Reino

| Descripción  | Ejemplo  |
|---|---|
| **realm.disable_modyo_credentials** Boolean para determinar si las credenciales de Modyo son desactivadas. True desactivará las credenciales. |  |
| **realm.oauth2_callback_url** String que determina el oauth2 callback URL.  |  |
| **realm.oidc_callback_url** Nombre del order item. String para determinar el OIDC callback URL. |  |

## Request

Estos drops te permiten obtener información al momento de hacer un request.

| Descripción  | Ejemplo  |
|---|---|
| **request.domain** El dominio del request. | ```miModyo.com``` |
| **request.host** El host del request.  | ```test.miModyo.com``` |
| **request.protocol** El protocolo asociado al request. | ```https://``` |
| **request.user_agent** Los detalles del user agent. | ```mozilla/5.0 (macintosh; intel mac os x 10_15_2) applewebkit/537.36 (khtml, like gecko) chrome/96.0.4664.110 safari/537.36``` |
| **request.comments_url** Comments URL del request.  | ```https://test.miModyo.com/newsite/requests/123124/comments``` |
| **request.interact_url** La interact URL del request. | ```https://test.miModyo.com/newsite/requests``` |
| **request.is_app_shell?** Booleano para saber si el user agent del request pertenece a una app de Modyo. | ```false``` |
| **request.path** El path del request.  | ```/newsite/the-new-type/newentry``` |
| **request.refresh_url** La refresh URL del request. | ```https://test.miModyo.com/newsite/requests/refresh``` |
| **request.url** La URL del request.  | ```https://test.miModyo.com/ivansite/the-new-type/newentry``` |

## Sitio

Los drops de Sitio son utilizados para obtener toda la información de un sitio. Los atributos disponibles son:

| Descripción  | Ejemplo  |
|---|---|
| **[site.account](#cuenta)** El objeto de tipo Cuenta asociada a este sitio. |  |
| **site.apple_touch_icons** String con la liga para el Apple touch icon.  | |
| **site.cache_key** El cache key asociado al sitio. |  |
| **site.description** Un string con la descripción del sitio.  | |
| **site.favicon_link** Un string con la liga al favicon.|  |
| **site.host** Un string con el host del sitio.  | |
| **site.keywords** Un string con todos los keywords separados por coma en el sitio. |  |
| **site.language** Un string con el lenguaje del sitio.  | |
| **site.login_url** Un string con la URL para hacer login al sitio. |  |
| **site.logo** Un string con la ubicación del logo para el sitio.  | |
| **site.logout_url** Un string con la URL del logout del sitio. |  |
| **site.name** Un string con el nombre del sitio. |  |
| **site.profile_url** Un string con la liga del perfil para el sitio. |  |
| **[site.pwa_icon](#asset)** Objeto de tipo Asset que contiene la información del PWA icon. |  |
| **site.search_url** Un string con la URL para la barra del buscador del sitio. |  |
| **site.tag_manager_id** Un string con el Google Tag Manager ID del sitio. |  |
| **site.tagline** Un string con descripción del tagline del sitio. |  |
| **site.use_pwa_manifest** Boolean que determine si el sitio usa PWA manifest. |  |
| **site.uuid** Un string con el UUID del sitio. |  |
| **site.account_url** Un string con la URL de la cuenta asociada al sitio. |  |
| **site.breadcrumb** Un string con la clase CSS del breadcrumb div. |  |
| **site.cache_version** Un string con el cache key de esta versión del sitio. |  |
| **site.csrf_meta_tag** Un string con el meta tag CSRF. |  |
| **site.css_path** Un string con la ubicación del archivo CSS del sitio. |  |
| **site.current_year** Un string con año en curso del sitio. |  |
| **site.js_path** Un string con la ubicación del archivo JS del sitio. |  |
| **site.login_enabled** Boolean que determina si el sitio usa login.|  |
| **site.manifest_url** Un string con el URL del manifest para el sitio. |  |
| **site.meta_tags** Un string con los meta tags del sitio separados con coma. |  |
| **site.root_path** Un string con la ubicación raíz del sitio. |  |
| **site.service_worker_enabled** Boolean que determina si el top-level service worker está activado (alias: sw_enabled) |  |
| **site.service_worker_scope** Un string con el scope del service worker del sitio.|  |
| **site.service_worker_url** Un string con el URL del service worker para el sitio.
 |  |
| **site.url** Un string con el URL asociado al sitio. |  |

## Navegador de Sitio

Estos drops te permiten obtener información del navegador de un sitio.

| Descripción  | Ejemplo  |
|---|---|
| **sitesearch.have_results** Boolean que determina si la búsqueda tiene resultados. |  |
| **[sitesearch.results](#pagina)** Objeto de tipo Página que cumplen con los parámetros de búsqueda.  | |
| **sitesearch.have_less_relevant_results** Boolean que determina si hay más resultados que exceden el límite máximo de resultados.  | |

## Espacio

Despliega contenido dinámico creado en tus espacios desde cualquier parte de tu sitio. En este objeto tienes acceso a toda información pertinente a las entradas, los tipos de contenido, y el gestor de archivos. Los atributos disponibles son:

| Descripción  | Ejemplo  |
|---|---|
| **[space.categories](#categoria)** Arreglo de objetos del tipo categoria que contiene todas las categorias del espacio. |  |
| **[space.entries](#entrada)** Objeto de tipo Página que cumplen con los parámetros de búsqueda.  | |
| **[space.types](#tipo-de-contenido)** Arreglo de objetos de tipos de contenido que contiene todos los tipos del espacio.  | |
| **space.name** El nombre del espacio.  | ```Espacio Nuevo``` |

## Target

Estos drops te permiten obtener información de Targets. Los atributos disponibles son:

| Descripción  | Ejemplo  |
|---|---|
| **target.id** Un string con el ID asociado al target. |  |
| **target.name** Un string con el nombre asociado al target.  | |

## Tipo de Contenido

Usa los drops de Content Type para obtener información de tus tipos de contenido del módulo Content.

| Descripción  | Ejemplo  |
|---|---|
| **[type.entries](#entrada)** Arreglo de objetos de entradas que contiene todas las entradas del tipo. |  |
| **[type.fields](#campo)** Arreglo de objectos de los campos dentro del tipo de contenido seleccionado.  | |
| **[type.entry](#entrada)** Objeto de la primera entrada del tipo seleccionado. Esto también es utilizado con entradas de cardinalidad individual.  | |
| **type.name** Nombre del tipo.  | ```TipoNuevo``` |


# Usuario

Usa los drops de user para obtener información de tus usuarios del módulo Customers.

| Descripción  | Ejemplo  |
|---|---|
| **user.access_token** El access token del usuario. | ```Uel7k61VuWhSxX3dJDILB7BtM1I_KQi1wEkV9PtnHLQ``` |
| **user.age** La edad del usuario  | ```39``` |
| **[user.avatar](#asset)** Objecto del tipo asset que representa el avatar de usuario.  | |
| **type.name** Nombre del tipo.  | ```508``` |
| **user.birth_at** La fecha de nacimiento del usuario.  | ```1982-09-01``` |
| **user.change_password_url** La URL de cambio de password.  | ```https://test.miModyo.com/newsite/password/change``` |
| **user.custom_fields** Hash con los datos de los custom fields del usuario.  | ```{"_ucf_job"=>"Software Engineer"}``` |
| **user.email** El correo electrónico del usuario.  | ```ivan@modyo.com``` |
| **user.external_access_token** El external access token del usuario, en caso de no tener, despliega vacío (void).  | ```Uel7k69VuWhSxX9dJDILB7BtM1I_KQipwEkV9PtnHLQ``` |
| **user.external_user_id** El external user id del usuario en caso de tener uno.  | ```aswerr1m@mdaa.com``` |
| **user.female_sex_value** El valor por defecto cuando el sexo es femenino.  | ```1``` |
| **user.first_name** Retorna el primer nombre del usuario.  | ```Ivan``` |
| **user.genders** Los géneros presentes en la plataforma.  | ```{:id=>0, :name=>"Male"}{:id=>1, :name=>"Female"}``` |
| **user.generated_password** Boolenano que determina si el password fue generado automáticamente (true) o creado por el usuario (false).  | ```false``` |
| **user.id** El id del usuario.  | ```16``` |
| **user.initials** Las iniciales del nombre de usuario.  | ```IM``` |
| **user.last_name** El apellido del del usuario.  | ```Modyo``` |
| **user.male_sex_value** El valor por defecto cuando el sexo es masculino.  | ```0``` |
| **user.member_since** La fecha desde la cual es usuario es miembro del sitio.  | ```2021-11-23 18:25:07 UTC``` |
| **user.name** El nombre completo del usuario.  | ```Ivan Modyo Gonzalez``` |
| **[user.notifications](#notificacion)** Array de objectos del tipo notification.  |  |
| **user.profile_url** La URL del perfil del usuario.  | ```https://test.miModyo.com/realms/default/profile``` |
| **user.sex** El valor del sexo configurado para el usuario. | ```0``` |
| **[user.targets](#target)** Array de objectos del tipo target.  |  |
| **user.undefined_sex_value** El valor por defecto cuando el sexo es indefinido.  | ```3``` |
| **[user.unread_notifications](#notificacion)** Array de objectos del tipo notificación.  |  |
| **user.unread_notifications_count** El conteo de las notificaciones no leídas.
  | ```2``` |
| **user.username** El username del usuario.  | ```ivan@modyo.com``` |
| **user.uuid** El uuid del usuario.  | ```cdc7f0e2-b5c3-4b92-aa34-962ffa0bi572``` |

## User Agent

Usa los drops de user agent para obtener información del agente del navegador web.

| Descripción  | Ejemplo  |
|---|---|
| **user_agent.agent** Un string con el tipo de agente que está corriendo.  | |
| **user_agent.as_json** Un string en formato JSON con toda la configuración del agente corriendo.  | |
| **user_agent.browser** Un string con el nombre del navegador para el agente.  | |
| **user_agent.browser_version** Un string con la versión del navegador para el agente.  | |
| **user_agent.is_modyo_shell** Boolean que determina si el agente está siendo gestionado por una aplicación de Modyo  | |
| **user_agent.platform** Un string con la versión del sistema operativo del agente.  | |


# Widget

Estos drops obtienen la información relevante a los Widgets.

| Descripción  | Ejemplo  |
|---|---|
| **widget.cache_key** La key del cache asociada al widget.  | ```widgets/content_list_widgets/506-20220215151403000000``` |
| **widget.created_at** La fecha de creación del widget.  | ```Tue, 15 Feb 2022 15:14:03 UTC +00:00``` |
| **widget.id** El ID asociado al widget respectivo.  | ```506``` |
| **widget.resolve_type** El tipo del widget con underscore.  | ```content_list_widget``` |
| **widget.title** El título del widget.  | ```Content list``` |
| **widget.css_class** La clase de css asociado al widget.  | ```content-list-widget``` |
| **widget.name** El nombre del widget.  | ```Content list``` |
| **widget.type** El tipo del widget.  | ```content-list``` |
| **widget.use_default_title** Booleano indicando si el widget usa el titulo por defecto.  | ```false``` |
| **widget.wid** El wid del widget.  | ```63ae60e2-d152-4c70-a5b0-ffa9916162e3``` |
| **widget.width** El ancho configurado en el widget.  | ```full``` |

### Content List Widget

| Descripción  | Ejemplo  |
|---|---|
| **content_list_widget.context_params** Los parametros de contexto asociado al widget.  | ```{:page=>1, :per_page=>10, :account=>#account_object, :user=>nil, :version_type=>:currents}``` |
| **[content_list_widget.entries](#entrada)** Arreglo de Objetos de tipo Entries asociadas al widget.  | |
| **content_list_widget.show_caption** Booleano si la opción de show caption está activa. | ```true``` |
| **content_list_widget.space_id** El id del Espacio asociado al widget. | ```5``` |
| **content_list_widget.type_uid** El uid del type asociado al widget. | ```the-new-type``` |

### Custom Widget

| **custom_widget.manager_uuid** El uuid del custom widget. | ```a6090e3f-1d46-44e3-885c-14971ca8fc27``` |
| **custom_widget.sync** Boolean que determina si la carga es sincrónica (true) o asincrónica (false). | ```true``` |
| **custom_widget.css** Un string con el CSS asociado al widget. |  |
| **custom_widget.html** Un string con el HTML asociado al widget. |  |
| **custom_widget.js** Un string con el JavaScript asociado al widget. |  |
| **custom_widget.version** La versión hash del custom widget. | ```a666a9243ea76806e4fcebfcd99650b27f162ff5f9e4c4719ab9e0f5c7d159fe``` |

### Rich Text Widget

| **rich_text_widget.html** El contenido html del widget. | ```<p><strong><span style=\"color: rgb(216, 55, 98);\">Hello World&nbsp;<span class=\"fr-emoticon fr-deletable\">😃</span>&nbsp;</span></strong></p>``` |


### Text Widget

| **text_widget.html** El html asociado al text widget. | ```Hola mundo``` |







<style>
table, th, td {
  border: 1px solid white;
}
</style>