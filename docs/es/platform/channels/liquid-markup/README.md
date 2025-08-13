---
search: true
---

# Liquid Markup

Liquid es un lenguaje utilizado en Modyo Platform para desplegar contenido del módulo [Content](/es/platform/content/) en [Channels](/es/platform/channels/). Permite generar plantillas que muestran información de entradas dinámicamente y controlan la visualización mediante flujo o iteración.

En Liquid, como en otros lenguajes de programación, se utilizan palabras reservadas para desplegar contenido dinámico. Estas llamadas se ejecutan “just-in-time” (justo a tiempo), lo que permite la “carga diferida” (lazy loading) solo cuando es necesario.

Liquid está diseñado con requisitos muy específicos:

* Debe tener un marcado limpio y sencillo. Los motores de plantillas que no producen un marcado atractivo no son agradables de usar.
* Debe ser no evaluable y seguro. Las plantillas Liquid están diseñadas para que los usuarios puedan editarlas, evitando la ejecución de código inseguro en el servidor.
* No debe tener estado. Los pasos de compilación y renderizado deben estar separados para que el análisis sintáctico y la compilación se realicen una sola vez, y luego se pueda renderizar pasando un hash con objetos locales y variables.

### ¿Por qué usar Liquid?

* Deseas permitir que los usuarios editen la apariencia de tu aplicación sin ejecutar **código inseguro en tu servidor**.
* Quieres renderizar tus plantillas directamente desde la base de datos.
* Prefieres motores de plantillas inteligentes (estilo PHP).
* Necesitas un motor de plantillas que funcione bien tanto en HTML como en correos electrónicos.
* No te agrada el marcado (markup) de tu motor de plantillas actual.

### ¿Cómo se ve Liquid?

```liquid
<ul id="products">
  {% for product in products %}
    <li>
      <h2>{{ product.name }}</h2>
      Only {{ product.price | price }}

      {{ product.description | prettyprint | paragraph }}
    </li>
  {% endfor %}
</ul>
```

:::warning Atención
Desde la versión 9.0.8 en adelante, los atributos de las entradas se llamarán según su meta información o sus campos personalizados, de tal forma que:

* Los campos de meta-información de la entrada que antes se usaban como <span v-pre>`{{ entry.slug }}`</span>, ahora deben usarse como <span v-pre>`{{ entry.meta.slug }}`</span>, o bien <span v-pre>`{{ entry.meta['slug'] }}`</span>.
* Los campos personalizados que antes se usaban como <span v-pre>`{{ entry.title }}`</span>, ahora deben usarse como <span v-pre>`{{ entry.fields.title }}`</span>, o bien <span v-pre>`{{ entry.fields['title'] }}`</span>.

Ambas formas estarán disponibles hasta la versión 9.2 de Modyo.
:::

### ¿Cómo usar Liquid?

A continuación, veremos varios ejemplos de los usos más comunes al escribir con Liquid.

#### Objetos

Se denomina objeto a lo que contiene el contenido que Liquid despliega en pantalla. Se pueden desplegar objetos o variables usando doble corchete ``{{ }}``, por ejemplo:

Para desplegar el nombre de la entrada en tu página, usa:

```liquid
{{ entry.meta.name }}
```

#### Tags

Con Tags se puede agregar control de flujo e iteración a tus páginas. Se necesita encapsular el lenguaje con corchete y porcentaje `{% %}` para usar Tags, por ejemplo:

```liquid
{% if product.name == "Online Banking" %}
Download our Online Banking App now!
{% endif %}
```