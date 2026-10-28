---
search: true
---
# Reinos

En Modyo, los **reinos** agrupan a usuarios con características similares y comparten una configuración común. Son especialmente útiles para gestionar múltiples grupos de sitios independientes o para crear un entorno de pruebas sin afectar a los usuarios activos.

Cada reino tiene configuraciones específicas para inicio de sesión, registro, integraciones, formularios, segmentos y mensajería.

:::tip Tip
Los cambios realizados en un reino afectarán únicamente a los usuarios de ese reino y no a los de otros.
:::

## Crear un Reino

Para crear un reino, sigue estos pasos:

1. En el menú lateral, haz click en **Customers**.
2. Haz click en **Reinos**.
3. Haz click en el botón **Nuevo reino**.
4. Escribe el **Nombre** del reino.
5. Revisa el **Identificador** que la plataforma propone a partir del nombre y ajústalo si lo necesitas.
6. Haz click en **Crear**.

El **Identificador** forma parte de la ruta en la que se autentican los usuarios del reino: es el valor que aparece en las URL de las vistas de perfil, inicio de sesión, registro y recuperación de contraseña. Conoce el listado completo en [Rutas del reino](/es/platform/customers/profile.html#rutas-del-reino).

Al crear el reino quedas registrado como **Realm Admin** de ese reino y la plataforma te lleva a su **Resumen**.

:::tip Tip
Necesitas un rol con el permiso **Crear Reinos** para ver el botón **Nuevo reino**.
:::

:::warning Atención
Puedes cambiar el **Identificador** más adelante desde la [Configuración de reino](/es/platform/customers/settings.html#general), pero eso cambia todas las URL del reino, incluidas las de inicio y cierre de sesión, y deja sin efecto los enlaces que ya tengas publicados en tus sitios.
:::

## Resumen

La sección **Resumen** proporciona una visión general de los elementos clave del reino, que incluyen:

- **Usuarios registrados**: Cantidad total de usuarios registrados en el reino.
- **Segmentos**: Número de segmentos creados.
- **Formularios**: Todos los formularios activos del reino.
- **Campañas activas**: Todas las campañas de comunicación en curso.

También encontrarás un registro cronológico de todas las actividades realizadas dentro del reino, lo que facilita el monitoreo y análisis de las interacciones.


En esta sección, también encontrarás información relevante, como las configuraciones principales del reino, los sitios donde se utiliza, los proveedores de identidad integrados y sus identificadores correspondientes.

Si el reino tiene [stages](#stages) y tienes el permiso **Ver Sincronizaciones**, la columna lateral muestra además el bloque **Etapa**, con el nombre del stage en el que estás y el botón para [sincronizarlo](#sincronizar-un-stage).

Este resumen te permite administrar eficientemente cada reino y entender cómo se conecta con los usuarios y otros elementos clave de la plataforma.

## Stages

Los stages te permiten probar cambios en la configuración de un reino sin afectar a sus usuarios. Por ejemplo, puedes configurar un proveedor de identidad de prueba, ajustar un formulario o cambiar una originación en un stage y, cuando el cambio esté listo, llevarlo al reino principal.

Funcionan como los [stages de las aplicaciones web](/es/platform/channels/sites.html#stages): creas un stage a partir de otro, trabajas en él de forma aislada y, cuando quieras, sincronizas los cambios eligiendo qué elementos llevar.

Cada stage se comporta como un reino más, con su propio nombre e identificador:

- Aparece en el listado de **Reinos** y puedes elegirlo como reino de una aplicación web o de un espacio.
- Tiene sus propias [rutas](/es/platform/customers/profile.html#rutas-del-reino) de inicio de sesión, registro y perfil, y la API pública y la API de administración lo identifican igual que a un reino.
- Tiene sus propios usuarios. Un usuario que se registra en un stage no existe en los demás.

El reino original es el stage `main`, y ningún otro stage puede llamarse así.

:::warning Atención
- Un reino puede tener hasta cuatro stages en total, contando `main`. Los stages cuyo clonado falló o que se están eliminando no cuentan para el límite.
- Los cambios que hagas en un stage solo se reflejan en ese stage hasta que los sincronices. La sincronización nunca es automática.
- Los usuarios y todo lo que generan (respuestas de formularios y de originaciones, eventos, envíos de campañas, órdenes y valores de custom fields) pertenecen a cada stage y nunca se copian ni se sincronizan.
- Como el identificador del stage es distinto al del reino, también cambian las URL de callback de sus [proveedores de identidad](/es/platform/customers/settings.html#proveedores-de-identidad). Regístralas en el proveedor antes de probar el inicio de sesión en el stage.
:::

### Crear un stage

Para crear un stage, sigue estos pasos:

1. En el menú lateral, haz click en **Customers** y selecciona el reino.
2. Haz click en **Configuración de reino** > **Stages**.
3. Haz click en **Nuevo Stage**.
4. En **Stage de origen**, elige el stage desde el que se copia la configuración. Por defecto es el stage en el que estás.
5. Escribe el **Nombre** del stage.
6. Haz click en **Crear**.

El stage se crea en segundo plano y puedes seguir trabajando mientras tanto. Mientras se copia la configuración, el listado lo muestra con la etiqueta **Clonando**, y todavía no puedes entrar a él ni elegirlo como reino de una aplicación web o de un espacio. Cuando termina, la etiqueta desaparece y el stage queda disponible.

El nombre y el identificador del stage se forman a partir del nombre que escribiste y de los del reino principal. Por ejemplo, un stage `qa` del reino **Clientes**, cuyo identificador es `clientes`, se llama **qa Clientes** y su identificador es `qa-clientes`. Si otro reino de la cuenta ya usa ese nombre o ese identificador, la plataforma agrega un número al final.

El listado de **Stages** muestra el **Nombre** de cada stage, su **Stage original**, que es el stage desde el que se creó, y la fecha en que se creó (**Creado el**).

:::warning Atención
La plataforma no permite crear el stage cuando el stage de origen tiene:

- Originaciones con cambios sin publicar, que nunca se publicaron o que están despublicadas. Publícalas o archívalas antes de crear el stage.
- Formularios con preguntas de grupo, que los stages todavía no admiten.

El modal lo indica antes de que intentes crearlo, con el aviso **Antes de crear un stage resuelve lo siguiente en el stage de origen**, y deshabilita el botón **Crear**.
:::

Si el clonado falla, el stage queda en el listado con la etiqueta **Falló** y dos acciones:

- **Reintentar**: descarta el stage fallido y vuelve a crearlo con el mismo nombre, desde el mismo stage de origen.
- **Borrar**: lo elimina.

Un clonado que deja de avanzar también queda marcado como **Falló** después de un tiempo. Un stage nunca queda disponible con la configuración copiada a medias.

::: tip Tip
El modal de creación te recuerda que el stage nuevo no tiene proveedores de identidad, integraciones, clientes OAuth ni webhooks. Configúralos en el stage antes de probar el inicio de sesión, los envíos que dependen de una integración o los eventos hacia sistemas externos.
:::

### Qué se copia a un stage

Al crear un stage se copia la configuración que tiene el stage de origen en ese momento:

- La configuración del reino: la de la sección [General](/es/platform/customers/settings.html#general), los correos, la [política de contraseña](/es/platform/customers/settings.html#politica-de-contrasena), los headers de seguridad, CORS y la apariencia (logo, favicon e imagen de avatar por defecto).
- Los [custom fields](/es/platform/customers/settings.html#custom-fields) y sus opciones.
- Los [data sets](/es/platform/customers/settings.html#data-sets) y sus alternativas.
- Los [formularios](/es/platform/customers/forms.html), sin la web app asignada. Asígnala en el stage: mientras no la tenga, el listado de formularios muestra junto al nombre un ícono con el aviso **Este formulario no tiene una web app asignada**.
- Las [plantillas](/es/platform/customers/messaging.html#plantillas) de correo.
- Las [campañas](/es/platform/customers/messaging.html#campanas), solo con su contenido y su segmentación. Llegan en estado **Inactiva**, sin programación ni estadísticas de envío.
- Las [originaciones](/es/platform/customers/origination.html), solo en su versión publicada.
- Los [segmentos](/es/platform/customers/segments.html), con sus asociaciones a formularios, originaciones y campañas.
- Los [miembros del equipo](/es/platform/customers/settings.html#miembros-del-equipo), con sus roles y sus restricciones por segmento. A partir de ahí, el equipo de cada stage es independiente: agregar o quitar un miembro en un stage no cambia los demás.

No se copian:

- Los proveedores de identidad, las integraciones, los clientes OAuth ni los webhooks, porque guardan credenciales o apuntan a sistemas externos.
- La biblioteca de archivos del reino. Solo se copian el logo, el favicon y la imagen de avatar por defecto. Las campañas y plantillas que usan imágenes de la biblioteca siguen apuntando a los archivos del stage de origen.
- Los [dominios](/es/platform/customers/settings.html#dominios) personalizados.
- Los usuarios y sus datos.

Como el stage nace sin proveedores de identidad ni integraciones, la plataforma también deja desactivadas estas opciones:

- El inicio de sesión directo con un proveedor de identidad.
- El envío del OTP por teléfono: el **Canal de envío del OTP** queda solo en **Email**.
- Las redirecciones al iniciar sesión: **Después de iniciar sesión, redirigir a** queda vacío, **Forzar la redirección a** queda desactivado y **Cuando se requiere iniciar sesión, redirigir a** apunta a la **Página de inicio de sesión**.
- El captcha.
- **Deshabilitar credenciales de la plataforma**.

### Cambiar de stage

Cuando el reino tiene stages, el selector de reino del menú lateral muestra, debajo del nombre del reino, el stage en el que estás. Al abrirlo, la parte superior lista los stages de ese reino para que cambies entre ellos, y en el listado de reinos, los que tienen stages se despliegan para que elijas uno.

Solo ves los stages en los que eres miembro del equipo, salvo que seas el dueño de la cuenta o tengas el permiso **Gestionar Clientes**. Los stages que se están clonando o cuyo clonado falló no aparecen en el selector, ni en los selectores de reino de las aplicaciones web, los espacios e Insights.

### Sincronizar un stage

La sincronización lleva cambios desde otro stage del mismo reino hacia el stage en el que estás, así que siempre la inicias desde el stage que quieres actualizar:

1. En el selector de reino, entra al stage de destino.
2. En el **Resumen**, en el bloque **Etapa**, haz click en **Sincronizar**.
3. En **Selecciona un stage**, elige el stage de origen.
4. Revisa los elementos con diferencias. Haz click en un elemento para ver sus diferencias campo por campo.
5. Marca las casillas de los elementos que quieres sincronizar.
6. Haz click en **Sincronizar**.

La vista agrupa los elementos en **Configuración**, **Data sets**, **Custom fields**, **Formularios**, **Plantillas de correo**, **Segmentos**, **Campañas** y **Originaciones**. Solo lista los elementos del origen que no existen en el destino, marcados con la etiqueta **Nuevo**, o que cambiaron respecto del destino.

La sincronización corre en segundo plano. Mientras dura, el botón muestra **Sincronizando…**, y al terminar un mensaje indica cuántos elementos se sincronizaron y, para cada elemento que falló, el motivo. Los elementos que se sincronizaron no se revierten aunque otros fallen.

Ten en cuenta estas reglas:

- Cada elemento se actualiza en su lugar en el destino y conserva su identidad, así que las referencias que otros elementos tienen hacia él siguen funcionando.
- Un elemento que eliminaste en el origen no aparece en la vista y no se elimina en el destino. En cambio, si dentro de un elemento quitaste una parte, como una pregunta de un formulario o una opción de un custom field, la sincronización también la quita en el destino, salvo que esté en uso, por ejemplo en un segmento.
- **Configuración**: incluye lo mismo que se copia al crear el stage. Las opciones que se desactivan al crearlo (inicio de sesión directo, canal del OTP, redirecciones al iniciar sesión, captcha y credenciales de la plataforma) no se sincronizan: cada stage conserva las suyas.
- **Originaciones**: se sincroniza la versión publicada del origen, que llega al destino como cambios pendientes de publicar, igual que las páginas en las aplicaciones web. Publícala en el destino para que tome efecto. Si la originación tenía cambios sin publicar en el destino, la sincronización los reemplaza.
- **Formularios**: conservan la web app que tienen asignada en el destino, y un formulario nuevo llega sin web app. Si cambiaste el identificador del formulario en el origen, al sincronizarlo también cambia su URL pública en el destino. Los formularios con preguntas de grupo no se pueden sincronizar.
- **Campañas**: se sincronizan su contenido y su segmentación. Una campaña nueva llega en estado **Inactiva**. Una campaña que ya existía en el destino conserva su estado, sus fechas y sus estadísticas, y no se sincroniza si en el destino está **Pendiente**, **Enviando** o **Completada**.
- **Segmentos**: al sincronizar un formulario, una originación o una campaña, sus asociaciones apuntan a los segmentos equivalentes del destino.
- Si un elemento depende de otro que no existe en el destino, por ejemplo un segmento que filtra por un custom field que el destino no tiene, ese elemento no se sincroniza y el mensaje indica qué falta. Los demás elementos seleccionados se sincronizan igual. Si incluyes la dependencia en la misma sincronización, la plataforma la sincroniza primero.
- Los proveedores de identidad, las integraciones, los clientes OAuth, los webhooks, las credenciales del captcha y los miembros del equipo nunca se sincronizan.
- Solo puede correr una sincronización a la vez hacia un mismo stage.

Si el stage de destino tiene originaciones con cambios sin publicar, el bloque **Etapa** muestra un ícono de advertencia con el aviso "Tienes que publicar todos los cambios antes de sincronizar" y, al hacer click en **Sincronizar**, la plataforma te pide confirmar.

::: tip Tip
Al terminar, la plataforma vuelve a calcular en segundo plano los segmentos sincronizados y los que filtran por los formularios o custom fields sincronizados, así que sus usuarios pueden tardar unos minutos en actualizarse.
:::

### Eliminar un stage

Para eliminar un stage, sigue estos pasos:

1. En el selector de reino, entra al stage que quieres eliminar.
2. Haz click en **Configuración de reino** > **General**.
3. Haz click en **Eliminar stage**.
4. Escribe en **Nombre del stage** el nombre del stage, por ejemplo `qa`, no el nombre completo que muestra el listado de reinos.
5. Haz click en **Borrar**.

Un stage cuyo clonado falló también se puede eliminar desde el listado de **Stages**, con la acción **Borrar**.

La eliminación corre en segundo plano y no afecta a los demás stages del reino. Borra los usuarios del stage y todo su contenido, incluidos sus proveedores de identidad, integraciones, clientes OAuth y webhooks. El nombre y el identificador del stage quedan libres de inmediato para usarlos en un stage nuevo.

:::warning Atención
No puedes eliminar un stage mientras alguna aplicación web o espacio lo tenga seleccionado como reino: la plataforma lo indica con el nombre de cada uno. Tampoco mientras se está clonando un stage creado a partir de él.
:::

### Permisos de los stages

- **Administrar Stages**: muestra la sección **Stages** y permite crear stages y reintentar los que fallaron. Para crear un stage necesitas este permiso en el stage de origen. Lo incluye **Administrar Configuración de Reino**.
- **Ver Sincronizaciones**: muestra el bloque **Etapa** del **Resumen** y la vista de sincronización, en la que puedes revisar las diferencias. El botón de ese bloque aparece como **Sincronizar (solo lectura)**. En la vista solo aparecen como origen los stages en los que también tienes este permiso.
- **Administrar Sincronizaciones**: permite sincronizar e incluye **Ver Sincronizaciones**.
- Para eliminar un stage necesitas el permiso **Administración General** en ese stage, el mismo con el que se elimina un reino.

Los roles predeterminados **Realm Admin** y **Realm Viewer** incluyen estos permisos en las cuentas creadas a partir de la versión 10.2.2. En las cuentas anteriores, los roles que tienen **Administrar Configuración de Reino** reciben **Administrar Stages**, pero **Ver Sincronizaciones** y **Administrar Sincronizaciones** hay que agregarlos a mano en **Configuración** > [Roles](/es/platform/core/roles.html).

## Eliminar un Reino

Para eliminar un reino, entra a su [Configuración de reino](/es/platform/customers/settings.html#general) y usa el botón **Eliminar reino** de la sección **General**. Para confirmar tienes que escribir el nombre completo del reino, tal como aparece en el listado: si el texto no coincide exactamente, la plataforma no ejecuta la acción.

El botón solo aparece si tienes el permiso **Administración General** en el reino.

La eliminación corre en segundo plano, así que es posible que el reino siga apareciendo en el listado un rato después de confirmarla.

No puedes eliminar el reino mientras alguna aplicación web o espacio lo tenga seleccionado, a él o a alguno de sus [stages](#stages): la plataforma lo indica con el nombre de cada uno. Cambia antes el reino de esas aplicaciones y espacios. Tampoco puedes eliminarlo mientras se está clonando o eliminando alguno de sus stages.

:::danger Peligro
Eliminar un reino borra toda su información: usuarios, formularios, campañas de mensajes y segmentos. Si el reino tiene stages, también los elimina a todos, y el modal de confirmación indica cuáles. Esta acción es irreversible.
:::