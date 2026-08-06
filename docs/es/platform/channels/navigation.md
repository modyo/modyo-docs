---
search: true
---

# Navigation

La navegación permite organizar y presentar un listado de elementos para facilitar el acceso de los usuarios a los puntos clave de tu sitio.

Esta sección describe un listado anidado de elementos que aparecerán en el sitio al usar el tag <span v-pre>`{% menu %}`</span> en [Plantillas](/es/platform/channels/templates).

La navegación solo permite tres niveles de profundidad: un listado principal y hasta dos subelementos anidados en cada uno de los ítems principales. Por defecto, al crear un sitio, Modyo incluye una plantilla y un menú básico que puedes modificar según tus necesidades.

En la parte superior de la vista, encontrarás el estado de publicación del menú:

- **Publicado**: Este estado aparece después de haber hecho una publicación y cuando las versiones editable y publicada son iguales.
- **Cambios pendientes**: Este estado aparece si ya hay una versión publicada, pero hay cambios pendientes de publicar en tu versión editable.
- **En revisión**: Este estado aparece cuando esté habilitada la [Revisión en Equipo](/es/platform/core/key-concepts) y se haya enviado a revisión la versión editable.
- **Aprobado**: Este estado aparece cuando esté habilitada la [Revisión en Equipo](/es/platform/core/key-concepts) y si se cumplieron las condiciones de revisión del elemento. Si se encuentra en este estado, tus plantillas ya pueden ser publicadas.

En la parte superior derecha, encuentras la última fecha de publicación y las acciones disponibles:

**Vista previa**: Al hacer clic en este icono, se abre una nueva pestaña con el modo vista previa del menú, donde puedes visualizar todos los cambios.

:::warning Atención
Puedes previsualizar los cambios como usuario sin sesión o usuario con sesión de Modyo. Para esto, es recomendable iniciar o cerrar la sesión de Modyo en el sitio antes de entrar al modo vista previa. Esto debido a que iniciar o cerrar sesión dentro del modo de vista previa puede generar errores de seguridad como _x-frame-options_ o _mixed-content_, dependiendo de la configuración de dominios personalizados y SSL del sitio.
:::

:::warning Atención
El menú que has creado solo se visualizará en una página si lo agregas a través de una plantilla publicada. De lo contrario, el menú no se solicitará y no aparecerá en la página.
:::

**Diferencias**: Haz clic aquí para acceder a la [vista de diferencias](/es/platform/core/key-concepts#revertir-un-cambio), en la cual puedes comparar los cambios entre diferentes versiones de tu menú.

Por defecto, inicias comparando la versión publicada con la versión editable. Usa los selectores de versiones para comparar con versiones de respaldo.

:::tip Tip
Cada vez que publicas una versión, la versión que estaba publicada pasa a ser una versión de respaldo.

Por defecto, se guardan hasta 20 respaldos, de tal forma que los veinte respaldos más recientes se pueden comparar, restaurar y hacer rollback.

Para más información sobre el versionamiento, revisa la sección de [Versionado](/es/platform/core/key-concepts#versionado).
:::

**Actividad/Comentarios**: Solo aparece habilitada si tienes activada la [revisión en equipo](/es/platform/core/key-concepts). Al hacer clic, despliega una barra lateral con el historial de actividad y comentarios del menú.

Al final de la barra lateral, ves una caja de texto donde puedes escribir un comentario. Junto a cada actividad, puedes hacer clic en _ver detalle_ para mostrar la información completa de ese registro de actividad.

## Crear un Menú
Para crear un Menú, sigue estos pasos:

1. Dentro del menú principal de Modyo Platform, expande Channels y haz clic en Sitios.
2. Selecciona el sitio al que desees agregar un nuevo menú.
3. Haz clic en **Navegación**.
4. Haz clic en **Nuevo Menú**.
5. Ingresa el nombre e identificador y haz clic en **Crear**.
6. Personaliza el menú agregando o editando ítems.
7. Una vez terminado, haz clic en **Publicar**.

:::tip Tip
Tu menú en este momento ya es público, pero no se manda a llamar. Se necesita usar una plantilla para que se despliegue en pantalla. Modyo ofrece un snippet de uso general en **Snippets, General, menu**, que el snippet **header** invoca dos veces (una para la barra de escritorio y otra para el panel lateral en móvil) y que llega a tus páginas porque la plantilla `base` incluye <pre v-pre>`{% snippet 'shared/general/header' %}`</pre>.
:::

**Acción principal**

- **Guardar**: Guarda todos los cambios del menú.
- **Enviar a revisión**: Cambia el estado del menú a "Esperando revisión". En este estado sigues haciendo cambios, pero cada cambio será notificado vía correo a los revisores asignados.
- **Rechazar**: Vuelve al estado "En edición", notificando a los revisores que el elemento fue rechazado.
- **Publicar**: Una vez que el menú fue aprobado, podrás ir a la vista de [publicación conjunta](/es/platform/channels/sites#revision-y-publicacion-conjunta) para publicar tu navegación.

En la sección lateral derecha, puedes ver una barra que cambia de acuerdo al ítem seleccionado en el área principal. En esta sección, puedes ver las opciones:

- **Nombre**: Nombre del elemento que aparecerá en el sitio.
- **Descripción**: Texto libre para acompañar al ítem. No se imprime solo en el sitio: queda disponible en Liquid como `menu_item.description` para que lo uses en tu propio marcado, por ejemplo como bajada del ítem o como texto de una notificación.
- **Clases**: Cadena que se utilizará en un atributo de clase para una etiqueta HTML, por ejemplo `mdi mdi-circle`. Al igual que la descripción, queda disponible en Liquid como `menu_item.classes` y eres tú quien la imprime en el atributo `class` de tu marcado. Revisa ambos atributos en [Objetos](/es/platform/channels/liquid-markup/objects.html#menu).
- **Layout Page asociado**: Destino del ítem. Puedes elegir una de las páginas del sitio, **URL** para escribir una dirección personalizada, o **Búsqueda en el sitio** para apuntar al buscador del sitio.
- **URL**: Si escogiste **URL** en el elemento anterior, tienes diferentes opciones para configurar este ítem:
	- HTTP(s): Apunta a una dirección usando HTTP(s). Ejemplos:
		- http://www.example.com
		- https://www.example.com
	- URL relativa y ancla: Apunta a una dirección relativa a esta página o a una sección ancla. Ejemplos:
		- relative-page
		- /relative-page
		- #anchor
	- Teléfonos: Genera un enlace con el URI `tel`. Ejemplos:
		- tel:+569-123-45678
		- tel:912345678
	- SMS: Genera un enlace con el URI `sms`. Ejemplos:
		- sms:+569-123-45678
		- sms:+569-123-45678,9-123-45678
		- sms:+569-123-45678,9-123-45678?body=hello%20there&param1=a%20value
	- Email: Genera un enlace con el URI `mailto`. Ejemplos:
		- mailto:info@example.com?subject=subject&cc=cc@example.com
- **Abrir en una pestaña nueva**: Solo aparece cuando el destino es una **URL**. Añade los atributos `target="_blank"` y `rel="noopener noreferrer"` al enlace del ítem, para que al hacer clic se abra en una pestaña nueva.
- **Privado**: Hace que el elemento seleccionado sea visible solo cuando hay una sesión de usuario activa en el sitio.
- **Segmentos**: Si hay segmentos creados, también podrás segmentar este elemento para que los usuarios puedan ver este ítem de menú solo cuando tengan una sesión activa y que además se encuentren dentro de los segmentos seleccionados.

## El tag menu

El tag <span v-pre>`{% menu %}`</span> imprime un menú completo, con sus dropdowns, sin que tengas que escribir el marcado. Es el camino rápido: si necesitas control total sobre el HTML, arma el menú a mano recorriendo `menus`, como se muestra en los ejemplos de más abajo.

### Cómo se invoca

El tag no recibe parámetros: lee la variable `menu` del contexto, así que tienes que asignarla antes con el identificador del menú que quieres imprimir.

```liquid
{% assign menu = menus['main'] %}
{% menu %}
```

Las variables que asignas en una plantilla o en un snippet quedan disponibles en los snippets que se invocan desde ahí, de modo que puedes hacer el `assign` una sola vez y reutilizarlo.

:::warning Atención
Si invocas el tag sin haber asignado `menu`, o si el identificador no corresponde a ningún menú del sitio, la página imprime un comentario `<!-- Liquid Error -->` en lugar del menú.
:::

### HTML que genera

El tag emite siempre la misma estructura, pensada para el sistema de dropdown de Bootstrap:

```html
<ul class="nav navbar-nav">
	<li class='nav-item nav-item-inicio active'>
		<a class='nav-link ' href='https://tusitio.com/mi-sitio/inicio'><span>Inicio</span></a>
	</li>
	<li class='nav-item nav-item-productos dropdown menu-item'>
		<a class='nav-link dropdown-toggle' href='https://tusitio.com/mi-sitio/productos'><span>Productos</span></a>
		<div class='submenu-1 dropdown-menu'>
			<a class='dropdown-item' href='https://tusitio.com/mi-sitio/productos/cuentas'><span>Cuentas</span> </a>
		</div>
	</li>
</ul>
```

Estos son los ganchos que tienes para aplicar tus estilos:

| Elemento | Clases |
| -------- | ------ |
| Lista contenedora | `nav navbar-nav` |
| Ítem | `nav-item` y `nav-item-` seguido de la etiqueta del ítem parametrizada, por ejemplo `nav-item-mis-productos`. Se agrega `dropdown menu-item` si el ítem tiene hijos y `active` si el ítem corresponde a la página que se está viendo |
| Enlace del ítem | `nav-link`, más `dropdown-toggle` si el ítem tiene hijos |
| Contenedor de los hijos | `submenu-N dropdown-menu`, donde `N` es la posición del ítem padre entre los ítems visibles, partiendo de 0 |
| Enlace de un hijo | `dropdown-item` |

La etiqueta de cada ítem viene envuelta en un `<span>`, tanto en el primer nivel como en el segundo.

:::warning Atención
El tag renderiza solo dos niveles: los ítems raíz y sus hijos directos. Aunque la navegación te deja anidar hasta tres niveles, los nietos no aparecen en el HTML que genera el tag. Si necesitas el tercer nivel, arma el menú a mano, como hace el snippet general `menu`.
:::

### Enlaces que genera

- Si el ítem tiene marcada la opción **Abrir en una pestaña nueva**, el enlace se emite con `target="_blank"` y `rel="noopener noreferrer"`.
- Las URLs que empiezan con `http://`, `https://`, `tel:`, `mailto:` o `sms:` se emiten tal cual.
- Cualquier otra URL se reescribe como absoluta sobre la URL base del sitio. Un ítem con la URL `/contacto` se emite como `https://tusitio.com/mi-sitio/contacto`, y un ancla como `#seccion` se emite como `https://tusitio.com/mi-sitio/#seccion`, es decir, apuntando a la portada del sitio y no a la página en la que está el visitante.

### Ítems que se muestran

- Los ítems marcados como **Privado** no se imprimen para los visitantes sin sesión.
- Si además tienen segmentos asociados, solo se imprimen para los usuarios cuya sesión pertenece a alguno de esos segmentos.
- Las dos reglas se aplican por igual a los ítems raíz y a sus hijos: si un ítem padre queda oculto, su dropdown tampoco se imprime.

El menú resultante se reutiliza mientras no cambien la página, el usuario ni la versión del menú, así que los cambios que publiques en la navegación se ven en la siguiente visita.

## Ejemplos de Menú

El snippet general `menu` puede satisfacer las necesidades básicas de un sitio, desplegando un menú en forma de dropdown. A continuación, se explican las partes más importantes de este snippet y cómo se puede extender a más funcionalidades.

Las primeras líneas encapsuladas por <span v-pre>{{ }} o {% %}</span> pertenecen a Liquid y se utilizan para asignar variables o comenzar un bucle para desplegar información del menú.

A diferencia de los ejemplos que vienen más abajo, este snippet no asigna la variable `menu`: la hereda del snippet **header**, que la declara en su primera línea con <span v-pre>`{% assign menu = menus['main'] %}`</span> y desde ahí lo invoca dos veces. Si copias este marcado a otra plantilla, acuérdate de asignar `menu` antes de usarlo.

El siguiente listado describe las variables importantes para el menú:

- menu: Menú que se va a imprimir. Se hereda del snippet que invoca a `menu`; si armas el tuyo desde cero, asígnalo con <span v-pre>`{% assign menu = menus['main'] %}`</span>.
- items_to_show: Toma los ítems de menú que son visibles.
- active: Utilizado para agregar una clase CSS llamada `active` en caso de que este ítem sea activado.
- children_to_show: Si existen hijos del ítem actual, toma los ítems en esta variable y los despliega como segundo nivel en la jerarquía del menú.
- grandchildren_to_show: Si existen hijos del ítem hijo, toma los ítems en esta variable y los despliega como tercer nivel dentro del mismo dropdown.

Al entrar a la sección de Plantillas de tu sitio en Modyo Platform, podrás hacer clic en el snippet general `menu` para ver el HTML del menú. Se ve de la siguiente manera:

`menu`

```html
<ul class="nav navbar-nav justify-content-end flex-grow-1" role="menu" aria-label="Main menu {{responsive}}">
	{% assign items_to_show = menu.items | visible_items %}
	{% for item in items_to_show %}
	{% assign active = item.url | active_page: request.url %}
	{% assign children_to_show = item.child_items | visible_items %}
	<li class="nav-item nav-item-{{ item.parameterized_label }} dropdown menu-item {{ active }}" role="none">
		{% if children_to_show.size > 0 %}
		<button type="button" class="nav-link {{ active }} dropdown-toggle {% for child in children_to_show %}{% if child.url == request.url %}active{% endif %}{% endfor %}" data-bs-toggle="dropdown" aria-expanded="false" id="dropdown{{ item.label | replace: ' ','' | replace: 'ñ','n' | capitalize }}Button{{ responsive }}" role="menuitem">
			{{ item.label }} <span class="visually-hidden">dropdown</span>
		</button>
		{% else %}
		<a target="{{ item.target }}" rel="{{ item.target | item_rel}}" class="nav-link {{ active }}" href="{{ item.url }}" id="dropdown{{ item.label | replace: ' ','' | replace: 'ñ','n' | capitalize }}Button{{ responsive }}" role="menuitem">
			{{ item.label }}
		</a>
		{% endif %}
		{% if children_to_show.size > 0 %}
		<div class="dropdown-menu submenu-{{ item.label | replace: ' ','' | replace: 'ñ','n' | capitalize }}" aria-labelledby="dropdown{{ item.label | replace: ' ','' | replace: 'ñ','n' | capitalize }}Button{{responsive}}">
			{% for child in children_to_show %}
			<a target="{{ child.target }}" rel="{{ child.target | item_rel}}" class="dropdown-item" href="{{ child.url }}" {% if child.url == request.url %}aria-current="page"{% endif %}>
				{{ child.label }}
			</a>
			{% assign grandchildren_to_show = child.child_items | visible_items %}
			{% if grandchildren_to_show.size > 0 %}
			{% for child in grandchildren_to_show %}
			<a target="{{ child.target }}" rel="{{ child.target | item_rel}}" class="dropdown-item small ms-2" href="{{ child.url }}" {% if child.url == request.url %}aria-current="page"{% endif %}>
				{{ child.label }}
			</a>
			{% endfor %}
			{% endif %}
			{% endfor %}
		</div>
		{% endif %}
	</li>
	{% endfor %}
</ul>
```

### Menú con forma de lista

A continuación, tenemos un menú que también llama a `main`, pero ahora en forma de lista, a diferencia del snippet general que utiliza un dropdown:

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

### Menú tres niveles

El snippet general ya despliega el tercer nivel como enlaces indentados dentro del mismo dropdown. Si prefieres agruparlos en una lista anidada, agrega otro bucle que considere si los ítems hijos contienen más ítems: se asigna la variable `grandchildren_to_show` al final del segundo bucle y se itera sobre los ítems nietos:

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