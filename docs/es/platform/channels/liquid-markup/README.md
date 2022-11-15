---
search: true
---

# Liquid Markup

Liquid es un lenguaje que usamos en Modyo Platform para desplegar el contenido del módulo [Content](/es/platform/content/) en [Channels](/es/platform/channels/). Utilizando Liquid podrás generar una plantilla en tu Sitio que despliega la información de tus entradas dinámicamente así como también controlar que mostrar usando control de flujo o iteración.

En Liquid, como en muchos otros lenguajes de programación, se tienen que usar palabras reservadas para desplegar el contenido dinámico. Estas llamadas se ejecutan “justo-a-tiempo” (just-in-time) lo cual te permite hacer “carga diferida” (lazy loading) sólo cuando se necesite.

Liquid está escrito con requerimientos muy específicos:

* Debe tener un marcado bonito y sencillo. Los motores de plantillas que no producen un marcado atractivo no son divertidos de usar.
* Tiene que ser no evaluable y seguro. Las plantillas Liquid están hechas para que los usuarios puedan editarlas. No quieres ejecutar código en tu servidor que tus usuarios escribieron.
* No debe tener un estado. Los pasos de compilación y renderizado tienen que estar separados para que el análisis sintáctico y su compilación se pueda hacer solo una vez, y más tarde se pueda renderizar pasando un hash con objetos locales y variables.

### ¿Por qué usar Liquid?

* Deseas permitir que sus usuarios editen la apariencia de su aplicación pero no quieres que ejecuten **código inseguro en tu servidor**.
* Quieres renderizar tus plantillas directamente desde la base de datos.
* Te gustan los motores inteligentes de plantillas de estilo (PHP).
* Necesitas un motor de plantillas que funcione bien tanto en HTML como en emails.
* No te gusta el marcado (markup) de tu actual motor de plantillas.

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
Desde la versión 9.0.8 en adelante, se llamarán a los atributos de las entradas según su meta información o sus fields personalizados, de tal forma que:

* Los campos pertenecientes a la meta-información de la entrada que antes se usaban como <span v-pre>`{{ entry.slug }}`</span>, ahora debe usarse como <span v-pre>`{{ entry.meta.slug }}`</span>, o bien <span v-pre>`{{ entry.meta['slug'] }}`</span>.
* Los campos personalizados que antes se usaban como <span v-pre>`{{ entry.title }}`</span>, ahora deben usarse como <span v-pre>`{{ entry.fields.title }}`</span>, o bien <span v-pre>`{{ entry.fields['title'] }}`</span>.

Ambas formas estarán disponibles hasta la versión 9.2 de Modyo.
:::

### ¿Cómo usar Liquid?

A continuación veremos varios ejemplos de los usos más comúnes al escribir con Liquid.

#### Objetos

Se denomina objeto a lo que contiene el contenido que Liquid despliega en pantalla. Se puede desplegar objetos or variables usando doble corchete ``{{ }}``, por ejemplo:

Para desplegar el nombre de la entrada en tu página usa:

```liquid
{{ entry.meta.name }}
```

#### Tags

Con Tags se puede agregar control de flujo e iteración a tus páginas. Se necesita encapsular el lenguaje con corchete y porcentaje {% %} para hacer uso de Tags, por ejemplo:

```liquid
{% if product.name == "Banca Electrónica" %}
 ¡Descarga nuestra banca electrónica en tu teléfono celular!
{% endif %}
```