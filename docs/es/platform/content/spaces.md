---
search: true
---

# Espacios

Un espacio es un repositorio donde los miembros del equipo pueden definir los [tipos de contenido](https://docs.modyo.com/es/platform/content/types) y las entradas.

Los espacios te permiten organizar el contenido en las áreas en las que trabajas, para una mejor distribución y orden.

Puedes utilizar este contenido dentro y fuera de la plataforma Modyo, mediante la API pública o al crear un sitio en el módulo Channels. Configura el acceso desde diversos orígenes para permitir que el servicio que consume la API pueda interpretarla. Revisa la sección de [API](https://docs.modyo.com/es/platform/content/public-api-reference#api) de nuestra documentación para más información.

## Sobre la interfaz

En la interfaz de espacios puedes ver una lista de todos tus espacios, la cantidad de tipos de contenido y de entradas que hay en cada espacio y la fecha en la que fue creado.

Puedes ordenar las columnas alfabéticamente por nombre de espacio o identificador, o por fecha de creación, y filtrar por nombre o identificador mediante el buscador.

:::warning Atención
Ves los espacios en los que eres miembro del equipo, ya sea directamente o a través de un grupo. El dueño de la cuenta y los usuarios con el permiso **Gestionar Contenido** ven todos los espacios.
:::

## Crear un Espacio

Para crear un espacio, sigue estos pasos:

1. En el menú lateral selecciona Content
1. Da click en **Nuevo Espacio**
1. Completa los campos del formulario:
   - **Nombre**: el nombre del espacio.
   - **Identificador**: se completa a partir del nombre y puedes editarlo. Te permite acceder al contenido del espacio desde la API y los SDK.
   - **Idioma por defecto**: viene seleccionado el idioma de la cuenta. No puedes cambiarlo después de crear el espacio.
   - **Reino del espacio**: el reino de usuarios para el contenido privado y segmentado. Es opcional: si no lo necesitas, deja **Ninguno**.
1. Haz click en **Crear**

Quien crea el espacio queda como miembro de su equipo con el rol **Space Admin**.

Si tu cuenta ya alcanzó el número máximo de espacios de su plan, el espacio no se crea y verás el mensaje "Has alcanzado el número máximo de espacios para el plan actual".


:::tip Tip
Seleccionar el idioma por defecto en el que escribirás el contenido mejora la configuración de los caracteres.

Posteriormente, en la configuración del espacio podrás definir idiomas secundarios para las entradas.

:::

## Clonar un espacio

Clonar un espacio crea una copia completa dentro de la misma cuenta: se copian sus categorías, sus tipos de contenido, sus entradas, los archivos de su biblioteca de multimedia y los miembros del equipo con sus roles. Para clonar un espacio:

1. En el menú lateral selecciona **Content**.
1. En la columna **Acciones** de la fila del espacio, haz click en **Clonar**.
1. En la ventana **Clonar espacio**, confirma haciendo click en **Clonar espacio**.

El clon toma el nombre del original precedido de "Copia de" y el identificador precedido de "copia-de-". Si ya existe un espacio con ese nombre o identificador, se le añade un número al final para no repetirlo.

:::tip Tip
El clonado se ejecuta en segundo plano y puede tardar: mientras se completa, la ventana muestra "Esto demorará un tiempo, el espacio está siendo clonado.". Al terminar verás "Espacio clonado correctamente" y el listado se actualiza con el nuevo espacio.
:::

:::warning Atención
El número de espacios que puedes tener lo define el plan de tu cuenta. Si ya alcanzaste ese cupo, el clonado no se inicia y verás el mensaje "Has alcanzado el número máximo de espacios para el plan actual". Si necesitas un cupo mayor, conversa con tu ejecutivo de cuenta en Modyo.
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
- **Descripción**: Texto libre de hasta 4095 caracteres para describir el espacio.
- **Ver autor de entradas**: Habilitar esta opción permite que el autor del contenido este visible en la API pública y en el SDK de Liquid. Si está deshabilitada, el autor se verá en blanco.

:::warning Atención
Al guardar esta opción, se reindexan todas las entradas del espacio. Los cambios se reflejarán una vez el proceso haya concluido.
:::

- **Modificar el reino del espacio**: Al cambiar el reino de usuarios, perderás todas las configuraciones de privacidad. Puedes elegir un reino o uno de sus [stages](/es/platform/customers/realms.html#stages). Mientras el espacio tenga seleccionado un reino o uno de sus stages, ese reino no se puede eliminar.
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

Para quitar un idioma secundario:
1. Haz click en el ícono de eliminar junto al idioma.
1. Confirma en el mensaje "Eliminando idioma. ¿Deseas continuar?".

No puedes quitar el idioma por defecto, que aparece como **Por defecto**, ni un idioma que ya usan entradas del espacio. En ese caso, en lugar del ícono verás **Idioma en uso (no se puede eliminar)**.

Una vez que hayas añadido un idioma secundario, al modificar una entrada verás un selector de idioma junto al título de la entrada.

Para más información de cómo traducir una entrada a un idioma secundario, revisa la sección [Traducir una entrada](https://docs.modyo.com/es/platform/content/entries#traducir-una-entrada).

:::tip Tip
Para seleccionar uno de los idiomas disponibles de una entrada en sus secciones correspondientes, revisa la documentación de [API pública](/es/platform/content/public-api-reference#filtros), [SDK de Javascript](/es/platform/content/public-api-reference#sdk-de-javascript) y  en [SDK de Liquid](/es/platform/content/public-api-reference#filtrar-entradas)
:::


### Seguridad

Modyo te permite habilitar CORS para que la API de contenido del espacio pueda consumirse desde el navegador en dominios externos, garantizando una transmisión segura de datos.

Para habilitar CORS, marca **Habilitar CORS para las entradas de este espacio** y escribe en **Orígenes alternativos** los orígenes desde donde se accederá a la información. También puedes marcar **Permitir todos los orígenes**; sin embargo, no recomendamos hacerlo.

Al escribir los orígenes, considera lo siguiente:
- Escribe cada origen completo, con su esquema, su dominio y, si no es el estándar, su puerto (por ejemplo, `https://app.midominio.com`). Separa los orígenes con comas.
- No se permiten wildcards: si algún origen incluye `*`, la configuración no se guarda.
- Al guardar, se quitan la ruta y los parámetros de consulta de cada URL.
- Los dominios de tus sitios no se incluyen automáticamente. Si un sitio consume la API de contenido desde el navegador, agrega su dominio a la lista.

Al habilitar CORS:
- Cuando se realiza una solicitud a la API desde un origen que coincide exactamente con uno de la lista, se agregan a la respuesta los headers `Access-Control-Allow-Origin` con ese origen y `Access-Control-Allow-Credentials: true`.
- Si marcaste **Permitir todos los orígenes**, a un origen que no está en la lista se le responde `Access-Control-Allow-Origin: *`. Los navegadores no aceptan ese valor en solicitudes con credenciales, así que si tu integración las envía, agrega su origen a la lista.
- En caso de usar caché intermedio, considera el origen en la clave de caché para manejarlo por separado en cada origen:

```javascript
Varnish: sub vcl_hash {  if (req.http.Origin) { hash_data(req.http.Origin);  } }
Nginx: set $cache_key "$http_x_forwarded_proto://$host$request_uri-$http_accept-$http_x_requested_with";
```


### Revisión en equipo

La revisión en equipo es una herramienta que permite a varios usuarios confirmar y corregir el contenido antes de enviarlo a través de la API.
Las opciones de configuración de la revisión en equipo son las siguientes:
- **Habilitar revisión en equipo**: Activa o desactiva la revisión en equipo. Si está activada, todos los elementos que se envíen a través de la API requerirán la aprobación de uno o más revisores.
- **Número de aprobaciones**: Especifica el número de aprobaciones que se requieren para que un elemento se publique.
- **Restringir la selección de revisores**: Solo quien envía a revisión puede seleccionar revisores, y solo los revisores seleccionados pueden aprobar.
- **Forzar revisión**: Obliga a que al menos un usuario específico revise el contenido.
- **Requerir todos**: Obliga a que todos los usuarios seleccionados aprueben el elemento antes de que se publique.

:::warning Atención
Al activar o desactivar **Habilitar revisión en equipo** y guardar, todas las entradas del espacio que estaban en revisión o aprobadas vuelven a borrador. Las versiones ya publicadas no cambian. Si la revisión en equipo queda activa, debes enviarlas a revisión de nuevo para publicarlas.
:::

Para más información sobre cómo configurar esta opción, revisa la sección de [Revisión en Equipo](/es/platform/core/#revision-en-equipo).

### Miembros del equipo

Los miembros del equipo son los usuarios que tienen acceso a un espacio para escribir, revisar y publicar contenido. El administrador del espacio puede agregar, modificar o eliminar miembros del equipo y asignar los roles predeterminados.

#### Agregar usuario ####
Para añadir un usuario al espacio:
1. Da click en **Agregar miembro**.
1. En **Usuario**, selecciona un usuario o un grupo de la cuenta y, en **Rol**, asígnale un rol. La lista muestra los usuarios activos y los grupos que aún no tienen un rol en el espacio. Si eliges un grupo, todos sus miembros acceden al espacio con ese rol.
1. Da click en **Añadir**.


#### Modificar rol ####
Para modificar el rol un usuario:
1. Haz click en el nombre del usuario.
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