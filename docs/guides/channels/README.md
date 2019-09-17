---
search: true
---

# Modyo Channels

Channels te permite manejar cada uno de los sitios hechos en Modyo, incluyendo templates, widgets, páginas y la navegación. Está enfocado principalmente para ser manejado por diseñadores, desarrolladores y administradores de contenido.

## Sitios

Es aquí donde debes operar para crear sitios y minisitios dentro de la plataforma. En este caso, la operación de Sitios implica todo el desarrollo, diseño y flujo de navegación. Si quieres añadir contenido a cada una de ellas, debe ser agregada en la sección Content.

Al entrar, podrás ver que existen 4 estados:

- Habilitado (Estado por defecto en el que quedan los sitios recién creados y los que están online)
- Ocultos (Sitios creados que solo puede ver el usuario en linea)
- Desarrollo (Sitios traspasados a otros usuarios que se encuentren trabajando en ellos)
- Deshabilitado (Sitios que han sido desechados)

Para crear un sitio, solo debes hacer clic en la pestaña "Nuevo", el cual te permitirá designar el nombre y el host, y posteriormente un template para su apariencia y estructura.

Después de ello, podrás verlo en modo "Habilitado", lo que significa que está online para trabajar.

## Configuración del sitio

La Configuración del sitio nos permitirá abrir las opciones de nuestra plataforma, para que sea vista de distinta manera por los visitantes, clientes, desarrolladores y administradores del sitio. Además, podemos modificar opciones que permitan mejorar nuestra aparición en motores de búsqueda y la visión de algunos de los datos a los que tiene acceso el público al llegar a nuestras páginas.

### General

Dentro de esta sección, podemos configurar los siguientes datos:

- Nombre del sitio
- Descripción
- Logo del sitio
- Idioma
- Team Review (Habilitar el trabajo en equipo y revisión de los cambios que se estén realizando internamente)
- Zona Horaria
- Barra de Ingreso (Mostrarla públicamente para el ingreso de usuarios a la plataforma)
- Favicon (Imagen que aparece al costado de la barra de dirección)
- Icono de Apple (Imagen que aparece en dispositivos móviles al ser marcado)

### PWA

::: danger
Missing description
Mannifers.json
Serviceworker.js
Variables disponibles
:::

### SEO

El SEO (Search Engine Optimization) es nuestra llave para aparecer en los distintos motores de búsqueda. De una buena configuración depende si los usuarios llegan a nuestro sitio a través de ellos.

Las opciones a configurar son:

- Tagline (Descripción que aparecerá en los motores de búsqueda, bajo el nombre del sitio)
- Palabras claves (palabras que buscarán los usuarios y que queremos que nuestro sitio aparezca)
- Sitemap (Archivo que permite a los motores de búsqueda indexar mejor el contenido de nuestro sitio. Podemos dejar que Modyo haga automáticamente esta opción o la podemos modificar para que se enfoque sólo en un contenido en especial)
- Robots.txt (En este archivo le damos las instrucciones al motor de búsqueda para que categorice nuestro sitio. También podemos configurar este archivo para que la página no sea indexada directamente)

### Restricciones

Restricciones nos permite habilitar el sitio para usuarios públicos o dejarlo en privado para usuarios registrados y desarrolladores.

También podemos restringir para que solo nuestro Home sea visto por nuestros usuarios públicos mientras sus páginas derivadas estén deshabilitadas.

Además, nos permite configurar la visualización del contenido targetizado de nuestros usuarios registrados, para que solo se vea en su home o dentro de todas las páginas que navegue en el sitio.

### Dominios

Dominios es lo que permitirá saber dónde está publicamente ubicado nuestro sitio, por lo que esencial que cada uno de los miembros de la plataforma esté al tanto de los cambios que se realicen acá.

Las variables que puedes cambiar aquí son:

- Host (donde se encuentra nuestro sitio dentro del servidor
- Activar dominios personalizados (Si es que queremos que dentro de nuestro dominio, existan sitios personalizados con dirección propia)
- Habilitar SSL en nuestro sitio (Es necesario tener un certificado dentro de nuestro servidor para habilitarlo)
- Dominio primario (dirección de nuestro sitio)
- Dominio alternativo (dirección secundaria para redireccionar en caso de que falle la primera)

### Miembros del Equipo

Para la administración de un sitio, que es manejado por múltiples usuarios, es necesario designar roles definidos con tal de hacer más eficientes sus tareas.

Modyo permite categorizar en tres roles a los usuarios internos del sitio:

#### Site Developer

Es el usuario que está a cargo del desarrollo estructural de los recursos, la creación y edición de contenido. Todo lo que haga, tiene que pasar a revisión.

Este usuario no puede publicar, eliminar, volver a versiones anteriores de recursos (Rollback) ni cambiar la configuración.

#### Site Reviewer

Corrigen el trabajo hecho por Developers, aprobando o desechando lo que ya está hecho, para después publicar.

No puede editar la configuración del sitio.

#### Site Admin

Administrador del sitio, tiene acceso a los dos roles anteriores, además de poder configurar todo el sitio.

Este usuario es distinto al Default Admin. El Site Admin solo puede configurar el sitio externo, pero no puede cambiar nada de la plataforma.

En caso de ser necesario, se pueden borrar a los usuarios del sitio que ya tengan roles anteriores. Para ello, solo se debe hacer clic en el usuario y la acción de Borrar.
