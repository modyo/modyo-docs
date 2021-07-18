---
search: true
---

# Variables de Liquid

[**Liquid Markup**](/es/platform/channels/liquid-markup.html) es una parte importante de la plataforma y de como construimos las vistas y accedemos al contenido en ella, así como también a [**drops**](/es/platform/channels/liquid-markup.html#drops) (variables) de contexto que nos permiten interactuar con nuestras vistas de manera mas dinámica. Por ejemplo, se puede determinar que contenido mostrar al usuario según el segmento al que pertenece, u ocultar un menu según la página que se este visitando, etc.

Los Widgets al estar desacoplados de la plataforma tienen la desventaja de no poder usar liquid directamente y no tenemos acceso a esos drops (aunque estamos trabajando en una solución para eso), para poder trabajar con ellos los tendremos que disponibilizar mediante javascript desde la plataforma.

1. Primero creamos un nuevo snippet: **Templates(1) --> Snippets(2) --> Add a Snippet(3)**. Para éste ejemplo al snippet lo nombramos `liquid2js_js`, pero puede tener cualquier nombre.
   ![template views](/assets/img/widgets/template_snippets.png)

2. En este snippet creamos un objecto en el scope de `window` que contenga todos los drops que queremos tener disponibles en nuestro Widget. En este ejemplo el objeto se llama liquid, pero le pueden poner cualquier nombre.

   ```js
   window.liquid = {
     lang: "{{@site.language}}" === "en" ? "en-US" : "es-CL",
     request: {
       path: "{{request.path}}",
     },
   };
   ```

3. Desde nuestro Widget podremos acceder a estos valores utilizando el objeto creado en el paso anterior.

   ```js
   const LANG = window.liquid.lang;
   ```

   :::warning Importante
   En modo de desarrollo no tendremos acceso a este objeto ya que estamos trabajando localmente, es por eso que la recomendación es asignar valores por defecto al definir estas variables localmente.
   :::

  ```js
   // si no existe el objeto liquid y la llave lang no esta definida, asignamos 'es-CL' por defecto
   const LANG = window.liquid ? window.liquid.lang : "es-CL";
   ```