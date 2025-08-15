---
search: true
---

# Variables globales

Modyo ofrece la funcionalidad de definir elementos globalmente y reutilizarlos en todos los sitios que utilizan Liquid, permitiendo compartir código entre diferentes sitios.

:::tip Tip
Puedes usar texto plano, HTML, JavaScript y CSS dentro de las variables globales; sin embargo, no puedes usar código Liquid. El contenido tiene un máximo de 65.535 caracteres.

Para obtener el valor de la variable en cualquier lugar que acepte Liquid markup (entradas, widgets, plantillas), usa: <span v-pre>`{{vars.Nombre}}`</span>
:::

### Crear una variable global

Para crear una variable global, sigue estos pasos:

1. Desde el menú lateral principal, haz clic en **Configuración**, luego selecciona **Variables Globales**.
2. Aquí podrás ver el listado de todas las variables globales de la cuenta, su información general y un botón para copiar su nombre en Liquid. Haz clic en **Nueva Variable**.
3. Rellena el **Nombre** y **Valor** de la variable.
4. Haz clic en **Guardar**.

Las variables globales se pueden utilizar para añadir valores para distintos idiomas. Si lo requieres, también tienes la opción de sobrescribir los valores de variables globales en sitios y widgets, utilizando los apartados de [configuración del sitio](/es/platform/channels/sites#variables-del-sitio) y [widgets personalizados](/es/platform/channels/widgets#variables-del-widget), respectivamente.

:::warning Atención
Cuando uses las variables globales, siempre se tomará como preferencia las variables definidas en el nivel más bajo (primero las definidas en el widget, luego las definidas en el sitio y, por último, las definidas a nivel de cuenta). Por lo tanto, debes ser cuidadoso al definir variables en widgets o el sitio con el mismo nombre que las variables de la cuenta.
:::

:::danger Peligro
Las variables globales no cuentan con un flujo de trabajo de publicación, versionado ni revisión en equipo. Solo los administradores de la cuenta y el sitio pueden modificarlas. Por lo tanto, al hacer cambios en estos valores, se verán reflejados inmediatamente en todo lugar donde se estén usando.
Esto no aplica para las variables definidas en los widgets, dado que los widgets y páginas sí cuentan con flujo de publicación.
:::
