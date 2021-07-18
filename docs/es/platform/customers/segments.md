---
search: true
---

# Segmentos

Segmentos es la función de Modyo ideal para manejar a los usuarios en masa si necesitas que reciban determinada información.

Estos nos permiten agrupar a los usuarios finales en distintos segmentos y así facilitar el envío de correos o notificaciones.

## Interfaz

En la interfaz, podrás ver una lista con todos los segmentos creados hasta ahora, con el nombre y las distintas especificaciones que permiten filtrarlos.

La lista está ordenada de la siguiente manera.

- Nombre: Nombre particular que tiene la lista. (bajo esta se encuentran los filtros que la componen).
- Creado el: Fecha de creación del segmento.
- Personas: Cantidad de usuarios que pertenecen al segmento.

Además, en el extremo izquierdo encontrarás un botón con un menú desplegable que te permite ejecutar las siguientes opciones:

- Editar: Editar el nombre y los filtros del segmento.
- Borrar: Borrar el segmento.

:::warning Atención
Si borras el segmento, tendrás que crearlo nuevamente. Sin embargo, esto no quiere decir que borras los usuarios que pertenecen a él.
:::

Si necesitas buscar un segmento por nombre en específico, puedes hacerlo a través de la barra de búsqueda que se encuentra en la parte superior de la pantalla.

## Crear un Segmento

Para crear un segmento, tienes que hacer click en el botón **Nuevo Segmento** que se encuentra en la parte superior de la pantalla.

Inmediatamente se abrirá una vista en la cual podrás seleccionar los filtros que desees para cada Segmento.

Si quieres borrar un filtro del segmento que estás armando, solo debes hacer clic en el ícono que está en el lado derecho de la pantalla.

Si deseas borrar todos los filtros, puedes hacer clic en el botón **Limpiar** todo que está en la parte inferior de la pantalla.

Para grabar tu segmento, solo debes hacer clic en el botón **Guardar como Segmento**, que está en la parte inferior de la pantalla.

Por último, si quieres ver los usuarios que integran ese segmento, solo debes hacer clic en el botón **Aplicar**. Con esto, llegarás a la vista de [Usuarios](/es/platform/customers/realms.html) que te mostrará una lista con todos los contactos que se ajustan a tus filtros.

:::tip Tip
 Es necesario que la ficha de cada cliente esté completa, ya que cada uno de los datos que aparecen en él, pueden ser tomados en cuenta para segmentar mejor. Si la ficha no está completa o no está el dato del cliente para filtrar, este no será agregado al segmento.
:::

### Filtros

Los filtros permiten crear segmentos que se basan en la información que aparece en la ficha del cliente y su actividad dentro del sitio. Podrás crear segmentos incluyendo usuarios que coinciden con cierto criterio o usuarios que no coinciden con un determinado criterio.

Los filtros que se encuentran de manera predeterminada en la plataforma son:

- Estado de activación
- Edad
- Fecha de nacimiento
- Valor de custom field
- Dispositivo
- Correo entregado
- Correo reportado como spam
- Conteo de respuestas a formularios
- Género
- Última fecha de inicio de sesión
- Conteo de logs
- Fecha de inicio de sesión
- Correo no abiertos
- Conteo de correos abiertos
- Notificación leída
- Conteo de notificaciones abiertas
- Fecha de registro
- Tags de usuario
- Valores de campo de usuarios
- Respuestas de formulario
- Orden completada
- Orden fallida
- Orden confirmando
- Orden pagada
- Orden pagando
- Orden rechazada

Para crear un filtro avanzado, que se ajuste a tus necesidades, debes ir a la sección Custom Fields, que se encuentra en [Configuración de Customers](/es/platform/customers/realms.html#configuracion-de-customers).

:::warning Atención
Los segmentos a los que pertenece cada usuario se actualiza en un proceso en segundo plano:
* Cada 5 minutos.
* Cada vez que el perfil de un usuario es modificado.
* Cada vez que un usuario responde un formulario.

Como la actualización se ejecuta en un proceso en segundo plano, la actualización no es inmediata y depende de la carga del sistema, por lo que es posible que algunos usuarios no vean el contenido segmentado por algunos minutos luego de haber ejecutado una acción que los incluya o excluya de un segmento.
:::