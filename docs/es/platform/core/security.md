---
search: true
tags:
	- 2fa
---

# Seguridad

Para Modyo la seguridad es una prioridad fundamental. Por este motivo, hemos desarrollado esta página que servirá como guía integral para asegurar la instalación de Modyo.

Tanto Modyo Cloud como Enterprise Cloud, nuestras soluciones en la nube, ofrecen un excelente nivel de seguridad de manera predeterminada. Además, los administradores de la plataforma tienen la capacidad de aplicar medidas adicionales para fortalecer la protección de sus organizaciones.

Esta guía te presenta las recomendaciones más relevantes para lograr este objetivo.

## Política de Contraseñas

En esta sección puedes establecer la política de seguridad de contraseñas para los miembros del equipo.  Las opciones disponibles son:

- **Valor mínimo de longitud de contraseña**: Este valor determina la longitud mínima que debe tener una contraseña, debe tener entre 12 y 128 caracteres.
- **Requerir por lo menos una letra minúscula (a - z)**: Esta opción garantiza que la contraseña contenga al menos una letra minúscula.
- **Requerir por lo menos una letra mayúscula (A - Z)**: Esta opción garantiza que la contraseña contenga al menos una letra mayúscula.
- **Requerir por lo menos un carácter no alfanumérico (! @ # $ % ^ & * () _ + - = [] {} |)**: Esta opción exige que las contraseñas de los miembros del equipo contengan al menos uno de los caracteres especiales indicados.

Al guardar esta configuración, los usuarios deberán cumplir con estas condiciones al momento de cambiar su contraseña.

## Política de expiración de sesiones

En esta sección puedes configurar el tiempo que permanecerá activa una sesión.

**Expiración de sesión**: Al concluirse el tiempo seleccionado, Modyo cierra la sesión del usuario automáticamente.

**Período de inactividad de usuario**: Cuando un usuario está inactivo se cierra la sesión automáticamente, una vez transcurrido el tiempo seleccionado. Se considera acciones de navegación, teclado y mouse como actividades de usuario. Esta opción protege al usuario en caso de dejar su estación de trabajo desatendida.

## Política de periodo de inactividad de los usuarios

Al activar esta opción, y una vez transcurrido el tiempo seleccionad sin interacción del usuario en la plataforma, Modyo realizará automáticamente un cambio en el estado del usuario a _inactivo_.

Una vez que el usuario es marcado como inactivo, no puede iniciar sesión. El periodo de inactividad predeterminado es de 90 días y puedes modificarlo a:

- 30 días
- 90 días
- 180 días
- 360 días

Si marcas la casilla para reenviar un correo al usuario al considerarlo inactivo, el usuario recibirá una notificación por correo electrónico. Desde este correo, tendrá la capacidad de reactivar su cuenta.

:::tip Tip
Los dueños de las cuentas pueden cambiar el estado de un usuario entre inactivo y activo utilizando la casilla de verificación "Inicio de sesión desactivado por inactividad".

Puedes localizar esta opción al editar un usuario en la sección **Equipo**, en la pestaña de **Editar**. Si seleccionas la casilla, el usuario es marcado como inactivo y al desactivarla el usuario estará activo.
:::

## Control de acceso HTTP (Cross-Origin Resource Sharing CORS)

Habilita la funcionalidad de Compartir Recursos de Origen Cruzado (CORS) para permitir el acceso a los recursos de Modyo desde otras páginas web.

Por defecto, los dominios personalizados de tus sitios ya están incluidos una vez que CORS está activado. Para darle acceso a dominios externos, escríbelos separados por comas, por ejemplo `http://api.mydomain.com, http://mysubdomain.mydomain.com`. Los comodines o _wildcards_ no están permitidos en esta sección.

## Token de entrega de contenido (JWT - JSON Web Token)

Esta clave o _secret_ es usada por Modyo para firmar los JWT de los usuarios y así poder acceder al [contenido privado a través de la API](/es/platform/content/public-api-reference.html#contenido-privado).

:::warning Atención
Si generas una nueva clave, todas las solicitudes de contenido privado deberán pasar por Modyo. Esto se debe a que los JWT firmados por Modyo con la clave anterior ya no serán válidos.
:::

La clave o _secret_ tiene un tiempo determinado de duración en segundos. Puedes configurar este tiempo en el campo proporcionado; por defecto, la duración es una hora (3600 segundos). Se recomienda evitar un período de duración muy corto, ya que puede afectar el rendimiento de la plataforma.

## Autenticación de dos pasos 2FA

La autenticación en dos pasos añade una capa de seguridad a tu cuenta y reduce el riesgo de acceso no autorizado. Al activarla, cada vez que los miembros del equipo inician sesión, tendrán que ingresar su contraseña y una clave dinámica proporcionada por la aplicación Google Authenticator desde sus teléfonos.

Cada miembro del equipo puede activar la autenticación en dos pasos desde su perfil. Además, el administrador puede forzar la autenticación en dos pasos para todos los miembros del equipo.

Al habilitar la autenticación en dos pasos de forma obligatoria para los miembros del equipo, la próxima vez que un miembro inicie sesión, se le exigirá que configure su dispositivo de autenticación en dos pasos. Una vez configurado, debe iniciar sesión utilizando su contraseña y el código proporcionado por Google Authenticator.

:::warning Atención
La opción **Establecer zona horaria automáticamente** tiene que estar activa cuando utilices autenticación de dos factores en tu dispositivo móvil.
:::

### Habilita autenticación de dos factores para un usuario

Para habilitar la autenticación de dos factores para un usuario y neutralizar el riesgo de contraseñas comprometidas, sigue estos pasos:

1. En Modyo Platform, en el menú del usuario, haz click en **Perfil**.
2. Dentro de la configuración de perfil de un usuario, en el menú superior, selecciona los 3 puntos y haz click en **Configurar Autenticador**.
3. Escanea el código que aparece en la pantalla con tu dispositivo móvil para enlazar tu autenticador con Modyo Platform.
Esto agrega un campo nuevo con el nombre del dominio, tu nivel de usuario y tu nombre de usuario.
4. Ingresa los números que aparecen en tu móvil en el campo de la contraseña y haz click en **Guardar**.

Una vez que ya tengas la autenticación de dos factores habilitada, el botón dirá **Eliminar autenticador**.


### Eliminar autenticador para un usuario

En caso de extravío o robo del autenticador, no será posible entrar a la cuenta. En este caso, un administrador de Modyo Platform puede auxiliar eliminando el autenticador ligado al usuario siguiendo estos pasos:

1. En el menú lateral, expande **Configuración** y haz click en **Equipo**.
1. Haz click en el nombre del miembro.
1. En la barra superior, haz click en el botón de más opciones, representado por tres puntos, y selecciona **Eliminar autenticador**.

:::warning Atención
Si has activado la opción de forzar autenticación, la próxima vez que el usuario intente iniciar sesión, será necesario que primero inicialice el autenticador. Una vez que el autenticador esté activo, el usuario puede proceder con el proceso de inicio de sesión.
:::

## Mejores Prácticas

### Conceptos importantes
* **Limitar accesos:** Reducir las posibilidades de que un actor malicioso obtenga acceso al sistema.
* **Contención:** Configurar el sistema de manera que minimice el daño posible en caso de ser vulnerado por un actor malintencionado.
* **Preparación y conocimiento:**  Mantener copias de seguridad y procedimientos para estar preparados en el caso de posibles desastres.
* **Fuentes confiables:** Evitar implementar widgets o código de fuentes poco confiables. Asegurar que todas las dependencias cargadas en el sitio provengan de fuentes confiables.

### Vulnerabilidades Locales
* Asegúrate que los equipos de cómputo de todos los usuarios administradores estén libres de spyware, malware o virus.
* Asegúrate que los accesos siempre provengan de equipos actualizados y a través de navegadores web confiables y actualizados.

### Actualizar Modyo con Regularidad
Te recomendamos actualizar Modyo periódicamente para asegurar que tu instalación tenga las últimas correcciones de seguridad y que todos los parches de seguridad están al día. Estos parches están diseñados para aplicarse sin causar interrupciones significativas en el flujo de trabajo; por ejemplo: pasar de la versión 9.1.10 a la 9.1.12.

Además, te recomendamos realizar actualizaciones de versiones mayores al menos dos veces al año, pasando, por ejemplo, de la versión 9.1.14 a la 9.2.2. Esto no solo te mantendrá en la última versión con soporte, sino que también te proporcionará las últimas características y funcionalidades.

### Configurar una Contraseña Segura en el Panel de Administración
El Panel de Administración es la herramienta de administración más potente de Modyo. A través de él, puedes tener control sobre diversas configuraciones y acciones fundamentales en la operación de Modyo. Además, te proporciona acceso administrativo a todas las organizaciones definidas en la plataforma.

Te recomendamos establecer una contraseña segura y cambiarla regularmente, por ejemplo, después de cada actualización importante de la plataforma.

### Habilitar Transport Layer Security (TLS)
Forzar las conexiones a que sean sólo TLS en tu instalación asegura que todo el tráfico entrante y saliente esté encriptado. Además, recomendamos utilizar solo versiones modernas del protocolo, en particular las versiones 1.2 o 1.3.

### Diferenciar Subdominios
La diferenciación de subdominios es esencial, ya que existen múltiples lugares en donde Modyo admite desarrollo mediante HTML. Si no está activado, el HTML de los sitios desarrollados sobre Modyo puede convertirse en un punto de entrada para ataques que podrían afectar a otros componentes de Modyo mediante la técnica de cross-site scripting (XSS).

### Revisar los Proceso de Respaldo
Ejecutar procesos de respaldo de forma regular es muy importante en una implementación segura de Modyo.

En el caso de Cloud y Enterprise Cloud esto se realiza de forma automática. Para Enterprise On Premise, el equipo de operaciones de cada cliente es responsable de llevar a cabo esta actividad.

Los respaldos de Modyo contemplan tanto a la base de datos como a los directorios compartidos de archivos, en donde se almacena el contenido estático.

### Utilizar un Servidor Proxy de Salida
Modyo puede establecer comunicaciones con Internet, especialmente en lo que respecta a proveedores de identidad o Webhooks de integración. Para gestionar y controlar estas comunicaciones de salida, es esencial implementar un servidor proxy de salida o configurar un esquema de Network Address Translation (NAT) en el que las direcciones IP de origen no queden expuestas.

### Restringir los Puertos Públicos de Entrada
Los usuarios de Modyo deben acceder de forma exclusiva por el puerto 443, detrás de un balanceador de carga que distribuya el tráfico a las diferentes instancias de la plataforma.

El tráfico entre el balanceador de carga y las instancias de la plataforma puede utilizar los puertos 443 o 80, dependiendo de la seguridad interna de la red. Por ejemplo, en redes aisladas y protegidas como las VPC de Amazon AWS, es posible que no sea necesario encriptar el tráfico interno.

### Registros de actividad

La plataforma guarda un registro de todas las acciones realizadas por los usuarios administradores dentro de ella. Puedes revisar estos registros en la sección "Registros de actividad".

Te recomendamos revisar estos registros de forma periódica para verificar el correcto comportamiento de los usuarios dentro del sistema. Los registros de actividad también están disponibles a través del API administrativo de Modyo.

### Revisar Permisos de Administración

Los administradores de una organización o sitio tienen un alto nivel de acceso a contenido y configuraciones que deben ser privadas. Impersonar a uno de estos administradores puede representar un gran riesgo de seguridad. Por esta razón, recomendamos mantener un número pequeño y muy controlado de usuarios con rol de administración general y asegurar que estos usuarios mantengan activos niveles de protección adicionales como el segundo factor de autenticación.

Además, los administradores pueden generar tokens para acceder a las APIs de administración de la plataforma. Estos tokens frecuentemente se utilizan para automatizar tareas administrativas comunes, por lo que es importante asegurar que solo se usen dentro de sistemas seguros que garanticen su protección.

## Reportar una vulnerabilidad

Si crees que has identificado una vulnerabilidad de seguridad en Modyo, por favor, ayúdanos reportando el problema.

Modyo ofrece canales seguros y confidenciales para informar incidentes de seguridad a través de nuestro [centro de soporte](https://support.modyo.com/hc/es) o enviando un correo electrónico a <a href="mailto:security@modyo.com">security@modyo.com</a>.

Tu colaboración es fundamental para mantener la integridad y la seguridad de la plataforma.
