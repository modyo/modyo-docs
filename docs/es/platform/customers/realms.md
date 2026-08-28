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

## Security headers

Las páginas propias del reino —inicio de sesión, registro, código de verificación, recuperación de contraseña y perfil— pueden tener su propia política de seguridad, independiente de la del web app y de la configuración global de la plataforma.

Se configuran en **Configuración de reino** → **Headers de seguridad**, y para verlos y editarlos necesitas el permiso agrupado **Administrar Headers de Seguridad**.

### Habilitar los headers del reino

Los headers de un reino nacen deshabilitados. Mientras lo estén, la pantalla muestra **Headers deshabilitados** con el aviso "Los headers de seguridad actualmente están deshabilitados para este reino. Habilita este módulo para acceder a la configuración", y un botón **Habilitar los headers de seguridad para este reino**.

:::danger Es una acción irreversible
Habilitar los headers de un reino **no se puede deshacer**: no hay forma de volver al estado deshabilitado desde el panel. La plataforma lo advierte antes de aplicarlo con el mensaje "La personalización de los headers de seguridad del reino anula la configuración global de la plataforma. Esta acción no se puede deshacer, por favor consulta la documentación".
:::

Al habilitarlos por primera vez, la configuración se inicializa con **los valores que la plataforma ya estaba aplicando en ese momento**. Es decir, habilitar no cambia el comportamiento del reino el primer día: pasas a controlar una política que hasta entonces venía impuesta, con el mismo contenido. A partir de ahí cualquier cambio es tuyo.

### Los cuatro headers configurables

| Header | Qué puedes configurar |
|---|---|
| **Content-Security-Policy** | Habilitarlo, su directiva y la opción de nonce. |
| **Content-Security-Policy-Report-Only** | Lo mismo que el anterior, pero solo reporta: no bloquea. Necesita **Reporting-Endpoints** para que los reportes lleguen a alguna parte. |
| **Reporting-Endpoints** | Habilitarlo y declarar los destinos a los que el navegador envía los reportes. |
| **Referrer-Policy** | Habilitarlo y elegir la directiva. |

El resto de los headers que sí ofrece un web app no se configuran por reino, y siguen viniendo de la plataforma.

:::warning La lista de Referrer-Policy es más corta que la del web app
El selector del reino ofrece `no-referrer`, `origin`, `origin-when-cross-origin`, `same-origin`, `strict-origin` y `strict-origin-when-cross-origin`. Deja fuera a propósito `unsafe-url` y `no-referrer-when-downgrade`, que en un web app sí puedes elegir. El motivo es concreto: el enlace de recuperación de contraseña lleva su token en la URL, y esas dos políticas lo filtrarían a terceros por la cabecera `Referer`.
:::

### El nonce del CSP

Si activas la opción de nonce en **Content-Security-Policy** o en **Content-Security-Policy-Report-Only**, la plataforma agrega el nonce de cada respuesta a las directivas `script-src` y `style-src`.

También puedes escribir <code v-pre>{{csp_nonce}}</code> dentro de la directiva: al servir la página, ese marcador se reemplaza por el nonce de esa respuesta. El mismo nonce se aplica al markup del inicio de sesión, incluidos el JavaScript y el CSS personalizados que hayas definido para esa pantalla, así que puedes endurecer el CSP sin que tu código propio deje de ejecutarse.

### Dónde se aplican

La configuración alcanza a **todas las respuestas HTML del reino**: inicio de sesión, registro, código de verificación, recuperación de contraseña, perfil, las páginas de error de ese ámbito y la pantalla de autorización.

No alcanza a las redirecciones, porque el navegador aplica estas políticas al documento que muestra y no al salto intermedio, ni a las respuestas de la API, que no llevan estos headers.

:::tip Mostrar el inicio de sesión dentro de un iframe
Este es el motivo más habitual para configurar el CSP de un reino. Agregando el origen del portal a la directiva `frame-ancestors` del CSP del reino, su pantalla de inicio de sesión puede renderizarse dentro de un iframe alojado en ese origen; cualquier origen que no esté en la lista lo sigue bloqueando el navegador.

Para que el flujo completo funcione dentro del iframe —redirección al inicio de sesión, autenticación y regreso— el portal que embebe tiene que estar en el mismo dominio que el host de tu cuenta. En la práctica eso significa tener un host propio configurado. Con el dominio de la plataforma por defecto, la pantalla se muestra pero la sesión no se conserva.
:::

## Eliminar un Reino

Para eliminar un reino, entra a su [Configuración de reino](/es/platform/customers/settings.html#general) y usa el campo **Eliminar reino** de la sección **General**. Para confirmar tienes que escribir el nombre completo del reino, tal como aparece en el listado: si el texto no coincide exactamente, la plataforma no ejecuta la acción.

La eliminación corre en segundo plano, así que es posible que el reino siga apareciendo en el listado un rato después de confirmarla.

:::danger Peligro
Eliminar un reino borra toda su información: usuarios, formularios, campañas de mensajes y segmentos. Además, los sitios que lo usan quedan públicos, sin control de acceso. Esta acción es irreversible.
:::