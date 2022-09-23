---
search: true
---

# Conceptos claves de Modyo

A continuación encontrarás una breve explicación de algunos de los conceptos clave relacionados con la Plataforma Modyo.


### Arquitectura Multi-Sitio

Modyo implementa una arquitectura Multi-Sitio fácil de administrar. Desde una sola cuenta, puedes crear múltiples sitios públicos o privados.

### Los clientes interactúan en los sitios dependiendo del contexto

Modyo te provee de diferentes mecanismos de autenticación, desde OpenID Connect hasta OAuth2 y Google, para que puedas autenticar a tus clientes fácilmente.

Los clientes pueden interactuar en distintos sitios y en diferentes contextos, manteniendo un mismo perfil central que te facilitará las tareas de administración.

### Tanto CMS como Headless CMS

Modyo Content te permite crear y publicar contenido. Puedes añadir campos para definir estructuras personalizadas de contenido fácilmente. Modyo Channels te permite trabajar con plantillas de HTML y componentes reutilizables de Front End llamados Widgets.

Todo el contenido estructurado que es publicado genera un archivo JSON equivalente que puede alimentar a cualquier otro sitio o aplicación. Estos son servidos a través de la API.

### Una plataforma de integración

Modyo está pensado para facilitar la creación de soluciones digitales integradas con los sistemas centrales de las empresas. Con esto en mente, mantenemos el foco en facilitar el desarrollo de widgets y la conexión con APIs.

El generador de widgets le ayuda a los desarrolladores de Back y Front End a trabajar juntos para crear experiencias digitales conectadas a APIs. El modelo de gobernabilidad le permite a equipos digitales previsualizar fácilmente y publicar su trabajo a clientes en tiempo récord.

### Widgets vs Portlets

La mayoría de las empresas que están en el mercado eligieron el antiguo modelo de _porlets_ (modelo de desarrollo del lado del servidor). Este es más lento y requiere publicar a producción cada vez que se haga un cambio, haciendo el trabajo digital más complejo.

Modyo está basado en widgets y un generador de widgets que rastrea cada cambio en un sistema de control de versiones. El trabajo digital es fácil de auditar, de pasar a la próxima etapa, y de publicar para que esté disponible rápidamente para tus clientes.

### Nuestro generador de widgets

Con el generador de widgets puedes desarrollar cualquier tipo de widget que requieras, donde puedes incluir componentes en HTML, CSS, y Javascript que se conectan con APIs. Estos pasan a formar parte de tu librería de widgets para reutilizarlos cuando los necesites.

El generador de widgets potencia la experiencia digital al hacer el desarrollo del Front End fácil de manejar, rápido de enviar a producción, y fácil de auditar, otorgando mayor seguridad y cumplimiento de tus objetivos.

### Widgets prefabricados para servicios financieros

Modyo Banking proporciona widgets financieros prefabricados para acelerar el desarrollo de tus experiencias bancarias de _retail_ y _wealth management_.

Un modelo separado de licencia se aplica a Modyo Banking.

### Liquid Markup y APIs

Modyo utiliza Liquid Markup dentro de la plataforma para darle a los desarrolladores de Front y Back End un lenguaje enriquecido que permite agregar más funcionalidad al construir experiencias digitales. Liquid Markup es utilizado por compañías líderes para agregar fácilmente más lógica en el código del Front End.

Las APIs potencian la plataforma y hacen más fácil construir soluciones.


### Preparados para el futuro: PWAs
Las Aplicaciones Web Progresivas serán el futuro de la Web, ya que permiten mejorar la forma cómo éstas se distribuyen a los usuarios finales y le dan más protagonismo al navegador web como una plataforma de ejecución. Con Modyo puedes controlar en cada sitio las definiciones de _manifest.json_ y de los _Service Workers_, habilitadores técnicos fundamentales a la hora de implementar PWAs.


### Seguridad, Gobernabilidad y Agilidad

Modyo posee una arquitectura donde todo el código publicado genera versiones. Antes de publicar una versión de un widget o un layout, puedes revisar fácilmente los cambios en el código entre una versión y otra.

La agilidad ocurre cuando tienes una mayor predictibilidad de la capacidad de tu equipo, siguiendo un modelo que balancea gobernabilidad y agilidad. Cuando se activa Team Review en la plataforma dentro de Channels, dos personas (Revisor y Aprobador) pueden cambiar el estado de los recursos digitales al de "Publicado" a través de un proceso formal fácil de manejar. La capacidad de tu equipo es medida más tarde dentro de Insights.

### Glosario
Las siguientes definiciones corresponden a términos comunmente utulizados entre las diferentes aplicaciones de Modyo.

#### Generales

* [**CORS**](es/platform/core/security.html#control-de-acceso-http-cross-origin-resource-sharing-cors): Cross Origin Resource Sharing - Permite compartir recursos en distintos dominios.
* **Cuenta**: Es el punto de acceso a todas las funcionalidades de Modyo.
* [**Equipo**](/es/platform/core/roles.html#equipo): Son todos los usuarios que tienen acceso al admin de Modyo y se les puede asignar roles y permisos.
* [**Integraciones**](/es/platform/core/integrations): Es la forma de delegar o federar el proceso de inicio de autenticación de usuarios o miembros del equipo.
* [**Política de contraseña**](/es/platform/core/security.html#politica-de-contrasena): Permite definir reglas que los miembros del equipo deben cumplir al momento de crear o modificar sus contraseñas.
* [**Revisión en equipo**](/es/platform/core/key-concepts.html#revision-en-equipo): Flujo de revisión de los elementos versionados en el que se puede solicitar la aprobación de múltiples miembros del equipo.
* [**Sitio**](/es/platform/channels/sites.html): Es la herramienta para crear canales digitales dentro de la plataforma. La operación de sitios abarca todo el desarrollo, diseño, y flujo de navegación.
* [**Version editable**](/es/platform/core/key-concepts.html#editable): Es la versión que puedes modificar y previsualizar de los elementos versionados.
* [**Variables globales**](/es/platform/core/key-concepts.html#variables-globales): Son elementos que puedes definir de forma global y reutilizarlos en distintos sitios.
* [**Versión programada**](/es/platform/core/key-concepts.html#programado): Es la versión que está lista para pasar ser publicada en una fecha y hora determinada.
* [**Versión publicada**](/es/platform/core/key-concepts.html#publicado): Es la versión visible o productiva de los elementos versionados. Esta versión no se pude modificar.
* [**Versión de respaldo**](/es/platform/core/key-concepts.html#respaldos): Son las versiones que han sido publicadas anteriormente.
* [**Webhook**](/es/platform/core/webhooks.html): Envía información de forma automática a un sistema externo cuando ocurre un evento determinado.


#### Modyo Content

* [**Assets**](/es/platform/content/asset-manager.html#acerca-de-la-interfaz): Son los distintos archivos que se suben a la plataforma para ser utilizados en contenido y sitios.
* [**Campo**](/es/platform/content/types.html#campos): Es la unidad que atómica con la que se forman los distintos tipos de contenido.
* [**Categorías**](/es/platform/content/entries.html#categorias): Son una estructura de árbol que te permite ordenar el contenido de tus espacios.
* [**Entrada**](/es/platform/content/entries.html): Es un conjunto de valores asociados a los distintos campos definidos en el tipo de contenido.
* [**Espacio**](/es/platform/content/spaces.html): Repositorio de recursos donde los miembros del equipo pueden definir distintas estructuras (tipos) de contenido, crear y publicar entradas.
* **Tags**: Te permiten ordenar y filtrar las entradas de forma libre y sin restricciones.
* [**Tipo de contenido**](/es/platform/content/types.html): Es una estructura con campos que te permite definir los distintos contenidos de tu negocio.


#### Modyo Channels

* [**Dominios**](/es/platform/channels/sites.html#dominios): Te permite cambiar la URL y certificados de seguridad de tu sitio.
* [**Meta tags**](/es/platform/channels/pages.html#meta-tags): Te permite personalizar los tags meta para tus páginas y mejorar la forma en que los motores de búsqueda indexan tus páginas.
* [**Navegación**](/es/platform/channels/navigation.html): Te permite modificar el menú principal de tu sitio con una interfaz fácil de usar.
* [**Página**](/es/platform/channels/pages.html): Las Pages (o páginas) son lo que te permite crear una estructura para tu sitio, donde puedes añadir contenido no estructurado y personalizar las rutas de donde se muestra ese contenido.
* [**PWA**](/es/platform/channels/sites.html#pwa): Te permite configurar el _serviceworker_ y manifiesto de tu sitio para poder usarlo de forma fuera de linea.
* [**SEO**](/es/platform/channels/sites.html#seo): Te permite configurar la forma en que tu sitio se ve ante los robots de indexación.
* [**Templates**](/es/platform/channels/templates.html): Son la base de tu sitio y definen la estructura base de las páginas de tu sitio.
* [**Widget**](/es/platform/channels/widgets.html): Es un paquete de funcionalidad reutilizable que contiene HTML, JavaScript y CSS que se puede usar en distintas páginas.

#### Modyo Customers

* [**Campañas**](/es/platform/customers/messaging.html#campanas): Es la definición de un canal de comunicación con el usuario, que te permite llegar a ellos a través de correos y notificaciones.
* [**Campo personalizado**](/es/platform/customers/realms.html#custom-fields): Te permite añadir atributos personalizados al perfil de los usuarios.
* [**Filtros**](/es/platform/customers/segments.html#filtros): Son la unidad que te permite construir segmentos.
* [**Formulario**](/es/platform/customers/forms.html): Te permite capturar datos de tus usuarios en tus sitios.
* [**Mensajería**](/es/platform/customers/messaging.html): Te permite controlas los canales de comunicación directa con tus usuarios.
* [**Segmento**](/es/platform/customers/segments.html): Te permite agregar y agrupar tus usuarios mediante grupos de filtros con distintas condiciones.
* [**Usuario**](/es/platform/customers/realms.html): Es quien accede y se registra en los sitios de Modyo.
