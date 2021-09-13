---
search: true
---

# Variables globales

Modyo cuenta con la funcionalidad para definir variables globales que puedes usar en todos los sitios donde cuentes con Liquid, de esta manera puedes por ejemplo, compartir un _snippet_ de código entre sitios.

:::tip Tip
Puedes usar texto plano, código HTML, JavaScript, y CSS dentro de las variables globales, sin embargo no puedes usar código Liquid dentro de ellas, sin embargo, debes tener en consideración que el contenido tiene un máximo de 65.535 caracteres.
:::

Puedes crear variables globales en la configuración de la cuenta, y puedes añadir valores para distintos idiomas. Si lo requieres, también puedes sobrescribir los valores para determinados sitios en el menú variables del sitio, en la configuración del sitio, o bien, en cada uno de los widgets personalizados del widget builder.

:::warning Atención
Cuando uses las variables globales, siempre se tomará como preferencia las variables definidas en el nivel mas bajo, quedando primero las variables definidas en el widget, luego las definidas en el sitio, y luego las variables definidas a nivel de cuenta, por lo que debes ser cuidadoso al momento de definir variables en widgets o el sitio con el mismo nombre que las variables de la cuenta.
:::

:::danger Peligro
Las variables globales no cuentan con un flujo de trabajo de publicación, versionado, ni revisión en equipo. Solo los administradores de la cuenta y el sitio pueden modificarlas, por lo que debes considerar que al hacer un cambio en el valor de estas, se verán reflejados inmediatamente en donde sea que se estén usando. Esto no aplica para las variables definidas en los widgets, dado que los widgets y páginas si cuentan con flujo de publicación.
:::
