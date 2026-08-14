---
search: true
---

# Variables y Tipos de Datos

En Liquid, trabajas con variables para almacenar y manipular datos. Esta sección cubre cómo crear variables y los diferentes tipos de datos disponibles.

## Variables

Las variables almacenan valores que puedes reutilizar en tu plantilla. Puedes crear tus propias variables o usar las que Modyo proporciona automáticamente.

### Crear variables

Usa `assign` para crear nuevas variables:

```liquid
{% assign nombre = "Juan" %}
{% assign precio = 100 %}
{% assign activo = true %}

{{ nombre }} → Juan
{{ precio }} → 100
```

### Sintaxis de acceso

```liquid
{{ variable }}                    → Muestra el valor
{{ objeto.propiedad }}           → Accede a una propiedad (notación de punto)
{{ objeto['propiedad'] }}        → Acceso con corchetes (necesario si hay espacios)
{{ objeto.anidado.propiedad }}   → Propiedades anidadas
```

**Diferencias entre notación de punto y corchetes:**
- **Punto**: Más simple pero no permite espacios ni variables dinámicas
- **Corchetes**: Permite espacios, guiones y usar variables como claves

```liquid
{{ producto.titulo }}              → Funciona
{{ producto['titulo'] }}           → También funciona
{{ producto['precio-especial'] }}  → Necesario con guiones
{{ producto[nombre_variable] }}    → Acceso dinámico con variable
```

## Tipos de Datos

Liquid en Modyo soporta los siguientes tipos de datos:

### Strings (cadenas de texto)

Las cadenas deben estar entre comillas simples o dobles:

```liquid
{% assign mensaje = "Hola mundo" %}
{% assign nombre = 'Juan' %}
{{ mensaje }} → Hola mundo
```

### Numbers (números)

```liquid
{% assign precio = 100 %}         → Entero
{% assign descuento = 0.15 %}     → Decimal
{{ precio | minus: 10 }}          → 90
```

### Booleans (booleanos)

```liquid
{% assign activo = true %}
{% assign publicado = false %}

{% if activo %}
  Este contenido está activo
{% endif %}
```

### Nil (nulo)

Representa la ausencia de valor:

```liquid
{% if user == nil %}
  No hay usuario logueado
{% endif %}
```

### Arrays (arreglos)

Colecciones ordenadas de elementos:

```liquid
{% assign productos = spaces['tienda'].types['producto'].entries %}

{{ productos[0].fields.name }}     → Primer elemento (índice 0)
{{ productos[2] }}                  → Tercer elemento (índice 2)
{{ productos.first.fields.name }}  → Primer elemento (método .first)
{{ productos.last.fields.name }}   → Último elemento (método .last)
{{ productos.size }}                → Cantidad de elementos

{% for producto in productos %}
  {{ forloop.index }}: {{ producto.fields.name }}
{% endfor %}
```

**Nota sobre índices**: Los arrays en Liquid comienzan en 0, por lo que el primer elemento es `[0]`, el segundo es `[1]`, etc.

### Hashes (objetos/diccionarios)

Colecciones de pares clave-valor:

```liquid
{% assign config = site.metadata %}

{{ config.theme }}                  → Notación de punto
{{ config['theme'] }}               → Notación de corchetes
{{ config['color-primary'] }}       → Necesario con guiones

{% for item in config %}
  {{ item[0] }}: {{ item[1] }}     → Clave: Valor
{% endfor %}
```

## Operaciones con Tipos de Datos

### Conversión de tipos

```liquid
{{ "100" | plus: 0 }}              → Convierte string a número
{{ 100 | append: "" }}              → Convierte número a string
```

### Verificación de tipos

```liquid
{% if productos.size > 0 %}
  Hay productos disponibles
{% elsif productos == empty %}
  No hay productos
{% endif %}
```

### Valores por defecto

```liquid
{{ user.name | default: "Invitado" }}
{{ producto.fields.precio | default: 0 }}
```

:::tip Buena práctica
Siempre usa `default` cuando no estés seguro si un valor existe para evitar mostrar contenido vacío.
:::

## Objetos Especiales de Modyo

Modyo proporciona objetos predefinidos que contienen información del sistema:

- `user`: Usuario actual
- `site`: Sitio actual  
- `page`: Página actual
- `spaces`: Acceso a espacios de contenido
- `account`: Información de la cuenta

Para una lista completa y detallada de todos los objetos disponibles, consulta la sección [Objetos](/es/platform/channels/liquid-markup/objects.html).

## Variables de Contexto

Además de esos objetos, en cada renderizado la plataforma inyecta un conjunto de variables que describen la página que se está resolviendo. No son contenido: son el contexto con el que trabaja la plantilla, y determinan qué puedes escribir en cada vista.

No todas existen en todos lados. Fuera del contexto donde se inyecta, una variable simplemente no existe y Liquid la imprime vacía, sin ningún aviso, así que un nombre mal escrito y una variable usada fuera de su contexto se ven exactamente igual en la página. Consulta [Comportamiento ante Errores de Renderizado](/es/platform/channels/liquid-markup/basics.html#comportamiento-ante-errores-de-renderizado).

### Siempre disponibles

Estas cuatro colecciones se inyectan en todos los renderizados, sin importar el tipo de página ni si estás en un layout, una vista, un snippet o la plantilla de un widget:

| Variable | Qué contiene |
|----------|--------------|
| `assets` | El gestor de archivos de la cuenta. Se indexa por el UUID del archivo, como en <code v-pre>assets['uuid']</code>. |
| `spaces` | Los espacios de contenido de la cuenta. Se indexa por el identificador del espacio, como en <code v-pre>spaces['blog']</code>. |
| `menus` | Los menús del sitio. Se indexa por el slug del menú, como en <code v-pre>menus['main']</code>. Consulta [Navegación](/es/platform/channels/navigation.html). |
| `vars` | Las variables globales del sitio o, en la plantilla de un widget, las de ese widget. Consulta [Variables globales](/es/platform/channels/global-variables.html). |

### Del contexto de la página

| Variable | Qué contiene | Dónde existe |
|----------|--------------|--------------|
| `content_for_layout` | El HTML ya renderizado de la vista. Marca el punto del layout donde se inserta la página. | Solo en los layouts |
| `page` | La página actual. Consulta [page](/es/platform/channels/liquid-markup/objects.html#page). | Todas menos la de resultados de búsqueda |
| `page_context` | El tipo de página que se resolvió, por ejemplo `context-home`, `context-custom` o `context-content`. Consulta la lista completa en [Bloque body](/es/platform/channels/liquid-markup/tags.html#bloque-body). | Todas |
| `page_name` | El identificador del contexto con un sufijo que indica la vista, casi siempre `-show`, por ejemplo `context-content-show`. | Todas |
| `page_title` | El nombre de la página. En la portada y en la búsqueda es el texto traducido de la plataforma. | Todas |
| `page_id` | `page_name` seguido de la ruta de la página, por ejemplo `context-custom-show-contacto`. En la portada es solo `context-home-show`. | Todas menos la de resultados de búsqueda |
| `url` | La URL que se está resolviendo, incluida la ruta de la categoría o el slug de la entrada cuando corresponde. | Todas menos la de resultados de búsqueda |
| `current_layout_page` | La página de la que sale el layout en uso. | Todas menos la portada y la de resultados de búsqueda |
| `page_grid` | La grilla de la página, la que se pasa a <code v-pre>{% snippet page_grid %}</code>. Consulta [grid](/es/platform/channels/liquid-markup/objects.html#grid). | Portada y páginas personalizadas |

:::tip Tip
El tag <code v-pre>{% body %}</code> escribe `page_context`, `page_name` y `page_id` en el atributo `class` de la etiqueta `body`. Mirar el código fuente de una página publicada te dice en qué contexto se resolvió, sin tener que imprimir nada en la plantilla.
:::

### De las páginas de contenido

| Variable | Qué contiene |
|----------|--------------|
| `page_scope` | `index` cuando se resolvió el listado y `show` cuando se resolvió una entrada. |
| `entries` | Las entradas del listado. Solo cuando `page_scope` es `index`. |
| `entry` | La entrada que corresponde al slug de la URL. Solo cuando `page_scope` es `show`. |
| `category_path` | La ruta de categoría tomada de la URL, sin el slug de la entrada. Queda vacía cuando la URL no trae categoría. |
| `category` | La categoría que corresponde a `category_path`. |

### De la página de resultados de búsqueda

| Variable | Qué contiene |
|----------|--------------|
| `site_search` | La búsqueda ya resuelta, con sus resultados. Consulta [sitesearch](/es/platform/channels/liquid-markup/objects.html#sitesearch). |
| `params_query` | El término buscado, saneado y escapado, listo para imprimirse. Solo existe si la URL trae el parámetro. |
| `params_more` | El filtro adicional de la búsqueda, saneado y escapado. Solo existe si la URL lo trae. |

### De las páginas de Origination

En las páginas de Origination se inyectan además `origination`, el flujo de la página; `pending_submissions`, las respuestas pendientes del usuario en ese flujo; `submission`, la respuesta que se está resolviendo; y, mientras esa respuesta está en curso, `current_step` y `current_task`.
