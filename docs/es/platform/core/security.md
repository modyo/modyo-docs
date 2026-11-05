---
search: true
tags:
	- 2fa
---

# Seguridad

Para Modyo, la seguridad es una prioridad fundamental. Por este motivo, hemos desarrollado esta página que servirá como guía integral para asegurar la instalación de Modyo.

Tanto Modyo Cloud como Enterprise Cloud, nuestras soluciones en la nube, ofrecen un excelente nivel de seguridad de manera predeterminada. Además, los administradores de la plataforma tienen la capacidad de aplicar medidas adicionales para fortalecer la protección de sus organizaciones.

Esta guía te presenta las recomendaciones más relevantes para lograr este objetivo.

## Política de Contraseñas

En esta sección puedes establecer la política de seguridad de contraseñas para los miembros del equipo.  Las opciones disponibles son:

- **Valor mínimo de longitud de contraseña**: Este valor determina la longitud mínima que debe tener una contraseña, debe tener entre 12 y 128 caracteres.
- **Requerir por lo menos una letra minúscula del alfabeto Latino (a - z)**: Esta opción garantiza que la contraseña contenga al menos una letra minúscula.
- **Requerir por lo menos una letra mayúscula del alfabeto Latino (A - Z)**: Esta opción garantiza que la contraseña contenga al menos una letra mayúscula.
- **Se requiere al menos uno de estos caracteres especiales**: Esta opción exige que las contraseñas de los miembros del equipo contengan al menos uno de los símbolos que la propia casilla enumera entre paréntesis. El conjunto predeterminado es `! @ # $ % ^ & * ( ) _ + º - = [ ] { } | " . ' ¿ / ¡ : ;`, y el listado que ves en pantalla es siempre el que valida tu instalación.

Al guardar esta configuración, los usuarios deberán cumplir con estas condiciones al momento de cambiar su contraseña.

:::warning Atención
Al activar **Se requiere al menos uno de estos caracteres especiales**, la contraseña también queda limitada a ese alfabeto: solo se aceptan letras de la `a` a la `z`, en mayúscula o minúscula, dígitos y los símbolos del listado. Cualquier otro carácter hace que la contraseña se rechace, aunque sea larga y cumpla el resto de las condiciones. Esto incluye las vocales acentuadas, la `ñ` y símbolos como `~`, `<` o `>`.
:::

## Bloqueo por Intentos Fallidos de Inicio de Sesión

Además de la política de contraseñas, Modyo protege el inicio de sesión frente a ataques de fuerza bruta. Tras 10 intentos fallidos consecutivos, el usuario queda bloqueado temporalmente durante 15 minutos y el mensaje de error le indica cuánto falta para el desbloqueo:

_Se superó el límite de inicios de sesión fallidos. Tu cuenta ha sido deshabilitada temporalmente. Por favor, espere 14 minutos para que tu cuenta se desbloquee._

Esta protección aplica tanto a los miembros del equipo que entran al panel de administración como a los usuarios finales que inician sesión en un reino. El bloqueo se libera solo por tiempo: no hay una acción de desbloqueo manual en el panel, hay que esperar a que se cumpla el plazo.

:::tip Tip
Este bloqueo temporal es distinto del estado _inactivo_ de la [Política de Periodo de Inactividad de los Usuarios](#politica-de-periodo-de-inactividad-de-los-usuarios). Si un miembro del equipo reporta que no puede entrar, revisa cuál de los dos casos aplica: el bloqueo por intentos fallidos se levanta por sí solo a los 15 minutos, mientras que el estado inactivo se mantiene hasta que el usuario reactiva su cuenta o un dueño de la cuenta lo vuelve a activar.
:::

## Vigencia de los Enlaces y Códigos del Panel

Además de la sesión, varios enlaces y códigos que Modyo envía por correo o muestra en pantalla tienen su propio plazo de vencimiento. Estos plazos son fijos: no se configuran desde el panel.

| Enlace o código | Cuánto dura |
| --- | --- |
| Enlace de recuperación de contraseña | 3 días desde que se envía el correo. |
| Enlace de activación de la cuenta, en el correo de bienvenida | 1 semana desde que se envía el correo. |
| Enlace de reactivación de una cuenta marcada como inactiva | 10 minutos desde que se envía el correo. |
| Enlace de configuración del autenticador de dos pasos | 5 minutos desde que se abre la pantalla. |
| Enlace de confirmación de una dirección de correo nueva | 5 minutos desde que se envía el correo. |

Cumplido el plazo, el enlace deja de servir: la plataforma devuelve a la persona a la pantalla de inicio de sesión con un mensaje de error. La solución siempre es pedir uno nuevo, nunca reenviar el correo viejo.

:::warning Atención
Todos estos enlaces comparten el mismo código de un solo uso. Cada vez que se genera uno nuevo, por ejemplo al pedir por segunda vez la recuperación de la contraseña, el anterior queda invalidado de inmediato, aunque todavía estuviera dentro de su plazo. Si un miembro del equipo pide varios correos seguidos, solo funciona el enlace del último que recibió.
:::

## Límites de Solicitudes y Bloqueos Temporales

Más allá de la política de contraseñas y del bloqueo de inicio de sesión, Modyo limita cada cuánto un miembro del equipo puede pedir un correo de recuperación o cambiar los datos sensibles de su perfil. Estos límites son fijos y tampoco se configuran desde el panel.

### Solicitudes de recuperación de contraseña

La pantalla de recuperación responde siempre con el mismo mensaje, exista o no el nombre de usuario y se envíe o se descarte el correo:

_Si has introducido un nombre de usuario válido, recibirás una contraseña temporal en tu correo electrónico._

Por dentro se aplican dos límites:

- Dos solicitudes seguidas para el mismo miembro del equipo, con menos de 10 segundos entre una y otra, hacen que la segunda se descarte y no se envíe ningún correo.
- Cuando se acumulan más de tres solicitudes para el mismo miembro del equipo, las siguientes se descartan durante 24 horas, contadas desde la última solicitud aceptada.

En ambos casos la persona ve el mensaje de éxito y el correo nunca llega. Es la causa más frecuente del reporte "pedí la recuperación y no me llegó nada".

### Cambios de contraseña, correo y nombre de usuario desde el perfil

La pantalla de **Perfil** pide la contraseña actual antes de cambiar la contraseña, el correo electrónico o el nombre de usuario. Ahí se aplican dos límites más:

- **Un cambio de contraseña cada 24 horas**: una vez que un miembro del equipo cambia su contraseña, no puede volver a cambiarla desde su perfil durante las 24 horas siguientes. Si lo intenta, la plataforma lo devuelve al perfil con el mensaje _El número de solicitudes de cambio de contraseña ha superado el máximo permitido_. El plazo empieza a contar también cuando la contraseña se definió desde un enlace de recuperación.
- **Tres intentos fallidos y bloqueo de 15 minutos**: cuando se acumulan tres intentos fallidos de cambiar la contraseña, el correo o el nombre de usuario, el siguiente se rechaza con el mensaje _Has alcanzado el límite de intentos para modificar datos sensibles en tu perfil. Tu sesión ha sido cerrada por seguridad_ y la plataforma cierra la sesión. Al cambiar el correo o el nombre de usuario, además, revoca todas las sesiones activas del miembro del equipo, así que queda desconectado en todos sus dispositivos.

El bloqueo dura 15 minutos y se levanta solo por tiempo: no hay una acción en el panel para liberarlo antes. Cumplido el plazo, el miembro del equipo vuelve a disponer de sus intentos.

:::tip Tip
Este bloqueo es distinto del [Bloqueo por Intentos Fallidos de Inicio de Sesión](#bloqueo-por-intentos-fallidos-de-inicio-de-sesion), que se dispara con 10 intentos en la pantalla de acceso. El del perfil se dispara con 3 intentos, ya con la sesión iniciada, y su efecto visible es que a la persona la sacan de la plataforma justo después de escribir mal su contraseña actual. Si alguien reporta que "el panel me echó mientras cambiaba mi correo", este es el motivo.
:::

## Política de Expiración de Sesiones

En esta sección puedes configurar el tiempo que permanecerá activa una sesión. Los dos campos son listas de opciones fijas: eliges uno de los valores disponibles, no escribes un tiempo libre.

**Expiración de sesión**: Al concluirse el tiempo seleccionado, Modyo cierra la sesión del usuario automáticamente. Las opciones son 15 minutos, 30 minutos, 1 hora, 2 horas, 12 horas, 1 día, 1 semana, 2 semanas, 1 mes y 3 meses. Si la duración definida en tu instalación no coincide con ninguna de ellas, aparece además como una opción más de la lista.

**Período de inactividad del usuario**: Cuando un usuario está inactivo se cierra la sesión automáticamente, una vez transcurrido el tiempo seleccionado. Se consideran las acciones de navegación, teclado y mouse como actividades de usuario. Esta opción protege al usuario en caso de dejar su estación de trabajo desatendida. Para poder elegir un valor, primero marca la casilla **Activar el periodo de inactividad del usuario**; las opciones son 5 minutos, 15 minutos, 30 minutos, 1 hora y 6 horas.

Este cierre de sesión se mide en minutos y solo termina la sesión abierta. No lo confundas con la [Política de Periodo de Inactividad de los Usuarios](#politica-de-periodo-de-inactividad-de-los-usuarios), que se mide en días y marca al usuario como inactivo para que no pueda volver a iniciar sesión.

## Aviso de Inicio de Sesión desde un Dispositivo Nuevo

Cada vez que un miembro del equipo entra al panel desde un navegador o un dispositivo que no había usado antes, Modyo le envía automáticamente un correo con el asunto _Nuevo inicio de sesión en tu cuenta de Modyo_. El correo indica la cuenta y la dirección de correo con la que se entró, el navegador y el sistema operativo, la fecha del inicio de sesión y la dirección IP, e incluye un botón para cambiar la contraseña de inmediato por si el acceso no fue suyo.

Este aviso forma parte de la plataforma: no hay una opción para activarlo, desactivarlo ni redactarlo de otra manera. Tampoco se envía en el primer inicio de sesión de un miembro del equipo recién creado, porque en ese momento todavía no hay accesos anteriores con los que comparar.

Modyo decide que un dispositivo es nuevo comparando la huella del acceso actual con la de los accesos anteriores de ese mismo miembro del equipo, la misma información que ves en la pestaña **Dispositivos** de su ficha en [Equipo](/es/platform/core/roles.html#editar-usuario).

:::tip Tip
Recibir este correo no significa por sí solo que alguien más haya entrado a la cuenta. La huella cambia al usar otro navegador, al actualizarlo, al borrar las cookies o al entrar desde otro equipo, así que el mismo miembro del equipo puede recibir el aviso por accesos totalmente legítimos. Antes de escalar, contrasta el dispositivo y la dirección IP del correo con la pestaña **Dispositivos** y con los [Logs de actividad](/es/platform/core/activity-logs.html).
:::

## Política de Periodo de Inactividad de los Usuarios

Al activar esta opción, y una vez transcurrido el tiempo seleccionad sin interacción del usuario en la plataforma, Modyo realizará automáticamente un cambio en el estado del usuario a _inactivo_.

Una vez que el usuario es marcado como inactivo, no puede iniciar sesión. El periodo de inactividad predeterminado es de 90 días y puedes modificarlo a:

- 30 días
- 90 días
- 180 días
- 360 días

Si marcas la casilla para reenviar un correo al usuario al considerarlo inactivo, el usuario recibirá una notificación por correo electrónico. Desde este correo, tendrá la capacidad de reactivar su cuenta.

:::tip Tip
Los **dueños de las cuentas** pueden cambiar el estado de un usuario entre inactivo y activo utilizando la casilla de verificación "Inicio de sesión desactivado por inactividad".

Puedes localizar esta opción al editar un usuario en la sección **Equipo**, en la pestaña de **Editar**. Si seleccionas la casilla, el usuario es marcado como inactivo y al desactivarla el usuario estará activo.
:::

## Control de Acceso HTTP (Cross-Origin Resource Sharing CORS)

La sección **Cross Origin Resource Sharing** define desde qué dominios se puede acceder a los recursos de Modyo. Tiene tres controles:

- **Habilitar CORS**: activa la funcionalidad. Al marcarla, los dominios personalizados de tus aplicaciones se incluyen automáticamente, sin que tengas que listarlos.
- **Permitir todos los orígenes**: agrega el comodín `*` a la lista de orígenes permitidos, de modo que cualquier dominio puede consumir la información pública en formato JSON. Al marcarla, Modyo pide confirmación con el aviso "Si está activado, todos los dominios tendrán acceso al JSON público ¿Te gustaría continuar?".
- **Orígenes alternativos**: campo de texto para dar acceso a dominios externos. Escríbelos separados por comas, por ejemplo `http://api.mydomain.com, http://mysubdomain.mydomain.com`. En este campo no se aceptan comodines: si incluyes un `*`, la configuración no se guarda. De cada entrada, Modyo conserva solo el esquema, el dominio y el puerto, y descarta las rutas.

Cuando termines, haz clic en **Guardar**.

:::warning Atención
**Permitir todos los orígenes** se activa desde esta misma pantalla, sin necesidad de abrir un ticket de soporte ni de hacer ningún otro cambio en tu instalación. Como deja la información pública de tu cuenta al alcance de cualquier dominio, resérvala para ambientes de desarrollo o pruebas y, en producción, enumera los dominios en **Orígenes alternativos**.
:::

:::tip Tip
La inclusión automática cubre el dominio principal de cada aplicación. Si publicas una aplicación en un dominio alternativo, o si el origen que hace las llamadas usa otro esquema u otro puerto, agrégalo en **Orígenes alternativos**, porque la comparación del origen es exacta.
:::

## Token de Entrega de Contenido (JWT - JSON Web Token)

Esta clave o _secret_ es usada por Modyo para firmar los JWT de los usuarios y así poder acceder al [contenido privado a través de la API](/es/platform/content/public-api-reference#contenido-privado).

:::warning Atención
Si generas una nueva clave, todas las solicitudes de contenido privado deberán pasar por Modyo. Esto se debe a que los JWT firmados por Modyo con la clave anterior ya no serán válidos.
:::

La clave o _secret_ tiene un tiempo determinado de duración en segundos. Puedes configurar este tiempo en el campo proporcionado; por defecto, la duración es una hora (3600 segundos). Se recomienda evitar un período de duración muy corto, ya que puede afectar el rendimiento de la plataforma.

## Autenticación de Dos Pasos 2FA

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

## Imágenes SVG

La sección **Habilitar el uso de imágenes SVG** define si tu cuenta acepta archivos SVG. Viene desactivada, y solo pueden cambiarla los miembros del equipo con el permiso **Administrar Seguridad**.

Para permitir la carga de archivos SVG, sigue estos pasos:

1. En el menú lateral, expande **Configuración** y haz click en **Seguridad**.
2. Baja hasta la sección **Habilitar el uso de imágenes SVG**.
3. Marca la casilla **Permitir el uso de SVG**.
4. Haz click en **Guardar**.

Mientras la casilla está desmarcada, cualquier intento de subir o de actualizar un archivo SVG en [Media](/es/platform/content/asset-manager.html) se rechaza con el mensaje _No se pueden cargar ni actualizar archivos SVG debido a las políticas de seguridad configuradas_. El rechazo aplica tanto en el panel como en la API de administración, y alcanza también a los SVG que ya existan en la cuenta: mientras la casilla siga desmarcada tampoco puedes guardar cambios en su título, texto alternativo, descripción o etiquetas.

:::warning Atención
El propio panel advierte que "El uso de imágenes SVG te puede dejar vulnerable a los ataques XSS y puede resultar inseguro". Un SVG es un documento XML que puede llevar scripts y referencias externas dentro, y el navegador lo interpreta con los mismos privilegios que la página que lo muestra. Actívalo solo si tus equipos necesitan este formato y controlas el origen de los archivos que suben.
:::

## Mejores Prácticas

### Conceptos importantes
- **Limitar accesos**: Reducir las posibilidades de que un actor malicioso obtenga acceso al sistema.
- **Contención**: Configurar el sistema de manera que minimice el daño posible en caso de ser vulnerado por un actor malintencionado.
- **Preparación y conocimiento**:  Mantener copias de seguridad y procedimientos para estar preparados en el caso de posibles desastres.
- **Fuentes confiables**: Evitar implementar widgets o código de fuentes poco confiables. Asegurar que todas las dependencias cargadas en el sitio provengan de fuentes confiables.

### Vulnerabilidades locales
- Asegúrate que los equipos de cómputo de todos los usuarios administradores estén libres de spyware, malware o virus.
- Asegúrate que los accesos siempre provengan de equipos actualizados y a través de navegadores web confiables y actualizados.

### Actualizar Modyo con regularidad
Te recomendamos actualizar Modyo periódicamente para asegurar que tu instalación tenga las últimas correcciones de seguridad y que todos los parches de seguridad están al día. Estos parches están diseñados para aplicarse sin causar interrupciones significativas en el flujo de trabajo.

Además, te recomendamos realizar actualizaciones de versiones mayores al menos dos veces al año. Esto no solo te mantendrá en la última versión con soporte, sino que también te proporcionará las últimas características y funcionalidades.

### Configurar una contraseña segura en el panel de administración
El Panel de Administración es la herramienta de administración más potente de Modyo. A través de él, puedes tener control sobre diversas configuraciones y acciones fundamentales en la operación de Modyo. Además, te proporciona acceso administrativo a todas las organizaciones definidas en la plataforma.

Te recomendamos establecer una contraseña segura y cambiarla regularmente, por ejemplo, después de cada actualización importante de la plataforma.

### Habilitar Transport Layer Security (TLS)
Forzar las conexiones a que sean sólo TLS en tu instalación asegura que todo el tráfico entrante y saliente esté encriptado. Además, recomendamos utilizar solo versiones modernas del protocolo, en particular las versiones 1.2 o 1.3.

### Diferenciar subdominios
La diferenciación de subdominios es esencial, ya que existen múltiples lugares en donde Modyo admite desarrollo mediante HTML. Si no está activado, el HTML de los sitios desarrollados sobre Modyo puede convertirse en un punto de entrada para ataques que podrían afectar a otros componentes de Modyo mediante la técnica de cross-site scripting (XSS).

### Revisar los procesos de respaldo
Ejecutar procesos de respaldo de forma regular es muy importante en una implementación segura de Modyo.

En el caso de Cloud y Enterprise Cloud esto se realiza de forma automática. Para Enterprise On Premise, el equipo de operaciones de cada cliente es responsable de llevar a cabo esta actividad.

Los respaldos de Modyo contemplan tanto a la base de datos como a los directorios compartidos de archivos, en donde se almacena el contenido estático.

### Utilizar un servidor proxy de salida
Modyo puede establecer comunicaciones con Internet, especialmente en lo que respecta a proveedores de identidad o Webhooks de integración. Para gestionar y controlar estas comunicaciones de salida, es esencial implementar un servidor proxy de salida o configurar un esquema de Network Address Translation (NAT) en el que las direcciones IP de origen no queden expuestas.

### Restringir los puertos públicos de entrada
Los usuarios de Modyo deben acceder de forma exclusiva por el puerto 443, detrás de un balanceador de carga que distribuya el tráfico a las diferentes instancias de la plataforma.

El tráfico entre el balanceador de carga y las instancias de la plataforma puede utilizar los puertos 443 o 80, dependiendo de la seguridad interna de la red. Por ejemplo, en redes aisladas y protegidas como las VPC de Amazon AWS, es posible que no sea necesario encriptar el tráfico interno.

### Registros de actividad

La plataforma guarda un registro de todas las acciones realizadas por los usuarios administradores dentro de ella y también de las que ejecuta por su cuenta, sin una persona detrás: estas últimas quedan registradas con **Sistema** como autor. Puedes revisar estos registros en la sección [Logs de actividad](/es/platform/core/activity-logs.html).

Te recomendamos revisar estos registros de forma periódica para verificar el correcto comportamiento de los usuarios dentro del sistema. Los registros de actividad también están disponibles a través del API administrativo de Modyo.

### Revisar permisos de administración

Los administradores de una organización o sitio tienen un alto nivel de acceso a contenido y configuraciones que deben ser privadas. Impersonar a uno de estos administradores puede representar un gran riesgo de seguridad. Por esta razón, recomendamos mantener un número pequeño y muy controlado de usuarios con rol de administración general y asegurar que estos usuarios mantengan activos niveles de protección adicionales como el segundo factor de autenticación.

Además, los administradores pueden generar tokens para acceder a las APIs de administración de la plataforma. Estos tokens frecuentemente se utilizan para automatizar tareas administrativas comunes, por lo que es importante asegurar que solo se usen dentro de sistemas seguros que garanticen su protección.

## Reportar una Vulnerabilidad

Si crees que has identificado una vulnerabilidad de seguridad en Modyo, por favor, ayúdanos reportando el problema.

Modyo ofrece canales seguros y confidenciales para informar incidentes de seguridad a través de nuestro [centro de soporte](https://support.modyo.com/hc/es) o enviando un correo electrónico a <a href="mailto:security@modyo.com">security@modyo.com</a>.

Tu colaboración es fundamental para mantener la integridad y la seguridad de la plataforma.
