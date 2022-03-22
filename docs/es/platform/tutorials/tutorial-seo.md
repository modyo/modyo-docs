---
search: true
---

# Tutorial de SEO en Modyo

## Introducción

Bienvenido a un nuevo tutorial de Modyo. En este tutorial nos vamos a enfocar en [Modyo Channels](/es/platform/channels) donde trabajaremos en el SEO de tu canal digital, optimizando el posicionamiento en los motores de búsqueda a través del metadata en head. 

## Requisitos Previos

- Un sitio en la plataforma
- Una [Página](/es/platform/channels/pages)

## Paso 1: Configuración de SEO general

Dentro de nuestro [sitio](/es/platform/channels/sites), en la sección <b>General</b> dentro de <b>Configuración del sitio</b>, y vamos a completar el campo Descripción con un texto de entre 140 y 160 que el navegador incluirá en la descripción que se muestra.

<img src="/assets/img/tutorials/seo/description.png" style="max-width: 450px;margin: auto 0;"/>

Luego de que tenemos la descripción de nuestro sitio, vamos a la sección <b>SEO</b>, dentro de <b>Configuración del sitio</b>. En la sección meta tags personalizados, haz click en el botón <b>+ New meta tag</b> para agregar `og:image`.

Una vez que se abra el Modal busca `og:image` en Tag Name, Value lo llenamos con la URL de la imagen en el Gestor de Archivos y activamos el Checkbox de replicar metatag en pages.

<img src="/assets/img/tutorials/seo/new_meta.png" style="max-width: 450px;margin: auto 0;"/>

## Paso 2: Desarrollado SEO en Plantillas

Dentro de Plantillas de nuestro sitio, abrimos el Snippet `seo` en la sección General y nos fijamos que tengamos el siguiente código dentro del archivo:

```html 
{{page.meta_tags}}
``` 

Con esto logramos integrar los metatags de la página usando Liquid.

## Conclusiones

¡Felicidades! Haz finalizado el tutorial de Creación del Home de Dynamic Bank en Modyo.

Ahora tienes conocimientos de cómo utilizar: 

- [Páginas](/es/platform/channels/pages)
- [Navigation](/es/platform/channels/navigation)
- [Widgets](/es/platform/channels/widgets)
- [Plantillas](/es/platform/channels/templates)
- [Modyo Content](/es/platform/content)