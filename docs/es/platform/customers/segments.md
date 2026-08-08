---
search: true
---

# Segmentos

La funcionalidad de **Segmentos** en Modyo es ideal para manejar usuarios en masa y asegurarte de que reciban información específica. Los segmentos agrupan a los usuarios finales mediante filtros anidados, lo que facilita el envío de correos o notificaciones. También puedes aplicarlos en los módulos de **Content** y **Channels** para personalizar el contenido que entregas a tus usuarios.

En esta sección, encontrarás una lista de todos los segmentos creados, con información clave como:

- **Nombre**: Identificador del segmento (bajo este se encuentran los filtros que lo componen).
- **Creado el**: Fecha de creación del segmento.
- **Personas**: Número de usuarios que forman parte del segmento. Si el segmento tiene filtros que la plataforma no puede procesar, en lugar del número aparece un icono de alerta con el mensaje **No se pudo procesar el segmento**; edita el segmento y corrige sus filtros para recuperar el conteo.

Para buscar un segmento por nombre, utiliza la barra de búsqueda en la parte superior de la pantalla.

## Crear un Segmento

Para crear un segmento, sigue estos pasos:

1. Desde la página de administración, haz clic en **Customers**, luego selecciona **Reinos**.
2. Haz clic en tu **Reino**.
3. Selecciona **Segmentos** y haz clic en **Nuevo Segmento**.
4. En la primera fila del constructor, elige **Usuarios que coinciden** o **Usuarios que no coinciden**.
5. Abre el selector **Filtro** y elige el dato que quieres evaluar.
6. Completa los campos que aparezcan a la derecha: **Filtrable** (el formulario, la campaña, el tag o la originación sobre la que se aplica el filtro), **Operador**, **Valor** y **Condición**. No todos los filtros piden los cuatro.
7. Agrega las filas y los grupos que necesites con los botones **O** e **Y**.
8. Haz clic en **Contar las coincidencias** para revisar a cuántos usuarios alcanza el segmento.
9. Haz clic en **Siguiente**.
10. Escribe un **Nombre** y una **Descripción**.
11. Haz clic en **Guardar**.

El botón **Siguiente** permanece deshabilitado mientras alguna fila esté incompleta: todo filtro necesita su valor, los que ofrecen **Condición** necesitan que elijas una, y los rangos necesitan sus dos extremos.

:::tip Tip
Asegúrate de que la ficha de cada cliente esté completa, ya que los datos incompletos impedirán que un usuario sea incluido en un segmento basado en esos criterios.
:::

:::warning Alcance restringido
Si tu acceso al reino está [restringido por segmentos](/es/platform/customers/settings.html#restringir-el-alcance-con-segmentos), no puedes crear segmentos nuevos, ya que estos parten del universo total de usuarios del reino. Sí puedes editar y borrar los segmentos de tu alcance.
:::

### Cómo se combinan los filtros

Cada fila del constructor es un filtro y empieza con un selector que decide si suma o resta usuarios:

- **Usuarios que coinciden**: incluye a quienes cumplen la condición de la fila.
- **Usuarios que no coinciden**: incluye a quienes no la cumplen. Cualquier filtro se puede invertir, no solo algunos.

Las filas se organizan en grupos, y de ahí sale el resultado final:

- Dentro de un grupo, las filas se combinan con **O**: basta con que el usuario cumpla una de ellas. Usa el botón **O** para agregar otra fila al grupo.
- Los grupos se combinan entre sí con **Y**: el usuario tiene que cumplir todos los grupos. Usa el botón **Y** para agregar un grupo nuevo.

Así, un grupo con **Género** y otro grupo con **Edad** dejan solo a quienes cumplen las dos cosas, mientras que esas mismas dos filas dentro de un mismo grupo dejan a quienes cumplen cualquiera de las dos.

Algunos filtros aceptan varios valores a la vez y muestran además un selector **Condición**:

- **Todos**: el usuario debe cumplir con todos los valores que elegiste.
- **Cualquiera**: basta con que cumpla uno.

Por ejemplo, en **Tag de usuarios** con los tags `my_tag` y `my_other_tag`, **Todos** deja solo a quien tiene los dos y **Cualquiera** deja a quien tiene al menos uno.

:::tip Tip
La **Condición** solo aparece en los filtros que admiten varios valores, como **Tag de usuarios**, **Respondió** o **Estado de respuesta**. Cuando aparece, es obligatoria.
:::

### Vista previa de coincidencias

Antes de guardar puedes revisar el alcance del segmento. Haz clic en **Contar las coincidencias**, al pie del constructor, y la pantalla te muestra cuántos usuarios cumplen los filtros que llevas escritos. El número no se actualiza solo: cada vez que cambies un filtro, vuelve a pedirlo con el botón de recarga que queda junto al conteo.

:::warning Atención
El conteo es una vista previa que se calcula en el momento y no crea ni guarda el segmento. Si el conteo devuelve un error, revisa los filtros antes de continuar.
:::

## Filtros

Los filtros te permiten crear segmentos basados en la información de las fichas de usuario y su actividad en el sitio. Puedes incluir usuarios que coincidan con ciertos criterios o excluir a los que no los cumplan.

Los filtros predeterminados en la plataforma incluyen:

- **Estado de activación**
- **Edad**
- **Estado de respuesta** (de una originación)
- **Estado de tarea** (de una originación)
- **Respondió**
- **Fecha de nacimiento**
- **Valor del custom field**
- **Dispositivo**
- **Correo entregado**
- **Correo reportado como spam**
- **Conteo de respuestas a formulario**
- **Género**
- **Última fecha de inicio de sesión**
- **Conteo de Logs**
- **Fecha de inicio de sesión**
- **Correos no abiertos**
- **Conteo de correos abiertos**
- **Correos abiertos**
- **Notificación leída**
- **Conteo de notificaciones abiertas**
- **Fecha de registro**
- **Tag de usuarios**
- **Valores de campo de usuario**
- **Órdenes completadas**
- **Órdenes fallidas**
- **Órdenes confirmando**
- **Órdenes pagadas**
- **Órdenes en pago**
- **Órdenes rechazadas**

Tres de ellos trabajan sobre el mismo dato y conviene no confundirlos: **Correos abiertos** busca a quienes abrieron una campaña concreta dentro de un rango de fechas, **Correos no abiertos** a quienes no la abrieron, y **Conteo de correos abiertos** compara cuántos correos abrió el usuario en total.

Otros trabajan con una lista cerrada de valores: **Estado de activación** acepta **Activado** o **Desactivado**, y **Dispositivo** acepta **Escritorio**, **Móvil** o **Tablet**.

Para crear un filtro avanzado, que se ajuste a tus necesidades, , consulta la sección [Custom Fields](/es/platform/customers/settings#custom-fields).

:::warning Atención
La actualización de segmentos a los que pertenece un usuario se realiza en un proceso en segundo plano y puede no ser inmediata. Esto ocurre:

- Cada 5 minutos.
- Cada vez que se modifica el perfil de un usuario.
- Cada vez que un usuario responde un formulario.

La velocidad de la actualización depende de la carga del sistema, por lo que algunos usuarios podrían no ver contenido segmentado de inmediato tras realizar acciones que los incluyen o excluyen de un segmento.
:::

### Operadores

El operador que ofrece un filtro depende del tipo de valor que compara:

- **Fechas**, como **Fecha de nacimiento**, **Fecha de registro** o **Fecha de inicio de sesión**: **Antes del**, **Después del**, **El** y **Entre**.
- **Números**, como **Edad** o un custom field numérico: **Menor que**, **Mayor que**, **Igual a** y **Entre**.
- **Conteos**, los filtros que cuentan eventos como **Conteo de respuestas a formulario**, **Conteo de Logs**, **Conteo de correos abiertos** y **Conteo de notificaciones abiertas**: **Menor o igual que**, **Mayor o igual que**, **Igual a** y **Entre**.

Los filtros que trabajan con una lista cerrada de opciones, como **Género** o **Dispositivo**, no piden operador: eliges el valor directamente.

Cuando eliges **Entre**, la pantalla pide dos valores y el segundo tiene que ser mayor que el primero. Si no lo es, el panel avisa con **El valor máximo debe ser mayor que el valor mínimo** y el segmento no se guarda hasta que lo corrijas.

### Filtros de originación

Los filtros **Estado de respuesta** y **Estado de tarea** te permiten segmentar usuarios según su avance en las [originaciones](/es/platform/customers/origination.html) del reino:

- **Estado de respuesta**: Selecciona una originación y el estado de la respuesta: **No Iniciada**, **Pendiente**, **Completada** o **Cancelada**. Si la originación permite múltiples respuestas por usuario, defines además una condición: **Todos** (todas las respuestas del usuario deben cumplir el estado) o **Cualquiera** (basta con que una lo cumpla).
- **Estado de tarea**: Selecciona una originación y luego una tarea específica dentro de sus pasos, junto con el estado de esa tarea: **No Iniciada**, **Pendiente** o **Completada**.

Ambos filtros incluyen el campo **desde [X] o más días**, que acota el segmento a los usuarios que llevan al menos esa cantidad de días en el estado seleccionado. Por ejemplo, puedes crear un segmento con los usuarios que llevan al menos 3 días con una tarea pendiente y enviarles una campaña de recordatorio.

Para excluir usuarios que cumplen la condición, usa la opción **Usuarios que no coinciden** del filtro.

## Borrar un Segmento

Puedes borrar un segmento desde la vista general. en el botón de acciones, seleccionando la opción borrar.

:::warning Atención
Si eliminas un segmento, deberás crearlo nuevamente. Sin embargo, los usuarios no serán eliminados.
:::