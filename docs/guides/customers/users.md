---
search: true
---

# Usuarios

Acá podrás ver la lista de usuarios externos y clientes que están actualmente en la plataforma, pudiendo ser filtrados como Activos e Inactivos.

Además, podemos saber si están verificados como tales o solamente tenemos sus datos sin confirmación.

Para agregar un nuevo contacto, se debe hacer clic en el boton "Nuevo" en la parte superior de la pantalla.

Esta función te permite añadir de dos formas: haciendolo individualmente o a través de un archivo \*.CSV, que nos permite importar íntegramente una base de datos.

Al hacer clic en cada uno de los usuarios, podrás ver una ficha con sus datos que incluyen:

- Actividad (dentro del sitio)
- Formularios (que han sido enviados por el usuario)
- Órdenes (compras)
- Credenciales
- Notas (por si se quiere tomar en cuenta algo especial de él)
- Edit (para cambiar datos personales del cliente)

## Configuración de usuarios

En esta sección podemos configurar todo lo que tiene que ver con la apariencia de la plataforma hacia nuestros clientes, sus funciones y las acciones en que ellos pueden interactuar dentro de la web.

Por lo mismo, es escencial que esto sea verificado constantemente, para evitar problemas con los ingresos o transacciones que se realicen en línea.

## General

Aquí podremos personalizar la visión estética de la plataforma que tiene el usuario, empezando por los colores predeterminados. Además, se puede incluir una plantilla CSS que le dé un estilo único adaptado a la empresa o campaña que esté interactuando.

## Correos

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

## Integraciones

Para simplificar el ingreso a la plataforma, es posible configurar su entrada a través de las APIs de ciertos servicios que permiten entradas universales.

Los servicios compatibles con el ingreso a Modyo son:

- Facebook
- Google
- LDAP
- SAML
- Oauth2
- OpenID Connect

Es necesario tener la API logueada y configurada en los servicios para que se permita el uso. Asegúrate de que todos los campos requeridos estén completos.

## Registros

El registro de clientes dentro de la plataforma, también debe ser configurado desde este lugar. Para ello, debemos tener en cuenta las credenciales y la habilitación de redirección, en el inicio de sesión.

Además, se puede regular la forma de registro de clientes, ya sea a través de estos servicios:

- Directa (sin moderación ni confirmación por email)
- Email de activación
- Moderada (un administrador decide si aprueba el registro)
- Deshabilitada (Solo el administrador envía el registro)

Recuerda que el registro directo de usuarios podría permitir que robots maliciosos se registren en tu sitio. Te recomendamos el registro con verificación por correo electrónico para proteger tu cuenta contra este riesgo potencial.

También es posible configurar el avatar por defecto y las condiciones del formulario de registro, para que este sea lo más completo posible.

## Campos personalizados

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

- *Respuesta única*: Implica que el valor del custom field debe ser único para cada usuario, impidiendo que se guarde otro valor igual.
- *Requerido*: Implica que este valor debe ser rellenado cuando se modifica o crea un usuario, de tal forma que no se podrá modificar un usuario si este campo no tiene un valor asociado. En caso de que el campo además, sea visible y editable por los usuarios, este campos aparecerá en el formulario de registro y será requerido para crear nuevos usuarios.
- *Visible para usuarios*: Implica que el custom field será visible en la vista profile.
- *Editable por usuarios*: Implica que si es visible, además, el usuario podrá modificar el valor del custom field.
- *Buscable por admins*: Implica que ese valor estará indexado y los usuarios podrán ser encontrados al buscar usuarios por el valor de ese campo.

Además de lo anterior, los campos personalizados pueden estar habilitados o deshabilitados. Si un campo personalizado está hablitado, entonces se podrá usar por admins y dependiendo de su configuración, estará disponible para los usuarios. Si un custom field está deshabilitado, entonces no aparecerá en ningún formulario.

:::tip
Al deshabilitar un campo personalizado, este dejará de aparecer de todos los formularios de edición de usuario, registro y perfil, sin embargo, los datos que estaban guardados para los usuarios que ya tenian un valor, se mantendrán guardados.
:::

:::danger
Cuando un campo personalizado está deshabilitado, puede ser eliminado. Al eliminar un campo personalizado, estarás eliminando todos los valores que los usuarios tenían para ese campo personalizado.
:::

Aparte de poder guardar valores específicos en los usuarios, se pueden crear filtros de [Targets](/guides/customers/targets.html) usando los valores de los campos personalizados, permitiendo segmentar a los usuarios por valores no estándares de Modyo.