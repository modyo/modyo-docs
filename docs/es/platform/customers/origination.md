---
search: true
---

# Origination

**Origination** es una herramienta diseñada para optimizar y automatizar procesos complejos en diversos sectores, como la gestión de solicitudes, aprobaciones o registros que requieren la interacción de múltiples partes. Esta característica permite a los usuarios crear y gestionar flujos de trabajo colaborativos en los que diferentes actores pueden participar activamente. A través de **Origination**, es posible solicitar y recopilar documentación e información entre partes, facilitando la validación y el avance del proceso en función de los requisitos cumplidos.

Una de las principales ventajas de Origination es su capacidad para gestionar flujos de trabajo en múltiples pasos, permitiendo que cada paso sea verificado antes de avanzar, lo que garantiza la precisión y el cumplimiento de cada etapa. Además, Origination ofrece un entorno seguro y eficiente, evitando el intercambio de información confidencial por medios inseguros, lo que reduce el riesgo de errores y asegura la protección de los datos.

Esta funcionalidad no está incluida por defecto en todos los planes de Modyo. Para activarla, es necesario contactar al equipo de Modyo para solicitar su implementación.

Origination está diseñado para cualquier organización que busque agilizar procesos complejos, mejorar la colaboración entre los involucrados y asegurar que el flujo de trabajo se gestione de manera estructurada y segura.

## Crear una Nueva Originación

Para crear una nueva originación, sigue estos pasos:

- En el menú lateral, navega a **Customers** > **Reinos** y selecciona el Reino en el que deseas trabajar.
- Dirígete a la opción **Origination**.
- Haz clic en el botón **+ Nueva originación**.
- Asigna un nombre y selecciona el tipo de originación que deseas crear.
- Haz clic en **Crear** para finalizar y comenzar a configurar los pasos del nuevo flujo de originación.


## Flujos de Originación

Los flujos de originación están compuestos por **Pasos** y **Tareas**, que estructuran y definen las acciones necesarias para completar el proceso.

### Pasos

Los pasos agrupan tareas que se presentan en una misma pantalla. Para avanzar al siguiente paso, el usuario debe completar todas las tareas asignadas.

#### Agregar pasos

Para agregar un paso, presiona el botón **Añadir** y designa los valores

- **Nombre**: El nombre que se mostrará en la interfaz del usuario para identificar el Paso.
- **Identificador**: Un valor único que se incluirá en la URL del flujo de originación.

:::warning Atención
 Cada paso debe incluir al menos una tarea válida para ser guardado.
:::

### Tareas

Las tareas son las acciones individuales dentro de cada paso. Estas tareas recopilan información, realizan validaciones o solicitan acciones específicas del usuario. Las tareas se completan de manera secuencial, y al validarse, permiten avanzar al siguiente paso del flujo.

#### Agregar tareas

Para agregar una nueva Tarea, presiona el botón **+ Agregar tarea** y eso creará un nuevo contenedor de tareas. Al crear una tarea, debes incluir sus valores

- **Nombre**: El nombre de la tarea que será visible para el usuario.
- **Identificador**: Un identificador único que se incluirá en la URL de la originación.
- **Descripción**: Un breve texto explicativo sobre la tarea, que será visible para el usuario.
- **Tipo**: Selecciona el tipo de tarea en función de los objetivos del flujo.

#### Tipos de tareas

Los tipos de tareas disponibles son:

- **Input**: Solicitan información o entrada de datos del usuario.
- **Validación**: Requieren que un administrador valide la tarea antes de avanzar al siguiente paso.
- **Firma**: Solicitan al usuario una firma digital.
- **Revisión pendiente**: Pausa el proceso hasta que un administrador autorice el avance al siguiente paso.
- **Snippet de código**: Permiten agregar código a la medida.
- **Proceso de originación**: Llaman a otro flujo de originación dentro de este.
- **Invitación**: Permiten invitar a otros usuarios a llenar datos necesarios en el flujo.

##### Propiedades de la tarea

En este apartado se pueden editar los valores de la tarea seleccionada, puedes encontrar estos valores

- **Nombre**: El nombre de la tarea que será visible para el usuario.
- **Identificador**: Un identificador único que se incluirá en la URL de la originación.
- **Descripción**: Un breve texto explicativo sobre la tarea, que será visible para el usuario.

### Input

En las tareas Input puedes incorporar una amplia variedad de campos en tus formularios para personalizar la recolección de datos de tus usuarios.

#### Añadir campos

Para incluir un nuevo campo debes seleccionar una tarea y seleccionar la pestaña **Añadir**

Origination soporta todos los tipos de entrada disponibles en formularios. Puedes ver el listado completo de tipos en la [documentación de formularios](https://docs.modyo.com/es/platform/customers/forms#anadir)


#### Editar campos

Al seleccionar un campo, puedes modificar sus propiedades al dirigirte a  la pestaña **Editar** Allí encontrarás diferentes propiedades según las características del campo seleccionado. Las principales propiedades son:

- **Título del campo**:Es el nombre del campo que se mostrará en la interfaz del usuario. Este debe ser claro y descriptivo para facilitar la interacción.
- **Requerido**: Determina si el campo es obligatorio o no. Si está activado, el usuario deberá completarlo antes de continuar con el flujo.
- **Instrucciones del campo**: proporciona orientación adicional para que el usuario comprenda cómo completar el campo. Estas instrucciones se muestran directamente en la interfaz, debajo del campo.
- **Agregar campo Pop-up de instruciones**: Agrega un ícono de ayuda junto al campo. Al hacer clic en este ícono, se despliega un mensaje con información adicional o consejos útiles relacionados con el campo.
- **Opciones**: Propiedades adicionales de acuerdo al tipo de campo seleccionado.

### Validación

La tarea de validación requiere una revisión manual del agente asignado. Este debe validar los datos entregados por el usuario para desbloquear la siguiente tarea del flujo.

### Firma

La tarea de firma permite una firma simple con un checkbox o una avanzada cuando hay algun proveedor de firma digital instalado en las integraciones del reino.

### Revisión pendiente

La tarea de revisión pendiente pausa el proseso de originación. Se usa para gatillar procesos asíncronos, generalmente en sistemas externos.


### Snippet de código

Los **snippets de código** o code snippets, permiten agregar bloques personalizados de código en los flujos de originación. Estos bloques soportan **HTML, JavaScript y CSS**, lo que facilita la creación de componentes interactivos o la personalización del flujo según las necesidades del usuario.

Los **code snippets** pueden:

- Ajustarse a cualquier escenario dentro del flujo de originación.
- Desplegar datos en tiempo real desde la aplicación.
- Almacenar y consumir información relevante para el proceso.

#### Insertar un Code Snippet

Para agregar un **code snippet** en una tarea de originación, sigue estos pasos:

1. Crea una nueva **Tarea** dentro de un paso del flujo.
2. Selecciona el tipo de tarea **Snippet de código**.
3. Configura las propiedades de la tarea.

#### Propiedades del Snippet de código

- **Task ID**: Identificador único de la tarea. Se genera automáticamente al guardar la tarea y permite acceder a los datos desde la API.
- **Nombre**: Nombre de la tarea, visible para el usuario.
- **Identificador**: Valor único que se incluye en la URL de originación.
- **Descripción**: Breve texto explicativo que describe la tarea.
- **Completar la tarea mediante la API**:
Si se marca, la acción de continuar se desactivará por defecto para esta tarea y requerirá que el desarrollador notifique el estado de finalización mediante la API de JavaScript.


#### API de JavaScript para Code Snippets

Modyo proporciona una API en JavaScript para interactuar con los code snippets en tiempo de ejecución.

#### Métodos disponibles

- **`getUrl()`**: Retorna la URL del flujo de originación actual.
- **`enableButton()`**: Habilita el botón de acción de la tarea y permite al usuario continuar con el flujo.

#### API JSON para Code Snippets

Los Code Snippets pueden comunicarse con la API de originación utilizando datos en formato **JSON**.

Para obtener datos almacenados en la respuesta actual, usa el método `getUrl()` para construir la solicitud. Para guardar información, se debe realizar una **petición POST** a la misma URL.


#### Ejemplo de estructura JSON

Cuando consumes datos de la API JSON obtendrás un objeto con todas los datos almacenados en la respuesta actual.

```json
{
  "submission": {
    "sequence_id": "12345",
    "fields": [
      {
        "answers": [
          {
            "question": {
              "label": "What's your name?"
            },
            "text_field": "Jorge Regula"
          }
        ]
      }
    ]
  },
  "task": {
    "task_id": "67890",
    "step": {
      "uid": "abcd1234"
    }
  },
  "page": {
    "name": "Origin Page"
  }
}
```

:::warning Atención
Para almacenar información, los datos deben utilizar formato JSON válido, los errores de formato no serán procesados.
:::

#### Uso de Liquid en code snippets

Los code snippets pueden utilizar objetos de liquid para acceder a datos internos de la respuesta y personalizar la experiencia del usuario.


#### Submission Objetos

En un flujo de originación, cada respuesta representa el proceso en curso de un usuario específico. Estos son algunos de los principales atributos disponibles a través de Liquid:

| Descripción  | Ejemplo  |
|---|---|
| **submission.sequence_id** Número de secuencia de la actual respuesta.  | ``` 77 ``` |
| **submission.assignee.name** Nombre de la persona asignada.  | ```John``` |
| **submission.fields** Array con los campos almacenados dentro de la respuesta actual. | ```[{"question": {"label": "What's your name?"},"text_field": "Jorge Regula"}]``` |
| **submission.QUESTION_ID** Al usar el ID de una pregunta específica ( ej: submission.123456) se accede directamente a su información | ```{"question": {"label": "What's your name?"},"text_field": "John Doe"}``` |
| **submission.origination.name** Nombre de la originación. | ```My Origination``` |
| **submission.origination.steps** Array con los nombres de los steps en la originación | ```[ {"uid": "step 1"}, {"uid": "step 2"}]``` |
| **submission.origination.tasks** Array con todos los tasks en la originación y el step al que corresponden | ```[{"task_id": "67890","name": "Task 1", description: "step 1": { "uid": "abcd1234" } }]``` |

Puedes aprender más sobre [Objetos Liquid](/es/platform/channels/liquid-markup/objects) en nuestra documentación.

#### Ejemplo de Code Snippets

En este ejemplo puede encontrar en uso el  acceso a datos por Objetos de Liquid e interacción con la APIs de JavaScript y JSON. Recuerda reemplazar el valor `QUESTION_ID` por el correspondiente en tu respuesta.

``` html
<div class="form-group">
    <div class="form-group">
        <label for="productDropdown" class="form-label">Select a car <span class="req">*</span></label>
        <select class="form-select" id="productDropdown" disabled>
            <option value="" selected>Loading...</option>
        </select>
    </div>
    <div class="form-group">
        <label for="colorDropdown" class="form-label">Select your favorite color <span class="req">*</span></label>
        <select class="form-select" id="colorDropdown" disabled>
            <option value="" selected>Loading...</option>
        </select>
    </div>
	  <div class="form-group">
        <label for="yearInput" class="form-label">Year <span class="req">*</span></label>
        <input type="number" class="form-control" id="yearInput" placeholder="e.g., 2023">
    </div>
	  <div class="form-group">
        <label for="dateInput" class="form-label">Driver license expiration<span class="req">*</span></label>
        <input type="date" class="form-control" id="dateInput">
    </div>
	 <div class="form-group">
     <label for="extrasSelect" class="form-label">Select extras (multi-select)</label>
       <select class="form-select" id="extrasSelect" multiple>
         <option value="ac">Air Conditioning</option>
         <option value="gps">GPS</option>
         <option value="sunroof">Sunroof</option>
         <option value="leather_seats">Leather Seats</option>
       </select>
   </div>
</div>
<script>
    const staticProducts = [
        { id: 'ferrari', title: 'Ferrari' },
        { id: 'lamborghini', title: 'Lamborghini' },
        { id: 'maserati', title: 'Maserati' },
        { id: 'alfa_romeo', title: 'Alfa Romeo' },
        { id: 'fiat', title: 'Fiat' },
        { id: 'lancia', title: 'Lancia' },
        { id: 'pagani', title: 'Pagani' }
    ];

    const staticColors = [
	 { id: 'white', name: 'White' },  
	{ id: 'red', name: 'Red' },
        { id: 'blue', name: 'Blue' },
        { id: 'black', name: 'Black' },    
        { id: 'silver', name: 'Silver' },
        { id: 'green', name: 'Green' },
        { id: 'yellow', name: 'Yellow' }
    ];

    const productDropdown = document.getElementById('productDropdown');
    const colorDropdown = document.getElementById('colorDropdown');
	  const yearInput = document.getElementById('yearInput');
	  const dateInput = document.getElementById('dateInput');
	  const extrasSelect = document.getElementById('extrasSelect'); 

    async function initializeDropdowns() {
        const savedData = await getRequestJson();
        let selectedProductValue = null;
        let selectedColorValue = null;

        if (savedData?.application?.fields?.[0]?.answers) {
            const productAnswer = savedData.application.fields[0].answers.find(answer => answer.question.label === 'PRODUCT');
            selectedProductValue = productAnswer?.text_field;

            const colorAnswer = savedData.application.fields[0].answers.find(answer => answer.question.label === 'COLOR');
            selectedColorValue = colorAnswer?.text_field;
        }

        let productOptionsHtml = '<option value="">Seleccionar ...</option>';
        staticProducts.forEach(product => {
            productOptionsHtml += `<option value="${product.id}" ${selectedProductValue && product.id === selectedProductValue ? 'selected' : ''}>${product.title}</option>`;
        });
        productDropdown.innerHTML = productOptionsHtml;
        productDropdown.disabled = false;
        if (productDropdown.value) enableButton();

        let colorOptionsHtml = '<option value="">Seleccionar ...</option>';
        staticColors.forEach(color => {
            colorOptionsHtml += `<option value="${color.id}" ${selectedColorValue && color.id === selectedColorValue ? 'selected' : ''}>${color.name}</option>`;
        });
        colorDropdown.innerHTML = colorOptionsHtml;
        colorDropdown.disabled = false;
        if (colorDropdown.value && productDropdown.value) enableButton();
    }

    productDropdown.addEventListener('change', () => {
        if (productDropdown.value && colorDropdown.value) enableButton();
    });

    colorDropdown.addEventListener('change', () => {
        if (productDropdown.value && colorDropdown.value) enableButton();
    });

    async function getRequestJson() {
        try {
            const url = getUrl();
            const response = await fetch(url);
            if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
            return await response.json();
        } catch (error) {
            console.error("Error in getRequestJson:", error);
            return null;
        }
    }

    async function sendData() {
			  const selectedExtras = Array.from(extrasSelect.selectedOptions).map(option => option.value);
			
        const jsonData = {
            "submission": {
                "fields": {
                    "car": productDropdown.value,
                    "color": colorDropdown.value,
		   "year": yearInput.value ? parseInt(yearInput.value, 10) : null,
		   "expiration": dateInput.value,
		   "extras": selectedExtras
                }
            }
        };
        return await postRequestJson(jsonData);
    }
    
    async function postRequestJson(content) {
        try {
            const response = await fetch(getUrl().concat(`?content=${encodeURIComponent(JSON.stringify(content))}`), {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json', 'X-CSRF-Token': document.querySelector('meta[name=csrf-token]').content }
            });
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            await response.json();
        } catch (error) {
                console.error('Error:', error);
        }
    }

    async function postRequestJson2(content) {
        try {
            const response = await fetch(getUrl(), {
                method: "POST",
                headers: {
                    'X-CSRF-TOKEN': document.querySelector('meta[name=csrf-token]').content,
                    'Accept': 'application/json',
            'Content-Type': 'application/json'
                },
                body: JSON.stringify({content: content}),
            });
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            await response.json();
        } catch (error) {
            console.error('Error:', error);
        }
    }

    document.addEventListener('DOMContentLoaded', async function() {
        await initializeDropdowns();
	   const mainForm = document.querySelector('form');
	    mainForm.addEventListener("submit", async function(event) {
            event.preventDefault();
            const submitHandler = async (e) => {
                e.preventDefault(); 
                try {
                    const responseData = await sendData(); 
                    mainForm.removeEventListener("submit", submitHandler);
                    mainForm.submit(); 
                } catch (error) {
                    console.error("Error durante el envío de datos:", error);
                }
            };
	   submitHandler(event);
        });
    });
</script>
```
:::tip JSON válido
El parámetro content que se envía tiene que ser un json válido. En caso de que tenga que ser vacío se tiene que enviar {}.
:::

### Proceso de originación

La tarea de tipo proceso de originación permite insertar otra originación en el flujo.
Esto porque muchas veces en diferentes flujos se comparten unos pasos o datos que se requieren del usuario.
Al usar un una tarea de porceso de originación, si el usuario ya tiene respuestas anteriores podría usarlas en lugar de volver a entregar los mismos datos una y otra vez.
Permitir o no el uso de datos anteriores se define al agregar la tarea de proceso de originación.

### Invitación

La tarea de Invitación es la que permite tener flujos de originación multiusuario.
Para poder crear una tarea de invitación, primero tienes que crear roles en la edición de la originación. Allí eliges si el usuario principal puede tener ese rol si requiere invitación y si tiene límite de invitaciones.
Al tener al menos un rol se desbloquea el uso de la tarea de invitación.
La invitación solo puede ser para tareas o pasos anteriores a la tarea de invitación.
En la tarea se elige el rol, el correo que se envía y cuales son las tareas que tiene que realizar el rol.

### Lógica Condicional

La lógica condicional te permite crear flujos de trabajo más dinámicos e inteligentes. Con esta funcionalidad, puedes definir reglas para mostrar u ocultar **Pasos**, **Tareas** y **campos de tareas Input** basándote en las respuestas proporcionadas por los usuarios o en datos existentes dentro de la respuesta. Esto te permite personalizar la experiencia del usuario, presentando solo la información relevante en cada etapa del proceso y simplificando o bifurcando la interacción. La lógica condicional te ofrece la flexibilidad de:

- **Ocultar o mostrar pasos completos:** Dirige a los usuarios a través de diferentes caminos dentro del flujo de originación según sus respuestas previas.
- **Ocultar o mostrar tareas individuales:** Dentro de un paso, puedes mostrar u ocultar tareas específicas. Esto es útil para solicitar información adicional solo cuando es necesaria.
- **Ocultar o mostrar campos de tareas Input:** Dentro de una tarea de tipo Input, puedes mostrar u ocultar campos específicos. Esto te permite omitir o solicitar datos de acuerdo a las respuestas que proporciona el usuario. 

#### Configurar Lógica Condicional

Para configurar la lógica condicional, sigue estos pasos:

1. **Entra en el editor:** En la vista Build de una originación, presiona el botón de **Lógica condicional**.
2. **Edita la visibilidad de los elementos:** Por defecto, todos los pasos, tareas y campos estarán visibles. En la sección **Estructura**, puedes marcar como no visibles los elementos que quieras presionando el ícono del ojo.
3. **Define reglas:** En la sección **Reglas**, puedes definir las condiciones que determinarán si un elemento se muestra u oculta. Las reglas se componen de: (1) una o más condiciones evaluadas mediante  operadores **AND** y **OR** y (2) una acción a ejecutar cuando las condiciones se cumplan.
   1. **Agrega una regla**: Presiona el botón **Añadir**.
   2. **Define las condiciones:** Las condiciones pueden estar basadas en:
      * **Respuestas a campos Input:** Compara la respuesta proporcionada por el usuario en un campo específico con un valor determinado. Puedes utilizar operadores como "es igual a", "no es igual a", "contiene", "es mayor que", "es menor que", etc.
      * **Completitud de un Paso o Tarea:** Evalúa si un paso o tarea fue completada.
   3. **Define la acción:** Selecciona la acción y el elemento sobre el cual se ejecutará cuando la regla se cumpla. Las acciones disponibles son **Mostrar** y **Ocultar**.
4. **Guarda los cambios:** Una vez que hayas definido tus reglas, guarda los cambios.

:::tip Experiencia de usuario
Considera cómo la lógica condicional puede afectar la experiencia del usuario y asegúrate de que el flujo pueda ser completado con facilidad. 
:::

### Editar configuración de la originación

Al seleccionar la opción **Editar** en el menu contextual de tu orignación puedes editar sus propiedades.

- **Nombre**: Define el nombre de la originación, visible para los usuarios en la interfaz.
- **Descripción**: Incluye un breve texto explicativo sobre el propósito de la originación.
- **Mensaje de completado**: Es el mensaje que aparecerá al usuario al finalizar el proceso de originación.
- **Asignado por defecto de la respuesta**: especifica la persona que será asignada automáticamente al recibir una nueva originación.
- **Vence en**:  Establece un plazo máximo para completar la originación.
- **Reglas de completado**:  Define el comportamiento de completado para cada respuesta.
- **Privacidad**: Permite restringir el acceso al flujo de originación a ciertos segmentos de usuarios predefinidos.

#### Eliminar originación

Si necesitas eliminar una originación de forma permanente:

1. Selecciona la opción **Eliminar originación**.
2. Confirma que no necesitas los datos de la originación antes de proceder.

:::danger Peligro
Este proceso es irreversible.
:::

### Ver detalles de una originación

Al acceder a una originación específica, puedes visualizar métricas y datos relevantes en función de la vista que selecciones. Estas vistas te permiten analizar y gestionar de manera eficiente la información asociada con la originación.

- **Resumen**: Presenta un panorama general de las métricas principales asociadas a la originación, proporcionando una visión rápida del rendimiento y progreso.
- **Respuestas**: Muestra un listado detallado de todas las respuestas realizadas dentro de esta originación. Es ideal para revisar el historial y el estado de cada solicitud.
- **Asignados**: Proporciona un listado de las personas asignadas a esta originación, junto con sus métricas de gestión, lo que facilita el seguimiento del desempeño y la carga de trabajo.

### Resumen de Originación

La vista resumen de una originación te ofrece un resumen de las métricas clave relacionadas con el rendimiento y estado de las solicitudes en el flujo. Esta información es útil para comprender el progreso general y realizar un seguimiento efectivo.

- **Pendientes**: Muestra el número total de solicitudes enviadas que aún no han sido completadas.
- **Completadas**: Indica la cantidad de solicitudes que han finalizado exitosamente el flujo de originación.
- **Canceladas**: Refleja las solicitudes que han sido canceladas por el usuario o el administrador.
- **Total**: Representa el número total de solicitudes, incluyendo las pendientes, completadas y canceladas.

### Gestión de Respuestas

La vista de respuestas te permite revisar y administrar individualmente el estado e información de cada respuesta a esta originación. Puedes seleccionar una respuesta específica para acceder a sus detalles y gestionar sus elementos clave.

En la vista de detalles, encontrarás las siguientes secciones principales:

- **Detalles**: Información general de la respuesta, como el nombre, descripción y estado actual.
- **Tareas**: Listado de tareas asociadas al flujo de originación, junto con su estado de avance.
- **Campos**: Campos configurados en el flujo para recopilar información del usuario.
- **Documentos**: Archivos subidos por los usuarios o necesarios para el proceso de originación.
- **Firmas**: Seguimiento de las firmas digitales recolectadas durante el flujo.
- **Validaciones**: Validaciones realizadas por los administradores para autorizar el progreso.
- **Actividad**: Registro de actividades y cambios realizados en la respuesta, útil para seguimiento y auditoría.

Esta estructura te brinda una visión integral y detallada de cada respuesta, permitiéndote gestionar de manera efectiva todos los aspectos relacionados con las respuestas.

:::tip Tip
Desde la vista de una respuesta en el menú de acciones (identificado con …) se puede [impersonar](/es/platform/customers/users) al usuario para ayudarlo a contestar la originación. Esto depende de los roles del usuario
:::

#### Asignar respuesta

En el listado de respuestas, selecciona el menú acciones y presiona la opción **Asignar**. En el menú contextual selecciona a un administrador para esta respuesta.

#### Cancelar respuesta

Selecciona una respuesta y presiona el menu contextual. Al seleccionar la opción **Cancelar** para modificar permanentemente el estatus de una respuesta a cancelado.

#### Eliminar respuesta

Para eliminar una respuesta individual, selecciona el menú en la columna actions y presiona la opción delete. Esto eliminará la respuesta.

Para eliminar varias respuestas al mismo tiempo, selecciona cada entrada marcando la casilla correspondiente y presiona el botón eliminar.

#### Invitar usuarios

Puedes invitar a usuarios para que ingresen información en una originación. Al invitar a un usuario, deberás ingresar su información básica

- **Nombre**: El primer nombre del usuario que utilizará la originación.
- **Apellido**: El apellido del usuario.
- **Email**: La dirección de correo electrónico del usuario, donde recibirá la invitación para acceder a la originación.
- **Asignar la respuesta**: En la lista desplegable, selecciona un administrador que gestionará esta originación en particular. Si no se selecciona un administrador, la respuesta quedará sin asignar.

### Gestión de Asignados

En la vista de asignados,  puedes  monitorear y administrar a los administradores responsables de las respuestas dentro de un reino. Esta vista facilita el seguimiento del desempeño y la carga de trabajo de los administradores. Puedes filtrar las respuestas asignadas por rangos de fecha

Al seleccionar un administrador, podrás ver todas las respuestas que tiene asignadas y su correspondiente status

## Crear una Página de Originación

Para desplegar una página de originación a los usuarios, sigue los pasos a continuación. Esto te permitirá habilitar un acceso directo y funcional a tus flujos.

- **Verifica Conexión con el Realm**: Accede al módulo de Channels, selecciona el sitio deseado y confirma que está conectado al Realm donde se encuentra configurada la originación.
- **Crear una página de originación**: Desde el sitio seleccionado, crea una nueva página y define su tipo como originación.
- **Seleccionar la originación**: Asocia la página con la originación que deseas desplegar.
- **Configurar Nombre y Ruta**: Define un nombre claro y una ruta específica para la página, y presiona Create para finalizar.

Los usuarios podrán acceder a la página de originación para realizar el flujo configurado. Es fundamental asegurarte de que todas las configuraciones estén correctamente definidas para garantizar el acceso a los usuarios finales.

El acceso a esta página estará restringido según las configuraciones de privacidad y segmentación establecidas en la originación. Esto asegura que solo los segmentos autorizados puedan interactuar con el flujo, manteniendo el control y la seguridad de la información.

Es importante tener en cuenta que cada originación puede estar vinculada únicamente a una página. Si necesitas crear una nueva página de originación, primero será necesario desvincular o eliminar la página existente para evitar conflictos y asegurar una configuración adecuada.
