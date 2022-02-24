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

### space.categories

Arreglo de objetos del tipo categoria que contiene todas las categorias del espacio.

### space.entries
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

## Assets
Objecto del tipo asset. Contiene la información pertinente a un Asset.

### asset.url
Devuelve la url donde se encuentra el asset.
#### output
```/uploads/7b1b3f82-c9f5-4c51-87dc-b93fc9918c9c/original/foto.jpg```

### asset.thumbnail_url
Devuelve la url del thumbnail del asset
#### output
```/uploads/7b1b3f82-c9f5-4c51-87dc-b93fc9918c9c/C50x50/foto.jpg```

### asset.uuid
Devuelve el uuid del asset
#### output
```7b1b3f82-c9f5-4c51-87dc-b93fc9918c9c```

### asset.data_file_name
Retorna el nombre de archivo relacionado con el asset
#### output
```foto.jpg```

### asset.name
Retorna el nombre asignado al  asset
#### output
```foto.jpg```

### asset.content_type
Retorna el tipo de contenido asociado al asset
#### output
```image/jpeg```

### asset.title
Retorna el titulo asociado al asset
#### output
```Foto```

### asset.alt
Retorna el alt asociado al asset en caso de haberse configurado uno. 
#### output
```El mito de la carvena de Platon```

### asset.size
Retorna el tamaño del archivo subido.
#### output
```20959```

### asset.description
Retorna la descripcion del archivo en caso de haberse configurado uno.
#### output
```Platón usa esta alegoría para explicar cómo es para el filósofo y maestro guiar a las personas al conocimiento```

### audio_asset.url
Retorna la url del archivo de audio.
#### output
```/uploads/8de5a204-74e6-4d6b-a319-6f7896c09135/original/platon.mp3```

### file_asset.url
Retorna la url del archivo.
#### output
```/uploads/8de5a204-74e6-4d6b-a319-6f7896c09135/original/platon.csv```


### file_asset.thumbnail_url
Retorna la url del thumb del archivo.
#### output
```/uploads/7b1b3f82-c9f5-4c51-87dc-b93fc9918c9c/C50x50/platon.jpg```


### file_asset.image_thumbnail_url
Retorna la url del archivo
#### output
```/uploads/8de5a204-74e6-4d6b-a319-6f7896c09135/C200x200/cave.csv```

### file_asset.is_image?
Retorna si el archivo es imagen
#### output
```false```

### file_asset.is_video?
Retorna si el archivo es video
#### output
```false```

### file_asset.is_audio?
Retorna si el archivo es audio
#### output
```false```

### file_asset.is_pdf?
Retorna si el archivo es un pdf
#### output
```false```

### file_asset.is_another?
Retorna si el archivo es de otro tipo no especificado
#### output
```true```

### file_asset.temp_url
Retorna la url temporal 
#### output
```/var/folders/vm/fk9_xg_d7qs8xbxj28csw1000000gp/T/e8ca0956-a576-43c0-9f37-2be39cf9660120210602-6475-1lvfh9t```

### video_asset.url
Retorna la url del video
#### output
```/uploads/8de5a204-74e6-4d6b-a319-6f7896c09135/original/caverna.webm"```

### video_asset.thumbnail_url
Retorna la url del thumb del video.
#### output
```/uploads/7b1b3f82-c9f5-4c51-87dc-b93fc9918c9c/C50x50/platon.jpg```


## Channels
Los drops disponibles para channels son:

### site.breadcrumb
Retorna el breadcrumb asociado al sitio
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
Retorna la url asociadoaal sitio
#### output
```https://test.miModyo.com/newsite```

### site.account_url
Retorna la url de la cuenta asociada al sitio
#### output
```https://test.miModyo.com```

### site.current_year
Retorna el año actual asociado al sitio
#### output
```2022```

### site.manifest_url
Retorna la url del manifiesto
#### output
```"https://test.miModyo.com/newsite/manifest.json"```

### site.sw_enabled
Retorna si el top level service worker esta activo
#### output
```false```

### site.sw_url
Retorna la url del service worker
#### output
```https://test.miModyo.com/newsite/serviceworker.js```

### site.sw_scope
Retorna scope del service worker
#### output
```/newsite```

### site_search.have_results
Retorna si la busqueda tiene resultados
#### output
```false```

### site_search.results
Retorna los objectos asociados al resultado de la  busqueda

### site_search.have_less_relevant_results
Returns true if search has less relevant results exceeding max page,
#### output
```true```

### request.user_agent
Retorna los detalles del user agent
#### output
```mozilla/5.0 (macintosh; intel mac os x 10_15_2) applewebkit/537.36 (khtml, like gecko) chrome/96.0.4664.110 safari/537.36```

### request.host
Retorna el host del request
#### output
```test.miModyo.com```

### request.domain
Retorna el dominio del request
#### output
```miModyo.com```

### request.protocol
Retorna el protocolo asociado al request
#### output
```https://```

### request.url
Retorna la url del request
#### output
```https://test.miModyo.com/ivansite/the-new-type/newentry```

### request.path
Retorna el path del request
#### output
```/newsite/the-new-type/newentry```

### request.interact_url
Retorna la interact url del request
#### output
```https://test.miModyo.com/newsite/requests```

### request.refresh_url
Retorna la refresh url del request
#### output
```https://test.miModyo.com/newsite/requests/refresh```

### request.comments_url
Retorna la comments url del request
#### output
```https://test.miModyo.com/newsite/requests/123124/comments```

### request.is_app_shell?
Retorna si el user agent del request pertenece a una app de modyo
#### output
```false```

### user_agent.browser
Retorna browser del user agen
#### output
```Chrome```

### user_agent.browser_version
Retorna la version del browser
#### output
```96.0.4664.110```

### user_agent.browser_version
Retorna la plataforma donde esta corriendo el browser
#### output
```macOS```

### user_agent.platform_version
Retorna la version de la plataforma donde esta corriendo el browser
#### output
```10.15.2```

### user_agent.agent
Retorna el tipo de agente que se esta ejecutando
#### output
```desktop```

### user_agent.is_modyo_shell
Retorna el tipo si el user agente se esta ocupando a través de una app de modyo
#### output
```desktop```

### user_agent.is_modyo_shell
Retorna el tipo si el user agente se esta ocupando a través de una app de modyo
#### output
```desktop```

### page.grid
Retorna un objecto del tipo grid 

### page.name
Retorna el nombre asociado a la pagina
#### output
```Home```

### page.content
Retorna el contenido de la pagina
#### output
```Home Main Sectionx Build better digital products to unify your customer experiences and accelerate growth. Welcome to the Minimal theme. This is an HTML widget that you can modify in the Page Builder section. You can also modify the style in the Template Builder section. Go to Modyo Read the docs Create and launch digital products faster Welcome to the Minimal theme. This is an HTML widget that you can modify in the Page Builder section. You can also modify the style in the Template Builder section. Learn more Loren Ipsum dolor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Learn more Loren Ipsum dolor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Learn more Loren Ipsum dolor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Learn more HTML dsfdfdfs customivan Content list Content list newentry 7 Feb, 2022 42838bbc-8ce8-4401-9898-3c0f2590c992 2022-02-08 14:59:31 UTC en newentry 2022-02-07 21:09:18 UTC 2022-02-08 14:59:31 UTC false```

### page.title
Retorna el titulo asociado a la pagina
#### output
```Home```

### page.excerpt
Retorna el excerpt asociado a la pagina
#### output
```Este es el excerpt de una pagina muy cool```

### page.url
Retorna la url de la pagina
#### output
```https://test.miModyo.com/newsite/```

### page.parent
Retteorna un objecto del tipo page que representa la pagina parent

### page.description
Retorna la descripcion de la pagina
#### output
```Este es el excerpt de una pagina muy cool```

### menu.items
Retorna array de objectos item del menu respectivo

### menu_item.label
Retorna el label del menu item
#### output
```Home```

### menu_item.child_items
Retorna array de los objectos items hijos del item actual

### menu_item.url
Retorna la url asociada al menu item
#### output
```https://test.miModyo.com/newsite/```

### menu_item.parameterized_label
Retorna el label parametrizado asociado al menu item
#### output
```home```

### menu_item.category
Retorna la categoria asociada al menu item
#### output
```home```

### menu_item.position
Retorna la posicion asociada al menu item partiendo del 0 como primera posicion
#### output
```0```

### menu_item.segment
Retorna la posicion asociada al menu item partiendo del 0 como primera posicion
#### output
```0```

### widget.id
Retorna el id asociado al widget respectivo
#### output
```506```

### widget.cache_key
Retorna la key del cache asociada al widget
#### output
```widgets/content_list_widgets/506-20220215151403000000```

### widget.type
Retorna el tipo del widget
#### output
```content-list```

### widget.created_at
Retorna la fecha de creacion del widget
#### output
```Tue, 15 Feb 2022 15:14:03 UTC +00:00```

### widget.css_class
Retorna la clase de css asociado al widget
#### output
```content-list-widget```

### widget.width
Retorna el ancho configurado en el widget
#### output
```full```

### widget.name
Retorna el nombre del widget
#### output
```Content list```

### widget.use_default_title
Retorna un booleano indicando si el widget usa el titulo por deefecto
#### output
```false```

### widget.title
Retorna el titulo del widget
#### output
```Content list```

### widget.resolve_type
Retorna el tipo del widget con underscore
#### output
```content_list_widget```

### widget.uuid
Retorna el id del widget
#### output
```506```

### widget.wid
Retorna el wid del widget
#### output
```63ae60e2-d152-4c70-a5b0-ffa9916162e3```

### widget.permanent_cache
Retorna el wid del widget
#### output
```63ae60e2-d152-4c70-a5b0-ffa9916162e3```

### rich_text_widget.permanent_cache
Retorna el contenido html  del widget
#### output
```sh
<p><strong><span style=\"color: rgb(216, 55, 98);\">Hello World&nbsp;<span class=\"fr-emoticon fr-deletable\">😃</span>&nbsp;</span></strong></p>
```
### custom_widget.manager_uuid
Retorna el uuid del custom widget
#### output
```a6090e3f-1d46-44e3-885c-14971ca8fc27```

### custom_widget.version
Retorna la version del custom widget
#### output
```a666a9243ea76806e4fcebfcd99650b27f162ff5f9e4c4719ab9e0f5c7d159fe```

### text_widget.html
Retorna el texto asociado al text widget
#### output
```Hola mundo```

### content_list_widget.show_caption
Retorna un booleano si la opcion de show caption esta activa
#### output
```true```

### content_list_widget.entries
Retorna un arreglo de entries asociadas al widget
#### output
```true```

### content_list_widget.context_params
Retorna los parametros de contexto asociado al widget
#### output
```{:page=>1, :per_page=>10, :account=>#account_object, :user=>nil, :version_type=>:currents}```

### content_list_widget.space_id
Retorna el id del space asociado al widget
#### output
```4```

### content_list_widget.type_uid
Retorna el uid del type asociado al widget
#### output
```the-new-type```

### grid.id
Retorna el id del grid
#### output
```508```

### grid.cache_key
Retorna la key del cache asociada al grid
#### output
```layouts/grids/full_grids/508```

### grid.resolve_type
Retorna el tipo del grid con underscore
#### output
```full_grid```

### full_three_cols_grid.main_widgets
Retorna un array de objectos del tipo widget

### full_three_cols_grid.col1_widgets
Retorna un array de objectos del tipo widget

### full_three_cols_grid.col2_widgets
Retorna un array de objectos del tipo widget

### full_three_cols_grid.col3_widgets
Retorna un array de objectos del tipo widget

### side_right_three_cols_grid.main_widgets
Retorna un array de objectos del tipo widget

### side_right_three_cols_grid.side_right_widgets
Retorna un array de objectos del tipo widget

### side_right_three_cols_grid.col1_widgets
Retorna un array de objectos del tipo widget

### side_right_three_cols_grid.col2_widgets
Retorna un array de objectos del tipo widget

### side_right_three_cols_grid.col3_widgets
Retorna un array de objectos del tipo widget

### side_left_grid.main_widgets
Retorna un array de objectos del tipo widget

### side_left_grid.side_left_widgets
Retorna un array de objectos del tipo widget

### side_left_one_col_grid.main_widgets
Retorna un array de objectos del tipo widget

### side_left_one_col_grid.side_left_widgets
Retorna un array de objectos del tipo widget

### side_left_one_col_grid.full_widgets
Retorna un array de objectos del tipo widget

### side_right_one_col_grid.main_widgets
Retorna un array de objectos del tipo widget

### side_right_one_col_grid.side_right_widgets
Retorna un array de objectos del tipo widget

### side_right_one_col_grid.full_widgets
Retorna un array de objectos del tipo widget

### full_grid.main_widgets
Retorna un array de objectos del tipo widget

### full_two_cols_grid.main_widgets
Retorna un array de objectos del tipo widget

### full_two_cols_grid.col1_widgets
Retorna un array de objectos del tipo widget

### full_two_cols_grid.col2_widgets
Retorna un array de objectos del tipo widget

### side_right_grid.main_widgets
Retorna un array de objectos del tipo widget

### side_right_grid.side_right_widgets
Retorna un array de objectos del tipo widget

### side_left_three_cols_grid.main_widgets
Retorna un array de objectos del tipo widget

### side_left_three_cols_grid.side_left_widgets
Retorna un array de objectos del tipo widget

### side_left_three_cols_grid.col1_widgets
Retorna un array de objectos del tipo widget

### side_left_three_cols_grid.col2_widgets
Retorna un array de objectos del tipo widget

### side_left_three_cols_grid.col3_widgets
Retorna un array de objectos del tipo widget


## Customers
Los drops disponibles para customers son:

### user.access_token
Retorna el access token del usuario
#### output
```Uel7k61VuWhSxX3dJDILB7BtM1I_KQi1wEkV9PtnHLQ```

### user.age
Retorna la edad del usuario
#### output
```39```

### user.avatar
Retorna un objecto del tipo asset que representa el avatar de usuario
#### output
```508```

### user.birth_at
Retorna la fecha de nacimiento del usuario
#### output
```1982-09-01```

### user.change_password_url
Retorna la url de cambio de password
#### output
```https://test.miModyo.com/newsite/password/change```

### user.custom_fields
Retorna un hash con los datos de los custom fields del usuario
#### output
```{"_ucf_job"=>"Software Engineer"}```

### user.email
Retorna el correo electronico del usuario
#### output
```ivan@modyo.com```

### user.external_access_token
Retorna el external access token del usuario en caso de tener uno
#### output
```Uel7k69VuWhSxX9dJDILB7BtM1I_KQipwEkV9PtnHLQ```

### user.external_user_id
Retorna el external user id del usuario en caso de tener uno
#### output
```aswerr1m@mdaa.com```

### user.female_sex_value
Retorna el valor por defecto cuando el sexo es femenino
#### output
```1```

### user.first_name
Retorna el primer nombre del usuario
#### output
```Ivan```

### user.genders
Retorna los generos presentes en la plataforma
#### output
```{:id=>0, :name=>"Male"}{:id=>1, :name=>"Female"}```

### user.generated_password
Retorna un boolenano que determina si el password fue generado automaticamente (true) o creado por el usuario (false)
#### output
```false```

### user.id
Retorna el id del usuario
#### output
```16```

### user.initials
Retorna las iniciales del nombre de usuario
#### output
```IM```

### user.last_name
Retorna el apellido del usuario 
#### output
```Modyo```

### user.male_sex_value
Retorna el valor por defecto cuando el sexo es masculino
#### output
```0```

### user.member_since
Retorna la fecha desde la cual es usuario es miembre del sitio
#### output
```2021-11-23 18:25:07 UTC```

### user.name
Retorna el nombre completo del usuario
#### output
```Ivanx Modyo Gonzalez```

### user.notifications
Retorna un array de objectos del tipo notification


### user.profile_url
Retorna la url del profile del usuario
#### output
```https://test.miModyo.com/realms/default/profile```

### user.sex
Retorna el valor del sexo configurado para el usuario
#### output
```0```


### user.targets
Retorna un array de objectos del tipo target

### user.undefined_sex_value
Retorna el valor por defecto cuando el sexo es indefinido
#### output
```3```

### user.unread_notifications
Retorna un array de objectos del tipo notification

### user.unread_notifications_count
Retorna el conteo de las notificaciones no leidas
#### output
```2```

### user.username
Retorna el username del usuario
#### output
```ivan@modyo.com```

### user.uuid
Retorna el uuid del usuario
#### output
```cdc7f0e2-b5c3-4b92-aa34-962ffa0bi572```

### notification.subject
Retorna el subject de la notificacion 
#### output
```Modyo Developers Update```

### notification.body
Retorna el body de la notificacion
#### output
```sh
<p>Este es un mensaje de prueba en las campañas via notificaciones</p>
```
### notification.sent_at
Retorna la fecha de envio de la notificacion
#### output
```2012-11-16 00:46:40```

### notification.url
Retorna url de la notificacion
#### output
```https://test.miModyo.com/profile?notification_id=65345```

### notification.opened
Retorna un boolean si la notificacionfue abierta o no
#### output
```https://test.miModyo.com/profile?notification_id=65345```

### form.slug
Retorna slug del formulario
#### output
```el-nuevo-formulario```

### form_response.description
Retorna la descripcion del formulario
#### output
```Este formulario es el nuevo formulario de los usurios```

### form_response.name
Retorna el nombre de formulario
#### output
```el nuevo formulario```

### form_response.questions
Retorna las preguntas del formulario
#### output
``` [{"title"=>"¿Cual es tu puesto de trabajo?", "type"=>"textquestion", "answer"=>"Software developer"}] ```

### question.allow_alternatives?
Retorna un booleano para verificar si la pregunta acepta alternativas
#### output
```false```

### question.alternatives
Retorna un array con objectos del tipo alternatives

### question.allow_alternatives?
Retorna un booleano para verificar si la pregunta acepta alternativas
#### output
```false```

### question.form
Retorna un objecto del tipo form

### question.id
Retorna el id de la pregunta
#### output
```3```

### question.label
Retorna el label de la pregunta
#### output
```La primera pregunta```

### alternative.id
Retorna el id de la alternativa
#### output
```La primera pregunta```

### alternative.question
Retorna un objeto del tipo question

### answer.edit_url
Retorna la url de edicion de la respuesta
#### output
```"https://test.miModyo.com/forms/el-nuevo-formulario/edit_answer?question_id=3&answer_id=8"```

### answer.id
Retorna el id de la respuesta
#### output
```5```

### answer.question
Retorna un ojecto del tipo question asociado a la respuesta

### answer.response
Retorna un ojecto del tipo response asociado a la respuesta
#### output
```La primera pregunta```

### answer.text_field
Retorna el campo de texto asociado a la respuesta
#### output
```Este es la respuesta en el campo de texto```

### answer.type
Retorna el tipo de respuesta
#### output
```text_answer```

### realm.disable_modyo_credentials
Retorna un booleano que deteremina si las credenciales de modyo estan desahabilitadas
#### output
```false```

### realm.oauth2_callback_url
Retorna la url de callback de oauth2
#### output
```"https://test.miModyo.com/realms/default/auth/oauth2/authorize"```

### realm.oidc_callback_url
Retorna la url de callback de oidc
#### output
```https://test.miModyo.com/realms/default/auth/openidc/callback```






