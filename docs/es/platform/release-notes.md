---
search: true
---

# Notas del release

## 10.0
### 10.0.4 30 de julio de 2024
<Badge text="Core" type="core" vertical="middle"/>

* Mejoras de seguridad
* Mejoras en los webhooks, ahora los stages responden a los hooks asociados a un sitio, agrega hooks al crear o actualizar un asset

<Badge text="Channels" type="channels" vertical="middle"/>

* Corrige problema al publicar una page cuando se tienen una configuración de variables y borrado de backups

### 10.0.3 12 de julio de 2024
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


