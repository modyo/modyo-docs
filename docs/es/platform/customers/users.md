---
search: true
---

# Usuarios

En esta sección, puedes ver y modificar los usuarios externos del sistema. Estos usuarios son aquellos que se registran en la plataforma, acceden a los sitios de Modyo, responden a formularios y pueden recibir campañas de correo.

La vista principal muestra una tabla con todos los usuarios registrados, que se paginará si hay más de 30 registros.

Puedes utilizar los filtros en la parte superior de la tabla para encontrar grupos de usuarios rápidamente. Los filtros disponibles son:

- **Estado**: Usuarios activos e inactivos.
- **Verificación**: Usuarios que han confirmado sus datos en la plataforma.
- **Segmentos**: Usuarios que pertenecen a un [segmento](/es/platform/customers/segments) específico.
- **Etiquetas**: Usuarios asignados a etiquetas específicas en la plataforma.
- **Búsqueda**: Filtra usuarios por nombre, apellido, email o nombre de usuario.

Puedes ordenar los usuarios en la tabla por nombre, fecha de inscripción, último ingreso o cantidad de sesiones iniciadas haciendo clic en las cabeceras de las columnas.

:::tip Alcance por segmentos
Si tu acceso al reino está restringido por segmentos, este listado solo muestra los usuarios que pertenecen a los segmentos de tu alcance. Conoce más en [Restringir el alcance con segmentos](/es/platform/customers/settings.html#restringir-el-alcance-con-segmentos).
:::

### Acciones masivas

Marca la casilla junto al nombre de uno o más usuarios y haz clic en el botón **Bulk Actions** debajo del listado para realizar las siguientes acciones:

- **Desactivar**: Desactiva a los usuarios seleccionados.
- **Activar**: Activa a los usuarios seleccionados.
- **Exportar**: Exporta la lista de usuarios en formato Excel o CSV.
- **Agregar o eliminar etiquetas**: Crea nuevas etiquetas y asigna o elimina etiquetas existentes para los usuarios seleccionados.

## Añadir un Usuario

Para agregar un nuevo usuario, haz clic en el botón **Nuevo Usuario** y completa los siguientes campos:

- **Nombre**: **[Requerido]**. Nombre legal del usuario.
- **Apellido**
- **Apellido materno**
- **Nombre de usuario**: **[Requerido]**. Identificador único en la plataforma. Solo puede contener letras de la A a la Z (mayúsculas o minúsculas), números y los símbolos `| # @ % . _ - ' + /`; no se permiten espacios.
- **Email**: **[Requerido]**
- **Contraseña**: **[Requerido]**. Debe contener al menos 8 caracteres.
- **Confirmación de contraseña**: **[Requerido]**
- **Tags**: Etiquetas para identificar al usuario.

:::tip Tip
Para enviar la contraseña al correo del usuario, marca la casilla debajo del campo de correo electrónico.
:::

Los usuarios que creas desde el administrador quedan con el cambio de contraseña pendiente: la primera vez que inicien sesión, la plataforma los lleva a la pantalla de cambio de contraseña y no los deja continuar hasta que definan una nueva. Lo mismo ocurre cuando un administrador les fija una contraseña desde **Editar**.

:::tip Tip
Si el reino tiene habilitado el [Soft login](/es/platform/customers/settings.html#soft-login), a los usuarios no se les pide contraseña para entrar, así que este cambio obligatorio no aplica.
:::

Si necesitas agregar campos adicionales al formulario o seleccionar un avatar predeterminado para usuarios sin avatar, ve a la sección **Regístrate** en la [Configuración de Reino](/es/platform/customers/settings).

Para crear o modificar campos personalizados, consulta la sección [Custom Fields](/es/platform/customers/settings#custom-fields).

## Ficha de Usuario

Haz clic en el menú lateral de la columna de acciones para ver los detalles de un usuario o para desactivarlo. Selecciona **Ver** para abrir la ficha del usuario, donde encontrarás las siguientes secciones:

### Perfil

Datos generales del usuario:

- **Avatar del usuario**: Solamente si está disponible.
- **Estado en la plataforma**: Activo o inactivo.
- **Fecha de registro**: Ingreso del usuario a la plataforma.
- **Último ingreso**: Ultimo registro del usuario en la plataforma.
- **Inicios de sesión**: Número de sesiones iniciadas por el usuario.
- **Estado de verificación** del usuario.
- **Segmentos**: Listado de segmentos en los que está incluido, si aplica.
- **Tags**: Listado de etiquetas en los que está incluido, si aplica.

### Impersonado
La funcionalidad de impersonación permite a los administradores del reino, con los roles adecuados, tomar temporalmente la identidad de un usuario final y navegar por el sitio web como si fueran ese usuario. Esto es una herramienta invaluable para el soporte, la depuración y la verificación de la experiencia del cliente.

Esta funcionalidad se puede usar desde la Ficha de Usuario: encontrarás el botón "Impersonar" en el menú de acciones (identificado con tres puntos).

### Proceso de impersonación
Al hacer clic en el botón "Impersonar", se abrirá una nueva pestaña del navegador que lo llevará directamente al perfil del usuario en el front end con su sesión activa.

Propósito: Una vez dentro, podrás navegar el sitio (Channels) exactamente como lo haría el usuario, viendo su contenido segmentado, su experiencia de usuario y el estado de sus originaciones.
:::tip Tip
Toda la actividad realizada mientras se impersone el usuario quedará en los logs marcada como impersonada.
:::

:::warning Atención
La sesión de impersonación es temporal y debe finalizarse para evitar confusiones. Para cerrar la sesión hay que darle click al botón salir en la barra de impersonado o simplemente desloggearse.
:::

### Actividad

En esta sección puedes ver un registro de todas las acciones realizadas por el usuario en la plataforma.

:::warning Atención
Estos registros no se pueden borrar ni editar.
:::

:::tip Tip
Si un usuario reporta que pidió recuperar su contraseña y el correo nunca le llegó, revisa esta actividad: las solicitudes que la plataforma procesa quedan registradas aquí, y las que descarta por exceso de intentos no dejan ningún rastro. El detalle de esos límites está en [Límites de solicitudes y bloqueos](/es/platform/customers/settings.html#limites-de-solicitudes-y-bloqueos).
:::

### Respuestas a formularios

Esta sección contiene una lista de formularios rellenados por el usuario. Haz clic en un formulario para ver sus respuestas. Para más información, consulta la sección [Formularios](/es/platform/customers/forms).

### Notas

Aquí puedes agregar notas personalizadas sobre los usuarios. Solo los administradores pueden ver, agregar o eliminar notas.

#### Dispositivos

Muestra los dispositivos del usuario que tienen una sesión activa, con el navegador y el sistema operativo, la fecha de inicio y la **Dirección IP** de cada uno. Un administrador puede cerrar esas sesiones de forma remota:

- Para cerrar una sesión puntual, haz clic en **Cerrar sesión** junto al dispositivo.
- Para cerrarlas todas de una vez, haz clic en **Cerrar sesión en todos los dispositivos**, sobre el listado. Esta opción aparece cuando hay más de una sesión activa.

Al revocar una sesión, el dispositivo pierde el acceso y el usuario tiene que autenticarse de nuevo para volver a entrar.

### Opciones adicionales

En el menú contextual puedes ejecutar las siguientes acciones:

- **Editar**: Abre el modal de edición de usuario. Si le asignas una contraseña nueva, el usuario tiene que cambiarla la próxima vez que inicie sesión.
- **Desactivar**: Desactiva un usuario, le impide volver a iniciar sesión y revoca todas sus sesiones activas, por lo que también lo saca de las sesiones que tuviera abiertas en ese momento.
- **Borrar**: Borra al usuario de la plataforma. Solo los administradores pueden realizar esta acción. La plataforma lo desactiva de inmediato y el borrado definitivo corre en un proceso en segundo plano, así que su registro puede seguir apareciendo un rato en el listado.

:::tip Tip
- Modificar un usuario puede resultar en que se modifique el listado de segmentos a los que pertenece ese usuario.
- Un usuario puede eliminar su cuenta desde las opciones adicionales de su perfil.
:::
