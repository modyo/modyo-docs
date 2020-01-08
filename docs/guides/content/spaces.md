---
search: true
---

# Espacios

Un Espacio es un formato de recursos donde los miembros del equipo pueden definir distintas estructuras (tipos) de contenido, crear y publicar entradas. 

Todos los elementos se pueden usar dentro o fuera de **Modyo** a través de su API pública o en la creación de un sitio en Channels.

Desde Modyo se puede configurar el acceso desde distintos orígenes para que el servicio que consuma la API, pueda interpretarla fácilmente.

Espacios también te permite organizar el contenido en las áreas en las que se está trabajando, para tener una mejor distribución y orden.

Al acceder a la sección de Espacios se listarán todos los existentes indicando el Nombre del mismo y la contabilización de cuantos tipos de contenido y entradas hay creadas. 

Esta lista se puede ordenar alfabéticamente por el nombre del espacío o por la fecha de creación del mismo, y filtrar a través de un buscador que buscará coincidencias con los nombres de los espacios existentes.

## Crear un Espacio

Para crear un Espacio, se debe hacer _click_ en el botón verde en la parte superior derecha de la vista índice de Espacios, y asignar el nombre y el UID que usarás.

Además, deberás seleccionar el idioma por defecto sobre el cual se escribirá el contenido que quieres publicar, para una mejor configuración de los caracteres.

:::tip Tip
Más adelante, en la configuración podrás definir otros idiomas secundarios para las entradas del Espacio.
:::

## Configurar un Espacio

En este caso, la configuración de Espacios sirve para cambiar las características generales, idioma, seguridad, miembros del equipo de trabajo y las reglas de revisión y publicación.

<img src="/assets/img/content/space-settings.jpg" style="margin-top: 40px" width="300">

### General

Para cambiar el nombre del Espacio o su UID, es posible hacerlo desde acá.

El UID del Espacio es muy importante ya que es el atributo con el cual accedes desde la [API pública](/guides/content/public-api-reference.html#referencia-del-api) de contenido, el [SDK de Javascript](/guides/content/public-api-reference.html#sdk-de-javascript) y el [SDK de Liquid](/guides/content/public-api-reference.html#sdk-de-liquid). Ten en consideración que este atributo, aparte de ser único, no puede contener tildes, puntos ni caracteres especiales, dado que será usado en las URL para acceder al contenido.

### Localización

Modyo permite el cambio de idiomas y léxicos según el país en que se necesite. El cambio es útil en el caso de que se necesite trabajar con contenido personalizado y usuarios con distintos lenguajes.

<img src="/assets/img/content/locale-index.jpg" style="border: 1px solid #EEE;" width="600">

El idioma por defecto de un Espacio se define al momento de crear el Espacio y no puede ser modificado, pero en esta sección puedes añadir cuantos idiomas secundarios necesites. Sólo debes seleccionar uno de la lista, añadirlo y guardar los cambios. Luego de añadir un idioma secundario, cuando modifiques una entrada, notarás que aparecerá un selector de idioma junto al título de la página.

<img src="/assets/img/content/selector-language.jpg" style="border: 1px solid #EEE; margin-top: 40px" width="350">

:::tip Tip
Puedes aprender como seleccionar uno de los idiomas disponibles de una entrada en sus secciones correspondientes: [API pública](/guides/content/public-api-reference.html#filtros), [SDK de Javascript](/guides/content/public-api-reference.html#sdk-de-javascript) y  en [SDK de Liquid](/guides/content/public-api-reference.html#filtrar-entradas)
:::

### Caché

El caché es una herramienta que permite reducir la cantidad de requests que llegan a los servidores de aplicación, mejorando el performance y disminuyendo los tiempos de respuesta. En esta sección, puedes habilitar el caché para la API pública de contenido del Espacio, permitiendo que el contenido quede cacheado hasta 5 minutos (300 segundos).

<img src="/assets/img/content/cache.jpg" style="margin: 40px 0; border: 1px solid #EEE" width="600">

::: warning Atención
Debes tener en consideración que al habilitar esta opción, los cambios en tu contenido serán visibles en intervalos del tiempo que elijas en esta opción, por ejemplo, si usas 5 minutos, al publicar el contenido con título "A", y luego publicas el mismo contenido con título "A+1", por 5 minutos verás el contenido con el título "A" hasta que el caché inicial quede invalidado.
:::

:::tip Tip
Para trabajar en modo desarrollo, es altamente recomendable tener esta opción deshabilitada, y solo habilitarla cuando hay que enfrentar algún escenario de alta demanda o concurrencia.
:::

### Seguridad

Modyo, como forma de transmisión segura de datos, permite habilitar CORS para que la API pueda ser accedida por cualquier microservicio en un dominio externo.

Para ello, también es necesario especificar el dominio desde dónde será accedida la información. Existe la posibilidad de permitir todos los orígenes pero no es la opción más recomendable.

<img src="/assets/img/content/cors-spaces.jpg" width="600" style="border: 1px solid #EEE; margin: 20px 0">

Al habilitarse CORS, se producen los siguientes cambios dentro de la API:

- La configuración de URLs permitidas para acceder al contenido a nivel de Espacios, permitiendo automáticamente custom domains de sites.
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
- **NO SSL**: Wildcards son permitidos, pero Modyo ahora debe ser secure by default.

### Revisión en Equipo (Team Review)

El contenido que se publica en cada una de las plataformas debe ser de buena calidad y para ello, Modyo usa la Revisión en Equipo para confirmar y corregir los contenidos que se envían a través de la API.

<img src="/assets/img/content/enforced.jpg" style="border: 1px solid #EEE; margin: 40px 0" width="600">


Para más información sobre cómo configurar esta opción, revisa la sección de [Team Review](/guides/platform/team-review.html)

### Miembros del Equipo

<img src="/assets/img/content/teammembers.jpg" style="border: 1px solid #EEE; margin: 40px 0" width="600">

Para conformar el grupo de trabajo, en la plataforma puedes seleccionar los miembros que trabajarán en este Espacio y que tendrán acceso a la escritura, revisión y/o publicación.

Para ello, el Administrador que creó el Espacio puede asignar manualmente a los usuarios y los roles predeterminados que habilitan cada una de las funciones.

#### Agregar usuario ####
Para añadir un usuario al Espacio, selecciona el botón primario **+ Nuevo** en la parte superior derecha de la vista, en el modal selecciona a un usuario y asígnale un rol, luego presiona "Añadir" para que este sea parte del equipo de trabajo del Espacio.

#### Modificar Rol ####
Puedes modificar el rol de alguno de los usuarios asociados haciendo _click_ en su nombre. Se levantará un modal, donde podrás seleccionar el nuevo rol. Presiona **Guardar** para confirmar el cambio.

::: warning Atención
Se debe tener en cuenta que el sistema validará que siempre exista un administrador dentro del Espacio, por lo que si solo hay un administrador a este no se le podrá modificar su Rol.
:::

#### Eliminar Miembros del Equipo ####
Para eliminar a algún miembro del Equipo de un Espacio, puedes seleccionarlos usando los checks a la izquierda de su nombre, y luego haciendo _click_ en el botón al final de la lista **Borrar**.

::: warning Atención
Se debe tener en cuenta que el sistema validará que siempre exista un administrador dentro del Espacio, por lo que si existe un solo administrador, este no podrá ser borrado.
:::