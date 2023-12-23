---
search: true
---

# Conceptos claves de Modyo

En esta sección puedes encontrar una breve explicación de los conceptos clave relacionados con la Plataforma Modyo.


### Arquitectura Multi-Sitio

Modyo implementa una arquitectura Multi-Sitio fácil de administrar. Desde una sola cuenta, puedes crear múltiples sitios públicos o privados.

### Interacción contextual de clientes

Modyo ofrece diversos mecanismos de autenticación, como OpenID Connect, OAuth2 y Google, para autenticar fácilmente a tus clientes. Los clientes pueden interactuar en diferentes sitios y contextos, manteniendo un perfil central para una administración eficiente.

### CMS y Headless CMS

Modyo Content te permite crear y publicar contenido, con la flexibilidad de añadir campos para estructuras personalizadas.

Modyo Channels trabaja con plantillas HTML y componentes reutilizables de frontend llamados widgets.

Todo el contenido estructurado que es publicado genera un archivo JSON que puede alimentar a otro sitio o aplicación a través de la API.


### Plataforma de integración

Modyo está diseñado para facilitar la creación de soluciones digitales integradas con los sistemas centrales de las empresas. Con esto en mente, mantenemos el foco en facilitar el desarrollo de widgets y la conexión con APIs.

El generador de widgets ayuda a los desarrolladores de back y frontend a trabajar juntos para crear experiencias digitales conectadas a APIs y el modelo de gobernabilidad les permite previsualizar y publicar trabajos rápidamente.

### Widgets

La mayoría de las empresas en el mercado trabajan con un antiguo modelo de _portlets_ donde el desarrollo es del lado del servidor y el proceso es más lento y complejo.

Modyo se basa en widgets y rastrea cada cambio en un sistema de control de versiones, lo que agiliza el trabajo digital, facilita la auditoría y acelera la disponibilidad para tus clientes.

### Generador de widgets

El generador de widgets de Modyo es una herramienta robusta que simplifica el desarrollo frontend, la publicación y la auditoría. Con esta herramienta puedes crear experiencias digitales personalizadas y de alta calidad, de manera rápida y sencilla.

Con el generador de widgets, puedes crear cualquier tipo de widget, incluyendo componentes en HTML, CSS y JavaScript conectados con APIs, además, puedes guardar los widgets en tu librería para reutilizarlos en otros sitios.

### Widgets prefabricados para servicios financieros

Modyo Banking proporciona widgets financieros prefabricados para acelerar el desarrollo de tus experiencias bancarias de _retail_ y _wealth management_. Estos widgets están diseñados para cumplir con los requisitos específicos de las instituciones financieras.

Modyo Banking requiere de una licencia dedicada.

### Liquid Markup

Modyo utiliza Liquid Markup para enriquecer el lenguaje de desarrollo front y backend, para agregar más funcionalidad a las experiencias digitales.

### APIs

Modyo proporciona una API abierta que te permite integrar Modyo con otros sistemas y herramientas.

### Progressive Web Apps o Aplicaciones Web Progresivas
Las Aplicaciones Web Progresivas (PWA) son el futuro de la Web, mejoran la interacción del usuario con un sitio y le dan más protagonismo al navegador web como plataforma de ejecución.

Con Modyo puedes controlar las definiciones de _manifest.json_ y de los _Service Workers_ en cada sitio, fundamentales para implementar PWAs.

### Seguridad, gobernabilidad y agilidad

En Modyo todo el código publicado genera versiones, permitiendo revisar fácilmente los cambios. La agilidad se logra con la activación del Team Review, manteniendo un equilibrio entre gobernabilidad y agilidad.

## Glosario
A continuación, algunos términos clave en Modyo y sus definiciones:

#### Generales

* [**CORS:**](/es/platform/core/security.html#control-de-acceso-http-cross-origin-resource-sharing-cors) Cross Origin Resource Sharing - Permite compartir recursos en distintos dominios.
* **Cuenta:** Punto de acceso a todas las funcionalidades de Modyo.
* [**Equipo:**](/es/platform/core/roles.html#equipo) Todos los usuarios con acceso al admin de Modyo. Se les puede asignar roles y permisos.
* [**Integraciones:**](/es/platform/core/integrations) Forma para delegar o federar el proceso de inicio de autenticación de usuarios o miembros del equipo.
* [**Política de contraseña:**](/es/platform/core/security.html#politica-de-contrasena) Permite definir reglas para la creación o modificación de contraseñas.
* [**Revisión en equipo:**](/es/platform/core/key-concepts.html#revision-en-equipo) Flujo de revisión de los elementos versionados. Se puede solicitar la aprobación de múltiples miembros del equipo.
* [**Sitio:**](/es/platform/channels/sites.html) Herramienta para crear canales digitales dentro de Modyo. La operación de sitios abarca el desarrollo, diseño y flujo de navegación.
* [**Versión editable:**](/es/platform/core/key-concepts.html#editable) La versión que puedes modificar y previsualizar de los elementos versionados.
* [**Variables globales:**](/es/platform/core/key-concepts.html#variables-globales) Elementos que puedes definir de forma global y reutilizar en distintos sitios.
* [**Versión programada:**](/es/platform/core/key-concepts.html#programado) Versión que será publicada en una fecha y hora determinada.
* [**Versión publicada:**](/es/platform/core/key-concepts.html#publicado) Versión visible o productiva de los elementos versionados. Esta versión no se puede modificar.
* [**Versión de respaldo:**](/es/platform/core/key-concepts.html#respaldos) Versiones publicadas previamente.
* [**Webhook:**](/es/platform/core/webhooks.html) Envía información automáticamente a un sistema externo cuando ocurre un evento determinado.


#### Modyo Content

* [**Assets:**](/es/platform/content/asset-manager.html#acerca-de-la-interfaz) Archivos cargados en la plataforma para ser usados en contenido y sitios.
* [**Campo:**](/es/platform/content/types.html#campos) Unidad básica para formar tipos de contenido.
* [**Categorías:**](/es/platform/content/entries.html#categorias) Estructura jerárquica para organizar el contenido de tus espacios.
* [**Entrada:**](/es/platform/content/entries.html) Conjunto de valores asociados a campos definidos en el tipo de contenido.
* [**Espacio:**](/es/platform/content/spaces.html) Repositorio de recursos donde los miembros del equipo definen tipos de contenido, crean y publicar entradas.
* **Tags:** Etiquetas para ordenar y filtrar entradas.
* [**Tipo de contenido:**](/es/platform/content/types.html)  Estructura con campos que te permite definir distintos contenidos.


#### Modyo Channels

* [**Dominios:**](/es/platform/channels/sites.html#dominios) La URL de tu sitio, puedes modificarla, al igual que los certificados de seguridad de tu sitio.
* [**Meta tags:**](/es/platform/channels/pages.html#meta-tags) Personaliza tus meta etiquetas para mejorar la indexación en motores de búsqueda.
* [**Navegación:**](/es/platform/channels/navigation.html) Te permite modificar el menú principal de tu sitio a través de una interfaz sencilla.
* [**Página:**](/es/platform/channels/pages.html) Te permiten crear una estructura para tu sitio. Puedes añadir contenido no estructurado y personalizar las rutas donde se muestra el contenido.
* [**PWA:**](/es/platform/channels/sites.html#pwa) Configura el _serviceworker_ y manifiesto de tu sitio para su uso fuera de línea.
* [**SEO:**](/es/platform/channels/sites.html#seo) Configura como se ve tu sitio ante robots de indexación.
* [**Templates:**](/es/platform/channels/templates.html) Son la base de tu sitio y definen la estructura básica de las páginas.
* [**Widget:**](/es/platform/channels/widgets.html) Paquete de funcionalidad reutilizable con HTML, JavaScript y CSS que puedes usar en distintas páginas.

#### Modyo Customers

* [**Campañas:**](/es/platform/customers/messaging.html#campanas) Definen el canal de comunicación con el usuario. Te permiten llegar a tus usuarios a través de correos y notificaciones.
* [**Campo personalizado:**](/es/platform/customers/realms.html#custom-fields) Te permite añadir atributos personalizados al perfil de los usuarios.
* [**Filtros:**](/es/platform/customers/segments.html#filtros) Unidad que te permite construir segmentos.
* [**Formulario:**](/es/platform/customers/forms.html) Para capturar datos de tus usuarios en tus sitios.
* [**Mensajería:**](/es/platform/customers/messaging.html) Controla los canales de comunicación directa con tus usuarios.
* [**Segmento:**](/es/platform/customers/segments.html) Te permite añadir y agrupar usuarios mediante grupos de filtros con distintas condiciones.
* [**Usuario:**](/es/platform/customers/realms.html) Quien accede y se registra en los sitios de Modyo.
