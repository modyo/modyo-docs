---
search: true
title: Modyo Platform
meta:
  - name: description
    content: Modyo Platform es la base tecnológica sobre la cual operan las aplicaciones de Modyo como Channels, Content y Customers. En ella, encontramos todo lo necesario para poder realizar las configuraciones transversales más relevantes. 
version: 9.2
---

# {{ $frontmatter.title }}

{{ $frontmatter.meta[0].content }} Presenta la interfaz principal desde la cual se tiene acceso a todas las secciones relevantes de la plataforma.


## ¡Empieza! 🚀

Modyo a todos sus usuarios administradores una sección de aprendizaje con links y contenido desde nuestra comunidad.

:::tip Opcional
La sección ¡Empieza! puede ser desactivada desde las opciones generales de la cuenta.
:::


## Revisión en Equipo

La Revisión en Equipo (o Team Review) es una herramienta que permite controlar el proceso de publicación de contenidos en Modyo. Al activarla, cada elemento debe pasar por etapas de revisión antes de su publicación, añadiendo un nivel de supervisión y colaboración entre el editor de contenidos y un equipo de revisores. Esta herramienta se configura de forma individual para cada Sitio y Espacio.

Cuando un editor o desarrollador considera que el elemento en el que está trabajando está listo, puede enviarlo a revisión. Esta tarea puede ser realizada por usuarios habilitados por defecto o por un equipo seleccionado por el editor. Estos revisores son los responsables de aprobar o rechazar el elemento, determinando si está listo para su publicación. Cada paso de este proceso lleva al elemento a través de distintos estados, que quedan registrados en un historial para su posterior auditoría.

### Configuración

Para activar la revisión de equipo, sigue estos pasos:

1. Desde el menú lateral en Modyo Platform, selecciona un espacio o sitio.
2. Expande **Configuración del espacio/sitio** y selecciona **Revisión en Equipo**.
3. Haz click en **Habilita la revisión en equipo**.

Las opciones disponibles son:

- **Habilitar revisión en equipo**: Activa o desactiva por completo la revisión en equipo en este contexto (sitio o espacio).
- **Número de aprobaciones**: Determina la cantidad de usuarios que deben aprobar el elemento para que esté listo para su publicación. Cuando se alcanza el número requerido de aprobaciones, el estado del elemento cambiará de "Esperando revisión" a "Aprobado".
- **Restringir la selección de revisores**: Por defecto, cualquier usuario con los permisos necesarios puede aprobar elementos en espera de revisión. Sin embargo, al habilitar esta opción, solo los revisores seleccionados por el editor podrán llevar a cabo la aprobación.
- **Forzar revisión**: Esta opción te permite seleccionar una lista de usuarios, de los cuales se requiere al menos una aprobación para que el elemento pueda cambiar a estado "Aprobado". Esto es independiente del número de aprobaciones configurado anteriormente. Incluso si un elemento tiene la cantidad de aprobaciones necesarias, permanecerá en estado "Esperando aprobación" si ningún usuario de la lista lo ha aprobado.
- **Requerir todos**: Esta opción extiende la restricción anterior a todos los usuarios seleccionados. En este caso, se requerirá la aprobación de todos los usuarios de la lista para que el elemento pueda cambiar a estado "Aprobado".

:::tip Atención
- Si bien la aprobación se podría encontrar limitada, cualquier usuario con permisos puede hacer comentarios sobre el elemento.
- Cuando haces cambios en la configuración de revisión en equipo, los elementos que ya estaban esperando revisión seguirán rigiéndose por las reglas anteriores a los cambios.
- Para que esos elementos se ajusten a la nueva configuración, es necesario que sean rechazados y enviados a revisión nuevamente.
:::

## Sobre la Interfaz

La interfaz de administración de Modyo proporciona un entorno unificado de gestión que centraliza todas las funcionalidades de la plataforma a través de una arquitectura modular y cohesionada. El diseño de la interfaz sigue principios de usabilidad empresarial, implementando patrones de navegación consistentes, jerarquías visuales claras y elementos de UI estandarizados que facilitan la adopción por parte de equipos multidisciplinarios. La arquitectura responsive garantiza accesibilidad completa desde diferentes dispositivos, mientras que la organización modular permite a los usuarios acceder de forma eficiente a las funcionalidades de Content Management, Site Builder, Widgets, Customer Insights y configuraciones del sistema desde una consola central.

El sistema de gestión de accesos y permisos implementa un modelo de seguridad basado en roles (RBAC) que permite un control granular sobre recursos y funcionalidades. Los administradores pueden configurar permisos a nivel de organización, espacios de trabajo, sitios y contenidos específicos, estableciendo workflows de aprobación personalizables y políticas de governance centralizadas. Esta arquitectura de seguridad integrada elimina la necesidad de gestionar múltiples sistemas de autenticación y autorización, proporcionando trazabilidad completa de accesos y acciones realizadas en la plataforma.

La experiencia de usuario está optimizada para la productividad operativa, incorporando funcionalidades como dashboards configurables con métricas en tiempo real, herramientas de búsqueda contextual con filtros avanzados, operaciones batch para gestión masiva de contenidos, y navegación adaptativa que presenta opciones relevantes según el contexto y permisos del usuario. La interfaz abstrae la complejidad técnica subyacente mientras expone capacidades avanzadas de configuración, permitiendo que tanto usuarios de negocio como desarrolladores puedan aprovechar completamente las capacidades de la plataforma digital.


### Proceso de Revisión

Cuando se activa la opción de revisión en equipo y se guardan los cambios, se muestra el botón verde principal **Enviar a revisión**. Al enviar a revisión, la barra cambia de estado para indicar si faltan condiciones o si no se tiene permiso suficiente. Al hacer click, en la sección lateral derecha se indicarán los requerimientos para publicar el elemento.

Si se requiere la revisión de algún revisor, aparecerá `(requerido)` junto a su nombre en el listado de revisores. A la derecha de cada revisor está el estado de su revisión: se muestra un círculo amarillo si no ha hecho su revisión, y un check verde en caso de haber aprobado el elemento. Todos los usuarios que tienen acceso a la vista de edición del elemento verán un botón **Aprobar** debajo del listado de revisores, aunque solo aquellos con los permisos necesarios podrán hacer click para aprobar el elemento.

Al aprobar el elemento, la aprobación del usuario queda registrada y se muestra un check verde junto a su nombre en el listado de revisores. En la barra de acciones del elemento, a la izquierda del botón principal de color verde y a la derecha del botón de diferencias, puedes encontrar la opción para abrir la pestaña de actividad del elemento, donde se muestra una lista cronológica de las acciones realizadas con la opción de ver los detalles de cada acción y dejar comentarios. Cuando se deja un comentario o se ejecuta alguna acción sobre el elemento, se envía una notificación tanto a quien envió a revisión como a los usuarios que están en la lista de revisores.



## Versionado

Como mecanismo de respaldo, al momento de publicar un elemento, Modyo genera y mantiene automáticamente un número de versiones que posteriormente pueden ser recuperadas en caso de ser necesario. Este sistema está disponible para Widgets, Pages, Navigation, Plantillas y Espacios.

### Tipos de versión

| Versión | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|---------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Editable** | La versión Editable conserva los cambios realizados en el elemento desde su última publicación o desde su creación si nunca ha sido publicado. Esta versión es la que pasa por el proceso de revisión en equipo cuando está activado. En el momento de la publicación, las versiones "Editable" y "Publicada" contienen el mismo contenido.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| **Publicado** | Esta versión guarda el contenido visible en el sitio y está disponible para todos los usuarios. En este estado, los recursos internos como Widgets y Plantillas ya pueden utilizarse en la creación de cualquier sitio o página. La versión publicada no necesariamente tiene el mismo contenido que la versión editable, excepto en el momento exacto de la publicación, ya que puede contener cambios que aún estén en proceso de prueba o revisión.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| **Respaldos** | Los respaldos son versiones previamente publicadas de los elementos. Cada vez que se publica un elemento, Modyo guarda la versión previamente publicada como un respaldo.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| **Programado** | Cuando programas una publicación, la versión editable pasa a un estado programado. Cuando llega el momento de la publicación, esa versión programada toma el lugar de la versión que está publicada en ese momento. De esta forma, puedes programar un cambio en el futuro en los elementos, y seguir trabajando en la versión editable.<br/><br/>Modyo solo permite tener una versión programada de cada elemento. Si programas una segunda modificación al elemento, sobreescribes la programación anterior.<br/><br/>Además de la programación de la publicación, también puedes programar la despublicación. Llegado el momento, la versión que está publicada pasará a ser un respaldo, dejando el elemento en cuestión sin una versión publicada.<br/><br/>Cuando se ejecutan las acciones programadas, Modyo puede tardar unos minutos en completarlas. Modyo te enviará una notificación por correo electrónico cuando la acción se haya completado.<br/><br/>Hay elementos (home, navegación, y plantillas) que **no pueden ser despublicados**. Si se programa una despublicación en conjunto con otros elementos, no tendrá efecto sobre estos elementos en específico. |
| **Aprobado** | Este estado aparece cuando se habilita la revisión en equipo y significa que un elemento en este estado está listo para ser publicado. Cualquier cambio que se le haga a un elemento en este estado, llevará al elemento a un estado editable y deberá pasar nuevamente por el proceso de revisión para poder ser publicado.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

Si deseas revisar una versión específica de un elemento, puedes acceder a las "Diferencias entre versiones" para ver los cambios realizados y revertirlos si es necesario.

:::tip Versiones
Por defecto, Modyo guarda las últimas 20 versiones publicadas de cada elemento, por lo que al hacer la vigesimoprimera publicación, estarás borrando el respaldo de la primera publicación del elemento.

Este valor se puede modificar mediante variables de entorno y es aplicable para todas las cuentas de este.
:::

### Revertir un Cambio

Dentro del versionado hay dos acciones que te permiten interactuar con los respaldos: resetear y rollback. Por defecto, el modal de diferencias muestra la versión publicada a la izquierda, y la versión editable a la derecha. Puedes cambiar qué versiones comparar, cambiando los valores en los selectores de versiones en la parte superior del modal.

Sigue estos pasos para revertir a una versión publicada en una Entrada:

1. Desde Modyo Platform, expande Content y selecciona Espacios.
1. Selecciona tu Espacio y después haz click en la Entrada que quieres versionar.
1. Haz click en **Diferencias**.
1. En el modal que aparece, selecciona la versión que quieras hacer rollback y después haz click en **Rollback a esta versión**.

Cuando se aplica alguna de las acciones, siempre se toma la versión seleccionada a la izquierda, de tal forma que si se resetea, se llevará la versión de la izquierda a la versión editable, y si se hace rollback, se llevará la versión de la izquierda a la versión publicada.

:::tip Módulos con soporte
El versionado se puede realizar en los siguientes módulos:
- En Content: las **Entradas**.
- En Channels: las **Páginas**, **Navigation**, **Plantillas**, y **Widgets**.
:::

### Resetear

En este caso, el respaldo toma el lugar de la versión editable, por lo que se perderán todos los cambios existentes, y así podrás seguir trabajando en cambios potenciales a esa versión para volverla a publicar.

### Rollback

En este caso, el respaldo se regresa directamente a la versión **publicada** del elemento, sin tocar la versión editable.

Esto es útil cuando se publicó algo por error y es necesario volver a alguna de las versiones estables. Permitiendo el resolver los problemas que la versión con errores pudo haber tenido.

:::tip Permisos de administración
Dado que esta es una acción potencialmente riesgosa, solo los administradores de sitios o espacios tienen el permiso para ejecutar esta acción.
:::

### Locks

Locks es una funcionalidad de Modyo que permite modificar un recurso de manera segura, evitando problemas de concurrencia que puedan ocurrir cuando otro usuario esté trabajando en él simultáneamente. De esta forma Modyo evita la pérdida de trabajo o la sobreescritura de documentos.

Locks se usa principalmente en [Content](/es/platform/content/) y en [Channels](/es/platform/channels/), pero también puede ser usado en otras secciones donde se editan elementos como Configuraciones y [Customers](/es/platform/customers/). La implementación varía según la sección: en Content y Channels, múltiples usuarios pueden entrar a un recurso, siendo sólo uno el que podrá editar y guardar esos cambios, mientras que los demás sólo verán la última versión guardada en la plataforma. Si una segunda persona intenta hacer un cambio, le aparecerá un mensaje indicando que el elemento ya tiene cambios y que lo que está intentando modificar está obsoleto.

En otras secciones como Customers y Configuración, Locks no permitirá la visión simultánea del recurso, por lo que si éste se encuentra en edición, otro usuario no podrá ingresar a la vista de trabajo. En este caso, sólo un Administrador podrá tomar el control, activando para sí mismo la edición y descartándose los avances no guardados del usuario que se encuentra trabajando en él.


:::tip Tomar el control

Si un Administrador quiere tomar el control de una vista, deberá hacer click en el elemento en uso y en la pantalla siguiente, hacer click en el botón **Tomar Control**.

Cuando el Administrador toma el control, el usuario que esté usando el recurso recibe un mensaje en el que se le impide seguir haciendo cambios, por lo que cualquier cambio que el usuario esté realizando, debe ser guardado y respaldado offline.

Tras tomar el control, el Administrador solo **tendrá dos horas para hacer cambios** sin guardar. Pasado ese tiempo, el recurso vuelve a liberarse y puede ser tomado por cualquier otro usuario.
:::

### Modos de Vista Previa

Los modos de vista previa te permiten previsualizar los cambios realizados a elementos publicables como entradas, páginas, navegación, widgets o plantillas. El acceso a este modo está en la parte superior derecha del sitio. Puedes reconocer que estás en modo vista previa, cuando veas la barra en la parte superior del sitio.

La barra de vista previa contiene los siguientes elementos interactivos:

- **Selector de plantillas**: Permite cambiar entre la versión publicada y editable de los elementos pertenecientes al template builder.
- **Selector de contenido**: Permite alternar entre la versión publicada y editable de los elementos pertenecientes a la aplicación de contenidos y que se estén usando en el sitio mediante el SDK de Liquid de contenido.
- **Selector de navegación**: Permite cambiar entre la versión publicada y editable de los elementos pertenecientes al navigation builder.
- **Selector de páginas**: Permite alternar entre la versión publicada y editable de los elementos pertenecientes al page builder.
- **Selector de vista de contenido**: Permite cambiar entre la versión publicada y editable de la entrada de contenido que se está previsualizando en las vistas personalizadas de contenido. Esta vista no usa directamente el SDK de Liquid de contenido, por lo que el contenido en estas vistas no se verá afectado por el selector del SDK de contenido.
- **Selector de widgets**: Si se están previsualizando páginas que contienen widgets personalizados, se mostrará una lista de los widgets presentes en la página, permitiendo seleccionar si se desea visualizar la versión editable o publicada de cada uno de ellos. Una vez realizada la selección, debes hacer click en el botón "refrescar" para que la configuración de los widgets surta efecto.
- **Pestaña para minimizar**: Permite ocultar la barra de previsualización para evitar interferencias con los elementos ubicados en la parte superior del sitio. Una vez minimizada, la pestaña seguirá visible para restaurar la barra en el modo vista previa.
- **Editar elemento**: Al hacer click, se accedes a la vista de edición del elemento que se está visualizando, ya sea una entrada, una página, un widget o una plantilla predeterminada del sitio.
- **Compartir link**: Permite copiar un enlace que se puede compartir con otros usuarios. Al abrir el enlace, se accede directamente al modo vista previa con la configuración que se tenía al momento de copiar el enlace. Para acceder al modo vista previa, es necesario tener una sesión iniciada en la cuenta de administradora.
- **Salir del modo vista previa**: Cierra el modo vista previa, eliminando la barra y manteniendo la pestaña en la URL actual del sitio.

:::warning SDK de Javascript
Cambiar el selector de contenido de la barra de previsualización no tendrá efecto sobre el contenido que estés usando a través del SDK de JavaScript o la API de contenido. Solo tendrá efecto en el contenido que se usa a través del SDK de Liquid.
:::

