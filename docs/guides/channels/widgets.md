---
search: true
---

# Widgets

Los widgets son lo que te permite crear [microfrontends](/#) encapsulados para tus sitios y aplicaciones.

Al entrar en la sección widgets de tu sitio, verás un listado de todos los widgets que se han creado. En la barra superior podrás filtrar el listado de widgets por estado, autor o tags, o hacer una búsqueda de texto por el nombre del widget.

En la esquina superior derecha verás un botón principal **+ Nuevo** que te permitirá crear un nuevo widget. Deberás escribir un nombre para luego entrar a la vista de edición del widget.

En la vista de edición del widget, podrás ver la barra superior de acciones, el área de trabajo y la columna de propiedades.

![Widget builder](/assets/img/platform/widget-builder.png) 

En la **barra superior** verás:

A la izquierda, encontrarás el nombre del widget y el estado actual:

- **Borrador**: Este estado lo verás cuando recién se haya creado un widget o cuando se haya despublicado.
- **Publicado**: Este estado lo verás luego de haber hecho una publicación y cuando las versiones editable y publicada son iguales.
- **Cambios pendientes**: Este estado lo verás si es que ya hay una versión publicada, pero hay cambios pendientes de publicar en tu versión editable.
- **En revisión**: Este estado lo verás cuando esté habilitada la [revisión en equipo](guides/platform/team-review.html) y se haya enviado a revisión la versión editable.
- **Aprobado**: Este estado lo verás cuando esté habilitada la [revisión en equipo](guides/platform/team-review.html) y si es que se cumplieron las condiciones de revisión del elemento. Si estás en este estado, tus templates están listos para ser publicados.

A la derecha, encontrarás distintas acciones:
**Vista previa** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5z" fill="#626262"/><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg>: Te permite abrir en una nueva pestaña la vista previa de la versión editable del widget.

**Diferencias** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M19 3h-5v2h5v13l-5-6v9h5a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-9 15H5l5-6m0-9H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h5v2h2V1h-2v2z" fill="#626262"/></svg>: Al hacer click en este icono, abrirás el modal de diferencias, en el cual podrás comparar los cambios que hay entre múltiples versiones de tu widget. Por defecto partirás comparando la versión publicada con la versión editable, pero al hacer uso de los selectores de versiones, podrás comparar además con las versiones de respaldo. Si este icono no aparece, entonces no hay ninguna versión publicada de este widget.

**Actividad** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M12 23a1 1 0 0 1-1-1v-3H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-4.1l-3.7 3.71c-.2.18-.44.29-.7.29H12m1-6v3.08L16.08 17H21V7H7v10h6M3 15H1V3a2 2 0 0 1 2-2h16v2H3v12m6-6h10v2H9V9m0 4h8v2H9v-2z" fill="#626262"/><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg>: Te permite desplegar una pestaña lateral que muestra la actividad y comentarios del widget.

**Otras opciones** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M12 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2z" fill="#626262"/><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg>: Te permite archivar y crear una copia del widget actual.

**Botón principal**

- Guardar: Guarda los cambios actuales.
- Enviar a revisión: Si está la revisión en equipo habilitada, entonces podrás enviar a revisión y notificar a los revisores de que el widget está listo para ser revisado.
- Publicar: Pasa la versión editable o aprobada (si está habilitada la revisión en equipo) a la versión publicada.

**Otras acciones principales** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6l1.41-1.42z" fill="#626262"/><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg>:

- Despublicar: Si el widget está publicado, podrás sacarlo de producción usando esta opción
- Forzar publicación: Si eres administrador del sitio, podrás hacer uso de de esta opción para publicar inmediatamente un widget, incluso si está la revisión en equipo habilitada.

:::tip Tip
Sólo se pueden archivar los widgets que han sido despublicados previamente.
:::

:::tip Tip
Los widgets archivados no aparecerán en el listado inicial ni tampoco en el modal de selección de widgets en el Page Builder. Puedes restaurar un widget archivado, entrando a su vista de edición y usando la opción restaurar en la esquina superior derecha de la vista.
:::

Una vez que un widget está publicado, este será visible en el modal de selección de widgets personalizados en el [page builder.](/guides/channels/pages.html)

:::tip Tip
Para aprender más sobre el flujo de publicación, revisa la sección de [Versionado.](/guides/platform/team-review.html#versionado)
:::


En el **área de trabajo** verás:

- **Pestañas de código**: Tendrás a tu disposición una pestaña de JavaScript, CSS y HTML para construir tus widgets.
- **Gestor de archivos**: Al hacerle click, levantarás el modal de gestión de archivos, onde podrás filtrar y buscar los archivos que has subido en el [Gestor de archivos](/guides/content/asset-manager.html) y copiar su URL para usarlos en tu widget. También podrás subir nuevos archivos desde este modal.
- **Atajos de teclado**: Verás una pequeña ventana informativa con algunos atajos de teclado útiles.
- **Snippets**: Verás una lista de los snippets disponibles desde el [template builder](/guides/channels/templates.html#snippets) y podrás copiar su código para referenciarlos en tu widget.
- **Cambios**: Si has guardado cambios y no has publicado, verás este listado de todas las veces que has guardado cada uno de los archivos (JS, CSS y HTML). Al hacer click en una sub-versión, cambiarás el contenido de la pestaña por el contenido de la sub-versión que clickeaste.

:::tip Tip
Para no perder los cambios que tienes actualmente, asegúrate de guardar antes de saltar entre sub-versiones, de tal forma que siempre puedas volver a la versión guardada mas recientemente en la lista de cambios.
:::

:::tip Tip
Cuando publicas el widget, no verás cambios disponibles. Esto es porque cada versión parte sin cambios desde la versión productiva. Si restauras el widget a una versión anterior, también restaurarás las sub-versiones, por lo que podrás acceder a todas las instancias en que se guardaron cambios en esa versión.
:::

En las tres pestañas del widget puedes hacer uso de Liquid. Para más información revisa [la documentación asociada a Liquid.](/guides/channels/liquid-markup.html)

En la **columna de propiedades** verás: 

- **Nombre**: Te permitirá cambiar el nombre del widget
- **Tags**: Te permitirá añadir tags a un widget. Los tag son de uso administrativo y sirven para buscar y filtrar los widgets y así poder encontrarlos rápidamente.

## Modyo CLI

Modyo CLI es una herramienta de líneas de comando, que sirve para generar un ambiente que permita trabajar localmente con widgets de Modyo. 

### Introducción

Primero, debes instalar la CLI de Modyo globalmente para tener el comando `modyo-cli` disponible.

Si usas npm:

```plain
npm i -g @modyo/cli
```

Usando yarn:

```plain
yarn global add @modyo/cli
```

### Crear un proyecto

La CLI de Modyo está diseñada para trabajar con uno o mas widgets de un proyecto o estructuras que funcionan como un contenedor. Luego de crear un proyecto, tendrás la posibilidad de crear, editar y eliminar widgets localmente.

Para crear un proyecto:

```plain
# Lo ideal es que nombres tus proyectos en formato `PascalCase`
modyo-cli project create <projectName>
cd projectName
modyo-cli project start
```

El proyecto debe tener por lo menos un widget para correr el servidor.

### La sesión de Modyo

Para poder hacer `push` de tus widgets a la plataforma Modyo y obtener los archivos de dependencias del sitio, tienes que contar con una sesión en la cuenta en que planeas desplegar tus widgets. Para eso, debes usar el siguiente comando:

```plain
modyo-cli project login
```

### Trabajando con widgets

Para añadir un nuevo widget al proyecto, usa el siguiente comando:

```plain
# Lo ideal es que puedas nombrar tus widgets con formato `PascalCase`
modyo-cli widget add <widgetName>
```

Para iniciar el servidor de desarrollo, usa el siguiente comando:

```plain
modyo-cli widget start <name>
# También puedes usar este comando sin pasar el nombre, en ese caso, se desplegará una lista de widgets disponibles.
```

### Comandos disponibles

| Comando                 | Descripción                                         |
|-------------------------|-----------------------------------------------------|
| `project`               | Muestra ayuda para el comando project               |
| `project create <name>` | Crea un proyecto                                    |
| `project start`         | Inicia el servidor desarrollo con todos los widgets creados|
| `project login`         | Obtiene la cookie de sesión desde la plataforma Modyo|
| `project logout`        | Revoca el token de sesión de Modyo|
| `widget`                | Muestra la ayuda para el comando widget|
| `widget add <name>`     | Añade un widget al proyecto|
| `widget start <name>`   | Inicia el servidor de desarrollo en el modo standalone|
| `widget delete <name>`  | Elimina un widget existente|                |
| `widget push <name>`    | Envía un widget a la plataforma Modyo|
| `widget push --all`     | Envía todos los widgets a la plataforma Modyo|
| `widget push --force`   | Fuerza el envío de widgets|
| `help <command>`        | Muestra la ayuda para un comando en específico|

### Problemas comunes

#### `TypeError: Cannot read property 'vue' of undefined`

Debes forzar la versión `14.2.2` del paquete `vue-loader`

#### `No parser and no filepath given, using 'babylon' the parser now but this will throw an error in the future. Please specify a parser or a filepath so one can be inferred.`

Cuando inicias `modyo-cli demo <widget_name>` un error como este puede ocurrir `No parser and no filepath given, using 'babylon' the parser now but this will throw an error in the future. Please specify a parser or a filepath so one can be inferred.`

Para arreglar este error, modifica en el archivo `node_modules\vue-loader\lib\template-compiler/index.jx` y reemplaza:

```javascript
// prettify render fn
    if (!isProduction) {
      code = prettier.format(code, { semi: false})
    }
```

por:

```javascript
// prettify render fn
if (!isProduction) {
  code = prettier.format(code, { semi: false, parser: 'babylon' })
}
```

[Según este arreglo en StackOverflow](https://stackoverflow.com/questions/50561649/module-build-failed-error-no-parser-and-no-file-path-given-couldnt-infer-a-p)

Este error ya fue arreglado en `vue-loader`, pero aún no ha sido desplegado [Pull Request](https://github.com/vuejs/vue-loader/pull/1323/files)
