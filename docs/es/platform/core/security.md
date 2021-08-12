---
search: true
---

# Seguridad
En Modyo, todo lo referente a seguridad es muy importante para nosotros. Es por ello que creamos esta guía que servirá de guía en todo lo necesario para asegurar una instalación de Modyo. Mientras que Modyo Cloud y Enterprise Cloud, nuestras soluciones hosteadas, provee un excelente nivel de seguridad por defecto, los administradores de la plataforma pueden tomar medidas adicionales de protección para incrementar la seguridad de sus organizaciones. En esta guía se presentan las recomendaciones más importantes para conseguirlo.

### Conceptos importantes
* **Limitar accesos:** Reducir las posibilidades de que un actor malicioso obtenga acceso al sistema.

* **Contención:** El sistema debe estar configurado de tal forma que minimice la cantidad de daño que un mal actor pueda ocasionar en caso de que sea vulnerado.

* **Preparación y conocimiento:** Mantener copias de seguridad y procedimientos para estar preparados en el caso de que una catástrofe ocurra.

* **Fuentes confiables:** Evitar implementar Widgets o códigos de fuentes poco confiables. Asegurar que todas las dependencias que se cargan en un sitio provengan de una fuente confiable.

### Vulnerabilidades Locales
Asegurar que el equipamiento computacional de todos los usuarios administradores de la plataforma se encuentre libre de spyware, malware e infecciones de virus. Incluso una instalación segura de Modyo podría ser vulnerada por un atacante que explote la sesión válida de un usuario desde un equipo local.

Asegurar que los accesos provengan siempre desde un equipo actualizado, mediante navegadores de Internet confiables y actualizados.

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



## Registros de actividad

<img src="/assets/img/platform/activity-logs.jpg" style="margin-top: 40px; border: 1px solid #EEE;" />

La plataforma te permite ver todos los movimientos que se han hecho durante todo el tiempo que la tengas activa.

En esta sección, podrás filtrar por fecha, tipo de movimiento o usuario que te permitirán hacer un seguimiento correcto.

Además, tendrás la posibilidad de ver el detalle de lo que se hizo y desde qué sección se hizo.

Esto te puede servir en el caso de tener muchos usuarios internos de la plataforma o para detectar errores y cambios en la cadena de producción y desarrollo.



## Configuraciones de seguridad

En esta sección podemos configurar distintos aspectos para mejorar la seguridad de nuestra cuenta en Modyo:

* Política de contraseña
* Compartir recursos en distintos dominios ([CORS - Cross Origin Resource Sharing](https://www.w3.org/TR/cors/))
* Token de entrega de contenido ([JWT](https://tools.ietf.org/html/rfc7519))
* Autenticación en dos pasos

<img src="/assets/img/platform/cors.png" style="margin-top: 40px; border: 1px solid #EEE;" />

### Revisar Permisos de Administración
Los administradores de una organización o sitio poseen un alto nivel de acceso a contenido y configuraciones que deben ser privadas. Impresora a uno de estos administradores puede representar un gran riesgo de seguridad. Es por ello que recomendamos mantener un número pequeño y muy controlado de usuarios con rol de administración general y asegurar que estos usuarios mantengan activos niveles de protección adicionales como el segundo factor de autenticación.

Además los administradores pueden crear tokens para el acceso a las APIs de administración de la plataforma. Estos tokens en muchas ocasiones son usados para automatizar tareas comunes de administración, por lo que es importante asegurar que sólo se usen dentro de sistemas seguros que garanticen su protección.

### Habilitar el Segundo Factor de Autenticación
Considera habilitar el segundo factor de autenticación siempre que tu servidor de identidad lo permita. En el caso que uses el sistema de credenciales de Modyo, te recomendamos activar esta protección. Recomendamos encarecidamente habilitar esta funcionalidad para una mejor postura de seguridad.

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

Cada miembro del equipo podrá activar la autenticación en dos pasos desde su perfil, pero además, como administrador, puedes forzar la autenticación en dos pasos para todos los miembros del equipo. 

Al forzar la autenticación en dos pasos para los miembros del equipo, la siguiente vez que un miembro del equipo inicie sesión, se le va a exigir que configure su dispositivo de autenticación en dos pasos. Una vez configurado, deberá iniciar sesión usando su contraseña y el código provisto por _Google Authenticator_.


## Reporte de vulnerabilidades
Si piensas que encontraste una vulnerabilidad de seguridad en Modyo, ayúdanos por favor reportando el problema. Modyo posee canales seguros y confidenciales de reporte de incidencias de seguridad por medio de nuestro [centro de soporte](https://support.modyo.com/hc/es) o del correo electrónico <a href="mailto:security@modyo.com">security@modyo.com</a>.