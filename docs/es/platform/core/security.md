---
search: true
tags:
	- 2fa
---

# Seguridad

En Modyo, todo lo referente a seguridad es muy importante para nosotros. Es por ello que creamos esta página que servirá de guía en todo lo necesario para asegurar una instalación de Modyo. Mientras que nuestras soluciones en la nube, Modyo Cloud y Enterprise Cloud, proveen un excelente nivel de seguridad por defecto, los administradores de la plataforma pueden tomar medidas adicionales de protección para incrementar la seguridad de sus organizaciones. En esta guía se presentan las recomendaciones más importantes para conseguirlo.

## Política de Contraseñas

Estas son las opciones disponibles para establecer una política de contraseña para Modyo Platform:

- Valor mínimo de longitud de contraseña: Este número dicta cual es el mínimo número de caracteres que una contraseña debe tener. Una contraseña debe tener entre 8 a 128 caracteres.
- Requerir por lo menos una letra minúscula (a - z)
- Requerir por lo menos una letra mayúscula (A - Z)
- Requerir por lo menos un caracter no alfanumérico (! @ # $ % ^ & * () _ + - = [] {} |)

## Política de expiración de sesiones

Selecciona un valor en esta opción para que la plataforma automáticamente expire una sesión al estar inactiva. Podrás seleccionar entre estos valores:

- 5 minutos
- 10 minutos
- 15 minutos
- 20 minutos
- 25 minutos
- 30 minutos
- 45 minutos
- 1 hora
- 1 hora 30 minutos
- 2 horas
- 4 horas
- 8 horas
- 16 horas
- 1 días
- 2 días
- 3 días
- 4 días
- 5 días
- 6 días
- 1 semanas
- 2 semanas

## Control de acceso HTTP (Cross-Origin Resource Sharing CORS)

Activa Cross-Origin Resource Sharing (CORS) para poder acceder a los recursos de Modyo desde otras páginas web.

Por defecto, los dominios personalizados de tus sitios se incluyen una vez que CORS está habilitado. Para darle acceso a dominios externos, escríbelos separados por comas, por ejemplo `http://api.mydomain.com, http://mysubdomain.mydomain.com`. Los comodines o wildcards no están permitidos en esta sección.

## Token de entrega de contenido (JWT - JSON Web Token)

Esta clave o _secret_ es usado por Modyo para firmar los JWT de los usuarios y así poder acceder al [contenido privado a través de la API](/es/platform/content/public-api-reference.html#contenido-privado-2).

:::warning Atención
Generar una nueva clave forzará a que todas las request de contenido privado pasen por Modyo, dado que los JWT firmados por Modyo con la clave antigua ya no serán válidos.
:::

La clave o _secret_ tiene un tiempo determinado de duración en segundos que se puede configurar en la caja debajo. Por defecto, la duración es 1 hora (3600 segundos). No es recomendable usar una duración muy pequeña, dado que podría afectar el rendimiento de la plataforma.

## Autenticación de dos pasos 2FA

La autenticación en dos pasos añade una capa de seguridad extra a tu cuenta. Cada vez que los miembros del equipo inicien sesión, tendrán que ingresar tanto su contraseña como una clave dinámica provista por la aplicación Google Authenticator desde sus teléfonos.

Cada miembro del equipo podrá activar la autenticación en dos pasos desde su perfil, pero además, como administrador, puedes forzar la autenticación en dos pasos para todos los miembros del equipo. 

Al forzar la autenticación en dos pasos para los miembros del equipo, la siguiente vez que un miembro del equipo inicie sesión, se le va a exigir que configure su dispositivo de autenticación en dos pasos. Una vez configurado, deberá iniciar sesión usando su contraseña y el código provisto por _Google Authenticator_.

:::warning Atención
En tu dispositivo móvil, la opción **Establecer zona horaria automáticamente** debe permanecer activada al usar autenticación de dos factores.
:::

### Habilita autenticación de dos factores para un usuario 

Neutraliza el riesgo de contraseñas comprometidas usando autenticación de dos factores.

1. En Modyo Platform, en el menú del usuario, haz click en **Perfil**.
2. Dentro de la configuración de perfil de un usuario, en el menú superior, selecciona los 3 puntos y haz click en **Configurar Autenticador**.
3. En la pantalla que aparece, escanea el código usando tu dispositivo móvil para ligar tu autenticador con Modyo Platform.
- Se agregará un campo nuevo con el nombre del dominio, tu nivel de usuario, y tu nombre de usuario. 
4. Usa la combinación de números que aparece en tu móvil en el campo de la contraseña y haz click en **Guardar**.

> En caso de ya contar con autenticación de dos factores, el botón dirá **Eliminar autenticador**.


### Eliminar autenticador para un usuario

En caso de extravío o robo del autenticador, no será posible entrar a la cuenta. En este caso, un administrador de Modyo Platform puede auxiliar eliminando el autenticador ligado al usuario siguiendo estos pasos:

1. En el menú lateral, expande **Configuración** y haz click en **Equipo**.
1. Haga click en el nombre del miembro.
1. En la barra superior, haga click en el botón de más opciones **...** y selecciona **Eliminar autenticador**.

:::warning Atención
Si la opción de forzar autenticación está activada, la próxima vez que el usuario intente iniciar sesión tendrá que inicializar el autenticador primero. Al tener un autenticador activo, el usuario debe volver a iniciar sesión.
:::

## Mejores Prácticas

### Conceptos importantes
* **Limitar accesos:** Reducir las posibilidades de que un actor malicioso obtenga acceso al sistema.

* **Contención:** El sistema debe estar configurado de tal forma que minimice la cantidad de daño que un mal actor pueda ocasionar en caso de que sea vulnerado.

* **Preparación y conocimiento:** Mantener copias de seguridad y procedimientos para estar preparados en el caso de que una catástrofe ocurra.

* **Fuentes confiables:** Evitar implementar Widgets o código de fuentes poco confiables. Asegurar que todas las dependencias que se cargan en un sitio provengan de una fuente confiable.

### Vulnerabilidades Locales
Asegurar que el equipamiento computacional de todos los usuarios administradores de la plataforma se encuentre libre de spyware, malware, o infecciones de virus.

Asegurar que los accesos provengan siempre desde un equipo actualizado mediante navegadores de Internet confiables y actualizados.

### Actualizar Modyo con Regularidad
Recomendamos actualizar periódicamente Modyo para asegurar siempre estar en el último parche disponible. Esto asegurará que tu instalación posee todos los parches de seguridad al día. Los parches de seguridad se realizan de tal forma que pueden ser aplicados sin afectar mayormente a los equipos de trabajo (ejemplo: pasar de la versión 9.1.10 a la 9.1.12).

Recomendamos realizar _upgrades_ de _releases_ mayores al menos dos veces al año (ejemplo: pasar de la versión 9.1.14 a la 9.2.2). Haciendo esto podrás garantizar que no sólo estás en la última versión con soporte, sino también que posees las últimas funcionalidades.

### Configurar una Contraseña Segura en el Panel de Administración
El Panel de Administración es la más poderosa herramienta de administración de Modyo. En él es posible tomar control de muchas de las configuraciones y acciones más relevantes en la operación de Modyo, además de brindar una puerta de acceso administrativa a todas las organizaciones definidas dentro de la plataforma. Recomendamos establecer una contraseña segura y rotarla con regularidad (ejemplo: después de cada actualización importante de la plataforma).

### Habilitar Transport Layer Security (TLS)
Forzar las conexiones a que sean sólo TLS en tu instalación asegura que todo el tráfico entrante y saliente esté encriptado. Además, recomendamos utilizar sólo versiones modernas del protocolo, en particular las versiones 1.2 o 1.3.

### Diferenciar Subdominios
La diferenciación de subdominios es muy importante, ya que existen múltiples lugares en donde Modyo admite desarrollo mediante HTML. Si esto no se encuentra activo, el HTML de los sitios desarrollados sobre Modyo se puede volver un vector de ataque que podría impactar a otros componentes de Modyo vía cross-site _scripting_.

### Revisar los Proceso de Respaldo
Ejecutar procesos de respaldo de forma regular es muy importante en una implementación segura de Modyo. En el caso de Cloud y Enterprise Cloud esto se realiza de forma automática. En el caso de Enterprise On Premise es el equipo de operación de cada cliente responsable de esta actividad.

Los respaldos de Modyo contemplan tanto a la base de datos como a los directorios compartidos de archivos, en donde se almacena el contenido estático.

### Utilizar un Servidor Proxy de Salida
Modyo puede efectuar comunicaciones hacia Internet, en lo que refiere a las funcionalidades de proveedores de identidad o Webhooks de integración. Para poder controlar la comunicación de salida se debe establecer un proxy de salida o esquema de NAT de red en donde las IPs de origen de la comunicación no queden expuestas.

### Restringir los Puertos Públicos de Entrada
Los usuarios de Modyo deberán acceder de forma exclusiva por el puerto 443, detrás de un balanceador de carga que reparta el tráfico a las diferentes instancias de la plataforma. Entre el balanceador de carga y las instancias de la plataforma el tráfico podrá ir por el puerto 443 o 80 dependiendo de la seguridad interna de la red (ejemplo: redes aisladas y protegidas como el caso de las VPC de Amazon AWS podrían no requerir de encriptación interna).

### Registros de actividad

La plataforma guarda un registro de todas las acciones realizadas por los usuarios administradores dentro de ella, los cuales se pueden revisar dentro de la sección "Registros de actividad". Recomendamos revisar estos registros de forma periódica para verificar el correcto comportamiento de los usuarios dentro del sistema. Estos registros de actividad están disponibles también por medio del API administrativa de Modyo.

### Revisar Permisos de Administración

Los administradores de una organización o sitio poseen un alto nivel de acceso a contenido y configuraciones que deben ser privadas. Impersonar a uno de estos administradores puede representar un gran riesgo de seguridad. Es por ello que recomendamos mantener un número pequeño y muy controlado de usuarios con rol de administración general y asegurar que estos usuarios mantengan activos niveles de protección adicionales como el segundo factor de autenticación.

Además los administradores pueden crear tokens para el acceso a las APIs de administración de la plataforma. Estos tokens en muchas ocasiones son usados para automatizar tareas comunes de administración, por lo que es importante asegurar que sólo se usen dentro de sistemas seguros que garanticen su protección.

### Habilitar el Segundo Factor de Autenticación

Considera habilitar el segundo factor de autenticación siempre que tu servidor de identidad lo permita. En el caso que uses el sistema de credenciales de Modyo, te recomendamos activar esta protección. Recomendamos encarecidamente habilitar esta funcionalidad para una mejor postura de seguridad.

### Política de contraseña

Esta sección te permitirá configurar la política de seguridad de contraseñas para los miembros del equipo. Dentro de las opciones puedes elegir las siguientes:

* **Forzar largo mínimo**: Por defecto el largo mínimo requerido por Modyo es 8 caracteres, pero si lo requieres, puedes forzar a que el largo mínimo de las contraseñas de los miembros del equipo sea de un tamaño mayor.
* **Requerir por lo menos una letra minúscula (a - z)**: Con esta opción aseguras que por lo menos exista una letra minúscula dentro de la contraseña de los miembros del equipo.
* **Requerir por lo menos una letra mayúscula (A - Z)**: Con esta opción aseguras que por lo menos exista una letra mayúscula dentro de la contraseña de los miembros del equipo.
* **Requerir por lo menos un carácter no alfanumérico (! @ # $ % ^ & * () _ + - = [] {} |)**: Con esta opción obligas a que la contraseña de los miembros del equipo contenga por lo menos uno de los caracteres especiales indicados en la lista.

Al guardar esta configuración, los usuarios deberán cumplir con estas condiciones al momento de cambiar su contraseña.

## Reportar una vulnerabilidad

Si piensas que encontraste una vulnerabilidad de seguridad en Modyo, ayúdanos por favor reportando el problema. Modyo posee canales seguros y confidenciales de reporte de incidencias de seguridad por medio de nuestro [centro de soporte](https://support.modyo.com/hc/es) o del correo electrónico <a href="mailto:security@modyo.com">security@modyo.com</a>.