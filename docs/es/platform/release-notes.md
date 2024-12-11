---
search: true
---

# Notas del release

## 10.0
### 10.0.14 - 10 de diciembre de 2024
<Badge text="Content" type="content" vertical="middle"/>
* Corrige error al editar contenido en bulk

<Badge text="Customers" type="customers" vertical="middle"/>
* Corrige llamados multiples al endpoint de count_matches.


### 10.0.13 - 05 de diciembre de 2024
<Badge text="Channels" type="channels" vertical="middle"/>

* Corrige problema de redirección al custom domain de un sitio

<Badge text="Customers" type="customers" vertical="middle"/>

* Corrige recalculo de segmentos
* Corrige campo from de la campaña de correo, vuelve a ser el nombre del sender


### 10.0.12 - 03 de diciembre de 2024
<Badge text="Core" type="core" vertical="middle"/>

* Mejoras de seguridad

<Badge text="Channels" type="channels" vertical="middle"/>

* Mejoras en la programación de la indexación de páginas
* Corrige resultados de búsqueda que contenian contenido privado

<Badge text="Content" type="content" vertical="middle"/>

* Corrige errores en selector de imagenes y buscador en los Richtexts
* Mejora de performance en la publicación masiva de contenidos
* Corrige error al mostrar diferencias en contenidos muy extensos

<Badge text="Customers" type="customers" vertical="middle"/>
* Corrige duplicación de segmentos de usuarios
* Corrige edición de custom fields recien agregados al editar un usuario


### 10.0.11 - 14 de noviembre de 2024
<Badge text="Core" type="core" vertical="middle"/>

* Mejoras de seguridad

<Badge text="Channels" type="channels" vertical="middle"/>

* Corrige problemas de pérdida del preview de sitios
* Mejoras en la indexación de páginas para la búsqueda
* Aumenta los resultados de búsquedas en sitios, ahora por defecto son 15 resultados


### 10.0.10 - 04 de noviembre de 2024
<Badge text="Core" type="core" vertical="middle"/>

* Mejoras de seguridad
* Se agrega la invalidación de todas las sesiones de un administrador cuando este cambia su contraseña

<Badge text="Channels" type="channels" vertical="middle"/>

* Corrige problemas al renderizar páginas con contenido segmentado
* Corrige problemas al renderizar páginas con contenidos muy grandes
* Corrige el author de una sincronización en la actividad mostrada en paginas, widgets, templates y menus
* Se agrega la opción de habilitar el webpush en las configuraciones de una aplicación

<Badge text="Customers" type="customers" vertical="middle"/>

* Se agrega la posibilidad de mapear un atributo de un claim de tipo objeto a un custom field especifico.
* Se agrega la capacidad de envio de webpush en las campañas de notificaciones cuando este es activado en el sitio relacionado al reino.


### 10.0.9 - 14 de octubre de 2024
<Badge text="Core" type="core" vertical="middle"/>

* Mejoras de seguridad
* Corrige expiración de la sesión según tiempo de inactividad

<Badge text="Content" type="content" vertical="middle"/>

* Corrige problema al publicar entries con listas de assets, ahora se respeta el orden definido en el listado
* Corrige problema al publicar entries que contienen richtext en modo código
* Corrige problema de duplicación de parametros al usar el api administrativa de contenido


### 10.0.8 - 16 de septiembre de 2024
<Badge text="Core" type="core" vertical="middle"/>

* Corrige problema con precarga de links al pasar el cursor 


### 10.0.7 - 06 de septiembre de 2024
<Badge text="Core" type="core" vertical="middle"/>

* Mejoras de seguridad

<Badge text="Channels" type="channels" vertical="middle"/>

* Corrige el paginador de la búsqueda en sitios para mostrar la cantidad de páginas según la cantidad máxima de resultados

<Badge text="Content" type="content" vertical="middle"/>

* Agrega filtro exacto por full_path y uuid al endpoint de categorias del api de contenido

<Badge text="Customers" type="customers" vertical="middle"/>

* Corrige cálculo sincrónico de segmentos al iniciar sesión cuando está habilitado


### 10.0.6 - 14 de agosto de 2024
<Badge text="Core" type="core" vertical="middle"/>

* Mejoras de seguridad

<Badge text="Channels" type="channels" vertical="middle"/>

* Corrige problema del SDK de liquid al mostrar json de un grupo repetible

<Badge text="Content" type="content" vertical="middle"/>

* Agrega query param `search` para realizar búsqueda de texto mediante el uso del api de contenido


### 10.0.5 - 02 de agosto de 2024
<Badge text="Core" type="core" vertical="middle"/>

* Corrige error de configuración del SEO


### 10.0.4 - 30 de julio de 2024
<Badge text="Core" type="core" vertical="middle"/>

* Mejoras de seguridad
* Mejoras en los webhooks, ahora los stages responden a los hooks asociados a un sitio, agrega hooks al crear o actualizar un asset

<Badge text="Channels" type="channels" vertical="middle"/>

* Corrige problema al publicar una page cuando se tienen una configuración de variables y borrado de backups

### 10.0.3 - 12 de julio de 2024
<Badge text="Core" type="core" vertical="middle"/>

* Mejoras de seguridad
* Mejoras de rendimiento
* Se agregan mejoras en la configuración de SEO, ahora es posible editar el sitemap y robots desde la configuración de la organización e incluir automáticamente sitios que dependan de la url base
* Se agrega listado de sesiones activas en el profile del administrador, también es posible cerrarlas desde esa vista.

<Badge text="Content" type="content" vertical="middle"/>

* Corrige problema al clonar entradas de contenido con multiples idiomas


### 10.0.2 - 08 de julio de 2024
<Badge text="Core" type="core" vertical="middle"/>

* Mejoras de seguridad
* Mejoras de rendimiento
* Actualización de dependencias

<Badge text="Customers" type="customers" vertical="middle"/>

* Mejora en el formato de teléfono, ahora se selecciona automáticamente el país mediante cloudflare

<Badge text="Channels" type="channels" vertical="middle"/>

* Corrige un problema de performance al usar el filtro by_tag en los templates liquid
* Mejora la experiencia de carga de templates al volver al template builder

<Badge text="Content" type="content" vertical="middle"/>

* Agrega la posibilidad de clonar espacios y tipos de contenidos


### 10.0.1 - 31 de mayo de 2024
<Badge text="Core" type="core" vertical="middle"/>

* Mejoras de seguridad
* Mejoras de rendimiento
* Actualización de dependencias

<Badge text="Customers" type="customers" vertical="middle"/>

* Soft login, ahora es posible el inicio de sesión mediante un código OTP que es enviado al correo electrónico
* Mejoras a los formularios de registro y profile

<Badge text="Channels" type="channels" vertical="middle"/>

* Mejoras en el acceso a las variables de sitio, ahora son accesibles para ser vistas por cualquier rol
* Agrega la posibilidad de usar las variables globales y de sitios en las urls de los items de menú
* Agrega ordenamiento por ruta de las páginas en la vista de tabla

<Badge text="Content" type="content" vertical="middle"/>

* Se agrega la posibilidad de especificar una descripción a los spaces el cual es mostrado en el overview
* Se agrega la posibilidad de agregar una descripción a los tipos de contenido


### 10.0.0 - 03 de abril de 2024
<Badge text="Core" type="core" vertical="middle"/>

* Mejoras de seguridad
* Mejoras de rendimiento
* Actualización de dependencias
* Nuevo diseño de la interfaz administrativa
* Agrega soporte para la invalidación de caché cuando se utiliza cloudflare para este fin, esto permite usar cachés más agresivos y que sean invalidados cuando modificamos las páginas, el contenido y las modificaciones a los assets del media library
* Agrega alerta de nuevo ingreso para usuarios administradores de la plataforma, ahora cuando se inicia sesión en un nuevo dispositivo se envía una notificación por correo electrónico

<Badge text="Customers" type="customers" vertical="middle"/>

* Agrega integración con salesforce, ahora los contactos en salesforce y los usuarios de un reino pueden mantenerse sincronizados, pueden ser configurados para recibir y/o enviar cambios en la información de los usuarios
* Mejoras visuales en los formularios de registro e inicio de sesión
* Mejoras en la creación de campañas de correos, ahora se pueden clonar para realizar nuevos envíos y se simplifica la vista principal
* Elimina el rol none, ahora todos los usuarios por defecto serán account users

<Badge text="Channels" type="channels" vertical="middle"/>

* Agrega a la construcción de menús la opción de agregar el buscador como item
* Plantilla mejorada para nuevos sitios, más simple y con referencia al framework desde el inicio
* Agrega snippets globales, ahora es posible definir un snippet de código y utilizarlo en los distintos sitios de la cuenta, también se incluye un selector de draft o publicado en el preview
* Mejora el preview de widgets, ahora se puede seleccionar el layout del sitio con el cual previsualizar el widget
* Agrega la posibilidad de previsualizar los widgets de forma local. Al trabajar con el CLI de Modyo ahora puedes ejecutar un preview del widget en desarrollo y verlo directamente en el navegador con la posibilidad de montarlo en los distintos layouts que contiene el sitio de destino
* Incluye soporte para chunks en los widgets del CLI, ahora la plataforma acepta un zip con los datos del widget más los chunks asociados
* Mejoras en la interfaz de widgets cuando estos provienen desde el CLI
* Agrega procesamiento de imágenes cuando se utiliza cloudflare, a través del filtro de assets se puede especificar tamaño y calidad de la imagen a mostrar o un conjunto de tamaños como srcset, esto beneficia el rendimiento de los sitios que se construyen
* Mueve las configuración de variables globales al contexto de channels
* BREAKING CHANGE: Se eliminan los widgets de contenido: Content List y Content Featured, pueden ser reemplazados mediante un widget html y el uso del sdk de liquid

<Badge text="Content" type="content" vertical="middle"/>

* Agrega grupos repetibles en contenido, ahora en la definición de types de contenido está la opción de grupo repetible el cual puede definir múltiples campos como un grupo que puede ser instanciado muchas veces en la creación de una entrada
* Agrega Media Library, ahora el asset manager pasa a ser media library el cual existe dentro de un space y no a nivel global, esto permite tener un mejor manejo de permisos y organización de los assets subidos a la plataforma, también puede ser usado en channels mediante el modal de media library y dejar el contexto específico de los assets a la aplicación en uso


