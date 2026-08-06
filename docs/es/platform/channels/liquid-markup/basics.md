---
search: true
---

# Conceptos Básicos

Esta sección cubre los conceptos fundamentales de Liquid que necesitas entender antes de trabajar con plantillas en Modyo.

## ¿Qué es Liquid?

Liquid es un lenguaje de plantillas que procesa texto y genera salida dinámica. Funciona en dos etapas:

- **Análisis (Parse)**: Liquid lee tu plantilla y encuentra el código Liquid
- **Renderizado (Render)**: Liquid ejecuta el código y genera la salida final

### Principios de diseño

Liquid fue diseñado con requisitos específicos:

- **Marcado limpio**: Produce HTML legible y fácil de mantener
- **Seguro**: Los usuarios pueden editar plantillas sin ejecutar código inseguro
- **Sin estado**: Compilación y renderizado están separados para mejor rendimiento
- **Flexible**: Funciona con HTML, JSON, XML, emails y más

## Sintaxis Básica

Liquid usa dos tipos de delimitadores para distinguir entre contenido estático y código dinámico:

### Salida (output)

Las dobles llaves `{{ }}` muestran el valor de una expresión:

```liquid
{{ producto.nombre }}
{{ 'Hola mundo' }}
{{ 100 | plus: 50 }}
```

Todo dentro de `{{ }}` se evalúa y se muestra en la página.

### Etiquetas (tags)

Las llaves con porcentaje `{% %}` ejecutan lógica pero no producen salida visible:

```liquid
{% if user %}
  Bienvenido!
{% endif %}

{% assign precio = 100 %}
```

### Comentarios

Los comentarios no aparecen en la salida final:

```liquid
{%- comment -%}
  Este es un comentario que no se verá
{%- endcomment -%}
```

## Tipos de Datos Básicos

Liquid reconoce estos tipos de datos:

- **String**: Texto entre comillas (`"texto"` o `'texto'`)
- **Number**: Números enteros o decimales (`42`, `3.14`)
- **Boolean**: Verdadero o falso (`true`, `false`)
- **Nil**: Ausencia de valor (`nil`)
- **Array**: Lista de valores
- **Hash**: Pares clave-valor

Para detalles completos sobre tipos de datos y operaciones, consulta [Variables y Tipos de Datos](/es/platform/channels/liquid-markup/variables).

## Valores Truthy y Falsy

En Liquid, estos valores se consideran **falsy** (falso):
- `false`
- `nil`

Todo lo demás se considera **truthy** (verdadero), incluyendo:
- `true`
- Cualquier número (incluso `0`)
- Cualquier string (incluso `""` vacío)
- Arrays vacíos `[]`
- Hashes vacíos `{}`

```liquid
{% if 0 %}
  Esto SÍ se muestra (0 es truthy)
{% endif %}

{% if "" %}
  Esto SÍ se muestra (string vacío es truthy)
{% endif %}

{% if nil %}
  Esto NO se muestra (nil es falsy)
{% endif %}
```

## Control de Espacios en Blanco

Liquid genera espacios y saltos de línea alrededor del código. Puedes controlar esto con guiones:

### Sin control de espacios

```liquid
{% assign nombre = "Juan" %}
Hola {{ nombre }}!
```

Salida:
```

Hola Juan!
```
(Nota el salto de línea extra)

### Con control de espacios

```liquid
{%- assign nombre = "Juan" -%}
Hola {{ nombre }}!
```

Salida:
```
Hola Juan!
```

Los guiones eliminan espacios:
- `{{-` o `{%-` elimina espacios a la izquierda
- `-}}` o `-%}` elimina espacios a la derecha

## Operadores

### Operadores de comparación

| Operador | Descripción | Ejemplo |
|----------|-------------|---------|
| `==` | Igual a | `{% if precio == 100 %}` |
| `!=` | Diferente de | `{% if estado != 'activo' %}` |
| `>` | Mayor que | `{% if edad > 18 %}` |
| `<` | Menor que | `{% if stock < 10 %}` |
| `>=` | Mayor o igual | `{% if puntos >= 1000 %}` |
| `<=` | Menor o igual | `{% if descuento <= 50 %}` |

### Operadores lógicos

| Operador | Descripción | Ejemplo |
|----------|-------------|---------|
| `and` | Y lógico | `{% if precio < 100 and stock > 0 %}` |
| `or` | O lógico | `{% if vip or premium %}` |

### Operador contains

Verifica si un string contiene otro o si un array contiene un elemento:

```liquid
{% if producto.nombre contains "oferta" %}
  ¡En oferta!
{% endif %}

{% assign frutas = "manzana,pera,uva" | split: "," %}
{% if frutas contains "pera" %}
  Hay peras disponibles
{% endif %}
```

## Orden de Operaciones

Liquid no sigue el orden matemático tradicional. Las operaciones se ejecutan de derecha a izquierda:

```liquid
{{ 10 | plus: 5 | times: 2 }}
```

Se ejecuta como:
- `5 | times: 2` = 10
- `10 | plus: 10` = 20

Para controlar el orden, usa paréntesis o variables intermedias:

```liquid
{% assign temp = 10 | plus: 5 %}
{{ temp | times: 2 }}
```
Resultado: 30

## Trabajando con Variables

### Crear variables con assign

El tag `assign` crea nuevas variables:

```liquid
{% assign nombre = "María" %}
{% assign edad = 30 %}
{% assign activo = true %}
```

### Capturar bloques con capture

El tag `capture` guarda un bloque de contenido en una variable:

```liquid
{% capture bienvenida %}
  Hola {{ user.name }}!
  Hoy es {{ 'now' | date: '%A' }}
{% endcapture %}

{{ bienvenida }}
```

### Ámbito global

A diferencia de otros lenguajes, las variables en Liquid tienen ámbito global desde su creación:

```liquid
{% for item in items %}
  {% assign encontrado = true %}
{% endfor %}

{{ encontrado }} <!-- Disponible fuera del loop -->
```

Para más detalles sobre objetos y variables especiales de Modyo, consulta [Objetos y Tipos de Datos](/es/platform/channels/liquid-markup/variables).

## Liquid vs HTML

Es importante entender que Liquid se procesa **antes** que HTML:

```liquid
<!-- Esto NO funciona -->
<div class="{% if activo %}activo{% endif %}">
  <script>
    var nombre = {{ user.name }}; // Error: falta comillas
  </script>
</div>

<!-- Esto SÍ funciona -->
<div class="{% if activo %}activo{% endif %}">
  <script>
    var nombre = "{{ user.name }}"; // Correcto: con comillas
  </script>
</div>
```

## Escapar Liquid

Si necesitas mostrar código Liquid sin que se ejecute:

```liquid
{% raw %}
  {{ esto no se procesa }}
  {% tampoco esto %}
{% endraw %}
```

O usa HTML entities:

```liquid
&#123;&#123; producto.nombre &#125;&#125;
```

## Errores Comunes

### 1. Variables no definidas

```liquid
<!-- Ambiguo: si user no existe, esto imprime vacío sin ningún aviso -->
{{ user.name.first }}

<!-- Mejor: valida primero y controla el caso vacío -->
{% if user %}
  {{ user.name.first }}
{% endif %}
```

### 2. Comparación de tipos

```liquid
<!-- Mal: comparar string con número -->
{% if edad == "18" %}

<!-- Bien: mismo tipo -->
{% if edad == 18 %}
```

### 3. Espacios en nombres

```liquid
<!-- Mal: espacios en el nombre -->
{% assign mi variable = 10 %}

<!-- Bien: sin espacios o con guiones bajos -->
{% assign mi_variable = 10 %}
```

### 4. Filtros sin pipe

```liquid
<!-- Mal: falta el pipe -->
{{ texto upcase }}

<!-- Bien: con pipe -->
{{ texto | upcase }}
```

## Comportamiento ante Errores de Renderizado

Modyo revisa la sintaxis de Liquid cuando guardas una plantilla, pero esa revisión solo cubre el análisis: detecta un tag mal cerrado o un argumento inválido y te impide guardar. Todo lo que falla durante el renderizado pasa esa revisión sin problemas y llega a la página publicada.

En tiempo de renderizado la plataforma corre en modo no estricto: el render no rompe la página, la degrada en silencio. Estos son los cuatro síntomas que vas a encontrar y qué significa cada uno.

### Una variable o un atributo que no existe imprime vacío

Las variables no son estrictas. Una variable que no está en el contexto, o un atributo que el objeto no tiene, no lanza ningún error: se imprime como una cadena vacía.

```liquid
{{ page_titulo }}
{{ page.titulo_inventado }}
```

Las dos líneas producen exactamente lo mismo que un valor vacío legítimo, así que un nombre mal escrito, un dato que todavía no se cargó y una variable usada fuera de su contexto son indistinguibles en la página publicada. Cuando algo no aparece, revisa primero la ortografía del nombre y después que la variable exista en ese tipo de página; consulta [Variables de Contexto](/es/platform/channels/liquid-markup/variables.html#variables-de-contexto).

### Un filtro que no existe devuelve el valor sin transformar

Los filtros tampoco son estrictos. Si escribes un filtro que la plataforma no tiene, Liquid no falla ni lo omite: devuelve el valor de entrada tal como llegó.

```liquid
{{ "texto" | filtro_que_no_existe }}
```

Esa línea imprime `texto`. El caso grave es cuando el valor de entrada es un objeto de Modyo en lugar de un texto: como nada lo transforma, la página publica el nombre interno del objeto, por ejemplo `Liquid::Drops::Assets::VideoAssetDrop`. No hay excepción, ni mensaje, ni pista visible de la causa. Es el síntoma que comparten los filtros mal escritos y los que fueron retirados de la plataforma; revisa el catálogo en [Filtros](/es/platform/channels/liquid-markup/filters.html).

### Un error de renderizado deja un comentario en el HTML

Cuando el renderizado sí falla, Modyo atrapa el error, lo registra del lado del servidor y en el HTML publicado deja el comentario `<!-- Liquid Error -->` justo en el lugar donde falló. El visitante no ve ningún mensaje: ve un hueco.

Buscar `Liquid Error` en el código fuente de la página publicada es la forma más rápida de ubicar el punto exacto de la plantilla que falló.

#### La excepción: indexar un identificador que no existe

Hay accesos que no rinden vacío sino que abortan el renderizado. Son los que buscan un elemento por su identificador:

- <code v-pre>spaces['uid']</code> y <code v-pre>spaces['uid'].types['uid']</code>
- <code v-pre>menus['slug']</code>
- <code v-pre>fields['uid']</code> sobre la respuesta de una tarea de Origination

Si el identificador no corresponde a nada, no obtienes un valor vacío: obtienes un error de renderizado y el comentario en su lugar. No hay forma de comprobarlo antes, porque cualquier comprobación pasa por indexar. Lo que sí puedes hacer es contener el daño: agrupa el acceso y su uso dentro del mismo <code v-pre>{% if %}</code>, para que el error se lleve ese bloque completo en vez de dejar el comentario en medio de un atributo HTML y romper el marcado.

### Los snippets se pueden anidar hasta 99 niveles

Las cadenas de snippets tienen tope. Puedes anidar hasta 99 niveles; el intento de abrir el nivel 100 no se ejecuta y, en su lugar, la página publica el texto literal `[Liquid Internal Error] Nesting too deep`.

Ver ese texto en una página casi siempre significa que un snippet se incluye a sí mismo, directa o indirectamente. Revisa la cadena de <code v-pre>{% snippet %}</code> a partir del punto donde aparece el mensaje.

:::warning Atención
Ninguno de estos cuatro comportamientos se detecta al guardar la plantilla, porque todos ocurren en tiempo de renderizado. Una plantilla puede guardarse y publicarse sin una sola advertencia y aun así imprimir vacíos, comentarios de error o el nombre interno de un objeto. Consulta [Errores en Vistas](/es/platform/channels/templates.html#errores-en-vistas).
:::

## Convenciones y Mejores Prácticas

- **Nombres de variables**: Usa snake_case para variables
   ```liquid
   {% assign precio_total = 100 %}
   {% assign nombre_usuario = "Juan" %}
   ```

- **Indentación**: Indenta el contenido dentro de tags de control
   ```liquid
   {% if user %}
     {% for order in user.orders %}
       {{ order.id }}
     {% endfor %}
   {% endif %}
   ```

- **Validación**: Siempre valida antes de acceder a propiedades anidadas
   ```liquid
   {% if product.variants and product.variants.size > 0 %}
     {{ product.variants.first.price }}
   {% endif %}
   ```

- **Valores por defecto**: Usa el filtro `default` para valores opcionales
   ```liquid
   {{ product.description | default: "Sin descripción" }}
   ```

- **Performance**: Asigna resultados de operaciones costosas a variables
   ```liquid
   {% assign productos_filtrados = products | where: 'available', true | sort: 'price' %}
   {% for product in productos_filtrados %}
     ...
   {% endfor %}
   ```

:::tip Seguridad
Liquid es un lenguaje diseñado para ser seguro. No puedes:
- Acceder al sistema de archivos directamente
- Ejecutar código arbitrario
- Modificar datos (solo leer y mostrar)
- Crear loops infinitos (hay límites de iteración)
:::

:::warning Ejecución desde el Servidor
Recuerda que todo el código Liquid se ejecuta en el servidor antes de enviar el HTML al navegador. No puedes usar Liquid para reaccionar a eventos del usuario o modificar la página después de cargar.
:::