---
search: true
title: Creación de un Site Stage
meta:
  - name: description
    content: Bienvenido a un nuevo tutorial de la serie de entrenamiento de Modyo. En este tutorial seguiras los pasos de integración y despliegue (CI/CD) creando un site stage para trabajar en tu sitio sin tocar la rama principal. 
---

# {{ $frontmatter.title }}

{{ $frontmatter.meta[0].content }}

## Introducción

Site stages te permite crear ramas en tus sitios, permitiendo que tus desarrolladores puedan trabajar en un sitio sin afectar lo que está publicado en la rama principal. Una razón para crear stages es para aislar el desarrollo de cada tarea, cada stage cuenta con su propio ciclo de estados (Borrador, Cambios Pendientes, Publicado). Esto presenta una alternativa a tener todo el desarrollo en la rama principal, ya que con stages puedes probar diferentes widgets y plantillas sin afectar el trabajo de tu equipo.

En este tutorial seguiremos usando la marca ficticia "Dynamic Bank", pero ahora nos enfocamos en expandir el menú hacia dos nuevos productos. Al terminar de trabajar en el nuevo stage, se van a sincronizar los cambios a la rama principal.

## Requisitos Previos

Completado los tutoriales:

- [Creación y Publicación de Contenidos](/es/platform/tutorials/how-to-create-content)
- [Creación de un Sitio Básico](/es/platform/tutorials/how-to-create-home)

Conocimientos de:

- HTML
- CSS
- JS
- La plataforma Modyo

## Paso 1: Crear un nuevo stage

1. En la plataforma, haz click en **Channels**, selecciona **Sitios**.
1. Haz click en el Sitio **Bank** y en **Configuración del sitio** selecciona **Stages**.
1. Haz click en el botón **+ Nuevo Stage**.
1. En la pantalla que aparece, selecciona los valores:
 - Stage de origen: **main**
 - Nombre: **nuevo-feature**

<img src="/assets/img/tutorials/how-to-create-a-site-stage/new-stage.png" style="width: 400px;" alt="Create a new Stage modal.">

5. Haz click en **Crear**.

Al tener stages, la interfaz cambia para mostrar en que stage se está trabajando.

<img src="/assets/img/tutorials/how-to-create-a-site-stage/stage-UI.png" style="width: 400px;" alt="Create a new Stage modal.">
 
## Paso 2: Crear nuevos items en Navegación

Al estar en un stage, todos los cambios que realices quedarán solo en este stage hasta que se integren con otro. El siguiente paso es agregar los items en Navegación, para crearlos sigue estos pasos:

1. En el menú lateral, selecciona **Navegación**.
1. Haz click en el menú **main**.
1. Agrega dentro de **Products** un subnivel llamado **Tarjeta de Crédito**.
1. Agrega dos items dentro de **Tarjeta de Crédito** llamados: **Platino** y **Oro**.

Al terminar, tu menú debe lucir así:

<img src="/assets/img/tutorials/how-to-create-a-site-stage/navegacion.png" style="width: 600px;" alt="After adding the two products, this is how the navigation should look like.">

> Al hacer click en vista previa, nota que el menú actual solo despliega hasta 2 niveles, por lo cual no es posible ver los niveles Oro y Platino.

<img src="/assets/img/tutorials/how-to-create-a-site-stage/menu2lvl.png" style="width: 400px;" alt="Our current menu snippet only supports lists of 2 levels maximum.">

## Paso 3: Generar una nueva plantilla para menús de 3 niveles

Se tiene que crear una nueva plantilla que recorra los 3 niveles de profundidad del menú para que se despliegue correctamente en la página. Para crear la plantilla, sigue estos pasos:

1. En el menú lateral, selecciona **Plantillas**.
1. Haz click en **Snippets** y en la sección **Personalizado** haz click en **+**.
1. Escribe `menu3lvl` como la Ruta.
1. Pega el siguiente código:  

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
            {% assign children_to_show = child.child_items | visible_items %}
            {% if children_to_show.size > 0 %}
            <ul class="m-0 p-0">
                {% for grandchild in children_to_show %}
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
> Este código recorre los items "hijos" y "nietos" del menú utilizando Liquid. 

5. Haz click en Guardar. 
6. En la sección General de Snippets, abre `header`.
7. Reemplaza la línea 17 para que ahora importe el snippet nuevo:
`{% snippet "menu3lvl" %}`
8. Haz click en Guardar. 
9. Haz click en modo vista previa y activa las casillas para que muestren el contenido en estado borrador. Ahora el menú debe mostrar los 3 niveles correctamente.

<img src="/assets/img/tutorials/how-to-create-a-site-stage/menu3lvl.png" style="width: 400px;" alt="Our new menu snippet now supports lists of 3 levels.">

## Paso 4: Sincronizar los cambios a la rama principal

Para sincronizar tus cambios hacia la rama principal, sigue estos pasos:

1. En el menú lateral, haz click en **Resumen**.
1. Haz click en **Publicar**.
1. Selecciona todos los archivos que se van a publicar y haz click en **Publicar**.
1. Desde el menú lateral, expande la rama `nueva-feature` y haz click en la rama `main`.
1. En la pantalla de **Resumen**, haz click en **Sincronizar**.
1. Selecciona la rama `nueva-feature` para traer los cambios de esta rama. 
1. Selecciona todos los archivos que quieres sincronizar.
1. Haz click en **Sincronizar**.

## Conclusiones

¡Felicidades! Haz finalizado el curso de site stages de Modyo.

En este tutorial trabajaste usando integración y despliegue continuo (CI/CD) con site stages. Esta herramienta te permite colaborar de nuevas maneras con tu equipo sin interrumpir el flujo de la rama principal. En este módulo combinaste los siguientes elementos de [Modyo Channels](/es/platform/channels/):

* [Navegación](/es/platform/channels/navigation.html)
* [Plantillas](/es/platform/channels/templates.html)
* [Site Stages](/es/platform/channels/sites.html#stages)

