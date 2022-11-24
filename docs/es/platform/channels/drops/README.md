---
search: true
collapsible: true
---

# Drops

También conocido como Objetos o Variables Liquid, Modyo cuenta con drops disponibles para distintos contextos dentro de Modyo Platform para mandar a llamar información dinámicamente. Podrás encontrar drops para los contextos de cuenta, content, channels, y customers.

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

Estos drops son de gran utilidad al momento de querer hacer páginas dinámicas usando Liquid.

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

### [menu.items](#menu)

Array de objectos de tipo menu_item asociados al menú.

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

Usa los drops de user para obtener información de tus usuarios del módulo Customers.

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

Estos drops te permiten obtener información a través de Liquid para las notificaciones del módulo Customers.

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

## Target 

Estos drops contienen toda la información asociada a los targets (segmentos).

### target.id

ID del target (segmento).

#### output

```323```

### target.name

Nombre del target (segmento).

#### output

```Personal autorizado```




