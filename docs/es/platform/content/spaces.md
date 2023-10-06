---
search: true
sidebarDepth: 3
---

# Espacios

Un Espacio es un repositorio donde los miembros del equipo pueden definir distintas estructuras llamadas Tipos de Contenido y sus Entradas.

Todos los elementos se pueden usar dentro o fuera de **Modyo Platform** a través de su API pública o en la creación de un Sitio en el módulo Channels.

Desde Modyo se puede configurar el acceso desde distintos orígenes para que el servicio que consuma la API, pueda interpretarla.

Espacios también te permite organizar el contenido en las áreas en las que se está trabajando, para tener una mejor distribución y orden.

Al acceder a la sección de Espacios se mostrará una lista indicando el nombre del espacio y su cantidad de tipos de contenido y de entradas. 

:::warning Atención
En el índice de espacios, solo verás los espacios en los cuales eres parte del equipo de trabajo con algún rol.
:::

Esta lista se puede ordenar alfabéticamente por el nombre del espacío o por la fecha de creación del mismo, y filtrar a través de un buscador que buscará coincidencias con los nombres de los espacios existentes.

## Crear un Espacio

Para crear un espacio, se debe hacer click en el botón verde en la parte superior derecha de la vista índice de espacios, y asignar el nombre y el UID que usarás.

Además, deberás seleccionar el idioma por defecto sobre el cual se escribirá el contenido que quieres publicar, para una mejor configuración de los caracteres.

:::tip Tip
Más adelante, en la configuración podrás definir otros idiomas secundarios para las entradas del espacio.
:::

## Configurar un Espacio

En este caso, la configuración de Espacios sirve para cambiar las características generales, idioma, seguridad, miembros del equipo de trabajo y las reglas de revisión y publicación.

### General

En esta sección, puedes cambiar el nombre del espacio o su UID.

El UID del Espacio es muy importante ya que es el atributo con el cual accedes desde la [API pública](/es/platform/content/public-api-reference.html#referencia-del-api) de contenido, el [SDK de Javascript](/es/platform/content/public-api-reference.html#sdk-de-javascript) y el [SDK de Liquid](/es/platform/content/public-api-reference.html#sdk-de-liquid). 

Ten en consideración que este atributo, aparte de ser único, no puede contener tildes, puntos ni caracteres especiales, ya que será usado en las URL para acceder al contenido.

La siguiente opción es para configurar si el autor del contenido estará visible tanto en la API pública como en el SDK de liquid. Si la opción está habilitada, entonces verás los datos del administrador que creó el contenido, y si la opción está deshabilitada, verá el autor en blanco. 

:::warning Atención
Ten en cuenta que al guardar esta opción, reindexarás todas las entradas del espacio, por lo que puede haber una ventana de tiempo en la que los cambios no se vean reflejados hasta que se terminen de reindexar las entradas del espacio.
:::

La última opción es para borrar el espacio. Esta opción te permite eliminar definitivamente un espacio y todo sus elementos.

:::danger Peligro
Esta opción es irreversible, por lo que debes estar completamente seguro al ejecutar esta acción. Al presionar el botón de eliminado, el sistema te preguntará por el nombre del espacio. Deberás ingresar el nombre textual del espacio que estés eliminando para poder ejecutar la acción. Una vez confirmada la acción, no podrás volver a acceder al espacio ni a sus elementos.
:::

### Localización

Modyo permite el cambio de idiomas y léxicos según el país en que se necesite. El cambio es útil en el caso de que se necesite trabajar con contenido personalizado y usuarios con distintos lenguajes.

El idioma por defecto de un espacio se define al momento de crear el espacio y no puede ser modificado, pero en esta sección puedes añadir cuantos idiomas secundarios necesites. Sólo debes seleccionar uno de la lista, añadirlo y guardar los cambios. Luego de añadir un idioma secundario, cuando modifiques una entrada, notarás que aparecerá un selector de idioma junto al título de la página.

:::tip Tip
Puedes aprender como seleccionar uno de los idiomas disponibles de una entrada en sus secciones correspondientes: [API pública](/es/platform/content/public-api-reference.html#filtros), [SDK de Javascript](/es/platform/content/public-api-reference.html#sdk-de-javascript) y  en [SDK de Liquid](/es/platform/content/public-api-reference.html#filtrar-entradas)
:::

### Caché

El caché es una herramienta que permite reducir la cantidad de requests que llegan a los servidores de aplicación, mejorando el performance y disminuyendo los tiempos de respuesta. En esta sección, puedes habilitar el caché para la API pública de contenido del espacio, permitiendo que el contenido quede cacheado hasta 5 minutos (300 segundos).

:::warning Atención
Debes tener en consideración que al habilitar esta opción, los cambios en tu contenido serán visibles en intervalos del tiempo que elijas en esta opción, por ejemplo, si usas 5 minutos, al publicar el contenido con título "A", y luego publicas el mismo contenido con título "A+1", por 5 minutos verás el contenido con el título "A" hasta que el caché inicial quede invalidado.
:::

:::tip Tip
Para trabajar en modo desarrollo, es altamente recomendable tener esta opción deshabilitada, y solo habilitarla cuando hay que enfrentar algún escenario de alta demanda o concurrencia.
:::

### Seguridad

Modyo, como forma de transmisión segura de datos, permite habilitar CORS para que la API pueda ser accedida por cualquier microservicio en un dominio externo.

Para ello, también es necesario especificar el dominio desde dónde será accedida la información. Existe la posibilidad de permitir todos los orígenes pero no es la opción más recomendable.

Al habilitarse CORS, se producen los siguientes cambios dentro de la API:

- La configuración de URLs permitidas para acceder al contenido a nivel de espacios, permitiendo automáticamente custom domains de sites.
- Cuando se realiza un request al API, se agrega el header ```Access-Control-Allow-Origin``` con valor request.origin a la respuesta y    ```Access-Control-Allow-Credentials' = true```, sólo si el origen pertenece a las urls/domains previamente mencionadas. En caso caso contrario no quedan configurados.
- URLs permitidas son cacheadas a nivel de aplicación.
- En caso de usar caché intermedio se debe considerar el origen en la clave de caché para que se maneje el caché por separado en cada origen:

```javascript
Varnish: sub vcl_hash {  if (req.http.Origin) { hash_data(req.http.Origin);  } }
Nginx: set $cache_key "$http_x_forwarded_proto://$host$request_uri-$http_accept-$http_x_requested_with";
```

#### CORS y SSL

Al decidir si usar SSL dentro de la plataforma, también se debe considerar lo siguiente:

- **SSL**: Wildcards no son permitidos.
- **NO SSL**: Wildcards son permitidos, pero Modyo ahora debe ser secure por defecto.

### Revisión en Equipo (Team Review)

El contenido que se publica en cada una de las plataformas debe ser de buena calidad y para ello, Modyo usa la Revisión en Equipo para confirmar y corregir los contenidos que se envían a través de la API.


Para más información sobre cómo configurar esta opción, revisa la sección de [Team Review](/es/platform/core/key-concepts.html)

### Miembros del Equipo

Para conformar el grupo de trabajo, en la plataforma puedes seleccionar los miembros que trabajarán en este espacio y que tendrán acceso a la escritura, revisión y/o publicación.

Para ello, el Administrador que creó el espacio puede asignar manualmente a los usuarios y los roles predeterminados que habilitan cada una de las funciones.

#### Agregar usuario ####
Para añadir un usuario al Espacio, selecciona el botón primario **+ Nuevo** en la parte superior derecha de la vista, en el modal selecciona a un usuario y asígnale un rol, luego presiona **Añadir** para que este sea parte del equipo de trabajo del espacio.

#### Modificar Rol ####
Puedes modificar el rol de alguno de los usuarios asociados haciendo click en su nombre. Se levantará un modal, donde podrás seleccionar el nuevo rol. Presiona **Guardar** para confirmar el cambio.

:::warning Atención
Se debe tener en cuenta que el sistema validará que siempre exista un administrador dentro del espacio, por lo que si solo hay un administrador a este no se le podrá modificar su Rol.
:::

#### Eliminar Miembros del Equipo ####
Para eliminar a algún miembro del equipo de un espacio, puedes seleccionarlos usando los checks a la izquierda de su nombre, y luego haciendo click en el botón al final de la lista **Borrar**.

:::warning Atención
Se debe tener en cuenta que el sistema validará que siempre exista un administrador dentro del Espacio, por lo que si existe un solo administrador, este no podrá ser borrado.
:::