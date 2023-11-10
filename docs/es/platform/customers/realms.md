---
search: true
sidebarDepth: 3
---

# Reinos

En Modyo, los reinos agrupan a usuarios con características similares y están sujetos a la misma configuración. Los reinos son útiles para gestionar múltiples grupos de sitios que no están relacionados o cuando necesitas un entorno de pruebas sin afectar a los usuarios activos.

Cada reino tiene su propia configuración para inicio de sesión, registro, integraciones, formularios, segmentos y mensajería.

:::tip Tip
Cualquier cambio que realices en un reino solo afectará a los usuarios de ese reino, no a los de otros.
:::

## Resumen

Esta sección muestra un resumen de los elementos principales del reino, incluyendo la cantidad de:

- Usuarios
- Segmentos
- Formularios
- Campañas

Proporciona, además, un registro cronológico de todas las actividades realizadas en el reino.

Al lado derecho de la pantalla encuentras algunas de las configuraciones más importantes del reino, como los sitios en los cuales se usa el reino, proveedores de identidad e identificadores.

## Usuarios

En esta sección puedes ver y modificar los usuarios externos del sistema. Estos usuarios son aquellos que se registran en la plataforma, acceden a los sitios de Modyo, responden a formularios y pueden recibir campañas de correo.

### Sobre la interfaz

La vista principal muestra una tabla con todos los usuarios registrados en la plataforma, paginada en caso de tener más de 30 registros.

Usa los filtros en la parte superior de la tabla para encontrar grupos de usuarios rápidamente. Los filtros disponibles son:

- **Estado**: Usuarios activos e inactivos.
- **Verificación**: Usuarios que han confirmado sus datos en la plataforma.
- **Segmentos**: Usuarios que pertenecen a un [segmento](/es/platform/customers/segments.html) específico.
- **Etiquetas**: Usuarios asignados etiquetas específica en la plataforma.
- **Búsqueda**: Filtra usuarios por nombre, apellido, email o nombre de usuario.

Puedes ordenar los usuarios, en la tabla, por nombre, fecha de inscripción, fecha de último ingreso a la plataforma o por cantidad de sesiones que han iniciado, haciendo click en las cabeceras de las columnas.

Para acciones masivas, marca la casilla junto al nombre de uno o más usuarios y haz click en el botón **Bulk Actions** debajo del listado de usuarios, para:

- **Desactivar**: Desactivar usuarios.
- **Activar**: Activar usuarios.
- **Exportar**: Exportar la lista de usuarios en formato Excel o CSV.
- **Agregar o eliminar tags**: Crea nuevas etiquetas y asigna o elimina etiquetas existentes de los usuarios seleccionados.

### Añadir un usuario

Para agregar un nuevo usuario, haz click en el botón **+ Nuevo Usuario** en la parte superior derecha de la pantalla y completa los siguientes campos:

- **Nombre**: **[Requerido]** Nombre legal del usuario.
- **Apellido**
- **Apellido materno**
- **Nombre del usuario**: **[Requerido]** Nombre dentro de la plataforma.
- **Email**: **[Requerido]**
- **Contraseña**: **[Requerido]** Debe contener al menos 8 caracteres.
- **Confirmación de la contraseña**: **[Requerido]**
- **Tags**: Etiquetas para identificar al usuario.

:::tip Tip
Para enviar la contraseña al correo del usuario, marca la casilla debajo del campo de correo electrónico. El usuario puede cambiar la contraseña una vez que acceda a la plataforma.
:::

Para agregar campos adicionales al formulario de nuevos usuarios o seleccionar un avatar por defecto para aquellos usuarios sin avatar, ve a la sección **Regístrate** en la [Configuración de Reino](/es/platform/customers/realms.html#configuracion-de-reino).

Para crear y modificar campos personalizados, dirígete a la sección [Custom Fields](/es/platform/customers/realms.html#custom-fields).


### Ficha de Usuarios

Da click en el menú lateral debajo de la columna de acciones para ver los detalles de un usuario específico o para desactivar al usuario. Selecciona **Ver** para abrir la ficha de ese usuario. En la ficha puedes ver:

#### Perfil
Datos generales del usuario:

- **Avatar del usuario:** Solamente si se ha cargado previamente.
- **Estado dentro de la plataforma:** Activo o inactivo.
- **Fecha de registro en la plataforma**
- **Último ingreso a la plataforma**
- **Número de inicio de sesiones en la plataforma**
- **Estado de verificación de usuario**
- **Segmentos en los que se encuentra incluido** (si están disponibles)

#### Actividad

En esta sección puedes ver un registro de todas las acciones que el usuario ha realizado dentro de la plataforma.

:::warning Atención
Estos registros no se pueden borrar ni editar.
:::

#### Respuestas a formularios

Esta sección te muestra todos los formularios que el usuario ha rellenado en la plataforma. Haz click sobre un formulario para ver las respuestas del usuario en ese formulario. Para conocer más de los formularios, ve a la sección [Formularios](/es/platform/customers/forms.html).

#### Notas

Aquí puedes agregar notas personalizadas acerca de los usuarios. Solo los administradores pueden agregar, ver y eliminar notas.

#### Dispositivos

En esta sección puedes ver todos los dispositivos del usuario que tienen una sesión activa. Un administrador puede cerrar la sesión del usuario remotamente.

#### Opciones adicionales

Da click en el menú de la sección superior derecha para:

* **Editar**: Abre el modal de edición de usuario.

:::tip Tip
Modificar un usuario puede resultar en que se modifique el listado de segmentos a los que pertenece ese usuario.
:::

* **Desactivar**: Desactiva un usuario e impide que pueda iniciar sesión.
* **Eliminar**: Permite eliminar a un usuario. Solamente los administradores pueden eliminar usuarios.

:::tip Tip
Un usuario puede eliminar su cuenta desde las opciones adicionales de su perfil.
:::

## Redireccionar Login ##

En Modyo puedes personalizar la página de login a la que acceden tus usuarios una vez que ingresen a tu sitio.

Para redireccionar el login sigue estos pasos:
1. Haz click en Canales en el menú lateral.
2. Selecciona Sitios.
3. Elige el sitio en él que deseas trabajar.
4. En el menú lateral, haz click en Plantillas.
5. En la plantilla header busca la línea que contiene la información de login.
6. Redirecciona a la página deseada utilizando este código:
`login?redirect_to=/tu-pagina` donde "/tu-pagina" es la URL de la página a la que deseas redirigir el login.
7. Haz click en **Guardar**.
8. Haz click en **Publicar**.

:::tip Tip
Modyo está programado para que la información de login esté en el encabezado del sitio. Si tu sitio está programado de manera diferente, utiliza el ícono de lupa para encontrar el término login en tus plantillas.
:::

:::warning Atención
La dirección de login tiene que ser una página dentro de tu misma cuenta. No puedes redireccionar el login a una URL externa.
:::

## Configuración de reino

En la sección de Configuración de reino, puedes personalizar la interacción entre los usuarios y la plataforma de Modyo.

Aquí puedes modificar tanto la experiencia visual del usuario como la configuración relacionada con el registro, control de acceso y personalización. Es importante tener precaución al realizar modificaciones en esta sección, ya que puedes afectar el correcto funcionamiento de la plataforma.


### General

En esta sección puedes configurar aspectos generales del reino, como:

- **Título**
- **Identificador**: La URL de las vistas de perfil, inicio de sesión, registro y recuperación de contraseña del reino.
- **Deshabilitar credenciales**: Al marcar esta casilla, desactivas las credenciales de Modyo en el reino y permites únicamente el acceso a través de SSO.

:::danger Peligro
Antes de habilitar la opción de deshabilitar las credenciales de Modyo en el reino, asegúrate de tener configurado un proveedor de identidad SSO para el reino. De lo contrario, los usuarios no podrán iniciar sesión.
:::

- **Después de iniciar sesión, redirigir a**: Te permite elegir una URL específica a la cual dirigir al usuario, una vez que haya ingresado al reino. Si no activas la opción de "Forzar redirección", el usuario será redirigido a la URL ingresada solo si no es posible volver a la URL desde la que inició sesión.
- **Forzar la redirección a**: Al activar esta opción, el usuario siempre será redirigido a la URL especificada en el campo de redirección del inicio de sesión, sin importar desde dónde inició la sesión.
- **Activación de la cuenta**:
  - Directa: Los usuarios que se registren pueden iniciar sesión directamente.
  - E-mail de activación: Los usuarios que se registren deben activar su cuenta mediante un enlace enviado a su correo electrónico previo a poder iniciar sesión.
  - Moderada: Los usuarios que se registren deberán esperar a que un administrador del reino active su cuenta para poder iniciar sesión.
  - Deshabilitada: No se pueden registrar nuevos usuarios en el reino. Los usuarios ya registrados y activados aún pueden iniciar sesión.
- **Imagen de Avatar por defecto**: Imagen que se muestra en el avatar de los usuarios que no tienen una imagen personalizada.
- **Formulario de registro:**: Aquí puedes habilitar o deshabilitar diferentes atributos en el formulario de registro, como el segundo apellido, confirmación de correo electrónico, avatar de usuario, fecha de nacimiento, género y número de teléfono.
- **Eliminar reino**: Elimina el reino. Este proceso se realiza en segundo plano y es posible que no veas el reino desaparecer inmediatamente después de ejecutar la acción. Para confirmar la eliminación, debes ingresar el nombre completo del reino.



### Apariencia

En esta sección, puedes personalizar la apariencia del reino.

#### Color primario

El color primario es el que se muestra en los principales botones relacionados con la sesión, como el ingreso, registro, modificaciones de contraseña y otros atributos. Para modificarlo, ingresa el código HEX del color deseado y haz click en el botón **Guardar** ubicado en la parte superior de la pantalla.

#### Mostrar el logo de la cuenta

Da click en el botón **subir** para cargar un logo personalizado. El logo se desplegará sobre los formularios respectivos de estas vistas.

#### CSS personalizado

Para usar una hoja de estilos CSS personalizada en las vistas de sesión, sigue estos pasos:
1. Copia el código CSS que deseas utilizar.
2. Abre el editor que se encuentra en la ventana.
3. Pega el código CSS en el editor.
4. Haz clic en el botón **Guardar** para guardar los cambios.

Haz click en el ícono de [Gestor de Archivos](/es/platform/content/asset-manager.html) para subir archivos vinculados en el código CSS.

Es importante tener en cuenta que el editor no genera automáticamente el enlace del archivo después de subirlo. Después de cargar el archivo, haz click en el botón de pegado que se encuentra en el lateral de cada archivo para generar su enlace. Luego, copia este enlace y pégalo en el código CSS.

:::tip Tip
Si tienes problemas con los códigos de teclado al editar el CSS, haz click en el ícono de teclado sobre el editor para desplegar atajos de teclado que facilitarán la edición.
:::


### Correos

Modyo te permite configurar la dirección de envío y la apariencia de los correos que envías a los usuarios del reino.

Para ajustar la dirección del remitente que envía tu correo, ingresa la dirección en el campo **"Correo por defecto"** y haz click en el botón **Guardar**.

Aquí puedes también habilitar, deshabilitar y personalizar el envío de los correos automáticos en respuesta a acciones específicas realizadas por los usuarios. Para habilitar o deshabilitar el envío de un correo, haz click en el botón Habilitado/Deshabilitado junto a cada función y da click en el botón Guardar.

 En caso de activarlas, se envía un correo cuando:


- **Correo de Activación**:  Un usuario ha completado su registro, para que confirme sus datos.
- **Correo de Bienvenida**: Un usuario se ha registrado en un sitio específico.
- **Agregado por el Admin**: Un administrador crea un usuario manualmente.
- **Recuperación de Contraseña**: Un usuario solicita recuperar su contraseña.
- **Esperando Confirmación**: El usuario ha sido confirmado y activado.
- **Confirmación**: El usuario ha sido confirmado, pero requiere activación manual por parte de un administrador.
- **Verificación de actualizaciones de correo**: Se ha llevado a cabo un cambio en la dirección de correo.

**Footer personalizado**: Permite personalizar el pie de página de todos los correos mencionados anteriormente.

Para habilitar o deshabilitar el envío de un correo, haz click en el botón Habilitado/Deshabilitado junto a cada función y da click en el botón **Guardar**.

#### Personalizar correos

Puedes también introducir códigos personalizables en cada correo, estos códigos permiten que la plataforma incluya la información del usuario en el campo designado, al momento del envío.

:::danger Peligro
Es fundamental que cada correo incluya los códigos personalizables que permiten que la plataforma incluya la data aleatoria del usuario que solicita el envío.

Para ello, inserta en el código los atributos que están debajo del editor y pégalo en la parte correspondiente del código.
:::

Cada vez que hagas un cambio en el código, debes hacer click en el botón **Guardar** ubicado en la parte superior de la pantalla.

### Proveedores de identidad

Para facilitar el acceso a la plataforma, puedes configurar el inicio de sesión y el registro a través de servicios estándar.

Los servicios compatibles con el ingreso a Modyo son:

- Google
- SAML
- Oauth2
- OpenID Connect
- Keycloak
- Azure Active Directory

Debes contar con la correcta configuración del servicio asociado para que Modyo pueda conectarse con él. Asegúrate de completar todos los campos requeridos.

Para más información sobre las integraciones consulta la sección de [Proveedores de Identidad](/es/platform/core/integrations/identity-providers.html)

### Integraciones

Modyo permite integrar con otros servicios y aplicaciones.

#### Zendesk

Para integrar con Zendesk necesitas:

- Nombre de la integración
- Shared secret de Zendesk
- URL de la integración: e.g. mysubdomain.zendesk.com

### Cliente OAuth

Utiliza un cliente de autenticación para enviar los tokens de acceso de tu integración a tus recursos; necesitas los siguientes valores:

- Nombre
- URI de redirección: el URI al que el servidor de autenticación redirigirá al usuario después de una autenticación exitosa.
- URI de cierre de sesión: URI al que el servidor de autenticación redirigirá al usuario después de cerrar la sesión.
- Descripción
- Confidencial: Existen dos tipos de clientes OAuth, confidencial o públicos. Selecciona la opción confidencial si tu aplicación puede autenticarse de manera segura con el servidor de autenticación. Los clientes públicos suelen ser aplicaciones que se ejecutan en dispositivos móviles o navegadores.
- Scopes: Si tu servicio de autenticación OAuth2 usa múltiples espacios o ambientes para separar a los usuarios y quieres usar uno en específico en esta integración, defínelo en este campo.

### Miembros del equipo

Modyo permite seleccionar los miembros del equipo que trabajan en cada reino y así controlar el acceso a los distintos aspectos del reino.

Para añadir un miembro al reino, sigue estos pasos:
1. Haz click en el botón **+ Agregar miembro** en la parte superior derecha.
2. En el modal, selecciona a un usuario y asigna un rol.
3. Haz click en **Agregar**.

Para modificar el rol de un miembro del equipo:

1. Haz click en el nombre del usuario en el modal.
2. Asigna el rol deseado al usuario.
3. Da click en **Actualizar**.

Puedes elegir entre dos roles:

- **Realm User**: Puede añadir usuarios, crear, modificar y enviar a revisión campañas, formularios y segmentos.
- **Realm Admin**:  Tiene acceso a todas las configuraciones y secciones del reino, puede añadir y eliminar usuarios y miembros del equipo.  Puede también eliminar el reino.

Para eliminar a un administrador del reino, selecciona la casilla a la izquierda de su nombre y haz click en el botón **Borrar** en la parte inferior.

### Custom fields

En esta sección, puedes crear campos personalizados para distinguir el perfil del usuario. Es importante que estos campos estén correctamente identificados para su mejor uso.

Los tipos de campos personalizados que puedes agregar son:

- Casilla
- Fecha
- Lista Desplegable
- Párrafo
- Número
- Elección
- Texto simple

Puedes reorganizar los campos personalizados arrastrándolos. Recuerda que el orden en el que los ordenes será el mismo en el que aparecerán en las vistas de edición y en el perfil de los usuarios.

:::tip Tip
Puedes crear un máximo de 20 campos personalizados en cada reino.
:::

Los campos personalizados tienen propiedades estándar que debes tener en cuenta:

- **Debe ser una respuesta única**: El valor debe ser único para cada usuario, evitando duplicados.
- **Este es un campo requerido**: Debe completarse al modificar o crear un usuario. Si el campo es visible y editable para los usuarios, se mostrará en el formulario de registro y será obligatorio para crear nuevos usuarios.
- **Visible para los usuarios de los sitios**: Será visible en el perfil del usuario.
    - **Editable por usuarios de los sitios**: Los usuarios podrán ver y modificar el valor.
- **Buscable por administradores**: El valor estará indexado y los administradores podrán realizar búsquedas de usuarios en el índice de usuarios del administrador de Modyo, por el valor de este campo.
- **Texto de sugerencia**: Proporciona un ejemplo o guía para el campo.
- **Valor por defecto**.

Los campos personalizables pueden estar habilitados o deshabilitados. Si están habilitados, un administrador puede usarlos y, dependiendo de su configuración, pueden también estar disponibles para los usuarios.

Cuando un campo personalizable está deshabilitado, no aparece en ningún formulario, sin embargo, sus valores se mantienen guardados.

:::danger Peligro
Cuando un campo personalizable está deshabilitado, puede ser eliminado.

Al eliminar un campo personalizable, eliminas permanentemente todos los valores de usuarios asociados a ese campo.
:::

:::tip Tip
Además de guardar valores específicos de los usuarios, puedes utilizar los valores de los campos personalizables para crear filtros de [segmentos](/es/platform/customers/segments.html) lo que te permite separar a los usuarios según sus valores personalizados.
:::

### Seguridad

#### Política de Contraseña

Las opciones disponibles para establecer una política de contraseña en la plataforma Modyo, son:

- Valor mínimo de longitud de contraseña:  Establece el número mínimo de caracteres que una contraseña debe tener, entre 12 y 128 caracteres.
- Requerir por lo menos una letra minúscula (a - z)
- Requerir por lo menos una letra mayúscula (A - Z)
- Requerir por lo menos un caracter no alfanumérico (! @ # $ % ^ & * () _ + - = [] {} |)

#### reCAPTCHA

Puedes habilitar o no reCAPTCHA en el reino, una vez habilitado ingresa:

- **Clave de sitio**
- **Secreto**
- **Umbral**

### Configuración de Pago

Al habilitar la función de pago en tu reino, tienes acceso a las siguientes opciones:

- **Formato de moneda**: Modifica el tipo de puntuación usado.
- **Activar envío de correo electrónico**: Cuando esta opción está seleccionada, el usuario recibe un correo al pagar una orden.
- **Asunto de correo**: Encabezado del correo enviado a los usuarios.
- **Cuerpo del correo**: Contenido del mensaje enviado a los usuarios.

