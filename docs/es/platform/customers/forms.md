---
search: true
---

# Formularios

Una de las funcionalidades más requeridas por todas las plataformas es la captura de datos de usuarios para posteriormente analizar y segmentar. Con esta herramienta, podrás crear cuantos formularios necesites para recolectar datos provenientes de los usuarios de tus sitios.

Al entrar a la herramienta, podrás ver un listado de todos los formularios que hay activos actualmente en la cuenta. Podrás filtrar por su estado (habilitado o deshabilitado), por el sitio en el que se despliegan, y buscar por el nombre del formulario.

En cada fila de la tabla de formularios, verás en la primera columna el nombre del formulario, a continuación la fecha de creación, y la cantidad de respuestas que se han enviado para ese formulario.

Desde este listado también puedes acceder a la vista de análisis individual, haciendo click en el título del formulario, asimismo al listado de respuestas del formulario, haciendo click en el número de respuestas del formulario.

Para habilitar o deshabilitar los formularios y permitir que usuario puedan o no enviar sus respuestas, debes ir a la vista de análisis y seleccionar la acción respectiva entre las opciones desplegadas en la sección superior derecha.

## Crear Formulario

Para crear un nuevo formulario, sigues estos pasos:

1. Desde el menú lateral en la plataforma, selecciona **Customers**, y haz click en **Reinos**.
2. Haz click en tu reino.
3. Haz click en **Nuevo Formulario**. Esto te llevará a la vista de creación de un nuevo formulario, donde deberás llenar los atributos principales del mismo:

- **Nombre**: Nombre asociado al formulario. Este valor aparecerá tanto en el índice de formularios en el administrador de Modyo y como título cuando un usuario lo vaya a responder.
- **Descripción**: Este texto aparecerá como texto debajo del título cuando los usuarios lo vayan a responder.
- **Límite de personas**: Permite determinar el número máximo de respuestas son permitidas.
- **Sitio**: Te permite seleccionar en que sitio se mostrará este formulario. Ten en consideración que esto provoca que el formulario cambie su aspecto de acuerdo a las clases definidas en el CSS global del sitio. Para más información, dirígete a [Template builder](/es/platform/channels/templates).

:::warning Alerta
Solamente podrás seleccionar un sitio que pertenece al mismo reino, dentro de la **Configuración del sitio**, en **General**, asegúrate de que el sitio sea parte del reino correcto.
:::

Los formularios que se copian a un [stage del reino](/es/platform/customers/realms.html#que-se-copia-a-un-stage) llegan sin sitio. Mientras no tengan uno, el listado de formularios muestra junto a su nombre un ícono con el aviso **Este formulario no tiene una web app asignada**.

- **Habilitado**: Selecciona si el formulario va a comenzar en estado habilitado o no.
- **Aceptar múltiples respuestas**: Si esta opción está habilitada, cada vez que un usuario responda el formulario, se registrará como una nueva respuesta. Si esta opción está deshabilitada, cada vez que un mismo usuario responda el formulario, estará sobrescribiendo su respuesta anterior.
- **Solo para usuarios registrados**: Te permite determinar si el formulario solo será visible para usuario registrados en Modyo. Si esta opción está habilitada, un usuario sin sesión no podrá ver el formulario. Si esta opción está deshabilitada, cualquier usuario podrá responder el formulario.
- **Solicitar contestar automáticamente**: Si el formulario es privado (solo usuarios registrados lo pueden contestar), aparecerá esta opción que te permitirá redireccionar automáticamente a los usuarios que inicien sesión en el sitio asociado al formulario para que lo contesten.

Luego de una división podrás ver las opciones para modificar la redirección luego de que un usuario responda el formulario.

- **Opciones por defecto**: Luego de responder el formulario el usuario es redireccionado al home del sitio asociado al formulario.
- **URL de redirección**: Te permite ingresar una URL a la que se redireccionará al usuario luego de haber respondido el formulario. Es necesario escribir el URL entero (e.g. https://test.modyo.com/home).
- **Página de agradecimiento**: Te permite añadir un mensaje de agradecimiento personalizado luego de que un usuario responde el formulario, junto a un botón que lo llevará a una página del sitio. La URL del botón es una URL relativa del sitio asociado al formulario. También podrás determinar si quieres que el usuario sea redireccionado automáticamente a esa página luego de un tiempo determinado.


- **Habilitar segmentación**: Si el formulario es privado (solo usuarios registrados lo pueden contestar), podrás seleccionar un conjunto de usuarios que puedan contestar el formulario haciendo uso de los segmentos. Para aprender más dirígete a [Segmentos](/es/platform/customers/segments)

:::warning Atención
En caso de ser un formulario público, los usuarios que no tienen una sesión activa en Modyo, verás tres campos obligatorios en la parte superior del formulario: Nombre, Apellido, y Correo. Una vez que envíen el formulario, se creará un usuario con esos valores y luego la respuesta será asociada a ese usuario.
:::

:::warning Atención
Si un usuario no tiene una sesión activa, llena el formulario, y el correo electrónico coincide con uno de los usuario ya registrados en Modyo, entonces la respuesta quedará asociada al usuario ya existente y no se creará uno nuevo.
:::

## Editar Formulario

Para modificar un formulario, sigue estos pasos:

1. En el menú lateral, selecciona **Customers** y haz click en **Reinos**.
2. Selecciona tu reino y haz click en tu formulario.
3. En el menú de opciones arriba a la derecha, haz click en **"Editar"**.

Una vez que entres en la sección de edición de un formulario, podrás ver 2 secciones: una sección central, donde podrás reorganizar las preguntas arrastrándoles en el orden requerido, y la sección lateral derecha, que cuenta con tres pestañas:

### Añadir

En esta sección, puedes agregar campos para completar tu formulario o eliminar los que no necesites. Los campos se agrupan en dos encabezados:

- **Campos de contenido**: Campos que solo muestran información a la persona usuaria y no capturan una respuesta.
- **Campos de input**: Campos que piden un dato a la persona usuaria.

El grupo **Campos de contenido** tiene una opción:

- **Texto enriquecido**: Muestra un bloque de texto con formato, como instrucciones o un aviso legal. Revisa [Texto enriquecido](/es/platform/customers/forms.html#texto-enriquecido).

Los tipos de campos del grupo **Campos de input** son:

- **Texto simple**: Permite ingresar hasta 256 caracteres.
- **Párrafo**: Permite ingresar texto en múltiples líneas de hasta 65,535 caracteres.
- **Número**: Permite ingresar números.
- **Lista desplegable**: Agrega opciones para que la persona usuaria seleccione una desde una lista desplegable.
- **Casillas de verificación**: Agrega opciones que permiten seleccionar múltiples valores con casillas de verificación.
- **Elección**: Agrega opciones para seleccionar una opción en formato _radio button_.
- **Fecha**: Permite seleccionar una fecha dentro de un rango permitido. Revisa [Fecha](/es/platform/customers/forms.html#fecha).
- **Preguntas anidadas**: Permite agregar opciones dentro de otras opciones. El usuario selecciona una opción principal y, según su elección, puede elegir entre las opciones relacionadas que se despliegan.
- **Archivo**: Permite cargar archivos.
- **Correo electrónico**: Campo para ingresar una dirección de correo electrónico.
- **URL**: Campo para ingresar una dirección web.
- **País**: Selector de países.
- **Teléfono**: Campo para ingresar números telefónicos.
- **Dirección**: Campo estructurado para capturar direcciones.
- **Campo oculto**: Guarda un valor junto con la respuesta sin mostrarlo a la persona usuaria. Revisa [Campo oculto](/es/platform/customers/forms.html#campo-oculto).

Puedes eliminar uno de los campos del formulario haciendo click en el icono de basurero a la derecha de cada campo en la sección principal. La eliminación será efectiva una vez que guardes los cambios.

:::danger Peligro
Si tu formulario ya está activado y ya tienes respuestas, ten mucho cuidado al eliminar preguntas de el, ya que al hacerlo, estarás eliminando los valores de esas respuestas que los usuario ya enviaron. Esta acción es irreversible.
:::

#### Texto enriquecido

El **Texto enriquecido** es un campo de contenido: muestra un bloque de texto dentro del formulario y no genera ninguna respuesta. Sirve para instrucciones, avisos legales o cualquier contenido informativo que quieras intercalar entre los campos, incluidas imágenes o archivos para descargar.

Al seleccionarlo, la sección de edición muestra el **Título del campo**, el **Identificador** y un editor de texto enriquecido. No tiene la opción de campo requerido ni instrucciones. Si completas el **Título del campo**, el formulario lo muestra como encabezado del bloque.

Desde el editor puedes insertar imágenes y archivos de la biblioteca del reino. Las opciones para subir, editar o eliminar archivos aparecen según tus permisos sobre esa biblioteca.

El contenido acepta HTML y [Liquid](/es/platform/channels/liquid-markup/), con acceso a las variables del sitio (`vars`) y a la persona usuaria con sesión iniciada (`user`), que queda vacío en las respuestas anónimas. Por ejemplo:

```liquid
<p>Hola {{ user.first_name }}, revisa las condiciones antes de enviar el formulario.</p>
```

Ten en cuenta lo siguiente:

- Si el Liquid tiene un error de sintaxis, el campo no se guarda y la plataforma muestra el error.
- El contenido de cada campo admite hasta unos 64 KB de HTML.
- No aparece en las respuestas: no se ve en el detalle de una respuesta ni en el correo de notificación de nuevas respuestas, no se incluye en la exportación ni en las estadísticas del formulario, y no está disponible para filtrar segmentos por respuestas.
- Si una respuesta trae un valor para este campo, por ejemplo desde la API, la plataforma lo descarta.

#### Fecha

El campo **Fecha** captura un día, sin hora. Para que ese día no cambie según la zona horaria desde la que se lee, la respuesta se guarda como las 12:00 UTC de la fecha elegida. Por eso, si lees la respuesta por API o en Liquid, el valor trae una hora que corresponde a las 12:00 UTC y no a la medianoche. Para obtener el día, toma la parte de fecha del valor expresado en UTC. Las respuestas guardadas antes de que la plataforma adoptara este formato también se ajustaron a él.

Si envías la respuesta desde tu propio código, usa el formato `yyyy-MM-dd`, que se toma tal cual como ese día. Un valor con hora se lleva a la zona horaria de la cuenta y se guarda el día que resulta.

La **Fecha mínima** y la **Fecha máxima** se comparan por día, sin considerar la hora.

#### Campo oculto

El **Campo oculto** guarda un valor junto con la respuesta sin mostrarlo a la persona usuaria, por ejemplo el origen de una campaña o un dato del sitio. El valor se guarda como texto y aparece como el de cualquier otro campo: en el detalle de la respuesta, en la exportación, en el correo de notificación y en los filtros de segmentos por respuestas.

Al seleccionarlo, eliges en **Origen del valor** de dónde sale ese valor:

- **Valor fijo o Liquid**: La plataforma calcula el valor al guardar la respuesta a partir de lo que escribas en **Valor**, sin considerar lo que envíe el navegador. Admite hasta 1.000 caracteres y [Liquid](/es/platform/channels/liquid-markup/) con acceso a la persona usuaria a la que queda asociada la respuesta (`user.name`, `user.first_name`, `user.last_name`, `user.email` y `user.username`), al sitio del formulario (`site.name`, `site.uuid` y `site.url`) y a las variables del sitio (`vars`). En los formularios abiertos a usuarios sin sesión, los datos de la persona usuaria dependen de lo que ingresa quien responde. Puedes usar los filtros estándar y los tags `assign`, `capture`, `case`, `comment`, `echo`, `if`, `unless` y `raw`, pero no ciclos ni `include`.
- **Parámetro de URL**: El valor se toma del parámetro indicado en **Nombre del parámetro**, desde la URL de la página donde se abre el formulario. Por ejemplo, con `utm_source` como nombre, una URL que termina en `?utm_source=newsletter` guarda `newsletter`. El nombre debe empezar con una letra o un número, solo admite letras, números, punto (`.`), guion (`-`) y guion bajo (`_`), y tiene un máximo de 100 caracteres.

Por ejemplo, este **Valor** guarda el correo de la persona usuaria:

```liquid
{{ user.email }}
```

Ten en cuenta lo siguiente:

- No tiene la opción de campo requerido ni instrucciones.
- Solo está disponible en formularios. No aparece en las tareas Input de las originaciones.
- Con **Valor fijo o Liquid**, el **Valor** es obligatorio y, si su Liquid tiene un error de sintaxis, el campo no se guarda y la plataforma muestra el error.
- Se guardan hasta 255 caracteres del valor y el resto se descarta.
- Si el valor queda vacío, por ejemplo porque la URL no trae el parámetro o porque el Liquid falla al calcularse, la respuesta no incluye este campo.
- El valor se calcula de nuevo cada vez que se guarda la respuesta. Si la persona usuaria vuelve a responder un formulario que no acepta múltiples respuestas, el valor anterior no se conserva: con **Parámetro de URL**, el campo queda vacío si la URL ya no trae el parámetro.

:::warning Atención
El valor de un **Parámetro de URL** viene del navegador y cualquiera puede cambiarlo editando la URL. No lo uses para datos sensibles ni para tomar decisiones que requieran un valor confiable.
:::

### Propiedades del campo

Esta sección te permitirá modificar las opciones para cada una de las preguntas de tu formulario, deberás seleccionar un campo de la sección principal para poder hacer uso de esta sección.

Todos los campos de input cuentan con un título, que será la pregunta asociada a la respuesta, la opción de hacer ese campo requerido para enviar el formulario, y una breve descripción en caso de que para responder el campo sean necesarias instrucciones. El [Campo oculto](/es/platform/customers/forms.html#campo-oculto) es la excepción: no tiene la opción de campo requerido ni instrucciones.

Los campos **Lista desplegable** y **Preguntas Anidadas** tienen la casilla **Habilitar buscador**, desactivada por defecto, también cuando sus alternativas vienen de un [data set](/es/platform/customers/settings.html#data-sets). Con la casilla activa, la persona usuaria ve un buscador en lugar de la lista del navegador: al escribir, encuentra las alternativas que contienen el texto, sin distinguir mayúsculas ni tildes, las muestra en el orden en que las definiste y presenta hasta 100 coincidencias. En las preguntas anidadas, el buscador aparece en cada nivel. La misma casilla está disponible en las tareas [Input](/es/platform/customers/origination.html#input) de las originaciones. El campo **País** y el selector de país del campo **Dirección** siempre muestran este buscador, que además encuentra cada país por su código ISO de dos letras.

Algunos campos cuentan con validaciones, para asegurar que el usuario cumpla con ciertos requisitos para rellenar el campo, algunas de esas restricciones son:

- **Largo mínimo**: Largo requerido para que el texto sea válido
- **Largo máximo**: largo máximo permitido para que el texto sea permitido
- **Expresión regular**: Formato del texto ingresado debe coincidir con la expresión regular asociada para ser válido.
- **Número mínimo**: El número ingresado no puede ser menor que este valor.
- **Número máximo**: El número ingresado no puede ser mayor que este valor.
- **Fecha mínima**: La fecha ingresada no puede ser anterior a este valor
- **Fecha máxima**: La fecha ingresada no puede ser posterior a este valor.

De la misma forma en que algunos campos cuentan con validaciones, la mayoría de los campos de input cuentan con un valor por defecto que venga preseleccionado al momento de cargar el formulario. Los únicos que no cuentan con un valor por defecto son las preguntas anidadas. El [Texto enriquecido](/es/platform/customers/forms.html#texto-enriquecido), como no captura una respuesta, solo tiene título, identificador y contenido.

### Expresiones regulares

Para los campos de texto simple y parrafo, podrás agregar validaciones a través de expresiones regulares. Al guardar, la plataforma comprueba que la expresión sea válida según la sintaxis de expresiones regulares de Ruby, tanto en los formularios como en las tareas Input de las originaciones. Si no lo es, los cambios no se guardan y aparece un error que indica que la expresión regular no es válida. El editor marca en rojo las expresiones que el navegador no puede interpretar, pero esa marca no garantiza que la plataforma las acepte. Como la respuesta se valida tanto en el navegador como en la plataforma, usa una expresión que el editor no marque en rojo y que se guarde sin errores.

Haciendo el click en el botón de funciones, puedes ver las diferentes validaciones predeterminadas:

- Email
- URL
- Número de Teléfono
- RUT Chileno
- Número de tarjeta bancaria
- Código postal Estadounidense
- Código postal Canadiense
- Código postal Chileno
- UUID

Al seleccionar cualquiera de las diferentes opciones y al hacer click en **Añadir**, se autocompletará la expresión al campo.

### Propiedades del formulario

Esta sección te permitirá cambiar el comportamiento general del formulario. Contiene lo mismo que la vista de creación de un formulario nuevo, pero a su vez agrega un par de opciones nuevas las que se detalla a continuación.

Sus secciones son:

- **General**
- **Snippet**
- **Opciones**
- **Notificaciones**
- **JS Personalizado**

#### General
La sección **General** agrega dos opciones:
- **Texto del botón enviar**: Te permite personalizar el texto asociado al botón **Enviar** del formulario.
- **Habilitado**: Te permite determinar si los usuarios podrán o no responder el formulario. Si la opción está marcada, entonces se podrá acceder y responder el formulario, si no está habilitada, entonces los usuarios no lo verán ni podrán responderlo.

#### Snippet
La sección **Snippet**, que sólo aparecerá si el formulario es público, te permitirá copiar un código _HTML_ que podrás usar en cualquier lugar para cargar dinámicamente el formulario, incluso fuera de Modyo.

:::warning Atención
Para poder hacer uso adecuado del snippet del formulario, debes tener en cuenta la configuración _CORS_ de tu cuenta en Modyo y los _headers_ de seguridad de donde estés insertando el snippet.

Para hacer uso del snippet dentro de una página en la plataforma Modyo, debes copiar el código Javascript dentro de la sección Javascript y el div en la sección HTML. El apartado de HTML en [Pages](/es/platform/channels/pages) no puede correr Javascript, es obligatorio el uso del apartado Javascript para correr el código correctamente.
:::

Las secciónes **Opciones** y **Notificaciones** no agregan nada diferente a lo que se encuentra en **Nuevo Formulario**

:::warning Atención
Si usas un sitio de Modyo con un dominio personalizado, deberás activar la opción para compartir orígenes de recursos [CORS](/es/platform/core/security) en la configuración de la plataforma.
:::

### Notificaciones

En la sección **Notificaciones** podrás configurar los distintos correos que se envían luego de que un usuario responde el formulario.

La notificación por correo envía un correo del tipo "administrativo" en el cual se notifica vía ese canal de que alguien respondió el formulario. Puedes asignar un asunto y un listado de correos a los que quieras notificar.

El correo de agradecimiento te permite personalizar un correo que será enviado al usuario que respondió el formulario. Puedes personalizar tanto el asunto como el cuerpo del mensaje haciendo uso de [Liquid](/es/platform/channels/liquid-markup). Debajo del campo para personalizar el mensaje, podrás ver un listado de variables que puedes usar para personalizar el correo.

A continuación, tienes un ejemplo de código que podrás usar como base para personalizar el correo de agradecimiento.

```liquid
Message Sent: {{ 'now' | date: "%b %d, %y" }}
<table width="600px">
    <tr>
        <td><b>user name</b></td>
        <td colspan="2"> {{user.name}}</td>
    </tr>
    <tr>
        <td><b>user first name</b> </td>
        <td colspan="2"> {{user.first_name}}</td>
    </tr>
    <tr>
        <td><b>user last name</b></td>
        <td colspan="2"> {{user.last_name}}</td>
    </tr>
    <tr>
        <td><b>user email</b></td>
        <td colspan="2"> {{user.email}}</td>
    </tr>
    <tr>
        <td><b>form name</b></td>
        <td colspan="2"> {{form.name}}</td>
    </tr>
    <tr>
        <td><b>form description</b></td>
        <td colspan="2"> {{form.description}}</td>
    </tr>
    <tr>
        <td colspan="3" align="center" background-color="#f0f8ff"><b>Questions</b></td>
    </tr>
    <tr>
        <td width="15%"><b>Question type</b></td>
        <td width="15%"><b>Question</b></td>
        <td width="70%"><b>Answer</b></td>
    </tr>
    {% for question in form.questions %}
    <tr>
        <td>{{ question.type }}</td>
        <td>{{ question.title }}</td>
        <td>{{ question.answer }}</td>
    </tr>
    {% endfor %}
</table>
```

### JS Personalizado

Añade funcionalidad como una validación personalizada a tu formulario usando Javascript siguiendo estos pasos:

1. En la plataforma Modyo, dentro de tu realm, haz click en tu formulario.
1. Haz click en más opciones y haz click en **Ver**.
1. Abre las herramientas de desarrollador e inspecciona el elemento que quieres modificar.
1. Anota el id del elemento a validar. (e.g. `answers_3684_value`)
1. En el apartado de JS Personalizado podrás agregar validaciones o funcionalidad extra usando Javascript.
1. Haz click en **Guardar**.

:::tip Tip
Este script va a correr en seguida del div que contiene el formulario, por lo que es importante tomar en cuenta que puede ser afectado por el resto de la configuración del sitio. Por ejemplo si este formulario es embebido en otro sitio externo que no puede correr Javascript.
:::

## Respuestas

Al hacer click en un formulario, llegarás a una vista donde se listan todas las respuestas que los usuarios han enviado y la fecha en que respondieron.

Puedes exportar las respuestas a un archivo _XLS_ o _CSV_ seleccionándolas en el listado y luego usando las acciones masivas al final del mismo.

:::danger Peligro
Puedes eliminar respuestas una por una usando la acción a la derecha de cada respuesta, o haciendo uso de las acciones masivas, seleccionando múltiples respuestas y luego el botón **Borrar** al final de la lista. Ten en cuenta que esta acción es irreversible y una vez que una respuesta ha sido eliminada, no podrá ser recuperada.
:::

Para ver en detalle la respuesta de un usuario, basta con hacer click en el nombre del usuario, y accederás al listado de preguntas junto a las respuestas que ese usuario envió en esa determinada ocasión.
