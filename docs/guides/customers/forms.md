---
search: true
---

# Formularios

Una de las funcionalidades mas requeridas por todas las plataformas es la captura de datos de usuarios para posteriormente analizar y segmentar. Con esta herramienta podrás crear cuantos formularios necesites para recolectar datos provenientes de los usuarios de tus sitios.  

![Digital factory](/assets/img/platform/form-index.png)

Al entrar a la herramienta, podrás ver un listado de todos los formularios que hay activos actualmente en la cuenta. Podrás filtrar por su estado (habilitado o deshabilitado), por el sitio en el que se despliegan por defecto y buscar por el nombre del formulario.

En cada fila de la tabla de formularios, verás en la primera columna el nombre del formulario, a continuación la fecha de creación, y en la última columna, la cantidad de respuestas que se han enviado para ese formulario.

Para crear un nuevo formulario, haz click en la acción principal arriba a la derecha "+ Nuevo".

Desde esta vista también puedes acceder a la vista de análisis haciendo click en el título del formulario, y también al listado de respuestas del formulario, haciendo click en el número de respuestas del formulario.

Puedes habilitar y deshabilitar los formularios para que los usuario puedan o no enviar respuestas. Para deshabilitar un formulario, debes ir a la vista de análisis y seleccionar "Deshabilitar" en las opciones arriba a la derecha.

Para habilitar un formulario deshabilitado, desde le índice de formularios deberás cambiar el primer filtro a "Deshabilitados" o "Todos" para luego ir a la vista de análisis y habilitarlo haciendo uso de la opción "Habilitar" de las opciones arriba a la derecha.

## Análisis

Modyo permite hacer un análisis global de cada formulario. En la página de análisis solo habrá que seleccionar alguna de las preguntas del formulario y podrás ver una representación gráfica de las respuestas que los usuarios han enviado.

- Texto simple: Verás un conteo de cuantas personas rellenaron este campo.
- Número: Verás el mínimo, máximo y el promedio de las respuestas.
- Checkbox: Verás un gráfico de barras con todas las alternativas.
- Fecha: Verás el conteo de respuestas totales, y la fecha mínima y máxima que se han enviado como respuestas.
- Párrafo: Verás un conteo de cuantas personas rellenaron este campo.
- Dropdown: Verás un gráfico de barras con todas las alternativas.
- Elección: Verás un gráfico de barras con todas las alternativas.
- Preguntas anidadas: Verás un gráfico de barras con todas las alternativas del primer nivel.
- Archivo:  Verás un conteo de cuantas personas rellenaron este campo, junto con los últimos cinco archivos subidos.

:::tip
En la barra derecha podrás ver un contador del total de veces que se ha respondido el formulario, pero en los conteos de respuestas para cada pregunta, verás el conteo de cuantas personas pusieron un valor a esa pregunta, por lo que es normal ver un número menor de respuestas en cada pregunta con respecto a las respuestas totales del formulario.
:::

## Respuestas

Al hacer click en el contador de respuestas de un formulario, llegarás a una vista donde se listan todas las respuestas que los usuarios han enviado y la fecha en que respondieron. 

Puedes exportar las respuestas a un archivo _XLS_ o _CSV_ seleccionando las respuestas que quieras exportar y luego usando las acciones masivas al final del listado. 

:::danger
Puedes eliminar respuestas una a una usando la acción a la derecha de cada respuesta, o haciendo uso de las acciones masivas, seleccionando múltiples respuestas y luego el botón "Borrar" al final de la lista. Ten en cuenta que esta acción es irreversible y una vez que una respuesta ha sido eliminada, no podrá ser recuperada.
:::

Para ver en detalle la respuesta de un usuario, basta con hacer click en el nombre del usuario, y accederás al listado de preguntas junto a las respuestas que ese usuario envió en esa determinada ocasión.

## Editar

PAra modificar un formulario, deberás ir a la sección "Análisis" y usar la acción "Editar" en el menú de opciones arriba a la derecha.

Una vez que entres en la sección de edición de un formulario, podrás ver 2 secciones: una sección central, donde podrás reorganizar las preguntas arrastrándoles en el orden requerido, y la sección lateral derecha, que cuenta con tres pestañas:

### Añadir campo
Estasección te permitirá añadir cuantos campos sean necesarios para completar el formulario o eliminar los que no sean necesarios:

- Texto simple: Permite al usuario ingresar un texto hasta 256 caracteres.
- Párrafo: Permite al usuario ingresar un texto de múltiples líneas hasta 65535 caracteres.
- Número: Le permite al usuario ingresar números.
- Dropdown: Te permite añadir opciones de las cuales el usuario podrá que elegir una en formato dropdown.
- Checkbox: Te permite añadir opciones de las cuales el usuario podrá que elegir múltiples en formato checkbox.
- Elección: Te permite añadir opciones de las cuales el usuario podrá que elegir una en formato _radio button_.
- Fecha: Te permite añadir un campo de fecha en el que el usuario podrá seleccionar una dentro del rango permitido.
- Preguntas anidadas: Te permite añadir una serie de alternativas que pueden ser anidadas, de tal forma que al usuario se le solicita que seleccione una de las posibles opciones anidadas dentro de la opción que seleccionó.
- Archivo: Te permite añadir un campo para solicitar que el usuario suba un archivo que quede registrado como respuesta del formulario.

Puedes eliminar uno de los campos del formulario haciendo click en el icono de basurero a la derecha de cada campo en la sección principal. La eliminación será efectiva una vez que guardes los cambios.

:::danger
Si tu formulario ya está activado y ya tienes respuestas, ten mucho cuidado al eliminar preguntas de el, ya que al hacerlo, estarás eliminando los valores de esas respuestas que los usuario ya enviaron. Esta acción es irreversible.
:::

### Propiedades del campo
Esta sección te permitirá modificar las opciones para cada una de las preguntas de tu formulario, deberás seleccionar un campo de la sección principal para poder hacer uso de esta sección.

Todos los campos que puedes añadir cuentan con un título, que será la pregunta asociada a la respuesta, la opción de hacer ese campo requerido para enviar el formulario, y una breve descripción en caso de que para responder el campo sean necesarias instrucciones.

Algunos campos cuentan con validaciones, para asegurarnos de el usuario cumpla con ciertos requisitos para rellenar el campo, algunas de esas restricciones son:

- Largo mínimo: Largo requerido para que el texto sea válido
- Largo máximo: largo máximo permitido para que el texto sea permitido
- Expresión regular: Formato del texto ingresado debe coincidir con la expresión regular asociada para ser válido.
- Número mínimo: El número ingresado no puede ser menor que este valor.
- Número máximo: El número ingresado no puede ser mayor que este valor.
- Fecha mínima: La fecha ingresada no puede ser anterior a este valor
- Fecha máxima: La fecha ingresada no puede ser posterior a este valor.

De la misma forma en que algunos campos cuentan con validaciones, la mayoría cuentan con un valor por defecto que venga preseleccionado al momento de cargar el formulario. Los únicos que no cuentan con un valor por defecto son las preguntas anidadas y los archivos.

### Propiedades del formulario
Esta sección te permitirá cambiar el comportamiento general del formulario. Aquí encontrarás cuatro secciones:

- General
- Snippet
- Opciones
- Notificaciones

En la sección **general**, podrás modificar: 
- **Nombre**: Nombre asociado al formulario. Este valor aparecerá tanto en el índice de formularios en el administrador de Modyo, y también como título cuando un usuario lo vaya a responder.
- **Descripción**: Este texto aparecerá como texto debajo del título cuando los usuarios lo vayan a responder.
- **Límite de personas**: Permite determinar el número máximo de respuestas son permitidas.
- **Texto del botón enviar**: Te permite personalizar el texto asociado al botón "Enviar" del formulario.
- **Sitio**: Te permite seleccionar en que sitio se mostrará este formulario. Ten en consideración que esto provoca que el formulario cambie su aspecto de acuerdo a las clases definidas en el CSS global del sitio. Para más información, dirígete a [Template builder](/guides/channels/templates.html)
- **Habilitado**: Te permite determinar si los usuarios podrán o no responder el formulario. Si la opción estás marcada, entonces se podrá acceder y responder el formulario, si no está habilitada, entonces los usuarios no lo verán ni podrán responderlo.
- **Aceptar múltiples respuestas**: Si esta opción está habilitada, cada vez que un usuario responda el formulario, se registrará como una nueva respuesta. Si esta opción está deshabilitada, cada vez que un mismo usuario responda el formulario, estará sobrescribiendo su respuesta anterior. 
- **Solo para usuarios registrados**: Te permite determinar si el formulario solo será visible para usuario registrados en Modyo. Si esta opción está habilitada, un usuario sin sesión no podrá ver el formulario. Si esta opción está deshabilitada, cualquier usuario podrá responder el formulario.
- **Solicitar contestar automáticamente**: Si el formulario es privado (solo usuario registrados lo pueden contestar), aparecerá esta opción que te permitirá redireccionar automáticamente a los usuarios que inicien sesión en el sitio asociado al formulario para que lo contesten.
- **Habilitar targetización**: Si el formulario es privado (solo usuarios registrados lo pueden contestar), podrás seleccionar un conjunto de usuarios que puedan contestar el formulario haciendo uso de los targets. Para aprender más dirígete a [Targets](/guides/customers/targets.html)

:::warning
En caso de ser un formulario público, los usuarios que no tienen una sesión activa en Modyo, verás tres campos obligatorios en la parte superior del formulario: Nombre, Apellido y Correo. Una vez que envíen el formulario, se creará un usuario con esos valores y luego la respuesta será asociada a ese usuario.
:::

:::warning 
Si un usuario no tiene una sesión activa, y rellena el formulario, y el correo electrónico coincide con uno de los usuario ya registrados en Modyo, entonces la respuesta quedará asociada al usuario ya existente y no se creará uno nuevo.

La sección **Snippet** solo aparecerá si el formulario es público, y te permitirá copiar un código _HTML_ que podrás usar en cualquier lugar para cargar dinámicamente el formulario, incluso fuera de modyo. 

:::warning
Para poder hacer uso adecuado del snippet del formulario, debes tener en cuenta la configuración _CORS_ de tu cuenta en modyo y los _headers_ de seguridad de donde estés insertando el snippet.
:::

:::warning
Si usas un sitio de Modyo con un dominio personalizado, deberás activar la opción para compartir orígenes de recursos [CORS](/guides/platform/security.htm) en la configuración de la cuenta.
:::

En la sección **Opciones del formulario* podrás modificar las opciones de redirección luego de que un usuario responda el formulario

- **Opciones por defecto**: Luego de responder el formulario el usuario es redireccionado al home del sitio asociado al formulario
- **URL de redirección**: Te permite ingresar una URL a la que se redireccionará al usuario luego de haber respondido el formulario
- **Página de agradecimiento**: Te permite añadir un mensaje de agradecimiento personalizado luego de que un usuario responde el formulario, junto a un botón que lo llevará a una página del sitio. La URL del botón es una URL relativa del sitio asociado al formulario. También podrás determinar si quieres que el usuario sea redireccionado automáticamente a esa página luego de un tiempo determinado.

En la sección **Notificaciones** podrás configurar los distintos correos que se envían luego de que un usuario responde el formulario. 

La notificación por correo envía un correo del tipo "administrativo" en el cual se notifica vía ese canal de que alguien respondió el formulario. Puedes asignar un asunto y un listado de correos a los que quieras notificar.

El correo de agradecimiento te permite personalizar un correo que será enviado al usuario que respondió el formulario. Puedes personalizar tanto el asunto como el cuerpo del mensaje haciendo uso de [Liquid](/guides/channels/liquid-markup.html). bajo el campo para personalizar el mensaje, podrás ver un listado de variables que puedes usar para personalizar el correo.

A continuación, tienes un ejemplo de código que podrás usar como base para personalizar el correo de agradecimiento.

```
Enviaste esta respuesta el: {{ 'now' | date: "%b %d, %y" }}
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