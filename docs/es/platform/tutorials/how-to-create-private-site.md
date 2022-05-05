---
search: true
---

# Creación de Sitio Privado

## Introducción

Bienvenido a un nuevo tutorial de la serie de entrenamiento de Modyo. En este tutorial se enfoca en [Modyo Channels](/es/platform/channels), donde generarás la base de un sitio privado.

Al igual que en los otros tutoriales usaremos la marca ficticia "Dynamic Bank", la cual introduciremos a continuación.

### Dynamic Bank

Dynamic Bank es el nombre que le damos en Modyo a todo lo referente a demos y ejemplo de la plataforma. Quisimos crearlo para poder ofrecer una experiencia muy cercana a la realidad de lo que significa realmente trabajar con Modyo. 

## Requisitos Previos

Conocimientos de:

- HTML
- CSS
- JS
- La plataforma Modyo

## Paso 1: Crear un sitio en la Nube

1. En el menú principal, selecciona **Channels** y haz click en **Sitios**.
2. Haz click en **+ Nuevo Sitio**.
3. En la ventana de Nuevo Sitio llena los siguientes datos:
  - Nombre: **Private Site**
  - Host: **private**
  - Reino del sitio: **Ninguno**
4. Haz click en **Crear**.

<img src="/assets/img/tutorials/how-to-create-private-site/new-site.png" alt="Modyo's New Site page." style="border: 1px solid rgb(238, 238, 238);max-width: 300px;margin: auto 0;"/>

## Paso 2: Cargar logo y favicon

Para cambiar los archivos, sigue estos pasos:

1. Desde el menú principal, selecciona **Configuración del sitio**, haz click en **General**.
1. En logo del sitio, haz click en **Subir**.
1. Selecciona tu logo y haz click en **Abrir**. 
1. Dentro de la sección de Visualización, en Favicon, haz click en **Subir**.
1. Selecciona tu favicon y haz click en **Abrir**.
1. Haz click en **Guardar**.

#### Logo

<img src="https://cloud.modyocdn.com/uploads/b2b35c34-f955-41f6-8ce8-e1e23e21e377/original/DynamicBank_white.svg" alt="Dynamic Bank Logo" style="margin: 30px 0px;max-width: 300px;background: #DDD;padding: 10px;">

#### Favicon

<img src="https://cloud.modyocdn.com/uploads/7c6b4dd7-5b50-43f3-9ca1-a07a2cbc6412/original/favicon.ico" alt="Dynamic Bank Favicon" style="margin: 30px 0;max-width: 32px;">

Recuerda guardar los cambios luego de cargar los archivos.

## Paso 3: Cambiar variables CSS para darle look and feel de Dynamic Bank

Una vez cargado tu logo, vamos a hacer los cambios de tamaño para que se ajuste a nuestro diseño.

1. En el menú principal, haz click en **Plantillas**.
1. Dentro de el listado de **Snippets**, en el grupo de Libs, abre el snippet `bootstrap_css`.
1. Buscamos la clase `.navbar-brand img` y cambiamos el **height** de `50px` a `30px`.

Para comenzar, vamos a modificar las variables de CSS, las que están en un snippet llamado <code>variables_css</code> que alimenta el resto de las hojas de estilo ya configuradas dentro del Theme.

Para hacer el cambio a variables_css, sigue estos pasos:

1. En el menú principal, haz click en **Plantillas**.
1. En el menú Vistas y Snippets de la derecha, haz click en **Snippets**.
1. En el apartado de **Libs**, haz click en `variables_css`.
1. Modifica los siguientes valores:

#### Colores:

```css
primary = rgba(56, 68, 112, 1)
secondary = rgba(98, 125, 229, 1)
light = rgba(250, 250, 250, 1)
info = rgba(121, 133, 178, 1)
dark = rgba(56, 68, 112, 1)
```

#### Botones:

```css
button_radius = 100px
button_font_weight = 600
```

> Para revisar vamos a guardar nuestros cambios y luego utilizar el [modo vista previa](/es/platform/core/key-concepts.html#modo-vista-previa).

## Paso 4: Cambiar fuente del sitio

En el Tema estamos usando la librería [webfontloader](https://github.com/typekit/webfontloader) para cargar la tipografía de manera asincrónica.

Para este sitio utilizaremos la fuente Jost. Sigue estos pasos para cambiar la tipografía:

1. Dentro de la lista de Vistas, haz click en Javascript `base`.
1. Reemplaza la siguiente linea:

```css
families: ['DM Sans:400,700&display=swap']

por

families: ['Jost:400,700&display=swap']
```

## Paso 5: Modificar Layout Base

Para que nuestro sitio se vea como en el diseño, tenemos que modificar su estructura HTML. La idea es cambiar el código por uno se asemeje más a una aplicación; con el menú en el sidebar y utilizando el 100% del ancho de nuestra pantalla.

Sigue estos pasos para modificar el layout `base`:

1. En **Plantillas**, en la lista de Vistas de la derecha, adentro de Layouts haz click en `base`.
1. En el apartado de HTML, remplaza el código por el siguiente:

```html
{% html5 %}
<!-- HTML header with browser directives -->
<head>
  {% snippet 'shared/general/head' %}
</head>

{% body %}
<!-- Body with automatic context classes -->
{% snippet 'shared/general/body_tag_manager' %}
<div id="modyo-site-alert-wrapper"></div>
<div class="d-flex flex-column" id="layout-content">
  {% snippet 'shared/general/header' %}
  <div
    class="row h-100 overflow-hidden justify-content-end bg-primary"
    id="page-content"
  >
    <aside
      id="cont_nav_menu"
      class="col-6 col-md-2 d-flex flex-column justify-content-between h-100 overflow-auto"
    >
      <div class="p-3 h-100 d-flex flex-column justify-content-between">
        {% snippet 'shared/general/menu' %} {% snippet "user_html" %}
      </div>
    </aside>
    <section class="p-0 col-12 col-lg-10 bg-white" id="main-page">
      {{ content_for_layout }}
    </section>
  </div>
</div>
<script>
  {% snippet "shared/serviceworker/register_js" %}
</script>

{% endbody %} {% endhtml5 %}
```

## Paso 6: Modificar Header

Para seguir el diseño Figma, sigue estos pasos para modificar el header:  

1. En **Plantillas**, abre la pestaña de **Snippets**.
1. Haz click en el snippet General <b>Header</b>.
1. En la pestaña HTML, copia el siguiente código:

```html
<header role="banner" id="header" class="bg-primary">
	<div class="row">
		<aside class="col-10 col-xl-2">
			<div class="pl-3 py-2 d-flex"> 
				<button id="btn_menu" class="d-block d-xl-none mr-2">
					<svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" fill="#fff" class="bi bi-list m_open" viewBox="0 0 16 16">
						<path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
					</svg>
					<svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" fill="#fff" class="bi bi-x m_close" viewBox="0 0 16 16">
						<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
					</svg>
				</button>
				<a class="navbar-brand" href="{{ site.url }}">
					<img src="{{ site.logo | asset_url }}" alt="Logo {{site.name}}">
				</a>
			</div>
		</aside>
		<section class="col-2 col-xl-10 text-white d-flex justify-content-end justify-content-xl-between align-items-center">
			<small class="d-none d-xl-block">
				<b>UF:</b> 28.680,39
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#D7426E" class="bi bi-arrow-down mr-3" viewBox="0 0 16 16">
					<path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
				</svg>
				<b>UTM:</b> 50.322,00
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#D7426E" class="bi bi-arrow-down mr-3" viewBox="0 0 16 16">
					<path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
				</svg>
				<b>IPSA:</b> 3.972,25
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#D7426E" class="bi bi-arrow-down mr-3" viewBox="0 0 16 16">
					<path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
				</svg>
				<b>USD:</b> 787,50
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#D7426E" class="bi bi-arrow-down mr-3" viewBox="0 0 16 16">
					<path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
				</svg>
				<b>EURO:</b> 898,25
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#70D960" class="bi bi-arrow-up" viewBox="0 0 16 16">
					<path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
				</svg>
			</small>
			{% if user %}
			<div class="mr-3">
				<button type="button" class="py-2 px-0 bg-transparent border-0 text-dark position-relative notifications_btn" data-toggle="modal" data-target="#notifications" id="dropdownProfileButton">
					<h3 class="sr-only">Notifications</h3>
					<svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-bell" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
						<path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2z"/>
						<path fill-rule="evenodd" d="M8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/>
					</svg>
					{%if user.unread_notifications_count > 0 %}
					<span class="badge badge-success notifications-badge badge_new" id="badge_new">
					</span>
					{% endif %}
				</button>
			</div>
			{% endif %}
		</section>
	</div>
</header>
<!-- Notifications Panel -->
{% snippet "notifications_html" %}
```

## Paso 7: Modificar Notificaciones y Sidebar

Para modificar las notificaciones debemos editar el css. Sigue estos pasos para modificar `notifications_css`:

1. En **Plantillas**, abre la pestaña de **Snippets**.
1. Haz click en el snippet de CSS <b>notifications_css</b>.
1. En la pestaña de remplazamos el código por el siguiente:

```css
.notifications_btn svg {fill: {{white}};transition:.3s}
.notifications_btn svg:hover {fill: {{secondary}};transition:.3s}
.notifications-badge {width: 10px;height: 10px;border-radius: 100%;}
.notifications_btn .notifications-badge {position: absolute;right: 17px;top: 10px;}
.avatar {height: 40px;width: 40px;background-size: cover;}
.dropdown_user {min-width: 300px;}
.avatar_big {font-size: 20px;width: 50px !important;height: 50px !important;background-size: cover;}
.notification *:last-child {margin-bottom: 0 !important;}
#notifications.modal.right .modal-dialog,
#menu_panel.modal.right .modal-dialog {max-width: 400px;}
```

4. En el listado de snippets, abre el snippet <code>notifications_html</code>
5. Remplaza el código por el siguiente:

```html
{% if user %}	
<div class="modal right fade" id="notifications" tabindex="-1" aria-labelledby="notificationsLabel" aria-modal="true" aria-hidden="true">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header bg-white px-4 py-3">
				<h3 class="h5 modal-title" id="notificationsLabel">Notifications</h3>
				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">&#10005;</span>
				</button>
			</div>
			<div class="modal-body px-4 py-3">
				{%if user.notifications == 0 %}
				<p class="text-muted p-3 text-center mb-0">No new notifications</p>
				{% else %}
				<div class="accordion" id="notificationsCollapsed">
					{% for notification in user.notifications %}
					{% assign notification_url = notification.url | split: "notification_id="  %}
					{% assign id =  notification_url[1] %}
					<div class="mb-3 border rounded">
						<div class="p-0">
							<button class="notification_btn py-2 px-3 border-0 bg-transparent text-dark d-block w-100 text-left {%unless notification.opened%}font-weight-bold new_not{%endunless%}" type="button" data-toggle="collapse" data-target="#notification_{{forloop.index}}" aria-expanded="true" aria-controls="collapse_{{forloop.index}}" data-url="{{account.url}}/api/profile/notifications/{{id}}/mark_as_read" onclick="openNotification('{{forloop.index}}')" id="not_{{forloop.index}}">
								<small class="d-block mb-1 text-muted">{{ notification.sent_at | date: "%H:%M %a, %b, %y" }}</small>
								<span class="d-flex">
									<span class="mt-1 mr-2 badge {% unless notification.opened  %}badge-success{% else %} badge-light{% endunless %} notifications-badge" id="badge_{{forloop.index}}" style="margin-top: 6px">
									</span>
									{{ notification.subject }}
								</span>
							</button>
						</div>
						<div id="notification_{{forloop.index}}" class="notification collapse" aria-labelledby="notification_{{forloop.index}}" data-parent="#notificationsCollapsed">
							<div class="border-top p-3">
								{{ notification.body }}
							</div>
						</div>
					</div>
					{% endfor %}
				</div>
				{% endif %}
			</div>
		</div>
	</div>
</div>
{% endif %}
<!-- Notifications JS -->
<script>
	{% snippet "notifications_js" %}
</script>
```

6. En el listado de snippets, abre el snippet <code>menu</code>.
7. Para que el menú se vea como navegación lateral, remplaza el código del snippet con el siguiente:

```html
<ul class="nav menu_nav">
  {% assign items_to_show = menu.items | visible_items %} {% for item in
  items_to_show %} {% assign active = item.url | active_page: request.url %} {%
  assign children_to_show = item.child_items | visible_items %} {% if
  children_to_show.size > 0 %}
  <li
    class="nav-item nav-item-{{ item.parameterized_label }} menu-item {{ active }}"
  >
    <a
      target="{{ item.target }}"
      rel="{{ item.target | item_rel}}"
      class="nav-link text-white"
      href="{{ item.url | resolve_url: site.base_url }}"
    >
      {{ item.label }}</a
    >
    {% for child in children_to_show %}
    <div class="d-flex">
      <a
        target="{{ child.target }}"
        rel="{{ child.target | item_rel}}"
        class="submenu-item"
        href="{{ child.url }}"
      >
        <span>{{ child.label }}</span>
      </a>
    </div>
    {% endfor %} {% else %}
  </li>

  <li class="nav-item nav-item-{{ item.parameterized_label }}{{ active }}">
    <a
      target="{{ item.target }}"
      class="nav-link text-white"
      rel="{{ item.target | item_rel}}"
      href="{{ item.url }}"
      >{{ item.label }}</a
    >
    {% endif %}
  </li>
  {% endfor %}
</ul>
```

8. En el listado de Snippets, abre el snippet <code>user_html</code>.
9. Para mostrar los botones de Sign in, Profile, y Log Out, remplaza el código por el siguiente: 

```html
<nav class="menu_nav" id="second_nav">
  <hr class="d-block d-md-none d-xl-block" />
  <a href="{{ site.url }}/profile"
    ><svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.3em"
      height="1.3em"
      viewBox="0 0 16 16"
      fill="#A5AECC"
      class="bi bi-person  mr-2"
    >
      <path
        d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"
      />
    </svg>
    <span>My profile</span></a
  >
  <a href="{{ site.url }}/logout"
    ><svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.3em"
      height="1.3em"
      viewBox="0 0 16 16"
      class="bi bi-box-arrow-right mr-2"
      fill="#D7426E"
    >
      <path
        fill-rule="evenodd"
        d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
      />
      <path
        fill-rule="evenodd"
        d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
      />
    </svg>
    <span>Log Out</span></a
  >
</nav>
```

10. En el listado de **Snippets**, en la sección de **Personalizado**, haz click en **+** para crear una hoja de estilo que va a contener todos los estilos para este tutorial.
11. Escribe la ruta <code>privatesitecss</code> y copia el código:

```css
html{
	height: 100%;
}
body {
	background: {{primary_dark}};
	height: 100%;
}
#layout-content {
	height: 100vh;
	overflow: hidden;
}
#main-page {
	overflow: scroll;
	height: 100%;
	border-radius: 8px 0 0 0;
	box-shadow: 0px 0px 10px 5px rgba(0,0,0,.1);
}
.nav_menu_acc {
	padding-top: 16px;
}
.btn_menu {
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	text-align: left;
	margin-bottom: 16px;
	color: #fff;
	box-shadow: none;
	outline: 0 !important;
}
.menu_nav {
	display: flex;
	flex-direction: column;
}
.menu_nav a {
	color: #fff;
	line-height: 1.3em;
	padding: 8px 16px;
	border-radius: 6px;
	margin-top: 8px;
	background: transparent;
	text-decoration: none;
	transition:.3s;
	display: flex;
	align-items: center;
	min-height: 40px;
	display: inline-flex;
	font-weight: bold;
}
.menu_nav .active a,
.menu_nav a:hover {
	transition:.3s;
	background: #4C5D99;
	text-decoration: none;
	color: #fff;
}
.menu_nav a.submenu-item {
	display: inline-flex;
	margin-left: 1rem;
	font-size: .9rem;
	margin-top: 4px;
	padding: 4px 16px;
}
.menu_nav .active a {
	font-weight: bold;
}
#btn_menu {
	background: none;
	border: none;
	color: #fff;
	font-size: 24px;
	border-radius: 4px;
	transition: .3s;
	width: 35px;
	text-align: center;
	outline: none;
}
#btn_menu:hover {
	background: {{secondary}};
}
#btn_menu .m_open {
	display: block;
}
#btn_menu .m_close {
	display: none;
}
body.open_menu #btn_menu .m_open {
	display: none;
}
body.open_menu #btn_menu .m_close {
	display: block;
}
#second_nav hr {
	margin: 10px 0;
	border: none;
	height: 1px;
	display: block;
	background: rgba(255,255,255,.1);
	border-radius: 4px;
}
@media (max-width:1199.98px){
	#page-content{
		position: relative;
	}
	#nav_menu {
		display: none !important;
	}
	body.open_menu #nav_menu {
		display: block !important;
	}
	aside#cont_nav_menu {
		transition:.3s;
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
	}
	body.open_menu aside#cont_nav_menu {
		transition:.3s;
		min-width: 50%;
		padding-left: 5%;
	}
	section#main-page {
		left: 0%;
		transition: .3s;
	}
	body.open_menu section#main-page {
		left: 50%;
		transition:.3s;
		position: relative;
		opacity:.4;
		overflow: hidden;
	}
	section#main-page.opened {
		cursor: pointer;
	}
}
@media (max-width:767.98px){
	body.open_menu aside#cont_nav_menu {
		min-width: 60%;
	}
	body.open_menu section#main-page {
		left: 60%;
	}
	#second_nav {
		display: none;
	}
	body.open_menu #second_nav {
		display: block;
	}
}
@media (max-width:575.98px){
	body.open_menu aside#cont_nav_menu {
		min-width: 80%;
	}
	body.open_menu section#main-page {
		left: 80%;
	}
}
```
10. En el listado de **Vistas**, en la sección de **Hoja de Estilo**, haz click en `base`.
11. Agrega al final el snippet que creaste con: `{% snippet "privatesitecss" %}`
12. En el listado de **Vistas**, en la sección de **Javascript**, haz click en `base`.
13. Remplaza el código con el siguiente:

```js
window.csrf_token = '';
window.csrf_param = '';
/* JS libraries  */
{% snippet "shared/libs/jquery_js" %}
/* Popper JS  */
{% snippet "shared/libs/popper_js" %}
/* Bootstrap JS  */
{% snippet "shared/libs/bootstrap_js" %}
/* Web Font Loader */
{% snippet "webfontload_js" %}
/* Config WFL */
{% snippet "webfontload_config_js" %}

$( document ).ready(function() {
	$("#btn_menu").click(function() {
		$("body").toggleClass("open_menu");
		$("#page-content").toggleClass("opened");
	});
	$("#main-page").click(function() {
		$("body").removeClass("open_menu");
		$("#page-content").removeClass("opened");
	});
});

/*********************************
Javasctipt of libraries used in forms
SELECT 2
UJS
*********************************/
{% snippet "shared/libs/forms_js" %}
```

> Recuerda guardar todos los cambios antes de salir de Plantillas. 

## Paso 8: Generar el menú

Otra de las funcionalidades que existen dentro de Modyo es la herramienta de Navigation, en la cual puedes generar el menú para tu sitio.

Para crear el menú, sigue estos pasos:

1. En el menú principal de tu sitio, haz click en [Navigation](/es/platform/channels/navigation.html).
1. Haz click en el menú ya existente y agrega las siguientes opciones:

<table>
 <tr>
  <th style="text-align: left">Name</th>
  <th style="text-align: left">Associated Layout Page</th>
  <th style="text-align: left">URL</th>
 </tr>
 <tr>
  <td>
   Mi Banca
  </td>
  <td>
   Home
  </td>
  <td></td>
 </tr>
 <tr>
  <td>
   Cuentas
  </td>
  <td>
   Custom URL
  </td>
  <td>
  #
  </td>
 </tr>
 <tr>
  <td>
   Tarjetas
  </td>
  <td>
   Custom URL
  </td>
  <td>
  #
  </td>
 </tr>
 <tr>
  <td>
   Transferencias
  </td>
  <td>
   Custom URL
  </td>
  <td>
  #
  </td>
 </tr>
 <tr>
  <td>
   Créditos
  </td>
  <td>
   Custom URL
  </td>
  <td>
  #
  </td>
 </tr>
 <tr>
  <td>
   Avance en Efectivo
  </td>
  <td>
   Custom URL
  </td>
  <td>
  #
  </td>
 </tr>
</table>

3. Haz click en **Guardar**.


## Paso 9: Revisar y Publicar Home, Navigation, y Template

Una vez realizados los pasos anteriores, revisa todo el sitio en modo vista previa. Al estar conforme con el resultado, debes publicar los cambios para dejar todos los cambios disponibles a tus usuarios finales.

Para realizar una publicación, desde la sección **Resumen**, haz click en el botón <b>Publicar</b> donde se abrirá un panel con los cambios que haz realizado.

<img src="/assets/img/tutorials/how-to-create-private-site/publish.png" alt="Modyo's Review and Publish page with the changes made during this tutorial." style="max-width: 700px;margin: auto 0;"/>

Selecciona todos los cambios pendientes, y haz click en **Publicar**. Selecciona **Publicar Ahora**.

## Conclusiones

¡Muy bien! Haz finalizado el tutorial de Sitio Privado.

Ya tienes conocimientos sobre:
- [Modyo Channels](/es/platform/channels) con todos sus módulos:
- [Pages](/es/platform/channels/pages)
- [Navigation](/es/platform/channels/navigation)
- [Templates](/es/platform/channels/templates)
- [Site settings](/es/platform/channels/sites.html#configuracion-de-un-sitio)

Si deseas continuar trabajando con este proyecto de ejemplo, en el [siguiente tutorial](/es/platform/tutorials/how-to-create-a-cli-widget.html) puedes agregarle un [Widget](/es/platform/channels/widgets) utilizando el [Modyo CLI](/es/platform/tutorials/how-to-create-a-cli-widget.html) 
