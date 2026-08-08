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

Este resumen te permite administrar eficientemente cada reino y entender cómo se conecta con los usuarios y otros elementos clave de la plataforma.

## Eliminar un Reino

Para eliminar un reino, entra a su [Configuración de reino](/es/platform/customers/settings.html#general) y usa el campo **Eliminar reino** de la sección **General**. Para confirmar tienes que escribir el nombre completo del reino, tal como aparece en el listado: si el texto no coincide exactamente, la plataforma no ejecuta la acción.

La eliminación corre en segundo plano, así que es posible que el reino siga apareciendo en el listado un rato después de confirmarla.

:::danger Peligro
Eliminar un reino borra toda su información: usuarios, formularios, campañas de mensajes y segmentos. Además, los sitios que lo usan quedan públicos, sin control de acceso. Esta acción es irreversible.
:::