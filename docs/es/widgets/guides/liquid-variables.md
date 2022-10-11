---
search: true
---

# Variables de Liquid

Crea un objeto javascript en Snippets para poder hacer uso de Liquid en tus Widgets.

Los Widgets, al estar desacoplados de la plataforma, tienen la desventaja de no poder usar Liquid directamente y no tenemos acceso a esos drops, para poder trabajar con ellos los tendremos que hacer disponibles mediante javascript desde la plataforma. [**Liquid Markup**](/es/platform/channels/liquid-markup.html) es una parte importante de la plataforma, de como construimos las vistas, y accedemos al contenido en ella. También nos da acceso a [**drops**](/es/platform/channels/drops) (variables) de contexto que nos permiten interactuar con nuestras vistas de manera más dinámica. Por ejemplo, se puede determinar que contenido mostrar al usuario según el segmento al que pertenece, ocultar un menú según la página que se este visitando, etc.


Sigue estos pasos para crear un snippet con variables de Liquid:
1. En el menú lateral en la plataforma, expande **Channels** y haz click en **Sitios**.
2. Haz click en tu sitio.
3. En el menú de tu sitio, haz click en **Plantillas** y selecciona **Snippets**.
4. Agrega un nuevo **Snippet Personalizado**. Para éste ejemplo al snippet lo nombramos `liquid2js_js`, pero puede tener cualquier nombre.

<img src="/assets/img/widgets/template_snippets.png" alt="Image displaying where to find template snippets.">   

5. Abre el apartado de javascript y pega el código:
```js
   window.liquid = {
     lang: '{{@site.language}}' === 'en' ? 'en-US' : 'es-CL',
     request: {
       path: "{{request.path}}",
     },
   };
```
En este snippet creamos un objecto llamado _liquid_ con scope de `window` que contenga el lenguaje y el request path del sitio. Desde nuestro Widget ahora podemos acceder a estos datos utilizando el objeto creado en el paso anterior. Por ejemplo, si quieres obtener los lenguajes del sitio desde el Widget, puedes hacerlo con: 

   ```js
   const languages = window.liquid.lang;
   ```

:::warning Atención
En modo de desarrollo no tendremos acceso a este objeto ya que estamos trabajando localmente, es por eso que la recomendación es asignar valores por defecto al definir estas variables localmente.
:::

En el siguiente ejemplo, const lang toma el valor de window.liquid.lang, si no existe el objeto, asigna el valor "es-CL" por defecto:

```js
const lang = window.liquid !== "undefined" ? window.liquid.lang : "es-CL";
```