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
- **Favicon de la cuenta**: Favicon para las páginas de la cuenta y por defecto en las aplicaciones.
- **API key de Google**: La API key utilizada para conectar la API de Google Maps en los campos de tipo ubicación en el módulo Content.

#### Colores del tema

En esta sección puedes personalizar la paleta de colores de toda la interfaz de administración de la cuenta, incluida la página de inicio de sesión. Los colores que puedes definir son:

- **Color principal** y **Color principal al pasar el cursor**: Colores de los botones y elementos principales.
- **Color de acento** y **Color de acento al pasar el cursor**: Colores de los elementos secundarios y enlaces.
- **Texto de navegación seleccionado** y **Fondo de navegación seleccionado**: Colores del elemento activo en la navegación.
- **Fondo de página**: Color de fondo general de la interfaz.

Al guardar un cambio de color, la página se recarga para aplicar el nuevo tema en toda la interfaz. Con el botón **Restablecer a predeterminado** vuelves a la paleta original de Modyo.

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