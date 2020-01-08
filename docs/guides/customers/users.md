---
search: true
---

# Usuarios

A través de la sección Usuarios, podrás ver y modificar a los usuarios externos del sistema. Dichos usuarios son los registrados dentro de la plataforma quienes inician su sesión en los sitios de Modyo, responden formularios o pueden recibir campañas de correo.

## Sobre la interfaz

En la vista principal, podrás ver una tabla con todos los usuarios registrados dentro de la plataforma, paginada en caso de tener más de 30 registros.

En la parte superior de la tabla, encontrarás filtros que te permitirán encontrar un grupo de usuarios de mejor manera. Los filtros disponibles son los que siguen:

- Estado: Ver los usuarios activos e inactivos.
- Verificación: Ver los usuarios que tienen confirmados sus datos en la plataforma.
- Targets: Usuarios que se encuentran dentro de un determinado [Target](/guides/customers/targets.html)
- Filtros avanzados: Usuarios que tengan un dato o acción en específico dentro de la plataforma.
- Búsqueda: Filtra usuarios por nombre, apellido, email, username y uuid.

La opción de Filtros Avanzados abrirá un modal el cual te permitirá filtrar a los usuarios por atributos más específicos, tales como su edad, o Custom Fields. Al agregar un nuevo filtro avanzado, aparecerá automáticamente el número de coincidencias en la parte inferior izquierda del modal, al lado del botón para limpiar los filtros. Si quieres visualizar el listado de estos usuarios filtrados, solo debes hacer _click_ en el botón **Aplicar**.

:::tip Tip
Junto al botón de **Aplicar**, está el botón **Guardar como Target**. Este guardará los filtros que aplicaste en un nuevo Target, al cual deberás darle un título y una descripción. Posteriormente lo podrás encontrar en la sección [Targets](/guides/customers/targets.html)
:::

En la tabla misma, es posible ordenar los usuarios por sus valores respectivos haciendo _click_ en las cabeceras de cada una de las siguientes columnas:
- Nombre: Nombre del usuario
- Fecha de registro: Fecha de inscripción en la base de datos de usuarios
- Ultimo ingreso: Fecha de último ingreso a la plataforma
- Sesiones: Cantidad de logins hechos dentro de la plataforma


### Añadir un usuario

Para agregar un nuevo usuario, se debe hacer _click_ en el botón **+ Nuevo** en la parte superior derecha de la pantalla.

Se abrirá un selector que muestra las dos formas posibles para crear usuarios en el sistema: manualmente o importándolos desde un archivo \*.CSV. La segunda opción permite importar múltiples usuarios simultáneamente.

Al seleccionar añadir un usuario, la plataforma te pedirá completar los siguientes campos:

- Nombre: Nombre legal del usuario. **Requerido**
- Apellido: Apellido del usuario.
- Apellido materno: Apellido materno del usuario.
- Nombre del usuario: Nombre dentro de la plataforma **Requerido**
- Email: Correo electrónico del usuario **Requerido**
- Contraseña: Password para que el usuario ingrese a la plataforma. El password no puede tener menos de 8 caracteres. **Requerido**
- Confirmación de la contraseña: Repetición de la contraseña dada por el administrador.
- Tags: Etiquetas que sirvan para identificar al usuario.

:::tip Tip
Para enviar la contraseña al mail del usuario, solo es necesario marcar el checkbox que se encuentra bajo el campo email. Al guardar, se enviará un correo al usuario creado con su contraseña, que podrá cambiar al ingresar a la plataforma.
:::

Esta vista de creación de usuarios puede contener más campos dependiendo de la configuración en la plataforma, disponible en la sección [Configuración de Customers](/guides/customers/users.html#configuracion-de-customers). Algunos campos especiales, tales como el segundo apellido, avatar o la fecha de nacimiento, se pueden activar en la sección [Formulario de registro](/guides/customers/users.html#formulario-de-registro). Por otro lado, también existen **Campos Personalizados**, los que se pueden crear y modificar en la sección [Campos Personalizados](/guides/customers/users.html#campos-personalizados).


### Importar usuarios

La segunda opción del selector para agregar nuevos usuarios es la importación desde un archivo CSV. Al hacer _click_, se abrirá una vista que lista un registro histórico de importaciones previas, en caso de existir. Este listado se puede ordenar por nombre del archivo \*.CSV o por estado de la importación, asimismo a través de la barra de búsqueda sobre la tabla se puede filtrar por el nombre del archivo.

Para realizar una nueva importación, debes hacer _click_ en el botón superior derecho **Importar**. Este abrirá un modal el que permitirá seleccionar y subir el archivo \*.CSV que tiene el listado de usuarios y sus atributo. Es importante dejar seleccionada la caja que indica que el archivo contiene encabezados o nombres de columnas en caso de que así sea, o las cabeceras intentarán ser incluídas como un nuevo usuario. Luego procedes a hacer _click_ en el botón **Aceptar**.

A continuación verás la vista principal de importación. A la izquierda, aparecerá una tabla con tres columnas principales, la primera contiene el nombre de la cabecera de la columna importada (en caso de que exista), la segunda algunos ejemplos de los datos que contiene esa columna, y la tercera un selector. Este selector realiza la asignación respectiva del valor importado al atributo del usuario en la plataforma.

En esta vista procederás a asignar cada columna del archivo \*.CSV a un atributo respectivo disponible en la plataforma.

:::tip Tip
Los atributos mínimos requeridos para la importación son el nombre real del usuario (no confundir con nombre de usuario) y su correo electrónico.
:::

A la derecha, en una barra lateral, podrás ver configuraciones principales de la importación. Acá puedes definir si el archivo no sigue uno de los estándares comunes de los archivos \*.CSV, puedes fijar la codificación en la que se encuentra el archivo, y también definir separación de los atributos (el cual por defecto es una coma). Un poco más abajo hay un recuadro que indica si ya has seleccionado los atributos principales requeridos para la importación (nombre y correo electrónico). El botón para **Comenzar la importación** sólo se habilitará una vez que hayas incluído dichos campos para ser importados. Finalmente, cuatro opciones principales de la importación:

- Activar cuenta de usuario
- Activar cuenta y enviar correo electrónico (personalizable en [Correos](/guides/customers/users.html#correos))
- Agregar a usuarios a sitios
- Actualizar usuarios (en caso de que ya estén registrados en la plataforma)

Finalmente, una vez configurada la importación, al darle click al botón **Comenzar la importación** en la parte superior, regresarás a la vista principal de importación, y el primer registro de la tabla será tu importación en proceso. Ahí podrás ver el avance de la misma, indicado en la columna de **Estado**.

Además, podrás completar una serie de campos personalizados que podrían ser requeridos. Estos se pueden configurar en [Campos Personalizados](/guides/customers/users.html#campos-personalizados), que se encuentran en la [sección Configuración de Customers](/guides/customers/users.html#configuracion-de-customers).


### Ficha de Usuarios

Al hacer _click_, desde el listado principal, en cada uno de los usuarios, se abrirá la ficha del usuario seleccionado. En ella podrás ver una barra lateral que incluye los siguientes datos:

- Avatar del usuario (Si es que se ha subido)
- Estado dentro de la plataforma: Si es que se encuentra activo o inactivo.
- Fecha de registro en la plataforma
- Último ingreso a la plataforma
- Cantidad de sesiones hechas en la plataforma
- Estado de verificación de usuario
- Targets en los que se encuentra incluído (si hay disponibles)

En la sección principal, podrás ver los siguientes separadores horizontales, que se describen a continuación:

- Actividad (dentro del sitio)
- Formularios (que han sido enviados por el usuario)
- Órdenes (compras)
- Credenciales
- Notas (por si se quiere tomar en cuenta algo especial de él)
- Editar (para cambiar datos personales del cliente)

#### Actividad

En esta sección podrás ver un registro de todas las acciones que el usuario ha realizado dentro de la plataforma.

Cabe notar que no se trata de un seguimiento a la navegación de un usuario dentro de la plataforma, sino que de las interacciones principales que este realiza dentro de la misma. Estos registros no puede ser borrados ni editados por administradores.

#### Formularios

Esta sección te muestra todos los formularios que ha rellenado el usuario dentro de la plataforma. Al hacer _click_ sobre alguno de ellos, te lleva a ver las respuestas del usuario en dicho formulario. Si quieres saber más al respecto de los formularios, entra a la sección [Formularios](/guides/customers/forms.html).

### Órdenes

En esta sección podrás ver todas las órdenes de compra y transacciones que ha realizado el usuario a través de la plataforma, si es que se encuentra habilitada una tienda eCommerce.

Si quieres saber más sobre cómo funciona la tienda, entra a la [sección Órdenes](/guides/commerce/orders.html).

### Credenciales

Aquí podrás ver todas las credenciales por las cuales se encuentra habilitado el usuario para ingresar a la plataforma.

Si el usuario ingresa solo a través de su username y password predeterminado de la plataforma, esta sección estará vacía. Caso contrario, si el usuario utiliza alguna integración como LDAP, o Google, dicha información se desplegará en este panel.

Si quieres habilitar los ingresos a través de integraciones, revisa la [sección Integraciones](/guides/platform/integration.html).

### Notas

En esta sección se pueden agregar notas personalizadas sobre los usuarios, sólo administradores pueden agregarlas, verlas y eliminarlas.

### Editar

Si es necesario añadir o cambiar datos del usuario, es posible hacerlo desde acá. El formulario es equivalente al mostrado en la creación de un usuario nuevo.

:::tip Tip
Al modificar un usuario, puede que cambie el listado de Targets a los que pertenece.
:::

Para más información, puedes ir a [Campos Personalizados](/guides/customers/users.html#campos-personalizados).


----

## Configuración de Customers

En esta sección puedes configurar en gran parte la interacción entre usuarios y la plataforma de Modyo. Algunas configuraciones son enfocadas en la experiencia visual para el usuario, como selección colores o plantillas de correos, mientras que otras son enfocadas al registro, control de acceso, y personalización de los mismos. En particular esta segunda parte es esencial para el correcto funcionamiento de la plataforma, por lo que es importante ser precavido al momento de modificar configuraciones en esta sección.

### General

Aquí puedes personalizar parte estética de la plataforma con la cual interacciona el usuario, en particular las vistas de inicio de sesión, registro de nuevo usuario y perfil, en general todo lo que tiene que ver con la sesión del mismo en la plataforma.

#### Color primario

El color primario es el que se muestra en los principales botones del manejo de la sesión, tales como el ingreso, registro, modificaciones de contraseña u otros atributos. Para modificarlo solo debes ingresar el Código HEX del color que quieras y hacer _click_ en el botón **Guardar** que se encuentra en la parte superior de la pantalla.

#### Mostrar el logo

Esta opción permite mostrar el logo configurado para la cuenta en las vistas de sesión, el cual se desplegará sobre los formularios respectivos de dichas vistas. Para cambiar el logo, debes acceder la [Interfaz de Modyo](/guides/platform/the-modyo-interface.html).

#### Personalizar con CSS

Si quieres tener un CSS personalizado que se ajuste a las necesidades en las vistas de sesión, solo debes pegar el código en el editor que se encuentra en la ventana y hacer _click_ en el botón **Guardar**.

Es común tener vinculados archivos en el código CSS. Si deseas agregar alguno, solo tienes en el botón que está sobre el editor, y que llevará al [Gestor de Archivos](/guides/content/asset-manager.html), que permitirá subir sin problemas algún archivo que necesites.

Sin embargo, el editor no subirá automáticamente el vínculo, sino que cuando lo subas, tienes que hacer _click_ en el botón de pegado, que se encuentra en la parte lateral de cada archivo y que dará el vínculo a este dentro de la página. Con esta dirección, puedes pegarla en el código CSS para poder usarla.

::: tip Tip
Si tienes problemas con los códigos de teclado cuando estés editando el CSS, puedes hacer _click_ en el ícono de teclado que se encuentra sobre el editor. Este desplegará una serie de atajos de botones que te permitirán manejar fácilmente la edición.
:::

### Correos

Modyo permite configurar la dirección de envío y apariencia de los correos que se enviarán a los usuarios.

Para ajustar la dirección que aparecerá como el remitente que enviará tu mail, solo debes ingresarla en el campo "Correo por defecto" y hacer _click_ en el botón **Guardar**.

Lo que permite esta sección es habilitar, deshabilitar y personalizar el envío de los correos automáticos tras interacciones específicas que realizan los usuarios, los correos son los que siguen:

- Correo de activación: Enviado una vez completado un registro de usuario, para que este confirme sus datos.
- Usuario importado: Enviado una vez que se importó el usuario
- Correo de bienvenida: Enviado una vez completado un registro de usuario en un sitio específico.
- Añadido por administrador: Enviado una vez que el administrador creó el usuario manualmente.
- Recuperación de contraseña: Enviado cuando el usuario solicitó recuperar su contraseña.
- Confirmación: Enviado una vez que se confirmó y activó el usuario.
- Esperando aprobación: Enviado una vez que se confirmó el usuario, pero debe esperar activación manual de parte de un administrador.
- Footer personalizado: Footer personalizado para todos los correos anteriormente descritos.

Para habilitar o deshabilitar el envío de estos correos, solo debes hacer _click_ en el botón **Habilitado/Deshabilitado** que se encuentra al costado de cada función y hacer _click_ en el botón **Guardar**.

#### Personalizar correos

Los estilos de los correos de la plataforma que envía también pueden ser personalizados. Para ello, debes tener el código HTML que quieres incluir en ellos.

Al hacer _click_ para habilitar cada uno de los correos, mostrará un editor por defecto en el cual puedes pegar el código.

::: danger Peligro
Es fundamental que cada correo incluya los códigos personalizables que permiten que la plataforma incluya la data aleatoria del usuario que solicita el envío.

Para ello, debes insertar en el código los atributos que se encuentran bajo el editor, y que puedes copiar y pegar fácilmente para ubicarlos en la parte que necesites.
:::

Cada vez que se haga un cambio en el código, se debe hacer _click_ en el botón **Guardar** que se encuentra en la parte superior de la pantalla.

### Integraciones

Para simplificar el ingreso a la plataforma, es posible configurar su entrada a través de las APIs de ciertos servicios que permiten entradas universales.

Los servicios compatibles con el ingreso a Modyo son:

- Facebook
- Google
- LDAP
- SAML
- Oauth2
- OpenID Connect

Es necesario tener la API logueada y configurada en los servicios para que se permita el uso. Asegúrate de que todos los campos requeridos estén completos. Para más información de las integraciones, dirígete a la [sección Integraciones de la plataforma](/guides/platform/integration.html)

### Registros

El registro de clientes dentro de la plataforma, también debe ser configurado desde este lugar. Para ello, debes tener en cuenta las credenciales y la habilitación de redirección en el inicio de sesión.

Lo primero que puedes configurar es si quieres habilitar o deshabilitar las credenciales de la plataforma.

::: warning Atención
Si deshabilitas las credenciales, los usuarios solo podrán ingresar a través de un mecanismo SSO. Asegúrate de tenerlo activado a través de [Integraciones](/guides/platform/integration.html)
:::

También puedes habilitar o deshabilitar una redirección para el inicio de sesión. Recuerda que si la redirección de inicio de sesión está habilitada, el modal de inicio de sesión será reemplazado por la URL que debes ingresar después.

Las búsquedas en la página de perfil también se pueden habilitar o deshabilitar. Si está habilitada, una caja de búsqueda aparecerá en la sección de perfil, esta búsqueda encuentra resultados en todos los sitios a los que puede acceder el usuario.

#### Activación de la cuenta

En esta sección puedes configurar la forma de control en el registro de clientes. Las alternativas son las que siguen:

- Directa (sin moderación ni confirmación por email)
- Email de activación
- Moderada (un administrador decide si aprueba el registro)
- Deshabilitada (Solo el administrador envía el registro)

::: danger Peligro
Recuerda que el registro directo de usuarios podría permitir que robots maliciosos se registren con correos personales que no les pertenecen en la plataforma. Recuerda el registro con verificación por correo electrónico para proteger las cuentas contra este riesgo potencial.
:::

#### Avatar

Si quieres que los usuarios tengan un Avatar, puedes subir uno que se muestre por defecto. En esta opción, puedes subir una imagen liviana que se mostrará de manera predeterminada en el sistema cuando el usuario ingrese, para que después pueda cambiarla.

#### Formulario de registro

Desde acá, también puedes configurar el formulario de registro que ingresan cada uno de los usuarios. Aquí puedes configurar los distintos campos que son imprescindibles y que quieres que aparezcan en el formulario, como son:

- Habilitar segundo apellido
- Segundo apellido es requerido
- Habilitar confirmación de correo electrónico
- Habilitar avatar
- Habilitar fecha de nacimiento
- Habilitar género

Para habilitar o deshabilitar alguno, solo debes hacer _click_ en el checkbox que se encuentra al costado de cada uno y hacer _click_ en el botón **Guardar**.

### Custom Fields

Desde aquí se pueden crear campos personalizados que ayuden a identificar el perfil del usuario. Por lo mismo, es indispensable que estos estén identificados de manera correcta para su mejor uso.

Los tipos de **Custom Fields** que puedes agregar son:

- Checkbox
- Fecha
- Dropdown (Lista desplegable)
- Párrafo
- Número
- Elección
- Texto simple

Puedes arrastrar los **Custom Fields** para ordenarlos. Ten en cuenta que este es el orden en el que aparecerán los campos en las vistas de edición y en el perfil de los usuarios.

Todos los **Custom Fields** tienen ciertas propiedades estándar:

- **Respuesta única**: Implica que el valor debe ser único para cada usuario, impidiendo que se guarde otro valor igual.
- **Requerido**: Implica que este valor debe ser rellenado cuando se modifica o crea un usuario, de tal forma que no se podrá modificar un usuario si este campo no tiene un valor asociado. En caso de que el campo además, sea visible y editable por los usuarios, este campos aparecerá en el formulario de registro y será requerido para crear nuevos usuarios.
- **Visible para usuarios**: Implica que será visible en la vista profile.
- **Editable por usuarios**: Implica que si es visible, además, el usuario podrá modificar su valor.
- **Buscable por administradores**: Implica que ese valor estará indexado y los usuarios podrán ser encontrados al ser buscados por el valor de ese campo.

Además de lo anterior, los **Custom Fields** pueden estar habilitados o deshabilitados. Si está habilitado, entonces se podrá usar por administradores y dependiendo de su configuración, estará disponible para los usuarios. Si un **Custom Field** se encuentra deshabilitado, entonces no aparecerá en ningún formulario, pero sus valores se mantendrán guardados.

::: danger Peligro
Cuando un **Custom Field** está deshabilitado, puede ser eliminado. Al eliminar un **Custom Field**, estarás eliminando para siempre todos los valores que los usuarios tenían para ese **Custom Field**.
:::

::: tip Tip
Aparte de poder guardar valores específicos en los usuarios, se pueden crear filtros de [Targets](/guides/customers/targets.html) usando los valores de los **Custom Fields**, permitiendo segmentar a los usuarios por valores personalizables.
:::