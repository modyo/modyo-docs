---
search: true
sidebarDepth: 3
---

# Reinos

Los reinos son una agrupación de usuarios con características similares que están gobernados por una misma configuración. Los realms son especialmente útiles cuando cuentas con distintas agrupaciones para sitios de una misma cuenta que no están directamente relacionados, o también, para tener un sitio de pruebas con usuarios de prueba sin afectar la agrupación de usuarios productivos.

Cada realm tiene su propia configuración de inicio de sesión, registro, integraciones, formularios, segmentos, y mensajería. Debes tener en consideración que al crear alguno de estos elementos en un reino, solo afectará a los usuarios de ese realm y no tendrá efecto sobre usuarios de otro realm.

## Usuarios

A través de la sección Usuarios, podrás ver y modificar a los usuarios externos del sistema. Dichos usuarios son los registrados dentro de la plataforma quienes inician su sesión en los sitios de Modyo, responden formularios o pueden recibir campañas de correo.

### Sobre la interfaz

En la vista principal, podrás ver una tabla con todos los usuarios registrados dentro de la plataforma, paginada en caso de tener más de 30 registros.

En la parte superior de la tabla, encontrarás filtros que te permitirán encontrar un grupo de usuarios de mejor manera. Los filtros disponibles son los que siguen:

- Estado: Ver los usuarios activos e inactivos.
- Verificación: Ver los usuarios que tienen confirmados sus datos en la plataforma.
- Segmentos: Usuarios que se encuentran dentro de un determinado [Segmento](/es/platform/customers/segments.html)
- Filtros avanzados: Usuarios que tengan un dato o acción en específico dentro de la plataforma.
- Búsqueda: Filtra usuarios por nombre, apellido, email y username.

La opción de Filtros Avanzados abrirá un modal el cual te permitirá filtrar a los usuarios por atributos más específicos, tales como su edad, o Custom Fields. Al agregar un nuevo filtro avanzado, aparecerá automáticamente el número de coincidencias en la parte inferior izquierda del modal, al lado del botón para limpiar los filtros. Si quieres visualizar el listado de estos usuarios filtrados, solo debes hacer click en el botón **Aplicar**.

:::tip Tip
Junto al botón de **Aplicar**, está el botón **Guardar como Segmento**. Este guardará los filtros que aplicaste en un nuevo Segmento, al cual deberás darle un título y una descripción. Posteriormente lo podrás encontrar en la sección [Segmentos](/es/platform/customers/segments.html)
:::

En la tabla misma, es posible ordenar los usuarios por sus valores respectivos haciendo click en las cabeceras de cada una de las siguientes columnas:
- Nombre: Nombre del usuario
- Fecha de registro: Fecha de inscripción en la base de datos de usuarios
- Ultimo ingreso: Fecha de último ingreso a la plataforma
- Sesiones: Cantidad de logins hechos dentro de la plataforma


### Añadir un usuario

Para agregar un nuevo usuario, se debe hacer click en el botón **+ Nuevo Usuario** en la parte superior derecha de la pantalla.

Al seleccionar añadir un usuario, la plataforma te pedirá completar los siguientes campos:

- Nombre: **[Requerido]** Nombre legal del usuario.
- Apellido: Apellido del usuario.
- Apellido materno: Apellido materno del usuario.
- Nombre del usuario: **[Requerido]** Nombre dentro de la plataforma
- Email: **[Requerido]** Correo electrónico del usuario
- Contraseña: **[Requerido]** Password para que el usuario ingrese a la plataforma. El password no puede tener menos de 8 caracteres.
- Confirmación de la contraseña: **[Requerido]** Repetición de la contraseña dada por el administrador.
- Tags: Etiquetas que sirvan para identificar al usuario.

:::tip Tip
Para enviar la contraseña al mail del usuario, solo es necesario marcar el checkbox que se encuentra bajo el campo email. Al guardar, se enviará un correo al usuario creado con su contraseña, que podrá cambiar al ingresar a la plataforma.
:::

Esta vista de creación de usuarios puede contener más campos dependiendo de la configuración en la plataforma, disponible en la sección [Configuración de Reino](/es/platform/customers/realms.html#configuracion-de-reino). Algunos campos especiales, tales como el segundo apellido, avatar, o la fecha de nacimiento, se pueden activar en la sección [Formulario de registro](/es/platform/customers/realms.html#formulario-de-registro). Por otro lado, también existen **Custom Fields**, los que se pueden crear y modificar en la sección [Custom Fields](/es/platform/customers/realms.html#custom-fields).


### Ficha de Usuarios

Al hacer click, desde el listado principal, en cada uno de los usuarios, se abrirá la ficha del usuario seleccionado. En ella podrás ver una barra lateral que incluye los siguientes datos:

- Perfil (los datos generales del usuario)
- Actividad (dentro del sitio)
- Respuestas a formularios (que han sido enviados por el usuario)
- Notas (por si se quiere tomar en cuenta algo especial del usuario)

#### Perfil
En esta seccion se encuentran los datos generales del usuario:

- Avatar del usuario (Si es que se ha subido)
- Estado dentro de la plataforma: Si es que se encuentra activo o inactivo.
- Fecha de registro en la plataforma
- Último ingreso a la plataforma
- Cantidad de sesiones hechas en la plataforma
- Estado de verificación de usuario
- Segmentos en los que se encuentra incluído (si hay disponibles)

#### Actividad

En esta sección podrás ver un registro de todas las acciones que el usuario ha realizado dentro de la plataforma.

:::tip Tip
Cabe notar que esta sección trata de las interacciones principales que realiza este usuario dentro de la plataforma. Estos registros no pueden ser borrados ni editados.
:::

#### Respuestas a formularios

Esta sección te muestra todos los formularios que ha rellenado el usuario dentro de la plataforma. Al hacer click sobre alguno de ellos, te lleva a ver las respuestas del usuario en dicho formulario. Si quieres saber más al respecto de los formularios, entra a la sección [Formularios](/es/platform/customers/forms.html).

#### Notas

En esta sección se pueden agregar notas personalizadas sobre los usuarios, sólo administradores pueden agregarlas, verlas y eliminarlas.

#### Dispositivos

En esta sección podrás ver todos los dispositivos que tienen una sesión activa. Aquí uh administrador podra cerrar la sesión del usuario remotamente. 

#### Opciones adicionales

En la sección superior derecha encontrarás opciones adicionales con las que podrás desactivar y eliminar usuarios:

* **Editar**: Abre el modal de edición de usuario. Para añadir mas campos al formulario puedes ir a [Custom Fields](/es/platform/customers/realms.html#custom-fields).
* **Desactivar**: Puedes desactivar usuarios y asi impedir que puedan iniciar sesión.
* **Eliminar**: Una vez que un usuario está desactivado, podrás eliminar ese usuario. Esta acción la pueden ejecutar los miembros del equipo que sean administradores de la cuenta y también cada usuario puede eliminar su cuenta desde las opciones adicionales de su perfil.

:::tip Tip
Al modificar un usuario, puede que cambie el listado de Segmentos a los que pertenece.
:::

## Configuración de reino

En esta sección puedes configurar en gran parte la interacción entre usuarios y la plataforma de Modyo. Algunas configuraciones son enfocadas en la experiencia visual para el usuario, como selección colores o plantillas de correos, mientras que otras son enfocadas al registro, control de acceso, y personalización de los mismos. En particular esta segunda parte es esencial para el correcto funcionamiento de la plataforma, por lo que es importante ser precavido al momento de modificar configuraciones en esta sección.

### General

Aquí puedes configurar aspectos generales del realm, como:

- **Nombre**.
- **Identificador**: Permite modificar la URL de las vistas de perfil, inicio de sesión, registro, y recuperación de contraseña del realm.
- **Habilitar/deshabilitar credenciales**: Permite desactivar las credenciales de Modyo en este realm para solo hacer ingreso a través de SSO. Ten a consideración tener habilitado un SSO primero antes de habilitar esta opción.
- **Activación de la cuenta**:
  - Directa: Los usuarios que se registren podrán iniciar sesión directamente.
  - E-mail de activación: Los usuarios que se registren deberán activar su cuenta mediante un link que se les envía al correo electrónico para poder iniciar sesión.
  - Moderada: Los usuarios que se registren deberán esperar a que un administrador del Reino active su cuenta para poder iniciar sesión.
  - Deshabilitada: No se pueden registrar nuevos usuarios en el Reino. Los usuarios ya registrados y activados, podrán iniciar sesión sin problemas.
- **Imagen de Avatar por defecto**: Es la imagen que se despliega en el avatar de todos los usuarios que no tengan una imagen.
- **Atributos extra del formulario de registro**:
  - Habilitar segundo apellido
  - Hacer que el segundo apellido sea requerido
  - Habilitar confirmación de correo electrónico: Habilita un campo extra de correo electrónico que el usuario debe rellenar y debe coincidir con el campo primario de correo electrónico para que el usuario se pueda registrar.
  - Habilitar avatar de usuario
  - Habilitar fecha de nacimiento
  - Habilitar genero
  - Habilitar número de teléfono
- **Eliminar reino**: Permite la eliminación completa del reino. Este es un proceso en segundo plano, por lo que es posible que no veas el reino desaparecer inmediatamente luego de ejecutar la acción. Para poder eliminar el reino, deberás escribir el nombre completo del reino para confirmar la acción.

:::danger Peligro
Al deshabilitar las credenciales de Modyo del reino, debes asegurarte de tener configurado un proveedor de identidad para este realm, de lo contrario, los usuarios no podrán iniciar sesión.
:::

### Apariencia

Esta sección te permitirá modificar el color primario, logo, y agregar CSS personalizado para las vistas de registro, inicio de sesión, y perfil de los usuarios del reino.

#### Color primario

El color primario es el que se muestra en los principales botones del manejo de la sesión, tales como el ingreso, registro, modificaciones de contraseña u otros atributos. Para modificarlo solo debes ingresar el Código HEX del color que quieras y hacer click en el botón **Guardar** que se encuentra en la parte superior de la pantalla.

#### Mostrar el logo de la cuenta

Esta opción permite mostrar el logo configurado para la cuenta en las vistas de sesión, el cual se desplegará sobre los formularios respectivos de dichas vistas. Para cambiar el logo, debes acceder a la [Interfaz de Modyo](/es/platform/core/the-modyo-interface.html).

#### CSS personalizado

Si quieres tener un CSS personalizado que se ajuste a tus necesidades en las vistas de sesión, solo debes pegar el código en el editor que se encuentra en la ventana y hacer click en el botón **Guardar**.

Es común tener vinculados archivos en el código CSS. Si deseas agregar alguno, haz click en el ícono de [Gestor de Archivos](/es/platform/content/asset-manager.html), que te permitirá subir los archivos que necesites.

Toma en cuenta que el editor no pegará automáticamente el vínculo, sino que después de subir el archivo, tienes que hacer click en el botón de pegado, que se encuentra en la parte lateral de cada archivo y que dará el vínculo a este dentro de la página. Con esta dirección, puedes pegarla en el código CSS para poder usarla.

:::tip Tip
Si tienes problemas con los códigos de teclado cuando estés editando el CSS, puedes hacer click en el ícono de teclado que se encuentra sobre el editor. Este desplegará una serie de atajos de botones que te permitirán manejar fácilmente la edición.
:::

### Correos

Modyo permite configurar la dirección de envío y apariencia de los correos que se enviarán a los usuarios del reino.

Para ajustar la dirección que aparecerá como el remitente que enviará tu mail, solo debes ingresarla en el campo "Correo por defecto" y hacer click en el botón **Guardar**.

Lo que permite esta sección es habilitar, deshabilitar y personalizar el envío de los correos automáticos tras interacciones específicas que realizan los usuarios, los correos son los que siguen:

- Correo de activación: Enviado una vez completado un registro de usuario, para que este confirme sus datos.
- Correo de Bienvenida: Enviado una vez completado un registro de usuario en un sitio específico.
- Agregado por el Admin: Enviado una vez que el administrador creó el usuario manualmente.
- Recuperación de Contraseña: Enviado cuando el usuario solicitó recuperar su contraseña.
- Esperando Confirmación: Enviado una vez que se confirmó y activó el usuario.
- Confirmación: Enviado una vez que se confirmó el usuario, pero debe esperar activación manual de parte de un administrador.
- Verificación de actualizaciones de correo: Enviado al momento de hacer cualquier cambio de dirección de correo. 
- Footer personalizado: Footer personalizado para todos los correos anteriormente descritos.


Para habilitar o deshabilitar el envío de estos correos, solo debes hacer click en el botón **Habilitado/Deshabilitado** que se encuentra al costado de cada función y hacer click en el botón **Guardar**.

#### Personalizar correos

Los estilos de los correos de la plataforma que envía también pueden ser personalizados. Para ello, debes tener el código HTML que quieres incluir en ellos.

Al hacer click para habilitar cada uno de los correos, mostrará un editor por defecto en el cual puedes pegar el código.

:::danger Peligro
Es fundamental que cada correo incluya los códigos personalizables que permiten que la plataforma incluya la data aleatoria del usuario que solicita el envío.

Para ello, debes insertar en el código los atributos que se encuentran bajo el editor, y que puedes copiar y pegar fácilmente para ubicarlos en la parte que necesites.
:::

Cada vez que se haga un cambio en el código, se debe hacer click en el botón **Guardar** que se encuentra en la parte superior de la pantalla.

### Proveedores de identidad

Para simplificar el ingreso a la plataforma, es posible configurar su entrada y registro a través de ciertos servicios estándar.

Los servicios compatibles con el ingreso a Modyo son:

- Google
- SAML
- Oauth2
- OpenID Connect
- Keycloak
- Azure Active Directory

Es necesario contar con la correcta configuración del servicio asociado que Modyo pueda conectarse con ellos. Asegúrate de que todos los campos requeridos estén completos. Para más información de las integraciones, dirígete a [Proveedores de Identidad](es/platform/core/integrations/identity-providers)

### Integraciones

#### Zendesk

Gestiona Para lograr una integración con Zendesk se necesitan los siguientes datos:

- Nombre de la integración
- Shared secret de Zendesk
- URL de la integración: e.g. mysubdomain.zendesk.com

### Cliente OAuth

Usa un cliente de autenticación para enviar los tokens de acceso de tu integración a tus recursos. Se necesitan los siguientes valores:

- Nombre
- URI de redirección: Es el URI a donde el usuario va a ser redirigido por el servidor de autenticación después de autenticar exitosamente. 
- URI de cierre de sesión: Es el URI a donde el usuario va a ser redirigido por el servidor de autenticación después de cerrar su sesión.
- Descripción
- Confidencial: Existen dos tipos de clientes OAuth, confidencial o públicos. Se necesita la opción confidencial cuando tu aplicación es capaz de autenticar de manera segura con el servidor de autenticación. Clientes públicos comúnmente son aplicaciones que corren en un dispositivo móvil o en un navegador. 
- Scopes: Si tu servicio de autenticación OAuth2 usa múltiples espacios o ambientes para separar a los usuarios y quieres usar uno en específico en esta integración, deberás definirlo en este campo.


### Miembros del equipo

Para ordenar el trabajo, Modyo permite seleccionar los miembros del equipo que trabajarán en cada reino y así controlar el acceso a los distintos aspectos del reino.

Para añadir un usuario al reino, selecciona el botón primario **+ Agregar Miembro** en la parte superior derecha de la vista, en el modal selecciona a un administrador, y asigna un rol, luego presiona **Añadir** para que ese administrador sea parte del equipo de trabajo del reino.

Puedes modificar el rol de alguno de los administradores asociados haciendo click en su nombre. Se levantará un modal, donde puedes seleccionar el nuevo rol. Presiona **Guardar** para confirmar el cambio.

Si quieres eliminar a un administrador del reino, selecciona usando los checkbox a la izquierda de su nombre, y luego haciendo click en el botón al final de la lista **Borrar**.

Los roles disponibles son:

- **Realm User**: Puede añadir usuarios, crear, modificar, y enviar a revisión campañas, formularios, y segmentos.
- **Realm Admin**: Puede acceder a todas las configuraciones y secciones del reino, añadir y eliminar usuarios y miembros del equipo, como también puede eliminar el reino.

### Custom fields

Desde aquí se pueden crear campos personalizados que ayuden a identificar el perfil del usuario. Por lo mismo, es indispensable que estos estén identificados de manera correcta para su mejor uso.

Los tipos de **Custom fields** que puedes agregar son:

- Checkbox
- Fecha
- Dropdown (Lista Desplegable)
- Párrafo
- Número
- Elección
- Texto simple

Puedes arrastrar los **Custom fields** para ordenarlos. Ten en cuenta que este es el orden en el que aparecerán los campos en las vistas de edición y en el perfil de los usuarios.

:::tip Tip
Solo puedes crear hasta 20 custom fields en cada Reino.
:::

Todos los **Custom fields** tienen ciertas propiedades estándar:

- **La respuesta debe ser única**: Implica que el valor debe ser único para cada usuario, impidiendo que se guarde otro valor igual.
- **Este es un campo requerido**: Implica que este valor debe ser rellenado cuando se modifica o crea un usuario, de tal forma que no se podrá modificar un usuario si este campo no tiene un valor asociado. En caso de que el campo además, sea visible y editable por los usuarios, este campos aparecerá en el formulario de registro y será requerido para crear nuevos usuarios.
- **Visible para los usuarios de los sitios**: Implica que será visible en la vista del perfil.
    - **Editable por usuarios de los sitios**: Implica que será visible y también podrá ser modificado por el usuario.
- **Buscable por administradores**: Implica que este valor estará indexado y los usuarios podrán ser encontrados al ser buscados desde el indice de usuarios del administrador de Modyo, por el valor de ese campo.
- **Texto de sugerencia**: Es el texto que aparece para ofrecer un ejemplo.
- **Valor por defecto**

Además de lo anterior, los **Custom fields** pueden estar habilitados o deshabilitados. Si está habilitado, entonces se podrá usar por administradores y dependiendo de su configuración, estará disponible para los usuarios. Si un **Custom field** se encuentra deshabilitado, entonces no aparecerá en ningún formulario, pero sus valores se mantendrán guardados.

:::danger Peligro
Cuando un **Custom field** está deshabilitado, puede ser eliminado. Al eliminar un **Custom field**, estarás eliminando para siempre todos los valores que los usuarios tenían para ese **Custom field**.
:::

:::tip Tip
Aparte de poder guardar valores específicos en los usuarios, se pueden crear filtros de [Segmentos](/es/platform/customers/segments.html) usando los valores de los **Custom fields**, permitiendo segmentar a los usuarios por valores personalizables.
:::

### Seguridad

#### Política de Contraseña

Estas son las opciones disponibles para establecer una política de contraseña para Modyo Platform:

- Valor mínimo de longitud de contraseña: Este número dicta cual es el mínimo número de caracteres que una contraseña debe tener. Una contraseña debe tener entre 12 a 128 caracteres.
- Requerir por lo menos una letra minúscula (a - z)
- Requerir por lo menos una letra mayúscula (A - Z)
- Requerir por lo menos un caracter no alfanumérico (! @ # $ % ^ & * () _ + - = [] {} |)

#### reCAPTCHA

Estas son las opciones disponibles al habilitar reCAPTCHA en el reino.

- **reCAPTCHA habilitado**: Habilita la protección con reCAPTCHA para el registro de usuarios, envío de formularios, inicio de sesión y recuperación de contraseña.
- **Clave de sitio**
- **Secret**
- **Threshold**

### Configuración de Payment

Estas son las opciones disponibles al tener Payment habilitado en tu reino. 

- **Formato de moneda**: Modifica el tipo de puntuación desplegado. 
- **Activar el envío de correo electrónico**: Si está seleccionado, el usuario recibirá un correo luego de pagar una orden.
- **Asunto de correo**: Asunto enviado a todos los usuarios.
- **Cuerpo del correo**: Cuerpo enviado a todos los usuarios.

