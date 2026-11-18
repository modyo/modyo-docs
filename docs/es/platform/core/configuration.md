---
search: true
---

# Configuraciones

En esta sección, puedes personalizar tu cuenta y la plataforma de acuerdo a tus necesidades.

## Configuración General

La pantalla de configuración general tiene tres bloques: las opciones generales, **Visualización** y **Zona peligrosa**.

Las opciones generales de una cuenta en Modyo Platform son:

- **Nombre de la cuenta**: Nombre con el que identificas tu cuenta en Modyo.
- **Sitio por defecto**: En caso de tener más de un sitio, esta opción te permite redirigir el tráfico del dominio base hacia un sitio específico.
- **Movido permanentemente (redirección con status code 301)**: Hace que la redirección hacia el sitio por defecto sea permanente. La casilla queda deshabilitada mientras **Sitio por defecto** esté en **Ninguno**, así que primero elige un sitio.
- **Idioma predeterminado**: Selecciona el idioma por defecto de la plataforma. Los usuarios existentes pueden cambiar el idioma para ellos en la configuración de usuario de su perfil.
- **Zona horaria**: Define el horario para toda la plataforma. Esta será la zona horaria por defecto para los nuevos sitios y campañas de correo.

:::tip Zona Horaria
Si la zona horaria que eliges está sujeta a cambios de horarios, estos se reflejarán automáticamente cuando cambie el horario en la zona o el país seleccionado.
:::

Para guardar estas opciones, haz click en **Guardar**.

:::tip Versión de Modyo Platform
La versión de la plataforma no es una opción de esta pantalla. Para conocerla, abre el código fuente de cualquier página del panel de administración (click derecho sobre la página y la opción para ver su código fuente) y busca la etiqueta `<meta name="modyo-version">`: su atributo `content` indica la versión.
:::

### Visualización

- **No mostrar la página de primeros pasos**: Al habilitar esta opción ocultas el botón de primeros pasos para todos los usuarios.
- **Logo de la cuenta**: Personaliza la plataforma subiendo un logo para todos los usuarios. El logo se muestra también en el inicio de sesión de la plataforma, en la recuperación de contraseña y en los correos transaccionales.
- **Favicon de la cuenta**: Favicon que se muestra en las páginas de la cuenta y se usa por defecto en las aplicaciones.
- **API key de Google**: La API key utilizada para conectar la API de Google Maps en los campos de tipo ubicación en el módulo Content.

#### Colores del tema

En esta sección puedes personalizar la paleta de colores de toda la interfaz de administración de la cuenta, incluida la página de inicio de sesión. Cada color tiene un selector visual y un campo de texto con el valor HEX, y los dos hacen lo mismo: puedes elegir el tono en el selector o escribir el código a mano. El campo de texto no valida el formato, así que escribe siempre el código HEX completo, con el `#` inicial y seis dígitos (`#RRGGBB`), porque un valor mal escrito deja ese elemento con su estilo base.

Los colores que puedes definir, con su valor por defecto, son:

- **Color principal** (`#32ae70`) y **Color principal al pasar el cursor** (`#2a9c63`): Colores de los botones y elementos principales.
- **Color de acento** (`#2068d5`) y **Color de acento al pasar el cursor** (`#1e60c4`): Colores de los elementos secundarios y enlaces.
- **Texto de navegación seleccionado** (`#2068d5`) y **Fondo de navegación seleccionado** (`#f6f9fd`): Colores del elemento activo en la navegación.
- **Fondo de página** (`#f6f9fd`): Color de fondo general de la interfaz.

Para aplicar la paleta, ajusta los colores que necesites y haz click en **Guardar**. La página se recarga para que el nuevo tema se vea en toda la interfaz.

**Color principal**, **Color principal al pasar el cursor** y **Fondo de página** se aplican además fuera del panel: son los colores del fondo, los enlaces y los botones de los correos transaccionales que envía la plataforma, así que un cambio de paleta también se nota en los correos que reciben tus usuarios. Los otros cuatro colores solo afectan a la interfaz de administración.

Para volver a la paleta original de Modyo, haz click en **Restablecer a predeterminado** y confirma en el mensaje que aparece. No necesitas guardar después: el cambio se aplica de inmediato y la página se recarga.

:::warning Atención
**Restablecer a predeterminado** no distingue entre colores: descarta los siete valores personalizados de una sola vez, no solo el que estás editando. Si tienes cargada una paleta de marca, anota sus códigos antes de restablecer, porque tendrás que volver a ingresarlos uno por uno.
:::

### Zona peligrosa

En este bloque cambias la URL de la cuenta. Muestra el **Host de cuenta** actual, que es el subdominio que representa tu cuenta.

Para cambiarlo, sigue estos pasos:

1. Haz click en **Cambiar identificador**.
2. En la ventana que aparece, escribe el nuevo valor en el campo **URL de la cuenta**.
3. Haz click en **Cambiar identificador** para confirmar.

Si decides modificarlo, asegúrate de que todos los usuarios estén informados de la nueva URL. Una vez guardado el cambio, Modyo te redirigirá al inicio de sesión de la cuenta.

## Configuración de Perfil

Personaliza tu usuario, cambia tu contraseña, habilita autenticación de dos factores y revisa tus sesiones activas dentro de tu Perfil.

Para acceder a tu perfil, haz click en tu avatar, en la parte inferior del menú lateral, y selecciona **Perfil**.

La pantalla de tu Perfil tiene dos columnas. A la izquierda están tus datos, repartidos en dos bloques que se guardan por separado. A la derecha está la seguridad de tu acceso: **Cambiar mi contraseña**, **Configurar autenticador** y **Sesiones activas**.

En el primer bloque puedes modificar los siguientes campos y guardarlos con **Guardar**:

- **Nombre**
- **Apellido**
- **Avatar**
- **Idioma**: Cambia el idioma de Modyo Platform (por ejemplo, el nombre de los campos y botones dentro de la plataforma), sin embargo, no modifica los sitios.

### Nombre de usuario y email

El nombre de usuario y el email están en el bloque **Zona peligrosa**, que pide tu contraseña para guardar cualquier cambio. Para modificarlos, sigue estos pasos:

1. Escribe tu contraseña en el campo **Contraseña actual**.
2. Modifica el **Nombre de usuario**, el **Email** o ambos.
3. Haz click en **Guardar**.

El nombre de usuario cambia en cuanto guardas. El email, en cambio, no se reemplaza de inmediato: Modyo envía un enlace de verificación a la nueva dirección y el cambio se aplica cuando haces click en ese enlace. Hasta entonces, tu cuenta sigue usando el correo anterior. El enlace vence a los 5 minutos; si no lo usas a tiempo, vuelve a guardar el cambio para recibir uno nuevo.

:::warning Atención
Si escribes mal tu contraseña actual más de tres veces, Modyo cierra tu sesión en todos tus dispositivos por seguridad. Revisa los límites que se aplican en [Cambios de contraseña, correo y nombre de usuario desde el perfil](/es/platform/core/security#cambios-de-contrasena-correo-y-nombre-de-usuario-desde-el-perfil).
:::

### Cambio de contraseña

Para cambiar tu contraseña, sigue estos pasos:

1. En la columna derecha de tu Perfil, en **Cambiar mi contraseña**, haz click en **Cambiar**.
2. Completa los campos **Contraseña actual**, **Nueva contraseña** y **Confirmar contraseña**.
3. Haz click en **Guardar**.

Desde tu Perfil puedes cambiar la contraseña una sola vez cada 24 horas.

### Configuración de autenticador (2FA)

Para configurar tu autenticador, sigue estos pasos:

1. En la columna derecha de tu Perfil, en **Configurar autenticador**, haz click en el botón **Configurar autenticador**.
2. En la pantalla que se abre, escanea el código QR con la app Google Authenticator de tu dispositivo móvil. Si entras desde el móvil y no puedes escanearlo, usa el enlace que aparece bajo el código.
3. Escribe el código de 6 dígitos que te da la app en el campo **Código actual**.
4. Haz click en **Guardar**.

La pantalla de configuración vence a los 5 minutos de abrirla. Si se cumple el plazo antes de guardar, vuelve a empezar desde tu Perfil.

Con el autenticador activo, en lugar de ese botón aparece **Eliminar autenticador**. Al hacer click, el autenticador se elimina de inmediato, sin pedir confirmación. Para más detalles, revisa [Autenticación de Dos Pasos 2FA](/es/platform/core/security#autenticacion-de-dos-pasos-2fa).

### Sesiones activas

En **Sesiones activas** ves los dispositivos en los que tienes una sesión abierta en el panel. De cada uno se muestra el navegador y el sistema operativo, el **Último Ingreso** y la **Dirección IP**.

- Para cerrar la sesión de un dispositivo, haz click en **Cerrar sesión** junto a él. En la sesión que estás usando, el botón está deshabilitado.
- Para cerrar todas las demás sesiones a la vez, haz click en **Cerrar sesión en todos los dispositivos**. Esta opción aparece cuando tienes más de una sesión abierta y no cierra la sesión actual.