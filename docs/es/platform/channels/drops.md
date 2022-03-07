---
search: true
collapsible: true
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

### [space.categories](#categoria)

Arreglo de objetos del tipo categoria que contiene todas las categorias del espacio.

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

La url de la cuenta

#### output

```https://test.miModyo.com```

### entry.url

URL canónico de la entrada

#### output

```https://test.miModyo.com/entry```

### [entry.author](#usuario)

El objeto del usuario autor de la entrada

### [entry.meta](#meta)

El objeto del metadata de la entrada. Este objecto tiene los siguientes atributos: uuid, published_at, locale, slug, created_at, updated_at, unpublished_at, private, private

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

El objecto de tipo category correspondiente a el padre de la categoria.

### category.siblings

Array de objectos tipo category con todos los hermanos de la categoria.

## Assets

Objecto del tipo asset. Contiene la información pertinente a un archivo dentro del [gestor de archivos](/es/platform/content/asset-manager).

### asset.url

La URL donde se encuentra el asset.

#### output

```/uploads/7b1b3f82-c9f5-4c51-87dc-b93fc9918c9c/original/foto.jpg```

### asset.thumbnail_url

La URL del thumbnail del asset.

#### output

```/uploads/7b1b3f82-c9f5-4c51-87dc-b93fc9918c9c/C50x50/foto.jpg```

### asset.uuid

El uuid del asset.

#### output

```7b1b3f82-c9f5-4c51-87dc-b93fc9918c9c```

### asset.data_file_name
El nombre de archivo relacionado con el asset.

#### output

```foto.jpg```

### asset.name

El nombre asignado al asset.

#### output
```foto.jpg```

### asset.content_type

El tipo de contenido asociado al asset.

#### output

```image/jpeg```

### asset.title

El título asociado al asset.

#### output

```Foto```

### asset.alt

El alt asociado al asset en caso de haberse configurado uno. 

#### output

```El mito de la caverna de Platon```

### asset.size

El tamaño (en bytes) del archivo subido.

#### output

```20959```

### asset.description

La descripción del archivo en caso de haberse configurado uno.

#### output

```Platón usa esta alegoría para explicar cómo es para el filósofo y maestro guiar a las personas al conocimiento```

### audio_asset.url

La URL del archivo de audio.

#### output

```/uploads/8de5a204-74e6-4d6b-a319-6f7896c09135/original/platon.mp3```

### file_asset.url

La URL del archivo.

#### output

```/uploads/8de5a204-74e6-4d6b-a319-6f7896c09135/original/platon.csv```


### file_asset.thumbnail_url

La URL del thumb del archivo.

#### output

```/uploads/7b1b3f82-c9f5-4c51-87dc-b93fc9918c9c/C50x50/platon.jpg```


### file_asset.image_thumbnail_url

La URL del archivo.

#### output

```/uploads/8de5a204-74e6-4d6b-a319-6f7896c09135/C200x200/cave.csv```

### file_asset.is_image?

Booleano para saber si el archivo es imagen.

#### output

```false```

### file_asset.is_video?

Booleano para saber si el archivo es video.

#### output

```false```

### file_asset.is_audio?
Booleano para saber si el archivo es audio.

#### output

```false```

### file_asset.is_pdf?
Booleano para saber si el archivo es un PDF.

#### output

```false```

### file_asset.is_another?
Booleano para saber si el archivo es de otro tipo no especificado.

#### output

```true```

### file_asset.temp_url
La URL temporal del archivo.

#### output

```/var/folders/vm/fk9_xg_d7qs8xbxj28csw1000000gp/T/e8ca0956-a576-43c0-9f37-2be39cf9660120210602-6475-1lvfh9t```

### video_asset.url

La URL del video.

#### output

```/uploads/8de5a204-74e6-4d6b-a319-6f7896c09135/original/caverna.webm"```

### video_asset.thumbnail_url

La URL del thumb del video.

#### output

```/uploads/7b1b3f82-c9f5-4c51-87dc-b93fc9918c9c/C50x50/platon.jpg```


## Sitio

Obtén toda la información relacionado a sitios usando estos drops:

### site.breadcrumb

El div de clase `breadcrumb` asociado al sitio.

#### output

```sh
<div class="breadcrumb">
          <div class="breadcrumb-inner container">
            <a class="first item-0" href="https://test.miModyo.com/testsite">Home</a>
            <span class="separator">/</span> <span class="last item-1">About Us</span>
          </div>
   </div>
```

### site.url

La URL asociado al sitio.

#### output

```https://test.miModyo.com/newsite```

### site.account_url

La URL de la cuenta asociada al sitio.

#### output

```https://test.miModyo.com```

### site.current_year

El año actual asociado al sitio

#### output

```2022```

### site.manifest_url

La URL del manifiesto.

#### output

```"https://test.miModyo.com/newsite/manifest.json"```

### site.sw_enabled

Booleano para saber si el top level service worker esta activo.

#### output

```false```

### site.sw_url

La URL del service worker si existe, de lo contrario despliega vacío (void).

#### output

```https://test.miModyo.com/newsite/serviceworker.js```

### site.sw_scope

El scope del service worker

#### output

```/newsite```

### site_search.have_results

Booleano para saber si la búsqueda tiene resultados.

#### output

```false```

### site_search.results

Los objectos asociados al resultado de la búsqueda.

### site_search.have_less_relevant_results

Booleano para saber si la búsqueda tiene más resultados excediendo max page.

#### output

```true```

## Request

Estos drops te permiten obtener información al momento de hacer un request. 

### request.user_agent

Los detalles del user agent.

#### output

```mozilla/5.0 (macintosh; intel mac os x 10_15_2) applewebkit/537.36 (khtml, like gecko) chrome/96.0.4664.110 safari/537.36```

### request.host

El host del request.

#### output

```test.miModyo.com```

### request.domain

El dominio del request.

#### output

```miModyo.com```

### request.protocol

El protocolo asociado al request.

#### output

```https://```

### request.url
La URL del request.

#### output

```https://test.miModyo.com/ivansite/the-new-type/newentry```

### request.path

El path del request.

#### output

```/newsite/the-new-type/newentry```

### request.interact_url

La interact URL del request.

#### output

```https://test.miModyo.com/newsite/requests```

### request.refresh_url

La refresh URL del request

#### output

```https://test.miModyo.com/newsite/requests/refresh```

### request.comments_url

La comments URL del request.

#### output

```https://test.miModyo.com/newsite/requests/123124/comments```

### request.is_app_shell?

Booleano para saber si el user agent del request pertenece a una app de Modyo.

#### output

```false```

## User Agent

Estos drops te permiten obtener información del user agent del usuario (en general, se refiere a un web browser).

### user_agent.browser

El browser del user agent.

#### output

```Chrome```

### user_agent.browser_version

La versión del browser.

#### output

```96.0.4664.110```

### user_agent.platform

El sistema operativo donde está corriendo el browser.

#### output
```macOS```

### user_agent.platform_version

La versión del sistema operativo donde esta corriendo el browser.

#### output

```10.15.2```

### user_agent.agent

El tipo de agente que se esta ejecutando.

#### output

```desktop```

### user_agent.is_modyo_shell

Booleano para saber si el user agente se esta ocupando a través de una app de Modyo.

#### output

```desktop```

## Página

Estos drops son de gran utilidad al momento de querer hacer páginas dinámicas usando Liquid. Desde 

### [page.grid](#grilla)

El objecto del tipo grilla asociado a la página.

### page.name

El nombre asociado a la página.

#### output

```Home```

### page.content

El contenido de la página.

#### output

```Home Main Sectionx Build better digital products to unify your customer experiences and accelerate growth. Welcome to the Minimal theme. This is an HTML widget that you can modify in the Page Builder section. You can also modify the style in the Template Builder section. Go to Modyo Read the docs Create and launch digital products faster Welcome to the Minimal theme. This is an HTML widget that you can modify in the Page Builder section. You can also modify the style in the Template Builder section. Learn more Loren Ipsum dolor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Learn more Loren Ipsum dolor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Learn more Loren Ipsum dolor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Learn more HTML dsfdfdfs customivan Content list Content list newentry 7 Feb, 2022 42838bbc-8ce8-4401-9898-3c0f2590c992 2022-02-08 14:59:31 UTC en newentry 2022-02-07 21:09:18 UTC 2022-02-08 14:59:31 UTC false```

### page.title

El título asociado a la página.

#### output

```Home```

### page.excerpt

El excerpt asociado a la página.

#### output

```Este es el excerpt de una página muy cool```

### page.url

La URL de la página.

#### output

```https://test.miModyo.com/newsite/```

### [page.parent](#pagina)

El objecto del tipo página que es padre de la página, de no existir un padre, despliega vacío (void).

### page.description

La descripción de la página.

#### output

```Este es la descripcion de una página muy cool```

## Menú

Estos drops obtienen la información asociada a 

### [menu.items](#item)

Array de objectos de tipo item asociados al menú.

### menu_item.label

El label del menu item.

#### output

```Home```

### menu_item.child_items

Array de los objetos items hijos del item actual.

### menu_item.url

La URL asociada al menu item.

#### output

```https://test.miModyo.com/newsite/```

### menu_item.parameterized_label

El label parametrizado asociado al menu item.

#### output

```home```

### menu_item.category

La categoría asociada al menu item.

#### output

```home```

### menu_item.position

La posición asociada al menu item partiendo del 0 como primera posición.

#### output

```0```

### menu_item.segment

La posición asociada al menu item partiendo del 0 como primera posicion.

#### output

```0```

## Widget

Estos drops obtienen la información relevante a los Widgets.

### widget.id

El ID asociado al widget respectivo.

#### output

```506```

### widget.cache_key

La key del cache asociada al widget.

#### output

```widgets/content_list_widgets/506-20220215151403000000```

### widget.type

El tipo del widget.

#### output

```content-list```

### widget.created_at

La fecha de creación del widget.

#### output

```Tue, 15 Feb 2022 15:14:03 UTC +00:00```

### widget.css_class

La clase de css asociado al widget.

#### output

```content-list-widget```

### widget.width

El ancho configurado en el widget.

#### output

```full```

### widget.name

El nombre del widget.

#### output

```Content list```

### widget.use_default_title

Booleano indicando si el widget usa el titulo por defecto.

#### output

```false```

### widget.title

El título del widget.

#### output

```Content list```

### widget.resolve_type

El tipo del widget con underscore.

#### output

```content_list_widget```

### widget.uuid

El uuid del widget.

#### output

```506```

### widget.wid

El wid del widget.

#### output

```63ae60e2-d152-4c70-a5b0-ffa9916162e3```

### widget.permanent_cache

El wid del widget

#### output

```63ae60e2-d152-4c70-a5b0-ffa9916162e3```

### rich_text_widget.permanent_cache

El contenido html del widget.

#### output

```sh
<p><strong><span style=\"color: rgb(216, 55, 98);\">Hello World&nbsp;<span class=\"fr-emoticon fr-deletable\">😃</span>&nbsp;</span></strong></p>
```
### custom_widget.manager_uuid

El uuid del custom widget.

#### output

```a6090e3f-1d46-44e3-885c-14971ca8fc27```

### custom_widget.version

La versión del custom widget.

#### output

```a666a9243ea76806e4fcebfcd99650b27f162ff5f9e4c4719ab9e0f5c7d159fe```

### text_widget.html

El texto asociado al text widget.

#### output

```Hola mundo```

### content_list_widget.show_caption

Booleano si la opción de show caption esta activa.

#### output

```true```

### [content_list_widget.entries](#entrada)

Arreglo de entries asociadas al widget.

### content_list_widget.context_params

Los parametros de contexto asociado al widget.

#### output

```{:page=>1, :per_page=>10, :account=>#account_object, :user=>nil, :version_type=>:currents}```

### content_list_widget.space_id

El id del space asociado al widget.

#### output

```4```

### content_list_widget.type_uid

El uid del type asociado al widget.

#### output

```the-new-type```

## Grilla

### grid.id

El id del grid.

#### output

```508```

### grid.cache_key

La key del cache asociada al grid.

#### output

```layouts/grids/full_grids/508```

### grid.resolve_type

El tipo del grid con underscore.

#### output

```full_grid```

### [full_three_cols_grid.main_widgets](#widget)

Array de objectos del tipo widget.

### [full_three_cols_grid.col1_widgets](#widget)

Array de objectos del tipo widget.

### [full_three_cols_grid.col2_widgets](#widget)

Array de objectos del tipo widget.

### [full_three_cols_grid.col3_widgets](#widget)

Array de objectos del tipo widget.

### [side_right_three_cols_grid.main_widgets](#widget)

Array de objectos del tipo widget.

### [side_right_three_cols_grid.side_right_widgets](#widget)

Array de objectos del tipo widget.

### [side_right_three_cols_grid.col1_widgets](#widget)

Array de objectos del tipo widget.

### [side_right_three_cols_grid.col2_widgets](#widget)

Array de objectos del tipo widget.

### [side_right_three_cols_grid.col3_widgets](#widget)

Array de objectos del tipo widget.

### [side_left_grid.main_widgets](#widget)

Array de objectos del tipo widget.

### [side_left_grid.side_left_widgets](#widget)

Array de objectos del tipo widget.

### [side_left_one_col_grid.main_widgets](#widget)

Array de objectos del tipo widget.

### [side_left_one_col_grid.side_left_widgets](#widget)

Array de objectos del tipo widget.

### [side_left_one_col_grid.full_widgets](#widget)

Array de objectos del tipo widget.

### [side_right_one_col_grid.main_widgets](#widget)

Array de objectos del tipo widget.

### [side_right_one_col_grid.side_right_widgets](#widget)

Array de objectos del tipo widget.

### [side_right_one_col_grid.full_widgets](#widget)

Array de objectos del tipo widget.

### [full_grid.main_widgets](#widget)

Array de objectos del tipo widget.

### [full_two_cols_grid.main_widgets](#widget)

Array de objectos del tipo widget.

### [full_two_cols_grid.col1_widgets](#widget)

Array de objectos del tipo widget.

### [full_two_cols_grid.col2_widgets](#widget)

Array de objectos del tipo widget.

### [side_right_grid.main_widgets](#widget)

Array de objectos del tipo widget.

### [side_right_grid.side_right_widgets](#widget)

Array de objectos del tipo widget.

### [side_left_three_cols_grid.main_widgets](#widget)

Array de objectos del tipo widget.

### [side_left_three_cols_grid.side_left_widgets](#widget)

Array de objectos del tipo widget.

### [side_left_three_cols_grid.col1_widgets](#widget)

Array de objectos del tipo widget.

### [side_left_three_cols_grid.col2_widgets](#widget)

Array de objectos del tipo widget.

### [side_left_three_cols_grid.col3_widgets](#widget)

Array de objectos del tipo widget.


## Usuario

Usa los drops de user para obtener información de tus usuarios.

### user.access_token

El access token del usuario.

#### output

```Uel7k61VuWhSxX3dJDILB7BtM1I_KQi1wEkV9PtnHLQ```

### user.age

La edad del usuario

#### output

```39```

### [user.avatar](#asset)

Objecto del tipo asset que representa el avatar de usuario.

#### output

```508```

### user.birth_at

La fecha de nacimiento del usuario.

#### output

```1982-09-01```

### user.change_password_url

La URL de cambio de password.

#### output

```https://test.miModyo.com/newsite/password/change```

### user.custom_fields

Hash con los datos de los custom fields del usuario.

#### output

```{"_ucf_job"=>"Software Engineer"}```

### user.email

El correo electrónico del usuario.

#### output

```ivan@modyo.com```

### user.external_access_token

El external access token del usuario, en caso de no tener, despliega vacío (void).

#### output

```Uel7k69VuWhSxX9dJDILB7BtM1I_KQipwEkV9PtnHLQ```

### user.external_user_id

El external user id del usuario en caso de tener uno.

#### output

```aswerr1m@mdaa.com```

### user.female_sex_value

El valor por defecto cuando el sexo es femenino.

#### output

```1```

### user.first_name

Retorna el primer nombre del usuario.

#### output

```Ivan```

### user.genders

Los géneros presentes en la plataforma.

#### output

```{:id=>0, :name=>"Male"}{:id=>1, :name=>"Female"}```

### user.generated_password

Boolenano que determina si el password fue generado automáticamente (true) o creado por el usuario (false).

#### output

```false```

### user.id

El id del usuario.

#### output

```16```

### user.initials

Las iniciales del nombre de usuario.

#### output

```IM```

### user.last_name

El apellido del usuario.

#### output

```Modyo```

### user.male_sex_value

El valor por defecto cuando el sexo es masculino.

#### output

```0```

### user.member_since

La fecha desde la cual es usuario es miembro del sitio.

#### output

```2021-11-23 18:25:07 UTC```

### user.name

El nombre completo del usuario.

#### output

```Ivan Modyo Gonzalez```

### [user.notifications](#notificacion)

Array de objectos del tipo notification.

### user.profile_url

La URL del perfil del usuario.

#### output

```https://test.miModyo.com/realms/default/profile```

### user.sex

El valor del sexo configurado para el usuario.

#### output

```0```


### [user.targets](#target)

Array de objectos del tipo target.

### user.undefined_sex_value

El valor por defecto cuando el sexo es indefinido.

#### output

```3```

### [user.unread_notifications](#notificacion)

Array de objectos del tipo notificación.

### user.unread_notifications_count

El conteo de las notificaciones no leídas.

#### output

```2```

### user.username

El username del usuario.

#### output

```ivan@modyo.com```

### user.uuid

El uuid del usuario.

#### output

```cdc7f0e2-b5c3-4b92-aa34-962ffa0bi572```

## Notificación

### notification.subject

El subject de la notificación.

#### output

```Modyo Developers Update```

### notification.body

El body de la notificación.

#### output

```sh
<p>Este es un mensaje de prueba en las campañas via notificaciones</p>
```
### notification.sent_at

La fecha de envío de la notificación.

#### output

```2012-11-16 00:46:40```

### notification.url

La url de la notificación.

#### output

```https://test.miModyo.com/profile?notification_id=65345```

### notification.opened

Boolean si la notificación fue abierta o no.

#### output

```true```

## Formulario

### form.slug

El slug del formulario.

#### output

```el-nuevo-formulario```

### form_response.description

La descripción del formulario.

#### output

```Este formulario es el nuevo formulario de los usurios```

### form_response.name

El nombre de formulario.

#### output

```el nuevo formulario```

### form_response.questions

Las preguntas del formulario.

#### output

``` [{"title"=>"¿Cual es tu puesto de trabajo?", "type"=>"textquestion", "answer"=>"Software developer"}] ```

## Pregunta

### question.allow_alternatives?

Booleano para verificar si la pregunta acepta alternativas.

#### output

```false```

### [question.alternatives](#alternativas)

Array con objectos del tipo alternativas.

### question.allow_alternatives?

Booleano para verificar si la pregunta acepta alternativas.

#### output

```false```

### [question.form](#formulario)

Objecto del tipo formulario.

### question.id

Retorna el id de la pregunta.

#### output

```3```

### question.label

El label de la pregunta.

#### output

```La primera pregunta```

## Alternativa

### alternative.id

El id de la alternativa.

#### output

```La primera pregunta```

### [alternative.question](#pregunta)

Objeto del tipo pregunta.

## Respuesta

### answer.edit_url

La URL de edición de la respuesta.

#### output

```"https://test.miModyo.com/forms/el-nuevo-formulario/edit_answer?question_id=3&answer_id=8"```

### answer.id

El id de la respuesta.

#### output

```5```

### [answer.question](#respuesta)

Objecto del tipo pregunta asociado a la respuesta.

### answer.response

Objecto del tipo response asociado a la respuesta.

#### output

```La primera pregunta```

### answer.text_field

El campo de texto asociado a la respuesta.

#### output

```Este es la respuesta en el campo de texto```

### answer.type

El tipo de respuesta.

#### output

```text_answer```

## Reino

### realm.disable_modyo_credentials

Booleano que determina si las credenciales de Modyo están deshabilitadas.

#### output

```false```

### realm.oauth2_callback_url

La URL de callback de oauth2.

#### output

```"https://test.miModyo.com/realms/default/auth/oauth2/authorize"```

### realm.oidc_callback_url

La URL de callback de OIDC.

#### output

```https://test.miModyo.com/realms/default/auth/openidc/callback```






