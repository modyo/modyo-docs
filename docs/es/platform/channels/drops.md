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

Despliega la URL de Modyo Platform, incluyendo el protocolo y sub-dominio. **(E.g. https://test.miModyo.com)**

### account.host

Despliega el nombre del sub-dominio de Modyo Platform. **(E.g. test)**

### account.disable_modyo_credentials

Deshabilita el uso de credenciales de autenticación por parte de Modyo para la página en donde se manda a llamar.

### account.google_key

Si existe autenticación con Google, despliega la llave de la credencial, de lo contrario despliega vacío (void). **(E.g AIzaSyDmuYmbFpzTdIxHycHbatJrb9ahKOfggEE)**

### account.oauth2_callback_url

Si existe autenticación con OAuth 2.0, despliega la URL de retorno, de lo contrario despliega vacío **(void). (E.g https://test.miModyo.com/home)**

### account.oidc_callback_url

Si existe autenticación con OIDC, despliega la URL de retorno, de lo contrario despliega vacío **(void). (E.g https://test.miModyo.com/home)**



## Content

Despliega contenido dinámico creado en Content desde cualquier parte de tu sitio. En este objeto tienes acceso a toda información pertinente a las entradas y gestor de archivos. Los atributos disponibles son:

### content.space.entries

Arreglo de strings que contiene todas las entradas del espacio.

### content.space.types

Arreglo de strings que contiene todos los tipos del espacio.

### content.space.name

Nombre del espacio.

### content.type.entries

Arreglo de strings que contiene todas las entradas del tipo.

### content.type.fields

Arreglo de strings que contiene todos los campos del tipo.

### content.type.name

Nombre del tipo.

### content.entry

Objeto de la entrada. Contiene la información pertinente a esta entrada. También puedes encontrar esta información desde la vista previa en Content o desde la API.

```json
{
  "meta": {
    "uuid": "a1adb530-43c2-4c5c-9e72-891cc26a6fdb",
    "space": "mytest",
    "name": "helloworld",
    "slug": "helloworld",
    "type": "mytype",
    "category": null,
    "category_slug": null,
    "category_name": null,
    "updated_at": "2021-08-04T01:35:54.000-03:00",
    "created_at": "2021-08-04T01:26:19.000-03:00",
    "published_at": "2021-08-04T01:34:29.000-03:00",
    "unpublished_at": null,
    "tags": [],
    "available_locales": [
      "en"
    ],
    "locale": "en",
    "targets": [],
    "private": false,
    "version_type": "editable",
    "author": {}
  }
}
``` 

### content.entry.space

El espacio de esta entrada.

### content.entry.category

La ruta de la categoría de esta entrada.

### content.entry.category_name

El nombre de la categoría de esta entrada.

### content.entry.category_slug

El slug de la categoría de esta entrada.

### content.entry.type

El tipo de la entrada.

### content.entry.type_uid

El id único del tipo de la entrada.

### content.entry.tags

Arreglo de strings de los tags de esta entrada.

### content.entry.account_url


### content.entry.url

URL canónico de la entrada

### content.entry.author

Autor de la entrada

### content.entry.meta

Objeto del metadata de la entrada.

### content.entry.fields

Campos personalizados de la entrada.

### content.field.name

Nombre del campo personalizado.

### content.field.type

Tipo del campo personalizado.

### content.location.location_street

Nombre de la ubicación como aparece en Google Maps.

### content.location.latitude

Latitud del punto de Google Maps. //Lo encontré como location.lat en APIs

### content.location.longitude

Longitud del punto de Google Maps. //Lo encontré como location.lon en APIs

### content.location.country

País del punto en Google Maps.

### content.location.administrative_area_#

Información del área administrativa del punto de Google Maps, puede incluir datos como nombre de la ciudad, estado, región, municipio, etc.

### content.category.id

ID de la categoría. //No la veo en APIs

### content.category.slug

Slug de la categoría.

### content.category.name

Nombre de la categoría.

### content.category.url

URL canónica de la categoría.

### content.category.children

Objeto de la información de los hijos de la categoría. Menciona nombre, slug, hijos, y ruta.

### content.category.parent
### content.category.siblings
### content.category.products_url
### content.category.support_url
### content.category.networks_url
### content.category.profiles_url
### content.category.posts_url
### content.category.promotions_url
### content.category.albums_url
### content.category.videos_url
### content.category.files_url
### content.category.audio_url
### content.category.places_url

```json
{
  "uuid": "8f0cecf4-16a9-486e-a754-f1d8f8331ed4",
  "url": "https://cloud.modyocdn.com/uploads/8f0cecf4-16a9-486e-a754-f1d8f8331ed4/original01_Aankh_Maare_Remix_-_O2SRK_SongsMp3_Com_.mp3",
  "content_type": "audio/mp3",
  "title": null,
  "description": null,
  "alt_text": null,
  "tags": []
}
```

### content.asset.url
### content.asset.thumbnail_url
### content.asset.uuid
### content.asset.data_file_name
### content.asset.name
### content.asset.content_type
### content.asset.title
### content.asset.alt
### content.asset.size
### content.asset.description
### content.audio_asset.url
### content.file_asset.url
### content.file_asset.thumbnail_url
### content.file_asset.image_thumbnail_url
### content.file_asset.pdf_thumbnail_url
### content.file_asset.is_image
### content.file_asset.is_video
### content.file_asset.is_audio
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
