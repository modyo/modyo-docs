---
search: true
---

# Usuarios

Modyo te permite hacer un seguimiento detallado de lo que está pasando dentro de la plataforma, a través de la sección Usuarios. Acá podrás ver la lista de usuarios internos y externos que están actualmente dentro de la base de datos de la plataforma.

En este caso, vemos no solo a los integrantes de nuestro grupo de trabajo. También podemos ver la actividad que realizan nuestros usuarios externos que interactúan dentro de la plataforma, como pueden ser los clientes.

## Sobre la interfaz

A primera vista, podremos ver una tabla con los usuarios internos y externos que se encuentren registrados dentro de la plataforma. En este caso, solo podremos ver los primeros 30 registros para después pasar a las siguientes páginas. 

El administrador te permite ordenar los usuarios por cuatro columnas:
- Nombre: Nombre del usuario
- Fecha de registro: Fecha de inscripción en la base de datos de usuarios
- Ultimo ingreso: Fecha de último ingreso a la plataforma
- Sesiones: Cantidad de logins hechos dentro de la plataforma

En la parte superior de la tabla, encontrarás filtros que te permitirán encontrar un grupo de usuarios de mejor manera.

- Estado: Ver los usuarios activos e inactivos.
- Verificación: Ver los usuarios que tienen confirmados sus datos en la plataforma.
- Targets: Usuarios que se encuentran dentro de un determinado [Target](/guides/customers/targets.html)
- Filtros avanzados: Usuarios que tengan un dato o acción en específico dentro de la plataforma.

:::tip Tip
Si necesitas hacer un Target con cierto tipo de características de algún campo personalizado, puedes hacerlo a través de Filtros Avanzados. Al seleccionar los filtros, aparecerá automáticamente el número de coincidencias. 
En la parte inferior, este filtro combinado lo puedes separar para un Target haciendo un click en el botón "Guardar como Target". Deberás darle un título y una descripción y posteriormente lo podrás encontrar en la sección [Targets](/guides/customers/targets.html)
:::

### Añadir un usuario

Para agregar un nuevo contacto de usuario, se debe hacer click en el botón "+ Nuevo" en la parte superior de la pantalla.

Esta función te permite añadir de dos formas: haciéndolo individualmente o a través de un archivo \*.CSV, que nos permite importar íntegramente una base de datos.

Para añadir un usuario, la plataforma te pedirá completar los siguientes campos:

- Nombre: Nombre legal del usuario. **Requerido**
- Apellido: Apellido del usuario.
- Apellido materno: Apellido materno del usuario.
- Nombre del usuario: Nombre dentro de la plataforma **Requerido**
- Email: Correo electrónico del usuario **Requerido**
- Contraseña: Password para que el usuario ingrese a la plataforma. El password no puede tener menos de 8 caracteres. **Requerido**
- Confirmación de la contraseña: Repetición de la contraseña dada por el administrador.
- Tags: Etiquetas que sirvan para identificar al usuario.

:::tip Tip
Para enviar la contraseña al mail del usuario, solo es necesario asignar el checkbox que se encuentra bajo el campo email. Al guardar, se enviará un correo a la casilla con la contraseña al usuario, que podrá cambiar al ingresar a la plataforma.
:::

Además, podrás completar una serie de campos personalizados que podrían ser requeridos. Estos se pueden configurar en [Campos Personalizados](/guides/customers/users.html#campos-personalizados), que se encuentran en la sección [Configuración de Customers](/guides/customers/users.html#configuracion-de-customers).

### Ficha de Usuarios

Al hacer click en cada uno de los usuarios, podrás ver en el sidebar una minificha con datos que incluyen:

- Avatar del usuario (Si es que se ha subido)
- Estado dentro de la plataforma: Si es que se encuentra activo o inactivo.
- Fecha de registro en la plataforma
- Último ingreso a la plataforma
- Cantidad de sesiones hechas en la plataforma
- Estado de verificación de usuario
- Targets en los que se encuentra incluído

Además, podrás ver en una serie de botones a un costado que te redirigen a:

- Actividad (dentro del sitio)
- Formularios (que han sido enviados por el usuario)
- Órdenes (compras)
- Credenciales
- Notas (por si se quiere tomar en cuenta algo especial de él)
- Editar (para cambiar datos personales del cliente)

#### Actividad

En esta sección podrás ver un registro de todas las acciones de un usuario en específico que se han hecho dentro de la plataforma, desde que se inició. 

Este registro no implica un seguimiento a la navegación de un usuario dentro de la plataforma sino solo a las acciones que se hacen dentro de ella.

Este registro no puede ser borrado ni editado por administradores.

#### Formularios

Esta sección te muestra todos los formularios que ha rellenado el usuario dentro de la plataforma, a lo largo de todo el tiempo que ha estado registrado dentro de ella.

Cada uno de estos links te lleva a ver sus respuestas en específico. Si quieres saber más, entra a la sección [Formularios](/guides/customers/forms.html). 

### Órdenes

En esta sección podrás ver todas las órdenes y transacciones que ha realizado el usuario a través de la plataforma, si es que se encuentra habilitada una tienda eCommerce.

Si quieres saber más sobre cómo funciona la tienda, entra a la sección [Órdenes](/guides/commerce/orders.html).

### Credenciales

Aquí podrás ver todas las credenciales por las cuales se encuentra habilitado el usuario para ingresar a la plataforma. 

Si el usuario ingresa solo a través de su username y password predeterminado de la plataforma, esta sección estará vacía.

Si quieres habilitar los ingresos a través de integraciones, revisa la sección [Integraciones](/guides/platform/integration.html).

### Notas

En esta sección se pueden agregar notas personalizadas sobre los usuarios, que pueden servir para redefinir un usuario y agregar un dato que no se encuentre dentro de los campos personalizados.

### Editar

Si es necesario añadir o cambiar datos del usuario, es posible hacerlos desde acá. Además, esto sirve para redefinir un usuario que se encuentre dentro de un Target y añadir información a los campos personalizados.

Para más información, ir a [Campos Personalizados](/guides/customers/users.html#campos-personalizados).


----

## Configuración de Customers

En esta sección podemos configurar todo lo que tiene que ver con la apariencia de la plataforma hacia nuestros clientes, sus funciones y las acciones en que ellos pueden interactuar dentro de la web.

Por lo mismo, es esencial que esto sea verificado constantemente, para evitar problemas con los ingresos o transacciones que se realicen en línea.

### General

Aquí podremos personalizar la visión estética de la plataforma que tiene el usuario, empezando por los colores predeterminados. Además, se puede incluir una plantilla CSS que le dé un estilo único adaptado a la empresa o campaña que esté interactuando.

Para personalizar la sesión, primero tenemos que definir cuál va a ser nuestro color primario que regirá dentro de nuestra plataforma. Para esto solo debemos ingresar el Código HEX del color que queremos y hacer click en el botón "Guardar" que se encuentra en la parte superior de la pantalla.

#### Personalizar con CSS

Si se quiere tener un CSS personalizado que se ajuste a nuestras necesidades en el perfil, inicio de sesión y registro, solo debemos pegar el código en el editor que se encuentra en la ventana y hacer click en el botón "Guardar".

Es común tener vinculados archivos en el código CSS. Si queremos agregar alguno, solo tenemos en el botón que está sobre el editor, y que nos llevará al [Gestor de Archivos](/guides/content/asset-manager.html), que nos permitirá subir sin problemas algún archivo que necesitemos.

Sin embargo, el editor no subirá automáticamente el vínculo, sino que cuando lo subamos, tendremos que hacer click en el botón de pegado, que se encuentra en la parte lateral de cada archivo y que nos dará el vínculo a este dentro de la página. Con esta dirección, podemos pegarla en nuestro código CSS para poder usarla.

::: tip Tip
Si tienes problemas con los códigos de teclado cuando estés editando el CSS, puedes hacer click en el ícono de teclado que se encuentra sobre el editor. Este desplegará una serie de atajos de botones que te permitirán manejar fácilmente la edición.
:::

### Correos

Modyo permite configurar la dirección y la apariencia de los correos que se enviarán a los usuarios. 

Para ajustar la dirección que aparecerá como el remitente que enviará tu mail, solo debes ingresarla en el campo "Correo por defecto" y hacer click en el botón "Guardar".

Lo que necesitaremos en nuestra plataforma es habilitar y deshabilitar el envío de correos para funciones en específico que solicitan los usuarios, y que no dependen de los correos en masa, tales como son:

- Correo de activación
- Usuario importado
- Correo de bienvenida
- Añadido por admin
- Recuperación de contraseña
- Confirmación
- Esperando aprobación
- Footer personalizado

Para habilitar o deshabilitar el envío de estos correos, solo debemos hacer click en el botón "Habilitado/Deshabilitado" que se encuentra al costado de cada función y hacer click en el botón "Guardar".

#### Personalizar correos 

Los estilos de los correos de la plataforma que enviamos también pueden ser personalizados. Para ello, debemos tener el código HTML que queremos incluir en ellos. 

Al hacer click para habilitar cada uno de los correos, mostrará un editor por defecto en el cual podemos pegar nuestro código.

::: danger Peligro
Es fundamental que cada correo incluya los códigos personalizables que permiten que la plataforma incluya la data aleatoria del usuario que solicita el envío.

Para ello, debemos insertar en el código los atributos que se encuentran bajo el editor, y que podemos copiar y pegar fácilmente para ubicarlos en la parte que necesitemos.
:::

Cada vez que se haga un cambio en el código, se debe hacer click en el botón "Guardar" que se encuentra en la parte superior de la pantalla.

### Integraciones

Para simplificar el ingreso a la plataforma, es posible configurar su entrada a través de las APIs de ciertos servicios que permiten entradas universales.

Los servicios compatibles con el ingreso a Modyo son:

- Facebook
- Google
- LDAP
- SAML
- Oauth2
- OpenID Connect

Es necesario tener la API logueada y configurada en los servicios para que se permita el uso. Asegúrate de que todos los campos requeridos estén completos. Para más información de las integraciones, dirígete a la sección [Integraciones de la plataforma](/guides/platform/integration.html)

### Registros

El registro de clientes dentro de la plataforma, también debe ser configurado desde este lugar. Para ello, debemos tener en cuenta las credenciales y la habilitación de redirección, en el inicio de sesión.

Lo primero que podemos regular es si queremos habilitar o deshabilitar las credenciales de la plataforma. 

::: warning Atención
Si deshabilitamos las credenciales, los usuarios solo podrán ingresar a través de un mecanismo SSO. Asegúrate de tenerlo activado a través de [Integraciones](/guides/platform/integration.html)
:::

También podemos habilitar o deshabilitar una redirección para el inicio de sesión. Recuerda que si la redirección de inicio de sesión está habilitada, el modal de inicio de sesión será reemplazado por la URL que debes ingresar después.

Las búsquedas en la página de perfil también se pueden habilitar o deshabilitar, si es que algún usuario necesita buscar algún dato. Si está habilitada, una caja de búsqueda aparecerá en la sección de perfil. Esta búsqueda encuentra resultados en todos los sitios que tenemos.

#### Activación de la cuenta

Además, se puede regular la forma de registro de clientes, ya sea a través de estos servicios:

- Directa (sin moderación ni confirmación por email)
- Email de activación
- Moderada (un administrador decide si aprueba el registro)
- Deshabilitada (Solo el administrador envía el registro)

::: danger Peligro
Recuerda que el registro directo de usuarios podría permitir que robots maliciosos se registren en tu sitio. Te recomendamos el registro con verificación por correo electrónico para proteger tu cuenta contra este riesgo potencial.
:::

#### Avatar

Si queremos que nuestros usuarios tengan un Avatar, tenemos que subir uno que se muestre por defecto. En esta opción, podemos subir una imagen liviana que se mostrará de manera predeterminada en el sistema cuando el usuario ingrese, para que después pueda cambiarla.

#### Formulario de registro

Desde acá, también podemos configurar el formulario de registro que ingresan cada uno de nuestros usuarios. Aquí podemos configurar los distintos campos que son imprescindibles y que queremos que aparezcan en nuestro formulario, como son:

- Habilitar segundo apellido
- Segundo apellido es requerido
- Habilitar confirmación de correo electrónico
- Signup avatar enabled
- Habilitar fecha de nacimiento
- Habilitar género

Para habilitar o deshabilitar alguno, solo debemos hacer click en el checkbox que se encuentra al costado de cada uno y hacer click en el botón "Guardar".

### Campos personalizados

Desde aquí se pueden crear campos personalizados que ayuden a identificar el perfil del usuario. Por lo mismo, es indispensable que estos estén identificados de manera correcta para su mejor uso.

Los tipos de campos personalizados que puedes agregar son:

- Checkbox
- Fecha
- Dropdown (Lista desplegable)
- Párrafo
- Número
- Elección
- Texto simple

Puedes arrastrar los campos personalizados para ordenarlos. Ten en cuenta que este es el orden en el que aparecerán los campos en las vistas de edición y en el perfil de los usuarios. 

Todos los campos personalizados tienen ciertas propiedades estándar:

- **Respuesta única**: Implica que el valor del custom field debe ser único para cada usuario, impidiendo que se guarde otro valor igual.
- **Requerido**: Implica que este valor debe ser rellenado cuando se modifica o crea un usuario, de tal forma que no se podrá modificar un usuario si este campo no tiene un valor asociado. En caso de que el campo además, sea visible y editable por los usuarios, este campos aparecerá en el formulario de registro y será requerido para crear nuevos usuarios.
- **Visible para usuarios**: Implica que el custom field será visible en la vista profile.
- **Editable por usuarios**: Implica que si es visible, además, el usuario podrá modificar el valor del custom field.
- **Buscable por admins**: Implica que ese valor estará indexado y los usuarios podrán ser encontrados al buscar usuarios por el valor de ese campo.

Además de lo anterior, los campos personalizados pueden estar habilitados o deshabilitados. Si un campo personalizado está habilitado, entonces se podrá usar por admins y dependiendo de su configuración, estará disponible para los usuarios. Si un custom field está deshabilitado, entonces no aparecerá en ningún formulario.

:::tip Tip
Al deshabilitar un campo personalizado, este dejará de aparecer de todos los formularios de edición de usuario, registro y perfil, sin embargo, los datos que estaban guardados para los usuarios que ya tenían un valor, se mantendrán guardados.
:::

::: danger Peligro
Cuando un campo personalizado está deshabilitado, puede ser eliminado. Al eliminar un campo personalizado, estarás eliminando todos los valores que los usuarios tenían para ese campo personalizado.
:::

Aparte de poder guardar valores específicos en los usuarios, se pueden crear filtros de [Targets](/guides/customers/targets.html) usando los valores de los campos personalizados, permitiendo segmentar a los usuarios por valores no estándares de Modyo.