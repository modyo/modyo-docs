---
search: true
collapsible: true
sidebarDepth: 3
---

# Drops

También conocido como Objetos o Variables Liquid, Modyo cuenta con drops disponibles para distintos contextos dentro de Modyo Platform para mandar a llamar información dinámicamente. Podrás encontrar drops para los contextos de cuenta, content, channels, y customers.

## Cuenta

Los drops de Cuenta son utilizados principalmente en el contexto de autenticación de cuentas, lo cual significa que pueden ser llamados desde cualquier lugar ya que son considerados de escala global. Los atributos disponibles son:

### account.url

La URL de Modyo Platform, incluyendo el protocolo y sub-dominio.

#### output
```https://test.miModyo.com```

### account.host

El nombre del sub-dominio de Modyo Platform. 

#### output
```test```

### account.google_key

Si existe autenticación con Google, despliega la llave de la credencial, de lo contrario despliega vacío (void).

#### output
```AIzaSyDmrYmbFpzqdIxHycHbgtJrs9lhKOfggEE```

## Espacio

Despliega contenido dinámico creado en tus espacios desde cualquier parte de tu sitio. En este objeto tienes acceso a toda información pertinente a las entradas, los tipos de contenido, y el gestor de archivos. Los atributos disponibles son:

### [space.entries](#entrada)

Arreglo de objetos de entradas que contiene todas las entradas del espacio.

### [space.types](#tipo)

Arreglo de objetos de tipos de contenido que contiene todos los tipos del espacio.

### space.name

El nombre del espacio.

#### output
```Espacio Nuevo```

## Tipo

### [type.entries](#entrada)

Arreglo de objetos de entradas que contiene todas las entradas del tipo.

### [type.fields](#campo)

Arreglo de objectos de los campos dentro del tipo de contenido seleccionado.

### [type.entry](#entrada)

Objeto de la primera entrada del tipo seleccionado. Esto también es utilizado con entradas de cardinalidad individual.

### type.name

Nombre del tipo.

#### output
```TipoNuevo```

## Entrada

Obtén toda la información pertinente a las entradas con este drop.

### entry.space

El nombre del espacio asociado a la entry.

#### output
```espacio1```

### entry.category

La ruta de la categoría de esta entrada.

#### output
```category-1/category-2```

El espacio de esta entrada.

### entry.category_name

El nombre de la categoría de esta entrada.

#### output
```category 2```

### entry.category_slug

El slug de la categoría de esta entrada.
#### output
```category-2```

### entry.type

El tipo de la entrada.
#### output
```type2```

### entry.type_uid

El id único del tipo de la entrada.
#### output
```type2```

### entry.tags

Arreglo de strings de los tags de esta entrada.
#### output
```tag1, tag2```

### entry.account_url
Retorna la url de la cuenta
#### output
```https://test.miModyo.com```

### entry.url

URL canónico de la entrada
#### output
```https://test.miModyo.com/entry```

### [entry.author](#usuario)

El objeto del usuario autor de la entrada

### [entry.meta](#meta)

Retorna objeto del metadata de la entrada. Este objecto tiene los siguientes atributos: uuid, published_at, locale, slug, created_at, updated_at, unpublished_at, private, private

### [entry.fields](#campo)

Array con objetos de los campos de la entrada.

## Campo

Despliega toda la información de los campos de una entrada.

### field.name

Nombre del campo personalizado.
#### output
```Field1```

### field.type

Nombre del type asociado al campo.
#### output
```Type1```

## Ubicación

Objecto del tipo ubicación. Contiene la información pertinente a un punto de geolocalización.

### location.location_street

Nombre de la ubicación como aparece en Google Maps.
#### output
```Main street 3883```

### location.latitude

Latitud del punto de Google Maps.
#### output
```-33.3982607```

### location.longitude

Longitud del punto de Google Maps.
#### output
```-70.6003616```

### location.country
País del punto en Google Maps.

#### output
```Mexico```

### location.administrative_area_#
Información del área administrativa del punto de Google Maps, puede incluir datos como nombre de la ciudad, estado, región, municipio, etc.
#### output
```Jalisco```

## Categoría
Objecto del tipo categoría (Tag). Contiene la información pertinente a las categorías de una entrada.

### category.id
ID de la categoría. 

#### output
```12345```

### category.slug
Slug de la categoría.

#### output
```category-1```

### category.name
Nombre de la categoría.

#### output
```Category 1```

### category.url
URL canónica de la categoría.

#### output
```/category-1```

### category.children
Array de objectos tipo category con todos los hijos de la categoria.

### category.parent

Retorna objecto del tipo category correspondiente a el padre de la categoria.

### category.siblings

Array de objectos tipo category con todos los hijos de la categoria.


### asset.url
### asset.thumbnail_url
### asset.uuid
### asset.data_file_name
### asset.name
### asset.content_type
### asset.title
### asset.alt
### asset.size
### asset.description
### audio_asset.url
### file_asset.url
### file_asset.thumbnail_url
### file_asset.image_thumbnail_url
### file_asset.pdf_thumbnail_url
### file_asset.is_image
### file_asset.is_video
### file_asset.is_audio
### content.file_asset.is_pdf
### content.file_asset.is_another
### content.file_asset.temp_url
### content.video_asset.url
### content.video_asset.thumbnail_url



## Channels
Los drops disponibles para channels son:

```
site:
  - breadcrumb
  - categories
  - csrf_meta_tag
  - url
  - menu_items
  - account_url
  - current_year
  - manifest_url
  - sw_enabled
  - sw_url
  - sw_scope
  - add_parent_breadcrumb
site_search:
  - have_results
  - results
  - have_less_relevant_results
request:
  - user_agent
  - host
  - domain
  - protocol
  - url
  - path
  - interact_url
  - refresh_url
  - comments_url
  - is_app_shell
user_agent:
  - initialize
  - browser
  - browser_version
  - platform
  - platform_version
  - agent
  - is_modyo_shell
page:
  - grid
  - name
  - content
  - title
  - excerpt
  - name
  - url
  - parent
  - description
menu:
  - items
menu_item:
  - label
  - child_items
  - url
  - parameterized_label
  - category
  - position
  - segment
widget:
  - id
  - cache_key
  - type
  - created_at
  - css_class
  - width
  - name
  - use_default_title
  - title
  - resolve_type
  - uuid
  - wid
  - permanent_cache
rich_text_widget:
  - html
custom_widget:
  - manager_uuid
  - version
text_widget:
  - html
content_list_widget:
  - show_caption
  - entries
  - context_params
  - space_id
  - type_uid
grid:
  - id
  - cache_key
  - resolve_type
full_three_cols_grid:
  - main_widgets
  - col1_widgets
  - col2_widgets
  - col3_widgets
side_right_three_cols_grid:
  - main_widgets
  - side_right_widgets
  - col1_widgets
  - col2_widgets
  - col3_widgets
side_left_grid:
  - main_widgets
  - side_left_widgets
side_left_one_col_grid:
  - main_widgets
  - side_left_widgets
  - full_widgets
side_right_one_col_grid:
  - main_widgets
  - side_right_widgets
  - full_widgets
full_grid:
  - main_widgets
full_two_cols_grid:
  - main_widgets
  - col1_widgets
  - col2_widgets
side_right_grid:
  - main_widgets
  - side_right_widgets
side_left_three_cols_grid:
  - main_widgets
  - side_left_widgets
  - col1_widgets
  - col2_widgets
  - col3_widgets
```

## Customers
Los drops disponibles para customers son:

```
- user:
  - access_token
  - age
  - avatar
  - birth_at
  - change_password_url
  - custom_fields
  - email
  - external_access_token
  - external_user_id
  - female_sex_value
  - first_name
  - genders
  - generated_password
  - id
  - initials
  - last_name
  - male_sex_value
  - member_since
  - name
  - notifications
  - profile_url
  - sex
  - segment_names
  - targets
  - undefined_sex_value
  - unread_notifications
  - unread_notifications_count
  - username
  - uuid
notification:
  - subject
  - body
  - sent_at
  - url
  - opened
- user_agent:
  - agent
  - browser
  - browser_version
  - initialize
  - is_modyo_shell
  - platform
  - platform_version
- user_session:
  - email
  - password
- segment:
  - id
  - name
- form:
  - slug
- form_response:
  - description
  - name
  - parse_answer
  - parse_answers
  - questions
- question:
  - allow_alternatives
  - alternatives
  - form
  - id
  - label
- alternative:
  - id
  - question
- answer:
  - alternative
  - dynamic_segment_url
  - edit_url
  - id
  - question
  - response
  - text_field
  - type
```
