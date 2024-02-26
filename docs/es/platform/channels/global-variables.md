---
search: true
sidebarDepth: 2
---

# Variables globales

Modyo te ofrece la funcionalidad de definir elementos de forma global y reutilizar en todos los sitios donde se utilice Liquid. Esto permite compartir, por ejemplo, un _snippet_ de código entre diferentes sitios.

:::tip Tip
Puedes usar texto plano, HTML, JavaScript y CSS dentro de las variables globales; sin embargo, no puedes usar código Liquid dentro de ellas. Debes tener en consideración que el contenido tiene un máximo de 65.535 caracteres.

Para obtener el valor de la variable en cualquier lugar que acepte Liquid markup (entradas, widgets, plantillas), usa:<span v-pre>`{{vars.Nombre}}`</span>
:::

### Crear una variable global

Para crear una variable global, sigue esto pasos:

1. Desde el menú lateral principal, haz click en **Configuración**, luego selecciona **Variables Globales**.
1. Aquí podrás ver el listado de todas las variables globales de la cuenta, su información general, y un botón para copiar su nombre en Liquid. Haz click en **+ Nueva Variable**.
1. Llena el **Nombre** y **Valor** de la variable.
1. Haz click en **Guardar**.

Las variables globales se pueden utilizar para añadir valores para distintos idiomas. Si lo requieres, también tienes la opción de sobrescribir los valores de variables globales en sitios y widgets, utilizando los apartados de [configuración del sitio](/es/platform/channels/sites.html#variables-del-sitio) y [widgets personalizados](/es/platform/channels/widgets.html#variables-del-widget), respectivamente.

:::warning Atención
Cuando uses las variables globales, siempre se tomará como preferencia las variables definidas en el nivel más bajo, quedando primero las variables definidas en el widget, luego las definidas en el sitio, y por último las variables definidas a nivel de cuenta, por lo que debes ser cuidadoso al momento de definir variables en widgets o el sitio con el mismo nombre que las variables de la cuenta.
:::

:::danger Peligro
Las variables globales no cuentan con un flujo de trabajo de publicación, versionado, ni revisión en equipo. Solo los administradores de la cuenta y el sitio pueden modificarlas, por lo que debes considerar que al hacer cambios en estos valores, se verán reflejados inmediatamente en todo lugar donde se estén usando.
Esto no aplica para las variables definidas en los widgets dado que los widgets y páginas si cuentan con flujo de publicación.
:::
