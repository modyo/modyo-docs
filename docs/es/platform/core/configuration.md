---
search: true
---

# Configuraciones

En esta sección, puedes personalizar tu cuenta y la plataforma de acuerdo a tus necesidades.

## Configuración General

Las opciones generales de una cuenta en Modyo Platform son:

- **Nombre de la cuenta**: Nombre con el que identificas tu cuenta en Modyo.
- **URL de la cuenta**: Es el subdominio que representa tu cuenta. Si decides modificarlo, asegúrate de que todos los usuarios estén informados de la nueva URL. Una vez guardado el cambio, Modyo te redirigirá al inicio de sesión de la cuenta.
- **Sitio por defecto**: En caso de tener más de un sitio, esta opción te permite redirigir el tráfico del dominio base hacia un sitio específico.
- **Movido permanente**: Utiliza una redirección de estatus 301.
- **Idioma predeterminado**: Selecciona el idioma por defecto de la plataforma. Los usuarios existentes pueden cambiar el idioma para ellos en la configuración de usuario de su perfil.
- **Zona horaria**: Define el horario para toda la plataforma. Esta será la zona horaria por defecto para los nuevos sitios y campañas de correo.

:::tip Zona Horaria
Si la zona horaria que eliges está sujeta a cambios de horarios, estos se reflejarán automáticamente cuando cambie el horario en la zona o el país seleccionado.
:::

- **Versión de Modyo Platform**: Versión actual de la plataforma. Puedes encontrarla en la fuente de la página, bajo el meta data `<meta name="modyo-version" content="stable (build 2ee6170, 20220309120810)">`. Para ver la fuente, haz click derecho sobre cualquier elemento de la página y selecciona **Ver Página Fuente**.

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

## Configuración de Perfil

Personaliza tu usuario, cambia tu contraseña, y habilita autenticación de dos factores dentro de tu Perfil.

Para acceder a tu perfil, haz click en el botón `...` en la esquina inferior izquierda y selecciona **Perfil**.

En la pantalla de tu Perfil, puedes modificar los siguientes campos:
  - Nombre
  - Apellido
  - Avatar
  - Idioma: Cambia el idioma de Modyo Platform (por ejemplo, el nombre de los campos y botones dentro de la plataforma), sin embargo, no modifica los sitios.
  - Nombre de usuario
  - Email

### Cambio de contraseña

Para cambiar tu contraseña, sigue estos pasos:

- Dentro de tu Perfil, en la esquina superior derecha, haz click en `...` y selecciona **Cambiar mi contraseña**.
- Escribe tu contraseña actual y tu nueva contraseña.
- Haz click en **Guardar**.

### Configuración de autenticador (2FA)

Para configurar tu autenticador, sigue estos pasos:

- Dentro de tu Perfil, en la esquina superior derecha, haz click en `...` y selecciona **Configurar autenticador**.
- En la pantalla de Configurar autenticador, escanea el código QR con tu dispositivo móvil.
- Escribe en la pantalla el código que te da la app de Google Authenticator.
- Haz click en **Guardar**.