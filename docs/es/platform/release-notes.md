---
search: true
---

# Notas del release

## 10.0
### 10.0.0 - 03 de abril de 2024
<Badge text="Core" type="core" vertical="middle"/>

* Mejoras de seguridad
* Mejoras de performance
* Actualización de dependencias
* Nuevo diseño de la interfaz administrativa
* Agrega soporte para la invalidación de cache cuando se utiliza cloudflare para este fin, esto permite usar caches mas agresivos y que sean invalidados cuando modificamos las páginas, el contenido y las modificaciones a los assets del media library
* Agrega alerta de nuevo ingreso para usuarios administradores de la plataforma, ahora cuando se inicia sesión en un nuevo dispositivo se envia una notifiacion por correo

<Badge text="Customers" type="customers" vertical="middle"/>

* Agrega una integración con salesforce, ahora los contactos en salesforce y los usuarios de un reino pueden mantenerse sincronizados, pueden ser configurados para recibir y/o enviar cambios en la informacion de los usuarios
* Mejoras visuales en los formularios de registro e inicio de sesión
* Mejoras en la creación de campañas de correos, ahora se pueden clonar para realizar nuevos envíos y se simplifica la vista de envios
* Elimina el rol none, ahora todos los usuarios por defecto serán account users

<Badge text="Channels" type="channels" vertical="middle"/>

* Agrega a la construcción de menus la opción de agregar el buscador como item
* Plantilla mejorada para nuevos sitios, mas simple y con la referencia al framework desde el inicio
* Agrega snippets globales, ahora es posible definir un snippet de código y utilizarlo en los distintos sitios de la cuenta, tambien se incluye un selector de draft o publicado en el preview
* Mejora el preview de widgets, ahora se puede seleccionar el layout del sitio con el cual previsualizar el widget
* Agrega la posibilidad de previsualizar los widgets de forma local, cuando se trabaja con el CLI de modyo ahora puedes ejecutar un preview del widget en desarrollo y verlo directamente en el navegador con la posibilidad de montarlo en los distintos layouts que contiene el sitio de destino
* Agrega la posibilidad de usar chunks en los widgets del CLI, ahora la plataforma acepta un zip con los datos del widget mas los chunks asociados
* Mejoras en la interfaz de widgets cuando estos provienen desde el CLI
* Agrega procesamiento de imagenes cuando se utiliza cloudflare, a traves del filtro de assets se puede especificar tamaño y calidad de la imagen a mostrar o un conjunto de tamaños como srcset, esto beneficia el performance de los sitios que se construyen
* Mueve las configuracion de variables globales al contexto de channels
* BREAKING CHANGE se eliminan los widgets de contenido Content List y Content Featured, pueden ser reemplazados mediante un widget html y el uso del sdk de liquid

<Badge text="Content" type="content" vertical="middle"/>

* Agrega grupo repetibles en contenido, ahora en la definicion de types de contenido esta la opcion de grupo repetible el cual puede definir multiples fields como un grupo que puede ser instanciado muchas veces en la creación de un contenido
* Agrega Media Library, ahora el asset manager pasa a ser media library el cual existe dentro de un space y no a nivel global, esto permite tener un mejor manejo de permisos y organización de los assets subidos a la plataforma, tambien puede ser usado en channels mediante el modal de media library y dejar el contexto especifico de los asstes a la app en uso


