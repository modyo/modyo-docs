---
search: true
---

# Creación de Sitio Privado

## Introducción

Bienvenido a un nuevo tutorial de la serie de entrenamiento de Modyo. En este tutorial se enfoca en [Modyo Channels](/es/platform/channels), donde generarás la base del sitio en el cual se agrega un [Widget](/es/platform/channels/widgets.html/) del [Catálogo de Widgets Financieros de Modyo](/es/widgets/) utilizando [Modyo CLI](/es/platform/channels/widgets.html#modyo-cli).

Al igual que en los otros tutoriales usaremos la marca ficticia "Dynamic Bank", la cual introduciremos a continuación.

### Dynamic Bank

Dynamic Bank es el nombre que le damos en Modyo a todo lo referente a demos y ejemplo de la plataforma. Quisimos crearlo para poder ofrecer una experiencia muy cercana a la realidad de lo que significa realmente trabajar con Modyo. Una vez completado este tutorial tu sitio debería lucir así:

<img src="/assets/img/tutorials/how-to-create-private-site/summary.png" style="border: 1px solid rgb(238, 238, 238);max-width: 400px;margin: auto 0;"/>

<a href="https://www.figma.com/proto/UtgKA8d7kN0lWUk3RvhHl4/PD-Private-Site?page-id=1086%3A0&node-id=1086%3A1&viewport=444%2C519%2C0.49354425072669983&scaling=min-zoom" target="blank">Ver Figma del diseño</a>

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

<img src="/assets/img/tutorials/how-to-create-private-site/new-site.png" style="border: 1px solid rgb(238, 238, 238);max-width: 300px;margin: auto 0;"/>

## Paso 2: Cargar logo y favicon

Para cambiar los archivos, sigue estos pasos:

1. Desde el menú principal, selecciona **Configuración del sitio**, haz click en **General**.
1. En logo del sitio, haz click en **Subir**.
1. Selecciona tu logo y haz click en **Abrir**. 
1. Dentro de la sección de Visualización, en Favicon, haz click en **Subir**.
1. Selecciona tu favicon y haz click en **Abrir**.
1. Haz click en **Guardar**.

#### Logo

<img src="https://cloud.modyocdn.com/uploads/b2b35c34-f955-41f6-8ce8-e1e23e21e377/original/DynamicBank_white.svg" style="margin: 30px 0px;max-width: 300px;background: #DDD;padding: 10px;">

#### Favicon

<img src="https://cloud.modyocdn.com/uploads/7c6b4dd7-5b50-43f3-9ca1-a07a2cbc6412/original/favicon.ico" style="margin: 30px 0;max-width: 32px;">

> Recuerda guardar los cambios luego de cargar los archivos.

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

## Paso 9: Instalar Modyo CLI

Ahora que tenemos lista la base para agregar el Widget, tienes que instalar [Modyo CLI](/es/platform/channels/widgets.html#modyo-cli).

[Modyo CLI](/es/platform/channels/widgets.html#modyo-cli) es una herramienta de línea de comandos basada en los principios de aceleración e integración con comandos GET y PUSH respectivamente.

Para instalar Modyo CLI necesitamos algunas dependencias, que deben estar instaladas de manera global.

Ellas son:

* Git distributed version control system (v 1.7+)
* Node (v 12+)
* Un editor de código como por ejemplo Visual Studio Code
* Npm (v 6.14+) ó Yarn (v 1.22+)

Para realizar la instalación se puede usar una de estas opciones en la terminal:

<code>Vía yarn</code>

```sh
$ yarn global add @modyo/cli
```

<code>Vía npm</code>

```sh
$ npm i -g @modyo/cli
```

Una vez instalado, verifica que todo esté bien ejecutando el comando <code>modyo-cli help</code>.

## Paso 10: Inicializar un Widget del Catálogo

Luego de completar el proceso de instalación, vamos a obtener el Widget de [Resumen de Cuentas](/es/widgets/retail/summary.html) desde el [Catálogo de Widgets Financieros de Modyo](/es/widgets/).

Para descargar el Widget a tu ambiente local lo hacemos con el siguiente comando:

```sh
modyo-cli get modyo-widgets-retail-summary
```

Al terminar el proceso, aparece una vista así:

<img src="/assets/img/tutorials/how-to-create-private-site/terminal.png" style="max-width: 400px;margin: auto 0;"/>

:::tip Tip 
Para editarlo debes ir a la carpeta <code>modyo-widgets-retail-summary</code> dentro de la terminal. Para construirlo de manera local, utiliza <code>yarn serve</code> o <code>npm serve</code>en tu navegador.
:::

<img src="/assets/img/tutorials/how-to-create-private-site/widget.png" style="max-width: 600px;margin: auto 0;"/>

## Paso 11: Cambios de estilos en el Widget

Los Widgets del catálogo se han diseñado en Modyo con un estilo simple. Para hacer cambios debes abrir la carpeta del widget <code>modyo-widgets-retail-summary</code> en tu editor, que en nuestro caso es Visual Studio Code.

<img src="/assets/img/tutorials/how-to-create-private-site/vscode.png" style="max-width: 600px;margin: auto 0;"/>

Para cambiar los colores de las variables por los de Dynamic Bank, sigue estos pasos:

1. Navega a la carpeta <code>src</code>.
1. Dentro de la carpeta css, abre el archivo `_variables.css`.
1. Modifica el código con el siguiente:

```css
$primary-10: #EEF0F5;
$primary-20: #E8EAF1;
$primary-40: #D2D6E5;
$primary-60: #A5AECC;
$primary-80: #7985B2;
$primary-100: #384470;
$primary-dark: #2e4553;
$secondary-10: #eff0f1;
$secondary-20: #e0e2e3;
$secondary-40: #c1c5c7;
$secondary-60: #a1a8aa;
$secondary-80: #828b8e;
$secondary-100: #636e72;
$secondary-dark: #515a5e;
$tertiary-10: #f7f8f9;
$tertiary-20: #f0f2f3;
$tertiary-40: #e0e5e7;
$tertiary-60: #d1d8db;
$tertiary-80: #c1cbcf;
$tertiary-100: #b2bec3;
$tertiary-dark: #a3afb4;
$red: #D7426E;
$yellow: #F2C10D;
$green: #70D960;
$primary: $primary-100;
$secondary: $secondary-100;
$light: $secondary-10;
$dark: $secondary-dark;
```

4. Abre el archivo `_theme.css`.
5. Modifica la línea 8, dejando el _body_ con un `background: white`;
6. En el directorio <code>src/components/SummaryAccount.vue</code>, modifica el header de las cards, modificando el background por `$primary-40`, específicamente la línea 169 para que luzca así:

```css
.card-header.product-summary__header:first-child {
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  background: $primary-40;
}
```

7. En la línea 8 le agregamos la clase h6 al h2 de esta manera:

```html
<h2 class="h6 mb-0 text-capitalize">
  {{ account.accountType }}
  <span class="d-block mt-1">{{ $tc('commons.number', account.accountNumber) }}</span>
</h2>
```

8. Agrega estilos para que la barra de monto se vea verde:

```css
.m-progress-bar .progress-bar {
  background: $green !important;
}
```

9. Abre el archivo <code>App.vue</code>.
10. Para agregar el título, copia el siguiente código:

```html
<template>
  <article
    id="summary-app"
    class="py-4 py-sm-5">
    <div class="container-fluid px-0">
      <div
        v-if="isLoading"
        class="loading text-center pt-5">
        <font-awesome-icon
          icon="circle-notch"
          size="5x"
          spin />
      </div>
      <div
        v-else
        ref="viewport"
        class="products-viewport">
        <div class="header-summary mb-3">
          <h3 class="h4 text-primary font-weight-bold">Hola</h3>
          <h3 class="h4 text-primary">Bienvenido a Dynamic</h3>
        </div>
        <div
          ref="content"
          class="products-summary d-flex align-items-stretch">
          <summary-account
            v-for="account in accounts"
            :key="`account-${account.id}`"
            :account="account"
            :client-id="clientId" />

          <summary-card
            v-for="card in cards"
            :key="`card-${card.id}`"
            :card="card"
            :client-id="clientId" />

          <summary-add key="add" />
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import ScrollBooster from 'scrollbooster';
import { getURLParams } from '@modyo/financial-commons';
import SummaryAccount from './components/SummaryAccount.vue';
import SummaryCard from './components/SummaryCard.vue';
import SummaryAdd from './components/SummaryAdd.vue';

export default {
  name: 'App',
  components: {
    SummaryAccount,
    SummaryCard,
    SummaryAdd,
  },
  data() {
    return {
      carousel: {},
    };
  },
  computed: {
    isLoading() {
      return this.$store.state.isLoading;
    },
    accounts() {
      return this.$store.state.accounts;
    },
    cards() {
      return this.$store.state.cards;
    },
    clientId() {
      return this.$store.state.clientId;
    },
  },
  created() {
    const client = parseInt(getURLParams('client'), 10) || 1;
    this.$store.commit('SET_CLIENT_ID', client);
    this.$store.dispatch('DO_DATA_INITIALIZATION').then(() => {
      this.initProductsCarousel();
    });
  },
  methods: {
    initProductsCarousel() {
      const { viewport } = this.$refs;
      const { content } = this.$refs;

      // eslint-disable-next-line no-unused-vars
      const sb = new ScrollBooster({
        viewport,
        content,
        direction: 'horizontal',
        emulateScroll: false,
        onUpdate: (state) => {
          if (state.borderCollision.right) {
            content.style.transform = `translateX(${-state.position.x - 20}px)`;
          } else {
            content.style.transform = `translateX(${-state.position.x}px)`;
          }

          if (state.isMoving) {
            viewport.style.cursor = 'grabbing';
          } else {
            viewport.style.cursor = 'grab';
          }
        },
        shouldScroll: (state, event) => {
          // disable scroll if clicked on button
          const isLink = event.target.nodeName.toLowerCase() === 'a';
          return !isLink;
        },
      });

      sb.updateMetrics();
    },
  },
};
</script>

<style lang="scss" scoped>
.products-viewport {
  overflow: hidden;

  cursor: grab;
}

@media (max-width: 575.98px) {
  .header-summary h2 {
    font-size: 24px;
  }
}
.header-summary {
  margin-left: 30px;
}
@media (min-width: 1200px) {
  .header-summary {
    margin-left: 140px;
  }
}
</style>
```

> Una vez que termines de darle el look and feel al widget, estarás listo para hacer push a Modyo.

## Paso 12: Enviar Widget al sitio

Para hacer el push del Widget al sitio en Modyo, tienes que generar la configuración en el Modyo CLI para que sepa hacia donde va el push.

Sigue estos pasos para crear el archivo de configuración:

1. En la carpeta raíz del widget, crea un archivo <code>.env</code>. 
2. Agrega el siguiente código y remplaza **[Account url]** y **[Modyo API Token]** según tu contexto:

```
MODYO_ACCOUNT_URL= [Account url]
MODYO_SITE_HOST=private-site
MODYO_VERSION=9
MODYO_TOKEN= [Modyo API Token]
MODYO_BUILD_COMMAND=build
MODYO_BUILD_DIRECTORY=dist
MODYO_WIDGET_NAME=Summary
```

<img src="/assets/img/tutorials/how-to-create-private-site/env.png" style="max-width: 400px;margin: auto 0;"/>

Para obtener un API token, sigue estos pasos:

1. En el menú principal de la Plataforma, selecciona **Configuración** y haz click en **Acceso a la API**
1. Haz click en <b>+ Nuevo Acceso a la API</b>.
1. En el modal completa los siguientes datos:

<table>
 <tr>
  <td>
   Name
  </td>
  <td>
   modyo-cli
  </td>
 </tr>
<tr>
  <td>
   Description
  </td>
  <td>
   Token que se utilizara para hacer push desde modyo-cli
  </td>
 </tr>
 <tr>
  <td>
   Redirect URI
  </td>
  <td>
   urn:ietf:wg:oauth:2.0:oob
  </td>
 </tr>
</table>

<img src="/assets/img/tutorials/how-to-create-private-site/token.png" style="max-width: 400px;margin: auto 0;"/>

4. Una vez creado el API access, haz click en **Equipo**.
5. Busca y selecciona tu usuario.
6. Haz click en el apartado de **Acceso a la API** y haz click en **+ Nuevo Token de Acceso**.
7. Selecciona **modyo-cli** y haz click en **Crear Token**.

<img src="/assets/img/tutorials/how-to-create-private-site/access_token.png" style="max-width: 400px;margin: auto 0;"/>

Ahora que ya tienes un token, puedes agregarlo al archivo <b>.env</b> de configuración.

<img src="/assets/img/tutorials/how-to-create-private-site/token_gnerated.png" style="max-width: 400px;margin: auto 0;"/>

8. En la terminal, usa el comando <code>modyo-cli push Summary</code>, este comando lleva el widget al tu sitio. Lo podrás encontrar en el apartado de Widgets Personalizados.

<img src="/assets/img/tutorials/how-to-create-private-site/wb.png" style="max-width: 400px;margin: auto 0;"/>

9. Para hacerlo disponible en la biblioteca de widgets, en la plataforma, dentro de Channels -> Sitios, entra a tu sitio.
10. Haz click en **Widgets**, tu widget se encontrará listado como un Widget listo para ser publicado. Entra a tu widget y haz click en **Publicar**.
11. En la ventana de Revisar y Publicar, selecciona tu widget y haz click en **Publicar**. Selecciona la opción de **Publicar Ahora**.

<img src="/assets/img/tutorials/how-to-create-private-site/widget_custom.png" style="max-width: 400px;margin: auto 0;"/>

12. Selecciona **Pages** y haz click en Home.
13. Borra el Widget de HTML existente y agrega tu Custom Widget.

<img src="/assets/img/tutorials/how-to-create-private-site/home.png" style="max-width: 600px;margin: auto 0;"/>

## Paso 13: Revisar y Publicar Home, Navigation, y Template

Una vez realizados los pasos anteriores, revisa todo el sitio en modo vista previa. Al estar conforme con el resultado, debes publicar los cambios para dejar todos los cambios disponibles a tus usuarios finales.

Para realizar una publicación, desde la sección **Resumen**, haz click en el botón <b>Publicar</b> donde se abrirá un panel con los cambios que haz realizado.

<img src="/assets/img/tutorials/how-to-create-private-site/publish.png" style="max-width: 700px;margin: auto 0;"/>

Selecciona todos los cambios pendientes, y haz click en **Publicar**. Selecciona **Publicar Ahora**.

## Conclusiones

¡Muy bien! Haz finalizado el curso de Sitio Privado con Widgets del Modyo CLI.

Ya tienes conocimientos sobre:
- [Modyo Channels](/es/platform/channels) con todos sus módulos:
- [Pages](/es/platform/channels/pages)
- [Navigation](/es/platform/channels/navigation)
- [Widgets](/es/platform/channels/widgets)
- [Templates](/es/platform/channels/templates)
- [Site settings](/es/platform/channels/sites.html#configuracion-de-un-sitio)
- [Modyo CLI](/es/platform/channels/widgets.html#modyo-cli) 
- [Catálogo de Modyo](/es/widgets/)