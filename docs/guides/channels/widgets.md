---
search: true
---

# Widgets

En la sección Widgets podrás crear y adjuntar aplicaciones externas a Modyo, con tal de que funcionen directamente en tu página.

Los Widgets se pueden hacer a través de código Javascript, HTML5 y CSS, según se necesite. Además, se podrán usar archivos internos para su implementación, a través de nuestro Gestor de Archivos al que se puede acceder a través de la misma sección.

Lo más importante es que estén correctamente vinculados y sean dinámicos para adaptarse a los distintos sitios que tengamos en nuestra plataforma.

::: danger
Missing description
Templates (JS, CSS, HTML)
Uso de liquid
Tags
Publicación de widgets
Uso de snippets del sitio
Vista previa del widget
:::

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
# Te recomendamos nombrar tus proyectos en formato `PascalCase`
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
# Te recomendamos nombrar tus widgets con formato `PascalCase`
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
| `project start`         | Inicia el servidor dedesarrollo con todos los widgets creados|
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
