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

En esta sección, puedes agregar campos para completar tu formulario o eliminar los que no necesites. Los tipos de campos que puedes agregar son:

- **Texto simple**: Permite ingresar hasta 256 caracteres.
- **Párrafo**: Permite ingresar texto en múltiples líneas de hasta 65,535 caracteres.
- **Número**: Permite ingresar números.
- **Dropdown**: Agrega opciones para que la persona usuaria seleccione una en formato _dropdown_.
- **Checkbox**: Agrega opciones que permiten seleccionar múltiples valores en formato _checkbox_.
- **Elección**: Agrega opciones para seleccionar una opción en formato _radio button_.
- **Fecha**: Permite seleccionar una fecha dentro de un rango permitido
- **Preguntas anidadas**: Permite agregar opciones dentro de otras opciones. El usuario selecciona una opción principal y, según su elección, puede elegir entre las opciones relacionadas que se despliegan.
- **Archivo**: Permite cargar archivos.
- **País**: Selector de países.
- **Teléfono**: Campo para ingresar números telefónicos.
- **Dirección**: Campo estructurado para capturar direcciones.
- **Grupo**: Agrupa un listado de varios campos repetibles. Puedes ver más detalles sobre este formato en la [documentación sobre Grupos repetibles](/es/platform/content/types#grupo)

Puedes eliminar uno de los campos del formulario haciendo click en el icono de basurero a la derecha de cada campo en la sección principal. La eliminación será efectiva una vez que guardes los cambios.

:::danger Peligro
Si tu formulario ya está activado y ya tienes respuestas, ten mucho cuidado al eliminar preguntas de el, ya que al hacerlo, estarás eliminando los valores de esas respuestas que los usuario ya enviaron. Esta acción es irreversible.
:::

### Propiedades del campo

Esta sección te permitirá modificar las opciones para cada una de las preguntas de tu formulario, deberás seleccionar un campo de la sección principal para poder hacer uso de esta sección.

Todos los campos que puedes añadir cuentan con un título, que será la pregunta asociada a la respuesta, la opción de hacer ese campo requerido para enviar el formulario, y una breve descripción en caso de que para responder el campo sean necesarias instrucciones.

Algunos campos cuentan con validaciones, para asegurar que el usuario cumpla con ciertos requisitos para rellenar el campo, algunas de esas restricciones son:

- **Largo mínimo**: Largo requerido para que el texto sea válido
- **Largo máximo**: largo máximo permitido para que el texto sea permitido
- **Expresión regular**: Formato del texto ingresado debe coincidir con la expresión regular asociada para ser válido.
- **Número mínimo**: El número ingresado no puede ser menor que este valor.
- **Número máximo**: El número ingresado no puede ser mayor que este valor.
- **Fecha mínima**: La fecha ingresada no puede ser anterior a este valor
- **Fecha máxima**: La fecha ingresada no puede ser posterior a este valor.

De la misma forma en que algunos campos cuentan con validaciones, la mayoría cuentan con un valor por defecto que venga preseleccionado al momento de cargar el formulario. Los únicos que no cuentan con un valor por defecto son las preguntas anidadas.

### Expresiones regulares

Para los campos de texto simple y parrafo, podrás agregar validaciones a través de expresiones regulares. Haciendo el click en el botón de funciones, puedes ver las diferentes validaciones predeterminadas:

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

### Máscaras de entrada

Una máscara de entrada restringe lo que el usuario puede teclear en un campo y formatea el valor mientras escribe. A diferencia de la expresión regular, que valida el valor completo recién al enviar el formulario, la máscara actúa tecla por tecla: el usuario no llega a ingresar un valor con el formato equivocado.

Las máscaras se configuran en la sección **Opciones** del campo, tanto en el constructor de formularios como en el de las tareas Input de las [originaciones](/es/platform/customers/origination.html). Están disponibles en los campos **Texto simple** y **Número**. Los campos **Correo electrónico** y **URL** traen una máscara fija de fábrica, que impide teclear caracteres que esos formatos nunca admiten y no se configura ni se desactiva.

#### Modos de la máscara

El selector **Máscara de entrada** define el modo. Los modos son excluyentes, y cambiar de modo es la única forma de activar o desactivar la máscara:

| Modo | Qué hace | Disponible en |
|---|---|---|
| **Sin máscara** | Valor por defecto. El campo no restringe lo que se teclea. | Texto simple y Número |
| **Patrón** | El campo inserta los separadores por su cuenta y acepta en cada posición solo el tipo de carácter que corresponde. Define un largo fijo, por ejemplo `00/00/0000` o `0000 0000 0000 0000`. | Texto simple |
| **RegExp** | El campo filtra qué caracteres se pueden teclear, sin largo fijo ni separadores. Por ejemplo, solo letras y espacios. | Texto simple y Número |
| **Número** | Aplica el separador de miles mientras se escribe, con largo variable. | Número |

#### Catálogo de máscaras

El botón **Catálogo de máscaras** ofrece máscaras predefinidas que precargan el patrón y lo dejan editable:

- **Tarjeta de crédito**
- **RUT (Chile)**
- **Patente (Chile)**
- **Texto sin emojis**
- **Solo letras y espacios**

También puedes escribir tu propio patrón desde cero, sin partir de un preset.

#### Tokens del patrón

En el modo **Patrón**, cada posición del patrón se escribe con uno de estos tokens. Cualquier otro carácter se toma como literal y la máscara lo inserta sola:

| Token | Significado |
|---|---|
| `0` | Dígito |
| `a` | Cualquier letra, de cualquier alfabeto |
| `*` | Cualquier carácter |
| `[ ]` | Posiciones opcionales, cada una puede quedar vacía |
| `\` | Escapa el carácter siguiente para tratarlo como literal |

Algunos presets agregan bloques propios para posiciones que los tokens básicos no cubren. El RUT chileno, por ejemplo, usa un bloque `V` para el dígito verificador, que acepta números y la letra K. El constructor muestra los bloques del preset junto a la tabla de tokens.

El campo **Probar la máscara** te permite escribir un valor de prueba y ver el resultado antes de publicar.

#### Cómo se guarda y cómo se muestra el valor

El valor se guarda y se entrega por la API **siempre sin formato**: la máscara es una ayuda de captura, no cambia el dato. El valor formateado se muestra en el panel de administración, en la ficha de la respuesta y en las plantillas [Liquid](/es/platform/channels/liquid-markup).

:::warning Las reglas se evalúan sobre el valor sin formato
La [lógica condicional](/es/platform/customers/origination.html#logica-condicional) de las originaciones y los filtros de [segmentos](/es/platform/customers/segments.html) comparan contra el valor guardado, no contra el que ve el usuario. Una regla escrita como `12.345.678-9` nunca calza si el valor almacenado es `123456789`. El editor te muestra un aviso con las dos formas del valor cuando eliges un campo con máscara.
:::

#### Consideraciones

- **La máscara también se valida en el servidor.** No se puede evadir desde la API ni desde el panel de agente: un valor que no calza con el patrón o con la expresión se rechaza con un error de validación.
- **En el modo RegExp, la expresión filtra cada tecla**, así que debe aceptar también los valores a medio escribir. Usa `*` o `?` en lugar de `+`: escribe `^[a-z]?0*$` y no `[a-z]0+`. Una expresión que rechace todo valor de un solo carácter deja el campo sin poder escribirse, y el constructor te lo advierte.
- **El modo Patrón desactiva el largo mínimo y máximo**, porque el patrón ya define el largo y el formato. Los valores que tuvieras configurados se conservan y vuelven a activarse si eliges **Sin máscara** o **RegExp**.
- **El modo Número mantiene activos el mínimo y el máximo**, y los usa para impedir que el usuario escriba un valor fuera de rango. Admite hasta 16 dígitos; un campo Número sin máscara no tiene ese tope.
- **La máscara y la expresión regular son complementarias.** La máscara restringe la forma mientras se escribe; la expresión regular valida el valor completo al enviar.
- **Una máscara no valida el significado.** Un preset de documento de identidad asegura la forma del dato, no que el dígito verificador sea correcto ni que la fecha exista.
- **Los valores guardados antes de configurar la máscara no se migran ni se reformatean.** Si el usuario vuelve a editar una respuesta cuyo valor no calza con la máscara nueva, el campo se edita sin máscara y la validación del servidor se aplica igual.

### Enlaces en los textos del formulario

Los títulos de los campos, sus instrucciones y las etiquetas de las alternativas admiten enlaces escritos con HTML, para casos como remitir a los términos y condiciones o a la política de privacidad sin sacar al usuario del formulario:

```html
Acepto los <a href="/terminos" target="_blank">términos y condiciones</a>
```

Esto aplica tanto a los formularios como a las tareas Input de las originaciones, que comparten el mismo renderizado.

Lo que se permite escribir es acotado:

| | Qué se acepta |
|---|---|
| Etiquetas | Solo `a`. Cualquier otra etiqueta se descarta y queda solo su texto. |
| Atributos | `href`, `target`, `rel` y `title`. |
| Valores de `target` | `_blank` y `_self`. `_top` y `_parent` se descartan, porque rompen un formulario embebido en un widget. |
| Esquemas de `href` | `http`, `https`, `mailto` y `tel`, además de rutas relativas y anclas. `javascript:`, `data:` y cualquier otro se descartan. |
| `rel` | En los enlaces con `target="_blank"` se fuerza `noopener noreferrer`, lo escribas o no. |
| `script` y `style` | Se eliminan junto con su contenido. |

El enlace se ve como tal en el formulario del sitio, en los resúmenes de las tareas de confirmación y validación de una originación, y en el formulario de la vista de agente. En el resto de las superficies el texto sale plano, sin markup: el detalle de la respuesta en el panel, la exportación a CSV y XLS, el correo de notificación, la API y las plantillas Liquid.

:::tip Dónde conviene poner los enlaces
El lugar natural es el título o las instrucciones de la pregunta. En las etiquetas de las alternativas también funcionan, salvo en los campos **Dropdown** y **Preguntas anidadas**, donde el navegador no admite markup dentro de una opción y la etiqueta sale como texto. Además, la etiqueta de una alternativa se guarda como copia en la respuesta del usuario, así que conviene mantenerla corta y evitar el punto y coma, que es el separador de niveles en las preguntas anidadas.
:::

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
