---
search: true
---

# Origination

Origination es una herramienta diseñada para optimizar y automatizar procesos complejos en diversos sectores, como la gestión de solicitudes, aprobaciones o registros que requieren la interacción de múltiples partes. Este feature permite a los usuarios crear y gestionar flujos de trabajo colaborativos en los que diferentes actores pueden participar activamente. A través de Origination, es posible solicitar y recopilar documentación e información entre partes, facilitando la validación y el avance del proceso en función de los requisitos cumplidos.

Una de las principales ventajas de Origination es su capacidad para gestionar flujos de trabajo en múltiples pasos, permitiendo que cada paso sea verificado antes de avanzar, lo que garantiza la precisión y el cumplimiento de cada etapa. Además, Origination ofrece un entorno seguro y eficiente, evitando el intercambio de información confidencial por medios inseguros, lo que reduce el riesgo de errores y asegura la protección de los datos.

Esta funcionalidad no está incluida por defecto en todos los planes de Modyo. Para activarla, es necesario contactar al equipo de Modyo para solicitar su implementación.

Origination está diseñado para cualquier organización que busque agilizar procesos complejos, mejorar la colaboración entre los involucrados y asegurar que el flujo de trabajo se gestione de manera estructurada y segura.

## Crear una nueva originación

Para crear una nueva originación, sigue estos pasos:

- En el menú lateral, navega a **Customers** \> **Realms** y selecciona el Reino en el que deseas trabajar.
- Dirígete a la opción **Origination**.
- Haz clic en el botón **+ New Origination**.
- Asigna un nombre y selecciona el tipo de originación que deseas crear.
- Haz clic en **Crear** para finalizar y comenzar a configurar los pasos del nuevo flujo de originación.

### Tipos de originación

Los tipos de originación determinan el propósito y las funcionalidades específicas de los flujos que deseas implementar. Al crear una nueva originación, puedes elegir entre los siguientes tipos:

- **Persona**: Permite que tu originación recopile datos de personas naturales como documento de identidad o firma electrónica.
- **Organización**: Recopila información de instituciones tales como inscripciones legales o múltiples accionistas.

## Flujos de originación

Los flujos de originación son procesos configurables diseñados para recopilar, validar y gestionar información clave de los usuarios o entidades. Estos flujos se componen de Pasos y Tareas, los cuales definen la estructura y las acciones necesarias para completar el flujo.

### Crear y modificar flujos de originación

Al crear o seleccionar un flujo de originación tienes acceso a gestionar sus propiedades, agregar pasos y tareas para crear flujos eficientes.

#### Pasos

Los pasos son conjuntos de tareas que se presentan en una misma pantalla al usuario. Para avanzar al siguiente paso, el usuario debe completar todas las tareas y reglas asignadas al paso actual.

##### Agregar pasos

Para agregar un paso, presiona el botón **Añadir** y designa los valores

- **Nombre**: El nombre que se mostrará en la interfaz del usuario para identificar el Paso.
- **Identificador**: Un valor único que se incluirá en la URL del flujo de originación.

#### Tareas

Las tareas son las unidades de acción dentro de cada paso. Estas tareas recopilan información, realizan validaciones o solicitan acciones específicas del usuario. Las tareas se completan de manera secuencial, y al validarse, permiten avanzar al siguiente paso del flujo.

##### Agregar tareas

Para agregar una nueva Tarea, presiona el botón **+ Agregar tarea** y eso creará un nuevo contenedor de tareas. Al crear una tarea, debes incluir sus valores

- **Nombre**: El nombre de la tarea que será visible para el usuario.
- **Identificador**: Un identificador único que se incluirá en la URL de la originación.
- **Descripción**: Un breve texto explicativo sobre la tarea, que será visible para el usuario.
- **Tipo**: Selecciona el tipo de tarea en función de los objetivos del flujo.

##### Tipos de tareas

Los tipos de tareas disponibles son:

- **Input**: Solicitan información o entrada de datos del usuario.
- **Validación**: Requieren que un administrador valide la tarea antes de avanzar al siguiente paso.
- **Firma**: Solicitan al usuario una firma digital.
- **Revisión pendiente**: Pausa el proceso hasta que un administrador autorice el avance al siguiente paso.

:::warning Atención
 Para guardar un paso debes incluir al menos una Tarea con su respectivo contenido. No puedes almacenar pasos vacíos.
:::

#### Campos

Puedes incorporar una amplia variedad de campos en tus formularios para personalizar la recolección de datos de tus usuarios.

##### Añadir campos

Para incluir un nuevo campo debes seleccionar una tarea y seleccionar la pestaña **Añadir**

Origination soporta todos los tipos de entrada disponibles en formularios. Puedes ver el listado completo de tipos en la [documentación de formularios](https://docs.modyo.com/es/platform/customers/forms.html#anadir)


##### Editar campos

Al seleccionar un campo, puedes modificar sus propiedades al dirigirte a  la pestaña **Editar** Allí encontrarás diferentes propiedades según las características del campo seleccionado. Las principales propiedades son:

- **Título del campo**:Es el nombre del campo que se mostrará en la interfaz del usuario. Este debe ser claro y descriptivo para facilitar la interacción.
- **Requerido**: Determina si el campo es obligatorio o no. Si está activado, el usuario deberá completarlo antes de continuar con el flujo.
- **Instrucciones del campo**: proporciona orientación adicional para que el usuario comprenda cómo completar el campo. Estas instrucciones se muestran directamente en la interfaz, debajo del campo.
- **Agregar campo Pop-up de instruciones**: Agrega un ícono de ayuda junto al campo. Al hacer clic en este ícono, se despliega un mensaje con información adicional o consejos útiles relacionados con el campo.
- **Opciones**: Propiedades adicionales de acuerdo al tipo de campo seleccionado.

##### Propiedades de la tarea

En este apartado se pueden editar los valores de la tarea seleccionada, puedes encontrar estos valores

- **Nombre**: El nombre de la tarea que será visible para el usuario.
- **Identificador**: Un identificador único que se incluirá en la URL de la originación.
- **Descripción**: Un breve texto explicativo sobre la tarea, que será visible para el usuario.


### Editar Configuración de la originación

Al seleccionar la opción **Editar** en el menu contextual de tu orignación puedes editar sus propiedades.

- **Nombre**: Define el nombre de la originación, visible para los usuarios en la interfaz.
- **Descripción**: Incluye un breve texto explicativo sobre el propósito de la originación.
- **Mensaje de completado**: Es el mensaje que aparecerá al usuario al finalizar el proceso de originación.
- **Asignado por defecto de la aplicación**: especifica la persona que será asignada automáticamente al recibir una nueva originación.
- **Vence en**:  Establece un plazo máximo para completar la originación.
- **Reglas de completado**:  Define el comportamiento de completado para cada aplicación.
- **Privacidad**: Permite restringir el acceso al flujo de originación a ciertos segmentos de usuarios predefinidos.

#### Borrar originación

Si necesitas eliminar una originación de forma permanente, puedes hacerlo desde esta sección.

:::danger Peligro
Este proceso es irreversible, por lo que debes asegurarte de que no necesitas la originación ni sus datos antes de proceder.
:::

### Ver detalles de una originación

Al acceder a una originación específica, puedes visualizar métricas y datos relevantes en función de la vista que selecciones. Estas vistas te permiten analizar y gestionar de manera eficiente la información asociada con la originación.

- **Resumen**: Presenta un panorama general de las métricas principales asociadas a la originación, proporcionando una visión rápida del rendimiento y progreso.
- **Aplicaciones**: Muestra un listado detallado de todas las aplicaciones realizadas dentro de esta originación. Es ideal para revisar el historial y el estado de cada solicitud.
- **Asignados**: Proporciona un listado de las personas asignadas a esta originación, junto con sus métricas de gestión, lo que facilita el seguimiento del desempeño y la carga de trabajo.

### Resumen de originación

La vista resumen de una originación te ofrece un resumen de las métricas clave relacionadas con el rendimiento y estado de las solicitudes en el flujo. Esta información es útil para comprender el progreso general y realizar un seguimiento efectivo.

- **Pendientes**: Muestra el número total de solicitudes enviadas que aún no han sido completadas.
- **Completadas**: Indica la cantidad de solicitudes que han finalizado exitosamente el flujo de originación.
- **Canceladas**: Refleja las solicitudes que han sido canceladas por el usuario o el administrador.
- **Total**: Representa el número total de solicitudes, incluyendo las pendientes, completadas y canceladas.

### Gestión de Aplicaciones

La vista de aplicaciones te permite revisar y administrar individualmente el estado e información de cada originación. Puedes seleccionar una originación específica para acceder a sus detalles y gestionar sus elementos clave.

En la vista de detalles, encontrarás las siguientes secciones principales:

- **Detalles**: Información general de la originación, como el nombre, descripción y estado actual.
- **Tareas**: Listado de tareas asociadas al flujo de originación, junto con su estado de avance.
- **Campos**: Campos configurados en el flujo para recopilar información del usuario.
- **Documentos**: Archivos subidos por los usuarios o necesarios para el proceso de originación.
- **Firmas**: Seguimiento de las firmas digitales recolectadas durante el flujo.
- **Validaciones**: Validaciones realizadas por los administradores para autorizar el progreso.
- **Actividad**: Registro de actividades y cambios realizados en la originación, útil para seguimiento y auditoría.

Esta estructura te brinda una visión integral y detallada de cada originación, permitiéndote gestionar de manera efectiva todos los aspectos relacionados con las aplicaciones.

#### Asignar aplicación

En el listado de aplicaciones, selecciona el menú acciones y presiona la opción **Asignar**. En el menú contextual selecciona a un administrador para esta aplicación.

#### Cancelar aplicación

Selecciona una aplicación y presiona el menu contextual. Al seleccionar la opción **Cancelar** para modificar permanentemente el estatus de una aplicación a cancelado.

#### Eliminar aplicación

Para eliminar una aplicación individual, selecciona el menú en la columna actions y presiona la opción delete. esto eliminará la aplicación

Para eliminar varias aplicaciones al mismo tiempo, selecciona cada entrada marcando la casilla correspondiente y presiona el botón eliminar.

#### Invitar usuarios

Puedes invitar a usuarios para que ingresen información en una originación. Al invitar a un usuario, deberás ingresar su información básica

- **Nombre**: El primer nombre del usuario que utilizará la originación.
- **Apellido**: El apellido del usuario.
- **Email**: La dirección de correo electrónico del usuario, donde recibirá la invitación para acceder a la originación.
- **Asignar la aplicación**: En la lista desplegable, selecciona un administrador que gestionará esta originación en particular. Si no se selecciona un administrador, la aplicación quedará sin asignar.

### Gestión de Asignados

En la vista de asignados,  puedes  monitorear y administrar a los administradores responsables de las aplicaciones dentro de un reino. Esta vista facilita el seguimiento del desempeño y la carga de trabajo de los administradores. Puedes filtrar las aplicaciones asignadas por rangos de fecha

Al seleccionar un administrador, podrás ver todas las aplicaciones que tiene asignadas y su correspondiente status

## Crear una página de originación

Para desplegar una página de originación a los usuarios, sigue los pasos a continuación. Esto te permitirá habilitar un acceso directo y funcional a tus flujos.

- **Verifica Conexión con el Realm**: Accede al módulo de Channels, selecciona el sitio deseado y confirma que está conectado al Realm donde se encuentra configurada la originación.
- **Crear una página de originación**: Desde el sitio seleccionado, crea una nueva página y define su tipo como originación.
- **Seleccionar la originación**: Asocia la página con la originación que deseas desplegar.
- **Configurar Nombre y Ruta**: Define un nombre claro y una ruta específica para la página, y presiona Create para finalizar.

Los usuarios podrán acceder a la página de originación para realizar el flujo configurado. Es fundamental asegurarte de que todas las configuraciones estén correctamente definidas para garantizar el acceso a los usuarios finales.

El acceso a esta página estará restringido según las configuraciones de privacidad y segmentación establecidas en la originación. Esto asegura que solo los segmentos autorizados puedan interactuar con el flujo, manteniendo el control y la seguridad de la información.

Es importante tener en cuenta que cada originación puede estar vinculada únicamente a una página. Si necesitas crear una nueva página de originación, primero será necesario desvincular o eliminar la página existente para evitar conflictos y asegurar una configuración adecuada.