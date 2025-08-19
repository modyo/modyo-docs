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

Para una lista completa y detallada de todos los objetos disponibles, consulta la sección [Objetos](/es/platform/channels/liquid-markup/objects).