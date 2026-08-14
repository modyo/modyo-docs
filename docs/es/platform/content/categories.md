---
search: true
---

# Categorías

Las categorías te permiten ordenar las entradas que publicas según su contenido, lo que es útil para crear directorios de áreas de conocimiento específicas.

Cada categoría pertenece a un espacio y se describe con dos datos: el **Título**, que es el nombre con el que la ves en el panel, y el **Identificador**, que es el tramo que la categoría aporta a la URL de las entradas que agrupa. Las categorías se anidan unas dentro de otras: la cadena de identificadores que va desde la categoría raíz hasta la actual forma su ruta completa, y el listado la muestra bajo cada nombre precedida por la palabra **Identificador**.

## Crear una categoría

1. Desde el menú principal, haz click en **Content**.
2. Selecciona el espacio donde quieres crear la categoría.
3. En el menú lateral, haz click en **Categorías**.
4. Haz click en el botón **Nueva Categoría**.
5. Escribe el **Título**.
6. Revisa el **Identificador**, que se completa automáticamente a partir del título.
7. En **Categoría padre**, elige la categoría de la que cuelga. Déjala en **Ninguno** para crear una categoría raíz.
8. Haz click en **Guardar**.

Para editar una categoría, haz click sobre su nombre en el listado: se abre el mismo formulario, esta vez con el título **Editar categoría**.

:::warning Atención
El **Identificador** se genera de nuevo cada vez que modificas el **Título**, también al editar una categoría que ya existe. Si sólo quieres renombrarla, revisa el **Identificador** y déjalo como estaba antes de guardar, porque cambiarlo cambia las URL.
:::

## Reglas del identificador

El **Identificador** sólo admite letras sin tilde, números, guiones (`-`) y guiones bajos (`_`). El panel normaliza lo que escribes: pasa el texto a minúsculas, reemplaza los espacios por guiones y descarta los caracteres que no puede usar.

Además tiene que cumplir dos condiciones:

- **Único entre hermanas**: dos categorías que comparten la misma **Categoría padre** dentro del mismo espacio no pueden tener el mismo identificador. Dos categorías con padres distintos sí pueden usar el mismo, porque lo que queda único es la ruta completa.
- **Ruta completa de 255 caracteres como máximo**: si la cadena que resulta de encadenar los identificadores desde la categoría raíz supera ese largo, la categoría no se guarda.

## Anidar categorías

No hay un tope de niveles de subcategoría. El límite real es la ruta completa de 255 caracteres, y se agota antes con identificadores largos que con muchos niveles de profundidad.

Una categoría no puede colgar de sí misma ni de una de sus descendientes, así que el selector **Categoría padre** no ofrece la categoría que estás editando ni ninguna de las ramas que dependen de ella.

Cuando cambias el **Identificador** de una categoría que tiene subcategorías, la plataforma recalcula la ruta completa de todas sus descendientes. Si con ese recálculo alguna descendiente superara los 255 caracteres, no se guarda nada y la jerarquía queda como estaba.

:::warning Atención
Cambiar el identificador de una categoría cambia la URL de todas las entradas que cuelgan de ella y de sus subcategorías. Los enlaces que apunten a la ruta anterior quedan obsoletos, y las URL nuevas pueden tardar unos momentos en quedar disponibles mientras la plataforma actualiza las entradas afectadas. Revisa tus enlaces internos antes de hacer el cambio.
:::

## Efecto sobre las entradas

Una entrada pertenece a una sola categoría. Al asignársela, la ruta completa de la categoría se antepone al identificador de la entrada: una entrada que responde en `my_account.modyo.com/visita-chile` y que asignas a la categoría `travel` pasa a responder en `my_account.modyo.com/travel/visita-chile`.

Cuando filtras el listado de entradas con el filtro **Categoría**, el resultado incluye también las entradas de las subcategorías de la que elegiste, así que filtrar por una categoría raíz te devuelve toda su rama. La API pública de contenidos aplica el mismo criterio con el parámetro `meta.category`; revisa [Filtrar](/es/platform/content/public-api-reference.html#filtrar) en la referencia de la API pública.

## Eliminar una categoría

1. Desde el menú principal, haz click en **Content**.
2. Selecciona el espacio.
3. En el menú lateral, haz click en **Categorías**.
4. Haz click en el botón de más acciones, a la derecha del nombre de la categoría.
5. Selecciona **Borrar**.
6. Confirma la eliminación.

:::warning Atención
Eliminar una categoría elimina también todas sus subcategorías. Las entradas que estaban asignadas a cualquiera de ellas no se borran, pero quedan sin categoría y tienes que reasignarlas una por una.
:::

## Acceso y permisos

Las categorías se controlan con dos permisos agrupados del scope **Content**:

- **Ver Categorías**: da acceso al listado en modo lectura. No aparece el botón **Nueva Categoría**, el nombre de cada categoría deja de abrir el formulario y no se muestra el menú de acciones.
- **Administrar Categorías**: incluye **Ver Categorías** y habilita crear, editar y eliminar.

Entre los roles predeterminados, **Space Admin**, **Space Editor** y **Space Writer** traen **Administrar Categorías**, y **Space Viewer** trae sólo **Ver Categorías**. Si necesitas otra combinación, crea un [rol a medida](/es/platform/core/roles.html#roles-a-medida) con scope **Content**.
