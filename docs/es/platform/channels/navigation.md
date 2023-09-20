---
search: true
---

# Navigation

La navegación es la forma más rápida de armar un listado de elementos para entregarle a tus usuarios un fácil acceso a los puntos clave de tu sitio.

<img src="/assets/img/platform/navigation-builder.png" alt="Navigation module screen">

En esta sección encuentras un listado anidado de elementos, que corresponden a los elementos que aparecerán en el sitio al usar el tag <span v-pre>`{% menu %}`</span> en [Plantillas](/es/platform/channels/templates.html).

Navegación sólo permite tres niveles de profundidad, por lo que puedes tener un listado principal y hasta dos sub elementos anidados en cada uno de los items principales. Por defecto al crear un sitio, Modyo incluye una plantilla y un menú básico que puedes modificar a tus necesidades.

En la parte superior de la vista, encontrarás el estado de publicación del menú:

- **Publicado:** Este estado aparece luego de haber hecho una publicación y cuando las versiones editable y publicada son iguales.
- **Cambios pendientes:** Este estado aparece si es que ya hay una versión publicada, pero hay cambios pendientes de publicar en tu versión editable.
- **En revisión:** Este estado aparece cuando esté habilitada la [Revisión en Equipo](/es/platform/core/key-concepts.html) y se haya enviado a revisión la versión editable.
- **Aprobado:** Este estado aparece cuando esté habilitada la [Revisión en Equipo](/es/platform/core/key-concepts.html) y si se cumplieron las condiciones de revisión del elemento. Si se encuentra en este estado, tus plantillas ya pueden ser publicados.

En la parte superior derecha, encuentras la última fecha de publicación y las acciones disponibles:

**Vista previa:** Al hacer click en este ícono se abre una nueva pestaña con el modo vista previa del menú, donde puedes visualizar todos los cambios.

:::warning Atención
Puedes previsualizar los cambios como usuario sin sesión o usuario con sesión de Modyo. Para esto, es recomendable iniciar o cerrar la sesión de Modyo en el sitio antes de entrar al modo vista previa, Esto debido a que iniciar o cerrar sesión dentro del modo de vista previa puede generar errores de seguridad como  _x-frame-options_ o _mixed-content_, dependiendo de la configuración de dominios personalizados y SSL del sitio.
:::

:::warning Atención
El menú que has creado solo se visualizará en una página si lo agregas a través de una plantilla publicada. De lo contrario, el menú no se solicitará y no aparecerá en la página.
:::

**Diferencias:** Haz click aquí para acceder a la [vista de diferencias](/es/platform/core/key-concepts.html#revertir-un-cambio), en la cual puedes comparar los cambios entre diferentes versiones de tu menú.

Por defecto, inicias comparando la versión publicada con la versión editable. Usa los selectores de versiones para comparar con versiones de respaldo.

:::tip Tip
Cada vez que publicas una versión, la versión que estaba publicada pasa a ser una versión de respaldo.

Por defecto se guardan hasta 20 respaldos de tal forma que los veinte respaldos más recientes se pueden comparar, restaurar, y hacer rollback.

Para más información sobre el versionamiento, revisa la sección de [Versionado](/es/platform/core/key-concepts.html#versionado).
:::

**Actividad/Comentarios:** Solo aparece habilitada si tienes activada la [revisión en equipo](/es/platform/core/key-concepts.html) habilitada. Al hacerle click, despliega una barra lateral con el historial de actividad y comentarios del menú.

Al final de la barra lateral, ves una caja de texto donde puedes escribir un comentario. Junto a cada actividad, puedes hacer click en _ver detalle_ para mostrar la información completa de ese registro de actividad.

## Crear un Menú
Para crear un Menú, sigue estos pasos:

1. Dentro del menú principal de Modyo Platform, expande Channels y haz click en Sitios.
2. Selecciona el sitio que desees agregar un nuevo menú.
3. Haz click en **Navegación**.
4. Haz click en **+ Nuevo Menú**.
5. Llena el nombre e identificador y haz click en **Crear**.
6. Personaliza el menú agregando o editando items.
7. Una vez terminado, haz click en **Publicar**.

:::tip Tip
Tu menú en este momento ya es público pero no se manda a llamar. Se necesita usar una plantilla para que se despliegue en pantalla. Modyo ofrece un snippet de uso general en **Snippets, General, menu** y es llamado en la plantilla `base` usando <pre v-pre>`{% snippet 'shared/general/menu' %}`</pre>.
:::

Para más información de como se crea y publica un menú personalizado, ve [Creación de Mega Menú](/es/platform/tutorials/how-to-create-a-menu.html).

**Acción principal**

- **Guardar:** Guarda todos los cambios del menú.
- **Enviar a revisión:** Cambia el estado del menú a "Esperando revisión". En este estado sigues haciendo cambios, pero cada cambio será notificado vía correo a los revisores asignados.
- **Rechazar:** Vuelve al estado "En edición", notificando a los revisores que el elemento fue rechazado.
- **Publicar:** Una vez que el menú fue aprobado, podrás ir a la vista de [publicación conjunta](/es/platform/channels/sites.html#revision-y-publicacion-conjunta) para publicar tu navegación.

En la sección lateral derecha puedes ver una barra que cambia de acuerdo al ítem seleccionado en el área principal. En esta sección puedes ver las opciones:

- **Nombre:** Nombre del elemento que aparecerá en el sitio.
- **Page asociado:** Se puede asociar directamente a una página o a una URL personalizada.
- **URL:** Si escogiste una URL personalizada en el elemento anterior, tienes diferentes opciones para configurar este ítem:
	- HTTP(s): Apunta a una dirección usando HTTP(s). Ejemplos:
		- http://www.example.com
		- https://www.example.com
	- URL relativa y ancla: Apunta a una dirección relativa a esta página o a una sección ancla. Ejemplos:
		- relative-page
		- /relative-page
		- #anchor
	- Teléfonos: Genera una liga con el URI `tel`. Ejemplos:
		- tel:+569-123-45678
		- tel:912345678
	- SMS: Genera una liga con el URI `sms`. Ejemplos:
		- sms:+569-123-45678
		- sms:+569-123-45678,9-123-45678
		- sms:+569-123-45678,9-123-45678?body=hello%20there&param1=a%20value
	- Email: Genera una liga con el URI `mailto`. Ejemplos:
		- mailto:info@example.com?subject=subject&cc=cc@example.com
- **Abrir en pestaña nueva:** Le añade el atributo `target='blank'` al elemento HTML del item del menú, para que al hacerle click, se abra en una pestaña nueva.
- **Privado:** Hace que el elemento seleccionado aparezca visible solo cuando hay una sesión de usuario activa en el sitio.
- **Segmentos:** Si hay segmentos creados, también podrás segmentar este elemento para que los usuarios puedan ver este ítem de menú solo cuando tengan una sesión activa y que además se encuentren dentro de los segmentos seleccionados.

## Ejemplos de Menu

El snippet general `menu` puede satisfacer las necesidades básicas de un sitio, desplegando un menú en forma de dropdown. A continuación, se explican las partes más importantes de este snippet y como se puede extender a más funcionalidades.

Las primeras líneas encapsuladas por <span v-pre>{{ }} o {% %}</span> pertenecen a Liquid y son utilizadas para asignar variables o comenzar un bucle para desplegar información del menú.

El siguiente listado describe las variables importantes para el menú:

- menu: Esta variable toma el menú con identificador `main` dentro de Modyo Platform -> Navegación.
- items_to_show: Toma los ítems de menú que son visibles.
- active: Utilizado para agregar una clase CSS llamada `active` en caso de que éste ítem sea activado.
- children_to_show: Si existen hijos del ítem actual, toma los items en esta variable y los despliega como segundo nivel en la jerarquía del menú.

Al entrar a la sección de Plantillas de tu sitio en Modyo Platform, podrás hacer click en el snippet general `menu` para ver el HTML del menú. Se ve de la siguiente manera:

`menu`

```html
{% assign menu = menus['main'] %}
<ul class="nav navbar-nav" role="menu" aria-label="Main menu {{responsive}}">
	{% assign items_to_show = menu.items | visible_items %}
	{% for item in items_to_show %}
	{% assign active = item.url | active_page: request.url %}
	{% assign children_to_show = item.child_items | visible_items %}
	{% if children_to_show.size > 0 %}
	<li class="nav-item nav-item-{{ item.parameterized_label }} dropdown menu-item {{ active }}" role="none">
		<a target="{{ item.target }}" rel="{{ item.target | item_rel}}" class="nav-link dropdown-toggle {% for child in children_to_show %}{% if child.url == request.url  %}active{% endif %}{% endfor %}" href="javascript:void(0)" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="dropdown{{ item.label | replace: ' ','' | replace: 'ñ','n' | capitalize }}Button{{ responsive }}" role="menuitem">
			{{ item.label }} <span class="sr-only">dropdown</span>
		</a>
		<div class="submenu-{{ item.label | replace: ' ','' | replace: 'ñ','n' | capitalize }} dropdown-menu" aria-labelledby="dropdown{{ item.label | replace: ' ','' | replace: 'ñ','n' | capitalize }}Button{{responsive}}" aria-expanded="false">
			{% for child in children_to_show %}
			<a target="{{ child.target }}" rel="{{ child.target | item_rel}}" class="dropdown-item" href="{{ child.url }}" {% if child.url == request.url %}aria-current="page"{% endif %}>
				{{ child.label }}
			</a>
			{% endfor %}
		</div>
		{% else %}
	<li class="nav-item nav-item-{{ item.parameterized_label }} {{ active }}" role="none">
		<a target="{{ item.target }}" class="nav-link" rel="{{ item.target | item_rel}}" href="{{ item.url }}" {% if item.url == request.url %}aria-current="page" {% endif %} role="menuitem" aria-label="{{ item.label }} {{responsive}}">{{ item.label }}</a>
		{% endif %}
	</li>
	{% endfor %}
</ul>
```

### Menú con forma de lista

A continuación tenemos un menú que también llama a `main`, pero ahora en forma de lista a diferencia del snippet general que utiliza un dropdown:

```html
{% assign menu = menus['main'] %}
<ul role="menu" aria-label="Main menu">
	{% assign items_to_show = menu.items | visible_items %}
	{% for item in items_to_show %}
	{% assign children_to_show = item.child_items | visible_items %}
	<li class="nav-item" role="none">
		<a href="{{ item.url }}" target="{{ item.target }}" class="nav-link" {% if item.url == request.url %}aria-current="page" {% endif %} role="menuitem" aria-label="{{ item.label }}">{{ item.label }}</a>
		{% if children_to_show.size > 0 %}
		<ul>
			{% for child in children_to_show %}
			<li class="nav-item" role="none">
				<a href="{{ child.url }}" target="{{ child.target }}" class="nav-link" {% if child.url == request.url %}aria-current="page" {% endif %} role="menuitem" aria-label="{{ child.label }}">{{ child.label }}</a>
				{% assign children_to_show = child.child_items | visible_items %}
				{% if children_to_show.size > 0 %}
				<ul>
					{% for grandchild in children_to_show %}
					<li class="nav-item" role="none">
						<a href="{{ grandchild.url }}" target="{{ grandchild.target }}" class="nav-link" {% if grandchild.url == request.url %}aria-current="page" {% endif %} role="menuitem" aria-label="{{ grandchild.label }}">{{ grandchild.label }}</a>
					</li>
					{% endfor %}
				</ul>
				{% endif %}
			</li>
			{% endfor %}
		</ul>
		{% endif %}
	</li>
	{% endfor %}
</ul>
```

### Menu tres niveles

Para poder desplegar un menú de tres niveles, se tiene que agregar otro bucle que considere si los items hijos contienen más items. Para esto, se asigna la variable `grandchildren` al final del primer bucle y este tiene que iterar sobre los items de los hijos (osase los items nietos):

```html
{% assign menu = menus['main'] %}
<ul class="nav navbar-nav" role="menu" aria-label="Main menu {{responsive}}">
	{% assign items_to_show = menu.items | visible_items %}
	{% for item in items_to_show %}
	{% assign active = item.url | active_page: request.url %}
	{% assign children_to_show = item.child_items | visible_items %}
	{% if children_to_show.size > 0 %}
	<li class="nav-item nav-item-{{ item.parameterized_label }} dropdown menu-item {{ active }}" role="none">
		<a target="{{ item.target }}" class="nav-link dropdown-toggle {% for child in children_to_show %}{% if child.url == request.url  %}active{% endif %}{% endfor %}" href="javascript:void(0)" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="dropdown-{{forloop.index}}-Button{{ responsive }}" role="menuitem">
			{{ item.label }} <span class="sr-only">dropdown</span>
		</a>
		<div class="submenu-{{forloop.index}} dropdown-menu" aria-labelledby="dropdown-{{forloop.index}}-Button{{responsive}}" aria-expanded="false">
			{% for child in children_to_show %}
			<a href="{{ child.url }}" target="{{ child.target }}" class="dropdown-item" {% if child.url == request.url %}aria-current="page"{% endif %}>{{ child.label }}</a>
			{% assign grandchildren_to_show = child.child_items | visible_items %}
			{% if grandchildren_to_show.size > 0 %}
			<ul class="m-0 p-0">
				{% for grandchild in grandchildren_to_show %}
				<li class="list-unstyled m-0 p-0">
					<a href="{{ grandchild.url }}" target="{{ grandchild.target }}" class="dropdown-item small" {% if grandchild.url == request.url %}aria-current="page"{% endif %}><span class="pl-2">{{ grandchild.label }}</span></a>
				</li>
				{% endfor%}
			</ul>
			{% endif %}
			{% endfor %}
		</div>
		{% else %}
	<li class="nav-item nav-item-{{ item.parameterized_label }} {{ active }}" role="none">
		<a href="{{ item.url }}" target="{{ item.target }}" class="nav-link" {% if item.url == request.url %}aria-current="page" {% endif %} role="menuitem" aria-label="{{ item.label }} {{responsive}}">{{ item.label }}</a>
		{% endif %}
	</li>
	{% endfor %}
</ul>
```