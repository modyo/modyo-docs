---
title: Referencias a la API
lang: es
in: Referencias a la API
---

# Referencias a la API

Modyo permite la habilitación de herramientas para el manejo de información de la plataforma, como es el caso de la API.

## API

Una API es una herramienta que pone a disposición información a programas en un formato más conveniente. Por ejemplo, puedes ir al sitio de una empresa en tu navegador y ver la información en un formato ordenado y atractivo.  

Esa misma API, presenta su información de una manera que es conveniente para programas. Entrega la información directamente. 

Más abajo hay tres ejemplos de como puedes utilizar APIs para jalar la información para un custom widget y así utilizarlo como quieras.

Todos los ejemplos deben ser incluidos en la pestaña de JavaScript de tu custom widget. 

## jQuery

Una poderosa característica de JQuery es su funcionalidad AJAX fácil de entender. Te permite jalar fácilmente datos de no solo contenido dentro de tu sitio, pero de también otros sitios y servicios. 

En esta solicitud AJAX, estamos especificando un punto de salida (utilizando el objeto Liquid {{ site.url }}) e incluyendo opciones para especificar que es un "GET" del tipo 'json'. Finalmente enlazamos el "data.promotions" a nuestro "vm.promos" para usarlo en la aplicación.


### API Fetch con JavaScript nativo 

La API Fetch provee una interface JavaScript simple, para acceder y manipular parte del protocolo HTTP, como solicitudes y repuestas. El método global fetch() es una manera fácil y lógica de jalar recursos asincrónicamente a través de una red. 

Una solicitud fetch básica es muy simple de realizar. Observa el siguiente código: 

Estamos jalando un archivo JSON desde dentro de nuestro sitio utilizando el objeto Liquid {{ site.url }}. El uso más simple de fetch() requiere un argumento —la ruta del recurso que quieres jalar— y devuelve un "promise" que contiene la respuesta (Response object).

Esta es una respuesta HTTP, no el verdadero JSON. Para extraer el cuerpo del JSON de la respuesta, utilizamos el método json() al final de esta, para luego enlazar los datos a nuestras promociones (este fetch() es para esta aplicación).

Para información más detallada, te recomendamos visitar los webdocs de MDN.

## Axios

Axios es una librería de JavaScript muy popular que los desarrolladores utilizan para realizar solicitudes HTTP que funcionan en todos los navegadores modernos, incluyendo IE8 en adelante. 

Está basada en el objeto "promise" y te permite escribir asincrónicamente código para realizar solicitudes XHR fácilmente. 

Utilizar Axios tiene algunas ventajas sobre la API Fetch nativa:

- Soporta navegadores más antiguos (Fetch necesita un polyfill)
- Tiene una manera de abortar una solicitud
- Tiene una manera de establecer un timeout para la respuesta
- Viene con protección CSRF incluida
- Soporta progreso de carga
- Realiza transformación de datos JSON automáticamente

Para poder usar Axios en Modyo, necesitas agregar el código base del axios.js como un custom snippet e incluirlo en algún lugar donde tus widgets puedan accederlo, como el JavaScript theme (localizado en Templates, bajo la pestaña de Archivos). 

La API de Modyo provee una interfaz RESTful con respuestas formateadas en un JSON ligero que puede ser utilizado en muchas funcionalidades de tu cuenta, incluyendo herramientas administrativas. 

Para crear un nueva aplicación de acceso a la API, dirígete a Cuenta > Configuración > Acceso a la API. y haz click en + Nuevo en la esquina superior derecha.

Aquí dale un Nombre, una descripción, un URI de redirección (Utiliza urn:ietf:wg:oauth:2.0:oob para pruebas locales) y una URL para cerrar sesión como por ejemplo http://ejemplo.com/logout.