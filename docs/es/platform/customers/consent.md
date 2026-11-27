---
search: true
---

# Consentimiento

**Consentimiento** es el módulo de Modyo Customers que permite pedir, registrar y administrar los consentimientos que los usuarios de un reino otorgan sobre el tratamiento de sus datos personales, y atender las solicitudes con que ejercen sus derechos sobre esos datos.

El módulo cubre el ciclo completo: el catálogo de datos y finalidades del reino, los documentos legales que respaldan cada consentimiento, la captura en formularios, originaciones y registro, el centro de privacidad donde el usuario revisa y cambia sus decisiones, la evidencia de cada decisión y la bandeja de solicitudes de derechos.

Esta funcionalidad no está incluida por defecto en todos los planes de Modyo. Para activarla, es necesario contactar al equipo de Modyo. Si el plan de la cuenta no la incluye, el menú, los permisos, los roles y los campos de consentimiento no se muestran en la plataforma.

:::tip Responsabilidad de cada organización
Modyo entrega las herramientas para gestionar consentimientos y derechos. Definir las bases legales, los plazos de respuesta, los textos y los documentos que exige la ley aplicable corresponde a cada organización, con su propia asesoría legal.
:::

## Conceptos Clave

| Concepto | Qué representa |
|---|---|
| **Titular** | El usuario del reino a quien pertenecen los datos personales. |
| **Categoría de dato** | Un tipo de dato personal que el reino recoge, como el correo o los ingresos, con su nivel de riesgo y si es sensible. |
| **Uso de datos** | Para qué se usan los datos, con su base legal y su plazo de retención. En una definición de consentimiento, cada uso de datos es una **finalidad**. |
| **Base legal** | El fundamento jurídico de un uso de datos: consentimiento, contrato, obligación legal, interés legítimo u otra. |
| **Ámbito** | Un producto o una sucursal al que se puede acotar una autorización. |
| **Documento legal** | Una política de privacidad, unos términos de uso o un aviso específico, versionado, que respalda un consentimiento. |
| **Definición de consentimiento** | Lo que el reino pide al titular: las finalidades, los datos, los textos, los documentos y la vigencia. Se publica en versiones. |
| **Acuerdo** | El estado vigente de lo que un titular decidió sobre cada finalidad de una definición. |
| **Acción de consentimiento** | Cada decisión del titular (otorgar, no otorgar o revocar), registrada de forma inmutable como evidencia. |
| **Solicitud de derechos** | Lo que el titular pide sobre sus datos, como acceder a ellos, corregirlos o eliminarlos. |

Las categorías de dato y los usos de datos siguen la taxonomía abierta [Fideslang](https://ethyca.github.io/fideslang/). Puedes elegir un nodo de la taxonomía o crear una extensión propia cuando ningún nodo describe tu caso.

## Configurar el Catálogo

El catálogo reúne las piezas con las que se arman las definiciones. Para administrarlo:

- En el menú lateral, navega a **Customers** > **Reinos** y selecciona el reino.
- Dirígete a **Configuración de reino** > **Consentimiento**.

La configuración tiene las secciones **Categorías de dato**, **Usos de datos**, **Bases legales**, **Ámbitos** y **Solicitudes de derechos**. Esta última se describe en [Configurar los tipos de derecho](#configurar-los-tipos-de-derecho).

En todas las secciones la **Clave** no se puede cambiar después de crear el registro. Un registro que ya se usa en una definición no se elimina: se marca como **Obsoleto**, deja de ofrecerse en las definiciones nuevas y conserva su historial.

### Categorías de dato

Describen los datos personales que recoge el reino. Cada categoría tiene:

- **Clave** y **Etiqueta**: El nodo de Fideslang o la extensión, y el nombre visible.
- **Nivel de riesgo**: **Bajo**, **Medio** o **Alto**.
- **Dato sensible**: Marca los datos que la ley trata como sensibles, como los de salud o los biométricos.

:::warning Datos sensibles
Una definición que incluye al menos una categoría sensible queda marcada como **sensible**, se presenta como una cláusula propia y solo se puede capturar con un usuario con sesión iniciada.
:::

### Usos de datos

Describen para qué se usan los datos. Cada uso tiene:

- **Clave** y **Etiqueta**: El nodo de Fideslang o la extensión, y el nombre visible.
- **Base legal**: Una de las bases legales del reino.
- **Retención**: Los meses que se conservan los datos, o **Indefinida**.

Solo los usos de datos cuya base legal es de tipo **Consentimiento** se pueden usar como finalidades en una definición.

### Bases legales

Cada base legal tiene un **Título**, una **Descripción** y un **Tipo**: **Consentimiento**, **Contrato**, **Obligación legal**, **Interés legítimo** u **Otra**.

### Ámbitos

Los ámbitos permiten acotar una definición a productos o sucursales. Cada ámbito tiene una **Clave**, un **Título** y un **Tipo**: **Producto** o **Sucursal**.

## Documentos Legales

Los documentos legales respaldan los consentimientos y se presentan al titular junto a cada definición. Para crear uno:

- Dentro del reino, dirígete a **Consentimiento** > **Documentos**.
- Haz clic en el botón para crear un documento y completa el **Título**, el **Código**, el **Tipo** y el **Formato**.
- Redacta el contenido en la página del documento y publícalo.

Los tipos disponibles son **Política de privacidad**, **Términos de uso**, **Aviso específico** y **Otro**. El formato puede ser **Texto (editor)** o **Archivo PDF**, y no se puede cambiar después de crear el documento. El **Resumen** es un texto breve que se muestra junto al enlace al documento en los formularios.

Los documentos se publican en versiones. Su estado puede ser **Borrador**, **Publicado** o **Cambios pendientes**, cuando hay una versión publicada y un borrador con cambios sin publicar. Cada versión publicada queda registrada con su contenido y una huella digital (hash), para poder demostrar después qué texto vio el titular.

:::warning Documentos vinculados
Un documento vinculado a una definición de consentimiento no se puede despublicar ni eliminar.
:::

El titular ve siempre la versión publicada vigente del documento, en una ventana emergente o en una vista de lectura desde su perfil, y puede descargarla en PDF. La evidencia de cada decisión registra qué versión se le presentó.

## Definiciones de Consentimiento

Una definición describe lo que el reino pide al titular. Para crear una:

- Dentro del reino, dirígete a **Consentimiento** > **Definiciones**.
- Haz clic en **Nueva definición**, ingresa el código y el nombre interno, y haz clic en **Crear definición**.
- Completa la definición pestaña por pestaña. Un indicador **Qué falta** muestra lo que todavía impide publicarla.

### Pestañas de la definición

- **Básicos**: El **Código**, el **Nombre** interno y la **Descripción**.
- **Finalidad y datos**: Las finalidades que se piden. Cada finalidad es un uso de datos con base legal de consentimiento, con las categorías de dato que usa y la opción **Finalidad obligatoria**. Se requiere al menos una finalidad con sus categorías.
- **Textos**: El **Título** del check que ve el titular y su descripción, con una **Vista previa del check**.
- **Ámbitos**: Los productos o sucursales a los que se acota la definición.
- **Documentos legales**: Los documentos que se presentan junto al check.
- **Vigencia y presentación**: Cuánto dura el consentimiento y cómo se presenta a quien ya decidió.

### Selección granular

Con **Selección granular**, el titular acepta o rechaza cada finalidad por separado, y las finalidades obligatorias deben aceptarse para continuar. Sin ella, un solo check otorga todas las finalidades, y por eso deben ser todas obligatorias o todas opcionales.

### Vigencia y presentación

- **Vigencia**: Los meses que dura el consentimiento desde que se otorga, o **Sin vencimiento**. Al cumplirse, el acuerdo pasa a **Vencido**.
- **Re-presentación**: Qué ve en formularios y originaciones un titular que ya tiene un acuerdo vigente sobre la definición: **Volver a preguntar** muestra de nuevo el check, **Avisar** muestra un aviso en su lugar y **Ocultar** no muestra nada.
- **Requerida para usar el sistema**: Indica que el consentimiento es necesario para usar el servicio. Solo está disponible cuando todas las finalidades son obligatorias. En el centro de privacidad, el titular recibe una advertencia antes de retirarlo.
- **Modo de consentimiento**: En esta versión solo está disponible el consentimiento **Expreso**: el titular marca el check de forma activa.

### Publicar una versión

Las definiciones se publican en versiones. El estado de una definición puede ser **Borrador**, **Publicada** o **Cambios pendientes**. La primera versión publicada no se puede modificar: cada edición posterior abre un nuevo borrador.

Al hacer clic en **Publicar**, la plataforma muestra los **Cambios respecto de la versión publicada** y propone si el cambio es material, según los campos que cambiaron. Debes confirmar el **Tipo de cambio**:

- **Cambio material**: Se vuelve a pedir el consentimiento a los titulares en formularios, originaciones y el centro de privacidad. Los acuerdos anteriores quedan desactualizados.
- **Cambio no material**: Los consentimientos existentes siguen vigentes con la nueva versión.

Si la plataforma propone un cambio material y eliges publicarlo como no material, debes escribir una **Justificación** que explique por qué los titulares no necesitan volver a consentir. La justificación queda registrada en la versión.

## Capturar el Consentimiento

Una definición publicada se puede presentar en tres lugares. En todos, el titular ve el título y la descripción de la definición junto al check, con enlaces a sus documentos legales.

### En formularios

En el constructor de [formularios](/es/platform/customers/forms.html), agrega el campo **Consentimiento** del grupo **Consentimiento** y elige la **Definición de consentimiento**. El campo puede ser **Requerido** u **Opcional**. Cada definición se puede usar una sola vez en el mismo formulario.

Si el formulario acepta envíos sin sesión, las definiciones sensibles aparecen deshabilitadas con la etiqueta **Requiere usuarios con sesión**. Si una definición pasa a ser sensible después de agregarla, el formulario omite la pregunta para los visitantes sin sesión y rechaza un envío anónimo que la incluya, sin registrar ninguna decisión.

### En originaciones

Las tareas Input de [Origination](/es/platform/customers/origination.html) ofrecen el mismo campo **Consentimiento**, con las mismas opciones que en los formularios.

### En el registro

En **Configuración de reino** > **Custom fields**, crea un campo de tipo **Consentimiento** y elige la definición. El check aparece en el formulario de registro del reino. Si cargas el valor por la API, debe ser `0` o `1`.

### Qué se registra

Cada decisión del titular genera una **acción de consentimiento** con su resultado (**Otorgado**, **No otorgado** o **Revocado**), la versión de la definición, las versiones de los documentos presentados, el punto de captura y los datos de la sesión. La acción no se puede modificar ni borrar, y lleva una huella SHA-256 calculada sobre su contenido.

A partir de las acciones, la plataforma mantiene el **acuerdo** del titular con cada finalidad, y registra los eventos **Consentimiento otorgado**, **Consentimiento rechazado** y **Consentimiento revocado** en la actividad del usuario. Puedes usar esos eventos en los filtros de [segmentos](/es/platform/customers/segments.html).

## Centro de Privacidad

El centro de privacidad es la vista del perfil donde el titular revisa lo que autorizó y ejerce sus derechos. Se encuentra en la ruta `/profile/privacy` del reino (revisa [Rutas del reino](/es/platform/customers/profile.html#rutas-del-reino)) y tiene dos pestañas:

- **Mis consentimientos**: Una tarjeta por definición, con su estado, las finalidades aceptadas y los documentos legales.
- **Mis solicitudes**: Las solicitudes de derechos del titular y el formulario para crear una nueva.

El estado de cada tarjeta puede ser **Vigente**, **Parcial**, **Requiere revisión**, **Vencido**, **No aceptado** o **Retirado**. Desde cada tarjeta, el titular puede:

- **Gestionar**: Cambiar su decisión. Las finalidades obligatorias solo se pueden retirar en conjunto.
- **Retirar consentimiento**: Quitar todas las finalidades de la definición. Si la definición es requerida para usar el sistema, el titular ve una advertencia antes de confirmar.
- **Revisar y aceptar**: Cuando se publicó una versión con cambio material, revisar la nueva versión y decidir de nuevo.

## Acuerdos

Para revisar lo que decidieron los titulares, dirígete a **Consentimiento** > **Acuerdos** dentro del reino. La lista muestra el usuario, la definición, la finalidad, el **Estado** (**Otorgado**, **No otorgado** o **Revocado**), las fechas y el **Origen**: **Formulario**, **Flujo de originación**, **Centro de privacidad** o **Registro**.

En la ficha de cada usuario, la pestaña de acuerdos muestra una tarjeta por definición con lo que otorgó o rechazó en cada finalidad, su estado (**Vigente**, **Parcial**, **Vencido**, **Revocado** o **No otorgado**) y la fecha **Vigente hasta**, junto con el historial de **Acciones de consentimiento**.

## Evidence Log

El **Evidence log** es el registro inmutable de todas las acciones de consentimiento del reino. Se encuentra en **Consentimiento** > **Evidence log** y permite buscar por usuario, por hash y por uso de datos.

El detalle de cada acción muestra:

- La **Versión presentada** de la definición y la **Versión de anclaje**.
- Los **Documentos legales presentados**, con su versión.
- La **Metadata de captura**: punto de captura, envío, sesión y actor.
- El **Payload canónico** sobre el que se calculó la huella.
- El **Hash guardado** y el **Hash recalculado**. Si coinciden, la acción muestra **Hash verificado**; si no, **El hash no coincide**, lo que indica que el registro fue alterado fuera de la plataforma.

Las respuestas de formularios y de originaciones muestran también una sección **Consentimientos**, con el enlace **Ver evidencia** de cada decisión capturada en ese envío.

## Solicitudes de Derechos

Los titulares ingresan sus solicitudes desde el centro de privacidad, y el equipo del reino las atiende en una bandeja con plazos, asignación y mensajes.

### Configurar los tipos de derecho

En **Configuración de reino** > **Consentimiento** > **Solicitudes de derechos**, crea los tipos de derecho que exige la ley de tu país con **Nuevo tipo de derecho**. Cada tipo tiene:

- **Nombre**, **Código** y **Descripción**. El código no se puede cambiar después de crear el tipo.
- **Plazo de respuesta** y **Unidad**: **días hábiles** o **días corridos**.
- **Prórroga (días)**: Los días adicionales que se pueden conceder una vez, en la misma unidad del plazo. Cero significa que el tipo no admite prórroga.
- **Estado**: Los titulares solo pueden solicitar los tipos activos.

Los cambios en un tipo de derecho aplican solo a las solicitudes nuevas.

:::warning Días hábiles
El cálculo en días hábiles excluye los sábados y domingos, pero todavía no considera los feriados. Si un plazo legal cae cerca de un feriado, revisa la fecha de vencimiento de la solicitud.
:::

En la misma sección, el bloque **Rechazos** define la **Autoridad de control** y el **Texto que se agrega a los rechazos**. Ese texto se suma a toda respuesta que deniegue un derecho, total o parcialmente, para que el titular sepa ante quién y en qué plazo reclamar.

### Ingresar una solicitud

En **Mis solicitudes**, el titular hace clic en **Ejercer un derecho**, elige uno o más tipos de derecho y describe lo que necesita. La solicitud requiere sesión iniciada y es gratuita. Al enviarla, el titular recibe un correo con el número de la solicitud y el plazo de respuesta de cada derecho.

### Atender una solicitud

Dentro del reino, dirígete a **Consentimiento** > **Solicitudes de derechos**. La bandeja muestra cada solicitud con su número, el solicitante, los derechos, el estado, el asignado y el próximo vencimiento, y permite filtrar las **Atrasadas**.

En el detalle de una solicitud puedes:

- **Tomar la solicitud** o **Asignar** a otro administrador.
- Escribir **Mensajes** al titular, o comentarios internos que el titular no ve.
- **Prorrogar** el plazo de un derecho, una sola vez y con un motivo. El titular recibe un aviso con la nueva fecha.
- **Responder** cada derecho con un **Resultado**: **Concedido**, **Concedido parcialmente** o **Denegado**. Una respuesta no se puede editar ni borrar después de enviarla.

El estado de la solicitud pasa por **Recibida**, **En proceso** y **Cerrada**. El titular recibe un correo y una notificación en su perfil cuando se recibe la solicitud, cuando el equipo le escribe, cuando se prorroga un plazo y cuando se responde un derecho.

## Roles y Permisos

Los permisos del módulo se otorgan en roles con scope de reino, en los grupos **Consentimiento** y **Solicitudes de derechos**:

| Permiso | Qué habilita |
|---|---|
| **Ver Catálogo de Consentimiento** | Ver categorías de dato, usos de datos, bases legales y ámbitos. |
| **Administrar Catálogo de Consentimiento** | Editar el catálogo y la configuración de solicitudes de derechos. |
| **Ver Documentos Legales** | Ver los documentos legales y sus versiones. |
| **Administrar Documentos Legales** | Crear y editar borradores de documentos. |
| **Publicar Documentos Legales** | Publicar y despublicar versiones de documentos. |
| **Ver Definiciones de Consentimiento** | Ver las definiciones y sus versiones. |
| **Administrar Definiciones de Consentimiento** | Crear, editar y eliminar borradores de definiciones. |
| **Publicar Definiciones de Consentimiento** | Publicar versiones y confirmar si un cambio es material. |
| **Ver Acuerdos** | Ver los acuerdos, la pestaña de acuerdos del usuario y el Evidence log. |
| **Ver Solicitudes de Derechos** | Ver la bandeja y el detalle de las solicitudes. |
| **Gestionar Solicitudes de Derechos** | Tomar, asignar, escribir mensajes y prorrogar. |
| **Resolver Solicitudes de Derechos** | Responder los derechos y cerrar la solicitud. |

La plataforma incluye dos roles predeterminados con scope de reino:

- **Privacy Manager**: Configura el catálogo, redacta y publica documentos y definiciones, y consulta acuerdos y solicitudes.
- **Privacy Agent**: Atiende la bandeja de solicitudes de derechos y consulta usuarios y acuerdos, sin acceso al catálogo ni a la publicación.

Puedes combinar los permisos en un [rol a medida](/es/platform/core/roles.html#roles-a-medida). Para separar responsabilidades, conviene que quien redacta una definición no sea quien la publica.

Cada cambio administrativo en el catálogo, los documentos, las definiciones y las solicitudes queda registrado en los [logs de actividad](/es/platform/core/activity-logs.html).

## Métricas

El dashboard de [Consentimiento](/es/platform/insights/consent.html) en Insights muestra los consentimientos otorgados y revocados, el cumplimiento por definición, los titulares con brechas y las solicitudes de derechos por tipo.
