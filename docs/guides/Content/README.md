# Content

Content es la sección especial de Modyo donde quienes trabajan a través de APIs, pueden enviar información y gestionar archivos de contenido para exportar a cualquier sitio o microservicio.

Esta sección está especialmente diseñada para trabajar con contenido de la mano del desarrollo, ya que todo lo que se creará, será enviado a través de la API a otro servicio fácilmente adaptable.

## Espacios

En el caso de espacios, desde Modyo se puede configurar el envío de información desde distintos formatos para que el servicio que reciba la API, pueda interpretarla fácilmente.

Espacios nos permite separar los sitios en los que se está trabajando, para tener una mejor distribución y orden del contenido que se añade.

### Crear un Espacio

Para crear un espacio, se debe hacer clic en el botón verde en la parte superior de la pantalla, y asignar el nombre y la UID que usaremos.

Además, deberemos asignar el idioma sobre el cual se escribirá el contenido que publicaremos, para una mejor configuración de los caracteres.

#### Entradas

Las entradas que podrás ver en sección, corresponden a todo el contenido enviado a través de la API. En ese sentido, se podrán filtrar según:

- Tipo
- Estado de Revisión
- Categoría
- Tags
- Autor

##### Crear una Entrada

Para crear una entrada, se debe hacer clic en el botón de la parte superior de la pantalla. Así,

Antes de crearla, Modyo pedirá el tipo de entrada que deberá crear, para organizar el formato a presentar, el cuál se puede crear en la sección Tipos.

Al hacer clic en ella, podremos ver el formulario que podremos rellenar con el contenido que queremos enviar, que estará personalizado según lo que armamos.

De ahí, podremos ver en nuestro botón de Vista Previa el código que se enviará a través de la API, el cual el microservicio deberá interpretar. 

#### Tipos

Los formatos que publicaremos en nuestro sitio web siempre deben ser segmentados, para que cualquier programa o microservicio que quiera filtrar la información a través de la API, pueda interpretar más rápido el contenido para su uso final.

##### Crear un Tipo

Para crear un Tipo, es necesario hacer clic en el botón superior de la pantalla y poner el nombre y el UID correspondiente. Es una buena práctica poner el nombre del formato de qué se publicará, con tal de que cualquier usuario de la plataforma sepa de qué contenido se trata.

#### Categorías

Las categorías te permiten ordenar las entradas que publicas según el contenido que se encuentre dentro, por lo que es útil si necesitamos hacer directorios de áreas de conocimiento determinadas.

##### Crear una Categoría

Para crear una categoría, se hace clic en el botón superior de la pantalla. Ahí se le debe asignar un Título y una Ruta a la categoría.

Este paso también sirve para crear subcategorías. Para hacerlas, se deben hacer los mismos pasos pero asignar la Categoría Padre correspondiente.

#### Configuración

En este caso, la Configuración de Espacios nos sirve para cambiar las características generales de la manera en qué se está enviando información a través de la API.

##### General

Para cambiar el nombre del Espacio o su UID, es posible hacerlo desde acá. 

##### Localización

Modyo permite el cambio de idiomas y léxicos según el país en que se necesite. El cambio es útil en el caso de que se necesite trabajar con contenido personalizado y usuarios con distintos lenguajes.

##### Caché

Si se quiere habilitar el caché y dejar tiempo a algunas acciones, es posible hacerlo desde esta sección. Además, regular el tiempo de vida del mismo, medido en segundos.

##### Seguridad

Modyo, como forma de transmisión segura de datos, permite habilitar CORS para que la API pueda ser interpretada mejor por cualquier microservicio.

Para ello, también es necesario especificar el dominio desde dónde será importada la información, para dar un mejor acceso.

##### Revisión en Equipo

La calidad del contenido que se publica en cada una de las plataformas debe ser certificada y como forma de mantener la calidad y seguridad, Modyo usa la Revisión en Equipo para confirmar y corregir los contenidos que se envían a través de la API.

En este caso, se pueden determinar cuántos miembros del equipo deben aprobar un contenido antes de ser puestos a disposición del Administrador, quien deberá publicarlos.

Además, es posible diferenciar quiénes deben revisar cada contenido, según el espacio en que se esté trabajando. Para ello, se puede asignar un filtro desde este lugar y determinar los miembros del equipo que chequearán la información, harán comentarios y darán su aprobación.

##### Miembros del Equipo

Para ordenar el trabajo, Modyo permite filtrar los miembros del equipo que trabajarán en cada espacio y así tendrán acceso a la escritura, revisión o publicación.

Para ello, el SuperAdministrador puede asignar manualmente a los usuarios los roles predeterminados que habilitan cada una de las funciones.

## Gestor de Archivos

En esta sección, podremos ver todos los archivos que hemos subido en nuestra plataforma, los cuales pueden estar usándose o no en ella.

### Características del archivo

Los archivos pueden tener distintas extensiones, según su tipo. Al hacer clic en cada uno de ellos, se desplegará una ventana que 

### Subir un archivo

Hay dos formas de subir un archivo para usarse en Modyo. Una de ellas es a través del mismo formulario y otra es a través del Gestor de Archivos, que nos da la opción de tomar cualquier material de nuestro disco local para subirlo a la plataforma.

### Buscar un archivo



----

Una API es una herramienta que pone a disposición información a programas en un formato más conveniente. Por ejemplo, puedes ir al sitio de una empresa en tu navegador y ver la información en un formato ordenado y atractivo. 

Esa misma API, presenta su información de una manera que es conveniente para programas. Entrega la información directamente.

Más abajo hay tres ejemplos de como puedes utilizar APIs para traer información para un custom widget y así utilizarlo como quieras.

Todos los ejemplos deben ser incluidos en la pestaña de JavaScript de tu custom widget.

### jQuery

La biblioteca JavaScript de jQuery nos hacen fácil poder implementarlas dentro de Modyo, en torno a las APIs.

Una poderosa característica de JQuery es su funcionalidad AJAX fácil de entender. Te permite traer fácilmente datos de no solo contenido dentro de tu sitio, pero de también otros sitios y servicios.

En esta solicitud AJAX, estamos especificando un punto de salida (utilizando el objeto Liquid {{ site.url }}) e incluyendo opciones para especificar que es un "GET" del tipo 'json'. Finalmente enlazamos el "data.promotions" a nuestro "vm.promos" para usarlo en la aplicación.


### API Fetch con JavaScript nativo

La API Fetch provee una interfaz JavaScript simple, para acceder y manipular parte del protocolo HTTP, como solicitudes y repuestas. El método global fetch() es una manera fácil y lógica de traer recursos asincrónicamente a través de una red.

Una solicitud fetch básica es muy simple de realizar. Observa el siguiente código:

Estamos trayendo un archivo JSON desde dentro de nuestro sitio utilizando el objeto Liquid {{ site.url }}. El uso más simple de fetch() requiere un argumento —la ruta del recurso que quieres traer— y devuelve un "promise" que contiene la respuesta (Response object).

Esta es una respuesta HTTP, no el verdadero JSON. Para extraer el cuerpo del JSON de la respuesta, utilizamos el método json() al final de esta, para luego enlazar los datos a nuestras promociones (este fetch() es para esta aplicación).

Para información más detallada, te recomendamos visitar los webdocs de MDN.

### Axios

Axios es una biblioteca JavaScript muy popular que los desarrolladores utilizan para realizar solicitudes HTTP que funcionan en todos los navegadores modernos, incluyendo IE8 en adelante.

Está basada en el objeto Promise y te permite escribir asincrónicamente código para realizar solicitudes XHR fácilmente.

Utilizar Axios tiene algunas ventajas sobre la API Fetch nativa:

- Soporta navegadores más antiguos (Fetch necesita un polyfill)
- Tiene una manera de cancelar una solicitud
- Tiene una manera de establecer un timeout para una respuesta
- Viene con protección CSRF incluida
- Soporta progreso de carga
- Realiza transformación de datos JSON automáticamente

Para poder usar Axios en Modyo, necesitas agregar el código base del axios.js como un custom snippet e incluirlo en algún lugar donde tus widgets puedan accederlo, como tu theme en JavaScript (localizado en Templates, bajo la pestaña de Archivos).

La API de Modyo provee una interfaz RESTful con respuestas formateadas en un JSON ligero que puede ser utilizado en muchas funcionalidades de tu cuenta, incluyendo herramientas administrativas.

Para crear un nueva aplicación de acceso a la API, dirígete a Cuenta > Configuración > Acceso a la API. y haz click en + Nuevo en la esquina superior derecha.

Aquí debes darle un nombre, una descripción, un URI de redirección (Utiliza urn:ietf:wg:oauth:2.0:oob para pruebas locales) y una URL para cerrar sesión como por ejemplo http://ejemplo.com/logout.

## Content Delivery API

La API de Content Delivery de Modyo, es muy fácil de operar con distintos comandos, que permiten traer información de manera segura para cualquier microservicio.

### Estructura de Rutas

Para hacer una ruta hacia el contenido, se debe estructurar de la siguiente manera:

api/content/spaces/:space_uid/types/:type_uid/schema
api/content/spaces/:space_uid/types/:type_uid/entries?[filters]
api/content/spaces/:space_uid/types/:type_uid/entries/:entry_uuid

Donde space_uid y content_type_uid corresponden al nombre slugificado del space y al nombre del content_type respectivamente.

