---
search: true
---

# Liquid Markup

Liquid es un lenguaje de plantillas open-source creado por Shopify e implementado en Modyo Platform para conectar el módulo [Content](/es/platform/content/) con [Channels](/es/platform/channels/). Permite crear contenido dinámico de forma segura y eficiente.

## Liquid en Modyo

En Modyo, Liquid te permite:
- Mostrar contenido dinámico desde tus Espacios y Tipos
- Personalizar la experiencia según el usuario autenticado
- Crear componentes reutilizables con Widgets y Plantillas
- Generar layouts responsivos y adaptativos
- Integrar datos de múltiples fuentes de forma segura

### ¿Por qué usar Liquid?

- Deseas permitir que los usuarios editen la apariencia de tu aplicación sin ejecutar **código inseguro en tu servidor**.
- Quieres renderizar tus plantillas directamente desde la base de datos.
- Prefieres motores de plantillas inteligentes (estilo PHP).
- Necesitas un motor de plantillas que funcione bien tanto en HTML como en correos electrónicos.
- No te agrada el marcado (markup) de tu motor de plantillas actual.

### ¿Cómo se ve Liquid?

```liquid
<ul id="posts">
  {% for entry in spaces['blog'].types['post'].entries %}
    <li>
      <h2>{{ entry.meta.name }}</h2>
      {{ entry.meta.published_at | format_date: '%d/%m/%Y' }}

      {{ entry.meta.excerpt | truncate: 120 }}
    </li>
  {% endfor %}
</ul>
```

:::warning Atención
Desde la versión 9.0.8 en adelante, los atributos de las entradas se llamarán según su meta información o sus campos personalizados, de tal forma que:

- Los campos de meta-información de la entrada que antes se usaban como <span v-pre>`{{ entry.slug }}`</span>, ahora deben usarse como <span v-pre>`{{ entry.meta.slug }}`</span>, o bien <span v-pre>`{{ entry.meta['slug'] }}`</span>.
- Los campos personalizados que antes se usaban como <span v-pre>`{{ entry.description }}`</span>, ahora deben usarse como <span v-pre>`{{ entry.fields.description }}`</span>, o bien <span v-pre>`{{ entry.fields['description'] }}`</span>.

La forma directa se sigue aceptando por compatibilidad, pero está obsoleta: en plantillas nuevas usa `entry.meta` y `entry.fields`. Si un campo personalizado se llama igual que un atributo de meta, como `name`, `title` o `slug`, la forma directa devuelve el atributo de meta: `entry.title` entrega el nombre de la entrada y no el campo `title`. Para leer ese campo, usa `entry.fields.title`.
:::

## Empezando con Liquid

Para aprender los conceptos fundamentales de Liquid, consulta:

- **[Conceptos Básicos](/es/platform/channels/liquid-markup/basics)** - Sintaxis, operadores y estructuras de control
- **[Variables y Tipos de Datos](/es/platform/channels/liquid-markup/variables)** - Cómo trabajar con datos en Liquid
- **[Objetos](/es/platform/channels/liquid-markup/objects)** - Objetos especiales de Modyo
- **[Filtros](/es/platform/channels/liquid-markup/filters)** - Transformar y formatear datos
- **[Tags](/es/platform/channels/liquid-markup/tags)** - Control de flujo y lógica
- **[Ejemplos](/es/platform/channels/liquid-markup/examples)** - Casos de uso prácticos