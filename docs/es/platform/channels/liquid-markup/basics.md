---
search: true
---

# Conceptos Básicos

Esta sección cubre los conceptos fundamentales de Liquid que necesitas entender antes de trabajar con plantillas en Modyo.

## ¿qué es Liquid?

Liquid es un lenguaje de plantillas que procesa texto y genera salida dinámica. Funciona en dos etapas:

- **Análisis (Parse)**: Liquid lee tu plantilla y encuentra el código Liquid
- **Renderizado (Render)**: Liquid ejecuta el código y genera la salida final

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

Para detalles completos sobre tipos de datos y operaciones, consulta [Objetos y Tipos de Datos](/es/platform/channels/liquid-markup/variables).

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
<!-- Mal: causará error si user no existe -->
{{ user.name.first }}

<!-- Bien: validar primero -->
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