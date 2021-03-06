---
search: true
---

# Tutorial de SEO en Modyo

## Introducción

Bienvenido a un nuevo tutorial de Modyo. En este tutorial nos vamos a enfocar en [Modyo Channels](/es/platform/channels) donde trabajaremos en el SEO de nuestro canal digital, optimizandolo el posicionamiento en los motores de búsqueda a través de los meta del head. 

## Requisitos Previos

Para ajecutar el tutorial necesitamos un sitio en Modyo con el Home y un Page, más un Content View para cubrir todas las opciones de contenidos dentro de Modyo.

## Paso 1: Configuración de SEO general

Dentro de nuestro [sitio](/es/platform/channels/sites), en la sección <b>General</b> dentro de <b>Setting</b>, y vamos a completar el campo Description con un texto de entre 140 y 160 que el navegador incluira en la descripción que se muestra.

<img src="/assets/img/tutorials/seo/description.png" style="max-width: 450px;margin: auto 0;"/>

Luego de que tenemos la description de nuestro sitio, vamos a la sección <b>SEO</b>, dentro de <b>Settings</b> al igual que <b>General</b>. En la sección Custom meta tags, hacemos click en el botón <b>+ New meta tag</b> para agregar el og:image.

Una vez que se abra el Modal buscamos og:image en Tag Name, el Value lo llenamos con la url de una imagen que subamos al Asset Managet y activamos el Checkbox de replicar metatag en pages.

<img src="/assets/img/tutorials/seo/new_meta.png" style="max-width: 450px;margin: auto 0;"/>

## Paso 2: Desarrollado SEO en Templates

Dentro del Templates de nuestro sitio, abrimos el Snippet seo en la sección Generale y nos fijamos que tengamos el siguiente código dentro del archivo:
```html 
{{page.meta_tags}}
``` 
asd


## Conclusiones

¡Felicidades! Haz finalizado el curso de Creación del Home de Dynamic Bank en Modyo.

Ahora tienes conocimientos de cómo utilizar [Modyo Channels](/es/platform/channels) con todos sus módulos; [Pages](/es/platform/channels/pages), [Navigation](/es/platform/channels/navigation), [Widgets](/es/platform/channels/widgets), [Templates](/es/platform/channels/templates) y algunos detalles dentro de [Site settings](/es/platform/channels/sites.html#configuracion-de-un-sitio). Además, lograste enlazar tu sitio con [Modyo Content](/es/platform/content) que permite generar canales digitales dinámicos conectados a contenidos separados del código del sitio.
