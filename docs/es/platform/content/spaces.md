---
search: true
sidebarDepth: 3
---

# Espacios

Un espacio es un repositorio donde los miembros del equipo pueden definir los [tipos de contenido](https://docs.modyo.com/es/platform/content/types) y las entradas.

Los espacios te permiten organizar el contenido en las áreas en las que trabajas, para una mejor distribución y orden.

Puedes utilizar este contenido dentro y fuera de la plataforma Modyo, mediante la API pública o al crear un sitio en el módulo Channels. Configura el acceso desde diversos orígenes para permitir que el servicio que consume la API pueda interpretarla. Revisa la sección de [API](https://docs.modyo.com/es/platform/content/public-api-reference#api) de nuestra documentación para más información.

## Sobre la interfaz

En la interfaz de espacios puedes ver una lista de todos tus espacios, la cantidad de tipos de contenido y de entradas que hay en cada espacio y la fecha en la que fue creado.

Puedes ordenar las columnas alfabéticamente por nombre de espacio o identificador, o por fecha de creación, y filtrar mediante el buscador.

:::warning Atención
Solamente puedes ver aquellos espacios en los cuales eres parte del equipo de trabajo con algún rol.
:::

## Crear un espacio

Para crear un espacio, sigue estos pasos:

1. En el menú lateral selecciona Content
1. Da click en **Nuevo Espacio**
1. Llena los campos del formulario.
1. Haz click en **Crear**


:::tip Tip
Seleccionar el idioma por defecto en el que escribirás el contenido mejora la configuración de los caracteres.

Posteriormente, en la configuración del espacio podrás definir idiomas secundarios para las entradas.

:::

## Configuración del espacio

En esta sección puedes personalizar y ajustar las opciones disponibles para tu espacio, según tus necesidades específicas. Para acceder a la configuración de tu espacio sigue estos pasos:
1. En el menú lateral selecciona Content
1. Selecciona tu espacio
1. Haz click sobre Configuración del espacio para desplegar las secciones que puedes modificar.
1. Da click sobre una sección para personalizar tu espacio. Las secciones disponibles son:


### General

En esta sección puedes:
- **Cambiar el nombre del espacio**
- **Mostrar el autor de las entradas**: Habilitar esta opción permite que el autor del contenido este visible en la API pública y en el SDK de Liquid. Si está deshabilitada, el autor se verá en blanco.

:::warning Atención
Al guardar esta opción, se reindexan todas las entradas del espacio. Los cambios se reflejarán una vez el proceso haya concluido.
:::

- **Modificar el reino del espacio**: Al cambiar el reino de usuarios, perderás todas las configuraciones de privacidad.
- **Modificar el identificador del espacio**: El identificador o UID del espacio es el atributo con el cual accedes desde la API pública de contenido, el SDK de Javascript y el SDK de Liquid. Asegúrate de que sea único y sin tildes ni caracteres especiales, ya que será usado en las URL para acceder al contenido.
- **Eliminar el espacio**: Elimina definitivamente el espacio y todos sus elementos.
:::danger Peligro
Al seleccionar **Borrar**, debes ingresar el nombre textual del espacio para confirmar la acción. Una vez confirmada, no podrás volver a acceder al espacio ni a sus elementos.
:::


### Localización

El idioma por defecto de un espacio se define al momento de crear el espacio y no puedes modificarlo, pero en esta sección puedes añadir cuantos idiomas secundarios necesites, esto es útil para trabajar con contenido personalizado y usuarios con distintos lenguajes.

Para añadir un idioma:
1. Selecciona un idioma de menú desplegable
1. Da click en **Añadir idioma**

Una vez que hayas añadido un idioma secundario, al modificar una entrada verás un selector de idioma junto al título de la entrada.

Para más información de cómo traducir una entrada a un idioma secundario, revisa la sección [Traducir una entrada](https://docs.modyo.com/es/platform/content/entries#traducir-una-entrada).

:::tip Tip
Para seleccionar uno de los idiomas disponibles de una entrada en sus secciones correspondientes, revisa la documentación de [API pública](/es/platform/content/public-api-reference#filtros), [SDK de Javascript](/es/platform/content/public-api-reference#sdk-de-javascript) y  en [SDK de Liquid](/es/platform/content/public-api-reference#filtrar-entradas)
:::


### Seguridad

Modyo te permite habilitar CORS para que la API pueda accederse desde cualquier microservicio en un dominio externo; garantizando una transmisión segura de datos.

Para habilitar CORS debes especificar el dominio desde dónde se accederá a la información. Puedes también permitir todos los orígenes; sin embargo, no recomendamos hacerlo.

Al habilitar CORS:
- Se configuran las URLs permitidas para acceder al contenido a nivel de espacios, permitiendo automáticamente dominios personalizados de sitios.
- Cuando se realiza una solicitud a la API, se agrega el header Access-Control-Allow-Origin con valor request.origin a la respuesta y Access-Control-Allow-Credentials' = true, si el origen pertenece a los dominios mencionados.
- Las URLs permitidas se cachean a nivel de aplicación.
- En caso de usar caché intermedio, considera el origen en la clave de caché para manejarlo por separado en cada origen:

```javascript
Varnish: sub vcl_hash {  if (req.http.Origin) { hash_data(req.http.Origin);  } }
Nginx: set $cache_key "$http_x_forwarded_proto://$host$request_uri-$http_accept-$http_x_requested_with";
```
:::tip Tip
Al decidir el uso de SSL, considera:
-  **SSL**: No se permiten certificados wildcards.
- **NO SSL**: Si se permiten wildcards en estos entornos, pero debes habilitarlos manualmente a través de un ticket enviado al área de [soporte de Modyo](https://support.modyo.com/hc/en-us). Por defecto, Modyo utiliza SSL.

Para más información, revisa la sección de [Seguridad](https://docs.modyo.com/es/platform/channels/sites#security-headers)  de la documentación de Modyo.
:::


### Revisión en equipo

La revisión en equipo es una herramienta que permite a varios usuarios confirmar y corregir el contenido antes de enviarlo a través de la API.
Las opciones de configuración de la revisión en equipo son las siguientes:
- **Habilitar revisión en equipo**: Activa o desactiva la revisión en equipo. Si está activada, todos los elementos que se envíen a través de la API requerirán la aprobación de uno o más revisores.
- **Número de aprobaciones**: Especifica el número de aprobaciones que se requieren para que un elemento se publique.
- **Restringir la selección de revisores**: Permite especificar qué usuarios pueden revisar el contenido. Solo quien envía a revisión puede seleccionar revisores.
- **Forzar revisión**: Obliga a que al menos un usuario específico revise el contenido.
- **Requerir todos**: Obliga a que todos los usuarios seleccionados aprueben el elemento antes de que se publique.

Para más información sobre cómo configurar esta opción, revisa la sección de
 [Team Review](/es/platform/core/key-concepts)

### Miembros del equipo

Los miembros del equipo son los usuarios que tienen acceso a un espacio para escribir, revisar y publicar contenido. El administrador del espacio puede agregar, modificar o eliminar miembros del equipo y asignar los roles predeterminados.

#### Agregar usuario ####
Para añadir un usuario al espacio:
1. Da click en **Agregar miembro**.
1. En el modal selecciona un usuario y asígnale un rol.
1. Da click en **Añadir**.


#### Modificar rol ####
Para modificar el rol un usuario:
1. Haz en el nombre del usuario.
1. En el modal selecciona el nuevo rol.
1. Presiona **Actualizar**.


:::warning Atención
Todo espacio debe tener al menos un administrador. Si solo hay un administrador en un espacio, la plataforma no te permitirá modificar su rol.
:::

#### Eliminar miembros del equipo ####
Para eliminar a un miembro del equipo de un espacio:
1. Marca la casilla junto al nombre del usuario.
1. Haz click en **Borrar**, al final de la lista de usuarios.
1. Haz click en **OK**.


:::warning Atención
Todo espacio debe tener al menos un administrador. Si solo hay un administrador en un espacio, la plataforma no te permitirá eliminar a ese usuario.
:::