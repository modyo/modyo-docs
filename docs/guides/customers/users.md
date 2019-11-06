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

:::tip
Si necesitas hacer un Target con cierto tipo de características de algún campo personalizado, puedes hacerlo a través de Filtros Avanzados. Al seleccionar los filtros, aparecerá automáticamente el número de coincidencias. 
En la parte inferior, este filtro combinado lo puedes separar para un Target haciendo un click en el botón "Guardar como Target". Deberás darle un título y una descripción y posteriormente lo podrás encontrar en la sección [Targets](/guides/customers/targets.html)
:::

### Añadir un usuario

Para agregar un nuevo contacto de usuario, se debe hacer click en el boton "+ Nuevo" en la parte superior de la pantalla.

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

:::tip
Para enviar la contraseña al mail del usuario, solo es necesario asignar el checkbox que se encuentra bajo el campo email. Al guardar, se enviará un correo a la casilla con la contraseña al usuario, que podrá cambiar al ingresar a la plataforma.
:::

Además, podrás completar una serie de campos personalizados que podrián ser requeridos. Estos se pueden configurar en [Campos Personalizados](/guides/customers/users.html#campos-personalizados), que se encuentran en la sección [Configuración de Customers](/guides/customers/users.html#configuracion-de-customers).

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





----

## Configuración de Customers

En esta sección podemos configurar todo lo que tiene que ver con la apariencia de la plataforma hacia nuestros clientes, sus funciones y las acciones en que ellos pueden interactuar dentro de la web.

Por lo mismo, es escencial que esto sea verificado constantemente, para evitar problemas con los ingresos o transacciones que se realicen en línea.

### General

Aquí podremos personalizar la visión estética de la plataforma que tiene el usuario, empezando por los colores predeterminados. Además, se puede incluir una plantilla CSS que le dé un estilo único adaptado a la empresa o campaña que esté interactuando.

### Correos

Modyo permite configurar la apariencia de los correos que se enviarán a los usuarios. Para ello, podemos ingresar a esta función para detallar ciertos requisitos que se necesitan para enviar un mail, como la dirección por defecto.

Otros correos que se pueden habilitar y modificar desde la plataforma son:

- Correo de activación
- Usuario importado
- Correo de bienvenida
- Añadido por admin
- Recuperación de contraseña
- Confirmación
- Esperando aprobación
- Footer personalizado

### Integraciones

Para simplificar el ingreso a la plataforma, es posible configurar su entrada a través de las APIs de ciertos servicios que permiten entradas universales.

Los servicios compatibles con el ingreso a Modyo son:

- Facebook
- Google
- LDAP
- SAML
- Oauth2
- OpenID Connect

Es necesario tener la API logueada y configurada en los servicios para que se permita el uso. Asegúrate de que todos los campos requeridos estén completos.

### Registros

El registro de clientes dentro de la plataforma, también debe ser configurado desde este lugar. Para ello, debemos tener en cuenta las credenciales y la habilitación de redirección, en el inicio de sesión.

Además, se puede regular la forma de registro de clientes, ya sea a través de estos servicios:

- Directa (sin moderación ni confirmación por email)
- Email de activación
- Moderada (un administrador decide si aprueba el registro)
- Deshabilitada (Solo el administrador envía el registro)

Recuerda que el registro directo de usuarios podría permitir que robots maliciosos se registren en tu sitio. Te recomendamos el registro con verificación por correo electrónico para proteger tu cuenta contra este riesgo potencial.

También es posible configurar el avatar por defecto y las condiciones del formulario de registro, para que este sea lo más completo posible.

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

Todos los campos personalziados tienen ciertas propiedades estándar:

- **Respuesta única**: Implica que el valor del custom field debe ser único para cada usuario, impidiendo que se guarde otro valor igual.
- **Requerido**: Implica que este valor debe ser rellenado cuando se modifica o crea un usuario, de tal forma que no se podrá modificar un usuario si este campo no tiene un valor asociado. En caso de que el campo además, sea visible y editable por los usuarios, este campos aparecerá en el formulario de registro y será requerido para crear nuevos usuarios.
- **Visible para usuarios**: Implica que el custom field será visible en la vista profile.
- **Editable por usuarios**: Implica que si es visible, además, el usuario podrá modificar el valor del custom field.
- **Buscable por admins**: Implica que ese valor estará indexado y los usuarios podrán ser encontrados al buscar usuarios por el valor de ese campo.

Además de lo anterior, los campos personalizados pueden estar habilitados o deshabilitados. Si un campo personalizado está hablitado, entonces se podrá usar por admins y dependiendo de su configuración, estará disponible para los usuarios. Si un custom field está deshabilitado, entonces no aparecerá en ningún formulario.

:::tip
Al deshabilitar un campo personalizado, este dejará de aparecer de todos los formularios de edición de usuario, registro y perfil, sin embargo, los datos que estaban guardados para los usuarios que ya tenian un valor, se mantendrán guardados.
:::

:::danger
Cuando un campo personalizado está deshabilitado, puede ser eliminado. Al eliminar un campo personalizado, estarás eliminando todos los valores que los usuarios tenían para ese campo personalizado.
:::

Aparte de poder guardar valores específicos en los usuarios, se pueden crear filtros de [Targets](/guides/customers/targets.html) usando los valores de los campos personalizados, permitiendo segmentar a los usuarios por valores no estándares de Modyo.