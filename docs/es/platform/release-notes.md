---
search: true
---

# Notas del release

## 10.0
### 10.0.0 - 03 de abril de 2024
<Badge text="Core" type="core" vertical="middle"/>

* Mejoras de seguridad
* Actualización de dependencias
* Mejoras de performance
* Nuevo diseño de la administración

<Badge text="Customers" type="customers" vertical="middle"/>

* Mejoras visuales en los formularios de registro e inicio de sesión

<Badge text="Channels" type="channels" vertical="middle"/>

* Agrega a la construcción de menus la opción de agregar el buscador como item
* Plantilla mejorada para nuevos sitios, mas simple y con la referencia al framework desde el inicio
* Agrega snippets globales, ahora es posible definir un snippet de código y utilizarlo en los distintos sitios de la cuenta
* Agrega la posibilidad de previsualizar los widgets de forma local, cuando se trabaja con el CLI de modyo ahora puedes ejecutar un preview del widget en desarrollo y verlo directamente en el navegador con la posibilidad de montarlo en los distintos layouts que contiene el sitio de destino
* Agrega la posibilidad de usar chunks en los widgets del CLI, ahora la plataforma acepta un zip con los datos del widget mas los chunks asociados.

<Badge text="Content" type="content" vertical="middle"/>

* Agrega grupo repetibles en contenido, ahora en la definicion de types de contenido esta la opcion de grupo repetible el cual puede definir multiples fields como un grupo que puede ser instanciado muchas veces en la creación de un contenido.
* Agrega Media Library, ahora el asset manager pasa a ser media library el cual existe dentro de un space y no a nivel global, esto permite tener un mejor manejo de permisos y organización de los assets subidos a la plataforma, tambien puede ser usado en channels mediante el modal de media library y dejar el contexto especifico de los asstes a la app en uso.


