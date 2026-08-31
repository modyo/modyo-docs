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
- Asigna un nombre a la originación.
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
- **Verificación de Identidad**: Solicitan al usuario verificar su identidad con captura de documento y biometría a través de un proveedor.
- **Confirmación**: Solicitan al usuario confirmar las respuestas entregadas en tareas Input anteriores.

##### Propiedades de la tarea

En este apartado se pueden editar los valores de la tarea seleccionada, puedes encontrar estos valores

- **Nombre**: El nombre de la tarea que será visible para el usuario.
- **Identificador**: Un identificador único que se incluirá en la URL de la originación.
- **Descripción**: Un breve texto explicativo sobre la tarea, que será visible para el usuario.
- **Mostrar esta tarea al usuario principal**: Aparece solo cuando la tarea está seleccionada como tarea objetivo de una [tarea de invitación](/es/platform/customers/origination.html#invitacion). Viene activada y define si el usuario principal de la respuesta también ve y puede responder esa tarea, o si queda reservada para el invitado en quien la delegó.

:::warning Edición de identificadores
Al editar un paso, una tarea o un campo ya guardados, el campo **Identificador** aparece bloqueado con un candado. Para modificarlo debes presionar el candado y confirmar la advertencia **Desbloquear campo identificador**: cambiar un identificador rompe las referencias desde sistemas externos o mediante el SDK de Liquid y, en el caso de los campos, las respuestas dejan de poder buscarse por ese campo. El identificador solo se genera automáticamente a partir del nombre durante la creación; al editar, cambiar el nombre no lo modifica.
:::

### Input

En las tareas Input puedes incorporar una amplia variedad de campos en tus formularios para personalizar la recolección de datos de tus usuarios.

#### Añadir campos

Para incluir un nuevo campo debes seleccionar una tarea y seleccionar la pestaña **Añadir**

Origination soporta todos los tipos de entrada disponibles en formularios. Puedes ver el listado completo de tipos en la [documentación de formularios](https://docs.modyo.com/es/platform/customers/forms#anadir)

Además, las tareas Input ofrecen tres tipos de campo que **solo existen en Origination** y no están disponibles en los formularios: **Documento**, **Documento de identidad** y **Selfie**. Los tres se describen en [Campos especializados de subida de archivos](/es/platform/customers/origination.html#campos-especializados-de-subida-de-archivos).


#### Editar campos

Al seleccionar un campo, puedes modificar sus propiedades al dirigirte a  la pestaña **Editar** Allí encontrarás diferentes propiedades según las características del campo seleccionado. Las principales propiedades son:

- **Título del campo**:Es el nombre del campo que se mostrará en la interfaz del usuario. Este debe ser claro y descriptivo para facilitar la interacción.
- **Requerido**: Determina si el campo es obligatorio o no. Si está activado, el usuario deberá completarlo antes de continuar con el flujo.
- **Instrucciones del campo**: proporciona orientación adicional para que el usuario comprenda cómo completar el campo. Estas instrucciones se muestran directamente en la interfaz, debajo del campo.
- **Agregar campo Pop-up de instruciones**: Agrega un ícono de ayuda junto al campo. Al hacer clic en este ícono, se despliega un mensaje con información adicional o consejos útiles relacionados con el campo.
- **Opciones**: Propiedades adicionales de acuerdo al tipo de campo seleccionado.

#### Campos especializados de subida de archivos

Las tareas Input incluyen tres tipos de campo pensados para recolectar documentos e imágenes con procesamiento automático. Los tres solo están disponibles dentro de una tarea Input de una originación.

| Campo | Para qué sirve |
|---|---|
| **Documento** | Sube un archivo y, opcionalmente, extrae su texto. |
| **Documento de identidad** | Captura una cédula por ambos lados o un pasaporte, y extrae sus datos. |
| **Selfie** | Captura una foto del rostro y, opcionalmente, ejecuta una verificación de vida. |

Los tres se agregan desde la pestaña **Añadir** del constructor, igual que cualquier otro campo, y comparten las propiedades comunes descritas en [Editar campos](/es/platform/customers/origination.html#editar-campos).

##### La integración de verificación de identidad

La extracción de datos y la verificación de vida dependen de la integración **Amazon Rekognition Face Liveness**, de la categoría **Verificación de Identidad**. Se instala y habilita por reino, en **Configuración de reino** → **Integraciones**.

Si la integración no está habilitada, los tres campos siguen apareciendo en el constructor y siguen funcionando para el usuario final como una subida de archivos normal. Lo único que cambia es que las casillas de extracción y de verificación de vida aparecen deshabilitadas, con el mensaje **Para habilitar esta opción, configura la integración de verificación de identidad de Amazon Rekognition en el realm.** El valor que ya tuvieras guardado no se pierde.

:::tip Configuración de la integración
Para editar una integración primero tienes que deshabilitarla: mientras está habilitada, la edición no está disponible. Dos ajustes de la integración cambian el comportamiento de estos campos: el **Umbral de confianza (%)**, que decide cuándo una verificación de vida se aprueba o se rechaza (90% de manera predeterminada), y el **ID de Pool de Identidad de Cognito**, sin el cual el desafío de verificación de vida no puede iniciarse.
:::

##### Documento

Sube un archivo y, si lo activas, extrae su texto automáticamente. Tiene dos opciones propias:

- **Extensiones permitidas**: Lista separada por comas con las extensiones que aceptas en este campo, por ejemplo `pdf, doc, txt`. Si la dejas vacía se acepta cualquier extensión permitida por la plataforma. Las extensiones que escribas deben estar permitidas a nivel de plataforma; si no, el campo no se guarda y aparece el mensaje **Estas extensiones no están permitidas**.
- **Extraer datos del documento (OCR)**: Activa la extracción del texto del archivo. Viene desactivada.

El campo acepta un solo archivo, con el tamaño máximo definido en la plataforma (10 MB de manera predeterminada). El usuario final ve la misma zona de carga que en el campo **Archivo**, con la lista de formatos permitidos y la ayuda del tamaño máximo.

La extracción funciona con archivos `jpg`, `jpeg`, `png`, `tiff`, `tif`, `pdf` y `docx`. Cualquier otra extensión se puede subir igual, pero queda con el estado **Tipo de archivo no soportado**: no se le extrae texto. Conviene tenerlo presente con formatos que parecen obvios y no lo son, como `doc`, `txt` o `csv`.

La extracción pasa por los estados **Pendiente**, **Procesando**, **Completada**, **Falló** y **Tipo de archivo no soportado**. Si el usuario reemplaza el archivo, la extracción se reinicia y el resultado anterior se descarta.

##### Documento de identidad

Captura un documento de identidad y extrae sus datos. Tiene tres opciones propias:

- **Tipos de documento aceptados**: Casillas para **Cédula de identidad (fotos de frente y reverso)** y **Pasaporte (una foto)**. No puedes dejar las dos desmarcadas. Un campo creado desde el constructor nace con solo la cédula marcada; uno creado por la API sin especificar tipos acepta ambos.
- **País por defecto**: Fija el país del documento. Si lo dejas en **El usuario selecciona el país**, el usuario elige el país al responder; si eliges uno, el selector no se le muestra y el país queda fijado.
- **Extraer datos del documento (OCR)**: Activa la extracción de los datos del documento. Viene desactivada.

El campo acepta imágenes `jpg`, `jpeg` y `png`, y ese formato no es configurable.

Al responder, el usuario elige entre **Usar cámara** y **Subir archivo**. Con una cédula, el flujo es en dos pasos: primero el **Frente** y luego el **Reverso**, con una guía de encuadre en cada uno. Al terminar el primer lado la pantalla vuelve al inicio con el título del lado que falta, y el usuario debe pulsar de nuevo **Usar cámara** o **Subir archivo**; la cámara no se abre sola. Con un pasaporte se pide una sola foto de la página de datos. Las opciones **Rehacer frente** y **Rehacer reverso** eliminan la imagen ya subida, no solo la vista previa.

El país tiene un efecto concreto sobre la extracción: se usa para interpretar las fechas del documento. Si el país no está definido y una fecha es ambigua —por ejemplo `03/04/1990`, donde ambos números pueden ser mes o día—, la fecha se guarda tal como venía, sin normalizar. Por eso, cuando sabes de antemano el país de tus usuarios, conviene fijarlo.

La extracción pasa por los estados **Pendiente**, **Procesando**, **Completada** y **Falló**.

##### Selfie

Captura una foto del rostro del usuario. Tiene una sola opción propia:

- **Verificación de vida (liveness)**: Agrega un desafío que confirma que hay una persona real frente a la cámara. Viene desactivada.

El campo acepta imágenes `jpg`, `jpeg` y `png`, y ese formato no es configurable. El usuario puede tomarse la foto con la cámara o subir un archivo; no hay forma de restringirlo a una sola vía. La cámara frontal se muestra en espejo, y la imagen se guarda tal como se ve en la vista previa.

Cuando la verificación de vida está activa, el bloque correspondiente aparece **después** de que el usuario haya capturado o subido la selfie, con el botón **Iniciar verificación de vida**. Completarla nunca es obligatorio: aunque marques el campo como requerido, lo único obligatorio es la foto.

Al terminar el desafío, el usuario solo ve que se completó. El veredicto se calcula después de enviar la respuesta y no se le muestra. Los estados posibles son **Pendiente**, **Procesando**, **Verificada**, **Rechazada**, **Falló** y **Omitida**.

:::warning Contra qué se compara la selfie
La comparación facial se hace contra la imagen que captura el propio desafío de verificación de vida, **no** contra el documento de identidad. Sirve para confirmar que quien envía la selfie es la misma persona que hizo el desafío, no para validar que la selfie corresponde al titular del documento.
:::

Si el usuario vuelve a capturar la selfie, la verificación anterior se descarta y tiene que hacerla de nuevo.

##### Dónde se ve el resultado

El estado de la extracción y el de la verificación de vida **no se muestran hoy en las pantallas de administración**. La pestaña **Documentos** de la respuesta lista los archivos de los tres campos con su nombre, tamaño y miniatura, y en el detalle de la tarea el campo Documento de identidad muestra el tipo de documento, el país y los enlaces a **Frente** y **Reverso**; los campos Documento y Selfie se ven igual que un campo Archivo.

Los resultados sí quedan disponibles para integrar:

- En **plantillas Liquid**, la respuesta de un campo Documento entrega el archivo, el estado de la extracción y el texto extraído; la de un campo Selfie entrega el archivo, el estado de la verificación de vida y el nivel de confianza.
- En la **API de administración**, además de lo anterior, se expone el código de error cuando la extracción o la verificación fallan.

:::tip Verificación de vida rechazada sin motivo
Una verificación **Rechazada** sin código de error asociado significa que el nivel de confianza quedó por debajo del **Umbral de confianza (%)** configurado en la integración. Es el caso más frecuente y no indica una falla técnica.
:::

##### Uso en la lógica condicional

Los tres campos se pueden usar en la lógica condicional de la originación, pero solo con los operadores **está vacío** y **tiene algún valor**. No es posible condicionar por el contenido del documento, por el país ni por el resultado de la verificación de vida.

### Validación

La tarea de validación requiere una revisión manual del agente asignado. Este debe validar los datos entregados por el usuario para desbloquear la siguiente tarea del flujo. 
Se hace un refresco de la tarea cada 5 segundos para que el usuario final sepa si la tarea fue validada.

Al configurar la tarea, puedes definir un **Asignado**: un administrador o un grupo de administradores responsable de las validaciones. Al seleccionar un grupo, puedes asignar a todo el grupo o a un usuario específico dentro de él. Si no defines un asignado, las validaciones se asignan de forma predeterminada al asignado de la respuesta.

Los administradores asignados reciben un correo cuando una validación queda pendiente y también pueden revisarla desde la vista [**Mis tareas**](/es/platform/core/my-tasks.html) del menú principal, filtrando por el tipo de tarea **Revisión de validación**. El usuario recibe una notificación interna cuando su tarea es aprobada o rechazada.

En una respuesta específica, puedes reasignar la validación desde la pestaña **Validaciones**, una vez que el usuario haya completado las tareas a validar.

### Firma

La tarea de firma permite una firma simple con un checkbox o una avanzada cuando hay algun proveedor de firma digital instalado en las integraciones del reino.

### Revisión pendiente

La tarea de revisión pendiente pausa el proceso de originación. Se usa para gatillar procesos asíncronos, generalmente en sistemas externos.
Se hace un refresco de la tarea cada 5 segundos para que el usuario final sepa si la tarea fue revisada.

Al igual que en las tareas de validación, puedes definir un **Asignado** para la tarea: un administrador o un grupo de administradores. Si no defines uno, la revisión se asigna de forma predeterminada al asignado de la respuesta.

### Verificación de Identidad

La tarea de Verificación de Identidad solicita al usuario verificar su identidad mediante la captura de una selfie, su documento de identidad y detección de vida (liveness), a través de un proveedor de verificación.

Para usar esta tarea, primero debes habilitar una integración de la categoría **Verificación de Identidad** en las [integraciones del reino](/es/platform/customers/settings.html#integraciones), como **Amazon Rekognition**.

Al configurar la tarea defines:

- **Proveedor**: La integración de verificación de identidad que procesará la verificación.
- **Características**: Las verificaciones que incluye la tarea: **Selfie** (siempre requerida), **Documento** (captura del frente y reverso del documento de identidad con extracción de sus datos) y **Liveness** (detección de vida).
- **Ajustes de Liveness**: Si activaste Liveness, puedes definir el **Umbral de confianza** (de **Flexible** a **Estricto**) y **Habilitar desafío de color**, que muestra luces de colores durante la verificación e incluye una advertencia de fotosensibilidad para el usuario.

Durante el flujo, el usuario captura su selfie y su documento guiado por la interfaz; la plataforma valida la calidad de las imágenes, extrae los datos del documento y compara el rostro del documento con la selfie.

En los detalles de una respuesta, la pestaña **Verificación de Identidad** muestra el estado de la verificación, los puntajes de coincidencia facial (**Face Match Score**) y de detección de vida (**Liveness Score**), los datos extraídos del documento y las imágenes capturadas.


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

En un flujo de originación, cada respuesta representa el proceso en curso de un usuario específico.

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
Al usar un una tarea de proceso de originación, si el usuario ya tiene respuestas anteriores podría usarlas en lugar de volver a entregar los mismos datos una y otra vez.
Permitir o no el uso de datos anteriores se define al agregar la tarea de proceso de originación.

### Invitación

La tarea de Invitación permite crear flujos de originación **multiusuario**: el usuario principal de la respuesta invita a otras personas para que completen tareas específicas del flujo.

Para poder crear una tarea de invitación, primero debes crear al menos un [rol](#roles) en la edición de la originación. Cada rol puede usarse en una sola tarea de invitación de la originación.

Al configurar la tarea defines:

- **Rol**: El rol que asumirán los usuarios invitados.
- **Plantilla de correo**: El código HTML/Liquid del correo que recibe cada invitado, con las [variables de Liquid de la invitación](#plantilla-del-correo-de-invitacion).
- **Tareas objetivo**: Las tareas que los usuarios invitados podrán completar, agrupadas por paso. Puedes seleccionar tareas de cualquier paso de la originación; las otras tareas de invitación y las tareas de proceso de originación no son seleccionables.

Además, en las propiedades de cada tarea seleccionada como objetivo aparece la opción **Mostrar esta tarea al usuario principal**, activada de manera predeterminada. Al desactivarla, la tarea deja de mostrarse en el flujo del usuario principal y queda reservada para el invitado que la resuelve. Si más adelante quitas esa tarea de las **Tareas objetivo**, la opción se vuelve a activar sola para que no quede oculta sin nadie que la responda.

En la página de originación, el usuario principal puede invitar a personas nuevas (nombre, apellido y correo electrónico) o a usuarios ya invitados en otras tareas, y puede reenviar o cancelar las invitaciones pendientes. Cada invitado recibe un correo con un enlace de acceso y, al ingresar, solo ve las tareas que le fueron asignadas; si tiene más de un rol, ve la unión de las tareas de todos sus roles. El usuario invitado no puede cancelar la respuesta.

La tarea de invitación se completa cuando todos los invitados terminan sus tareas. Si el rol no requiere invitaciones y el usuario principal no invita a nadie, la tarea se completa automáticamente al continuar. La cantidad de invitaciones activas está limitada por el **Número máximo de usuarios** del rol.

:::tip Plantilla para usuarios invitados
La página de la originación incluye la plantilla **Reanudar (Invitado)**, que es la vista que ven los usuarios invitados al volver a ingresar a la respuesta. Puedes personalizarla como el resto de las plantillas de la página.
:::

#### Plantilla del correo de invitación

Cada tarea de invitación tiene su propia plantilla de correo. Al crear la tarea, el editor **Plantilla de correo** se precarga con un ejemplo funcional que ya trae el botón de aceptación, y puedes reemplazarlo por completo. El asunto no se configura: la plataforma usa el nombre de la originación y el nombre de la tarea.

Dentro de la plantilla tienes disponibles estas variables de Liquid:

| Variable | Contenido |
|---|---|
| <code v-pre>{{ invitation_url }}</code> | El enlace de acceso personal del invitado. Es la única variable imprescindible de la plantilla. |
| <code v-pre>{{ invitation.first_name }}</code>, <code v-pre>{{ invitation.last_name }}</code>, <code v-pre>{{ invitation.email }}</code> | Los datos con los que se envió la invitación. |
| <code v-pre>{{ invitation.status }}</code>, <code v-pre>{{ invitation.token }}</code>, <code v-pre>{{ invitation.created_at }}</code>, <code v-pre>{{ invitation.accepted_at }}</code> | El estado de la invitación, su token y sus fechas. |
| <code v-pre>{{ user }}</code> | El usuario invitado. |
| <code v-pre>{{ submission }}</code>, <code v-pre>{{ task }}</code>, <code v-pre>{{ origination }}</code>, <code v-pre>{{ site }}</code> | La respuesta, la tarea de invitación, la originación y el sitio. |

El enlace de aceptación mínimo se escribe así:

```liquid
<a href="{{ invitation_url }}">Haz clic aquí para aceptar la invitación</a>
```

:::warning Sin plantilla no se envía el correo
Si dejas vacía la **Plantilla de correo**, la invitación se crea igual y aparece en la lista de la tarea, pero el invitado nunca recibe el mensaje con su enlace de acceso. Revisa siempre que la plantilla incluya el enlace de aceptación.
:::

#### Ciclo de vida de una invitación

En la tarea de invitación, el usuario principal ve la lista de las personas que invitó con su nombre, su correo, su rol, una barra de progreso de las tareas que tiene delegadas y una etiqueta con el estado de la invitación:

- `pending`: La invitación se envió y el invitado todavía no entra al flujo.
- `accepted`: El invitado abrió su enlace y entró a la respuesta.
- `completed`: El invitado terminó todas las tareas objetivo de su rol.
- `cancelled`: El usuario principal canceló la invitación antes de que fuera aceptada.

Las acciones disponibles dependen del estado: **Reenviar invitación** y **Cancelar invitación** solo se muestran mientras la invitación está en `pending`. Una vez aceptada ya no se puede cancelar ni reenviar. Una invitación cancelada no ocupa cupo en el **Número máximo de usuarios** del rol, así que puedes volver a invitar a la misma persona.

Cuando se completa la última invitación activa de la tarea, la respuesta a la tarea de invitación se completa sola y el flujo continúa. A partir de ese momento ya no se pueden enviar invitaciones nuevas desde esa tarea.

:::tip Espera entre reenvíos
Entre un reenvío y el siguiente hay que esperar unos minutos. Si presionas **Reenviar invitación** antes de tiempo, la plataforma te indica cuántos minutos faltan en lugar de enviar el correo.
:::

### Confirmación

La tarea de Confirmación muestra al usuario un resumen de las respuestas que entregó en tareas Input anteriores, para que las revise y confirme antes de continuar con el flujo.

Al configurar la tarea, en **Seleccionar ítems a confirmar** eliges las tareas cuyas respuestas se incluirán en el resumen, agrupadas por paso. Solo puedes seleccionar tareas de tipo **Input** anteriores a la tarea de confirmación.

El usuario ve cada tarea seleccionada con sus respuestas y un enlace **Editar** que lo lleva directamente a esa tarea para corregirla. Al presionar **Confirmar**, la tarea se completa y el flujo continúa. Para completar la tarea, todos los ítems configurados deben estar confirmados.

En los detalles de una respuesta, las tareas de confirmación completadas muestran el listado de **Tareas confirmadas**.

### Tareas respondidas por agentes

Cada tarea del flujo tiene la opción **Asignado a**, que define quién la responde:

- **Usuario**: La tarea la responde el usuario final en la página de originación.
- **Agente**: La tarea la responde un administrador desde el admin. Las tareas de **Validación** y **Revisión pendiente** son siempre de agente; las tareas **Input** y **Snippet de código** pueden configurarse en cualquiera de los dos modos.

Cuando el flujo llega a una tarea de agente, los administradores asignados reciben un correo con el enlace directo a la tarea y también la ven en la vista [**Mis tareas**](/es/platform/core/my-tasks.html). El asignado efectivo se resuelve en este orden: el asignado de la respuesta a la tarea, el asignado configurado en la tarea y, en su defecto, el asignado general de la respuesta; puedes reasignar una tarea específica desde la vista de la respuesta, lo que notifica al nuevo asignado.

Desde la vista de la respuesta, el agente abre la tarea y responde el formulario con la misma experiencia del sitio: lógica condicional en vivo, carga de archivos, grupos repetibles y snippets de código. Mientras la tarea espera la acción del agente, el usuario ve en la página de originación el texto configurado en **Mensaje de espera que ve el usuario**.

Opciones adicionales según el tipo de tarea:

- **Desactivar el completado manual** (Revisión pendiente): Oculta el botón **Completar** para que la tarea no pueda completarse manualmente desde el admin. Los administradores con el permiso **Cambiar estado de la Respuesta de una Tarea** pueden completarla de todas formas.
- **Permitir same-origin** (Snippet de código): Otorga al iframe de la tarea acceso al origen del admin (sesión y cookies), desactivando el aislamiento del sandbox. Actívalo solo para snippets de confianza.

#### Verificación de agentes para servicios externos

Cuando un agente responde una tarea de Snippet de código, tu código puede obtener una credencial de corta vida (5 minutos) para que un servicio externo verifique que quien lo invoca es un agente autorizado sobre esa tarea y respuesta:

1. Desde el iframe de la tarea, solicita la credencial en `GET /admin/customers/{realm_uid}/originations/{origination_id}/submissions/{submission_id}/agent_task_forms/{step_task_id}/assertion` (misma base del admin en la que corre el iframe; acepta el parámetro opcional `audience` con el identificador del servicio destino) y envíala al servicio externo.
2. El servicio externo la valida en `POST /api/admin/customers/{realm_uid}/originations/agent_assertions/introspect` (requiere API Access con un permiso que incluya ver respuestas: **Ver Todas las Respuestas** o **Ver Respuestas Asignadas**). La respuesta indica `active: true` con los identificadores del agente, la respuesta, la tarea y el usuario actuado, o `active: false` si la credencial expiró o la autorización fue revocada — la validación siempre revisa el estado vigente, no solo la firma.

Puedes conocer el detalle de los endpoints en la documentación Swagger de la [API](/es/platform/core/api.html).

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

Al seleccionar la opción **Editar** en el menú contextual de tu originación puedes editar sus propiedades.

- **Nombre**: Define el nombre de la originación, visible para los usuarios en la interfaz.
- **Descripción**: Incluye un breve texto explicativo sobre el propósito de la originación.
- **Mensaje de completado**: Es el mensaje que aparecerá al usuario al finalizar el proceso de originación.
- **Asignado por defecto de la respuesta**: Especifica el administrador o grupo de administradores que será asignado automáticamente a cada nueva respuesta. Al seleccionar un grupo, puedes usar la opción **Asignar a todo el grupo** o elegir un usuario específico dentro de él.
- **Vence en**:  Establece un plazo máximo para completar la originación.
- **Cancelar automáticamente las respuestas que excedan la fecha de vencimiento**: Disponible solo si configuraste un vencimiento. Al activar esta opción, las respuestas en estado **Pendiente** que superen su fecha de vencimiento se cancelan automáticamente.
- **Reglas de completado**:  Define el comportamiento de completado para cada respuesta.
- **Reglas de cancelación**: Define quién puede cancelar una respuesta desde la página de originación:
  - **Cualquiera puede cancelar la respuesta**: Opción por defecto.
  - **Solo los administradores pueden cancelar la respuesta**: El botón **Cancelar** deja de mostrarse al usuario en la página de originación y la cancelación queda disponible solo para los administradores.
- **Privacidad**: Permite restringir el acceso al flujo de originación a ciertos segmentos de usuarios predefinidos.

:::tip Cancelación automática por vencimiento
La cancelación automática se ejecuta en un proceso en segundo plano una vez al día, por lo que puede no ser inmediata al momento del vencimiento. Solo cancela respuestas en estado **Pendiente** y registra **Auto-cancelada por vencimiento** como razón de cancelación, visible en los detalles de la respuesta.
:::

#### Roles

En la edición de la originación encontrarás la sección **Roles**, donde defines los roles que usarán las [tareas de invitación](#invitacion) de los flujos multiusuario. Para crear un rol, presiona el botón **Agregar Rol** y completa:

- **Nombre**: El nombre del rol, único dentro de la originación.
- **Requiere invitaciones**: Si está activo, el usuario principal debe invitar al menos a una persona para completar la tarea de invitación que use este rol.
- **Puede ser asumido por el usuario principal**: Si está activo, el propio usuario principal aparece en la lista de personas a invitar de la tarea, identificado como **Tú**, y puede tomar el rol él mismo. Esa invitación no envía correo: queda aceptada al instante y se completa apenas termine las tareas objetivo. Si está desactivado y se intenta invitar al titular de la respuesta, la plataforma responde **No puedes invitar al propietario de la submission**.
- **Número máximo de usuarios**: La cantidad máxima de usuarios que pueden tener este rol en una misma respuesta. Viene en 1 y acepta hasta 100. Es el valor que limita cuántas invitaciones activas admite la tarea de invitación que usa el rol; al alcanzarlo, el formulario de invitación se bloquea con el mensaje **No se pueden enviar más invitaciones, esta tarea está completada o ha alcanzado el número máximo de invitaciones permitidas**.

Puedes editar o eliminar los roles desde la misma sección. Como cada rol solo puede usarse en una tarea de invitación, si todos los roles de la originación ya están tomados el tipo **Invitación** aparece deshabilitado al agregar una tarea, con el aviso **No hay roles disponibles para asignar a esta tarea.** Para crear otra tarea de invitación tienes que agregar antes un rol nuevo.

#### Eliminar originación

Si necesitas eliminar una originación de forma permanente:

1. Selecciona la opción **Eliminar originación**.
2. Confirma que no necesitas los datos de la originación antes de proceder.

:::danger Peligro
Este proceso es irreversible.
:::

### Ciclo de vida de una respuesta

Cada respuesta a una originación tiene un estado que refleja su avance en el flujo. Lo ves en la columna **Estado** del listado de respuestas, en el [filtro por estado](/es/platform/customers/origination.html#filtrar-respuestas) y en la sección **Detalles** de la respuesta.

- **No Iniciada**: La respuesta ya existe, pero todavía no se guardó ninguna respuesta a sus tareas y no tiene fecha de inicio.
- **Pendiente**: La respuesta está en curso. Es el único estado en el que se puede seguir respondiendo el flujo.
- **Completada**: El flujo terminó. La fecha queda registrada en **Completada el**.
- **Cancelada**: La respuesta se detuvo definitivamente. La fecha queda registrada en **Cancelada el**, junto con la **Razón de cancelación**.

Las transiciones entre estados son las siguientes:

| Transición | Cuándo ocurre |
|---|---|
| No Iniciada → Pendiente | Al guardarse la primera respuesta a una de sus tareas. En ese momento se registra la fecha de inicio en **Comenzó el**. |
| Pendiente → Completada | De forma automática, cuando ya no quedan tareas visibles por responder, o de forma manual con el botón **Completar** cuando las **Reglas de completado** de la originación piden completado manual. |
| No Iniciada, Pendiente o Completada → Cancelada | Al [cancelar la respuesta](/es/platform/customers/origination.html#cancelar-respuesta) o al cancelarse automáticamente por vencimiento. |

**Cancelada** es un estado final y no tiene vuelta atrás. **Completada** tampoco regresa a **Pendiente**, ni siquiera al [reabrir una de sus tareas](/es/platform/customers/origination.html#reabrir-tareas-de-una-respuesta): mientras la respuesta esté **Completada** o **Cancelada**, la plataforma rechaza cualquier cambio sobre sus tareas y sus invitaciones.

:::warning Atención con las respuestas en estado No Iniciada
Una respuesta nace **No Iniciada** y solo pasa a **Pendiente** cuando alguien guarda su primera tarea, así que las respuestas creadas desde el panel o por invitación se quedan ahí hasta que el usuario entre al flujo. Las tarjetas **Pendientes**, **Completadas** y **Canceladas** del resumen no las cuentan, y en Liquid el filtro [`by_status`](/es/platform/channels/liquid-markup/filters.html#by-status) tampoco las alcanza. Para encontrarlas, usa el filtro **Estado** del listado de respuestas.
:::

#### Estados de las respuestas a tareas

Además del estado de la respuesta completa, cada respuesta a una tarea lleva su propio estado, con sus propias fechas de inicio y de completado:

- **No iniciada**: La tarea todavía no tiene ninguna respuesta guardada.
- **Pendiente**: La tarea se abrió y tiene una respuesta guardada, pero no está terminada.
- **Completada**: La tarea se dio por terminada, ya sea por el usuario, por el agente asignado o de forma automática.

Una tarea **Completada** puede volver a **Pendiente** al [reabrirla](/es/platform/customers/origination.html#reabrir-tareas-de-una-respuesta), lo que borra su fecha de completado y deja el registro correspondiente en la pestaña **Actividad** de la respuesta. La reapertura de una tarea no cambia el estado de la respuesta completa.

En la pestaña **Tareas** de la respuesta, la plataforma muestra cada tarea como **Completada** o **Pendiente**, sin distinguir las **No iniciada**. El estado exacto lo obtienes en `task_response.status` desde [Liquid](/es/platform/channels/liquid-markup/objects.html#tipos-de-respuesta-de-tareas) y desde la [API de administración](/es/platform/core/api.html).

:::tip Tip
Una plantilla o un reporte que solo pregunten por `completed` no distinguen una tarea que nadie abrió de una que quedó a medio responder. Si necesitas esa diferencia, compara contra los tres valores `not_started`, `pending` y `completed`.
:::

### Vencimiento de las respuestas

Cuando la originación tiene configurado **Vence en**, cada respuesta lleva además un estado de vencimiento, independiente de su [estado en el flujo](/es/platform/customers/origination.html#ciclo-de-vida-de-una-respuesta):

- **A tiempo**: Todavía no se consume el 75% del plazo.
- **Vence pronto**: Ya se consumió el 75% del plazo, pero la fecha límite aún no pasa.
- **Vencido**: La fecha límite ya pasó.

El plazo se cuenta desde el disparador configurado en la originación: el inicio de la respuesta o la fecha respondida en una pregunta de tipo Fecha del flujo. El estado de vencimiento solo aplica a las respuestas **Pendiente**: al completarse o cancelarse, la respuesta deja de mostrarlo.

En el listado de respuestas, la columna **Vence en** muestra la fecha límite seguida de la etiqueta entre paréntesis, por ejemplo `22/02/2026 (Vence pronto)`. Si la respuesta todavía no arranca, muestra **No iniciado**, y cuando no corresponde una fecha límite muestra `--`.

Puedes extender el plazo de una respuesta concreta agregándole días adicionales con el parámetro `due_extension_days` del endpoint de actualización de respuestas de la [API de administración](/es/platform/core/api.html). Los días se suman a los del **Vence en** de la originación y desplazan tanto la fecha límite como el umbral de **Vence pronto**, y el cambio queda registrado en la actividad de la respuesta.

:::tip Actualización del estado de vencimiento
El estado de vencimiento se recalcula en un proceso en segundo plano que corre una vez al día, así que una respuesta puede tardar hasta 24 horas en aparecer como **Vence pronto** o **Vencido**. Extender el plazo de una respuesta sí recalcula su estado de inmediato.
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

El **Total** cuenta también las respuestas **No Iniciada**, que no tienen tarjeta propia: si la suma de las otras tres no cuadra con el total, la diferencia son las respuestas que se crearon y nunca se iniciaron.

Debajo de las tarjetas, un gráfico de distribución reparte las respuestas en cinco categorías que combinan el [estado de la respuesta](/es/platform/customers/origination.html#ciclo-de-vida-de-una-respuesta) con su [estado de vencimiento](/es/platform/customers/origination.html#vencimiento-de-las-respuestas): **No Iniciada**, **A tiempo**, **Vence pronto**, **Vencido** y **Completada**. Las respuestas **Pendiente** se reparten entre **A tiempo**, **Vence pronto** y **Vencido**; si la originación no tiene **Vence en** configurado, todas quedan en **A tiempo**. Las **Cancelada** no aparecen en el gráfico.

Junto al gráfico, el **Tiempo promedio de completado** muestra cuánto tardan en promedio las respuestas completadas de esta originación.

### Gestión de Respuestas

La vista de respuestas te permite revisar y administrar individualmente el estado e información de cada respuesta a esta originación. Puedes seleccionar una respuesta específica para acceder a sus detalles y gestionar sus elementos clave.

En la vista de detalles, encontrarás las siguientes secciones principales:

- **Detalles**: Información general de la respuesta, como el nombre, descripción y estado actual.
- **Tareas**: Listado de tareas asociadas al flujo de originación, junto con su estado de avance.
- **Campos**: Campos configurados en el flujo para recopilar información del usuario.
- **Documentos**: Archivos subidos por los usuarios o necesarios para el proceso de originación.
- **Firmas**: Seguimiento de las firmas digitales recolectadas durante el flujo.
- **Verificación de Identidad**: Resultado de la verificación de identidad del usuario cuando el flujo la incluye.
- **Validaciones**: Validaciones realizadas por los administradores para autorizar el progreso.
- **Actividad**: Registro de actividades y cambios realizados en la respuesta, útil para seguimiento y auditoría.

Esta estructura te brinda una visión integral y detallada de cada respuesta, permitiéndote gestionar de manera efectiva todos los aspectos relacionados con las respuestas.

En las respuestas multiusuario, las pestañas **Tareas**, **Revisiones** y **Validaciones** incluyen el selector **Viendo tareas de**, que te permite alternar entre el **Usuario Principal** y cada usuario invitado para revisar el avance individual de sus tareas.

:::tip Tip
Desde la vista de una respuesta en el menú de acciones (identificado con …) se puede [impersonar](/es/platform/customers/users) al usuario para ayudarlo a contestar la originación. Esto depende de los roles del usuario
:::

:::tip Alcance por segmentos
Si tu acceso al reino está [restringido por segmentos](/es/platform/customers/settings.html#restringir-el-alcance-con-segmentos), solo verás las respuestas de los usuarios de tu alcance. Las respuestas que tengas asignadas siguen visibles y operables aunque el usuario pertenezca a segmentos fuera de tu alcance.
:::

#### Permisos de visibilidad de las respuestas

Los permisos del rol deciden qué respuestas ve un miembro del equipo y cuánto ve de cada una. En los permisos de Customers del rol hay cuatro que funcionan por niveles:

- **Listar Respuestas Asignadas**: en el listado ve solo las respuestas que tiene asignadas y, al abrir una, solo la sección **Detalles**.
- **Listar Todas las Respuestas**: ve todas las respuestas, no solo las que tiene asignadas. Incluye **Listar Respuestas Asignadas**.
- **Ver Tareas de la Respuesta**: agrega la sección **Tareas**, con la posibilidad de asignar y completar tareas y de aprobar o rechazar validaciones. Incluye **Listar Respuestas Asignadas**.
- **Ver Respuesta Completa**: agrega las secciones restantes, **Campos**, **Documentos**, **Firmas**, **Verificación de Identidad**, **Validaciones** y **Actividad**. Incluye **Ver Tareas de la Respuesta**.

Al marcar un permiso, la plataforma marca también los que ese permiso incluye. Las secciones que el rol no puede ver no aparecen en el menú de la respuesta.

Los permisos de acción se apoyan en esos niveles: **Editar Respuestas** requiere **Ver Respuesta Completa**; **Asignar Respuestas** requiere **Listar Todas las Respuestas**; **Eliminar Respuestas** y **Completar Respuestas** requieren **Listar Respuestas Asignadas**.

:::tip Tip
**Iniciar Respuestas** es independiente de los permisos de visibilidad: un rol puede crear respuestas en nombre de un usuario sin ver el listado completo ni el detalle.
:::

:::warning Atención
Los roles que ya tenías conservan el acceso que tenían: los que veían el detalle completo mantienen **Ver Respuesta Completa**, y los que tenían **Iniciar Respuestas** mantienen además **Asignar Respuestas** y **Listar Todas las Respuestas**. Los niveles separados aplican cuando edites el rol.
:::

#### Buscar respuestas

El listado de respuestas incluye una caja de búsqueda que te permite encontrar respuestas por los datos del usuario, los valores de sus campos personalizados, las respuestas ingresadas en los campos del flujo y el contenido de las tareas.

La búsqueda requiere un mínimo de 3 caracteres, no distingue mayúsculas ni acentos y encuentra coincidencias parciales. Por ejemplo, `lau` encuentra a "Claudio" y `perez` encuentra a "Pérez". Las claves `id` y `uuid` son la excepción y se explican más abajo.

Puedes buscar de dos formas, que además puedes combinar en una misma consulta:

- **Texto libre**: Escribe uno o más términos y la búsqueda los encontrará en los datos del usuario, los valores de sus campos personalizados, las respuestas ingresadas en los campos del flujo y el contenido de las tareas.
- **Pares clave=valor**: Escribe la clave de un campo seguida de `=` y el valor a buscar para acotar la búsqueda a ese campo específico.

Las claves disponibles para los pares `clave=valor` son:

- **Datos del usuario**: `first_name`, `last_name`, `second_last_name`, `email` y `username`.
- **Identificadores**: `id` y `uuid`. Estas dos no se comportan como el resto: cada una busca en dos lugares a la vez y no admite coincidencias parciales. Se explican en [Buscar por identificador](/es/platform/customers/origination.html#buscar-por-identificador).
- **Campos personalizados del usuario**: La clave del campo personalizado, con o sin el prefijo `_ucf_`. Por ejemplo, `pais=Chile` y `_ucf_pais=Chile` son equivalentes.
- **Preguntas del flujo**: El identificador de la pregunta definido en el flujo de originación. Por ejemplo, `rut=18301757`.

Al usar pares `clave=valor` ten en cuenta lo siguiente:

- La clave debe escribirse completa, mientras que el valor sí admite coincidencias parciales. Las claves `id` y `uuid` son la excepción: no admiten coincidencias parciales.
- Para buscar valores o frases con espacios usa comillas dobles. Por ejemplo, `first_name="Jean Pierre"` o `"crédito hipotecario"`.
- Todas las condiciones se combinan entre sí, por lo que una respuesta debe cumplir todos los términos y pares de la consulta para aparecer en los resultados.
- Si la clave no existe o el valor está vacío, el término se busca como texto libre sin generar errores.

Algunos ejemplos de búsquedas:

| Búsqueda | Resultado |
|---|---|
| `Claudio` | Respuestas cuyo usuario o contenido incluye "Claudio". |
| `first_name=Claudio` | Respuestas cuyo usuario contiene "Claudio" en su nombre. |
| `pais=Chile` | Respuestas cuyo usuario tiene "Chile" en el campo personalizado `pais`. |
| `rut=18301757` | Respuestas donde la pregunta con identificador `rut` contiene "18301757". |
| `first_name="Jean Pierre"` | Respuestas cuyo usuario contiene "Jean Pierre" en su nombre. |
| `pais=Chile rut=18301757 hipotecario` | Respuestas que cumplen las tres condiciones a la vez. |
| `id=42` | La respuesta cuyo id es 42 y, además, todas las respuestas del usuario cuyo id es 42. |

##### Buscar por identificador

Las claves `id` y `uuid` son distintas del resto: cada una busca **en dos lugares a la vez** y basta que coincida uno de los dos para que la respuesta aparezca en los resultados.

| Clave  | Dónde busca                                        |
|--------|----------------------------------------------------|
| `id`   | El id del usuario **o** el id de la respuesta.     |
| `uuid` | El uuid del usuario **o** el uuid de la respuesta. |

La consecuencia práctica es que un mismo valor puede traer resultados de dos orígenes distintos. Por ejemplo, `id=42` devuelve la respuesta cuyo id es 42 y, además, todas las respuestas del usuario cuyo id es 42, aunque no tengan ninguna relación entre sí. Si lo que buscas es una respuesta puntual, revisa la columna del usuario para descartar las que llegaron por la otra vía.

Ninguna de las dos admite coincidencias parciales, a diferencia del resto de la búsqueda:

- `uuid` distingue además mayúsculas de minúsculas. Copia el identificador completo tal como aparece en la plataforma: la mitad de un uuid no devuelve nada.
- `id` se interpreta como un número entero y solo conserva los dígitos iniciales del valor. Escríbelo únicamente con dígitos: `id=18.301.757` busca la respuesta con id `18`, y `id=abc` no devuelve resultados. En ninguno de los dos casos aparece un aviso.

Si pegas un uuid en la caja sin la clave, la búsqueda lo trata como texto libre y solo encuentra la respuesta con ese uuid, no las del usuario con ese uuid. Para lo segundo tienes que escribir `uuid=`.

:::tip Actualización de los resultados
Los cambios recientes en una respuesta pueden tardar unos segundos en reflejarse en los resultados de la búsqueda. Los cambios en los datos del usuario, en los valores de sus campos personalizados y en los segmentos se reflejan de forma diferida.
:::

#### Filtrar respuestas

Además de la búsqueda, puedes acotar el listado de respuestas con los siguientes filtros, combinables entre sí y con la búsqueda:

- **Rango de fechas**: Filtra por la fecha de creación de la respuesta.
- **Estado**: Filtra por el estado actual de la respuesta: **No Iniciada**, **Pendiente**, **Completada** o **Cancelada**.
- **Asignado**: Muestra las respuestas asignadas al administrador seleccionado.
- **Segmento**: Muestra las respuestas de los usuarios que pertenecen al [segmento](/es/platform/customers/segments.html) seleccionado.

#### Asignar respuesta

En el listado de respuestas, selecciona el menú de acciones y presiona la opción **Asignar**. En el modal puedes asignar la respuesta a un administrador, a un grupo completo de administradores o a un usuario específico dentro de un grupo. También puedes usar la opción **Asígname** para asignarte la respuesta directamente.

Al asignar a todo un grupo, todos sus miembros pueden ver y gestionar la respuesta. La columna **Asignado** del listado muestra el grupo o el administrador asignado; si el administrador fue elegido desde un grupo, se muestra también el nombre del grupo.

#### Cancelar respuesta

Para cancelar una respuesta, ábrela y presiona el botón **Cancelar** en la vista de la respuesta. En el modal puedes ingresar de manera opcional una **Razón de cancelación** y luego confirmar la acción. La cancelación modifica permanentemente el estado de la respuesta a **Cancelada**.

Puedes cancelar respuestas en estado **No Iniciada**, **Pendiente** o **Completada**.

En los detalles de una respuesta cancelada se muestra la fecha de cancelación en el campo **Cancelada el** y la **Razón de cancelación** ingresada. Si no se ingresó una razón, el campo muestra `--`.

#### Eliminar respuesta

Para eliminar una respuesta individual, selecciona el menú en la columna actions y presiona la opción delete. Esto eliminará la respuesta.

Para eliminar varias respuestas al mismo tiempo, selecciona cada entrada marcando la casilla correspondiente y presiona el botón eliminar.

#### Reabrir tareas de una respuesta

A través de la [API de administración](/es/platform/core/api.html) puedes gestionar individualmente las respuestas a tareas de una respuesta: consultarlas, cambiarlas de estado (iniciar, completar o **reabrir** una tarea ya completada para que el usuario vuelva a responderla) y eliminarlas de forma individual o masiva.

Considera lo siguiente:

- Cambiar el estado de una respuesta a tarea requiere el permiso **Cambiar estado de la Respuesta de una Tarea**; eliminar respuestas a tareas requiere el permiso **Eliminar Respuestas**.
- Estas operaciones solo están disponibles mientras la respuesta está en estado **No Iniciada** o **Pendiente**.
- Todas las operaciones quedan registradas en la actividad de la plataforma.

#### Invitar usuarios

Puedes invitar a usuarios para que ingresen información en una originación. Al invitar a un usuario, deberás ingresar su información básica

- **Nombre**: El primer nombre del usuario que utilizará la originación.
- **Apellido**: El apellido del usuario.
- **Email**: La dirección de correo electrónico del usuario, donde recibirá la invitación para acceder a la originación.
- **Asignar la respuesta**: En la lista desplegable, selecciona un administrador que gestionará esta originación en particular. Si no se selecciona un administrador, la respuesta quedará sin asignar.

Para invitar usuarios desde el panel, la **Activación de la cuenta** del reino no puede estar en **Deshabilitada**: con esa opción el botón **Invitar** aparece deshabilitado y, al pasar el cursor, muestra el mensaje _Las invitaciones no están disponibles porque el registro está deshabilitado en este realm_.

En la página de originación la restricción es más acotada: con **Deshabilitada** se bloquea el formulario de invitación a usuarios nuevos, pero desde ahí se puede seguir invitando a usuarios que ya existen en el reino.

Si la **Activación de la cuenta** está en **Solo por invitación**, el usuario nuevo que invites queda activo y puede completar el flujo de inmediato, sin correo de activación ni espera. Un usuario que ya existía y estaba desactivado no se reactiva al invitarlo: mantiene su estado. Revisa las opciones en la [configuración del reino](/es/platform/customers/settings.html#general).

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

Es importante tener en cuenta que cada originación puede estar vinculada únicamente a una página en toda tu organización. Esto incluye las páginas de otros sitios y las de los stages de un mismo sitio: si la originación ya está vinculada a otra página, la plataforma no te permite guardar la nueva. Si necesitas crear una nueva página de originación, primero será necesario desvincular o eliminar la página existente para evitar conflictos y asegurar una configuración adecuada.

La originación que vincules debe pertenecer al mismo reino que el sitio donde creas la página. Si el sitio está conectado a otro reino, la plataforma rechaza el vínculo e indica que la originación debe pertenecer al reino del sitio.

### Páginas sin originación vinculada

Una página de originación puede quedar sin originación vinculada. Mientras esté en ese estado, la página responde a los usuarios finales con un error 404, por lo que debes vincularle una originación para volver a desplegar el flujo.

Esto ocurre en tres situaciones:

- **Eliminas la originación**: la página se mantiene en el sitio, pero sin originación vinculada.
- **Cambias el reino del sitio**: todas las páginas de originación de ese sitio pierden la referencia, porque cada originación pertenece a un reino. El formulario de configuración de la aplicación te advierte de esto antes de que confirmes el cambio.
- **Creas un stage**: las páginas de originación se copian al stage sin la originación vinculada. Como cada originación admite una sola página, en el stage debes vincular una originación distinta del mismo reino.

Para más detalles sobre el comportamiento de los stages, revisa la sección [stages](/es/platform/channels/sites.html#stages) de las aplicaciones web.
