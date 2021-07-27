---
search: true
---

# Seguridad de la plataforma

## Registros de actividad

<img src="/assets/img/platform/activity-logs.jpg" style="margin-top: 40px; border: 1px solid #EEE;" />

La plataforma te permite ver todos los movimientos que se han hecho durante todo el tiempo que la tengas activa.

En esta sección, podrás filtrar por fecha, tipo de movimiento o usuario que te permitirán hacer un seguimiento correcto.

Además, tendrás la posibilidad de ver el detalle de lo que se hizo y desde qué sección se hizo.

Esto te puede servir en el caso de tener muchos usuarios internos de la plataforma o para detectar errores y cambios en la cadena de producción y desarrollo.



## Seguridad

En esta sección podemos configurar distintos aspectos para mejorar la seguridad de nuestra cuenta en Modyo:

* Política de contraseña
* Compartir recursos en distintos dominios ([CORS - Cross Origin Resource Sharing](https://www.w3.org/TR/cors/))
* Token de entrega de contenido ([JWT](https://tools.ietf.org/html/rfc7519))
* Autenticación en dos pasos

<img src="/assets/img/platform/cors.png" style="margin-top: 40px; border: 1px solid #EEE;" />

### Política de contraseña

Esta sección te permitirá configurar la política de seguridad de contraseñas para los miembros del equipo. Dentro de las opciones puedes elegir las siguientes:

* **Forzar largo mínimo**: Por defecto el largo mínimo requerido por Modyo es 8 caracteres, pero si lo requieres, puedes forzar a que el largo mínimo de las contraseñas de los miembros del equipo sea de un tamaño mayor.
* **Requerir por lo menos una letra minúscula del alfabeto Latino (a - z)**: Con esta opción aseguras que por lo menos exista una letra minúscula dentro de la contraseña de los miembros del equipo.
* **Requerir por lo menos una letra mayúscula del alfabeto Latino (A - Z)**: Con esta opción aseguras que por lo menos exista una letra mayúscula dentro de la contraseña de los miembros del equipo.
* **Requerir por lo menos un carácter no alfanumérico (! @ # $ % ^ & * () _ + - = [] {} |)**: Con esta opción obligas a que la contraseña de los miembros del equipo contenga por lo menos uno de los caracteres especiales indicados en la lista.

Al guardar esta configuración, los usuarios deberán cumplir con estas condiciones al momento de cambiar su contraseña.

### Compartir recursos en distintos dominios

En esta sección podremos activar el Cross Origin Resource Sharing (CORS), para poder acceder a los recursos de Modyo desde otras web que no necesariamente sean seguras.

Al habilitarlo, deberás especificar los dominios (separados por coma y sin barra al final) que quieres que se habiliten para que estén compartiendo recursos con tu sitio. Por ejemplo:
`http://api.mydomain.com, http://mysubdomain.mydomain.com, http://mydomain.com`

### Token de entrega de contenido (JWT)

Luego de configurar CORS, la plataforma te dará una clave o _secret_ para poder decodificar los JWT de los usuarios y así poder acceder al [contenido privado a través de la API](/es/platform/content/public-api-reference.html#contenido-privado-2).

:::warning Atención
La clave o _secret_ es usado por Modyo para firmar los JWT de los usuarios. Generar una nueva clave forzará a que todas las request de contenido privado pasen por Modyo, dado que los JWT firmados por Modyo con la clave antigua ya no serán válidos.
:::

La clave o _secret_ tiene un tiempo determinado de duración en segundos que se puede configurar en la caja debajo. Por defecto, la duración es 1 hora (3600 segundos). No es recomendable usar una duración muy pequeña, dado que podría afectar el _performance_ de la plataforma.

### Autenticación en dos pasos

La autenticación en dos pasos añade una capa de seguridad extra a tu cuenta. Cada vez que los miembros del equipo inicien sesión, tendrán que ingresar tanto su contraseña como una clave dinámica provista por la aplicación _Google Authenticator_ desde sus teléfonos.

Puedes descargar la aplicación para tu teléfono en los siguientes links:

* Android: [Google Authenticator en Google Play](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2)
* iOS: [Google Authenticator en Apple App Store](https://apps.apple.com/us/app/google-authenticator/id388497605)

Modyo es compatible con tokens generados por la aplicación Google Authenticator o similares, basadas en HMAC-Based One-time Password (HOTP) RFC 4226 o Time-based One-time Password (TOTP) RFC 6238.

Cada miembro del equipo podrá activar la autenticación en dos pasos desde su perfil, pero además, como administrador, puedes forzar la autenticación en dos pasos para todos los miembros del equipo. 

Al forzar la autenticación en dos pasos para los miembros del equipo, la siguiente vez que un miembro del equipo inicie sesión, se le va a exigir que configure su dispositivo de autenticación en dos pasos. Una vez configurado, deberá iniciar sesión usando su contraseña y el código provisto por _Google Authenticator_.

