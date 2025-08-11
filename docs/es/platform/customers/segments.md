---
search: true
---

# Segmentos

La funcionalidad de **Segmentos** en Modyo es ideal para manejar usuarios en masa y asegurarte de que reciban información específica. Los segmentos agrupan a los usuarios finales mediante filtros anidados, lo que facilita el envío de correos o notificaciones. También puedes aplicarlos en los módulos de **Content** y **Channels** para personalizar el contenido que entregas a tus usuarios.

En esta sección, encontrarás una lista de todos los segmentos creados, con información clave como:

- **Nombre**: Identificador del segmento (bajo este se encuentran los filtros que lo componen).
- **Creado el**: Fecha de creación del segmento.
- **Personas**: Número de usuarios que forman parte del segmento.

Para buscar un segmento por nombre, utiliza la barra de búsqueda en la parte superior de la pantalla.

## Crear un Segmento

Para crear un segmento, sigue estos pasos:

- Desde la página de administración, haz clic en **Customers**, luego selecciona **Reinos**.
- Haz clic en tu **Reino**.
- Selecciona **Segmentos** y haz clic en **Nuevo Segmento**.
- Agrega los filtros necesarios para tu segmento.
- Haz clic en **Siguiente**.
- Escribe un **Nombre** y una **Descripción**.
- Haz clic en **Guardar**.

:::tip Tip
Asegúrate de que la ficha de cada cliente esté completa, ya que los datos incompletos impedirán que un usuario sea incluido en un segmento basado en esos criterios.
:::

## Filtros

Los filtros te permiten crear segmentos basados en la información de las fichas de usuario y su actividad en el sitio. Puedes incluir usuarios que coincidan con ciertos criterios o excluir a los que no los cumplan.

Los filtros predeterminados en la plataforma incluyen:

- Estado de activación
- Edad
- Respuestas de formulario
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
- Orden completada
- Orden fallida
- Orden confirmando
- Orden pagada
- Orden pagando
- Orden rechazada

Para crear un filtro avanzado, que se ajuste a tus necesidades, , consulta la sección [Custom Fields](/es/platform/customers/settings.html#custom-fields).

:::warning Atención
La actualización de segmentos a los que pertenece un usuario se realiza en un proceso en segundo plano y puede no ser inmediata. Esto ocurre:

- Cada 5 minutos.
- Cada vez que se modifica el perfil de un usuario.
- Cada vez que un usuario responde un formulario.

La velocidad de la actualización depende de la carga del sistema, por lo que algunos usuarios podrían no ver contenido segmentado de inmediato tras realizar acciones que los incluyen o excluyen de un segmento.
:::


## Borrar un segmento

Puedes borrar un segmento desde la vista general. en el botón de acciones, seleccionando la opción borrar.

:::warning Atención
Si eliminas un segmento, deberás crearlo nuevamente. Sin embargo, los usuarios no serán eliminados.
:::