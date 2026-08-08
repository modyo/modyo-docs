---
search: true
---

# Variables Globales

En Modyo Channels, las variables son elementos clave para crear contenido dinámico y reutilizable. Funcionan dentro del motor de plantillas de Modyo, que utiliza Liquid Markup, un lenguaje de plantillas simple y seguro.

Las variables en Modyo Channels no son solo un concepto de programación; son una funcionalidad de la plataforma que te permite:
- **Reutilizar información**: Definir valores que pueden ser utilizados en múltiples lugares, como plantillas, widgets y páginas, sin tener que escribir el mismo código una y otra vez.
- **Personalizar el contenido**: Insertar datos que cambian (como nombres de usuarios, títulos de artículos, precios de productos) en tus plantillas para que la experiencia del usuario sea personalizada.
- **Gestionar configuraciones globales**: Controlar aspectos de diseño o funcionalidad de manera centralizada.

Modyo ofrece la funcionalidad de definir variables globalmente y reutilizarlas en todos las aplicaciones que utilizan Liquid, permitiendo compartir código entre diferentes sitios.

:::tip Tip
Puedes usar texto plano, HTML, JavaScript y CSS dentro de las variables globales; sin embargo, no puedes usar código Liquid. El contenido tiene un máximo de 65.535 caracteres.

Para obtener el valor de la variable en cualquier lugar que acepte Liquid markup (entradas, widgets, plantillas), usa: <span v-pre>`{{ vars.identificador }}`</span>
:::

## Alcances de las variables

Una variable vive en uno de tres alcances y cada alcance tiene su propia pantalla:

- **Cuenta**: en el menú lateral de Channels, haz clic en **Variables**. Lo que crees aquí está disponible en todas las aplicaciones web de la cuenta.
- **Aplicación**: dentro de una aplicación web, en **Configuración de la aplicación**, haz clic en **Variables de la aplicación**. Aquí creas variables propias de la aplicación y sobrescribes, solo para ella, el valor de una variable de la cuenta. Consulta [Variables del sitio](/es/platform/channels/sites.html#variables-del-sitio).
- **Widget**: en la pestaña **Variables** de la definición del widget. Consulta [Variables del Widget](/es/platform/channels/widgets.html#variables-del-widget).

Al resolver una variable gana siempre el alcance más específico: el valor del widget pisa al de la aplicación y el de la aplicación pisa al de la cuenta. Por eso debes ser cuidadoso al reutilizar en un widget o en una aplicación un identificador que ya existe a nivel de cuenta.

## Crear una variable global

Para crear una variable global, sigue estos pasos:

1. Desde el menú lateral, haz clic en Channels y luego en **Variables**.
2. Aquí ves el listado de las variables globales de la cuenta, su información general y un botón para copiar su **Código de Liquid**. Haz clic en **Nueva Variable**.
3. Rellena el **Nombre** y el **Valor** de la variable.
4. Haz clic en **Guardar**.

El texto que escribes en **Nombre** se normaliza mientras escribes: pasa a minúsculas y los espacios se reemplazan por guiones. Ese resultado es el identificador con el que consumes la variable desde Liquid, no hay un título aparte. El valor que guardas queda asociado al idioma de la aplicación y marcado como valor por defecto.

## Valores por idioma

Una variable no guarda un único valor, sino un valor por idioma, y los idiomas admitidos son solo tres: **Español**, **Inglés** y **Portugués**. Cualquier otro código de idioma se rechaza al guardar.

Para añadir o cambiar el valor de un idioma:

1. En el listado, haz clic en el nombre de la variable.
2. En la cabecera de la ventana, elige el idioma en el selector que aparece junto al título.
3. Escribe el **Valor** y haz clic en **Guardar**.

Exactamente uno de los valores queda marcado como valor por defecto de la variable: es el que se devuelve cuando se accede a la variable sin un idioma resuelto. La columna **Por defecto** del listado te dice cuál es. Para cambiarlo, deja el filtro **Idioma** en el idioma que quieres promover, selecciona una o más variables y usa la acción masiva **Marcar como predeterminado**.

Las variables del widget no tienen esta dimensión: guardan un solo valor, sin idioma.

:::tip Tip
El **Nombre** solo se puede editar desde el valor marcado como por defecto. Si abres la variable en otro idioma, el campo aparece deshabilitado.
:::

## Activar y desactivar una variable

Puedes desactivar una variable sin borrarla. Selecciona una o más variables en el listado y usa la acción masiva **Desactivar**. Para revertirlo, cambia el filtro **Activo** a **No**, selecciona las variables y usa **Activar**.

Mientras una variable está desactivada:

- No se puede editar. Al abrirla verás el aviso "Esta variable está desactivada. Si quieres modificarla, debes activarla primero" y el botón de guardar pasa a ser **Activar**.
- Deja de estar disponible en Liquid: las plantillas que la usan pasan a recibir una cadena vacía.

## El listado de variables

En las pantallas de cuenta y de aplicación, el listado muestra una fila por variable con su **Estado**, **Nombre**, **Valor**, si es el valor **Por defecto** y un botón que copia su **Código de Liquid**.

La columna **Estado** usa estos indicadores:

- **Traducida** o **No traducida**, según si la variable tiene un valor cargado en el idioma por el que estás filtrando.
- **No sobrescrita**, en la pantalla de la aplicación, cuando la variable viene de la cuenta y esta aplicación todavía no le da un valor propio.
- **Sobrescrita**, cuando la variable existe también en un alcance superior y aquí se le está dando otro valor.

Para acotar el listado tienes los filtros **Idioma**, **Activo** y **Traducción**, este último con las opciones **Traducida** y **No traducida**. En la pantalla de la aplicación se suma el filtro **Sobrescrita**. El buscador filtra por identificador. Por defecto solo se listan las variables activas del idioma de la aplicación.

En la pestaña **Variables** de la definición de un widget verás además el indicador **En uso**, que marca las variables que el código del widget realmente referencia.

## Consumir una variable desde Liquid

Para leer una variable desde cualquier lugar que acepte Liquid markup, usa <code v-pre>vars.identificador</code>, donde el identificador es el que aparece en **Nombre**. El botón de la columna **Código de Liquid** copia la expresión completa lista para pegar en una plantilla.

Al renderizar, Modyo superpone tres capas de valores y gana la última:

1. El valor marcado como por defecto de cada variable.
2. El valor del idioma configurado en la aplicación.
3. El valor del idioma activo de la solicitud que se está renderizando.

Sobre ese resultado se aplica la herencia entre alcances: cuenta, luego aplicación y por último widget.

:::tip Tip
Si el identificador no existe en ningún alcance, o si la variable está desactivada, <code v-pre>vars.identificador</code> devuelve una cadena vacía y el render continúa: no se levanta un error ni se interrumpe la página. Tenlo presente cuando el valor de una variable desaparece de una plantilla sin dar señales.
:::

## Cambiar el identificador de una variable

El **Nombre** de una variable ya creada está bloqueado. Para editarlo tienes que desbloquear el campo con **Habilitar campo identificador** y confirmar el aviso.

:::warning Atención
Cambiar el identificador rompe todas las referencias que ya usan esa variable: plantillas, widgets, contenidos, la API y los SDK dejan de encontrarla y pasan a recibir una cadena vacía. Si necesitas otro identificador, crea una variable nueva, actualiza las referencias y recién entonces elimina la anterior.
:::

:::danger Peligro
Las variables globales no cuentan con un flujo de trabajo de publicación, versionado ni revisión en equipo. Solo los administradores de la cuenta y el sitio pueden modificarlas. Por lo tanto, al hacer cambios en estos valores, se verán reflejados inmediatamente en todo lugar donde se estén usando.
Esto no aplica para las variables definidas en los widgets, dado que los widgets y páginas sí cuentan con flujo de publicación.
:::
